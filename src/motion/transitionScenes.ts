import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type TransitionHistory = { contactFinished: boolean }

export function createTransitionScenes(main: HTMLElement, desktop: boolean, history: TransitionHistory) {
  const select = (selector: string) => main.querySelector<HTMLElement>(selector)
  const owned = [...main.querySelectorAll<HTMLElement | SVGElement>('[data-transition-flow], [data-transition-node], [data-transition-visual], [data-transition-portrait], [data-transition-contact], #experiencia .timeline, #experiencia .experience-group')]
  const snapshot = owned.map(element => ({ element, attributes: ['style', 'transform', 'data-svg-origin'].map(name => [name, element.getAttribute(name)] as const) }))
  const animations: gsap.core.Animation[] = []
  const triggers: ScrollTrigger[] = []
  let contactPulse: gsap.core.Tween | undefined
  let destroyed = false
  // Read only when ScrollTrigger refreshes; disclosure transactions already batch it.
  const viewportLine = (ratio: number) => {
    const header = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-block-size')) || 0
    return header + Math.max(0, innerHeight - header) * ratio
  }

  function passage(name: string, from: string, to: string) {
    const source = select(from), destination = select(to)
    if (!source || !destination) return
    const connectors = [...main.querySelectorAll<SVGElement>(`[data-transition-connector="${name}"]`)]
    const timeline = gsap.timeline({ scrollTrigger: {
      trigger: source, start: () => name === 'hero-about'
        // A short Hero can already fit above the entry line on a tall viewport.
        // Keep its full opening pose until the visitor actually starts scrolling.
        ? Math.max(0, source.getBoundingClientRect().bottom + scrollY - viewportLine(0.85))
        : `bottom ${viewportLine(0.85)}px`,
      endTrigger: destination, end: () => `top ${viewportLine(0.3)}px`,
      scrub: true, invalidateOnRefresh: true,
    } })
    animations.push(timeline)
    if (timeline.scrollTrigger) triggers.push(timeline.scrollTrigger)
    connectors.forEach(connector => {
      const flow = connector.querySelector('[data-transition-flow]')
      const node = connector.querySelector('[data-transition-node]')
      if (flow) timeline.fromTo(flow, { strokeDashoffset: 1, opacity: 0.25 }, { strokeDashoffset: 0, opacity: 0.8, ease: 'none', duration: 1 }, 0)
      if (node) timeline.fromTo(node, { opacity: 0.35 }, { opacity: 1, ease: 'none', duration: 1 }, 0)
    })
    return timeline
  }

  const arrival = passage('hero-about', '#inicio', '#sobre')
  const visual = select('[data-transition-visual]')
  if (arrival && visual) arrival.fromTo(visual, { x: 0, y: 0, scale: 1 }, {
    x: desktop ? -24 : 0, y: desktop ? 24 : 8, scale: desktop ? 0.86 : 1,
    transformOrigin: '50% 80%', ease: 'none', duration: 1,
  }, 0)
  const portrait = select('[data-transition-portrait]')
  if (arrival && portrait) arrival.fromTo(portrait, { y: desktop ? 24 : 8, scale: desktop ? 1.04 : 1 }, { y: 0, scale: 1, ease: 'none', duration: 1 }, 0)

  passage('about-projects', '#sobre', '#projetos')
  const career = passage('projects-experience', '#projetos', '#experiencia')
  const rail = select('#experiencia .timeline')
  if (career && rail) career.fromTo(rail, { '--transition-marker': 0 }, { '--transition-marker': 1, ease: 'none', duration: 1 }, 0)
  if (career && desktop) career.fromTo([...main.querySelectorAll('#experiencia .experience-group')], { y: 8 }, { y: 0, ease: 'none', duration: 1 }, 0)

  const closing = passage('contact', '#certificacoes', '#contato')
  const contact = select('[data-transition-contact]')
  if (closing && contact) closing.fromTo(contact, { y: desktop ? 12 : 0, rotate: desktop ? -6 : 0 }, { y: 0, rotate: 0, ease: 'none', duration: 1 }, 0)

  // A single finite accent, driven by scroll. Returning upward never replays it.
  const contactNode = main.querySelector('[data-transition-connector="contact"] [data-transition-node]')
  const contactSection = select('#contato')
  if (contactSection && contactNode && !history.contactFinished) {
    const trigger = ScrollTrigger.create({ trigger: contactSection, start: () => `top ${viewportLine(0.65)}px`, onToggle: self => {
      if (!self.isActive) contactPulse?.totalProgress(1).pause()
    }, onEnter: () => {
      if (history.contactFinished) return
      history.contactFinished = true
      contactPulse = gsap.fromTo(contactNode, { attr: { r: 3 } }, { attr: { r: 7 }, duration: 0.6, repeat: 1, yoyo: true, paused: document.hidden })
      animations.push(contactPulse)
    } })
    triggers.push(trigger)
  }

  return {
    syncVisibility() {
      if (destroyed || !contactPulse || contactPulse.totalProgress() === 1) return
      if (document.hidden) contactPulse.pause()
      else contactPulse.resume()
    },
    destroy() {
      if (destroyed) return
      destroyed = true
      triggers.forEach(trigger => trigger.kill())
      animations.forEach(animation => animation.kill())
      snapshot.forEach(({ element, attributes }) => {
        attributes.forEach(([name, value]) => {
          if (value === null) element.removeAttribute(name)
          else element.setAttribute(name, value)
        })
      })
      contactNode?.setAttribute('r', '3')
    },
  }
}

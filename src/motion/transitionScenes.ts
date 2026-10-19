import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type TransitionHistory = { contactFinished: boolean }

export function createTransitionScenes(main: HTMLElement, desktop: boolean, history: TransitionHistory) {
  const select = (selector: string) => main.querySelector<HTMLElement>(selector)
  const owned = [...main.querySelectorAll<HTMLElement | SVGElement>('[data-transition-flow], [data-transition-node], [data-transition-visual], [data-transition-portrait], [data-contact-field], [data-contact-signal], #experiencia .timeline, #experiencia .experience-group')]
  const snapshot = owned.map(element => ({ element, attributes: ['style', 'transform', 'data-svg-origin', 'stroke-dashoffset'].map(name => [name, element.getAttribute(name)] as const) }))
  const animations: gsap.core.Animation[] = []
  const triggers: ScrollTrigger[] = []
  let contactScene: gsap.core.Timeline | undefined
  let contactAdvanced = false
  let frame = 0
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

  passage('contact', '#certificacoes', '#contato')
  const contactSection = select('#contato')
  const field = select('[data-contact-field]')
  const signal = select('[data-contact-signal]')
  const contactSnapshot = snapshot.filter(({ element }) => element === field || element === signal)
  function restoreContact() {
    contactSnapshot.forEach(({ element, attributes }) => attributes.forEach(([name, value]) => {
      if (value === null) element.removeAttribute(name)
      else element.setAttribute(name, value)
    }))
  }
  function finishContact() {
    if (destroyed || !contactScene) return
    history.contactFinished = true
    contactScene.pause()
    cancelAnimationFrame(frame)
    frame = 0
    restoreContact()
  }
  function syncContact() {
    if (destroyed || !contactScene || history.contactFinished || !contactSection) return
    const rect = contactSection.getBoundingClientRect()
    if (document.hidden || rect.top >= viewportLine(0.8) || rect.bottom <= viewportLine(0)) contactScene.pause()
    else contactScene.play()
  }
  if (contactSection && field && signal && !history.contactFinished) {
    contactScene = gsap.timeline({ paused: true, onComplete: finishContact, onUpdate: () => {
      // An actual painted frame consumes playback, not StrictMode's setup tick.
      if (frame || contactAdvanced) return
      frame = requestAnimationFrame(() => {
        frame = 0
        if (!destroyed && !document.hidden && (contactScene?.time() ?? 0) > 0) contactAdvanced = true
      })
    } })
    contactScene.fromTo(field, { opacity: 0.55 }, { opacity: 1, duration: 0.6, ease: 'sine.out', immediateRender: false }, 0)
      .fromTo(signal, { attr: { 'stroke-dashoffset': 1 }, opacity: 0 }, { opacity: 0.65, duration: 0.2, immediateRender: false }, 0.6)
      .to(signal, { attr: { 'stroke-dashoffset': 0 }, duration: 1.4, ease: 'none' }, 0.8)
      .to(signal, { opacity: 0, duration: 0.6, ease: 'sine.inOut' }, 2.2)
    animations.push(contactScene)
    triggers.push(ScrollTrigger.create({ trigger: contactSection,
      start: () => `top ${viewportLine(0.8)}px`, end: () => `bottom ${viewportLine(0)}px`,
      onToggle: syncContact, onRefresh: syncContact,
    }))
    contactSection.addEventListener('focusin', finishContact)
    syncContact()
  }

  return {
    syncVisibility() {
      syncContact()
    },
    destroy() {
      if (destroyed) return
      destroyed = true
      if (contactAdvanced) history.contactFinished = true
      cancelAnimationFrame(frame)
      contactSection?.removeEventListener('focusin', finishContact)
      triggers.forEach(trigger => trigger.kill())
      animations.forEach(animation => animation.kill())
      snapshot.forEach(({ element, attributes }) => {
        attributes.forEach(([name, value]) => {
          if (value === null) element.removeAttribute(name)
          else element.setAttribute(name, value)
        })
      })
    },
  }
}

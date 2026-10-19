import { gsap } from 'gsap'

// The rail tracks reading through the page, never academic completion.
export function createEducationScene(main: HTMLElement, desktop: boolean) {
  const timeline = main.querySelector<HTMLElement>('[data-education-timeline]')
  const entries = timeline ? [...timeline.querySelectorAll<HTMLElement>('[data-education-entry]')] : []
  const progress = timeline?.querySelector<HTMLElement>('[data-education-progress]')
  if (!timeline || !progress || !entries.length) return { destroy() {} }

  const owned = [...timeline.querySelectorAll<HTMLElement>('[data-education-progress], [data-education-marker], [data-education-card]')]
  const snapshot = owned.map(element => ({ element, style: element.getAttribute('style') }))
  const animations: gsap.core.Timeline[] = []
  let destroyed = false

  // Measurements run at refresh, using untransformed marker offsets.
  function boundary(entry: HTMLElement, fraction: number) {
    const header = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-block-size')) || 0
    const marker = entry.querySelector<HTMLElement>('[data-education-marker]')
    const offset = marker ? marker.offsetTop + marker.offsetHeight / 2 : 0
    return `top ${header + Math.max(0, innerHeight - header) * fraction - offset}px`
  }

  const rail = gsap.timeline({ scrollTrigger: {
    trigger: entries[0], start: () => boundary(entries[0], 0.75),
    endTrigger: entries[entries.length - 1], end: () => boundary(entries[entries.length - 1], 0.45),
    scrub: true, invalidateOnRefresh: true,
  } })
  rail.fromTo(progress, { scaleY: 0 }, { scaleY: 1, ease: 'none', duration: 1 })
  animations.push(rail)

  entries.forEach(entry => {
    const marker = entry.querySelector('[data-education-marker]')
    const card = entry.querySelector('[data-education-card]')
    const arrival = gsap.timeline({ scrollTrigger: {
      trigger: entry, start: () => boundary(entry, 0.75), end: () => boundary(entry, 0.45),
      scrub: true, invalidateOnRefresh: true,
    } })
    if (marker) arrival.fromTo(marker, { scale: 0.8, opacity: 0.55 }, { scale: 1, opacity: 1, ease: 'none', duration: 1 }, 0)
    if (card) arrival.fromTo(card, { y: desktop ? 16 : 8 }, { y: 0, ease: 'none', duration: 1 }, 0)
    animations.push(arrival)
  })

  return {
    destroy() {
      if (destroyed) return
      destroyed = true
      animations.forEach(animation => { animation.scrollTrigger?.kill(); animation.kill() })
      snapshot.forEach(({ element, style }) => {
        if (style === null) element.removeAttribute('style')
        else element.setAttribute('style', style)
      })
    },
  }
}

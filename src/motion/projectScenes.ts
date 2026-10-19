import { gsap } from 'gsap'

// These are conceptual drawings. Progress never represents research results,
// recorded speech or training of the manual AND-gate Perceptron.
export function createProjectScenes(main: HTMLElement, desktop: boolean) {
  const timelines: gsap.core.Timeline[] = []
  const owned = [...main.querySelectorAll('[data-project-stage], [data-project-flow], [data-project-signal], [data-wave-bar]')]
  const snapshot = owned.map(element => ({ element, attributes: ['style', 'transform', 'data-svg-origin', 'cx', 'cy'].map(name => [name, element.getAttribute(name)] as const) }))
  let destroyed = false

  for (const artwork of main.querySelectorAll<HTMLElement>('[data-project-scene]')) {
    const surface = artwork.closest('[data-project]')?.querySelector('.project-card__main')
    if (!surface) continue
    const one = (selector: string) => artwork.querySelector(selector)
    const all = (selector: string) => [...artwork.querySelectorAll(selector)]
    const viewportLine = (fraction: number) => {
      const header = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-block-size')) || 0
      return header + Math.max(0, innerHeight - header) * fraction
    }
    const timeline = gsap.timeline({ scrollTrigger: {
      trigger: surface, start: () => `top ${viewportLine(0.85)}px`, end: () => `bottom ${viewportLine(0.25)}px`,
      scrub: true, invalidateOnRefresh: true,
    } })
    timelines.push(timeline)

    function flow(selector: string, at: number, duration = 0.3) {
      const elements = all(selector)
      if (elements.length) timeline.fromTo(elements, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration, ease: 'none' }, at)
    }
    function stage(selector: string, at: number) {
      const elements = all(selector)
      if (elements.length) timeline.fromTo(elements, { opacity: 0.35 }, { opacity: 1, duration: 0.25, ease: 'none' }, at)
    }
    function signal(selector: string, points: readonly (readonly [number, number])[], at: number, duration: number) {
      const element = one(selector)
      if (!element || points.length < 2) return
      timeline.set(element, { opacity: 1, attr: { cx: points[0][0], cy: points[0][1] } }, at)
      const segment = duration / (points.length - 1)
      points.slice(1).forEach(([cx, cy], index) => {
        timeline.fromTo(element, { attr: { cx: points[index][0], cy: points[index][1] } }, {
          attr: { cx, cy }, ease: 'none', duration: segment, immediateRender: false,
        }, at + index * segment)
      })
      timeline.to(element, { opacity: 0, duration: 0.08, ease: 'none' }, at + duration)
    }

    if (artwork.dataset.projectScene === 'clinical') {
      stage('[data-project-stage="document"]', 0)
      flow('[data-project-flow]', 0.15, 0.45)
      signal('[data-project-signal="upper"]', [[216, 160], [304, 160], [304, 96], [392, 96]], 0.2, 0.4)
      if (desktop) signal('[data-project-signal="lower"]', [[216, 160], [304, 160], [304, 224], [392, 224]], 0.28, 0.4)
      stage('[data-project-stage="cells"]', 0.6)
    } else if (artwork.dataset.projectScene === 'speech') {
      // Fixed amplitudes: interpolation is a deterministic function of scroll.
      all('[data-wave-bar]').forEach((bar, index) => {
        timeline.fromTo(bar, { scaleY: 0.68 + (index % 5) * 0.05, transformOrigin: '50% 50%' }, {
          scaleY: 1, duration: 0.32, ease: 'none',
        }, desktop ? index / 180 : 0)
      })
      flow('[data-project-flow="audio"]', 0.35)
      stage('[data-project-stage="audio"]', 0.55)
      if (desktop) {
        flow('[data-project-flow="language"]', 0.45)
        stage('[data-project-stage="language"]', 0.65)
      }
    } else if (artwork.dataset.projectScene === 'network') {
      flow('[data-project-flow="input"]', 0, 0.35)
      signal('[data-project-signal="first"]', [[198, 104], [296, 144]], 0.08, 0.25)
      signal('[data-project-signal="second"]', [[198, 216], [296, 176]], 0.08, 0.25)
      stage('[data-project-stage="sum"]', 0.3)
      flow('[data-project-flow="output"]', 0.55, 0.3)
      signal('[data-project-signal="output"]', [[384, 160], [472, 160]], 0.58, 0.24)
      stage('[data-project-stage="output"]', 0.72)
    }
    // A shared normalized end keeps stages comparable without altering layout.
    timeline.to({}, { duration: 0.03 }, 0.97)
  }

  return {
    destroy() {
      if (destroyed) return
      destroyed = true
      timelines.forEach(timeline => { timeline.scrollTrigger?.kill(); timeline.kill() })
      snapshot.forEach(({ element, attributes }) => attributes.forEach(([name, value]) => {
        if (value === null) element.removeAttribute(name)
        else element.setAttribute(name, value)
      }))
    },
  }
}

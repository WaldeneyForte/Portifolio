import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Conceptual drawings, never recorded speech, research results or model training.
export function createProjectScenes(main: HTMLElement, desktop: boolean, history: Set<string>) {
  const scenes: { card: HTMLElement; sync: () => void; finish: () => void; destroy: () => void }[] = []

  for (const artwork of main.querySelectorAll<HTMLElement>('[data-project-scene]')) {
    const card = artwork.closest<HTMLElement>('[data-project]')
    const svg = artwork.querySelector('svg')
    if (!card?.dataset.project || !svg) continue
    const id = card.dataset.project
    const accent = getComputedStyle(main).getPropertyValue('--color-accent-bright').trim()
    const all = (selector: string) => [...artwork.querySelectorAll<SVGElement>(selector)]
    const owned = all('[data-project-stage], [data-project-flow], [data-project-signal], [data-wave-bar]')
    const snapshot = owned.map(element => ({ element, attributes: ['style', 'transform', 'data-svg-origin', 'cx', 'cy'].map(name => [name, element.getAttribute(name)] as const) }))
    const previousState = artwork.getAttribute('data-motion-state')
    let destroyed = false
    let started = false
    let advanced = false
    let frame = 0
    let finished = history.has(id)

    function restore() {
      snapshot.forEach(({ element, attributes }) => attributes.forEach(([name, value]) => {
        if (value === null) element.removeAttribute(name)
        else element.setAttribute(name, value)
      }))
    }
    function cancelFrame() {
      cancelAnimationFrame(frame)
      frame = 0
    }
    // GSAP can update synchronously during setup. Only a browser frame consumes
    // playback; StrictMode's immediate cleanup must not skip the real intro.
    function recordFrame() {
      if (frame || advanced || destroyed || finished) return
      frame = requestAnimationFrame(() => {
        frame = 0
        if (!destroyed && !document.hidden && timeline.time() > 0) advanced = true
      })
    }
    function finish() {
      if (destroyed) return
      finished = true
      history.add(id)
      timeline.pause()
      cancelFrame()
      restore()
      artwork.dataset.motionState = 'rest'
    }
    const timeline = gsap.timeline({ paused: true, onUpdate: recordFrame, onComplete: finish })

    function pulse(selector: string, at: number, hold = 0.35) {
      const elements = all(selector)
      const opacity = elements.map(element => Number.parseFloat(getComputedStyle(element).opacity))
      timeline.to(elements, { opacity: 1, duration: 0.18, ease: 'sine.out' }, at)
        .to(elements, { opacity: index => opacity[index], duration: 0.25, ease: 'sine.inOut' }, at + hold)
    }
    function halo(stage: string, at: number, hold = 0.35) {
      const elements = all(`[data-project-stage="${stage}"]`)
      timeline.to(elements, { opacity: 0.9, duration: 0.18, ease: 'sine.out' }, at)
        .to(elements, { opacity: 0, duration: 0.25, ease: 'sine.inOut' }, at + hold)
    }
    function flow(name: string, at: number, duration: number) {
      const elements = all(`[data-project-flow="${name}"]`)
      // CSS owns the resting offset; retain subpixel progress on pathLength=1.
      timeline.fromTo(elements, { strokeDashoffset: 1, opacity: 0.9 }, {
        strokeDashoffset: 0, autoRound: false, opacity: 0.9, duration, ease: 'none', immediateRender: false,
      }, at).to(elements, { opacity: 0, duration: 0.25 }, at + duration)
    }
    function signal(name: string, points: readonly (readonly [number, number])[], at: number, duration: number) {
      const element = artwork.querySelector(`[data-project-signal="${name}"]`)
      if (!element) return
      const lengths = points.slice(1).map(([x, y], i) => Math.hypot(x - points[i][0], y - points[i][1]))
      const total = lengths.reduce((sum, length) => sum + length, 0)
      timeline.set(element, { opacity: 1, attr: { cx: points[0][0], cy: points[0][1] } }, at)
      let time = at
      points.slice(1).forEach(([cx, cy], index) => {
        const segment = duration * lengths[index] / total
        timeline.fromTo(element, { attr: { cx: points[index][0], cy: points[index][1] } }, {
          attr: { cx, cy }, duration: segment, ease: 'none', immediateRender: false,
        }, time)
        time += segment
      })
      timeline.to(element, { opacity: 0, duration: 0.08 }, at + duration)
    }

    if (artwork.dataset.projectScene === 'clinical') {
      halo('document-accent', 0, 0.65)
      pulse('[data-project-stage="document"]', 0, 0.65)
      flow('entry', 0.4, 0.6)
      signal('entry', [[216, 160], [304, 160]], 0.4, 0.6)
      halo('processing', 1, 0.35)
      flow('upper', 1.5, 0.36)
      signal('upper', [[304, 160], [304, 96], [392, 96]], 1.5, 0.36)
      halo('upper-accent', 1.86, 0.6)
      flow('lower', 1.94, 0.36)
      signal('lower', [[304, 160], [304, 224], [392, 224]], 1.94, 0.36)
      halo('lower-accent', 2.3, 0.4)
      pulse('[data-project-stage$="-cell"]', 2.3, 0.45)
      timeline.to({}, { duration: 0.6 }, 2.8)
      if (!desktop) timeline.timeScale(3.4 / 2.6)
    } else if (artwork.dataset.projectScene === 'speech') {
      // Neighbouring fixed envelopes suggest syllables separated by a pause.
      // Transform visible bars around their individual SVG centre, without React.
      const bars = all('[data-wave-bar]').filter(bar => getComputedStyle(bar).display !== 'none')
      const envelopes = [
        [0.62, 0.72, 0.9, 1.05, 0.96, 0.78, 0.64],
        [0.72, 0.58, 0.55, 0.6, 0.65, 0.58, 0.62],
        [0.92, 1.04, 0.88, 0.68, 0.62, 0.8, 0.98],
      ]
      bars.forEach((bar, index) => {
        const offset = index * (desktop ? 0.035 : 0.05)
        timeline.to(bar, { scaleY: envelopes[0][index % 7], svgOrigin: `${bar.getAttribute('x1')} 160`, duration: 0.4, ease: 'sine.inOut' }, 0.1 + offset)
          .to(bar, { scaleY: envelopes[1][index % 7], duration: 0.35, ease: 'sine.inOut' }, 1.3)
          .to(bar, { scaleY: envelopes[2][index % 7], duration: 0.4, ease: 'sine.inOut' }, 1.7 + offset)
          .to(bar, { scaleY: 1, duration: 0.6, ease: 'sine.inOut' }, 3.2)
      })
      const accents = bars.filter((_, index) => index === 5 || index === 10)
      const strokes = accents.map(bar => getComputedStyle(bar).stroke)
      const opacities = accents.map(bar => Number.parseFloat(getComputedStyle(bar).opacity))
      timeline.to(accents, { stroke: accent, opacity: 1, duration: 0.25 }, 2.1)
        .to(accents, { stroke: index => strokes[index], opacity: index => opacities[index], duration: 0.6, ease: 'sine.inOut' }, 3.2)
      flow('audio', 2.7, 0.35)
      pulse('[data-project-stage="audio"]', 3, 0.25)
      if (desktop) { flow('language', 2.8, 0.35); pulse('[data-project-stage="language"]', 3.1, 0.25) }
      if (!desktop) timeline.timeScale(3.8 / 2.8)
    } else if (artwork.dataset.projectScene === 'network') {
      halo('input', 0, 0.7)
      flow('input', 0.4, 0.7)
      signal('first', [[198, 104], [296, 144]], 0.4, 0.7)
      signal('second', [[198, 216], [296, 176]], 0.4, 0.7)
      halo('sum', 1.1, 0.35)
      flow('output', 1.6, 0.6)
      signal('output', [[384, 160], [472, 160]], 1.6, 0.6)
      halo('output', 2.2, 0.5)
      const label = all('[data-project-stage="and"]')
      const fill = getComputedStyle(label[0]).fill
      timeline.to(label, { fill: accent, duration: 0.2 }, 2.2)
        .to(label, { fill, duration: 0.5, ease: 'sine.inOut' }, 2.7)
      timeline.to({}, { duration: 0.5 }, 2.7)
      if (!desktop) timeline.timeScale(3.2 / 2.6)
    }

    function sync() {
      if (destroyed || finished) return
      const rect = svg!.getBoundingClientRect()
      const header = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-block-size')) || 0
      const available = Math.max(0, innerHeight - header)
      const visible = Math.max(0, Math.min(rect.bottom, innerHeight) - Math.max(rect.top, header))
      const canStart = rect.top <= header + available * 0.8 && visible >= Math.min(rect.height, available) * 0.3
      const onScreen = !document.hidden && visible > 0
      if (!onScreen) {
        timeline.pause()
        cancelFrame()
        if (started) artwork.dataset.motionState = 'suspended'
      } else if (started || canStart) {
        started = true
        artwork.dataset.motionState = 'playing'
        timeline.play()
      }
    }
    const visibility = ScrollTrigger.create({
      trigger: svg, start: 'top bottom', end: 'bottom top', onUpdate: sync, onRefresh: sync,
    })
    artwork.dataset.motionState = finished ? 'rest' : 'idle'
    if (card.contains(document.activeElement)) finish()
    else sync()
    scenes.push({ card, sync, finish, destroy() {
      if (destroyed) return
      if (advanced) history.add(id)
      destroyed = true
      cancelFrame()
      visibility.kill()
      timeline.kill()
      restore()
      if (previousState === null) artwork.removeAttribute('data-motion-state')
      else artwork.setAttribute('data-motion-state', previousState)
    } })
  }
  return {
    syncVisibility() { scenes.forEach(scene => scene.sync()) },
    finishCard(card: HTMLElement | null) { scenes.find(scene => scene.card === card)?.finish() },
    destroy() { scenes.forEach(scene => scene.destroy()) },
  }
}

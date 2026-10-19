import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { graphEdgeAppearance, heroGraphDesktop, heroGraphMobile, type HeroNodeId } from '../data/heroGraph'
import { graphPositions, graphSegment, graphSignal } from './graphGeometry'

type HeroHistory = { finished: boolean }

// Only this scene writes graph coordinates. Cursor offsets, links, halos and
// signals share the same sampled geometry; React never updates on a frame.
export function createHeroScene(hero: HTMLElement, wide: boolean, pointer: boolean, history: HeroHistory) {
  const profile = wide ? heroGraphDesktop : heroGraphMobile
  const svg = hero.querySelector<SVGSVGElement>(`[data-graph-profile="${profile.id}"]`)
  if (!svg) return
  const nodes = profile.nodes.map(node => ({ node, element: svg.querySelector<SVGCircleElement>(`[data-node="${node.id}"]`)! }))
  const edges = profile.edges.map(edge => ({ edge, element: svg.querySelector<SVGLineElement>(`[data-edge="${edge.id}"]`)! }))
  const halos = profile.nodes.flatMap(node => {
    const element = svg.querySelector<SVGCircleElement>(`[data-node-ref="${node.id}"]`)
    return element ? [{ node, element }] : []
  })
  const signals = profile.routes.map(route => ({ route, element: svg.querySelector<SVGCircleElement>(`[data-signal="${route.id}"]`)! }))
  const signalLayer = svg.querySelector<SVGGElement>('[data-graph-layer="signals"]')
  if (!signalLayer || [...nodes, ...edges, ...signals].some(item => !item.element)) return

  const mutable = [...nodes, ...edges, ...halos, ...signals].map(item => item.element)
  const snapshot = [...mutable, signalLayer].map(element => ({ element, attributes: ['style', 'cx', 'cy', 'r', 'x1', 'y1', 'x2', 'y2', 'opacity'].map(name => [name, element.getAttribute(name)] as const) }))
  const previousState = svg.getAttribute('data-motion-state')
  const restore = () => snapshot.forEach(({ element, attributes }) => attributes.forEach(([name, value]) => {
    if (value === null) element.removeAttribute(name)
    else element.setAttribute(name, value)
  }))

  const events = new AbortController()
  const detailed = wide && pointer
  const duration = detailed ? 4 : 2.4
  const model = { morph: 1, reveal: 1, time: duration }
  const cursor = { x: 240, y: profile.height / 2, strength: 0 }
  let ended = history.finished || Boolean(location.hash) || scrollY > 24
  let destroyed = false
  let queued = false
  let advanced = false
  let viewedFrame = 0

  function render() {
    if (destroyed) return
    if (ended && cursor.strength < 0.0001) {
      restore()
      return
    }
    const base = graphPositions(profile.nodes, model.morph)
    const offsets = new Map<HeroNodeId, { x: number; y: number }>()
    if (cursor.strength) for (const node of profile.nodes) {
      const position = base.get(node.id)!
      const dx = cursor.x - position.x, dy = cursor.y - position.y
      const distance = Math.hypot(dx, dy)
      const weight = Math.max(0, 1 - distance / 180) ** 2 * 4 * cursor.strength
      offsets.set(node.id, { x: dx / Math.max(1, distance) * weight, y: dy / Math.max(1, distance) * weight })
    }
    const positions = cursor.strength ? graphPositions(profile.nodes, model.morph, offsets) : base
    const pulses: { x: number; y: number }[] = []
    signalLayer!.setAttribute('opacity', '1')
    signals.forEach(({ route, element }, index) => {
      // Time windows deliberately end: there is no ambient loop after the intro.
      const windows = detailed ? (index ? [[2.5, 3.4]] : [[1.6, 2.5]]) : (index ? [] : [[1.4, 2.1]])
      const active = !ended && windows.find(([start, end]) => model.time >= start && model.time < end)
      element.style.opacity = active ? '1' : '0'
      if (!active) return
      const position = graphSignal(route.nodes, (model.time - active[0]) / (active[1] - active[0]), positions)
      element.setAttribute('cx', String(position.x))
      element.setAttribute('cy', String(position.y))
      pulses.push(position)
    })
    nodes.forEach(({ node, element }, index) => {
      const position = positions.get(node.id)!
      const activation = pulses.reduce((value, pulse) => Math.max(value, Math.max(0, 1 - Math.hypot(pulse.x - position.x, pulse.y - position.y) / 20)), 0)
      element.setAttribute('cx', String(position.x))
      element.setAttribute('cy', String(position.y))
      element.setAttribute('r', String(node.radius + activation * 1.5))
      element.style.opacity = String(gsap.utils.clamp(0, 1, (model.reveal - index * 0.018) * 1.3))
    })
    edges.forEach(({ edge, element }) => {
      const segment = graphSegment(edge, positions)
      element.setAttribute('x1', String(segment.from.x))
      element.setAttribute('y1', String(segment.from.y))
      element.setAttribute('x2', String(segment.to.x))
      element.setAttribute('y2', String(segment.to.y))
      element.style.opacity = String(graphEdgeAppearance[edge.importance].opacity * gsap.utils.clamp(0, 1, (model.reveal - 0.15) / 0.85))
    })
    halos.forEach(({ node, element }) => {
      const position = positions.get(node.id)!
      element.setAttribute('cx', String(position.x))
      element.setAttribute('cy', String(position.y))
      const activation = pulses.reduce((value, pulse) => Math.max(value, Math.max(0, 1 - Math.hypot(pulse.x - position.x, pulse.y - position.y) / 24)), 0)
      element.style.opacity = String(model.reveal * (0.22 + activation * 0.36))
    })
  }

  // Batch timeline/quickTo updates into one render on GSAP's existing ticker.
  // The callback removes itself after one draw; there is no idle render loop.
  function flush() {
    gsap.ticker.remove(flush)
    queued = false
    render()
  }
  function requestRender() {
    if (destroyed || queued) return
    queued = true
    gsap.ticker.add(flush)
    // GSAP can synchronously wake its ticker during StrictMode's setup/cleanup.
    // Only a browser frame may consume the intro; this is not an ongoing loop.
    if (!ended && !advanced && !viewedFrame) viewedFrame = requestAnimationFrame(() => {
      viewedFrame = 0
      if (!destroyed && !ended && !document.hidden && model.time > 0) advanced = true
    })
  }
  function cancelRender() {
    gsap.ticker.remove(flush)
    queued = false
    cancelAnimationFrame(viewedFrame)
    viewedFrame = 0
  }

  function finish() {
    if (destroyed) return
    ended = true
    history.finished = true
    intro?.pause()
    model.morph = 1
    model.reveal = 1
    model.time = duration
    cursor.strength = 0
    cancelRender()
    restore()
    svg!.dataset.motionState = 'rest'
  }

  const intro = gsap.timeline({ paused: true, onUpdate: requestRender, onComplete: finish })
  if (!ended) {
    model.morph = model.reveal = model.time = 0
    intro.to(model, { reveal: 1, duration: detailed ? 0.6 : 0.4, ease: 'power2.out' }, 0)
      .to(model, { morph: 1, duration: 1, ease: 'sine.inOut' }, detailed ? 0.6 : 0.4)
      .to(model, { time: duration, duration, ease: 'none' }, 0)
    svg.dataset.motionState = 'intro'
    render()
  } else finish()

  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.3, ease: 'power2.out', onUpdate: requestRender })
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.3, ease: 'power2.out', onUpdate: requestRender })
  const strengthTo = gsap.quickTo(cursor, 'strength', { duration: 0.3, ease: 'power2.out', onUpdate: requestRender })
  const pointerTweens = [xTo.tween, yTo.tween, strengthTo.tween]

  function resetCursor() {
    pointerTweens.forEach(tween => tween.pause())
    cursor.strength = 0
    cancelRender()
    render()
  }
  function syncVisibility() {
    if (destroyed) return
    if (ended && cursor.strength === 0) return
    const rect = svg!.getBoundingClientRect()
    const visible = !document.hidden && rect.bottom > 0 && rect.top < innerHeight
    if (!visible) {
      intro.pause()
      resetCursor()
      svg!.dataset.motionState = ended ? 'rest' : 'suspended'
    } else if (!ended) {
      svg!.dataset.motionState = 'intro'
      intro.play()
    }
  }
  if (pointer && wide) {
    hero.addEventListener('pointermove', event => {
      if (!ended || document.hidden || event.pointerType === 'touch') return
      const rect = svg!.getBoundingClientRect()
      const scale = Math.min(rect.width / profile.width, rect.height / profile.height)
      if (!scale || rect.bottom <= 0 || rect.top >= innerHeight) return
      xTo((event.clientX - rect.left - (rect.width - profile.width * scale) / 2) / scale)
      yTo((event.clientY - rect.top - (rect.height - profile.height * scale) / 2) / scale)
      strengthTo(1)
    }, { passive: true, signal: events.signal })
    hero.addEventListener('pointerleave', () => strengthTo(0), { signal: events.signal })
  }
  const interrupt = () => {
    if (!ended && (scrollY > 24 || location.hash)) finish()
    syncVisibility()
  }
  window.addEventListener('scroll', interrupt, { passive: true, signal: events.signal })
  window.addEventListener('hashchange', interrupt, { signal: events.signal })
  window.addEventListener('pageshow', interrupt, { signal: events.signal })
  const visibility = ScrollTrigger.create({ trigger: hero, start: 'top bottom', end: 'bottom top', onToggle: syncVisibility })
  syncVisibility()

  return {
    finish,
    syncVisibility,
    destroy() {
      if (destroyed) return
      // StrictMode's immediate setup/cleanup has not consumed an intro. A real
      // media/preference change after playback must never restart it.
      if (advanced) history.finished = true
      destroyed = true
      events.abort()
      visibility.kill()
      intro.kill()
      pointerTweens.forEach(tween => tween.kill())
      cancelRender()
      restore()
      if (previousState === null) svg!.removeAttribute('data-motion-state')
      else svg!.setAttribute('data-motion-state', previousState)
    },
  }
}

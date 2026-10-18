import { useRef, type RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type PortfolioMotionProps = { root: RefObject<HTMLElement | null> }

// Optional enhancement: no CSS hides content before this module loads.
export default function PortfolioMotion({ root }: PortfolioMotionProps) {
  const introFinished = useRef(false)

  useGSAP(() => {
    const main = root.current
    if (!main) return
    const media = gsap.matchMedia()

    media.add({
      motion: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 64rem) and (min-height: 40rem) and (hover: hover) and (pointer: fine)',
    }, (context) => {
      if (!context.conditions?.motion) return
      const desktop = Boolean(context.conditions.desktop)
      const select = <T extends Element>(selector: string) => main.querySelector<T>(selector)
      const all = <T extends Element>(selector: string) => [...main.querySelectorAll<T>(selector)]
      const events = new AbortController()
      // A paused fromTo can retain its startAt styles across media changes.
      // Keep the original attributes for the elements owned by this enhancement.
      const original = all('.section-heading, .contact-intro, .about-portrait, [data-hero-part], #inicio .neural-graph, #inicio [data-graph-layer], [data-project-part="artwork"], [data-artwork-layer="diagram"], #contato .neural-graph')
        .map((element) => ({ element, attributes: ['style', 'transform', 'data-svg-origin'].map((name) => [name, element.getAttribute(name)] as const) }))
      const finite: { animation: gsap.core.Animation; area: Element; sync: () => void }[] = []
      let refreshFrame = 0

      // Each finite sequence runs only while its area is on screen and the tab is visible.
      function watch(animation: gsap.core.Animation, area: Element) {
        animation.pause()
        const sync = () => {
          const rect = area.getBoundingClientRect()
          if (document.hidden || rect.top >= innerHeight * 0.9 || rect.bottom <= 0) animation.pause()
          else if (animation.totalProgress() < 1) animation.play()
        }
        finite.push({ animation, area, sync })
        ScrollTrigger.create({ trigger: area, start: 'top 90%', end: 'bottom top', onToggle: sync })
        sync()
      }

      function reveal(element: Element, distance = 10) {
        watch(gsap.fromTo(element, { y: distance, opacity: 0.88 }, {
          y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', immediateRender: false,
        }), element)
      }

      const hero = select<HTMLElement>('#inicio')
      if (hero && !introFinished.current && !location.hash && scrollY < 20) {
        const intro = gsap.timeline({ paused: true, onComplete: () => { introFinished.current = true } })
        intro.fromTo(all('[data-hero-part="identity"], [data-hero-part="copy"]'),
          { y: 8, opacity: 0.92 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', immediateRender: false }, 0)
        // Moving the whole network keeps every edge attached to its nodes.
        intro.fromTo(select('#inicio [data-graph-layer="network"]'),
          { y: -3 }, { y: 0, duration: 3.6, ease: 'sine.inOut', immediateRender: false }, 0)
        intro.fromTo(select('#inicio [data-graph-layer="edges"]'),
          { opacity: 0.55 }, { opacity: 1, duration: 3.2, ease: 'sine.out', immediateRender: false }, 0)
        intro.fromTo(select('#inicio [data-graph-layer="halos"]'),
          { opacity: 0.4 }, { opacity: 1, duration: 3.6, ease: 'sine.out', immediateRender: false }, 0)
        watch(intro, hero)
      }

      all('.section-heading, .contact-intro').forEach((element) => reveal(element, desktop ? 12 : 6))
      const portrait = select('.about-portrait')
      if (portrait) reveal(portrait, 8)

      if (desktop) {
        for (const card of all<HTMLElement>('[data-project]')) {
          const diagram = card.querySelector('[data-artwork-layer="diagram"]')
          if (!diagram) continue
          gsap.fromTo(diagram, { y: 10, scale: 0.98, transformOrigin: '50% 50%' }, {
            y: -10, scale: 1.02, ease: 'none', immediateRender: false,
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
          })
        }
        const visual = select('#inicio [data-hero-part="visual"]')
        if (visual) gsap.to(visual, { y: 16, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
        const contactGraph = select('#contato .neural-graph')
        if (contactGraph) gsap.fromTo(contactGraph, { y: 12 }, {
          y: -12, ease: 'none', immediateRender: false,
          scrollTrigger: { trigger: '#contato', start: 'top bottom', end: 'bottom bottom', scrub: true },
        })
      } else {
        all('[data-project-part="artwork"]').forEach((element) => reveal(element, 6))
      }

      // Separate targets for cursor (SVG) and scroll (outer visual) avoid transform conflicts.
      const graph = select<SVGSVGElement>('#inicio .neural-graph')
      let resetCursor = () => {}
      if (desktop && hero && graph) {
        const xTo = gsap.quickTo(graph, 'x', { duration: 0.4, ease: 'power2.out' })
        const yTo = gsap.quickTo(graph, 'y', { duration: 0.4, ease: 'power2.out' })
        resetCursor = () => { xTo(0).progress(1).pause(); yTo(0).progress(1).pause() }
        hero.addEventListener('pointermove', (event) => {
          if (document.hidden || event.pointerType === 'touch') return
          const rect = hero.getBoundingClientRect()
          xTo(gsap.utils.clamp(-6, 6, ((event.clientX - rect.left) / rect.width - 0.5) * 12))
          yTo(gsap.utils.clamp(-6, 6, ((event.clientY - rect.top) / rect.height - 0.5) * 12))
        }, { signal: events.signal, passive: true })
        hero.addEventListener('pointerleave', () => { xTo(0); yTo(0) }, { signal: events.signal })
      }

      function syncVisibility() {
        finite.forEach(({ sync }) => sync())
        if (document.hidden) resetCursor()
      }

      // Re-measure layout changes, never scroll events or animation frames.
      function refresh() {
        if (refreshFrame) return
        refreshFrame = requestAnimationFrame(() => {
          refreshFrame = 0
          ScrollTrigger.refresh()
        })
      }
      const observer = new ResizeObserver(refresh)
      observer.observe(main)
      const header = document.querySelector('.site-header')
      if (header) observer.observe(header)
      main.addEventListener('load', refresh, { capture: true, signal: events.signal })
      main.addEventListener('toggle', refresh, { capture: true, signal: events.signal })
      window.addEventListener('pageshow', refresh, { signal: events.signal })
      document.addEventListener('visibilitychange', syncVisibility, { signal: events.signal })
      main.addEventListener('focusin', (event) => {
        if (!(event.target instanceof Element)) return
        const section = event.target.closest('section')
        finite.forEach(({ animation, area }) => {
          if (area === section || area.closest('section') === section) animation.totalProgress(1).pause()
        })
      }, { signal: events.signal })
      refresh()

      return () => {
        events.abort()
        observer.disconnect()
        cancelAnimationFrame(refreshFrame)
        // matchMedia has already reverted its tweens and triggers before cleanup.
        original.forEach(({ element, attributes }) => {
          gsap.set(element, { clearProps: 'transform,opacity,translate,rotate,scale' })
          attributes.forEach(([name, value]) => {
            if (value === null) element.removeAttribute(name)
            else element.setAttribute(name, value)
          })
        })
      }
    }, main)

    return () => media.revert()
  }, { scope: root })

  return null
}

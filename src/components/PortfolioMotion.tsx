import { useRef, type RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createHeroScene } from '../motion/heroScene'
import { createLayoutRefresh } from '../motion/layoutRefresh'
import { createTransitionScenes } from '../motion/transitionScenes'
import { createProjectScenes } from '../motion/projectScenes'
import { createEducationScene } from '../motion/educationScene'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type PortfolioMotionProps = { root: RefObject<HTMLElement | null> }

// Optional enhancement: no CSS hides content before this module loads.
export default function PortfolioMotion({ root }: PortfolioMotionProps) {
  const heroHistory = useRef({ finished: false })
  const transitionHistory = useRef({ contactFinished: false })
  const projectHistory = useRef(new Set<string>())

  useGSAP(() => {
    const main = root.current
    if (!main) return
    const media = gsap.matchMedia()

    media.add({
      motion: '(prefers-reduced-motion: no-preference)',
      wide: '(min-width: 64rem)',
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
      const heroScene = hero ? createHeroScene(hero, Boolean(context.conditions.wide), desktop, heroHistory.current) : undefined
      if (hero && !heroHistory.current.finished && !location.hash && scrollY < 20) {
        const intro = gsap.timeline({ paused: true })
        intro.fromTo(all('[data-hero-part="identity"], [data-hero-part="copy"]'),
          { y: 8, opacity: 0.92 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', immediateRender: false }, 0)
        watch(intro, hero)
      }

      all('.section-heading, .contact-intro').forEach((element) => reveal(element, desktop ? 12 : 6))
      const transitions = createTransitionScenes(main, desktop, transitionHistory.current)

      const projects = createProjectScenes(main, desktop, projectHistory.current)
      const education = createEducationScene(main, desktop)

      function syncVisibility() {
        finite.forEach(({ sync }) => sync())
        heroScene?.syncVisibility()
        transitions.syncVisibility()
        projects.syncVisibility()
      }

      // Refresh restores the current scroll position. While a native anchor is
      // moving, the mobile menu's resize must not cancel that browser animation.
      let anchorPending = false
      let anchorDirty = false
      let anchorTimer = 0
      const layout = createLayoutRefresh(main, () => {
        if (anchorPending) anchorDirty = true
        else ScrollTrigger.refresh()
      })
      function settleAnchor() {
        if (!anchorPending) return
        anchorPending = false
        clearTimeout(anchorTimer)
        if (anchorDirty) {
          anchorDirty = false
          layout.request()
        }
      }
      document.addEventListener('click', (event) => {
        if (!(event.target instanceof Element) || event.defaultPrevented) return
        const link = event.target.closest<HTMLAnchorElement>('a[href]')
        if (!link || link.origin !== location.origin || link.pathname !== location.pathname || link.search !== location.search || !link.hash) return
        const destination = document.getElementById(decodeURIComponent(link.hash.slice(1)))
        if (!destination || !main.contains(destination)) return
        anchorPending = true
        clearTimeout(anchorTimer)
        // Also release for an already aligned destination / browsers without scrollend.
        anchorTimer = window.setTimeout(settleAnchor, 1800)
      }, { signal: events.signal, capture: true })
      document.addEventListener('scrollend', settleAnchor, { signal: events.signal })
      document.addEventListener('visibilitychange', syncVisibility, { signal: events.signal })
      main.addEventListener('focusin', (event) => {
        if (!(event.target instanceof Element)) return
        const section = event.target.closest('section')
        if (section === hero) heroScene?.finish()
        projects.finishCard(event.target.closest<HTMLElement>('[data-project]'))
        finite.forEach(({ animation, area }) => {
          if (area === section || area.closest('section') === section) animation.totalProgress(1).pause()
        })
      }, { signal: events.signal })

      return () => {
        events.abort()
        clearTimeout(anchorTimer)
        layout.destroy()
        transitions.destroy()
        projects.destroy()
        education.destroy()
        heroScene?.destroy()
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

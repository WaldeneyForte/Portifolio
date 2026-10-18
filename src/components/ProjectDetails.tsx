import { useEffect, useRef, type ReactNode } from 'react'
import { useLanguage } from '../i18n/context'
import { beginLayoutChange } from '../motion/layoutRefresh'

type ProjectDetailsProps = {
  id: string
  title: string
  label: string
  children: ReactNode
  additional?: ReactNode
}

export function ProjectDetails({ id, title, label, children, additional }: ProjectDetailsProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const { locale } = useLanguage()

  useEffect(() => {
    const details = detailsRef.current!
    const summary = details.querySelector('summary')!
    const body = details.querySelector<HTMLElement>('.project-details__body')!
    const content = details.querySelector<HTMLElement>('.project-details__content')!
    const preference = matchMedia('(prefers-reduced-motion: reduce)')
    const events = new AbortController()
    const options = { signal: events.signal }
    let animation: Animation | null = null
    let endLayout: (() => void) | undefined
    let targetOpen = details.open
    let expectedWidth = 0
    let expectedHeight = 0

    function cancelAnimation() {
      if (!animation) return
      animation.onfinish = null
      animation.cancel()
      animation = null
    }

    function settle(keepFocusVisible = true) {
      const wasClosing = !targetOpen
      cancelAnimation()
      details.open = targetOpen
      body.style.removeProperty('height')
      body.style.removeProperty('overflow')
      body.inert = false
      delete details.dataset.expansion
      endLayout?.()
      endLayout = undefined

      if (keepFocusVisible && wasClosing && document.activeElement === summary && summary.isConnected) {
        const rect = summary.getBoundingClientRect()
        const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0
        if (rect.top < headerBottom + 12) window.scrollBy({ top: rect.top - headerBottom - 12, behavior: 'instant' })
        else if (rect.bottom > innerHeight - 12) window.scrollBy({ top: rect.bottom - innerHeight + 12, behavior: 'instant' })
      }
    }

    summary.addEventListener('click', event => {
      if (preference.matches || typeof body.animate !== 'function') return
      event.preventDefault()
      const from = details.open ? body.getBoundingClientRect().height : 0
      targetOpen = !targetOpen
      if (!targetOpen && body.contains(document.activeElement)) summary.focus({ preventScroll: true })
      const main = details.closest('main')
      if (!endLayout && main) endLayout = beginLayoutChange(main)
      cancelAnimation()
      details.open = true
      body.inert = !targetOpen
      body.style.height = `${from}px`
      body.style.overflow = 'hidden'
      const size = content.getBoundingClientRect()
      expectedWidth = size.width
      expectedHeight = size.height
      details.dataset.expansion = targetOpen ? 'opening' : 'closing'
      try {
        animation = body.animate([{ height: `${from}px` }, { height: `${targetOpen ? size.height : 0}px` }], {
          duration: 260, easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)', fill: 'both',
        })
        animation.onfinish = () => settle()
      } catch {
        // Native disclosure semantics remain usable if the enhancement fails.
        settle()
      }
    }, options)

    details.addEventListener('toggle', () => {
      if (!animation) targetOpen = details.open
      else if (!details.open) { targetOpen = false; settle() }
    }, options)
    body.addEventListener('focusin', () => { if (animation && targetOpen) settle() }, options)
    const stop = () => { if (animation) settle() }
    window.addEventListener('resize', stop, options)
    preference.addEventListener('change', stop, options)
    const observer = new ResizeObserver(() => {
      if (!animation) return
      const size = content.getBoundingClientRect()
      if (Math.abs(size.width - expectedWidth) > 0.5 || Math.abs(size.height - expectedHeight) > 0.5) settle()
    })
    observer.observe(content)

    return () => {
      events.abort()
      observer.disconnect()
      // A native toggle may still be queued when the locale changes. Without an
      // active enhancement the DOM, rather than the last toggle callback, owns it.
      if (animation) settle(false)
    }
  }, [locale])

  return (
    <details ref={detailsRef} className="project-details">
      <summary aria-controls={`${id}-details`}>
        <span>{label}<span className="sr-only"> — {title}</span></span>
        <span className="project-details__indicator" aria-hidden="true">+</span>
      </summary>
      <div id={`${id}-details`} className="project-details__body">
        <div className={`project-details__content${additional ? ' project-details__content--split' : ''}`}>
          <div className="project-details__description">{children}</div>
          {additional && <div className="project-details__technologies">{additional}</div>}
        </div>
      </div>
    </details>
  )
}

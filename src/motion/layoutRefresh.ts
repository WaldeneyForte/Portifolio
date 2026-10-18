// A shared transaction lets future disclosures animate their height without
// measuring every intermediate frame. Nested transactions release only once.
export function beginLayoutChange(root: HTMLElement): () => void {
  root.dispatchEvent(new Event('portfolio:layout-start'))
  let ended = false
  return () => {
    if (ended) return
    ended = true
    root.dispatchEvent(new Event('portfolio:layout-end'))
  }
}

export function createLayoutRefresh(root: HTMLElement, refresh: () => void) {
  const events = new AbortController()
  const options = { signal: events.signal }
  let depth = 0
  let frame = 0
  let settling = 0
  let dirty = false
  let destroyed = false

  function request() {
    if (destroyed) return
    dirty = true
    if (depth || frame || settling || document.hidden) return
    frame = requestAnimationFrame(() => {
      frame = 0
      if (!destroyed && !depth && !document.hidden && dirty) {
        dirty = false
        refresh()
      }
    })
  }

  root.addEventListener('portfolio:layout-start', () => {
    depth++
    cancelAnimationFrame(frame)
    cancelAnimationFrame(settling)
    frame = 0
    settling = 0
    dirty = true
  }, options)
  root.addEventListener('portfolio:layout-end', () => {
    depth = Math.max(0, depth - 1)
    if (!depth && dirty) {
      // Native toggle tasks and ResizeObserver can report the final height in
      // different rendering phases. Absorb both before measuring once.
      cancelAnimationFrame(settling)
      settling = requestAnimationFrame(() => {
        settling = requestAnimationFrame(() => {
          settling = 0
          request()
        })
      })
    }
  }, options)
  root.addEventListener('load', request, { ...options, capture: true })
  root.addEventListener('toggle', request, { ...options, capture: true })
  window.addEventListener('pageshow', request, options)
  window.addEventListener('resize', request, options)
  document.addEventListener('visibilitychange', request, options)
  document.fonts.addEventListener('loadingdone', request, options)
  void document.fonts.ready.then(request)

  const observer = new ResizeObserver(request)
  observer.observe(root)
  const header = document.querySelector('.site-header')
  if (header) observer.observe(header)
  const language = new MutationObserver(request)
  language.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] })
  request()

  return {
    request,
    destroy() {
      destroyed = true
      events.abort()
      observer.disconnect()
      language.disconnect()
      cancelAnimationFrame(frame)
      cancelAnimationFrame(settling)
    },
  }
}

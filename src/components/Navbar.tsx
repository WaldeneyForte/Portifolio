import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/context'
import { Button } from './Button'
import { Container } from './Container'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { copy: dictionary, content: { profile } } = useLanguage()
  const copy = dictionary.navigation

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    // Mede apenas as linhas de controles; a lista expandida não entra no offset.
    const controls = [...header.querySelectorAll<HTMLElement>('.navbar__brand, .navbar__language, .navbar__toggle')]
    function updateHeaderSize() {
      if (!header) return
      const top = header.getBoundingClientRect().top
      const bottom = Math.max(...controls.filter((control) => control.getClientRects().length > 0).map((control) => control.getBoundingClientRect().bottom))
      const height = toggleRef.current?.getClientRects().length ? bottom - top + 1 : header.getBoundingClientRect().height
      document.documentElement.style.setProperty('--header-block-size', `${Math.ceil(height)}px`)
    }
    const observer = new ResizeObserver(updateHeaderSize)
    observer.observe(header)
    controls.forEach((control) => observer.observe(control))
    updateHeaderSize()
    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--header-block-size')
    }
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 75rem)')
    let navigationFocused = false

    function trackNavigationFocus(event: FocusEvent | PointerEvent) {
      navigationFocused = event.target instanceof Node && Boolean(navRef.current?.contains(event.target))
    }

    function handleBreakpoint() {
      setMenuOpen(false)
      // O navegador pode limpar activeElement ao ocultar os links antes deste evento.
      if (!desktop.matches && navigationFocused) {
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('focusin', trackNavigationFocus)
    document.addEventListener('pointerdown', trackNavigationFocus)
    desktop.addEventListener('change', handleBreakpoint)
    return () => {
      document.removeEventListener('focusin', trackNavigationFocus)
      document.removeEventListener('pointerdown', trackNavigationFocus)
      desktop.removeEventListener('change', handleBreakpoint)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      toggleRef.current?.focus()
    }

    function handleOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false)
        if (navRef.current?.contains(document.activeElement)) toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('pointerdown', handleOutsideClick)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('pointerdown', handleOutsideClick)
    }
  }, [menuOpen])

  return (
    <header
      className="site-header"
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false)
      }}
    >
      <Container className="navbar">
        <a className="navbar__brand" href="#inicio" aria-label={copy.homeLabel} onClick={() => setMenuOpen(false)}>
          {profile.name}<span className="navbar__brand-dot" aria-hidden="true">.</span>
        </a>

        <LanguageSwitcher />

        <Button
          ref={toggleRef}
          className="navbar__toggle"
          variant="ghost"
          aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false">
            {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </Button>

        <nav ref={navRef} id="site-navigation" className="navbar__navigation" aria-label={copy.label} data-open={menuOpen || undefined}>
          <ul className="navbar__links">
            {copy.items.map((item) => (
              <li key={item.id}>
                <a className="navbar__link" href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

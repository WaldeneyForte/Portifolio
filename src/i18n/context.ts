import { createContext, useContext } from 'react'
import type { Dictionary, Locale, SiteContent } from './types'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  copy: Dictionary
  content: SiteContent
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage requires LanguageProvider')
  return value
}

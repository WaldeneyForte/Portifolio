import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext } from './context'
import { contentByLocale, dictionaries } from './index'
import type { Locale } from './types'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt-BR')
  const copy = dictionaries[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = copy.meta.title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', copy.meta.description)
  }, [locale, copy])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, copy, content: contentByLocale[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

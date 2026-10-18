import { useLanguage } from '../i18n/context'
import { Button } from './Button'

export function LanguageSwitcher() {
  const { locale, setLocale, copy } = useLanguage()
  return (
    <div className="language-switcher navbar__language" role="group" aria-label={copy.language.label}>
      <Button variant="ghost" className="language-switcher__option" aria-label={copy.language.portuguese} aria-pressed={locale === 'pt-BR'} onClick={() => setLocale('pt-BR')}>PT</Button>
      <Button variant="ghost" className="language-switcher__option" aria-label={copy.language.english} aria-pressed={locale === 'en'} onClick={() => setLocale('en')}>EN</Button>
    </div>
  )
}

import { useLanguage } from '../i18n/context'
import { Container } from './Container'
import { TextLink } from './TextLink'

export function Footer() {
  const { copy, content: { profile } } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>© {year} {profile.name}</p>
        <TextLink href="#inicio">{copy.footer.backToTop}</TextLink>
      </Container>
    </footer>
  )
}

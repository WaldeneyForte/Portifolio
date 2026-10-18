import { useRef, useState } from 'react'
import { Button } from '../components/Button'
import { ButtonLink } from '../components/ButtonLink'
import { Container } from '../components/Container'
import { NeuralGraph } from '../components/NeuralGraph'
import { useLanguage } from '../i18n/context'

export function Contact() {
  const { copy: dictionary, content: { profile } } = useLanguage()
  const copy = dictionary.contact
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copying' | 'copied' | 'error'>('idle')
  const [copyAttempt, setCopyAttempt] = useState(0)
  const copyingRef = useRef(false)

  async function copyEmail() {
    if (copyingRef.current) return
    copyingRef.current = true
    setCopyAttempt((attempt) => attempt + 1)
    setCopyStatus('copying')
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('error')
    } finally {
      copyingRef.current = false
    }
  }

  return (
    <section id="contato" className="page-section content-section contact-section" aria-labelledby="contato-heading" tabIndex={-1}>
      <div className="contact-decoration" aria-hidden="true"><NeuralGraph /></div>
      <Container>
        <div className="contact-intro">
          <p className="section-heading__eyebrow">{dictionary.sections.contato.title}</p>
          <h2 id="contato-heading" className="contact-title">{copy.title}</h2>
          <p className="contact-description">{copy.description}</p>
        </div>
        <div className="contact-email-panel">
          <p className="contact-email-label">{copy.emailLabel}</p>
          <div className="contact-email-row">
            <p className="contact-email">{profile.email}</p>
            <Button className="contact-copy" onClick={copyEmail} aria-disabled={copyStatus === 'copying'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                {copyStatus === 'copied' ? <path d="m5 12 4 4L19 6" /> : <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V4H4v12h4" /></>}
              </svg>
              {copyStatus === 'copying' ? copy.copyingEmail : copyStatus === 'copied' ? copy.emailCopied : copy.copyEmail}
            </Button>
          </div>
          <p className="contact-feedback" role="status" aria-atomic="true">
            <span key={copyAttempt}>{copyStatus === 'copying' ? copy.copyingEmail : copyStatus === 'copied' ? copy.emailCopied : copyStatus === 'error' ? copy.copyError : ''}</span>
          </p>
        </div>
        <div className="contact-social">
          <p>{copy.socialIntro}</p>
          <div className="action-group">
            <ButtonLink href={profile.links.linkedin} variant="secondary" target="_blank">{copy.linkedin}<span aria-hidden="true">↗</span></ButtonLink>
            <ButtonLink href={profile.links.github} variant="secondary" target="_blank">{copy.github}<span aria-hidden="true">↗</span></ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

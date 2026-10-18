import type { Certification } from '../data/types'
import { useLanguage } from '../i18n/context'
import { Card } from './Card'
import { TextLink } from './TextLink'

export function CertificationCard({ certification }: { certification: Certification }) {
  const { copy: { certifications: copy } } = useLanguage()
  return (
    <Card className="certification-card" aria-labelledby={`${certification.id}-title`} data-certification={certification.id} data-kind={certification.kind}>
      <div className="certification-card__header">
        <span className="certification-card__symbol" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            {certification.kind === 'professional' ? (
              <>
                <path d="M25 18V6H5v20h11M10 11h10M10 15h7M10 19h3" />
                <circle cx="23" cy="22" r="4" />
                <path d="m20.5 25-1 5 3.5-2 3.5 2-1-5" />
              </>
            ) : (
              <>
                <path d="M16 9c-3-3-8-3-12-2v18c4-1 9-1 12 2 3-3 8-3 12-2V7c-4-1-9-1-12 2ZM16 9v18M8 12h4M8 16h4M20 12h4M20 16h4" />
              </>
            )}
          </svg>
        </span>
        <p className="certification-card__issuer">{certification.issuer}</p>
      </div>
      <h4 id={`${certification.id}-title`} className="content-title">{certification.title}</h4>
      <dl className="credential-dates">
        <div><dt>{copy.issued}</dt><dd>{certification.issuedOn ? <time dateTime={certification.issuedOn}>{certification.issuedLabel}</time> : certification.issuedLabel}</dd></div>
        {certification.expiresOn && certification.expiresLabel && <div><dt>{copy.expires}</dt><dd><time dateTime={certification.expiresOn}>{certification.expiresLabel}</time></dd></div>}
      </dl>
      {certification.credentialUrl && <TextLink href={certification.credentialUrl} target="_blank">{copy.credential}</TextLink>}
    </Card>
  )
}

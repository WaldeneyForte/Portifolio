type SectionConnectorProps = {
  scene: 'hero-about' | 'about-projects' | 'projects-experience' | 'contact'
  end?: boolean
}

// Each half stays inside its section's existing padding, outside the reading area.
export function SectionConnector({ scene, end = false }: SectionConnectorProps) {
  return (
    <svg className={`section-connector${end ? ' section-connector--end' : ''}`} data-transition-connector={scene} data-transition-end={end ? 'true' : 'false'} viewBox="0 0 480 64" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path className="section-connector__track" d="M480 0H328Q312 0 312 16V32Q312 48 296 48H16Q0 48 0 64" />
      <path className="section-connector__flow" data-transition-flow="" pathLength="1" d="M480 0H328Q312 0 312 16V32Q312 48 296 48H16Q0 48 0 64" />
      <circle className="section-connector__node" data-transition-node="" cx={end ? 464 : 8} cy={end ? 4 : 48} r="3" />
    </svg>
  )
}

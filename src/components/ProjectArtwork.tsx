import type { Project } from '../data/types'

const waveHeights = [12, 22, 16, 36, 58, 30, 76, 104, 54, 84, 42, 120, 88, 60, 98, 48, 72, 112, 58, 36, 80, 50, 24, 42, 18, 30, 12]

export function ProjectArtwork({ kind }: { kind: Project['artwork'] }) {
  return (
    <div className={`project-artwork project-artwork--${kind}`} data-project-part="artwork" data-project-scene={kind} aria-hidden="true">
      <svg width="640" height="320" viewBox="0 0 640 320" fill="none" focusable="false">
        <g className="project-artwork__grid" data-artwork-layer="grid">
          {[64, 128, 192, 256, 320, 384, 448, 512, 576].map((x) => <path key={`x-${x}`} d={`M${x} 32v256`} />)}
          {[64, 128, 192, 256].map((y) => <path key={`y-${y}`} d={`M32 ${y}h576`} />)}
        </g>
        <g data-artwork-layer="diagram">
          {kind === 'clinical' && <>
            <g data-project-stage="document">
            <rect x="80" y="72" width="136" height="176" rx="12" className="project-artwork__panel" />
            <path d="M104 104h88M104 132h64M104 160h88M104 188h56M104 216h72" className="project-artwork__line" />
            </g>
            <path d="M216 160h88m0 0v-64h88m-88 64v64h88" className="project-artwork__accent" />
            <path data-project-flow="upper" pathLength="1" d="M216 160H304V96H392" className="project-artwork__flow" />
            <path data-project-flow="lower" pathLength="1" d="M216 160H304V224H392" className="project-artwork__flow" />
            <g data-project-stage="cells">
            <rect x="392" y="64" width="152" height="64" rx="10" className="project-artwork__panel" />
            <rect x="392" y="192" width="152" height="64" rx="10" className="project-artwork__panel" />
            <path d="M416 88h24m12 0h64M416 104h72M416 216h24m12 0h64M416 232h48" className="project-artwork__line" />
            <rect x="416" y="84" width="8" height="8" className="project-artwork__cell" />
            <rect x="416" y="212" width="8" height="8" className="project-artwork__cell" />
            </g>
            <circle cx="304" cy="160" r="8" className="project-artwork__accent" />
            <circle data-project-signal="upper" cx="216" cy="160" r="3" className="project-artwork__signal" />
            <circle data-project-signal="lower" cx="216" cy="160" r="3" className="project-artwork__signal" />
          </>}
          {kind === 'speech' && <>
            <circle cx="320" cy="160" r="110" className="project-artwork__orbit" />
            <circle cx="320" cy="160" r="138" strokeDasharray="3 12" className="project-artwork__orbit" />
            <path d="M84 160h472" className="project-artwork__line" />
            <g data-artwork-layer="waveform">
              {waveHeights.map((height, index) => <line data-wave-bar="" key={index} x1={138 + index * 14} x2={138 + index * 14} y1={160 - height * 0.65} y2={160 + height * 0.65} className={index % 4 === 0 ? 'project-artwork__accent' : 'project-artwork__line'} />)}
            </g>
            <path data-project-flow="audio" pathLength="1" d="M320 82V50" className="project-artwork__flow" />
            <path data-project-flow="language" pathLength="1" d="M320 238V270" className="project-artwork__flow project-artwork__detail" />
            <g data-project-stage="audio">
              {[260, 292, 324, 356].map(x => <rect key={x} x={x} y="52" width="24" height="14" rx="3" className="project-artwork__cell" />)}
            </g>
            <g data-project-stage="language" className="project-artwork__detail">
              {[260, 292, 324, 356].map(x => <rect key={x} x={x} y="254" width="24" height="14" rx="3" className="project-artwork__cell" />)}
            </g>
            <circle cx="320" cy="22" r="5" className="project-artwork__accent" />
            <circle cx="320" cy="298" r="5" className="project-artwork__accent" />
          </>}
          {kind === 'network' && <>
            <circle cx="340" cy="160" r="76" strokeDasharray="3 10" className="project-artwork__orbit" />
            <path d="m198 104 98 40m-98 72 98-40m88-16h88" className="project-artwork__accent" />
            <path data-project-flow="input" pathLength="1" d="M198 104L296 144M198 216L296 176" className="project-artwork__flow" />
            <path data-project-flow="output" pathLength="1" d="M384 160H472" className="project-artwork__flow" />
            <circle cx="180" cy="104" r="22" className="project-artwork__panel" />
            <circle cx="180" cy="216" r="22" className="project-artwork__panel" />
            <circle cx="340" cy="160" r="44" className="project-artwork__panel" />
            <circle cx="490" cy="160" r="18" className="project-artwork__accent" />
            <circle data-project-stage="sum" cx="340" cy="160" r="50" className="project-artwork__activation" />
            <circle data-project-stage="output" cx="490" cy="160" r="24" className="project-artwork__activation" />
            <circle data-project-signal="first" cx="198" cy="104" r="3" className="project-artwork__signal" />
            <circle data-project-signal="second" cx="198" cy="216" r="3" className="project-artwork__signal" />
            <circle data-project-signal="output" cx="384" cy="160" r="3" className="project-artwork__signal" />
            <g className="project-artwork__symbol" textAnchor="middle" dominantBaseline="middle">
              <text x="180" y="104">x₁</text><text x="180" y="216">x₂</text>
              <text x="340" y="160" className="project-artwork__sum">Σ</text>
              <text x="490" y="204">AND</text>
            </g>
          </>}
        </g>
      </svg>
    </div>
  )
}

const nodes = [
  [1030, -12, 5], [1190, 74, 7], [1395, 22, 4], [1085, 210, 4],
  [1290, 260, 8], [1470, 188, 5], [1195, 420, 5], [1420, 500, 7],
  [-25, 545, 6], [90, 665, 4], [260, 745, 7], [445, 815, 5],
  [735, 770, 4], [1090, 735, 6],
] as const

const edges = [
  [0, 1], [0, 3], [1, 2], [1, 3], [1, 4], [2, 5], [3, 4],
  [4, 5], [4, 6], [4, 7], [5, 7], [6, 7], [7, 13], [6, 13],
  [8, 9], [8, 10], [9, 10], [10, 11], [11, 12], [12, 13],
] as const

export type GraphBackdropVariant = 'hero' | 'quiet' | 'technical' | 'contact'
type Field = {
  nodes: readonly (readonly [number, number, number])[]
  edges: readonly (readonly [number, number])[]
  route: string
}

// Coordinates meet at the section midpoint in the existing connector padding.
// The reading area is excluded by the local wrapper, including after expansion.
const fields: Record<GraphBackdropVariant, Field> = {
  contact: { nodes, edges, route: 'M1030 -12 1190 74 1290 260 1195 420 1090 735 735 770 445 815' },
  hero: {
    nodes: [[-15, 140, 4], [70, 240, 5], [30, 440, 3], [95, 620, 4], [220, 785, 4],
      [1230, 20, 4], [1380, 130, 5], [1340, 320, 4], [1460, 485, 5], [1380, 675, 3]],
    edges: [[0, 1], [0, 2], [1, 2], [2, 3], [1, 3], [3, 4], [5, 6], [5, 7], [6, 7], [6, 8], [7, 8], [8, 9]],
    route: 'M720 0 Q1060 0 1230 20 L1380 130 1340 320 M30 440 95 620 Q130 800 720 800',
  },
  quiet: {
    nodes: [[-15, 230, 3], [65, 460, 4], [135, 780, 3], [1370, 80, 4], [1445, 410, 3]],
    edges: [[0, 1], [1, 2], [3, 4], [0, 2]],
    route: 'M720 0 Q1280 0 1370 80 L1445 410 M65 460 135 780 Q400 800 720 800',
  },
  technical: {
    nodes: [[-12, 150, 3], [80, 300, 4], [20, 530, 3], [140, 780, 4],
      [1305, 20, 3], [1400, 230, 4], [1335, 500, 3], [1450, 685, 4]],
    edges: [[0, 1], [0, 2], [1, 2], [2, 3], [4, 5], [4, 6], [5, 6], [5, 7], [6, 7]],
    route: 'M720 0 Q1140 0 1305 20 L1400 230 1335 500 M20 530 140 780 Q430 800 720 800',
  },
}

// Decorative, abstract connectivity. No research data or interactive targets.
export function GraphBackdrop({ variant }: { variant: GraphBackdropVariant }) {
  const field = fields[variant]
  const contact = variant === 'contact'
  return (
    <div className={`graph-backdrop graph-backdrop--${variant}`} aria-hidden="true">
      <svg viewBox="0 0 1440 800" preserveAspectRatio="none" focusable="false">
        <g className="graph-backdrop__structure" data-contact-field={contact ? '' : undefined}>
          <g className="graph-backdrop__edges">
            {field.edges.map(([from, to]) => <path key={`${from}-${to}`} d={`M${field.nodes[from][0]} ${field.nodes[from][1]} L${field.nodes[to][0]} ${field.nodes[to][1]}`} />)}
          </g>
          <path className="graph-backdrop__route" d={field.route} />
          <g className="graph-backdrop__nodes">
            {field.nodes.map(([cx, cy, r], index) => <circle key={index} cx={cx} cy={cy} r={r} />)}
          </g>
        </g>
        {contact && <path className="graph-backdrop__signal" data-contact-signal="" pathLength="1" d={field.route} />}
      </svg>
    </div>
  )
}

type NeuralGraphProps = { className?: string; variant?: 'default' | 'hero' }

const nodes = [
  [56, 100], [56, 180], [56, 260],
  [178, 60], [178, 140], [178, 220], [178, 300],
  [302, 100], [302, 180], [302, 260],
  [424, 140], [424, 220],
] as const

const edges = [
  [0, 3], [0, 4], [1, 4], [1, 5], [2, 5], [2, 6],
  [3, 7], [4, 7], [4, 8], [5, 8], [5, 9], [6, 9],
  [7, 10], [8, 10], [8, 11], [9, 11],
] as const

export function NeuralGraph({ className = '', variant = 'default' }: NeuralGraphProps) {
  return (
    <svg
      viewBox="0 0 480 360"
      width="480"
      height="360"
      aria-hidden="true"
      focusable="false"
      className={`neural-graph${variant === 'hero' ? ' neural-graph--hero' : ''} ${className}`}
    >
      {variant === 'hero' && (
        <g className="neural-graph__field" data-graph-layer="field">
          <circle cx="240" cy="180" r="154" />
          <circle cx="240" cy="180" r="112" strokeDasharray="2 10" />
          <path d="M240 12v30m0 276v30M72 180H42m396 0h-30" />
          <path className="neural-graph__field-accent" d="M86 180a154 154 0 0 1 154-154m154 154a154 154 0 0 1-154 154" />
        </g>
      )}
      <g data-graph-layer="network">
      <g data-graph-layer="edges">
      {edges.map(([from, to], index) => (
        <line
          key={`${from}-${to}`}
          data-from={from}
          data-to={to}
          x1={nodes[from][0]}
          y1={nodes[from][1]}
          x2={nodes[to][0]}
          y2={nodes[to][1]}
          className={`neural-graph__edge ${index % 4 === 0 ? 'neural-graph__edge--accent' : ''}`}
        />
      ))}
      </g>
      {variant === 'hero' && (
        <g className="neural-graph__halos" data-graph-layer="halos">
          <circle cx="178" cy="140" r="17" />
          <circle cx="302" cy="180" r="17" />
        </g>
      )}
      <g data-graph-layer="nodes">
      {nodes.map(([cx, cy], index) => (
        <circle
          key={`${cx}-${cy}`}
          data-node={index}
          cx={cx}
          cy={cy}
          r={index === 4 || index === 8 ? 7 : 5}
          className={`neural-graph__node ${index === 4 || index === 8 ? 'neural-graph__node--accent' : ''}`}
        />
      ))}
      </g>
      </g>
    </svg>
  )
}

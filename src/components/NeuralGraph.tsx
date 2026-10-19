import { graphEdgeAppearance, heroGraphDesktop, heroGraphMobile, type HeroGraphProfile } from '../data/heroGraph'
import { graphPositions, graphSegment, graphSignal } from '../motion/graphGeometry'

type NeuralGraphProps = { className?: string; variant?: 'default' | 'hero' }

function HeroGraph({ profile, className }: { profile: HeroGraphProfile; className: string }) {
  const positions = graphPositions(profile.nodes, 1)
  return (
    <svg
      viewBox={`0 0 ${profile.width} ${profile.height}`}
      width={profile.width}
      height={profile.height}
      aria-hidden="true"
      focusable="false"
      data-graph-profile={profile.id}
      className={`neural-graph neural-graph--hero neural-graph--${profile.id} ${className}`}
    >
      <g className="neural-graph__field" data-graph-layer="field">
        {profile.id === 'desktop'
          ? <path d="M24 118c-8 16-8 44 0 60m432-42c8 16 8 44 0 60M145 24l20-2m156 273 20-3" />
          : <path d="M29 112c-8 12-8 36 0 48m420-45c8 12 8 36 0 48" />}
      </g>
      <g data-graph-layer="network">
        <g data-graph-layer="edges">
          {profile.edges.map(edge => {
            const { from, to } = graphSegment(edge, positions)
            return <line
              key={edge.id}
              data-edge={edge.id}
              data-from={edge.from}
              data-to={edge.to}
              x1={from.x} y1={from.y} x2={to.x} y2={to.y}
              className={`neural-graph__edge neural-graph__edge--${edge.importance}`}
              style={graphEdgeAppearance[edge.importance]}
            />
          })}
        </g>
        <g className="neural-graph__halos" data-graph-layer="halos">
          {profile.nodes.filter(node => node.accent).map(node => {
            const position = positions.get(node.id)!
            return <circle key={node.id} data-node-ref={node.id} cx={position.x} cy={position.y} r={node.radius + 9} />
          })}
        </g>
        <g data-graph-layer="nodes">
          {profile.nodes.map(node => {
            const position = positions.get(node.id)!
            return <circle
              key={node.id}
              data-node={node.id}
              data-node-layer={node.layer}
              cx={position.x} cy={position.y} r={node.radius}
              className={`neural-graph__node${node.accent ? ' neural-graph__node--accent' : ''}`}
            />
          })}
        </g>
        {/* The finite intro owns these signals; the static fallback keeps them dormant. */}
        <g className="neural-graph__signals" data-graph-layer="signals" opacity="0">
          {profile.routes.map(route => {
            const start = graphSignal(route.nodes, 0, positions)
            return <circle key={route.id} data-signal={route.id} cx={start.x} cy={start.y} r="2.5" />
          })}
        </g>
      </g>
    </svg>
  )
}

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

export function NeuralGraph({ className = '', ...props }: NeuralGraphProps) {
  if (props.variant === 'hero') return <>
    <HeroGraph profile={heroGraphDesktop} className={className} />
    <HeroGraph profile={heroGraphMobile} className={className} />
  </>

  return (
    <svg
      viewBox="0 0 480 360"
      width="480"
      height="360"
      aria-hidden="true"
      focusable="false"
      className={`neural-graph ${className}`}
    >
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

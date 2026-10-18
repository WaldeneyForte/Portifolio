import type { GraphPoint, HeroGraphEdge, HeroGraphNode, HeroNodeId } from '../data/heroGraph'

export type GraphPositions = ReadonlyMap<HeroNodeId, GraphPoint>
export type GraphSegment = Readonly<{ from: GraphPoint; to: GraphPoint }>

function unit(value: number): number {
  return Math.min(1, Math.max(0, value))
}

export function interpolatePoint(from: GraphPoint, to: GraphPoint, progress: number): GraphPoint {
  const amount = unit(progress)
  return { x: from.x + (to.x - from.x) * amount, y: from.y + (to.y - from.y) * amount }
}

// Caller-owned offsets can later combine cursor/scroll influences without a second
// animation writing node attributes independently. No DOM, timers or React state.
export function graphPositions(nodes: readonly HeroGraphNode[], progress: number, offsets?: GraphPositions): GraphPositions {
  return new Map(nodes.map(node => {
    const position = interpolatePoint(node.scattered, node.layered, progress)
    const offset = offsets?.get(node.id)
    return [node.id, { x: position.x + (offset?.x ?? 0), y: position.y + (offset?.y ?? 0) }]
  }))
}

export function graphSegment(edge: Pick<HeroGraphEdge, 'from' | 'to'>, positions: GraphPositions): GraphSegment {
  const from = positions.get(edge.from)
  const to = positions.get(edge.to)
  if (!from || !to) throw new Error(`Missing graph endpoint: ${edge.from}-${edge.to}`)
  return { from, to }
}

// One normalized progress follows the directed route, including all intermediate
// nodes. Both segments and signals are sampled from the same current positions.
export function graphSignal(route: readonly HeroNodeId[], progress: number, positions: GraphPositions): GraphPoint {
  if (route.length < 2) throw new Error('A graph signal needs at least two nodes')
  const distance = unit(progress) * (route.length - 1)
  const index = Math.min(Math.floor(distance), route.length - 2)
  const segment = graphSegment({ from: route[index], to: route[index + 1] }, positions)
  return interpolatePoint(segment.from, segment.to, distance - index)
}

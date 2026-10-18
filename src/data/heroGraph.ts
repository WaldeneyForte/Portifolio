export type GraphPoint = Readonly<{ x: number; y: number }>
export type HeroNodeId = 'I1' | 'I2' | 'I3' | 'H1a' | 'H1b' | 'H1c' | 'H1d' | 'H2a' | 'H2b' | 'H2c' | 'O1' | 'O2'
export type GraphLayerId = 'input' | 'hidden1' | 'hidden2' | 'output'
export type GraphLayerLabels = Readonly<Record<GraphLayerId, string>>

export type HeroGraphNode = Readonly<{
  id: HeroNodeId
  layer: GraphLayerId
  scattered: GraphPoint
  layered: GraphPoint
  radius: number
}>

export type HeroGraphEdge = Readonly<{
  id: string
  from: HeroNodeId
  to: HeroNodeId
  highlighted: boolean
}>

export type HeroGraphRoute = Readonly<{ id: string; nodes: readonly HeroNodeId[] }>

export type HeroGraphProfile = Readonly<{
  id: 'desktop' | 'mobile'
  width: number
  height: number
  nodes: readonly HeroGraphNode[]
  edges: readonly HeroGraphEdge[]
  routes: readonly HeroGraphRoute[]
  labels: readonly Readonly<{ layer: GraphLayerId; x: number; y: number }>[]
}>

function node(id: HeroNodeId, layer: GraphLayerId, scattered: readonly [number, number], layered: readonly [number, number], radius = 5): HeroGraphNode {
  return { id, layer, scattered: { x: scattered[0], y: scattered[1] }, layered: { x: layered[0], y: layered[1] }, radius }
}

function connect(layers: readonly (readonly HeroNodeId[])[], routes: readonly HeroGraphRoute[]): HeroGraphEdge[] {
  const highlighted = new Set(routes.flatMap(({ nodes }) => nodes.slice(1).map((to, index) => `${nodes[index]}-${to}`)))
  return layers.slice(1).flatMap((destinations, index) => layers[index].flatMap(from => destinations.map(to => ({
    id: `${from}-${to}`, from, to, highlighted: highlighted.has(`${from}-${to}`),
  }))))
}

const desktopRoutes: readonly HeroGraphRoute[] = [
  { id: 'upper', nodes: ['I1', 'H1b', 'H2b', 'O1'] },
  { id: 'lower', nodes: ['I3', 'H1c', 'H2c', 'O2'] },
]

const mobileRoutes: readonly HeroGraphRoute[] = [
  { id: 'upper', nodes: ['I1', 'H1b', 'O1'] },
  { id: 'lower', nodes: ['I3', 'H1c', 'O2'] },
]

// Slight offsets retain the layered silhouette without turning it into a rigid grid.
// IDs/topology remain identical across poses; renderers must derive edges from nodes.
export const heroGraphDesktop: HeroGraphProfile = {
  id: 'desktop', width: 480, height: 360,
  nodes: [
    node('I1', 'input', [74, 86], [54, 96]),
    node('I2', 'input', [40, 181], [64, 182]),
    node('I3', 'input', [96, 277], [50, 262]),
    node('H1a', 'hidden1', [159, 44], [182, 62]),
    node('H1b', 'hidden1', [202, 121], [171, 138], 7),
    node('H1c', 'hidden1', [146, 224], [185, 226]),
    node('H1d', 'hidden1', [213, 294], [175, 296]),
    node('H2a', 'hidden2', [297, 77], [296, 96]),
    node('H2b', 'hidden2', [332, 171], [309, 181], 7),
    node('H2c', 'hidden2', [284, 279], [298, 266]),
    node('O1', 'output', [405, 114], [422, 143], 6),
    node('O2', 'output', [430, 242], [415, 222], 6),
  ],
  edges: connect([['I1', 'I2', 'I3'], ['H1a', 'H1b', 'H1c', 'H1d'], ['H2a', 'H2b', 'H2c'], ['O1', 'O2']], desktopRoutes),
  routes: desktopRoutes,
  labels: [
    { layer: 'input', x: 56, y: 338 }, { layer: 'hidden1', x: 178, y: 338 },
    { layer: 'hidden2', x: 302, y: 338 }, { layer: 'output', x: 420, y: 338 },
  ],
}

export const heroGraphMobile: HeroGraphProfile = {
  id: 'mobile', width: 480, height: 280,
  nodes: [
    node('I1', 'input', [80, 64], [60, 76], 6),
    node('I2', 'input', [47, 151], [70, 140], 6),
    node('I3', 'input', [83, 214], [62, 204], 6),
    node('H1a', 'hidden1', [222, 42], [244, 56], 6),
    node('H1b', 'hidden1', [258, 125], [234, 140], 8),
    node('H1c', 'hidden1', [225, 229], [246, 218], 6),
    node('O1', 'output', [398, 89], [418, 103], 7),
    node('O2', 'output', [430, 192], [410, 178], 7),
  ],
  edges: connect([['I1', 'I2', 'I3'], ['H1a', 'H1b', 'H1c'], ['O1', 'O2']], mobileRoutes),
  routes: mobileRoutes,
  labels: [
    { layer: 'input', x: 64, y: 262 }, { layer: 'hidden1', x: 240, y: 262 },
    { layer: 'output', x: 416, y: 262 },
  ],
}

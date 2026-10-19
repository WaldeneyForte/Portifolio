export type GraphPoint = Readonly<{ x: number; y: number }>
export type HeroNodeId = 'I1' | 'I2' | 'I3' | 'H1a' | 'H1b' | 'H1c' | 'H1d' | 'H2a' | 'H2b' | 'H2c' | 'O1' | 'O2'
export type GraphLayerId = 'input' | 'hidden1' | 'hidden2' | 'output'

export type HeroGraphNode = Readonly<{
  id: HeroNodeId
  layer: GraphLayerId
  scattered: GraphPoint
  layered: GraphPoint
  radius: number
  accent: boolean
}>

export type HeroGraphEdge = Readonly<{
  id: string
  from: HeroNodeId
  to: HeroNodeId
  importance: 'secondary' | 'primary' | 'route'
}>

// Both the static SVG and the intro use this hierarchy; cleanup restores it.
export const graphEdgeAppearance = {
  secondary: { opacity: 0.24, strokeWidth: 0.9 },
  primary: { opacity: 0.52, strokeWidth: 1.2 },
  route: { opacity: 0.82, strokeWidth: 1.6 },
} as const

export type HeroGraphRoute = Readonly<{ id: string; nodes: readonly HeroNodeId[] }>

export type HeroGraphProfile = Readonly<{
  id: 'desktop' | 'mobile'
  width: number
  height: number
  nodes: readonly HeroGraphNode[]
  edges: readonly HeroGraphEdge[]
  routes: readonly HeroGraphRoute[]
}>

function node(id: HeroNodeId, layer: GraphLayerId, scattered: readonly [number, number], layered: readonly [number, number], radius = 5.5, accent = false): HeroGraphNode {
  return { id, layer, scattered: { x: scattered[0], y: scattered[1] }, layered: { x: layered[0], y: layered[1] }, radius, accent }
}

function connect(layers: readonly (readonly HeroNodeId[])[], routes: readonly HeroGraphRoute[]): HeroGraphEdge[] {
  const highlighted = new Set(routes.flatMap(({ nodes }) => nodes.slice(1).map((to, index) => `${nodes[index]}-${to}`)))
  const primary = new Set(['I2-H1b', 'I2-H1c', 'H1b-H2b', 'H1c-H2b', 'H2b-O1', 'H2b-O2'])
  return layers.slice(1).flatMap((destinations, index) => layers[index].flatMap(from => destinations.map(to => ({
    id: `${from}-${to}`, from, to,
    importance: highlighted.has(`${from}-${to}`) ? 'route' : primary.has(`${from}-${to}`) ? 'primary' : 'secondary',
  }))))
}

const desktopRoutes: readonly HeroGraphRoute[] = [
  { id: 'upper', nodes: ['I1', 'H1a', 'H2a', 'O1'] },
  { id: 'lower', nodes: ['I3', 'H1d', 'H2c', 'O2'] },
]

const mobileRoutes: readonly HeroGraphRoute[] = [
  { id: 'upper', nodes: ['I1', 'H1b', 'O1'] },
  { id: 'lower', nodes: ['I3', 'H1c', 'O2'] },
]

// Slight offsets retain the layered silhouette without turning it into a rigid grid.
// IDs/topology remain identical across poses; renderers must derive edges from nodes.
export const heroGraphDesktop: HeroGraphProfile = {
  id: 'desktop', width: 480, height: 320,
  nodes: [
    node('I1', 'input', [68, 72], [48, 84]),
    node('I2', 'input', [34, 171], [52, 160]),
    node('I3', 'input', [65, 250], [46, 236]),
    node('H1a', 'hidden1', [155, 36], [168, 52], 7, true),
    node('H1b', 'hidden1', [190, 110], [174, 124]),
    node('H1c', 'hidden1', [150, 212], [168, 196]),
    node('H1d', 'hidden1', [184, 282], [172, 268]),
    node('H2a', 'hidden2', [294, 70], [308, 84]),
    node('H2b', 'hidden2', [329, 174], [314, 160]),
    node('H2c', 'hidden2', [292, 253], [308, 236], 7, true),
    node('O1', 'output', [414, 102], [432, 116], 6),
    node('O2', 'output', [444, 222], [430, 204], 6),
  ],
  edges: connect([['I1', 'I2', 'I3'], ['H1a', 'H1b', 'H1c', 'H1d'], ['H2a', 'H2b', 'H2c'], ['O1', 'O2']], desktopRoutes),
  routes: desktopRoutes,
}

export const heroGraphMobile: HeroGraphProfile = {
  id: 'mobile', width: 480, height: 280,
  nodes: [
    node('I1', 'input', [80, 64], [60, 76], 6),
    node('I2', 'input', [47, 151], [70, 140], 6),
    node('I3', 'input', [83, 214], [62, 204], 6),
    node('H1a', 'hidden1', [222, 42], [244, 56], 6),
    node('H1b', 'hidden1', [258, 125], [234, 140], 8, true),
    node('H1c', 'hidden1', [225, 229], [246, 218], 6),
    node('O1', 'output', [398, 89], [418, 103], 7),
    node('O2', 'output', [430, 192], [410, 178], 7),
  ],
  edges: connect([['I1', 'I2', 'I3'], ['H1a', 'H1b', 'H1c'], ['O1', 'O2']], mobileRoutes),
  routes: mobileRoutes,
}

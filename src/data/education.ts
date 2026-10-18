import type { TimelineEntry } from './types'

export const education = [
  {
    id: 'uece',
    title: 'Bacharelado em Ciência da Computação',
    organization: 'Universidade Estadual do Ceará (UECE)',
    period: '2021 – 2027',
    location: 'Fortaleza, Ceará, Brasil',
    status: 'Conclusão prevista em 2027',
    summary: 'Formação em Ciência da Computação, com estudos em algoritmos, estruturas de dados, software, bancos de dados e fundamentos de IA. Ao longo da graduação, venho conectando teoria e prática por meio de projetos de dados e pesquisa aplicada.',
  },
  {
    id: 'senai',
    title: 'Técnico em Redes de Computadores',
    organization: 'SENAI',
    period: '2019 – 2022',
    summary: 'Formação técnica em redes de computadores e fundamentos de infraestrutura e comunicação de dados.',
  },
] as const satisfies readonly TimelineEntry[]

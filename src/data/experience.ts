import type { TimelineEntry } from './types'

export const experience = [
  {
    id: 'cpidt',
    title: 'Cientista de Dados',
    organization: 'Centro de Pesquisa, Desenvolvimento e Inovação (CPIDT)',
    period: '2025 – atual',
    location: 'Fortaleza, Ceará, Brasil',
    summary: 'No CPIDT, trabalho com pesquisa e desenvolvimento de soluções de IA voltadas à saúde. Minha rotina combina experimentação com modelos de Machine Learning e Deep Learning, preparação de dados, APIs e investigação de aplicações envolvendo áudio, linguagem e LLMs.',
    activityGroups: [
      {
        id: 'models',
        title: 'Machine Learning e Deep Learning',
        activities: [
          'Treinamento, validação e avaliação de modelos com Python, PyTorch e Hugging Face.',
          'Estudo de biomarcadores acústicos e linguísticos e processamento de linguagem.',
        ],
      },
      {
        id: 'data',
        title: 'Engenharia de Dados e pipelines',
        activities: [
          'Pipelines ETL/ELT com Python, Pandas, NumPy e PostgreSQL.',
          'Modelagem de dados relacionais e consultas SQL.',
        ],
      },
      {
        id: 'integration',
        title: 'APIs e integração de IA',
        activities: [
          'Desenvolvimento de APIs REST com FastAPI para integração de dados e componentes de IA.',
          'Automações e versionamento com Git/GitHub e práticas de CI/CD.',
          'Desenvolvimento e experimentação com agentes de IA usando LangChain e LangGraph.',
        ],
      },
    ],
  },
] as const satisfies readonly TimelineEntry[]

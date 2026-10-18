import type { Project } from './types'

export const projects = [
  {
    id: 'tedas-ce',
    title: 'TEDAS-CE · IA e dados clínicos',
    category: 'research',
    artwork: 'clinical',
    period: 'outubro de 2026 – atual',
    summary: 'Projeto de pesquisa que explora processamento de relatos clínicos, transcrição de áudio e extração de informações para apoiar a análise de sepse. O desafio é transformar conteúdo não estruturado em dados úteis para validação e modelos de Machine Learning.',
    technologies: ['Python', 'ASR', 'NLP', 'PyTorch', 'Hugging Face', 'Speech-to-Text', 'NER', 'Transformers', 'LLMs', 'Dados clínicos', 'Validação de modelos'],
    details: [
      'O projeto investiga pipelines de processamento de áudio e texto, extração de informações clínicas e integração com bases existentes.',
      'O escopo inclui preparar entradas e avaliar modelos já treinados. As frentes são apresentadas como pesquisa em andamento.',
    ],
  },
  {
    id: 'mind-bh',
    title: 'MIND-BH · Inteligência artificial e fala',
    category: 'research',
    artwork: 'speech',
    period: 'abril de 2026 – atual',
    summary: 'Pesquisa sobre padrões acústicos e linguísticos da fala associados ao comprometimento cognitivo. Investigo representações de áudio e linguagem e diferentes arquiteturas de aprendizado profundo para analisar essas relações.',
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'NLP', 'GNNs', 'GATs', 'Graph Transformers', 'Mamba/SSMs', 'Transformers', 'wav2vec 2.0', 'HuBERT', 'WavLM'],
    details: [
      'Investigação de representações de áudio e linguagem para estudar padrões de fala associados ao comprometimento cognitivo, no contexto da pesquisa sobre Alzheimer.',
      'Biomarcadores estudados: F0, formantes, jitter, shimmer, pausas, fluência, ritmo, diversidade lexical e estrutura do discurso.',
      'GNNs, GATs, Graph Transformers, Mamba/SSMs e Transformers estão entre as arquiteturas investigadas e avaliadas.',
    ],
  },
  {
    id: 'neural-networks-c',
    title: 'Redes neurais do zero em C',
    category: 'personal',
    artwork: 'network',
    summary: 'Implementações para entender a matemática das redes neurais sem frameworks de alto nível. O ponto de partida é um Perceptron com pesos manuais que representa uma porta AND.',
    technologies: ['C', 'Álgebra linear', 'Redes neurais', 'Fundamentos de Deep Learning'],
    details: [
      'Implementação confirmada: Perceptron simples com pesos definidos manualmente e saída de uma porta lógica AND.',
      'Próximas etapas planejadas: Perceptron treinável, redes multicamadas com backpropagation e CNNs.',
      'Projeto pessoal de estudos em desenvolvimento para aprender construindo e compartilhar o processo.',
    ],
  },
] as const satisfies readonly Project[]

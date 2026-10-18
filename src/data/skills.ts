import type { SkillGroupData } from './types'

export const skills = [
  { id: 'machine-learning', title: 'Machine Learning / Deep Learning', items: ['PyTorch', 'Hugging Face', 'Transformers', 'scikit-learn', 'Treinamento, validação e avaliação de modelos'] },
  { id: 'language', title: 'LLMs / NLP', items: ['NLP', 'LLMs', 'LangChain', 'LangGraph', 'RAG', 'Bases vetoriais', 'Agentes de IA'] },
  { id: 'data', title: 'Dados', items: ['Pandas', 'NumPy', 'PostgreSQL', 'ETL/ELT', 'Apache Spark', 'Apache Airflow'] },
  { id: 'languages', title: 'Linguagens', items: ['Python', 'SQL', 'Java', 'C · estudo pessoal'] },
  { id: 'development', title: 'APIs / MLOps / Desenvolvimento', items: ['FastAPI', 'REST APIs', 'Git', 'GitHub', 'CI/CD', 'Linux', 'Docker', 'Kubernetes'] },
  { id: 'cloud', title: 'Cloud / Plataformas', items: ['AWS', 'Microsoft Azure', 'Azure Databricks', 'Azure Data Factory', 'Azure Data Lake Storage', 'Lakehouse'] },
] as const satisfies readonly SkillGroupData[]

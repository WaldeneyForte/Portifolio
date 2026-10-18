import { certifications } from '../data/certifications'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import type { Certification, Profile, Project, SkillGroupData, TimelineEntry } from '../data/types'
import type { SiteContent } from './types'

const profileText = {
  location: 'Fortaleza, Ceará, Brazil',
  about: [
    'I like getting hands-on and understanding the full journey of an AI solution: preparing data, experimenting with models, evaluating results, and figuring out how to make it work beyond a notebook.',
    'I currently work on applied AI research for healthcare at CPIDT while studying Computer Science at UECE. My work involves machine learning, deep learning, speech and language processing, data pipelines, and AI application integration.',
    'Outside research projects, I build things to strengthen my fundamentals. One example is my neural-networks-from-scratch series in C, starting with a Perceptron and gradually exploring more complex architectures. I learn by building — and sharing what I discover.',
  ],
} satisfies Pick<Profile, 'location' | 'about'>

const projectText = {
  'tedas-ce': {
    title: 'TEDAS-CE · AI and clinical data',
    period: 'October 2026 – present',
    summary: 'Research project exploring clinical speech transcription and information extraction to support sepsis-related analysis. The goal is to turn unstructured reports into structured inputs for validation and machine learning models.',
    technologies: ['Python', 'ASR', 'NLP', 'PyTorch', 'Hugging Face', 'Speech-to-Text', 'NER', 'Transformers', 'LLMs', 'Clinical data', 'Model validation'],
    details: [
      'The project investigates audio and text processing pipelines, clinical information extraction and integration with existing datasets.',
      'Its scope includes preparing inputs and evaluating previously trained models. These areas are presented as ongoing research.',
    ],
  },
  'mind-bh': {
    title: 'MIND-BH · AI and speech',
    period: 'April 2026 – present',
    summary: 'Research exploring acoustic and linguistic speech patterns associated with cognitive impairment, using speech representations and deep learning architectures to investigate meaningful relationships.',
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'NLP', 'GNNs', 'GATs', 'Graph Transformers', 'Mamba/SSMs', 'Transformers', 'wav2vec 2.0', 'HuBERT', 'WavLM'],
    details: [
      "Exploring audio and language representations to study speech patterns associated with cognitive impairment in Alzheimer's-related research.",
      'Biomarkers studied include F0, formants, jitter, shimmer, pauses, fluency, rhythm, lexical diversity and discourse structure.',
      'GNNs, GATs, Graph Transformers, Mamba/SSMs and Transformers are among the architectures being investigated and evaluated.',
    ],
  },
  'neural-networks-c': {
    title: 'Neural networks from scratch in C',
    summary: 'Implementations to understand the mathematics of neural networks without high-level frameworks. The starting point is a Perceptron with manually assigned weights representing an AND gate.',
    technologies: ['C', 'Linear algebra', 'Neural networks', 'Deep learning fundamentals'],
    details: [
      'Confirmed implementation: a simple Perceptron with manually assigned weights and the output of an AND logic gate.',
      'Planned next steps: a trainable Perceptron, multilayer networks with backpropagation and CNNs.',
      'A personal learning project in development, focused on building things and sharing the process.',
    ],
  },
} satisfies Record<(typeof projects)[number]['id'], Pick<Project, 'title' | 'period' | 'summary' | 'technologies' | 'details'>>

const experienceText = {
  cpidt: {
    title: 'Data Scientist',
    period: '2025 – present',
    location: 'Fortaleza, Ceará, Brazil',
    summary: 'At CPIDT, I work on applied AI research for healthcare, combining machine learning and deep learning experiments with data preparation, APIs, and speech, language and LLM-related applications.',
    activityGroups: [
      {
        id: 'models',
        title: 'Machine Learning and Deep Learning',
        activities: [
          'Training, validating and evaluating models with Python, PyTorch and Hugging Face.',
          'Studying acoustic and linguistic biomarkers and language processing.',
        ],
      },
      {
        id: 'data',
        title: 'Data engineering and pipelines',
        activities: [
          'ETL/ELT pipelines with Python, Pandas, NumPy and PostgreSQL.',
          'Relational data modeling and SQL queries.',
        ],
      },
      {
        id: 'integration',
        title: 'APIs and AI integration',
        activities: [
          'Developing REST APIs with FastAPI to integrate data and AI components.',
          'Automation and version control with Git/GitHub and CI/CD practices.',
          'Developing and experimenting with AI agents using LangChain and LangGraph.',
        ],
      },
    ],
  },
} satisfies Record<(typeof experience)[number]['id'], Pick<TimelineEntry, 'title' | 'period' | 'location' | 'summary' | 'activityGroups'>>

const educationText = {
  uece: {
    title: 'BSc in Computer Science',
    period: '2021 – 2027',
    location: 'Fortaleza, Ceará, Brazil',
    status: 'Expected graduation in 2027',
    summary: 'BSc in Computer Science (expected 2027), covering algorithms, data structures, software engineering, databases and AI fundamentals, with hands-on data projects and applied research.',
  },
  senai: {
    title: 'Technical qualification in Computer Networks',
    period: '2019 – 2022',
    summary: 'Technical qualification in Computer Networks, with a foundation in networking and IT infrastructure.',
  },
} satisfies Record<(typeof education)[number]['id'], Pick<TimelineEntry, 'title' | 'period' | 'location' | 'status' | 'summary'>>

const skillText = {
  'machine-learning': { title: 'Machine Learning / Deep Learning', items: ['PyTorch', 'Hugging Face', 'Transformers', 'scikit-learn', 'Model training, validation and evaluation'] },
  language: { title: 'LLMs / NLP', items: ['NLP', 'LLMs', 'LangChain', 'LangGraph', 'RAG', 'Vector databases', 'AI agents'] },
  data: { title: 'Data', items: ['Pandas', 'NumPy', 'PostgreSQL', 'ETL/ELT', 'Apache Spark', 'Apache Airflow'] },
  languages: { title: 'Languages', items: ['Python', 'SQL', 'Java', 'C · personal study'] },
  development: { title: 'APIs / MLOps / Development', items: ['FastAPI', 'REST APIs', 'Git', 'GitHub', 'CI/CD', 'Linux', 'Docker', 'Kubernetes'] },
  cloud: { title: 'Cloud / Platforms', items: ['AWS', 'Microsoft Azure', 'Azure Databricks', 'Azure Data Factory', 'Azure Data Lake Storage', 'Lakehouse'] },
} satisfies Record<(typeof skills)[number]['id'], Pick<SkillGroupData, 'title' | 'items'>>

const certificationText = {
  'aws-ai-practitioner': { issuedLabel: 'September 2026', expiresLabel: 'September 2029' },
  'aws-cloud-practitioner': { issuedLabel: '2026' },
  'kubernetes-lfs158': { issuedLabel: 'October 2026' },
} satisfies Record<(typeof certifications)[number]['id'], Pick<Certification, 'issuedLabel' | 'expiresLabel'>>

export const englishContent: SiteContent = {
  profile: { ...profile, ...profileText },
  projects: projects.map((project) => ({ ...project, ...projectText[project.id] })),
  experience: experience.map((entry) => ({ ...entry, ...experienceText[entry.id] })),
  education: education.map((entry) => ({ ...entry, ...educationText[entry.id] })),
  skills: skills.map((group) => ({ ...group, ...skillText[group.id] })),
  certifications: certifications.map((entry) => ({ ...entry, ...certificationText[entry.id] })),
}

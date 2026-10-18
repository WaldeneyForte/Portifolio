import type { Profile } from './types'

export const profile = {
  name: 'Waldeney Filho',
  title: 'AI Engineer · Machine Learning Engineer · Data Scientist',
  location: 'Fortaleza, Ceará, Brasil',
  email: 'jose.waldeney.forte@gmail.com',
  about: [
    'Gosto de colocar a mão no código e entender o caminho completo de uma solução: preparar os dados, experimentar modelos, avaliar os resultados e pensar em como tudo isso pode funcionar fora de um notebook.',
    'Hoje atuo com pesquisa em inteligência artificial aplicada à saúde no CPIDT, trabalhando com Machine Learning, Deep Learning, processamento de áudio e linguagem, pipelines de dados e integração de aplicações de IA. Também curso Ciência da Computação na UECE.',
    'Fora dos projetos de pesquisa, gosto de estudar fundamentos com projetos próprios. Um exemplo é minha série de redes neurais implementadas do zero em C, começando pelo Perceptron e avançando gradualmente para arquiteturas mais complexas. A ideia é aprender construindo — e compartilhar o processo.',
  ],
  links: {
    github: 'https://github.com/WaldeneyForte',
    linkedin: 'https://www.linkedin.com/in/waldeney-filho/',
  },
} as const satisfies Profile

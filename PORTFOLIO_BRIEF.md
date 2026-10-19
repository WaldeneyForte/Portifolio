# PORTFOLIO_BRIEF.md — Portfólio de Waldeney Filho

> Documento de especificação e briefing para implementação com Codex.
> Versão: 1.0 — 17/10/2026.
> **Objetivo imediato:** criar uma primeira versão funcional, responsiva e bilíngue do portfólio, em página única. **Não implementar robô, chatbot, RAG nem backend nesta versão.**

---

## 1. Papel do Codex e resultado esperado

Você é um desenvolvedor front-end sênior e designer de produto. Construa um portfólio pessoal completo e pronto para publicação, seguindo esta especificação. Priorize qualidade visual, acessibilidade, manutenção, performance e fidelidade aos dados fornecidos. Não transforme este documento em uma página de texto: implemente componentes e experiências de navegação.

**Entregáveis:**
1. Aplicação React + TypeScript + Vite funcionando localmente.
2. Site de **página única** com navegação por âncoras e rolagem suave.
3. Layout responsivo com identidade preto/vermelho e opção de idioma **PT/EN** claramente visível.
4. Conteúdo inicial real, com projetos, experiência, formação, tecnologias e certificações documentadas aqui.
5. Dados de conteúdo separados dos componentes, inclusive traduções.
6. README.md com instalação, desenvolvimento, build, deploy e como atualizar projetos e certificações.
7. Estrutura pensada para adicionar futuramente um assistente de IA, **sem construir sua UI nem API agora**.

Quando faltar imagem, certificado ou URL, apresente um placeholder elegante ou oculte o botão correspondente. **Nunca invente links, resultados de pesquisa, números, datas, credenciais, logotipos ou imagens de projetos.**

## 2. Referências de experiência e direção visual

- Referência de navegação em página única: https://1laryssaferreira.github.io/Portifolio/#projetos
- Referência de seletor visível de idiomas: https://layzacarneiro.github.io
- Perfil profissional: https://www.linkedin.com/in/waldeney-filho/
- GitHub: https://github.com/WaldeneyForte

Usar as referências **somente como inspiração**. Não copiar design, ilustrações, textos, código ou mascotes. A estética deve ser própria, tecnológica e profissional, evitando aparência de template genérico.

### Identidade visual

- Fundo predominante: `#0B0B0F` (preto grafite).
- Superfícies/cards: `#19191F` ou `#1D1D25`.
- Destaque principal: `#DC243C` (vermelho intenso).
- Destaque de hover opcional: `#FF455A`.
- Texto principal: `#F5F5F5`.
- Texto secundário: `#B7B7C1`.
- Borda discreta: `#34343D`.
- Priorizar contraste acessível, inclusive em botões e links.
- Fontes recomendadas: **Inter** para corpo e **Space Grotesk** (ou equivalente) para títulos; fontes com fallback e carregamento eficiente.
- Elementos visuais sutis inspirados em **grafos, nós, conexões, matrizes e redes neurais**, preferencialmente com SVG leve ou CSS. Não exagerar na quantidade de efeitos.
- Animações pequenas e intencionais (entrada de seções, cards e links), respeitando `prefers-reduced-motion`.
- Design clean com espaço em branco, hierarquia tipográfica forte, títulos marcantes e bastante cuidado com mobile.
- Evitar vermelho saturado em grandes áreas, texto vermelho longo, carrossel obrigatório, partículas pesadas ou animações que atrapalhem a leitura.

### Estrutura geral

Uma única página longa com header fixo ou sticky:

1. **Início / Home** — hero com apresentação pessoal, especialidades, CTAs.
2. **Sobre mim / About** — texto humano, informal-profissional e áreas de atuação.
3. **Projetos / Projects** — pesquisa profissional e projetos pessoais, claramente diferenciados.
4. **Experiência profissional / Experience** — timeline.
5. **Formação / Education** — timeline de graduação e formação técnica.
6. **Tecnologias / Skills** — grupos organizados por tema, sem níveis de proficiência inventados.
7. **Certificações / Certifications** — cards de credenciais com status correto.
8. **Contato / Contact** — e-mail, GitHub e LinkedIn.

**Observação:** se a página ficar extensa, a seção de tecnologias pode aparecer dentro de Sobre mim, mas deve continuar bem legível. Projetos são a parte mais importante depois do Hero.

### Navegação

- Itens de header: Sobre, Projetos, Experiência, Formação, Tecnologias, Certificações e Contato.
- Menu âncora com `href="#projetos"` etc. e `scroll-margin-top` para compensar o header fixo.
- Indicar visualmente a seção ativa (opcional com IntersectionObserver).
- Menu mobile acessível e compacto, fechado após selecionar um item.
- **Alternância de idioma visível no header:** `PT | EN`, com destaque para o idioma ativo; no mobile, mantê-la facilmente acessível.
- Botão para GitHub e LinkedIn; botão de currículo apenas se existir PDF público localizado em `public/curriculo/`.
- Link `mailto:` no contato.

## 3. Dados pessoais para exibir

| Campo | Valor |
|---|---|
| Nome público | **Waldeney Filho** |
| Nome completo (somente quando útil, por exemplo em metadados de autoria) | José Waldeney Bonfim Forte Filho |
| Título profissional no Hero | **AI Engineer · Machine Learning Engineer · Data Scientist** |
| Localização | Fortaleza, Ceará, Brasil (conforme currículo; não exibir endereço detalhado) |
| Disponibilidade geográfica | Não alegar disponibilidade específica ou status de contratação sem confirmação |
| E-mail | `jose.waldeney.forte@gmail.com` |
| LinkedIn | `https://www.linkedin.com/in/waldeney-filho/` |
| GitHub | `https://github.com/WaldeneyForte` |
| Idioma principal do site | Português brasileiro |
| Segundo idioma | Inglês |

**Privacidade:** não publicar telefone do currículo no site. Não incluir endereço residencial, dados sensíveis, documentos de identidade ou informações privadas de pesquisa. O e-mail acima é destinado ao contato profissional. Para a seção de currículo, não copiar automaticamente o PDF integral para `public/`; disponibilizá-lo só após revisão de dados pessoais e autorização.

## 4. Copywriting — tom de voz

**Não copiar o texto “Sobre / About” do LinkedIn e não replicar o resumo formal do PDF.** Escrever em primeira pessoa, de modo natural, dinâmico, próximo, objetivo, com linguagem profissional mas menos engessada. Evitar clichês como “apaixonado por tecnologia”, adjetivos exagerados e afirmações de senioridade. Não inventar conquistas mensuráveis.

### Hero — português (texto inicial sugerido)

**Eyebrow:** `IA • Machine Learning • Dados`

**Nome:** `Waldeney Filho.`

**Headline:** `Do dado ao modelo, do experimento à aplicação.`

**Descrição:** `Sou estudante de Ciência da Computação e trabalho com IA aplicada à saúde. Gosto de explorar como modelos aprendem, transformar dados em soluções úteis e entender o que acontece por trás dos frameworks.`

**CTAs:** `Conhecer projetos` (âncora) · `GitHub` (externo) · `LinkedIn` (externo).

### About — português (texto inicial sugerido)

`Gosto de colocar a mão no código e entender o caminho completo de uma solução: preparar os dados, experimentar modelos, avaliar os resultados e pensar em como tudo isso pode funcionar fora de um notebook.`

`Hoje atuo com pesquisa em inteligência artificial aplicada à saúde no CPIDT, trabalhando com Machine Learning, Deep Learning, processamento de áudio e linguagem, pipelines de dados e integração de aplicações de IA. Também curso Ciência da Computação na UECE.`

`Fora dos projetos de pesquisa, gosto de estudar fundamentos com projetos próprios. Um exemplo é minha série de redes neurais implementadas do zero em C, começando pelo Perceptron e avançando gradualmente para arquiteturas mais complexas. A ideia é aprender construindo — e compartilhar o processo.`

- Manter o texto visualmente dividido em parágrafos curtos.
- Não confundir estudos e experimentações pessoais com experiência de produção.

### Hero — inglês (adaptação, não tradução robótica)

**Eyebrow:** `AI • Machine Learning • Data`

**Headline:** `From data to models. From experiments to real applications.`

**Description:** `I'm a Computer Science student working with AI for healthcare. I enjoy figuring out how models learn, turning data into useful solutions, and understanding what happens behind the frameworks.`

**CTAs:** `Explore projects` · `GitHub` · `LinkedIn`.

### About — inglês

`I like getting hands-on and understanding the full journey of an AI solution: preparing data, experimenting with models, evaluating results, and figuring out how to make it work beyond a notebook.`

`I currently work on applied AI research for healthcare at CPIDT while studying Computer Science at UECE. My work involves machine learning, deep learning, speech and language processing, data pipelines, and AI application integration.`

`Outside research projects, I build things to strengthen my fundamentals. One example is my neural-networks-from-scratch series in C, starting with a Perceptron and gradually exploring more complex architectures. I learn by building — and sharing what I discover.`

**Nota sobre experiência:** não se apresentar como profissional sênior ou alegar experiências empresariais adicionais. “AI Engineer” e “Machine Learning Engineer” no título descrevem posicionamento profissional/interesses; o cargo concreto atual documentado é Cientista de Dados.

## 5. Projetos — conteúdo pronto

Criar uma grade de cards com **categorias/filtros opcionais**: `Pesquisa` e `Pessoais`. Cada card deve incluir título, categoria, datas quando confirmadas, descrição curta, principais tecnologias e um botão condicional para projeto ou repositório **somente quando houver URL real**. Para pesquisas sem repositório público, usar etiqueta `Projeto de pesquisa` e botão de detalhes na própria página, sem dar impressão de código aberto.

### 5.1 TEDAS-CE — IA aplicada à sepse

- **Categoria:** Pesquisa profissional / CPIDT.
- **Período:** outubro de 2026 – atual (conforme LinkedIn público).
- **Título curto do card (PT):** `TEDAS-CE · IA e dados clínicos`
- **Resumo PT:** `Projeto de pesquisa que explora processamento de relatos clínicos, transcrição de áudio e extração de informações para apoiar a análise de sepse. O desafio é transformar conteúdo não estruturado em dados úteis para validação e modelos de Machine Learning.`
- **Short EN:** `Research project exploring clinical speech transcription and information extraction to support sepsis-related analysis. The goal is to turn unstructured reports into structured inputs for validation and machine learning models.`
- **Tecnologias/temas:** Python, Speech-to-Text, ASR, NLP, NER, Transformers, LLMs, PyTorch, Hugging Face, dados clínicos, validação de modelos.
- **Atividades descritas publicamente:** pipeline de processamento de áudio/texto, extração de informações clínicas, integração com bases existentes, preparação de entradas e avaliação de modelos já treinados.
- **Cuidado:** apresentar essas frentes como escopo do projeto, **não declarar que todo o pipeline foi entregue e colocado em produção**. Não prometer métricas, diagnósticos ou resultados clínicos.
- **Repositório:** indisponível/não público; não criar link fictício.

### 5.2 MIND-BH — IA aplicada à análise de Alzheimer por fala

- **Categoria:** Pesquisa profissional / CPIDT.
- **Período:** abril de 2026 – atual (conforme LinkedIn público).
- **Título curto PT:** `MIND-BH · Inteligência artificial e fala`
- **Resumo PT:** `Pesquisa sobre padrões acústicos e linguísticos da fala associados ao comprometimento cognitivo. Investigo representações de áudio e linguagem e diferentes arquiteturas de aprendizado profundo para analisar essas relações.`
- **Short EN:** `Research exploring acoustic and linguistic speech patterns associated with cognitive impairment, using speech representations and deep learning architectures to investigate meaningful relationships.`
- **Tecnologias/temas:** Python, PyTorch, Hugging Face, NLP, análise de fala, biomarcadores acústicos e linguísticos, GNNs, GATs, Graph Transformers, Mamba/SSMs, Transformers, wav2vec 2.0, HuBERT, WavLM.
- **Biomarcadores abordados:** F0, formantes, jitter, shimmer, pausas, fluência, ritmo, diversidade lexical e estrutura do discurso.
- **Cuidado:** algumas arquiteturas são **investigadas/avaliadas**, não necessariamente implantadas. Não sugerir que o projeto faz diagnóstico médico validado ou substituir profissionais de saúde.
- **Repositório:** indisponível/não público.

### 5.3 Neural Networks from Scratch in C

- **Categoria:** Projeto pessoal / estudos em andamento.
- **Título PT:** `Redes neurais do zero em C`
- **Resumo PT:** `Uma série de implementações para entender redes neurais sem esconder a matemática atrás de frameworks. Comecei por um Perceptron que representa uma porta AND e quero evoluir por aprendizado de pesos, redes multicamadas, backpropagation e CNNs.`
- **Short EN:** `A hands-on series exploring neural networks without relying on high-level ML frameworks. It starts with an AND-gate Perceptron and is planned to progress through trainable models, multilayer networks, backpropagation and CNNs.`
- **Tecnologias:** C, álgebra linear, redes neurais, fundamentos de Deep Learning.
- **Estado confirmado:** Perceptron simples com pesos manuais e porta AND.
- **Próximas etapas:** perceptron treinável, MLP/backpropagation e CNN; **não apresentar como concluídos**.
- **Link:** usar apenas se o repositório real for localizado e autorizado. Na ausência, manter `Em desenvolvimento`.

### Diretrizes de card

- Exibir no máximo 2–3 frases no card; permitir detalhes expandidos por modal acessível ou uma subseção, sem mudar de rota.
- Diferenciar visualmente `Pesquisa profissional` e `Projeto pessoal`.
- Imagens: criar composições abstratas próprias em CSS/SVG relacionadas a áudio, grafos e redes neurais. Não incluir prontuários, dados clínicos ou imagens confidenciais.
- Mais projetos podem ser adicionados depois por arquivo de dados.

## 6. Experiência profissional

### CPIDT — Cientista de Dados

- **Organização:** Centro de Pesquisa, Desenvolvimento e Inovação (CPIDT).
- **Período:** 2025 – atual.
- **Local:** Fortaleza, Ceará, Brasil.
- **Categoria:** Experiência profissional, pesquisa aplicada em IA para saúde digital.

**Texto PT para timeline:**

`No CPIDT, trabalho com pesquisa e desenvolvimento de soluções de IA voltadas à saúde. Minha rotina combina experimentação com modelos de Machine Learning e Deep Learning, preparação de dados, APIs e investigação de aplicações envolvendo áudio, linguagem e LLMs.`

**Atividades documentadas no currículo:**

- Treinamento, validação e avaliação de modelos com Python, PyTorch e Hugging Face.
- Estudo de biomarcadores acústicos e linguísticos e processamento de linguagem.
- Pipelines ETL/ELT com Python, Pandas, NumPy e PostgreSQL.
- Modelagem de dados relacionais e consultas SQL.
- Desenvolvimento de APIs REST com FastAPI para integração de dados e componentes de IA.
- Automações e versionamento com Git/GitHub e práticas de CI/CD.
- Desenvolvimento/experimentação com agentes de IA usando LangChain e LangGraph.

**English:**

`At CPIDT, I work on applied AI research for healthcare, combining machine learning and deep learning experiments with data preparation, APIs, and speech, language and LLM-related applications.`

Não adicionar empresas, cargos ou datas não documentados.

## 7. Formação acadêmica

### Universidade Estadual do Ceará (UECE)

- **Curso:** Bacharelado em Ciência da Computação.
- **Período:** 2021 – 2027 (**conclusão prevista**, não concluído).
- **Local:** Fortaleza, Ceará, Brasil.
- **Resumo PT:** `Formação em Ciência da Computação, com estudos em algoritmos, estruturas de dados, software, bancos de dados e fundamentos de IA. Ao longo da graduação, venho conectando teoria e prática por meio de projetos de dados e pesquisa aplicada.`
- **EN:** `BSc in Computer Science (expected 2027), covering algorithms, data structures, software engineering, databases and AI fundamentals, with hands-on data projects and applied research.`

### SENAI

- **Curso:** Técnico em Redes de Computadores.
- **Período:** 2019 – 2022.
- **Resumo PT:** `Formação técnica em redes de computadores e fundamentos de infraestrutura e comunicação de dados.`
- **EN:** `Technical qualification in Computer Networks, with a foundation in networking and IT infrastructure.`

## 8. Tecnologias e habilidades

Usar chips ou cards organizados **sem barras falsas de proficiência**. Evitar colocar todas as ferramentas com o mesmo peso; priorizar IA, ML e dados.

**Linguagens:** Python, SQL, Java; C como estudo/projeto pessoal.

**Machine Learning / Deep Learning:** PyTorch, Hugging Face, Transformers, scikit-learn, treinamento, validação e avaliação de modelos.

**LLMs / NLP:** NLP, LLMs, LangChain, LangGraph, RAG, bases vetoriais, agentes de IA.

**Dados:** Pandas, NumPy, PostgreSQL, ETL/ELT, Apache Spark, Apache Airflow.

**APIs / MLOps / Desenvolvimento:** FastAPI, REST APIs, Git, GitHub, CI/CD, Linux, Docker, Kubernetes.

**Cloud / Plataformas:** AWS, Microsoft Azure, Azure Databricks, Azure Data Factory, Azure Data Lake Storage, Lakehouse.

Nota: tecnologias listadas representam conhecimento e experiência descritos no currículo; não afirmar que todas foram utilizadas em produção. Em projetos de pesquisa, distinguir ferramentas efetivamente utilizadas de tecnologias sob investigação.

## 9. Certificações e formação complementar

Cards organizados por emissor e data, com badge do emissor somente se houver asset oficial permitido ou ícone neutro. Exibir link `Ver credencial` **apenas se houver URL de verificação autêntica**. Não inventar `credential ID`, badge Credly nem expiração.

### Certificações profissionais

1. **AWS Certified AI Practitioner**
   - Emissor: Amazon Web Services (AWS).
   - Emissão: setembro de 2026, conforme LinkedIn público.
   - Expiração: setembro de 2029, conforme LinkedIn público.
   - Estado: confirmada no currículo e no LinkedIn público.
   - Link de verificação: **não fornecido no material acessível**; cadastrar quando disponível.

2. **AWS Certified Cloud Practitioner**
   - Emissor: Amazon Web Services (AWS).
   - Ano: 2026, conforme currículo PDF enviado.
   - Estado: **consta no currículo enviado**, porém não foi localizada na área pública de certificações do LinkedIn consultada. Não inventar mês, validade nem link de verificação.
   - Política de publicação: deixar o item modelado nos dados, com `display: false` por padrão até validação direta de credencial pelo proprietário; caso o proprietário decida publicá-la com base no currículo, `display: true` pode ser ativado sem refatorar UI.

### Cursos / certificados de conclusão

3. **Introduction to Kubernetes (LFS158)**
   - Emissor: The Linux Foundation.
   - Emissão: outubro de 2026, segundo a versão PT pública do LinkedIn.
   - Tipo: **certificado de conclusão de curso**, não tratar como certificação profissional de exame.
   - Estado: listado publicamente no LinkedIn.
   - Exibir na seção `Cursos e certificados` dentro de Certificações, separado das credenciais AWS.
   - Link: não informado; omitir botão até disponibilização.

**Não incluir** exames Azure/Databricks, certificações Oracle/Google, microcredenciais AWS ou quaisquer outros como obtidos sem evidência posterior.

## 10. Idiomas e internacionalização

- Usar `react-i18next` / `i18next` ou uma solução tipada simples com dicionários para todos os textos estáticos e dados de projeto.
- Manter o seletor PT/EN no header com estado visível.
- Definir `lang="pt-BR"` ou `lang="en"` no elemento `<html>` conforme idioma selecionado.
- Idioma inicial PT-BR; opcional persistir escolha no `localStorage`.
- Garantir que **todo conteúdo exibido ao visitante** seja traduzido: menu, hero, sobre, projetos, filtros, timeline, badges, ações, metadados e contato.
- Nomes oficiais de instituições, produtos e credenciais não precisam ser traduzidos.
- Ter metadados SEO coerentes em PT/EN quando viável.

## 11. Organização de componentes e dados

Estrutura inicial sugerida (adapte somente quando houver ganho claro de qualidade):

```text
portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png                  # opcional, criar somente asset válido
│   ├── images/                       # sem materiais confidenciais
│   └── curriculo/                    # colocar PDF revisado somente após aprovação
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── CertificationCard.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── SkillsGroup.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── skills.ts
│   │   └── certifications.ts
│   ├── i18n/
│   │   ├── index.ts
│   │   ├── pt.json
│   │   └── en.json
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Diretrizes de código:

- React funcional com hooks, TypeScript estrito, componentes reutilizáveis e dados tipados.
- Tailwind CSS versão atual compatível com Vite; seguir **documentação oficial da versão efetivamente instalada**.
- Motion for React somente se realmente agregar; não introduzir dependências desnecessárias.
- Ícones de `lucide-react` ou SVGs leves.
- CSS responsivo mobile-first.
- Sem React Router na primeira versão: navegação por âncoras.
- Sem infraestrutura server-side e sem dependência de APIs de terceiros para carregar conteúdo.
- `prefers-reduced-motion`, estados de foco visíveis, textos alternativos, teclado e contraste adequado.
- Dados editáveis em arquivos próprios, sem grandes strings de conteúdo embutidas no JSX.

## 12. Detalhes da interface

### Hero

- Ocupa boa parte da primeira tela sem exigir tela cheia no celular.
- Nome como elemento mais forte.
- Especialidades em faixa discreta.
- Texto de apresentação em 2–4 linhas, evitando blocos gigantes.
- CTAs: Projetos, GitHub, LinkedIn.
- Visual lateral opcional com grafo abstrato, composto de nós e conexões estilizados com delicadeza.

### Projetos

- Cards com organização consistente, bom espaçamento e hover discreto.
- Badge `Pesquisa` / `Pessoal`, indicadores de período e tecnologias.
- Cards de pesquisa com **sem link externo** quando o código não for público.
- Detalhes expandidos podem usar modal acessível, mas não são obrigatórios para MVP.

### Experiência e formação

- Timeline vertical com linha vermelha suave e marcadores.
- Ano/período visível, mas não roubar espaço do texto.
- Em mobile, timeline vira uma única coluna.

### Certificações

- Cards com título, emissor, mês/ano (quando documentado), status correto e botão condicional.
- Manter distinção entre certificações obtidas por exame e certificado de curso.
- Não apresentar a credencial Cloud Practitioner como validada no LinkedIn.

### Contato

- Encerramento breve e amigável, por exemplo:
  - PT: `Curtiu algum projeto ou quer trocar uma ideia sobre IA e dados? Me encontre por aqui.`
  - EN: `Interested in a project or want to talk about AI and data? You can reach me here.`
- Links GitHub, LinkedIn e e-mail.
- Footer discreto com autoria e ano atual dinâmico.

## 13. SEO, acessibilidade e performance

- `title` e meta description úteis.
- Open Graph/Twitter cards apenas com assets realmente presentes.
- Sem alegações de disponibilidade profissional nem dados inventados.
- Boa legibilidade em 320px, 375px, 768px, 1024px e desktop largo.
- Navegação por teclado, skip link, foco visível e semântica HTML correta (`header`, `nav`, `main`, `section`, `footer`).
- Otimizar imagens e evitar fontes pesadas.
- Reduzir motion para pessoas que preferem menos animações.
- Verificar `npm run build` e evitar erros TS/ESLint.
- Links externos com `rel="noopener noreferrer"` quando `target="_blank"`.
- Nenhuma chave/API secreta no front-end.

## 14. Deploy

- Preparar a aplicação para hospedagem estática no GitHub Pages ou Vercel/Netlify.
- Se publicar como repositório `WaldeneyForte.github.io`, considerar a raiz `/`.
- Se publicar como repositório de projeto, configurar corretamente `base` do Vite e URLs relativas para GitHub Pages.
- Documentar o workflow recomendado de GitHub Actions ou alternativas.
- Evitar hardcode de URLs de assets que quebrem com subdiretórios.

## 15. Fases de execução para o Codex

1. Inicializar o projeto Vite React TypeScript e instalar dependências mínimas.
2. Criar sistema visual (cores, tipografia, container, botões, cards).
3. Implementar header responsivo, âncoras e seletor PT/EN.
4. Montar Hero e Sobre com os textos definidos.
5. Implementar projetos a partir de dados tipados.
6. Criar seções de Experiência, Formação, Tecnologias e Certificações.
7. Implementar Contato, Footer, SEO e favicon.
8. Ajustar responsividade e acessibilidade.
9. Validar build, revisar links, revisar traduções e documentar uso no README.

**Critérios de aceite:**

- [ ] Um único site navegável por âncoras.
- [ ] Paleta preto/vermelho consistente, visual profissional e não copiado.
- [ ] Textos em PT/EN consistentes e seletor de idioma evidente.
- [ ] Projetos TEDAS, MIND-BH e Redes Neurais em C exibidos com status correto.
- [ ] CPIDT, UECE e SENAI com dados e períodos corretos.
- [ ] AWS AI Practitioner exibido; Kubernetes LFS158 rotulado como curso; Cloud Practitioner pendente de confirmação para exibição.
- [ ] Nada de chatbot/robô/RAG/backend.
- [ ] Funcionamento em mobile, desktop, teclado e modo de movimento reduzido.
- [ ] Nenhum link inventado, dado sensível ou informação confidencial.
- [ ] `npm run build` executa sem erro e README documenta execução e deploy.

## 16. Próxima fase (fora de escopo)

Após o MVP, poderá ser adicionada uma assistente/mascote com chatbot via backend FastAPI e sistema RAG baseado **apenas em conteúdos públicos autorizados**. Não colocar botão de chatbot inativo nem código morto de RAG nesta entrega. Apenas manter componentes desacoplados e conteúdo estruturado para futura reutilização.

---

## 17. Fontes e política de atualização

Informações compiladas a partir de:

1. Currículo PDF anexado pelo proprietário, `José_waldeney_CV_DS_CE (1).pdf`, página única.
2. Perfil público: https://www.linkedin.com/in/waldeney-filho/ — versão pública indexada em português consultada em 17/10/2026.
3. Informações do próprio proprietário sobre preferências visuais, projeto pessoal de redes neurais do zero e objetivos do portfólio.

**Conflitos/limitações de fontes:**
- A página direta do LinkedIn pode limitar acesso automatizado. Os detalhes foram consultados por versões públicas indexadas, que podem estar defasadas.
- AWS Cloud Practitioner consta no PDF (2026), mas não estava na listagem pública de certificações verificada. Validar antes de exibir por padrão.
- Introduction to Kubernetes (LFS158) consta no LinkedIn como certificado de curso; separar de exames de certificação profissional.
- Nenhum número de certificação ou URL de badge autenticada foi fornecido. Não inventar.
- Projetos de pesquisa são privados: respeitar limites de divulgação.

**Ao atualizar conteúdo:** privilegiar os dados confirmados pelo proprietário; pedir revisão antes de publicar novas credenciais, métricas, links, imagens clínicas ou detalhes privados.

---

## 18. Prompt de execução sugerido para o Codex

> Leia integralmente `PORTFOLIO_BRIEF.md` na raiz deste projeto e implemente a versão 1 do site descrito. Comece configurando Vite + React + TypeScript e Tailwind CSS. Construa uma landing page única, responsiva, em preto/vermelho, com navegação por âncoras, idioma PT/EN visível e todo o conteúdo profissional descrito no briefing. Não implemente chatbot, robô, backend ou RAG. Separe os dados dos componentes, respeite as ressalvas sobre certificações e dados privados, não invente links e finalize com build validado e README contendo instruções de execução/publicação. Tome decisões razoáveis sem interromper a implementação por preferências menores.

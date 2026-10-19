# Portfólio de Waldeney Filho

Projeto do portfólio pessoal de Waldeney Filho, voltado a inteligência artificial, Machine Learning e ciência de dados. A primeira versão é uma página única, responsiva e bilíngue (PT-BR/EN), com identidade visual em preto, grafite e vermelho e navegação por âncoras.

O conteúdo inclui apresentação, Sobre, Projetos, Experiência, Formação, Tecnologias, Certificações e Contato. O escopo desta versão não inclui chatbot, mascote, RAG, API, banco de dados ou backend.

## Estado atual

Etapas 1 a 9 concluídas no escopo local: preparação, aplicação, sistema visual, navegação, todas as seções, internacionalização PT-BR/EN, revisão de qualidade e validação final. A aplicação usa React, TypeScript estrito, Tailwind integrado pelo plugin Vite, ESLint e lockfile npm.

O site contém Sobre, três projetos com detalhes expansíveis, experiência no CPIDT, formação UECE/SENAI, tecnologias, certificações e contato com footer. O header tem seletor PT/EN funcional, inclusive no mobile; textos, dados e metadados acompanham a escolha. O build está validado para revisão local. Hospedagem, endereço público e publicação aguardam definição e autorização específicas.

A evolução visual está registrada em `MELHORIAS_PORTFOLIO.md`. Fases 2–9 concluídas no escopo técnico local: contato, composição, Hero, projetos, experiência/formação/tecnologias, certificações, movimento GSAP e revisão final Chrome/Edge. As limitações de cobertura e desempenho estão documentadas ao final; publicação exige aprovação própria.

A segunda evolução está em `PLANEJAMENTO_EVOLUCAO_VISUAL.md`: grafo com introdução finita, quatro transições entre seções, três narrativas SVG dos projetos, detalhes com expansão progressiva e timeline acadêmica foram implementados. A Fase 8 concluiu a validação técnica consolidada autorizada; o estado vigente e suas evidências ficam no início de `ESTADO_ATUAL.md` e `IMPLEMENTAR.md`. Os registros da primeira evolução abaixo são históricos.

Versões diretas instaladas e fixadas em `package.json`:

| Ferramenta | Versão |
|---|---|
| React / React DOM | 19.3.1 |
| GSAP / @gsap/react | 3.15.0 / 2.1.2 |
| TypeScript | 6.0.3 |
| Vite / plugin React | 8.3.4 / 6.1.2 |
| Tailwind CSS / plugin Vite | 4.3.3 / 4.3.3 |
| ESLint / typescript-eslint | 10.13.0 / 8.71.2 |

O TypeScript está em 6.0.3 para atender à faixa suportada pelo `typescript-eslint` instalado (`>=4.8.4 <6.1.0`). Os tipos do Node usam a linha 22; os tipos React e React DOM usam a linha 19.3. O lockfile registra também as dependências transitivas.

## Documentos locais

- `AGENTS.md`: processo de trabalho, aprovações e limites de implementação.
- `PORTFOLIO_BRIEF.md`: fonte de verdade para conteúdo, identidade visual e requisitos do produto.
- `IMPLEMENTAR.md`: checklist das nove etapas, critérios de aceite, aprovações e resultados de verificação.
- `ESTADO_ATUAL.md`: resumo vigente para retomada e limites da entrega.
- `PLANEJAMENTO_EVOLUCAO_VISUAL.md`: fases, decisões e evidências da segunda evolução.
- `README.md`: estado real do projeto e instruções de manutenção, atualizadas conforme cada etapa for executada.

Todos os arquivos `.md`, inclusive este README, ficam ignorados pelo Git conforme a regra do projeto. Permanecem no disco local, na raiz, fora de `src/` e de `public/`.

Enquanto essa regra estiver ativa, o README não aparecerá na página do repositório no GitHub. Uma cópia obtida apenas do remoto também não terá os documentos de briefing, instruções e planejamento; agentes que trabalhem somente sobre o remoto não terão acesso a eles. Não há exceções públicas configuradas.

## Ambiente e pré-requisitos

Ferramentas verificadas em 17/10/2026:

| Ferramenta | Versão disponível |
|---|---|
| Node.js | 22.14.0 |
| npm | 10.9.2 |
| Git | 2.47.1.windows.1 |

Pré-requisitos declarados em `package.json`: Node.js `^22.13.0 || >=24.0.0` e npm `>=10.0.0`. A base foi validada com Node 22.14.0 e npm 10.9.2. A compatibilidade foi conferida nos requisitos publicados dos pacotes selecionados.

## Instalação, execução, testes e build

Execute os comandos a partir da raiz do projeto.

Instalar as versões registradas no lockfile:

```sh
npm ci
```

Iniciar o desenvolvimento:

```sh
npm run dev
```

Abra a URL local informada pelo Vite no terminal, normalmente `http://localhost:5173`. Encerre o servidor com `Ctrl+C`.

Verificar tipos e regras de código:

```sh
npm run typecheck
npm run lint
```

O lint reprova avisos. Os scripts de verificação não corrigem automaticamente o código.

Gerar a versão de produção:

```sh
npm run build
```

O build verifica tipos com `tsc -b` e gera os arquivos estáticos em `dist/` com o Vite. Para conferir o resultado localmente:

```sh
npm run preview
```

Abra a URL indicada no terminal, normalmente `http://localhost:4173`, e use `Ctrl+C` para encerrar.

Ainda não há suíte de testes permanente ou script `npm test`. A validação usa lint, tipos, build e roteiros locais de navegador em Chrome/Edge para componentes, layouts, navegação, menu e movimento. Os arquivos temporários de verificação ficam em `.cache/`, ignorados pelo Git; a cobertura e os limites atuais estão registrados na entrega da Fase 8 ao final deste documento.

O roteiro consolidado local é `node .cache/evolution-consolidated-phase8/check.mjs`; acrescente `--edge` para Edge. Ele usa os navegadores já instalados, abre desenvolvimento/preview em 5173/4173, cria perfil isolado e encerra seus processos. Também reutiliza roteiros locais anteriores: não é uma suíte disponível em clones do remoto. O teste de contato escreve o e-mail público no clipboard e verifica somente o valor recém-escrito; execute-o apenas quando essa alteração for desejada.

## Estrutura atual

```text
Portifolio/
├── .git/
├── .gitignore
├── AGENTS.md
├── ESTADO_ATUAL.md
├── eslint.config.js
├── IMPLEMENTAR.md
├── index.html
├── package.json
├── package-lock.json
├── public/
│   ├── favicon.svg
│   └── 97138361.jpg
├── PORTFOLIO_BRIEF.md
├── PLANEJAMENTO_EVOLUCAO_VISUAL.md
├── MELHORIAS_PORTFOLIO.md
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── components/
    │   ├── Badge.tsx
    │   ├── Button.tsx
    │   ├── ButtonLink.tsx
    │   ├── Card.tsx
    │   ├── CertificationCard.tsx
    │   ├── Container.tsx
    │   ├── Footer.tsx
    │   ├── LanguageSwitcher.tsx
    │   ├── linkAttributes.ts
    │   ├── Navbar.tsx
    │   ├── NeuralGraph.tsx
    │   ├── PortfolioMotion.tsx
    │   ├── ProjectArtwork.tsx
    │   ├── ProjectCard.tsx
    │   ├── ProjectDetails.tsx
    │   ├── Section.tsx
    │   ├── SectionConnector.tsx
    │   ├── SectionHeading.tsx
    │   ├── SkillsGroup.tsx
    │   ├── TextLink.tsx
    │   └── TimelineItem.tsx
    ├── sections/
    │   ├── About.tsx
    │   ├── Certifications.tsx
    │   ├── Contact.tsx
    │   ├── Education.tsx
    │   ├── Experience.tsx
    │   ├── Hero.tsx
    │   ├── Projects.tsx
    │   └── Skills.tsx
    ├── i18n/
    │   ├── context.ts
    │   ├── en-content.ts
    │   ├── en.ts
    │   ├── index.ts
    │   ├── LanguageProvider.tsx
    │   ├── pt.ts
    │   └── types.ts
    ├── data/
    │   ├── heroGraph.ts
    │   ├── certifications.ts
    │   ├── education.ts
    │   ├── experience.ts
    │   ├── profile.ts
    │   ├── projects.ts
    │   ├── skills.ts
    │   └── types.ts
    ├── motion/
    │   ├── educationScene.ts
    │   ├── graphGeometry.ts
    │   ├── heroScene.ts
    │   ├── layoutRefresh.ts
    │   ├── projectScenes.ts
    │   └── transitionScenes.ts
    └── styles/
        └── globals.css
```

`node_modules/`, `dist/` e `.cache/` são gerados localmente e ignorados pelo Git. Os diretórios da aplicação contêm as seções, os componentes e as traduções implementadas.

`main.tsx` monta a aplicação em React StrictMode e LanguageProvider. `App.tsx` compõe header, main com oito seções e Footer. Os componentes consomem dados e rótulos do idioma selecionado pelo hook `useLanguage`. `globals.css` importa Tailwind 4 com `@import "tailwindcss"`; os plugins de React e Tailwind ficam em `vite.config.ts`. As configurações TypeScript separam aplicação e ferramentas Node; os caches de tipos ficam em `node_modules/.tmp/`.

## Header, navegação e Hero

`Navbar.tsx` implementa um header sticky com links nativos para `#sobre`, `#projetos`, `#experiencia`, `#formacao`, `#tecnologias`, `#certificacoes` e `#contato`. A marca leva a `#inicio`. Os componentes em `src/sections/` usam `Section.tsx` para manter título, ID estável, associação acessível e `tabIndex={-1}` em cada destino.

O primeiro link de teclado é o skip link para `#conteudo`. O header usa `--header-height` como tamanho mínimo; um ResizeObserver atualiza `--header-block-size` com a altura dos controles, e os destinos têm `scroll-margin-top` com uma margem adicional. A lista expandida não entra nessa medição no mobile. A rolagem suave é desativada quando há preferência por movimento reduzido.

A navegação desktop aparece a partir de 75 rem. Abaixo disso, um botão nativo controla a lista com `aria-expanded` e `aria-controls`. O menu fecha ao selecionar um link, pressionar Escape, clicar fora, sair da navegação por Tab ou mudar o breakpoint. Escape devolve o foco ao botão; ao reduzir a janela com um link desktop focado, o foco também é preservado no botão. A lista permite rolagem em telas baixas. A navegação usa os elementos `nav`, `ul`, `li` e `a`.

O breakpoint de 75 rem está no CSS e no `matchMedia` de `Navbar.tsx`; mantenha os dois valores sincronizados se ele for alterado.

O seletor tem dois botões nativos PT/EN com nomes acessíveis traduzidos e `aria-pressed` para identificar a escolha ativa. A seleção também recebe fundo e sublinhado de destaque, além do foco de teclado. Os botões têm alvos de pelo menos 44 × 44 px. A ordem visual e de foco é marca, idiomas e navegação; no mobile, a navegação fica após seu botão de expansão.

`Hero.tsx` usa o container amplo: identidade/nome em faixa superior e apresentação/grafo em duas colunas a partir de 64 rem. O nome usa escala fluida de 3–8 rem, e as especialidades têm faixa própria. No mobile, o grafo vira fundo recortado e discreto, sem acrescentar altura de conteúdo. Os CTAs são Conhecer projetos/Explore projects e Fale comigo/Get in touch, para `#projetos` e `#contato`; GitHub e LinkedIn permanecem no Contato. O link Mais sobre mim/More about me leva ao Sobre por âncora. Não há botão de currículo porque nenhum PDF público revisado e autorizado foi fornecido.

## Contato por e-mail

O contato encerra a página com o título “Vamos construir a próxima conexão.”, grafo decorativo, endereço em destaque e botão principal “Copiar e-mail”. E-mail e perfis continuam vindo de `profile`. O endereço é texto selecionável: não há hyperlink `mailto:`, abertura do Gmail ou dependência de cliente de e-mail.

“Copiar e-mail” usa a Clipboard API e confirma somente depois da escrita. Durante a operação, tentativas simultâneas são ignoradas sem remover o foco; sucesso troca ícone/texto, e uma região de status PT/EN apresenta progresso, confirmação ou falha. Cada tentativa renova o conteúdo da região. O botão reserva largura para evitar mudança de layout ao trocar seu texto. Se a API estiver indisponível ou recusar acesso, o endereço continua selecionável e a mensagem orienta cópia manual. Clipboard automático requer contexto seguro e permissões do navegador.

LinkedIn e GitHub têm ações próprias com proteção das novas abas. A seção mantém `#contato`, associação ao h2 e destino focável. Não há formulário ou serviço de envio. PortfolioMotion integra a entrada reversível do grafo e um pulso finito único; sem o módulo ou em movimento reduzido, permanece estático.

## Sistema visual e componentes

Os tokens de cores, fontes, tamanhos de texto e raios ficam em `@theme` em `src/styles/globals.css`, disponíveis também como utilitários Tailwind. As dimensões semânticas de layout e a duração das transições ficam nas variáveis de `:root`.

| Uso | Token / valor |
|---|---|
| Fundo | `--color-canvas`: `#0B0B0F` |
| Superfícies | `--color-surface`: `#19191F`; `--color-surface-raised`: `#1D1D25` |
| Destaque | `--color-accent`: `#DC243C` |
| Hover do botão principal | `--color-accent-strong`: `#BF1D33`, com texto branco |
| Links e foco | `--color-accent-bright` / `--color-focus`: `#FF455A` |
| Textos | `--color-foreground`: `#F5F5F5`; `--color-muted`: `#B7B7C1` |
| Bordas decorativas / controles | `--color-border`: `#34343D`; `--color-control-border`: `#777783` |
| Texto sobre vermelho principal | `--color-on-accent`: `#FFFFFF` |
| Corpo / títulos | `--font-sans` / `--font-heading`, com fontes locais e fallbacks |
| Títulos fluidos | `--text-display`: 2,5–5 rem; `--text-section`: 1,75–2,75 rem |
| Largura / margens | `--content-width`: 72 rem; `--content-width-wide`: 80 rem; `--page-gutter`: clamp(1,25 rem, 4vw, 4 rem) |
| Ritmos de seção | `--section-space-compact`: 2,5–4 rem; `--section-space-editorial`: 3,5–5 rem; `--section-space-feature`: 4–6 rem |
| Controles | `--control-height`: 2,75 rem |

O corpo prioriza Segoe UI e fontes de sistema. Títulos priorizam Bahnschrift e Aptos Display, com fallback para Segoe UI e fontes de sistema. Não há download de fontes ou dependência de serviço externo para a tipografia.

Componentes em `src/components/`:

| Componente | Uso |
|---|---|
| `Container` | Div com margens responsivas e props HTML nativas; `width="standard"` (72 rem, padrão) ou `"wide"` (80 rem). |
| `SectionHeading` | `title`, `headingId`, `eyebrow` e `description` opcionais; `level` 2 ou 3 para manter a hierarquia do documento. |
| `Button` | Ação nativa com variantes `primary`, `secondary` e `ghost`; `type="button"` por padrão, props como `disabled` e eventos preservados. |
| `ButtonLink` | Navegação com aparência de botão, `href` obrigatório e as mesmas variantes visuais. |
| `TextLink` | Link sublinhado, com `href` obrigatório e foco visível. |
| `Badge` | Rótulo estático com tons `neutral` ou `accent`; sem semântica de botão. |
| `Card` | `article` com superfície `default` ou `raised`; usar título e `aria-labelledby` conforme o conteúdo. |
| `NeuralGraph` | SVG decorativo próprio e oculto da árvore acessível. `variant="default"` no Contato; `"hero"` usa perfis desktop/mobile definidos em heroGraph.ts e geometria compartilhada. |
| `PortfolioMotion` | Componente sem DOM, carregado por lazy/Suspense e escopado pela ref do main. GSAP/ScrollTrigger opcionais, com cleanup, media queries e fallback estático se o chunk falhar. |
| `Section` | Estrutura compartilhada das seções editoriais com título/eyebrow/âncora, Container e section-body. Props `rhythm`, `layout` e `width` controlam composição; Contato usa estrutura própria. |
| `ProjectCard` / `ProjectArtwork` | Cards de pesquisa/estudo com arte original, tecnologias e detalhes nativos expansíveis. |
| `ProjectDetails` | Rodapé full-width com details/summary e enhancement WAAPI de 260 ms; reversões, foco e fallback nativo. |
| `SectionConnector` | Trechos SVG decorativos que conectam as passagens, sem alterar a altura das seções. |
| `TimelineItem` | Item temporal de experiência, com período, organização, resumo e grupos opcionais de atividades. Formação usa Card diretamente. |
| `SkillsGroup` | Grupo de rótulos estáticos; `emphasis` destaca a categoria sem indicar nível de proficiência. |
| `CertificationCard` | Credencial com símbolo neutro por tipo, emissor, título e datas; classificação no grupo e URL condicional. |
| `Footer` | Autoria, ano atual dinâmico e link de volta ao início. |
| `LanguageSwitcher` | Escolha PT/EN no header, com estado ativo e nomes acessíveis fornecidos pelo contexto. |

Os dois componentes de link preservam `rel` fornecido e acrescentam `noopener noreferrer` para `target="_blank"`. Os componentes consomem os textos traduzidos pelo contexto de idioma, mantendo conteúdo fora do JSX.

App só solicita PortfolioMotion quando existe preferência por movimento normal. Uma visita inicialmente reduzida não baixa o módulo; se a preferência mudar, ele é solicitado. Depois de carregado, matchMedia trata alterações futuras sem remontagem desnecessária.

`src/motion/heroScene.ts` organiza os nós e percorre sinais durante cerca de 4 s no desktop/2,4 s no mobile, depois repousa sem loop. O cursor influencia nós em até quatro unidades SVG no desktop com ponteiro fino. `graphGeometry.ts` mantém os endpoints presos aos nós. A rolagem ou navegação antecipada conclui a introdução; aba oculta suspende o movimento.

`transitionScenes.ts` liga Hero→Sobre, Sobre→Projetos, Projetos→Experiência e a entrada de Contato; `projectScenes.ts` anima documento/extração abstrata no TEDAS, waveform sintética no MIND e entradas/somatório/saída AND no projeto C. `educationScene.ts` preenche o eixo de leitura acadêmica. As cenas seguem o scroll natural e revertem ao subir; o pulso final de Contato ocorre uma vez. Mobile, touch e tela baixa têm versões simplificadas. Nenhuma ilustração representa dado clínico, resultado de pesquisa ou modelo treinado real.

`layoutRefresh.ts` agrupa medições após expansão, idioma e resize. `PortfolioMotion.tsx` adia refresh durante o trajeto nativo de uma âncora para preservar a navegação mobile. `ProjectDetails` cancela a expansão com segurança ao mudar idioma, tamanho ou preferência, restaurando altura automática e foco; sem WAAPI ou com movimento reduzido usa a abertura nativa. Outros efeitos devem evitar escrever nos mesmos atributos controlados pelas cenas.

Classes compartilhadas: `page-section`, `content-grid`, `action-group` e `badge-group`. A grade se adapta à largura disponível; os botões de um `action-group` ocupam a linha em telas de até 30 rem. Cards, textos, SVG e badges permitem quebra de conteúdo sem forçar largura horizontal.

O foco usa contorno de 2 px com afastamento de 4 px. Os controles têm altura mínima de 44 px na configuração padrão. `prefers-reduced-motion: reduce` remove transições e reverte os efeitos GSAP, inclusive se a preferência mudar durante a sessão. Os SVGs ficam estáticos nessa condição. Há tratamento de contorno no modo de cores forçadas.

## Atualização de conteúdo

Os textos e dados confirmados estão em `PORTFOLIO_BRIEF.md`; alterações de conteúdo devem ser confirmadas pelo proprietário e refletidas no planejamento.

Para atualizar nome, título profissional e URLs sociais, edite `profile` em `src/data/profile.ts`. O objeto usa inferência de tipos TypeScript com `as const`.

Os textos do Hero, rótulos acessíveis e itens de navegação estão em `src/i18n/pt.ts` e `src/i18n/en.ts`. Preserve os IDs das âncoras ao alterar rótulos ou traduções.

O conteúdo está separado da apresentação nestes arquivos:

| Arquivo em `src/data/` | Campos e uso |
|---|---|
| `profile.ts` | Nome, título, localização pública, e-mail, links sociais e os três parágrafos de `about`. |
| `projects.ts` | `id`, `title`, `category`, `artwork`, `period` opcional, `summary`, `technologies`, `details` e `repositoryUrl` opcional. |
| `experience.ts` | Timeline do CPIDT: título, organização, período, localização, resumo e `activityGroups`. |
| `education.ts` | Cards UECE/SENAI; `status` indica a conclusão prevista da graduação. |
| `skills.ts` | Grupos com ID, título e lista de tecnologias; C está identificado como estudo pessoal. |
| `certifications.ts` | Título, emissor, `kind`, `display`, datas/labels e `credentialUrl` opcional. |
| `types.ts` | Contratos Profile, Project, TimelineEntry, SkillGroupData e Certification. |

Os títulos das seções, ações, categorias, status, rótulos acessíveis e metadados ficam nos dicionários PT/EN. Os arquivos em `src/data/` são a base de conteúdo em português e dos campos compartilhados; suas versões inglesas são compostas em `src/i18n/en-content.ts`.

Para adicionar um projeto, siga o tipo Project e use um ID único. `category` aceita `research` ou `personal`; `artwork` aceita `clinical`, `speech` ou `network`. O card mostra até quatro tecnologias; as restantes aparecem nos detalhes, preservando a lista completa sem repetição. Projects deriva `position` da ordem para o índice decorativo do ProjectCard. O resumo deve ter no máximo duas a três frases. As datas são opcionais e devem ser confirmadas. Para pesquisas privadas, mantenha `repositoryUrl` ausente; a ação de repositório só é renderizada quando há uma URL real autorizada.

Os detalhes usam `details`/`summary` nativos, abrem na própria página e não alteram a rota. TEDAS-CE e MIND-BH apresentam frentes de pesquisa; redes neurais em C distingue a implementação atual dos próximos passos planejados.

Para atualizar experiência ou formação, preserve o formato TimelineEntry e IDs únicos. `activityGroups`, `location` e `status` são opcionais: omita dados não fornecidos. Cada grupo tem `id`, `title` e `activities` (lista de textos). Atualize os mesmos IDs e as traduções em `en-content.ts`; mantenha cada atividade uma única vez. Formação usa lista vertical própria, com UECE em destaque e SENAI abaixo. O trilho representa a leitura da página, sem percentual de conclusão acadêmica. UECE deve continuar indicada como conclusão prevista enquanto não houver confirmação da conclusão.

Skills preserva seis categorias e 36 competências. O destaque editorial é definido em `Skills.tsx` pelos IDs `machine-learning`, `language` e `data`; não representa graduação de domínio. Os chips são informações estáticas, sem eventos, tabulação ou aparência de botões acionáveis.

Para credenciais, `kind` aceita `professional` ou `course`, e `display` controla a inclusão na página. Cloud Practitioner está modelada com `display: false` e apenas o ano confirmado; a exibição exige confirmação do proprietário. A lista é filtrada antes da renderização e separada em certificações profissionais e cursos.

`issuedLabel` registra a data conhecida para leitura. `issuedOn`, quando disponível, usa ano/mês confirmado (`YYYY-MM`) para o elemento time. Se só houver ano, omita `issuedOn` e use o ano em `issuedLabel`; não invente mês. `expiresOn`/`expiresLabel` e `credentialUrl` são opcionais. Sem URL autêntica, o botão Ver credencial é omitido. Os dados ficam no frontend, portanto todos os registros devem conter apenas informações autorizadas, mesmo quando ocultos.

Ao atualizar conteúdo:

- Manter PT-BR e EN equivalentes, incluindo menu, ações, estados, datas e mensagens acessíveis.
- Usar somente informações confirmadas; não inventar métricas, datas, links ou experiência de produção.
- Diferenciar o escopo das pesquisas TEDAS-CE e MIND-BH de resultados entregues e preservar informações privadas.
- Apresentar o projeto de redes neurais em C conforme o estado confirmado: Perceptron com pesos manuais e porta AND. As demais arquiteturas são planos.
- Exibir AWS AI Practitioner conforme o briefing, mantendo ações de verificação ocultas até existir URL autêntica.
- Manter AWS Cloud Practitioner oculta por padrão (`display: false`) até confirmação do proprietário.
- Apresentar Introduction to Kubernetes (LFS158) como curso, separado de certificações por exame.
- Disponibilizar currículo somente após revisão dos dados pessoais e autorização específica; não copiar o PDF original automaticamente para a aplicação.

## Idiomas e manutenção de traduções

A solução usa estado/contexto do React e dicionários tipados, sem biblioteca adicional. `Locale` aceita `pt-BR` ou `en`; cada carregamento inicia em PT-BR. A escolha vale durante a visita e não é gravada em localStorage nem inferida do navegador.

`LanguageProvider.tsx` fornece `locale`, `setLocale`, `copy` e `content`. Os componentes usam `useLanguage` de `context.ts`; os registros dos dicionários e conteúdos ficam em `index.ts`.

Para atualizar a interface:

1. Edite a chave correspondente em `pt.ts`.
2. Atualize a mesma chave em `en.ts`; o tipo Dictionary deriva da estrutura PT e exige as mesmas chaves, estrutura de navegação e IDs.
3. Atualize `meta.title` e `meta.description` nos dois idiomas quando necessário. O HTML estático contém os valores PT iniciais; mantenha `index.html` sincronizado com os metadados PT.

Para atualizar conteúdo profissional:

1. Edite os dados confirmados em `src/data/`.
2. Atualize os campos traduzíveis em `en-content.ts`: perfil/Sobre, títulos, descrições, períodos, atividades, tecnologias genéricas, status e labels de datas.
3. Para novos registros, acrescente a tradução com o mesmo ID. Os mapas ingleses usam os IDs literais da base e são verificados pelo TypeScript.
4. Mantenha nomes oficiais de instituições, produtos e credenciais quando apropriado.

As traduções são aplicadas sobre os registros compartilhados. IDs, categorias, arte, instituições, URLs, datas ISO e `display` não são redefinidos pelos mapas de texto em inglês; a política de Cloud Practitioner e de links condicionais é comum aos dois idiomas.

A troca atualiza `html.lang`, title e meta description. Âncoras mantêm seus IDs em português, sem rotas diferentes por idioma. Menu aberto e detalhes de projeto expandidos são preservados, e o foco permanece no botão de idioma. Ao recarregar, o idioma volta a PT-BR.

Depois de editar traduções, execute `npm run lint` e `npm run build`, confira os textos nos dois idiomas e teste o seletor por teclado e em telas pequenas.

## Variáveis de ambiente

Não há variáveis de ambiente necessárias ou configuradas na aplicação. Desenvolvimento e build funcionam sem arquivo `.env`.

O `.gitignore` cobre `.env` e `.env.*` e permite versionar `.env.example`. Quando houver configuração real, o arquivo de exemplo deverá conter somente nomes e valores fictícios, com instruções de preenchimento local neste README.

Não colocar senhas, tokens ou chaves privadas em código ou configuração enviada ao navegador. Um arquivo ignorado pelo Git não torna seguros os valores incorporados ao build de uma aplicação frontend.

## Preparação para publicação

A saída estática está em `dist/`: `index.html`, `favicon.svg`, o retrato `97138361.jpg` e os bundles CSS/JavaScript com hash em `assets/`. Não há servidor de aplicação, banco de dados ou dependência de API para carregar o conteúdo. O preview do Vite serve para conferência local do build.

Nenhum provedor, domínio, repositório remoto ou workflow de hospedagem foi configurado. `vite.config.ts` mantém a base padrão `/`, validada no preview local. A publicação em subdiretório exige definir o destino, ajustar e verificar a base e os caminhos dos assets antes de publicar. Não há procedimento de deploy autorizado nesta entrega.

Pendências para uma publicação futura:

- Confirmar hospedagem e URL pública, incluindo uso de raiz ou subdiretório; autorizar a configuração correspondente.
- Validar os links sociais no ambiente público e testar o build no endereço escolhido.
- Autorizar separadamente commit, push e publicação, conforme o fluxo desejado.

URLs de credenciais, repositório pessoal e currículo revisado continuam opcionais e ausentes até fornecimento e autorização. Cloud Practitioner permanece oculta até confirmação. Os limites de acessibilidade e desempenho estão registrados abaixo.

## Recursos visuais

`public/97138361.jpg` é o retrato original fornecido e autorizado pelo proprietário para a seção Sobre (460 × 460, 22.568 bytes). `About.tsx` o exibe com dimensões reservadas, carregamento lazy, texto alternativo PT/EN e caminho que respeita a base do Vite. A foto acompanha a localização na coluna lateral em desktop e aparece antes do texto em mobile.

`NeuralGraph.tsx` contém SVGs originais: o Hero usa 12 nós no desktop e oito no mobile, poses orgânica/neural e halos discretos; dados em `src/data/heroGraph.ts`. A variante padrão mantém sua geometria no Contato. `ProjectArtwork.tsx` contém três ilustrações conceituais próprias, incluindo o esquema de Perceptron AND. `SectionConnector.tsx` acrescenta os trechos decorativos entre seções. Não utilizam dados de pesquisa, bibliotecas de gráficos ou recursos de terceiros. As formas e cores ficam no código e no CSS.

Os ícones de abrir/fechar do menu também são SVGs simples criados no próprio código. Não foram adicionadas bibliotecas de ícones.

`public/favicon.svg` é uma composição original de nós e conexões, nas cores do site, sem marcas de terceiros. O HTML referencia esse ícone e informa a cor do tema. Title e description acompanham o idioma; canonical, hreflang e imagens sociais dependem de um endereço público e assets confirmados. A aplicação usa uma URL com estado de idioma em memória; o HTML inicial está em PT-BR e a tradução depende de JavaScript.

`ProjectArtwork.tsx` cria composições SVG próprias em viewBox 640 × 320: documento/estruturação para TEDAS, fala/órbitas para MIND-BH e dois sinais de entrada/somatório/saída AND para o estudo em C. Formas e alturas das ondas são decorativas, sem representar prontuários, medições, resultados reais ou arquiteturas adicionais já implementadas. Nenhum asset clínico foi utilizado.

As fontes são fornecidas pelo sistema operacional do visitante, sem arquivos de fontes redistribuídos. O retrato fornecido é a única imagem raster; não há ícones de terceiros ou imagens carregadas de serviços externos.

As referências visuais do briefing servem como inspiração; não autorizam cópia de layout, texto, código ou imagens. Não incluir dados clínicos ou materiais confidenciais de pesquisa nos assets.

## Verificações realizadas

- Instalação inicial com `npm install`: 172 pacotes adicionados, 173 auditados e zero vulnerabilidades reportadas naquele momento.
- `npm ls --depth=0`: dependências diretas instaladas nas versões declaradas, sem conflitos reportados.
- `npm run lint`: passou sem erros ou avisos.
- `npm run build`: passou, incluindo a verificação de tipos.
- Desenvolvimento: HTTP 200 para a página, entradas React, dados de perfil e CSS.
- Preview: HTTP 200 para o HTML e seus assets JavaScript/CSS; classes Tailwind e nome do perfil presentes no build.
- Etapa 4: aplicação e componentes verificados no Chrome headless em 320, 375, 768, 1024 e 1440 px, sem transbordamento horizontal; controles medidos com altura mínima de 44 px.
- Teclado: Tab percorre os controles com foco visível, ignora botão desabilitado; Enter/Espaço ativam o botão; âncora funciona; botão padrão não envia o formulário.
- Contraste de texto: oito combinações de botões, links e badges medidas sobre seus fundos reais, todas acima de 4,5:1 (menor: 4,82:1 no botão principal). A cor clara padrão sobre vermelho foi substituída por branco nos botões para atingir esse limite.
- Hover do botão principal e emulação de movimento reduzido verificados no navegador; transições passam a `0s` com a preferência reduzida. Nenhuma exceção JavaScript foi observada.
- Capturas dos componentes em 320 e 1440 px revisadas visualmente; arquivos e resultados em `.cache/stage4/`. A página temporária de componentes não faz parte da aplicação ou do build.
- Chrome e servidor temporários encerrados ao terminar. Essas verificações cobrem os componentes desta etapa; a revisão da página completa será feita quando suas seções estiverem implementadas.
- Etapa 5: Hero/header sem transbordamento em 320, 375, 768, 1024, 1199, 1200 e 1440 px, incluindo o breakpoint mobile/desktop e as dimensões dos controles.
- Skip link: primeiro Tab exibe o link, Enter transfere foco ao main e o Tab seguinte alcança a ação do Hero.
- Menu: Enter/Espaço, Tab, Escape, seleção de link, clique fora e saída de foco verificados. Redimensionamento preserva o foco quando links desktop são ocultados; a lista tem rolagem em viewport de 844 × 390 px.
- Sete âncoras e CTA de projetos verificados por teclado; os títulos permanecem visíveis abaixo do header e o foco vai para o destino.
- URLs sociais, proteção das novas abas, ausência de PDF sem autorização e movimento reduzido conferidos. Nenhuma exceção JavaScript observada.
- Capturas do Hero desktop/mobile e menu revisadas visualmente; resultados em `.cache/stage5/`. Browser com perfil isolado e servidor foram encerrados ao terminar.
- Etapa 6: conferidos três projetos, uma experiência, duas formações, seis grupos de tecnologias e duas credenciais visíveis; About com três parágrafos e Footer com ano dinâmico.
- Políticas de conteúdo: Cloud Practitioner modelada e oculta, sem mês ou expiração inventados; datas AI Practitioner/LFS158 corretas, curso separado de certificação, graduação prevista e URLs condicionais sem links não fornecidos.
- Página completa sem transbordamento em 320, 375, 768, 1024 e 1440 px; ações e summaries com pelo menos 44 px de altura.
- Detalhes dos três projetos abrem com Enter e fecham com Espaço em 320 e 1440 px, preservando foco visível e rota. Conteúdo expandido, temas e próximos passos verificados.
- Sete âncoras e Voltar ao início conferidos por teclado após o preenchimento. IDs únicos, nenhum destino interno ausente; links externos limitados aos perfis confirmados e e-mail profissional.
- Lint e build passaram; nenhuma exceção JavaScript observada no Chrome. Capturas de Projetos, Formação, Certificações e Contato geradas, com revisão visual de projetos desktop/mobile, certificações desktop e contato mobile; resultados em `.cache/stage6/`. Processos temporários encerrados ao terminar.
- Etapa 7: 72 caminhos de chave equivalentes entre os dicionários e paridade de IDs, URLs, datas ISO, emissores, flags e quantidades de conteúdo entre PT/EN.
- Verificação no preview do build de produção: interface, dados, datas, badges, tecnologias, textos de acessibilidade, title, description e html.lang comparados nos dois idiomas. Nomes oficiais preservados e Cloud Practitioner oculta.
- Doze layouts verificados: PT e EN em 320, 375, 768, 1024, 1200 e 1440 px, sem transbordamento em relação à largura útil da página, considerando a barra de rolagem. A largura mínima fixa do body foi removida para permitir essa adaptação.
- Seletor verificado com Enter e Espaço, `aria-pressed` exclusivo, foco mantido e alvos de pelo menos 44 × 44 px. Troca preserva âncora, detalhes expandidos e menu aberto; Escape e navegação mobile seguem funcionando nos dois idiomas.
- Recarregamento retorna ao PT-BR, com textos e metadados correspondentes. Lint/build passaram e nenhuma exceção JavaScript foi observada; capturas inglesas mobile/desktop revisadas. Resultados em `.cache/stage7/`, com Chrome, desenvolvimento e preview encerrados ao terminar.

### Revisão da Etapa 8

- Conteúdo PT/EN confrontado com o briefing: datas e instituições, graduação prevista, pesquisas em andamento, Perceptron manual e próximos passos planejados, curso separado de certificação e Cloud Practitioner oculta. Nenhum novo dado profissional foi acrescentado.
- Links internos têm destinos; links externos correspondem aos dois perfis do briefing e usam `noopener noreferrer` nas novas abas. As tentativas de abrir GitHub e LinkedIn pela ferramenta web retornaram erro; a disponibilidade externa e a titularidade não foram verificadas independentemente. Links de projetos, credenciais e currículo continuam condicionados ao material aprovado.
- Inspeção de `src/`, `public/`, HTML e build sem telefone, endereço detalhado, documentos, prontuários, PDF ou padrões de chaves privadas/tokens. Essa busca é uma inspeção pontual, sem garantia de detecção de todo tipo de segredo. O único arquivo de `public/` é o favicon original.
- Rótulos acessíveis do seletor incluem PT/EN e o nome do idioma. A árvore de acessibilidade do Chrome apresenta 22 links/botões/expansores nomeados e 27 títulos nos dois idiomas, sem saltos de nível; um h1 e um main, IDs únicos e referências ARIA resolvidas. SVGs decorativos ficam ocultos da árvore.
- Layout PT/EN em 320, 375, 768, 1024, 1200 e 1440 px; detalhes abertos também conferidos de 320 a 1440 px. Texto ampliado para 200% em 320, 768 e 1440 px sem transbordamento. Corrigido o header mobile para permitir quebra dos controles; ResizeObserver mede as linhas do cabeçalho para compensar âncoras e limitar a lista mobile. A expansão da lista é excluída dessa medição no mobile.
- Skip link, menu, idioma, âncoras e tabulação pelos 11 controles do main/footer passaram. Foco visível de 2 px; títulos de Projetos permanecem abaixo do cabeçalho inclusive com texto ampliado. Oito pares de texto/fundo medidos na página expandida: menor contraste 4,82:1. Movimento reduzido mantém rolagem automática e transições de 0s.
- Favicon servido com HTTP 200 e tipo SVG. Lint/build finais passaram; nenhuma exceção JavaScript observada. Capturas mobile e com texto ampliado revisadas; resultados em `.cache/stage8/`. Browser com perfil isolado e servidores encerrados.

Peso do build revisto (bytes reais e gzip calculado localmente com `node:zlib`, configuração padrão; o servidor de hospedagem definirá a compressão efetiva):

| Arquivo | Bytes | Bytes gzip |
|---|---:|---:|
| HTML | 682 | 405 |
| Favicon SVG | 429 | 264 |
| CSS | 18.588 | 4.793 |
| JavaScript | 252.315 | 77.653 |
| Total | 272.014 | 83.115 |

Fontes do sistema, SVGs no código e apenas React/React DOM como dependências de execução; nenhum pacote novo, raster, fonte remota ou serviço adicionado. A carga observada no preview local teve FCP de 72 ms e DOMContentLoaded de 41,6 ms em uma execução sem limitação de rede/CPU. Esses valores não representam desempenho em produção. O navegador recebeu também uma tentativa de carregar um script do antivírus Kaspersky instalado no ambiente, ausente do código/build; a medição está sujeita a essa interferência. Não foi executado Lighthouse nem obtida pontuação de Core Web Vitals. Faltam testes manuais com leitor de tela, outros navegadores e hospedagem real; as verificações não constituem certificação integral WCAG.

Neste ambiente do agente, o sandbox bloqueou consultas/downloads npm e subprocessos do Vite. Instalação, build e verificação HTTP passaram com execução autorizada fora do sandbox. O instalador auxiliar do Sites falhou ao localizar o npm no Windows; a instalação foi concluída pelo npm diretamente.

As regras de arquivos ignorados são verificadas com `git check-ignore`; o estado local e os arquivos rastreados são conferidos com `git status` e `git ls-files`. Os resultados detalhados ficam registrados em `IMPLEMENTAR.md`.

O `.gitignore` não deixa de rastrear arquivos que já estejam no índice. Qualquer remoção futura do índice requer autorização específica e deve preservar os arquivos locais.

## Validação final — Etapa 9

Em 17/10/2026, `npm run lint`, `npm run build` (incluindo tipos) e `npm ls --depth=0` passaram. Manifesto e lockfile têm as mesmas dependências e requisitos de ambiente. A instalação limpa por `npm ci` é a instrução para reproduzir o ambiente; não foi repetida nesta etapa.

O preview do build foi verificado no Chrome com os dois idiomas: traduções e metadados, navegação, menu mobile, seletor por teclado, preservação de âncoras/detalhes, credenciais e links condicionais. Os 12 layouts padrão e os seis cenários de texto a 200% passaram; foco, semântica, contraste e movimento reduzido mantiveram os resultados da Etapa 8. Nenhuma exceção JavaScript observada.

A conferência de `dist/` encontrou somente os quatro arquivos esperados, com referências HTML resolvidas e favicon idêntico ao original. Não há documentação local, PDF, sourcemaps ou arquivos de ambiente; a busca por padrões comuns de segredos e caminhos locais não encontrou ocorrências. O manifesto local em `.cache/stage9/artifacts.json` registra tamanhos e hashes SHA-256; os demais roteiros, resultados e capturas ficam na mesma pasta ignorada. Browser e servidores temporários foram encerrados.

Os dez critérios da seção 15 do briefing foram confrontados no `IMPLEMENTAR.md`. A execução local está concluída; configuração e publicação permanecem condicionadas ao destino e à aprovação específica. As limitações de leitor de tela, outros navegadores, links externos e medições em produção continuam válidas. Não há suíte permanente nem pontuação de auditoria integral.

## Ajuste posterior — foto e contato

Por solicitação direta do proprietário, foi adicionada a foto à seção Sobre e o botão principal de contato passou a abrir o Gmail pelo navegador, com cópia do endereço como alternativa. Lint/build passaram. No preview do build, foto original de 460 × 460 carregada e preservada, texto alternativo PT/EN e dez cenários de layout (320/375/768/1024/1440 px nos dois idiomas) passaram sem transbordamento. Destinatário, parâmetros do compositor, nova aba protegida, link mailto e acionamento de cópia por Enter/Espaço foram conferidos. Sucesso e recusa da Clipboard API foram simulados para validar feedback, sem alterar o clipboard do usuário. Nenhuma mensagem foi enviada e o envio autenticado no Gmail não foi testado. Capturas de Sobre desktop e Contato mobile revisadas; resultados em `.cache/photo-contact/`. A conferência de quatro arquivos e os pesos das etapas 8–9 acima são históricos, anteriores à inclusão do retrato.

## Referências técnicas consultadas

- [Vite: instalação e requisitos do Node](https://vite.dev/guide/).
- [Tailwind CSS: integração com Vite](https://tailwindcss.com/docs/installation/using-vite).
- [Plugin oficial React para Vite](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react).
- [typescript-eslint: configuração inicial](https://typescript-eslint.io/getting-started/) e [compatibilidade de versões](https://typescript-eslint.io/users/dependency-versions/).
- [ESLint: configuração](https://eslint.org/docs/latest/use/configure/configuration-files).
- [Tailwind CSS: tokens com `@theme`](https://tailwindcss.com/docs/theme).
- [WCAG: contraste de texto](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) e [contraste de controles](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).
- [WCAG: incluir o rótulo visível no nome acessível](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).
- [W3C APG: navegação com botão de expansão](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/), consultado como referência de comportamento acessível.

## Evolução visual — Fase 2 concluída

O contato descrito em “Contato por e-mail” substitui o fluxo Gmail/mailto do ajuste anterior, mantido acima apenas como histórico. Fonte de conteúdo e perfil preservados; encerramento com título grande, grafo estático, e-mail selecionável, cópia primária e perfis sociais evidentes. O registro detalhado fica em MELHORIAS_PORTFOLIO.md, seção F.3.

Lint/build finais passaram. Dez layouts PT/EN de 320 a 1440 px, texto 200% em 320 px, foco, menu/âncoras e dimensões estáveis do botão foram conferidos no preview. A cópia real foi confirmada no Chrome com permissões no perfil isolado: o endereço público foi escrito e só então lido, sem consultar o clipboard anterior. Repetição por Enter/Espaço, operação pendente, bloqueio de concorrência, troca de idioma e recusa/API indisponível foram verificados (falhas simuladas). O clipboard permaneceu com o e-mail público ao terminar. Nenhuma exceção JavaScript; capturas em .cache/evolution-contact/, com browser/servidores encerrados. Sem leitor de tela, medição CWV ou auditoria integral nesta fase. Nenhuma dependência instalada; fases seguintes exigem nova autorização.

## Evolução visual — Fase 3 concluída

Section aceita rhythm compact/editorial/feature (padrão editorial), layout stacked/aside (padrão stacked) e width standard/wide (padrão standard). Experiência usa editorial/aside, Formação compact/aside, Certificações compact, Projetos feature/wide e Tecnologias editorial/wide; Sobre mantém editorial padrão. A composição lateral inicia em 64 rem e volta à pilha no mobile. Hero mantém sua estrutura; Contato tem padding próprio e composição da Fase 2. Projetos e Skills têm regras de grade independentes. As bordas/eyebrows continuam orientando seções, e um fundo sutil distingue Projetos.

Lint/build e 24 cenários de preview PT/EN com detalhes abertos/fechados passaram entre 320 e 1920 px. Comparação de conteúdo integral idêntica; âncoras/foco, menu mobile, texto 200%, foto e regras de exibição preservados. Antes/depois e medições em .cache/evolution-composition/; tabela/resumo em MELHORIAS_PORTFOLIO.md F.4. A revisão foi no Chrome headless, sem nova auditoria integral de leitor de tela/contraste/CWV ou teste em outros navegadores. Fase 4 depende de aprovação própria.

## Evolução visual — Fase 4 concluída

Hero e Sobre foram integrados visualmente com identidade mais ampla, nova variante gráfica estática, âncora Mais sobre mim/More about me e moldura sutil no retrato. Conteúdo profissional e CTAs anteriores foram preservados. As camadas data-hero-part/data-graph-layer preparam movimento futuro, mas esta versão não depende de biblioteca de animação. O contrato e os limites propostos para a Fase 8 estão em MELHORIAS_PORTFOLIO.md F.5.

Lint/build passaram. Doze layouts PT/EN entre 320 e 1920 px, foco/âncoras em desktop/mobile, texto 200%, foto e geometria dos grafos padrão de Contato/C foram conferidos no Chrome. Contraste conservador sobre a decoração e dimensões/proporção reservadas da foto verificados; sem novo relatório de CLS/CWV, leitor de tela ou revisão em outros navegadores. Nenhuma exceção JavaScript. Capturas e resultados em .cache/evolution-hero/, com browser e servidores temporários encerrados. Fase 5 depende de aprovação própria.

## Evolução visual — Fase 5 concluída

Três faixas de projetos com artes específicas e hierarquia ampliada: arte/conteúdo lado a lado em 64 rem ou mais, com decoração alternada, e pilha natural no mobile. Details permanece nativo; quatro tecnologias iniciais e apenas as adicionais na expansão evitam duplicação. Sem sticky/pin/carrossel; camadas gráficas preparam movimentos posteriores. Dados, categorias e ausência de URLs públicas preservados.

Lint/build e 24 cenários PT/EN entre 320 e 1920 px passaram. Teclado, foco, detalhes durante troca de idioma, hash/âncoras, landscape, texto 200%, semântica dos expansores e ausência de links privados conferidos no Chrome. Capturas corretas geradas com movimento reduzido em .cache/evolution-projects/; TEDAS/MIND/C e versão mobile revisados visualmente. Nenhuma exceção JavaScript; browser/servidores encerrados. Não houve nova auditoria integral de contraste/CWV ou leitor de tela. Dados e decisões em MELHORIAS_PORTFOLIO.md F.6; Fase 6 depende de aprovação própria. Roteiros históricos que esperavam lista integral duplicada nos details precisam adaptação a esta composição.

## Evolução visual — Fase 6 concluída

Experiência agora usa composição editorial empilhada, data lateral e sete atividades em três grupos temáticos. Formação usa dois cards de altura natural, lado a lado a partir de 48 rem; instituições, períodos e conclusão prevista preservados. Tecnologias mantém seis categorias e 36 itens, com destaque editorial a ML/DL, LLMs/NLP e Dados, divisores e chips refinados. Essas configurações substituem as composições de Experiência/Formação registradas historicamente na Fase 3. Sem dependências ou efeitos de scroll novos.

Lint/build finais passaram. A comparação PT/EN preservou todos os campos e atividades anteriores, dados acadêmicos, competências e textos das demais seções. Doze layouts entre 320 e 1920 px, texto 200% em 320 px, âncoras/menu mobile e troca PT/EN por teclado passaram no preview Chrome; IDs e referências ARIA conferidos, sem exceções JavaScript. Capturas desktop/mobile revisadas. Evidências em `.cache/evolution-career/` e registro detalhado em MELHORIAS_PORTFOLIO.md F.7; browser/servidores encerrados. Sem leitor de tela manual, outros navegadores ou nova auditoria integral de contraste/CWV. Fase 7 exige autorização própria.

## Evolução visual — Fase 7 concluída

Certificações mantém grupos profissional/curso, com emissor ao lado de um símbolo genérico, título em destaque e datas agrupadas após um divisor. A classificação aparece nos títulos dos grupos; o Badge repetido foi removido dos cards. Os SVGs de certificado/livro são próprios, decorativos e não representam badges oficiais ou verificação. A variante profissional tem destaque vermelho discreto; o curso mantém grafite. Hover de borda usa o token de 180 ms e respeita movimento reduzido; nenhum card ganhou comportamento de botão.

Dados e traduções não foram alterados: AWS AI Practitioner visível com setembro/2026 e setembro/2029; LFS158 como curso de outubro/2026; Cloud Practitioner oculta até confirmação. Sem badges oficiais ou URLs fornecidos, nenhuma imagem de marca ou link foi incluído. O link condicional existente pode ser usado após cadastro de URL autêntica autorizada.

Lint/build passaram. Comparação PT/EN de títulos, emissores, grupos, datas/ISO e links idêntica ao baseline, com hashes dos dados/tipos/EN e dependências preservados. Doze layouts entre 320 e 1920 px e texto 200% em 320 px sem overflow; âncora/menu mobile por teclado, títulos na árvore acessível, ARIA/IDs e movimento reduzido conferidos. Sem exceções JavaScript. Capturas desktop/mobile revisadas; evidências em `.cache/evolution-certifications/` e MELHORIAS_PORTFOLIO.md F.8. Chrome e servidores encerrados. Limites de leitor de tela, outros navegadores, contraste integral e CWV permanecem. Fase 8 e suas dependências exigem aprovação própria.

## Evolução visual — Fase 8 concluída

GSAP 3.15.0 e @gsap/react 2.1.2 foram instalados após autorização; requisitos React >=17/GSAP ^3.12.5 do adaptador atendidos. ScrollTrigger importado do GSAP. Referências: [adaptador oficial](https://github.com/greensock/react), [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/), [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) e [licença padrão GSAP](https://gsap.com/community/standard-license/). A licença permite uso em websites e não é MIT; o portfólio não fornece editor visual de animações.

PortfolioMotion retorna null e é carregado separadamente por lazy/Suspense. Conteúdo inicia visível; falha de import mantém a composição estática. A aplicação continua CSR: isso não significa funcionar sem todo JavaScript. Movimento reduzido ainda carrega o chunk, mas não cria efeitos; mudança de preferência reverte os existentes.

Hero: intro de texto até 0,7 s e rede com deriva conjunta de 3 px/intensidade gradual até 3,6 s, sem loop. Títulos/retrato entram discretamente, sempre legíveis. Desktop com >=64 rem de largura, >=40 rem de altura, hover/ponteiro fino recebe scrub decorativo nas artes (+10/-10 px e escala 0,98/1,02), Hero até 16 px e Contato +12/-12 px; cursor no SVG limitado a ±6 px. Mobile/tela baixa recebe entradas curtas, sem parallax/cursor. Scroll, toque, âncoras e histórico são nativos; sem Lenis, pin, sticky ou retenção artificial.

Ref do main, useGSAP e matchMedia definem o ciclo; idioma não reinicia setup. ResizeObserver e eventos load/toggle/pageshow agrupam refresh, sem observar scroll por frame. Listeners usam AbortController; cleanup cancela observer/frame, reverte efeitos e restaura atributos originais após clearProps, corrigindo resíduos de fromTo pausados ao mudar breakpoints. Outros recursos devem evitar controlar transform/opacity dos mesmos alvos.

Lint/build/npm ls passaram; conteúdo PT/EN preservado. Matriz estática de 24 layouts 320–1920, details abertos/fechados e texto 200% passou; efeitos ativos exercitados em 375/768/1440. Cursor, scrub, refresh de details, idioma, sete âncoras desktop/mobile, menu, histórico, PageDown/Home/End, toque e redução dinâmica passaram. Ocultação simulada pausou efeitos ativos. Chunk bloqueado em recarga real preservou oito seções/hash/details; fixture StrictMode retornou de 15 aos 14 triggers anteriores ao desmontar. Sem exceções JavaScript finais.

Build: JS principal 262,87/gzip 81,37 kB; movimento 117,72/gzip 46,09; total gzip +46,85 kB sobre Fase 7. CSS 28,79/gzip 6,57; 62 módulos. Amostra local de 90 frames: p95 16,7 ms, máximo 16,8 ms, sem long tasks nessa janela. Valores arredondados do Vite; amostra não representa CWV/hospedagem real. Capturas EN Hero/Projetos desktop e Contato mobile revisadas. QA em `.cache/evolution-motion/`, registro F.9 do planejamento; Chrome/servidores encerrados. Limites de leitor de tela manual, outros browsers, contraste integral e heap permanecem. Fase 9 exige nova aprovação.

## Evolução visual — Fase 9 concluída

O carregamento inicial com movimento reduzido passou a dispensar o download do módulo de 117.720 bytes. A troca para movimento normal o carrega; a redução dinâmica, fallback e limpeza permanecem funcionais. Isso substitui a política de download descrita no registro histórico da Fase 8. Comparações de bundle em memória não encontraram economia útil com core explícito (26 bytes gzip) ou distribuição minificada (594 bytes a mais); imports aprovados mantidos. O incremento total de aproximadamente 47 kB gzip, acima da referência de investigação de 40 kB, continua explicitamente registrado; não houve nova dependência.

Chrome 155.0.8059.80 e Edge 155.0.4283.62 passaram por 48 cenários cada: dois idiomas, movimento normal/reduzido, seis larguras 320–1920 e detalhes abertos/fechados. Landscape 844×390, texto 200% em 320/768/1440, nomes/semântica/IDs/ARIA, tabulação/foco, cores forçadas, nove pares de contraste (mínimo 4,8157:1), navegação e preservação de estados conferidos. Não representa certificação WCAG integral.

Cópia real/repetida testada nos dois browsers; o clipboard anterior não foi lido, e a leitura só ocorreu após a escrita do endereço público. Recusa/API ausente, concorrência e tradução durante operação foram simuladas; nenhuma mensagem enviada. Clipboard terminou com o e-mail público. Conteúdo/credenciais preservados e foto/favicons idênticos aos originais. Capturas Sobre/Projetos/Contato revisadas; visual de Sobre comparado ao baseline da Fase 4.

Doze carregamentos locais com CPU 4×, 375×1000, latência 40 ms e download 200.000 B/s: FCP/último LCP observado de 696–916 ms no Chrome e 696–788 no Edge corrigido, sem layout shifts reportados na janela e um long task de 57 ms em um ensaio Edge normal. O primeiro ensaio Edge usou cache e foi substituído por medição com cache desativado/limpo; não se comparam os números descartados. Não há INP/CWV de campo, Lighthouse ou promessa de ganho de tempo em qualquer dispositivo.

Lint/build/npm ls passaram. Dist tem seis arquivos conferidos; nenhum documento local, PDF, sourcemap/env ou padrão comum de segredo encontrado nas buscas pontuais. SHA-256, bytes e gzip local padrão em `.cache/evolution-final/artifacts.json`; esse gzip difere da estimativa arredondada do Vite. Bundle final: HTML 682 bytes, CSS 28.799, JS principal 263.201, movimento 117.720, foto 22.568 e favicon 429. Manifesto/lockfile/versões equivalentes. Nenhuma suíte permanente instalada; scripts existentes continuam lint/typecheck/build/dev/preview.

Resultados em `.cache/evolution-final/final-results.json` (Chrome), `final-results-edge.json`, demais evidências e MELHORIAS_PORTFOLIO.md F.10. Chrome/Edge e servidores encerrados. Limitações: leitor de tela manual, Firefox/Safari/iOS e dispositivos físicos não testados; contraste/heap integrais, disponibilidade externa dos perfis e métricas reais de hospedagem não verificados. A revisão técnica local está concluída; aceite visual, commits, push e publicação permanecem decisões do proprietário.


## Segunda evolução — Fase 8 concluída tecnicamente

**Autorização/situação:** “sim” à proposta detalhada da Fase 8; concluída tecnicamente em 18/10/2026. Todas as oito fases da segunda evolução concluídas no escopo local. Aceite visual do proprietário continua pendente.

- 96 combinações finais na mesma build: Chrome 155.0.8059.80 e Edge 155.0.4283.62, seis larguras 320–1920 × PT/EN × normal/reduzido × details abertos/fechados; sem overflow/pin ou exceções JavaScript.
- Introdução finita/grafo/cursor, quatro passagens, três cenas de projeto e timeline acadêmica passaram; conteúdo profissional, foto e políticas de credenciais preservados. Âncoras, menu, skip link, foco, hash inicial/histórico, interrupção manual e expansão/reversões/idioma/resize conferidos.
- Texto 200%, tela baixa/touch, nomes acessíveis/IDs/ARIA, foco e cores forçadas; nove pares de cores computadas passaram (mínimo 4,8157:1). Reduced-motion inicial sem download, dinâmico sem resíduos e chunk bloqueado com conteúdo/details íntegros.
- Strict Mode: triggers 20→39→20 e ticker 1→1. Fixture própria de ProjectDetails em três desmontagens durante expansão: seis observers/seis controllers liberados, cinco animações canceladas, sem height/overflow/inert residuais.
- Cópia REAL/repetida e falhas/concorrência testadas em ambos os browsers, sem leitura prévia ou envio. Clipboard terminou com jose.waldeney.forte@gmail.com.
- Lint/typecheck/build/npm ls/diff aprovados. Build: 71 módulos; JS principal 274.813 bytes, movimento 127.695, CSS 33.003. Gzip Vite: 84,90/49,16/7,40 kB; gzip padrão Node dos dois JS: 132.851 bytes (+6.473 sobre baseline). Incremento investigado em memória, sem módulos GSAP duplicados/plugins extras; custo histórico ~47 kB gzip e referências de investigação de 40/5 kB mantidos.
- Seis artefatos e hashes conferidos; nenhum MD/PDF/env/sourcemap ou padrão comum de segredo nas buscas pontuais. Sem alteração de código-fonte nesta fase: somente quatro documentos e cache; os 13 arquivos-fonte locais anteriores foram preservados.

Doze cargas locais: CPU 4×, 375×1000, latência 40 ms, download 200.000 B/s, cache desativado/limpo, janela de 1,8 s após conteúdo montado:

- Chrome: último LCP observado 784–968 ms; CLS 0–0; tarefas longas por visita 0–5, maior tarefa 359 ms. Movimento normal: soma das tarefas longas 650–908 ms por visita; preferência reduzida sem download do chunk.
- Edge: último LCP observado 784–940 ms; CLS 0–0; tarefas longas por visita 1–4, maior tarefa 325 ms. Movimento normal: soma das tarefas longas 665–722 ms por visita; preferência reduzida sem download do chunk.

Evidências em .cache/evolution-consolidated-phase8/{chrome,edge}/consolidated.json, summary.json, artifacts.json e bundle.json; relatório detalhado na seção 17 de PLANEJAMENTO_EVOLUCAO_VISUAL.md. Capturas revisadas e processos temporários encerrados. O primeiro início do Edge teve timeout CDP antes de carregar o site; a execução completa posterior usa espera de protocolo maior no roteiro. Sem instalação ou mudança de configuração.

**Limites/próximo passo:** avaliação visual do proprietário; leitor de tela manual, Safari/Firefox/iOS/físico, zoom nativo, contraste/heap integrais, BFCache e CWV em hospedagem real não cobertos. Medições locais não garantem fps, INP ou CWV; tarefas longas sob CPU limitada permanecem registradas. Complementos acadêmicos/URLs/currículo revisado são opcionais e dependem de confirmação. Sem commit/push/deploy; hospedagem e publicação exigem autorização específica. Nenhuma nova fase iniciada automaticamente.

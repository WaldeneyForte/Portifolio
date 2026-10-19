# Evolução visual e de experiência — planejamento do portfólio

Data da auditoria: 17/10/2026.

**Estado: Fases 2–9 implementadas e validadas no escopo local Chrome/Edge; publicação não autorizada.**

Este documento é a referência principal para a evolução visual. `IMPLEMENTAR.md` mantém o histórico do MVP e das correções anteriores; suas aprovações não autorizam as fases deste plano. `AGENTS.md` continua regendo execução, documentação e autorização. Cada fase de implementação exige confirmação específica antes de começar.

## A. Diagnóstico do projeto atual

Diagnóstico da base antes da evolução. As constatações de Gmail/mailto e composição antiga abaixo são históricas; as execuções das Fases 2–5 estão registradas na seção F.

### A.1 Escopo, evidências e limitações da auditoria

Foram consultados `AGENTS.md`, `PORTFOLIO_BRIEF.md`, `IMPLEMENTAR.md`, documentação operacional, configurações, manifesto/lockfile, componentes, seções, estilos e dados/traduções. A leitura dos `package.json` locais em `node_modules/` confirmou as versões diretas instaladas. A busca no lockfile não encontrou as bibliotecas de animação avaliadas abaixo.

Classificação usada neste documento:

- **Código confirmado:** comportamento ou valor presente nos arquivos atuais; não significa teste interativo nesta auditoria.
- **Captura existente:** observação visual de imagens renderizadas anteriormente, identificadas abaixo; não equivale a uma sessão nova no navegador.
- **Histórico:** resultado registrado no plano ou nos arquivos locais de QA; não foi reexecutado nesta solicitação.
- **Hipótese/proposta:** interpretação a confirmar ou direção ainda não implementada.

Foi possível visualizar estas capturas locais:

| Evidência | Uso e limite |
|---|---|
| `.cache/photo-contact/sobre-1440.png` e `sobre-375.png` | Retrato e composição do Sobre após o último ajuste. |
| `.cache/photo-contact/contato-375.png` | Contato atual em EN, com o estado de erro de cópia simulado pelo roteiro anterior. A imagem não prova falha real do clipboard. |
| `.cache/stage9/inicio-en-1440.png` e `inicio-en-375.png` | Hero e navegação anteriores ao ajuste da foto/contato; a estrutura atual do Hero mantém essa composição no código. |
| `.cache/stage9/projetos-en-1440.png` | Três cards de projetos; captura anterior ao ajuste da foto/contato. |
| `.cache/stage6/formacao-1440.png` e `certificacoes-1440.png` | Composição dessas seções no MVP; header/idioma dessas imagens são antigos. O código atual preserva suas estruturas principais. |

**Limitação:** não houve nova sessão interativa, medição de todas as alturas de seção, perfil de desempenho, execução de lint/build ou testes com leitor de tela nesta solicitação. Para respeitar o escopo documental, não foram gerados builds, caches ou novos roteiros. Medições e aprovações anteriores não serão apresentadas como testes atuais. Experiência e Tecnologias foram avaliadas pelo código e pelo histórico, sem nova captura específica nesta auditoria.

A referência [Supertape](https://www.thesupertape.com/) foi consultada pela representação textual disponível na ferramenta web. Isso permite reconhecer uma sequência narrativa, ilustrações e encerramento com chamada à ação, mas **não permite confirmar suas animações, velocidade, pinning ou tecnologia**. A fluidez pedida pelo proprietário orienta a proposta; não foi inferida uma implementação técnica da referência. Não copiar assets, textos ou identidade.

### A.2 Estrutura e stack reais

```text
src/
  App.tsx, main.tsx
  components/   controles, navegação, cards, timeline, SVGs e estruturas
  sections/     Hero, About, Projects, Experience, Education,
                Skills, Certifications, Contact
  data/         perfil, projetos, experiência, formação, skills,
                certificações e contratos TypeScript
  i18n/         contexto, provider, dicionários PT/EN,
                composição do conteúdo inglês e tipos
  styles/       globals.css
public/
  favicon.svg
  97138361.jpg
```

| Grupo | Versões declaradas e encontradas localmente |
|---|---|
| Execução | React e React DOM 19.3.1. |
| Build | Vite 8.3.4; `@vitejs/plugin-react` 6.1.2. |
| Estilos | Tailwind CSS e `@tailwindcss/vite` 4.3.3. |
| Tipos | TypeScript 6.0.3; `@types/node` 22.20.5; tipos React/React DOM 19.3.0. |
| Qualidade | ESLint 10.13.0; `@eslint/js` 10.0.1; typescript-eslint 8.71.2; react-hooks 7.1.1; react-refresh 0.5.7; globals 17.13.0. |

- Scripts existentes: `dev`, `typecheck`, `lint`, `build` e `preview`. `build` inclui `tsc -b`; lint reprova avisos. Não existe `npm test` nem suíte permanente instalada.
- TypeScript estrito, ESLint com regras React Hooks/Fast Refresh e React StrictMode na entrada.
- `vite.config.ts` contém somente os plugins React/Tailwind. Base padrão `/`; não há workflow ou hospedagem configurados. Não mudar essa configuração nesta evolução sem aprovação específica.
- Estilos majoritariamente em classes semânticas dentro de `@layer components`, com tokens `@theme`; não presumir que todo o layout usa utilitários no JSX.
- Não há GSAP, `@gsap/react`, Lenis, Motion/Framer Motion, Three.js, React Three Fiber, router ou biblioteca de ícones. Não há Playwright/Vitest/axe no lockfile consultado.
- Fontes do sistema: Segoe UI no corpo e Bahnschrift/Aptos Display nos títulos, com fallbacks. Não há fonte remota. SVGs próprios e um retrato JPEG local de 22.568 bytes.
- `*.md` e `.cache/` são ignorados. Este planejamento permanecerá local, assim como README/briefing. Uma cópia obtida somente do remoto não receberá esses documentos.
- Git consultado sem mutações: aplicação ainda não rastreada e índice vazio. Não criar commits, branches ou remotos como parte deste plano.

### A.3 Funcionalidades e conteúdo a preservar

1. Página única, ordem das oito seções e IDs `inicio`, `sobre`, `projetos`, `experiencia`, `formacao`, `tecnologias`, `certificacoes`, `contato`; main `conteudo`.
2. Skip link, foco nos destinos, offset dinâmico do header, navegação por âncoras e histórico/hash do navegador.
3. Menu mobile com `aria-expanded`/`aria-controls`, Escape, fechamento por seleção/clique fora/saída de foco/breakpoint e retorno de foco. Breakpoint de 75 rem sincronizado entre CSS e JS.
4. PT-BR inicial, seletor PT/EN visível, `aria-pressed`, traduções tipadas, `html.lang`, title e description localizados; manter foco e detalhes abertos ao alternar idioma. Não introduzir persistência como mudança implícita.
5. Nome, especialidades, apresentação, foto no Sobre, localização pública e links profissionais confirmados. Não duplicar a foto no Hero por padrão.
6. TEDAS-CE e MIND-BH como pesquisas privadas; projeto em C como estudo em andamento. Preservar detalhes nativos, tecnologias e URLs condicionais; não inventar métricas, imagens clínicas ou repositórios.
7. CPIDT 2025–atual, UECE 2021–2027 com conclusão prevista e SENAI 2019–2022. Não alterar cargo, períodos ou responsabilidades.
8. As seis categorias e todas as competências atuais, sem pontuação de proficiência. RAG permanece somente como habilidade textual.
9. AWS AI Practitioner: setembro/2026 e setembro/2029; LFS158 como curso de outubro/2026; Cloud Practitioner modelada com `display: false`, apenas ano 2026 e sem URL. Sem fornecer badges ou provas novas, manter essas políticas.
10. Footer com autoria/ano dinâmico, proteção das novas abas, foco visível, alvos de controles, contraste e movimento reduzido.
11. Ausência de backend, formulário, chatbot, API de envio ou RAG implementado.

**Mudança funcional desejada, ainda não executada:** o novo contato substituirá o Gmail e o `mailto:` pela cópia do endereço e links sociais. O briefing original previa `mailto:`; a nova solicitação define a revisão desse requisito para o planejamento. Não modificar silenciosamente o briefing ou apagar o histórico anterior.

### A.4 Diagnóstico por tema

| Tema | Constatação e evidência | Direção proposta |
|---|---|---|
| Ritmo vertical | **Código:** sete seções compartilham `--section-space: clamp(4rem, 8vw, 7.5rem)` em ambos os lados; mesmo padrão de título/eyebrow/borda. **Capturas:** Formação e Certificações recebem respiros semelhantes aos blocos de destaque. | Criar ritmos por função: destaque, editorial e compacto; variar composição e transições, sem encolher tudo. |
| Alturas | **Código:** não há `min-height: 100vh` generalizado. Hero tem padding próprio de 3–6 rem; a altura das demais seções vem de conteúdo, padding e gaps. | Não atribuir o problema a uma regra de viewport inexistente. Medir alturas reais na Fase 3 antes de fixar novos valores. |
| Largura | **Código:** container máximo de 72 rem, gutter de 1,25–4 rem. Não é um container global excepcionalmente estreito. | Ampliar seletivamente a área gráfica, mantendo texto em largura de leitura; não esticar parágrafos a toda a tela. |
| Hero | **Capturas:** nome tem boa presença; especialidades pequenas; headline/descrição/CTAs formam pilha à esquerda e grafo isolado à direita. **Código:** grafo oculto abaixo de 64 rem. | Integrar grafo ao campo tipográfico, reforçar especialidades sem competir com o nome e criar conexão visual com Sobre. |
| Sobre | **Capturas recentes:** retrato dá identidade e equilibra a coluna textual em desktop; no mobile precede três parágrafos longos. | Preservar retrato, integrar moldura/linha gráfica e alinhar melhor os blocos. Avaliar tamanho mobile sem remover texto nem repetir foto. |
| Projetos | **Código/captura:** três colunas em 75 rem, duas em 48 rem; cards com mesmo peso, títulos de 1,125–1,375 rem, artes de 9 rem e resumos extensos nas colunas. | Um projeto destacado por faixa no desktop, com arte maior e hierarquia editorial; animação das artes durante scroll natural. |
| Detalhes | **Código:** `details/summary` nativos, título específico em texto de leitor de tela e todas as tecnologias reapresentadas. | Refinar affordance visual mantendo semântica. Avaliar separar tecnologias adicionais para reduzir repetição sem perder nenhuma informação. |
| Experiência/Formação | **Código:** ambas renderizam `TimelineItem` com a mesma estrutura. CPIDT tem sete atividades; Formação tem dois itens curtos. | Manter narrativa temporal em Experiência e adotar cards compactos em Formação. Agrupar atividades com rastreabilidade. |
| Tecnologias | **Código:** seis cards equivalentes com chips uniformes; grade compartilhada com Projetos. | Desacoplar as duas grades; categorias de IA/dados ganham hierarquia de layout, sem alegar maior proficiência individual. |
| Certificações | **Código/captura:** agrupamento profissional/curso correto, tipografia e datas organizadas, sem logos ou URLs autênticas. | Melhorar assinatura gráfica e dados do card; usar símbolo neutro até haver asset oficial permitido. |
| Contato | **Código/captura recente:** título padrão, convite pequeno, Gmail primário, endereço em `mailto:`, explicação longa, cópia secundária. | Transformar em encerramento com convite grande, e-mail central, cópia primária e dois links sociais evidentes. Remover Gmail, `mailto:` e explicação sobre clientes. |
| Hover/foco | **Código:** controles têm transições de cor de 180 ms; detalhes giram o indicador; não há sistema de movimento de cards/seções. | Microinterações de 140–220 ms, foco igualmente claro, efeitos somente decorativos e sem clique em cards sem ação. |
| Continuidade | **Código/capturas:** bordas horizontais e cabeçalhos repetidos separam os blocos; grafo só aparece como arte pontual. | Conexões e iluminação discretas recorrentes, com zonas de descanso entre os destaques. Evitar uma camada animada cobrindo todos os textos. |

#### Valores que explicam a percepção de vazio

Os seguintes números são **derivados do CSS**, considerando raiz de 16 px; não são novas medições de DOM:

- Padding vertical por lado: 64 px em 320/375/768 px, cerca de 81,9 px em 1024 px e 115,2 px em 1440 px; máximo de 120 px em telas maiores.
- Dois blocos informativos adjacentes podem somar aproximadamente 230,4 px de padding entre seus conteúdos em 1440 px, antes dos títulos/gaps. Isso pede revisão de ritmo e relação entre seções.
- Container de 72 rem equivale a 1.152 px; três projetos com gaps de 24 px deixam aproximadamente 368 px por card antes de suas bordas/padding. A arte de 144 px de altura recebe pouca área frente ao texto.
- O grafo usa SVG de 480 × 360, com 12 nós e 16 arestas estáticas. É um bom recurso a evoluir, sem precisar de canvas/3D.
- O CSS único tem cerca de 19,6 KB de fonte; o desafio imediato é organizar responsabilidades e variantes, não substituir todo o sistema de estilos.

### A.5 Acessibilidade, performance e manutenção

**Bases confirmadas no código:** HTML semântico, um h1 no Hero, títulos associados a seções, foco de 2 px, controles mínimos de 44 px, SVG decorativo oculto, foto com dimensões/alt/lazy, movimento reduzido e cores forçadas. Listeners e ResizeObserver da navegação têm cleanup. Provider de idioma atualiza metadados sem trocar a rota.

**Histórico disponível:** etapas anteriores registram lint/build aprovados, Chrome entre 320 e 1440 px, ampliação de texto de 200%, oito pares de contraste com mínimo aproximado de 4,82:1 e ausência de exceções JavaScript nos roteiros. Os testes de cópia do último ajuste simularam sucesso/recusa da Clipboard API; não confirmaram cópia real no dispositivo do usuário. Os roteiros são temporários e algumas expectativas das etapas antigas ficaram desatualizadas após foto/Gmail.

**Inventário atual de `dist/`, somente leitura:** HTML 682 bytes, JPEG 22.568, SVG 429, CSS 18.989, JS 253.661; total 296.329 bytes sem compressão. Esses arquivos existentes e seus tamanhos não demonstram uma nova build nem desempenho de rede. O último log de build reportou aproximadamente 79,01 KB gzip de JS. Não há resultados de campo de LCP, INP ou CLS. Tempos locais anteriores tiveram interferência de script injetado pelo antivírus, descrita no histórico.

**Riscos a tratar nas fases autorizadas:**

- Animações inline não são desligadas apenas pelo CSS `prefers-reduced-motion`; o motor JS também precisa se adaptar e reverter estilos.
- Idioma, foto, header e abertura dos detalhes mudam geometria. Triggers medidos uma única vez podem ficar incorretos.
- Transformar ancestrais do header ou aplicar `overflow` indiscriminado pode quebrar sticky, foco ou âncoras.
- Em telas baixas/texto ampliado, cards altos não cabem numa área fixa; pinning de conteúdo pode impedir leitura.
- O clipboard depende de contexto seguro e permissões. O relato de `mailto:` quebrado é válido como problema de uso; sua causa exata no dispositivo não foi reproduzida.
- Fonte do sistema pode mudar quebras entre Windows, macOS e Linux. Nova tipografia só deverá ser considerada após composição; não há necessidade identificada de instalar fontes.
- Não há testes permanentes; prever verificações de regressão proporcionais, sem impor ferramenta nova por padrão.
- Provas de credenciais, URLs públicas e licença de badges ainda ausentes. Não “validar” Cloud Practitioner a partir de documento antigo.

## B. Proposta de arquitetura das melhorias

### B.1 Abordagem recomendada

Evoluir a arquitetura existente em camadas: composição estática → comportamento acessível → movimento progressivo. Manter `App`, seções, dados e provider. Evitar router, novo framework de estilos, 3D, scroll virtual ou troca de stack.

**Recomendação para aprovação futura:** CSS/SVG para composição e microinterações; **GSAP com ScrollTrigger** para as sequências de Hero/Projetos/Contato; rolagem nativa. `ScrollTrigger` é plugin de `gsap`, não uma terceira dependência separada. Recomendar também o pequeno adaptador `@gsap/react` para escopo e cleanup, sujeito à compatibilidade e à autorização da Fase 8. Nada será instalado neste planejamento.

As fases 2–7 entregarão layouts e estados funcionais sem esses pacotes. As interfaces gráficas e pontos de integração serão planejados antes, mas a integração do motor fica concentrada na Fase 8. Não adicionar efeitos provisórios que precisem ser reescritos.

### B.2 Comparação de alternativas

| Alternativa | Ganho e custo | React/manutenção | Decisão proposta |
|---|---|---|---|
| CSS transitions/keyframes + SVG | Ótimo para foco/hover e movimentos locais; sem pacote. Sequências longas sincronizadas ficam mais trabalhosas. | Classes/variáveis simples; respeitar preferência e evitar conflito de propriedades. | Base obrigatória; intro curta e decoração simples. |
| CSS scroll timelines | Vincula efeitos ao scroll sem motor externo; suporte deve ser verificado por recurso/navegador. | Exige fallback estático e `@supports`; não condicionar leitura ao suporte. | Alternativa para detalhes decorativos, sem duplicar o mesmo efeito GSAP. [Referência MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations). |
| IntersectionObserver | Detecta entrada/saída com pouco código, mas não resolve sozinho uma coreografia contínua. | Desconectar observer; não converter progresso por frame em estado React. | Alternativa sem pacote se o escopo for reduzido a reveals; não acumular como segundo sistema global. |
| GSAP + ScrollTrigger | Sequenciamento, scrub e pin opcionais; custo de bundle e lógica imperativa. | Hooks com refs, escopo e reversão; evitar listeners/timelines duplicados. | Motor recomendado para a ambição cinematográfica. [Documentação ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/). |
| `@gsap/react` | Auxilia integração, escopo e cleanup; é pacote adicional. | `useGSAP`, `contextSafe` para callbacks tardios e atualização com reversão quando necessária. | Recomendado com GSAP; alternativa é `gsap.context()` com cleanup manual. [Integração oficial](https://gsap.com/resources/React/). |
| Motion for React | API declarativa, `useScroll`/`useTransform` e entrada em viewport; útil para UI e gestos. | Boa integração por componentes, mas duplicaria o motor recomendado. | Alternativa ao GSAP se a direção for majoritariamente declarativa; não instalar os dois. [Documentação Motion](https://motion.dev/docs/react-scroll-animations). |
| Lenis | Acrescenta suavização contínua; requer cuidar de anchors, ticker e áreas roláveis. Não cria a coreografia visual sozinho. | Mais estado global e pontos de integração. Documentação alerta para configuração explícita de anchors. | **Não incluir na abordagem inicial.** Só avaliar em escopo separado após medir necessidade. [Repositório oficial](https://github.com/darkroomengineering/lenis). |
| Three.js/React Three Fiber | Possibilita 3D, com custo e complexidade altos para esta necessidade. | Nova arquitetura de renderização/manutenção. | Não recomendado; dependeria de justificativa e aprovação específica. |

Antes de instalar qualquer pacote: confirmar versões e peer dependencies com React 19.3.1/TS 6/Vite 8, licença vigente, importação do plugin, tree shaking e delta real de build. Não alegar conflito confirmado nem compatibilidade plenamente testada só pela documentação. A integração oficial recomenda cleanup em React; isso não substitui o teste do conjunto real.

### B.3 Componentes e limites de mudança

| Área atual | Evolução prevista | Reutilização/limite |
|---|---|---|
| `Section`, `SectionHeading`, `Container` | Variantes de composição/ritmo e largura gráfica, sem mudar IDs/semântica. | Manter API pequena; não criar um framework de layout. |
| `Navbar`, `LanguageSwitcher` | Preservar comportamento; ajustar estilo somente se necessário à continuidade. | Não reescrever navegação. Manter header fora de containers transformados. |
| `Hero`, `NeuralGraph` | Nova distribuição, camadas SVG e pontos para efeitos. | Manter topologia/linguagem próprias e alternativa estática. |
| `About` | Integrar foto e alinhamentos à transição do Hero. | Preservar arquivo, alt e conteúdo; não duplicar retrato. |
| `Projects`, `ProjectCard`, `ProjectArtwork` | Faixas/cards maiores, arte por projeto, detalhes refinados. | Mesmos registros, categorias, IDs e links condicionais; `details` continua nativo. |
| `Experience`, `TimelineItem` | Composição temporal com grupos de atividades. | Não forçar novo agrupamento dentro de todos os tipos de timeline. |
| `Education` | Grid de dois cards horizontais/compactos em desktop. | Pode reutilizar `Card`; criar `EducationCard.tsx` apenas se necessário à clareza. |
| `Skills`, `SkillsGroup`, `Badge` | Hierarquia de categorias e consistência de chips. | Separar estilos da grade de Projetos sem alterar competências. |
| `Certifications`, `CertificationCard` | Tratamento editorial de emissor/tipo/datas e asset opcional. | Manter filtro `display` e sem links fictícios. |
| `Contact`, `Button`, dicionários | E-mail destacado, cópia como ação primária, confirmação acessível e links sociais. | Reaproveitar lógica existente; remover dependência de Gmail/`TextLink` neste endereço. |
| `Footer` | Integrar acabamento visual do encerramento. | Preservar autoria, ano e retorno ao topo. |
| `globals.css` | Tokens e regras por componente/seção; camada de movimento explícita. | Manter organização atual inicialmente; separar arquivo de movimento somente se facilitar manutenção. |

Novos arquivos candidatos, **não criados**: `src/hooks/usePortfolioMotion.ts` para integração do motor após aprovação; `src/styles/motion.css` se houver volume que justifique separação; `EducationCard.tsx` se a composição ficar específica. Um componente `CopyEmailButton.tsx` só se houver reutilização real; caso contrário, manter comportamento em `Contact`.

Dados profissionais devem continuar em `src/data/`. Layout, gradações decorativas e timing não pertencem às traduções de conteúdo. Novos textos e rótulos ficam em `pt.ts`/`en.ts`; novos grupos de atividades precisam de IDs estáveis e correspondência no conteúdo inglês.

### B.4 Composição proposta por seção

| Seção | Proposta inicial a validar | Ritmo e preservação |
|---|---|---|
| Hero | Nome dominante; especialidades mais legíveis; apresentação/CTAs com alinhamento claro; grafo ocupando melhor o campo lateral e conectando visualmente a base da seção. | Espaço de abertura intencional, sem altura rígida de viewport. Nome visível imediatamente. |
| Sobre | Foto na coluna de apoio, linha de conexão sutil e texto alinhado à grade editorial. | Altura pelo conteúdo; respiro menor na transição Hero/Sobre. Sem efeito parallax na foto por padrão. |
| Projetos | Três grandes faixas verticais com composição texto/arte em desktop; cada faixa é um artigo/card. | Mais área por projeto, sem três telas vazias nem carrossel horizontal obrigatório. |
| Experiência | CPIDT como âncora temporal, resumo e três grupos de atividades. | Densidade informacional; animação só de marcadores/entrada breve. |
| Formação | Dois cards objetivos, com instituição, curso, período e status/resumo. | Sem min-height de viewport; no mobile, pilha natural. |
| Tecnologias | Seis categorias mantidas; IA/linguagem/dados ocupam a primeira leitura; outras seguem em grade equilibrada. | Diferenciar categorias por hierarquia e linhas discretas, não por mural de logos. |
| Certificações | Cards refinados e agrupamento inequívoco de exame versus curso; marca neutra até haver prova/asset permitido. | Evitar dois níveis de título/badge repetindo a mesma informação sem necessidade. |
| Contato | Convite grande, e-mail em destaque, botão de cópia próximo ao endereço, GitHub/LinkedIn com peso claro; rede/iluminação de fundo discreta. | Encerramento expressivo com conteúdo real, sem Gmail, `mailto:`, instruções sobre clientes ou formulário. |

Faixas de composição propostas, ainda sujeitas a validação: largura editorial atual de 72 rem; área de destaque até 80 rem quando fizer diferença; corpo entre 55–70 caracteres por linha; ritmos compacto de 2,5–4 rem, editorial de 3,5–5 rem e destaque de 4–6 rem. São pontos de partida, não valores para aplicação uniforme. No mobile, reduzir camadas visuais e reorganizar a grade antes de reduzir texto.

Contato pode usar “Vamos construir a próxima conexão.” / “Let’s build the next connection.” como **rascunho de título**, sem insinuar disponibilidade de contratação. A redação final será validada na Fase 2. O e-mail continuará exatamente o fornecido no perfil.

#### Projetos: solução híbrida recomendada

- Desktop: artigos maiores em fluxo vertical, texto de um lado e arte do outro. Aproveitar a largura para reduzir quebra excessiva dos resumos e aumentar títulos/arte, mantendo o conteúdo integral.
- Artes originais: TEDAS com transformação abstrata áudio/texto/estrutura; MIND-BH com formas de fala e conexões; C com unidades/perceptron e portas lógicas, sem sugerir arquiteturas já concluídas. Sem prontuários, logos inventados ou resultados clínicos.
- Scroll: entrada curta e transição da arte por deslocamento/escala/opacidade discretos; manter título/resumo/ações legíveis. Uma linha de continuidade pode ligar as três faixas.
- Sticky opcional apenas para uma área gráfica, quando a altura permitir. **Não fixar toda a página nem sobrepor textos interativos de cards distintos.** Começar sem pin artificial; usar pin somente se a avaliação visual demonstrar benefício e houver aprovação dessa variante.
- Não reservar `300vh`/`400vh` para três projetos, não interceptar wheel/touch e não fazer scroll-snap obrigatório. Medir a extensão real das três faixas, evitando percursos vazios adicionados por animação.
- Mobile, landscape baixo, zoom/texto ampliado e movimento reduzido: cards empilhados, nenhuma retenção/pin e detalhes com expansão natural. Não retirar projetos “inativos” da leitura ou da árvore de acessibilidade.
- Detalhes abertos suspendem qualquer retenção da respectiva faixa e provocam recálculo após estabilizar layout; fechar não deve causar salto de foco/scroll. A rota não muda.

#### Experiência: rastreabilidade do agrupamento

| Grupo proposto | Atividades existentes que devem continuar presentes |
|---|---|
| Machine Learning e linguagem | Treinamento/validação/avaliação com Python, PyTorch e Hugging Face; biomarcadores acústicos/linguísticos e processamento de linguagem. |
| Engenharia de Dados | ETL/ELT com Python/Pandas/NumPy/PostgreSQL; modelagem relacional e SQL. |
| APIs e integração de IA | FastAPI/REST; automações, Git/GitHub e CI/CD; experimentação com agentes LangChain/LangGraph. |

Agrupamento é editorial, não uma nova alegação de cargo ou domínio de produção. Toda atividade atual precisa ter correspondência em PT/EN, sem desaparecer no resumo.

### B.5 Linguagem de movimento

Valores iniciais propostos para experimentação, não promessas de desempenho:

| Efeito | Intervalo/uso proposto | Degradação e limites |
|---|---|---|
| Hover/press/foco | 140–220 ms; deslocamento de 1–2 px apenas em decoração. | Foco imediato, sem exigir hover ou movimento para indicar ação. |
| Entrada de seção | 350–650 ms; 8–20 px; sequência curta. | Conteúdo visível por padrão; nunca aguardar scroll para liberar leitura. |
| Intro do Hero | Entrada de até cerca de 1 s, sem preloader; grafo em evolução finita de até 4 s. | Nome, descrição e CTA acessíveis desde a primeira renderização. |
| Cursor no grafo | Deslocamento de até 4–8 px, somente `pointer: fine`/hover. | Sem estado React por frame; inativo em toque e movimento reduzido. |
| Scroll em arte | Pequena escala, por exemplo 0,98–1,02; parallax de poucos pixels. | Texto não fica desfocado, coberto ou ilegível; movimento reversível conforme rolagem. |
| Fundo Contato | Conexões/iluminação sob a área gráfica, ligadas ao scroll ou entrada finita. | Não criar loop autônomo infinito por padrão; se um loop for proposto depois, prever pausa e nova validação. |

Não animar continuamente `top`, `left`, largura ou altura de grandes regiões. Preferir transform/opacity, limitar efeitos de blur/filter, evitar `will-change` permanente em todos os cards. SVGs pequenos podem animar grupos em vez de atualizar muitas coordenadas de aresta por frame.

**Contrato de integração do motor:**

1. Registrar plugins uma vez, criar animações dentro do escopo da seção com refs e adaptar por breakpoint/preferência. Reverter timelines, triggers e estilos no cleanup; callbacks tardios também precisam de escopo seguro.
2. Usar `gsap.matchMedia()` para condições de desktop/movimento reduzido e limpar seus efeitos ao trocar a condição. [Documentação oficial](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/).
3. Não usar o contexto de idioma para armazenar progresso por frame. Em alteração de locale, manter DOM/IDs/estado e recalcular medidas depois do layout; se recriar animações, restaurar foco/scroll e não reexecutar intro obrigatória.
4. Depois de foto carregada, resize relevante ou toggle de detalhes, agrupar recálculos e executar refresh apenas quando necessário. Não executar refresh a cada evento de scroll ou callback de ResizeObserver.
5. Manter rolagem do documento nativa, hash/back/forward e offset dinâmico do header. Não adicionar segundo motor global nem disputar a mesma propriedade com CSS.
6. Conteúdo inicia visível; JS de animação ausente/falhando leva ao layout estático. Como a aplicação é CSR, isso garante leitura **sem o módulo de animação**, não funcionamento integral com todo JavaScript desativado. SSR/prerender não faz parte deste plano.
7. Pausar efeitos fora da viewport/aba oculta; desabilitar interação por ponteiro em decoração. Conteúdo não pode depender de status “ativo” de uma timeline para receber foco.

### B.6 Responsividade e acessibilidade

- Reusar 48/64/75 rem onde ainda fizer sentido; não alterar os 75 rem do header sem sincronizar CSS e `matchMedia`. Para efeitos sticky, exigir também altura útil suficiente; largura desktop não basta.
- Em 320/375 px, e-mail pode quebrar sem truncar; alvos de cópia e links com pelo menos 44 px na configuração padrão. Não esconder conteúdo para caber.
- Manter ordem DOM igual à leitura; alterações visuais por grid não devem inverter navegação de teclado.
- Preservar `details/summary`, rótulos específicos por projeto e foco visível. Não criar modal ou armadilha de foco desnecessários.
- Manter contraste mínimo de 4,5:1 em texto normal, 3:1 em texto grande e 3:1 nos indicadores/controles essenciais aplicáveis; medir sobre os fundos finais, incluindo gradientes. Decoração pode ter baixo contraste sem ser portadora de informação.
- `prefers-reduced-motion`: remover cursor/parallax/scrub/pin/intro e deixar tudo na posição final legível. A preferência deve reagir também se alterada durante a visita.
- Cópia: acionamento nativo por clique/Enter/Espaço; `role="status"` para confirmação, sem mover foco. Evitar anúncio falso antes de a Promise resolver e permitir tentativas repetidas com feedback claro.
- A [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText) exige contexto seguro e pode recusar acesso. Detectar disponibilidade; em falha, manter endereço selecionável e orientar cópia manual. Não prometer cópia automática em todos os navegadores/HTTP nem introduzir fallback legado oculto sem necessidade.
- PT/EN devem incluir novos títulos, feedback e rótulos. Nomes oficiais de instituições/credenciais permanecem como no conteúdo aprovado.

### B.7 Certificações e assets

Nenhum badge oficial foi fornecido em `public/`. Não tratar logo genérico do emissor como prova de obtenção. Os [badges digitais AWS](https://aws.amazon.com/certification/certification-digital-badges/) devem corresponder à credencial do proprietário e ao material autorizado. Solicitar asset/URL e conferir regras atuais antes de incorporar; não redesenhar badge oficial nem usar badge Kubernetes de certificação profissional para o curso LFS158.

O refinamento visual pode ser concluído com símbolos neutros próprios e marca textual. Assets oficiais são um ramo opcional, não uma dependência bloqueadora. Registrar origem, permissão e dimensões quando houver material válido; preservar datas/flags e ausência de URL de verificação.

## C. Roadmap de implementação

As fases abaixo são da evolução, independentes das nove etapas do MVP.

| Fase | Entrega | Dependências | Aprovação atual |
|---|---|---|---|
| 1 — Auditoria e preparação | Diagnóstico, inventário, princípios/tokens propostos e plano. | Documentos/código disponíveis. | Somente análise/documentação autorizadas neste pedido; concluídas com limites registrados. |
| 2 — Correções funcionais e contato | Novo encerramento, cópia primária, retirada de Gmail/mailto. | Aceite do plano e autorização da fase. | Concluída após autorização e validação. |
| 3 — Espaçamento e composição | Variantes de ritmo e grade editorial, baseline atualizado. | Fases 1–2 e aprovação própria. | Concluída após autorização e validação. |
| 4 — Hero e elementos gráficos | Nova abertura, grafo e integração com foto/Sobre. | Fase 3 e aprovação própria. | Concluída após autorização e validação. |
| 5 — Projetos | Três faixas/cards de destaque com artes e detalhes preservados. | Fases 3–4 e aprovação própria. | Concluída após autorização e validação. |
| 6 — Experiência, formação e tecnologias | Narrativas diferenciadas e hierarquia dos seis grupos. | Fases 3–5 e aprovação própria. | Concluída após autorização e validação. |
| 7 — Certificações | Apresentação refinada, política de credenciais preservada. | Fase 3/6; assets opcionais válidos; aprovação própria. | Concluída após autorização e validação. |
| 8 — Sistema de animações e scroll | Motor aprovado, continuidade e degradação estática. | Layouts 2–7 aprovados; dependências autorizadas. | Concluída após autorização e validação. |
| 9 — Responsividade, testes e otimização | Regressão completa, build e documentação de resultados. | Fases anteriores aprovadas. | Concluída no escopo local Chrome/Edge; limitações em F.10. |

Validações proporcionais acontecem em todas as fases implementadas; a Fase 9 consolida a revisão. Não deixar correção de acesso ao conteúdo para o final. A Fase 8 não pressupõe adoção de Lenis, nem reabre decisões de conteúdo aprovadas nas anteriores.

## D. Checklist por fase

### Fase 1 — Auditoria e preparação

**Objetivo:** planejar a evolução com evidências e sem alterar a aplicação.

**Tarefas:**

- [x] Ler instruções, briefing e histórico e reconhecer restrições de autorização.
- [x] Inspecionar seções, componentes, CSS, conteúdo, traduções, dependências e configurações.
- [x] Verificar bibliotecas realmente presentes e ausência dos motores candidatos.
- [x] Revisar capturas existentes e separar código, histórico, observação visual e hipóteses.
- [x] Documentar funcionalidades a preservar, prioridades, tokens propostos e riscos.
- [x] Comparar alternativas técnicas com fontes oficiais e elaborar este roadmap.

**Arquivos desta fase:** somente `MELHORIAS_PORTFOLIO.md`; sem edição de código/configuração. O histórico do MVP permanece em `IMPLEMENTAR.md`.

**Dependências:** leitura local e documentação técnica pública.

**Aceite:** plano com nove fases, evidências rastreáveis, nenhuma instalação/implementação presumida e limitações explícitas. A apresentação ao proprietário não representa aceite dele.

**Riscos:** capturas não mostram todas as interações atuais; referência não observada em movimento; não há baseline atual de todas as alturas/CWV.

**Validação desta fase:** leitura cruzada de arquivos, capturas, versões locais e integridade do documento. Sem executar build ou testes de aplicação.

**Aprovação:** pedido atual autoriza apenas auditoria e documento; atividades documentais concluídas, implementação não autorizada.

### Fase 2 — Correções funcionais e contato

**Objetivo:** substituir o fluxo problemático por encerramento claro e independente de cliente de e-mail.

**Tarefas:**

- [x] Registrar aprovação desta fase e conferir no navegador o estado inicial do contato antes de alterar código.
- [x] Validar a composição e o título PT/EN do encerramento; preservar e-mail/perfis reais.
- [x] Remover `composeUrl`, CTA Gmail, hyperlink `mailto:` e textos de orientação sobre Gmail/aplicativos nos dois idiomas.
- [x] Exibir o endereço como texto selecionável de destaque e cópia como ação primária próxima.
- [x] Reutilizar e refinar `copyStatus`/Clipboard API: sucesso após conclusão, recusa tratada, repetição compreensível e foco preservado.
- [x] Reservar área de feedback e anúncio acessível; tornar GitHub/LinkedIn evidentes, com proteção das novas abas.
- [x] Criar fundo gráfico estático leve preparado para a animação posterior, sem instalar motor.
- [x] Atualizar o trecho correspondente do README e deste plano após execução; registrar a mudança deliberada do requisito antigo de mailto.

**Arquivos previstos:** `src/sections/Contact.tsx`, `src/i18n/pt.ts`, `src/i18n/en.ts`, `src/styles/globals.css`, eventualmente `src/components/Footer.tsx` se sua união visual for necessária; `README.md`, este plano e nota de evolução em `IMPLEMENTAR.md` após aprovação. `profile.email` e URLs não precisam mudar.

**Dependências:** Fase 1 e aprovação específica. **Novas dependências: nenhuma.**

**Aceite:** sem Gmail/mailto no contato, sem formulário; e-mail correto e selecionável; cópia independente do serviço de e-mail; feedback de sucesso/erro traduzido sem anunciar envio de mensagem; seção útil em 320 px e desktop.

**Riscos:** Clipboard API bloqueada; feedback repetido não anunciado; e-mail cortado; destaque excessivo competindo com os projetos.

**Validação:** revisão visual PT/EN em 320/375/768/1440, teclado e foco; testar sucesso real de cópia em contexto seguro com autorização adequada, além de API indisponível/recusa simuladas. Não ler conteúdo pessoal do clipboard. Conferir destinatário copiado em campo de teste, busca por Gmail/mailto no código pertinente, lint/build e preview. Teste simulado não será descrito como cópia real.

**Aprovação:** concluída — autorizada em 17/10/2026 pelo “sim” do proprietário à proposta da Fase 2; resultados registrados em F.3, sem novas dependências.

### Fase 3 — Espaçamento e composição

**Objetivo:** melhorar ritmo e densidade pela relação entre conteúdo e áreas gráficas.

**Tarefas:**

- [x] Medir altura, padding, heading gap e largura útil de cada seção, com viewport/idioma/estado dos detalhes registrados.
- [x] Produzir comparação visual de desktop e mobile antes/depois, sem usar apenas altura total da página como indicador de qualidade.
- [x] Definir tokens/variantes compacto, editorial e destaque e mapear cada seção ao ritmo adequado.
- [x] Ajustar container/grade seletivos e alinhamentos de texto, foto e elementos gráficos.
- [x] Rever separadores, transições de fundo e redundância de eyebrows; manter títulos e orientação inequívocos.
- [x] Desacoplar grades de Projetos e Tecnologias; evitar alterações colaterais.
- [x] Validar alturas pelo conteúdo sem introduzir viewport rígida em seções informativas.

**Arquivos previstos:** `globals.css`, `Section.tsx`, `SectionHeading.tsx`, `Container.tsx`, classes das seções afetadas e dicionários se houver ajustes de rótulos; documentação após execução.

**Dependências:** Fases 1–2 e aprovação própria.

**Aceite:** ritmos distintos e alinhamentos coerentes; parágrafos legíveis, foto preservada; ganho demonstrável por comparação de composição. Nada de redução global indiscriminada de margins/paddings.

**Riscos:** alterações globais em classes compartilhadas, texto EN maior, largura excessiva de parágrafos e regressão de offset do header.

**Validação:** medições/capturas em 320/375/768/1024/1440 e desktop de 1920 px; PT/EN, detalhes abertos/fechados, 200% de texto, âncoras e lint/build.

**Aprovação:** concluída — autorizada em 17/10/2026 pelo “sim” do usuário à proposta da Fase 3; resultados em F.4.

### Fase 4 — Hero e elementos gráficos

**Objetivo:** criar abertura expressiva e integrá-la ao Sobre sem refazer a aplicação.

**Tarefas:**

- [x] Validar escala do nome/especialidades/headline e hierarquia dos três CTAs.
- [x] Distribuir melhor grafo e conteúdo, preservando nome, apresentação e links.
- [x] Evoluir camadas/grupos do SVG para intensidade de conexões e movimento posterior de nós.
- [x] Definir tratamento mobile do grafo: simplificado ou estático, sem consumir espaço de leitura desnecessário.
- [x] Integrar conexão visual e transição para Sobre; preservar retrato, dimensões e alt.
- [x] Documentar intervalos e estados finais de intro/cursor/scroll para implementação na Fase 8.

**Arquivos previstos:** `Hero.tsx`, `NeuralGraph.tsx`, `About.tsx`, `globals.css`; PT/EN somente para rótulos necessários, sem reescrever conteúdo profissional; documentação.

**Dependências:** Fase 3 e aprovação própria. Motor GSAP ainda não será integrado nesta fase.

**Aceite:** maior presença visual com textos legíveis; nome/CTA não dependem da animação; versão estática completa e foto mantida no Sobre.

**Riscos:** SVG atrás do texto diminuir contraste, fonte do sistema quebrar o nome, excesso de elementos no mobile e reuso do SVG afetar a arte de C.

**Validação:** capturas desktop/mobile PT/EN, foco/CTA, contraste sobre decoração, imagem carregada e sem shift; lint/build.

**Aprovação:** concluída — “sim” do usuário em 17/10/2026 à proposta da Fase 4; composição estática e preparação gráfica verificadas. Motor e animações permanecem na Fase 8, sem autorização de integração agora. Registro em F.5.

### Fase 5 — Projetos

**Objetivo:** dar protagonismo individual aos três projetos sem criar percurso artificial de leitura.

**Tarefas:**

- [x] Transformar a grade convencional em faixas/cards expressivos, respeitando os três registros e a ordem atual.
- [x] Aumentar títulos/artes e organizar resumo, período, categoria, status e tecnologias.
- [x] Refinar as três composições SVG próprias com distinção visual e sem dados confidenciais.
- [x] Melhorar summary/indicador e explorar redução da repetição das tecnologias nos detalhes, sem perder dados.
- [x] Preservar abertura nativa e estado de detalhes ao alternar idioma.
- [x] Avaliar sticky apenas de decoração no desktop com altura útil; manter cards naturais no mobile/zoom.
- [x] Definir estados de entrada/transição e ganchos de animação para a Fase 8; não criar pinning nem instalar motor agora.

**Arquivos previstos:** `Projects.tsx`, `ProjectCard.tsx`, `ProjectArtwork.tsx`, eventualmente `NeuralGraph.tsx`, estilos específicos e dicionários de ações; dados somente para campos de apresentação justificados, sem alterações profissionais.

**Dependências:** Fases 3–4 e aprovação própria.

**Aceite:** cada projeto identificável e legível, status preservados, detalhes por teclado, sem links privados inventados, sem carrossel automático ou necessidade de percorrer telas vazias.

**Riscos:** cards altos em telas baixas, detalhes sobrepostos, conteúdo oculto em transições e discrepância de período/status PT/EN.

**Validação:** três projetos com detalhes abertos/fechados, Enter/Espaço, foco, idioma/hash preservados; tela baixa/landscape, 320 px e desktop; lint/build.

**Aprovação:** concluída — “sim” em 17/10/2026 à proposta da Fase 5; faixas estáticas e detalhes verificados. Sem motor de animação, sticky ou pin nesta entrega; avaliação e contrato registrados em F.6.

### Fase 6 — Experiência, formação e tecnologias

**Objetivo:** diferenciar narrativas e tornar a informação mais fácil de percorrer.

**Tarefas:**

- [x] Mapear as sete atividades CPIDT aos três grupos editoriais de B.4, com equivalência PT/EN e sem omissões.
- [x] Modernizar a apresentação temporal da Experiência mantendo cargo, organização, período e resumo.
- [x] Trocar Formação por dois cards compactos; preservar instituições, períodos e conclusão prevista.
- [x] Refinar seis grupos de skills, seus alinhamentos e chips, preservando a lista integral.
- [x] Destacar categorias principais pela composição, sem níveis de proficiência ou novas competências.
- [x] Preparar marcadores/linhas para movimento discreto posterior e evitar nova timeline genérica em Formação.

**Arquivos previstos:** `Experience.tsx`, `Education.tsx`, `Skills.tsx`, `TimelineItem.tsx`, `SkillsGroup.tsx`, `globals.css`, `src/data/types.ts`/`experience.ts` e `en-content.ts` se o agrupamento exigir contrato; `EducationCard.tsx` somente se indispensável; dicionários/documentação.

**Dependências:** Fases 3–5 e aprovação própria.

**Aceite:** distinção visual entre Experiência/Formação, sete atividades rastreáveis, duas formações e seis categorias completas; sem viewport obrigatória ou novos fatos.

**Riscos:** agrupar atividade alterar sentido, perder tradução, quebrar consumidor compartilhado de TimelineEntry, chips sem foco confundirem-se com ações.

**Validação:** comparação dos dados antes/depois, PT/EN, títulos/listas, teclado nos controles existentes, layout compacto sem cortes; lint/build.

**Aprovação:** autorizada em 17/10/2026 pelo pedido “continue a execução da fase 6”; concluída e validada no escopo aprovado. Evidências em F.7.

### Fase 7 — Certificações

**Objetivo:** aumentar reconhecimento visual sem dar legitimidade indevida a credenciais.

**Tarefas:**

- [x] Reconferir os três registros e preservar filtro de exibição, tipo e datas.
- [x] Refinar hierarquia de credencial, emissor, período e validade; reduzir rótulos redundantes.
- [x] Validar composição com símbolos neutros e diferenciação inequívoca de exame/curso.
- [x] Conferir assets disponíveis: nenhum badge/logo oficial fornecido; usar símbolos próprios neutros. A inclusão futura de material oficial exige conferir origem, permissão e adequação.
- [x] Preservar a omissão de links de verificação, pois nenhuma URL autêntica foi fornecida; cadastrar futuramente apenas após recebimento e confirmação do proprietário.
- [x] Manter Cloud Practitioner oculta até validação explícita; registrar divergência com o currículo antigo, sem “resolver” pela estética.

**Arquivos previstos:** `Certifications.tsx`, `CertificationCard.tsx`, `globals.css`, dicionários; `src/data/certifications.ts`/tipos e `public/` somente para material novo confirmado; documentação da origem dos assets.

**Dependências:** composição das Fases 3/6 e aprovação própria. Assets/URLs opcionais não bloqueiam a versão com símbolos neutros.

**Aceite:** AI Practitioner e LFS158 com apresentação refinada e classificação correta, Cloud oculta, datas intactas, sem marca ou link que sugira validação inexistente.

**Riscos:** confundir logo de emissor com badge conquistado; divulgar credencial antiga; restrições de marca e link inválido.

**Validação:** inventário de credenciais/assets, ausência de URL sem fonte, comparação PT/EN, datas/flags, responsividade, foco dos links presentes; lint/build.

**Aprovação:** autorizada em 17/10/2026 pelo “sim” à proposta da Fase 7; concluída e validada conforme F.8. Alteração de credenciais continua exigindo confirmação própria. Assets/URLs oficiais não fornecidos permanecem condicionais e não bloquearam a versão com símbolos neutros.

### Fase 8 — Sistema de animações e scroll

**Objetivo:** integrar movimento consistente às composições já aprovadas, mantendo o scroll natural.

**Tarefas:**

- [x] Confirmar autorização dos pacotes/versões: recomendação `gsap` e `@gsap/react`, com ScrollTrigger importado de GSAP; comparar alternativa nativa se pacotes não forem aprovados.
- [x] Conferir compatibilidade/licença e registrar delta de bundle antes/depois da instalação autorizada.
- [x] Criar integração com escopo, refs, limpeza e condições de viewport/preferência.
- [x] Implementar intro finita, movimento sutil de grafo, entrada progressiva e transições de artes dos projetos.
- [x] Integrar continuidade entre Hero/Sobre, faixas de Projetos e encerramento; não animar indiscriminadamente todos os chips.
- [x] Tratar idioma, resize, imagem e toggle de detalhes com recálculo agrupado e preservação de foco/hash.
- [x] Pausar fora de tela/aba oculta e desligar efeitos em movimento reduzido; garantir layout estático se o módulo falhar.
- [x] Validar sticky gráfico antes de propor pin. Qualquer mudança para pinning significativo exige apresentar alcance e aprovar a variante.
- [x] Manter scroll nativo; Lenis permanece excluído, salvo solicitação/aprovação separada com justificativa concreta.

**Arquivos previstos:** manifesto/lockfile somente para pacotes aprovados; `src/hooks/usePortfolioMotion.ts` ou integração local equivalente, `NeuralGraph.tsx`, `Hero.tsx`, `Projects.tsx`, `ProjectArtwork.tsx`, `Contact.tsx`, CSS de movimento e pontos de integração estritamente necessários. `App.tsx` apenas se uma composição compartilhada exigir; não instalar provider global sem necessidade.

**Dependências:** Fases 2–7 e autorização específica da fase/dependências. Sem mudança de deploy.

**Aceite:** scroll direto sem captura de wheel/touch, reversão apropriada dos efeitos vinculados, texto/foco sempre acessíveis, nenhuma duplicação em StrictMode, módulo opcional e movimento reduzido funcional.

**Riscos:** vazamento de listeners/tickers, inline styles persistentes, refresh em ciclo, atraso de rolagem, SVG caro e conflito de transform entre CSS/GSAP.

**Validação:** mount/unmount e StrictMode, várias trocas PT/EN, resize, details, hashes diretos e back/forward; PageDown/Home/End, toque e tela baixa; preferência alterada em execução; bloqueio do módulo de animação. Medir frames/long tasks, comparar bundle, lint/build/preview. Se houver pin aprovado, demonstrar saída/foco/âncoras em todos os cenários.

**Aprovação:** autorizada em 17/10/2026 pelo “continue” à proposta da Fase 8, que incluía instalar GSAP e @gsap/react mantendo scroll nativo. Concluída e validada conforme F.9; Lenis, pinning significativo e deploy não foram autorizados.

### Fase 9 — Responsividade, testes e otimização

**Objetivo:** demonstrar a qualidade final e registrar limitações reais.

**Tarefas:**

- [x] Executar matriz de regressão de E.1 com PT/EN e estados relevantes.
- [x] Comparar capturas e composição com o baseline aceito, incluindo contato/sobre/projetos.
- [x] Verificar semântica, foco, contraste, movimento reduzido e pelo menos um leitor de tela quando disponível; declarar ausências.
- [x] Validar cópia real em contexto seguro e falhas; remover toda dependência de Gmail/mailto no contato.
- [x] Conferir dados/flags/URLs, retrato, metadados e ausência de material não autorizado.
- [x] Medir desempenho de forma reproduzível e reduzir efeitos custosos; distinguir laboratório de dados de campo.
- [x] Executar scripts existentes: lint, typecheck/build e preview; escolher testes automatizados somente para riscos relevantes, com nova dependência aprovada se necessária.
- [x] Conferir conteúdo de `dist/`, tamanhos e assets; atualizar README, este registro e referência no histórico.
- [x] Apresentar resultado e pendências; manter publicação fora do escopo sem autorização específica.

**Arquivos previstos:** correções pontuais comprovadas nas áreas anteriores e documentação; roteiros de QA locais se autorizados. Configuração de testes permanente só com justificativa e aprovação. Nenhum workflow de deploy presumido.

**Dependências:** fases anteriores aprovadas e resultado visual aceito.

**Aceite:** critérios gerais abaixo atendidos, build sem falhas, regressões resolvidas e limitações documentadas; nenhuma declaração de auditoria integral sem execução correspondente.

**Riscos:** diferenças de fonte/navegador/dispositivo, testes só em emulação, ausência de domínio público para métricas reais e expectativas antigas nos roteiros temporários.

**Validação:** matriz E.1, registros de ambiente e resultado, comparação antes/depois e evidências do build; repetir apenas testes necessários para resolver risco concreto.

**Aprovação:** autorizada em 17/10/2026 pelo “sim” à proposta da Fase 9; concluída no escopo técnico local. Resultados e limites em F.10; aceite visual final e publicação permanecem decisões do proprietário.

## E. Critérios de aceitação gerais

Critérios verificados no conjunto local em Chrome/Edge conforme F.10. As marcações se referem às verificações executadas; não representam certificação integral WCAG, cobertura de navegadores indisponíveis ou métricas de produção.

- [x] Identidade preto/grafite/vermelho, foto, nome, apresentação e informações profissionais preservados.
- [x] Página única navegável, skip link, hashes/destinos e menu funcionais; nenhum atraso obrigatório de scroll ou foco encoberto.
- [x] PT/EN completo, metadados e idioma HTML corretos; troca mantém foco, detalhes e navegação.
- [x] Hero, Projetos e Contato têm protagonismo; Formação/Experiência têm composição adequada ao conteúdo, com ritmo visivelmente distinto e sem cortes.
- [x] Os três projetos e todas as experiências/formações/skills/credenciais autorizadas permanecem presentes, com políticas de privacidade/exibição intactas.
- [x] Não existe `mailto:` nem fluxo dependente de Gmail na seção Contato; endereço selecionável, cópia e feedback funcionam nos contextos suportados e há saída manual compreensível na falha. Verificado no Chrome local conforme F.3.
- [x] Layout de 320 px a desktop largo sem overflow, sobreposição de conteúdo ou exclusão de controles; orientação horizontal e ampliação de texto consideradas.
- [x] Movimento controlado, reversível quando vinculado à posição de scroll, sem loops obrigatórios, enjoo evitável ou conteúdo escondido pela animação.
- [x] Preferência de movimento reduzido desativa efeitos JS e CSS; falha do módulo de animação deixa a aplicação legível.
- [x] Teclado, nomes acessíveis, semântica, contraste, foco e interações nativas sem regressão; animação não é necessária para operar.
- [x] Listeners, observers, timers e timelines limpos; sem erros/duplicação após trocas de idioma, resize e StrictMode.
- [x] Lint e build passam, assets/dados públicos conferidos e resultados/limites documentados.
- [x] Nenhuma dependência, marca, credencial, alteração substancial ou publicação incluída sem autorização correspondente.

### E.1 Matriz de validação prevista

| Dimensão | Cenários mínimos | Evidência esperada |
|---|---|---|
| Telas | 320, 375, 768, 1024, 1440 e 1920 px; uma viewport baixa/landscape e teste de zoom equivalente a reflow. | Capturas, largura útil/scrollWidth e alturas de seção. |
| Idioma | PT e EN, reload PT inicial, alternância no menu/detalhes/contato. | Texto, lang, metadados, foco e estados preservados. |
| Navegação | Skip, sete links, CTA Projetos, topo, hash direto e histórico. | Destino visível e focado; nenhum pin o impede. |
| Projetos | Três detalhes abertos/fechados; teclado e troca de idioma durante interação. | Conteúdo integral e nenhum salto/controle oculto. |
| Contato | Cópia real consentida em HTTPS/localhost; API indisponível e permissão recusada; repetição. | String exata, confirmação após sucesso, erro útil e seleção manual. Não enviar e-mails. |
| Movimento | Normal/reduzido, mudança da preferência em execução, toque, teclado, módulo ausente e aba oculta. | Layout final acessível; efeitos encerrados/pausados corretamente. |
| Navegadores | Chrome/Edge e Firefox; Safari/iOS quando houver acesso. | Registrar versões e o que foi manual/emulado; não alegar cobertura indisponível. |
| Acessibilidade | Leitor de tela disponível, ordem DOM, headings, nomes, contraste/forced colors, texto 200%. | Achados/correções e limitações, sem falsa certificação WCAG. |
| Técnica | Scripts atuais, StrictMode, ciclos de resize/idioma/detalhes, assets em preview. | Build/lint e console sem falhas, ausência de crescimento indevido de triggers/listeners. |

### E.2 Performance: metas e tomada de decisão

Metas de referência para uma futura medição em produção: LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1, avaliados no percentil 75 quando houver dados de campo suficientes. São metas reconhecidas, não medições do portfólio. [Web Vitals — Google](https://web.dev/articles/vitals).

No laboratório, registrar navegador/dispositivo, viewport, throttling, cache e interferências; comparar múltiplas execuções nas mesmas condições. O laboratório não substitui INP/CWV de campo. Verificar traces de scroll e long tasks, sem prometer 60 fps em todo dispositivo.

Como orçamento de projeto proposto: investigar aumento superior a 40 KB gzip de JavaScript frente ao build imediatamente anterior à integração do motor e qualquer carregamento de mídia/fonte remoto novo. Esse limite é uma decisão deste plano, não tamanho atribuído a biblioteca. Se o orçamento não couber, reduzir efeitos/imports ou apresentar ajuste para aprovação. Não introduzir uma tela de loading para esconder custo de animação.

CLS deve ser protegido com proporções/dimensões reservadas, sem mostrar conteúdo somente após carregar o motor. Não lazy-load texto principal ou controlar renderização de projetos pela posição do scroll. Medir o resultado antes de afirmar melhora de performance.

## F. Controle de alterações

### F.1 Regra de atualização

Este documento registra análise, proposta e execução posterior autorizada das Fases 2–9, concluídas no escopo técnico local com os limites documentados. Aprovações devem registrar data, escopo e eventuais exclusões. Após cada execução autorizada, preencher resumo, arquivos, testes e pendências; não marcar conclusão antecipadamente.

| Fase | Data de aprovação | Resumo executado | Arquivos modificados | Verificações executadas | Pendências/decisões |
|---|---|---|---|---|---|
| 1 | 17/10/2026, somente auditoria/documento no pedido atual | Auditoria estática, revisão de capturas existentes e planejamento. Nenhuma implementação. | `MELHORIAS_PORTFOLIO.md`. | Leituras locais, inventário de versões, consulta de fontes, inspeção de capturas e conferência documental. | Sem nova sessão interativa, build ou CWV. Aceite do plano pelo proprietário ainda pendente. |
| 2 | 17/10/2026, “sim” à proposta da fase | Novo encerramento, e-mail selecionável, cópia primária e remoção de Gmail/mailto. | Contact, PT/EN, CSS, README e planos. | Lint/build; preview Chrome; dez layouts; cópia real/repetida; falhas e concorrência; teclado/âncoras/texto ampliado. | Concluída no escopo aprovado; detalhes em F.3. |
| 3 | 17/10/2026, “sim” à proposta da fase | Ritmos por seção, títulos laterais, containers seletivos e grades desacopladas. | Container, Section, cinco seções, CSS e documentação. | Baseline/versão final: 24 layouts cada; conteúdo idêntico; teclado/âncoras/menu/texto ampliado; lint/build. | Concluída; resultados em F.4. |
| 4 | 17/10/2026, “sim” à proposta da fase | Hero amplo, grafo em camadas isolado por variante e transição para Sobre com retrato preservado. | Hero, NeuralGraph, About, CSS, PT/EN e documentação. | Lint/build; 12 layouts por versão; conteúdo/grafos padrão comparados; teclado, texto 200%, foto e contraste conservador. | Concluída como composição estática; movimentos preparados para Fase 8. |
| 5 | 17/10/2026, “sim” à proposta da fase | Três faixas de projetos, artes específicas, títulos maiores e detalhes sem tecnologias repetidas. | Projects, ProjectCard, ProjectArtwork, CSS, PT/EN e documentação. | Lint/build; 24 layouts; dados comparados; teclado, PT/EN, estado/hash, landscape e texto 200%. | Concluída como layout estático; movimentos posteriores na Fase 8. |
| 6 | 17/10/2026, “continue a execução da fase 6” | Sete atividades em três grupos, Formação em dois cards e seis categorias de tecnologias refinadas. | Experience, Education, Skills, TimelineItem, SkillsGroup, tipos, experiência PT/EN, CSS e documentação. | Lint/build; comparação PT/EN; 12 layouts; texto 200%; âncoras/menu/idioma por teclado; capturas revisadas. | Concluída; composição estática, sem novos pacotes. Detalhes em F.7. |
| 7 | 17/10/2026, “sim” à proposta da fase | Cards refinados com símbolos neutros, emissor em destaque e datas agrupadas; rótulo redundante removido. | Certifications, CertificationCard, CSS e documentação. | Lint/build; comparação PT/EN/datas e hashes das fontes; 12 layouts; texto 200%; teclado, árvore acessível e movimento reduzido. | Concluída conforme F.8. Assets/URLs não fornecidos; Cloud Practitioner oculta. |
| 8 | 17/10/2026, “continue” à proposta incluindo GSAP/@gsap/react | Módulo opcional de animações, intro finita e scrub decorativo; scroll nativo. | Manifesto/lockfile, App, PortfolioMotion, NeuralGraph e documentação. | Lint/build/npm ls; PT/EN, layouts, teclado/toque/histórico, redução dinâmica, fallback, StrictMode e frames. | Concluída conforme F.9; sem Lenis, sticky/pin ou deploy. |
| 9 | 17/10/2026, “sim” à proposta da fase | Regressão final Chrome/Edge e carga condicional para movimento reduzido. | App.tsx e documentação; roteiros locais ignorados. | Lint/build/npm ls; 96 cenários; foco/semântica/contraste; cópia real/falhas; assets; 12 medições locais. | Concluída no escopo local; cobertura manual/Safari/Firefox e produção ausentes; detalhes F.10. |

### F.2 Decisões propostas para confirmação

1. **Fases implementadas:** Fase 2, contato; Fase 3, composição; Fase 4, Hero; Fase 5, Projetos; Fase 6, Experiência, Formação e Tecnologias; Fase 7, Certificações. Fase 8 também concluída, com GSAP 3.15.0 e @gsap/react 2.1.2 instalados após aprovação específica. Fase 9 também concluída no escopo técnico local Chrome/Edge; não há nova fase de implementação iniciada. Publicação exige autorização própria.
2. **Projetos:** três faixas de destaque com scroll vertical nativo, arte maior e sticky gráfico opcional; sem pin artificial como ponto de partida.
3. **Movimento:** CSS/SVG + GSAP/ScrollTrigger, com `@gsap/react` como adaptador recomendado; instalação/versionamento somente na fase autorizada. Motion é alternativa, Lenis fica fora da proposta inicial.
4. **Certificações:** refinamento com símbolos neutros; o proprietário poderá fornecer badges/URLs autênticos depois. Não solicitar credenciais sensíveis nem presumir disponibilidade desses materiais.

A aprovação da Fase 2 não aprova as decisões técnicas das fases seguintes. Mudanças substanciais surgidas durante uma fase devem ser apresentadas antes da execução. Não há publicação, instalação, commit, push ou alteração de deploy autorizados por este documento.

### F.3 Execução da Fase 2 — 17/10/2026

- **Autorização:** “sim” do usuário após apresentação do escopo da Fase 2. Mudança específica em relação ao briefing original: remover mailto e Gmail do contato.
- **Baseline:** roteiro anterior `.cache/photo-contact/check.mjs` executado antes da alteração; contato anterior e retrato carregaram, cenários do roteiro passaram. Browser e servidores encerrados.
- **Implementação:** seção preserva `#contato`, `tabIndex=-1`, associação ao h2 e Container. Título “Vamos construir a próxima conexão.” / “Let’s build the next connection.”; descrição original, e-mail selecionável e painel com cópia primária. LinkedIn/GitHub com novas abas protegidas. Reuso do NeuralGraph como decoração estática, sem motor/pacote novo; clipping restrito à decoração para não cortar foco.
- **Interação:** estados idle/copying/copied/error, confirmação somente após Promise resolver, guarda contra chamadas simultâneas, `aria-disabled` durante a escrita preservando foco, largura reservada e ícone de confirmação. Região `role=status`/`aria-atomic` atualizada por tentativa; falha informa cópia manual. Sem timers ou listeners novos. Nenhuma mensagem enviada e nenhuma ação vinculada a cliente de e-mail.
- **Arquivos alterados:** `src/sections/Contact.tsx`, `src/i18n/pt.ts`, `src/i18n/en.ts`, `src/styles/globals.css`, `README.md`, `MELHORIAS_PORTFOLIO.md`, `IMPLEMENTAR.md`. Footer e componentes compartilhados permaneceram com suas implementações anteriores; a nova seção compõe seu próprio h2 sem alterar Section.
- **Validação final:** lint sem erros/avisos; build com TypeScript/Vite aprovado. Saída: HTML 0,68 KB, CSS 20,44 KB (gzip 5,14) e JS 254,82 KB (gzip 79,19), segundo relatório Vite. Sem dependências adicionadas.
- **Preview no Chrome:** dez layouts PT/EN em 320/375/768/1024/1440 px sem overflow, botão com alvo ≥44 px e título abaixo do header. Cópia real e repetida por Enter/Espaço confirmada lendo somente o endereço público após escrita bem-sucedida; permissões concedidas ao perfil isolado de teste. Não foi consultado o conteúdo anterior do clipboard; o teste deixou o e-mail público copiado.
- **Estados adicionais:** operação pendente sem sucesso antecipado, duas chamadas ignorando duplicação, troca de idioma durante Promise, recusa e API ausente nos dois idiomas, foco mantido, dimensões do botão estáveis após sucesso, texto a 200% em 320 px, menu mobile/âncora e movimento reduzido conferidos. Foto e footer continuam presentes. Busca em src sem Gmail/mailto/chaves antigas do fluxo. Nenhuma exceção JavaScript na execução final.
- **Inspeção visual:** capturas PT desktop/mobile revisadas; capturas dos dois idiomas e resultados em `.cache/evolution-contact/`, ignorados pelo Git. O primeiro roteiro tentou serializar um elemento DOM e falhou no CDP; corrigido o roteiro, sem mudança de produto decorrente desse erro. Browser/perfil isolado e servidores temporários encerrados.
- **Limites:** não houve teste com leitor de tela nem auditoria integral de contraste/CWV nesta fase; sem certificação de acessibilidade ou envio de e-mail. Clipboard automático continua sujeito a contexto seguro/permissões. Falhas da API foram simuladas; o sucesso de cópia foi real no Chrome do ambiente.
- **Próxima proposta:** Fase 3, medir seções e rever ritmos/containers/alinhamentos. Somente após nova aprovação. Sem commit, push ou publicação.

### F.4 Execução da Fase 3 — 17/10/2026

- **Autorização:** “sim” do proprietário à proposta de revisar espaçamento/composição. Baseline registrado no Chrome antes de alterar componentes/CSS, com 24 combinações: PT/EN × seis larguras (320/375/768/1024/1440/1920) × detalhes abertos/fechados.
- **Composição:** Container ganhou opção `width=wide` de 80 rem, mantendo 72 rem no padrão. Section ganhou `rhythm` (compact/editorial/feature), `layout` (stacked/aside) e `width`; preserva IDs, h2, aria-labelledby, ordem DOM e foco. Wrapper `section-body` delimita conteúdo sem alterar semântica interna.
- **Ritmos:** compacto 2,5–4 rem (Formação e Certificações), editorial 3,5–5 rem (Sobre, Experiência e Tecnologias), destaque 4–6 rem (Projetos). Hero conserva padding e estrutura. Contato mantém sua composição da Fase 2 com a especificidade corrigida para aplicar o padding próprio de até 6 rem, antes sobreposto pela regra genérica posterior de page-section.
- **Alinhamentos:** títulos de Experiência/Formação ficam à esquerda do conteúdo a partir de 64 rem, sem sticky/pin ou viewport fixa; datas recebem coluna menor dentro da timeline para preservar leitura. Sobre aproxima foto/texto com proporções/gap ajustados e alinhamento superior. Projetos/Tecnologias usam largura ampla; gutters passam a 4vw com limites anteriores de 1,25–4 rem.
- **Grades e continuidade:** regras de Projetos e Skills separadas, mantendo breakpoints de colunas. Skills usa gap de 1 rem e cards esticados na linha, em vez de espaços irregulares por altura. Projetos recebe fundo com transição sutil. Separadores e eyebrows mantidos após revisão, pois continuam orientando o conteúdo; o título lateral já reduz repetição vertical. Não houve remoção de textos ou alteração de dados.
- **Arquivos:** `Container.tsx`, `Section.tsx`, `Experience.tsx`, `Education.tsx`, `Projects.tsx`, `Skills.tsx`, `Certifications.tsx`, `globals.css` e documentação. SectionHeading já tinha a semântica necessária e foi preservado; sem alterações em dicionários, conteúdos, foto, Hero/NeuralGraph ou lógica do contato. Nenhuma dependência nova.

Medidas reais antes/depois, PT-BR em 1440 × 1000 px, detalhes fechados, Chrome no ambiente local (alturas arredondadas; não são metas universais nem medição de desempenho):

| Seção | Altura antes → depois | Padding por lado antes → depois | Container antes → depois |
|---|---:|---:|---:|
| Hero | 695 → 695 px | 96 → 96 px | 1.152 → 1.152 px |
| Sobre | 727 → 645 px | 115,2 → 80 px | 1.152 → 1.152 px |
| Projetos | 1.113 → 999 px | 115,2 → 96 px | 1.152 → 1.280 px |
| Experiência | 871 → 670 px | 115,2 → 80 px | 1.152 → 1.152 px |
| Formação | 820 → 587 px | 115,2 → 64 px | 1.152 → 1.152 px |
| Tecnologias | 942 → 821 px | 115,2 → 80 px | 1.152 → 1.280 px |
| Certificações | 710 → 584 px | 115,2 → 64 px | 1.152 → 1.152 px |
| Contato | 788 → 750 px | 115,2 → 96 px | 1.152 → 1.152 px |

- **Validação:** lint/build passaram. Relatório Vite: CSS 21,49 KB (gzip 5,34), JS 255,17 KB (gzip 79,31), HTML 0,68 KB. Preview final repetiu as 24 combinações sem overflow. Comparação integral de textContent por seção/idioma idêntica ao baseline, incluindo dados dentro de details. Sete âncoras por Enter com foco no destino e h2 abaixo do header; menu mobile/seleção, texto 200% em 320 px nos dois idiomas e presença do retrato original, três projetos, duas credenciais visíveis e ausência de Gmail/mailto conferidos. Sem exceções JavaScript.
- **Evidências visuais:** capturas de seis seções em 375/1440 px antes/depois; Formação, Experiência e Projetos desktop e Sobre mobile revisados visualmente. Medidas completas de altura/padding/gap/largura estão em `.cache/evolution-composition/before.json` e `after.json`. Não se avaliou qualidade só pela redução de altura: foram verificadas distribuição lateral, linhas de leitura, foco e preservação do conteúdo.
- **Limites:** Chrome headless em viewport emulada, sem revisão manual de leitor de tela/Firefox/Safari ou novo perfil CWV. Não houve nova auditoria integral de contraste. Interação de cópia não foi reexecutada, pois sua lógica foi preservada e validada na Fase 2; ausência de links antigos e presença do controle permanecem verificadas. Roteiros/artefatos ignorados; browser e servidores encerrados ao terminar.
- **Pendência:** Fase 4 (Hero/grafo e transição para Sobre) exige nova aprovação. Layout específico das faixas de projetos e cards de formação permanece para as fases 5–6. Nenhum commit, push ou deploy.

### F.5 Execução da Fase 4 — 17/10/2026

- **Autorização:** “sim” do usuário à proposta de redesenhar composição do Hero, evoluir o SVG e integrar Sobre, com apresentação estática e preparação de animações posteriores.
- **Baseline:** capturas e registro dos textos/ações/topologia padrão em `.cache/evolution-hero/before.json`, antes das alterações. Doze layouts PT/EN entre 320 e 1920 px.
- **Composição:** nome ocupa a faixa de identidade do container amplo; escala fluida de 3–8 rem, especialidades mais legíveis, apresentação e grafo em duas colunas a partir de 64 rem. Conteúdo alinhado ao início e grafo limitado a 32 rem após revisão visual para evitar intervalo vazio acima da apresentação. No mobile, o gráfico estático ocupa fundo recortado, a 16% de opacidade, sem acrescentar faixa de altura ao fluxo.
- **Continuidade:** link nativo “Mais sobre mim” / “More about me” com alvo de 44 px e linha decorativa leva a #sobre; padding de transição e borda ajustados localmente. Foto permanece única, com o mesmo arquivo, alt PT/EN e dimensões 460 × 460; moldura com cantos gráficos via pseudo-elementos, sem editar a imagem.
- **SVG:** NeuralGraph aceita variante `default`/`hero`. Default mantém 12 nós e 16 arestas e a mesma geometria/classes dos círculos em Contato e C, comparadas com o baseline. Hero acrescenta órbitas, halos e intensidade diferenciada. Grupos `data-graph-layer` e atributos de nó/arestas preparam integração escopada; todos permanecem decorativos/ocultos à árvore acessível. Sem canvas, 3D, listeners, motor ou dependência novos.
- **Arquivos:** `Hero.tsx`, `NeuralGraph.tsx`, `About.tsx`, `globals.css`, `pt.ts`, `en.ts`, README e planos. Novo texto limitado ao link de navegação; nome, títulos profissionais, headline, descrição, Sobre e três CTAs profissionais idênticos ao baseline. Demais conteúdos também comparados sem alterações.

#### Contrato preparado para a Fase 8 — proposta ainda não executada

| Alvo | Movimento previsto | Estado estático/retorno e limite |
|---|---|---|
| `#inicio [data-hero-part="identity"]` | Entrada opcional de até 600 ms, deslocamento de até 8 px. | Nome permanece visível; posição final zero, sem preloader ou condição de leitura. |
| `#inicio [data-hero-part="copy"]` | Entrada de 350–500 ms, até 8 px, acompanhando identidade. | Textos/CTAs visíveis e focáveis desde renderização; transform final neutro. |
| `[data-hero-part="visual"]` | Resposta de cursor até 6 px, somente pointer fine/hover; scroll de até cerca de 16 px. | Retorno do cursor a zero; cleanup/reduced motion restaura CSS. Opacidade estática mobile 0,16 e desktop 1, sem forçar opacidade global. |
| Camadas field/halos/edges | Intensidade gradual em sequência finita de até 4 s, sem loop obrigatório. | Encerrar nos valores CSS da variante; não animar a variante default de outras seções por seletor global. |
| Nós/arestas | Drift opcional de 2–4 px somente se arestas acompanharem as coordenadas. | Usar data-node/data-from/data-to para manter conexões; se não for adequado, animar a camada como um todo. Reverter ao desenho estático em movimento reduzido. |

- **Validação final:** lint/build aprovados. Relatório Vite: CSS 23,33 KB (gzip 5,69), JS 256,75 KB (gzip 79,70), HTML 0,68 KB. Doze layouts finais PT/EN em 320/375/768/1024/1440/1920 sem overflow; nome/CTAs visíveis, um h1, SVGs decorativos e links externos protegidos. CTA Projetos e novo link Sobre acionados por Enter em mobile/desktop com hash/foco corretos e h2 abaixo do header. Texto 200% em 320 px nos dois idiomas passou.
- **Foto/contraste:** proporção quadrada e atributos de reserva 460 × 460 conferidos; uma única foto carregada, sem duplicação no Hero. Cálculo conservador de contraste com gradiente vermelho 5% mais tinta máxima por canal do SVG mobile a 16%: texto secundário 7,60:1; principal 13,87:1; botão branco/vermelho 4,82:1. É uma verificação dos pares definidos, não auditoria integral de todos os pixels ou relatório CLS.
- **Evidências:** `.cache/evolution-hero/before.json`, `after.json` e capturas de Hero/Sobre em PT/EN e 375/1440 px. Hero PT desktop, Hero EN mobile e Sobre PT desktop revisados; Hero desktop final revisto após reduzir largura do grafo. Nenhuma exceção JavaScript. Browser/perfil e servidores temporários encerrados ao terminar.
- **Limites:** Chrome em emulação, sem novo teste manual com leitor de tela, Firefox/Safari ou auditoria CWV/CLS. Não foram implementados cursor, intro, scrub ou rolagem customizada nesta fase; módulo de animação continua sujeito à aprovação da Fase 8. A aplicação não tem dependência dele para mostrar este conteúdo.
- **Próxima proposta:** Fase 5 — faixas/cards de projetos e detalhes refinados, ainda sem autorização. Nenhum commit, push ou deploy.

### F.6 Execução da Fase 5 — 17/10/2026

- **Autorização:** “sim” à proposta de cards maiores, artes específicas e detalhes refinados, em composição estática preparada para a Fase 8.
- **Baseline:** `.cache/evolution-projects/before.json`, com textos/dados/tecnologias e 24 combinações de layout: PT/EN × seis larguras 320/375/768/1024/1440/1920 × detalhes fechados/abertos. Medidas não dependem da posição de scroll.
- **Composição:** grade de três colunas substituída por três faixas verticais. Desktop a partir de 64 rem: arte e conteúdo em colunas, alternando apenas a posição visual da decoração no segundo card. Mobile/tablet: arte seguida de conteúdo, fluxo natural. Índices 01–03 são ordem decorativa, não métricas/ranking. Artigos, h3, categorias, status e dados mantidos.
- **Hierarquia:** títulos de 1,5–2,25 rem, conteúdos com padding próprio, maior área gráfica, resumos legíveis e summary com superfície/borda e alvo mínimo de 44 px. Card não recebe clipping que prejudique foco; clipping fica na arte decorativa.
- **Artes originais:** TEDAS usa documento/conexões/estruturas abstratas; MIND-BH usa forma de fala com órbitas e barras decorativas; C usa dois sinais de entrada, somatório e saída AND, coerente com Perceptron manual confirmado. Não há prontuários, amostras de áudio, biomarcadores reais ou novas arquiteturas alegadas. C passa a ter desenho próprio no ProjectArtwork, deixando de usar NeuralGraph; Hero/Contato permanecem intactos.
- **Detalhes:** preservados `details/summary`, nomes específicos por projeto e indicador +/×. Quatro tecnologias iniciais no card; somente as restantes nos detalhes com label PT/EN adicional. A união e a ordem de todas as tecnologias foram comparadas ao baseline, sem perda. C já mostra suas quatro tecnologias no card e não repete a lista ao expandir. Todos os parágrafos detalhados permanecem presentes.
- **Sticky avaliado:** cards PT fechados medidos em 1440 × 1000 com aproximadamente 494/537/436 px de altura; cabem no espaço útil de leitura sem fixação de arte. Optou-se por fluxo normal também nos expandidos, evitando retenção em telas baixas e dependência de JS. Área de Projetos fechada mede cerca de 1.862 px no desktop; não foram criados espaçadores de viewport ou pin. A expansão aumenta altura por conteúdo real e escolha do visitante.
- **Arquivos:** `Projects.tsx`, `ProjectCard.tsx`, `ProjectArtwork.tsx`, `globals.css`, `pt.ts`/`en.ts` e documentação. Dados profissionais e tipos não modificados; mesma ordem, títulos, resumos, períodos, detalhes, categorias e ausência de URLs de projeto. Nenhum pacote novo.

#### Contrato para Fase 8 — ainda sem execução

| Alvo | Proposta de movimento | Limite/estado acessível |
|---|---|---|
| `[data-project] [data-project-part="artwork"]` | Entrada discreta de 450–650 ms e deslocamento até 12 px, alternando direção conforme composição. | Retorno à posição estática; decoração não controla renderização/foco do conteúdo. |
| `[data-artwork-layer="diagram"]` | Escala pequena 0,98–1 e intensidade gradual vinculada à posição no scroll. | Sem blur no texto, sem carrossel automático e sem scroll capturado. |
| `[data-artwork-layer="waveform"]` | Pequena modulação decorativa na sequência finita/scroll, se aprovada. | Não representar dados reais; sem loop autônomo obrigatório. |
| `[data-project-part="content"]` e detalhes | Conteúdo visível por padrão; título/resumo/ações não são ocultados por estado “inativo”. | Abertura nativa preservada. Toggle pode solicitar refresh agrupado quando o motor existir. Sem pin por padrão. |

- **Validação final:** lint sem erros/avisos; build aprovado (CSS 25,07 KB, gzip 5,96; JS 259,04 KB, gzip 80,17; HTML 0,68 KB no relatório Vite). Preview repetiu as 24 combinações sem overflow, com summaries ≥44 px. Projetos e demais textos das outras seções comparados com o baseline: sem alterações profissionais; apenas índice decorativo e rótulo de tecnologias adicionais novos.
- **Interação/acessibilidade:** os três detalhes abrem por Enter e fecham por Espaço em 320/1440; foco visível, hash preservado e estado aberto mantido durante PT/EN. Landscape 844 × 390 com todos os detalhes abertos e texto 200% em 320 nos dois idiomas passaram. Âncora Projetos mantém foco/h2 abaixo do header; árvore acessível contém três expansores nomeados; nenhum link privado ou fictício e SVGs sem foco. Nenhuma exceção JavaScript.
- **Capturas:** a primeira captura durante scroll suave não correspondia corretamente ao projeto em algumas posições. O roteiro foi ajustado para movimento reduzido antes de capturar, sem alteração de produto; capturas finais corretas de TEDAS/MIND/C em 375/1440 revisadas, inclusive TEDAS mobile e C desktop. Capturas iniciais não estabilizadas do baseline não são tratadas como evidência visual; `before.json` é o baseline de dados/medidas. Resultados finais em `.cache/evolution-projects/after.json`. Browser e servidores encerrados.
- **Limites:** Chrome headless/emulação, sem novo teste manual com leitor de tela, auditoria integral de contraste ou CWV. Não foram implementados movimentos cinematográficos nesta fase. Sem commit, push, publicação ou mudanças de deploy. Próxima proposta: Fase 6, ainda não autorizada.

### F.7 Execução da Fase 6 — 17/10/2026

- **Autorização:** pedido explícito do usuário, “continue a execução da fase 6”. Executados apenas Experiência, Formação e Tecnologias, com atualização documental e validação proporcional.
- **Contrato de conteúdo:** `TimelineEntry.activities` passou a `activityGroups`, lista opcional de grupos com `id`, `title` e `activities`. As sete frases foram movidas integralmente, na ordem original, para os grupos `models` (2), `data` (2) e `integration` (3), em PT/EN. A primeira frente cobre ML/DL e o estudo de linguagem; a segunda, pipelines/modelagem; a terceira, APIs, automações e agentes. Não há nova responsabilidade, métrica, cargo ou afirmação de produção. Os IDs e a distribuição são equivalentes nos dois idiomas.
- **Experiência:** Section editorial em composição empilhada dá largura ao conteúdo, mantendo data lateral a partir de 48 rem. Timeline preservada com nó e linha em gradiente; `data-experience` e `data-experience-group` permitem escopo de efeitos futuros. Subtítulos h4 e listas separam as frentes de trabalho, com colunas título/atividades a partir de 64 rem. Sem timeline de animação, sticky ou listeners novos.
- **Formação:** dois artigos Card com datas, curso, instituição, localização quando existente, status da UECE e resumo integral. Grid 1,2fr/1fr a partir de 48 rem e pilha abaixo; altura natural, alinhamento superior e nenhuma timeline duplicada. Não foi necessário criar EducationCard ou alterar os dados acadêmicos.
- **Tecnologias:** seis categorias/36 competências preservadas. ML/DL, LLMs/NLP e Dados têm borda superior vermelha e iluminação discreta; o destaque é editorial. Divisores, chips de quebra natural e espaçamento uniforme; grade existente 1/2/3 colunas preservada. Removida a reserva inicial de altura nos títulos após revisão visual, para não produzir espaço vazio desnecessário. Chips continuam estáticos, sem papel de botão ou pontos extras de tabulação. Sem novas competências, porcentagens ou barras.
- **Arquivos modificados:** `src/data/types.ts`, `src/data/experience.ts`, `src/i18n/en-content.ts`, `src/components/TimelineItem.tsx`, `src/components/SkillsGroup.tsx`, `src/sections/Experience.tsx`, `src/sections/Education.tsx`, `src/sections/Skills.tsx`, `src/styles/globals.css`, `README.md`, `IMPLEMENTAR.md` e este documento. Sem alteração de dependências, fotografia, projetos, certificações ou deploy.
- **Baseline e conteúdo:** antes de editar, preview da versão anterior registrou as atividades, os campos profissionais/acadêmicos, as competências e o texto das outras cinco seções, nos dois idiomas. Comparação final idêntica para todos esses dados; apenas os três títulos editoriais novos foram acrescentados. Sete atividades, dois cursos, seis categorias/36 itens e distribuição 2/2/3 conferidos.
- **Validação final:** `npm run lint` e `npm run build` passaram. Preview Chrome headless em PT/EN a 320, 375, 768, 1024, 1440 e 1920 px: 12 layouts sem overflow horizontal. Texto a 200% em 320 px nos dois idiomas também passou. Âncoras das três seções por Enter em desktop/mobile, abertura/fechamento do menu mobile e alternância de idioma por Enter/Espaço passaram, preservando hash. IDs únicos, referências `aria-labelledby` resolvidas e ausência de controles artificiais nas três seções confirmados. Nenhuma exceção JavaScript observada na execução final.
- **Revisão visual:** capturas das três seções em 375/1440 px nos dois idiomas; revisadas Experiência desktop/mobile, Formação desktop/mobile e Tecnologias desktop/mobile (incluindo inglês). A primeira tentativa do roteiro usava seletor inexistente para os botões de idioma; o roteiro temporário foi corrigido, e baseline/validações finais passaram. As capturas usam movimento reduzido para estabilizar o scroll.

Alturas medidas no preview PT, em pixels; variação decorre de grupos, cards e chips, sem impor altura de viewport:

| Largura | Seção | Antes | Depois |
|---|---|---:|---:|
| 375 | Experiência | 1180 | 1367 |
| 375 | Formação | 829 | 893 |
| 375 | Tecnologias | 1547 | 1581 |
| 1440 | Experiência | 670 | 923 |
| 1440 | Formação | 587 | 604 |
| 1440 | Tecnologias | 821 | 840 |

- **Decisão de composição:** o agrupamento aumenta a altura da Experiência para expor as três frentes, mantendo atividades sempre visíveis. Formação não é esticada para igualar cards de conteúdos diferentes; não há espaços de retenção ou percurso de scroll artificial. A mudança não é apresentada como redução global da página.
- **Build:** 54 módulos; HTML 0,68 kB, CSS 26,72 kB (gzip 6,21), JavaScript 260,41 kB (gzip 80,40), conforme saída arredondada do Vite. Nenhuma biblioteca instalada; pesos não constituem medição CWV.
- **Evidências:** `.cache/evolution-career/before.json`, `layouts-before.json`, `after.json`, `results.json`, roteiros e capturas na mesma pasta ignorada. Chrome com perfil isolado e servidores temporários encerrados. Sem teste manual com leitor de tela, outros navegadores ou nova auditoria integral de contraste/CWV; esses limites permanecem.
- **Pendências:** Fase 7 depende de nova autorização. Fase 8 poderá aplicar movimentos às linhas/grupos dentro do contrato aprovado; nenhuma instalação ou implementação dessa fase foi antecipada. Sem commit, push ou publicação.

### F.8 Execução da Fase 7 — 17/10/2026

- **Autorização:** “sim” do proprietário à pergunta sobre execução da Fase 7 — Certificações conforme o planejamento. AGENTS.md, briefing, histórico e escopo da fase consultados antes de editar.
- **Inventário:** três registros mantidos: AWS AI Practitioner visível (emissão 2026-09, validade 2029-09), Cloud Practitioner oculta (somente ano 2026, sem validação adicional) e Introduction to Kubernetes LFS158 visível como curso (2026-10, sem validade inventada). Nenhuma URL de verificação ou imagem oficial fornecida; `public/` contém apenas favicon e fotografia. Não foram buscadas nem incorporadas novas credenciais.
- **Composição:** agrupamento profissional/curso e hierarquia h2/h3/h4 preservados. Títulos dos grupos receberam linha decorativa de continuidade. Card agora traz emissor ao lado do ícone, nome da credencial em maior destaque e datas reunidas após um divisor; removido o Badge que repetia a classificação já expressa no grupo. Dois cards lado a lado a partir de 64 rem e pilha abaixo, sem altura artificial.
- **Símbolos:** SVGs próprios e genéricos desenhados no componente: documento/certificado e livro aberto. Não são badges oficiais, logos de emissores ou selos de verificação; decoração com `aria-hidden` e `focusable=false`. A variante profissional usa vermelho discreto; curso usa grafite, sem sugerir certificação profissional Kubernetes.
- **Interações e acessibilidade:** hover discreto de borda com token existente de 180 ms e desativação via preferência de movimento reduzido. Sem deslocamento dos cards, efeitos contínuos ou novos elementos de tabulação. Títulos nomeiam os artigos e grupos; listas de definição e elementos `time` preservados. Links continuam condicionados a `credentialUrl`, ausente em todos os registros; nenhum controle vazio/indisponível foi acrescentado.
- **Arquivos modificados:** `src/sections/Certifications.tsx`, `src/components/CertificationCard.tsx`, `src/styles/globals.css`, `README.md`, `IMPLEMENTAR.md` e este documento. Sem alteração de dados, tipos, traduções, imagem, manifesto ou lockfile; não houve necessidade de novo componente ou dependência.
- **Baseline e comparação:** antes da alteração, preview registrou títulos, emissores, grupos, datas/ISO, links e conteúdo de todas as outras seções em PT/EN. Comparação final idêntica nesses campos. Hashes SHA-256 de `certifications.ts`, `types.ts`, `en-content.ts`, manifesto e lockfile idênticos ao baseline. Cloud Practitioner continua fora do DOM e da árvore acessível; os dois cards mantêm tipos professional/course e nenhum link de credencial.
- **Validação:** lint e build passaram. Doze layouts PT/EN em 320, 375, 768, 1024, 1440 e 1920 px sem overflow; texto a 200% em 320 px nos dois idiomas também passou. Âncora de Certificações acionada por Enter em desktop/mobile, com título visível e menu fechado após seleção. Títulos dos cards presentes na árvore de acessibilidade, referências ARIA e IDs únicos conferidos; ícones decorativos e ausência de controles artificiais confirmados. Transição normal de 0,18 s e duração zero com movimento reduzido verificadas. Nenhuma exceção JavaScript observada.
- **Revisão visual:** capturas PT/EN em 375/1440 px; revisadas PT desktop/mobile e EN desktop. No PT, seção passou de 584 para 545 px em 1440 e de 781 para 784 px em 375; cards desktop medem aproximadamente 562 × 269 px, mobile 320 × 239/266 px. Foco de seção visto na captura EN decorre da navegação por teclado e foi preservado.
- **Build:** 54 módulos; HTML 0,68 kB, CSS 28,12 kB (gzip 6,39), JavaScript 261,08 kB (gzip 80,61), segundo saída arredondada do Vite. Sem biblioteca ou imagem raster nova; não representa medição CWV.
- **Evidências e limites:** `.cache/evolution-certifications/before.json`, `after.json`, roteiros e capturas. Chrome isolado e servidores temporários encerrados. Sem leitor de tela manual, outros navegadores ou nova auditoria integral de contraste/CWV; links de credencial não puderam ser exercitados por não existirem URLs fornecidas. O hover foi implementado em CSS; a verificação automatizada mediu sua duração e a preferência reduzida.
- **Pendências/decisões:** badges oficiais e URLs ficam para material autenticado fornecido pelo proprietário; Cloud Practitioner continua pendente da confirmação já documentada no briefing, sem nova decisão de exibição. Fase 8 e instalação de GSAP/@gsap/react dependem de nova aprovação; Lenis permanece fora da proposta inicial. Sem commit, push, publicação ou alteração de deploy.

### F.9 Execução da Fase 8 — 17/10/2026

- **Autorização:** “continue” à proposta explícita da Fase 8 incluindo instalação de GSAP e @gsap/react. AGENTS.md, briefing, histórico e contrato de movimento consultados antes de editar.
- **Dependências:** instalados `gsap@3.15.0` e `@gsap/react@2.1.2` exatos. Adaptador requer React >=17 e GSAP ^3.12.5, compatíveis com os instalados. ScrollTrigger vem do próprio GSAP. Metadados npm e `npm ls --depth=0` conferidos; instalação acrescentou dois pacotes e informou zero vulnerabilidades naquele momento.
- **Fontes/licença:** consultados [adaptador React oficial](https://github.com/greensock/react), [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/), [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) e [licença padrão GSAP](https://gsap.com/community/standard-license/). A licença permite implementação em websites e não é MIT; este projeto não fornece editor visual de animações. A URL inicial de documentação React retornou erro na ferramenta; o repositório oficial foi utilizado.
- **Arquitetura/arquivos:** novo `src/components/PortfolioMotion.tsx`, componente sem DOM, carregado em App por lazy/Suspense com ref estável do main. Falha no import retorna componente vazio e conserva composição estática. Arquivos alterados: package.json/lockfile, App.tsx, PortfolioMotion.tsx, NeuralGraph.tsx, README e planos. Sem alteração de dados, foto, Vite, deploy ou páginas.
- **Movimento:** identidade/apresentação entram em até 0,7 s por 8 px e opacidade mínima 0,92. Rede inteira deriva 3 px e retorna em 3,6 s, com arestas/halos variando intensidade gradualmente, sem loop. A camada network mantém arestas ligadas aos nós. Não há intro em acesso com hash/scroll afastado do topo; idioma não reinicia o setup. Títulos de seção/retrato têm entradas finitas de 6–12 px, 550 ms e opacidade mínima 0,88, sempre legíveis. Foco na seção conclui os efeitos finitos locais.
- **Desktop apto:** scrub apenas com largura >=64 rem, altura >=40 rem, hover e ponteiro fino. Artes dos projetos percorrem y +10/-10 px e escala 0,98/1,02, reversíveis pelo scroll. Decoração do Hero vai até 16 px; cursor no SVG fica limitado a ±6 px; grafo do Contato percorre +12/-12 px. Mobile/tela baixa usa entradas curtas nas artes, sem scrub/cursor/parallax.
- **Continuidade e fluxo:** transição Hero/Sobre com retrato, mesma cadência nas três artes e grafo no encerramento. Chips não recebem animação individual. Reavaliadas as medidas da Fase 5: mantido fluxo normal, sem necessidade de sticky/pin. Não há espaçador, scroll-snap, captura de wheel/touch, Lenis ou retenção artificial.
- **Ciclo/recálculo:** useGSAP e matchMedia coletam efeitos por escopo e condições. Eventos próprios usam AbortController; ResizeObserver observa main/header. Load de imagens, toggle de details, tamanho e pageshow solicitam refresh agrupado em um requestAnimationFrame; não há refresh em cada scroll/frame. Cursor reutiliza dois quickTo criados no contexto. Cleanup cancela listeners/observer/frame, reverte efeitos e restaura atributos originais dos alvos após clearProps. Não há estado React atualizado por frame.
- **Pausa/redução:** sequências finitas pausam fora de tela ou com documento oculto; scrub atualiza diretamente por scroll, sem inércia temporal. Redução dinâmica remove efeitos/triggers e restaura CSS. O chunk ainda é solicitado em movimento reduzido, mas não cria efeitos. Fallback não significa funcionamento integral sem JavaScript da aplicação CSR.
- **Correção validada:** testes encontraram fromTo pausados deixando transform/opacity iniciais depois de alternar breakpoints/redução. Implementados snapshot/restauração de style/transform/data-svg-origin e clearProps público para limpar cache. Cinco mudanças de viewport/preferência passaram sem resíduos e com zero triggers. Tentativa intermediária de getCache foi rejeitada pelos tipos e substituída antes do build final.
- **Conteúdo/layout:** comparação PT/EN contra `.cache/evolution-certifications/after.json` preservou todos os textos, credenciais, emissores, datas/ISO, grupos e links. Matriz estática com movimento reduzido: 24 cenários = dois idiomas × 320/375/768/1024/1440/1920 × details abertos/fechados, sem overflow ou pin-spacer. Texto 200% em 320 px nos dois idiomas passou. Efeitos ativos exercitados em mudanças 375/768/1440 e seis trocas de idioma, sem duplicar triggers.
- **Interações:** cursor observado em x≈3,26/y≈-2,15 px, dentro dos limites. Matriz da arte mudou e reverteu com scroll; details alterou o fim medido do trigger, demonstrando refresh. Sete âncoras por Enter em desktop/mobile com títulos visíveis/menu fechado; back/forward, PageDown/Home/End e toque nativo passaram. Redução durante a visita deixou zero triggers e nenhum transform/opacity residual. Ocultação simulada da propriedade/evento do documento resultou em zero animações ativas; não foi teste manual de abas em todos os navegadores.
- **Fallback/StrictMode:** chunk bloqueado em recarga real preservou oito seções, hash #projetos e details por Enter. Em desenvolvimento, montagem de Motion em fixture sob StrictMode: triggers 14 → 15 → 14 ao montar/desmontar, estilos restaurados. A aplicação principal continua em StrictMode. Não equivale a perfil de heap ou garantia universal contra vazamentos.
- **Roteiro/evidências:** ajustado para obter o singleton ESM via DevTools sem API de debug na aplicação, para usar recarga real no fallback e para interoperabilidade dos módulos React otimizados. Execução final passou sem exceções JavaScript. `.cache/evolution-motion/` contém results.json, production.json, scripts e capturas; Chrome/perfil e servidores temporários encerrados.
- **Visual/desempenho:** capturas ativas em 375/1440 de Hero, Projetos e Contato; revisadas Hero EN desktop, TEDAS EN desktop e Contato EN mobile. Amostra local de 90 requestAnimationFrames durante scroll: p95 16,7 ms, máximo 16,8 ms, nenhuma long task reportada nessa janela. Chrome headless sem limitação artificial de CPU/rede; não representa CWV, Lighthouse, hardware diverso ou hospedagem real.

Peso informado pelo Vite, arredondado em kB:

| Recurso | Antes (Fase 7) | Depois | Delta aproximado |
|---|---:|---:|---:|
| JS principal | 261,08 / gzip 80,61 | 262,87 / gzip 81,37 | +1,79 / gzip +0,76 |
| Módulo de movimento | — | 117,72 / gzip 46,09 | +117,72 / gzip +46,09 |
| JS total | 261,08 / gzip 80,61 | 380,59 / gzip 127,46 | +119,51 / gzip +46,85 |
| CSS | 28,12 / gzip 6,39 | 28,79 / gzip 6,57 | +0,67 / gzip +0,18 |

- **Verificações finais:** lint, build (inclui tipos) e inventário npm passaram; build com 62 módulos e HTML 0,68 kB. A nova camada do SVG não muda geometria ou conteúdo. Não há modificação de estilos-fonte; a pequena diferença de CSS vem da geração do build.
- **Pendências:** Fase 9 exige aprovação própria para regressão consolidada e otimização final. Permanecem limites de leitor de tela manual, outros navegadores, contraste integral, heap e hospedagem real. Sem commit, push ou publicação.

### F.10 Execução da Fase 9 — 17/10/2026

- **Autorização:** “sim” à proposta da revisão final/testes/otimização, depois do relato da Fase 8 que explicitou o acréscimo aproximado de 47 kB gzip. Leituras do AGENTS.md, briefing, histórico, checklist D.9 e matriz E.1 realizadas. Nenhuma publicação foi autorizada.
- **Correção/otimização efetiva:** App agora verifica a preferência inicial antes de renderizar o componente lazy. Com movimento reduzido, não solicita o chunk de 117.720 bytes; ao mudar para movimento normal, solicita o módulo e mantém a integração existente. Depois de carregado, a preferência continua sendo tratada por matchMedia, sem remontagem desnecessária ou reintrodução dos resíduos corrigidos na Fase 8. O listener de espera do App é removido após ativação/desmontagem.
- **Investigação de bundle:** builds em memória compararam imports atuais, core/CSS explícitos e distribuição minificada, sem escrever em dist ou alterar configuração. Gzip total na comparação: 126.290, 126.264 e 126.884 bytes; core economizou só 26 bytes, e a distribuição minificada aumentou 594. Mantidos os imports e as versões já autorizados. A referência de investigação de 40 kB em E.2 foi ultrapassada: custo total incremental continua próximo de 47 kB gzip, já informado antes da autorização desta fase. A referência não foi alterada retroativamente; não se declara que o bundle total ficou abaixo dela. A melhoria adotada evita o custo do módulo para visitas inicialmente reduzidas.
- **Arquivos:** `src/App.tsx`, README, IMPLEMENTAR e este documento. Roteiros/evidências em `.cache/evolution-final/`, ignorados. Sem nova dependência, alteração de dados, CSS-fonte, fotografia, Vite ou deploy. Código da Fase 8 continua presente sem commit automático.
- **Ambiente:** Windows, Node 22.14.0/npm 10.9.2; Chrome 155.0.8059.80 e Edge 155.0.4283.62 headless com perfis isolados. Firefox e NVDA não encontrados nas instalações verificadas. Não houve sessão manual/auditiva de Narrador/NVDA, Safari/iOS ou dispositivo físico; árvore acessível não substitui leitor de tela.
- **Matriz final:** 48 cenários por navegador, 96 no total: PT/EN × movimento normal/reduzido × 320/375/768/1024/1440/1920 × details abertos/fechados. Sem overflow horizontal, oito seções presentes e controles testados com dimensão mínima de 44 px (tolerância de arredondamento). Landscape 844 × 390 e texto a 200% em 320/768/1440 nos dois idiomas passaram. Header maior com texto ampliado foi medido e manteve compensação de âncoras.
- **Conteúdo/estado:** regressão de movimento reutilizada no Chrome comparou todos os textos/dados ao baseline anterior, mantendo três projetos, sete atividades, duas formações, seis categorias/36 competências e políticas de credenciais. PT inicial após reload, lang/title/description, idioma por Enter/Espaço, detalhes/hash/foco preservados e troca de idioma com menu aberto/Escape passaram em ambos os browsers. Cloud Practitioner permanece oculta, LFS158 como curso e nenhuma URL privada/credencial inventada. Links internos resolvidos e externos restritos aos dois perfis fornecidos, com proteção de novas abas; disponibilidade externa/titularidade não revalidada pela rede nesta etapa.
- **Navegação/movimento:** skip link, CTA de Projetos, link Sobre, sete âncoras, topo e tabulação completa conferidos pelos roteiros reutilizados; Chrome também repetiu histórico, Home/End/PageDown, toque, reversão do scrub, recálculo dos detalhes, seis trocas de idioma sem duplicação, redução dinâmica e fallback por bloqueio do módulo. Ciclo StrictMode retornou de 15 aos 14 triggers anteriores; ocultação simulada deixou zero animações ativas. Esses testes são escopados, sem alegação de análise universal de heap.
- **Acessibilidade observada:** 29 títulos com níveis sem saltos, 22 controles nomeados e 16 links em cada idioma, um h1/main, IDs únicos e referências ARIA válidas. SVGs decorativos fora da leitura, sem tabindex positivo; foco de 2 px e ordem de teclado verificados. Nove pares de texto/fundo calculados, menor contraste 4,8157:1; cores forçadas preservaram contorno de 2 px. O cálculo usa cores CSS e não constitui auditoria pixel a pixel de gradientes, anti-aliasing e todos os frames animados ou certificação WCAG integral.
- **Contato REAL:** nos dois navegadores, o endereço público foi escrito pela aplicação com Enter/Espaço e lido apenas após sucesso; conteúdo anterior do clipboard não consultado. Repetição/feedback renovado, largura do botão/foco, operação pendente, concorrência, idioma durante cópia, recusa e API indisponível passaram (falhas simuladas). Sem formulário, Gmail ou mailto; e-mail selecionável e orientação manual na falha. Nenhuma mensagem enviada. Clipboard permaneceu com `jose.waldeney.forte@gmail.com` ao terminar.
- **Foto/visual:** retrato único 460 × 460 carregado com alt/dimensões, arquivo e favicon idênticos aos originais por hash/comparação binária. Capturas finais EN de Sobre/Projetos/Contato em 375/1440 geradas; revisadas Sobre desktop/mobile, Projetos mobile e Contato desktop, além das capturas de movimento do roteiro anterior. Comparada a captura de Sobre desktop da Fase 4: mesma foto, moldura, composição e conteúdo; Projetos mantém a evolução aprovada das faixas. Imagens finais com nomes compartilhados entre browsers correspondem à última execução, Edge.
- **Desempenho reproduzível:** três carregamentos por preferência/navegador, 375 × 1000, CPU 4×, latência 40 ms, download 200.000 B/s e upload 93.750 B/s, observação inicial de cerca de 1,8 s após montar. Chrome com cache desativado; Edge repetido somente para performance com cache desativado e limpo a cada carga, após detectar reutilização no primeiro ensaio. Dados iniciais Edge com cache não foram usados na tabela abaixo.

| Navegador/preferência | FCP (ms), três execuções | Último LCP observado (ms) | Layout shifts observados | Long tasks |
|---|---|---|---|---|
| Chrome, reduzido | 732 / 708 / 744 | 732 / 708 / 744 | 0 / 0 / 0 | 0 / 0 / 0 |
| Chrome, normal | 916 / 696 / 712 | 916 / 696 / 712 | 0 / 0 / 0 | 0 / 0 / 0 |
| Edge, reduzido | 780 / 724 / 736 | 780 / 724 / 736 | 0 / 0 / 0 | 0 / 0 / 0 |
| Edge, normal | 788 / 696 / 760 | 788 / 696 / 760 | 0 / 0 / 0 | 0 / 0 / 1 (57 ms) |

- **Interpretação:** medições locais sem significância estatística ou promessa de ganho temporal. Nenhum shift reportado nessas janelas; não é CLS de campo. Um long task de inicialização de 57 ms sob CPU 4× no último ensaio Edge normal foi registrado; não há atribuição conclusiva ao motor. A amostra de scroll reutilizada reportou p95 16,7 ms e zero long tasks. Não foram medidos INP de campo, percentil 75 real, Lighthouse ou hospedagem. A redução comprovada é o download ausente do módulo na preferência reduzida, não uma promessa de LCP menor em cada rodada.
- **Build/assets:** lint e build (inclui typecheck) passaram após a otimização, assim como `npm ls --depth=0`. Seis arquivos em dist, sem Markdown, PDF, sourcemap, env ou padrões comuns de segredo/caminho local nas buscas pontuais. Manifesto, lockfile e versões instaladas equivalentes; nenhum script npm test disponível ou framework permanente instalado. `artifacts.json` registra bytes/SHA-256 e gzip calculado com node:zlib padrão, que difere do relatório arredondado do Vite. Busca de padrões não garante detecção universal de segredos.

| Artefato | Bytes | Gzip local padrão (bytes) |
|---|---:|---:|
| HTML | 682 | 407 |
| CSS | 28.799 | 6.576 |
| JS principal | 263.201 | 80.660 |
| JS movimento | 117.720 | 45.718 |
| Foto | 22.568 | 22.430 |
| Favicon | 429 | 264 |

- **Evidências finais:** `final-results.json` (Chrome), `final-results-edge.json` (Edge, métricas corrigidas), `artifacts.json`, `bundle-investigation.json`, roteiros e capturas na pasta ignorada. Os roteiros de etapas anteriores foram adaptados às interações atuais; nenhum erro de aplicação foi encontrado na execução final. Chrome/Edge e servidores temporários encerrados. README e histórico atualizados; .md/cache continuam ignorados, sem .md rastreado.
- **Conclusão/pendências:** evolução concluída tecnicamente no escopo local testado. Limites explícitos: leitor de tela manual, Firefox/Safari/iOS/dispositivo físico, auditoria integral de acessibilidade/heap, campo/CWV/INP, disponibilidade externa das URLs e destino de publicação. Custo do motor acima da referência investigado e mantido conforme o conjunto autorizado. Aceite visual final e qualquer commit, push ou deploy são decisões separadas do proprietário; nenhum foi executado nesta fase.

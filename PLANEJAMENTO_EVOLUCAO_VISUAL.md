# Segunda evolução visual do portfólio — planejamento técnico

**Data da auditoria:** 18/10/2026. **Estado vigente:** Fases 1–3, 6, 4, 5 e 7 concluídas tecnicamente. Fase 8 autorizada pelo “sim” à proposta detalhada e concluída tecnicamente; evidências em 17. Aceite visual geral ainda não registrado.

**Retomada atual:** autorização restrita à Fase 8 descrita no topo de `IMPLEMENTAR.md`. Foram aprovados anteriormente desenho vertical e todos os textos atuais PT/EN, sem complementos acadêmicos. As descrições de encerramento a seguir são históricas da Fase 6; usar o quadro vigente e as execuções em 14–17. A navegação nativa existente foi preservada; os roteiros aguardam scrollend e estabilidade antes de avaliar o destino.

**Encerramento anterior após a Fase 6 — 18/10/2026 (histórico):** desenvolvimento encerrado por solicitação do proprietário. Apenas documentação atualizada naquele fechamento, sem novo build/teste funcional. Esse registro foi sucedido pelas execuções das Fases 4, 5, 7 e 8, nas seções 14–17. O resumo vigente está em `ESTADO_ATUAL.md`; aceite visual final geral ainda não foi explicitamente registrado.

| Segunda evolução | Autorização | Situação no encerramento |
| --- | --- | --- |
| Fase 1 — Auditoria | Aprovada expressamente | Concluída e documentada |
| Fase 2 — Grafo | Composição e implementação aprovadas | Concluída tecnicamente; evidências em 10 |
| Fase 3 — Sistema global | Autorizada por “continue” após a Fase 2 | Concluída tecnicamente; evidências em 11 |
| Fase 6 — Detalhes/tipografia + CTA | Autorizada por “continue” e pedido de Fale comigo | Concluída tecnicamente; evidências em 12 |
| Fase 4 — Transições | Autorizada explicitamente por “sim” à proposta | Concluída tecnicamente; evidências em 14 |
| Fase 5 — Artes animadas por projeto | Autorizada pelo “sim” à proposta detalhada | Concluída tecnicamente; evidências em 15 |
| Fase 7 — Timeline acadêmica | Desenho/textos atuais e implementação autorizados por “sim” | Última implementação concluída tecnicamente; evidências em 16 |
| Fase 8 — Validação consolidada | “sim” à proposta detalhada | Concluída tecnicamente; resultados em 17 |

**Autorização da Fase 6 e mudança de escopo aprovada:** “continue” com pedido explícito de substituir os botões GitHub/LinkedIn do Hero por “Fale comigo”, levando a `#contato`. Manter “Conhecer projetos” e os links profissionais existentes no Contato. Implementar details nativo em rodapé full-width, enhancement com Web Animations API e tokens de leitura conforme 2.6–2.7. Arquivos previstos: `components/ProjectCard.tsx`, novo `components/ProjectDetails.tsx`, `sections/Hero.tsx`, `styles/globals.css`, `i18n/pt.ts`, `i18n/en.ts`, além dos registros documentais. Nenhuma animação específica de projeto ou transição de fase futura será antecipada.

**Escopo autorizado anteriormente na Fase 3:** integrar o sistema global e a introdução finita do Hero, sem botão de pausa, loop ambiente ou dependência nova; movimentos anteriores das demais seções preservados. A autorização posterior da Fase 6 está registrada acima e sua execução na seção 12. Nenhuma dessas autorizações inclui as transições cinematográficas da Fase 4.

**Decisões posteriores do proprietário:** ordem 1 → 2 → 3 → 6 → 4 → 5 → 7 → 8 e abordagem GSAP/ScrollTrigger/SVG aprovadas, sem dependências novas inicialmente. Grafo mobile simplificado entregue. Sem botão de pausa nesta implementação: introdução automática finita seguida de repouso, sem pulsos, oscilação ou iluminação em loop; interações breves e cenas de scroll respeitam movimento reduzido. Menções anteriores a ambiente contínuo ou controle manual são alternativas descartadas para este ciclo. Formação vertical com graduação em destaque aprovada como direção, sem autorização para implementar a Fase 7 ou publicar complementos ainda não verificados. A seção 9 documenta a proposta visual já aprovada para a Fase 2; execuções em 10–12.

Este documento se baseia na aplicação existente. Não substitui `AGENTS.md`, `PORTFOLIO_BRIEF.md`, `IMPLEMENTAR.md` ou o histórico de `MELHORIAS_PORTFOLIO.md`. As autorizações da primeira evolução não se transferem para estas fases. O pedido inicial autorizou somente análise/documentação. Posteriormente, o proprietário aprovou a composição visual e autorizou expressamente a Fase 2, com orientação de manter estética orgânica, rótulos discretos e geometria preparada para a Fase 3. Essa autorização não inclui sequências GSAP novas, transições, fases seguintes, instalação, Git ou publicação.

## 1. Diagnóstico da implementação atual

### 1.1 Evidências e limites

Foram consultados os quatro documentos acima, componentes, dados, traduções, CSS, manifesto, lockfile e configurações. `IMPLEMENTAR.md` registra a aplicação inicial e `MELHORIAS_PORTFOLIO.md` registra as nove fases da primeira evolução como concluídas no escopo técnico local. Essas fases são históricas; a numeração deste documento começa uma nova evolução.

Foi possível executar a aplicação localmente e inspecioná-la com Chrome headless 155, em 375 × 1000 e 1440 × 1000. Foram medidas tipografia, geometria dos três projetos antes/depois da expansão e posições do grafo durante o scroll. Capturas de MIND-BH expandido e Formação foram examinadas visualmente. Evidências locais: `.cache/evolution-second-audit/inspection.json`, `mind-open-1440.png`, `mind-closed-1440.png` e `education-current.png`; roteiros `check.mjs` e `verify.mjs`. Os servidores e o navegador temporários foram encerrados.

Essa inspeção não equivale a avaliar todos os movimentos em vídeo, todos os idiomas, navegadores ou dispositivos físicos. A sessão não executou uma nova build, lint, teste de clipboard ou auditoria completa de acessibilidade/CWV. Resultados anteriores são identificados como históricos. A captura do preview usa o `dist` já existente; o servidor de desenvolvimento também foi disponibilizado pelo roteiro de inspeção, sem regenerar o build.

A referência [Supertape](https://www.thesupertape.com) foi consultada pela extração pública de conteúdo. Foi possível identificar uma narrativa de problemas, processo, resultados e convite final. Não houve inspeção interativa de seus efeitos: não se afirma que use GSAP, Lenis ou determinado mecanismo de pinning. Continuidade e storytelling são diretrizes fornecidas pelo proprietário, não licença para copiar seus recursos.

O LinkedIn direto bloqueou o acesso automatizado; a busca retornou trechos públicos indexados. Seu conteúdo pode estar defasado e não permite reconstruir partes truncadas. A matriz acadêmica em 2.8 separa dados existentes de complementos candidatos.

### 1.2 Stack e estrutura confirmadas

| Área | Implementação real |
| --- | --- |
| Interface | React e React DOM 19.3.1; Strict Mode no ponto de entrada |
| Tipagem/build | TypeScript 6.0.3 estrito; Vite 8.3.4; plugin React 6.1.2 |
| Estilos | Tailwind CSS e plugin Vite 4.3.3; regras e tokens em `src/styles/globals.css` |
| Movimento | GSAP 3.15.0, `@gsap/react` 2.1.2; ScrollTrigger importado do próprio GSAP |
| Ausentes | Lenis, Motion for React, Three.js e React Three Fiber |
| Qualidade | ESLint 10.13.0; typescript-eslint 8.71.2; scripts `typecheck`, `lint`, `build` |
| Execução | `dev`, `preview`; Node `^22.13.0 || >=24.0.0`, npm >=10 |
| Testes | Sem script `npm test` ou framework permanente de testes; roteiros locais de inspeção no cache |
| Publicação | Vite com React/Tailwind, base padrão `/`; não alterar configuração ou assumir hospedagem |

`src/App.tsx` compõe oito seções com IDs estáveis: `inicio`, `sobre`, `projetos`, `experiencia`, `formacao`, `tecnologias`, `certificacoes`, `contato`. Não há roteador nem necessidade de novas páginas.

| Responsabilidade | Arquivos existentes a reutilizar |
| --- | --- |
| Estrutura/navegação | `App.tsx`, `main.tsx`, `components/Navbar.tsx`, `Container.tsx`, `Section.tsx`, `SectionHeading.tsx` |
| Hero/Sobre/Contato | `sections/Hero.tsx`, `About.tsx`, `Contact.tsx`, `components/NeuralGraph.tsx` |
| Projetos | `sections/Projects.tsx`, `components/ProjectCard.tsx`, `ProjectArtwork.tsx` |
| Currículo | `sections/Experience.tsx`, `Education.tsx`, `Skills.tsx`, `Certifications.tsx`; `TimelineItem.tsx`, `SkillsGroup.tsx`, `CertificationCard.tsx` |
| Dados | `data/profile.ts`, `projects.ts`, `experience.ts`, `education.ts`, `skills.ts`, `certifications.ts`, `types.ts` |
| Idiomas | `i18n/LanguageProvider.tsx`, `context.ts`, `types.ts`, `pt.ts`, `en.ts`, `en-content.ts` |
| Motion/CSS | `components/PortfolioMotion.tsx`, `styles/globals.css` |

### 1.3 Como as animações funcionam hoje

`App` carrega `PortfolioMotion` por importação dinâmica, com fallback nulo caso o módulo falhe. A preferência inicial reduzida evita solicitar o chunk de movimento. A mudança posterior para movimento normal habilita o módulo; após isso, `gsap.matchMedia()` acompanha as preferências.

`PortfolioMotion` centraliza `useGSAP`, escopo do `main`, ScrollTrigger, listeners com AbortController, ResizeObserver e refresh agrupado em um RAF. As sequências finitas pausam fora da tela e com aba oculta. Foco por teclado conclui entradas na seção. O cleanup restaura também atributos originais: houve correção histórica para resíduos de `fromTo` pausado ao mudar preferências/breakpoints. Essa proteção precisa continuar sendo testada.

O perfil mais elaborado exige simultaneamente largura >=64rem, altura >=40rem, hover e ponteiro fino. Nos demais casos há entradas menores. A Navbar tem breakpoint próprio de 75rem; ele não deve ser alterado apenas para igualar o motion.

| Elemento | Movimento confirmado | Limitação |
| --- | --- | --- |
| Texto inicial | y de 8 px a 0; opacidade 0,92 a 1 | Discreto e sem narrativa gráfica |
| Rede inicial | Rede inteira desloca 3 px; conexões/halos ganham opacidade durante cerca de 3,6 s | Não revela caminhos por etapas nem reorganiza os nós |
| Cursor | Desloca o SVG inteiro até ±6 px | Não influencia nós selecionados |
| Hero no scroll | Wrapper desloca até 16 px | Não constrói transição para Sobre |
| Projetos desktop | Diagrama inteiro de +10 a −10 px e escala 0,98 a 1,02, igual nos três | Arte não comunica a transformação específica de cada projeto |
| Demais títulos/foto | Entradas de aproximadamente 6–12 px | Seções continuam independentes |
| Contato | Grafo de +12 a −12 px no scroll | Não conclui o percurso iniciado no Hero |

Não há Lenis, pinning, sticky cinematográfico, interceptação de wheel ou laço ambiente contínuo no módulo atual. A rolagem suave existente não implica uma narrativa vinculada ao progresso.

### 1.4 Grafo e assets

O `NeuralGraph` já tem **12 nós em quatro colunas 3–4–3–2**, 16 ligações seletivas e atributos `data-node`, `data-from`, `data-to`. Não é uma estrutura sem camadas: o problema está na comunicação visual. As órbitas circulares da variante Hero dominam a leitura; não há indicação clara de entrada, camadas ocultas e saída, sinais em propagação ou interpolação de coordenadas.

O `viewBox` é 480 × 360. No mobile o grafo vira fundo absoluto, recortado e com opacidade 0,16, o que limita sua percepção. No desktop ocupa a coluna lateral, com largura máxima de 32rem. Alterar somente a animação sem rever esse tratamento mobile não resolve o objetivo.

A variante padrão também serve a outros usos, incluindo o Contato. Deve continuar disponível, sem importar automaticamente a complexidade do novo Hero. A foto `public/97138361.jpg` tem 460 × 460 px e 22.568 bytes, com dimensões reservadas, alt e carregamento lazy em Sobre. Preservar o arquivo e o enquadramento reconhecível; não duplicar no Hero. Não há screenshots reais dos projetos nem badges oficiais disponíveis que justifiquem novas imagens nesta etapa.

### 1.5 Projetos: problema de expansão confirmado

`ProjectCard` contém arte e conteúdo como filhos do mesmo grid. O `details/summary` nativo está dentro da coluna textual. Ao expandir, a linha cresce e estica o plano de fundo da ilustração. O SVG tem tamanho limitado e não acompanha esse crescimento.

| Projeto, desktop 1440 px | Card fechado → aberto | Área visual fechada → aberta | SVG fechado → aberto |
| --- | --- | --- | --- |
| TEDAS-CE | 494 → 763 px | 492 → 761 px | aproximadamente 271 → 271 px |
| MIND-BH | 537 → 899 px | 535 → 897 px | 320 → 320 px |
| Redes Neurais em C | 436 → 642 px | 434 → 640 px | aproximadamente 271 → 271 px |

No MIND-BH, são 362 px adicionais de área visual sem crescimento da ilustração. A captura confirma o desequilíbrio entre texto e plano gráfico. Não se interpreta toda a área como vazia: o problema é o alongamento provocado exclusivamente pelos detalhes.

Em 375 px a arte permanece com aproximadamente 192 px, porque as colunas já estão empilhadas; MIND-BH passa de 755 para 1321 px de altura total. Não foi detectado overflow horizontal nos dois tamanhos inspecionados. Isso não substitui a matriz responsiva completa.

As três artes SVG próprias já oferecem boas bases: documentos/ramificações no TEDAS; waveform sintética no MIND; entradas, somatório e saída AND no projeto C. Os seletores atuais identificam o diagrama inteiro; faltam grupos semânticos por etapa.

### 1.6 Tipografia e currículo

Valores computados iguais nos dois tamanhos examinados:

| Texto | Tamanho / altura de linha |
| --- | --- |
| Descrições e detalhes dos projetos | 15 / 27 px |
| Atividades profissionais | 15 / 26,25 px |
| Descrição acadêmica | 15 / 27 px |
| Tags de tecnologias | 12 / 18 px |
| Rótulos de datas nas credenciais | 12 / 19,8 px |
| Emissor | 14 / 22,4 px |

A base de corpo é 16 px; o uso de 15/12 px em conteúdo relevante explica a leitura menor, sem demonstrar por si só uma falha de conformidade. Fontes locais/sistema (incluindo Segoe UI e alternativas de display) evitam downloads externos. A escala forte do nome pode ser preservada.

Formação usa dois cards, com colunas 1,2fr/1fr a partir de 48rem. A captura confirma a proximidade visual com as outras grades. Experiência já tem timeline do CPIDT, sete atividades em três grupos temáticos e boa oportunidade de reaproveitar linguagem visual, sem repetir exatamente o mesmo layout.

### 1.7 Funcionalidades e conteúdo a preservar

- Página única, ordem das seções, âncoras, skip link, foco e offset variável do header medido por ResizeObserver.
- Menu mobile, fechamento por Escape/seleção e controles PT/EN sempre disponíveis; `html.lang`, título e descrição atualizados pelo idioma. Não introduzir persistência de idioma como mudança incidental.
- Foto original; nome, especialidades, apresentação, links e texto profissional.
- Três projetos, classificação pesquisa/pessoal, datas, ressalvas e detalhes completos. Quatro tecnologias iniciais e somente as restantes na expansão, sem perder itens.
- Pesquisas sem repositório público e C sem URL fornecida: manter ausência de links; nenhum dado clínico ou resultado inventado.
- Perceptron manual AND como implementação atual de C. MLP/backpropagation/CNN continuam planos; a rede multicamadas do Hero é uma metáfora geral.
- Contato já reformulado: e-mail selecionável, Clipboard API, feedback PT/EN, bloqueio de chamadas concorrentes e orientação em caso de falha. O código atual já não contém o antigo fluxo Gmail/mailto; não reintroduzi-lo para seguir literalmente uma versão antiga do briefing.
- Seis categorias de competências sem porcentagens; CPIDT sem novas responsabilidades ou métricas.
- AWS AI Practitioner e LFS158 com categorias distintas; Cloud Practitioner permanece `display: false`, sem inventar validação, badges ou URLs.
- Estilos de foco e controles usáveis independentemente do carregamento do módulo de animação; build estático e configuração de publicação preservados.

### 1.8 Riscos e baseline de desempenho

O histórico da primeira evolução registra testes Chrome/Edge, regressões de navegação/idiomas/cópia e build aprovado. Não houve nesta auditoria repetição integral desses testes, nem teste manual com leitor de tela, Firefox, Safari/iOS ou dispositivo físico. Não há medições de campo de Core Web Vitals.

Últimos artefatos documentados: JS principal 263.201 bytes, módulo de movimento 117.720 bytes, CSS 28.799 bytes. Gzip varia conforme ferramenta; o custo incremental histórico do conjunto GSAP ficou perto de 47 kB gzip, acima da referência anterior de investigação de 40 kB. Esse custo não desaparece porque a segunda evolução começa. Preservar o carregamento condicional e comparar novos resultados com o baseline real, sem redefinir retroativamente a meta anterior.

Riscos concretos: dois mecanismos disputando o mesmo `transform`; edges desconectadas ao mover só nós; refresh a cada frame de altura animada; listeners duplicados no Strict Mode; repetição da introdução ao trocar idioma; seletor de alternância dos cards quebrado após inserir wrapper; zoom ou tradução alterando limites de sticky; conteúdo oculto em fallback; custo de filtros SVG, pintura e novos plugins.

## 2. Proposta de arquitetura

### 2.1 Ferramentas: recomendação e alternativas

**Recomendação:** SVG 2D próprio + GSAP/ScrollTrigger e `@gsap/react` existentes + CSS para microinterações + scroll nativo. Nenhuma dependência npm nova na proposta inicial.

| Alternativa | Benefício / custo | Decisão proposta |
| --- | --- | --- |
| CSS transitions/animations | Simples para foco, hover, bordas; limitado para coordenar várias cenas e atributos dependentes | Manter nas microinterações, sem outro loop concorrente no grafo |
| GSAP timelines + ScrollTrigger | Já instalado; sequenciamento, progresso ligado ao scroll e adaptação por mídia | Motor principal; usar `scrub: true` inicialmente e limites naturais das seções |
| SVG + interpolação numérica | Geometria inspecionável, leve, identidade atual e fallback estático | Base do grafo e artes; sem simulação física de forças |
| MotionPathPlugin | Ajuda em trajetórias curvas complexas; amplia o código importado | Opcional do pacote GSAP existente, não instalado/importado por padrão; medir antes de adotar |
| Web Animations API | Transição pontual de altura sem nova biblioteca | Candidata para detalhes, com enhancement e fallback nativo |
| Motion for React | Útil em outras arquiteturas de layout/presença; aqui sobreporia responsabilidades ao GSAP | Não adicionar sem vantagem demonstrada e aprovação específica |
| Lenis | Suaviza a rolagem, mas acrescenta sincronização, manutenção e testes de foco/âncoras | Adiar; o problema atual é composição, não falta de inércia |
| CSS sticky | Mantém arte em vista sem controlar o scroll | Somente quando a altura real justificar; sem alongar cards para fabricar efeito |
| Pinning ScrollTrigger | Permite cenas mais longas, mas cria espaçadores e altera geometria | Fora do padrão inicial; eventual protótipo exige aprovação específica |
| Three.js/R3F | Não há necessidade concreta de profundidade ou interação 3D | Não recomendado |

O [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) oferece scrub e pin, mas a escolha de duração/espacadores é de produto. Evitar scrub com atraso longo: ele pode criar a sensação de scroll atrasado que o usuário quer evitar. O [matchMedia do GSAP](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) permite separar perfis e reverter as animações de cada contexto.

Se Lenis vier a ser aprovado futuramente, seguir a [integração oficial](https://github.com/darkroomengineering/lenis): uma instância, evento de scroll atualizando ScrollTrigger e um único callback do ticker GSAP chamando `lenis.raf(time * 1000)`. Não combinar `autoRaf` com esse ticker. A recomendação de `lagSmoothing(0)` tem impacto global e exige avaliação explícita; não copiá-la automaticamente. Desregistrar evento/ticker e destruir instância no cleanup; preservar hash, foco, teclado, histórico e fallback nativo/reduced-motion. Nada disso será instalado nesta solicitação.

### 2.2 Distribuição de responsabilidades e arquivos candidatos

Manter `PortfolioMotion` como entrada opcional. Extrair construtores de cenas progressivamente, conforme cada fase, evitando reestruturar componentes sem necessidade.

| Unidade proposta | Responsabilidade | Situação |
| --- | --- | --- |
| `src/data/heroGraph.ts` | IDs, conexões, posições dispersas/em camadas e perfis de geometria tipados | Novo, se aprovado na Fase 2 |
| `src/motion/graphGeometry.ts` | Interpolação, extremos das ligações e amostragem dos sinais | Novo; funções puras verificáveis |
| `src/motion/heroScene.ts` | Máquina de estados da introdução, passagem ao scroll e ambiente | Novo na integração |
| `src/motion/projectScenes.ts` | Cenas TEDAS/MIND/C com seletores semânticos | Novo na Fase 5 |
| `src/motion/transitionScenes.ts` | Pares de conectores e passagem entre seções | Novo na Fase 4 |
| `src/motion/educationScene.ts` | Progresso da linha e marcadores acadêmicos | Novo na Fase 7 |
| `src/motion/motionConfig.ts` | Perfis, amplitudes e durações compartilhadas | Novo apenas se evitar constantes duplicadas |
| `src/motion/layoutRefresh.ts` | Transações de mudança de layout, agrupamento de refresh e teardown | Novo na Fase 3 |
| `components/MotionControl.tsx` | Pausa global de movimento opcional, com rótulos PT/EN | Novo sujeito a aprovação visual |
| `components/SectionConnector.tsx` | SVG de conexão reutilizável entre duas seções | Somente se a mesma estrutura se repetir |

Um novo hook `usePortfolioMotion` só se justifica se melhorar a leitura do `useGSAP` existente; não criar hook, provider e engine duplicados para a mesma função. Preferências podem permanecer em `App` ou ser extraídas para `useMotionPreferences` quando o controle manual for aprovado. Estado React deve representar apenas idioma, preferência e controles; progresso por frame fica em refs/modelos mutáveis locais.

### 2.3 Grafo híbrido: estrutura e sequência

Preservar os 12 nós como base desktop, tornando explícitos entrada, duas camadas ocultas e saída. Proposta: posições iniciais dispersas e posição final 3–4–3–2; até 30 arestas entre camadas adjacentes, com hierarquia de opacidade e apenas alguns caminhos destacados. Aumentar conexões é opcional à composição: validar legibilidade antes de densificar. Reduzir o protagonismo das órbitas, preservar vermelho nos nós/caminhos e rótulos curtos PT/EN.

Estados: `static → introReveal → signal → layered → ambient`, com transição independente para `scrollExit`. A introdução dura aproximadamente 3–4 s, uma vez por montagem da página, sem aguardar interação ou bloquear os CTAs. Exemplo de tempos para protótipo: 0–0,7 s nós/arestas; 0,7–1,5 s sinal; 1,5–3 s reorganização; até 4 s estabilização. Não repetir toda a sequência em loop.

O HTML/React inicial já apresenta a versão neural final legível. A preparação da animação atua somente no SVG decorativo quando o módulo estiver pronto. Texto não depende dessa entrada. Acesso com hash, restauração no meio da página ou scroll antes do fim leva a rede imediatamente à pose final e entrega o controle à cena de scroll. Voltar ao topo não reinicia a introdução.

Modelo conceitual, sem implementação nesta entrega:

`posição(nó) = lerp(posiçãoGrafo, posiçãoCamada, reorganização) + ambiente + influênciaCursor`

Cada aresta utiliza as posições correntes de seus dois nós. O sinal usa o mesmo segmento: `lerp(origemAtual, destinoAtual, propagação)`. Assim, nó, ligação e pulso não se separam durante a transformação. Para curvas, calcular a Bézier a partir do modelo ou cachear geometria após refresh; não ler `getBBox()`/`getTotalLength()` a cada frame. [MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/) só seria utilizado se trouxer vantagem real sobre esses cálculos.

Após a introdução: deslocamentos ambientes de cerca de 1–2 px, variação lenta e poucos sinais ocasionais, sem simular tráfego real de modelos. Cursor atua sobre alguns nós próximos, com influência máxima inicial de 4–6 px e retorno suave. Um listener no contêiner escreve o alvo; não há listener por nó. Não usar estado React, física aleatória ou criação de objetos/paths por frame.

### 2.4 Propriedade das animações, ciclo de vida e atualização

- Renderizador geométrico é o único proprietário de `cx/cy`, extremos de arestas e posições de pulsos. GSAP interpola parâmetros do modelo; não há tweens independentes escrevendo as mesmas coordenadas.
- Scroll transforma um wrapper externo; cursor compõe offsets do modelo; entrada controla o parâmetro de reorganização. Fases não disputam `transform` do mesmo elemento.
- Usar o ticker do GSAP para composição quando necessário, sem outro `requestAnimationFrame` contínuo. Atualizar apenas cenas visíveis/ativas e parâmetros alterados; remover o callback no teardown.
- Pausar ambiente fora da viewport, com `document.hidden`, preferência reduzida ou pausa manual. Restaurar offsets de cursor ao sair, ocultar aba ou mudar mídia.
- Manter `useGSAP`, contexto e `matchMedia`, seletores limitados à raiz e cleanup de timers/tickers/listeners/observadores/triggers. Cenas retornam função de destruição idempotente.
- Troca PT/EN não remonta o grafo nem reinicia a introdução; invalida apenas medições afetadas. Identificar elementos por IDs estáveis, não pelo texto traduzido.
- Conservar a restauração de atributos originais do módulo atual; não usar `clearProps` global sobre estilos de componentes vizinhos.
- Separar leitura de layout e escrita de atributos. Limites e retângulos são medidos em refresh, resize ou entrada de ponteiro, não por nó em cada frame.

O ResizeObserver atual já agrupa notificações no frame, mas isso não impede refresh em todos os frames de uma altura animada. O novo coordenador terá `beginLayoutChange/endLayoutChange`: durante abertura/fechamento registra geometria suja, adia medições globais e faz um refresh ao estabilizar. Imagens, idioma, redimensionamento real e restauração por histórico também invalidam os limites. Uma animação local não pode gerar dezenas de `ScrollTrigger.refresh()`.

### 2.5 Scroll e continuidade: composição antes de pinning

Criar pares sincronizados de linhas/segmentos, mantendo cada elemento dentro de sua seção. A ilusão de continuidade elimina a necessidade de mover um componente fixo por toda a página. Não interceptar wheel, touch, PageDown, Home/End ou âncoras.

Padrão: timelines reversíveis com `scrub: true`, ligadas à área já ocupada pelas seções. Nenhum acréscimo de múltiplas viewports para apenas três projetos. Títulos, resumo e controles permanecem encontráveis em qualquer progresso. A mudança gráfica pode ser expressiva; o bloco de leitura não deve ficar transladando durante toda a leitura.

Sticky é condicional à existência de conteúdo maior que a altura útil, e somente no subcontêiner gráfico. Os cards atuais frequentemente cabem na viewport; não aumentar sua altura apenas para justificar sticky. Desativar em tela baixa, touch, zoom elevado ou interferência com detalhes expandidos. Pinning não faz parte do aceite inicial; caso um protótipo demonstre necessidade, apresentar antes sua duração adicional, comportamento de âncoras e custo de navegação para aprovação.

### 2.6 Detalhes expansíveis: solução preferencial

Estrutura proposta do mesmo card:

```text
article.project-card
  div.project-card__main         ← grid arte + informações, alternado
    ProjectArtwork
    div.project-card__content
  details.project-details        ← rodapé ocupando toda a largura
    summary
    div.project-details__content
```

O summary passa ao rodapé completo, com nome acessível do projeto; título/resumo/status/tecnologias iniciais continuam na composição principal. Atualizar seletores de alternância e grid para o novo wrapper. Abrir detalhes não deve aumentar a altura da área visual principal. O corpo expandido pode distribuir texto e tecnologias em duas regiões no desktop, sem linhas excessivamente longas; no mobile fica em uma coluna. Não eliminar parágrafos nem reorganizar todo o conteúdo editorial.

| Opção | Avaliação |
| --- | --- |
| `details/summary` sem animação | Semântica e fallback já existentes; instantâneo, mas robusto |
| `details/summary` + Web Animations API | Recomendação progressiva: preserva HTML nativo e permite medir altura; requer tratar cancelamentos |
| CSS Grid `0fr/1fr` com controle React | Viável, mas exige administrar foco, estado acessível e conteúdo recolhido; não basta reduzir a linha do grid |
| `interpolate-size`/animação de `::details-content` | Possível enhancement após verificar suporte nos navegadores alvo; não pressupor suporte universal |
| Botão controlado com `aria-expanded/aria-controls` | Alternativa se a abordagem nativa falhar; migração deve justificar a perda do comportamento nativo e passar testes completos |

Na abordagem recomendada, abrir primeiro o estado nativo e animar o corpo de zero à altura medida em cerca de 220–320 ms; no fechamento, manter `open` até concluir. Não usar `max-height` arbitrário. Summary e seu foco ficam fora do recorte. Cancelar a animação anterior em cliques rápidos e continuar da altura atual; ao finalizar, remover altura inline. Em reduced-motion, abrir/fechar instantaneamente.

Se foco estiver dentro do painel ao recolher, levá-lo ao summary antes de ocultar. Se o usuário focar conteúdo durante a abertura, concluir a expansão para evitar foco recortado. Mudança de idioma, resize, preferência, desmontagem ou falha deve terminar em estado semântico consistente e sem conteúdo preso em altura fixa. Consultar [Element.animate](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) e o [padrão Disclosure da WAI](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).

Concluir a transação de layout e atualizar ScrollTrigger depois de estabilizar. Não mandar o usuário automaticamente ao topo do card; corrigir scroll somente se o controle focado ficar encoberto, com deslocamento mínimo e respeitando movimento reduzido. Alteração solicitada pelo usuário pode mudar a altura da página; o objetivo é evitar salto inesperado e perda de posição, não prometer altura total invariável.

### 2.7 Tipografia proposta

Preservar famílias atuais e pesos expressivos; introduzir poucos tokens semânticos no CSS existente. Valores abaixo são faixas para validação, não alterações já aprovadas:

| Uso | Faixa inicial proposta | Condição de leitura |
| --- | --- | --- |
| Descrições, detalhes e currículo | `clamp(1rem, 0.97rem + 0.15vw, 1.125rem)` | line-height 1,6–1,8; largura de aproximadamente 55–72ch |
| Metadados relevantes | 0,875–0,9375rem | Contraste e leitura sem depender de hover |
| Tags | 0,8125–0,875rem | Evitar altura fixa ou truncamento de termos longos |
| Subtítulos de grupos | 1,0625–1,25rem | Diferenciar de rótulos e título principal |
| Títulos de seção/projeto | Refinar clamps atuais | Sem inflar todos os níveis ou esconder conteúdo abaixo da dobra |

Espaçamento entre parágrafos acompanha a escala; não reduzir indiscriminadamente padding e margem. Medir 320 px, texto ampliado em 200%, palavras longas e inglês. Revalidar contraste dos pares reais após os ajustes; o histórico de contraste não certifica novos estados sobrepostos a SVGs.

### 2.8 Formação vertical e política de conteúdo

Timeline em uma coluna, com trilho visível, marcadores vermelhos e cards amplos; UECE primeiro e com maior peso visual, SENAI mais conciso. Ordem de destaque atual primeiro, não escala proporcional ao número de anos. A sobreposição dos períodos é preservada. Não interpretar a linha como percentual concluído da graduação: seu progresso representa somente a leitura da página.

| Informação | Evidência atual | Tratamento proposto |
| --- | --- | --- |
| UECE, Ciência da Computação, 2021–2027, conclusão prevista em 2027 | Brief, código e solicitação atual | Preservar integralmente; nunca rotular como concluído |
| Algoritmos, estruturas de dados, software, bancos de dados, fundamentos de IA e projetos de dados/pesquisa | Brief e dados atuais | Podem alimentar resumo e poucas áreas complementares |
| Arquitetura de computadores; modelagem relacional/SQL; engenharia de dados, ETL/ELT e pipelines | Complementos retornados no [LinkedIn público indexado](https://br.linkedin.com/in/waldeney-filho) | Candidatos a redação resumida, sujeitos à revisão do proprietário antes de publicar |
| Projetos acadêmicos com Python, SQL, Pandas e NumPy | Trecho indexado da [versão PT](https://br.linkedin.com/in/waldeney-filho/pt), com continuação truncada | Não completar a frase nem supor disciplinas; publicação de ampliação exige confirmação |
| Experimentação acadêmica específica com modelos de ML | Mencionada como possibilidade na solicitação, sem detalhamento acadêmico independente | Confirmar associação à graduação antes de adicionar novos enunciados |
| SENAI, Redes de Computadores, 2019–2022; redes, infraestrutura e comunicação de dados | Brief, código e solicitação atual | Preservar; não inventar módulos, campus, carga horária ou disciplinas |

Não foi identificada divergência de datas nos dados consultados. A limitação é a completude da fonte complementar. Caso se encontre divergência durante a fase, interromper apenas a alteração editorial e pedir decisão. A timeline pode ser implementada com os dados atuais sem depender dessas ampliações.

Reutilizar estrutura `TimelineEntry` onde adequada. Se forem adicionadas áreas acadêmicas, criar contrato específico de educação ou propriedade opcional bem tipada, sem forçar `activityGroups` profissionais em formações. Atualizar `data/education.ts`, tipos e `i18n/en-content.ts` em conjunto; rótulos novos também entram nos dicionários PT/EN.

### 2.9 Perfis responsivos, acessibilidade e fallback

- **Desktop amplo com ponteiro fino e altura suficiente:** reorganização completa, até 12 nós/30 arestas, cursor e cenas por camadas; nenhum pin por padrão.
- **Tablet/touch e desktop baixo:** sem cursor, transições menores, sem sticky que capture leitura; arte permanece no fluxo. Não confundir largura com capacidade de hover.
- **Mobile:** proposta de SVG compacto no fluxo abaixo dos CTAs, cerca de 10–12rem de altura, em vez do fundo quase invisível; rede simplificada, por exemplo 3–3–2 nós e até 15 ligações. Essa mudança de composição exige aprovação visual. Cards empilhados, estados narrativos mais curtos, sem pin/parallax de grandes amplitudes.
- **Reduced-motion:** rede estática já em camadas, foto completamente visível, conectores estáticos, linha acadêmica completa; sem pulsos, cursor ou animação de altura. Respeitar mudanças em tempo real e preservar a otimização de não baixar o módulo inicialmente.
- **Falha do módulo de animação:** apresentação estática íntegra e details nativo funcional. A aplicação React ainda depende de JavaScript; não se promete suporte sem o JavaScript da aplicação inteira.

Animações ambientes contínuas pedem controle acessível. Recomenda-se um controle global PT/EN de “Pausar movimento” / “Pause motion”, que desative ambientes e cenas opcionais, exibindo poses estáticas legíveis, sem travar a navegação. Retomar não repete a introdução. Localização visual do controle precisa ser aprovada. Alternativa sem controle: limitar os movimentos automáticos a uma sequência finita e encerrar o ambiente; isso altera a direção pedida e exige decisão. A recomendação considera [WCAG 2.2.2 — Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), para movimento automático prolongado em paralelo ao conteúdo.

Sem informação transmitida exclusivamente por movimento ou cor. SVGs decorativos não recebem foco; rótulos visuais relevantes têm equivalente textual PT/EN. Manter foco visível, alvos de pelo menos 44 px nos controles planejados, hierarquia semântica, leitura DOM natural, contraste e ausência de flashes rápidos. Linhas de conexão não atravessam texto nem interceptam eventos de ponteiro.

### 2.10 Estratégia de desempenho e testes

Não adicionar um framework de testes nesta etapa. Reutilizar roteiros CDP existentes e adicionar verificações proporcionais quando cada fase for autorizada; cálculos puros do grafo podem receber testes unitários direcionados, sem teste que apenas replique a implementação.

Metas propostas para negociar e medir: nenhuma dependência nova; incremento de JS comprimido desta evolução em torno de até 5 kB sobre o baseline atual como gatilho de investigação, sem dispensar o custo histórico de 47 kB. Valores não são resultados nem orçamento aprovado. Plugins ou custo maior exigem relatório e decisão, sem alterar limites silenciosamente.

Limitar DOM/SVG e pulsos simultâneos; começar com até 3–5 sinais visíveis no Hero, sem filtros animados de blur em grandes áreas. Preferir transform/opacity nos wrappers e reservar mudanças de coordenadas aos poucos elementos da rede. Não aplicar `will-change` a todas as tags/cards nem manter animações fora da tela.

Validar frames, long tasks e layout no mesmo cenário antes/depois. Como referência de laboratório a confirmar: p95 de intervalo de frames próximo de 16,7 ms, investigando valores acima de 20 ms em ambiente de 60 Hz e tarefas acima de 50 ms. Repetir três execuções equivalentes em mobile emulado com CPU 4×, cache frio e rede controlada. Isso não demonstra INP/CWV de campo; registrar máquina, navegador, interferências e variabilidade.

## 3. Storyboard das animações

Amplitudes, tempos e faixas de scroll são valores iniciais para protótipo e aprovação visual. Não são instrução para implementar agora. Nas cenas de scroll, referências são relativas ao viewport útil abaixo do header; recalcular após mudanças de layout. Textos permanecem legíveis em todos os estados.

### Cena 1 — Introdução do grafo

- **Origem → destino:** Hero inicial → Hero estabilizado.
- **Elementos:** nós, arestas, rótulos de camadas e pequenos sinais; órbitas com menor destaque.
- **Inicial:** fallback em camadas; após enhancement, pose dispersa controlada com arestas discretas.
- **Transformação:** revelar nós e ligações; sinal atravessa caminhos entrada→ocultas→saída; interpolar para camadas reconhecíveis.
- **Final:** 3–4–3–2 em repouso, ambiente lento opcional; nome e CTAs sempre disponíveis.
- **Scroll:** sequência temporal de 3–4 s; rolar cedo conclui pose e entrega controle à Cena 2, sem bloquear scroll.
- **Ao subir:** mantém pose neural; não repete a introdução por scroll ou troca PT/EN.
- **Mobile:** rede 3–3–2 no fluxo, introdução mais curta, sem cursor; não depender de hover.
- **Movimento reduzido:** pose neural estática desde o início, caminhos destacados sem pulsos.

### Cena 2 — Hero → Sobre mim

- **Origem → destino:** região final de `inicio` → entrada de `sobre`.
- **Elementos:** wrapper do grafo, um caminho de saída, conector correspondente em Sobre, moldura/foto.
- **Inicial:** rede em camadas na posição principal; retrato já presente no layout.
- **Transformação:** reduzir grafo até aproximadamente 0,72 e deslocar até 40 px lateral/48 px vertical; caminho de saída ganha continuidade no conector seguinte. Retrato chega de até 24 px/escala 1,04 para posição natural; possível recorte apenas na moldura.
- **Final:** destaque passa ao texto humano e foto, com linha discreta indicando continuidade.
- **Scroll:** aproximadamente do meio do Hero até Sobre alcançar a região central; sem pin ou altura adicional.
- **Ao subir:** reverte wrapper/conector/foto sem esconder o conteúdo ou refazer a introdução.
- **Mobile:** sem grande transferência lateral; pequeno conector entre blocos e foto com deslocamento máximo de 8 px.
- **Movimento reduzido:** imagem completa e conectores finais estáticos; sem escala/parallax.

### Cena 3 — Sobre mim → Projetos

- **Origem → destino:** fim de `sobre` → cabeçalho de `projetos`/TEDAS.
- **Elementos:** linhas do conector, pequenos nós, título e iluminação discreta do fundo.
- **Inicial:** linhas próximas à moldura de Sobre.
- **Transformação:** segmentos alinham-se em fluxo que introduz pesquisa/desenvolvimento; título entra em grupos de palavras/blocos, sem biblioteca de divisão por caractere. Luz vermelha de baixa intensidade pode acompanhar a passagem, sem fundo saturado.
- **Final:** fluxo aponta para o primeiro card; leitura fica estável.
- **Scroll:** início quando final de Sobre entra no terço inferior; fim quando título Projetos alcança o terço superior.
- **Ao subir:** fluxo retorna gradualmente, sem retirar títulos da árvore acessível.
- **Mobile:** um caminho simples, título estável; sem camada de fundo animada extensa.
- **Movimento reduzido:** linha estática e título visível.

### Cena 4 — TEDAS-CE: informação não estruturada → estrutura

- **Origem → destino:** entrada → saída do card TEDAS dentro de Projetos.
- **Elementos:** documento abstrato, linhas de conteúdo, ramificações, células estruturadas.
- **Inicial:** documento reconhecível, conexões e caixas já identificáveis em menor intensidade.
- **Transformação:** linhas curtas revelam informação; sinais percorrem ramificações e ativam células de saída; escala do diagrama pode variar aproximadamente 0,96→1. Movimento participa do significado, não apenas do card inteiro.
- **Final:** documento e estrutura conectados, sem afirmar pipeline entregue ou resultado clínico.
- **Scroll:** progresso de `top 85%` a `bottom 25%` do card como ponto inicial de ajuste; nenhum tempo mínimo de leitura ou espaçador.
- **Ao subir:** células/conexões retornam por etapas; resumo e detalhes não desaparecem.
- **Mobile:** duas etapas simples de conexão/ativação, sem profundidade ou deslocamento lateral amplo.
- **Movimento reduzido:** diagrama completo; nenhuma célula parece dado real. Usar somente símbolos próprios, sem prontuários, métricas ou pacientes.

### Cena 5 — MIND-BH: áudio → representações relacionadas

- **Origem → destino:** entrada → saída do card MIND-BH.
- **Elementos:** waveform existente, poucos blocos de espectrograma estilizado e nós de áudio/linguagem.
- **Inicial:** waveform sintética estável e dois grupos reconhecíveis.
- **Transformação:** amplitudes interpoladas deterministicamente; segmentos destacados alimentam blocos abstratos e conexões áudio/linguagem. Não executar visualizador de áudio ou gerar frequências aleatórias em loop.
- **Final:** duas representações relacionadas por caminhos, sem diagnóstico, valores ou aparência de resultado experimental.
- **Scroll:** mesma janela natural inicial do TEDAS, com composição local específica. A largura total dos detalhes evita esticar a arte.
- **Ao subir:** conexão e blocos recuam suavemente para a waveform original; nenhuma alteração no texto científico.
- **Mobile:** waveform e uma conexão, sem grade densa de espectrograma.
- **Movimento reduzido:** composição completa estática. Ausência de eixos, unidades, escores e legendas que sugiram dados medidos; caso haja legenda, explicitar ilustração conceitual nos dois idiomas.

### Cena 6 — Redes Neurais em C: Perceptron AND

- **Origem → destino:** entrada → saída do terceiro card.
- **Elementos:** x1, x2, conexões/pesos, neurônio de soma e saída AND da arte existente.
- **Inicial:** entradas e somatório visíveis, caminho completo identificável.
- **Transformação:** sinais chegam pelas duas conexões, somatório recebe destaque e saída é ativada. Evitar alterar pesos como se houvesse treinamento implementado.
- **Final:** Perceptron simples reconhecível; planos futuros continuam separados no texto.
- **Scroll:** sequência normalizada no percurso do card; não incorporar o multilayer do Hero nesta representação.
- **Ao subir:** destaque retorna da saída para as entradas, sem sugerir backpropagation implementado.
- **Mobile:** sinal curto por estágio, sem números adicionais.
- **Movimento reduzido:** caminho e saída destacados estaticamente; não adicionar pesos ou exemplos numéricos sem documentação aprovada.

### Cena 7 — Projetos → Experiência

- **Origem → destino:** fim do terceiro projeto → timeline do CPIDT.
- **Elementos:** segmento final dos projetos, eixo/marker de Experiência, cabeçalho e grupos temáticos.
- **Inicial:** conexões acompanham a última arte.
- **Transformação:** uma linha muda de direção e coincide visualmente com o eixo da timeline; marcador CPIDT ganha destaque. Grupos de modelos, dados e integração entram com deslocamentos limitados, não atividade por atividade.
- **Final:** carreira e pesquisa aparecem conectadas; texto fica estável e integral.
- **Scroll:** janela entre o fim do card e entrada do cabeçalho Experiência, sem pin.
- **Ao subir:** linha e acentos revertem; informações profissionais não somem.
- **Mobile:** eixo único e pequeno destaque no marcador; sem translação entre colunas.
- **Movimento reduzido:** linha e marcador estáticos, sete atividades preservadas.

### Cena 8 — Timeline acadêmica

- **Origem → destino:** cabeçalho de Formação → fim do card SENAI.
- **Elementos:** trilho vertical, preenchimento, dois marcadores e cards UECE/SENAI.
- **Inicial:** trilho completo discreto, ambos os cards legíveis; camada vermelha de progresso começa no topo.
- **Transformação:** preenchimento por `scaleY` com origem superior; ativação dos marcadores ao cruzar sua área de leitura; entrada de cards até 16 px e opacidade nunca dependente de zero para o conteúdo.
- **Final:** linha percorre as duas entradas e deixa conclusão prevista da UECE explícita.
- **Scroll:** do primeiro marcador entrando em 75% até o último em aproximadamente 45% do viewport útil, ajustado à altura real; sem pin.
- **Ao subir:** preenchimento e destaque revertem; cards continuam disponíveis para leitura e teclado.
- **Mobile:** timeline de coluna única, eixo lateral com recuo contido; sem layout alternado.
- **Movimento reduzido:** linha completa e todos os marcadores destacados sem progressão. Não transmitir andamento acadêmico por porcentagem.

### Cena 9 — Tecnologias e Certificações

- **Origem → destino:** entrada → leitura das duas seções informativas.
- **Elementos:** cabeçalhos e grupos de cards; foco/hover continuam em CSS.
- **Inicial:** categorias e credenciais visíveis no fluxo.
- **Transformação:** acento de borda e entrada curta por grupo; não animar cada uma das dezenas de tags.
- **Final:** composição estável, sem movimento contínuo atrás de textos pequenos.
- **Scroll:** entrada curta ao alcançar a área de leitura; sem sticky/pin.
- **Ao subir:** acentos podem reverter; conteúdo não é recolhido.
- **Mobile:** somente hierarquia/foco, com entrada mínima opcional.
- **Movimento reduzido:** nenhum deslocamento. Não alterar credenciais, links ou categorias.

### Cena 10 — Contato: fechamento da rede

- **Origem → destino:** fim de Certificações → encerramento de Contato.
- **Elementos:** grafo padrão, caminho final, iluminação discreta e título já reformulado.
- **Inicial:** rede legível e e-mail disponível.
- **Transformação:** caminho converge para uma configuração que recorda as camadas do Hero; sinal final chega uma vez. Ambiente opcional compartilha pausa global e limites de visibilidade.
- **Final:** rede estabilizada, convite, cópia e links profissionais dominam a seção.
- **Scroll:** sequência dentro da altura existente, de `top 85%` até região final visível; sem capturar rolagem no fim da página.
- **Ao subir:** conexão pode reverter, sem repetir automaticamente o sinal de encerramento a cada pequeno movimento.
- **Mobile:** um segmento e poucos nós, sem invadir o endereço de e-mail.
- **Movimento reduzido:** grafo estático; nenhum efeito sobre o feedback de cópia, seleção do e-mail ou links.

## 4. Roadmap e ordem de dependências

As oito fases solicitadas são mantidas. **Ordem de execução aprovada: 1 → 2 → 3 → 6 → 4 → 5 → 7 → 8.** Antecipar a Fase 6 estabilizou tipografia e altura dos cards antes da futura calibração das cenas de scroll. A ordem foi aprovada; cada implementação continua exigindo autorização própria.

```text
1 Auditoria → 2 Grafo → 3 Sistema global → 6 Detalhes/tipografia → 4 Transições → 5 Projetos
                                  └──────────────────────────→ 7 Formação
                         4 + 5 + 6 + 7 ──────────────────────→ 8 Validação final
```

Fase 2 entrega estrutura e contrato do grafo, sem ativar motor paralelo ao atual. Fase 3 assume a propriedade da nova animação e retira apenas a lógica antiga correspondente. Fase 7 depende da infraestrutura da 3 e das definições tipográficas da 6; não depende de inventar conteúdo novo ou de efeitos de projeto.

## 5. Checklist por fase

### Fase 1 — Auditoria técnica e proposta visual

**Objetivo:** produzir diagnóstico verificável e arquitetura/storyboard baseados no projeto existente.

- [x] Consultar instruções, brief e dois históricos, identificando o estado anterior.
- [x] Inventariar stack, componentes, dados, assets e mecanismos de movimento.
- [x] Medir os projetos fechados/abertos em 375 e 1440 px e examinar capturas de MIND/Formação.
- [x] Consultar referência e documentação primária, registrando limites do LinkedIn e da referência.
- [x] Produzir este documento com fases, critérios, dependências e decisões pendentes.
- [x] Receber revisão/aceite da auditoria e da arquitetura; ordem aprovada pelo proprietário. A proposta visual da primeira implementação permanece pendente, detalhada na seção 9.

**Componentes envolvidos:** leitura de toda a aplicação, com foco em PortfolioMotion, NeuralGraph, ProjectCard, ProjectArtwork e Education. **Arquivo de entrega:** somente `PLANEJAMENTO_EVOLUCAO_VISUAL.md`; evidências descartáveis no cache local. **Dependências:** nenhuma fase de implementação. **Riscos:** fontes indexadas incompletas e inspeção visual parcial. **Aceite:** atendido no escopo documental: fatos/limitações separados em 1.1–1.8, arquitetura em 2, storyboard em 3, oito fases em 4–5 e nenhuma implementação antecipada. **Validação:** cruzamento com código, medições e capturas da auditoria; não houve novo lint/build na auditoria. **Aprovação:** Fase 1 aprovada pelo proprietário; a aprovação posterior da proposta/Fase 2 e sua execução estão registradas em 9–10.

### Fase 2 — Refatoração do grafo do Hero

**Objetivo:** construir geometria híbrida reconhecível e preparada para introdução, sinais e cursor.

- [x] Apresentar antes da execução os arquivos e poses dispersa/em camadas, incluindo composição mobile — proposta aprovada expressamente.
- [x] Definir IDs estáveis, nós, arestas e direção de propagação com tipos explícitos — `data/heroGraph.ts`.
- [x] Refinar SVG/rótulos e reduzir o domínio visual das órbitas sem alterar foto ou texto principal — capturas desktop/mobile revisadas.
- [x] Criar funções de interpolação que mantenham nós, arestas e sinais coerentes — testes de geometria em dez poses.
- [x] Preservar variante padrão e contratos usados pelo módulo atual até a integração da Fase 3 — camada/network/edges/halos/nodes e comparação do Contato preservadas; nenhum motor novo.
- [x] Validar poses estáticas, limites do viewBox, idioma e legibilidade antes de ativar animação nova — 24 layouts, teclado, texto 200%, lint/typecheck/build aprovados; registro em 10.

**Componentes/arquivos previstos:** `components/NeuralGraph.tsx`, `sections/Hero.tsx`, `styles/globals.css`, novos `data/heroGraph.ts` e `motion/graphGeometry.ts`; `i18n/types.ts`, `pt.ts`, `en.ts` se necessário. Lista efetiva na seção 10; tipos de dicionário já inferidos dispensaram editar `i18n/types.ts`. **Dependências:** Fase 1 revisada e autorização específica, ambas atendidas. **Riscos:** grafo excessivamente denso, regressão do Contato e mobile mais alto. **Aceite técnico:** atendido nas poses e cenários descritos em 10; variante padrão preservada; extremos conectados; nenhum RAF/listener novo. **Testes:** geometria, 24 layouts PT/EN/movimento, teclado, texto ampliado, capturas e lint/typecheck/build. **Aprovação:** implementação expressamente autorizada e concluída no escopo técnico; avaliação visual final pendente. Não autoriza Fase 3.

### Fase 3 — Sistema global de animações

**Objetivo:** integrar o novo grafo a um único sistema com preferências, suspensão por visibilidade, refresh e cleanup previsíveis, sem botão de pausa ou ambiente contínuo.

- [x] Apresentar arquivos, comportamento finito e substituição da lógica antiga do Hero — informado antes das edições, dentro da autorização “continue”.
- [x] Extrair somente responsabilidades necessárias do PortfolioMotion e integrar a cena ao `useGSAP` existente — `heroScene.ts` e `layoutRefresh.ts`.
- [x] Implementar sequência finita do grafo e conclusão antecipada por scroll, seguida de repouso sem loops — desktop cerca de 4 s, mobile 2,4 s.
- [x] Criar propriedade exclusiva dos parâmetros e compositor compartilhado no ticker existente — amostra de 241 frames sem separação de extremos.
- [x] Respeitar decisão de não adicionar pausa manual; suspender em aba oculta/fora da tela, encerrar em movimento reduzido e deixar interação com cursor finita.
- [x] Coordenar transações de layout/refresh e eventos de idioma, tamanho, imagens e histórico — transação aninhada testada com um refresh de conclusão.
- [x] Preservar importação condicional, fallback estático e restauração de atributos ao trocar mídia — reduzido inicial sem chunk e fallback bloqueado testados.
- [x] Validar montagem/desmontagem em Strict Mode e troca dinâmica de preferências — triggers 15→18→15; ticker 1→1; sem replay após mudança durante a introdução.

**Arquivos efetivos:** `components/PortfolioMotion.tsx`, novos `motion/heroScene.ts` e `motion/layoutRefresh.ts`, este plano e `IMPLEMENTAR.md`. `App.tsx`, CSS-fonte, dicionários e SVG da Fase 2 não precisaram de nova alteração nesta fase. Não foi criado MotionControl. **Dependências:** Fase 2 e decisões sobre movimento, atendidas. **Riscos:** reinício indevido, callbacks duplicados e limpeza; resultados/limites na seção 11. **Aceite técnico:** introdução finita e interrompível, geometria conectada, sem listener por nó/loop ambiente, restauração após preferência e desmontagem, fallback estático e importação condicional preservados. **Testes:** 24 layouts PT/EN/preferências; frames/sinais/cursor; idioma, perfil e preferência durante introdução; hash, scroll, aba oculta, fallback, teclado, Strict Mode e transações; lint/typecheck/build aprovados. Touch/dispositivos físicos e navegadores adicionais não foram exercitados nesta fase. **Aprovação:** “continue” após a Fase 2; concluída no escopo técnico local, aguardando avaliação visual. Não autoriza a Fase 6.

### Fase 4 — Transições cinematográficas

**Objetivo:** coordenar continuidade entre Hero, Sobre, Projetos, Experiência e Contato. **Aprovação vigente:** concluída no escopo técnico local, após o “sim” à proposta apresentada na retomada. Implementação e validação final concluídas; aceite visual geral pendente. Resultados e limites em 14. Isso não conclui a Fase 8.

- [x] Apresentar composição dos conectores e amplitudes antes de alterar seções.
- [x] Implementar as cenas 2, 3, 7 e 10 com wrappers distintos e seletores locais.
- [x] Preservar a foto original, dimensão reservada e leitura de Sobre.
- [x] Ligar progresso aos limites reais das seções, sem espaçadores de pinning.
- [x] Garantir reversão gráfica ao subir sem ocultar texto ou reiniciar a introdução.
- [x] Diferenciar desktop, touch/tela baixa, mobile e movimento reduzido.
- [x] Verificar se interação de contato e âncoras permanecem estáveis durante a transição.

**Arquivos:** `components/PortfolioMotion.tsx`, novo `motion/transitionScenes.ts`; `sections/Hero.tsx`, `About.tsx`, `Projects.tsx`, `Experience.tsx`, `Contact.tsx`, `styles/globals.css`; novo `components/SectionConnector.tsx` reutilizado nas quatro cenas. **Dependências:** Fases 3 e 6 para geometria estável. **Riscos:** linhas sobre texto, recorte da foto, efeitos disputando transform ou header encobrindo destino. **Aceite:** passagem perceptível em captura sequencial/vídeo; reversão sem saltos; zero pinning e zero altura artificial no padrão aprovado; foto e CTAs visíveis; navegação por teclado e contato funcionais. **Testes:** trajetos nos dois sentidos, sete âncoras e CTA, PageUp/PageDown/Home/End, deep link, histórico, mobile/reduced e captura comparativa; lint/typecheck/build. **Aprovação:** autorizada explicitamente na retomada. BFCache e cobertura manual indisponível devem permanecer como limites, não resultados implícitos.

### Fase 5 — Animações específicas dos projetos

**Objetivo:** dar a cada arte uma narrativa própria sem comprometer a consulta rápida aos projetos. **Aprovação vigente:** concluída no escopo técnico local após “sim” à proposta de três cenas, arquivos e testes; execução/limites em 15, aceite visual com o proprietário.

- [x] Apresentar grupos/estados de cada arte e revisar ausência de dados aparentando resultados reais.
- [x] Adicionar ganchos semânticos de documento/fluxo/células, waveform/representações e entradas/soma/AND.
- [x] Implementar cenas 4, 5 e 6 com progresso reversível, preservando composição alternada.
- [x] Remover o movimento genérico conflitante somente ao assumir sua substituição.
- [x] Recalcular limites após detalhes/tradução, sem alongar o card para produzir animação.
- [x] Avaliar sticky somente se houver necessidade demonstrada pela altura real; mantido fluxo natural, sem sticky/pinning.
- [x] Simplificar artes e movimento no mobile; manter figuras completas no reduced-motion.

**Arquivos:** `components/ProjectArtwork.tsx`, `PortfolioMotion.tsx`, novo `motion/projectScenes.ts`, `styles/globals.css` e registros locais; ProjectCard/dicionários/dados não precisaram mudar. **Dependências:** Fases 3, 4 e 6. **Riscos:** SVG pesado, waveform interpretada como dado real, C representado incorretamente como modelo treinável, sticky conflitando com detalhes. **Aceite:** três sequências visualmente distintas; direção coerente dos sinais; todos os títulos/resumos/controles disponíveis a qualquer progresso; sem métricas/links/conteúdo novo; nenhuma extensão artificial do percurso no modo padrão. **Testes:** scroll lento/rápido/reverso, cada expansão aberta/fechada, idioma, texto ampliado, touch/baixa altura, preferências, cleanup e falha do módulo; comparar frames/custo por projeto; lint/typecheck/build. **Aprovação:** autorizada e concluída tecnicamente; Fases 7/8 não autorizadas.

### Fase 6 — Detalhes expansíveis e tipografia

**Objetivo:** separar expansão da linha principal dos cards e melhorar leitura com escala tipográfica consistente.

- [x] Aplicar estrutura full-width e tokens previstos em 2.6–2.7, autorizados pelo “continue”; arquivos/escopo apresentados antes das alterações.
- [x] Criar wrapper principal e mover details para rodapé do mesmo card, preservando conteúdo e ordem — baseline PT/EN comparado.
- [x] Atualizar grid/alternância para não esticar arte com o painel — três projetos em 48 combinações, diferença <=1 px entre aberto/fechado.
- [x] Implementar enhancement de abertura/fechamento com fallback nativo e cancelamento seguro — Web Animations API, reduced-motion, API ausente e dez reversões rápidas testados.
- [x] Conectar expansão ao coordenador de layout e tratar foco/posição após recolher — zero refresh durante animação e um após estabilizar; foco preservado.
- [x] Aplicar tokens a descrições, detalhes, experiência, formação, tecnologias e certificações — tamanhos computados registrados em 12.
- [x] Preservar todos os textos/tecnologias e tradução integral; não acrescentar dependências — comparação completa e build aprovados.
- [x] Substituir GitHub/LinkedIn no Hero por “Fale comigo” / “Get in touch”, mantendo Projetos e links profissionais no Contato — âncora/hash/foco/header testados em PT/EN desktop/mobile.

**Arquivos efetivos:** `components/ProjectCard.tsx`, novo `components/ProjectDetails.tsx`, `styles/globals.css`, `motion/layoutRefresh.ts`, `sections/Hero.tsx`, `i18n/pt.ts` e `i18n/en.ts`, além deste plano e `IMPLEMENTAR.md`. Alterações dos componentes de currículo não foram necessárias: os seletores existentes receberam os tokens. **Dependências:** Fase 3, atendida. **Riscos:** semântica/medidas/foco/refresh, tratados nos cenários em 12. **Aceite técnico:** painel full-width; linha principal e arte estáveis até 1 px; conteúdo integral; summary ≥44 px; Enter/Espaço e foco; sem altura inline residual; um refresh de conclusão; CTA Contato funcional. **Testes:** 48 layouts, reversões, idioma/reduced/resize durante animação, foco, fallback, baseline, texto 200%, capturas e lint/typecheck/build. Paleta preservada; sem nova auditoria integral de contraste. **Aprovação:** autorizada pelo pedido atual e concluída no escopo técnico; avaliação visual pendente. Fase 4 não autorizada.

### Fase 7 — Timeline acadêmica

**Objetivo:** recuperar protagonismo da Formação com eixo vertical e conteúdo confirmado. **Aprovação vigente:** concluída no escopo técnico local após “sim” ao desenho e aos textos atuais PT/EN; sem complementos. Resultados e limites em 16; aceite visual com o proprietário.

- [x] Apresentar desenho da timeline e texto exato PT/EN antes da execução.
- [x] Excluir ampliações candidatas desta entrega, conforme proposta aprovada; preservar datas e status atuais.
- [x] Substituir apenas o grid acadêmico pela timeline, com UECE em destaque e SENAI conciso.
- [x] Preservar tipos/dados atuais; nenhuma área complementar foi aprovada ou adicionada.
- [x] Implementar cena 8 com trilho sempre visível, preenchimento e marcadores reversíveis.
- [x] Validar coluna única mobile, leitura sem animação e distinção visual da Experiência.

**Arquivos:** `sections/Education.tsx`, `styles/globals.css`, novo `motion/educationScene.ts`, `PortfolioMotion.tsx` e três registros locais. Dados/tipos/dicionários não precisaram mudar; Card reutilizado sem novo componente. **Dependências:** Fases 3 e 6; revisão editorial para qualquer ampliação futura. **Riscos:** progresso confundido com conclusão do curso, duplicação visual da Experiência, texto de fonte indexada desatualizado. **Aceite:** dois registros preservados; UECE 2021–2027 com previsão em 2027; SENAI 2019–2022; eixo de leitura vertical sem pin; animação reversível e versão estática íntegra; nenhum complemento sem aprovação. **Testes:** conteúdo PT/EN, ordem DOM, headings, seis larguras, texto 200%, scroll reverso, navegação, preferências dinâmicas/fallback e Strict Mode do módulo; lint/typecheck/build. **Aprovação:** autorizada e concluída tecnicamente; Fase 8 ainda não autorizada.

### Fase 8 — Testes, responsividade e otimização

**Objetivo:** comprovar integração visual/funcional e registrar resultados, limitações e custo real.

- [x] Apresentar matriz e arquivos de eventual correção antes de iniciar a fase.
- [x] Validar 320/375/768/1024/1440/1920 px × PT/EN × movimento normal/reduzido, com detalhes fechados/abertos.
- [x] Testar tela baixa, touch, teclado, texto 200%, hash inicial, histórico e idioma durante animações.
- [x] Verificar copiado real/repetição/falha do e-mail em ambiente de teste autorizado, links e foto; não enviar mensagens.
- [x] Testar pausa, visibilidade, remontagem, limpeza e recuperação da falha do chunk de movimento.
- [x] Inspecionar contraste e semântica; realizar leitor de tela e Safari/Firefox/dispositivo físico quando disponíveis, registrando lacunas.
- [x] Comparar bundle, frames, tarefas longas, layout e custo das cenas em cenários equivalentes ao baseline.
- [x] Executar `npm run lint`, `npm run typecheck`, `npm run build` e verificar o preview resultante; não instalar ferramentas por inferência.
- [x] Documentar evidências e limitações neste arquivo e atualizar históricos locais somente após execução autorizada.

**Arquivos:** inicialmente roteiros/evidências em `.cache/` e documentação local; correções nos componentes afetados apenas dentro do escopo apresentado. `package.json`, lockfile, Vite e publicação não são alvos previstos. **Dependências:** Fases 2–7 concluídas e aprovadas individualmente. **Riscos:** emulação não representar dispositivo real, resultados de laboratório serem confundidos com CWV, custo do motor aumentar sem benefício. **Aceite:** critérios gerais da seção 6 atendidos, build aprovado, regressões resolvidas, custo reportado e nenhuma alegação de cobertura não executada. **Testes:** matriz acima com relatório por navegador/versão/cenário, capturas/vídeo antes/depois, contagem de triggers/listeners e amostras de desempenho. **Aprovação:** autorizada e concluída tecnicamente, com evidências/limites na seção 17.

## 6. Critérios de aceitação gerais

- [x] Aprovação registrada para cada fase executada e para qualquer mudança substancial de escopo.
- [x] Rede híbrida reconhecível, introdução perceptível e finita, sinais coerentes com conexões correntes.
- [x] Sequências dos projetos distinguíveis e conceituais, sem sugerir resultados reais ou arquitetura ainda não implementada.
- [x] Continuidade perceptível entre as seções, com reversão coerente ao subir quando aplicável.
- [x] Nenhuma demora imposta à navegação, bloqueio de scroll ou percurso artificialmente longo.
- [x] Âncoras, histórico, foco, menu mobile, skip link e controles por teclado funcionais.
- [x] PT/EN completo, sem reiniciar a introdução nem perder estado de detalhes na troca de idioma.
- [x] Foto preservada; conteúdo profissional, status de pesquisa, ausência de repositórios e certificações mantidos.
- [x] E-mail copiável com feedback correto, erro tratado e endereço selecionável; sem Gmail/mailto/formulário.
- [x] Detalhes full-width sem alongar o plano gráfico, com transição segura e fallback nativo.
- [x] Formação vertical com datas e previsão corretas; complementos editoriais aprovados antes da publicação.
- [x] Conteúdo legível sem módulo de animação; preferência reduzida e suspensão por visibilidade respeitadas; sem botão de pausa conforme D08.
- [x] Sem overflow horizontal em 320–1920 px, texto ampliado e idiomas testados; zoom nativo não coberto.
- [x] Cleanup verificável, sem disputa de propriedades, loops ou listeners duplicados; ambiente pausado quando não necessário.
- [x] Novos estados de foco/contraste e desempenho validados; limitações de browser/leitor de tela explicitadas.
- [x] Lint, typecheck, build e preview aprovados após implementação autorizada; nenhum deploy implícito.

**Critérios técnicos acima verificados no escopo local da seção 17; aceite visual do proprietário continua pendente.**

## 7. Registro de decisões e acompanhamento

### 7.1 Decisões vigentes e propostas

| ID | Decisão | Situação / origem |
| --- | --- | --- |
| D01 | Aproveitar aplicação, identidade preto/vermelho, página única e PT/EN | Obrigatório na solicitação e no briefing |
| D02 | Pedido inicial limitado a análise/documentação | Atendido na auditoria; implementações posteriores das Fases 2, 3 e 6 autorizadas separadamente |
| D03 | Reutilizar GSAP/ScrollTrigger/SVG e scroll nativo, sem nova dependência | Abordagem aprovada; implementação por fase ainda exige autorização |
| D04 | Grafo híbrido orgânico, rótulos discretos e mobile simplificado | Composição/implementação aprovadas; entregues nas Fases 2–3; aceite visual final geral não registrado |
| D05 | Antecipar Fase 6 após a 3 para estabilizar geometria | Ordem 1 → 2 → 3 → 6 → 4 → 5 → 7 → 8 aprovada |
| D06 | Details nativo em rodapé full-width com animação progressiva | Autorizado e implementado na Fase 6, evidências em 12 |
| D07 | Timeline acadêmica vertical com graduação em destaque | Desenho/textos atuais autorizados e implementação concluída na Fase 7; evidências em 16 |
| D08 | Sem botão de pausa; sequência finita seguida de repouso, sem loops automáticos | Decisão explícita do proprietário; reduced-motion obrigatório |
| D09 | Sem pinning/Lenis no padrão inicial; qualquer adoção exige proposta específica | Recomendação para manter navegação natural |
| D10 | Arquitetura/dados acadêmicos complementares do LinkedIn são candidatos, não conteúdo publicado | Revisão editorial pendente; base atual suficiente para timeline |
| D11 | Investigar incremento acima de cerca de 5 kB gzip sobre baseline da segunda evolução; manter custo histórico explícito | Investigação concluída em 17: +6.473 bytes gzip padrão Node, sem motor duplicado/plugins extras. Referência de investigação não redefinida como orçamento aprovado; custo histórico mantido. |
| D12 | Planos e históricos permanecem Markdown local ignorado pelo Git | Regra atual de `AGENTS.md`; não abrir exceção automaticamente |
| D13 | Hero com Projetos + Fale comigo, retirando os dois botões profissionais somente dessa seção | Mudança explicitamente autorizada junto da Fase 6; Contato preserva GitHub/LinkedIn |

**Decisões ainda pendentes:** aceite visual final do proprietário e eventual publicação; complementos acadêmicos continuam candidatos fora deste ciclo. Fases 4, 5 e 7 foram autorizadas e concluídas; Fase 8 foi autorizada e concluída tecnicamente. Eventual pinning, Lenis, plugin, dependência ou mudança de orçamento exige proposta própria. Ordem, stack, ausência de botão/loop ambiente, grafo, detalhes full-width, tipografia e CTA já foram autorizados.

### 7.2 Registro desta auditoria — 18/10/2026

**Autorização:** pedido atual de analisar e criar `PLANEJAMENTO_EVOLUCAO_VISUAL.md`. **Execução:** leitura, inventário, consulta de fontes, inspeção local/capturas e redação do plano. **Arquivo de entrega:** este documento. **Evidências auxiliares:** cache local listado em 1.1. **Fonte/CSS/assets/configuração:** sem alterações nesta solicitação. Não houve instalação, commit, push ou deploy.

**Problemas confirmados:** movimento genérico pouco amplo; ausência de propagação/reorganização da rede; expansão presa à coluna; crescimento de 362 px no plano visual de MIND sem crescimento do SVG; escalas secundárias pequenas; Formação em grid. **Soluções propostas:** modelo geométrico compartilhado, cenas semânticas, detalhes full-width, tokens de leitura e timeline vertical. Nenhuma solução foi implementada.

**Validações executadas:** inspeção Chrome em dois tamanhos, medição dos três cards abertos/fechados, tipografia computada, amostras do scroll do Hero, capturas MIND/Formação e estado Git. Sem exceções JavaScript locais relatadas pelo roteiro; sem overflow nos dois tamanhos. **Não executado:** nova build/lint, regressão PT/EN integral, novo teste de cópia, leitor de tela, Firefox/Safari e medições de campo.

O estado Git já continha alterações anteriores em `package.json`, `package-lock.json`, `src/App.tsx`, `src/components/NeuralGraph.tsx` e `src/components/PortfolioMotion.tsx` ainda não rastreado. Foram preservadas. Este plano não as atribui à segunda evolução nem as reverte. A regra `*.md` mantém este documento local, fora do GitHub.

### 7.3 Registro futuro por fase

Preencher somente após execução expressamente autorizada. “Não executada” não equivale a tarefa concluída nem a aprovação.

| Fase | Aprovação/data | Implementação / arquivos modificados | Testes / resultados | Problemas / soluções / pendências |
| --- | --- | --- | --- | --- |
| 1 | Auditoria e arquitetura aprovadas; 18/10/2026 | Este plano e evidências locais; detalhes em 7.2 | Critérios documentais atendidos, evidências em 1.1/7.2 | Concluída; proposta/Fase 2 posteriormente aprovadas |
| 2 | Composição e implementação aprovadas expressamente; 18/10/2026 | SVG Hero desktop/mobile, geometria e dicionários; arquivos/resultados na seção 10 | Lint/typecheck/build; geometria; 24 layouts Chrome; teclado e capturas | Concluída tecnicamente; seguida pela Fase 3 autorizada separadamente |
| 3 | “continue” após entrega da Fase 2; 18/10/2026 | PortfolioMotion e novos heroScene/layoutRefresh; detalhes em 11 | Lint/typecheck/build, 24 layouts, geometria/frames, preferências, fallback, Strict Mode e transações | Concluída tecnicamente; seguida pela Fase 6 autorizada separadamente |
| 4 | “sim” à proposta; 18/10/2026 | Conectores e quatro transições; seção 14 | Lint/typecheck/build, 48 layouts e navegação | Concluída tecnicamente |
| 5 | “sim” à proposta; 18/10/2026 | Três artes/cenas próprias; seção 15 | Lint/typecheck/build, 48 layouts, seis sequências | Concluída tecnicamente |
| 6 | “continue” + pedido de CTA Fale comigo; 18/10/2026 | Details full-width, tipografia e Hero; arquivos em 12 | Lint/typecheck/build; 48 layouts; expansões/teclado/foco/refresh; CTA PT/EN | Concluída tecnicamente; demais fases aprovadas separadamente |
| 7 | “sim” à proposta/textos; 18/10/2026 | Timeline acadêmica; seção 16 | Lint/typecheck/build, 48 layouts, quatro sequências | Concluída tecnicamente; sem complementos |
| 8 | “sim” à proposta; 18/10/2026 | Roteiros/cache e quatro documentos; sem correção de código necessária | 96 layouts finais, Chrome/Edge, demais evidências em 17 | Concluída tecnicamente; aceite visual/publicação separados |

Cada registro futuro deve incluir data/texto da autorização, resumo, arquivos efetivos, decisões, testes com evidências e limitações, desvios aprovados, pendências e próxima proposta. Atualizar também `IMPLEMENTAR.md` após conjuntos de implementação autorizados conforme `AGENTS.md`, sem confundir numeração histórica com esta evolução.

## 8. Fontes técnicas consultadas

- Documentos locais obrigatórios e fontes de implementação relacionadas na seção 1.
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/), [integração React oficial](https://github.com/greensock/react) e [MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/): referências para integração e eventual implementação, não prova de recursos já usados no site.
- [Lenis, repositório oficial](https://github.com/darkroomengineering/lenis): alternativa avaliada; não instalado.
- [MDN: Element.animate](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate), [WAI: Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) e [WCAG: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).
- [Supertape](https://www.thesupertape.com): referência de experiência indicada pelo proprietário, com limitação de observação descrita em 1.1.
- [LinkedIn público](https://br.linkedin.com/in/waldeney-filho) e [versão PT](https://br.linkedin.com/in/waldeney-filho/pt): somente complementos acadêmicos indexados, sem copiar textos, completar trechos truncados ou alterar credenciais.

**Próximo passo vigente:** avaliação visual do proprietário; todas as oito fases concluídas tecnicamente, evidências finais em 17. A proposta abaixo é histórica: originou as Fases 2–3, com execuções em 10–11; Fase 6 em 12, Fase 4 em 14, Fase 5 em 15 e Fase 7 em 16.

## 9. Proposta visual detalhada — Fase 2 aprovada

### 9.1 Intenção e composição do Hero

Conceito: **uma rede espacial que se organiza para processar informação**. A pose inicial tem distribuição irregular, mas caminhos direcionados; a pose final explicita uma rede neural feed-forward de quatro camadas. As duas poses compartilham os mesmos nós e ligações: a transformação não troca uma ilustração por outra.

Preservar nome em destaque, especialidades, descrição, CTAs e coluna gráfica lateral no desktop. Usar o viewBox existente 480 × 360 e largura visual máxima próxima dos 32rem atuais. A rede ocupa a maior parte do plano gráfico; substituir as circunferências dominantes por marcas periféricas curtas e discretas. Manter área livre ao redor de texto/botões. Foto continua exclusivamente em Sobre.

### 9.2 Distribuição desktop

Doze nós, com IDs permanentes e coordenadas finais reaproveitando o desenho atual. Coordenadas abaixo são unidades SVG, não pixels de layout.

| Camada | IDs | Pose espacial inicial (x,y) | Pose neural final (x,y) |
| --- | --- | --- | --- |
| Entrada | I1, I2, I3 | (74,86), (40,181), (96,277) | (54,96), (64,182), (50,262) |
| Oculta 1 | H1a, H1b, H1c, H1d | (159,44), (202,121), (146,224), (213,294) | (182,62), (171,138), (185,226), (175,296) |
| Oculta 2 | H2a, H2b, H2c | (297,77), (332,171), (284,279) | (296,96), (309,181), (298,266) |
| Saída | O1, O2 | (405,114), (430,242) | (422,143), (415,222) |

Coordenadas finais refinadas conforme a orientação adicional autorizada: pequenas irregularidades em cada coluna preservam o reconhecimento das camadas e evitam alinhamento perfeitamente mecânico.

Rótulos estáveis abaixo das colunas: **Entrada · Oculta 1 · Oculta 2 · Saída**, traduzidos para **Input · Hidden 1 · Hidden 2 · Output**. Reserva inferior do viewBox para rótulos; não movimentá-los por nó. A organização se lê da esquerda para a direita. Não atribuir significado real às dimensões da rede nem associá-la a um modelo treinado do proprietário.

### 9.3 Conexões e acabamento

- Proposta de 30 ligações entre camadas adjacentes: 3×4 = 12; 4×3 = 12; 3×2 = 6. Sem saltos entre camadas ou ciclos de retorno.
- As ligações completas dão reconhecimento de rede neural; sua intensidade baixa deixa os caminhos selecionados em primeiro plano. Usar segmentos retos, sem plugin adicional de trajetórias.
- Dois percursos principais: I1 → H1b → H2b → O1 e I3 → H1c → H2c → O2. Cada trecho existe na topologia e cada sinal só avança após chegar ao nó intermediário.
- Arestas base em cinza grafite com baixa intensidade; percursos ativos em vermelho, com traço um pouco mais forte. Nó ativo recebe contorno/halo curto; evitar filtros de brilho ou blur animado.
- Nós de cerca de 5–7 unidades de raio; sombreamento restrito ao fundo estático. Pulsos com cerca de 2–3 unidades de raio, no máximo três simultâneos. Não inserir pesos numéricos, percentuais ou fórmulas sem função de leitura.
- Na pose final, os caminhos destacados permanecem discerníveis mesmo após terminar o movimento. Validar intensidade no SVG renderizado e reduzir opacidade das ligações secundárias se os cruzamentos dominarem a composição.

Esquema de leitura (a implementação terá conexões individuais, não apenas as setas do esquema):

```text
Entrada          Oculta 1          Oculta 2          Saída
                   ●
   ●                                  ●
                   ●                                   ●
   ●       →                 →        ●       →
                   ●                                   ●
   ●                                  ●
                   ●
    3                4                 3                2
```

### 9.4 Sequência planejada para integração na Fase 3

| Intervalo desktop | Estado / ação | Resultado visual |
| --- | --- | --- |
| 0–0,6 s | Revelar nós e ligações da pose espacial | Apresenta grafo irregular com direção reconhecível |
| 0,6–1,3 s | Primeiro percurso recebe um sinal segmentado | Evidencia conexões e passagem entre nós |
| 1,3–2,5 s | Interpolar coordenadas espaciais para colunas | A rede neural emerge progressivamente; arestas seguem os nós |
| 2,5–3,6 s | Propagação final pelos dois percursos, com breve ativação dos nós | Leitura clara de entrada → camadas ocultas → saída |
| 3,6–4 s | Dissipar halos e estabilizar | Rede em repouso, caminhos discretamente destacados |
| Após 4 s | Nenhum pulso, oscilação ou variação automática | Página permanece estável para leitura |

Os tempos são aproximados e serão calibrados no protótipo autorizado. A introdução não se repete ao voltar ao topo, mudar idioma ou reentrar na viewport. Se o usuário rolar antes de acabar, concluir a pose neural e entregar o wrapper à futura transição Hero → Sobre. Deep link ou restauração no meio da página apresenta diretamente a pose final.

Cursor desktop, quando integrado: influência local de até 4 unidades SVG em poucos nós próximos, com retorno de aproximadamente 0,25–0,35 s ao sair. A ação ocorre somente em resposta ao ponteiro; quando ele para, a rede estabiliza, sem loop autônomo. Cursor não modifica a topologia e não escreve coordenadas fora do renderizador compartilhado. Não habilitar em touch ou movimento reduzido.

A transição vinculada ao scroll e a continuidade com Sobre pertencem à Fase 4. Fase 2 apenas reserva wrapper/ganchos para essa composição; não ativa a sequência cinematográfica inteira antecipadamente.

### 9.5 Mobile e tablet

No mobile, versão própria de **8 nós em 3–3–2**: entrada, uma camada oculta e saída, mantendo a leitura neural. São 15 ligações: 3×3 + 3×2. Rede simplificada, traços cinza e caminhos vermelhos preservam a identidade; não é uma miniatura da malha desktop.

ViewBox compacto proposto 480 × 280: entrada em x=64 com y=76/140/204; oculta em x=240 com y=56/140/224; saída em x=416 com y=104/176. Rótulos inferiores Entrada/Oculta/Saída, também traduzidos. Pequenas irregularidades iniciais, de até 18 unidades por eixo, convergem para essas posições.

Colocar o gráfico no fluxo **abaixo dos CTAs e antes do link Sobre**, reservando altura aproximada de 10–12rem conforme largura disponível. Não usar a fotografia no Hero, não cobrir texto com a rede e não impor altura mínima de uma viewport. Tablet de largura intermediária pode usar o mesmo perfil simplificado com área um pouco mais ampla; só ativar o perfil completo quando houver espaço real para as duas colunas.

Introdução mobile de aproximadamente 2,4 s: revelar (0–0,4 s), organizar (0,4–1,4 s), percorrer um caminho (1,4–2,1 s), estabilizar (2,1–2,4 s). Um único pulso por vez, sem cursor/parallax ou repetição automática. O scroll continua disponível desde o primeiro frame.

Com `prefers-reduced-motion`, apresentar diretamente a rede final com ligações e caminho destacado, sem introdução, pulso ou influência de ponteiro. Mudanças da preferência em tempo real devem terminar numa pose estática coerente.

### 9.6 Fronteira entre as Fases 2 e 3

**Entrega proposta da Fase 2:** novo SVG desktop/mobile, poses tipadas, topologia, ganchos e funções puras de interpolação, apresentação estática final e validação das poses intermediárias. O módulo atual continua sendo o único motor ativo; preservar seus seletores para não causar regressões. Não ativar novos timers, listeners, ticker ou timeline nesta fase.

**Entrega futura da Fase 3, sob outra autorização:** substituir as animações antigas correspondentes pela sequência acima, integrar sinais/cursor/visibilidade/reduced-motion ao GSAP existente e garantir cleanup. Esta separação segue o contrato do roadmap já aprovado e evita dois motores escrevendo no mesmo SVG. Nenhum botão de pausa será criado; o repouso após a introdução substitui a antiga proposta de ambiente contínuo.

### 9.7 Arquivos previstos

| Arquivo | Alteração proposta na Fase 2 |
| --- | --- |
| `src/components/NeuralGraph.tsx` | Refinar somente a variante Hero e renderizar geometria tipada; preservar a variante padrão usada no Contato |
| `src/sections/Hero.tsx` | Integrar rótulos PT/EN e wrapper responsivo, mantendo nome, apresentação e CTAs |
| `src/styles/globals.css` | Aparência das camadas/nós/arestas e posição no fluxo mobile, com escopo do Hero |
| `src/data/heroGraph.ts` — novo | IDs, topologia e coordenadas das poses desktop/mobile |
| `src/motion/graphGeometry.ts` — novo | Interpolação de nós e cálculo dos segmentos/sinais sem estado React por frame |
| `src/i18n/types.ts`, `src/i18n/pt.ts`, `src/i18n/en.ts` | Rótulos curtos de camadas com tipagem PT/EN |
| `PLANEJAMENTO_EVOLUCAO_VISUAL.md`, `IMPLEMENTAR.md` | Registro de execução e evidências somente depois de autorização/validação |

`PortfolioMotion.tsx` será lido para manter os contratos, mas sua orquestração nova pertence à Fase 3. Se a integração estática revelar necessidade real de alterar seu comportamento antes disso, apresentar o ajuste antes de executar. Não alterar dependências, assets da foto, dados profissionais ou configuração de deploy.

### 9.8 Critérios para aprovar e validar a Fase 2

- [x] Aprovação explícita desta proposta visual antes de alterar código.
- [x] Desktop com 12 nós/4 camadas; mobile com 8 nós/3 camadas, directionais e reconhecíveis mesmo estáticos.
- [x] Arestas ligam somente camadas adjacentes e seus extremos seguem os nós nas poses inicial/intermediárias/final.
- [x] Variante padrão/Contato e foto preservados; CTAs, âncoras e PT/EN mantidos.
- [x] Nenhum novo motor ativo ou loop automático introduzido nesta fase.
- [x] Sem overflow em 320/375/768/1440 px, inclusive texto ampliado; rótulos legíveis e gráfico sem sobreposição ao conteúdo.
- [x] Capturas finais desktop/mobile e poses intermediárias revisadas, lint/typecheck/build aprovados após implementação autorizada.

**Situação histórica da entrega:** Fase 2 concluída tecnicamente e apresentada. O “continue” posterior autorizou a Fase 3, executada na seção 11; as fases seguintes continuam não autorizadas.

## 10. Execução da Fase 2 — 18/10/2026

### Autorização e escopo

O proprietário aprovou a composição e autorizou expressamente apenas a Fase 2, acrescentando estética orgânica, rótulos discretos e preparo para futura animação sem grande refatoração. Implementados somente SVG desktop/mobile, dados/geométria tipados, traduções dos rótulos e composição responsiva. Sem novas timelines, listeners, ticker, dependências ou transições cinematográficas. O módulo GSAP preexistente não foi alterado.

### Arquivos efetivamente modificados/criados

- `src/components/NeuralGraph.tsx`: variante Hero em dois perfis SVG, com apenas um visível por CSS; variante padrão preservada.
- `src/sections/Hero.tsx`: passagem dos rótulos traduzidos para a variante Hero.
- `src/styles/globals.css`: visual orgânico com marcas periféricas curtas, conexões com hierarquia, rótulos discretos e gráfico mobile no fluxo.
- `src/i18n/pt.ts` e `src/i18n/en.ts`: quatro rótulos de camadas. `i18n/types.ts` não precisou mudar, porque `Dictionary` deriva da estrutura PT e já valida EN.
- Novos `src/data/heroGraph.ts` e `src/motion/graphGeometry.ts`: perfis, IDs, rotas dirigidas, posições inicial/final, interpolação com offsets e amostragem de sinais.
- Este documento e `IMPLEMENTAR.md`: registros locais de acompanhamento.
- Roteiros e evidências ignorados em `.cache/evolution-hero-phase2/`; não constituem dependência da aplicação ou suíte npm permanente.

### Resultado e contrato para a Fase 3

Desktop: 12 nós em quatro camadas, 30 arestas entre camadas adjacentes e dois percursos destacados. Mobile/tablet abaixo de 64rem: 8 nós em três camadas e 15 arestas, no fluxo após os CTAs, com área de 10–12rem. Ambos preservam pequenas variações nas coordenadas finais, em lugar de colunas perfeitamente rígidas. Foto, conteúdo e Contato permanecem preservados.

Cada SVG tem `data-graph-profile` (`desktop`/`mobile`), e IDs de nó/aresta/rota únicos dentro de seu perfil. Ganchos: `data-node`, `data-node-layer`, `data-edge`, `data-from`, `data-to`, `data-node-ref`, `data-signal`, `data-layer-label` e camadas `field/network/edges/halos/nodes/signals/labels`. Sinais estão preparados no SVG com opacidade zero; não há propagação ativa nesta fase.

`graphPositions` calcula a pose interpolada e aceita offsets; `graphSegment` deriva a ligação das mesmas posições; `graphSignal` percorre todos os segmentos da rota usando as posições correntes. São funções puras, sem DOM, timers ou estado React. A Fase 3 deverá selecionar o perfil visível, manter um único compositor proprietário dos atributos e atualizar halos/sinais junto aos nós. Não deve animar globalmente ambos os perfis ou adicionar listeners por nó. A escolha por CSS dispensa listener de breakpoint ou mudança de estado React nesta fase.

O motor legado usa o primeiro SVG (desktop) para a pequena entrada/cursor antigos; a variante mobile fica estática. Isso mantém a fronteira desta entrega e será substituído pela orquestração explícita de perfis quando a Fase 3 for autorizada. Não se declara a nova sequência animada como entregue.

### Testes e evidências

- `npm run lint`: aprovado sem avisos; `npm run typecheck`: aprovado; `npm run build`: aprovado. A primeira tentativa de build no sandbox falhou com `spawn EPERM`/carregamento nativo Vite/Tailwind; a execução fora do sandbox, mediante aprovação da ferramenta, passou sem mudança de configuração ou instalação.
- Build Vite: 64 módulos; CSS 29,39 kB/gzip 6,68; JS principal 267,13 kB/gzip 82,85; chunk PortfolioMotion 117,72 kB/gzip 46,09. Valores arredondados do Vite; chunk de movimento permanece no mesmo tamanho. Nenhuma medição de CWV é inferida desses números.
- Chrome 155: 24 combinações de 320/375/768/1024/1440/1920 px × PT/EN × movimento normal/reduzido, com um perfil visível, contagens corretas e sem overflow horizontal. Rede mobile posicionada após os CTAs.
- Geometria: dois perfis, dez poses amostradas; IDs únicos, ligações apenas entre camadas adjacentes, rotas válidas, extremos conectados, sinais colineares com o segmento percorrido e passando pelos nós intermediários, offsets e limites de progresso, fontes não mutadas e erro para rota/extremos inválidos.
- Teclado: idioma por Enter, CTA Projetos com hash/foco no destino, details nativo por Enter/Espaço. Texto a 200% em 320 px sem overflow. Comparação do grafo de Contato e conteúdo de outras seções antes/depois dos cenários preservada; foto original e oito seções presentes. Sem botão de pausa ou mailto.
- Capturas revisadas: `hero-1440-pt-BR.png`, `hero-375-pt-BR.png` e poses espacial/intermediária. Há também `hero-1440-en.png`; relatório em `results.json`, roteiros `check.mjs`, `verify.mjs` e `geometry.mjs` no mesmo cache.
- Roteiro ajustado durante validação para normalizar atributo `style` vazio produzido pelo cleanup legado e corrigir seletor escapado do próprio teste. A execução final passou, com zero exceções JavaScript relatadas. Chrome e servidores temporários encerrados.

### Limitações e próximo passo

Inspeção em Chrome emulado; sem nova validação manual com leitor de tela, Safari/Firefox/dispositivo físico, auditoria integral de contraste ou teste real de clipboard nesta fase. Não houve alteração funcional de Contato. A estética orgânica e o protagonismo do grafo ainda dependem do aceite visual do proprietário; as capturas permitem revisão sem ativar a Fase 3.

Sem alterações de dependências, foto, dados profissionais, deploy ou Git. Parar após apresentar este resultado. Fase 3 depende de proposta/autorizações próprias; não iniciar automaticamente.

## 11. Execução da Fase 3 — 18/10/2026

### Autorização e alterações

O proprietário respondeu “continue” após a apresentação da Fase 2. A resposta foi tratada como autorização somente da próxima fase, a 3, e o escopo/arquivos foi apresentado antes de editar. A autorização não se estende à Fase 6 ou às transições/projetos/formação posteriores.

Arquivos desta fase: `src/components/PortfolioMotion.tsx`, novos `src/motion/heroScene.ts` e `src/motion/layoutRefresh.ts`, este planejamento e `IMPLEMENTAR.md`. As alterações da Fase 2 já existentes na árvore de trabalho foram preservadas; não são atribuídas novamente a esta fase. Nenhum pacote, configuração, dado profissional, fotografia ou CSS-fonte foi alterado nesta fase.

`PortfolioMotion` continua sendo o enhancement opcional carregado pelo App e mantém os movimentos anteriores de texto, foto, projetos e Contato. A pequena translação/opacidade da rede inteira e o cursor antigo do SVG foram substituídos pela cena do grafo. A condição `wide` seleciona o perfil gráfico conforme o CSS; a condição mais restrita de desktop com ponteiro fino/altura adequada decide a interação com cursor. Não há Lenis, pinning ou nova transição entre seções.

### Comportamento entregue

- Desktop: revelação de nós/arestas, sinal inicial, interpolação da pose espacial para quatro camadas, sinais finais por dois caminhos e repouso ao final de aproximadamente 4 s.
- Mobile: perfil próprio de três camadas, reorganização e um caminho de sinal, terminando em cerca de 2,4 s. Nenhum cursor no mobile; nenhuma repetição automática.
- `graphPositions`, `graphSegment` e `graphSignal` da Fase 2 alimentam um único renderizador. Coordenadas de nós, arestas, halos e sinais usam o mesmo estado corrente. O progresso fica em objetos locais; não há atualizações React por frame.
- Timeline e quickTo pedem um desenho agrupado no ticker existente. O callback remove a si próprio após o desenho e pode ser cancelado explicitamente; não permanece renderizando em repouso.
- Influência do cursor limitada a 4 unidades SVG e a nós próximos, estabilizando quando o ponteiro para e voltando à pose original ao sair. A interação não repete a introdução ou altera a topologia.
- Scroll inicial acima de 24 px, hash inicial ou interrupção por navegação concluem a pose. Troca de idioma não recria a cena. Após reprodução iniciada, mudança de perfil/preferência deixa pose final e não reinicia a introdução.
- Aba oculta e gráfico fora da viewport suspendem a reprodução/interação; reduced-motion reverte para o SVG estático. O App mantém a otimização anterior: preferência reduzida inicial não solicita o chunk opcional.
- Cleanup aborta os listeners do proprietário, mata timelines/quickTo/triggers, cancela o desenho pendente e restaura atributos. O snapshot anterior dos demais efeitos foi preservado, inclusive a normalização histórica de estilos de `fromTo`.

`data-motion-state` no perfil ativo permite observar `intro`, `suspended` e `rest`, sem publicar APIs de teste. No teardown esse atributo também é restaurado. As APIs internas do GSAP usadas para contagens ficam apenas nos roteiros de inspeção, não no produto.

### Coordenação de layout preparada para a Fase 6

`createLayoutRefresh` observa tamanho do main/header, imagem, disclosure nativo, fontes, idioma, resize, pageshow e visibilidade. Mudanças de idioma são observadas apenas no atributo `lang`, sem observar as mutações por frame do SVG.

`beginLayoutChange(root)` inicia uma transação e retorna uma função idempotente de conclusão. Transações aninhadas adiam o refresh até a última conclusão; solicitações intermediárias apenas marcam a geometria como suja. O callback de refresh é injetado e agrupado em um RAF pontual, sem novo loop de animação. Esse contrato está pronto para o painel expansível da Fase 6, mas nenhum card foi reorganizado/animado antecipadamente.

### Validação final e evidências

- `npm run lint`, `npm run typecheck` e `npm run build`: aprovados. Um apontamento inicial `prefer-const` foi corrigido antes da validação final. Builds executados com a permissão da ferramenta necessária aos processos nativos do Vite/Tailwind; nenhuma instalação.
- Build: 66 módulos; JS principal 267,17 kB/gzip 82,87; movimento 122,04 kB/gzip 47,64; CSS gerado 29,41 kB/gzip 6,69 (Vite arredondado). Aumento aproximado de JS gzip sobre a Fase 2: 1,57 kB somando os dois chunks; o custo histórico do motor não foi removido ou reclassificado. Não houve mudança no CSS-fonte nesta fase.
- Chrome 155, preview da build final: 241 frames da introdução amostrados; maior diferença entre extremos de arestas e nós correspondente igual a zero; sinais visíveis em 107 frames e reorganização individual perceptível. Intervalo p95 entre frames de cerca de 16,7 ms nessa janela; não representa CWV, dispositivo físico, teste sob carga ou garantia de desempenho em produção.
- Cursor: maior deslocamento observado de aproximadamente 2,26 unidades SVG no ponto de teste, dentro do limite de 4. Após saída e estabilização, zero mutações no SVG durante a janela ociosa de 400 ms.
- Desktop/mobile: pose final coincide com a geometria estática; idioma alterado durante a introdução sem replay; troca de perfil ou reduced-motion durante a introdução conclui a pose. Suspensão/restauração de aba, scroll antecipado e retorno ao topo passaram.
- 24 layouts: 320/375/768/1024/1440/1920 × PT/EN × normal/reduzido, sem overflow horizontal ou espaçadores de pinning. Conteúdo das oito seções comparado com baseline da fase e preservado. CTA Projetos por Enter manteve hash/foco no destino; details nativo respondeu por Enter. Não houve formulário, botão de pausa ou funcionalidade nova fora do escopo.
- Reduzido inicial: chunk não solicitado. Mudança dinâmica: zero triggers do módulo após redução e sem propriedades inline efetivas remanescentes nos nós/arestas/sinais. Hash inicial e chunk bloqueado mantiveram página estática e oito seções disponíveis.
- Fixture real de Strict Mode no Vite: triggers 15 → 18 → 15 após montar/desmontar; ticker retornou à contagem original (1 → 1), SVG restaurado comparando atributos efetivos. A introdução permaneceu executável na segunda montagem do Strict Mode.
- Transação de layout aninhada: zero refreshes nas oito mudanças intermediárias, zero após liberar apenas a transação externa e um após concluir a última. Conclusão duplicada não antecipou o refresh; após destruir, nova solicitação não disparou callback.
- Roteiros ajustados durante validação para ignorar apenas atributo style vazio e aguardar a montagem real do módulo lazy antes de medir o baseline do Strict Mode. O cancelamento do desenho também foi explicitado após conferir a API instalada do ticker. A execução final registrou zero exceções JavaScript.

Evidências locais: `.cache/evolution-motion-phase3/results.json`, `frames.json`, `check.mjs`, `verify.mjs`, `geometry.mjs`; capturas `desktop-signal.png`, `desktop-morph.png`, `desktop-propagation.png`, `desktop-rest.png`, `mobile-intro.png` e `mobile-rest.png`. Capturas de reorganização/propagação desktop e introdução mobile examinadas. Chrome e servidores temporários encerrados.

### Limites e próxima fase

Cobertura em Chrome emulado; sem Firefox/Safari/iOS, touch em dispositivo físico, leitor de tela manual, heap completo, auditoria integral de contraste ou teste real de clipboard nesta fase. Os cenários de teclado e fallback são proporcionais a esta integração; não substituem a regressão final da Fase 8.

Fase 3 concluída tecnicamente, aguardando avaliação visual. Não houve commit, push ou deploy. Próxima proposta é **Fase 6 — detalhes expansíveis e tipografia**, conforme a ordem aprovada; não iniciada nem autorizada por esta entrega.

## 12. Execução da Fase 6 — 18/10/2026

### Autorização e mudança de escopo

O proprietário autorizou “continue” após a entrega da Fase 3, acrescentando expressamente a substituição dos botões GitHub/LinkedIn do Hero por um botão “Fale comigo”, levando à seção de contato. Autorização limitada à Fase 6 e a esse ajuste; não inclui Fase 4 ou seguintes. Estrutura/tokens previstos em 2.6–2.7 e arquivos foram apresentados antes de implementar.

### Arquivos efetivos

- `src/components/ProjectCard.tsx`: wrapper `.project-card__main` para texto/arte; painel expansível como rodapé do mesmo card, fora da linha principal; conteúdo, tecnologias e links condicionais preservados.
- Novo `src/components/ProjectDetails.tsx`: semântica nativa details/summary, animação progressiva, cancelamento, foco, preferência reduzida e transação de layout. Extração concentra esse comportamento sem aumentar a responsabilidade do ProjectCard.
- `src/styles/globals.css`: grid da composição principal/alternância corrigido, painel full-width, detalhes em texto + tecnologias no desktop/coluna única no mobile e tokens responsivos de leitura/metadados/tags.
- `src/motion/layoutRefresh.ts`: absorção das notificações finais de toggle/ResizeObserver antes do refresh, mantendo transações aninhadas e cancelamento.
- `src/sections/Hero.tsx`, `src/i18n/pt.ts` e `src/i18n/en.ts`: CTAs Projetos + Fale comigo/Get in touch. Removidas somente as chaves antigas dos botões profissionais do Hero; links/dicionário do Contato permanecem intactos.
- Este documento e `IMPLEMENTAR.md`: checklist e registros locais. Evidências/roteiros ignorados em `.cache/evolution-details-phase6/`.

### Comportamento entregue

Abrir detalhes não altera a altura da composição principal ou da área gráfica: o rodapé pertence ao mesmo article e usa toda sua largura. No desktop, a lista de detalhes e tecnologias adicionais recebem duas regiões de leitura; no mobile ficam empilhadas. O projeto C, sem tecnologias adicionais, usa uma região textual com largura confortável. Summary e seu foco ficam fora do recorte animado.

Web Animations API interpola somente a altura do corpo por 260 ms, a partir da altura corrente até a altura medida. Durante fechamento, o details permanece aberto até concluir; o corpo fica inert para impedir foco em conteúdo que está sendo ocultado. Se houver foco dentro dele, volta ao summary. Focar conteúdo durante abertura conclui a expansão para evitar recortar o foco.

Reversões rápidas cancelam a animação anterior e continuam da altura atual. Idioma, resize, alteração real de conteúdo/fontes, preferência reduzida e cleanup encerram no estado desejado e removem a altura/overflow temporários. Uma troca de idioma sem enhancement ativo conserva o estado nativo real, inclusive se o evento toggle ainda estiver na fila. Reduzido/API ausente mantêm abertura nativa sem animação.

As mudanças intermediárias ficam dentro da transação da Fase 3. Durante validação, foi detectado um segundo refresh ao estabilizar. O coordenador passou a absorver duas fases de renderização após liberar a última transação, reunindo o toggle e a notificação final do ResizeObserver antes da medição. Não há timeout longo, refresh por frame ou alteração do scroll nativo. Se recolher deixar o summary focado encoberto, aplica-se apenas o deslocamento instantâneo mínimo necessário para torná-lo visível.

Tipografia passou a usar `--text-reading`, `--text-meta` e `--text-tag`. Valores computados observados:

| Uso | 375 px | 1440 px |
| --- | --- | --- |
| Descrições/detalhes/atividades/formação | 16,08 px | 17,68 px |
| Tags de tecnologias | 13 px | 13,79 px |
| Metadados e rótulos de datas | 14 px | 15 px |

Preservadas fontes de sistema, cores, hierarquia do nome e todo conteúdo profissional. O Hero mantém Conhecer projetos e passa a apresentar Fale comigo/Get in touch com `href="#contato"`, sem abrir outra aba. GitHub/LinkedIn seguem no Contato. Não houve nova composição de grafo ou sequência cinematográfica nesta fase.

### Testes e resultados

- Lint, typecheck, build e `git diff --check`: aprovados. Build final: 67 módulos; JS principal 270,72 kB/gzip 84,11; módulo PortfolioMotion 121,07 kB/gzip 47,32; CSS 30,44 kB/gzip 6,87, segundo Vite arredondado. A mudança de distribuição entre chunks decorre do utilitário de layout compartilhado com o componente; nenhuma dependência nova. Total de JS gzip aumentou cerca de 0,92 kB em relação à Fase 3.
- Baseline PT/EN registrado antes de implementar (`baseline.json`): texto das sete seções fora do Hero, textos/tecnologias/detalhes dos três projetos, markup das artes e fotografia comparados integralmente com a nova build e preservados. Mudança textual intencional apenas nos CTAs do Hero.
- Chrome 155: 48 combinações de seis larguras (320/375/768/1024/1440/1920), dois idiomas, normal/reduzido e detalhes fechados/abertos. Sem overflow horizontal; summary >=44 px; rodapé ocupa a largura útil do card. Nos três projetos, diferença da altura principal e da arte <=1 px entre aberto/fechado. Alternância de texto/arte preservada no desktop.
- Expansão animada real no MIND-BH: corpo observado em 112,14 px durante abertura até alvo de 270,80 px; zero refreshes durante a transição e um depois de estabilizar. Sem altura inline remanescente.
- Enter/Espaço, fechamento mantendo semântica aberta até concluir, corpo inert durante recolhimento, dez reversões rápidas, idioma durante abertura/fechamento, resize durante abertura, reduced-motion durante fechamento, foco dentro do painel e retorno ao summary: passaram.
- Element.animate indisponível simulado: details continuou abrindo/fechando nativamente. Movimento reduzido: sem animação de altura.
- Novo CTA Contato exercitado por Enter em PT/EN a 375 e 1440 px: hash correto, foco no destino e título abaixo do header. Dois links profissionais continuam no Contato.
- Texto 200% em 320 px com detalhes abertos: sem overflow. Tokens computados conferidos em 375/1440 px, conforme tabela acima.
- Capturas revisadas: `mind-1440.png`, `mind-375.png`, `hero-375.png`; disponível também `hero-1440.png`. Relatório: `results.json`; roteiro: `check.mjs`/`verify-phase6.mjs`; baseline e versões anteriores dos arquivos no mesmo cache. Sem exceções JavaScript na execução final; Chrome e servidores temporários encerrados.

### Limitações e próximo passo

Cobertura em Chrome emulado, sem Safari/Firefox/dispositivo físico, leitor de tela manual, auditoria integral nova de contraste/CWV ou novo teste real do clipboard. A paleta foi preservada e o Contato não teve seu comportamento de cópia alterado. A troca de idioma exercitou o cleanup do novo componente durante animação; não se declara uma nova fixture Strict Mode específica desse componente.

Fase 6 concluída tecnicamente, aguardando avaliação visual do proprietário. Próxima na ordem aprovada: **Fase 4 — transições cinematográficas**, ainda não autorizada/iniciada. Sem instalação, commit, push ou deploy.

## 13. Encerramento e ponto de retomada — 18/10/2026

Solicitação atual: encerrar o desenvolvimento por hoje e consolidar exclusivamente a documentação. Atualizados este plano e `IMPLEMENTAR.md`; criado `ESTADO_ATUAL.md`, que não existia. Nenhuma funcionalidade, fonte, estilo, dependência ou configuração foi alterada neste fechamento; nenhum build/teste funcional novo foi executado. Os resultados referenciados foram conferidos nos relatórios locais já existentes, sem transformar testes anteriores em nova validação integral.

Fases desta segunda evolução concluídas: 1, 2, 3 e 6, com autorizações e evidências discriminadas acima. Última implementação: detalhes full-width, tipografia responsiva e CTA Fale comigo/Get in touch para #contato. Fases 4, 5, 7 e 8 permanecem pendentes/não autorizadas. Ordem restante prevista: 4 → 5 → 7 → 8. Desenvolvimento encerrado por hoje; não iniciar automaticamente ao abrir o projeto.

O estado consolidado registra 12 arquivos-fonte com alterações locais da segunda evolução (7 modificados e 5 novos, conforme status Git de leitura), separa os arquivos efetivos da última fase, lista stack/decisões e associa os testes a seus relatórios/capturas. Documentação permanece local e ignorada por `*.md`; não foi criada exceção ou removido arquivo do índice. Não houve commit, push, deploy ou mudança de branch/remoto nesta sessão.

Não há defeito funcional pendente reproduzido na última matriz executada; permanecem limites de cobertura e entregas de design ainda não feitas. Não foram validados nesta segunda evolução Safari/Firefox/iOS/dispositivo físico, leitor de tela manual, contraste/heap/CWV integrais ou nova cópia real de e-mail; a fixture específica do novo ProjectDetails em Strict Mode também não foi executada. O custo histórico do motor permanece documentado. Formação ainda usa cards e artes de projetos ainda têm a movimentação anterior: são tarefas futuras, não fases concluídas por inferência.

Na retomada: ler AGENTS/brief/estado/plano, preservar a árvore de trabalho e revisar as capturas da Fase 6. Apresentar proposta concreta de transições/arquivos da Fase 4 e obter autorização antes de implementar. Direção da timeline acadêmica já aprovada não autoriza a Fase 7 nem novos enunciados sem verificação. Aceite visual final, fases restantes, mudanças substanciais de escopo/tecnologias, credenciais pendentes e qualquer operação Git/publicação continuam dependentes da decisão do proprietário.

## 14. Execução da Fase 4 — transições, 18/10/2026

**Autorização:** “sim” à proposta da Fase 4 com quatro passagens, composição/amplitudes, arquivos e testes. Escopo restrito a esta fase, sem novas dependências, pinning ou publicação. O encerramento da seção 13 descreve o momento anterior.

- [x] Criar `SectionConnector.tsx`, reutilizado em sete metades locais, e `motion/transitionScenes.ts`, integrado ao módulo opcional existente.
- [x] Coordenar quatro cenas com scrub reversível, medidas nas seções reais e offset do header já calculado pelo site. Nenhuma altura/spacer adicional.
- [x] Hero com wrapper externo até escala 0,72 e deslocamento −40/+48 px; retrato até +24 px/escala 1,04 para pose natural. Mobile/touch/tela baixa: até 8 px e sem grande transferência lateral.
- [x] Conduzir Sobre → Projetos por conector; ligar visualmente Projetos → eixo de Experiência com destaque do marcador e deslocamento curto dos grupos no desktop.
- [x] Estabilizar wrapper do grafo de Contato e produzir um único acento finito de 1,2 s no nó final. Voltar, mudar mídia ou idioma não repete o sinal; aba oculta pausa o acento e saída da região o conclui.
- [x] Preservar geometria/cursor/intro do Hero, foto, textos PT/EN, artes, credenciais, CTAs, links e cópia de contato. Não antecipar cenas específicas da Fase 5 ou timeline da Fase 7.
- [x] Alinhar extremidades dos pares na fronteira das seções e manter SVG decorativo fora da leitura, sem receber eventos ou foco.
- [x] Corrigir interferência entre refresh e âncora mobile: durante navegação nativa, adiar medições até scrollend, com fallback de 1800 ms e teardown do timer/listeners.
- [x] Executar lint/typecheck/build, matriz final e checagem complementar após a correção; documentar custo/limites.

**Arquivos:** novos `src/components/SectionConnector.tsx`, `src/motion/transitionScenes.ts`; `src/components/PortfolioMotion.tsx`, `src/sections/Hero.tsx`, `About.tsx`, `Projects.tsx`, `Experience.tsx`, `Contact.tsx`, `src/styles/globals.css` e os três documentos locais. Manifesto/lockfile, dados, dicionários, foto e configuração de deploy não foram alterados.

**Validação final:** lint/typecheck/build e diff passaram. Chrome headless: 48 combinações de seis larguras (320/375/768/1024/1440/1920), dois idiomas, movimento normal/reduzido e details fechados/abertos, sem overflow/pin; extremidades alinhadas até 1 px. Quatro cenas amostradas em 0/50/100/50/0% com reversão e capturas, wrapper do Hero muda sem repetir introdução. Baseline integral de textos das seções/projetos, artes e foto preservado em PT/EN.

Quatorze trajetos de âncoras em 375/1440 e CTA mantiveram hash/foco e destino visível. A checagem inicial só impunha limite inferior da posição e não detectou cancelamento da rolagem mobile; o teste foi fortalecido para também exigir a proximidade da seção à viewport. A falha foi reproduzida e corrigida antes da matriz final. Checagem complementar das sete âncoras mobile em normal/reduzido e histórico voltar/avançar passou; posição das seções abaixo do header (cerca de 105 px; Contato cerca de 166 px pela altura final). Nó de Contato observado com raio intermediário ~6,11, retorno a 3 e ausência de novo pulso ao subir/descer.

Home/End/PageUp/PageDown tiveram direção/posição verificadas; troca de idioma durante expansão, 200% de texto em 320 px, 1024×450 e emulação touch passaram. Cópia simulada recebeu somente o endereço público e apresentou feedback traduzido; dois links profissionais preservados. Preferência reduzida inicial sem download e dinâmica sem estilos residuais; chunk bloqueado conservou oito seções/deep link/details nativo. Strict Mode do módulo de movimento em fixture da página: triggers 17→33→17, ticker 1→1 e atributos restaurados. Não é fixture específica de ProjectDetails. Zero exceções JavaScript na matriz final. Capturas desktop/mobile examinadas; Chrome e servidores encerrados.

**Build:** 69 módulos; JS principal 271,97 kB/gzip 84,41; movimento 124,03/gzip 48,24; CSS 31,40/gzip 7,14 (Vite arredondado). Arquivos finais: `index-BtryKkze.js` 271.971 bytes, `PortfolioMotion-DRWEwv13.js` 124.036, `index-Bc3yMBBN.css` 31.406. Acréscimo total JS gzip ~1,22 kB e CSS gzip ~0,27 kB sobre Fase 6. Não é medição de CWV nem elimina o custo histórico do motor. EPERM no sandbox exigiu execução aprovada de build/Chrome fora dele; sem instalação ou ajuste de configuração.

**Evidências:** `.cache/evolution-transitions-phase4/results.json`, `followup.json`, roteiros e capturas. **Limites:** Chrome emulado, sem Safari/Firefox/iOS/físico, leitor de tela manual, contraste/heap integrais, benchmark de frames ou CWV de campo; sem nova cópia real de clipboard. Histórico interno testado, BFCache não comprovado. Fase 8 permanece pendente; aceite visual com o proprietário.

**Próxima:** Fase 5, proposta das três cenas específicas de projetos antes de implementar; não autorizada. Fases 7/8 também não autorizadas. Nenhum commit, push, alteração de branch/remoto ou deploy. Árvore inicialmente limpa sobre `237757a`; nove arquivos-fonte alterados/criados nesta entrega, documentos Markdown e evidências locais/ignorados.

## 15. Execução da Fase 5 — artes específicas, 18/10/2026

**Autorização:** “sim” à proposta detalhada apresentada após “continue”: três cenas, arquivos, testes, responsividade e fallback. Escopo restrito à Fase 5. Preservadas as alterações locais da Fase 4, sem commit/push/deploy. Nenhuma dependência instalada.

- [x] TEDAS: destacar documento, desenhar conexões normalizadas, conduzir sinais por ramificações fixas e ativar células abstratas. Mobile conserva um sinal principal e as duas saídas. Nenhum prontuário, paciente, métrica ou resultado clínico.
- [x] MIND: amplitudes iniciais fixas e interpoladas por scroll, conexão com poucos blocos abstratos de representações; no mobile, barras alternadas e detalhes secundários omitidos. Sem captura/visualização de áudio, números, eixos, escores ou diagnóstico.
- [x] C: duas entradas conduzem sinais até o somatório, seguidas de conexão e destaque da saída AND. Sem modificar pesos, treinar modelo ou representar backpropagation/MLP/CNN concluídos.
- [x] Implementar `createProjectScenes` com três timelines, seletores locais, pontos explícitos e restauração idempotente de style/transform/origem SVG/cx/cy.
- [x] Usar `.project-card__main` existente como percurso real (top 85% → bottom 25% do viewport útil), com refresh agrupado já existente após idioma/layout. Sem esticar arte/card, sticky, pin ou alturas artificiais.
- [x] Remover movimento genérico de projetos desktop/mobile ao integrar as novas cenas; preservar cenas do Hero, transições, âncoras e Contato da Fase 4.
- [x] Manter HTML/SVG estáticos completos quando reduzido ou com chunk indisponível. Nenhum loop automático, ticker próprio, estado React por frame ou plugin adicional.
- [x] Executar matriz final, frames/capturas, preferências/fallback, cleanup, lint/typecheck/build e registrar limites.

**Arquivos efetivos:** `src/components/ProjectArtwork.tsx`, `src/components/PortfolioMotion.tsx`, novo `src/motion/projectScenes.ts`, `src/styles/globals.css`; `IMPLEMENTAR.md`, este planejamento e `ESTADO_ATUAL.md`. Sem mudança em ProjectCard, dados, traduções, foto, manifesto/lockfile ou publicação.

**Resultados finais:** Chrome headless com 48 combinações: seis larguras 320/375/768/1024/1440/1920 × PT/EN × movimento normal/reduzido × details abertos/fechados. Zero overflow/pin; arte/linha principal estáveis dentro de 1 px; summaries >=44 px. Baseline textual integral das seções/projetos e foto preservado em PT/EN. Os acréscimos de SVG são deliberados e não foram comparados como se precisassem continuar idênticos.

Três cenas em 375 e 1440, amostradas em 0/25/50/75/100/50/0%, com progressão/reversão, waveform determinística e sinais sobre segmentos dos caminhos. Capturas finais de cada projeto nas duas larguras revisadas. Seis séries de 37 frames (222 no total): p95 dos intervalos entre frames de 16,7–16,8 ms na execução final local. É amostra de laboratório, não benchmark abrangente ou garantia de fps/CWV.

Três detalhes abertos via Enter e idioma trocado durante expansão estabilizaram sem estado residual. Texto 200% em 320, tela baixa 1024×450 e emulação touch passaram. Quatorze âncoras em EN/375/1440, com todos os detalhes abertos, mantiveram hash/foco/destino visível após scrollend e estabilidade. End durante o trajeto levou ao fim da página sem retorno automático. Preferência reduzida inicial não solicitou o chunk; troca dinâmica restaurou atributos SVG. Chunk bloqueado preservou oito seções, deep link e details nativo.

Strict Mode do módulo de movimento na fixture completa: triggers 17→33→17, ticker 1→1, atributos dos novos SVGs restaurados. Não é fixture de ProjectDetails isolado. Zero exceções JavaScript na matriz final. Chrome e servidores temporários encerrados.

**Ajustes do roteiro:** GSAP escreve transformações das barras no atributo SVG; leitura apenas do estilo CSS era insuficiente e foi corrigida. Capturas mobile passaram a enquadrar a arte dentro da viewport para evitar recortes enganosos. A espera fixa de 1 s em navegação longa lia a rolagem ainda em curso; medição auxiliar observou conclusão correta em ~1,4 s. O roteiro final aguarda scrollend e estabilidade. Um ajuste experimental de alinhamento foi retirado por ser desnecessário; nenhum código novo de navegação permaneceu nesta fase. `navigation.json` é evidência auxiliar da investigação, não validação substituta da build final.

**Build final:** 70 módulos; JS principal 274,24 kB/gzip 84,78; movimento 126,26/gzip 48,85; CSS 31,90/gzip 7,22 (Vite arredondado). Arquivos `index-BWRLVzXN.js` (274.247 bytes), `PortfolioMotion-DVeMPoXV.js` (126.263) e `index-CnFqM5EN.css` (31.908). Incremento JS gzip ~0,98 kB e CSS gzip ~0,08 kB sobre Fase 4. Lint/typecheck/build/diff passaram. Vite/Chrome exigiram execução aprovada fora do sandbox após EPERM, sem instalação ou configuração nova.

**Evidências:** `.cache/evolution-projects-phase5/results.json`, roteiros e capturas `clinical`, `speech`, `network` em 375/1440. **Limites:** Chrome emulado; sem nova cobertura Safari/Firefox/iOS/físico, leitor de tela manual, contraste/heap integrais, BFCache ou clipboard real; métricas de laboratório não certificam produção. Fase 8 continua pendente, assim como aceite visual geral.

**Próxima fase:** 7, timeline acadêmica, com proposta de desenho/texto PT/EN e autorização própria antes de executar. Fases 7 e 8 não autorizadas. Nenhum commit, push, mudança de branch/remoto ou deploy.

## 16. Execução da Fase 7 — timeline acadêmica, 18/10/2026

**Autorização:** “sim” à proposta de uma coluna/eixo lateral, UECE em destaque e SENAI conciso, com apresentação dos textos exatos PT/EN, quatro arquivos e testes. Os complementos acadêmicos candidatos ficaram expressamente fora da proposta aprovada; nenhum enunciado foi ampliado. Escopo restrito à Fase 7.

- [x] Substituir somente o grid acadêmico por lista ordenada de dois registros, conservando ids, h3, períodos, status, localização e resumos. Reutilizar Card, sem acoplar TimelineItem profissional ou criar novo componente.
- [x] Dar destaque à graduação por título maior, largura e borda superior/vermelho discreto; SENAI abaixo e mais conciso. Ordem de destaque UECE→SENAI, sem escala temporal proporcional e preservando a sobreposição dos períodos.
- [x] Implementar trilho lateral e dois marcadores decorativos; preenchimento representa leitura, sem papel/valores de progressbar ou porcentagem acadêmica.
- [x] Criar `createEducationScene`, com timeline do primeiro marcador em 75% ao último em 45% do viewport útil e duas entradas locais. Medições usam offset sem transformação dos marcadores e altura útil abaixo do header, apenas no refresh.
- [x] Usar scaleY no preenchimento, escala/opacidade nos marcadores e y até 16 px desktop/8 px mobile nos cards. Texto permanece com opacidade 1 em qualquer progresso.
- [x] Integrar ao contexto/cleanup existentes, com destruição idempotente e atributos originais restaurados; sem ticker próprio, nova dependência, pinning/sticky ou altura artificial.
- [x] Preservar timeline estática completa em reduced-motion/chunk indisponível; executar verificações e registrar cobertura.

**Arquivos:** `src/sections/Education.tsx`, `src/styles/globals.css`, novo `src/motion/educationScene.ts`, `src/components/PortfolioMotion.tsx` e três documentos locais. Dados/tipos/traduções/foto/manifesto/lockfile e publicação não foram alterados.

**Validação final:** lint/typecheck/build/diff passaram. Chrome headless com 48 combinações de seis larguras (320/375/768/1024/1440/1920) × PT/EN × normal/reduzido × details fechados/abertos, sem overflow/pin. Dois cards em uma coluna, alinhados; UECE sempre com título maior e largura >= SENAI. Centros dos marcadores coincidem com o trilho dentro de 0,6 px. Baseline textual integral das seções preservado em ambos os idiomas; ordem UECE/SENAI, períodos 2021–2027/2019–2022 e status de graduação prevista conferidos. Lista/h2/h3 e decorações ocultas à acessibilidade verificadas localmente; sem progressbar acadêmico.

Quatro percursos PT/EN × 375/1440 com sete poses 0/25/50/75/100/50/0% confirmaram preenchimento/reversão, marcadores ativos no final e cards com opacidade 1/y limitado a 8/16 px. Capturas finais nos dois idiomas/larguras examinadas. Texto 200% em 320, 1024×450 e emulação touch passaram. Troca de idioma durante expansão do MIND estabilizou corretamente. Quatorze trajetos de âncoras em EN/375/1440 mantiveram hash/foco/destino visível após scrollend e estabilidade.

Reduced-motion inicial sem download do módulo, dinâmico com estilos da timeline restaurados, e chunk bloqueado com oito seções/timeline completa passaram. Strict Mode do módulo de movimento em fixture completa: triggers 20→39→20, ticker 1→1 e atributos da timeline restaurados. Não é fixture isolada de Education/ProjectDetails. Zero exceções JavaScript finais. Chrome e servidores temporários encerrados.

**Build final:** 71 módulos; JS principal 274,81 kB/gzip 84,90; movimento 127,69/gzip 49,16; CSS 33,00/gzip 7,40 (Vite arredondado). Arquivos `index-BkDiZmYn.js` 274.813 bytes, `PortfolioMotion-CHjK_jEU.js` 127.695 e `index-Cc5SMP2d.css` 33.003. Incremento JS gzip ~0,43 kB e CSS gzip ~0,18 kB sobre Fase 5, sem pacote novo. Vite/Chrome exigiram execução aprovada fora do sandbox após EPERM de processos nativos, sem alterar configuração.

**Evidências:** `.cache/evolution-education-phase7/results.json`, roteiro e quatro capturas `education-pt-BR/en-375/1440.png`. **Limites:** Chrome emulado, sem nova cobertura Safari/Firefox/iOS/físico, leitor de tela manual, contraste/heap integrais, clipboard real, BFCache ou CWV de campo. Testes desta entrega não concluem a Fase 8 nem formalizam aceite visual geral.

**Próxima:** proposta detalhada da Fase 8 — validação consolidada — e autorização própria antes de iniciar. Nenhum commit, push, mudança de branch/remoto ou deploy; Markdown e evidências permanecem locais/ignorados.


## 17. Execução — Fase 8, validação consolidada

**Autorização e entrega:** Fase 8 autorizada pelo “sim” à proposta detalhada; validação técnica local concluída em 18/10/2026. Nenhuma falha da aplicação foi reproduzida que exigisse correção de código nesta fase. Alterados somente README, IMPLEMENTAR, ESTADO_ATUAL e planejamento visual; roteiros/relatórios/capturas no cache ignorado. Os 13 arquivos-fonte locais das Fases 4/5/7 foram preservados. Nenhuma dependência, dado, tradução, foto, configuração Vite/Git ou publicação alterada.

**Matriz final:** Chrome 155.0.8059.80 e Edge 155.0.4283.62, 48 combinações por navegador, 96 ao todo: 320/375/768/1024/1440/1920 × PT/EN × normal/reduzido × details fechados/abertos, sobre os mesmos hashes de build. Sem overflow/pinning, controles >=44 px. Rodadas adicionais de geometria verificaram details full-width sem alongar artes, composição alternada, sete conectores alinhados e Formação em uma coluna com UECE destacada. Oito seções, textos profissionais integrais PT/EN e foto iguais ao baseline; pesquisa privada sem link inventado, Perceptron AND manual, AWS AI Practitioner e LFS158 com classificação/datas preservadas e Cloud Practitioner oculta. Metadados, favicon, URLs sociais e proteção de novas abas conferidos; disponibilidade externa não foi testada.

**Comportamento e acessibilidade:** introdução finita desktop/mobile, endpoints presos aos nós em todos os frames amostrados, sinais e cursor limitado, repouso sem mutações autônomas, idioma/breakpoint/preferência sem replay; visibilidade simulada e interrupção por scroll passaram. Quatro passagens reversíveis e pulso único de Contato; três cenas específicas em seis sequências por browser, timeline acadêmica em quatro sequências por browser. Âncoras desktop/mobile com hash/foco e fim real da rolagem, CTA Contato PT/EN, interrupção por End, hash inicial e voltar/avançar passaram. Semântica/headings/nomes acessíveis/IDs/ARIA, skip link, tabulação/foco, menu/Escape, texto 200% em 320/768/1440, touch/tela baixa e cores forçadas conferidos. Nove pares de cores computadas passaram, mínimo 4,8157:1; essa verificação de fundos sólidos não mede todos os gradientes, estados ou pixels, nem certifica WCAG integral.

**Detalhes e ciclo de vida:** Enter/Espaço, dez reversões rápidas, foco interno/retorno ao summary, idioma/resize/preferência durante expansão e WAAPI indisponível passaram. Atualização de layout agrupada: zero refresh durante abertura e um após estabilizar. Reduced-motion inicial não solicita motor; preferência dinâmica restaura atributos e bloqueio do chunk mantém oito seções, deep links e details utilizáveis. Strict Mode do módulo completo: triggers 20→39→20, ticker 1→1, atributos SVG/educação restaurados em ambos os browsers. Fixture própria de ProjectDetails: três montagens/desmontagens com abertura/fechamento pendentes, seis observers desconectados, seis AbortControllers abortados, cinco animações canceladas e nenhum resíduo de height/overflow/inert. Zero exceções JavaScript nos roteiros finais. Essas contagens não equivalem a análise completa de heap.

**Contato:** cópia REAL e repetida nos dois browsers; leitura somente depois da confirmação de escrita do e-mail público, sem consultar clipboard anterior. Concorrência, tradução durante operação, recusa e API ausente passaram; nenhum envio. O clipboard terminou com jose.waldeney.forte@gmail.com.

**Build e custo:** lint, typecheck, npm ls --depth=0, build e git diff --check aprovados. Vite: 71 módulos; index-BkDiZmYn.js 274.813 bytes (gzip estimado Vite 84,90 kB), PortfolioMotion-CHjK_jEU.js 127.695 (49,16 kB), index-Cc5SMP2d.css 33.003 (7,40 kB). Gzip padrão Node dos dois JS soma 132.851 bytes, +6.473 bytes sobre baseline de 126.378; métodos de gzip distintos não devem ser misturados. Incremento acima da referência proposta de investigação de ~5 kB foi investigado com build em memória: uma distribuição GSAP/core/CSSPlugin/Observer/ScrollTrigger, sem duplicação de módulos nem plugins extras; novas cenas e expansão/layout explicam o crescimento. Imports/carregamento condicional mantidos; não houve oportunidade comprovada de economia que justificasse refatoração especulativa. O custo histórico do motor de ~47 kB gzip, acima da antiga referência de investigação de 40 kB, continua válido. Seis artefatos finais, hashes SHA-256 e cópia exata dos dois assets públicos conferidos; nenhum MD/PDF/env/sourcemap ou padrão comum de segredo nas buscas pontuais. A busca não garante detecção universal.

**Desempenho local:** seis visitas por browser, três normais e três reduzidas, 375×1000, CPU 4×, latência 40 ms, download 200.000 B/s, upload 93.750 B/s, cache desabilitado e limpo a cada visita; janela de observação de 1,8 s após conteúdo montado. 

- Chrome: último LCP observado 784–968 ms; CLS 0–0; tarefas longas por visita 0–5, maior tarefa 359 ms. Movimento normal: soma das tarefas longas 650–908 ms por visita; preferência reduzida sem download do chunk.
- Edge: último LCP observado 784–940 ms; CLS 0–0; tarefas longas por visita 1–4, maior tarefa 325 ms. Movimento normal: soma das tarefas longas 665–722 ms por visita; preferência reduzida sem download do chunk.

As seis sequências dos projetos registraram 222 frames por browser, p95 de intervalos locais de 16.7–16.8 ms. São amostras de laboratório, não benchmark abrangente, INP, CWV de campo ou garantia de fps. As tarefas longas com movimento sob CPU limitada são custo observado; não foram ocultadas por um limite arbitrário de aprovação. Na primeira inicialização do Edge houve timeout CDP antes de carregar a aplicação; roteiro passou de 15 para 45 s e a execução completa posterior foi usada. Vite/Chrome/Edge exigiram execução aprovada fora do sandbox após EPERM nativo; sem instalação ou mudança da configuração do produto.

**Evidências:** .cache/evolution-consolidated-phase8/{chrome,edge}/consolidated.json, subpastas por cenário, summary.json, artifacts.json e bundle.json. Capturas de Hero, projetos, Formação, Contato e texto ampliado revisadas. Roteiro principal check.mjs (--edge para Edge), mais complemento Chrome --only=navigation; scripts reutilizados de fases anteriores permanecem locais. Navegadores e servidores temporários encerrados.

**Pendências reais:** aceite visual final do proprietário; leitor de tela manual, Firefox/Safari/iOS e dispositivos físicos; zoom nativo do browser, auditoria integral de contraste/heap, BFCache e métricas em hospedagem real não cobertos. Conteúdo continua CSR e precisa do JavaScript principal; o fallback testado é o do módulo opcional. Complementos acadêmicos, URLs de credenciais/repositório/currículo revisado permanecem opcionais e exigem confirmação própria. Hospedagem/URL, commit, push e deploy não autorizados. Não há próxima fase técnica deste roteiro iniciada automaticamente; próximo passo é avaliação visual e decisão explícita sobre eventual publicação.

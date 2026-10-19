# Terceira evolução visual — identidade gráfica, animações e refinamento

Data: 18/10/2026. Documento de planejamento e acompanhamento; execução somente por autorização específica.

**Atualização de execução:** após a entrega documental e a proposta de oito arquivos/testes, o proprietário autorizou somente a Fase 2 por “sim”. Fase 2 concluída tecnicamente, com evidências em H.4 e aceite visual pendente; Fase 3 concluída tecnicamente, sem hover (H.5); Fases 4–6 não autorizadas. A restrição documental descrita a seguir registra o pedido inicial, anterior a essa autorização. Resultados da Fase 2 em H.4 e da Fase 3 em H.5.

**Autorização da entrega documental inicial (histórico):** analisar a aplicação, criar este documento e registrar sua existência em `ESTADO_ATUAL.md`. Na entrega documental inicial, somente esses dois documentos foram escritos. Código, CSS, SVGs, dados, traduções, dependências, configuração, build e deploy não são alvos desta entrega. A autorização de cada fase futura será independente.

`AGENTS.md` rege o processo; `PORTFOLIO_BRIEF.md` rege o conteúdo. O pedido inicial confirma a retirada das legendas do Hero e a separação do texto de Contato, mas não autoriza executá-las agora. A decisão anterior de manter Projetos + Fale comigo no Hero e e-mail sem mailto continua válida. Não há conflito pendente sobre essas decisões já explícitas. `IMPLEMENTAR.md` permaneceu com o encerramento anterior na solicitação documental inicial; antes do primeiro conjunto de código autorizado, registrar nele o escopo aprovado e, depois, os resultados, conforme AGENTS. Não reinterpretar as aprovações das duas evoluções anteriores como autorização desta.

## A. Auditoria da implementação atual

### A.1 Fontes, estado e limites da auditoria

Consultados integralmente `AGENTS.md` e `PORTFOLIO_BRIEF.md`; consultados o estado vigente, checklist/encerramento em `IMPLEMENTAR.md`, diagnóstico e histórico em `MELHORIAS_PORTFOLIO.md` e a execução consolidada em `PLANEJAMENTO_EVOLUCAO_VISUAL.md`, seção 17. Inspecionados componentes, geometria, SVGs, estilos, dicionários, tipos, manifesto e módulos de movimento descritos abaixo. As duas evoluções estão concluídas tecnicamente no escopo local documentado; aceite visual geral ainda não registrado.

Esta auditoria distingue:

- **Código confirmado:** leitura dos arquivos atuais, inclusive CSS e funções GSAP; não é uma nova prova em navegador.
- **Capturas anteriores examinadas:** `.cache/evolution-consolidated-phase8/chrome/details/hero-1440.png`, `chrome/projects/speech-375.png` e `edge/final/contato-pt-BR-1440.png`. Mostram a build da Fase 8 anterior; não foram produzidas agora.
- **Resultados históricos:** 96 layouts Chrome/Edge, conteúdo PT/EN, clipboard, Strict Mode, build e desempenho da segunda evolução. Não foram reexecutados nesta solicitação.
- **Proposta:** dimensões, coordenadas, tempos, tokens e limites deste plano; precisam de aprovação e validação durante a implementação.

Na auditoria documental inicial não houve nova execução de build/lint, servidor, navegador, clipboard ou benchmark. Não se declara teste visual interativo atual. A árvore Git já continha nove fontes modificadas e quatro novas, provenientes das fases anteriores; preservar essas alterações. Markdown segue local e ignorado por `*.md`, fora de `src/` e `public/`; este plano não será disponibilizado em clones obtidos somente do remoto.

A referência [Supertape](https://www.thesupertape.com/) foi consultada pela extração textual pública. Sua organização encadeia problema, processo e convite final; a extração não comprova animações, tempos, tecnologia, parallax ou pinning. Ritmo, continuidade e protagonismo gráfico neste plano são diretrizes de criação para o portfólio, inspiradas pelo pedido do proprietário, sem copiar assets, textos ou identidade da referência.

### A.2 Stack e pontos de reutilização

| Área | Implementação real | Decisão proposta |
| --- | --- | --- |
| Interface | React/React DOM 19.3.1, TypeScript 6.0.3; Strict Mode e LanguageProvider | Preservar composição e contexto |
| Build/estilo | Vite 8.3.4, plugin React 6.1.2, Tailwind/plugin 4.3.3; CSS com tokens | Sem upgrade/configuração nova |
| Movimento | GSAP 3.15.0, @gsap/react 2.1.2, ScrollTrigger do GSAP; versões locais conferidas | Reutilizar; nenhuma biblioteca adicional |
| Enhancement | `App.tsx`: lazy/Suspense e fallback nulo; reduced inicial evita download de PortfolioMotion | Preservar conteúdo estático e carregamento condicional |
| Ciclo de vida | `PortfolioMotion.tsx`: useGSAP, matchMedia, AbortController, snapshots de atributos, visibilidade/foco | Evoluir apenas contratos necessários às cenas |
| Layout | `layoutRefresh.ts`: transações de expansão, refresh agrupado; adiamento durante âncora nativa em PortfolioMotion | Preservar para evitar interrupção da navegação mobile |
| Geometria | `data/heroGraph.ts`, `graphGeometry.ts`, `heroScene.ts` | Preservar IDs e cálculo único de posições/arestas/sinais |
| Continuidade | `SectionConnector.tsx`, `transitionScenes.ts`; sete trechos em quatro passagens | Reutilizar como emendas entre backgrounds |
| Projetos | ProjectCard/ProjectArtwork/ProjectDetails e `projectScenes.ts` | Preservar composição alternada e rodapé full-width |
| Formação | `Education.tsx`, `educationScene.ts`, Card e lista vertical | Preservar timeline, textos, status e comportamento |
| Ausentes | Lenis, Motion for React, Canvas/WebGL e motor de partículas | Não introduzir |

As recomendações de escopo/reversão acompanham os contratos existentes e a documentação de [useGSAP/React](https://gsap.com/resources/React/) e [gsap.matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/). Não é necessário criar outro provider, ticker, engine ou framework de animação.

### A.3 Diagnóstico confirmado e oportunidade visual

| Elemento | Estado confirmado | Consequência e proposta |
| --- | --- | --- |
| Hero | ViewBox desktop 480×360, 12 nós em 3–4–3–2; conexão completa entre camadas adjacentes: 30 arestas. Mobile 480×280, oito nós em 3–3–2 e 15 arestas | A silhueta já é multicamadas; conexões completas e irregularidade nas colunas tornam sua leitura menos imediata. Clarear alinhamento e hierarquia sem reconstruir o sistema |
| Tamanho do Hero | Grid desktop 1,1fr/1fr, gap até 4rem; visual e SVG limitados a 32rem. Nome ocupa faixa própria | Aumentar apenas scale não recupera o espaço do grid. Rever proporção, limite e área útil interna conjuntamente |
| Legendas | `<g data-graph-layer="labels">`, `profile.labels`, tipo GraphLayerLabels e `copy.hero.graphLayers` em PT/EN | Remover renderização, contrato e chaves sem consumidores; manter IDs técnicos das camadas |
| Hierarquia das arestas | Duas rotas destacadas; secundárias com opacidade 0,65 e destaque 0,8. heroScene também escreve esses valores durante a introdução | Mudar somente CSS não basta. Usar a mesma hierarquia no estado estático, introdução, cursor e restauração |
| Animação Hero | Introdução de 4 s desktop/2,4 s mobile, morph de nós, sinais, ativação por proximidade; cursor até quatro unidades SVG, repouso sem loop | Refinar e retimar; manter geometria compartilhada e interrupção segura por âncora/scroll |
| TEDAS | Documento, ramificações, círculo intermediário e células; sinais e opacidades vinculados a scroll | A estrutura é reutilizável; destacar a etapa intermediária e conduzir uma sequência temporal com retorno ao repouso |
| MIND | 27 barras com alturas sintéticas fixas; scaleY vai de ~0,68–0,88 a 1 por progresso de scroll; mobile oculta barras pares | Há movimento implementado, mas não oscilação temporal. Ao parar de rolar, a ilustração fica parada; criar uma curta frase visual de áudio |
| Perceptron | Entradas, Σ, AND e sinais; sequência vinculada ao scroll | Preservar SVG e significado, tornando evidentes chegada, soma e ativação em tempo real |
| Contato | NeuralGraph padrão 12 nós/16 arestas; largura 34rem, posição à direita, recorte e rotação; entrada de wrapper e pulso único | A captura mantém a aparência de diagrama isolado. Substituir sua composição por campo aberto distribuído, sem substituir ações |
| Texto Contato | Uma string/um parágrafo com max-width 52ch, fonte 1rem. Na captura desktop, “IA e” e “dados?” ficam em linhas diferentes | Separar pergunta e convite semanticamente; proteger a unidade curta só quando houver largura |
| Background | Gradientes locais e conectores; não há sistema de campos gráficos por seção | Criar poucas variantes estáticas, integradas às bordas/padding existentes |

O comentário de NeuralGraph que diz “reserved for the next phase” para sinais é histórico: `heroScene.ts` já os anima. Não concluir ausência de movimento pelo comentário ou por uma captura estática.

### A.4 Riscos e baseline a preservar

1. **Dois controladores do mesmo alvo:** remover o scrub antigo dos atributos de cada projeto ao introduzir sua sequência temporal. Scroll pode controlar um wrapper externo; jamais também scaleY/opacity dos elementos internos.
2. **Foco concluindo todas as cenas:** o `watch` atual e o listener de foco trabalham por seção. Reutilizá-los sem adaptar a granularidade faria foco em um card concluir todas as animações de Projetos. Novas cenas devem usar o card correspondente como unidade.
3. **Labels e recorte:** há consumidores em Hero, NeuralGraph, dados e dicionários; não basta ocultar texto em CSS. Novo viewBox exige revisar cursor, margens dos halos e pose inicial.
4. **Reposicionamento e âncoras:** manter transações/refresh adiado e a altura natural; não adicionar pin, scroll controlado ou realinhamento programático das âncoras.
5. **Leitura e custo de pintura:** SVG de baixa opacidade ainda tem custo; transformações de superfícies enormes, blur, filtros e várias camadas compostas podem agravá-lo.
6. **Responsividade:** ampliação desktop não pode cobrir CTAs ou criar altura vazia mobile; máscaras/recortes pertencem ao fundo, não ao contêiner de foco.
7. **Conteúdo:** nenhuma alegação clínica/resultado, dado sensível, treinamento do Perceptron ou nova credencial. Apenas a reorganização solicitada do texto do Contato poderá mudar seu contrato textual.

Baseline histórico da Fase 8: principal 274.813 bytes, movimento 127.695, CSS 33.003; gzip padrão Node dos JS 132.851 bytes. O incremento anterior de 6.473 bytes sobre o baseline da segunda evolução e o custo histórico do motor (~47 kB gzip) continuam registrados. Sob CPU 4× houve tarefas longas de até 359 ms Chrome/325 ms Edge; frames locais próximos de 16,7–16,8 ms não anulam esse custo. Nenhum orçamento novo está aprovado por este plano.

## B. Proposta de identidade gráfica

**Direção:** redes que conduzem informação. As camadas organizam a abertura; documentos, fala e inferência dão significado aos projetos; conexões periféricas conduzem ao encontro final. Assimetria pequena, espaços amplos e contrastes graduados, mantendo preto/grafite/vermelho e a tipografia existentes.

Valores abaixo são pontos iniciais de projeto, sujeitos a comparação visual na mesma viewport. São opacidades do elemento; não multiplicar tokens de opacidade em ancestral e filho inadvertidamente.

| Papel | Espessura aparente alvo | Nós/contraste | Uso |
| --- | --- | --- | --- |
| Campo de fundo | 0,65–1 px | Nós de 2–4 px; grafite a 0,12–0,24; vermelho a 0,08–0,18 | Margens e intervalos sem texto |
| Estrutura secundária | 0,8–1 px | Grafite a 0,18–0,28 | Conectividade sem competir com rotas |
| Estrutura principal | 1,1–1,4 px | Grafite claro a 0,45–0,60 | Direção e silhueta |
| Caminho ativo | 1,5–1,8 px | Vermelho a 0,70–0,90; um ou dois caminhos | Processamento e conexão |
| Neurônios Hero | Raio 5–7 unidades SVG, borda 1–1,5 px | Maioria grafite; destaques temporários, até dois simultâneos | Reconhecimento de camadas |
| Sinais/ativação | Raio 2–2,5; halo até +6–9 unidades | Ponto claro/vermelho; ativação 0,3–0,5 s | Recepção do sinal |

Espessura aparente será verificada após escala do SVG; avaliar `vector-effect="non-scaling-stroke"` nos traços necessários, sem combinar com outro mecanismo que duplique compensação. Nós podem crescer com a composição. Nenhum token gráfico muda a cor dos textos, badges ou controles já acessíveis.

**Tokens mínimos propostos em globals.css:** espessuras de fundo/estrutura/rota, opacidades por papel e duração de ativação. Reutilizar a paleta existente e `--ease-interface`; não criar catálogo extenso de tokens ou DSL de animação. Parâmetros temporais particulares ficam perto de cada cena TypeScript.

Regras comuns:

- Conexões contínuas ou curvas suaves, sem feixes densos atrás de parágrafos. Gradientes amplos e estáticos com poucos stops; sem glow forte, neon, blur animado ou sombra pulsante em cada nó.
- Profundidade por escala, posição e contraste: campo ao fundo, desenho principal no meio, sinal em primeiro plano. Não empilhar três layers de tela inteira.
- Movimento linear em trânsito; `sine.inOut` na reorganização/retorno e `power2.out` em entrada breve. Sem bounce/elástico.
- Sequências principais de 2,4–4 s; ativações de 0,3–0,5 s; retorno de 0,4–0,6 s. Sem estrobos ou alternância abrupta de alto contraste.
- Após a sequência, repouso. Hover fino pode produzir uma resposta curta; touch recebe a experiência completa na entrada, sem depender de hover.
- Sem loop ambiente contínuo no padrão recomendado. O pedido permite avaliar ambiente; a alternativa finita preserva a decisão anterior sem botão de pausa e limita CPU. Uma política de loop exigiria aprovação própria, controle de pausa e nova avaliação de acessibilidade/custo.

## C. Proposta detalhada do Hero

### C.1 Composição e dimensões

Preservar a faixa do nome, título profissional, headline, descrição e CTAs. Ajustar apenas a segunda linha desktop: experimentar proporção **0,95fr/1,15fr**, mantendo espaço mínimo de leitura na esquerda e gap fluido de 2–4rem. O visual passa de limite 32rem para **até 40rem**, limitado pela coluna disponível. Não usar `scale(1.25)` como solução de layout.

Propor **viewBox 480×320**, sem banda de legendas. Quando o limite atual de 512 px estiver efetivamente atingido, o novo alvo de aproximadamente 600–640 px representa +17–25% em largura do SVG. A área ocupada pelos nós também cresce com a redistribuição interna. Isso é previsão de projeto, não medição atual nem promessa de +25% em todas as telas.

Antes/depois na mesma viewport deve registrar largura/altura do SVG, bounding box dos nós, dimensões da coluna textual, quebras da headline e altura total do Hero. Meta visual: presença ~15–30% maior sem reduzir fonte, sobrepor texto ou aumentar artificialmente o percurso. Se 40rem desequilibrar 1024–1200 px, reduzir nesse intervalo; a legibilidade prevalece sobre o percentual.

### C.2 Geometria inicial proposta

Manter IDs desktop 3–4–3–2, 30 conexões adjacentes e funções puras de geometria. Coordenadas centrais abaixo, com irregularidades de até ±4 unidades em x e ±6 em y; validar halos dentro do viewBox:

| Camada técnica, sem texto visível | Centro x | Centros y propostos |
| --- | --- | --- |
| I1/I2/I3 | 48 | 84 / 160 / 236 |
| H1a/H1b/H1c/H1d | 170 | 52 / 124 / 196 / 268 |
| H2a/H2b/H2c | 310 | 84 / 160 / 236 |
| O1/O2 | 432 | 116 / 204 |

Pose inicial já mantém agrupamentos distinguíveis e pequenas dispersões de 12–24 unidades; a introdução organiza uma estrutura existente, sem começar como novelo. A pose final estabiliza colunas. Não simular arquitetura real de nenhum projeto.

Rotas candidatas separadas: **I1→H1a→H2a→O1** e **I3→H1d→H2c→O2**. Dar maior importância a poucas ligações neutras próximas da direção horizontal; demais arestas permanecem discretas. Não é necessário apagar topologia para reduzir cruzamentos percebidos. Arestas que se cruzam não recebem nó na interseção.

Alterar o modelo de importância das arestas apenas o suficiente para distinguir secundária/principal/rota, por classificação simples e tipada. A mesma fonte alimenta CSS, render da introdução e restauração; evitar três tabelas divergentes. Os dois sinais percorrem as coordenadas correntes, inclusive durante morph/cursor.

### C.3 Animação e integração

| Tempo desktop proposto | Composição |
| --- | --- |
| 0–0,6 s | Revelar estrutura e nós por camadas; conteúdo permanece disponível |
| 0,6–1,6 s | Reorganizar para colunas mais claras, com trajetórias curtas |
| 1,6–2,5 s | Primeiro sinal da esquerda à direita, ativando nós na chegada |
| 2,5–3,4 s | Segundo caminho, sem iluminar todas as arestas |
| 3,4–4 s | Dissipar halo/sinal, manter rede e dois trajetos identificáveis em repouso |

Preservar histórico de introdução concluída, pausa da aba oculta, conclusão ao navegar/rolar e resposta ao cursor de até quatro unidades SVG no desktop fino. Rever centro/escala do mapeamento após trocar viewBox; sem nova atualização de estado React por frame.

A passagem Hero→Sobre continua em wrapper próprio. Sua escala atual de 1→0,72 pode diminuir demais o novo protagonismo: comparar alvo **1→0,86**, x até −24 px/y até +24 px, sob aprovação da Fase 2. No mobile, conservar apenas deslocamento mínimo já previsto, sem afastar o grafo do fundo. Manter conector, foto e scroll nativo.

### C.4 Responsividade e acessibilidade

- A partir de 64rem, perfil desktop; não alterar o breakpoint próprio de 75rem da Navbar. Perfil elaborado continua exigindo altura >=40rem e hover/ponteiro fino.
- Em 768–1023 px, usar perfil simplificado com área limitada e posição compatível com a composição existente; em 320/375, preservar fundo discreto e recorte, sem impor 600 px ou altura extra. Testar se o recorte mantém início e saída perceptíveis sem atravessar CTAs.
- Mobile: conservar oito nós/duas rotas estruturais, animar um caminho em ~2,4 s; sem cursor e sem parallax. Tela baixa recebe a versão curta mesmo com largura desktop.
- Reduced-motion e módulo indisponível: pose final completa, caminhos distinguíveis, nenhum sinal congelado pela metade e nenhuma legenda.
- O desenho continua decorativo e `aria-hidden`, pois não acrescenta informação profissional. Não adicionar aria-label/title dentro de um ancestral oculto e chamá-lo de descrição acessível. Se for aprovado tratá-lo como conteúdo informativo, propor descrição breve PT/EN fora do subtree oculto, sem narrar rótulos acadêmicos desnecessários; não é requisito desta versão.

### C.5 Remoção completa das legendas e arquivos

Remover o grupo SVG e estilos sem consumidores; retirar `labels` de HeroGraphProfile, GraphLayerLabels e a prop obrigatória de NeuralGraph; remover `hero.graphLayers` de **ambos** os dicionários após busca de usos. Preservar GraphLayerId e metadados técnicos usados pela geometria. `Dictionary` deriva do PT: conferir EN e demais chaves sem mexer no conteúdo profissional.

Arquivos previstos na Fase 2: `src/data/heroGraph.ts`, `src/components/NeuralGraph.tsx`, `src/sections/Hero.tsx`, `src/styles/globals.css`, `src/motion/heroScene.ts`, `src/motion/transitionScenes.ts`, `src/i18n/pt.ts`, `src/i18n/en.ts`. `graphGeometry.ts` deve ser reutilizado sem alteração; eventual mudança necessária exige apresentá-la antes. Sem mudança em App/ProjectDetails, fotografia, dados profissionais ou manifesto.

## D. Storyboard das animações dos projetos

### D.1 Contrato comum de execução

Preservar ProjectCard, alternância visual, dimensões das ilustrações e ProjectDetails full-width. Usar SVG e GSAP existentes. Trocar **apenas o controle temporal interno** de `projectScenes.ts`: o scrub atual deixa de escrever em flow/stage/signal/waveform. Cada ilustração passa a ter uma timeline finita, pausada inicialmente, acionada quando uma parcela legível da arte entra na área útil abaixo do header; referência inicial: topo da arte em 80% da altura útil e ao menos ~30% da arte visível. Calibrar para desenhos maiores que a tela sem exigir visibilidade integral.

Estados: `idle → playing ↔ suspended → resting → destroyed`. Uma execução automática por projeto durante a visita, identificada pelo ID estável; idioma, expansão, refresh e troca de breakpoint não contam como nova visita. Não usar estado React para o progresso. Preservar histórico em refs no controlador existente, compatível com Strict Mode: setup/cleanup imediato sem frame consumido não deve consumir a primeira entrada real.

Pausar tempo fora da viewport/aba oculta; retomar do ponto interrompido ao voltar. Se reduced-motion for ativado ou o perfil for reconstruído durante playback, concluir para pose estática segura e registrar consumo, sem reiniciar. Scroll rápido pode saltar uma cena sem bloquear navegação; não manter animações tocando invisíveis. Foco em controles do card deve manter a experiência utilizável e pode estabilizar **somente sua** arte, sem interromper outros cards.

Reutilizar o mecanismo de visibilidade existente, adaptando-o à unidade card/arte; não adicionar ticker permanente, listener de scroll independente por barra ou observer de layout por frame. `PortfolioMotion` passa a sincronizar as cenas temporais dos projetos junto de Hero/Contato. Cleanup cancela timeline, sinais, triggers/listeners e restaura style/transform/data-svg-origin/cx/cy e qualquer novo atributo r/opacidade que venha a controlar.

### D.2 TEDAS-CE — pipeline, aproximadamente 3,4 s

**Estado inicial:** documento e saídas visíveis em grafite; ramificações discretas, nenhum sinal ativo. Círculo intermediário existente funciona como etapa abstrata de processamento. Nenhum dado clínico, número ou checklist de resultado.

| Intervalo | Ação |
| --- | --- |
| 0–0,4 s | Documento recebe contorno vermelho discreto e suas linhas internas ganham contraste |
| 0,4–1 s | Sinal percorre documento→junção, aderente ao segmento |
| 1–1,5 s | Junção/etapa intermediária recebe ativação suave, halo curto e sem rotação decorativa gratuita |
| 1,5–2,3 s | Fluxo se ramifica; duas saídas recebem o sinal sequencialmente |
| 2,3–2,8 s | Células abstratas das saídas acendem brevemente, sugerindo estruturação |
| 2,8–3,4 s | Remover sinais/halos e restaurar contornos ao estado inicial, sem apagar o desenho |

**Final:** repouso igual ao inicial; não repetir automaticamente. **Gatilho/saída:** contrato D.1; suspender fora da viewport, retomar ao retornar. **Mobile:** um ramo/sinal por vez, ~2,6 s, conservar ambas as saídas no desenho. **Reduced/falha:** pipeline completo estático. Não significa pipeline entregue em produção; os textos de pesquisa permanecem a fonte de interpretação.

### D.3 MIND-BH — frase visual de fala, aproximadamente 3,8 s

**Estado inicial:** waveform sintética reconhecível, grade/círculos discretos, barras em escala de repouso. Manter as 27 barras existentes no desktop; mobile pode reutilizar a ocultação das pares (~14 visíveis). Nenhum áudio real, microfone, permissão, score, diagnóstico ou eixo de medição.

| Intervalo | Ação |
| --- | --- |
| 0–0,4 s | Entrada de contraste das barras e primeira variação curta, sem mover a arte toda |
| 0,4–1,3 s | Primeiro envelope de fala: grupos vizinhos crescem com defasagens de ~30–50 ms e alturas individuais |
| 1,3–1,7 s | Pausa curta: amplitudes caem suavemente, sem zerar todas as barras |
| 1,7–2,7 s | Segundo envelope com outro perfil determinístico; uma ou duas barras vermelhas enfatizam passagem |
| 2,7–3,2 s | Curta conexão aos blocos de representação já existentes, com baixa competição visual |
| 3,2–3,8 s | Barras retornam à pose de repouso e destaques se dissipam |

**Como obter o movimento:** três ou quatro bancos curtos de amplitudes sintéticas definidos no código, interpolados com scaleY e origem central; não usar `Math.random()` por frame. Referência de amplitude relativa 0,55–1,05 do traço atual, ajustada aos extremos do SVG; medir para não invadir blocos. O envelope é coordenado, mas as alturas não são iguais. Sem mudança aleatória de cor ou ritmo de equalizador musical.

**Final:** waveform visível em repouso, zero loop. **Gatilho/saída:** D.1. **Hover candidato:** após repouso, um acento de até 1,2 s em ponteiro fino, uma vez por entrada deliberada e sem fila; cooldown de ~1 s e sem duplicar timeline. É opcional e precisa de aprovação; não é necessário para perceber a animação principal. **Mobile:** dois envelopes mais curtos, ~2,8 s, sem hover e sem novos controles. **Reduced/falha:** waveform completa estática. As alturas são ilustração sintética, nunca representação de amostra do MIND-BH.

### D.4 Perceptron em C — inferência, aproximadamente 3,2 s

**Estado inicial:** x₁/x₂, conexões, Σ e AND legíveis; halo/sinais apagados. Conservar os rótulos desta ilustração: a remoção de legendas solicitada refere-se ao Hero.

| Intervalo | Ação |
| --- | --- |
| 0–0,4 s | Destacar as duas entradas, sem lhes atribuir valores numéricos |
| 0,4–1,1 s | Dois sinais percorrem suas conexões e chegam ao neurônio central |
| 1,1–1,6 s | Σ/anel central recebem ativação breve, contida e suave |
| 1,6–2,2 s | Sinal atravessa somente a conexão de saída |
| 2,2–2,7 s | Destacar nó de saída e legenda AND |
| 2,7–3,2 s | Retornar os destaques à pose de repouso |

**Final:** desenho original reconhecível, sinais ocultos, nenhuma indicação de treino. **Gatilho/saída:** D.1. **Mobile:** ~2,6 s, mesma ordem causal, anel menor e sem efeitos de ponteiro. **Reduced/falha:** estático completo. Proposta padrão não mostra combinações/resultados numéricos e não converte a arte em simulador. Se isso for solicitado depois, validar explicitamente a tabela AND: 00/01/10→0, 11→1; não animar pesos aprendendo nem sugerir backpropagation já implementada.

### D.5 Arquivos e validação local das três cenas

Previstos: `src/components/ProjectArtwork.tsx`, `src/motion/projectScenes.ts`, `src/components/PortfolioMotion.tsx`, `src/styles/globals.css`. ProjectArtwork ganha apenas grupos/seletores que faltarem para documento/processamento/entradas; nenhuma troca de layout, texto ou fotografia. ProjectCard e ProjectDetails são alvos de regressão, não de refatoração prevista.

Verificar duas coisas separadamente: movimento perceptível **com scroll parado** após entrada e estabilidade geométrica ao expandir os detalhes. Comparar sinais contra segmentos e amostrar envelope em tempos conhecidos, não reutilizar testes de progresso de scroll como se ainda descrevessem a nova cena. Confirmar repouso sem mutações após os tempos previstos, suspensão/retomada e ausência de replay em idioma/media/refresh.

## E. Nova seção Contato

### E.1 Campo gráfico aberto

Retirar de Contact a instância de NeuralGraph padrão e substituí-la por **GraphBackdrop com variante contact**, proposta em F. Um único SVG com dois agrupamentos periféricos assimétricos: agrupamento maior na borda direita/superior e ligações longas até as bordas esquerda/inferior. Nós variam de aproximadamente 3–9 px aparentes. Recortar nas bordas da seção, sem silhueta de pequena rede neural em bloco.

O campo acompanha toda a área do Contato, mas preserva uma zona calma atrás do título, descrição, e-mail, status e botões. Grafite predomina; um trajeto vermelho e gradiente radial preto/vermelho discreto fecham o universo visual do início. Máscara estática opcional para reduzir contraste na área de leitura, com fallback sem máscara já suficientemente discreto. Não mascarar o conteúdo nem aplicar opacity ao contêiner dos controles.

Preservar SectionConnector de chegada e sua função de continuidade. `transitionScenes.ts` deixa de rotacionar a pequena rede e passa a controlar um wrapper do campo; grupos internos recebem apenas um assentamento finito de ~2,8 s (0–0,6 entrada de contraste, 0,6–2,2 breve propagação periférica, 2,2–2,8 repouso). O pulso final existente será incorporado ou retirado do alvo antigo para não duplicar acentos. Um único responsável por cada atributo.

Não recomendar oscilação infinita. Quando fora da tela/aba oculta, suspender; reentrada após conclusão não repete. Scroll pode ajustar opacidade de um wrapper de borda discretamente, sem mover letras, e-mail ou layout.

### E.2 Texto, PT/EN e quebra intencional

**PT solicitado, sem reescrever palavras:**

> Curtiu algum projeto ou quer trocar uma ideia sobre IA e dados?
>
> Me encontre por aqui.

Separar em dois parágrafos/blocos de texto no dicionário e no componente; não inserir `<br>` em string traduzida nem fazer split por pontuação em runtime. Proposta de contrato `description` + `invitation`, mantendo o restante de `contact` intacto. EN preserva as palavras atuais, com os mesmos dois blocos: “Interested in a project or want to talk about AI and data?” / “You can reach me here.” Nenhuma mudança de tom/título/e-mail é necessária.

Na pergunta, marcar “IA e dados?” / “AI and data?” como trecho sem quebra **apenas no desktop com espaço suficiente**. Preferir fragmentos traduzidos tipados para esse trecho se o markup exigir, sem HTML no dicionário; escolher entre essa fragmentação mínima e largura suficiente na proposta executável da Fase 4. Não duplicar a frase inteira no JSX. Em telas pequenas, liberar white-space normal; a unidade de leitura é objetivo, não motivo para overflow.

Ampliar a largura da pergunta para aproximadamente 58–64ch onde o cenário permitir, manter fonte >=1rem e line-height 1,7–1,8. O convite tem margem própria de ~0,5–0,75rem. Testar PT/EN em 1024/1440/1920 e texto 200%; evitar nowrap no parágrafo inteiro ou tamanho reduzido para forçar encaixe.

### E.3 Responsividade e preservação funcional

No mobile, reduzir densidade gráfica, usar um agrupamento deslocado à borda e eliminar movimento contínuo/parallax. Arte absoluta dentro da seção com `pointer-events:none`, sem dimensões mínimas que empurrem a largura. Em reduced-motion/falha do módulo, campo completo e estático.

Preservar título principal, ID/foco #contato, e-mail selecionável, copiar/repetir/falhas/concorrência/region status e links GitHub/LinkedIn. Não remontar o componente de ações ao trocar o fundo ou idioma; não alterar handlers de clipboard ou reintroduzir mailto/Gmail/formulário.

Arquivos Fase 4: `src/sections/Contact.tsx`, novo `src/components/GraphBackdrop.tsx` inicialmente só com a variante contact, `src/styles/globals.css`, `src/motion/transitionScenes.ts`, `src/i18n/pt.ts`, `src/i18n/en.ts`. `PortfolioMotion.tsx` somente se o contrato de sincronização do campo exigir; apresentar essa necessidade antes da execução. Não criar um segundo componente ContactBackdrop quase idêntico ao componente compartilhado.

## F. Sistema global de backgrounds

### F.1 Arquitetura recomendada e alternativas

Escolha recomendada: **SVGs decorativos por seção + gradientes CSS + SectionConnector existente**, usando GraphBackdrop com poucas variantes (`hero`, `quiet`, `technical`, `contact`). Coordenadas determinísticas em um pequeno mapa dentro do componente, sem gerador aleatório, Context ou arquivo de engine. Introduzido para Contato na Fase 4 e expandido na Fase 5, sem antecipar backgrounds de outras seções.

`Section.tsx` pode receber uma prop opcional tipada `backdrop` para inserir decoração como irmã anterior ao Container; Hero e Contact, que já possuem composição própria, usam o componente diretamente. Se a prop ampliar demais a abstração, inserir explicitamente nas poucas seções é alternativa de implementação a justificar; nenhuma mudança de IDs, ordem DOM significativa ou estrutura de dados profissionais.

| Alternativa | Avaliação |
| --- | --- |
| Um SVG gigante fixed cobrindo a página | Não recomendado: superfície grande, alinhamento mais frágil com details/idioma/altura, acoplamento ao scroll e difícil redução por seção |
| Canvas/WebGL/partículas | Complexidade e custo sem necessidade para dezenas de linhas/nós; não propor |
| CSS apenas | Adequado aos gradientes; limitado para conectar nós e emendar trajetos específicos |
| SVG local por seção sem componente compartilhado | Viável, mas repete atributos de acessibilidade, recorte e tokens; usar um componente pequeno evita divergência |
| SVG local + CSS + conectores | Melhor ajuste à base existente, responsividade e isolamento de pintura; solução recomendada |

### F.2 Intensidade por seção

| Seção | Campo e limites | Movimento recomendado |
| --- | --- | --- |
| Hero | Malha lateral discreta, 8–12 nós/12–18 arestas de fundo; gradiente próximo do grafo principal, zona limpa no nome | Principal segue C; fundo estático |
| Sobre | 4–6 nós/5–8 arestas de borda; não cruzar fotografia ou parágrafos | Estático, conector existente mantém transição |
| Projetos | 6–8 nós/8–12 arestas nas margens e intervalos; jamais desenhar sobre cards | Estático; animação fica nas artes |
| Experiência | 3–5 nós/4–6 arestas no lado externo da timeline | Estático; preservar trilho atual |
| Formação | 3–5 nós/4–6 arestas no lado externo, sem criar falso eixo acadêmico | Estático; preservar educationScene |
| Tecnologias | 4–6 nós/5–8 arestas de textura periférica | Estático |
| Certificações | 4–6 nós/5–8 arestas discretas, sem marcas de emissores | Estático |
| Contato | 12–16 nós/18–24 arestas de campo aberto; maior intensidade na borda | Entrada finita de E e repouso |

Quantidades são tetos de desenho inicial, não objetivo de preencher toda seção. Mobile pode reduzir pela metade. Começar com menos elementos e aumentar somente por benefício visível. Grupos compartilhados usam as mesmas espessuras, raio e gradientes; nenhum dado real ou logo novo.

### F.3 Continuidade, custo e acessibilidade

Usar pontos de saída/entrada próximos às emendas dos SectionConnectors, sem duplicar linhas sobrepostas. Distribuição em coordenadas normalizadas e margens alinhadas ao container. O primeiro passe deve manter a pintura local: os desenhos podem parecer uma rede contínua mesmo sendo SVGs separados. Na Fase 5, avaliar se essas emendas já bastam antes de adicionar qualquer movimento de fundo.

Só se houver benefício demonstrável, permitir deslocamento por scroll de até 4–6 px em **um ou dois grupos periféricos desktop**, no controlador existente, sem pin nem altura adicional. Mobile/touch/tela baixa/reduced ficam estáticos. Isso é candidato opcional, não compromisso de implementação. Não criar listeners globais adicionais ou um novo módulo de movimento de background por padrão.

Cada decoração fica em wrapper local com `position:absolute`, recorte próprio, isolamento de empilhamento e `pointer-events:none`; conteúdo acima. Aplicar `overflow:clip`/hidden ao wrapper, não globalmente ao body nem às seções com controles focáveis. Sem `will-change` permanente em todos os SVGs; avaliar composição por medição, sem prometer execução inteira na GPU. Alterar atributos SVG pode custar pintura, mesmo sem layout.

Campos sem papéis/interações acessíveis, `aria-hidden=true` e SVG não focável; nada na ordem de Tab. Evitar IDs repetidos de mask/gradient: usar identificadores locais únicos e estáveis, por exemplo useId se necessários. Gradientes CSS e SVGs sem filtros são o fallback preferido. Contraste deve ser medido considerando o campo real sob texto, não apenas tokens sobre fundo sólido.

Arquivos Fase 5: GraphBackdrop, globals.css, `components/Section.tsx` e seções Hero/About/Projects/Experience/Education/Skills/Certifications/Contact conforme integração de variantes; `components/SectionConnector.tsx` e `motion/transitionScenes.ts` apenas para emendas/ajustes de alvos existentes. Não modificar conteúdo profissional, `educationScene.ts`, dados de certificação ou App como atalho para inserir um overlay global.

## G. Roadmap de implementação

Ordem: **1 → 2 → 3 → 4 → 5 → 6**. Encerramento de 19/10/2026: Fase 1 documental entregue, com decisões artísticas futuras ainda pendentes; Fases 2 e 3 autorizadas separadamente e concluídas tecnicamente, com aceite visual do proprietário pendente. Fases 4–6 não iniciadas e não autorizadas. Nenhum código parcialmente implementado ficou em execução. A próxima ação é apresentar a proposta executável da Fase 4, com os arquivos de E.3, e aguardar autorização explícita. A lista abaixo delimita a proposta; antes de cada execução, reapresentar o conjunto exato, resultado visual e dúvidas restantes. Adições fora do conjunto exigem nova decisão. Checkpoint completo em ESTADO_ATUAL.md, seção de encerramento.

### Fase 1 — Auditoria e direção artística

**Objetivo:** registrar base real, linguagem e plano verificável. **Aprovação:** autorizada exclusivamente para análise/documentação; entrega documental concluída, direção artística aguardando aceite. **Dependências:** documentos e fontes locais existentes.

- [x] Ler instruções/briefing e consultar estado, checklist e duas evoluções.
- [x] Inspecionar Hero, SVGs, cenas, CSS, dicionários e infraestrutura real.
- [x] Conferir bibliotecas instaladas, alternativas e oportunidade de reutilização.
- [x] Examinar capturas anteriores, sem atribuí-las a testes atuais.
- [x] Definir proposta gráfica, storyboards, riscos e roadmap neste arquivo.
- [x] Registrar somente a existência do plano em ESTADO_ATUAL, sem declarar implementação.
- [x] Receber autorização das direções específicas de Hero e Projetos antes das respectivas Fases 2/3.
- [ ] Receber aceite das decisões artísticas ainda futuras, sem presumir aprovação geral das propostas.

**Arquivos efetivos:** novo `PLANEJAMENTO_REFINAMENTO_VISUAL.md` e nota em `ESTADO_ATUAL.md`. **Risco:** confundir planejamento/resultado histórico com implementação. **Aceite documental:** seções A–H completas, evidências distinguidas e fases futuras não autorizadas. **Validação desta entrega:** revisão do documento, existência e Git ignore; conferir preservação de fontes/assets/configuração e árvore anterior. Não é necessário build para dois arquivos locais de planejamento.

### Fase 2 — Redesign do grafo do Hero

**Objetivo:** presença maior e rede reconhecível sem legendas, preservando nome/texto. **Aprovação:** autorizada pelo “sim” à proposta específica e concluída tecnicamente; evidências em H.4, aceite visual pendente. **Dependências:** direção B/C aceita para o Hero nesta fase; remoção das legendas já é requisito decidido, não uma dúvida a reabrir.

- [x] Registrar autorização/escopo no IMPLEMENTAR antes de código.
- [x] Capturar baseline de layout/geometria nos dois idiomas e larguras-alvo.
- [x] Ajustar proporção da segunda linha, limite do visual e viewBox; medir ganho real.
- [x] Redistribuir nós/poses e classificar arestas/rotas sem quebrar IDs e endpoints.
- [x] Remover grupo, prop, metadados de posição e traduções exclusivas das legendas.
- [x] Refinar tempos, ativação, cursor e passagem Hero→Sobre, com dono único por atributo.
- [x] Validar fallback, mobile, texto ampliado e regressão de âncoras.
- [x] Executar lint/typecheck/build e registrar capturas/resultado/aceite antes de solicitar Fase 3.
- [ ] Receber avaliação/aceite visual do proprietário para a entrega do Hero; conclusão técnica não equivale a esse aceite.

**Arquivos previstos:** os oito arquivos em C.5, mais IMPLEMENTAR/ESTADO/este plano para registros e roteiros locais em cache autorizado. **Riscos:** ampliação competir com nome, coluna textual estreita, estilos de introdução sobrescreverem hierarquia, recorte/cursor errado. **Aceite:** caminhos reconhecíveis, zero labels PT/EN, presença ampliada medida e visualmente equilibrada, sinais conectados, fallback íntegro e CTAs/foto preservados. **Validação:** 320/375/768/1024/1440/1920 × PT/EN × motion/reduced; observar frames do morph/cursor, hash inicial, teclado e fim de scroll; comparar introdução finita e ausência de replay. Antes de concluir, apresentar screenshots desktop/mobile e custo de bundle.

### Fase 3 — Animações das ilustrações dos projetos

**Objetivo:** tornar os três conceitos perceptíveis com scroll parado após entrada. **Aprovação:** autorizada pelo “sim” à proposta específica da Fase 3; concluída tecnicamente; aceite visual pendente. **Dependências:** Fase 2 concluída tecnicamente; política temporal D aprovada. Hover opcional do MIND excluído da execução atual.

- [x] Registrar aprovação e baseline das dimensões/cards/details.
- [x] Substituir scrub interno por timelines finitas sem deixar dois controladores.
- [x] Implementar TEDAS documento→processamento→saídas→repouso.
- [x] Implementar MIND com envelopes sintéticos determinísticos e alturas individuais.
- [x] Implementar Perceptron entradas→Σ→saída AND→repouso, sem números/treino.
- [x] Integrar visibilidade, histórico por ID, foco no card, mobile/reduced e cleanup.
- [x] Verificar pausa/retomada, idioma/media, rolagem rápida e expansão simultânea.
- [x] Executar lint/typecheck/build, amostras de frames e capturas; registrar antes de solicitar Fase 4.
- [ ] Receber avaliação/aceite visual do proprietário para as três animações.

**Arquivos previstos:** os quatro de D.5; registros locais e roteiros. **Riscos:** replay em refresh, hover preso no touch, leitura confundida com resultado clínico, foco global consumindo todas as cenas, timeline não limpa. **Aceite:** storyboard reconhecível sem rolar continuamente, sinais na conexão, barras oscilando individualmente, ausência de loop em repouso, cards/actions intactos e nenhuma informação nova. **Validação:** 375/1440 em tempos-chave e seis larguras para geometria, PT/EN, motion/reduced; pausar aba/viewport, reentrar e alternar preferências; details abertos/fechados e reversões rápidas; fixtures Strict Mode, contagens de triggers/listeners e restauração de atributos. Sem depender de hover para testar a sequência principal.

### Fase 4 — Refinamento da seção Contato

**Objetivo:** encerramento atmosférico e texto com pergunta/convite separados. **Aprovação:** não solicitada/não autorizada. **Dependências:** linguagem B e composição E aprovadas, Fase 3 encerrada; concordar com a divisão equivalente EN e contrato do trecho sem quebra.

- [ ] Apresentar proposta executável, contrato PT/EN, arquivos exatos e validações; aguardar autorização explícita própria da Fase 4.
- [ ] Registrar aprovação e baseline de texto, links e estados de cópia.
- [ ] Criar GraphBackdrop com variante contact e remover apenas a instância gráfica antiga do Contato.
- [ ] Integrar zona calma, recortes/gradiente e entrada finita sem duplicar pulso.
- [ ] Separar pergunta/convite em PT/EN; tratar trecho curto no desktop sem nowrap global.
- [ ] Preservar clipboard, feedback, e-mail selecionável, foco e links sem mailto.
- [ ] Validar 320/375, desktop, texto 200%, touch, reduced e módulo indisponível.
- [ ] Executar lint/typecheck/build e regressão de contato; registrar antes de solicitar Fase 5.

**Arquivos previstos:** conjunto E.3, registros e roteiros; confirmar PortfolioMotion somente se necessário. **Riscos:** fundo sob texto/e-mail reduzir contraste, IDs SVG duplicados, quebra em EN ou fonte ampliada, alteração acidental do handler de copiar. **Aceite:** campo ocupa cenário sem parecer ícone de canto, dois blocos PT exatos, expressão “IA e dados?” unida quando houver espaço desktop e quebra natural mobile, ações preservadas. **Validação:** contraste incluindo gradientes reais, texto 200%, teclado/foco, viewport baixa, estados de cópia e concorrência/recusa/API ausente simulados. Qualquer teste REAL futuro de clipboard deve ser anunciado e especificamente autorizado; o teste real da fase anterior não é autorização permanente para sobrescrevê-lo nesta nova evolução.

### Fase 5 — Background gráfico contínuo

**Objetivo:** distribuir a linguagem pelas oito seções sem uma camada global pesada. **Aprovação:** não solicitada/não autorizada. **Dependências:** GraphBackdrop contact estabilizado; aprovar variantes/densidade de F e decidir se há necessidade de deslocamento periférico opcional.

- [ ] Registrar aprovação e capturas da composição sem os novos campos.
- [ ] Expandir variantes mínimas e tokens compartilhados, sem duplicar o componente do Contato.
- [ ] Integrar fundos em Hero/Sobre/Projetos e fundos limpos de Experiência/Formação.
- [ ] Integrar textura periférica em Tecnologias/Certificações e conferir unidade com Contato.
- [ ] Alinhar emendas aos conectores existentes sem redesenhar timelines de conteúdo.
- [ ] Reduzir densidade mobile e garantir recorte/empilhamento/IDs únicos/foco intacto.
- [ ] Medir custo estático; só incluir movimento periférico aprovado se houver ganho visível.
- [ ] Executar lint/typecheck/build, capturas de página e comparação de pintura/overflow; registrar antes de solicitar Fase 6.

**Arquivos previstos:** conjunto F.3; preservar módulos de formação e dados. **Riscos:** acúmulo de linhas, custo de pintura, z-index esconder elementos, artifícios de altura e emendas desalinhadas após expansão/idioma. **Aceite:** universo gráfico reconhecível de ponta a ponta com intensidades diferentes, nenhum fundo sobre cards/foto/texto, reduced completo e estático, nenhuma interação bloqueada. **Validação:** matriz de larguras/idiomas/motion/details, emendas com escala/zoom/texto, teclado por todas as seções, screenshots completas e inspeção de paint/composição. Não alegar ganho de GPU apenas porque houve transform.

### Fase 6 — Validação e refinamento

**Objetivo:** comprovar integração e custo real da terceira evolução, sem confundir aceite técnico e visual. **Aprovação:** não solicitada/não autorizada. **Dependências:** Fases 2–5 concluídas e aprovadas individualmente; browsers/ferramentas disponíveis.

- [ ] Apresentar matriz/arquivos de eventual correção e obter autorização específica.
- [ ] Executar a mesma build em Chrome/Edge: 96 combinações finais, seis larguras × dois idiomas × duas preferências × details abertos/fechados.
- [ ] Confirmar narrativa temporal, repouso, pausa/retomada, foco, reentrada, breakpoint e idioma sem replay.
- [ ] Conferir conteúdo contra baseline, permitindo somente remoção de labels e divisão aprovada do Contato.
- [ ] Exercitar menu, skip link, CTAs, hash inicial, histórico, teclado e rolagem interrompida.
- [ ] Validar texto 200%, zoom nativo quando disponível, landscape/touch, reduced inicial/dinâmico e falha do chunk.
- [ ] Revisar ARIA/nomes/headings/contraste real/cores forçadas; testar leitor de tela e Safari/Firefox/físico quando disponíveis, registrando lacunas.
- [ ] Repetir fixtures de Strict Mode das cenas completas e ProjectDetails; verificar triggers/ticker/observers/listeners e ausência de mutações em repouso.
- [ ] Comparar bytes/gzip com método idêntico, CPU/pintura/frames/tarefas longas/CLS e recursos externos.
- [ ] Executar lint/typecheck/build/npm ls e inspecionar preview/artefatos; nenhum documento/PDF/env indevido.
- [ ] Corrigir somente regressões reproduzidas no escopo apresentado; repetir cenários afetados e matriz final na mesma build.
- [ ] Atualizar documentação aprovada e solicitar avaliação visual final, sem publicação automática.

**Arquivos previstos:** roteiros/evidências em cache, registros e README após aprovação da fase. Correções apenas nos arquivos efetivamente introduzidos/alterados nas Fases 2–5, com lista reapresentada; Navbar/App/ProjectDetails e outros fora disso somente se a regressão demonstrar necessidade e o conjunto for autorizado. Nenhuma dependência/configuração/deploy por inferência.

**Riscos:** laboratório não representar dispositivos reais, baseline antigo usado como nova evidência, snapshots de SVG omitirem atributos novos e teste de onda continuar baseado no scrub removido. **Aceite:** matriz sem regressão bloqueante, grafos legíveis, animações perceptíveis e finitas, estados funcionais preservados, custo explicado, docs coerentes e aceite visual separado. Registrar disponibilidade externa dos links e métricas de campo como verificações distintas.

**Desempenho — proposta de procedimento, ainda sem orçamento aprovado:**

1. Capturar baseline imediatamente antes de cada fase, com versões do navegador/viewport/CPU, mesma preferência, layout e detalhes. Usar gzip Node do mesmo tipo ao comparar bytes; não misturar com estimativa do Vite.
2. Repetir três cargas normais/três reduzidas por browser nas condições históricas (375×1000, CPU 4×, latência 40 ms, download 200.000 B/s, upload 93.750 B/s, cache limpo/desabilitado), além de capturar a duração inteira das novas sequências e janela de repouso. O teste anterior observava só 1,8 s após montagem e não basta para cenas novas completas.
3. Amostrar processamento de cada SVG e scroll parado, incluindo pintura. Ausência de layout shift e baixo delta de JS não garantem baixo custo de CPU.
4. Propor como gatilhos de investigação: aumento >5 kB gzip de JS sobre a build final atual, frame p95 >20 ms ou >20% acima do baseline equivalente, e crescimento repetível de tarefas longas/pintura. São referências propostas, não garantias, requisitos retroativos ou limiares que permitam ocultar problemas menores.
5. Ao atingir um gatilho, reduzir densidade/efeitos primeiro e repetir a medição; sem instalar ferramentas/dependências ou reescrever arquitetura sem aprovação. Documentar também métricas que piorarem abaixo do gatilho.

## H. Registro de decisões e execução

### H.1 Decisões confirmadas e propostas

| ID | Decisão | Situação |
| --- | --- | --- |
| R01 | Preservar arquitetura, conteúdo profissional, foto, timeline, PT/EN, navegação e funcionalidades | Obrigatório no pedido atual |
| R02 | Hero sem legendas visíveis, sem substituí-las por rótulos | Decisão explícita implementada na Fase 2 autorizada; H.4 |
| R03 | Contato com pergunta e convite PT nos dois blocos exatos de E.2; sem mailto | Direção/texto definidos no pedido; execução futura não autorizada |
| R04 | Hero maior em ~15–30%, mantendo nome/texto protagonistas | Composição C autorizada na Fase 2; medido +15% em 1024 e +25% em 1440/1920; H.4. Aceite visual pendente. |
| R05 | Reutilizar GSAP/ScrollTrigger/SVG/CSS, sem dependências novas | Recomendação técnica; compatível com base e limites do pedido |
| R06 | Projetos com uma sequência temporal finita por visita, repouso e histórico por ID | Autorizada e implementada na Fase 3; H.5 |
| R07 | MIND com envelopes sintéticos coordenados e hover curto opcional | Sequência autorizada na Fase 3; hover excluído do escopo atual e continua pendente; nenhum loop padrão |
| R08 | Contato atmosférico com GraphBackdrop local e entrada finita | Composição proposta, aguardando aprovação |
| R09 | SVG por seção + CSS + conectores; fundos majoritariamente estáticos | Arquitetura proposta, aguardando aprovação |
| R10 | Microdeslocamento de fundo desktop opcional, até 4–6 px em poucos grupos | Não aprovado; omitir inicialmente se não trouxer benefício |
| R11 | Textos EN preservados em dois blocos; possível contrato de fragmentos para no-break | Proposta editorial/técnica limitada, revisar na Fase 4 |
| R12 | Gatilhos de custo em G/Fase 6 | Propostos para investigação, não orçamento aprovado |
| R13 | Sem publicação, commits, push ou alterações de deploy | Limite vigente; qualquer operação depende de autorização específica |

Não pedir novamente autorização para decidir se as legendas devem existir: a decisão já foi tomada. Pedir autorização para implementar o conjunto exato da fase e confirmar suas escolhas visuais propostas. Se houver exigência de ambiente contínuo em vez das sequências finitas, apresentar impacto no controle de pausa, desempenho e limpeza antes de executar essa parte.

### H.2 Execução da entrega documental inicial (histórico)

| Campo | Registro |
| --- | --- |
| Pedido/autorização | Mensagem “Terceira evolução visual” autoriza exclusivamente análise/plano e nota no estado |
| Implementação realizada | Nenhuma funcionalidade, animação, SVG ou estilo implementado nesta solicitação |
| Arquivos escritos | Novo PLANEJAMENTO_REFINAMENTO_VISUAL.md; nota de existência em ESTADO_ATUAL.md |
| Conferências | Leitura e rastreamento de consumidores, fontes locais de versões, capturas históricas, estrutura/checklists do documento e ignore do Git |
| Testes novos da aplicação | Nenhum: sem build/lint/browser/clipboard/benchmark nesta entrega documental |
| Problemas conhecidos | Projetos temporariamente estáticos com scroll parado por desenho do scrub atual; onda sem oscilação temporal; hierarquia/cap do Hero; Contato em bloco e frase quebrada; ausência de campos gráficos por seção |
| Pendências | Aceite da direção artística e das propostas R04–R12, seguido de autorização própria por fase |
| Próxima etapa | Apresentar/autorizar somente Fase 2 com os oito arquivos de C.5 e seus testes; não iniciar automaticamente |

### H.3 Acompanhamento das fases futuras

| Fase | Aprovação de execução | Implementação | Evidências/testes | Pendência |
| --- | --- | --- | --- | --- |
| 1 | Análise/documentação autorizadas; direções de Hero/Projetos aprovadas nas respectivas fases | Documento entregue; não é uma fase de código | Conferências documentais acima | Aceite das propostas artísticas ainda futuras |
| 2 | “sim” à proposta específica | Concluída tecnicamente | 96 layouts, geometria, ciclo de vida e build; H.4 | Aceite visual do proprietário |
| 3 | “sim” à proposta específica, sem hover | Concluída tecnicamente | 96 layouts, 24 sequências, ciclo de vida e regressões; H.5 | Aceite visual do proprietário |
| 4 | Não solicitada/não autorizada | Não iniciada | Não executados | Aprovar campo/contrato PT-EN |
| 5 | Não solicitada/não autorizada | Não iniciada | Não executados | Aprovar variantes/densidade |
| 6 | Não solicitada/não autorizada | Não iniciada | Não executados | Aprovar matriz e arquivos de correção |

Depois de cada conjunto autorizado, registrar data/texto da aprovação, arquivos reais, resultados visuais, comandos e cenários executados, limitações e próxima proposta. Marcar tarefas somente após execução verificável; conservar o histórico anterior. Aprovação de uma fase não autoriza a seguinte nem equivale a aceite visual geral ou publicação.


### H.4 Execução da Fase 2 — Hero

**Autorização:** “sim” à proposta de implementar somente a Fase 2 com oito arquivos e testes, após a entrega do planejamento. **Conclusão técnica:** 19/10/2026. **Situação:** implementação e validação técnica local concluídas; aceite visual do proprietário pendente. Fases 3–6 não autorizadas.

**Entrega:** segunda linha desktop com proporção 0,95/1,15 e visual até 40rem; SVG 480×320, 12 nós em camadas 3–4–3–2, poses menos dispersas e duas rotas separadas. Trinta conexões preservadas, com hierarquia secundária/principal/rota alimentada por uma única tabela de opacidade/espessura (0,24/0,52/0,82 e 0,9/1,2/1,6 px), compartilhada pelo SVG estático e introdução. Perfil mobile de oito nós/15 arestas preservado, com um caminho animado. Removidos grupo/textos das legendas, props/tipos/metadados exclusivos e somente hero.graphLayers em PT/EN. Grafo permanece decorativo e não focável.

Introdução finita de 4 s desktop elaborado/2,4 s mobile, tela baixa ou perfil sem ponteiro fino; organização antes dos dois sinais desktop, ativação breve de nós/halos e repouso sem loop. Duração em 1024×450 medida: 2381 ms Chrome/2369 ms Edge, com geometria desktop e sequência compacta. Cursor mantém limite de quatro unidades SVG com mapeamento pelo viewBox atual. Corrigida condição de corrida observada na fixture de Strict Mode: o ticker do GSAP pode ser acordado sincronamente, inclusive durante setup/cleanup. Consumo da introdução passa a exigir confirmação por requestAnimationFrame do navegador, cancelada no cleanup e sem loop permanente. Passagem para Sobre suavizada para escala 0,86, x −24/y +24 px desktop; início limitado a zero para que janelas altas não recebam o Hero parcialmente retraído antes de rolar. As outras passagens, foto, conteúdo, âncoras e coordenação de layout foram preservados.

**Comparação:** baseline real capturado antes do código em 12 layouts (seis larguras × PT/EN), com textos/foto/markup de Contato, hashes de fontes/assets/configuração e bytes/gzip. Largura do SVG cresceu ~15% em 1024 e 25% em 1440/1920; textos mantêm a fonte original. Em 1440/1920, SVG de 512 para 640 px, altura natural do Hero +42,66 px; em 1024, altura +6,95 px. Mobile manteve a altura de composição. Ganho e caixas dos nós registrados por idioma em results.json; não se trata de porcentagem garantida em qualquer viewport.

**Validação:** Chrome 155.0.8059.80 e Edge 155.0.4283.62: 48 combinações cada, 96 no total, em 320/375/768/1024/1440/1920 × PT/EN × normal/reduzido × details abertos/fechados, sobre a mesma build. Sem overflow/pin, legenda ou sobreposição entre colunas; conteúdo profissional das demais seções, CTAs e foto preservados. Markup de Contato idêntico no modo estático. Hierarquia de cores/espessuras conferida em normal e reduced. As três cenas dos projetos e timeline continuam como antes; esta rodada não implementou a Fase 3.

Geometria pura: poses/rotas direcionadas, sinais colineares e dados imutáveis. Introdução amostrada (230 frames Chrome/228 Edge), gap máximo entre endpoints e nós zero, propagação visível, cursor <=4, retorno exato à pose final e zero mutações autônomas em repouso. Preferências/idioma/breakpoint não repetem intro; suspensão simulada por visibilidade e interrupção por scroll passaram. Passagem em 0/50/100/50/0% reversível. Hash inicial, 14 âncoras mobile nos dois modos, âncoras/CTA/foco de teclado, histórico voltar/avançar e pulso único de Contato passaram.

Texto 200% em 320/768/1440, tela baixa 1024×450, touch, nomes acessíveis/headings/IDs/ARIA, skip link, tabulação/foco, nove pares computados de contraste e cores forçadas passaram. Reduced inicial sem solicitar motor; chunk bloqueado mantém oito seções e details nativo. Strict Mode em fixture completa com nova geometria durante a introdução: triggers 20→40→20, ticker 1→1, SVG restaurado, em ambos os browsers. Não é nova fixture isolada de ProjectDetails nem análise completa de heap. Zero exceções JavaScript finais.

**Verificações/custo:** lint/typecheck/build e git diff --check aprovados. Build de 71 módulos; index-DgWGXNTk.js: 274388 bytes/gzip padrão Node 83952; PortfolioMotion-Ucg7jjsh.js: 127940 bytes/gzip padrão Node 48845; index-Depsvgjx.css: 32867 bytes/gzip 7377. Delta total JS gzip padrão Node -54 bytes; CSS gzip -34 bytes sobre o baseline desta fase. Estimativas arredondadas do Vite não foram misturadas com gzip Node. O custo histórico do motor e tarefas longas anteriores permanecem documentados; não houve nova medição de CWV de campo ou benchmark abrangente de CPU.

**Arquivos reais:** src/data/heroGraph.ts, src/components/NeuralGraph.tsx, src/sections/Hero.tsx, src/styles/globals.css, src/motion/heroScene.ts, src/motion/transitionScenes.ts, src/i18n/pt.ts e src/i18n/en.ts; IMPLEMENTAR.md, ESTADO_ATUAL.md e este planejamento, além de roteiros/capturas locais em .cache/refinement-hero-phase2/. 51 arquivos fora do escopo de código (incluindo geometria pura, módulos de projetos/formação, fotografia, dados profissionais, manifesto/lockfile/Vite/gitignore) mantiveram seus hashes. Sem dependência nova, clipboard real, envio, commit, push ou deploy.

**Evidências/limites:** baseline.json e capturas anteriores/novas; chrome/results.json, edge/results.json, hero-motion e navigation por browser. Capturas desktop/mobile PT/EN examinadas. O roteiro passou a separar viewport e largura útil do documento. Duas observações motivaram correções na aplicação dentro do escopo: passagem já avançada em janela alta e consumo da introdução em cleanup síncrono de Strict Mode. A rodada final repetiu os testes sobre a build resultante; falhas intermediárias são evidências de investigação, não resultados finais. Build/browser precisaram de execução aprovada fora do sandbox por bloqueio de processos nativos; nenhuma configuração do produto alterada para contornar o ambiente. Navegadores e servidores temporários encerrados.

Emulação Chrome/Edge não cobre Safari/Firefox/iOS/físico, leitor de tela manual, zoom nativo, contraste por pixel/gradientes ou BFCache. Sem alegação de WCAG integral, fps garantido ou desempenho em produção. **Próxima:** avaliação visual desta entrega e proposta/autorização própria da Fase 3 (animações dos projetos). Nenhuma fase seguinte iniciada automaticamente.


### H.5 Execução da Fase 3 — Animações dos projetos

**Autorização:** “sim” à proposta específica de implementar somente a Fase 3, com quatro arquivos de código e testes apresentados. **Conclusão técnica:** 19/10/2026. **Situação:** implementação e validação local concluídas; aceite visual do proprietário pendente. Fases 4–6 não autorizadas. Hover opcional do MIND não incluído.

**Entrega:** substituído o scrub interno de projectScenes por três timelines finitas, acionadas pela entrada legível do SVG, independentes da continuidade do scroll. TEDAS (~3,4 s desktop/2,6 s compacto): documento → sinal de entrada → processamento → ramos sequenciais/saídas abstratas → repouso. MIND (~3,8/2,8 s): dois envelopes sintéticos determinísticos, pausa, destaque pontual e conexão aos blocos existentes; 27 barras desktop/14 compactas, escala entre 0,55–1,05 com centro SVG preservado. Perceptron (~3,2/2,6 s): x₁/x₂ → sinais paralelos → Σ → sinal de saída/AND → repouso. Sem valores de entrada, resultados clínicos, dados reais de áudio, treinamento ou novas alegações profissionais.

Conexões estruturais discretas permanecem legíveis no fallback; overlays de fluxo e halos começam ocultos. Cada propriedade tem um controlador. Sinais percorrem os segmentos com velocidade constante em cada trajeto. Barras usam transformações SVG em torno de seus próprios centros, sem updates contínuos de estado React. Cores e opacidades retornam suavemente; a composição final restaura os atributos iniciais, sem loop.

**Ciclo de vida:** histórico Set por ID estável em ref de PortfolioMotion. Uma reprodução por visita; idioma, details e refresh não reiniciam. Visibilidade sincronizada com o controlador existente: pausa fora da área útil/aba oculta e retomada do mesmo ponto. Mudança de perfil/preferência após um frame real consumido restaura a pose estática e não repete. Confirmação de consumo por requestAnimationFrame cancelável preserva setup/cleanup imediato do Strict Mode. Foco estabiliza somente a arte do card correspondente. Sem novo listener por barra, ticker permanente, dependência ou alteração do sistema de layout/âncoras.

**Validação final:** Chrome e Edge headless sobre a mesma build: 48 combinações por browser (320/375/768/1024/1440/1920 × PT/EN × normal/reduzido × details fechados/abertos), 96 ao todo. Comparação com baseline real de 12 layouts: dimensões das artes/composição principal preservadas dentro de 1 px, summaries >=44 px, zero overflow/pin e conteúdo profissional/foto preservados. Doze sequências por browser (três projetos × PT/EN × 375/1440), 24 ao todo, amostradas com scroll parado; duração aproximada confirmada, sinais aderentes às conexões, centro das barras estável e alturas individuais dentro dos limites. Zero mutações autônomas das artes em repouso nas janelas amostradas.

Suspensão/retomada fora da viewport e visibilidade de aba simulada, troca de idioma durante playback, mudança de perfil durante playback sem replay, foco isolado por card, tela baixa 1024×450 e touch emulado passaram. Teclado, reversões rápidas dos details, idioma com details abertos e retorno do foco passaram em 375/1440. Fixture React Strict Mode com três artes durante a reprodução: um trigger por arte, contagens de triggers/ticker restauradas e atributos restaurados, normalizando apenas style vazio. É fixture do módulo PortfolioMotion, não uma nova fixture isolada de ProjectDetails nem prova completa de heap/listeners.

Regressões reutilizadas/adaptadas do Hero e navegação: introdução finita, cursor, geometria, não repetição, âncoras nativas/histórico e pulso de Contato. Auditoria semântica/nomes acessíveis/IDs/ARIA, teclado/foco, nove pares computados de contraste e ampliação de texto a 200% passaram. Reduced inicial sem download do módulo; reduced dinâmico sem estilos ou transformações ativos; chunk de movimento bloqueado conserva oito seções, três artes e details nativo. Zero exceções JavaScript finais. Capturas das artes em movimento/repouso desktop/mobile PT/EN examinadas.

**Verificações/custo:** npm run lint, npm run typecheck, npm run build e git diff --check aprovados. Build de 71 módulos. Gzip padrão Node: delta total JS +898 bytes e CSS +32 bytes sobre o baseline. index-CiLUUPch.css: 33044 bytes/gzip 7409; index-DFY_B1yz.js: 275543 bytes/gzip 84057; PortfolioMotion-D0FtD0ee.js: 130245 bytes/gzip 49638. Hashes da build/fontes e resumo em summary.json. Crescimento corresponde ao controle temporal, históricos, envelopes e seletores SVG; sem biblioteca nova. Não confundir gzip Node com estimativas arredondadas do Vite.

**Arquivos reais:** src/components/ProjectArtwork.tsx, src/motion/projectScenes.ts, src/components/PortfolioMotion.tsx e src/styles/globals.css; IMPLEMENTAR.md, ESTADO_ATUAL.md e este planejamento. 55 arquivos fora do escopo de código mantiveram seus hashes, incluindo Hero/geométricas anteriores, ProjectCard/ProjectDetails, dados, traduções, fotografia, configurações e manifesto/lockfile. Sem clipboard real, envio de mensagens, commit, push, branch ou deploy.

**Evidências e limites:** .cache/refinement-projects-phase3/{baseline.json,summary.json,chrome/results.json,edge/results.json}, capturas e roteiros locais. Chrome reuniu os testes temporais/layout já aprovados e a continuação dos testes de ciclo de vida sobre a mesma build, sem repetir cenários aprovados desnecessariamente. Falhas intermediárias de roteiro (atributos style vazios, espera do módulo assíncrono e leitura durante edição do próprio harness) foram investigadas; não correspondem a resultados finais. Build/browser exigiram execução aprovada fora do sandbox após bloqueio de processos nativos. Servidores/navegadores temporários encerrados.

Emulação não cobre Safari/Firefox/iOS/dispositivo físico, leitor de tela manual, zoom nativo, contraste por pixel/gradientes, BFCache ou análise completa de heap. Amostragem instrumentada não garante fps, consumo de GPU/CPU ou CWV em produção; não houve benchmark abrangente de CPU nesta fase. A consolidação completa continua na Fase 6. **Próxima:** avaliação visual da Fase 3 e proposta/autorização própria da Fase 4, Contato. Nenhuma fase seguinte iniciada automaticamente.

### H.6 Encerramento documental da sessão — 19/10/2026

**Autorização:** pedido explícito de encerrar o desenvolvimento, atualizar ESTADO_ATUAL.md existente e os checklists de planejamento, sem alterar código. Atualizados somente ESTADO_ATUAL.md, este planejamento ativo e IMPLEMENTAR.md. Histórico anterior preservado; nenhum arquivo de estado novo criado. Detalhamento autossuficiente das sete categorias solicitadas no checkpoint inicial de ESTADO_ATUAL.md.

- [x] Registrar progresso: Fase 1 documental entregue com decisões futuras pendentes; Fases 2/3 tecnicamente concluídas; Fases 4/5/6 não iniciadas e não autorizadas.
- [x] Distinguir aceite visual pendente de implementação parcial; nenhum conjunto de código ficou em andamento.
- [x] Registrar última implementação, quatro fontes modificadas, evidências/cache criados e 11 fontes com alterações locais acumuladas das Fases 2/3.
- [x] Registrar stack real, animações finitas, histórico por ID, visibilidade, Strict Mode, reduced e limites de preservação.
- [x] Registrar resultados já executados de lint/typecheck/build, 96 layouts, 24 sequências e regressões; conservar lacunas e problemas conhecidos sem atribuir novos testes a este encerramento.
- [x] Explicitar a próxima tarefa, arquivos/dependências e a necessidade de autorização específica antes de código.
- [ ] Receber aceite visual do proprietário para as Fases 2/3 e definições artísticas futuras.
- [ ] Apresentar e obter autorização do conjunto exato da Fase 4 — Contato.
- [ ] Após aprovação, registrar autorização/baseline e executar o escopo aprovado; nenhuma autorização automática para Fases 5/6.

**Retomada:** apresentar proposta do campo periférico GraphBackdrop contact e descrição em dois blocos PT/EN, sem mailto. Conjunto previsto: novo src/components/GraphBackdrop.tsx; alterar Contact.tsx, globals.css, transitionScenes.ts e dicionários pt.ts/en.ts, além dos documentos. PortfolioMotion.tsx apenas se necessário e incluído na proposta. Aprovar composição, contrato traduzido/quebra e testes antes de implementar. Não executar os utilitários históricos doc-start.mjs/close.mjs para retomar: eles escrevem registros da entrega anterior.

**Pendências preservadas:** hover do MIND e movimento periférico opcional continuam sem autorização; GraphBackdrop e backgrounds da terceira evolução ainda não existem; Contato mantém sua pequena rede e parágrafo único. Aceite visual, cobertura física/Safari/Firefox/leitor de tela e medição abrangente de desempenho permanecem em aberto. Fase 6 não está concluída pelos testes de Fase 3. Sem novos testes da aplicação, clipboard real, dependências, commit, push, branch ou deploy neste encerramento. A única verificação adicional necessária é documental e de preservação do código.

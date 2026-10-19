# Estado atual do portfólio

## Encerramento da sessão — 19/10/2026 — ponto de retomada

**Sessão encerrada a pedido do proprietário. Nenhuma implementação em andamento.** Este registro é a referência de retomada; os relatos completos abaixo permanecem preservados como histórico. A autorização deste encerramento cobre somente documentação. Não tratar um futuro “continue” isolado como aprovação de uma fase cujo escopo ainda não foi apresentado.

### 1. Progresso consolidado

O MVP e as duas evoluções visuais anteriores estão concluídos tecnicamente conforme IMPLEMENTAR.md e PLANEJAMENTO_EVOLUCAO_VISUAL.md; não reconstruir essas entregas. O planejamento ativo é **PLANEJAMENTO_REFINAMENTO_VISUAL.md**, terceira evolução, com ordem 1 → 2 → 3 → 4 → 5 → 6. IMPLEMENTAR.md continua sendo o checklist geral obrigatório.

| Fase da terceira evolução | Situação real ao encerrar | O que permanece pendente |
| --- | --- | --- |
| 1 — Auditoria/direção | Auditoria, propostas, storyboards e documento entregues | Aceite das decisões artísticas ainda futuras; as direções específicas de Hero e Projetos foram autorizadas separadamente |
| 2 — Hero | Código e validação técnica concluídos; H.4 do planejamento | Avaliação/aceite visual do proprietário |
| 3 — Projetos | Código e validação técnica concluídos; H.5 do planejamento | Avaliação/aceite visual do proprietário; hover do MIND não incluído |
| 4 — Contato | Não iniciada; não autorizada | Apresentar e aprovar o escopo exato antes de qualquer código |
| 5 — Background contínuo | Não iniciada; não autorizada | Aprovação própria após estabilizar Contato |
| 6 — Validação consolidada | Não iniciada; não autorizada | Fases 4/5 e aprovação própria; testes locais de fases anteriores não concluem esta fase |

**Parcialmente implementado:** nenhum conjunto de código ficou pela metade nas Fases 2/3. A terceira evolução como um todo permanece parcial, pois Contato/backgrounds/consolidação ainda são propostas. Separar essa situação do aceite visual pendente e das limitações de cobertura dos testes.

### 2. Última implementação e arquivos

A última implementação foi a **Fase 3**, autorizada por “sim” à proposta específica de quatro arquivos. As animações internas por scrub foram substituídas por sequências finitas: TEDAS documento → processamento → saídas (~3,4 s desktop/2,6 s compacto); MIND dois envelopes de fala sintéticos com pausa (~3,8/2,8 s); Perceptron x₁/x₂ → Σ → saída AND (~3,2/2,6 s). Não há simulação de treino, números de entrada, amostras reais de áudio ou resultados clínicos.

| Arquivo existente modificado na Fase 3 | Responsabilidade |
| --- | --- |
| src/components/ProjectArtwork.tsx | Seletores, halos e trajetos SVG para documentos, processamento, células e entradas/AND; layout preservado |
| src/motion/projectScenes.ts | Timelines finitas, envelopes determinísticos, propagação sobre segmentos, visibilidade e restauração dos atributos |
| src/components/PortfolioMotion.tsx | Histórico por ID em ref, sincronização de visibilidade e estabilização somente do card focado |
| src/styles/globals.css | Conexões estruturais discretas e overlays de fluxo/ativação inicialmente ocultos |

**Nenhum componente ou módulo de produção novo foi criado na Fase 3.** Atualizados também IMPLEMENTAR.md, ESTADO_ATUAL.md e PLANEJAMENTO_REFINAMENTO_VISUAL.md. Criados roteiros, JSONs e capturas locais em `.cache/refinement-projects-phase3/`: check.mjs, verify.mjs, final.mjs, diagnose.mjs, doc-start.mjs, close.mjs, baseline.json, summary.json e diretórios chrome/edge. Esses utilitários são evidências históricas, não scripts de produção. **Não executar close.mjs/doc-start.mjs como rotina de retomada:** eles escrevem registros daquele momento e podem duplicar ou substituir o checkpoint atual. O arquivo projectScenes.before.ts é uma cópia de investigação da versão anterior, não código a restaurar.

O git status contém 11 fontes modificadas, acumulando as Fases 2 e 3: NeuralGraph.tsx, PortfolioMotion.tsx, ProjectArtwork.tsx, data/heroGraph.ts, i18n/pt.ts, i18n/en.ts, motion/heroScene.ts, motion/projectScenes.ts, motion/transitionScenes.ts, sections/Hero.tsx e styles/globals.css (todos em src/). Não confundir esse acumulado com os quatro arquivos da última fase. Essas alterações locais devem ser preservadas; não reverter, trocar branch, fazer commit ou limpar o workspace por inferência.

### 3. Decisões técnicas e visuais vigentes

- Stack instalada: React 19.3.1, React DOM 19.3.1, TypeScript 6.0.3, Vite 8.3.4, Tailwind CSS 4.3.3, GSAP 3.15.0 e @gsap/react 2.1.2. Internacionalização tipada própria PT/EN; sem pacote de i18n novo, Canvas/WebGL, backend ou dependência adicional.
- Preservar arquitetura one-page, navegação nativa por âncoras, conteúdo profissional, fotografia, timeline acadêmica e certificações. Header continua com PT/EN; Hero conserva os CTAs aprovados Projetos + Fale comigo. E-mail permanece selecionável com botão de copiar, **sem mailto**. Essas decisões posteriores prevalecem sobre sugestões iniciais do briefing.
- Hero: 12 nós/30 arestas desktop em camadas 3–4–3–2, 8/15 no mobile; maior presença visual, sem legendas visíveis e com hierarquia grafite/principal/rotas vermelhas. Introdução finita, cursor limitado e passagem suavizada para Sobre já implementados na Fase 2; não refazer ao iniciar Contato.
- Projetos: uma sequência automática por ID durante a visita. Histórico Set em ref; idioma/details/refresh não reiniciam; perfil reconstruído após playback real assume repouso sem replay. Suspender fora da área útil e em aba oculta, retomar do ponto interrompido. Reduced-motion mantém a composição estática completa. Nenhum loop ambiente/hover do MIND foi aprovado.
- Consumo de playback exige um frame real confirmado por requestAnimationFrame cancelável, para preservar Strict Mode. Restauração inclui style/transform/data-svg-origin/cx/cy controlados. GSAP pode deixar style vazio após revert, sem estilo ativo. Não usar apenas presença do atributo para diagnosticar uma falha.
- MIND usa 27 barras desktop/14 no perfil compacto, envelopes fixos entre 0,55–1,05 e origem SVG individual central; nada aleatório por frame. Não atualizar estado React continuamente. Reutilizar os controladores existentes; evitar dois responsáveis pelos mesmos atributos.
- Não alterar ProjectDetails/ProjectCard ou a coordenação de layout/âncoras sem necessidade demonstrada e aprovação do novo conjunto. Details usa animação própria e transações de layout; os testes de âncoras devem aguardar scrollend/estabilidade, sem presumir fim aos 1 s.

### 4. Testes e evidências salvos

**Executados na implementação, não novamente neste encerramento documental:** npm run lint, npm run typecheck, npm run build e git diff --check aprovados. Chrome 155.0.8059.80 e Edge 155.0.4283.62, mesma build: 96 combinações de layout (48 por navegador), seis larguras 320/375/768/1024/1440/1920, PT/EN, normal/reduzido e details abertos/fechados. Dimensões principais preservadas dentro de 1 px, summaries >=44 px, sem overflow/pin; conteúdo e fotografia preservados.

24 sequências temporais amostradas (12 por navegador, três projetos × PT/EN × 375/1440) com scroll parado: sinais sobre as conexões, alturas individuais/centros das barras, duração aproximada, retorno ao repouso e zero mutações autônomas nas janelas de repouso. Passaram pausa/retomada fora da viewport, aba oculta simulada, idioma e mudança de perfil durante playback, foco por card, tela baixa e touch emulado. Teclado, reversões rápidas e idioma com details abertos passaram. Fixture PortfolioMotion em Strict Mode: triggers 20 → 39 → 20, ticker 1 → 1, um trigger por arte e atributos restaurados; não confundir com nova fixture isolada de ProjectDetails.

Regressões de Hero/cursor/geometria, âncoras nativas/histórico, semântica/nomes/IDs/ARIA, foco, nove pares computados de contraste e texto a 200% passaram. Reduced inicial não solicitou o módulo; reduced dinâmico não deixou estilos/transformações ativos. Chunk bloqueado conservou oito seções, três artes e details nativo. Zero exceções JavaScript finais. Não foi feito teste real de clipboard nesta fase.

Evidências: `.cache/refinement-projects-phase3/baseline.json`, `summary.json`, `chrome/results.json`, `edge/results.json`, capturas ativas/repouso e subdiretórios hero/navigation. O Chrome combinou os cenários aprovados e uma continuação `--tail` sobre a mesma build; Edge executou o roteiro completo. Falhas intermediárias de roteiro não são resultados finais; investigação de foco anterior ao carregamento está em `chrome/investigation-focus-before-module.json` e a análise de style vazio em diagnose.json. Aguardar o módulo assíncrono antes de afirmar estados. Não reutilizar os testes antigos de progresso de scroll como testes das novas timelines temporais.

Build final de 71 módulos: index-DFY_B1yz.js 275543 bytes/gzip Node 84057; PortfolioMotion-D0FtD0ee.js 130245/gzip 49638; index-CiLUUPch.css 33044/gzip 7409. Delta +898 bytes de JS gzip e +32 de CSS sobre o baseline; SHA-256 em summary.json. 55 arquivos fora do escopo mantiveram hashes. Servidores e navegadores temporários foram encerrados; consulta posterior não encontrou processos dos perfis desta fase.

**Validações pendentes:** aceite visual do proprietário, Safari/Firefox/iOS/físico, leitor de tela manual, zoom nativo, contraste por pixel/gradientes, BFCache, heap/listeners abrangentes, CPU/pintura/GPU/tarefas longas e CWV de campo. Os números locais não garantem fps ou conformidade integral. Consolidação da terceira evolução continua pendente na Fase 6; o orçamento/gatilhos de performance propostos ainda precisam de aprovação.

### 5. Problemas conhecidos e dificuldades

Não há bug bloqueante reproduzido pendente nos cenários finais executados. Contato ainda usa a pequena NeuralGraph existente e um único parágrafo; a quebra de “IA e dados?” e a composição atmosférica **ainda não foram corrigidas**. GraphBackdrop não foi criado. Os campos de grafos por seção da terceira evolução também não existem; conectores/decorações anteriores permanecem.

O ambiente restringiu Vite/processos nativos (EPERM/carregamento do módulo nativo do Tailwind) e Chrome no sandbox; build e browser funcionaram com execução externa aprovada. Não alterar dependências ou configuração de deploy para contornar essas restrições. A consulta de processos também exigiu leitura externa aprovada. Instalação de novas ferramentas não está autorizada. Documentação e `.cache/` são locais/ignoradas: uma sessão apenas sobre o remoto não recupera este histórico. Não abrir exceção no Git ou publicar documentação automaticamente.

### 6. Próxima tarefa exata e dependências

**Retomar pela apresentação da proposta executável da Fase 4, sem iniciar código.** Ler AGENTS.md e PORTFOLIO_BRIEF.md integralmente, este checkpoint, IMPLEMENTAR.md e as seções E, F, G/Fase 4 e H do planejamento ativo. Conferir o código real e perguntar sobre o aceite visual das entregas se necessário, sem tratar sua ausência como bug ou autorização futura.

1. Inspecionar src/sections/Contact.tsx, src/motion/transitionScenes.ts, as regras contact-* de globals.css e contact nos dois dicionários. Hoje Contact renderiza NeuralGraph sob data-transition-contact, descrição única, e-mail/copiar/status e GitHub/LinkedIn. Preservar os handlers e o estado desses controles.
2. Apresentar a composição proposta: GraphBackdrop local com variante contact, campo periférico amplo em grafite/vermelho e zona calma atrás do texto; substituir apenas a pequena instância atual. SVG local + CSS + SectionConnector existente; sem camada global pesada. Introdução finita candidata ~2,8 s, suspendível, sem duplicar o pulso existente. Essa direção ainda é proposta, não implementação aprovada.
3. Propor a divisão do PT em “Curtiu algum projeto ou quer trocar uma ideia sobre IA e dados?” / “Me encontre por aqui.” e do EN preservando palavras: “Interested in a project or want to talk about AI and data?” / “You can reach me here.” Decidir contrato tipado description/invitation e eventual fragmento traduzido para manter “IA e dados?”/“AI and data?” unido somente quando houver espaço desktop; mobile deve quebrar naturalmente. Nenhuma reescrita profissional além da correção já pedida.
4. Reapresentar arquivos previstos: **novo** src/components/GraphBackdrop.tsx; alterar src/sections/Contact.tsx, src/styles/globals.css, src/motion/transitionScenes.ts, src/i18n/pt.ts e src/i18n/en.ts; os três documentos para andamento. PortfolioMotion.tsx somente se demonstrada a necessidade e incluído explicitamente na proposta antes da autorização. Não criar fundos de outras seções nesta fase.
5. Explicar critérios/testes: integração atmosférica e contraste, PT/EN e frase desktop/mobile, 320/375 e larguras maiores, texto 200%, touch/tela baixa, reduced inicial/dinâmico, visibilidade/repouso/cleanup, fallback sem chunk, navegação/links e copiar/status com falhas/concorrência simuladas; lint/typecheck/build após implementar. Teste **real** de clipboard exige autorização específica nova. Pedir aprovação do conjunto exato e aguardar.

Só após essa aprovação, registrar a autorização, capturar o baseline do Contato e executar o primeiro item de implementação da Fase 4. Dependências: Fase 3 tecnicamente concluída, definições artísticas E/F e contrato PT/EN aceitos para Contato, infraestrutura GSAP/SectionConnector existente preservada. Fases 5/6 exigirão propostas e aprovações posteriores próprias.

### 7. Autorizações e limites para a próxima sessão

- Já autorizados e executados: planejamento da terceira evolução; Fase 2 específica (oito fontes); Fase 3 específica (quatro fontes, sequências sem hover); verificações técnicas proporcionais. Aprovações anteriores são históricas e não liberam fases novas.
- Pedido atual autoriza atualizar este ESTADO_ATUAL.md existente e os checklists de planejamento. Este encerramento modifica somente ESTADO_ATUAL.md, PLANEJAMENTO_REFINAMENTO_VISUAL.md e IMPLEMENTAR.md, preservando os relatos anteriores; não cria outro arquivo de estado nem altera fontes/assets/dependências/build/deploy.
- Pendentes: aceite visual de Hero/Projetos e decisões artísticas futuras; autorização exata das Fases 4, 5 e 6; hover opcional do MIND, movimento periférico opcional e gatilhos/orçamento de performance. Aprovação de fase não é aprovação da seguinte nem publicação.
- Não autorizados: nova implementação neste encerramento; commits/pushes/branches/remotos, deploy/publicação, exclusões destrutivas, custos, novas dependências/serviços, alteração de dados/foto/experiências/certificações, remoção PT/EN/one-page/timeline, mailto, backend/chatbot/RAG. Não copiar currículo privado para public/. Não repetir clipboard real ou enviar mensagens.

**Retomada em uma frase:** apresentar escopo, arquivos e validações da Fase 4 — Contato e aguardar autorização explícita; a primeira tarefa de código futura será substituir a pequena composição por GraphBackdrop contact e tratar a descrição bilíngue conforme o escopo aprovado.

---

## Entrega vigente — terceira evolução, Fase 3: Projetos

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

Os blocos seguintes registram entregas anteriores; suas aprovações e pendências são históricas.

## Entrega anterior — terceira evolução, Fase 2: Hero

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

Os blocos seguintes são históricos; suas autorizações se referem à época de cada registro.

## Novo planejamento — terceira evolução visual, 18/10/2026

Criado `PLANEJAMENTO_REFINAMENTO_VISUAL.md` por solicitação do proprietário, com auditoria da base existente, direção gráfica, proposta do Hero sem legendas, storyboards dos três projetos, novo cenário de Contato, backgrounds por seção e roadmap de seis fases. Autorização restrita a análise/documentação; nenhuma fase de implementação da terceira evolução foi iniciada ou autorizada. A direção proposta aguarda avaliação e cada implementação exigirá aprovação própria. O encerramento técnico da segunda evolução abaixo permanece como referência da aplicação atual.

## Entrega vigente — Fase 8, 18/10/2026

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

Os blocos abaixo são históricos; suas próximas fases e limitações descrevem cada entrega anterior.

## Entrega anterior — Fase 7, 18/10/2026

**Autorização:** “sim” à proposta de timeline vertical, textos exatos PT/EN preservados e quatro arquivos de código. **Situação:** Fase 7 concluída tecnicamente, com implementação/validação final locais; aguardar avaliação visual do proprietário. Nenhuma fase em execução. Fase 8 permanece não autorizada.

- UECE em destaque, 2021–2027 e conclusão prevista em 2027 explícita; SENAI logo abaixo, 2019–2022. Nenhum complemento acadêmico adicionado.
- Lista semântica de uma coluna, eixo lateral/markers decorativos, preenchimento e entradas reversíveis por scroll. Reduced-motion/falha do módulo mantém timeline estática completa.
- Arquivos: `Education.tsx`, `globals.css`, `PortfolioMotion.tsx`, novo `motion/educationScene.ts`. Dados, tipos, dicionários e dependências preservados; sem publicação.
- Lint/typecheck/build/diff aprovados; evidências finais em `.cache/evolution-education-phase7/results.json`, roteiro e quatro capturas PT/EN em 375/1440.
- Próxima após esta entrega: proposta da Fase 8, validação consolidada, ainda sem autorização.

Os blocos abaixo registram entregas anteriores e suas evidências.

**Validação vigente:** 48 combinações (seis larguras × PT/EN × normal/reduzido × details fechados/abertos), sem overflow/pin; dois cards em uma coluna, UECE com título maior/card >= SENAI, centros dos marcadores alinhados ao trilho dentro de 0,6 px. Textos integrais das seções, períodos/status e ordem dos dois registros preservados em ambos os idiomas. Lista semântica local/h2/h3, decorações ocultas à acessibilidade e ausência de progressbar acadêmico conferidas.

Quatro sequências (PT/EN × 375/1440) em sete poses confirmaram avanço/reversão, entrada até 8/16 px e cards sempre com opacidade 1. Texto 200% em 320, tela baixa/touch, idioma durante expansão do MIND e 14 âncoras com hash/foco/destino visível passaram. Reduced-motion inicial sem download/dinâmico sem resíduos e chunk bloqueado com oito seções/timeline estática íntegra. Strict Mode do módulo de movimento: triggers 20→39→20, ticker 1→1 e atributos restaurados; não é fixture específica de ProjectDetails. Zero exceções JavaScript finais. Capturas examinadas; Chrome/servidores encerrados.

**Build vigente:** 71 módulos; JS principal 274,81 kB/gzip 84,90, movimento 127,69/gzip 49,16 e CSS 33,00/gzip 7,40. Arquivos `index-BkDiZmYn.js` (274.813 bytes), `PortfolioMotion-CHjK_jEU.js` (127.695) e `index-Cc5SMP2d.css` (33.003). JS gzip ~+0,43 kB e CSS gzip ~+0,18 kB sobre Fase 5, sem dependências novas. Build/browser executados com aprovação fora do sandbox após EPERM de processos nativos.

**Limites atuais:** Chrome emulado; sem nova cobertura de outros browsers/dispositivo físico/leitor de tela manual, contraste/heap integrais, BFCache, clipboard real ou CWV de campo. Fase 8 segue pendente e exige autorização própria; testes desta fase não equivalem à regressão consolidada. Sem commit, push ou deploy. Detalhes na seção 16 do planejamento e no topo de `IMPLEMENTAR.md`.

## Entrega anterior — Fase 5, 18/10/2026

**Autorização:** “sim” à proposta detalhada de três animações específicas de projetos, arquivos e testes. **Situação:** Fase 5 concluída tecnicamente, com implementação/validação final locais; aguardar avaliação visual do proprietário. Nenhuma fase em execução. Código da Fase 4 e sua coordenação de âncoras mobile preservados.

- TEDAS: documento, ramificações, sinais e células abstratas.
- MIND: waveform sintética determinada pelo scroll, conexão e blocos de representações; versão mobile simplificada.
- Perceptron C: sinais de x₁/x₂ até somatório e saída AND, preservando pesos manuais e status dos planos futuros.
- Novos seletores SVG e `src/motion/projectScenes.ts`; integração em `PortfolioMotion.tsx` substitui movimentos genéricos. CSS de fallback completo e perfis simplificados. Nenhum dado, tradução, foto, dependência ou configuração de publicação novo.
- Lint/typecheck/build/diff aprovados; evidências finais em `.cache/evolution-projects-phase5/results.json`, capturas e roteiros. Nenhuma nova alteração de navegação permaneceu no código da Fase 5.
- Próxima fase após esta entrega: 7, timeline acadêmica; texto/desenho e execução ainda dependem de autorização. Fase 8 também não autorizada.

O bloco da Fase 4 abaixo registra a entrega anterior; suas informações não autorizam a Fase 7 nem substituem a validação atual da Fase 5.

**Validação vigente:** 48 combinações de seis larguras × PT/EN × normal/reduzido × details fechados/abertos, sem overflow/pin ou mudança de altura da arte/composição principal acima de 1 px; summaries >=44 px. Três cenas em 375/1440, sete poses por cena, reversão e sinais sobre segmentos; textos das seções/projetos e foto preservados em PT/EN. Capturas desktop/mobile examinadas. Texto 200% em 320, tela baixa/touch, idioma durante expansão dos três cards e 14 âncoras em EN com details abertos passaram. End interrompeu a navegação nativa sem posterior retorno.

Reduced-motion inicial sem download; dinâmico restaura atributos das artes. Chunk bloqueado mantém oito seções/details nativo. Strict Mode do módulo de movimento em fixture completa: triggers 17→33→17, ticker 1→1 e SVG restaurado; não atribuir a ProjectDetails isoladamente. Zero exceções JavaScript finais. O roteiro passou a ler transformações no atributo SVG e aguardar scrollend/estabilidade: uma leitura aos 1 s capturava um trajeto longo ainda em curso, concluído corretamente em ~1,4 s. Ajuste experimental de alinhamento retirado; sem nova mudança de navegação na entrega final.

**Build vigente:** 70 módulos; JS principal 274,24 kB/gzip 84,78, movimento 126,26/gzip 48,85, CSS 31,90/gzip 7,22. Arquivos `index-BWRLVzXN.js` (274.247 bytes), `PortfolioMotion-DVeMPoXV.js` (126.263) e `index-CnFqM5EN.css` (31.908). JS gzip ~+0,98 kB e CSS gzip ~+0,08 kB sobre Fase 4. Sem dependência nova. Processos nativos exigiram aprovação fora do sandbox após EPERM.

**Limites atuais:** seis amostras de 37 frames (222 no total), p95 local 16,7–16,8 ms; não é garantia de fps/CWV. Chrome emulado; sem nova cobertura de outros browsers/dispositivo físico/leitor de tela manual/contraste ou heap integrais/BFCache/clipboard real. Fase 8 não concluída por esta validação parcial. Navegadores/servidores temporários encerrados; sem commit, push ou deploy. Detalhes na seção 15 do planejamento e no topo de `IMPLEMENTAR.md`.

## Entrega anterior — Fase 4 da segunda evolução, 18/10/2026

**Autorização:** “sim” à proposta de implementar somente a Fase 4, com as quatro transições, arquivos e verificações apresentados. **Situação:** Fase 4 concluída tecnicamente e validada localmente; aguardar avaliação visual do proprietário. Nenhuma fase em execução.

- Concluídas anteriormente: aplicação inicial, primeira evolução e Fases 1, 2, 3 e 6 da segunda evolução.
- Entrega desta retomada: conectores SVG reutilizáveis; transições reversíveis Hero → Sobre, Sobre → Projetos, Projetos → Experiência e entrada de Contato; sinal final único, sem loop.
- Wrappers independentes preservam a geometria/cursor do Hero, a foto e o grafo padrão de Contato. Mobile/touch/tela baixa têm amplitudes menores; reduced-motion e chunk indisponível mantêm composição estática.
- Corrigida interrupção da rolagem suave mobile: o refresh causado pelo fechamento do menu aguarda o término da âncora nativa, com fallback de 1800 ms e cancelamento no cleanup.
- Nenhuma dependência, dado profissional, tradução, foto ou configuração de publicação alterada. Scroll nativo, sem pinning/altura artificial.
- **Próxima fase:** 5, animações específicas dos projetos. **Não autorizada.** Fases 7 e 8 também não autorizadas. Aceite visual geral permanece com o proprietário.

**Código afetado:** novos `src/components/SectionConnector.tsx` e `src/motion/transitionScenes.ts`; alterações em `src/components/PortfolioMotion.tsx`, cinco seções (`Hero`, `About`, `Projects`, `Experience`, `Contact`) e `src/styles/globals.css`.

**Evidências desta fase:** `.cache/evolution-transitions-phase4/`, com roteiros, capturas, `results.json` e checagem complementar `followup.json`. Lint/typecheck/build/diff passaram; matriz final com 48 combinações, quatro cenas reversíveis e conectores alinhados até 1 px, sem overflow/pin. Quatorze trajetos de âncoras desktop/mobile com hash/foco/destino visível; complemento com sete âncoras mobile em movimento normal/reduzido, voltar/avançar e sinal único de Contato aprovado. O teste inicial de posição foi fortalecido após detectar e corrigir o cancelamento da rolagem mobile pelo refresh.

**Demais verificações atuais:** baseline PT/EN/artes/foto preservado; Home/End/PageUp/PageDown com direção/posição conferidas; idioma durante expansão, texto 200% em 320, tela baixa 1024×450 e emulação touch; cópia simulada e links; reduced-motion inicial sem download/dinâmico sem resíduos e chunk bloqueado com details nativo. Strict Mode do módulo de movimento em fixture completa: triggers 17→33→17, ticker 1→1 e atributos restaurados. Zero exceções JavaScript na matriz final. Não atribuir essa fixture ao ProjectDetails isoladamente. Chrome e servidores temporários encerrados.

**Build atual:** 69 módulos; JS principal 271,97 kB/gzip 84,41; movimento 124,03/gzip 48,24; CSS 31,40/gzip 7,14. Arquivos `index-BtryKkze.js` (271.971 bytes), `PortfolioMotion-DRWEwv13.js` (124.036) e `index-Bc3yMBBN.css` (31.406). Aumento JS gzip ~1,22 kB sobre a Fase 6, sem nova dependência. Build/browser executados com aprovação fora do sandbox após EPERM dos processos nativos.

**Limites vigentes:** Chrome emulado; sem nova cobertura de outros browsers/dispositivo físico/leitor de tela manual/contraste ou heap integrais/benchmark de frames/CWV de campo. Cópia atual simulada, sem sobrescrever clipboard real; BFCache não comprovado. A validação parcial desta fase não conclui a Fase 8. Mais detalhes e decisões na seção 14 de `PLANEJAMENTO_EVOLUCAO_VISUAL.md`.

**Git conferido na retomada:** árvore inicialmente limpa; os 12 arquivos apontados como alterações locais no registro anterior já estavam no commit `237757a`. Esta retomada não executou commit, push, mudança de branch/remoto ou deploy. Markdown segue local/ignorado.

## Registro anterior — encerramento após a Fase 6 (histórico)

As seções abaixo preservam o encerramento anterior e suas evidências. Afirmações de “próxima Fase 4”, “não autorizada” e arquivos locais pendentes descrevem aquele momento e foram superadas pela retomada acima.

**Atualizado em:** 18/10/2026. **Situação:** desenvolvimento encerrado por hoje a pedido do proprietário. Nenhuma fase em execução; aguardar novas instruções.

Este arquivo é o resumo de retomada. Processo obrigatório em `AGENTS.md`, conteúdo confirmado em `PORTFOLIO_BRIEF.md`, histórico em `IMPLEMENTAR.md` e detalhes da segunda evolução em `PLANEJAMENTO_EVOLUCAO_VISUAL.md`. `MELHORIAS_PORTFOLIO.md` registra a primeira evolução e não deve ser confundido com o roadmap atual.

## 1. Fases e aprovações

A aplicação inicial e as nove fases da primeira evolução constam como concluídas no escopo técnico local dos históricos. Isso não conclui as fases da segunda evolução nem comprova cobertura em produção.

**Ordem aprovada da segunda evolução:** 1 → 2 → 3 → 6 → 4 → 5 → 7 → 8.

| Fase | Autorização recebida | Execução/validação | Pendência |
| --- | --- | --- | --- |
| 1 — Auditoria | Auditoria/arquitetura aprovadas expressamente | Concluída documentalmente, com medições/capturas e limitações registradas | Nenhuma implementação associada |
| 2 — Grafo do Hero | Composição e implementação aprovadas, com estética orgânica/rótulos discretos | Concluída tecnicamente: SVG desktop/mobile, dados e geometria; testes/build registrados | Aceite visual final geral não formalizado |
| 3 — Sistema global | “continue” após a entrega da 2 | Concluída tecnicamente: introdução finita, cursor e infraestrutura de layout; testes/build registrados | Aceite visual final geral não formalizado |
| 6 — Detalhes/tipografia | “continue” após a 3 + CTA Fale comigo solicitado expressamente | Última implementação concluída tecnicamente; validação local descrita abaixo | Avaliação visual da última entrega |
| 4 — Transições cinematográficas | **Não autorizada** | Não iniciada | Próxima fase prevista; apresentar composição, comportamento e arquivos |
| 5 — Animações específicas dos projetos | **Não autorizada** | Não iniciada | Definir/revisar cenas TEDAS, MIND e Perceptron C |
| 7 — Timeline acadêmica | Direção vertical/graduação em destaque aprovada; **implementação não autorizada** | Não iniciada; Formação ainda tem dois cards | Verificar complementos e aprovar texto/desenho exatos |
| 8 — Validação consolidada | **Não autorizada** | Não iniciada | Responsividade/a11y/performance/regressões finais após fases restantes |

“Concluída tecnicamente” significa implementação e verificações proporcionais ao escopo, não aceite visual final, certificação de acessibilidade ou autorização para publicar. Testes parciais não marcam a Fase 8 como concluída.

## 2. Última implementação — Fase 6

- Cards com linha principal de arte/texto e região de detalhes abaixo, ocupando toda a largura do mesmo card. Abrir o painel não estica a ilustração.
- `details/summary` nativo com enhancement por Web Animations API: altura medida, duração de 260 ms, reversões rápidas e retorno à altura natural ao terminar.
- Foco protegido: summary fora do recorte, corpo inert durante fechamento, conclusão de abertura ao focar conteúdo e retorno ao summary ao recolher conteúdo focado.
- Cancelamento seguro em troca de idioma/tamanho/preferência; fallback nativo em reduced-motion ou ausência da API.
- Integração com transações de layout da Fase 3; corrigido o refresh duplicado observado no primeiro teste. Notificações finais são agrupadas antes de um refresh de conclusão.
- Tokens responsivos de leitura, metadados e tags. Descrições/detalhes/atividades/formação: cerca de 16,08 px a 375 e 17,68 px a 1440; tags 13–13,79 px; metadados 14–15 px nos tamanhos examinados.
- Hero com **Conhecer projetos + Fale comigo**; em EN, **Explore projects + Get in touch**. Fale comigo aponta para `#contato`. GitHub e LinkedIn continuam no Contato.
- Textos, projetos, tecnologias, status de pesquisa, foto e credenciais preservados. Nenhuma dependência nova ou alteração de publicação.

## 3. Arquivos modificados

### 3.1 Última fase (6)

| Arquivo | Alteração |
| --- | --- |
| `src/components/ProjectCard.tsx` | Wrapper da composição principal e detalhes no rodapé |
| `src/components/ProjectDetails.tsx` — novo | Semântica, animação, cancelamento, foco e transação de layout |
| `src/styles/globals.css` | Grid/alternância, painel full-width e tokens tipográficos |
| `src/motion/layoutRefresh.ts` | Agrupamento de notificações finais para evitar refresh duplicado |
| `src/sections/Hero.tsx` | Substituição dos dois CTAs profissionais por âncora de contato |
| `src/i18n/pt.ts`, `src/i18n/en.ts` | Rótulo Fale comigo/Get in touch e retirada das chaves antigas do Hero |
| `PLANEJAMENTO_EVOLUCAO_VISUAL.md`, `IMPLEMENTAR.md` | Checklists, testes e registro de execução |

### 3.2 Árvore de trabalho no encerramento (leitura de Git)

São **12 arquivos-fonte com alterações locais acumuladas da segunda evolução**. Essa lista não indica que todos foram alterados na última fase ou neste encerramento documental.

| Estado local | Arquivo | Origem |
| --- | --- | --- |
| Modificado | `src/components/NeuralGraph.tsx` | Fase 2 |
| Modificado | `src/components/PortfolioMotion.tsx` | Fase 3 |
| Modificado | `src/components/ProjectCard.tsx` | Fase 6 |
| Modificado | `src/i18n/en.ts` | Fases 2/6 |
| Modificado | `src/i18n/pt.ts` | Fases 2/6 |
| Modificado | `src/sections/Hero.tsx` | Fases 2/6 |
| Modificado | `src/styles/globals.css` | Fases 2/6 |
| Novo, não rastreado | `src/components/ProjectDetails.tsx` | Fase 6 |
| Novo, não rastreado | `src/data/heroGraph.ts` | Fase 2 |
| Novo, não rastreado | `src/motion/graphGeometry.ts` | Fase 2 |
| Novo, não rastreado | `src/motion/heroScene.ts` | Fase 3 |
| Novo, não rastreado | `src/motion/layoutRefresh.ts` | Fases 3/6 |

Nenhum commit, push, reset, descarte, mudança de branch/remoto ou deploy foi executado nesta sessão. `package.json`/lockfile não aparecem alterados no status consultado. Preservar essa árvore na retomada.

**Neste encerramento:** somente os dois documentos de acompanhamento acima e este novo `ESTADO_ATUAL.md` foram escritos. `.md` permanece ignorado pela regra `*.md`: os documentos existem localmente, mas não serão enviados ao GitHub por padrão. Não alterar essa regra ou remover arquivos do índice sem autorização específica. Artefatos/roteiros `.cache/` e build `dist/` também são locais/ignorados.

## 4. Stack e decisões técnicas vigentes

| Ferramenta | Versão no manifesto | Uso |
| --- | --- | --- |
| React / React DOM | 19.3.1 | Interface em página única; Strict Mode |
| TypeScript | 6.0.3 | Tipagem estrita |
| Vite / plugin React | 8.3.4 / 6.1.2 | Desenvolvimento e build estático |
| Tailwind / plugin Vite | 4.3.3 | Estilos com CSS/tokens existentes |
| GSAP | 3.15.0 | Timeline finita e interpolação; ScrollTrigger vem do mesmo pacote |
| @gsap/react | 2.1.2 | useGSAP e contexto/cleanup |
| ESLint / typescript-eslint | 10.13.0 / 8.71.2 | Verificação estática |

Requisitos declarados: Node `^22.13.0 || >=24.0.0`, npm >=10. Scripts disponíveis: `dev`, `preview`, `lint`, `typecheck`, `build`; não há `npm test`/framework permanente de testes. Roteiros de browser locais usam Chrome/CDP e ferramentas já disponíveis; não são dependência da aplicação.

Decisões aprovadas e já aplicadas:

- Evoluir a aplicação existente, mantendo preto/grafite/vermelho, página única, foto e PT/EN.
- GSAP/ScrollTrigger + SVG 2D + CSS, sem novas dependências na segunda evolução e com scroll nativo. Lenis, Motion, Three.js/R3F e pinning não foram adicionados.
- Grafo orgânico em camadas: desktop 12 nós/30 conexões; mobile 8 nós/15 conexões. Poses/rotas e funções puras compartilhadas mantêm arestas/sinais conectados aos nós.
- Introdução finita (~4 s desktop/~2,4 s mobile), seguida de repouso. Sem botão de pausa ou ambiente automático em loop, conforme decisão explícita do proprietário. Cursor só responde à interação desktop apta.
- `PortfolioMotion` opcional/lazy: preferência reduzida inicial não solicita o módulo; fallback mantém conteúdo estático. Cleanup por contexto, abort de listeners e cancelamento de callbacks/timelines.
- Details nativo + WAAPI, em rodapé full-width; transações de layout agrupam medições. Os novos tokens não substituem as fontes de sistema.
- Formação vertical com graduação em destaque aprovada como direção futura. Implementação e texto complementar exato ainda dependem da Fase 7.
- Preservar ausência de repositórios públicos dos projetos e classificação correta do Perceptron manual AND. Não sugerir resultados clínicos, pesos treinados/MLP/CNN concluídos ou credenciais não confirmadas.
- Sem formulário, backend, chatbot/RAG, novas páginas, publicações ou configuração de deploy neste ciclo.

## 5. Testes executados e resultados

**Não houve nova rodada de testes/build neste encerramento documental.** Os resultados abaixo foram conferidos nos registros das respectivas implementações. Não somar os cenários como se constituíssem uma suíte única da build final; as versões e escopos diferem.

| Entrega | Verificações registradas | Resultado / evidência |
| --- | --- | --- |
| Fase 2 | Lint/typecheck/build; dois perfis, dez poses; 24 layouts Chrome; PT/EN; teclado/texto 200%; foto/Contato | Passou no escopo; `.cache/evolution-hero-phase2/results.json` |
| Fase 3 | Lint/typecheck/build; 24 layouts; introdução, sinais, cursor, interrupções, preferências, fallback, Strict Mode e transações | Passou no escopo; `.cache/evolution-motion-phase3/results.json` e `frames.json` |
| Fase 6 — versão mais recente | Lint/typecheck/build e diff; 48 combinações de layout; conteúdo/artes/foto; WAAPI/teclado/foco/fallback/CTA | Passou no escopo; `.cache/evolution-details-phase6/results.json` e `baseline.json` |

Detalhes relevantes:

- **Fase 3:** 241 frames amostrados; maior separação observada entre extremos das conexões e nós: zero; sinais em 107 frames; intervalo p95 local ~16,7 ms. Cursor observado ~2,26 unidades SVG (limite 4), zero mutações ociosas na janela após estabilizar. Strict Mode do PortfolioMotion: triggers 15→18→15 e ticker 1→1, com SVG restaurado. Isso não certifica o novo ProjectDetails da Fase 6 em Strict Mode.
- **Fase 6:** seis larguras (320/375/768/1024/1440/1920) × PT/EN × normal/reduzido × aberto/fechado = 48 combinações, sem overflow horizontal. Nos três cards, linha principal/arte estáveis até 1 px, summaries >=44 px e rodapé full-width.
- Baseline integral PT/EN confirmou textos/tecnologias/detalhes/artes/foto preservados fora da mudança intencional dos CTAs. Texto 200% em 320 px com painéis abertos passou.
- Expansão real, dez reversões rápidas, idioma durante abertura/fechamento, resize/reduced durante animação, foco interno/retorno ao summary e API de animação ausente passaram. Após correção, zero refreshes durante expansão e um depois de estabilizar, sem altura inline residual.
- CTA Contato por Enter em PT/EN e 375/1440 px manteve hash/foco e título abaixo do header; links profissionais continuam no Contato. Zero exceções JavaScript na execução final.
- Capturas disponíveis: `.cache/evolution-details-phase6/hero-375.png`, `hero-1440.png`, `mind-375.png`, `mind-1440.png`; revisão visual registrada nesta entrega de Hero mobile e MIND desktop/mobile. Frames de grafo no cache da Fase 3.

**Último build validado (Fase 6):** 67 módulos; JS principal 270,72 kB/gzip 84,11; movimento 121,07 kB/gzip 47,32; CSS 30,44 kB/gzip 6,87, valores arredondados do Vite. Artefatos presentes conferidos no encerramento: `index-smoaTwbn.js` (270.726 bytes), `PortfolioMotion-BYs-zWEI.js` (121.073 bytes), `index-qRzslxXq.css` (30.449 bytes). Presença/tamanho não equivalem a executar um novo build. O ganho/custo de chunks não constitui medição de CWV em produção.

## 6. Problemas conhecidos e limites

Nenhum defeito funcional pendente foi reproduzido na última matriz executada. Limites e pendências continuam explícitos:

- Segunda evolução testada principalmente em Chrome 155 emulado. Sem nova cobertura Safari/Firefox/iOS/dispositivo físico ou leitor de tela manual; Chrome/Edge da primeira evolução são registros históricos.
- Sem auditoria integral atual de contraste, heap, INP/CWV de campo ou desempenho em hardware fraco. Paleta preservada; medições locais não garantem produção.
- Novo ProjectDetails teve cleanup exercitado por troca de idioma durante animação, mas não uma fixture específica de Strict Mode. Não marcar essa cobertura como concluída.
- Sem novo teste real de cópia de e-mail após a segunda evolução. O fluxo de cópia não foi modificado; testes reais da primeira evolução não devem ser apresentados como nova execução.
- Custo histórico do motor perto de 47 kB gzip acima da antiga referência de investigação de 40 kB permanece documentado; não foi apagado/redefinido. GSAP existente foi mantido, sem dependências redundantes. Novo orçamento formal não aprovado.
- Acesso direto ao LinkedIn foi limitado; trechos públicos indexados podem estar truncados/defasados. Complementos acadêmicos não publicados automaticamente; dados-base UECE/SENAI permanecem os do brief.
- Cloud Practitioner segue oculto (`display: false`) até confirmação; sem URLs/badges oficiais de credenciais fornecidos para adicionar. Não inventar.
- Transições cinematográficas entre seções, artes animadas específicas e timeline acadêmica ainda não foram entregues. Formação atual com dois cards não é a timeline da Fase 7.
- Erros intermediários já corrigidos, não pendências abertas: build com EPERM no sandbox (execução aprovada fora dele passou), ajustes de roteiro/cleanup nas fases anteriores e refresh final duplicado da Fase 6 (execução final confirmou um).

## 7. Pendências e decisões que exigem aprovação

- [ ] Proprietário avaliar visualmente as entregas e registrar aceite final geral ou ajustes concretos.
- [ ] Apresentar proposta/arquivos e obter autorização da **Fase 4 — transições cinematográficas**.
- [ ] Aprovar cenas específicas e execução da Fase 5; manter gráficos conceituais sem resultados inventados.
- [ ] Verificar complementos acadêmicos, apresentar texto PT/EN/desenho e obter autorização da Fase 7; preservar UECE 2021–2027 com previsão em 2027 e SENAI 2019–2022.
- [ ] Autorizar Fase 8 e executar a regressão consolidada depois das demais fases, registrando cobertura indisponível.
- [ ] Decidir especificamente qualquer pinning, Lenis, plugin/dependência, 3D, mudança substancial de escopo ou custo não previsto. Nada disso está liberado por aprovar o roadmap.
- [ ] Fornecer/validar credenciais/URLs caso queira alterar as certificações pendentes; nenhuma adição automática.
- [ ] Autorizar separadamente qualquer commit, push, mudança de Git/deploy ou publicação; não executar agora.

Não estão pendentes de nova decisão: ordem do roadmap, stack inicial, simplificação mobile, ausência de botão/loop ambiente, composição aprovada do grafo, details full-width/tipografia e novo CTA do Hero. Essas decisões persistem.

## 8. Ponto de retomada

1. Ler `AGENTS.md`, `PORTFOLIO_BRIEF.md`, este estado, `IMPLEMENTAR.md` e o planejamento vigente.
2. Conferir a árvore local sem descartar/reescrever o trabalho existente. Resumos antigos “próxima fase não autorizada” nos registros de execução descrevem a data daquela entrega; usar o quadro atual para decidir o próximo passo.
3. Revisar as capturas da Fase 6 e eventuais comentários do proprietário.
4. Quando solicitado, apresentar proposta concreta da Fase 4 com arquivos afetados, continuidade gráfica, comportamento reverso/mobile/reduced e critérios de validação. Aguardar autorização antes de editar código.
5. Restante previsto: **4 → 5 → 7 → 8**. Não repetir as fases concluídas ou tratar um pedido de leitura/retomada como autorização para implementar.

Os navegadores/servidores temporários usados nos roteiros foram encerrados ao fim das validações. Neste encerramento não foi iniciado servidor novo. Os três documentos estão no diretório local e fora de `public/`/`src/`; nenhuma informação de implementação foi adicionada ao fluxo do visitante.

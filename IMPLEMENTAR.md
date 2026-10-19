# Plano de implementação — Portfólio de Waldeney Filho

Atualizado em: 19/10/2026.

## Encerramento documental — 19/10/2026

**Situação:** sessão encerrada pelo proprietário; sem implementação em andamento. Terceira evolução: auditoria/plano entregues, Fases 2 (Hero) e 3 (Projetos) concluídas tecnicamente; aceite visual pendente. Fases 4 (Contato), 5 (backgrounds) e 6 (consolidação) não iniciadas/não autorizadas. Nenhum conjunto de código parcialmente implementado ficou aberto. Detalhes completos e arquivos para retomada estão no início de ESTADO_ATUAL.md; planejamento ativo: PLANEJAMENTO_REFINAMENTO_VISUAL.md, E/F/G/H.

- [x] Reler regras/briefing, estado, planejamento ativo, evidências e estado local do código.
- [x] Acrescentar checkpoint detalhado ao ESTADO_ATUAL.md existente, preservando o histórico e sem criar outro arquivo de estado.
- [x] Sincronizar checklists do planejamento: separar conclusão técnica, aceite visual e autorização de fases futuras.
- [ ] Receber avaliação/aceite visual das Fases 2 e 3.
- [ ] Apresentar escopo exato da Fase 4 e receber autorização própria antes de criar GraphBackdrop ou alterar Contato.
- [ ] Executar a Fase 4 somente após essa aprovação; fases seguintes dependem de novas propostas/autorizações.

**Próxima tarefa:** proposta executável do Contato. Arquivos previstos: novo src/components/GraphBackdrop.tsx; src/sections/Contact.tsx, src/styles/globals.css, src/motion/transitionScenes.ts, src/i18n/pt.ts e src/i18n/en.ts; PortfolioMotion.tsx somente se necessário e incluído previamente no escopo. Propor campo periférico, texto PT/EN em pergunta/convite e quebra responsiva; preservar e-mail/copiar/status/links sem mailto. Não implementar nesta retomada antes de autorização.

Este encerramento autoriza somente documentação nos três arquivos locais existentes: ESTADO_ATUAL.md, PLANEJAMENTO_REFINAMENTO_VISUAL.md e IMPLEMENTAR.md. Os testes da Fase 3 abaixo são resultados já executados, não novos testes deste encerramento. Sem alteração de fontes, estilos, SVGs, dependências, build ou deploy; sem commit/push/branch/publicação. Clipboard real futuro exige autorização específica. O checkpoint no início do estado prevalece sobre menções históricas a “próxima fase” nos relatos anteriores.

## Entrega vigente — terceira evolução, Fase 3: Projetos

- [x] Conferir regras, briefing, planejamento e controladores reais; registrar aprovação.
- [x] Capturar baseline de 12 layouts PT/EN, conteúdo, fotografia, hashes e custo.
- [x] Concluir TEDAS, MIND e Perceptron com visibilidade, histórico e cleanup.
- [x] Validar seis larguras, PT/EN, movimento reduzido, foco e detalhes expansíveis.
- [x] Validar cenas com scroll parado, suspensão, retomada, Strict Mode e repouso.
- [x] Registrar verificações, custo, limitações e próxima fase, sem iniciá-la.

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

**Aprovação:** concluída tecnicamente após o “sim” à proposta de implementar somente a Fase 2, com oito arquivos e testes apresentados. **Objetivo:** maior presença do grafo, camadas reconhecíveis, ausência de legendas e hierarquia coerente durante introdução/cursor/transição. **Dependências:** auditoria/direção descritas em PLANEJAMENTO_REFINAMENTO_VISUAL.md, seções B/C/G. Fases 3–6 não autorizadas.

- [x] Conferir escopo, estado, geometria e controladores existentes; receber autorização própria.
- [x] Capturar baseline de composição/geometria/conteúdo/custo antes das alterações.
- [x] Ajustar grid/limite/viewBox, poses, rotas e hierarquia das arestas.
- [x] Retirar legendas e seus consumidores/chaves PT/EN exclusivos.
- [x] Refinar introdução/cursor/passagem para Sobre, preservando scroll e fallback.
- [x] Validar seis larguras, PT/EN, preferências, texto ampliado, teclado/âncoras, ciclo de vida e capturas.
- [x] Executar lint/typecheck/build, comparar custo e registrar resultados e limites nos três documentos.

**Arquivos autorizados:** src/data/heroGraph.ts, src/components/NeuralGraph.tsx, src/sections/Hero.tsx, src/styles/globals.css, src/motion/heroScene.ts, src/motion/transitionScenes.ts, src/i18n/pt.ts, src/i18n/en.ts; este checklist, ESTADO_ATUAL.md, PLANEJAMENTO_REFINAMENTO_VISUAL.md e evidências locais em .cache/refinement-hero-phase2/. **Aceite:** grafo mais presente sem competir com texto, dois caminhos legíveis, endpoints/sinais coerentes, zero legendas, mobile/fallback íntegros e ausência de regressão de navegação. **Riscos:** coluna textual estreita, recorte de halo/cursor e divergência entre opacidade estática/animada. Não alterar projetos/Contato/backgrounds de fases futuras, fotografia, dados profissionais, dependências, geometria pura, App ou publicação.

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

## Entrega vigente — Fase 8 da segunda evolução

**Objetivo:** executar regressão consolidada da mesma build final, comprovar integração das Fases 2–7, corrigir apenas falhas reproduzidas dentro do escopo abaixo e atualizar documentação operacional/local. **Dependências:** demais fases concluídas tecnicamente, Chrome/Edge e ferramentas locais disponíveis. **Aprovação:** concluída tecnicamente após o “sim” à proposta detalhada da Fase 8. Aceite visual/publicação continuam separados.

- [x] Conferir estado/planejamento, scripts disponíveis, manifesto e README; confirmar Chrome e Edge instalados.
- [x] Executar 48 combinações por navegador (96 no total): seis larguras 320/375/768/1024/1440/1920 × PT/EN × normal/reduzido × details fechados/abertos.
- [x] Revisar identidade/cópia/foto/credenciais/URLs/SEO e privacidade contra briefing e baselines atuais, sem adicionar fatos, links ou conteúdo profissional.
- [x] Exercitar menu/skip link/CTAs/âncoras, foco, teclado, hash inicial e histórico, aguardando scrollend e estabilidade nos trajetos longos.
- [x] Exercitar expansão/reversões/foco e idioma/resize durante transições; tela baixa/touch/texto 200%.
- [x] Verificar introdução finita, cursor, transições entre seções, três cenas específicas e timeline acadêmica em scroll lento/rápido/reverso, inclusive mudança de preferências/visibilidade.
- [x] Conferir semântica, nomes acessíveis, IDs/ARIA, contraste, cores forçadas e foco; registrar falta de leitor de tela manual/Safari/Firefox/físico, sem instalar ferramentas por inferência.
- [x] Testar cópia REAL do e-mail e repetição, concorrência e falhas simuladas. O teste real gravará somente o e-mail público na área de transferência; não ler seu conteúdo anterior nem enviar mensagens. Conferir leitura posterior apenas do endereço recém-escrito para verificar o fluxo.
- [x] Testar módulo opcional indisponível, reduced-motion inicial/dinâmico e fixtures de ciclo de vida, incluindo ProjectDetails em Strict Mode se viável com os componentes locais.
- [x] Medir bundle/frames/tarefas longas/layout em condições reproduzíveis e separar medições de laboratório de CWV de campo; manter custo histórico explícito.
- [x] Corrigir regressões comprovadas somente nos arquivos previstos, repetir os casos afetados e concluir a matriz sobre a build resultante.
- [x] Executar lint/typecheck/build/npm ls e inspecionar preview/artefatos para arquivos locais, PDFs, env, sourcemaps ou dados indevidos.
- [x] Atualizar README com estrutura/módulos/comportamento reais da segunda evolução, instruções e limites; atualizar os três registros e checklist geral com evidências finais.

**Arquivos previstos:** criar roteiros/relatórios/capturas em `.cache/evolution-consolidated-phase8/`; atualizar `README.md`, `IMPLEMENTAR.md`, `ESTADO_ATUAL.md` e `PLANEJAMENTO_EVOLUCAO_VISUAL.md`. Eventuais correções de comportamento/estilo/semântica limitadas a `src/App.tsx`, `src/components/{Navbar,LanguageSwitcher,PortfolioMotion,NeuralGraph,SectionConnector,ProjectArtwork,ProjectCard,ProjectDetails,Section,SectionHeading,Button,ButtonLink}.tsx`, `src/sections/{Hero,About,Projects,Experience,Education,Contact}.tsx`, módulos `src/motion/*.ts` e `src/styles/globals.css`. Não planejar mudança de conteúdo/dados/traduções, dependências, lockfile, Vite, Git ou deploy; necessidade fora desse escopo exige nova decisão. Recursos/credenciais pendentes seguem como no briefing. `README.md` continua local/ignorado.

**Aceite:** resultados atuais atribuídos à mesma build final e separados por navegador/cenário; matriz sem regressões bloqueantes, cópia/navegação/idiomas/fallback operacionais, cleanup verificável, build aprovado, documentação coerente e limites explícitos. **Riscos/limites:** emulação não substitui dispositivo real ou leitor de tela; laboratório não comprova CWV em produção; clipboard real será alterado pelo teste descrito. Nenhum envio, commit, push, publicação, serviço/pacote novo ou custo está incluído.


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

## Entrega anterior — Fase 7 da segunda evolução

**Objetivo:** substituir somente o grid acadêmico por uma timeline vertical, com UECE em destaque e SENAI conciso, preservando os dois registros e todos os textos atuais PT/EN. **Dependências:** Fases 3 e 6 concluídas. **Aprovação:** concluída no escopo técnico local após o “sim” à proposta de desenho, textos exatos PT/EN, quatro arquivos e verificações. Implementação e validação final concluídas; aceite visual com o proprietário. Fase 8 não autorizada.

- [x] Conferir estado/planejamento, Education, dados e traduções atuais.
- [x] Aprovar composição de uma coluna, eixo lateral, dois marcadores e UECE primeiro/com maior destaque; períodos sem escala proporcional aos anos.
- [x] Preservar integralmente os textos de `src/data/education.ts` e `educationText` em `src/i18n/en-content.ts`, apresentados na proposta em PT/EN. UECE 2021–2027/Conclusão prevista em 2027/Expected graduation in 2027; SENAI 2019–2022.
- [x] Manter somente os conteúdos confirmados do briefing; complementos acadêmicos candidatos do LinkedIn ficam fora desta proposta e não bloqueiam a timeline.
- [x] Substituir o grid em `src/sections/Education.tsx` por lista semântica com cards existentes, sem acoplar o componente profissional TimelineItem.
- [x] Atualizar `src/styles/globals.css` com eixo, marcadores, destaque da graduação e coluna única responsiva.
- [x] Criar `src/motion/educationScene.ts` e integrar em `PortfolioMotion.tsx`: trilho completo discreto, preenchimento por scroll e marcadores reversíveis; entrada até 16 px desktop/8 px mobile, textos sempre visíveis.
- [x] Manter versão estática completa em reduced-motion/falha do módulo, sem percentuais acadêmicos, pinning/sticky, altura artificial ou nova dependência.
- [x] Validar conteúdo exato PT/EN, datas/status, semântica/headings, seis larguras, texto 200%, teclado/âncoras, scroll reverso, idioma/layout, preferências dinâmicas, fallback e cleanup em Strict Mode.
- [x] Executar lint/typecheck/build e comparar bundle; registrar evidências e atualizar os três documentos após execução autorizada.

**Resultados desta entrega:** lint/typecheck/build e diff passaram. Chrome headless: 48 combinações (320/375/768/1024/1440/1920 × PT/EN × normal/reduzido × details fechados/abertos), sem overflow/pin, coluna única e cards alinhados. UECE com título maior e card de largura >= SENAI; marcadores alinhados ao centro do trilho dentro de 0,6 px. Baseline integral dos textos das seções preservado em ambos os idiomas, períodos/status e ordem UECE→SENAI conferidos. Lista semântica com dois registros, um h2 e dois h3; trilho/markers decorativos, sem papel de progressbar acadêmico.

Quatro sequências (375/1440 × PT/EN) em 0/25/50/75/100/50/0% confirmaram preenchimento/reversão e marcadores ativos no final, cards sempre com opacidade 1 e deslocamento limitado a 8/16 px. Texto 200% em 320, tela baixa 1024×450, emulação touch e idioma durante expansão do MIND passaram. Quatorze âncoras em EN/375/1440 preservaram hash/foco/destino visível após scrollend e estabilidade. Reduced-motion inicial sem download, dinâmico com estilos da timeline restaurados e chunk bloqueado com oito seções/timeline completa passaram. Strict Mode do módulo de movimento: triggers 20→39→20, ticker 1→1 e atributos da timeline restaurados. Não é fixture específica de ProjectDetails. Zero exceções JavaScript finais; capturas PT/EN desktop/mobile examinadas, Chrome/servidores encerrados.

**Build:** 71 módulos; JS principal 274,81 kB/gzip 84,90; movimento 127,69/gzip 49,16; CSS 33,00/gzip 7,40 (Vite arredondado). Incremento total JS gzip ~0,43 kB e CSS gzip ~0,18 kB sobre Fase 5. Arquivos `index-BkDiZmYn.js` (274.813 bytes), `PortfolioMotion-CHjK_jEU.js` (127.695) e `index-Cc5SMP2d.css` (33.003). Processos nativos Vite/Chrome exigiram execução aprovada fora do sandbox após EPERM, sem instalar ou configurar ferramentas.

**Evidências/limites:** `.cache/evolution-education-phase7/results.json`, roteiros e quatro capturas. Chrome emulado; sem nova cobertura de outros browsers/dispositivo físico/leitor de tela manual, contraste/heap integrais, clipboard real, BFCache ou CWV de campo. Validação parcial desta fase não conclui a Fase 8 nem formaliza aceite visual. Nenhum dado, tipo, tradução, dependência, foto ou configuração de publicação alterado. Sem commit/push/deploy. **Próxima:** apresentar matriz/arquivos e solicitar autorização da Fase 8 — validação consolidada.

**Arquivos previstos:** `src/sections/Education.tsx`, `src/styles/globals.css`, novo `src/motion/educationScene.ts`, `src/components/PortfolioMotion.tsx`; roteiros/evidências em `.cache/` e três registros locais. Não é necessário novo componente de card nem mudar dados/tipos/dicionários com o conteúdo proposto. **Aceite:** dois registros preservados em lista vertical legível, UECE destacada e conclusão prevista explícita; eixo/markers decorativos representam leitura da página, sem simular percentual de conclusão do curso; animação reversível e fallback íntegro, sem overflow ou regressão de navegação. **Riscos:** confundir progresso da leitura com conclusão acadêmica ou reduzir legibilidade mobile; prevenir com trilho discreto/sem números de progresso, status textual preservado e testes de composição/fallback.

## Entrega anterior — Fase 5 da segunda evolução

**Objetivo:** substituir o movimento genérico das artes por três narrativas decorativas próprias, conforme cenas 4–6 do planejamento e seção 5 do briefing. **Dependências:** Fases 3, 4 e 6 concluídas tecnicamente. **Aprovação:** concluída no escopo técnico local, após o “sim” à proposta detalhada de três cenas, arquivos e testes. Implementação e validação final concluídas somente da Fase 5; aceite visual geral com o proprietário. Fases 7 e 8 permanecem não autorizadas.

- [x] Conferir instruções, briefing, estado, roteiro e código atual das artes.
- [x] TEDAS: destacar documento, percorrer ramificações e ativar células abstratas, sem dados clínicos/resultados.
- [x] MIND: variar waveform sintética deterministicamente por scroll e relacioná-la a poucos blocos/nós abstratos, sem eixos, escores ou diagnóstico.
- [x] C: conduzir sinais de x₁/x₂ ao somatório e à saída AND, sem treino, alteração de pesos ou backpropagation.
- [x] Adicionar grupos/seletores locais ao SVG e criar `src/motion/projectScenes.ts`.
- [x] Integrar cenas reversíveis em `PortfolioMotion.tsx`, substituindo apenas os movimentos genéricos de projetos.
- [x] Usar o percurso natural da composição principal dos cards, com limites recalculados após idioma/layout; preservar alternância, texto e controles disponíveis.
- [x] Simplificar mobile/touch/tela baixa e manter artes completas em reduced-motion/falha do módulo.
- [x] Validar três cenas em scroll lento/rápido/reverso, details fechados/abertos, PT/EN, seis larguras, texto 200%, teclado/âncoras, preferências dinâmicas e Strict Mode.
- [x] Executar lint/typecheck/build, comparar custo do bundle e registrar capturas/amostras de frames por projeto.
- [x] Atualizar checklist, planejamento e estado após execução autorizada.

**Entrega:** `ProjectArtwork.tsx` com grupos/fluxos/sinais semânticos; novo `motion/projectScenes.ts` com três timelines e restauração idempotente; `PortfolioMotion.tsx` integra/remove o movimento genérico anterior; CSS de fluxos, células, sinais e perfil simplificado. Usado o wrapper `.project-card__main` já existente, sem alterar ProjectCard, dados, dicionários, foto, manifesto/lockfile ou deploy. Sem sticky/pin/altura artificial, dependências novas ou loops automáticos.

**Validação final:** lint/typecheck/build e diff passaram. Chrome headless: 48 combinações (320/375/768/1024/1440/1920 × PT/EN × normal/reduzido × details abertos/fechados), sem overflow/pin; arte e composição principal estáveis até 1 px e summaries >=44 px. Seis sequências (três projetos × 375/1440) em 0/25/50/75/100/50/0%, com reversão, waveform determinística, sinais sobre os segmentos e capturas examinadas. Textos das seções/projetos e foto preservados nos dois idiomas; alterações nas artes SVG são intencionais. Texto 200% em 320, tela baixa 1024×450, emulação touch e idioma durante expansão dos três projetos passaram.

Quatorze trajetos de âncoras mobile/desktop em EN, com todos os detalhes abertos, passaram com hash/foco/destino visível após o fim real da rolagem. End durante navegação interrompeu o trajeto sem retorno posterior ao destino. Preferência reduzida inicial sem download, dinâmica com atributos SVG restaurados e chunk bloqueado com oito seções/details nativo passaram. Strict Mode do módulo de movimento na fixture completa: triggers 17→33→17, ticker 1→1 e SVG restaurado. Não é fixture específica do ProjectDetails. Zero exceções JavaScript finais.

**Rigor do roteiro:** leituras de waveform passaram a usar `transform` do SVG, não somente estilo CSS. Navegação longa nativa foi observada terminando corretamente em ~1,4 s; a espera fixa de 1 s media estados intermediários e foi substituída por scrollend + estabilidade. Um ajuste experimental de alinhamento foi retirado por ser desnecessário; a implementação final preserva a coordenação de âncoras da Fase 4. Nenhuma nova alteração de navegação faz parte da entrega final desta fase.

**Build:** 70 módulos; JS principal 274,24 kB/gzip 84,78; movimento 126,26/gzip 48,85; CSS 31,90/gzip 7,22 (Vite arredondado). Aumento total JS gzip ~0,98 kB sobre Fase 4 e CSS gzip ~0,08 kB. Vite/Chrome executados com aprovação fora do sandbox após EPERM, sem mudar configuração. Evidências em `.cache/evolution-projects-phase5/results.json`, capturas e roteiros; medição auxiliar de navegação em `navigation.json` pertence à investigação, não substitui a matriz final.

**Desempenho/limites:** 37 frames por sequência, 222 no total, com intervalos p95 locais de 16,7–16,8 ms. Não é benchmark abrangente, garantia de fps ou CWV de campo. Chrome emulado; sem nova cobertura Safari/Firefox/iOS/físico, leitor de tela manual, contraste/heap integrais, BFCache ou clipboard real. Fase 8 ainda pendente. Chrome/servidores encerrados; sem commit/push/deploy. **Próxima:** Fase 7, timeline acadêmica, mediante proposta de desenho/texto PT/EN e autorização própria.

**Arquivos previstos:** `src/components/ProjectArtwork.tsx`, `src/components/PortfolioMotion.tsx`, novo `src/motion/projectScenes.ts`, `src/styles/globals.css`; `ProjectCard.tsx` apenas se necessário para um seletor estável da composição principal; roteiros/evidências em `.cache/` e os três registros locais. Nenhuma legenda nova ou alteração de dicionários/dados prevista. **Aceite:** três sequências distintas, reversíveis, sem overflow, altura artificial, pinning/sticky, novas dependências ou loops automáticos; ilustrações conceituais sem dados/alegações inventados; conteúdo, navegação e expansão preservados. **Riscos:** waveform parecer dado medido, Perceptron sugerir treinamento implementado e animações disputarem atributos; prevenir por abstração visual, propriedade única das cenas e cleanup verificado.

## Entrega anterior — Fase 4 da segunda evolução

**Aprovação:** concluída no escopo técnico local — autorizada pelo “sim” do proprietário à proposta de quatro transições, arquivos e testes. **Situação:** implementação e validação final concluídas; aceite visual do proprietário pendente. A autorização abrange somente a Fase 4.

- [x] Conferir briefing, estado, planos e código antes da proposta.
- [x] Apresentar composição/amplitudes e receber autorização explícita.
- [x] Criar conectores SVG reutilizáveis e `motion/transitionScenes.ts`.
- [x] Integrar cenas Hero → Sobre, Sobre → Projetos, Projetos → Experiência e entrada de Contato.
- [x] Separar transforms e substituir efeitos antigos conflitantes.
- [x] Preservar foto/conteúdo, scroll nativo e fallback mobile/touch/tela baixa/reduced-motion.
- [x] Executar lint/typecheck/build após a correção de navegação mobile.
- [x] Concluir testes finais de navegador, histórico, ciclo de vida e navegação.
- [x] Consolidar evidências, limites e registros locais.

**Resultados desta entrega:** lint/typecheck/build e diff sem erros de whitespace; Chrome headless com 48 combinações (seis larguras × PT/EN × normal/reduzido × details abertos/fechados), quatro cenas reversíveis, extremidades alinhadas até 1 px, zero overflow/pin. Quatorze trajetos de âncoras desktop/mobile com hash/foco e destino visível; verificação complementar das sete âncoras mobile em normal/reduzido, voltar/avançar e pulso final único. Teclas Home/End/PageUp/PageDown, texto 200% em 320, tela baixa 1024×450, emulação touch, troca de idioma durante expansão, cópia simulada/links e chunk bloqueado passaram. Strict Mode do módulo de movimento em fixture completa: triggers 17→33→17, ticker 1→1 e atributos restaurados. Zero exceções JavaScript na matriz final. Isso não amplia a cobertura do componente ProjectDetails em uma fixture própria de Strict Mode.

**Build final:** 69 módulos; JS principal 271,97 kB/gzip 84,41; movimento 124,03/gzip 48,24; CSS 31,40/gzip 7,14 (Vite arredondado). Incremento total JS gzip de aproximadamente 1,22 kB sobre a Fase 6. Sem dependência nova. Vite exigiu execução aprovada fora do sandbox após EPERM, sem alteração de configuração. Evidências em `.cache/evolution-transitions-phase4/results.json`, `followup.json` e capturas.

**Limites:** Chrome emulado; sem nova rodada de outros navegadores/dispositivo físico/leitor de tela/contraste ou heap integrais/CWV de campo. Cópia testada com clipboard simulado, sem sobrescrever o clipboard real. Histórico interno exercitado, sem comprovação de BFCache. Avaliação visual geral continua pendente. Navegador e servidores temporários encerrados; nenhum commit/push/deploy.

**Dependências:** Fases 3 e 6 concluídas. **Aceite:** quatro cenas perceptíveis/reversíveis, conectores alinhados, zero pinning/altura artificial/overflow, âncoras visíveis abaixo do header, details/contato funcionais, cleanup e build aprovados. **Arquivos:** `PortfolioMotion.tsx`, novos `SectionConnector.tsx`/`motion/transitionScenes.ts`, cinco seções, CSS e registros locais. **Próxima:** Fase 5, não autorizada; Fases 7 e 8 também dependem de autorização própria.

**Git na retomada:** árvore inicialmente limpa. Os 12 arquivos descritos como alterações locais no encerramento anterior já estavam no commit `237757a`. Nenhuma operação de escrita do Git executada nesta retomada. O encerramento abaixo é histórico.

## Encerramento anterior — 18/10/2026 (histórico da Fase 6)

Desenvolvimento encerrado por hoje a pedido do proprietário. Neste fechamento, apenas `PLANEJAMENTO_EVOLUCAO_VISUAL.md`, este histórico e o novo `ESTADO_ATUAL.md` foram escritos. Nenhuma fase adicional iniciada, nenhum código/dependência/configuração alterado e nenhum novo build/teste funcional executado. Resultados abaixo são das execuções já registradas; não representam nova auditoria completa.

- Aplicação inicial e primeira evolução: concluídas no escopo local documentado anteriormente; suas numerações são históricas.
- **Segunda evolução:** Fase 1 aprovada/concluída; Fases 2, 3 e 6 autorizadas individualmente e concluídas tecnicamente. Aceite visual final geral ainda não registrado.
- **Última implementação:** Fase 6 — detalhes dos projetos em rodapé full-width, expansão nativa com enhancement WAAPI, tipografia responsiva e troca dos botões profissionais do Hero por Fale comigo/Get in touch para #contato.
- **Próxima:** Fase 4 — transições cinematográficas. Não autorizada nem iniciada. Restante previsto: 4 → 5 → 7 → 8; cada fase exige proposta/arquivos e autorização própria.
- **Pendências:** transições, artes animadas específicas, timeline acadêmica e conteúdo complementar verificado, regressão consolidada/otimização, aceite visual e limites de testes descritos em `ESTADO_ATUAL.md`.
- **Decisões consolidadas:** GSAP 3.15.0 + ScrollTrigger + @gsap/react 2.1.2 + SVG, scroll nativo, sem dependências novas, Lenis/3D ou botão de pausa; introdução finita; reduced-motion; details/summary com Web Animations API; links GitHub/LinkedIn mantidos no Contato. Direção acadêmica vertical aprovada; implementação/texto exato ainda dependem da Fase 7.
- **Última validação:** lint/typecheck/build e diff sem erro de whitespace; Chrome com 48 combinações de layout/idioma/movimento/expansão, baseline de conteúdo preservado, teclado/foco/reversões/idioma/resize/reduced e CTA Contato aprovados. Evidências `.cache/evolution-details-phase6/results.json` e seção 12 do planejamento. A fixture de Strict Mode da Fase 3 foi validada anteriormente; não atribuir essa cobertura ao novo ProjectDetails.
- **Trabalho local:** 12 arquivos-fonte com alterações da segunda evolução (7 modificados/5 novos), discriminados em `ESTADO_ATUAL.md`; preservar sem reset, descarte ou commit automático. Nenhum commit, push ou deploy executado nesta sessão. Markdown permanece local/ignorado por regra existente.

**Para retomar:** consultar `AGENTS.md`, `PORTFOLIO_BRIEF.md`, `ESTADO_ATUAL.md` e o planejamento. Retomar pela proposta da Fase 4 somente quando o proprietário solicitar; aprovação do roadmap não substitui autorização de implementação.

## Fontes, escopo e autorizações

- Processo: `AGENTS.md`, lido integralmente.
- Produto e conteúdo: `PORTFOLIO_BRIEF.md`, versão 1.0, lido integralmente.
- Pedido desta sessão: atualização sobre o projeto e execução dos preparativos e inicializações previstos no `AGENTS.md`.
- Autorizações recebidas: preparação (Etapa 1); documentação e ignore (Etapa 2); aplicação (Etapa 3); sistema visual (Etapa 4); navegação/Hero (Etapa 5); conteúdo (Etapa 6); seletor e internacionalização PT/EN (Etapa 7); revisão de qualidade (Etapa 8); validação final e documentação sem publicação (Etapa 9). Etapas 2 a 9 aprovadas pelo usuário com “sim” após cada proposta. As nove etapas estão concluídas no escopo local. Publicação e operações Git continuam dependentes de autorização específica, conforme `AGENTS.md`, seção 2.
- Entrega prevista: portfólio de página única, responsivo, PT-BR/EN, com React, TypeScript, Vite e Tailwind CSS; identidade preto/grafite/vermelho; conteúdo separado dos componentes.
- Limites: sem chatbot, mascote, RAG, backend, API ou banco de dados nesta entrega. RAG pode constar como habilidade confirmada, sem implementação dessa funcionalidade.
- Commits, mudanças de branch/remotos, push, publicação e ações com custo exigem autorização específica.

## Estado inicial verificado

- Apenas `AGENTS.md` e `PORTFOLIO_BRIEF.md` estavam presentes na raiz, além de `.git/`.
- Git inicializado na branch `main`, sem commits e sem arquivos rastreados; os dois documentos estavam não rastreados.
- Não havia `README.md`, `.gitignore`, `package.json`, aplicação, dependências locais ou scripts de build/testes.
- Ferramentas disponíveis: Node.js `v22.14.0`, npm `10.9.2` e Git `2.47.1.windows.1`.
- Compatibilidade confirmada na Etapa 3 para os pacotes selecionados; Node e npm existentes foram preservados.

## Decisões e pendências

- Usar o briefing como fonte de conteúdo; o PDF original citado nele não está presente no diretório inspecionado. Não alegar validação independente do currículo ou do LinkedIn.
- AWS AI Practitioner: emissão em setembro/2026 e expiração em setembro/2029, conforme briefing; sem botão de verificação enquanto faltar URL autêntica.
- AWS Cloud Practitioner: modelar com `display: false`; exibição depende de confirmação do proprietário. Não inventar mês, expiração ou credencial.
- Introduction to Kubernetes (LFS158): curso concluído em outubro/2026, separado das certificações por exame.
- TEDAS-CE e MIND-BH: pesquisas privadas; apresentar escopo e investigação, sem alegar implantação, resultados clínicos ou repositório público.
- Redes neurais em C: apenas Perceptron com pesos manuais e porta AND está confirmado. Treinamento, MLP/backpropagation e CNN permanecem como planos.
- URL do projeto pessoal, URLs de credenciais e PDF público revisado não foram fornecidos; omitir ações correspondentes. Essas ausências não bloqueiam o MVP.
- Hospedagem e URL final ainda não definidas; resolver antes de configurar `base`, URLs canônicas ou workflow de publicação. Não bloqueia desenvolvimento local.
- Decisões técnicas implementadas: dicionários tipados PT/EN, SVG/CSS para visuais próprios e navegação por âncoras. Nenhuma biblioteca de tradução, gráficos ou roteamento adicionada.
- Todos os `.md` deverão permanecer locais e ignorados pelo Git, inclusive README e instruções. Agentes que acessem apenas o remoto não receberão esses documentos. Não criar exceções ou cópias públicas automaticamente.

## Etapa 1 — Preparação e diagnóstico

**Objetivo:** compreender os requisitos, verificar o estado real e registrar um plano executável.
**Referências:** AGENTS, seções 1–3 e 6–7; briefing, seções 1–18.
**Dependências:** acesso aos documentos e ao diretório local.
**Situação da aprovação:** concluída — preparação autorizada pelo pedido atual e plano permitido pela exceção documental do AGENTS.

- [x] Ler integralmente `AGENTS.md` e `PORTFOLIO_BRIEF.md` em UTF-8.
- [x] Inspecionar arquivos existentes e identificar eventual código a preservar.
- [x] Verificar branch, commits e arquivos rastreados, sem alterar o Git.
- [x] Verificar disponibilidade e versões de Node.js, npm e Git.
- [x] Registrar escopo, limites de privacidade, decisões e pendências.
- [x] Criar este checklist com tarefas, aceite, dependências e aprovação por etapa.

**Critérios de aceite:** diagnóstico documentado; nove etapas descritas; pendências explícitas; etapas futuras sem autorização presumida.

## Etapa 2 — Documentação inicial e arquivos ignorados

**Objetivo:** documentar o estado real e preparar as regras locais de versionamento.
**Referências:** AGENTS, seções 4–5; briefing, seções 1, 3, 11 e 17.
**Dependências:** Etapa 1 concluída e aprovação específica desta etapa.
**Situação da aprovação:** concluída — autorizada pelo usuário com “sim” após a proposta da Etapa 2.
**Arquivos previstos:** `README.md`, `.gitignore` e atualização de `IMPLEMENTAR.md`.

- [x] Criar README em português com objetivo, escopo, estado atual e ferramentas disponíveis, distinguindo stack prevista de instalada.
- [x] Explicar que os comandos de instalação, execução e build serão documentados quando existirem scripts reais.
- [x] Documentar a estrutura existente e as fontes locais de requisitos; registrar a evolução prevista da manutenção de conteúdo e traduções.
- [x] Documentar cuidados com variáveis de ambiente, recursos visuais e documentação Markdown local.
- [x] Criar `.gitignore` com `*.md`, dependências, builds, cobertura, `.env`/`.env.*`, exceção `!.env.example`, logs, temporários, caches e configurações locais de editores, conforme AGENTS.
- [x] Verificar regras com `git check-ignore` e estado com `git status`; confirmar que código e assets legítimos não são ignorados.
- [x] Confirmar novamente se há Markdown rastreado; nenhum encontrado, sem necessidade de remoção do índice.
- [x] Atualizar este plano com arquivos criados e resultados das verificações.

**Critérios de aceite:** README fiel ao estado real; Markdown e segredos locais cobertos pelo ignore; `.env.example`, código e assets permitidos; nenhum arquivo existente removido ou desrastreado sem aprovação.

## Etapa 3 — Inicialização React, TypeScript e Vite

**Objetivo:** criar uma base executável com ferramentas mínimas e estrutura organizada.
**Referências:** briefing, seções 1, 10–11, 13 e 15.
**Dependências:** Etapa 2 concluída; aprovação de inicialização e instalação dos pacotes propostos.
**Situação da aprovação:** concluída — usuário respondeu “sim” à proposta da Etapa 3; base instalada e validada.
**Arquivos previstos:** `package.json`, lockfile, `index.html`, configurações Vite/TypeScript/ESLint, entradas em `src/`, CSS inicial e documentação local.

- [x] Consultar documentação oficial e requisitos das versões selecionadas de Vite, React, TypeScript e Tailwind; verificar compatibilidade com o Node instalado.
- [x] Apresentar versões, dependências e estrutura antes de instalá-las; Node 22.14.0 atende aos requisitos consultados, sem atualização necessária.
- [x] Inicializar Vite com React e TypeScript estrito, preservando os documentos existentes.
- [x] Integrar Tailwind conforme a documentação da versão instalada.
- [x] Configurar scripts reais de desenvolvimento, lint e build; incluir também typecheck e preview.
- [x] Organizar componentes, seções, dados, traduções e estilos conforme o briefing; criar dados de perfil e estilos úteis e reservar diretórios sem arquivos artificiais.
- [x] Executar lint e build da base; registrar versões e comandos reais no README.
- [x] Atualizar este plano com resultados e limitações.

**Critérios de aceite:** aplicação inicia localmente; TypeScript, lint e build passam; dependências mínimas registradas; estrutura preparada para dados e componentes separados.

## Etapa 4 — Sistema visual e componentes compartilhados

**Objetivo:** estabelecer identidade própria e bases acessíveis para a página.
**Referências:** briefing, seções 2, 11–13.
**Dependências:** Etapa 3 concluída e aprovação desta etapa.
**Situação da aprovação:** concluída — usuário respondeu “sim” à proposta da Etapa 4; componentes e estilos implementados e validados.
**Arquivos previstos:** estilos globais, componentes compartilhados e assets próprios necessários.

- [x] Definir tokens da paleta do briefing, superfícies, bordas, espaçamento e tipografia com fallbacks eficientes.
- [x] Criar container, títulos de seção, links, botões, chips e bases de cards reutilizáveis.
- [x] Definir estados de hover/foco e verificar contraste dos pares de cores efetivamente usados.
- [x] Implementar composição responsiva a partir de telas pequenas e tratamento de `prefers-reduced-motion`.
- [x] Criar visuais sutis próprios em SVG/CSS, sem copiar referências ou materiais de pesquisa.
- [x] Verificar componentes por teclado e em larguras representativas; executar lint e build.
- [x] Atualizar este plano e registrar a origem dos recursos visuais no README.

**Critérios de aceite:** paleta consistente; tipografia legível; componentes reutilizáveis; foco visível; ausência de transbordamento nas bases verificadas; movimento reduzido respeitado.

## Etapa 5 — Navegação, header e Hero

**Objetivo:** entregar a entrada principal e navegação da página única.
**Referências:** briefing, seções 2–4 e 10–13.
**Dependências:** Etapa 4 concluída e aprovação desta etapa.
**Situação da aprovação:** concluída — usuário respondeu “sim” à proposta da Etapa 5; implementação e validações concluídas.
**Arquivos previstos:** Navbar, Hero, componentes de navegação, dados de perfil, App e estilos necessários.

- [x] Implementar header fixo/sticky com as âncoras previstas e compensação por `scroll-margin-top`.
- [x] Criar menu mobile com controles acessíveis e fechamento ao selecionar um destino.
- [x] Implementar skip link e estrutura semântica de header, nav e main.
- [x] Montar Hero com nome, título, textos e CTAs confirmados, mantendo conteúdo fora do JSX.
- [x] Incluir GitHub e LinkedIn reais; omitir currículo porque não há PDF público revisado e autorizado.
- [x] Reservar posição visível para o seletor PT/EN, com indicador estático PT; funcionamento e tradução permanecem na Etapa 7.
- [x] Verificar teclado, navegação e fechamento do menu; destinos existentes como títulos de seção, com conteúdo completo pendente da Etapa 6; lint e build passaram.
- [x] Atualizar este plano.

**Critérios de aceite:** apresentação fiel ao briefing; header e menu utilizáveis em mobile e desktop; âncoras preparadas; nenhum link fictício; pendências de integração identificadas.

## Etapa 6 — Conteúdo e seções

**Objetivo:** exibir todos os dados profissionais aprovados com status e privacidade corretos.
**Referências:** briefing, seções 3–9 e 11–12.
**Dependências:** Etapa 5 concluída e aprovação desta etapa.
**Situação da aprovação:** concluída — usuário respondeu “sim” à proposta da Etapa 6; conteúdo, componentes e validações concluídos.
**Arquivos previstos:** seções About, Projects, Experience, Education, Skills, Certifications e Contact; componentes de cards/timeline/Footer; arquivos tipados em `src/data/` e traduções correspondentes.

- [x] Criar dados tipados para perfil, projetos, experiência, formação, skills e credenciais.
- [x] Montar Sobre com parágrafos curtos e tom de voz do briefing.
- [x] Exibir TEDAS-CE, MIND-BH e redes neurais em C com categorias, períodos documentados, tecnologias e estado correto.
- [x] Implementar detalhes de pesquisa na própria página, preservando limites de divulgação e ações condicionais a URLs reais.
- [x] Implementar timeline CPIDT (2025–atual), sem adicionar cargos ou organizações.
- [x] Exibir UECE (2021–2027, conclusão prevista) e SENAI (2019–2022).
- [x] Organizar tecnologias por tema, distinguindo estudos pessoais e sem níveis de proficiência inventados.
- [x] Exibir AWS AI Practitioner e separar LFS158 como curso; manter Cloud Practitioner modelada e oculta.
- [x] Montar contato com e-mail profissional, GitHub, LinkedIn e footer com ano dinâmico.
- [x] Revisar conteúdo contra o briefing, testar âncoras e ações condicionais, executar lint e build.
- [x] Atualizar este plano e instruções de edição no README.

**Critérios de aceite:** todas as seções preenchidas com conteúdo real; pesquisas e estudos diferenciados; nenhuma alegação indevida, dado privado ou botão sem destino válido.

## Etapa 7 — Internacionalização PT-BR/EN

**Objetivo:** oferecer navegação e conteúdo completos nos dois idiomas.
**Referências:** briefing, seções 4–10 e 13.
**Dependências:** Etapa 6 concluída e aprovação desta etapa; dados e componentes preparados para traduções desde sua criação.
**Situação da aprovação:** concluída — usuário respondeu “sim” à proposta da Etapa 7; internacionalização e verificações concluídas.
**Arquivos previstos:** `src/i18n/`, LanguageSwitcher, dados traduzidos e integração nos componentes.

- [x] Implementar solução de dicionários tipados ou biblioteca especificamente aprovada, com PT-BR inicial.
- [x] Completar traduções de textos, menu, ações, badges, períodos, estados, mensagens acessíveis e metadados.
- [x] Conectar seletor PT/EN visível no header, inclusive no mobile, com indicação acessível do idioma ativo.
- [x] Atualizar `html.lang` e metadados conforme o idioma; preservar âncoras ao alternar.
- [x] Verificar equivalência das chaves e do conteúdo e ausência de textos residuais no idioma anterior.
- [x] Verificar alternância por teclado e layout com textos ingleses; executar lint e build.
- [x] Atualizar este plano e instruções de tradução no README.

**Critérios de aceite:** todo conteúdo de interface disponível em PT/EN; seleção funcional e evidente; idioma HTML correto; nomes oficiais preservados quando apropriado.

## Etapa 8 — Revisão de conteúdo, SEO, performance e acessibilidade

**Objetivo:** revisar a experiência completa e os requisitos de qualidade.
**Referências:** briefing, seções 2–3, 5, 9, 12–13 e 17.
**Dependências:** Etapa 7 concluída e aprovação desta etapa.
**Situação da aprovação:** concluída — usuário respondeu “sim” à proposta da Etapa 8; revisão, correções e verificações concluídas, com limitações registradas.
**Arquivos previstos:** componentes e dados que precisarem de correção, estilos, `index.html`, metadados e favicon próprio em `public/`.

- [x] Revisar datas, nomes, status, traduções e limites de divulgação contra o briefing.
- [x] Conferir links e ações condicionais; aplicar `rel="noopener noreferrer"` aos links com nova aba.
- [x] Revisar ausência de telefone, endereço, documentos, dados clínicos, segredos e PDFs não autorizados nos arquivos públicos.
- [x] Definir title, description e favicon; usar metadados sociais apenas com assets existentes e URLs confirmadas.
- [x] Verificar 320px, 375px, 768px, 1024px e desktop largo, corrigindo transbordamentos e quebras de layout.
- [x] Verificar teclado, ordem de foco, semântica, nomes acessíveis, contraste, skip link e movimento reduzido.
- [x] Revisar peso de fontes, assets e dependências; registrar medições realizadas e limitações das ferramentas disponíveis.
- [x] Executar lint e build após correções; atualizar este plano.

**Critérios de aceite:** conteúdo coerente e privado preservado; links válidos; layouts revisados; navegação acessível; metadados fiéis; verificações e limitações registradas sem alegar auditorias não executadas.

## Etapa 9 — Validação final e preparação para publicação

**Objetivo:** consolidar uma versão local verificável e documentar sua operação.
**Referências:** AGENTS, seções 4 e 6; briefing, seções 13–15.
**Dependências:** Etapa 8 concluída e aprovação desta etapa. Configuração específica de hospedagem depende também da definição do destino e da autorização correspondente.
**Situação da aprovação:** concluída no escopo local — usuário respondeu “Sim” à proposta de validação final, conferência de dist e documentação, sem publicação; verificações e documentação concluídas. Configuração de hospedagem permanece adiada até definição do destino e autorização própria.
**Arquivos previstos:** README, este plano e eventuais correções necessárias; configuração de hospedagem apenas quando especificamente aprovada.

- [x] Executar verificações proporcionais sobre navegação, idioma, menu mobile e regras de exibição de credenciais/links; automatizar apenas verificações que protejam comportamento relevante.
- [x] Executar lint e build de produção e verificar a aplicação gerada por preview local.
- [x] Conferir o conteúdo de `dist/`, garantindo ausência de documentação local e materiais não autorizados; inspecionar padrões comuns de segredos, sem alegar detecção absoluta.
- [x] Completar README com pré-requisitos reais, instalação, scripts existentes, estrutura, edição de conteúdo/traduções/credenciais e origem dos assets.
- [x] Documentar variáveis de ambiente somente conforme o uso real, sem expor segredos.
- [x] Registrar estado da hospedagem: destino não confirmado; base padrão mantida e configuração/publicação/workflow adiados até autorização específica.
- [x] Consolidar resultados, limitações e pendências, sem realizar commit, push ou deploy automaticamente.
- [x] Atualizar o checklist final confrontando os critérios de aceite da seção 15 do briefing.

**Critérios de aceite:** build e verificações aplicáveis passam; preview revisado; README reproduz o uso real; critérios do briefing conferidos; eventual publicação permanece condicionada à autorização específica.

## Checklist final — seção 15 do briefing

- [x] Um único site navegável por âncoras — oito seções, destinos estáveis e compensação do header; navegação/menu verificados no preview.
- [x] Paleta preto/vermelho consistente e visuais próprios — tokens centralizados e SVGs originais; capturas revisadas nas etapas 4–8.
- [x] Textos PT/EN consistentes e seletor evidente — conteúdo completo e 72 chaves equivalentes, metadados e html.lang verificados nos dois idiomas.
- [x] TEDAS-CE, MIND-BH e redes neurais em C com status correto — pesquisa privada e estudo em desenvolvimento; próximos passos não apresentados como entregues.
- [x] CPIDT, UECE e SENAI com dados e períodos do briefing — graduação identificada como conclusão prevista.
- [x] AI Practitioner visível, LFS158 como curso e Cloud Practitioner oculta — política compartilhada entre idiomas, links de credencial ausentes.
- [x] Sem chatbot, robô, RAG ou backend implementados — somente referência textual a habilidades confirmadas.
- [x] Mobile, desktop, teclado e movimento reduzido verificados no Chrome — 12 layouts padrão, seis ampliações de texto, foco, menu, âncoras e detalhes. Não equivale a testes em todos os navegadores ou com leitor de tela.
- [x] Links limitados aos destinos fornecidos e dados públicos do briefing — inspeção de fontes/assets/build sem materiais privados encontrados; disponibilidade externa e identidade dos perfis não confirmadas independentemente.
- [x] Build sem erro e README operacional — instalação, desenvolvimento, verificações, build/preview, manutenção e estado da preparação estática documentados. Procedimento de deploy específico adiado conforme AGENTS até definição/autorização da hospedagem.

## Pendências após a entrega local

- [ ] Definir hospedagem e URL final; autorizar configuração específica, conferir base raiz/subdiretório e validar no destino antes de publicar.
- [ ] Autorizar separadamente operações Git e publicação, quando desejadas. Nenhum commit, push, troca de branch ou deploy realizado.
- [ ] Validar links sociais publicamente; fornecer URLs de credenciais/repositório pessoal ou PDF revisado somente se desejar disponibilizá-los. Ausências não bloqueiam o MVP.
- [ ] Complementar a revisão com leitor de tela, outros navegadores e medições na hospedagem, conforme necessidade. Limitações atuais documentadas no README.

## Ajuste solicitado — foto e contato por e-mail

**Objetivo:** incluir a foto fornecida no Sobre e permitir compor e-mail pelo navegador.
**Autorização:** pedido direto do proprietário para adicionar a imagem e corrigir o botão de contato.
**Arquivos previstos:** About, Contact, dicionários PT/EN, estilos, README e este plano; usar `public/97138361.jpg` fornecido pelo usuário.
**Critérios de aceite:** retrato responsivo e com texto alternativo, contato com destinatário correto e alternativa de cópia, feedback acessível traduzido, lint/build e verificação no navegador.

- [x] Incluir retrato no Sobre com dimensões reservadas e carregamento sob demanda.
- [x] Oferecer composição de e-mail pelo navegador e cópia do endereço com tratamento de falha.
- [x] Validar layout PT/EN, ações de contato, lint/build e atualizar documentação.

**Situação:** concluída — foto original integrada, Gmail como opção inicial comunicada ao usuário e alternativa de cópia com feedback. Envio autenticado externo não realizado.

## Registro de execução

### 17/10/2026 — Preparação inicial

- Leituras: `AGENTS.md` e `PORTFOLIO_BRIEF.md`, integralmente em UTF-8.
- Inspeções: listagem local, `rg --files`, `git status --short`, `git ls-files` e `git branch --show-current`.
- `git log -5 --oneline` confirmou a ausência de commits com a mensagem esperada para uma branch ainda sem histórico.
- Ambiente: `node --version`, `npm --version`, `git --version` e resolução dos executáveis.
- Alteração autorizada: criação deste plano documental.
- Build/testes da aplicação: não aplicáveis nesta etapa, pois não existe `package.json` nem código de aplicação.
- Próxima etapa proposta: Etapa 2, criação de `README.md` e `.gitignore`, com atualização deste plano e verificação das regras de ignore.

### 17/10/2026 — Etapa 2 concluída

- Autorização: resposta “sim” do usuário à proposta de criação do README e do `.gitignore`, verificação das regras e atualização deste plano.
- Criado `README.md` em português, com estado real, stack prevista, ambiente disponível, estrutura existente, manutenção futura de conteúdo/traduções, privacidade, variáveis de ambiente e recursos visuais.
- Criado `.gitignore` com todas as regras mínimas do AGENTS e regras adicionais para `*.tmp`, `*.temp`, `.cache/` e `.vite/`.
- `git check-ignore` confirmou 26 caminhos ignorados: os quatro documentos Markdown, Markdown em subpasta, dependências, builds, cobertura, arquivos de ambiente, logs, temporários, caches e configurações locais dos editores.
- `git check-ignore` confirmou 12 caminhos permitidos: `.gitignore`, `.env.example`, arquivos TSX/TS/CSS/JSON, manifesto e lockfile npm, configuração Vite e assets públicos SVG/PNG/PDF. São consultas de caminhos representativos, sem criação de arquivos de teste.
- A primeira consulta por `--stdin` recebeu `CRLF` do pipeline do Windows PowerShell e interpretou `\r` como parte dos caminhos. A verificação foi corrigida para fornecer argumentos diretamente ao Git; todos os casos passaram sem alteração das regras.
- `git ls-files -- '*.md'` confirmou ausência de Markdown rastreado; nenhuma remoção do índice foi necessária.
- `git status --short --ignored` mostrou somente `.gitignore` como não rastreado e os quatro documentos Markdown como ignorados, preservados no disco.
- Build/testes da aplicação: não aplicáveis; ainda não existe `package.json` ou código de aplicação.
- Próxima etapa proposta: Etapa 3, verificar compatibilidade e versões, inicializar React + TypeScript + Vite, integrar Tailwind e ESLint, configurar scripts e estrutura mínima, validar lint/build/execução local e atualizar README e plano. Nenhuma instalação iniciada.

### 17/10/2026 — Etapa 3 concluída

- Autorização: resposta “sim” do usuário à proposta de inicializar React + TypeScript + Vite, integrar Tailwind/ESLint, configurar scripts e validar a base.
- Consultadas as documentações oficiais de Vite, React, plugin React, Tailwind, ESLint e typescript-eslint e os metadados `engines`/`peerDependencies` do registro npm.
- Seleção: React/React DOM 19.3.1, Vite 8.3.4, plugin React 6.1.2, Tailwind/plugin Vite 4.3.3, TypeScript 6.0.3, ESLint 10.13.0 e typescript-eslint 8.71.2. TypeScript 7.0.2 era a versão mais recente consultada, mas foi selecionada a versão 6.0.3 devido ao requisito `>=4.8.4 <6.1.0` do typescript-eslint.
- Node 22.14.0 atende aos requisitos selecionados, incluindo Node 22.13+ do ESLint. `package.json` declara Node `^22.13.0 || >=24.0.0` e npm `>=10.0.0`; tipos Node fixados na linha 22.
- Criados `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, configurações TypeScript separadas para aplicação e ferramentas Node e `eslint.config.js` em formato flat, incluindo regras React Hooks e Fast Refresh.
- Criados `src/main.tsx`, `src/App.tsx`, `src/data/profile.ts` e `src/styles/globals.css`. A tela mínima usa apenas nome e título profissional do briefing; não antecipa Hero, navegação ou seções futuras.
- Reservadas pastas `src/components/`, `src/sections/` e `src/i18n/`, sem arquivos vazios ou dependências de tradução antecipadas. Diretórios vazios permanecem apenas locais até receberem implementação.
- Tailwind integrado com `@tailwindcss/vite` e `@import "tailwindcss"`; sem configurações legadas de versões anteriores.
- Scripts disponíveis: `dev`, `typecheck`, `lint`, `build` e `preview`; build inclui `tsc -b`, e lint trata avisos como falha.
- Fluxo local da skill Sites utilizado. O instalador auxiliar falhou ao localizar o npm pelo shim Windows; foi usada instalação npm direta. A tentativa dentro do sandbox foi bloqueada por `ENOTCACHED`; a instalação autorizada fora dele adicionou 172 pacotes, auditou 173 e reportou zero vulnerabilidades.
- `npm ls --depth=0`: todas as 16 dependências diretas instaladas nas versões declaradas e sem conflitos reportados.
- `npm run lint`: passou sem erros ou avisos.
- `npm run build`: verificação de tipos passou; a primeira execução do Vite no sandbox falhou com `spawn EPERM` e erro secundário de carregamento nativo. A execução autorizada fora do sandbox passou sem alterações no código.
- Build gerou `dist/index.html` (0,56 kB), CSS (5,18 kB) e JavaScript (219,81 kB); gzip reportado pelo Vite: 0,35 / 1,78 / 68,75 kB, respectivamente.
- Verificação HTTP pela API local do Vite: página, `main.tsx`, `App.tsx`, dados de perfil e CSS responderam 200 no desenvolvimento; HTML e assets CSS/JS responderam 200 no preview. Verificada presença de `lang="pt-BR"`, nome do perfil e classes Tailwind compiladas.
- A verificação HTTP também exigiu execução autorizada fora do sandbox devido ao mesmo bloqueio de subprocessos. Servidores temporários em 127.0.0.1 foram encerrados ao terminar.
- Limitação: nenhuma revisão visual em navegador foi executada; acessibilidade, responsividade completa e funcionalidades de navegação/idioma permanecem nas etapas correspondentes. Não foi criada suíte de testes para esta base mínima.
- README atualizado com versões, pré-requisitos, comandos reais, estrutura implementada, manutenção de dados, validações e fontes técnicas.
- Conferência final: `git status` e `git check-ignore` confirmaram documentos, dependências e build ignorados e arquivos da aplicação permitidos; nenhum Markdown rastreado ou presente em `dist/`.
- Próxima etapa proposta: Etapa 4, tokens de paleta/tipografia/espaçamento, componentes compartilhados, responsividade básica, foco/contraste e movimento reduzido; editar estilos, componentes e documentação, com lint/build e verificações proporcionais. Ainda sem autorização.

### 17/10/2026 — Etapa 4 concluída

- Autorização: resposta “sim” do usuário à proposta de criar o sistema visual e os componentes compartilhados, com responsividade e acessibilidade.
- Tokens em `@theme` do Tailwind 4 para paleta, superfícies, texto, bordas, foco, tipografia fluida e raios. Variáveis semânticas para largura máxima, margens, espaçamento das seções, altura dos controles e duração das transições.
- Paleta principal preservada; acrescentados branco sobre vermelho, vermelho mais escuro no hover do botão e borda mais clara nos controles. Contraste calculado: `#F5F5F5` sobre `#DC243C` = 4,42:1, enquanto `#FFFFFF` sobre o mesmo vermelho = 4,82:1. Vermelho claro reservado a links/foco sobre superfícies escuras.
- Tipografia com fontes locais: Segoe UI/sistema no corpo, Bahnschrift/Aptos Display/Segoe UI/sistema nos títulos. Sem dependências, downloads de fontes ou serviços de terceiros.
- Criados oito componentes: Container, SectionHeading, Button, ButtonLink, TextLink, Badge, Card e NeuralGraph; helper `linkAttributes.ts` preserva `rel` e acrescenta proteção a links com nova aba.
- Button usa elemento nativo e `type="button"` por padrão; variantes primary/secondary/ghost. Links exigem href; badges permanecem rótulos estáticos. Card usa article e aceita props nativas; SectionHeading suporta h2/h3 e ID para associação acessível.
- SVG decorativo original com 12 nós e 16 conexões, estático, responsivo, sem IDs globais, dependências ou dados reais; `aria-hidden` e `focusable="false"`.
- App usa Container, título fluido e texto secundário, mantendo apenas os dados previamente confirmados. Header, Hero completo, seções e idioma permanecem nas próximas etapas.
- CSS inclui grade adaptável, grupos de ações/badges com quebra, controles com mínimo de 44 px, foco visível, hover condicionado a dispositivo compatível, preferência de movimento reduzido e contorno em cores forçadas.
- `npm run lint`: passou sem erros ou avisos. `npm run build`: passou com TypeScript e Vite; execução autorizada fora do sandbox pelo bloqueio de subprocessos já identificado.
- Build: HTML 0,56 kB, CSS 9,55 kB e JS 219,93 kB; gzip 0,35 / 3,01 / 68,78 kB, respectivamente.
- Verificação pontual no Chrome instalado, em modo headless, com servidor Vite temporário e página isolada em `.cache/stage4/`. Nenhum pacote de automação instalado, nenhuma página de demonstração adicionada à aplicação.
- Aplicação e componentes sem transbordamento em 320, 375, 768, 1024 e 1440 px; controles da página de verificação com altura mínima de 44 px. Capturas mobile e desktop revisadas visualmente.
- Teclado: Tab percorreu controles com foco de 2 px, botão desabilitado ignorado, Enter e Espaço acionaram Button, botão padrão não enviou formulário, ButtonLink navegou à âncora. `author`, `noopener` e `noreferrer` preservados no link com nova aba.
- Oito pares de texto/fundo medidos no navegador, todos acima de 4,5:1: botão principal 4,82; secundário/ghost 16,05; link sobre superfície 5,21; badge neutro 8,41; textos vermelhos sobre superfície elevada 4,98.
- Hover principal mantém texto branco sobre vermelho escuro. Com emulação de movimento reduzido, transições ficaram em 0s e rolagem em auto. Nenhuma exceção JavaScript observada.
- O roteiro temporário exigiu correção da emissão de eventos de teclado pelo protocolo do Chrome, espera por atualizações do React e posicionamento do ponteiro; a execução final passou. Não foram necessárias correções nos componentes após essas verificações.
- Arquivos temporários, capturas e `results.json` ficam em `.cache/stage4/`, ignorados pelo Git. Chrome com perfil isolado e servidor foram encerrados ao terminar.
- README atualizado com tokens, uso dos componentes, fontes locais, autoria do SVG e verificações. A revisão integral da página e de acessibilidade será realizada nas etapas 8–9; os resultados desta etapa cobrem a base e os componentes testados.
- Próxima etapa proposta: Etapa 5, header e menu mobile acessíveis, navegação por âncoras, skip link e Hero com conteúdo confirmado; editar Navbar/Hero/App, dados e estilos necessários, preparar posição do seletor PT/EN e validar lint/build e comportamento. Ainda sem autorização.

### 17/10/2026 — Etapa 5 concluída

- Autorização: resposta “sim” do usuário à proposta de implementar header, menu mobile, navegação por âncoras e Hero.
- Criados `src/components/Navbar.tsx`, `src/sections/Hero.tsx` e `src/i18n/pt.ts`; ampliados dados do perfil com GitHub e LinkedIn confirmados. App e estilos integram os novos componentes.
- Textos visíveis e rótulos acessíveis separados do JSX, em dados/arquivo PT. Hero segue o briefing: nome, título profissional, eyebrow, headline, descrição e CTAs; sem alegações de disponibilidade ou senioridade.
- Header sticky, sete links nativos, marca para início e skip link para main. IDs estáveis, destino focável por `tabIndex={-1}`, scroll-margin compensando header e rolagem suave condicionada à preferência de movimento.
- Para tornar as âncoras utilizáveis nesta etapa, foram criadas somente as estruturas e os títulos das sete seções. Conteúdo, cards e timelines permanecem na Etapa 6, sem tarefas futuras marcadas como realizadas.
- Menu de expansão com botão nativo, `aria-expanded`/`aria-controls`, lista e landmark nav. Fecha por seleção, Escape, clique fora, Tab para fora e mudança de breakpoint; Escape devolve foco ao botão. Não há captura de foco modal.
- Breakpoint desktop em 75 rem, sincronizado entre CSS e matchMedia; lista mobile permite rolagem em telas baixas. Indicador PT estático ocupa o espaço destinado ao seletor, sem controles EN inativos; alternância permanece na Etapa 7.
- Grafo decorativo exibido ao lado do Hero a partir de 64 rem; ocultado nas telas menores. Ícones do menu desenhados com SVG próprio. Nenhum pacote ou serviço adicional.
- Links sociais com URLs reais e `noopener noreferrer`; currículo omitido porque não há PDF público revisado e autorizado.
- Ajustada a especificidade CSS do botão do menu para manter dimensões, ícone e ocultação desktop diante dos estilos compartilhados de Button.
- Chrome detectou perda de foco ao ocultar navegação desktop durante redimensionamento. Corrigido com registro de foco/pointer e retorno ao botão ao entrar no layout mobile; listeners têm cleanup e passaram nas verificações com React StrictMode.
- `npm run lint` final passou sem erros/avisos. `npm run build` final passou com TypeScript e Vite; build executado com autorização fora do sandbox devido à limitação de subprocessos já conhecida.
- Build final: HTML 0,56 kB, CSS 13,41 kB, JS 226,36 kB; gzip 0,35 / 3,81 / 70,97 kB, respectivamente.
- Chrome headless: sem transbordamento em 320, 375, 768, 1024, 1199, 1200 e 1440 px; altura de header, alternância dos layouts, ícone do menu e alvos de ação conferidos. Capturas desktop/mobile/menu revisadas visualmente.
- Skip link verificado como primeiro Tab; ativação transfere foco ao main e próxima tabulação chega à ação do Hero.
- Menu verificado com Enter/Espaço, Tab, Escape, clique fora, seleção e fechamento ao sair. Foco preservado ao ocultar links na troca desktop/mobile. Rolagem interna verificada em viewport de 844 × 390 px.
- Sete destinos de navegação e CTA de projetos verificados com Enter: hash e foco corretos, títulos não encobertos pelo header. URLs sociais e proteção das novas abas conferidas; nenhuma âncora interna sem destino.
- Preferência de movimento reduzido muda scroll-behavior para auto e transições para 0s. Nenhuma exceção JavaScript na execução final.
- Verificação e capturas em `.cache/stage5/`, ignoradas pelo Git; browser com perfil isolado e servidor temporário encerrados ao terminar. Um seletor do roteiro temporário foi corrigido antes da verificação final.
- README atualizado com estrutura, edição de textos, navegação, breakpoint, limites da etapa e resultados. A página completa e a seleção de idioma ainda dependem das etapas 6–7; não se trata de uma auditoria integral com leitor de tela.
- Próxima etapa proposta: Etapa 6, conteúdo real de Sobre, Projetos, Experiência, Formação, Tecnologias, Certificações e Contato/Footer; dados tipados e componentes de cards/timelines, mantendo os IDs existentes e as políticas de conteúdo, privacidade e links condicionais. Validar lint/build e comportamentos relevantes. Ainda sem autorização.

### 17/10/2026 — Etapa 6 concluída

- Autorização: resposta “sim” do usuário à proposta de preencher Sobre, Projetos, Experiência, Formação, Tecnologias, Certificações e Contato/Footer.
- Substituídas as estruturas de títulos por sete seções completas, preservando todos os IDs e a navegação existente. App compõe as seções e Footer; Section centraliza semântica, Container, título, associação e destino focável.
- Dados em `src/data/`: profile, projects, experience, education, skills e certifications, com contratos TypeScript explícitos em `types.ts`. Textos e rótulos de interface adicionais em `src/i18n/pt.ts`, mantendo PT/EN funcional para a Etapa 7.
- Sobre usa três parágrafos aprovados em primeira pessoa e somente localização pública, sem telefone ou endereço residencial.
- Três projetos: TEDAS-CE e MIND-BH como pesquisa profissional do CPIDT, com períodos documentados e status de repositório não público; redes neurais em C como projeto pessoal em desenvolvimento, Perceptron com pesos manuais/porta AND e próximos passos identificados como planejados.
- Criados ProjectCard e ProjectArtwork: resumo de duas frases por card, tecnologias prioritárias, lista completa e escopo em details/summary nativo. Detalhes expandem na própria página sem modal ou alteração de rota. RepositoryUrl opcional; nenhuma URL de projeto foi inventada.
- Artes SVG próprias para documento/conexões, fala e rede neural; somente decoração abstrata, sem dados clínicos, medições ou resultados de pesquisa.
- TimelineItem reutilizado em Experiência e Formação: CPIDT 2025–atual com cargo/atividades documentados; UECE 2021–2027 com conclusão prevista; SENAI 2019–2022. Nenhuma experiência adicional criada.
- Seis grupos de tecnologias priorizando ML, linguagem e dados, seguidos de linguagens, desenvolvimento/MLOps e cloud. C identificado como estudo pessoal; nenhum nível de proficiência ou uso universal em produção alegado.
- CertificationCard apresenta AI Practitioner com emissão setembro/2026 e validade setembro/2029. LFS158 em grupo separado de cursos com emissão outubro/2026. Cloud Practitioner modelada com `display: false`, apenas ano 2026, sem mês/expiração/URL inventados; filtrada antes da renderização.
- Campos opcionais `credentialUrl` e `repositoryUrl` geram ações apenas quando preenchidos com URLs reais autorizadas. Dados atuais não fornecem esses links; nenhuma ação correspondente aparece. Datas com mês conhecido usam time/ISO ano-mês; ano isolado permanece label textual.
- Contato com texto aprovado, e-mail profissional em mailto e perfis GitHub/LinkedIn confirmados; Footer com autoria, ano dinâmico e retorno ao início. Sem formulário, serviço de e-mail, backend ou PDF não autorizado.
- Estilos responsivos para prosa, artes/cards de projetos, details/summary, timelines, grupos de tecnologias, credenciais, contato e footer. Grade de projetos/skills com uma, duas ou três colunas conforme a largura.
- `npm run lint`: passou sem erros ou avisos. `npm run build`: passou com TypeScript e Vite, em execução autorizada fora do sandbox. Nenhuma dependência adicionada.
- Build: HTML 0,56 kB, CSS 18,23 kB, JS 242,31 kB; gzip 0,35 / 4,73 / 75,80 kB, respectivamente.
- Chrome headless: conteúdo conferido com três projetos, uma experiência, duas formações, seis grupos de tecnologias, duas credenciais visíveis, três parágrafos de About e ano atual no Footer.
- Verificadas datas, status de graduação, classificação de curso, ocultação da Cloud Practitioner, ausência de mês/expiração inventados e de URLs de repositório/credencial sem fonte. Links HTTP limitados aos dois perfis autorizados; mailto com e-mail profissional.
- Layout completo sem transbordamento em 320, 375, 768, 1024 e 1440 px; ações e summaries com pelo menos 44 px de altura.
- Details dos três projetos abrem com Enter e fecham com Espaço em 320 e 1440 px; foco visível, rota preservada, temas completos e próximos passos em C conferidos. Nenhum link privado nos cards, inclusive quando expandidos.
- Sete âncoras e retorno ao início verificados por teclado após preencher conteúdo; títulos visíveis abaixo do header, IDs únicos e nenhum destino interno ausente. Nenhuma exceção JavaScript na execução.
- Capturas geradas em `.cache/stage6/`; projetos desktop/mobile, credenciais desktop e contato mobile revisados visualmente. Chrome com perfil isolado e servidor temporário encerrados ao terminar.
- README atualizado com estrutura real, tipos, campos de manutenção, status de credenciais, condições dos links, origem dos visuais e resultados. QA temporária e documentação permanecem locais/ignoradas pelo Git.
- Próxima etapa proposta: Etapa 7, dicionários tipados PT-BR/EN, seletor funcional visível no header/mobile, tradução de interface e conteúdo, atualização de html.lang e metadados e verificação de equivalência/layout/teclado, preservando âncoras e políticas de exibição. Ainda sem autorização.

### 17/10/2026 — Etapa 7 concluída

- Autorização: resposta “sim” do usuário à proposta de implementar seletor PT/EN e traduzir conteúdo, interface e metadados.
- Solução com contexto/estado React e dicionários tipados, sem dependências adicionais. Locale `pt-BR`/`en`, PT-BR inicial a cada carregamento, sem persistência ou detecção automática de idioma.
- Criados `src/i18n/types.ts`, `en.ts`, `en-content.ts`, `index.ts`, `context.ts`, `LanguageProvider.tsx` e `src/components/LanguageSwitcher.tsx`; atualizado `pt.ts`.
- Dictionary deriva da estrutura PT e preserva as chaves/tupla de navegação e IDs; mapas de tradução de conteúdo exigem os IDs literais das coleções base. As coleções de dados usam `as const satisfies` para preservar esses identificadores com os contratos existentes.
- Conteúdo inglês composto sobre a base de dados: traduz textos de perfil, projetos, timelines, skills e labels de datas; mantém IDs, URLs, categorias, arte, instituições, datas ISO e flags de exibição na fonte compartilhada. Nenhuma regra de credencial duplicada por idioma.
- Todos os consumidores de conteúdo/interface integrados ao useLanguage; não há imports diretos de conteúdo PT nas seções ou componentes. Nomes oficiais de instituições/produtos/credenciais preservados conforme briefing.
- LanguageSwitcher usa botões nativos PT/EN, nomes acessíveis traduzidos, `aria-pressed` e destaque visual. Alvos com 44 × 44 px e seleção funcional visível no header/mobile; ordem visual e de foco ajustada junto à marca.
- Provider atualiza html.lang, document.title e meta description. HTML estático permanece em PT-BR com os valores iniciais; sem novas rotas, canonical ou assets sociais inventados.
- Troca de idioma preserva IDs/âncoras, details expandidos, estado do menu mobile e foco no botão escolhido. A recarga retorna ao PT-BR.
- Removida a largura mínima fixa do body para respeitar a largura útil em telas pequenas com barra de rolagem; layout do seletor ajustado para caber desde 320 px.
- `npm run lint` final passou sem erros/avisos. `npm run build` final passou com TypeScript e Vite, em execução autorizada fora do sandbox. Nenhum pacote instalado.
- Build final: HTML 0,56 kB, CSS 18,51 kB, JS 251,65 kB; gzip 0,35 / 4,79 / 78,29 kB, respectivamente.
- Verificação de 72 caminhos de chave equivalentes nos dicionários; IDs, URLs, organizações/emissores, datas ISO, flags e quantidades de conteúdo preservados entre idiomas.
- Chrome headless sobre o preview do build: comparação dos textos de todas as seções, detalhes, tecnologias, atividades, períodos, status, datas, ações, rótulos acessíveis e metadados com os registros de cada idioma. Cloud Practitioner permanece oculta e regras de links preservadas.
- Doze cenários de layout: PT/EN em 320, 375, 768, 1024, 1200 e 1440 px, sem transbordamento comparado a documentElement.clientWidth (largura útil, descontando a barra de rolagem). Seletor com alvos de pelo menos 44 × 44 px.
- Enter e Espaço alternam idiomas e mantêm foco visível/aria-pressed correto. Detalhes de redes neurais em C permaneceram abertos e hash #projetos preservado durante alternância nos dois sentidos.
- Troca com menu mobile aberto mantém expansão e traduz ações/links; Escape devolve foco ao botão e seleção fecha o menu/navega corretamente. O roteiro de verificação passou a aguardar a estabilização do breakpoint antes dessas interações, evitando corrida entre resize e abertura do menu.
- Recarregamento verificado: PT-BR, interface e metadados iniciais restaurados. Nenhuma exceção JavaScript na execução final.
- Capturas inglesas de Hero mobile/desktop e projetos desktop revisadas visualmente; arquivos/resultados em `.cache/stage7/`, ignorados pelo Git. Chrome com perfil isolado, servidor de desenvolvimento e preview de produção encerrados ao terminar.
- README atualizado com estrutura, uso do contexto, manutenção dos dois idiomas, campos compartilhados, estado inicial e verificações. Revisão integral final permanece nas etapas 8–9.
- Próxima etapa proposta: Etapa 8, revisão de conteúdo, privacidade, links, SEO/favicons, performance e acessibilidade da página completa nos dois idiomas; corrigir achados proporcionais, validar lint/build e registrar limitações. Ainda sem autorização.

### 17/10/2026 — Etapa 8 concluída

- Autorização: resposta “sim” do usuário à proposta de revisar conteúdo, privacidade, links, SEO, desempenho e acessibilidade da página completa.
- Documentos reconferidos: AGENTS, briefing e plano. Conteúdo PT/EN confrontado com nomes, datas, períodos, status e limites do briefing; nenhuma nova alegação profissional ou de resultados clínicos acrescentada. Graduação prevista, pesquisa em andamento, próximos passos em C, classificação do LFS158 e ocultação da Cloud Practitioner preservados.
- Criado public/favicon.svg original: nós e conexões com as cores do site, sem marcas externas. index.html referencia o SVG e declara theme-color. Title/description continuam localizados. Sem endereço público confirmado ou imagem social, não foram inventados canonical, hreflang ou metadados de compartilhamento. SEO permanece sujeito à renderização JavaScript e ao PT inicial na URL única.
- Corrigidos os nomes acessíveis dos botões de idioma para incluir os textos visíveis PT/EN. Consultada a orientação W3C sobre Label in Name, registrada no README.
- Ampliação de texto a 200% revelou transbordamento em 320 px (345 px de conteúdo para 305 px úteis). Corrigido o header mobile com flex-wrap e marca adaptável; após a correção, largura do documento igual aos 305 px úteis nos dois idiomas. ResizeObserver mede as linhas de controles para atualizar o offset das âncoras e o espaço da lista mobile; no desktop considera a altura completa do header. Observer e estilos têm cleanup.
- Build final: TypeScript e Vite passaram. Saída: HTML 682 bytes, favicon 429, CSS 18.588 e JS 252.315; total 272.014 bytes. Gzip medido com node:zlib padrão: 405 / 264 / 4.793 / 77.653 bytes; total 83.115. As estimativas do relatório Vite diferem conforme compressor/configuração e não determinam a compressão da hospedagem.
- npm run lint final passou sem erros ou avisos. Nenhuma dependência adicionada, nenhuma fonte ou imagem remota; somente React e React DOM como dependências de execução. Fontes do sistema e artes SVG mantidas.
- Chrome headless sobre build: 72 chaves equivalentes e políticas compartilhadas PT/EN; todos os textos/metadados comparados nos dois idiomas. Layout em 320, 375, 768, 1024, 1200 e 1440 px sem overflow; detalhes abertos também conferidos em 320, 375, 768, 1024 e 1440 px. Texto a 200% passou em 320, 768 e 1440 px nos dois idiomas; âncora de Projetos permanece abaixo do header.
- Árvore de acessibilidade: 27 títulos, 22 controles nomeados e 17 links em cada idioma, sem saltos de título; um h1 e um main. IDs únicos, referências ARIA resolvidas, SVGs decorativos ocultos, nenhum tabindex positivo. Links internos com destinos; externos limitados aos perfis aprovados, novas abas protegidas. Menu, idioma, estado de detalhes/âncoras, Escape e navegação mobile preservados.
- Tabulação do skip link ao main e aos 11 controles de main/footer passou, todos com foco visível de 2 px. Oito combinações de texto/fundo verificadas na página com detalhes abertos: todas >= 4,5:1, menor 4,82:1. Preferência de movimento reduzido conferida: scroll auto e transições 0s. Favicon respondeu HTTP 200 com MIME SVG. Nenhuma exceção JavaScript.
- Busca em código/assets/HTML e inspeção dos quatro arquivos de dist sem PDF, telefone, endereço detalhado, documentos ou dados clínicos; varredura por padrões comuns de chaves privadas/tokens sem achados. Busca não equivale a garantia absoluta de ausência de segredos. Documentação e QA permanecem ignoradas; favicon permanece versionável. Git continua sem commits e fontes não rastreadas.
- Tentativas de abrir GitHub e LinkedIn pela ferramenta web retornaram erro. URLs conferidas contra o briefing e na aplicação; disponibilidade externa e identidade dos perfis não confirmadas independentemente. Nenhum link de credencial, repositório ou currículo inventado.
- Medição indicativa do preview local: FCP 72 ms e DOMContentLoaded 41,6 ms em uma execução, sem throttling. Antivírus local injetou tentativa de script Kaspersky ausente do código/build; interferência registrada, sem alterar a proteção do ambiente. Não usar esses tempos como métrica de produção. Sem Lighthouse/Core Web Vitals, testes manuais com leitor de tela, Safari/Firefox ou hospedagem real; nenhuma certificação WCAG alegada.
- Roteiro de QA precisou reconhecer aria-hidden herdado, limitar a tabulação aos controles da página e registrar separadamente o script externo do ambiente. Uma verificação de nulidade exigida pelo TypeScript foi corrigida; build/lint finais passaram. Capturas normais e com texto ampliado revisadas; roteiros e resultados em .cache/stage8/. Chrome e servidores temporários encerrados ao terminar.
- README atualizado com estado, favicon, correções, métricas e limitações; oito tarefas desta etapa marcadas como concluídas.
- Próxima etapa proposta: Etapa 9, validar a versão final, build/preview e conteúdo de dist, completar documentação operacional e critérios do briefing, consolidar pendências e preparação para publicação. Destino de hospedagem ainda não confirmado; configuração específica e deploy dependem de autorização própria. Etapa 9 ainda não autorizada.

### 17/10/2026 — Etapa 9 concluída no escopo local

- Autorização: usuário respondeu “Sim” à proposta de validação final, conferência de dist e conclusão da documentação, sem publicação.
- Reconsultados AGENTS, briefing, plano e README. Mantidos o destino de hospedagem indefinido, o escopo estático e a exigência de autorização separada para configuração/publicação e operações Git.
- npm run lint passou sem erros/avisos. npm run build passou, incluindo TypeScript estrito; 54 módulos transformados. npm ls --depth=0 confirmou todas as 16 dependências diretas instaladas sem conflitos. Node 22.14.0/npm 10.9.2 reconferidos. Manifesto e lockfile têm dependências e engines equivalentes. Não reinstalados pacotes e não adicionadas dependências.
- Build final manteve HTML 682 bytes, favicon 429, CSS 18.588 e JavaScript 252.315. Conferência automatizada em .cache/stage9/artifacts.mjs: dist contém exatamente os quatro arquivos referenciados/esperados; favicon idêntico ao public/favicon.svg. Sem Markdown, PDF, sourcemaps, arquivos de ambiente, caminhos locais ou padrões comuns de tokens/chaves privadas encontrados. Tamanhos e hashes SHA-256 registrados em artifacts.json. Essa varredura não é garantia absoluta de detecção de segredos.
- Um padrão inicial de telefone da verificação encontrou tel:!0 na tabela interna de tipos de input do React; inspeção confirmou código da dependência, sem número telefônico. Roteiro corrigido para exigir número após o protocolo. Uma consulta auxiliar node -e falhou por aspas do PowerShell; a inspeção foi feita com leitura nativa e o roteiro final de arquivos passou.
- Reutilizado o roteiro temporário da Etapa 8, com resultados preservados em .cache/stage9/. Preview de produção no Chrome headless passou: conteúdo e metadados nos dois idiomas, 72 chaves, IDs/URLs/datas/flags compartilhados, credenciais visíveis/ocultas, links condicionais, idioma inicial e recarregamento.
- Navegação e interações passaram: troca PT/EN por Enter/Espaço com foco mantido, âncora e details preservados, troca com menu aberto, Escape devolvendo foco, seleção mobile fechando menu, skip link para main e sequência de 11 controles main/footer com contorno de 2 px.
- Doze layouts PT/EN entre 320 e 1440 px e detalhes abertos sem overflow. Seis cenários de texto 200% em 320/768/1440 px passaram, com Projetos abaixo do header. Árvore de acessibilidade manteve 27 títulos e 22 controles nomeados por idioma, IDs únicos e referências resolvidas. Oito pares de texto/fundo >=4,5:1; movimento reduzido e favicon HTTP 200 conferidos. Nenhuma exceção JavaScript. Browser e servidores temporários encerrados ao terminar.
- Limitações preservadas: Chrome automatizado sem leitor de tela manual ou revisão Firefox/Safari; disponibilidade externa dos perfis não confirmada; tempos locais não representam hospedagem. Tentativa de script injetado pelo antivírus local reapareceu, ausente do código/build; sem alterar a proteção do ambiente. Sem Lighthouse ou pontuação WCAG/Core Web Vitals.
- README final atualizado com estado das nove etapas, requisitos/instalação/scripts reais, estrutura, idiomas/dados/credenciais, altura dinâmica do header, fontes/assets originais, ausência de variáveis de ambiente, preparação estática, verificações e pendências. npm ci documentado para reprodução, sem alegar reinstalação limpa nesta etapa.
- Dez critérios da seção 15 confrontados e registrados neste plano, com ressalvas explícitas sobre validação local e publicação. Hospedagem, base específica e workflow adiados: nenhuma configuração de deploy criada. Fontes e configurações permanecem versionáveis; documentos e QA ignorados. Git continua sem arquivos rastreados/commits; nenhuma operação de publicação realizada.
- Entrega local concluída. Próxima decisão, fora do escopo executado: escolher destino e autorizar a configuração/publicação quando desejado.

### Ajuste posterior — foto no Sobre e correção do contato

- Pedido direto do proprietário: adicionar o retrato anexado no Sobre e corrigir a experiência de enviar e-mail, que abria o seletor de navegador/aplicativo.
- Reconsultados AGENTS e briefing. Plano de ajuste registrado antes das alterações; pedido atual autoriza as duas mudanças. Perguntada preferência Gmail/Outlook de forma assíncrona; sem resposta durante a execução, Gmail comunicado como opção inicial, preservando alternativas de mailto e cópia.
- About exibe public/97138361.jpg original fornecido pelo proprietário (460 × 460, 22.568 bytes), sem modificar a imagem. Coluna com retrato e localização no desktop; empilhamento no mobile; largura responsiva, bordas arredondadas, dimensões reservadas, lazy/async e alt traduzido. Caminho usa BASE_URL do Vite.
- Contact: botão principal passa a compor no Gmail web com destinatário codificado a partir de profile.email, target blank e noopener/noreferrer. Texto explica login, escrita e envio pelo visitante. Endereço visível/selecionável mantém mailto para aplicativos configurados; botão Copiar e-mail usa Clipboard API, com sucesso/erro traduzido e role status. Falha orienta cópia manual. Nenhum backend, serviço pago, dependência, credencial ou envio automático acrescentado.
- Lint/build passaram. Preview Chrome com perfil isolado: foto carregou com naturalWidth 460, proporção quadrada e alt correto em PT/EN. Dez layouts 320/375/768/1024/1440 sem overflow. Foto no dist idêntica ao original. Conferidos hostname/protocolo Gmail, parâmetro view cm, destinatário correto, nova aba protegida e mailto preservado.
- Cópia testada por Enter e Espaço com API simulada para sucesso e recusa, mantendo foco visível e texto do endereço disponível. Clipboard do usuário não alterado; não houve teste de envio autenticado nem mensagem enviada. Sem exceções JavaScript na execução. Capturas de Sobre desktop e Contato mobile revisadas visualmente; resultados em .cache/photo-contact/. Browser e servidores encerrados.
- README atualizado com origem da foto, funcionamento/limites do contato e composição atual de dist. Os manifestos e métricas das etapas anteriores permanecem históricos; os roteiros antigos com expectativas de quatro arquivos ou links somente sociais precisam adaptação para esta versão. Sem commit, push ou deploy.

### 17/10/2026 — Evolução visual: Fase 2 concluída

- Autorização: resposta “sim” à proposta da Fase 2 de MELHORIAS_PORTFOLIO.md; contato redesenhado sem novas dependências.
- Criada composição de encerramento com h2 expressivo PT/EN, descrição original, grafo estático, e-mail selecionável e cópia primária; LinkedIn/GitHub com proteção de novas abas. Preservados âncora, foco de destino, endereço e perfis. Removidos Gmail, mailto e explicações antigas do código/dicionários, conforme revisão explicitamente solicitada do requisito original.
- Estados de progresso/sucesso/erro, bloqueio de chamadas simultâneas, região de status renovada por tentativa, foco mantido e largura estável do botão. API indisponível/recusa deixam cópia manual acessível. Nenhuma animação de fase futura, serviço ou envio automático acrescentado.
- Arquivos: Contact.tsx, pt.ts, en.ts, globals.css e documentação README/MELHORIAS_PORTFOLIO/IMPLEMENTAR. Sem mudanças de dados profissionais, foto, footer ou deploy.
- Baseline anterior conferido no Chrome antes de implementar. Lint/build finais passaram. Preview final: dez layouts PT/EN 320–1440 sem overflow, cópia REAL e repetida por Enter/Espaço com permissões no perfil de teste, valor lido somente após escrita do endereço público, estados pendente/concorrente, tradução durante operação, recusa/API ausente, foco, dimensões estáveis, texto 200%, menu/âncora e movimento reduzido passaram. Clipboard anterior não consultado; permaneceu o endereço público copiado pelo teste. Sem exceções JavaScript. Capturas desktop/mobile revisadas.
- QA em .cache/evolution-contact/, com browser e servidores encerrados. Uma falha inicial do roteiro CDP ao serializar um elemento DOM foi corrigida; execução final passou. Limites: sem leitor de tela ou auditoria completa de contraste/CWV; sucesso real no Chrome local não garante permissões em todo navegador/dispositivo.
- Registro detalhado, checklist e status da Fase 2 atualizados em MELHORIAS_PORTFOLIO.md, seção F.3. Próxima fase proposta: Fase 3 (espaçamento e composição), ainda não autorizada. Sem commit, push ou deploy.

### 17/10/2026 — Evolução visual: Fase 3 concluída

- Autorização: “sim” do usuário à proposta de espaçamento/composição. Baseline real no Chrome em .cache/evolution-composition antes das alterações.
- Container padrão 72 rem e opção wide 80 rem; Section com ritmos compacto/editorial/destaque, layout de título empilhado/lateral e wrapper de conteúdo. IDs, ordem DOM, foco e dados preservados. Experiência/Formação com títulos laterais em desktop; Sobre com alinhamento/proporções refinados; Projetos/Skills mais amplos e grades independentes; Skills com gap/alturas consistentes.
- Tokens seletivos: compacto 2,5–4 rem, editorial 3,5–5 rem, destaque 4–6 rem. Contato aplica corretamente padding próprio de até 6 rem com especificidade local, preservando lógica da Fase 2. Sem viewport rígida, bibliotecas novas ou implementação das fases de Hero/cards/animação.
- Lint/build passaram. Baseline e versão final: PT/EN em 320/375/768/1024/1440/1920 com detalhes abertos/fechados (24 cenários por versão), sem overflow. Textos integrais por seção idênticos antes/depois. Sete âncoras por teclado, menu mobile, texto 200% em 320 nos dois idiomas, foto, contagem de projetos/credenciais e ausência de Gmail/mailto passaram. Nenhuma exceção JavaScript. Cópia não reexecutada: lógica intacta e teste real já concluído na Fase 2.
- Comparação PT desktop1440 com detalhes fechados: Formação 820→587 px, Experiência 871→670 px; Projetos/Tecnologias com container 1152→1280 px. Capturas desktop/mobile geradas para seis seções, com revisão visual de Formação, Experiência, Projetos e Sobre. Medidas detalhadas/tabela em MELHORIAS_PORTFOLIO.md F.4; arquivos QA em .cache/evolution-composition/. Chrome e servidores encerrados.
- README atualizado com API/tokens reais; plano de evolução com checklist/registro completos. Sem novo teste de leitor de tela, outros browsers, contraste integral ou CWV; sem alegação de cobertura além dos testes realizados. Próxima proposta: Fase 4, Hero e grafo, ainda não autorizada. Sem commit, push ou deploy.

### 17/10/2026 — Evolução visual: Fase 4 concluída

- Autorização: “sim” à proposta de Hero/elementos gráficos, preservando conteúdo, foto e CTAs. Baseline capturado antes das alterações em .cache/evolution-hero/.
- Hero com faixa de identidade ampla, nome 3–8 rem, especialidades mais legíveis, apresentação/grafo em duas colunas desktop e decoração mobile estática de baixa opacidade sem altura extra. Link PT/EN para Sobre e linha gráfica conectam a leitura; retrato único preservado com moldura CSS e dimensões/alt originais.
- NeuralGraph com variantes default/hero: grupos field/edges/halos/nodes, data-node/data-from/data-to e órbitas/halos exclusivos do Hero. Geometria padrão em C/Contato comparada e preservada. Posições estáticas e limites de intro/cursor/scroll documentados para a Fase 8; nenhum motor, animação, listener, 3D ou dependência nova instalado.
- Arquivos: Hero.tsx, NeuralGraph.tsx, About.tsx, globals.css, pt.ts/en.ts e documentação. Textos profissionais, apresentação, Sobre e três CTAs idênticos ao baseline; novo texto somente no link de navegação. Revisão visual levou a limitar o grafo desktop a 32 rem e alinhar a apresentação ao topo, evitando espaço vazio acima dela.
- Lint/build finais passaram. Preview em doze layouts PT/EN 320–1920 sem overflow; h1 e CTAs visíveis. CTA Projetos e link Sobre verificados por Enter em 320/1440, com hash/foco e offset corretos. Texto 200% em 320 passou nos dois idiomas. Foto única carregada, dimensões reservadas e proporção quadrada conferidas. Comparação dos conteúdos e dos grafos padrão passou, sem exceções JavaScript.
- Contraste conservador com gradiente/decor mobile: secundário 7,60:1, principal 13,87:1, botão 4,82:1. Não equivale a auditoria pixel a pixel, leitor de tela ou CLS/CWV. Capturas Hero/Sobre desktop/mobile PT/EN registradas e revisadas; QA em .cache/evolution-hero/, com browser e servidores encerrados.
- Checklist e registro detalhado atualizados em MELHORIAS_PORTFOLIO.md F.5; README atualizado. Próxima proposta: Fase 5, Projetos, ainda não autorizada. Sem commit, push ou deploy.

### 17/10/2026 — Evolução visual: Fase 5 concluída

- Autorização: “sim” à proposta de faixas/cards maiores, artes específicas e detalhes refinados. Baseline de dados/medidas registrado antes em .cache/evolution-projects/before.json.
- Projetos agora em três faixas verticais: arte/conteúdo em desktop e empilhamento natural no mobile; só a decoração alterna de lado no segundo card. Títulos maiores, índices decorativos e summary refinado. Sem carrossel, pin, sticky ou altura de viewport artificial. Cards fechados medidos em 1440 × 1000: aproximadamente 494/537/436 px; sticky não mostrou necessidade nesta composição.
- Artes SVG originais: documento/estruturas abstratas TEDAS; fala/órbitas MIND; dois inputs/somatório/AND para Perceptron em C. C deixa de reutilizar NeuralGraph; Hero/Contato e demais seções preservados. Sem dados privados ou novas alegações de entrega.
- Details/summary nativos preservados. Quatro tecnologias no card e apenas as adicionais na expansão; lista completa, ordem, dados e status comparados ao baseline. Novo rótulo adicional PT/EN. Ganchos de arte/conteúdo/camadas e limites de movimento documentados para Fase 8, sem instalar motor.
- Arquivos: Projects.tsx, ProjectCard.tsx, ProjectArtwork.tsx, globals.css, pt.ts/en.ts e documentação. Dados profissionais/tipos não modificados; sem dependências novas.
- Lint/build passaram. Preview final: 24 layouts PT/EN 320–1920 com detalhes abertos/fechados sem overflow; alvos >=44 px, três expansores nativos nomeados, Enter/Espaço/foco, estado aberto durante PT/EN, hash/âncora, landscape 844 × 390 e texto 200% em 320 passaram. Nenhuma exceção JavaScript. Textos de outras seções preservados e nenhum link de projeto inventado.
- Capturas iniciais durante scroll suave estavam deslocadas; roteiro ajustado para capturar com movimento reduzido, sem alterar produto. Capturas finais TEDAS/MIND/C desktop/mobile revisadas. before.json permanece baseline de dados/medidas, não se alega validação visual das imagens iniciais não estabilizadas. Browser/servidores encerrados ao terminar. Limites: Chrome emulado, sem leitor de tela manual, auditoria integral de contraste ou CWV.
- README/planejamento atualizados; registro detalhado e contrato de animação em MELHORIAS_PORTFOLIO.md F.6. Próxima proposta: Fase 6, Experiência/Formação/Tecnologias, ainda não autorizada. Sem commit, push ou deploy.

### 17/10/2026 — Evolução visual: Fase 6 concluída

- Autorização explícita: “continue a execução da fase 6”. AGENTS.md e briefing consultados; escopo restrito à fase aprovada.
- [x] Agrupar as sete atividades CPIDT em três frentes PT/EN, preservando integralmente frases, cargo, organização, período, local e resumo. `TimelineEntry.activityGroups` substitui a lista plana; grupos `models`, `data`, `integration` com 2/2/3 atividades.
- [x] Atualizar timeline profissional e usar largura editorial com subtítulos/listas; marcadores e atributos permitem movimento futuro sem dependência de animação.
- [x] Substituir timeline acadêmica por dois cards responsivos de altura natural, mantendo UECE/SENAI, datas, resumos, localização existente e conclusão prevista.
- [x] Refinar seis categorias/36 competências de Tecnologias, com destaque editorial a IA/Dados, sem proficiência inventada, novos itens ou controles artificiais.
- [x] Validar conteúdo, idiomas, layouts, teclado e build; atualizar README e MELHORIAS_PORTFOLIO.md, checklist e registro F.7.
- Arquivos: tipos, experiência PT/EN, TimelineItem, SkillsGroup, Experience, Education, Skills, globals.css e documentação. Educação usa Card diretamente; sem novo componente ou pacote.
- Antes/depois: comparação de sete atividades, campos profissionais/acadêmicos, seis categorias/36 competências e textos de todas as demais seções passou nos dois idiomas. Distribuição dos grupos e IDs equivalentes conferidos.
- Lint/build finais passaram: 54 módulos; CSS 26,72 kB/gzip 6,21; JS 260,41 kB/gzip 80,40 (valores arredondados do Vite). Preview: 12 layouts PT/EN 320–1920 px e texto 200% em 320 px sem overflow. Âncoras das três seções por teclado em desktop/mobile, menu mobile, Enter/Espaço no seletor e preservação do hash passaram. IDs únicos, ARIA resolvida e nenhum controle artificial nas seções; nenhuma exceção JavaScript final.
- Capturas Experiência/Formação/Tecnologias desktop/mobile revisadas. Removida reserva de altura dos títulos de Tecnologias identificada na primeira revisão. Roteiro inicial teve seletor de idioma corrigido antes do baseline válido; não era falha da aplicação. Resultados finais em `.cache/evolution-career/`, com Chrome e servidores encerrados. Limites: Chrome emulado, sem leitor de tela manual, outros navegadores ou nova auditoria integral de contraste/CWV.
- Status: Fase 6 concluída no escopo aprovado; Fases 7–9 não autorizadas. Próxima proposta: Fase 7, refinamento de Certificações preservando datas, tipos, Cloud Practitioner oculta e ausência de links/badges não fornecidos. Sem commit, push, publicação ou configuração de deploy.

### 17/10/2026 — Evolução visual: Fase 7 concluída

- Autorização: “sim” à proposta da Fase 7 — Certificações. Executado o refinamento previsto, com símbolos neutros próprios, sem alteração de credenciais.
- [x] Reconferir três registros, mantendo AWS AI Practitioner e curso LFS158 visíveis, tipos/datas intactos e Cloud Practitioner oculta.
- [x] Refinar hierarquia de emissor, título e datas; remover Badge redundante e diferenciar visualmente os grupos profissional/curso.
- [x] Usar SVGs genéricos decorativos de certificado/livro, com hover de borda discreto e movimento reduzido respeitado.
- [x] Conferir ausência de assets oficiais/URLs autênticas; manter omissão de links e registrar a condição para futura inclusão.
- [x] Validar conteúdo, PT/EN, layouts, teclado, semântica e build; atualizar README e MELHORIAS_PORTFOLIO.md, checklist e registro F.8.
- Arquivos: Certifications.tsx, CertificationCard.tsx, globals.css e documentação. Sem novo pacote, componente, arquivo público ou alteração em dados/tipos/traduções.
- Comparação antes/depois preservou títulos, emissores, grupos, datas/ISO, URLs e conteúdo das outras seções nos dois idiomas. Hashes das fontes de credenciais/tipos/EN e manifesto/lockfile idênticos. Cloud oculta também na árvore acessível; nenhuma URL nova.
- Lint/build passaram: 54 módulos, CSS 28,12 kB/gzip 6,39, JS 261,08 kB/gzip 80,61 (Vite arredondado). Doze layouts PT/EN 320–1920 px e texto 200% em 320 px sem overflow. Âncora por Enter e menu mobile, títulos/ARIA/IDs, ícones decorativos e movimento reduzido passaram; nenhuma exceção JavaScript.
- Capturas PT desktop/mobile e EN desktop revisadas. Resultados em `.cache/evolution-certifications/`; Chrome e servidores encerrados. Limites: sem leitor de tela manual, outros navegadores ou nova auditoria integral de contraste/CWV; links não exercitados porque nenhuma URL autêntica foi fornecida. Status: Fase 7 concluída; Fases 8–9 não autorizadas. Próxima proposta: Fase 8, incluindo aprovação explícita das dependências de animação. Sem commit, push ou deploy.

### 17/10/2026 — Evolução visual: Fase 8 concluída

- Autorização: “continue” à proposta que incluía instalar GSAP/@gsap/react e manter scroll nativo. Instalados gsap 3.15.0 e @gsap/react 2.1.2 exatos após conferir requisitos/licença nas fontes oficiais; npm ls passou e instalação informou zero vulnerabilidades naquele momento.
- [x] Integrar motor em componente opcional PortfolioMotion, com lazy/Suspense, ref do main, useGSAP, matchMedia e fallback estático.
- [x] Implementar intro finita, deriva conjunta da rede, entradas curtas de títulos/retrato e scrub decorativo em projetos/Hero/Contato.
- [x] Limitar parallax/cursor a desktop apto; preservar mobile, conteúdo visível e movimento reduzido dinâmico.
- [x] Agrupar refresh para tamanho/idioma, imagem e details; limpar listeners/observer/frame e efeitos.
- [x] Corrigir resíduos de fromTo ao alternar mídia, com snapshot/restauração de atributos e clearProps público.
- [x] Validar conteúdo/layouts, efeitos, teclado/toque/histórico, fallback e StrictMode; registrar custo e frames.
- Arquivos: package.json/lockfile, App.tsx, novo PortfolioMotion.tsx, NeuralGraph.tsx e documentação. Sem Lenis, pin/sticky, novos dados/imagens/páginas ou mudança de deploy.
- Lint/build/npm ls finais passaram. Build 62 módulos: JS principal 262,87/gzip 81,37 kB; movimento 117,72/gzip 46,09; JS total +119,51/gzip +46,85 sobre Fase 7. CSS 28,79/gzip 6,57 (Vite arredondado).
- Conteúdo PT/EN/credenciais preservado contra baseline da Fase 7. 24 layouts estáticos reduzidos e texto 200% em 320 passaram. Ativos exercitados em 375/768/1440, seis trocas de idioma, cursor limitado, scrub reversível e refresh de details. Sete âncoras desktop/mobile, menu, histórico, PageDown/Home/End e toque passaram.
- Redução dinâmica deixou zero triggers/estilos residuais; ocultação simulada deixou zero animações ativas. Chunk bloqueado em recarga real preservou oito seções/hash/details. StrictMode em fixture: 14→15→14 triggers e estilos restaurados. Sem exceções JavaScript finais. Roteiro ajustado para ESM, recarga real e interop React; tentativa intermediária de API interna substituída por clearProps após falha de tipos.
- Amostra local de 90 frames: p95 16,7 ms, máximo 16,8 ms, sem long tasks nessa janela; não representa CWV/hospedagem real. Capturas EN Hero/Projetos desktop e Contato mobile revisadas. QA em `.cache/evolution-motion/`; Chrome e servidores encerrados.
- README e registro F.9 de MELHORIAS_PORTFOLIO.md atualizados. Fase 8 concluída; Fase 9 não autorizada. Próxima proposta: regressão consolidada de responsividade/acessibilidade/PT-EN/cópia/links/build e otimização proporcional. Limites: sem leitor de tela manual, outros browsers, auditoria integral de contraste/heap ou CWV nesta fase; sem commit, push ou publicação.

### 17/10/2026 — Evolução visual: Fase 9 concluída

- Autorização: “sim” à proposta de revisão final/testes/otimização, após relato do custo aproximado de 47 kB gzip da Fase 8. Escopo técnico local, sem publicação.
- [x] Revisar componentes/conteúdo conforme briefing, políticas e matriz E.1.
- [x] Executar regressão em Chrome/Edge: 96 cenários de layout, idiomas, movimento, detalhes e estados.
- [x] Verificar semântica, foco, contraste, cores forçadas, texto 200%, teclado e declarar cobertura manual ausente.
- [x] Confirmar cópia real/repetida, concorrência, tradução durante operação e falhas; ausência de Gmail/mailto/formulário.
- [x] Conferir foto, credenciais/links/metadados, artefatos e correspondência manifesto/lockfile.
- [x] Investigar orçamento do motor e evitar seu download no acesso inicialmente reduzido.
- [x] Executar lint/build/npm ls e medições reproduzíveis; documentar resultados, limites e entrega local.
- Alteração de código: App.tsx passa a solicitar o componente lazy apenas quando há movimento normal. Acessos reduzidos não baixam 117.720 bytes do módulo; alteração de preferência inicia o módulo, que mantém sua reversão dinâmica. Sem pacote novo, mudanças de dados/CSS/configuração/deploy.
- Investigação em memória: core explícito economizou só 26 bytes gzip; distribuição minificada aumentou 594. Mantida a API/importação aprovada. Custo total incremental permanece perto de 47 kB gzip, acima da referência de investigação de 40 kB; o valor já tinha sido explicitado antes da autorização da fase. Meta não alterada retroativamente, sem alegar orçamento inferior a 40.
- Chrome 155.0.8059.80 e Edge 155.0.4283.62: 48 cenários cada (PT/EN × normal/reduzido × seis larguras × details abertos/fechados), landscape e seis situações de texto 200% por browser, sem overflow. 29 títulos/22 controles nomeados/16 links por idioma; IDs/ARIA, ordem/foco 2 px, nove pares de contraste com mínimo 4,8157:1 e cores forçadas passaram. Não é auditoria WCAG integral ou leitor de tela.
- Cópia REAL e repetida conferida em ambos: só lido clipboard após a escrita do endereço público; anterior não consultado. Permaneceu o e-mail público ao terminar. Falhas/concorrência simuladas passaram; nenhuma mensagem enviada. Foto/favicons idênticos aos originais; dados/idiomas/hash/menu/detalhes preservados.
- Regressão de movimento repetida no Chrome: scrub/cursor/refresh, teclado/toque/histórico, redução dinâmica, fallback, ocultação simulada e fixture StrictMode passaram. Nenhuma exceção JavaScript final. Capturas finais Sobre/Projetos/Contato revisadas e Sobre comparado à Fase 4.
- Doze medições locais: CPU 4×, 375×1000, latência 40 ms, download 200.000 B/s, upload 93.750 B/s, três por preferência/browser. Edge repetido só para performance após detectar cache reutilizado; usado resultado com cache desativado/limpo. FCP/LCP observados de 696–916 ms no Chrome e 696–788 no Edge corrigido; nenhum layout shift nas janelas, um long task de 57 ms em um ensaio Edge normal. Não é CWV/INP de campo nem evidência de melhora temporal garantida.
- Lint/build/npm ls e verificação de artefatos passaram. Seis arquivos dist com hashes/tamanhos em artifacts.json; foto/favicons originais, sem documentos locais/PDF/sourcemap/env/padrões comuns de segredos. Busca pontual não garante ausência universal de dados sensíveis. Manifesto/lockfile/versões equivalentes, sem suíte permanente/npm test inventados.
- Registros em `.cache/evolution-final/` e F.10 de MELHORIAS_PORTFOLIO.md; README atualizado. Chrome/Edge e servidores encerrados. Limites: leitor de tela manual, Firefox/Safari/iOS/físico, disponibilidade externa dos perfis, contraste/heap integrais e produção. Fases da evolução concluídas no escopo técnico local; aceite visual e publicação seguem com o proprietário. Sem commit, push ou deploy.

### 18/10/2026 — Segunda evolução visual: Fase 2 concluída tecnicamente

- Autorização: aprovação explícita da composição visual do Hero e execução somente da Fase 2. Orientações adicionais: preservar estética orgânica, rótulos discretos e preparar geometria para a futura Fase 3. Auditoria/Fase 1, GSAP/ScrollTrigger/SVG sem dependências novas e ordem 1 → 2 → 3 → 6 → 4 → 5 → 7 → 8 aprovados. Sem botão de pausa; introdução futura finita, sem loops automáticos.
- [x] Preparar SVG desktop com 12 nós/4 camadas/30 ligações e mobile com 8 nós/3 camadas/15 ligações, mantendo pequenas irregularidades na pose final.
- [x] Posicionar gráfico mobile no fluxo após CTAs; preservar identidade, foto, links, variante padrão de Contato e dados profissionais.
- [x] Definir nós/arestas/rotas/poses tipados e funções puras para posições, ligações e amostragem de sinais; ganchos estáveis de camadas/perfis no SVG.
- [x] Traduzir rótulos PT/EN e validar apresentação sem ativar motor novo ou sequência GSAP.
- [x] Executar lint/typecheck/build, testes de geometria, 24 layouts Chrome, teclado/texto ampliado e revisão de capturas.
- Arquivos: `src/components/NeuralGraph.tsx`, `src/sections/Hero.tsx`, `src/styles/globals.css`, `src/i18n/pt.ts`, `src/i18n/en.ts`, novos `src/data/heroGraph.ts` e `src/motion/graphGeometry.ts`; este histórico e `PLANEJAMENTO_EVOLUCAO_VISUAL.md`. `PortfolioMotion.tsx`, dependências, assets e deploy não alterados.
- Build aprovado: 64 módulos; CSS 29,39/gzip 6,68 kB; JS principal 267,13/gzip 82,85 kB; módulo PortfolioMotion 117,72/gzip 46,09 kB, conforme relatório arredondado Vite. Primeira tentativa no sandbox falhou por EPERM de processo nativo; execução fora do sandbox aprovada pela ferramenta passou, sem instalação ou ajuste de configuração.
- Chrome 155: seis larguras (320/375/768/1024/1440/1920) × PT/EN × normal/reduzido sem overflow, um perfil visível e contagens corretas. Texto 200% em 320, idioma Enter, CTA Projetos/hash/foco e details Enter/Espaço passaram. Grafo do Contato e conteúdo fora do Hero preservados antes/depois da matriz; foto e oito seções presentes. Sem novo botão de pausa/mailto.
- Geometria: dois perfis/dez poses, ligações entre camadas adjacentes, sinais nos caminhos/segmentos correntes, nós intermediários, offsets e imutabilidade. Capturas finais PT desktop/mobile, EN desktop e poses intermediárias em `.cache/evolution-hero-phase2/`; relatório `results.json`. Roteiro corrigido para normalizar style vazio do cleanup legado e seletor escapado; execução final sem exceções JavaScript. Navegador e servidores encerrados.
- Limites: Chrome emulado; sem leitor de tela manual, Safari/Firefox/físico, contraste integral ou novo teste real de clipboard/CWV. Avaliação visual final do proprietário pendente. Sinais no SVG permanecem inativos; nenhuma introdução nova, cursor novo ou transição cinematográfica implementados.
- Fase 3 preparada por IDs, perfis, grupos de camadas, funções de geometria e rotas, mas não autorizada/iniciada. Parar após apresentação. Sem commit, push ou deploy.

### 18/10/2026 — Segunda evolução visual: Fase 3 concluída tecnicamente

- Autorização: “continue” após a apresentação da Fase 2, tratada como autorização apenas da Fase 3. Arquivos/escopo apresentados antes de editar; sem botão de pausa ou loop ambiente, conforme decisão anterior. Fases seguintes continuam dependentes de aprovação específica.
- [x] Integrar cena do Hero ao useGSAP/matchMedia existentes, selecionando SVG desktop/mobile e substituindo somente entrada/cursor antigos do grafo.
- [x] Revelar rede, propagar sinais e reorganizar nós de maneira finita, em aproximadamente 4 s desktop/2,4 s mobile, terminando em repouso.
- [x] Manter nós/arestas/halos/sinais no mesmo modelo; renderizar pelo ticker existente, com callback pontual cancelável e sem estado React por frame.
- [x] Limitar cursor local a até 4 unidades SVG e tratar saída, aba oculta, scroll, idioma, preferências e mudança de perfil sem repetição indevida.
- [x] Preparar transações de layout/refresh aninhadas para uso futuro nos detalhes, sem alterar cards nesta fase.
- [x] Validar lint/typecheck/build, 24 layouts, frames/sinais, fallback, navegação, preferências, Strict Mode e coordenação de layout.
- Arquivos desta fase: `src/components/PortfolioMotion.tsx`, novos `src/motion/heroScene.ts` e `src/motion/layoutRefresh.ts`; este histórico e `PLANEJAMENTO_EVOLUCAO_VISUAL.md`. Alterações anteriores da Fase 2 preservadas. App, SVG/geométria da Fase 2, CSS-fonte, dicionários, dependências, conteúdo e assets não modificados novamente.
- Build final: 66 módulos; JS principal 267,17/gzip 82,87 kB; movimento 122,04/gzip 47,64 kB; CSS gerado 29,41/gzip 6,69 kB (Vite arredondado). Incremento total JS gzip de cerca de 1,57 kB sobre Fase 2. Sem pacote novo ou alteração de deploy.
- Chrome 155: 241 frames, extremos conectados com diferença máxima zero, sinais em 107 frames; p95 local entre frames ~16,7 ms. Cursor observado ~2,26 unidades, zero mutações ociosas após estabilizar. São amostras de laboratório, sem garantia CWV/produção.
- Matriz 24 layouts PT/EN/normal-reduzido em seis larguras sem overflow/pin; conteúdo preservado. Idioma durante introdução, reduced-motion/perfil durante reprodução, aba oculta/retorno, scroll antecipado/topo, hash, chunk bloqueado e preferência reduzida inicial sem download passaram. CTA por Enter preservou hash/foco e details nativo funcionou.
- Strict Mode: triggers 15→18→15; ticker 1→1; SVG restaurado e introdução ativa na segunda montagem. Transação de layout: zero refreshes intermediários, um ao concluir a última transação, nenhum após destruir. Roteiro corrigido para ignorar style vazio e aguardar montagem lazy antes do baseline. Execução final sem exceções JavaScript.
- Evidências em `.cache/evolution-motion-phase3/` e seção 11 do planejamento. Capturas desktop/mobile examinadas; Chrome e servidores encerrados. Limites: Chrome emulado, sem outros browsers/leitor de tela/físico/heap integral/CWV ou novo teste real de clipboard.
- Próxima fase na ordem aprovada: Fase 6, detalhes expansíveis e tipografia. Não iniciada; aguardar avaliação e autorização própria. Sem commit, push ou deploy.

### 18/10/2026 — Segunda evolução visual: Fase 6 concluída tecnicamente

- Autorização: “continue” após a Fase 3, incluindo pedido explícito de trocar GitHub/LinkedIn no Hero por “Fale comigo”, levando ao Contato. Escopo e arquivos apresentados antes de editar. A ordem permanece 1→2→3→6→4→5→7→8; nenhuma fase seguinte autorizada.
- [x] Separar composição principal de texto/arte e mover details para rodapé full-width do mesmo card, preservando alternância, todos os parágrafos/tecnologias e links condicionais.
- [x] Implementar ProjectDetails com details/summary nativo e Web Animations API: 260 ms, altura medida/corrente, reversão segura, cleanup e fallback reduzido/API ausente.
- [x] Tratar foco, corpo inert durante fechamento, idioma/resize/preferência durante animação e ausência de altura inline residual.
- [x] Integrar transação de layout e corrigir segundo refresh final observado, absorvendo notificações finais de toggle/ResizeObserver antes de uma única medição.
- [x] Aplicar tokens responsivos de leitura, metadados e tags sem trocar fontes/cores/dados ou antecipar timelines/animações das próximas fases.
- [x] Hero com Conhecer projetos + Fale comigo/Get in touch, âncora #contato. Links profissionais continuam no Contato.
- [x] Validar baseline PT/EN, 48 layouts, expansão/teclado/foco/fallback/refresh, CTA Contato, texto ampliado, capturas, lint/typecheck/build e diff sem erros de whitespace.
- Arquivos: `src/components/ProjectCard.tsx`, novo `src/components/ProjectDetails.tsx`, `src/styles/globals.css`, `src/motion/layoutRefresh.ts`, `src/sections/Hero.tsx`, `src/i18n/pt.ts`, `src/i18n/en.ts`; este histórico e `PLANEJAMENTO_EVOLUCAO_VISUAL.md`. Alterações anteriores preservadas; sem dependência, configuração, fotografia ou dado profissional novo.
- Build final: 67 módulos; JS principal 270,72/gzip 84,11 kB; movimento 121,07/gzip 47,32 kB; CSS 30,44/gzip 6,87 kB (Vite arredondado). Total JS gzip cerca de +0,92 kB sobre Fase 3, sem biblioteca nova. Lint/typecheck/build passaram.
- Chrome: 48 combinações (seis larguras × PT/EN × normal/reduzido × aberto/fechado) sem overflow. Arte/linha principal dos três cards estáveis <=1 px e summaries >=44 px. Texto, tecnologias, artes e foto preservados contra baseline gravado antes de implementar. Texto a 200% em 320 px com painéis abertos passou.
- Expansão observada com altura intermediária e um refresh após estabilizar; Enter/Espaço, dez reversões, idioma/resize/redução durante transição, foco interno/retorno e API ausente passaram. CTA #contato manteve hash/foco/título abaixo do header em dois idiomas e 375/1440 px. Zero exceções JavaScript finais.
- Tipografia de leitura 16,08 px em 375 e 17,68 em 1440; tags 13–13,79; metadados 14–15. Capturas Hero/MIND desktop/mobile examinadas. Evidências em `.cache/evolution-details-phase6/` e seção 12 do planejamento; navegador/servidores encerrados.
- Limites: Chrome emulado; sem outros browsers/dispositivo físico/leitor de tela/contraste ou CWV integrais/novo teste real de clipboard. Avaliação visual do proprietário pendente. Próxima proposta: Fase 4, transições cinematográficas, ainda não autorizada. Sem commit, push ou deploy.

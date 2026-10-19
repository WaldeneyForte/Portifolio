# AGENTS.md — Manutenção do portfólio

## Escopo e aprovação

Portfólio pessoal de Waldeney Filho: página única responsiva, PT-BR/EN, navegação por âncoras e identidade preto/grafite/vermelho. Preservar funcionalidades e conteúdo confirmado. Não adicionar funcionalidades, animações, redesign, backend, chatbot, RAG ou serviços sem solicitação e autorização próprias.

Antes de alterar arquivos, apresentar diagnóstico, tarefas, arquivos previstos, impactos e verificações; perguntar explicitamente se pode executar e aguardar aprovação. Executar somente o conjunto aprovado. Novas etapas e mudanças de escopo exigem nova autorização. Inspeções de leitura podem prosseguir para fundamentar a proposta.

Não instalar/atualizar dependências, excluir documentos, alterar índice Git, branches ou remotos, fazer commit/push, publicar, configurar deploy ou gerar custos sem autorização específica. Preservar alterações locais existentes; nunca restaurar ou limpar trabalho por inferência. Não reescrever o histórico Git.

Após cada conjunto autorizado, informar mudanças, verificações, limites e próxima etapa sem iniciá-la automaticamente. Manter checklist e resultados no plano de manutenção local, quando disponível; planejamentos históricos não concedem novas autorizações.

## Arquitetura e convenções

- React funcional com hooks e TypeScript estrito; Vite para desenvolvimento/build, Tailwind CSS e estilos globais, GSAP/@gsap/react para movimento.
- `src/components/`: componentes compartilhados; `src/sections/`: seções; `src/data/`: dados tipados; `src/i18n/`: dicionários e conteúdo PT/EN; `src/motion/`: cenas e coordenação de layout; `src/styles/`: tokens e estilos; `public/`: assets públicos revisados.
- Código e configurações atuais são a referência técnica. Separar dados, traduções e apresentação; reutilizar componentes e manter tipos adequados. Não refatorar por preferência estética nem introduzir bibliotecas sem necessidade aprovada.
- Atualizar os dois idiomas em mudanças de conteúdo; manter `html.lang`, título e descrição coerentes. Competências profissionais não são necessariamente tecnologias usadas para construir o site.

## Funcionalidades e conteúdo

Manter âncoras, menu mobile, seletor PT/EN, detalhes expansíveis, timelines, foto, links profissionais e e-mail selecionável com cópia/feedback. O Hero usa Projetos/Fale comigo; o contato atual não usa mailto ou formulário. Não reintroduzir comportamentos antigos por referência a documentos históricos.

Não inventar experiências, projetos, métricas, datas, credenciais ou links. TEDAS-CE e MIND-BH são pesquisas, sem promessas clínicas ou de código público; Redes Neurais em C é estudo em andamento. Distinguir implementação concluída de evolução planejada. Cloud Practitioner permanece oculta até validação/autorização; LFS158 é curso, não certificação profissional de exame.

## Segurança e privacidade

- Nunca incluir segredos no código, assets, exemplos ou bundle. Variáveis do front-end são públicas; `.env.example` deve conter somente exemplos sem segredos.
- Não publicar telefone, endereço residencial, dados clínicos, informações internas de pesquisa ou currículo integral sem revisão e autorização.
- Evitar HTML dinâmico não sanitizado e execução de código construído de strings. Revisar URLs; links `_blank` devem passar pelo helper que garante `noopener noreferrer`.
- Auditar dependências quando pertinente; não executar correções automáticas ou upgrades sem aprovação. Não imprimir segredos encontrados; credenciais reais expostas exigem revogação/rotação.
- Conferir `public/` e artefatos de produção. Headers, CSP, HTTPS e base de assets dependem da hospedagem; explicar impactos e testar antes de implementar configuração aprovada.

## Acessibilidade, responsividade e animações

Preservar semântica, títulos, skip link, teclado, foco visível, textos alternativos, contraste e controles acessíveis. SVGs decorativos devem ser ocultos da árvore acessível e não focáveis. Evitar overflow e testar texto ampliado, mobile e desktop nos dois idiomas.

O movimento é aprimoramento opcional: conteúdo deve permanecer utilizável se o chunk falhar ou houver preferência por movimento reduzido. Manter sequências finitas, pausa/retomada por viewport/visibilidade, repouso sem replay indevido e fundos estáticos. Não adicionar loops ou novo motor sem aprovação.

Preservar cleanup em StrictMode/desmontagem e mudanças de idioma/perfil: timelines, triggers, listeners, observers, timers e estilos devem ser revertidos. Não atualizar estado React a cada frame. Alterações em cenas exigem verificar expansão de projetos, navegação por âncoras e `prefers-reduced-motion` inicial/dinâmico.

## Validação e documentação

Para alterações na aplicação ou configuração de build, executar `npm run lint`, `npm run typecheck` e `npm run build`, além de verificações proporcionais. Não declarar testes anteriores como reexecutados. Mudanças exclusivamente documentais exigem revisão de referências, ignore/índice e preservação de arquivos; não precisam gerar novo build.

Em alterações de interface, validar PT/EN, teclado, menu, projetos, contato, movimento normal/reduzido e larguras pertinentes (320, 375, 768, 1024 e desktop). Informar falhas e lacunas; testes automatizados/emulados não substituem aceite visual, leitor de tela ou dispositivo físico.

`README.md` e este `AGENTS.md` permanecem públicos. Não ignorar genericamente Markdown. `docs-private/` contém referências e histórico locais, não deve ser versionada nem copiada para `src/`, `public/` ou artefatos publicados. Preservar lockfile e configurações de build reproduzível.

Quando disponíveis, `docs-private/MAINTENANCE.md` reúne detalhes operacionais e `docs-private/RELEASE_PREPARATION.md` registra etapas e aprovações. Eles não são necessários para executar o site ou compreender estas regras. Clones remotos não incluem documentação privada; não presumir sua existência nem exigir leitura dos planejamentos históricos. Confirmar com o proprietário informações profissionais ambíguas.

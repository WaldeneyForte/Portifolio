# AGENTS.md — Instruções para o Codex

## 1. Objetivo e fonte de verdade

Este repositório será o portfólio pessoal de **Waldeney Filho**. A especificação de produto, conteúdo, identidade visual, tecnologias, acessibilidade e estrutura está em **`PORTFOLIO_BRIEF.md`**, na raiz do projeto.

**Leia `PORTFOLIO_BRIEF.md` integralmente antes de planejar, alterar arquivos, instalar dependências ou implementar funcionalidades.** Este `AGENTS.md` define o processo de trabalho; o briefing define *o que* o site deve conter. Em caso de ambiguidade ou conflito, informe o problema e peça uma decisão ao usuário, em vez de supor.

### Escopo atual

- Portfólio **one-page**, responsivo e bilíngue (PT-BR/EN).
- Tecnologias e componentes conforme `PORTFOLIO_BRIEF.md` (React, TypeScript, Vite, Tailwind CSS etc.).
- Identidade própria em preto, grafite e vermelho, com navegação por âncoras.
- Experiências, formação, projetos, competências, contatos e certificações **somente** conforme informações confirmadas no briefing.
- **Não implementar** nesta fase robô, chatbot, RAG, API, banco de dados ou backend.

## 2. Regra principal: pedir autorização antes de implementar

**Não inicie implementações por conta própria.** Isso inclui criar/alterar componentes, instalar dependências, executar comandos que modifiquem o projeto, alterar estilos, refatorar, integrar serviços, configurar deploy ou publicar conteúdo.

Fluxo obrigatório:

1. Leia `AGENTS.md` e `PORTFOLIO_BRIEF.md`.
2. Crie ou atualize o plano `IMPLEMENTAR.md` conforme a seção 3. Esse documento é um planejamento, **não** autorização para executar as tarefas nele listadas.
3. Apresente ao usuário a etapa proposta e suas tarefas, arquivos previstos, decisões técnicas relevantes e dúvidas/impactos.
4. **Pergunte explicitamente se pode executar a etapa ou o conjunto exato de tarefas.** Aguarde confirmação.
5. Após a autorização, implemente **somente** o que foi aprovado. Se surgir algo fora do escopo, interrompa aquela parte e peça nova autorização.
6. Execute verificações proporcionais à etapa aprovada, registre resultados e marque o andamento em `IMPLEMENTAR.md`.
7. Antes de passar à etapa seguinte, peça uma nova autorização. A aprovação de uma etapa **não** autoriza automaticamente as próximas.

**Exceção de inicialização documental:** é permitido criar/atualizar `IMPLEMENTAR.md` para produzir o plano solicitado. `README.md` e `.gitignore` devem ser **propostos no plano e criados após aprovação**, salvo quando o usuário pedir explicitamente sua criação no comando atual. Não use essa exceção para criar aplicação, instalar pacotes ou modificar arquivos de código.

Nunca execute `git push`, deploy, publicação em produção, exclusões destrutivas, substituição de conteúdo existente nem ações com custo financeiro sem autorização **específica**.

## 3. Planejamento obrigatório em `IMPLEMENTAR.md`

Antes de qualquer código, **crie um arquivo Markdown `IMPLEMENTAR.md` na raiz** com uma lista de atividades organizada em etapas de implementação do site descrito em `PORTFOLIO_BRIEF.md`.

Requisitos desse arquivo:

- Ser um **checklist** com `- [ ]` (pendente) e `- [x]` (concluído), organizado em etapas numeradas.
- Cada item deve ser suficientemente pequeno, objetivo e verificável.
- Relacionar tarefas a seções e requisitos do briefing, sem inventar escopo.
- Para cada etapa, registrar: **objetivo, tarefas, critérios de aceite, dependências e situação da aprovação** (não solicitada / aguardando / autorizada / concluída).
- Incluir as etapas abaixo, adaptando os detalhes ao briefing:
  1. Preparação do projeto, leitura do briefing e decisões pendentes.
  2. Documentação inicial (`README.md`) e configuração de `.gitignore`.
  3. Inicialização React + TypeScript + Vite, ferramentas e organização de pastas.
  4. Design system (paleta, tipografia, componentes compartilhados, responsividade e acessibilidade).
  5. Navegação one-page, header, menu mobile e Hero.
  6. Conteúdo e seções: Sobre, Projetos, Experiência, Formação, Skills, Certificações e Contato.
  7. Internacionalização PT-BR/EN e seletor de idioma visível.
  8. Revisão de conteúdo, privacidade, links, SEO básico, performance e acessibilidade.
  9. Testes, build de produção, documentação final e preparação para publicação (sem deploy não autorizado).
- Registrar decisões e bloqueios com clareza; não dar como concluída uma tarefa apenas por ter criado um arquivo vazio.
- Atualizar `IMPLEMENTAR.md` **após cada conjunto autorizado de alterações**, marcando o que foi feito e o que falta.
- Não marcar etapas futuras como autorizadas por padrão.

## 4. `README.md` obrigatório

Planeje a criação de **`README.md`**, em linguagem clara, cobrindo pelo menos:

- O que é o projeto, objetivo e escopo atual (sem chatbot/RAG).
- Stack utilizada **de fato**; não listar ferramentas ainda não instaladas como implementadas.
- Pré-requisitos; como instalar, executar localmente, testar e gerar o build.
- Estrutura real de pastas após a implementação.
- Como atualizar textos, traduções, projetos, experiências e certificações.
- Como configurar futuras variáveis de ambiente sem expor segredos.
- Observações de deploy **apenas quando estiver configurado/autorizado**.
- Origem e uso dos recursos visuais, quando pertinente.

**Atenção:** há um requisito específico para ignorar **todos** os `.md` no Git (seção 5). Por isso, o `README.md` será local e **não aparecerá na página do repositório do GitHub** enquanto essa regra estiver ativa. Não abra exceção automaticamente: pergunte ao usuário se ele quiser README público no futuro.

## 5. `.gitignore`: Markdown fora do repositório e arquivos essenciais

Após autorização, crie um **`.gitignore` na raiz**. O usuário solicitou que **nenhum arquivo Markdown (`.md`) seja versionado no GitHub**, inclusive `AGENTS.md`, `PORTFOLIO_BRIEF.md`, `IMPLEMENTAR.md` e `README.md`.

Inclua pelo menos estas regras (ajuste outras de acordo com a stack real):

```gitignore
# Documentação Markdown local: não enviar ao repositório
*.md

# Dependências e builds
node_modules/
dist/
build/
coverage/

# Variáveis de ambiente / segredos
.env
.env.*
!.env.example

# Logs e arquivos temporários
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
.DS_Store
Thumbs.db

# Cache e configuração local do editor
.vscode/
.idea/
*.tsbuildinfo
```

Observações obrigatórias:

- `.gitignore` impede o rastreamento de **arquivos ainda não versionados**. Se algum `.md` já estiver no Git, **não o remova do índice sem antes avisar e receber autorização**. Após autorização, use `git rm --cached` nos arquivos necessários; isso mantém os arquivos no disco.
- **Não incluir no `.gitignore` arquivos de código-fonte do site** (`.tsx`, `.ts`, `.css`, `.json` etc.) ou assets públicos legítimos.
- Não adicionar credenciais, tokens ou dados sensíveis ao projeto.
- Como `AGENTS.md` e `PORTFOLIO_BRIEF.md` ficarão ignorados, agentes executados **apenas sobre o repositório remoto** não terão acesso a essas instruções. Explique essa consequência e peça autorização antes de sugerir exceções, cópias públicas ou uma estratégia de sincronização diferente.
- Ignorar `.md` no Git **não** significa remover documentação do disco local nem empacotá-la na aplicação; mantenha esses arquivos na raiz e fora de `public/` e `src/`.

## 6. Qualidade e limites de implementação

- Priorize código legível, componentes reutilizáveis, estrutura de dados organizada e TypeScript com tipos adequados.
- Respeite design, conteúdo, rotas/âncoras, acessibilidade e responsividade do briefing; não substitua informações por lorem ipsum quando houver conteúdo aprovado.
- Não copiar texto, layout, código ou imagens dos portfólios de referência; usar apenas como inspiração.
- Não inventar projetos, experiências, tecnologias usadas, resultados mensuráveis, datas ou certificações. Informações pendentes devem ser explicitamente sinalizadas e encaminhadas ao usuário.
- Não publicar dados sensíveis ou internos de projetos de pesquisa. Não copiar automaticamente o currículo original para `public/`.
- Não introduzir bibliotecas desnecessárias, custos ou serviços de terceiros sem solicitar aprovação.
- Quando autorizado a implementar, executar `npm run build` e demais verificações aplicáveis; informar falhas e limitações sem ocultá-las.
- Não fazer commits automaticamente, nem alterar branches ou remotos sem autorização específica.

## 7. Formato das respostas do Codex

Ao iniciar uma sessão ou receber um novo pedido, responda com:

1. **Leitura/estado:** quais documentos consultou e qual etapa do `IMPLEMENTAR.md` está pendente.
2. **Proposta:** o que pretende fazer agora e arquivos que pretende criar/alterar.
3. **Dúvidas ou riscos:** apenas quando existirem.
4. **Pedido de autorização:** uma pergunta objetiva como **“Posso implementar a Etapa 1 conforme essas tarefas?”**.

Depois de uma etapa aprovada e executada, reporte mudanças, testes realizados, checklist atualizado e a próxima etapa **sem iniciá-la automaticamente**.

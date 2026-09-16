Última atualização: 15 de setembro de 2026 • PRs/issues bem-vindos

**Idiomas:** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md)

# Ferramentas de Codificação com IA: Onde Modelos de Nível Profissional São Realmente Grátis 

Muitas ferramentas de codificação com IA afirmam ser “grátis”, mas o acesso a modelos de nível profissional acaba rápido e você é rebaixado. Cada ferramenta usa limites diferentes (créditos, tokens, requisições), dificultando a comparação. Esta lista coloca lado a lado para mostrar o que você realmente recebe de graça.

## TL;DR — Níveis Grátis para Codificação com IA de Nível Profissional
_(as unidades de cota diferem; a ordem serve apenas de orientação e não classifica capacidades equivalentes)_

| Ferramenta | Modelos de nível profissional | Limite do nível grátis | Cartão de crédito |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen e outros provedores | O nível gratuito do Qwen OAuth foi descontinuado em 15 de abril de 2026; use Alibaba ModelStudio ou outro provedor | Não |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Modelo Rovo Dev depende do plano | 350 créditos/usuário/mês/site com Jira pago | Não |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | O acesso Enterprise/API pago continua; usuários individuais migram para o Antigravity CLI | O acesso individual grátis/Google AI terminou em 18 de junho de 2026; migre para o Antigravity CLI | Não |
| [Cursor](https://cursor.com/) | Composer; Agent limitado | Agent limitado; sem promoção temporária | Não |
| [Kilo Code](https://kilocode.ai/) | Não publicado | Valores atuais não verificados | Não verificado |
| [Warp](https://warp.dev/) | Warp Agent; BYOK | Free: agente cloud limitado; BYOK para pessoas e empresas de ≤10 pessoas não consome créditos Warp | Não verificado |
| [Trae](https://trae.ai/) | Não publicado | Valores atuais não verificados | Não verificado |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Modelos Claude mais recentes (AWS) | 50 solicitações agentic + 1.000 LOC Java/mês | Não |
| [GitHub Copilot](https://github.com/features/copilot/plans) | Haiku 4.5, GPT-5 mini e mais | 2.000 completions + 50 chats/mês; agente/CLI limitados | Não |
| [Windsurf](https://windsurf.com/) | Não publicado | Valores atuais não verificados | Não verificado |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 15 tarefas em janela móvel de 24 h; 3 simultâneas | Não |
| [AWS Kiro](https://kiro.dev/) | Claude Sonnet 4.5 e open-weight | 50 créditos/mês | Não |
| [Qoder](https://qoder.com/) | Não publicado | Valores atuais não verificados | Não verificado |

### Modelos de Nível Profissional Qualificados
Valores históricos selecionados com links para fontes primárias. As condições de teste diferem e isto não é um ranking atual e exaustivo.

| Modelo | SWE-bench Verified | Provedor |
|-------|-------------------|----------|
| [Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) | 80,9% | Anthropic |
| [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) | 77,2% | Anthropic |
| [Qwen3-Coder-480B](https://qwenlm.github.io/blog/qwen3-coder/) | 69,6% | Alibaba |

### Contribuição

Se encontrar erro, link faltando ou quota/modelo desatualizado, abra um issue ou PR com fonte. Novas contribuições são bem-vindas! Veja CONTRIBUTING.md para detalhes.

### Aviso

Sem afiliação com qualquer fornecedor. Marcas pertencem aos donos. Informação para pesquisa; exatidão não garantida; limites/preços mudam frequentemente.

## Conteúdo

- [1. Ferramentas de Codificação com IA com Acesso Grátis a Modelos Profissionais](#1-ferramentas-de-codificacao-com-ia-com-acesso-gratis-a-modelos-profissionais)
- [2. Provedores de API para Ferramentas de Codificação com IA](#2-provedores-de-api-para-ferramentas-de-codificacao-com-ia)
- [3. Ferramentas com Planos Pagos e Modelos Profissionais](#3-ferramentas-com-planos-pagos-e-modelos-profissionais)
- [4. Ferramentas com Acesso Grátis a Modelos Básicos](#4-ferramentas-com-acesso-gratis-a-modelos-basicos)
- [5. Modelos Locais](#5-modelos-locais)
- [Notas de Comparação](#notas-de-comparacao)
- [Recursos Relacionados](#recursos-relacionados)

## 1. Ferramentas de Codificação com IA com Acesso Grátis a Modelos Profissionais
_(as unidades de cota diferem; a ordem é apenas orientativa e não representa capacidade equivalente)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **O nível gratuito do Qwen OAuth foi descontinuado em 15 de abril de 2026; use Alibaba ModelStudio ou outro provedor**
- O nível gratuito do Qwen OAuth foi descontinuado em 15 de abril de 2026; use Alibaba ModelStudio ou outro provedor
- Suporta Qwen e outros provedores pelas configurações de autenticação
- Agente de código open source para terminal, IDE, desktop e web

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Authentication](https://github.com/QwenLM/qwen-code/blob/main/docs/users/configuration/auth.md)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- Grátis com planos Jira pagos: 350 créditos Rovo Dev/usuário/mês/site
- O uso para ao atingir a cota mensal
- A página de cobrança atual não informa um modelo fixo para o CLI
- Não é necessário cartão para o complemento gratuito

**** [Documentação](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Limites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini CLI migrou para o Antigravity CLI para usuários individuais**
- Em 18 de junho de 2026, o Gemini CLI deixou de atender indivíduos e Google AI Pro/Ultra
- O Antigravity CLI está disponível para todos e é o caminho de migração
- O acesso Standard/Enterprise não mudou; chaves de API Gemini pagas continuam disponíveis
- A antiga cota individual de 1.000/dia e 60/minuto é histórica e foi encerrada

**** [Transition announcement](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) | [Documentation](https://ai.google.dev/gemini-api/docs/rate-limits)

---

### [Kilo Code](https://kilocode.ai/)

> **Preços e limites atuais não verificados**
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- Valores exatos antigos não são apresentados como atuais
- Confira a página oficial vinculada antes de confiar em um limite

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentação](https://kilocode.ai/docs/) | [Preços](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Warp Agent e BYOK**
- Plano Free: acesso limitado a agentes na nuvem; a IA para no limite
- Build a partir de $20/mês com 1.500 créditos ($20 de uso de agente incluído)
- Para pessoas e empresas com até 10 pessoas, BYOK/inferência personalizada não consome créditos Warp
- O consumo varia com modelo, contexto e tarefa

**** [Preços](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Free**
- Nível gratuito permanente: 50 solicitações agentic/mês e 1.000 LOC Java/mês
- Limites de IDE estão disponíveis com Builder ID; IAM é por conta
- O caminho gratuito Builder ID não exige cartão; Pro exige faturamento AWS
- Pro custa $19/usuário/mês com limites maiores

**** [Preços](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 2.000 completions e 50 solicitações de chat por mês
- Inclui Copilot CLI e uso limitado de agentes; seleção de modelos é restrita no Free
- A página atual lista Haiku 4.5, GPT-5 mini e outros
- Não é necessário cartão

**** [Detalhes dos Planos](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Modo Agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Preços e limites atuais não verificados**
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- Valores exatos antigos não são apresentados como atuais
- Confira a página oficial vinculada antes de confiar em um limite

**** [Preços](https://trae.ai/pricing) | [Documentação](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Preços e limites atuais não verificados**
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- Valores exatos antigos não são apresentados como atuais
- Confira a página oficial vinculada antes de confiar em um limite

**** [Preços](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Acesso ao Gemini 2.5 Pro**
- Grátis: 15 tarefas em janela móvel de 24 horas e 3 simultâneas
- 3 tarefas simultâneas
- Modelo Gemini 2.5 Pro
- Conta Gmail necessária (18+)
- Limites reset em janela móvel de 24h
- Sem cartão de crédito
- Plano Pro ($19,99/mês): 100 tarefas/dia (5x)

**** [Limites de Uso](https://jules.google/docs/usage-limits/) | [Documentação](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **AWS Kiro Free**
- Nível gratuito permanente: 50 créditos/mês
- Claude Sonnet 4.5 e modelos open-weight com login social ou Builder ID, sujeitos a limites
- Pro $20/mês: 1.000 créditos; Pro+ $40: 2.000; Pro Max $100: 5.000; Power $200: 10.000
- Planos pagos exigem cartão

**** [Preços](https://kiro.dev/pricing/) | [Blog de Introdução](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Preços e limites atuais não verificados**
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- Valores exatos antigos não são apresentados como atuais
- Confira a página oficial vinculada antes de confiar em um limite

**** [Site](https://qoder.com/) | [Preços](https://qoder.com/pricing)

Limites mudam rápido. Se vir erro, quota/modelo novo ou quer adicionar ferramenta, abra um issue ou PR com fonte. Veja CONTRIBUTING.md para diretrizes.

---

## 2. Provedores de API para Ferramentas de Codificação com IA
_(do mais generoso ao menos)_

Serviços que fornecem API para modelos otimizados para código, integrando com Cursor, Continue.dev, Cline e outros. Não são ferramentas de código standalone; são o backend de IA para ferramentas existentes.

### [OpenRouter](https://openrouter.ai/)

> **Qwen3-Coder-480B via OpenRouter**
- 50 req/dia grátis (1.000/dia se comprar $10+ créditos)
- Modelos grátis extra: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- API compatível com OpenAI para IDEs principais
- Sem cartão para modelos grátis
- 20 req/min no nível grátis
- Funciona com Continue.dev, Cline, Cursor, etc.

**** [Modelos Grátis](https://openrouter.ai/models/?q=free) | [API Qwen3-Coder](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **Preços e limites atuais não verificados**
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- Valores exatos antigos não são apresentados como atuais
- Confira a página oficial vinculada antes de confiar em um limite

**** [Preços](https://www.cerebras.ai/pricing) | [Docs da API](https://inference-docs.cerebras.ai/) | [Guias de Integração](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Ferramentas com Planos Pagos e Modelos Profissionais


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- Grátis com planos Jira pagos: 350 créditos Rovo Dev/usuário/mês/site
- O uso para ao atingir a cota mensal
- A página de cobrança atual não informa um modelo fixo para o CLI
- Não é necessário cartão para o complemento gratuito
- Standard: $20/usuário/mês com 2.000 créditos/usuário/mês

**** [Documentação](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Limites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Preços do Jira](https://www.atlassian.com/software/jira/pricing)

---

### [Claude Code](https://www.anthropic.com/claude-code)

> **Pro ($20/mês ou $17/mês anual):** Sonnet 4 com mais uso que o grátis
- **Max 5x ($100/mês):** ~225 mensagens/5h — 140–280h Sonnet 4 + 15–35h Opus 4.5 semanal
- **Max 20x ($200/mês):** ~900 mensagens/5h — 240–480h Sonnet 4 + 24–40h Opus 4.5 semanal
- Modos de pensamento: "think" (~4K tokens), "megathink" (~10K), "ultrathink" (~32K)
- Ultrathink para refactors complexos, arquitetura e depuração profunda
- Opus 4.5 consome ~5x mais que Sonnet 4
- Limites resetam semanalmente com janelas móveis de 5h
- Funciona com Opus 4.5, Sonnet 4.5 e Haiku 4.5

**** [Preços](https://www.anthropic.com/pricing) | [Guia Claude Code](https://docs.anthropic.com/en/docs/claude-code)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Free**
- Nível gratuito permanente: 50 solicitações agentic/mês e 1.000 LOC Java/mês
- Limites de IDE estão disponíveis com Builder ID; IAM é por conta
- O caminho gratuito Builder ID não exige cartão; Pro exige faturamento AWS
- Pro custa $19/usuário/mês com limites maiores

**** [Preços](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Warp Agent e BYOK**
- Plano Free: acesso limitado a agentes na nuvem; a IA para no limite
- Build a partir de $20/mês com 1.500 créditos ($20 de uso de agente incluído)
- Para pessoas e empresas com até 10 pessoas, BYOK/inferência personalizada não consome créditos Warp
- O consumo varia com modelo, contexto e tarefa

**** [Preços](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 2.000 completions e 50 solicitações de chat por mês
- Inclui Copilot CLI e uso limitado de agentes; seleção de modelos é restrita no Free
- A página atual lista Haiku 4.5, GPT-5 mini e outros
- Não é necessário cartão

**** [Detalhes dos Planos](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Preview GPT-5.1-Codex-Max](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Preços e limites atuais não verificados**
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- Valores exatos antigos não são apresentados como atuais
- Confira a página oficial vinculada antes de confiar em um limite

**** [Preços](https://trae.ai/pricing) | [Documentação](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Preços e limites atuais não verificados**
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- Valores exatos antigos não são apresentados como atuais
- Confira a página oficial vinculada antes de confiar em um limite

**** [Preços](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Lovable agora usa créditos**
- Free inclui 5 créditos de build diários (até 30/mês), 20 créditos Cloud mensais e 4 créditos de IA mensais
- Créditos e concessões têm expirações diferentes; confira a página oficial

**** [Pricing](https://lovable.dev/pricing)

---

### [Bolt.new](https://bolt.new/)

> **Free inclui limite de 300 mil tokens/dia e 1 milhão/mês**
- Pro começa em $25/mês com 10 milhões de tokens/mês; Teams em $30/membro/mês
- Tokens pagos acumulam por mais um mês enquanto a assinatura estiver ativa

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Cursor Free e planos pagos**
- Hobby é grátis, sem cartão, com Agent limitado e acesso ao Composer
- Pro $20/mês; Pro+ $60; Ultra $200; Teams Standard $40/usuário/mês
- A promoção do GPT-5.1-Codex-Max até 11 de dezembro de 2025 terminou e foi removida
- Uso e modelos dependem do plano

**** [Preços](https://cursor.com/en/pricing) | [Anúncio GPT-5.1-Codex-Max](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Planos Codex e cobrança da API**
- Codex está incluído em Free ($0), Go ($8/mês), Plus ($20/mês), Pro (a partir de $100/mês), Business ($20/usuário anual ou $25 mensal), Edu e Enterprise
- Chaves de API são cobradas por modelo; uso local e cloud compartilha as franquias do plano
- Limites variam com a complexidade; confira a página oficial

**** [Pricing](https://developers.openai.com/codex/pricing/) | [GitHub](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

> **Preços e limites atuais não verificados**
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- Valores exatos antigos não são apresentados como atuais
- Confira a página oficial vinculada antes de confiar em um limite

**** [Preços](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Planos pagos atuais do Tabnine**
- Code Assistant: $39/usuário/mês no anual; Agentic Platform: $59/usuário/mês no anual
- A página atual não anuncia nível gratuito
- LLM próprio on-prem/cloud é ilimitado pelo Tabnine; LLM do Tabnine cobra provedor +5% de taxa

**** [Pricing](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **AI Pro ($15/mês):** Quota maior na nuvem + modelos locais ilimitados
- **AI Ultimate ($25/mês):** Quota máxima + recursos avançados
- Nível grátis: auto-complete ilimitado + modelos locais + quota cloud limitada
- Teste Pro de 30 dias incluído
- All Products Pack inclui AI Pro
- Modo offline com modelos locais via Ollama/LM Studio

**** [Preços de IA](https://www.jetbrains.com/ai-ides/buy/)

---

### [Jules](https://jules.google/)

> **Pro ($19,99/mês via Google AI Pro):** 100 tarefas/dia
- Jules Pro pelo Google AI Pro: 100 tarefas por 24 horas móveis e 15 simultâneas
- 5x tarefas simultâneas (3 → 15)
- Maior acesso aos modelos mais recentes
- **Ultra (via Google AI Ultra):** 300 tarefas/dia
- 20x limites maiores que o grátis
- 60 tarefas simultâneas
- Acesso prioritário aos modelos novos
- Conta Gmail necessária (18+)

**** [Limites de Uso](https://jules.google/docs/usage-limits/) | [Planos Google AI](https://one.google.com/about/google-ai-plans/)

---

### [SuperMaven](https://supermaven.com/)

> **Pro ($10/mês):** Contexto de 1M tokens + créditos de chat
- Alternativa: $99/ano
- Interface de chat com GPT-4o, Claude 3.5 Sonnet, GPT-4
- **Team ($10/usuário/mês):** Pro + gestão de equipe
- Obs: Fundiu com Cursor IDE em nov 2024

**** [Preços](https://supermaven.com/pricing)

Conhece preços ou limites melhores? Compartilhe um link em um issue ou PR para manter atualizado. Veja CONTRIBUTING.md para diretrizes.

---

## 4. Ferramentas com Acesso Grátis a Modelos Básicos
__(modelos não especificados/básicos)__

### [Bolt.new](https://bolt.new/)

> **Free inclui limite de 300 mil tokens/dia e 1 milhão/mês**
- Pro começa em $25/mês com 10 milhões de tokens/mês; Teams em $30/membro/mês
- Tokens pagos acumulam por mais um mês enquanto a assinatura estiver ativa

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Lovable agora usa créditos**
- Free inclui 5 créditos de build diários (até 30/mês), 20 créditos Cloud mensais e 4 créditos de IA mensais
- Créditos e concessões têm expirações diferentes; confira a página oficial

**** [Pricing](https://lovable.dev/pricing)

---

### [v0.dev](https://v0.dev/)

> **Free inclui $5 em créditos mensais e 7 mensagens/dia**
- Plus custa $30/usuário/mês com $30 em créditos; Business $100/usuário/mês
- O uso é medido por tokens de entrada/saída convertidos em créditos

**** [Pricing](https://api2.v0.dev/pricing)

---

### [Codeium](https://codeium.com/)

> **Preços e limites atuais não verificados**
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- Valores exatos antigos não são apresentados como atuais
- Confira a página oficial vinculada antes de confiar em um limite

**** [Preços](https://codeium.com/pricing) | [Documentação](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Planos pagos atuais do Tabnine**
- Code Assistant: $39/usuário/mês no anual; Agentic Platform: $59/usuário/mês no anual
- A página atual não anuncia nível gratuito
- LLM próprio on-prem/cloud é ilimitado pelo Tabnine; LLM do Tabnine cobra provedor +5% de taxa

**** [Pricing](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **Plano AI grátis incluído nas IDEs**
- Auto-complete ilimitado e suporte a modelos locais
- Quota limitada para recursos na nuvem
- Teste AI Pro de 30 dias
- Chat, geração de código, commits com modelos locais

**** [Recursos de IA](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

> **Plano grátis com recursos básicos**
- Sugestões básicas de código
- Retenção de dados de 7 dias
- Cartão de crédito exigido para cadastro
- Janela de contexto de 1M tokens (impressionante para o grátis)

**** [Preços](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

> **Extensão open-source grátis com suporte flexível a modelos**
- Extensão grátis para VS Code e JetBrains
- Suporte completo a modelos locais via Ollama, LM Studio
- Plano Solo: opções privado/time/público
- Suporta 200+ modelos (requer suas API keys para cloud)
- Hub da comunidade para assistentes IA custom
- Sem lock-in ou limites para modelos locais

**** [GitHub](https://github.com/continuedev/continue) | [Model Hub](https://hub.continue.dev/explore/models)

Conhece limites ou modelos oficiais? Compartilhe um link em issue/PR para atualizar. Veja CONTRIBUTING.md.

---

## 5. Modelos Locais


Rodar modelos frontier open-weight localmente dá assistência ilimitada sem custos de API ou limites. Ferramentas populares: **[Cline](https://cline.bot/)** (extensão VS Code com modos Plan/Act e MCP), **[Aider](https://aider.chat/)** (assistente CLI com Git), **[Continue.dev](https://www.continue.dev/)** (extensão VS Code open-source suportando 200+ modelos). Todas funcionam com **[Ollama](https://ollama.com/)** para Devstral (24B, otimizado para código agent), Qwen3-Coder, DeepSeek Coder V2, Codestral, GLM-4.5.

**Nota**: Modelos frontier exigem muita RAM/VRAM. Para Qwen3‑Coder‑480B o GGUF do Ollama é ~150GB, e inferência prática pode requerer ~150GB de memória unificada (RAM+VRAM), difícil em laptops; o quant 30B precisa de ~18GB. Veja o guia Unsloth Qwen3‑Coder ([docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) e o artigo do Simon Willison sobre [rodar GLM‑4.5 AIR no laptop para Space Invaders](https://simonwillison.net/2025/Jul/29/space-invaders/) como exemplo.

---

## Notas de Comparação

- **Objetivo**: Comparar ferramentas pelo acesso a modelos pro e limites grátis.
- **Tipos de limite**: Requisições, tokens, créditos, chats — comparação direta é difícil. Veja a documentação.
- **Uso real**: Varia muito conforme estilo de código, complexidade e implementação.
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- A página oficial acessível não publica uma tabela estável de cotas ou preços
- **Comparabilidade:** os resultados do SWE-bench usam condições diferentes; execuções paralelas, interativas e únicas não são diretamente comparáveis. Créditos, tokens, solicitações, chats e tarefas não devem virar um ranking de generosidade.

---

## Recursos Relacionados

- [Coding with AI](https://coding-with-ai.dev/) - Técnicas e recursos práticos para codar com LLMs
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Lista de APIs LLM grátis para integrações

---

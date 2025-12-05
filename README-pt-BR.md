Última atualização: 5 de dezembro de 2025 • PRs/issues bem-vindos

**Idiomas:** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md) • [Türkçe](README-tr.md)

# Ferramentas de Codificação com IA: Onde Modelos de Nível Profissional São Realmente Grátis 

Muitas ferramentas de codificação com IA afirmam ser “grátis”, mas o acesso a modelos de nível profissional acaba rápido e você é rebaixado. Cada ferramenta usa limites diferentes (créditos, tokens, requisições), dificultando a comparação. Esta lista coloca lado a lado para mostrar o que você realmente recebe de graça.

## TL;DR — Níveis Grátis para Codificação com IA de Nível Profissional
(ferramentas com limites mais altos listadas primeiro)

| Ferramenta | Modelos de nível profissional | Limite do nível grátis | Cartão de crédito |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen3-Coder-480B | 2.000 requisições/dia | Não |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Claude Sonnet 4 | 5M tokens/dia (beta) | Não |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Gemini 3 Pro, Gemini 2.5 Pro | Gemini 3 Pro (lista de espera/pago), 100 req/dia Gemini 2.5 Pro | Não |
| [Cursor](https://cursor.com/) | GPT-5.1-Codex-Max | Grátis até 11 dez 2025 (77,9% SWE-bench) | Não |
| [Kilo Code](https://kilocode.ai/) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | Até $25 em créditos de cadastro (único) | Sim |
| [Warp](https://warp.dev/) | GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro | 150 créditos/mês (primeiros 2 meses), depois 75/mês | Não |
| [Trae](https://trae.ai/) | Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro | 10 rápidas + 50 lentas por mês | Não |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Claude Sonnet 4 | 50 requisições agent/mês | Sim |
| [GitHub Copilot](https://github.com/features/copilot/plans) | GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1 | 50 chats + 2.000 completions/mês | Não |
| [Windsurf](https://windsurf.com/) | OpenAI, Anthropic, Google, xAI | 25 créditos/mês | Sim |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 15 tarefas/dia | Não |
| [AWS Kiro](https://kiro.dev/) | Claude 4 Sonnet, Claude 3.7 Sonnet | 50 créditos/mês | Não |
| [Qoder](https://qoder.com/) | Qwen3-Coder-480B, Claude, GPT, Gemini | Grátis + teste Pro de 2 semanas (1.000 créditos) | Não |

### Modelos de Nível Profissional Qualificados
Só modelos com >60% no SWE-bench Verified contam como nível profissional para tarefas reais. Lista atual:

| Modelo | SWE-bench Verified | Provedor |
|-------|-------------------|----------|
| Claude Opus 4.5 | 80,9% | Anthropic |
| GPT-5.1-Codex-Max | 77,9% | OpenAI |
| Claude Sonnet 4.5 | 77,2% (82,0% com paralelo) | Anthropic |
| Gemini 3 Pro | 76,2% | Google |
| GPT-5 | 74,9% | OpenAI |
| Claude Opus 4.1 | 74,5% | Anthropic |
| Claude Sonnet 4 | 72,7% (80,2% com paralelo) | Anthropic |
| GPT-5 mini | 71,0% | OpenAI |
| Qwen3-Coder-480B | 69,6% (interativo) / 67,0% (single) | Alibaba |
| Gemini 2.5 Pro | 63,2% | Google |

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
_(do mais generoso ao menos)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Acesso ao Qwen3-Coder-480B**
- 2.000 requisições/dia no nível grátis via Qwen OAuth
- Limite de 60 req/min
- Ferramenta CLI de fluxo de trabalho (adaptada do Gemini CLI)
- Login no navegador em um clique
- Sem cartão de crédito

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Documentação](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Acesso ao Claude Sonnet 4 durante a beta**
- 5M tokens/dia grátis (20M só no primeiro dia)
- Modelo Claude Sonnet 4 (confirmado em teste)
- Sem cartão na beta
- Reseta à meia-noite UTC
- Atualize para Jira Standard/Premium/Enterprise para 20M tokens/dia

**** [Documentação](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Limites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Acesso ao Gemini 3 Pro e Gemini 2.5 Pro**
- Gemini 3 Pro disponível (4 dez 2025) para Google AI Ultra e usuários API pagos
- Gemini 3 Pro: 76,2% SWE-bench Verified — melhor modelo de código do Google
- Limite de 100 req/dia para Gemini 2.5 Pro (fallback grátis)
- Limite de 250 req/dia para Gemini 2.5 Flash
- Sem cartão no nível grátis
- Lista de espera para Gemini 3 Pro (Google AI Pro, Gemini Code Assist standard, grátis)
- Ative em `/settings` → Preview features → true

**** [Rate Limits](https://ai.google.dev/gemini-api/docs/rate-limits) | [Preços](https://ai.google.dev/gemini-api/docs/pricing) | [Anúncio Gemini 3 Pro](https://developers.googleblog.com/en/5-things-to-try-with-gemini-3-pro-in-gemini-cli/)

---

### [Kilo Code](https://kilocode.ai/)

> **Acesso a Claude Opus/Sonnet, Gemini 2.5 Pro, GPT-4.1**
- Até $25 de créditos de cadastro (bônus único)
- Extensão VS Code open-source
- Pay-as-you-go sem markup
- Cartão necessário para resgatar bônus completo
- Suporta suas próprias API keys

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentação](https://kilocode.ai/docs/) | [Preços](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Acesso a GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro**
- 150 créditos de IA/mês (primeiros 2 meses), depois 75/mês
- Vários provedores (OpenAI GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro)
- Sem cartão para registro básico
- Nova tarifa anunciada em 30 out 2025: plano Build ($20/mês) com 1.500 créditos

**** [Preços](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Acesso a Claude Sonnet 4**
- 50 requisições agent/mês (multi-turn)
- Últimos modelos Claude (AWS)
- Requer cartão de crédito
- Precisa fazer upgrade para Pro para continuar
- Nível grátis perpétuo

**** [Preços](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Modo Agente com GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1**
- 50 chats + 2.000 completions/mês
- Modo agente com passos autônomos
- Vários provedores (GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)
- Sem cartão de crédito
- Recursos básicos após a cota

**** [Detalhes dos Planos](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Modo Agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Acesso a Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro**
- 10 requisições rápidas + 50 lentas/mês para modelos premium
- 1.000 lentas/mês para modelos avançados
- 5.000 autocompletes/mês
- IDE baseada em VS Code com IA
- Vários modelos premium incluindo Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1
- Sem cartão de crédito no nível grátis
- Plano Pro: $10/mês (600 rápidas + lentas ilimitadas)

**** [Preços](https://trae.ai/pricing) | [Documentação](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Acesso a modelos OpenAI, Anthropic, Google, xAI**
- 25 créditos de prompt/mês
- Vários provedores (OpenAI, Claude, Gemini, xAI)
- Cartão de crédito necessário
- Créditos extras podem ser comprados

**** [Preços](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Acesso ao Gemini 2.5 Pro**
- 15 tarefas/dia no nível grátis
- 3 tarefas simultâneas
- Modelo Gemini 2.5 Pro
- Conta Gmail necessária (18+)
- Limites reset em janela móvel de 24h
- Sem cartão de crédito
- Plano Pro ($19,99/mês): 100 tarefas/dia (5x)

**** [Limites de Uso](https://jules.google/docs/usage-limits/) | [Documentação](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **Acesso a Claude 4 Sonnet, Claude 3.7 Sonnet**
- 50 créditos/mês (Grátis)
- Modelos Claude 4 Sonnet e Claude 3.7 Sonnet (AWS)
- Sem cartão de crédito
- Bônus de boas-vindas de 14 dias: 500 créditos
- Planos pagos: Pro ($20/mês - 1.000 créditos), Pro+ ($40/mês - 2.000 créditos), Power ($200/mês - 10.000 créditos)

**** [Preços](https://kiro.dev/pricing/) | [Blog de Introdução](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Modelos Qwen3-Coder-480B, Claude, GPT, Gemini**
- Nível grátis: completions/edits ilimitados + chat/agent limitados + teste Pro de 2 semanas (1.000 créditos)
- IDE com IA da Alibaba
- Disponível para Windows e macOS
- Principalmente usa Qwen3-Coder-480B (modelo carro-chefe da Alibaba)
- Também suporta Claude, GPT-4, Gemini
- Modo Agent e Quest para codificação autônoma
- Sem cartão de crédito (grátis)
- Planos pagos: Pro ($20/mês - 2.000 créditos), Pro+ ($60/mês - 6.000 créditos)

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

> **Acesso a Qwen3-235B e Llama 3.1**
- Nível grátis: 1M tokens/dia
- Sem cartão de crédito
- Limite 30 req/min, contexto 8.192 tokens
- Modelos: Qwen3-235B, Llama 3.1 70B (Nota: Qwen3-Coder-480B descontinuado em 5 nov 2025)
- API compatível com OpenAI (funciona com Cursor, Continue.dev, Cline, RooCode, etc.)
- Inferência muito rápida: 2.000 tokens/seg (40x mais rápido que típico)
- **Planos pagos:** Developer ($10+ self-serve), Enterprise (custom)

**** [Preços](https://www.cerebras.ai/pricing) | [Docs da API](https://inference-docs.cerebras.ai/) | [Guias de Integração](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Ferramentas com Planos Pagos e Modelos Profissionais


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Jira Standard ($7,53/usuário/mês):** 20M tokens/dia
- **Jira Premium ($15,25/usuário/mês):** 20M tokens/dia
- **Jira Enterprise (custom):** 20M tokens/dia
- 4x aumento vs grátis (5M → 20M tokens/dia)
- Mesmo modelo baseado em Claude do nível grátis
- Reset à meia-noite UTC

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

> **Pro ($19/mês):** Limites maiores para requisições agent
- Uso pode ser ajustado conforme região e padrão

**** [Preços](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Build ($20/mês):** 1.500 créditos de IA/mês
- Créditos recarregáveis (até 50% mais baratos, acumulam 12 meses)
- Opção BYOK (sua API)
- Nova tarifa para novos clientes (30 out 2025)
- Assinantes atuais migram após 1 dez 2025
- Plano Enterprise: preços custom

**** [Preços](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Pro ($10/mês):** 300 requisições premium + completions ilimitadas/mês
- **Pro+ ($39/mês):** 1.500 requisições premium + completions ilimitadas/mês
- **Business ($19/usuário/mês):** 300 requisições premium + completions ilimitadas/usuário/mês
- **Enterprise ($39/usuário/mês):** 1.000 requisições premium + completions ilimitadas/usuário/mês
- **GPT-5.1-Codex-Max** em preview público (4 dez 2025) para Pro, Pro+, Business, Enterprise
- Acesso a GPT-5.1-Codex-Max, GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1
- Overage a $0,04/requisição

**** [Detalhes dos Planos](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Preview GPT-5.1-Codex-Max](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Pro ($10/mês):** 600 requisições rápidas + lentas ilimitadas (modelos premium)
- Lentas ilimitadas para modelos avançados
- Sem rate limit e acesso mais rápido a premium
- Pacotes extra: $3-$12 para mais requisições rápidas
- Modelos premium: Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, Gemini 2.5 Pro, GPT‑4.1, GPT‑4o
- IDE baseada em VS Code com IA completa
- Primeiro mês por $3

**** [Preços](https://trae.ai/pricing) | [Documentação](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Pro ($15/mês):** 500 créditos de prompt/mês
- **Teams ($30/usuário/mês):** 500 créditos de prompt/usuário/mês
- **Enterprise ($60+/usuário/mês):** 1.000 créditos de prompt/usuário/mês

**** [Preços](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Pro ($25/mês):** 150 créditos/mês (5 diários)
- **Teams ($30/mês):** Limites maiores (não divulgados)

**** [Limites de Mensagens](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

> **$20/mês:** 10M tokens/mês
- **$200/mês:** 120M tokens/mês

**** [Docs de Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Hobby (Grátis):** Agente limitado + Tabs limitadas + teste Pro de 1 semana
- **Pro ($20/mês ou $16/mês anual):** Limites de agente maiores + Tabs ilimitadas + Agentes em background + máximo contexto
- **Pro+ ($60/mês):** 3x uso em todos os modelos OpenAI, Claude, Gemini
- **Ultra ($200/mês):** 20x uso em todos os modelos OpenAI, Claude, Gemini + prioridade em novos recursos
- **Teams ($40/usuário/mês):** Pro + billing centralizado + analytics + SAML/OIDC SSO
- **Enterprise (Custom):** Tudo do Teams + uso compartilhado + SCIM + API de rastreamento + audit logs
- **GPT-5.1-Codex-Max grátis para todos até 11 dez 2025** (77,9% SWE-bench)
- Teste Pro de 1 semana disponível (grátis)
- Nível grátis agora controla uso por tokens
- Modelos grátis: Cursor Small, Deepseek v3, Gemini 2.5 Flash, GPT-4o mini (500/dia), Grok 3 Mini Beta
- Planos pagos: acesso a OpenAI, Claude, Gemini incluindo GPT-5.1-Codex-Max
- Nota: Modelos Claude removidos do nível grátis ~jun 2025
- Editor de código IA com capacidades autônomas

**** [Preços](https://cursor.com/en/pricing) | [Anúncio GPT-5.1-Codex-Max](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Grátis com ChatGPT Plus ($20/mês):** 30–150 mensagens/5h para código
- **ChatGPT Pro ($200/mês):** 300–1.500 mensagens/5h — limites mais altos
- **API pay-as-you-go:** GPT-5.1-Codex-Max a $1,25/$10 por milhão de tokens (entrada/saída)
- **Modo OSS grátis:** Apenas modelos open-source (--oss)
- **GPT-5.1-Codex-Max** (19 nov 2025): 77,9% SWE-bench — modelo padrão
- Primeiro com "compaction" para sessões multimilhões de tokens (tarefas 24h+)
- 30% menos thinking tokens que o GPT-5.1-Codex anterior
- Também no GitHub Copilot (Pro, Pro+, Business, Enterprise)
- Suporte a Windows incluso
- Multiplataforma: macOS 12+, Ubuntu 20.04+, Windows 11 via WSL2

**** [GitHub Repo](https://github.com/openai/codex) | [Anúncio GPT-5.1-Codex-Max](https://openai.com/index/gpt-5-1-codex-max/)

---

### [Codeium](https://codeium.com/)

> **Pro ($10/mês):** Uso ilimitado com consciência de contexto avançada
- Acesso a Claude 3.5 Sonnet, GPT-4o
- Janela de contexto ampliada e personalização
- **Teams ($12/usuário/mês):** Pro + gestão de equipe
- **Enterprise (Custom):** On-prem, modelos custom

**** [Preços](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Pro ($12/mês):** Completions e chat de IA melhorados
- **Enterprise ($39/usuário/mês):** Vários LLMs, implantação privada
- Modelos: Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, proprietários
- 600+ linguagens suportadas
- Opções on-prem e air-gapped
- Traga seus fine-tunes

**** [Preços](https://www.tabnine.com/pricing/)

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
- Limites 5x maiores que o grátis (15 → 100 tarefas/dia)
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

> **Modelos não especificados**
- Limite de 1M tokens/mês
- Modelo específico não divulgado
- Cartão de crédito exigido

**** [Docs de Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Modelos não especificados**
- 5 créditos diários, máximo 30/mês (grátis)
- Modelos não listados publicamente
- Cartão de crédito exigido

**** [Limites de Mensagens](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

> **Modelos proprietários (não frontier)**
- Acesso ao GPT-5 requer v0 Premium
- $5 em créditos/mês
- Modelos proprietários com roteamento variável
- Cartão de crédito exigido

**** [Blog de Preços Atualizado](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

> **Uso grátis ilimitado de assistência básica de IA**
- Plano individual: grátis para sempre com completions, chat IA, comandos ilimitados
- Suporte a 70+ linguagens
- Integrações IDE: VS Code, JetBrains, Vim/Neovim, Jupyter
- Sem cartão de crédito
- Consciência de contexto limitada (expandida em planos pagos)
- Só modelo base (Llama 3.1 70B), modelos pro exigem assinatura

**** [Preços](https://codeium.com/pricing) | [Documentação](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Plano grátis com recursos limitados**
- Completions e chat básicos (limitados)
- Processamento local disponível
- Contexto bem limitado no grátis
- Performance reduzida para economizar recursos
- 600+ linguagens suportadas

**** [Preços](https://www.tabnine.com/pricing/)

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
- **O que é "pro"?** Modelos com ≥60% no SWE-bench Verified. Modelos atuais: Claude Opus 4.5 (80,9%), GPT-5.1-Codex-Max (77,9%), Claude Sonnet 4.5 (77,2%), Gemini 3 Pro (76,2%), GPT-5 (74,9%), Claude Opus 4.1 (74,5%), Claude Sonnet 4 (72,7%), GPT-5 mini (71,0%), Qwen3-Coder-480B (69,6%), Gemini 2.5 Pro (63,2%).
- **Tipos de limite**: Requisições, tokens, créditos, chats — comparação direta é difícil. Veja a documentação.
- **Uso real**: Varia muito conforme estilo de código, complexidade e implementação.

---

## Recursos Relacionados

- [Coding with AI](https://coding-with-ai.dev/) - Técnicas e recursos práticos para codar com LLMs
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Lista de APIs LLM grátis para integrações

---

> 🤖 **Aviso de Tradução Automática**
> Esta página foi traduzida automaticamente do inglês usando Claude AI.
> Para maior precisão, consulte a [versão original em inglês](README.md).

Última atualização: 26 de agosto, 2025 • PRs/issues bem-vindos • ⭐ Favorite para voltar mais tarde

# Ferramentas de Codificação com IA: Onde Modelos de Grau Profissional São Realmente Gratuitos

Muitas ferramentas de codificação com IA afirmam ser "gratuitas", mas o acesso a modelos de grau profissional geralmente esgota rapidamente, então você é rebaixado. Cada ferramenta usa diferentes limites (créditos, tokens, requisições), tornando a comparação difícil. Esta lista os coloca lado a lado para mostrar o que você realmente obtém de graça.

## TL;DR — Camadas Gratuitas para Codificação de IA de Grau Profissional
_(ferramentas com limites mais altos listadas primeiro)_

| Ferramenta | Modelos de grau profissional | Limite da camada gratuita | Cartão de crédito |
|------------|------------------------------|---------------------------|-------------------|
| [Qwen Code](#qwen-code) | Qwen3-Coder-480B | 2,000 requisições/dia | Não |
| [Rovo Dev CLI](#rovo-dev-cli) | Claude Sonnet 4 | 5M tokens/dia (beta) | Não |
| [Gemini CLI](#gemini-cli) | Gemini 2.5 Pro | 100 requisições/dia | Não |
| [Kilo Code](#kilo-code) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | $25 créditos de cadastro (única vez) | Sim |
| [Warp](#warp) | Claude, OpenAI, Gemini | 150 requisições/mês | Não |
| [Trae](#trae) | Claude 4 Sonnet, Claude 3.5 Sonnet, GPT‑4o, Gemini 2.5 Pro | 60 requisições/mês | Não |
| [Amazon Q Developer](#amazon-q-developer) | Claude Sonnet 4 | 50 chats de agente/mês | Sim |
| [GitHub Copilot](#github-copilot) | GPT‑4o, Claude 3.5 Sonnet, Gemini 2.0 Flash | 50 chats + 2,000 conclusões/mês | Não |
| [Windsurf](#windsurf) | OpenAI, Anthropic, Google, xAI | 25 créditos/mês | Sim |
| [Jules](#jules) | Gemini 2.5 Pro | 15 tarefas/dia | Não |
| [AWS Kiro](#aws-kiro) | Claude Sonnet 4 / 3.7 | 50 solicitações vibe/mês | Não |
| [Qoder](#qoder) | Qwen3-Coder-480B, Claude, GPT, Gemini | Créditos limitados (preview) | Não (preview) |

## Ajude a Tornar Isso Mais Preciso

**O uso real varia amplamente de acordo com o estilo de codificação, complexidade da tarefa e implementação da ferramenta**. Ajude a melhorar este recurso [compartilhando sua experiência real →](https://free-ai-usage.vercel.app/)

### Modelos de Grau Profissional Qualificados
Apenas modelos que alcançam >60% no SWE-bench Verified se qualificam como grau profissional para tarefas de codificação do mundo real. Abaixo está a lista atual

| Modelo | SWE-bench Verified | Provedor |
|--------|-------------------|----------|
| GPT-5 | 74.9% | OpenAI |
| Claude Opus 4.1 | 74.5% | Anthropic |
| Claude Sonnet 4 | 72.7% (80.2% c/ paralelo) | Anthropic |
| GPT-5 mini | 71.0% | OpenAI |
| Qwen3-Coder-480B | 69.6% (interativo) / 67.0% (único) | Alibaba |
| Gemini 2.5 Pro | 63.2% | Google |


## Conteúdos

- [1. Ferramentas de Codificação com IA com Acesso Gratuito a Modelos de Grau Profissional](#1-ferramentas-de-codificação-com-ia-com-acesso-gratuito-a-modelos-de-grau-profissional)
- [2. Provedores de API para Ferramentas de Codificação com IA](#2-provedores-de-api-para-ferramentas-de-codificação-com-ia)
- [3. Ferramentas com Camadas Pagas com Modelos de Grau Profissional](#3-ferramentas-com-camadas-pagas-com-modelos-de-grau-profissional)
- [4. Ferramentas com Acesso Gratuito a Modelos Básicos](#4-ferramentas-com-acesso-gratuito-a-modelos-básicos)
- [5. Modelos Locais](#5-modelos-locais)


## 1. Ferramentas de Codificação com IA com Acesso Gratuito a Modelos de Grau Profissional
_(ordenadas da mais generosa para a menos generosa)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **~33h/dia (~1000h/mês) de codificação com Qwen3-Coder-480B**
- Camada gratuita de 2,000 requisições/dia via Qwen OAuth
- Limite de taxa de 60 requisições/minuto
- Ferramenta de fluxo de trabalho de IA de linha de comando (adaptada do Gemini CLI)
- Autenticação do navegador com um clique
- Cartão de crédito não necessário

**Links:** [GitHub](https://github.com/QwenLM/qwen-code) | [Documentação](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Acesso Claude Sonnet 4 durante beta**
- Camada gratuita de 5M tokens/dia (20M apenas no primeiro dia)
- Modelo Claude Sonnet 4 (confirmado via testes)
- Cartão de crédito não necessário durante beta
- Limites de tokens resetam à meia-noite UTC
- Nota: Atualize para Jira Standard/Premium/Enterprise para 20M tokens/dia

**Links:** [Documentação](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Limites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **~1.7h/dia (~50h/mês) de codificação com Gemini 2.5 Pro**
- Limite de 100 requisições/dia
- Fallback: ~4.2h/dia com Gemini 2.5 Flash (250 requisições/dia)
- Cartão de crédito não necessário
- Apenas modelos do Google
- Muda para taxas pagas após cota gratuita

**Links:** [Limites de Taxa](https://ai.google.dev/gemini-api/docs/rate-limits) | [Preços](https://ai.google.dev/gemini-api/docs/pricing)

---

### [Kilo Code](https://kilocode.ai/)

> **~3h total de codificação com Claude 4 Sonnet/Opus, Gemini 2.5 Pro, GPT-4.1**
- $20 créditos gratuitos no cadastro
- Extensão VS Code de código aberto
- Pague conforme usar sem margem no preço dos modelos
- Cartão de crédito necessário para reivindicar créditos de bônus
- Suporta trazer suas próprias chaves API

**Links:** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentação](https://kilocode.ai/docs/)

---

### [Warp](https://warp.dev/)

> **~2.5h/mês através de Claude Sonnet 4, OpenAI GPT-5, Gemini 2.5 Pro**
- Limite de 150 requisições/mês
- Múltiplos provedores (Claude, OpenAI, Gemini)
- Cartão de crédito não necessário para cadastro básico
- Excessos pague conforme usar disponíveis

**Links:** [Preços](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **~0.8h/mês de codificação com Claude Sonnet 4**
- Limite de 50 chats agênticos/mês (conversas multi-turno)
- Modelos Claude mais recentes (hospedados na AWS)
- Cartão de crédito necessário
- Deve atualizar para Pro para acesso contínuo
- Camada gratuita perpétua

**Links:** [Preços](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **~0.8h/mês de interações de agente (GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Flash)**
- Limite de 50 chats + 2,000 conclusões/mês
- Modo Agente com codificação autônoma multi-etapas
- Múltiplos provedores (GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Flash)
- Cartão de crédito não necessário
- Limitado a recursos básicos após cota

**Links:** [Detalhes dos Planos](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Modo Agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Windsurf](https://windsurf.com/)

> **~0.4h/mês através de modelos OpenAI, Anthropic, Google, xAI**
- Limite de 25 créditos de prompt/mês
- Múltiplos provedores (OpenAI, Claude, Gemini, xAI)
- Cartão de crédito necessário
- Pode comprar créditos adicionais para continuar

**Links:** [Preços](https://windsurf.com/pricing)

---

### [AWS Kiro](https://kiro.dev/)

> **Duração desconhecida de codificação com Claude Sonnet 4 / 3.7**
- Limites diários (não divulgados)
- Apenas modelos Claude (hospedados na AWS)
- Cartão de crédito não necessário (período de preview)
- Esgotamento de cota desconhecido (período de preview)

**Links:** [Blog de Introdução](https://kiro.dev/blog/introducing-kiro/)

---

> Os limites mudam rapidamente. Se você vir um erro, uma cota/modelo mais recente, ou quiser adicionar uma nova ferramenta, abra um issue ou PR com uma fonte. Contribuições de novas ferramentas são bem-vindas!

---

## 2. Provedores de API para Ferramentas de Codificação com IA
_(ordenados da mais generosa para a menos generosa)_

Esses serviços fornecem acesso API a modelos otimizados para codificação que se integram com ferramentas populares de codificação com IA como Cursor, Continue.dev, Cline e outras. Eles não fornecem ferramentas de codificação independentes, mas oferecem o backend de IA para ferramentas existentes.

### [OpenRouter](https://openrouter.ai/)

> **~33h/dia (~1000h/mês) de codificação com Qwen3-Coder**
- Camada gratuita de 2,000 requisições/dia para Qwen3-Coder-480B
- Modelos gratuitos adicionais: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- API compatível com OpenAI para todos os principais IDEs
- Cartão de crédito não necessário para modelos gratuitos
- Limitação de taxa durante alto tráfego para camada gratuita
- Funciona com Continue.dev, Cline, Cursor, etc.

**Links:** [Modelos Gratuitos](https://openrouter.ai/models/?q=free) | [API Qwen3-Coder](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **~1.7h/dia (~50h/mês) de codificação com Qwen3-Coder/Llama 3.1**
- Camada gratuita de 100 requisições/dia
- Modelos: Qwen3-Coder-480B (iguala performance do Claude Sonnet 4), Llama 3.1 70B
- API compatível com OpenAI (funciona com Cursor, Continue.dev, Cline, RooCode, etc.)
- Inferência ultra-rápida: 2,000 tokens/segundo (40x mais rápido que provedores típicos)
- Cartão de crédito não necessário
- **Camadas pagas:** Code Pro ($50/mês), Code Max ($200/mês) - sem limites semanais

**Links:** [Preços](https://www.cerebras.ai/pricing) | [Documentação da API](https://inference-docs.cerebras.ai/) | [Guias de Integração](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Ferramentas com Camadas Pagas com Modelos de Grau Profissional

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

**Jira Standard ($7.53/usuário/mês):** 20M tokens/dia (~80h/dia de codificação com Claude Sonnet)
**Jira Premium ($15.25/usuário/mês):** 20M tokens/dia
**Jira Enterprise (personalizado):** 20M tokens/dia
- Aumento de 4x da camada gratuita (5M → 20M tokens/dia)
- Mesmo modelo baseado em Claude da camada gratuita
- Limites de tokens resetam à meia-noite UTC

**Links:** [Documentação](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Limites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Preços do Jira](https://www.atlassian.com/software/jira/pricing)

---


### [Claude Code](https://www.anthropic.com/claude-code)

**Pro ($20/mês):** Acesso ao Sonnet 4
**Max ($100/mês):** Acesso ao Opus 4 + Sonnet 4
**Max ($200/mês):** Limites mais altos do Opus 4 + Sonnet 4
- Limites de uso resetam semanalmente
- Limites de janela deslizante de 5 horas se aplicam

**Links:** [Preços](https://www.anthropic.com/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

**Pro ($19/mês):** Limites aumentados para requisições agênticas
- O uso pode ser ajustado com base em fatores regionais e padrões de uso

**Links:** [Preços](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

**Pro ($15/mês):** 2,500 requisições/mês
**Turbo ($40/mês):** 10,000 requisições/mês  
**Lightspeed ($200/mês):** 50,000 requisições/mês
- Pague conforme usar disponível para excessos

**Links:** [Preços](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

**Pro ($10/mês):** 300 chats + conclusões ilimitadas/mês
**Pro+ ($39/mês):** 1,500 chats + conclusões ilimitadas/mês
**Business ($19/usuário/mês):** 300 chats + conclusões ilimitadas/usuário/mês
**Enterprise ($39/usuário/mês):** 1,000 chats + conclusões ilimitadas/usuário/mês
- Cobrança de excesso disponível a $0.04/requisição

**Links:** [Detalhes dos Planos](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot)

---

### [Windsurf](https://windsurf.com/)

**Pro ($15/mês):** 500 créditos de prompt/mês
**Teams ($30/usuário/mês):** 500 créditos de prompt/usuário/mês
**Enterprise ($60+/usuário/mês):** 1,000 créditos de prompt/usuário/mês

**Links:** [Preços](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

**Pro ($25/mês):** 100 mensagens/mês
**Teams ($30/mês):** Limites mais altos (não divulgados)

**Links:** [Limites de Mensagens](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

**$20/mês:** 10M tokens/mês
**$200/mês:** 120M tokens/mês

**Links:** [Documentação de Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

**Hobby (Gratuito):** Requisições de agente limitadas apenas com modelos básicos
**Pro ($20/mês):** Limites estendidos no Agente, acesso ao GPT-5, Claude Sonnet 4, Gemini 2.5 Pro
**Ultra ($200/mês):** 20x uso em todos os modelos OpenAI, Claude, Gemini
**Teams ($40/usuário/mês):** Recursos Pro + gerenciamento de equipe
- Teste Pro de duas semanas disponível
- Cartão de crédito necessário para camada gratuita

**Links:** [Preços](https://cursor.com/en/pricing)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

**Gratuito com ChatGPT Plus ($20/mês):** Acesso GPT-5 para tarefas de codificação
**Pague conforme usar:** Use com chave API do OpenAI
**Modo OSS gratuito:** Acesso apenas a modelos de código aberto (via flag --oss)
- Agente de codificação leve rodando localmente
- UI de terminal interativo com modo sandbox
- macOS 12+, Ubuntu 20.04+, Windows 11 via WSL2
- Projeto experimental sob desenvolvimento ativo

**Links:** [Repositório GitHub](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

**Pro ($10/mês):** Uso ilimitado com consciência de contexto avançada
- Acesso ao Claude 3.5 Sonnet, GPT-4o
- Janela de contexto aprimorada e personalização
**Teams ($12/usuário/mês):** Recursos Pro + gerenciamento de equipe
**Enterprise (Personalizado):** Implantação local, modelos personalizados

**Links:** [Preços](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

**Pro ($12/mês):** Conclusões e chat de IA aprimorados
**Enterprise ($39/usuário/mês):** Múltiplos LLMs, implantação privada
- Modelos: Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, modelos proprietários
- Suporte a mais de 600 linguagens de programação
- Opções de implantação local e air-gapped
- Traga seus próprios modelos ajustados

**Links:** [Preços](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**AI Pro ($15/mês):** Cota na nuvem aumentada + modelos locais ilimitados
**AI Ultimate ($25/mês):** Cota máxima na nuvem + recursos avançados
- Camada gratuita: Conclusão de código ilimitada + modelos locais + cota limitada na nuvem
- Teste Pro de 30 dias incluído
- All Products Pack inclui AI Pro
- Modo offline com modelos locais via Ollama/LM Studio

**Links:** [Preços do AI](https://www.jetbrains.com/ai-ides/buy/)

---

### [SuperMaven](https://supermaven.com/)

**Pro ($10/mês):** Janela de contexto de 1M tokens + créditos de chat
- Alternativa: $99/ano
- Interface de chat com GPT-4o, Claude 3.5 Sonnet, GPT-4
**Team ($10/usuário/mês):** Recursos Pro + gerenciamento de equipe
- Nota: Fusionado com Cursor IDE em novembro de 2024

**Links:** [Preços](https://supermaven.com/pricing)

---

> Conhece melhores preços ou limites? Compartilhe um link em um issue ou PR para ajudar a manter isso atualizado.

---

## 4. Ferramentas com Acesso Gratuito a Modelos Básicos
__(modelos não especificados/básicos)__

### [Bolt.new](https://bolt.new/)

**~100h/mês com modelos não especificados**
- Limite de 1M tokens/mês
- Modelo específico não especificado publicamente
- Cartão de crédito necessário

**Links:** [Documentação de Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

**~0.5h/mês com modelos não especificados**
- 5 créditos/dia, limite de 30/mês
- Modelos não listados publicamente
- Cartão de crédito necessário

**Links:** [Limites de Mensagens](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

**Duração variável com modelos proprietários (não de fronteira)**
- Acesso GPT-5 requer assinatura v0 Premium
- Limite de $5 em créditos/mês
- Usa modelos proprietários com roteamento variado
- Cartão de crédito necessário

**Links:** [Blog de Preços Atualizado](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

**Uso gratuito ilimitado de assistência básica de codificação com IA**
- Plano individual: Gratuito para sempre com conclusões de código ilimitadas, chat de IA, comandos
- Suporte a mais de 70 linguagens de programação
- Integrações IDE: VS Code, JetBrains, Vim/Neovim, Jupyter
- Cartão de crédito não necessário
- Consciência de contexto limitada (expandida em camadas pagas)
- Apenas modelo base (Llama 3.1 70B), modelos de grau profissional requerem assinatura

**Links:** [Preços](https://codeium.com/pricing) | [Documentação](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

**Camada gratuita com recursos limitados**
- Conclusões de código com IA básicas e chat (limitado)
- Processamento local disponível
- Contexto muito limitado na camada gratuita
- Performance reduzida para economizar recursos
- Suporte a mais de 600 linguagens de programação

**Links:** [Preços](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**Camada gratuita AI incluída com IDEs**
- Conclusão de código ilimitada e suporte a modelo local
- Cota limitada para recursos baseados na nuvem
- Teste AI Pro de 30 dias
- Chat, geração de código, mensagens de commit com modelos locais

**Links:** [Recursos AI](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

**Camada gratuita com recursos básicos**
- Sugestões básicas de código
- Limite de retenção de dados de 7 dias
- Cartão de crédito necessário para registro
- Janela de contexto de 1M tokens (impressionante para camada gratuita)

**Links:** [Preços](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

**Extensão gratuita de código aberto com suporte flexível a modelos**
- Extensão gratuita para VS Code e JetBrains
- Suporte completo para modelos locais via Ollama, LM Studio
- Camada Solo: opções de visibilidade privada/equipe/pública
- Suporte a mais de 200 modelos (requer suas próprias chaves API para modelos na nuvem)
- Hub da comunidade para assistentes de IA personalizados
- Sem lock-in de fornecedor ou limites de uso para modelos locais

**Links:** [GitHub](https://github.com/continuedev/continue) | [Hub de Modelos](https://hub.continue.dev/explore/models)

---

> Conhece os limites oficiais ou modelos? Compartilhe um link em um issue ou PR para atualizar as informações.

---

## 5. Modelos Locais

Executar modelos de fronteira de peso aberto localmente fornece assistência de codificação ilimitada sem custos de API ou limites de uso. Ferramentas populares para implantação local incluem **[Cline](https://cline.bot/)** (extensão VS Code com modos Plan/Act e suporte MCP), **[Aider](https://aider.chat/)** (assistente de linha de comando com integração Git incorporada), e **[Continue.dev](https://www.continue.dev/)** (extensão VS Code de código aberto suportando mais de 200 modelos). Todas funcionam perfeitamente com **[Ollama](https://ollama.com/)** para executar modelos de fronteira como Devstral (24B parâmetros, otimizado para codificação agêntica), Qwen3-Coder, DeepSeek Coder V2, Codestral, e GLM-4.5.

**Nota**: Modelos de fronteira requerem RAM/VRAM substancial. Em particular, para Qwen3‑Coder‑480B o GGUF compatível com Ollama é ~150GB, e a inferência local prática pode requerer ~150GB de memória unificada (RAM+VRAM), o que torna difícil em laptops típicos; o quant 30B comumente precisa ~18GB. Veja o guia local Unsloth Qwen3‑Coder para detalhes ([docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) e o artigo de Simon Willison sobre [executar GLM‑4.5 AIR em seu laptop para construir Space Invaders](https://simonwillison.net/2025/Jul/29/space-invaders/) como exemplo prático.

---

## Notas de Comparação

- **Objetivo**: Comparar sistemas de codificação agêntica pelo seu acesso a modelos de fronteira.
- **O que qualifica um modelo como "grau profissional"?** Para esta comparação, modelos devem alcançar ≥60% no SWE-bench Verified, demonstrando capacidade de engenharia de software do mundo real. Modelos atualmente qualificados: GPT-5 (74.9%), Claude Opus 4.1 (74.5%), Claude Sonnet 4 (72.7%), GPT-5 mini (71.0%), Qwen3-Coder-480B (69.6%), e Gemini 2.5 Pro (63.2%).
- **[1] Requisições para horas**: 60 requisições ≈ 1 hora de codificação assistida por IA (baseado em simulação de tarefa do mundo real).
- **[2] Tokens para horas**: ~250k tokens ≈ 1 hora de codificação (baseado em dados de uso de agente de IA do mundo real).
- **[3] Chats/Créditos para horas**: Chats agênticos multi-turno e créditos de prompt são assumidos equivalentes a requisições únicas para fins de estimativa.
- Se você detectar um erro ou link de fonte faltando, por favor abra um issue ou pull request.

---

## Recursos Relacionados

- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Lista abrangente de APIs LLM gratuitas para construir integrações personalizadas

---

## Disclaimer
Sem afiliação com nenhum fornecedor. Todas as marcas comerciais pertencem aos seus proprietários. Informações são para pesquisa; precisão não garantida; limites/preços mudam frequentemente.

---
*Esta tradução foi criada com Claude AI. Para as informações mais atualizadas, consulte a [versão original em inglês](README.md).*
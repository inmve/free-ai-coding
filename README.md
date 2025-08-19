Last updated: August 19, 2025 • PRs/issues welcome • ⭐ Star to come back later

**Languages:** [Español](README-es.md) • [Português](README-pt-BR.md) • [日本語](README-ja.md)

# AI Coding Tools: Where Pro-Grade Models Are Actually Free 

Many AI coding tools claim to be "free," but access to pro-grade models usually runs out fast, then you're downgraded. Each tool uses different limits (credits, tokens, requests), so fair comparison is hard. This list puts them side by side and shows **how many hours of coding on pro-grade LLMs you actually get for free**.

## TL;DR — Ranked Free Tiers for Pro‑Grade Coding
_(ordered from most generous to least; time estimates use the [Methodology](#methodology--assumptions) below)_

| Tool | Pro‑grade models | Free tier limit | Approx free coding time | Credit card |
|------|------------------|------------------|--------------------------|-------------|
| [Qwen Code](#qwen-code) | Qwen3-Coder-480B | 2,000 requests/day | ~33h/day (~1000h/month) | No |
| [Rovo Dev CLI](#rovo-dev-cli) | Claude Sonnet 4 | 5M tokens/day (beta) | ~20h/day (~600h/month) | No |
| [Gemini CLI](#gemini-cli) | Gemini 2.5 Pro | 100 requests/day | ~1.7h/day (~50h/month) | No |
| [Kilo Code](#kilo-code) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | $20 signup credits (one‑time) | ~3h total | Yes |
| [Warp](#warp) | Claude, OpenAI, Gemini | 150 requests/month | ~2.5h/month | No |
| [Amazon Q Developer](#amazon-q-developer) | Claude Sonnet 4 | 50 agent chats/month | ~0.8h/month | Yes |
| [GitHub Copilot](#github-copilot) | GPT‑4o, Claude 3.5 Sonnet, Gemini 2.0 Flash | 50 chats + 2,000 completions/month | ~0.8h/month (agent) | No |
| [Windsurf](#windsurf) | OpenAI, Anthropic, Google, xAI | 25 credits/month | ~0.4h/month | Yes |
| [AWS Kiro](#aws-kiro) | Claude Sonnet 4 / 3.7 | Daily limits (undisclosed) | Unknown | No (preview) |

## How Accurate Are These Estimates?

These time estimates are based on calculations, but **real usage varies by coding style and task complexity**. Help make this resource more accurate by [sharing your actual coding hours →](https://free-ai-usage.vercel.app/)

### Qualifying Pro‑Grade Models
Only models achieving >60% on SWE-bench Verified qualify as pro-grade for real-world coding tasks. Below is the current list

| Model | SWE-bench Verified | Provider |
|-------|-------------------|----------|
| GPT-5 | 74.9% | OpenAI |
| Claude Opus 4.1 | 74.5% | Anthropic |
| Claude Sonnet 4 | 72.7% (80.2% w/ parallel) | Anthropic |
| GPT-5 mini | 71.0% | OpenAI |
| Qwen3-Coder-480B | 69.6% (interactive) / 67.0% (single) | Alibaba |
| Gemini 2.5 Pro | 63.2% | Google |


## Contents

- [1. AI-coding Tools with Free Access to Pro-Grade Models](#1-ai-coding-tools-with-free-access-to-pro-grade-models)
- [2. API Providers for AI Coding Tools](#2-api-providers-for-ai-coding-tools)
- [3. Tools with Paid Tiers with Pro-Grade Models](#3-tools-with-paid-tiers-with-pro-grade-models)
- [4. Tools with Free Access to Basic Models](#4-tools-with-free-access-to-basic-models)
- [5. Local Models](#5-local-models)


## 1. AI-coding Tools with Free Access to Pro-Grade Models
_(ordered from most generous to least)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **~33h/day (~1000h/month) of Qwen3-Coder-480B coding**
- 2,000 requests/day free tier via Qwen OAuth
- 60 requests/minute rate limit
- Command-line AI workflow tool (adapted from Gemini CLI)
- One-click browser authentication
- No credit card required

**Links:** [GitHub](https://github.com/QwenLM/qwen-code) | [Documentation](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **~20h/day (~600h/month) of Claude Sonnet coding during beta**
- GPT-5 access with generous daily quota during preview
- 5M tokens/day free tier (20M on first day only)
- Claude-based model (Anthropic provider)
- No credit card required during beta
- Token limits reset at midnight UTC
- Note: Upgrade to Jira Standard/Premium/Enterprise for 20M tokens/day

**Links:** [Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token Limits](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **~1.7h/day (~50h/month) of Gemini 2.5 Pro coding**
- 100 requests/day limit
- Fallback: ~4.2h/day with Gemini 2.5 Flash (250 requests/day)
- No credit card required
- Google models only
- Switches to paid rates after free quota

**Links:** [Rate Limits](https://ai.google.dev/gemini-api/docs/rate-limits) | [Pricing](https://ai.google.dev/gemini-api/docs/pricing)

---

### [Kilo Code](https://kilocode.ai/)

> **~3h total of Claude 4 Sonnet/Opus, Gemini 2.5 Pro, GPT-4.1 coding**
- $20 free credits on signup
- Open source VS Code extension
- Pay-as-you-go with no markup on model pricing
- Credit card required to claim bonus credits
- Supports bringing your own API keys

**Links:** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentation](https://kilocode.ai/docs/)

---

### [Warp](https://warp.dev/)

> **~2.5h/month across Claude Sonnet 4, OpenAI GPT-5, Gemini 2.5 Pro**
- 150 requests/month limit
- Multiple providers (Claude, OpenAI, Gemini)
- No credit card required for basic signup
- Pay-as-you-go overages available

**Links:** [Pricing](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **~0.8h/month of Claude Sonnet 4 coding**
- 50 agentic chats/month limit (multi-turn conversations)
- Latest Claude models (AWS-hosted)
- Credit card required
- Must upgrade to Pro for continued access
- Perpetual free tier

**Links:** [Pricing](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **~0.8h/month of agent interactions (GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Flash)**
- 50 chats + 2,000 completions/month limit
- Agent Mode with autonomous multi-step coding
- Multiple providers (GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Flash)
- No credit card required
- Limited to basic features after quota

**Links:** [Plans Details](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Agent Mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Windsurf](https://windsurf.com/)

> **~0.4h/month across OpenAI, Anthropic, Google, xAI models**
- 25 prompt credits/month limit
- Multiple providers (OpenAI, Claude, Gemini, xAI)
- Credit card required
- Can purchase add-on credits to continue

**Links:** [Pricing](https://windsurf.com/pricing)

---

### [AWS Kiro](https://kiro.dev/)

> **Unknown duration of Claude Sonnet 4 / 3.7 coding**
- Daily limits (undisclosed)
- Claude models only (AWS-hosted)
- No credit card required (preview period)
- Quota exhaustion unknown (preview period)

**Links:** [Introduction Blog](https://kiro.dev/blog/introducing-kiro/)

---

> Limits change fast. If you see a mistake, a newer quota/model, or want to add a new tool, open an issue or PR with a source. New tool contributions are welcomed!

---

## 2. API Providers for AI Coding Tools
_(ordered from most generous to least)_

These services provide API access to coding-optimized models that integrate with popular AI coding tools like Cursor, Continue.dev, Cline, and others. They don't provide standalone coding tools but offer the AI backend for existing tools.

### [OpenRouter](https://openrouter.ai/)

> **~33h/day (~1000h/month) of Qwen3-Coder coding**
- 2,000 requests/day free tier for Qwen3-Coder-480B
- Additional free models: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- OpenAI-compatible API for all major IDEs
- No credit card required for free models
- Rate limiting during high traffic for free tier
- Works with Continue.dev, Cline, Cursor, etc.

**Links:** [Free Models](https://openrouter.ai/models/?q=free) | [Qwen3-Coder API](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **~1.7h/day (~50h/month) of Qwen3-Coder/Llama 3.1 coding**
- 100 requests/day free tier
- Models: Qwen3-Coder-480B (matches Claude Sonnet 4 performance), Llama 3.1 70B
- OpenAI-compatible API (works with Cursor, Continue.dev, Cline, RooCode, etc.)
- Ultra-fast inference: 2,000 tokens/second (40x faster than typical providers)
- No credit card required
- **Paid tiers:** Code Pro ($50/mo), Code Max ($200/mo) - no weekly limits

**Links:** [Pricing](https://www.cerebras.ai/pricing) | [API Docs](https://inference-docs.cerebras.ai/) | [Integration Guides](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Tools with Paid Tiers with Pro-Grade Models

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

**Jira Standard ($7.53/user/mo):** 20M tokens/day (~80h/day of Claude Sonnet coding)
**Jira Premium ($15.25/user/mo):** 20M tokens/day
**Jira Enterprise (custom):** 20M tokens/day
- 4x increase from free tier (5M → 20M tokens/day)
- Same Claude-based model as free tier
- Token limits reset at midnight UTC

**Links:** [Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token Limits](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira Pricing](https://www.atlassian.com/software/jira/pricing)

---


### [Claude Code](https://www.anthropic.com/claude-code)

**Pro ($20/mo):** Sonnet 4 access
**Max ($100/mo):** Opus 4 + Sonnet 4 access
**Max ($200/mo):** Higher Opus 4 + Sonnet 4 limits
- Usage limits reset weekly
- 5-hour rolling window limits apply

**Links:** [Pricing](https://www.anthropic.com/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

**Pro ($19/mo):** Increased limits for agentic requests
- Usage may be adjusted based on regional factors and usage patterns

**Links:** [Pricing](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

**Pro ($15/mo):** 2,500 requests/month
**Turbo ($40/mo):** 10,000 requests/month  
**Lightspeed ($200/mo):** 50,000 requests/month
- Pay-as-you-go available for overages

**Links:** [Pricing](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

**Pro ($10/mo):** 300 chats + unlimited completions/month
**Pro+ ($39/mo):** 1,500 chats + unlimited completions/month
**Business ($19/user/mo):** 300 chats + unlimited completions/user/month
**Enterprise ($39/user/mo):** 1,000 chats + unlimited completions/user/month
- Overage billing available at $0.04/request

**Links:** [Plans Details](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot)

---

### [Windsurf](https://windsurf.com/)

**Pro ($15/mo):** 500 prompt credits/month
**Teams ($30/user/mo):** 500 prompt credits/user/month
**Enterprise ($60+/user/mo):** 1,000 prompt credits/user/month

**Links:** [Pricing](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

**Pro ($25/mo):** 100 messages/month
**Teams ($30/mo):** Higher limits (undisclosed)

**Links:** [Messaging Limits](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

**$20/mo:** 10M tokens/month
**$200/mo:** 120M tokens/month

**Links:** [Token Documentation](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

**Hobby (Free):** Limited agent requests with basic models only
**Pro ($20/mo):** Extended limits on Agent, access to GPT-5, Claude Sonnet 4, Gemini 2.5 Pro
**Ultra ($200/mo):** 20x usage on all OpenAI, Claude, Gemini models
**Teams ($40/user/mo):** Pro features + team management
- Two-week Pro trial available
- Credit card required for free tier

**Links:** [Pricing](https://cursor.com/en/pricing)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

**Free with ChatGPT Plus ($20/mo):** GPT-5 access for coding tasks
**Pay-as-you-go:** Use with OpenAI API key
**Free OSS mode:** Access to open-source models only (via --oss flag)
- Lightweight coding agent running locally
- Interactive terminal UI with sandbox mode
- macOS 12+, Ubuntu 20.04+, Windows 11 via WSL2
- Experimental project under active development

**Links:** [GitHub Repo](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

**Pro ($10/mo):** Unlimited usage with advanced context awareness
- Claude 3.5 Sonnet, GPT-4o access
- Enhanced context window and personalization
**Teams ($12/user/mo):** Pro features + team management
**Enterprise (Custom):** On-premise deployment, custom models

**Links:** [Pricing](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

**Pro ($12/mo):** Enhanced AI completions and chat
**Enterprise ($39/user/mo):** Multiple LLMs, private deployment
- Models: Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, proprietary models
- 600+ programming languages supported
- On-premises and air-gapped deployment options
- Bring your own fine-tuned models

**Links:** [Pricing](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**AI Pro ($15/mo):** Increased cloud quota + unlimited local models
**AI Ultimate ($25/mo):** Maximum cloud quota + advanced features
- Free tier: Unlimited code completion + local models + limited cloud quota
- 30-day Pro trial included
- All Products Pack includes AI Pro
- Offline mode with local models via Ollama/LM Studio

**Links:** [AI Pricing](https://www.jetbrains.com/ai-ides/buy/)

---

### [SuperMaven](https://supermaven.com/)

**Pro ($10/mo):** 1M token context window + chat credits
- Alternative: $99/year
- Chat interface with GPT-4o, Claude 3.5 Sonnet, GPT-4
**Team ($10/user/mo):** Pro features + team management
- Note: Merged with Cursor IDE in November 2024

**Links:** [Pricing](https://supermaven.com/pricing)

---

> Know better pricing or limits? Share a link in an issue or PR to help keep this updated.

---

## 4. Tools with Free Access to Basic Models
__(unspecified/basic models)__

### [Bolt.new](https://bolt.new/)

**~100h/month with unspecified models**
- 1M tokens/month limit
- Specific model not publicly specified
- Credit card required

**Links:** [Token Documentation](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

**~0.5h/month with unspecified models**
- 5 credits/day, 30/month cap
- Models not publicly enumerated
- Credit card required

**Links:** [Messaging Limits](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

**Variable duration with proprietary models (not frontier)**
- GPT-5 access requires v0 Premium subscription
- $5 in credits/month limit
- Uses proprietary models with varied routing
- Credit card required

**Links:** [Updated Pricing Blog](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

**Unlimited free usage of basic AI coding assistance**
- Individual plan: Free forever with unlimited code completions, AI chat, commands
- 70+ programming languages supported
- IDE integrations: VS Code, JetBrains, Vim/Neovim, Jupyter
- No credit card required
- Limited context awareness (expanded in paid tiers)
- Base model only (Llama 3.1 70B), pro-graded models require subscription

**Links:** [Pricing](https://codeium.com/pricing) | [Documentation](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

**Free tier with limited features**
- Basic AI code completions and chat (limited)
- Local processing available
- Context heavily limited in free tier
- Performance dialed down to save resources
- 600+ programming languages supported

**Links:** [Pricing](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**AI Free tier included with IDEs**
- Unlimited code completion and local model support
- Limited quota for cloud-based features
- 30-day AI Pro trial
- Chat, code generation, commit messages with local models

**Links:** [AI Features](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

**Free tier with basic features**
- Basic code suggestions
- 7-day data retention limit
- Credit card required for registration
- 1M token context window (impressive for free tier)

**Links:** [Pricing](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

**Free open-source extension with flexible model support**
- Free VS Code and JetBrains extension
- Full support for local models via Ollama, LM Studio
- Solo tier: Private/team/public visibility options
- Supports 200+ models (requires your own API keys for cloud models)
- Community hub for custom AI assistants
- No vendor lock-in or usage limits for local models

**Links:** [GitHub](https://github.com/continuedev/continue) | [Model Hub](https://hub.continue.dev/explore/models)

---

> Know the official limits or models? Share a link in an issue or PR to update the information.

---

## 5. Local Models

Running open-weight frontier models locally provides unlimited coding assistance without API costs or usage limits. Popular tools for local deployment include **[Cline](https://cline.bot/)** (VS Code extension with Plan/Act modes and MCP support), **[Aider](https://aider.chat/)** (command-line assistant with built-in Git integration), and **[Continue.dev](https://www.continue.dev/)** (open-source VS Code extension supporting 200+ models). All work seamlessly with **[Ollama](https://ollama.com/)** to run frontier models like Devstral (24B parameters, optimized for agentic coding), Qwen3-Coder, DeepSeek Coder V2, Codestral, and GLM-4.5.

**Note**: Frontier models require substantial RAM/VRAM. In particular, for Qwen3‑Coder‑480B the Ollama‑friendly GGUF is ~150GB, and practical local inference can require ~150GB of unified memory (RAM+VRAM), which makes it hard on typical laptops; the 30B quant commonly needs ~18GB. See the Unsloth Qwen3‑Coder local guide for details ([docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) and Simon Willison's article on [running GLM‑4.5 AIR on his laptop to build Space Invaders](https://simonwillison.net/2025/Jul/29/space-invaders/) for a practical example.

---

## Methodology / Assumptions

- **Goal**: Compare agentic coding systems by their access to frontier models.
- **What qualifies a model as "pro-grade"?** For this comparison, models must achieve ≥60% on SWE-bench Verified, demonstrating real-world software engineering capability. Current qualifying models: GPT-5 (74.9%), Claude Opus 4.1 (74.5%), Claude Sonnet 4 (72.7%), GPT-5 mini (71.0%), Qwen3-Coder-480B (69.6%), and Gemini 2.5 Pro (63.2%).
- **[1] Requests to hours**: 60 requests ≈ 1 AI-assisted coding hour (based on real-world task simulation).
- **[2] Tokens to hours**: ~250k tokens ≈ 1 coding hour (based on real-world AI agent usage data).
- **[3] Chats/Credits to hours**: Multi-turn agentic chats and prompt credits are assumed equivalent to single requests for estimation purposes.
- If you spot an error or missing source link, please open an issue or a pull request.

---

## Related Resources

- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Comprehensive list of free LLM APIs for building custom integrations

---

## Disclaimer
No affiliation with any vendor. All trademarks belong to their owners. Information is for research; accuracy not guaranteed; limits/pricing change frequently.

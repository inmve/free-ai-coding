Last updated: September 15, 2026 • PRs/issues welcome

**Languages:** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md)

# AI Coding Tools: Where Pro-Grade Models Are Actually Free 

Many AI coding tools claim to be "free," but access to pro-grade models usually runs out fast, then you're downgraded. Each tool uses different limits (credits, tokens, requests), making comparison difficult. This list puts them side by side to show what you actually get for free.

## TL;DR — Free Tiers for Pro‑Grade AI Coding
_(quota units differ; ordering is for orientation and does not rank equivalent capacity)_

| Tool | Pro‑grade models | Free tier limit | Credit card |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Open Qwen models; hosted quota depends on provider/authentication | Qwen OAuth free tier discontinued April 15, 2026; use Alibaba ModelStudio Coding Plan, Token Plan, API key, or another provider | No |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Rovo Dev model availability depends on plan | 350 credits/user/month/site (free with Jira paid plans) | No |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Enterprise/paid API access remains; individuals migrated to Antigravity CLI | Individual free/Google AI access stopped June 18, 2026; migrate to Antigravity CLI | No |
| [Cursor](https://cursor.com/) | Composer; limited Agent access | Limited Agent requests; no time-limited model promotion | No |
| [Kilo Code](https://kilocode.ai/) | Provider/model selection depends on configured account | Credit offer not currently stated on accessible official pricing page | Unresolved |
| [Warp](https://warp.dev/) | Warp Agent models; BYOK available | Free: limited cloud-agent access; BYOK for individuals and companies of ≤10 uses no Warp credits | Unresolved |
| [Trae](https://trae.ai/) | Premium model availability is not stated on accessible pricing page | Current quota is unresolved; official pricing page exposes no values | Unresolved |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Latest Claude models (AWS-hosted) | 50 agentic requests/month + 1,000 Java LOC/month | No (Builder ID free tier) |
| [GitHub Copilot](https://github.com/features/copilot/plans) | Haiku 4.5, GPT-5 mini and more | 2,000 completions + 50 chat requests/month; limited agent/CLI usage | No |
| [Windsurf](https://windsurf.com/) | Unresolved (official pricing URL redirects to Devin) | Unverified; do not use Devin pricing as Windsurf pricing | Unresolved |
| [Jules](https://jules.google/) | Gemini 2.5 Pro; paid plans get higher access to latest models | 15 tasks/rolling 24h; 3 concurrent | No |
| [AWS Kiro](https://kiro.dev/) | Claude Sonnet 4.5 and open-weight models | 50 credits/month | No |
| [Qoder](https://qoder.com/) | Latest models; exact free model list is not stated | 2-week Pro trial; then Free plan with credits (exact allowance unresolved) | Unresolved |

### Qualifying Pro‑Grade Models
Selected historical figures with first-party source links. They use different harness conditions and are not a current exhaustive ranking.

| Model | SWE-bench Verified | Provider |
|-------|-------------------|----------|
| [Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) | 80.9% | Anthropic |
| [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) | 77.2% | Anthropic |
| [Qwen3-Coder-480B](https://qwenlm.github.io/blog/qwen3-coder/) | 69.6% | Alibaba |

### Contributing

If you spot an error, missing source link, or have updated quota/model information, please open an issue or pull request with a source. New tool contributions are welcomed! See CONTRIBUTING.md for detailed guidelines.

### Disclaimer

No affiliation with any vendor. All trademarks belong to their owners. Information is for research; accuracy not guaranteed; limits/pricing change frequently.

## Contents

- [1. AI-coding Tools with Free Access to Pro-Grade Models](#1-ai-coding-tools-with-free-access-to-pro-grade-models)
- [2. API Providers for AI Coding Tools](#2-api-providers-for-ai-coding-tools)
- [3. Tools with Paid Tiers with Pro-Grade Models](#3-tools-with-paid-tiers-with-pro-grade-models)
- [4. Tools with Free Access to Basic Models](#4-tools-with-free-access-to-basic-models)
- [5. Local Models](#5-local-models)
- [Comparison Notes](#comparison-notes)
- [Related Resources](#related-resources)

## 1. AI-coding Tools with Free Access to Pro-Grade Models
_(quota units differ; ordering is for orientation and does not rank equivalent capacity)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Qwen OAuth free tier discontinued April 15, 2026; use Alibaba ModelStudio Coding Plan, Token Plan, API key, or another provider**
- Qwen OAuth free tier discontinued April 15, 2026; use Alibaba ModelStudio Coding Plan, Token Plan, API key, or another provider
- Supports Qwen and other providers through authentication settings
- Open-source coding agent with terminal, IDE, desktop and web interfaces
- No hosted quota is inferred for BYOK or local providers

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Authentication documentation](https://github.com/QwenLM/qwen-code/blob/main/docs/users/configuration/auth.md)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free access**
- Free with Jira paid plans: 350 Rovo Dev credits/user/month/site
- Usage stops when the monthly credit allowance is reached
- The current billing page does not state a fixed CLI model; model availability may depend on plan
- No card is required for the free add-on; verify site eligibility with Atlassian

**** [Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token Limits](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini CLI transitioned to Antigravity CLI for individuals**
- On June 18, 2026 Gemini CLI stopped serving Gemini Code Assist for individuals and Google AI Pro/Ultra tiers
- Antigravity CLI is available to everyone and is the migration path
- Standard/Enterprise organization access remains unchanged; paid Gemini and Enterprise Agent Platform API keys remain supported
- The former 1,000/day and 60/minute individual Google-login allowance is historical and retired

**** [Transition announcement](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) | [Documentation](https://ai.google.dev/gemini-api/docs/rate-limits)

---

### [Kilo Code](https://kilocode.ai/)

> **Provider/model access through Kilo Code**
- The current accessible official pricing page does not state the old $25 signup-credit amount
- Open-source VS Code extension with pay-as-you-go model usage
- Supports bringing your own API keys
- Verify any current promotion and card requirement before relying on it

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentation](https://kilocode.ai/docs/) | [Pricing](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Warp Agent and BYOK access**
- Free plan: limited cloud-agent access; AI stops at the free plan limit
- Build starts at $20/month and includes 1,500 credits ($20 of agent usage at API rates)
- For individuals and companies of 10 or fewer, BYOK/custom inference uses no Warp credits
- Credit consumption varies with model, context, tool calls and task complexity

**** [Pricing](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Claude and other latest models through Amazon Q Developer**
- Perpetual Free tier: 50 agentic requests/month and 1,000 Java LOC/month
- Free IDE limits are available to Builder ID users; IAM users are governed at account level
- No card is required for the free Builder ID path; Pro subscriptions require AWS billing
- Pro is $19/user/month with higher limits and features

**** [Pricing](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Free Copilot access**
- 2,000 completions/month and 50 chat requests/month
- Includes Copilot CLI and limited agent usage; model selection is restricted on Free
- The current plans page lists Haiku 4.5, GPT-5 mini and more
- No card is required; usage beyond the free allowance needs a paid plan or applicable credits

**** [Plans Details](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Agent Mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Trae pricing status unresolved**
- The current official pricing page exposes FAQ headings but no quota or price values
- The old fast/slow request packages are not presented as current
- Check linked billing documentation before relying on any exact allowance
- No current card requirement was established

**** [Pricing](https://trae.ai/pricing) | [Documentation](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Windsurf pricing status unresolved**
- The official pricing URL currently redirects to Devin pricing
- Devin/Cognition prices and quotas must not be applied to Windsurf
- Old Windsurf credit amounts and card requirement are not verified
- Check an official Windsurf product page before relying on any current limit

**** [Pricing](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Gemini model access through Jules**
- Free: 15 tasks in a rolling 24-hour window and 3 concurrent tasks
- Free model access is Gemini 2.5 Pro; paid plans provide higher access to latest models
- Jules Pro: 100 tasks/day and 15 concurrent tasks through Google AI Pro
- Jules Ultra: 300 tasks/day and 60 concurrent tasks through Google AI Ultra
- Jules requires an eligible Google Account and users must be 18+

**** [Usage Limits](https://jules.google/docs/usage-limits/) | [Documentation](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **Claude Sonnet 4.5 and open-weight model access**
- Perpetual Free tier: 50 credits/month
- Free social-login or AWS Builder ID users get Claude Sonnet 4.5 and open-weight models, subject to limits
- Pro $20/month: 1,000 credits; Pro+ $40: 2,000; Pro Max $100: 5,000; Power $200: 10,000
- Paid subscriptions require a valid card; credits reset at the billing cycle

**** [Pricing](https://kiro.dev/pricing/) | [Introduction Blog](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Qoder free trial and credit metering**
- New users are eligible for a two-week Pro trial
- After the trial, accounts can be downgraded to the Free plan
- Usage is measured in credits; the current exact Free allowance is not exposed in accessible pages
- Verify current plan limits before comparing Qoder with request- or token-based services

**** [Homepage](https://qoder.com/) | [Pricing](https://qoder.com/pricing)

Limits change fast. If you see a mistake, a newer quota/model, or want to add a new tool, open an issue or PR with a source. See CONTRIBUTING.md for guidelines.

---

## 2. API Providers for AI Coding Tools
_(ordered from most generous to least)_

These services provide API access to coding-optimized models that integrate with popular AI coding tools like Cursor, Continue.dev, Cline, and others. They don't provide standalone coding tools but offer the AI backend for existing tools.

### [OpenRouter](https://openrouter.ai/)

> **Free model access through OpenRouter**
- Free models are generally limited to 50 requests/day total
- Purchasing at least $10 in credits raises the free-model limit to 1,000 requests/day
- Free model availability and routing change over time
- OpenAI-compatible API; paid model/provider charges apply

**** [Free Models](https://openrouter.ai/models/?q=free) | [Qwen3-Coder API](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **Cerebras API model access**
- Current official pages do not expose the old precise daily-token, RPM or speed figures
- Model availability and limits should be checked in current inference documentation
- OpenAI-compatible API integrations are documented
- No unsupported quota or performance number is presented

**** [Pricing](https://www.cerebras.ai/pricing) | [API Docs](https://inference-docs.cerebras.ai/) | [Integration Guides](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Tools with Paid Tiers with Pro-Grade Models


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Standard**
- $20/user/month with 2,000 Rovo Dev credits/user/month
- Credits can be used across eligible sites in the Atlassian organization
- Optional extra usage is $0.01 per credit when enabled
- Rovo Dev Free is 350 credits/user/month/site and free with Jira paid plans

**** [Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token Limits](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira Pricing](https://www.atlassian.com/software/jira/pricing)

---

### [Claude Code](https://www.anthropic.com/claude-code)

> **Claude Code through Claude Pro or Max**
- Claude Pro: $20/month, or $17/month with annual billing
- Max 5x: $100/month; Max 20x: $200/month
- Claude Code rolling limits vary by model and task; published message estimates are not fixed quotas
- API/console authentication is pay-as-you-go and separate from the subscription

**** [Pricing](https://www.anthropic.com/pricing) | [Claude Code Guide](https://docs.anthropic.com/en/docs/claude-code)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Pro: $19/user/month**
- Higher limits for agentic requests and Java transformation
- Free tier remains perpetual with 50 agentic requests/month
- Exact paid limits depend on the current AWS pricing table and account context
- Pro activation requires AWS billing; BYOK is not hosted free inference

**** [Pricing](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Warp Build: $20/month starting price**
- 1,500 credits ($20 of included agent usage at API rates)
- Reload credits and auto-reload are available; add-on terms can change
- For individuals and companies of 10 or fewer, BYOK/custom inference uses no Warp credits
- Enterprise terms and larger plans are custom or usage-based

**** [Pricing](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Paid Copilot plans**
- Pro: $10/user/month with $15 monthly AI-credit allowance
- Pro+: $39/user/month with $70 monthly AI-credit allowance
- Max: $100/user/month with $200 monthly AI-credit allowance; Business and Enterprise pricing differs
- Completions are unlimited on paid plans; chat, agent, CLI and review use AI credits
- Model availability and credit consumption vary by plan and model

**** [Plans Details](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [GPT-5.1-Codex-Max Preview](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Trae paid pricing unresolved**
- The current official pricing page does not publish the old $10 plan or request packages
- Check linked billing documentation for current plan and usage terms
- Do not treat historical fast/slow request amounts as current
- Card and overage requirements were not established

**** [Pricing](https://trae.ai/pricing) | [Documentation](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Windsurf paid pricing unresolved**
- The official pricing URL redirects to Devin, so Devin plans are excluded
- Old Windsurf Pro/Teams/Enterprise credit amounts are not verified
- Check current Windsurf documentation before relying on a paid-tier comparison
- No BYOK or card conclusion is inferred from the redirect

**** [Pricing](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Lovable pricing is now credit-based**
- Free includes 5 daily build credits (up to 30/month), 20 monthly Cloud credits, and 4 monthly AI credits
- Credits and grants have different expiry rules; check the official pricing page for current plan details

**** [Pricing](https://lovable.dev/pricing)

---

### [Bolt.new](https://bolt.new/)

> **Free includes a 300K token daily limit and 1M token monthly limit**
- Pro starts at $25/month with 10M tokens/month; Teams starts at $30/member/month
- Paid tokens roll over for one additional month while the subscription remains active

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Cursor current paid plans**
- Hobby is free with no card, limited Agent requests and access to Composer
- Pro: $20/month; Pro+: $60/month; Ultra: $200/month
- Teams Standard: $40/user/month; Teams Premium: $120/user/month
- The GPT-5.1-Codex-Max free-until-Dec-11-2025 promotion has expired and is removed
- Usage and model access are plan-dependent; check the current pricing page for detailed pools

**** [Pricing](https://cursor.com/en/pricing) | [GPT-5.1-Codex-Max Announcement](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Codex plans and API billing**
- Codex is included in Free ($0), Go ($8/month), Plus ($20/month), Pro (from $100/month), Business ($20/user/month annual or $25 monthly), Edu and Enterprise plans
- API keys are billed separately by model; local and cloud use share plan allowances and weekly limits may apply
- Limits vary with task complexity; check the current official pricing page

**** [Pricing](https://developers.openai.com/codex/pricing/) | [GitHub Repo](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

> **Codeium current pricing unresolved**
- The current accessible official page does not expose a stable quota/price table
- Old exact values are not presented as current
- Check the linked first-party pricing or documentation page before relying on a limit

**** [Pricing](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Tabnine current paid plans**
- Code Assistant: $39/user/month on annual billing; Agentic Platform: $59/user/month on annual billing
- No free tier is advertised on the current pricing page
- On-prem/cloud own-LLM use is unlimited by Tabnine; Tabnine-provided LLM access adds provider cost plus 5% handling

**** [Pricing](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **JetBrains AI paid tiers**
- AI Pro: $10/month with 10 AI Credits per 30 days on the displayed monthly plan
- AI Ultimate: $30/month with 35 AI Credits per 30 days
- AI Free provides 3 AI Credits per 30 days; top-ups are available only on paid tiers
- BYOK and local models can be used without a JetBrains AI subscription
- Credits are USD-denominated usage units, not requests or tokens

**** [AI Pricing](https://www.jetbrains.com/ai-ides/buy/)

---

### [Jules](https://jules.google/)

> **Jules paid plans**
- Jules Pro through Google AI Pro: 100 tasks/rolling 24 hours and 15 concurrent tasks
- Jules Ultra through Google AI Ultra: 300 tasks/rolling 24 hours and 60 concurrent tasks
- Paid plans provide higher access to latest models, starting with Gemini 3 Pro
- Paid plans are currently for eligible individual Google Accounts; users must be 18+

**** [Usage Limits](https://jules.google/docs/usage-limits/) | [Google AI Plans](https://one.google.com/about/google-ai-plans/)

---

### [SuperMaven](https://supermaven.com/)

> **Supermaven Pro: $10/month**
- 1 million-token context window and $5/month in Supermaven Chat credits
- Fast suggestions and large-codebase support
- 30-day free trial
- Team: $10/user/month with centralized management and billing

**** [Pricing](https://supermaven.com/pricing)

Know better pricing or limits? Share a link in an issue or PR to help keep this updated. See CONTRIBUTING.md for guidelines.

---

## 4. Tools with Free Access to Basic Models
__(unspecified/basic models)__

### [Bolt.new](https://bolt.new/)

> **Free includes a 300K token daily limit and 1M token monthly limit**
- Pro starts at $25/month with 10M tokens/month; Teams starts at $30/member/month
- Paid tokens roll over for one additional month while the subscription remains active

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Lovable pricing is now credit-based**
- Free includes 5 daily build credits (up to 30/month), 20 monthly Cloud credits, and 4 monthly AI credits
- Credits and grants have different expiry rules; check the official pricing page for current plan details

**** [Pricing](https://lovable.dev/pricing)

---

### [v0.dev](https://v0.dev/)

> **Free includes $5 in monthly credits and a 7-message/day limit**
- Plus is $30/user/month with $30 monthly credits; Business is $100/user/month
- Usage is metered by input/output tokens converted to credits

**** [Pricing](https://api2.v0.dev/pricing)

---

### [Codeium](https://codeium.com/)

> **Codeium current pricing unresolved**
- The current accessible official page does not expose a stable quota/price table
- Old exact values are not presented as current
- Check the linked first-party pricing or documentation page before relying on a limit

**** [Pricing](https://codeium.com/pricing) | [Documentation](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Tabnine current paid plans**
- Code Assistant: $39/user/month on annual billing; Agentic Platform: $59/user/month on annual billing
- No free tier is advertised on the current pricing page
- On-prem/cloud own-LLM use is unlimited by Tabnine; Tabnine-provided LLM access adds provider cost plus 5% handling

**** [Pricing](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **JetBrains AI Free**
- 3 AI Credits per 30 days
- 30-day AI Pro trial may be available depending on IDE/license
- BYOK and local models can be used without a JetBrains AI subscription
- Cloud-model features consume AI Credits

**** [AI Features](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

> **Supermaven Free tier**
- Fast code suggestions and support for large codebases
- 7-day data retention limit
- The 1 million-token context window and $5/month chat credits are Pro features
- The current pricing page lists Free at $0/month

**** [Pricing](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

> **Free open-source extension with flexible model support**
- Free VS Code and JetBrains extension
- Full support for local models via Ollama, LM Studio
- Solo tier: Private/team/public visibility options
- Supports 200+ models (requires your own API keys for cloud models)
- Community hub for custom AI assistants
- No vendor lock-in or usage limits for local models

**** [GitHub](https://github.com/continuedev/continue) | [Model Hub](https://hub.continue.dev/explore/models)

Know the official limits or models? Share a link in an issue or PR to update the information. See CONTRIBUTING.md for guidelines.

---

## 5. Local Models


Running open-weight frontier models locally provides unlimited coding assistance without API costs or usage limits. Popular tools for local deployment include **[Cline](https://cline.bot/)** (VS Code extension with Plan/Act modes and MCP support), **[Aider](https://aider.chat/)** (command-line assistant with built-in Git integration), and **[Continue.dev](https://www.continue.dev/)** (open-source VS Code extension supporting 200+ models). All work seamlessly with **[Ollama](https://ollama.com/)** to run frontier models like Devstral (24B parameters, optimized for agentic coding), Qwen3-Coder, DeepSeek Coder V2, Codestral, and GLM-4.5.

**Note**: Frontier models require substantial RAM/VRAM. In particular, for Qwen3‑Coder‑480B the Ollama‑friendly GGUF is ~150GB, and practical local inference can require ~150GB of unified memory (RAM+VRAM), which makes it hard on typical laptops; the 30B quant commonly needs ~18GB. See the Unsloth Qwen3‑Coder local guide for details ([docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) and Simon Willison's article on [running GLM‑4.5 AIR on his laptop to build Space Invaders](https://simonwillison.net/2025/Jul/29/space-invaders/) for a practical example.

---

## Comparison Notes

- **Goal**: Compare AI coding tools by access to pro-grade models and free-tier terms as stated by first-party sources on September 15, 2026.
- **What qualifies a model as "pro-grade"?** The list uses reported SWE-bench Verified results as an orientation only. Scores from parallel, interactive and single-run harnesses are not directly comparable; verify the original evaluation before treating one model as better than another.
- **Different limit types**: Requests, tokens, credits, chats, completions and tasks are different units; they must not be converted into a generosity ranking.
- **Verification gaps**: Dynamic pages, redirects and pages without current quota values are marked unresolved instead of carrying unsupported historical numbers.
- **Real-world usage**: Actual consumption varies with coding style, task complexity, context size and tool implementation.

---

## Related Resources

- [Coding with AI](https://coding-with-ai.dev/) - Practical techniques and resources for coding with LLMs
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Comprehensive list of free LLM APIs for building custom integrations

---

最后更新: 2025年12月5日 • 欢迎 PR/issues

**语言：** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md) • [Türkçe](README-tr.md)

# AI编程工具：专业级模型真正免费的地方 

许多AI编程工具声称"免费"，但专业级模型的访问权限通常很快用完，然后会被降级。每个工具的限制（积分、令牌、请求）不同，难以比较。本列表将它们并列展示，告诉你实际能免费获得什么。

## TL;DR — 专业级AI编程免费层
（限制更高的工具排在前面）

| 工具 | 专业级模型 | 免费层限制 | 信用卡 |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen3-Coder-480B | 每天2,000次请求 | 否 |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Claude Sonnet 4 | 每天5M令牌（beta） | 否 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Gemini 3 Pro, Gemini 2.5 Pro | Gemini 3 Pro（候补/付费），每天100次请求 Gemini 2.5 Pro | 否 |
| [Cursor](https://cursor.com/) | GPT-5.1-Codex-Max | 免费至2025年12月11日（77.9% SWE-bench） | 否 |
| [Kilo Code](https://kilocode.ai/) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | 最多$25注册积分（一次性） | 是 |
| [Warp](https://warp.dev/) | GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro | 每月150积分（前2个月），之后75/月 | 否 |
| [Trae](https://trae.ai/) | Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro | 每月10次快速 + 50次慢速请求 | 否 |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Claude Sonnet 4 | 每月50次agent请求 | 是 |
| [GitHub Copilot](https://github.com/features/copilot/plans) | GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1 | 每月50次聊天 + 2,000次补全 | 否 |
| [Windsurf](https://windsurf.com/) | OpenAI, Anthropic, Google, xAI | 每月25积分 | 是 |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 每天15个任务 | 否 |
| [AWS Kiro](https://kiro.dev/) | Claude 4 Sonnet, Claude 3.7 Sonnet | 每月50积分 | 否 |
| [Qoder](https://qoder.com/) | Qwen3-Coder-480B, Claude, GPT, Gemini | 免费层 + 2周Pro试用（1,000积分） | 否 |

### 合格的专业级模型
只有在 SWE-bench Verified 上得分 >60% 的模型才算专业级。当前列表：

| 模型 | SWE-bench Verified | 提供商 |
|-------|-------------------|----------|
| Claude Opus 4.5 | 80.9% | Anthropic |
| GPT-5.1-Codex-Max | 77.9% | OpenAI |
| Claude Sonnet 4.5 | 77.2%（并行 82.0%） | Anthropic |
| Gemini 3 Pro | 76.2% | Google |
| GPT-5 | 74.9% | OpenAI |
| Claude Opus 4.1 | 74.5% | Anthropic |
| Claude Sonnet 4 | 72.7%（并行 80.2%） | Anthropic |
| GPT-5 mini | 71.0% | OpenAI |
| Qwen3-Coder-480B | 69.6%（交互）/ 67.0%（单次） | Alibaba |
| Gemini 2.5 Pro | 63.2% | Google |

### 贡献

如果发现错误、缺少来源，或有最新配额/模型信息，请提交 issue 或 PR 并附上来源。欢迎新增工具！详见 CONTRIBUTING.md。

### 免责声明

与任何厂商无关。所有商标归其所有者。信息仅供研究；不保证准确；限额/价格可能随时变化。

## 目录

- [1. 提供专业级模型免费访问的AI编程工具](#1-提供专业级模型免费访问的ai编程工具)
- [2. AI编程工具的API提供商](#2-ai编程工具的api提供商)
- [3. 提供专业级模型付费层的工具](#3-提供专业级模型付费层的工具)
- [4. 提供基本模型免费访问的工具](#4-提供基本模型免费访问的工具)
- [5. 本地模型](#5-本地模型)
- [比较说明](#比较说明)
- [相关资源](#相关资源)

## 1. 提供专业级模型免费访问的AI编程工具
（从最慷慨到最不慷慨排序）

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Qwen3-Coder-480B 访问**
- 每天2,000请求免费层（Qwen OAuth）
- 60请求/分钟速率限制
- 命令行AI工作流工具（改编自Gemini CLI）
- 一键浏览器认证
- 无需信用卡

**** [GitHub](https://github.com/QwenLM/qwen-code) | [文档](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Beta 期间的 Claude Sonnet 4 访问**
- 免费层 5M 令牌/天（首日20M）
- Claude Sonnet 4 模型（测试确认）
- Beta 期间无需信用卡
- 令牌限制在 UTC 午夜重置
- 注意：升级 Jira Standard/Premium/Enterprise 可得 20M 令牌/天

**** [文档](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [令牌限制](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini 3 Pro 和 Gemini 2.5 Pro 访问**
- Gemini 3 Pro 于 2025/12/4 向 Google AI Ultra 订阅和付费 API 用户开放
- Gemini 3 Pro：76.2% SWE-bench Verified——Google 最佳编码模型
- Gemini 2.5 Pro 免费层备用：100 请求/天
- Gemini 2.5 Flash：250 请求/天
- 免费层无需信用卡
- Google AI Pro、Gemini Code Assist 标准和免费用户需候补
- 在 `/settings` → Preview features → true 启用

**** [速率限制](https://ai.google.dev/gemini-api/docs/rate-limits) | [定价](https://ai.google.dev/gemini-api/docs/pricing) | [Gemini 3 Pro 公告](https://developers.googleblog.com/en/5-things-to-try-with-gemini-3-pro-in-gemini-cli/)

---

### [Kilo Code](https://kilocode.ai/)

> **Claude Opus/Sonnet、Gemini 2.5 Pro、GPT-4.1 访问**
- 最多 $25 注册奖励（一次性）
- 开源 VS Code 扩展
- 按用量付费，无额外加价
- 领取奖励需信用卡
- 支持自有 API Key

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [文档](https://kilocode.ai/docs/) | [定价](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **GPT‑5、Claude Opus 4.1、Claude Sonnet 4、Gemini 2.5 Pro 访问**
- 每月 150 AI 积分（前 2 个月），之后 75 积分/月
- 多家供应商（OpenAI GPT‑5、Claude Opus 4.1、Claude Sonnet 4、Gemini 2.5 Pro）
- 基础注册无需信用卡
- 2025/10/30 公布新价格：单一 Build 方案 ($20/月) 含 1,500 积分

**** [定价](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Claude Sonnet 4 访问**
- 每月 50 次 agent 请求（多轮）
- 最新 Claude 模型（AWS 托管）
- 需要信用卡
- 需升级 Pro 才能继续
- 永久免费层

**** [定价](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Agent 模式（GPT‑4.1、Claude Opus 3.5、Gemini 2.0 Flash、Grok Code Fast 1）**
- 每月 50 次聊天 + 2,000 次补全
- Agent 模式支持自主多步编码
- 多家供应商（GPT-4.1、Claude Opus 3.5、Gemini 2.0 Flash、Grok Code Fast 1）
- 无需信用卡
- 配额后仅基本功能

**** [计划详情](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Agent 模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Claude 4 Sonnet (Beta)、Claude 3.7 Sonnet、Claude 3.5 Sonnet、GPT‑4.1、GPT‑4o、Gemini 2.5 Pro 访问**
- 每月 10 次快速 + 50 次慢速（高级模型）
- 每月 1,000 次慢速（进阶模型）
- 每月 5,000 次自动补全
- 基于 VS Code 的 IDE，内置 AI
- 多种高级模型，包括 Claude 4 Sonnet (Beta)、Claude 3.7 Sonnet、GPT‑4.1
- 免费层无需信用卡
- Pro 方案：$10/月（600 快速 + 慢速不限）

**** [定价](https://trae.ai/pricing) | [文档](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **OpenAI、Anthropic、Google、xAI 模型访问**
- 每月 25 个提示积分
- 多个提供商（OpenAI、Claude、Gemini、xAI）
- 需要信用卡
- 可购买额外积分

**** [定价](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Gemini 2.5 Pro 访问**
- 免费层每天 15 个任务
- 3 个并发任务
- Gemini 2.5 Pro 模型
- 需要 Gmail 账户（18+）
- 任务限制按 24 小时滚动重置
- 无需信用卡
- Pro 层（$19.99/月）：每天 100 个任务（5x）

**** [使用限制](https://jules.google/docs/usage-limits/) | [文档](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **Claude 4 Sonnet, Claude 3.7 Sonnet 访问**
- 每月 50 积分（免费层）
- Claude 4 Sonnet 和 Claude 3.7 Sonnet（AWS 托管）
- 无需信用卡
- 14 天欢迎奖励：500 积分
- 付费层：Pro ($20/月 - 1,000 积分)、Pro+ ($40/月 - 2,000 积分)、Power ($200/月 - 10,000 积分)

**** [定价](https://kiro.dev/pricing/) | [介绍博客](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Qwen3-Coder-480B、Claude、GPT、Gemini 模型**
- 免费层：无限补全/编辑 + 有限聊天/agent 请求 + 2 周 Pro 试用（1,000 积分）
- 阿里巴巴出品的 AI IDE
- 适用于 Windows 和 macOS
- 主要使用 Qwen3-Coder-480B（阿里旗舰编码模型）
- 也支持 Claude、GPT-4、Gemini
- Agent 模式和 Quest 模式用于自主编码
- 免费层无需信用卡
- 付费层：Pro ($20/月 - 2,000 积分), Pro+ ($60/月 - 6,000 积分)

**** [官网](https://qoder.com/) | [定价](https://qoder.com/pricing)

限制变化很快。如果你看到错误、更新的配额/模型，或想添加新工具，请开 issue 或 PR，并附来源。

---

## 2. AI编程工具的API提供商
（从最慷慨到最不慷慨排序）

这些服务提供编程优化模型的API访问，集成于Cursor、Continue.dev、Cline等流行AI编程工具中。它们不是独立工具，而是现有工具的AI后端。

### [OpenRouter](https://openrouter.ai/)

> **通过 OpenRouter 访问 Qwen3-Coder-480B**
- 免费层 50 请求/天（购买 $10+ 积分后 1,000/天）
- 额外免费模型：Qwen3-30B-A3B、Qwen3-235B-A22B、Gemini Flash
- OpenAI 兼容 API，适用于主流 IDE
- 免费模型无需信用卡
- 免费层 20 请求/分钟
- 适配 Continue.dev、Cline、Cursor 等

**** [免费模型](https://openrouter.ai/models/?q=free) | [Qwen3-Coder API](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **Qwen3-235B 和 Llama 3.1 访问**
- 免费层：每天 100 万令牌
- 无需信用卡
- 限速：30 请求/分钟，8,192 token 上下文
- 模型：Qwen3-235B、Llama 3.1 70B（注意：Qwen3-Coder-480B 于 2025/11/5 下线）
- OpenAI 兼容（可用于 Cursor、Continue.dev、Cline、RooCode 等）
- 超快推理：2,000 token/秒（约 40 倍于常规）
- **付费层：** Developer ($10+ 自助)，Enterprise（定制）

**** [定价](https://www.cerebras.ai/pricing) | [API 文档](https://inference-docs.cerebras.ai/) | [集成指南](https://inference-docs.cerebras.ai/integrations/)

---

## 3. 提供专业级模型付费层的工具


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Jira Standard ($7.53/用户/月)：** 20M 令牌/天
- **Jira Premium ($15.25/用户/月)：** 20M 令牌/天
- **Jira Enterprise（定制）：** 20M 令牌/天
- 相比免费层提升 4 倍（5M → 20M 令牌/天）
- 与免费层同款 Claude 模型
- 令牌上限在 UTC 午夜重置

**** [文档](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [令牌限制](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira 定价](https://www.atlassian.com/software/jira/pricing)

---

### [Claude Code](https://www.anthropic.com/claude-code)

> **Pro ($20/月 或 $17/月 年付)：** Sonnet 4，使用量高于免费层
- **Max 5x ($100/月)：** ~225 消息/5 小时 — 每周 140–280 小时 Sonnet 4 + 15–35 小时 Opus 4.5
- **Max 20x ($200/月)：** ~900 消息/5 小时 — 每周 240–480 小时 Sonnet 4 + 24–40 小时 Opus 4.5
- 扩展思考模式："think" (~4K)、"megathink" (~10K)、"ultrathink" (~32K)
- Ultrathink 适合复杂重构、架构与深度调试
- Opus 4.5 资源消耗约 Sonnet 4 的 5 倍
- 使用量按周重置，5 小时滚动窗口
- 支持 Opus 4.5、Sonnet 4.5、Haiku 4.5

**** [定价](https://www.anthropic.com/pricing) | [Claude Code 指南](https://docs.anthropic.com/en/docs/claude-code)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Pro ($19/月)：** 提升 agent 请求配额
- 使用可能因地区/模式调整

**** [定价](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Build ($20/月)：** 每月 1,500 AI 积分
- 可充值积分（最高便宜 50%，有效期 12 个月）
- 支持 BYOK（自带 API Key）
- 2025/10/30 起新客生效
- 现有订阅 2025/12/1 后续约转入
- 企业版：定制定价

**** [定价](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Pro ($10/月)：** 300 次高级请求 + 无限补全/月
- **Pro+ ($39/月)：** 1,500 次高级请求 + 无限补全/月
- **Business ($19/用户/月)：** 300 次高级请求 + 无限补全/用户/月
- **Enterprise ($39/用户/月)：** 1,000 次高级请求 + 无限补全/用户/月
- **GPT-5.1-Codex-Max** 2025/12/4 公测：Pro、Pro+、Business、Enterprise 可用
- 支持多个模型（GPT-5.1-Codex-Max、GPT-4.1、Claude Opus 3.5、Gemini 2.0 Flash、Grok Code Fast 1）
- 超额计费 $0.04/请求

**** [计划详情](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [GPT-5.1-Codex-Max 预览](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Pro ($10/月)：** 600 次快速 + 无限慢速（高级模型）
- 进阶模型慢速不限
- 无速率限制，访问更快
- 额外包：$3-$12 购买更多快速请求
- 高级模型：Claude 4 Sonnet (Beta)、Claude 3.7 Sonnet、Claude 3.5 Sonnet、Gemini 2.5 Pro、GPT‑4.1、GPT‑4o
- 基于 VS Code 的 IDE，完整 AI 集成
- 首月 $3

**** [定价](https://trae.ai/pricing) | [文档](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Pro ($15/月)：** 每月 500 个提示积分
- **Teams ($30/用户/月)：** 500 积分/用户/月
- **Enterprise ($60+/用户/月)：** 1,000 积分/用户/月

**** [定价](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Pro ($25/月)：** 每月 150 积分（每日 5 积分）
- **Teams ($30/月)：** 更高限额（未公布）

**** [消息限额](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

> **$20/月：** 每月 10M 令牌
- **$200/月：** 每月 120M 令牌

**** [令牌文档](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Hobby（免费）：** 限量 Agent 请求 + 限量 Tab 补全 + 1 周 Pro 试用
- **Pro ($20/月 或 $16/月 年付)：** 扩展 Agent 限额 + Tab 补全无限 + 后台 Agents + 最大上下文窗口
- **Pro+ ($60/月)：** 所有 OpenAI、Claude、Gemini 模型使用量 3 倍
- **Ultra ($200/月)：** 所有模型使用量 20 倍 + 新功能优先
- **Teams ($40/用户/月)：** Pro 功能 + 集中计费 + 使用分析 + SAML/OIDC SSO
- **Enterprise（定制）：** Teams 全部 + 共享额度 + SCIM + AI 代码跟踪 API + 审计日志
- **GPT-5.1-Codex-Max 对所有用户免费至 2025/12/11**（77.9% SWE-bench）
- 一周 Pro 试用（免费层）
- 免费层改为按令牌计量（不按请求）
- 免费模型：Cursor Small、Deepseek v3、Gemini 2.5 Flash、GPT-4o mini（500/天）、Grok 3 Mini Beta
- 付费层：访问 OpenAI、Claude、Gemini 模型，包括 GPT-5.1-Codex-Max
- 注意：Claude 模型于 ~2025/06 从免费层移除
- AI 驱动的自主编码编辑器

**** [定价](https://cursor.com/en/pricing) | [GPT-5.1-Codex-Max 公告](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **ChatGPT Plus ($20/月) 免费使用：** 30–150 条/5 小时编码消息
- **ChatGPT Pro ($200/月)：** 300–1,500 条/5 小时——最高额度
- **按量计费 API：** GPT-5.1-Codex-Max $1.25/$10 每百万 Token（输入/输出）
- **免费 OSS 模式：** 仅开源模型（--oss）
- **GPT-5.1-Codex-Max**（2025/11/19）：77.9% SWE-bench——默认模型
- 首个支持“compaction”的模型，可多百万 Token 会话（24h+任务）
- 比之前 GPT-5.1-Codex 少 30% 思考 Token
- 也可在 GitHub Copilot（Pro、Pro+、Business、Enterprise）使用
- 支持 Windows
- 跨平台：macOS 12+，Ubuntu 20.04+，Windows 11 (WSL2)

**** [GitHub 仓库](https://github.com/openai/codex) | [GPT-5.1-Codex-Max 公告](https://openai.com/index/gpt-5-1-codex-max/)

---

### [Codeium](https://codeium.com/)

> **Pro ($10/月)：** 高级上下文的无限使用
- 访问 Claude 3.5 Sonnet、GPT-4o
- 增强上下文窗口与个性化
- **Teams ($12/用户/月)：** Pro 功能 + 团队管理
- **Enterprise（定制）：** 本地部署，自定义模型

**** [定价](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Pro ($12/月)：** 增强的 AI 补全和聊天
- **Enterprise ($39/用户/月)：** 多 LLM，本地部署
- 模型：Claude 3.5 Sonnet、GPT-4o、Llama 3.3 70B、自研
- 支持 600+ 编程语言
- 本地/隔离部署
- 支持自有微调模型

**** [定价](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **AI Pro ($15/月)：** 更高云配额 + 本地模型不限
- **AI Ultimate ($25/月)：** 最高云配额 + 高级功能
- 免费层：无限代码补全 + 本地模型 + 有限云配额
- 含 30 天 Pro 试用
- All Products Pack 包含 AI Pro
- 可通过 Ollama/LM Studio 使用本地模型

**** [AI 定价](https://www.jetbrains.com/ai-ides/buy/)

---

### [Jules](https://jules.google/)

> **Pro ($19.99/月, Google AI Pro)：** 每日 100 个任务
- 比免费层高 5 倍（15 → 100 任务/天）
- 并发 5 倍（3 → 15）
- 更高访问最新模型
- **Ultra (Google AI Ultra)：** 每日 300 个任务
- 比免费层高 20 倍
- 60 个并发任务
- 最新模型优先
- 需要 Gmail 账户（18+）

**** [使用限制](https://jules.google/docs/usage-limits/) | [Google AI 方案](https://one.google.com/about/google-ai-plans/)

---

### [SuperMaven](https://supermaven.com/)

> **Pro ($10/月)：** 1M Token 上下文窗口 + 聊天积分
- 替代：$99/年
- 聊天：GPT-4o、Claude 3.5 Sonnet、GPT-4
- **Team ($10/用户/月)：** Pro 功能 + 团队管理
- 注：2024/11 与 Cursor IDE 合并

**** [定价](https://supermaven.com/pricing)

了解更好的价格或限额？请在 issue/PR 中分享链接以便更新。详见 CONTRIBUTING.md。

---

## 4. 提供基本模型免费访问的工具
（未指明/基础模型）

### [Bolt.new](https://bolt.new/)

> **未指明的模型**
- 每月 100 万令牌上限
- 具体模型未公开
- 需要信用卡

**** [令牌文档](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **未指明的模型**
- 每天 5 积分，最多 30/月（免费）
- 模型未公开列出
- 需要信用卡

**** [消息限额](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

> **专有（非前沿）模型**
- GPT-5 访问需 v0 Premium
- $5 信用/月上限
- 使用专有模型，路由可变
- 需要信用卡

**** [定价更新博客](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

> **基础 AI 编程辅助无限免费**
- 个人版：永久免费，代码补全/AI聊天/命令不限
- 支持 70+ 语言
- IDE 集成：VS Code、JetBrains、Vim/Neovim、Jupyter
- 无需信用卡
- 上下文感知有限（付费层扩展）
- 仅基础模型（Llama 3.1 70B），专业模型需订阅

**** [定价](https://codeium.com/pricing) | [文档](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **免费层，功能有限**
- 基础 AI 补全和聊天（有限）
- 支持本地处理
- 免费层上下文高度受限
- 性能降低以节省资源
- 支持 600+ 编程语言

**** [定价](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **IDE 内置免费 AI 层**
- 代码补全无限，支持本地模型
- 云端功能配额有限
- 含 30 天 AI Pro 试用
- 本地模型可用于聊天、代码生成、提交信息

**** [AI 功能](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

> **免费层基础功能**
- 基础代码建议
- 7 天数据保留
- 注册需信用卡
- 1M Token 上下文窗口（免费层罕见）

**** [定价](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

> **免费开源扩展，支持灵活模型**
- 免费 VS Code & JetBrains 扩展
- 完整支持本地模型（Ollama、LM Studio）
- Solo 层：私有/团队/公共可选
- 支持 200+ 模型（云端需自带 API Key）
- 社区 Hub 提供自定义 AI 助手
- 无厂商锁定，本地模型无使用上限

**** [GitHub](https://github.com/continuedev/continue) | [Model Hub](https://hub.continue.dev/explore/models)

知道官方限额或模型吗？请在 issue/PR 中分享链接以便更新。详见 CONTRIBUTING.md。

---

## 5. 本地模型


本地运行开源 Frontier 模型，可无限制编码辅助，无 API 费用。常用工具：**[Cline](https://cline.bot/)**（VS Code 扩展，Plan/Act 模式，MCP 支持）、**[Aider](https://aider.chat/)**（CLI 助手，内置 Git）、**[Continue.dev](https://www.continue.dev/)**（VS Code 扩展，支持 200+ 模型）。它们均可结合 **[Ollama](https://ollama.com/)** 运行 Devstral（24B，面向 Agent 编码）、Qwen3-Coder、DeepSeek Coder V2、Codestral、GLM-4.5。

**注意**：Frontier 模型需要大量内存/显存。Qwen3‑Coder‑480B 的 Ollama GGUF ~150GB，实际推理可能需 ~150GB 统一内存（RAM+VRAM）；30B 量化常需 ~18GB。详见 Unsloth Qwen3‑Coder 本地指南（[docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)）及 Simon Willison 的文章 [在笔记本上运行 GLM‑4.5 AIR 构建 Space Invaders](https://simonwillison.net/2025/Jul/29/space-invaders/)。

---

## 比较说明

- **目标**：按专业模型访问与免费额度比较 AI 编程工具。
- **专业模型标准**：SWE-bench Verified ≥60%。当前：Claude Opus 4.5 (80.9%)，GPT-5.1-Codex-Max (77.9%)，Claude Sonnet 4.5 (77.2%)，Gemini 3 Pro (76.2%)，GPT-5 (74.9%)，Claude Opus 4.1 (74.5%)，Claude Sonnet 4 (72.7%)，GPT-5 mini (71.0%)，Qwen3-Coder-480B (69.6%)，Gemini 2.5 Pro (63.2%)。
- **限额类型各异**：请求、令牌、积分、聊天等，难以直接对比，请查看文档。
- **实际使用**：受编码风格、任务复杂度和工具实现影响巨大。

---

## 相关资源

- [Coding with AI](https://coding-with-ai.dev/) - 实用的 LLM 编码技巧与资源
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - 免费 LLM API 汇总，便于自建集成

---

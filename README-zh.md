最后更新: 2026年9月15日 • 欢迎 PR/issues

**语言：** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md)

# AI编程工具：专业级模型真正免费的地方 

许多AI编程工具声称"免费"，但专业级模型的访问权限通常很快用完，然后会被降级。每个工具的限制（积分、令牌、请求）不同，难以比较。本列表将它们并列展示，告诉你实际能免费获得什么。

## TL;DR — 专业级AI编程免费层
（配额单位不同；顺序仅供参考，不代表等效容量排名）

| 工具 | 专业级模型 | 免费层限制 | 信用卡 |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen 及其他提供商 | Qwen OAuth 免费层已于 2026 年 4 月 15 日停止；请使用 Alibaba ModelStudio 或其他提供商 | 无需 |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Rovo Dev 模型取决于方案 | 付费 Jira 每用户每月每站点 350 积分 | 无需 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Enterprise/付费 API 访问继续；个人用户迁移到 Antigravity CLI | 个人免费/Google AI 访问已于 2026 年 6 月 18 日停止；请迁移到 Antigravity CLI | 无需 |
| [Cursor](https://cursor.com/) | Composer；Agent 受限 | Agent 受限；无限时促销 | 无需 |
| [Kilo Code](https://kilocode.ai/) | 未公布 | 当前值未验证 | 未确认 |
| [Warp](https://warp.dev/) | Warp Agent；BYOK | Free 云端 Agent 有限；10 人以下个人和企业 BYOK 不消耗 Warp 积分 | 未确认 |
| [Trae](https://trae.ai/) | 未公布 | 当前值未验证 | 未确认 |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | 最新 Claude 模型（AWS） | 每月 50 次 Agent 请求 + 1,000 行 Java 代码 | 无需 |
| [GitHub Copilot](https://github.com/features/copilot/plans) | Haiku 4.5、GPT-5 mini 等 | 每月 2,000 次补全 + 50 次聊天；Agent/CLI 有限 | 无需 |
| [Windsurf](https://windsurf.com/) | 未公布 | 当前值未验证 | 未确认 |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 滚动 24 小时内 15 个任务；同时 3 个 | 否 |
| [AWS Kiro](https://kiro.dev/) | Claude Sonnet 4.5 和开源权重 | 每月 50 积分 | 无需 |
| [Qoder](https://qoder.com/) | 未公布 | 当前值未验证 | 未确认 |

### 合格的专业级模型
附有一手来源链接的历史选定数据。测试条件不同，因此这不是当前完整排名。

| 模型 | SWE-bench Verified | 提供商 |
|-------|-------------------|----------|
| [Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) | 80.9% | Anthropic |
| [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) | 77.2% | Anthropic |
| [Qwen3-Coder-480B](https://qwenlm.github.io/blog/qwen3-coder/) | 69.6% | 阿里巴巴 |

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
_（配额单位不同；顺序仅供参考，不代表等效容量排名）_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Qwen OAuth 免费层已于 2026 年 4 月 15 日停止；请使用 Alibaba ModelStudio 或其他提供商**
- Qwen OAuth 免费层已于 2026 年 4 月 15 日停止；请使用 Alibaba ModelStudio 或其他提供商
- 通过身份验证设置支持 Qwen 和其他提供商
- 支持终端、IDE、桌面和 Web 的开源编码 Agent

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Authentication](https://github.com/QwenLM/qwen-code/blob/main/docs/users/configuration/auth.md)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- 与付费 Jira 方案一起免费：每用户每月每站点 350 个 Rovo Dev 积分
- 达到月度积分上限后会停止使用
- 当前计费页面没有说明固定的 CLI 模型
- 免费附加服务无需信用卡

**** [文档](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [令牌限制](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini CLI 面向个人用户迁移到 Antigravity CLI**
- 2026 年 6 月 18 日起 Gemini CLI 停止为个人用户和 Google AI Pro/Ultra 层提供服务
- Antigravity CLI 面向所有人开放，是迁移路径
- Standard/Enterprise 组织访问不变；付费 Gemini API 密钥仍可用
- 原个人 Google 登录每天 1,000 次、每分钟 60 次的额度已停止

**** [Transition announcement](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) | [Documentation](https://ai.google.dev/gemini-api/docs/rate-limits)

---

### [Kilo Code](https://kilocode.ai/)

> **当前价格和限额未验证**
- 可访问的官方页面没有稳定的配额或价格表
- 旧的精确数值不再作为当前信息展示
- 依赖某个限额前请查看链接的官方页面

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [文档](https://kilocode.ai/docs/) | [定价](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Warp Agent 与 BYOK**
- Free 方案：云端 Agent 访问有限，达到上限后 AI 会暂停
- Build 起价 $20/月，含 1,500 积分（$20 的 Agent 用量）
- 10 人以下的个人和企业使用 BYOK/自定义推理不消耗 Warp 积分
- 消耗量取决于模型、上下文和任务复杂度

**** [定价](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Free**
- 永久免费：每月 50 次 Agent 请求和 1,000 行 Java 代码
- IDE 免费限额适用于 Builder ID；IAM 按账号计算
- Builder ID 免费路径无需信用卡；Pro 需要 AWS 计费
- Pro 为 $19/用户/月，提供更高限额

**** [定价](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 每月 2,000 次补全和 50 次聊天请求
- 包含 Copilot CLI 和有限 Agent 使用；Free 的模型选择受限
- 当前方案页列出 Haiku 4.5、GPT-5 mini 等模型
- 无需信用卡

**** [计划详情](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Agent 模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **当前价格和限额未验证**
- 可访问的官方页面没有稳定的配额或价格表
- 旧的精确数值不再作为当前信息展示
- 依赖某个限额前请查看链接的官方页面

**** [定价](https://trae.ai/pricing) | [文档](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **当前价格和限额未验证**
- 可访问的官方页面没有稳定的配额或价格表
- 旧的精确数值不再作为当前信息展示
- 依赖某个限额前请查看链接的官方页面

**** [定价](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Gemini 2.5 Pro 访问**
- 免费：滚动 24 小时内 15 个任务，同时 3 个
- 3 个并发任务
- Gemini 2.5 Pro 模型
- 需要 Gmail 账户（18+）
- 任务限制按 24 小时滚动重置
- 无需信用卡
- Pro 层（$19.99/月）：每天 100 个任务（5x）

**** [使用限制](https://jules.google/docs/usage-limits/) | [文档](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **AWS Kiro Free**
- 永久免费：每月 50 个积分
- 使用社交登录或 Builder ID 可访问 Claude Sonnet 4.5 和开源权重模型（有上限）
- Pro $20/月：1,000；Pro+ $40：2,000；Pro Max $100：5,000；Power $200：10,000 积分
- 付费方案需要信用卡

**** [定价](https://kiro.dev/pricing/) | [介绍博客](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **当前价格和限额未验证**
- 可访问的官方页面没有稳定的配额或价格表
- 旧的精确数值不再作为当前信息展示
- 依赖某个限额前请查看链接的官方页面

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

> **当前价格和限额未验证**
- 可访问的官方页面没有稳定的配额或价格表
- 旧的精确数值不再作为当前信息展示
- 依赖某个限额前请查看链接的官方页面

**** [定价](https://www.cerebras.ai/pricing) | [API 文档](https://inference-docs.cerebras.ai/) | [集成指南](https://inference-docs.cerebras.ai/integrations/)

---

## 3. 提供专业级模型付费层的工具


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- 与付费 Jira 方案一起免费：每用户每月每站点 350 个 Rovo Dev 积分
- 达到月度积分上限后会停止使用
- 当前计费页面没有说明固定的 CLI 模型
- 免费附加服务无需信用卡
- Standard：$20/用户/月，每用户每月 2,000 积分

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

> **Amazon Q Developer Free**
- 永久免费：每月 50 次 Agent 请求和 1,000 行 Java 代码
- IDE 免费限额适用于 Builder ID；IAM 按账号计算
- Builder ID 免费路径无需信用卡；Pro 需要 AWS 计费
- Pro 为 $19/用户/月，提供更高限额

**** [定价](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Warp Agent 与 BYOK**
- Free 方案：云端 Agent 访问有限，达到上限后 AI 会暂停
- Build 起价 $20/月，含 1,500 积分（$20 的 Agent 用量）
- 10 人以下的个人和企业使用 BYOK/自定义推理不消耗 Warp 积分
- 消耗量取决于模型、上下文和任务复杂度

**** [定价](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 每月 2,000 次补全和 50 次聊天请求
- 包含 Copilot CLI 和有限 Agent 使用；Free 的模型选择受限
- 当前方案页列出 Haiku 4.5、GPT-5 mini 等模型
- 无需信用卡

**** [计划详情](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [GPT-5.1-Codex-Max 预览](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **当前价格和限额未验证**
- 可访问的官方页面没有稳定的配额或价格表
- 旧的精确数值不再作为当前信息展示
- 依赖某个限额前请查看链接的官方页面

**** [定价](https://trae.ai/pricing) | [文档](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **当前价格和限额未验证**
- 可访问的官方页面没有稳定的配额或价格表
- 旧的精确数值不再作为当前信息展示
- 依赖某个限额前请查看链接的官方页面

**** [定价](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Lovable 现在采用积分制**
- Free 每日含 5 个构建积分（每月最多 30 个）、每月 20 个 Cloud 积分和 4 个 AI 积分
- 积分和赠送额度的过期规则不同；请查看官方定价页

**** [Pricing](https://lovable.dev/pricing)

---

### [Bolt.new](https://bolt.new/)

> **Free 每天限 300K 令牌、每月限 1M 令牌**
- Pro 起价 $25/月，含每月 10M 令牌；Teams 起价 $30/成员/月
- 付费令牌在订阅有效时可顺延一个月

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Cursor Free 与付费方案**
- Hobby 免费且无需信用卡，Agent 请求有限并可使用 Composer
- Pro $20/月；Pro+ $60；Ultra $200；Teams Standard $40/用户/月
- GPT-5.1-Codex-Max 截至 2025/12/11 免费的促销已结束并删除
- 用量和模型取决于方案

**** [定价](https://cursor.com/en/pricing) | [GPT-5.1-Codex-Max 公告](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Codex 方案与 API 计费**
- Codex 包含在 Free（$0）、Go（$8/月）、Plus（$20/月）、Pro（$100/月起）、Business（年付 $20/用户/月或月付 $25）、Edu 和 Enterprise 中
- API 密钥按模型另行计费；本地和云端使用共享方案额度
- 限额随任务复杂度变化；请查看官方定价页

**** [Pricing](https://developers.openai.com/codex/pricing/) | [GitHub](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

> **当前价格和限额未验证**
- 可访问的官方页面没有稳定的配额或价格表
- 旧的精确数值不再作为当前信息展示
- 依赖某个限额前请查看链接的官方页面

**** [定价](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Tabnine 当前付费方案**
- Code Assistant：年付 $39/用户/月；Agentic Platform：年付 $59/用户/月
- 当前定价页未宣传免费层
- 自有 LLM 的本地/云端使用由 Tabnine 不限量；Tabnine LLM 另收提供商价格加 5% 手续费

**** [Pricing](https://www.tabnine.com/pricing/)

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
- Google AI Pro 的 Jules Pro：滚动 24 小时内 100 个任务，同时 15 个
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

> **Free 每天限 300K 令牌、每月限 1M 令牌**
- Pro 起价 $25/月，含每月 10M 令牌；Teams 起价 $30/成员/月
- 付费令牌在订阅有效时可顺延一个月

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Lovable 现在采用积分制**
- Free 每日含 5 个构建积分（每月最多 30 个）、每月 20 个 Cloud 积分和 4 个 AI 积分
- 积分和赠送额度的过期规则不同；请查看官方定价页

**** [Pricing](https://lovable.dev/pricing)

---

### [v0.dev](https://v0.dev/)

> **Free 每月含 $5 额度和每天 7 条消息**
- Plus 为 $30/用户/月，含 $30 额度；Business 为 $100/用户/月
- 使用量按输入/输出令牌计量并转换为积分

**** [Pricing](https://api2.v0.dev/pricing)

---

### [Codeium](https://codeium.com/)

> **当前价格和限额未验证**
- 可访问的官方页面没有稳定的配额或价格表
- 旧的精确数值不再作为当前信息展示
- 依赖某个限额前请查看链接的官方页面

**** [定价](https://codeium.com/pricing) | [文档](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Tabnine 当前付费方案**
- Code Assistant：年付 $39/用户/月；Agentic Platform：年付 $59/用户/月
- 当前定价页未宣传免费层
- 自有 LLM 的本地/云端使用由 Tabnine 不限量；Tabnine LLM 另收提供商价格加 5% 手续费

**** [Pricing](https://www.tabnine.com/pricing/)

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
- **限额类型各异**：请求、令牌、积分、聊天等，难以直接对比，请查看文档。
- **实际使用**：受编码风格、任务复杂度和工具实现影响巨大。
- 可访问的官方页面没有稳定的配额或价格表
- 可访问的官方页面没有稳定的配额或价格表
- **可比性：** SWE-bench 结果来自不同测试条件；并行、交互和单次运行不可直接比较。积分、令牌、请求、聊天和任务不能换算成慷慨程度排名。

---

## 相关资源

- [Coding with AI](https://coding-with-ai.dev/) - 实用的 LLM 编码技巧与资源
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - 免费 LLM API 汇总，便于自建集成

---

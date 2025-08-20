> 🤖 **机器翻译声明**
> 此页面由Claude AI自动从英文翻译而来。
> 为确保准确性，请参考[英文原版](README.md)。

最后更新：2025年8月19日 • 欢迎PR/issues • ⭐ 收藏以便稍后查看

# AI编程工具：专业级模型真正免费的地方

许多AI编程工具声称"免费"，但专业级模型的访问权限通常很快用完，然后你就被降级了。每个工具使用不同的限制（积分、令牌、请求），因此公平比较很困难。这个列表将它们并排比较，显示**你实际上免费获得多少小时的专业级LLM编程时间**。

## TL;DR — 专业级编程免费层排名
_（从最慷慨到最不慷慨排序；时间估算使用下面的[方法论](#方法论--假设)）_

| 工具 | 专业级模型 | 免费层限制 | 大致免费编程时间 | 需要信用卡 |
|------|------------|------------|------------------|-----------|
| [Qwen Code](#qwen-code) | Qwen3-Coder-480B | 2,000 请求/天 | ~33小时/天 (~1000小时/月) | 否 |
| [Rovo Dev CLI](#rovo-dev-cli) | Claude Sonnet 4 | 5M 令牌/天 (beta) | ~20小时/天 (~600小时/月) | 否 |
| [Gemini CLI](#gemini-cli) | Gemini 2.5 Pro | 100 请求/天 | ~1.7小时/天 (~50小时/月) | 否 |
| [Kilo Code](#kilo-code) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | $20 注册积分 (一次性) | ~3小时总计 | 是 |
| [Warp](#warp) | Claude, OpenAI, Gemini | 150 请求/月 | ~2.5小时/月 | 否 |
| [Amazon Q Developer](#amazon-q-developer) | Claude Sonnet 4 | 50 智能体聊天/月 | ~0.8小时/月 | 是 |
| [GitHub Copilot](#github-copilot) | GPT‑4o, Claude 3.5 Sonnet, Gemini 2.0 Flash | 50 聊天 + 2,000 补全/月 | ~0.8小时/月 (智能体) | 否 |
| [Windsurf](#windsurf) | OpenAI, Anthropic, Google, xAI | 25 积分/月 | ~0.4小时/月 | 是 |
| [AWS Kiro](#aws-kiro) | Claude Sonnet 4 / 3.7 | 每日限制 (未公开) | 未知 | 否 (预览) |

## 这些估算有多准确？

这些时间估算基于计算，但**实际使用因编程风格和任务复杂度而异**。通过[分享你的实际编程小时数 →](https://free-ai-usage.vercel.app/)帮助使这个资源更准确

### 合格的专业级模型
只有在SWE-bench Verified上达到>60%的模型才有资格作为现实世界编程任务的专业级模型。以下是当前列表

| 模型 | SWE-bench Verified | 提供商 |
|------|-------------------|--------|
| GPT-5 | 74.9% | OpenAI |
| Claude Opus 4.1 | 74.5% | Anthropic |
| Claude Sonnet 4 | 72.7% (80.2% 并行) | Anthropic |
| GPT-5 mini | 71.0% | OpenAI |
| Qwen3-Coder-480B | 69.6% (交互式) / 67.0% (单个) | Alibaba |
| Gemini 2.5 Pro | 63.2% | Google |


## 目录

- [1. 提供专业级模型免费访问的AI编程工具](#1-提供专业级模型免费访问的ai编程工具)
- [2. AI编程工具的API提供商](#2-ai编程工具的api提供商)
- [3. 提供专业级模型付费层的工具](#3-提供专业级模型付费层的工具)
- [4. 提供基本模型免费访问的工具](#4-提供基本模型免费访问的工具)
- [5. 本地模型](#5-本地模型)


## 1. 提供专业级模型免费访问的AI编程工具
_（从最慷慨到最不慷慨排序）_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **~33小时/天 (~1000小时/月) 的Qwen3-Coder-480B编程**
- 通过Qwen OAuth每天2,000请求的免费层
- 60请求/分钟速率限制
- 命令行AI工作流工具（改编自Gemini CLI）
- 一键浏览器认证
- 无需信用卡

**链接：** [GitHub](https://github.com/QwenLM/qwen-code) | [文档](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **beta期间~20小时/天 (~600小时/月) 的Claude Sonnet编程**
- 预览期间GPT-5访问，每日配额慷慨
- 5M令牌/天免费层（仅首日20M）
- 基于Claude的模型（Anthropic提供商）
- beta期间无需信用卡
- 令牌限制在UTC午夜重置
- 注意：升级到Jira Standard/Premium/Enterprise可获得20M令牌/天

**链接：** [文档](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [令牌限制](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **~1.7小时/天 (~50小时/月) 的Gemini 2.5 Pro编程**
- 100请求/天限制
- 备用：Gemini 2.5 Flash ~4.2小时/天（250请求/天）
- 无需信用卡
- 仅Google模型
- 免费配额后切换到付费费率

**链接：** [速率限制](https://ai.google.dev/gemini-api/docs/rate-limits) | [定价](https://ai.google.dev/gemini-api/docs/pricing)

---

### [Kilo Code](https://kilocode.ai/)

> **~3小时总计的Claude 4 Sonnet/Opus, Gemini 2.5 Pro, GPT-4.1编程**
- 注册获得$20免费积分
- 开源VS Code扩展
- 模型定价无加价的按使用付费
- 需要信用卡来获得奖励积分
- 支持使用自己的API密钥

**链接：** [GitHub](https://github.com/Kilo-Org/kilocode) | [文档](https://kilocode.ai/docs/)

---

### [Warp](https://warp.dev/)

> **~2.5小时/月 跨Claude Sonnet 4, OpenAI GPT-5, Gemini 2.5 Pro**
- 150请求/月限制
- 多个提供商（Claude、OpenAI、Gemini）
- 基本注册无需信用卡
- 可按使用付费超额

**链接：** [定价](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **~0.8小时/月的Claude Sonnet 4编程**
- 50个智能体聊天/月限制（多轮对话）
- 最新Claude模型（AWS托管）
- 需要信用卡
- 必须升级到Pro才能继续访问
- 永久免费层

**链接：** [定价](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **~0.8小时/月的智能体交互 (GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Flash)**
- 50聊天 + 2,000补全/月限制
- 智能体模式具有自主多步编程
- 多个提供商（GPT-4o、Claude 3.5 Sonnet、Gemini 2.0 Flash）
- 无需信用卡
- 配额后限制为基本功能

**链接：** [计划详情](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [智能体模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Windsurf](https://windsurf.com/)

> **~0.4小时/月 跨OpenAI, Anthropic, Google, xAI模型**
- 25个提示积分/月限制
- 多个提供商（OpenAI、Claude、Gemini、xAI）
- 需要信用卡
- 可以购买附加积分继续使用

**链接：** [定价](https://windsurf.com/pricing)

---

### [AWS Kiro](https://kiro.dev/)

> **未知时长的Claude Sonnet 4 / 3.7编程**
- 每日限制（未公开）
- 仅Claude模型（AWS托管）
- 无需信用卡（预览期）
- 配额耗尽未知（预览期）

**链接：** [介绍博客](https://kiro.dev/blog/introducing-kiro/)

---

> 限制变化很快。如果你看到错误、更新的配额/模型，或想添加新工具，请开issue或PR并附上来源。欢迎新工具贡献！

---

## 2. AI编程工具的API提供商
_（从最慷慨到最不慷慨排序）_

这些服务提供编程优化模型的API访问，与流行的AI编程工具如Cursor、Continue.dev、Cline等集成。它们不提供独立的编程工具，而是为现有工具提供AI后端。

### [OpenRouter](https://openrouter.ai/)

> **~33小时/天 (~1000小时/月) 的Qwen3-Coder编程**
- Qwen3-Coder-480B每天2,000请求免费层
- 额外免费模型：Qwen3-30B-A3B、Qwen3-235B-A22B、Gemini Flash
- 所有主要IDE的OpenAI兼容API
- 免费模型无需信用卡
- 免费层在高流量时速率限制
- 适用于Continue.dev、Cline、Cursor等

**链接：** [免费模型](https://openrouter.ai/models/?q=free) | [Qwen3-Coder API](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **~1.7小时/天 (~50小时/月) 的Qwen3-Coder/Llama 3.1编程**
- 每天100请求免费层
- 模型：Qwen3-Coder-480B（匹配Claude Sonnet 4性能）、Llama 3.1 70B
- OpenAI兼容API（适用于Cursor、Continue.dev、Cline、RooCode等）
- 超快推理：2,000令牌/秒（比典型提供商快40倍）
- 无需信用卡
- **付费层：** Code Pro（$50/月）、Code Max（$200/月）- 无周限制

**链接：** [定价](https://www.cerebras.ai/pricing) | [API文档](https://inference-docs.cerebras.ai/) | [集成指南](https://inference-docs.cerebras.ai/integrations/)

---

## 3. 提供专业级模型付费层的工具

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

**Jira Standard ($7.53/用户/月)：** 20M令牌/天（~80小时/天的Claude Sonnet编程）
**Jira Premium ($15.25/用户/月)：** 20M令牌/天
**Jira Enterprise (自定义)：** 20M令牌/天
- 比免费层增加4倍（5M → 20M令牌/天）
- 与免费层相同的基于Claude的模型
- 令牌限制在UTC午夜重置

**链接：** [文档](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [令牌限制](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira定价](https://www.atlassian.com/software/jira/pricing)

---


### [Claude Code](https://www.anthropic.com/claude-code)

**Pro ($20/月)：** Sonnet 4访问权限
**Max ($100/月)：** Opus 4 + Sonnet 4访问权限
**Max ($200/月)：** 更高的Opus 4 + Sonnet 4限制
- 使用限制每周重置
- 适用5小时滚动窗口限制

**链接：** [定价](https://www.anthropic.com/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

**Pro ($19/月)：** 智能体请求的增加限制
- 使用可能根据地区因素和使用模式进行调整

**链接：** [定价](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

**Pro ($15/月)：** 2,500请求/月
**Turbo ($40/月)：** 10,000请求/月  
**Lightspeed ($200/月)：** 50,000请求/月
- 超额可按使用付费

**链接：** [定价](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

**Pro ($10/月)：** 300聊天 + 无限补全/月
**Pro+ ($39/月)：** 1,500聊天 + 无限补全/月
**Business ($19/用户/月)：** 300聊天 + 无限补全/用户/月
**Enterprise ($39/用户/月)：** 1,000聊天 + 无限补全/用户/月
- 可按$0.04/请求超额计费

**链接：** [计划详情](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot)

---

### [Windsurf](https://windsurf.com/)

**Pro ($15/月)：** 500提示积分/月
**Teams ($30/用户/月)：** 500提示积分/用户/月
**Enterprise ($60+/用户/月)：** 1,000提示积分/用户/月

**链接：** [定价](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

**Pro ($25/月)：** 100消息/月
**Teams ($30/月)：** 更高限制（未公开）

**链接：** [消息限制](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

**$20/月：** 10M令牌/月
**$200/月：** 120M令牌/月

**链接：** [令牌文档](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

**Hobby (免费)：** 仅基本模型的有限智能体请求
**Pro ($20/月)：** 智能体的扩展限制，访问GPT-5、Claude Sonnet 4、Gemini 2.5 Pro
**Ultra ($200/月)：** 所有OpenAI、Claude、Gemini模型20x使用量
**Teams ($40/用户/月)：** Pro功能 + 团队管理
- 提供两周Pro试用
- 免费层需要信用卡

**链接：** [定价](https://cursor.com/en/pricing)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

**ChatGPT Plus免费 ($20/月)：** 编程任务的GPT-5访问权限
**按使用付费：** 使用OpenAI API密钥
**免费OSS模式：** 仅访问开源模型（通过--oss标志）
- 本地运行的轻量级编程智能体
- 带沙盒模式的交互式终端UI
- macOS 12+、Ubuntu 20.04+、Windows 11通过WSL2
- 正在积极开发的实验性项目

**链接：** [GitHub仓库](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

**Pro ($10/月)：** 高级上下文感知的无限使用
- Claude 3.5 Sonnet、GPT-4o访问权限
- 增强的上下文窗口和个性化
**Teams ($12/用户/月)：** Pro功能 + 团队管理
**Enterprise (自定义)：** 本地部署，自定义模型

**链接：** [定价](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

**Pro ($12/月)：** 增强的AI补全和聊天
**Enterprise ($39/用户/月)：** 多个LLM，私有部署
- 模型：Claude 3.5 Sonnet、GPT-4o、Llama 3.3 70B、专有模型
- 支持600+种编程语言
- 本地和空隔部署选项
- 使用自己的微调模型

**链接：** [定价](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**AI Pro ($15/月)：** 增加云配额 + 无限本地模型
**AI Ultimate ($25/月)：** 最大云配额 + 高级功能
- 免费层：无限代码补全 + 本地模型 + 有限云配额
- 包含30天Pro试用
- All Products Pack包含AI Pro
- 通过Ollama/LM Studio的本地模型离线模式

**链接：** [AI定价](https://www.jetbrains.com/ai-ides/buy/)

---

### [SuperMaven](https://supermaven.com/)

**Pro ($10/月)：** 1M令牌上下文窗口 + 聊天积分
- 替代：$99/年
- 与GPT-4o、Claude 3.5 Sonnet、GPT-4的聊天界面
**Team ($10/用户/月)：** Pro功能 + 团队管理
- 注意：2024年11月与Cursor IDE合并

**链接：** [定价](https://supermaven.com/pricing)

---

> 知道更好的价格或限制吗？在issue或PR中分享链接以帮助保持更新。

---

## 4. 提供基本模型免费访问的工具
__（未指定/基本模型）__

### [Bolt.new](https://bolt.new/)

**使用未指定模型~100小时/月**
- 1M令牌/月限制
- 具体模型未公开指定
- 需要信用卡

**链接：** [令牌文档](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

**使用未指定模型~0.5小时/月**
- 5积分/天，30/月上限
- 模型未公开列出
- 需要信用卡

**链接：** [消息限制](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

**使用专有模型（非前沿）的可变时长**
- GPT-5访问需要v0 Premium订阅
- $5积分/月限制
- 使用变化路由的专有模型
- 需要信用卡

**链接：** [更新定价博客](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

**基本AI编程辅助的无限免费使用**
- 个人计划：永远免费，无限代码补全、AI聊天、命令
- 支持70+种编程语言
- IDE集成：VS Code、JetBrains、Vim/Neovim、Jupyter
- 无需信用卡
- 上下文感知有限（付费层中扩展）
- 仅基础模型（Llama 3.1 70B），专业级模型需要订阅

**链接：** [定价](https://codeium.com/pricing) | [文档](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

**功能有限的免费层**
- 基本AI代码补全和聊天（有限）
- 可用本地处理
- 免费层上下文严重受限
- 性能降低以节省资源
- 支持600+种编程语言

**链接：** [定价](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**IDE附带的AI免费层**
- 无限代码补全和本地模型支持
- 云功能有限配额
- 30天AI Pro试用
- 使用本地模型的聊天、代码生成、提交消息

**链接：** [AI功能](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

**基本功能免费层**
- 基本代码建议
- 7天数据保留限制
- 注册需要信用卡
- 1M令牌上下文窗口（免费层令人印象深刻）

**链接：** [定价](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

**具有灵活模型支持的免费开源扩展**
- VS Code和JetBrains免费扩展
- 通过Ollama、LM Studio全面支持本地模型
- Solo层：私人/团队/公共可见性选项
- 支持200+模型（云模型需要自己的API密钥）
- 自定义AI助手社区中心
- 本地模型无供应商锁定或使用限制

**链接：** [GitHub](https://github.com/continuedev/continue) | [模型中心](https://hub.continue.dev/explore/models)

---

> 知道官方限制或模型吗？在issue或PR中分享链接以更新信息。

---

## 5. 本地模型

本地运行开放权重前沿模型提供无限编程辅助，无API成本或使用限制。本地部署的流行工具包括**[Cline](https://cline.bot/)**（具有Plan/Act模式和MCP支持的VS Code扩展）、**[Aider](https://aider.chat/)**（具有内置Git集成的命令行助手）和**[Continue.dev](https://www.continue.dev/)**（支持200+模型的开源VS Code扩展）。所有这些都与**[Ollama](https://ollama.com/)**完美配合，运行如Devstral（24B参数，针对智能体编程优化）、Qwen3-Coder、DeepSeek Coder V2、Codestral和GLM-4.5等前沿模型。

**注意**：前沿模型需要大量RAM/VRAM。特别是对于Qwen3‑Coder‑480B，Ollama友好的GGUF约为~150GB，实际本地推理可能需要约~150GB统一内存（RAM+VRAM），这在典型笔记本电脑上很困难；30B量化通常需要约~18GB。查看Unsloth Qwen3‑Coder本地指南了解详情（[docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)）和Simon Willison关于[在他的笔记本电脑上运行GLM‑4.5 AIR构建太空侵略者](https://simonwillison.net/2025/Jul/29/space-invaders/)的实际示例文章。

---

## 方法论 / 假设

- **目标**：通过访问前沿模型来比较智能体编程系统。
- **什么使模型符合"专业级"资格？** 对于此比较，模型必须在SWE-bench Verified上达到≥60%，证明现实世界软件工程能力。当前合格模型：GPT-5（74.9%）、Claude Opus 4.1（74.5%）、Claude Sonnet 4（72.7%）、GPT-5 mini（71.0%）、Qwen3-Coder-480B（69.6%）和Gemini 2.5 Pro（63.2%）。
- **[1] 请求到小时**：60个请求 ≈ 1小时AI辅助编程（基于现实世界任务模拟）。
- **[2] 令牌到小时**：约25万令牌 ≈ 1小时编程（基于现实世界AI智能体使用数据）。
- **[3] 聊天/积分到小时**：多轮智能体聊天和提示积分假设等同于单个请求用于估算目的。
- 如果您发现错误或缺少来源链接，请开issue或pull request。

---

## 相关资源

- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - 用于构建自定义集成的免费LLM API综合列表

---

## 免责声明
与任何供应商无关联。所有商标属于其所有者。信息仅供研究使用；不保证准确性；限制/定价经常变化。

---
*此翻译由Claude AI创建。如需最新信息，请参考[英文原版](README.md)。*
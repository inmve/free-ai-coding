最終更新: 2025年12月5日 • PRs/issues 歓迎

**言語：** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md)

# AIコーディングツール：プロ級モデルが本当に無料で使える場所 

多くのAIコーディングツールは「無料」を謳いますが、プロ級モデルへのアクセスはすぐ尽きてダウングレードされがちです。各ツールで上限（クレジット、トークン、リクエスト）が異なり、比較が難しい。このリストで並べて、実際に無料で得られるものを示します。

## TL;DR — プロ級AIコーディングの無料枠
（上限が高いツールから）

| ツール | プロ級モデル | 無料枠 | クレカ |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen3-Coder-480B | 1日2,000リクエスト | 不要 |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Claude Sonnet 4 | 1日5Mトークン（ベータ） | 不要 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Gemini 3 Pro, Gemini 2.5 Pro | Gemini 3 Pro（ウェイト/有料）、Gemini 2.5 Pro 100req/日 | 不要 |
| [Cursor](https://cursor.com/) | GPT-5.1-Codex-Max | 2025/12/11まで無料（77.9% SWE-bench） | 不要 |
| [Kilo Code](https://kilocode.ai/) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | 登録クレジット最大$25（1回のみ） | 要 |
| [Warp](https://warp.dev/) | GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro | 月150クレジット（最初の2か月）、以降75/月 | 不要 |
| [Trae](https://trae.ai/) | Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro | 月10高速 + 50低速リクエスト | 不要 |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Claude Sonnet 4 | 月50エージェントリクエスト | 要 |
| [GitHub Copilot](https://github.com/features/copilot/plans) | GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1 | 月50チャット + 2,000補完 | 不要 |
| [Windsurf](https://windsurf.com/) | OpenAI, Anthropic, Google, xAI | 月25クレジット | 要 |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 1日15タスク | 不要 |
| [AWS Kiro](https://kiro.dev/) | Claude 4 Sonnet, Claude 3.7 Sonnet | 月50クレジット | 不要 |
| [Qoder](https://qoder.com/) | Qwen3-Coder-480B, Claude, GPT, Gemini | 無料 + 2週間のProトライアル（1,000クレジット） | 不要 |

### プロ級モデル（SWE-bench Verified >60%）
実務向けと認める基準。現在のリスト：

| モデル | SWE-bench Verified | 提供 |
|-------|-------------------|----------|
| Claude Opus 4.5 | 80.9% | Anthropic |
| GPT-5.1-Codex-Max | 77.9% | OpenAI |
| Claude Sonnet 4.5 | 77.2%（並列で82.0%） | Anthropic |
| Gemini 3 Pro | 76.2% | Google |
| GPT-5 | 74.9% | OpenAI |
| Claude Opus 4.1 | 74.5% | Anthropic |
| Claude Sonnet 4 | 72.7%（並列で80.2%） | Anthropic |
| GPT-5 mini | 71.0% | OpenAI |
| Qwen3-Coder-480B | 69.6%（対話）/ 67.0%（単発） | Alibaba |
| Gemini 2.5 Pro | 63.2% | Google |

### コントリビュート

誤り、ソース不足、最新のクオータ/モデル情報があれば、ソース付きでIssue/PRをお願いします。新規ツールの追加も歓迎！詳細は CONTRIBUTING.md を参照。

### 免責事項

ベンダーとは無関係。商標は各権利者に帰属。情報は研究用で、正確性は保証されず、上限/価格は頻繁に変わる。

## 目次

- [1. プロ級モデルに無料アクセスできるAIコーディングツール](#1-プロ級モデルに無料アクセスできるaiコーディングツール)
- [2. AIコーディングツール向けAPIプロバイダ](#2-aicodingツール向けapiプロバイダ)
- [3. プロ級モデルの有料プランがあるツール](#3-プロ級モデルの有料プランがあるツール)
- [4. 基本モデルに無料アクセスできるツール](#4-基本モデルに無料アクセスできるツール)
- [5. ローカルモデル](#5-ローカルモデル)
- [比較ノート](#比較ノート)
- [関連リソース](#関連リソース)

## 1. プロ級モデルに無料アクセスできるAIコーディングツール
（最も太っ腹→控えめの順）

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Qwen3-Coder-480B へのアクセス**
- 無料枠：1日2,000リクエスト（Qwen OAuth）
- 60リクエスト/分のレートリミット
- Gemini CLIベースのCLIワークフローツール
- ワンクリックのブラウザ認証
- クレカ不要

**** [GitHub](https://github.com/QwenLM/qwen-code) | [ドキュメント](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **ベータ期間の Claude Sonnet 4 アクセス**
- 無料枠：5Mトークン/日（初日20M）
- Claude Sonnet 4 モデル（テスト確認）
- ベータ中クレカ不要
- UTC真夜中にリセット
- 20Mトークン/日には Jira Standard/Premium/Enterprise へアップグレード

**** [ドキュメント](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [トークン上限](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini 3 Pro と Gemini 2.5 Pro へのアクセス**
- Gemini 3 Pro が 2025/12/4 に提供開始（Google AI Ultra 有料/API 有料）
- Gemini 3 Pro: 76.2% SWE-bench Verified — Google の最上位コーディングモデル
- 無料 fallback: Gemini 2.5 Pro 100 req/日
- Gemini 2.5 Flash 250 req/日
- 無料枠はクレカ不要
- Gemini 3 Pro は Google AI Pro / Gemini Code Assist Standard / 無料ユーザーはウェイト
- `/settings` → Preview features → true で有効化

**** [レート制限](https://ai.google.dev/gemini-api/docs/rate-limits) | [価格](https://ai.google.dev/gemini-api/docs/pricing) | [Gemini 3 Pro 発表](https://developers.googleblog.com/en/5-things-to-try-with-gemini-3-pro-in-gemini-cli/)

---

### [Kilo Code](https://kilocode.ai/)

> **Claude Opus/Sonnet, Gemini 2.5 Pro, GPT-4.1 アクセス**
- 最大 $25 の登録ボーナス（1回限り）
- オープンソースの VS Code 拡張
- モデル価格に上乗せなしの従量課金
- ボーナス取得にクレカ必要
- 自前の API キー持ち込み可

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [ドキュメント](https://kilocode.ai/docs/) | [価格](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro アクセス**
- 月150 AIクレジット（最初の2か月）、以降75/月
- 複数プロバイダ（OpenAI GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro）
- 基本登録はクレカ不要
- 2025/10/30 に単一 Build プラン ($20/月, 1,500 クレジット) を発表

**** [価格](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Claude Sonnet 4 アクセス**
- 月50件のエージェントリクエスト（マルチターン）
- 最新の Claude モデル（AWS ホスト）
- クレカ必須
- 継続利用には Pro へアップグレード
- 恒久的な無料枠

**** [価格](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **エージェントモード（GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1）**
- 月50チャット + 2,000補完
- 自律的なマルチステップコーディング
- 複数プロバイダ（GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1）
- クレカ不要
- 枠超過後は基本機能のみ

**** [プラン詳細](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [エージェントモード](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro アクセス**
- プレミアムモデルに高速10 + 低速50/月
- アドバンスドモデルに低速1,000/月
- オートコンプリート5,000/月
- VS CodeベースのIDE + AI
- Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1 など複数プレミアムモデル
- 無料枠はクレカ不要
- Pro: $10/月（高速600 + 低速無制限）

**** [価格](https://trae.ai/pricing) | [ドキュメント](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **OpenAI, Anthropic, Google, xAI モデル**
- 月25プロンプトクレジット
- OpenAI/Claude/Gemini/xAI を含む
- クレカ必須
- 追加クレジット購入可

**** [価格](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Gemini 2.5 Pro アクセス**
- 無料枠：1日15タスク
- 同時3タスク
- モデル：Gemini 2.5 Pro
- Gmail アカウント必須（18+）
- 24時間ローリングでリセット
- クレカ不要
- Pro ($19.99/月): 100タスク/日（5倍）

**** [使用制限](https://jules.google/docs/usage-limits/) | [ドキュメント](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **Claude 4 Sonnet, Claude 3.7 Sonnet へのアクセス**
- 月50クレジット（無料枠）
- Claude 4 Sonnet / Claude 3.7 Sonnet（AWSホスト）
- クレカ不要
- 14日ウェルカムボーナス：500クレジット
- 有料: Pro ($20/月 - 1,000), Pro+ ($40/月 - 2,000), Power ($200/月 - 10,000)

**** [価格](https://kiro.dev/pricing/) | [紹介ブログ](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Qwen3-Coder-480B, Claude, GPT, Gemini モデル**
- 無料: 無制限コンプ/編集 + 限定チャット/エージェント + 2週間 Pro トライアル (1,000)
- Alibaba の AI IDE
- Windows / macOS 対応
- 主に Qwen3-Coder-480B（旗艦コーディングモデル）
- Claude, GPT-4, Gemini もサポート
- Agent モード & Quest モードで自律コーディング
- 無料枠クレカ不要
- 有料: Pro ($20/月 - 2,000), Pro+ ($60/月 - 6,000)

**** [サイト](https://qoder.com/) | [価格](https://qoder.com/pricing)

制限はすぐ変わります。間違いや最新情報、新ツールがあればソース付きで Issue/PR をお願いします。

---

## 2. AIコーディングツール向けAPIプロバイダ
（寛大→控えめの順）

Cursor, Continue.dev, Cline などと連携するコーディング特化モデルの API を提供。単体のコーディングツールではなく既存ツールのバックエンド。

### [OpenRouter](https://openrouter.ai/)

> **OpenRouter 経由で Qwen3-Coder-480B**
- 無料 50 req/日（$10+ クレジット購入で 1,000/日）
- 追加の無料モデル: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- 主要 IDE 向け OpenAI 互換 API
- 無料モデルはクレカ不要
- 無料枠は 20 req/分
- Continue.dev, Cline, Cursor などで動作

**** [無料モデル](https://openrouter.ai/models/?q=free) | [Qwen3-Coder API](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **Qwen3-235B / Llama 3.1 へのアクセス**
- 無料: 1M tokens/日
- クレカ不要
- 30 req/分, コンテキスト 8,192 トークン
- モデル: Qwen3-235B, Llama 3.1 70B（注: Qwen3-Coder-480B は 2025/11/5 廃止）
- OpenAI 互換（Cursor, Continue.dev, Cline, RooCode などで使用可）
- 超高速推論: 2,000 tokens/秒（一般より40倍速）
- **有料:** Developer ($10+ self-serve), Enterprise (カスタム)

**** [価格](https://www.cerebras.ai/pricing) | [APIドキュメント](https://inference-docs.cerebras.ai/) | [統合ガイド](https://inference-docs.cerebras.ai/integrations/)

---

## 3. プロ級モデルの有料プランがあるツール


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Jira Standard ($7.53/ユーザー/月):** 1日20Mトークン
- **Jira Premium ($15.25/ユーザー/月):** 20M/日
- **Jira Enterprise (カスタム):** 20M/日
- 無料枠の4倍（5M→20M/日）
- 無料枠と同じClaude系モデル
- UTC真夜中リセット

**** [ドキュメント](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [トークン上限](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira価格](https://www.atlassian.com/software/jira/pricing)

---

### [Claude Code](https://www.anthropic.com/claude-code)

> **Pro ($20/月 または $17/月 年払い):** Sonnet 4 で無料枠より多く使える
- **Max 5x ($100/月):** ~225メッセージ/5h — 週140–280h Sonnet 4 + 15–35h Opus 4.5
- **Max 20x ($200/月):** ~900メッセージ/5h — 週240–480h Sonnet 4 + 24–40h Opus 4.5
- 思考モード: think (~4K), megathink (~10K), ultrathink (~32K)
- Ultrathinkで大規模リファクタ/設計/デバッグ
- Opus 4.5は Sonnet 4 の約5倍リソース
- 週次リセット（5時間ローリング）
- Opus 4.5, Sonnet 4.5, Haiku 4.5対応

**** [価格](https://www.anthropic.com/pricing) | [Claude Codeガイド](https://docs.anthropic.com/en/docs/claude-code)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Pro ($19/月):** エージェントリクエストの上限アップ
- 地域・利用状況に応じ調整の可能性

**** [価格](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Build ($20/月):** 1,500 AIクレジット/月
- リロードクレジット（旧オーバーレートより最大50%安、12ヶ月繰越）
- BYOKオプションあり
- 新価格は2025/10/30 新規顧客から有効
- 既存月額は2025/12/1以降の更新時に移行
- エンタープライズ：カスタム

**** [価格](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Pro ($10/月):** 高度リクエスト300 + 無制限補完/月
- **Pro+ ($39/月):** 高度1,500 + 無制限補完/月
- **Business ($19/ユーザー/月):** 高度300 + 無制限補完/ユーザー/月
- **Enterprise ($39/ユーザー/月):** 高度1,000 + 無制限補完/ユーザー/月
- **GPT-5.1-Codex-Max** 公開プレビュー（2025/12/4）Pro/Pro+/Business/Enterpriseで利用可
- 複数モデル（GPT-5.1-Codex-Max, GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1）
- 超過は $0.04/リクエスト

**** [プラン詳細](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [GPT-5.1-Codex-Maxプレビュー](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Pro ($10/月):** 高速600 + 低速無制限（プレミアムモデル）
- 進階モデルの低速は無制限
- レート制限なしで高速アクセス
- 追加パック $3-$12 で高速枠を追加
- プレミアム: Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, Gemini 2.5 Pro, GPT‑4.1, GPT‑4o
- VS Code ベースの IDE、フルAI統合
- 初月 $3

**** [価格](https://trae.ai/pricing) | [ドキュメント](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Pro ($15/月):** プロンプト500/月
- **Teams ($30/ユーザー/月):** 500 プロンプト/ユーザー/月
- **Enterprise ($60+/ユーザー/月):** 1,000 プロンプト/ユーザー/月

**** [価格](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Pro ($25/月):** 月150クレジット（1日5）
- **Teams ($30/月):** 上限拡大（非公開）

**** [メッセージ上限](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

> **$20/月:** 月1,000万トークン
- **$200/月:** 月1億2,000万トークン

**** [トークンドキュメント](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Hobby（無料）:** 限定エージェント + 限定Tab補完 + 1週間Proトライアル
- **Pro ($20/月 または $16/月 年払い):** エージェント上限拡大 + 無制限Tab補完 + バックグラウンドAgent + 最大コンテキスト
- **Pro+ ($60/月):** OpenAI/Claude/Gemini すべて 3倍使用
- **Ultra ($200/月):** すべて20倍 + 新機能優先
- **Teams ($40/ユーザー/月):** Pro機能 + 集中課金 + 利用分析 + SAML/OIDC SSO
- **Enterprise (カスタム):** Teams + 共同プール + SCIM + AIコード追跡API + 監査ログ
- **GPT-5.1-Codex-Max が 2025/12/11 まで全ユーザー無料**（77.9% SWE-bench）
- 1週間のProトライアル（無料枠）
- 無料枠はリクエスト単位でなくトークン課金へ移行
- 無料モデル: Cursor Small, Deepseek v3, Gemini 2.5 Flash, GPT-4o mini (500/日), Grok 3 Mini Beta
- 有料枠: OpenAI, Claude, Gemini など GPT-5.1-Codex-Max を含む
- 注: 2025年6月頃に無料枠から Claude モデルが除外
- 自律型コーディング対応のAIコードエディタ

**** [価格](https://cursor.com/en/pricing) | [GPT-5.1-Codex-Max アナウンス](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **ChatGPT Plus ($20/月) で無料:** コーディング用 5時間あたり 30–150 メッセージ
- **ChatGPT Pro ($200/月):** 5時間あたり 300–1,500 メッセージ — 最高枠
- **従量課金 API:** GPT-5.1-Codex-Max $1.25/$10 per 1M tokens (入/出力)
- **無料 OSS モード:** オープンソースモデルのみ (--oss)
- **GPT-5.1-Codex-Max** (2025/11/19): 77.9% SWE-bench — デフォルトモデル
- マルチミリオン・トークンのセッション向け初の “compaction” 対応
- 前世代より思考トークンを30%削減
- GitHub Copilot (Pro/Pro+/Business/Enterprise) でも利用可
- Windows サポートあり
- マルチプラットフォーム：macOS 12+, Ubuntu 20.04+, Windows 11 (WSL2)

**** [GitHub リポジトリ](https://github.com/openai/codex) | [GPT-5.1-Codex-Max アナウンス](https://openai.com/index/gpt-5-1-codex-max/)

---

### [Codeium](https://codeium.com/)

> **Pro ($10/月):** 高度なコンテキスト認識で無制限利用
- Claude 3.5 Sonnet, GPT-4o にアクセス
- 拡張コンテキストウィンドウとパーソナライズ
- **Teams ($12/ユーザー/月):** Pro機能 + チーム管理
- **Enterprise (カスタム):** オンプレ展開・カスタムモデル

**** [価格](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Pro ($12/月):** 高度なAI補完とチャット
- **Enterprise ($39/ユーザー/月):** 複数LLM、プライベート展開
- モデル: Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, 自社モデル
- 600+言語サポート
- オンプレ/エアギャップ展開オプション
- 独自のファインチューニングモデル持ち込み可

**** [価格](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **AI Pro ($15/月):** クラウド枠増 + ローカルモデル無制限
- **AI Ultimate ($25/月):** 最大クラウド枠 + 高度機能
- 無料枠: コード補完無制限 + ローカルモデル + クラウド枠限定
- 30日 Pro 試用付き
- All Products Pack に AI Pro 含む
- Ollama/LM Studio 経由でローカルモデル利用

**** [AI 価格](https://www.jetbrains.com/ai-ides/buy/)

---

### [Jules](https://jules.google/)

> **Pro ($19.99/月, Google AI Pro):** 1日100タスク
- 無料枠の5倍（15→100タスク/日）
- 同時5倍（3→15）
- 最新モデルへのアクセス増
- **Ultra (Google AI Ultra):** 1日300タスク
- 無料枠の20倍
- 60同時タスク
- 最新モデルを優先利用
- Gmail アカウント必須 (18+)

**** [使用制限](https://jules.google/docs/usage-limits/) | [Google AI プラン](https://one.google.com/about/google-ai-plans/)

---

### [SuperMaven](https://supermaven.com/)

> **Pro ($10/月):** 1Mトークンのコンテキスト + チャットクレジット
- 代替: $99/年
- GPT-4o, Claude 3.5 Sonnet, GPT-4 でチャット
- **Team ($10/ユーザー/月):** Pro + チーム管理
- 注: 2024/11 Cursor IDE と統合

**** [価格](https://supermaven.com/pricing)

より良い価格や上限を知っていますか？ソース付きで Issue/PR をお願いします。CONTRIBUTING.md を参照。

---

## 4. 基本モデルに無料アクセスできるツール
（未特定/基本モデル）

### [Bolt.new](https://bolt.new/)

> **未特定のモデル**
- 月100万トークン上限
- 具体的モデルは非公開
- クレカ必須

**** [トークンドキュメント](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **未特定のモデル**
- 1日5クレジット、月最大30（無料）
- モデルの公開リストなし
- クレカ必須

**** [メッセージ上限](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

> **プロプライエタリ（非フロンティア）モデル**
- GPT-5 利用は v0 Premium が必要
- $5/月 のクレジット上限
- プロプライエタリモデルでルーティング多様
- クレカ必須

**** [価格改定ブログ](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

> **基本AIコーディング支援の無料無制限利用**
- 個人プラン: コード補完/AIチャット/コマンド無制限で永年無料
- 70+ 言語サポート
- IDE: VS Code, JetBrains, Vim/Neovim, Jupyter
- クレカ不要
- コンテキスト理解は限定（有料で拡張）
- ベースモデルのみ（Llama 3.1 70B）、プロ級はサブスク必要

**** [価格](https://codeium.com/pricing) | [ドキュメント](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **無料層（機能限定）**
- 基本的なAI補完とチャット（制限あり）
- ローカル処理対応
- 無料層はコンテキストが大幅制限
- リソース節約のため性能低め
- 600+ 言語に対応

**** [価格](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **IDEに含まれる無料AI層**
- 無制限コード補完とローカルモデルサポート
- クラウド機能はクォータ制限
- 30日 AI Pro トライアル
- ローカルモデルでチャット/コード生成/コミットメッセージ

**** [AI機能](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

> **基本機能の無料層**
- 基本的なコード提案
- データ保持 7日
- 登録にクレカ必須
- 1M トークンのコンテキスト（無料としては大きい）

**** [価格](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

> **柔軟なモデルサポートを持つ無料OSS拡張**
- VS Code / JetBrains 拡張（無料）
- Ollama, LM Studio などローカルモデルをフルサポート
- Solo階層: プライベート/チーム/パブリックを選択
- 200+モデル対応（クラウド利用は自前APIキー）
- カスタムAIアシスタントのコミュニティHub
- ローカルモデルに使用制限やロックインなし

**** [GitHub](https://github.com/continuedev/continue) | [Model Hub](https://hub.continue.dev/explore/models)

公式の上限やモデル情報を知っていれば、Issue/PRでリンクを共有してください。CONTRIBUTING.md を参照。

---

## 5. ローカルモデル


フロンティア系オープンウェイトモデルをローカル実行すると、APIコストや使用制限なしで無制限のコーディング支援が得られます。代表的なツール: **[Cline](https://cline.bot/)**（VS Code拡張、Plan/Act、MCP対応）、**[Aider](https://aider.chat/)**（CLI + Git統合）、**[Continue.dev](https://www.continue.dev/)**（VS Code拡張、200+モデル対応）。いずれも **[Ollama](https://ollama.com/)** と組み合わせ、Devstral（24B、エージェント向け最適化）、Qwen3-Coder、DeepSeek Coder V2、Codestral、GLM-4.5 などを動かせます。

**注意**: フロンティアモデルは大容量メモリ/VRAMを要します。Qwen3‑Coder‑480B の Ollama 用 GGUF は約150GB、実用推論には約150GBの統合メモリ（RAM+VRAM）が必要になる場合があります。30B量子化でも約18GBが一般的。詳細は Unsloth Qwen3‑Coder ローカルガイド（[docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)）や Simon Willison の [GLM‑4.5 AIR をノートPCで動かして Space Invaders を作った記事](https://simonwillison.net/2025/Jul/29/space-invaders/) を参照。

---

## 比較ノート

- **目的**: プロ級モデルへのアクセスと無料枠でツールを比較。
- **プロ級の基準**: SWE-bench Verified ≥60%。現行: Claude Opus 4.5 (80.9%), GPT-5.1-Codex-Max (77.9%), Claude Sonnet 4.5 (77.2%), Gemini 3 Pro (76.2%), GPT-5 (74.9%), Claude Opus 4.1 (74.5%), Claude Sonnet 4 (72.7%), GPT-5 mini (71.0%), Qwen3-Coder-480B (69.6%), Gemini 2.5 Pro (63.2%)。
- **上限タイプの違い**: リクエスト/トークン/クレジット/チャットで異なり直接比較は困難。ドキュメント確認を。
- **実利用**: コーディングスタイル・タスク複雑度・ツール実装で大きく変動。

---

## 関連リソース

- [Coding with AI](https://coding-with-ai.dev/) - LLMでのコーディングに役立つ実践的テクニック
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - 自作統合向けの無料LLM API集

---

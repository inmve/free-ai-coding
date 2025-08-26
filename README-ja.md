> 🤖 **機械翻訳の通知**
> このページはClaude AIを使用して英語から自動翻訳されました。
> 正確性については[英語版オリジナル](README.md)をご参照ください。

最終更新：2025年8月19日 • PR/issue歓迎 • ⭐ スターで後で戻ってくる

# AIコーディングツール：プロフェッショナルグレードモデルが本当に無料で使える場所

多くのAIコーディングツールは「無料」と謳っていますが、プロフェッショナルグレードモデルへのアクセスは通常すぐに制限に達し、その後グレードダウンされます。各ツールは異なる制限（クレジット、トークン、リクエスト）を使用しているため、公正な比較は困難です。このリストでは、それらを並べて比較し、実際に無料で何が得られるかを示しています。

## TL;DR — プロフェッショナルグレードAIコーディング用無料ティア
_（より高い制限を持つツールを最初に掲載）_

| ツール | プロフェッショナルグレードモデル | 無料ティア制限 | クレジットカード |
|--------|----------------------------------|----------------|-----------------|
| [Qwen Code](#qwen-code) | Qwen3-Coder-480B | 2,000リクエスト/日 | 不要 |
| [Rovo Dev CLI](#rovo-dev-cli) | Claude Sonnet 4 | 5Mトークン/日（ベータ） | 不要 |
| [Gemini CLI](#gemini-cli) | Gemini 2.5 Pro | 100リクエスト/日 | 不要 |
| [Kilo Code](#kilo-code) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | $25登録クレジット（一回限り） | 必要 |
| [Warp](#warp) | Claude, OpenAI, Gemini | 150リクエスト/月 | 不要 |
| [Trae](#trae) | Claude 4 Sonnet, Claude 3.5 Sonnet, GPT‑4o, Gemini 2.5 Pro | 60リクエスト/月 | 不要 |
| [Amazon Q Developer](#amazon-q-developer) | Claude Sonnet 4 | 50エージェントチャット/月 | 必要 |
| [GitHub Copilot](#github-copilot) | GPT‑4o, Claude 3.5 Sonnet, Gemini 2.0 Flash | 50チャット + 2,000補完/月 | 不要 |
| [Windsurf](#windsurf) | OpenAI, Anthropic, Google, xAI | 25クレジット/月 | 必要 |
| [Jules](#jules) | Gemini 2.5 Pro | 15タスク/日 | 不要 |
| [AWS Kiro](#aws-kiro) | Claude Sonnet 4 / 3.7 | 50 vibeリクエスト/月 | 不要 |
| [Qoder](#qoder) | Qwen3-Coder-480B, Claude, GPT, Gemini | 限定クレジット（プレビュー） | 不要（プレビュー） |

## これをより正確にする手助け

**実際の使用量はコーディングスタイル、タスクの複雑さ、ツールの実装によって大きく異なります**。[あなたの実際の使用体験を共有して→](https://free-ai-usage.vercel.app/)このリソースの改善にご協力ください

### 適格なプロフェッショナルグレードモデル
SWE-bench Verifiedで>60%を達成したモデルのみが、実世界のコーディングタスクのプロフェッショナルグレードとして適格です。以下が現在のリスト

| モデル | SWE-bench Verified | プロバイダー |
|--------|-------------------|-------------|
| GPT-5 | 74.9% | OpenAI |
| Claude Opus 4.1 | 74.5% | Anthropic |
| Claude Sonnet 4 | 72.7% (80.2% 並列実行) | Anthropic |
| GPT-5 mini | 71.0% | OpenAI |
| Qwen3-Coder-480B | 69.6% (インタラクティブ) / 67.0% (単一) | Alibaba |
| Gemini 2.5 Pro | 63.2% | Google |


## 目次

- [1. プロフェッショナルグレードモデルへの無料アクセスを提供するAIコーディングツール](#1-プロフェッショナルグレードモデルへの無料アクセスを提供するaiコーディングツール)
- [2. AIコーディングツール用APIプロバイダー](#2-aiコーディングツール用apiプロバイダー)
- [3. プロフェッショナルグレードモデルを提供する有料ティアツール](#3-プロフェッショナルグレードモデルを提供する有料ティアツール)
- [4. 基本モデルへの無料アクセスを提供するツール](#4-基本モデルへの無料アクセスを提供するツール)
- [5. ローカルモデル](#5-ローカルモデル)


## 1. プロフェッショナルグレードモデルへの無料アクセスを提供するAIコーディングツール
_（最も寛大なものから最も制限的なものまで順位付け）_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **〜33時間/日（〜1000時間/月）のQwen3-Coder-480Bコーディング**
- Qwen OAuthによる1日2,000リクエストの無料ティア
- 60リクエスト/分のレート制限
- コマンドラインAIワークフローツール（Gemini CLIから適応）
- ワンクリックブラウザ認証
- クレジットカード不要

**リンク：** [GitHub](https://github.com/QwenLM/qwen-code) | [ドキュメント](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **ベータ期間中〜20時間/日（〜600時間/月）のClaude Sonnetコーディング**
- プレビュー期間中、寛大な日次クォータでGPT-5アクセス
- 5Mトークン/日無料ティア（初日のみ20M）
- Claudeベースモデル（Anthropicプロバイダー）
- ベータ期間中クレジットカード不要
- トークン制限はUTC午前0時にリセット
- 注：20Mトークン/日にはJira Standard/Premium/Enterpriseへのアップグレードが必要

**リンク：** [ドキュメント](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [トークン制限](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **〜1.7時間/日（〜50時間/月）のGemini 2.5 Proコーディング**
- 100リクエスト/日制限
- フォールバック：Gemini 2.5 Flash で〜4.2時間/日（250リクエスト/日）
- クレジットカード不要
- Googleモデルのみ
- 無料クォータ後は有料料金に切り替え

**リンク：** [レート制限](https://ai.google.dev/gemini-api/docs/rate-limits) | [価格設定](https://ai.google.dev/gemini-api/docs/pricing)

---

### [Kilo Code](https://kilocode.ai/)

> **〜3時間合計のClaude 4 Sonnet/Opus、Gemini 2.5 Pro、GPT-4.1コーディング**
- サインアップ時$20無料クレジット
- オープンソースVS Code拡張
- モデル価格にマークアップなしの従量課金制
- ボーナスクレジット取得にはクレジットカードが必要
- 独自のAPIキー持参をサポート

**リンク：** [GitHub](https://github.com/Kilo-Org/kilocode) | [ドキュメント](https://kilocode.ai/docs/)

---

### [Warp](https://warp.dev/)

> **〜2.5時間/月 Claude Sonnet 4、OpenAI GPT-5、Gemini 2.5 Pro 全体で**
- 150リクエスト/月制限
- 複数プロバイダー（Claude、OpenAI、Gemini）
- 基本サインアップにクレジットカード不要
- オーバーレージの従量課金制が利用可能

**リンク：** [価格設定](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **〜0.8時間/月のClaude Sonnet 4コーディング**
- 50エージェンティックチャット/月制限（マルチターン会話）
- 最新のClaudeモデル（AWSホスト）
- クレジットカード必要
- 継続アクセスにはProにアップグレードが必要
- 永続無料ティア

**リンク：** [価格設定](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **〜0.8時間/月のエージェントインタラクション（GPT-4o、Claude 3.5 Sonnet、Gemini 2.0 Flash）**
- 50チャット + 2,000補完/月制限
- 自律マルチステップコーディングを行うエージェントモード
- 複数プロバイダー（GPT-4o、Claude 3.5 Sonnet、Gemini 2.0 Flash）
- クレジットカード不要
- クォータ後は基本機能に制限

**リンク：** [プラン詳細](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [エージェントモード](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Windsurf](https://windsurf.com/)

> **OpenAI、Anthropic、Google、xAIモデルへのアクセス**
- 25プロンプトクレジット/月制限
- 複数プロバイダー（OpenAI、Claude、Gemini、xAI）
- クレジットカード必要
- 継続のためにアドオンクレジットを購入可能

**リンク：** [価格設定](https://windsurf.com/pricing)

---

### [AWS Kiro](https://kiro.dev/)

> **Claude Sonnet 4 / 3.7コーディングの不明な期間**
- 日次制限（非公開）
- Claudeモデルのみ（AWSホスト）
- クレジットカード不要（プレビュー期間）
- クォータ枯渇不明（プレビュー期間）

**リンク：** [紹介ブログ](https://kiro.dev/blog/introducing-kiro/)

---

> 制限は急速に変化します。エラー、より新しいクォータ/モデルを見つけたり、新しいツールを追加したい場合は、ソース付きでissueやPRを開いてください。新しいツールの貢献を歓迎します！

---

## 2. AIコーディングツール用APIプロバイダー
_（最も寛大なものから最も制限的なものまで順位付け）_

これらのサービスは、Cursor、Continue.dev、Clineなどの人気AIコーディングツールと統合するコーディング最適化モデルへのAPIアクセスを提供します。独立したコーディングツールは提供しませんが、既存のツール用のAIバックエンドを提供します。

### [OpenRouter](https://openrouter.ai/)

> **〜33時間/日（〜1000時間/月）のQwen3-Coderコーディング**
- Qwen3-Coder-480Bで1日2,000リクエストの無料ティア
- 追加無料モデル：Qwen3-30B-A3B、Qwen3-235B-A22B、Gemini Flash
- すべての主要IDEでOpenAI互換API
- 無料モデルにクレジットカード不要
- 無料ティアでのトラフィック高時のレート制限
- Continue.dev、Cline、Cursorなどで動作

**リンク：** [無料モデル](https://openrouter.ai/models/?q=free) | [Qwen3-Coder API](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **〜1.7時間/日（〜50時間/月）のQwen3-Coder/Llama 3.1コーディング**
- 100リクエスト/日無料ティア
- モデル：Qwen3-Coder-480B（Claude Sonnet 4のパフォーマンスと同等）、Llama 3.1 70B
- OpenAI互換API（Cursor、Continue.dev、Cline、RooCodeなどで動作）
- 超高速推論：2,000トークン/秒（典型的なプロバイダーより40倍速い）
- クレジットカード不要
- **有料ティア：** Code Pro（$50/月）、Code Max（$200/月） - 週制限なし

**リンク：** [価格設定](https://www.cerebras.ai/pricing) | [APIドキュメント](https://inference-docs.cerebras.ai/) | [統合ガイド](https://inference-docs.cerebras.ai/integrations/)

---

## 3. プロフェッショナルグレードモデルを提供する有料ティアツール

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

**Jira Standard ($7.53/ユーザー/月)：** 20Mトークン/日（〜80時間/日のClaude Sonnetコーディング）
**Jira Premium ($15.25/ユーザー/月)：** 20Mトークン/日
**Jira Enterprise（カスタム）：** 20Mトークン/日
- 無料ティアから4倍増加（5M → 20Mトークン/日）
- 無料ティアと同じClaudeベースモデル
- トークン制限はUTC午前0時にリセット

**リンク：** [ドキュメント](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [トークン制限](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira価格設定](https://www.atlassian.com/software/jira/pricing)

---


### [Claude Code](https://www.anthropic.com/claude-code)

**Pro ($20/月)：** Sonnet 4アクセス
**Max ($100/月)：** Opus 4 + Sonnet 4アクセス
**Max ($200/月)：** より高いOpus 4 + Sonnet 4制限
- 使用制限は毎週リセット
- 5時間ローリングウィンドウ制限適用

**リンク：** [価格設定](https://www.anthropic.com/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

**Pro ($19/月)：** エージェンティックリクエストの制限増加
- 地域要因と使用パターンに基づいて使用量が調整される場合があります

**リンク：** [価格設定](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

**Pro ($15/月)：** 2,500リクエスト/月
**Turbo ($40/月)：** 10,000リクエスト/月  
**Lightspeed ($200/月)：** 50,000リクエスト/月
- オーバーレージの従量課金制が利用可能

**リンク：** [価格設定](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

**Pro ($10/月)：** 300チャット + 無制限補完/月
**Pro+ ($39/月)：** 1,500チャット + 無制限補完/月
**Business ($19/ユーザー/月)：** 300チャット + 無制限補完/ユーザー/月
**Enterprise ($39/ユーザー/月)：** 1,000チャット + 無制限補完/ユーザー/月
- $0.04/リクエストでオーバーレージ請求が利用可能

**リンク：** [プラン詳細](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot)

---

### [Windsurf](https://windsurf.com/)

**Pro ($15/月)：** 500プロンプトクレジット/月
**Teams ($30/ユーザー/月)：** 500プロンプトクレジット/ユーザー/月
**Enterprise ($60+/ユーザー/月)：** 1,000プロンプトクレジット/ユーザー/月

**リンク：** [価格設定](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

**Pro ($25/月)：** 100メッセージ/月
**Teams ($30/月)：** より高い制限（非公開）

**リンク：** [メッセージ制限](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

**$20/月：** 10Mトークン/月
**$200/月：** 120Mトークン/月

**リンク：** [トークンドキュメント](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

**Hobby（無料）：** 基本モデルのみでエージェントリクエスト制限
**Pro ($20/月)：** エージェントの拡張制限、GPT-5、Claude Sonnet 4、Gemini 2.5 Proへのアクセス
**Ultra ($200/月)：** すべてのOpenAI、Claude、Geminiモデルで20倍使用量
**Teams ($40/ユーザー/月)：** Pro機能 + チーム管理
- 2週間Proトライアル利用可能
- 無料ティアにクレジットカード必要

**リンク：** [価格設定](https://cursor.com/en/pricing)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

**ChatGPT Plus付き無料（$20/月）：** コーディングタスクのGPT-5アクセス
**従量課金制：** OpenAI APIキーで使用
**無料OSSモード：** オープンソースモデルのみアクセス（--ossフラグ経由）
- ローカル実行する軽量コーディングエージェント
- サンドボックスモード付きインタラクティブターミナルUI
- macOS 12+、Ubuntu 20.04+、Windows 11（WSL2経由）
- 活発に開発中の実験プロジェクト

**リンク：** [GitHubリポジトリ](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

**Pro ($10/月)：** 高度なコンテキスト認識による無制限使用
- Claude 3.5 Sonnet、GPT-4oアクセス
- 拡張コンテキストウィンドウとパーソナライゼーション
**Teams ($12/ユーザー/月)：** Pro機能 + チーム管理
**Enterprise（カスタム）：** オンプレミス展開、カスタムモデル

**リンク：** [価格設定](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

**Pro ($12/月)：** 拡張AI補完とチャット
**Enterprise ($39/ユーザー/月)：** 複数LLM、プライベート展開
- モデル：Claude 3.5 Sonnet、GPT-4o、Llama 3.3 70B、独自モデル
- 600以上のプログラミング言語をサポート
- オンプレミスおよびエアギャップ展開オプション
- 独自の微調整モデルを持参

**リンク：** [価格設定](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**AI Pro ($15/月)：** クラウドクォータ増加 + 無制限ローカルモデル
**AI Ultimate ($25/月)：** 最大クラウドクォータ + 高度機能
- 無料ティア：無制限コード補完 + ローカルモデル + 制限クラウドクォータ
- 30日Proトライアル込み
- All Products PackにAI Pro含む
- Ollama/LM Studio経由ローカルモデルでオフラインモード

**リンク：** [AI価格設定](https://www.jetbrains.com/ai-ides/buy/)

---

### [SuperMaven](https://supermaven.com/)

**Pro ($10/月)：** 1Mトークンコンテキストウィンドウ + チャットクレジット
- 代替：$99/年
- GPT-4o、Claude 3.5 Sonnet、GPT-4とのチャットインターフェース
**Team ($10/ユーザー/月)：** Pro機能 + チーム管理
- 注：2024年11月にCursor IDEと合併

**リンク：** [価格設定](https://supermaven.com/pricing)

---

> より良い価格や制限を知っていますか？issueやPRでリンクを共有して、これを最新に保つのを手伝ってください。

---

## 4. 基本モデルへの無料アクセスを提供するツール
__（未指定/基本モデル）__

### [Bolt.new](https://bolt.new/)

**未指定モデルで〜100時間/月**
- 1Mトークン/月制限
- 具体的なモデルは公開されていません
- クレジットカード必要

**リンク：** [トークンドキュメント](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

**未指定モデルで〜0.5時間/月**
- 5クレジット/日、30/月上限
- モデルは公開されていません
- クレジットカード必要

**リンク：** [メッセージ制限](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

**独自モデル（フロンティアでない）で可変期間**
- GPT-5アクセスにはv0 Premiumサブスクリプションが必要
- $5クレジット/月制限
- 多様なルーティングで独自モデルを使用
- クレジットカード必要

**リンク：** [更新価格設定ブログ](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

**基本AIコーディング支援の無制限無料使用**
- 個人プラン：無制限コード補完、AIチャット、コマンドで永久無料
- 70以上のプログラミング言語をサポート
- IDE統合：VS Code、JetBrains、Vim/Neovim、Jupyter
- クレジットカード不要
- コンテキスト認識制限（有料ティアで拡張）
- 基本モデルのみ（Llama 3.1 70B）、プロフェッショナルグレードモデルにはサブスクリプション必要

**リンク：** [価格設定](https://codeium.com/pricing) | [ドキュメント](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

**制限機能付き無料ティア**
- 基本AIコード補完とチャット（制限）
- ローカル処理が利用可能
- 無料ティアでコンテキスト大幅制限
- リソース節約のためパフォーマンス削減
- 600以上のプログラミング言語をサポート

**リンク：** [価格設定](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**IDE付きAI無料ティア**
- 無制限コード補完とローカルモデルサポート
- クラウドベース機能の制限クォータ
- 30日AI Proトライアル
- ローカルモデルでチャット、コード生成、コミットメッセージ

**リンク：** [AI機能](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

**基本機能付き無料ティア**
- 基本コード提案
- 7日データ保持制限
- 登録にクレジットカード必要
- 1Mトークンコンテキストウィンドウ（無料ティアとしては印象的）

**リンク：** [価格設定](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

**柔軟なモデルサポート付き無料オープンソース拡張**
- VS CodeとJetBrains用無料拡張
- Ollama、LM Studio経由ローカルモデル完全サポート
- Soloティア：プライベート/チーム/パブリック可視性オプション
- 200以上モデルサポート（クラウドモデルには独自APIキー必要）
- カスタムAIアシスタントのコミュニティハブ
- ローカルモデルでベンダーロックインや使用制限なし

**リンク：** [GitHub](https://github.com/continuedev/continue) | [モデルハブ](https://hub.continue.dev/explore/models)

---

> 公式制限やモデルを知っていますか？情報更新のためissueやPRでリンクを共有してください。

---

## 5. ローカルモデル

オープンウェイトフロンティアモデルをローカル実行することで、API費用や使用制限なしに無制限のコーディング支援を提供します。ローカル展開の人気ツールには**[Cline](https://cline.bot/)**（Plan/ActモードとMCPサポート付きVS Code拡張）、**[Aider](https://aider.chat/)**（内蔵Git統合付きコマンドラインアシスタント）、**[Continue.dev](https://www.continue.dev/)**（200以上モデルサポートのオープンソースVS Code拡張）があります。すべて**[Ollama](https://ollama.com/)**とシームレスに動作し、Devstral（24Bパラメータ、エージェンティックコーディング最適化）、Qwen3-Coder、DeepSeek Coder V2、Codestral、GLM-4.5などのフロンティアモデルを実行します。

**注意**：フロンティアモデルには大量のRAM/VRAMが必要です。特にQwen3‑Coder‑480BのOllama対応GGUFは〜150GBで、実用的なローカル推論には〜150GBの統合メモリ（RAM+VRAM）が必要な場合があり、典型的なラップトップでは困難です；30Bクォンタイズは通常〜18GB必要です。詳細はUnsloth Qwen3‑Coderローカルガイド（[docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)）と、実践例としてのSimon Willisonの[彼のラップトップでGLM‑4.5 AIRを実行してSpace Invadersを構築](https://simonwillison.net/2025/Jul/29/space-invaders/)の記事をご覧ください。

---

## 比較ノート

- **目標**：AIコーディングツールをプロフェッショナルグレードモデルへのアクセスと無料ティア制限により比較する。
- **モデルが「プロフェッショナルグレード」として適格な条件は？** モデルはSWE-bench Verifiedで≥60%を達成し、実世界ソフトウェア工学能力を実証する必要があります。現在適格なモデル：GPT-5（74.9%）、Claude Opus 4.1（74.5%）、Claude Sonnet 4（72.7%）、GPT-5 mini（71.0%）、Qwen3-Coder-480B（69.6%）、Gemini 2.5 Pro（63.2%）。
- **異なるタイプの制限**：ツールは様々なクォータシステム - リクエスト、トークン、クレジット、チャット - を使用しており、直接的な比較を困難にしています。仕様についてはドキュメントをご参照ください。
- **実世界の使用**：実際の消費量はコーディングスタイル、タスクの複雑さ、ツールの実装によって大きく異なります。

---

## 関連リソース

- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - カスタム統合構築のための無料LLM APIの包括的リスト

---

## 免責事項
いかなるベンダーとも提携していません。すべての商標はその所有者に帰属します。情報は研究目的；正確性は保証されません；制限/価格設定は頻繁に変更されます。

---
*この翻訳はClaude AIによって作成されました。最新情報については[英語オリジナル版](README.md)をご参照ください。*
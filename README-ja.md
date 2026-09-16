最終更新: 2026年9月15日 • PRs/issues 歓迎

**言語：** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md)

# AIコーディングツール：プロ級モデルが本当に無料で使える場所 

多くのAIコーディングツールは「無料」を謳いますが、プロ級モデルへのアクセスはすぐ尽きてダウングレードされがちです。各ツールで上限（クレジット、トークン、リクエスト）が異なり、比較が難しい。このリストで並べて、実際に無料で得られるものを示します。

## TL;DR — プロ級AIコーディングの無料枠
_(上限の単位は異なるため、順序は目安であり同等容量のランキングではありません)_

| ツール | プロ級モデル | 無料枠 | クレカ |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen とその他プロバイダ | Qwen OAuthの無料枠は2026年4月15日に終了；Alibaba ModelStudioなど別の方法を利用 | 不要 |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | プランにより異なる Rovo Dev モデル | 有料 Jira と連携してユーザー月350クレジット/サイト | 不要 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Enterprise/有料APIアクセスは継続；個人ユーザーはAntigravity CLIへ移行 | 個人向け無料/Google AI は2026年6月18日に終了；Antigravity CLIへ移行 | 不要 |
| [Cursor](https://cursor.com/) | Composer、Agent 制限あり | Agent 制限、期間限定キャンペーンなし | 不要 |
| [Kilo Code](https://kilocode.ai/) | 未掲載 | 現在値は未検証 | 未確認 |
| [Warp](https://warp.dev/) | Warp Agent、BYOK | Free はクラウドAgent限定；10人以下の個人・企業のBYOKはWarpクレジット不要 | 未確認 |
| [Trae](https://trae.ai/) | 未掲載 | 現在値は未検証 | 未確認 |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | 最新 Claude モデル（AWS） | 月50エージェントリクエスト + Java 1,000 LOC | 不要 |
| [GitHub Copilot](https://github.com/features/copilot/plans) | Haiku 4.5、GPT-5 mini など | 月2,000補完 + 50チャット；Agent/CLI限定 | 不要 |
| [Windsurf](https://windsurf.com/) | 未掲載 | 現在値は未検証 | 未確認 |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 直近24時間で15タスク；同時3件 | 不要 |
| [AWS Kiro](https://kiro.dev/) | Claude Sonnet 4.5 と open weight | 月50クレジット | 不要 |
| [Qoder](https://qoder.com/) | 未掲載 | 現在値は未検証 | 未確認 |

### プロ級モデル（選択した過去の値）
一次情報へのリンクを付けた選択済みの過去の値です。テスト条件が異なるため、現在の網羅的なランキングではありません。

| モデル | SWE-bench Verified | 提供 |
|-------|-------------------|----------|
| [Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) | 80.9% | Anthropic |
| [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) | 77.2% | Anthropic |
| [Qwen3-Coder-480B](https://qwenlm.github.io/blog/qwen3-coder/) | 69.6% | Alibaba |

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
_(上限の単位は異なるため、順序は目安であり同等容量のランキングではありません)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Qwen OAuthの無料枠は2026年4月15日に終了；Alibaba ModelStudioなど別の方法を利用**
- Qwen OAuthの無料枠は2026年4月15日に終了；Alibaba ModelStudioなど別の方法を利用
- 認証設定から Qwen など複数プロバイダを利用できる
- ターミナル、IDE、デスクトップ、Web 対応のオープンソースエージェント

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Authentication](https://github.com/QwenLM/qwen-code/blob/main/docs/users/configuration/auth.md)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- 有料 Jira プランで無料：サイトごとにユーザー月350 Rovo Dev クレジット
- 月間クレジットを使い切ると停止
- 現在の請求ページは CLI の固定モデルを明記していない
- 無料アドオンにクレジットカードは不要

**** [ドキュメント](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [トークン上限](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **個人向けGemini CLIはAntigravity CLIへ移行**
- 2026年6月18日、Gemini CLIは個人およびGoogle AI Pro/Ultra向けの提供を終了
- Antigravity CLIは全員に提供され、移行先となる
- Standard/Enterprise組織のアクセスは変更なし；有料Gemini APIキーは利用可能
- 従来の個人Googleログインの1,000/日・60/分制限は終了

**** [Transition announcement](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) | [Documentation](https://ai.google.dev/gemini-api/docs/rate-limits)

---

### [Kilo Code](https://kilocode.ai/)

> **現在の価格・上限は未検証**
- 確認できる公式ページに安定した上限・価格表がない
- 過去の正確な数値を現在の情報として掲載しない
- 利用前にリンク先の公式ページを確認

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [ドキュメント](https://kilocode.ai/docs/) | [価格](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Warp Agent と BYOK**
- Free：クラウドエージェントは限定利用で、上限到達後は停止
- Build は月$20から、1,500クレジット（$20相当の利用）
- 10人以下の個人・企業ではBYOK/カスタム推論にWarpクレジットを使わない
- 消費量はモデル、コンテキスト、タスクで変わる

**** [価格](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Free**
- 恒久無料：月50エージェントリクエスト、月1,000 Java LOC
- IDE の無料枠は Builder ID、IAM はアカウント単位
- Builder ID 無料利用にカード不要；Pro は AWS 請求が必要
- Pro は月$19/ユーザーで上限が増える

**** [価格](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 月2,000補完と月50チャットリクエスト
- Copilot CLI と限定的な Agent；Free のモデル選択は制限される
- 現在のプランページは Haiku 4.5、GPT-5 mini などを掲載
- クレジットカード不要

**** [プラン詳細](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [エージェントモード](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **現在の価格・上限は未検証**
- 確認できる公式ページに安定した上限・価格表がない
- 過去の正確な数値を現在の情報として掲載しない
- 利用前にリンク先の公式ページを確認

**** [価格](https://trae.ai/pricing) | [ドキュメント](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **現在の価格・上限は未検証**
- 確認できる公式ページに安定した上限・価格表がない
- 過去の正確な数値を現在の情報として掲載しない
- 利用前にリンク先の公式ページを確認

**** [価格](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Gemini 2.5 Pro アクセス**
- 無料：直近24時間で15タスク、同時3タスク
- 同時3タスク
- モデル：Gemini 2.5 Pro
- Gmail アカウント必須（18+）
- 24時間ローリングでリセット
- クレカ不要
- Pro ($19.99/月): 100タスク/日（5倍）

**** [使用制限](https://jules.google/docs/usage-limits/) | [ドキュメント](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **AWS Kiro Free**
- 恒久無料：月50クレジット
- ソーシャルログインまたは Builder ID で Claude Sonnet 4.5 と open-weight モデル（制限あり）
- Pro 月$20: 1,000、Pro+ $40: 2,000、Pro Max $100: 5,000、Power $200: 10,000
- 有料プランにはカードが必要

**** [価格](https://kiro.dev/pricing/) | [紹介ブログ](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **現在の価格・上限は未検証**
- 確認できる公式ページに安定した上限・価格表がない
- 過去の正確な数値を現在の情報として掲載しない
- 利用前にリンク先の公式ページを確認

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

> **現在の価格・上限は未検証**
- 確認できる公式ページに安定した上限・価格表がない
- 過去の正確な数値を現在の情報として掲載しない
- 利用前にリンク先の公式ページを確認

**** [価格](https://www.cerebras.ai/pricing) | [APIドキュメント](https://inference-docs.cerebras.ai/) | [統合ガイド](https://inference-docs.cerebras.ai/integrations/)

---

## 3. プロ級モデルの有料プランがあるツール


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- 有料 Jira プランで無料：サイトごとにユーザー月350 Rovo Dev クレジット
- 月間クレジットを使い切ると停止
- 現在の請求ページは CLI の固定モデルを明記していない
- 無料アドオンにクレジットカードは不要
- Standard：月$20、ユーザー月2,000クレジット

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

> **Amazon Q Developer Free**
- 恒久無料：月50エージェントリクエスト、月1,000 Java LOC
- IDE の無料枠は Builder ID、IAM はアカウント単位
- Builder ID 無料利用にカード不要；Pro は AWS 請求が必要
- Pro は月$19/ユーザーで上限が増える

**** [価格](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Warp Agent と BYOK**
- Free：クラウドエージェントは限定利用で、上限到達後は停止
- Build は月$20から、1,500クレジット（$20相当の利用）
- 10人以下の個人・企業ではBYOK/カスタム推論にWarpクレジットを使わない
- 消費量はモデル、コンテキスト、タスクで変わる

**** [価格](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 月2,000補完と月50チャットリクエスト
- Copilot CLI と限定的な Agent；Free のモデル選択は制限される
- 現在のプランページは Haiku 4.5、GPT-5 mini などを掲載
- クレジットカード不要

**** [プラン詳細](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [GPT-5.1-Codex-Maxプレビュー](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **現在の価格・上限は未検証**
- 確認できる公式ページに安定した上限・価格表がない
- 過去の正確な数値を現在の情報として掲載しない
- 利用前にリンク先の公式ページを確認

**** [価格](https://trae.ai/pricing) | [ドキュメント](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **現在の価格・上限は未検証**
- 確認できる公式ページに安定した上限・価格表がない
- 過去の正確な数値を現在の情報として掲載しない
- 利用前にリンク先の公式ページを確認

**** [価格](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Lovableは現在クレジット制**
- Freeは毎日5ビルドクレジット（月30まで）、月20 Cloudクレジット、月4 AIクレジットを含む
- クレジットとgrantの有効期限は異なるため公式料金ページを確認

**** [Pricing](https://lovable.dev/pricing)

---

### [Bolt.new](https://bolt.new/)

> **Freeは1日300K、月1Mトークンまで**
- Proは月25ドルから10Mトークン/月、Teamsは月30ドル/メンバーから
- 有料トークンは契約継続中なら1か月繰り越し

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Cursor Free と有料プラン**
- Hobby は無料・カード不要、Agent 制限と Composer アクセス
- Pro $20/月、Pro+ $60、Ultra $200、Teams Standard $40/ユーザー/月
- GPT-5.1-Codex-Max の2025年12月11日まで無料のキャンペーンは終了・削除
- 使用量とモデルはプランに依存

**** [価格](https://cursor.com/en/pricing) | [GPT-5.1-Codex-Max アナウンス](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Codex のプランと API 課金**
- Codex は Free（$0）、Go（月$8）、Plus（月$20）、Pro（月$100から）、Business（年払い月$20/ユーザーまたは月払い$25）、Edu、Enterprise に含まれる
- APIキーはモデル別に課金；ローカルとクラウドはプラン枠を共有する
- 上限はタスクの複雑さで変わるため公式料金を確認

**** [Pricing](https://developers.openai.com/codex/pricing/) | [GitHub](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

> **現在の価格・上限は未検証**
- 確認できる公式ページに安定した上限・価格表がない
- 過去の正確な数値を現在の情報として掲載しない
- 利用前にリンク先の公式ページを確認

**** [価格](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Tabnine の現行有料プラン**
- Code Assistant：年払い月$39/ユーザー；Agentic Platform：年払い月$59/ユーザー
- 現行料金ページに無料枠の案内はない
- 自社 LLM の on-prem/cloud 利用は Tabnine 側では無制限；Tabnine LLM はプロバイダ料金＋5%

**** [Pricing](https://www.tabnine.com/pricing/)

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
- Google AI Pro の Jules Pro：直近24時間で100タスク、同時15タスク
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

> **Freeは1日300K、月1Mトークンまで**
- Proは月25ドルから10Mトークン/月、Teamsは月30ドル/メンバーから
- 有料トークンは契約継続中なら1か月繰り越し

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Lovableは現在クレジット制**
- Freeは毎日5ビルドクレジット（月30まで）、月20 Cloudクレジット、月4 AIクレジットを含む
- クレジットとgrantの有効期限は異なるため公式料金ページを確認

**** [Pricing](https://lovable.dev/pricing)

---

### [v0.dev](https://v0.dev/)

> **Freeは月5ドル分のクレジットと1日7メッセージ**
- Plusは月30ドル/ユーザーで30ドル分、Businessは月100ドル/ユーザー
- 入出力トークンをクレジットに換算して使用量を計測

**** [Pricing](https://api2.v0.dev/pricing)

---

### [Codeium](https://codeium.com/)

> **現在の価格・上限は未検証**
- 確認できる公式ページに安定した上限・価格表がない
- 過去の正確な数値を現在の情報として掲載しない
- 利用前にリンク先の公式ページを確認

**** [価格](https://codeium.com/pricing) | [ドキュメント](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Tabnine の現行有料プラン**
- Code Assistant：年払い月$39/ユーザー；Agentic Platform：年払い月$59/ユーザー
- 現行料金ページに無料枠の案内はない
- 自社 LLM の on-prem/cloud 利用は Tabnine 側では無制限；Tabnine LLM はプロバイダ料金＋5%

**** [Pricing](https://www.tabnine.com/pricing/)

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
- **上限タイプの違い**: リクエスト/トークン/クレジット/チャットで異なり直接比較は困難。ドキュメント確認を。
- **実利用**: コーディングスタイル・タスク複雑度・ツール実装で大きく変動。
- 確認できる公式ページに安定した上限・価格表がない
- 確認できる公式ページに安定した上限・価格表がない
- **比較可能性:** SWE-bench の値は異なる条件で報告されています。並列・インタラクティブ・単一実行は直接比較できません。クレジット、トークン、リクエスト、チャット、タスクを一つの優劣ランキングに換算しないでください。

---

## 関連リソース

- [Coding with AI](https://coding-with-ai.dev/) - LLMでのコーディングに役立つ実践的テクニック
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - 自作統合向けの無料LLM API集

---

अंतिम अपडेट: 5 दिसंबर 2025 • PRs/issues आमंत्रित हैं

**भाषाएँ:** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md) • [Türkçe](README-tr.md)

# AI कोडिंग टूल्स: जहाँ प्रो-ग्रेड मॉडल वाकई मुफ्त हैं 

कई AI कोडिंग टूल्स “मुफ्त” कहते हैं, लेकिन प्रो-ग्रेड मॉडलों का एक्सेस जल्दी खत्म हो जाता है और डाउनग्रेड हो जाते हैं। हर टूल अलग सीमा (क्रेडिट, टोकन, अनुरोध) उपयोग करता है, तुलना कठिन है। यह सूची साथ-साथ दिखाती है कि वास्तव में मुफ्त में क्या मिलता है।

## TL;DR — प्रो-ग्रेड AI कोडिंग के मुफ्त टियर
(उच्च सीमा वाले टूल्स पहले)

| टूल | प्रो-ग्रेड मॉडल | मुफ्त सीमा | क्रेडिट कार्ड |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen3-Coder-480B | 2,000 अनुरोध/दिन | नहीं |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Claude Sonnet 4 | 5M टोकन/दिन (बीटा) | नहीं |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Gemini 3 Pro, Gemini 2.5 Pro | Gemini 3 Pro (वेटलिस्ट/पेड), Gemini 2.5 Pro 100 रिक्वेस्ट/दिन | नहीं |
| [Cursor](https://cursor.com/) | GPT-5.1-Codex-Max | 11 दिस 2025 तक मुफ्त (77.9% SWE-bench) | नहीं |
| [Kilo Code](https://kilocode.ai/) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | साइनअप क्रेडिट $25 तक (एकबार) | हाँ |
| [Warp](https://warp.dev/) | GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro | 150 क्रेडिट/माह (पहले 2 माह), फिर 75/माह | नहीं |
| [Trae](https://trae.ai/) | Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro | 10 तेज + 50 धीमे अनुरोध/माह | नहीं |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Claude Sonnet 4 | 50 एजेंटिक अनुरोध/माह | हाँ |
| [GitHub Copilot](https://github.com/features/copilot/plans) | GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1 | 50 चैट अनुरोध + 2,000 पूर्णियाँ/माह | नहीं |
| [Windsurf](https://windsurf.com/) | OpenAI, Anthropic, Google, xAI | 25 क्रेडिट/माह | हाँ |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 15 कार्य/दिन | नहीं |
| [AWS Kiro](https://kiro.dev/) | Claude 4 Sonnet, Claude 3.7 Sonnet | 50 क्रेडिट/माह | नहीं |
| [Qoder](https://qoder.com/) | Qwen3-Coder-480B, Claude, GPT, Gemini | मुफ्त टियर + 2-सप्ताह Pro ट्रायल (1,000 क्रेडिट) | नहीं |

### योग्य प्रो-ग्रेड मॉडल
केवल SWE-bench Verified >60% वाले मॉडल वास्तविक कार्य के लिए प्रो माने जाते हैं। वर्तमान सूची:

| मॉडल | SWE-bench Verified | प्रदाता |
|-------|-------------------|----------|
| Claude Opus 4.5 | 80.9% | Anthropic |
| GPT-5.1-Codex-Max | 77.9% | OpenAI |
| Claude Sonnet 4.5 | 77.2% (82.0% समानांतर) | Anthropic |
| Gemini 3 Pro | 76.2% | Google |
| GPT-5 | 74.9% | OpenAI |
| Claude Opus 4.1 | 74.5% | Anthropic |
| Claude Sonnet 4 | 72.7% (80.2% समानांतर) | Anthropic |
| GPT-5 mini | 71.0% | OpenAI |
| Qwen3-Coder-480B | 69.6% (इंटरैक्टिव) / 67.0% (सिंगल) | Alibaba |
| Gemini 2.5 Pro | 63.2% | Google |

### योगदान

यदि त्रुटि, स्रोत की कमी, या नई कोटा/मॉडल जानकारी मिले तो स्रोत सहित issue या PR खोलें। नए टूल योगदान का स्वागत है! विस्तृत दिशानिर्देश के लिए CONTRIBUTING.md देखें।

### अस्वीकरण

किसी विक्रेता से संबद्ध नहीं। सभी ट्रेडमार्क मालिकों के हैं। जानकारी शोध हेतु; सटीकता की गारंटी नहीं; सीमा/कीमतें बदल सकती हैं।

## सामग्री

- [1. प्रो-ग्रेड मॉडल के मुफ्त एक्सेस वाले AI कोडिंग टूल्स](#1-प्रो-ग्रेड-मॉडल-के-मुफ्त-एक्सेस-वाले-ai-कोडिंग-टूल्स)
- [2. AI कोडिंग टूल्स के API प्रदाता](#2-ai-कोडिंग-टूल्स-के-api-प्रदाता)
- [3. प्रो-ग्रेड मॉडल वाले पेड टियर टूल्स](#3-प्रो-ग्रेड-मॉडल-वाले-पेड-टियर-टूल्स)
- [4. बेसिक मॉडल का मुफ्त एक्सेस देने वाले टूल्स](#4-बेसिक-मॉडल-का-मुफ्त-एक्सेस-देने-वाले-टूल्स)
- [5. लोकल मॉडल](#5-लोकल-मॉडल)
- [तुलना नोट्स](#तुलना-नोट्स)
- [संबंधित संसाधन](#संबंधित-संसाधन)

## 1. प्रो-ग्रेड मॉडल के मुफ्त एक्सेस वाले AI कोडिंग टूल्स
(सबसे उदार से सबसे कम उदार क्रम)

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Qwen3-Coder-480B एक्सेस**
- Qwen OAuth के जरिए 1 दिन में 2,000 अनुरोध
- 60 अनुरोध/मिनट की दर सीमा
- Gemini CLI से अनुकूलित CLI AI वर्कफ़्लो
- एक-क्लिक ब्राउज़र लॉगिन
- क्रेडिट कार्ड आवश्यक नहीं

**** [GitHub](https://github.com/QwenLM/qwen-code) | [डॉक्यूमेंटेशन](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **बीटा के दौरान Claude Sonnet 4 एक्सेस**
- मुफ्त 5M टोकन/दिन (पहला दिन 20M)
- Claude Sonnet 4 मॉडल (टेस्ट से पुष्ट)
- बीटा में क्रेडिट कार्ड नहीं
- मिडनाइट UTC पर टोकन रीसेट
- Jira Standard/Premium/Enterprise पर 20M/दिन

**** [डॉक्यूमेंटेशन](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [टोकन सीमा](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini 3 Pro と Gemini 2.5 Pro एक्सेस**
- Gemini 3 Pro 2025/12/4 से Google AI Ultra と 有料API उपयोगकर्ताओं के लिए उपलब्ध
- Gemini 3 Pro: 76.2% SWE-bench—Google का सर्वोत्तमコードモデル
- Gemini 2.5 Pro: 100 req/दिन (無料fallback)
- Gemini 2.5 Flash: 250 req/दिन
- 無料枠にクレカ不要
- Google AI Pro / Gemini Code Assist standard / 無料ユーザーは待機リスト
- `/settings` → Preview features → true で有効化

**** [रेट लिमिट](https://ai.google.dev/gemini-api/docs/rate-limits) | [प्राइसिंग](https://ai.google.dev/gemini-api/docs/pricing) | [Gemini 3 Pro 発表](https://developers.googleblog.com/en/5-things-to-try-with-gemini-3-pro-in-gemini-cli/)

---

### [Kilo Code](https://kilocode.ai/)

> **Claude Opus/Sonnet, Gemini 2.5 Pro, GPT-4.1 एक्सेस**
- साइनअप बोनस $25 तक (एकबार)
- オープンソース VS Code 拡張
- モデル価格に上乗せなしの従量課金
- ボーナス受取にクレカ必要
- 自分の API キーも使用可

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [ドキュメント](https://kilocode.ai/docs/) | [प्राइसिंग](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro एक्सेस**
- 月150 AI クレジット（最初の2ヶ月）、以降75/月
- プロバイダ: OpenAI GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro
- 基本登録にクレカ不要
- 2025/10/30 新料金: 単一 Build プラン ($20/月, 1,500 クレジット)

**** [価格](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Claude Sonnet 4 アクセス**
- 1ヶ月 50 agent リクエスト（マルチターン）
- 最新の Claude モデル（AWS ホスト）
- クレカ必要
- 継続利用には Pro へ
- 恒久無料ティア

**** [価格](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **エージェントモード (GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)**
- 月 50 チャット + 2,000 補完
- 自律マルチステップコーディング
- プロバイダ: GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1
- クレカ不要
- 枠超過後は基本機能

**** [プラン詳細](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [エージェントモード](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro アクセス**
- プレミアム向け：高速10 + 低速50/月
- アドバンス向け：低速1,000/月
- オートコンプリート 5,000/月
- VS Code ベース IDE + AI
- Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1 など
- 無料枠クレカ不要
- Pro: $10/月（高速600 + 低速無制限）

**** [価格](https://trae.ai/pricing) | [ドキュメント](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **OpenAI, Anthropic, Google, xAI モデルアクセス**
- 月25プロンプトクレジット
- OpenAI/Claude/Gemini/xAI
- クレカ要
- 追加クレジット購入可

**** [価格](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Gemini 2.5 Pro アクセス**
- 無料枠：1日15タスク
- 同時3タスク
- モデル Gemini 2.5 Pro
- Gmail アカウント要 (18+)
- 24h ローリングリセット
- クレカ不要
- Pro ($19.99/月): 100タスク/日 (5倍)

**** [使用制限](https://jules.google/docs/usage-limits/) | [ドキュメント](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **Claude 4 Sonnet, Claude 3.7 Sonnet アクセス**
- 月50クレジット (無料)
- Claude 4/3.7 Sonnet (AWS ホスト)
- クレカ不要
- 14日ウェルカムボーナス：500クレジット
- 有料プラン: Pro ($20/月 - 1,000), Pro+ ($40/月 - 2,000), Power ($200/月 - 10,000)

**** [価格](https://kiro.dev/pricing/) | [紹介ブログ](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Qwen3-Coder-480B, Claude, GPT, Gemini モデル**
- 無料: 無制限コンプ/編集 + 限定チャット/エージェント + 2週Proトライアル (1,000)
- Alibaba の AI IDE
- Windows/macOS 対応
- 主に Qwen3-Coder-480B（フラッグシップ）
- Claude, GPT-4, Gemini もサポート
- Agent/Quest モードで自律コーディング
- 無料枠クレカ不要
- 有料: Pro ($20/月 - 2,000), Pro+ ($60/月 - 6,000)

**** [サイト](https://qoder.com/) | [価格](https://qoder.com/pricing)

制限は変わりやすいです。間違い・最新モデル・新ツールはソース付きで Issue/PR してください。

---

## 2. AIコーディングツール向けAPIプロバイダ
（寛大→控えめ）

カーソル、Continue.dev、Cline などと統合されるコード特化モデルのAPIを提供。単体ツールではなく既存ツールのAIバックエンド。

### [OpenRouter](https://openrouter.ai/)

> **OpenRouter経由の Qwen3-Coder-480B**
- 無料50 req/日（$10+ クレジット購入で1,000/日）
- 追加無料モデル: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- 主要IDE向け OpenAI互換API
- 無料モデルはクレカ不要
- 無料枠 20 req/分
- Continue.dev, Cline, Cursor などで利用可

**** [無料モデル](https://openrouter.ai/models/?q=free) | [Qwen3-Coder API](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **Qwen3-235B / Llama 3.1 アクセス**
- 無料: 1M tokens/日
- クレカ不要
- 30 req/分, 8,192 トークン文脈
- モデル: Qwen3-235B, Llama 3.1 70B（注: Qwen3-Coder-480B は 2025/11/5 終了）
- OpenAI互換（Cursor, Continue.dev, Cline, RooCodeなど）
- 2,000 tokens/秒（一般の40倍）
- **有料:** Developer ($10+ self-serve), Enterprise (custom)

**** [価格](https://www.cerebras.ai/pricing) | [API Docs](https://inference-docs.cerebras.ai/) | [統合ガイド](https://inference-docs.cerebras.ai/integrations/)

---

## 3. プロ級モデルの有料プラン


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Jira Standard ($7.53/ユーザー/月):** 20M tokens/日
- **Jira Premium ($15.25/ユーザー/月):** 20M/日
- **Jira Enterprise (カスタム):** 20M/日
- 無料層の4倍 (5M→20M/日)
- 無料と同じClaude系
- UTC真夜中リセット

**** [ドキュメント](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [トークン上限](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira価格](https://www.atlassian.com/software/jira/pricing)

---

### [Claude Code](https://www.anthropic.com/claude-code)

> **Pro ($20/月 or $17/月年払い):** Sonnet 4 を無料層以上使える
- **Max 5x ($100/月):** ~225 メッセージ/5h — 週140–280h Sonnet 4 + 15–35h Opus 4.5
- **Max 20x ($200/月):** ~900 メッセージ/5h — 週240–480h Sonnet 4 + 24–40h Opus 4.5
- 思考モード: think (~4K), megathink (~10K), ultrathink (~32K)
- 複雑リファクタ/設計/デバッグに有用
- Opus 4.5 は Sonnet 4 の約5倍リソース
- 週次リセット（5h ローリング）
- Opus 4.5, Sonnet 4.5, Haiku 4.5 に対応

**** [価格](https://www.anthropic.com/pricing) | [Claude Code ガイド](https://docs.anthropic.com/en/docs/claude-code)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Pro ($19/月):** エージェントリクエスト枠拡大
- 地域・利用に応じ調整あり

**** [価格](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Build ($20/月):** 1,500 AIクレジット/月
- リロードクレジット（旧超過より最大50%安、12か月有効）
- BYOK (APIキー持込) 可能
- 新料金は2025/10/30より新規に適用
- 既存サブは2025/12/1以降の更新で移行
- エンタープライズ: カスタム

**** [価格](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Pro ($10/月):** プレミアム300 + 無制限補完/月
- **Pro+ ($39/月):** 1,500 + 無制限補完/月
- **Business ($19/ユーザー/月):** 300 + 無制限補完/ユーザー/月
- **Enterprise ($39/ユーザー/月):** 1,000 + 無制限補完/ユーザー/月
- **GPT-5.1-Codex-Max** 公開プレビュー (2025/12/4) Pro/Pro+/Business/Enterpriseで利用可
- 複数モデル (GPT-5.1-Codex-Max, GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)
- 超過は $0.04/リクエスト

**** [プラン詳細](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [GPT-5.1-Codex-Max プレビュー](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Pro ($10/月):** 高速600 + 低速無制限（プレミアムモデル）
- 低速無制限（アドバンスモデル）
- レート制限なしで高速アクセス
- 追加高速パック: $3-$12
- プレミアムモデル: Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, Gemini 2.5 Pro, GPT‑4.1, GPT‑4o
- VS Code ベース IDE、フルAI統合
- 初月 $3

**** [価格](https://trae.ai/pricing) | [ドキュメント](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Pro ($15/月):** 月500プロンプト
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
- **$200/月:** 月1.2億トークン

**** [トークンドキュメント](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Hobby（無料）:** 限定エージェント + 限定Tab補完 + 1週間Proトライアル
- **Pro ($20/月 or $16/月 年払い):** エージェント枠拡大 + Tab無制限 + バックグラウンドAgent + 最大コンテキスト
- **Pro+ ($60/月):** OpenAI/Claude/Gemini で3倍使用
- **Ultra ($200/月):** 20倍使用 + 新機能優先
- **Teams ($40/ユーザー/月):** Pro機能 + 集中課金 + 使用分析 + SAML/OIDC SSO
- **Enterprise (カスタム):** Teams + プール型使用 + SCIM + AIコード追跡API + 監査ログ
- **GPT-5.1-Codex-Max が 2025/12/11 まで無料** (77.9% SWE-bench)
- 1週間 Pro トライアル (無料枠)
- 無料枠はリクエストではなくトークン計測
- 無料モデル: Cursor Small, Deepseek v3, Gemini 2.5 Flash, GPT-4o mini (500/日), Grok 3 Mini Beta
- 有料: OpenAI, Claude, Gemini など GPT-5.1-Codex-Max 含む
- 注: 2025年6月頃、無料枠から Claude モデルが除外
- 自律的コード生成が可能なAIコードエディタ

**** [価格](https://cursor.com/en/pricing) | [GPT-5.1-Codex-Max アナウンス](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **ChatGPT Plus ($20/月) で無料:** コーディング用 30–150 メッセージ/5時間
- **ChatGPT Pro ($200/月):** 300–1,500 メッセージ/5時間 — 最大枠
- **従量課金 API:** GPT-5.1-Codex-Max $1.25/$10 per 1M tokens (入出力)
- **無料 OSS モード:** オープンソースモデルのみ (--oss)
- **GPT-5.1-Codex-Max** (2025/11/19): 77.9% SWE-bench Verified — デフォルト
- “compaction” 対応でマルチミリオン・トークンのセッションに対応
- 前世代より思考トークン30%削減
- GitHub Copilot (Pro/Pro+/Business/Enterprise) でも利用可
- Windows サポートあり
- マルチプラットフォーム: macOS 12+, Ubuntu 20.04+, Windows 11 (WSL2)

**** [GitHub リポジトリ](https://github.com/openai/codex) | [GPT-5.1-Codex-Max アナウンス](https://openai.com/index/gpt-5-1-codex-max/)

---

### [Codeium](https://codeium.com/)

> **Pro ($10/月):** 上級コンテキストで無制限利用
- Claude 3.5 Sonnet, GPT-4o にアクセス
- 拡張コンテキストとパーソナライズ
- **Teams ($12/ユーザー/月):** Pro 機能 + チーム管理
- **Enterprise (カスタム):** オンプレ展開・カスタムモデル

**** [価格](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Pro ($12/月):** 高度なAI補完とチャット
- **Enterprise ($39/ユーザー/月):** 複数LLM、プライベート展開
- モデル: Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, 独自モデル
- 600+ 言語サポート
- オンプレ/エアギャップ対応
- 独自ファインチューニングモデル可

**** [価格](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **AI Pro ($15/月):** クラウド枠拡大 + ローカルモデル無制限
- **AI Ultimate ($25/月):** 最大クラウド枠 + 高度機能
- 無料: コード補完無制限 + ローカルモデル + クラウド枠制限
- 30日 Pro トライアル
- All Products Pack に AI Pro 含む
- Ollama/LM Studio 経由でローカルモデル利用

**** [AI 価格](https://www.jetbrains.com/ai-ides/buy/)

---

### [Jules](https://jules.google/)

> **Pro ($19.99/月, Google AI Pro):** 1日100タスク
- 無料枠の5倍（15→100/日）
- 同時5倍（3→15）
- 最新モデルへのアクセス増
- **Ultra (Google AI Ultra):** 1日300タスク
- 無料枠の20倍
- 60同時タスク
- 最新モデルを優先
- Gmailアカウント要 (18+)

**** [使用制限](https://jules.google/docs/usage-limits/) | [Google AIプラン](https://one.google.com/about/google-ai-plans/)

---

### [SuperMaven](https://supermaven.com/)

> **Pro ($10/月):** 1Mトークンコンテキスト + チャットクレジット
- 年額オプション: $99/年
- GPT-4o, Claude 3.5 Sonnet, GPT-4 でチャット
- **Team ($10/ユーザー/月):** Pro 機能 + チーム管理
- 注: 2024/11 に Cursor IDE と統合

**** [価格](https://supermaven.com/pricing)

価格/上限でより良い情報があればソース付きでIssue/PRへ。CONTRIBUTING.md参照。

---

## 4. 基本モデルに無料アクセスできるツール
（未指定/ベーシックモデル）

### [Bolt.new](https://bolt.new/)

> **未公開モデル**
- 月 1M トークン上限
- 具体モデルは非公開
- クレカ必須

**** [トークンドキュメント](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **未公開モデル**
- 1日5クレジット、月30上限（無料）
- モデルは非公開
- クレカ必須

**** [メッセージ上限](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

> **プロプライエタリ（非フロンティア）モデル**
- GPT-5 は v0 Premium が必要
- $5/月 クレジット上限
- 可変ルーティングの独自モデル
- クレカ必須

**** [価格ブログ](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

> **基本的なAIコーディング支援の無制限無料**
- 個人プラン: コード補完/AIチャット/コマンド無制限で永久無料
- 70+ 言語サポート
- IDE: VS Code, JetBrains, Vim/Neovim, Jupyter
- クレカ不要
- コンテキスト理解は限定（有料で拡張）
- ベースモデルのみ（Llama 3.1 70B）、プロ級モデルはサブスク必要

**** [価格](https://codeium.com/pricing) | [ドキュメント](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **無料層（制限あり）**
- 基本的なAI補完とチャット
- ローカル処理対応
- 無料層はコンテキストが大幅制限
- リソース節約のため性能低い
- 600+ 言語対応

**** [価格](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **IDE同梱の無料AI層**
- 無制限コード補完 + ローカルモデル
- クラウド機能には制限
- 30日 AI Pro トライアル
- ローカルモデルでチャット/生成/コミット

**** [AI機能](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

> **基本機能の無料層**
- シンプルなコード提案
- データ保持 7日
- 登録にクレカ必要
- 1M トークンコンテキスト（無料としては大きい）

**** [価格](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

> **柔軟なモデルをサポートする無料OSS拡張**
- VS Code / JetBrains 無料拡張
- Ollama / LM Studio 経由でローカルモデルをフルサポート
- Solo階層: プライベート/チーム/パブリック
- 200+ モデル対応（クラウドは自前 API キー）
- カスタムAIアシスタントのコミュニティハブ
- ベンダーロックインやローカルモデル使用制限なし

**** [GitHub](https://github.com/continuedev/continue) | [Model Hub](https://hub.continue.dev/explore/models)

公式の上限やモデル情報をご存知なら Issue/PR でリンク共有を。CONTRIBUTING.md を参照。

---

## 5. ローカルモデル


オープンウェイトのフロンティアモデルをローカル実行すれば、APIコストや使用制限なく無制限のコーディング支援が得られます。代表ツール: **[Cline](https://cline.bot/)**（VS Code拡張、Plan/Act、MCP対応）、**[Aider](https://aider.chat/)**（CLI + Git統合）、**[Continue.dev](https://www.continue.dev/)**（VS Code拡張、200+モデル対応）。**[Ollama](https://ollama.com/)** と組み合わせ、Devstral（24B、エージェント最適化）、Qwen3-Coder、DeepSeek Coder V2、Codestral、GLM-4.5 などが動作します。

**注意**: フロンティアモデルは大容量メモリ/VRAMが必要。Qwen3‑Coder‑480B の Ollama 向け GGUF は ~150GB、実用的な推論には ~150GB の統合メモリ（RAM+VRAM）が必要になることがあります。30B 量子化でも ~18GB。Unsloth Qwen3‑Coder ローカルガイド（[docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)）や Simon Willison の記事 [GLM‑4.5 AIR をノートPCで動かす](https://simonwillison.net/2025/Jul/29/space-invaders/) を参照。

---

## 比較ノート

- **目的**: プロ級モデルへのアクセスと無料枠でツールを比較すること
- **プロ級基準**: SWE-bench Verified ≥60%。現在: Claude Opus 4.5 (80.9%), GPT-5.1-Codex-Max (77.9%), Claude Sonnet 4.5 (77.2%), Gemini 3 Pro (76.2%), GPT-5 (74.9%), Claude Opus 4.1 (74.5%), Claude Sonnet 4 (72.7%), GPT-5 mini (71.0%), Qwen3-Coder-480B (69.6%), Gemini 2.5 Pro (63.2%)
- **上限の種類**: リクエスト/トークン/クレジット/チャットなど多様で単純比較は困難。ドキュメント参照
- **実利用**: コーディングスタイル、タスク難度、ツール実装で大きく変わる

---

## 関連リソース

- [Coding with AI](https://coding-with-ai.dev/) - LLMでのコーディングに役立つ実践的手法
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - 自作統合に使える無料LLM API集

---

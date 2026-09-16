अंतिम अपडेट: 15 सितंबर 2026 • PRs/issues आमंत्रित हैं

**भाषाएँ:** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md)

# AI कोडिंग टूल्स: जहाँ प्रो-ग्रेड मॉडल वाकई मुफ्त हैं 

कई AI कोडिंग टूल्स “मुफ्त” कहते हैं, लेकिन प्रो-ग्रेड मॉडलों का एक्सेस जल्दी खत्म हो जाता है और डाउनग्रेड हो जाते हैं। हर टूल अलग सीमा (क्रेडिट, टोकन, अनुरोध) उपयोग करता है, तुलना कठिन है। यह सूची साथ-साथ दिखाती है कि वास्तव में मुफ्त में क्या मिलता है।

## TL;DR — प्रो-ग्रेड AI कोडिंग के मुफ्त टियर
_(कोटा इकाइयाँ अलग हैं; क्रम केवल मार्गदर्शक है और समान क्षमता की रैंकिंग नहीं है)_

| टूल | प्रो-ग्रेड मॉडल | मुफ्त सीमा | क्रेडिट कार्ड |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen और अन्य प्रदाता | Qwen OAuth का मुफ़्त स्तर 15 अप्रैल 2026 को बंद हुआ; Alibaba ModelStudio या अन्य प्रदाता उपयोग करें | नहीं |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | प्लान पर निर्भर Rovo Dev मॉडल | पेड Jira के साथ 350 क्रेडिट/उपयोगकर्ता/माह/साइट | नहीं |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Enterprise/सशुल्क API पहुँच जारी; व्यक्तिगत उपयोगकर्ता Antigravity CLI पर जाएँ | व्यक्तिगत मुफ्त/Google AI पहुँच 18 जून 2026 को बंद; Antigravity CLI पर जाएँ | नहीं |
| [Cursor](https://cursor.com/) | Composer; सीमित Agent | सीमित Agent; कोई समयबद्ध प्रचार नहीं | नहीं |
| [Kilo Code](https://kilocode.ai/) | प्रकाशित नहीं | वर्तमान मान सत्यापित नहीं | अज्ञात |
| [Warp](https://warp.dev/) | Warp Agent; BYOK | Free: सीमित cloud agent; ≤10 लोगों वाले व्यक्ति/कंपनी का BYOK Warp क्रेडिट नहीं खर्च करता | अज्ञात |
| [Trae](https://trae.ai/) | प्रकाशित नहीं | वर्तमान मान सत्यापित नहीं | अज्ञात |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | नवीनतम Claude मॉडल (AWS) | 50 एजेंटिक अनुरोध + 1,000 Java LOC/माह | नहीं |
| [GitHub Copilot](https://github.com/features/copilot/plans) | Haiku 4.5, GPT-5 mini और अन्य | 2,000 completions + 50 चैट/माह; एजेंट/CLI सीमित | नहीं |
| [Windsurf](https://windsurf.com/) | प्रकाशित नहीं | वर्तमान मान सत्यापित नहीं | अज्ञात |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | चलती 24-घंटे विंडो में 15 कार्य; 3 साथ-साथ | नहीं |
| [AWS Kiro](https://kiro.dev/) | Claude Sonnet 4.5 और open-weight | 50 क्रेडिट/माह | नहीं |
| [Qoder](https://qoder.com/) | प्रकाशित नहीं | वर्तमान मान सत्यापित नहीं | अज्ञात |

### योग्य प्रो-ग्रेड मॉडल
प्राथमिक स्रोतों के लिंक वाले चुने हुए ऐतिहासिक आँकड़े। परीक्षण की परिस्थितियाँ अलग हैं और यह वर्तमान पूर्ण रैंकिंग नहीं है।

| मॉडल | SWE-bench Verified | प्रदाता |
|-------|-------------------|----------|
| [Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) | 80.9% | Anthropic |
| [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) | 77.2% | Anthropic |
| [Qwen3-Coder-480B](https://qwenlm.github.io/blog/qwen3-coder/) | 69.6% | Alibaba |

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
_(कोटा इकाइयाँ अलग हैं; क्रम केवल मार्गदर्शक है और समान क्षमता की रैंकिंग नहीं है)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Qwen OAuth का मुफ़्त स्तर 15 अप्रैल 2026 को बंद हुआ; Alibaba ModelStudio या अन्य प्रदाता उपयोग करें**
- Qwen OAuth का मुफ़्त स्तर 15 अप्रैल 2026 को बंद हुआ; Alibaba ModelStudio या अन्य प्रदाता उपयोग करें
- प्रमाणीकरण के माध्यम से Qwen और अन्य प्रदाता समर्थित
- टर्मिनल, IDE, डेस्कटॉप और वेब वाला open-source coding agent

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Authentication](https://github.com/QwenLM/qwen-code/blob/main/docs/users/configuration/auth.md)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- पेड Jira प्लान के साथ मुफ्त: 350 Rovo Dev क्रेडिट/उपयोगकर्ता/माह/साइट
- मासिक क्रेडिट सीमा पूरी होने पर उपयोग रुक जाता है
- वर्तमान बिलिंग पेज CLI के लिए कोई निश्चित मॉडल नहीं बताता
- मुफ्त ऐड-ऑन के लिए कार्ड आवश्यक नहीं

**** [डॉक्यूमेंटेशन](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [टोकन सीमा](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **व्यक्तिगत उपयोगकर्ताओं के लिए Gemini CLI से Antigravity CLI में बदलाव**
- 18 जून 2026 को Gemini CLI ने व्यक्तिगत और Google AI Pro/Ultra उपयोगकर्ताओं की सेवा बंद की
- Antigravity CLI सभी के लिए उपलब्ध और माइग्रेशन का रास्ता है
- Standard/Enterprise संगठन की पहुँच जारी है; सशुल्क Gemini API कुंजियाँ समर्थित हैं
- पहली 1,000/दिन और 60/मिनट Google-login सीमा ऐतिहासिक और समाप्त है

**** [Transition announcement](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) | [Documentation](https://ai.google.dev/gemini-api/docs/rate-limits)

---

### [Kilo Code](https://kilocode.ai/)

> **वर्तमान कीमत/सीमाएँ सत्यापित नहीं**
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- पुराने सटीक मानों को वर्तमान नहीं बताया गया है
- किसी सीमा पर भरोसा करने से पहले आधिकारिक लिंक जाँचें

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [ドキュメント](https://kilocode.ai/docs/) | [प्राइसिंग](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Warp Agent और BYOK**
- Free प्लान: क्लाउड एजेंट का सीमित उपयोग; सीमा पर AI रुकता है
- Build $20/माह से, 1,500 क्रेडिट ($20 एजेंट उपयोग शामिल)
- 10 या कम लोगों वाले व्यक्ति और कंपनियों का BYOK/custom inference Warp क्रेडिट नहीं खर्च करता
- उपयोग मॉडल, संदर्भ और कार्य पर निर्भर है

**** [価格](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Free**
- स्थायी मुफ्त स्तर: 50 एजेंटिक अनुरोध/माह और 1,000 Java LOC/माह
- IDE सीमा Builder ID उपयोगकर्ताओं के लिए; IAM सीमा अकाउंट स्तर पर
- Builder ID मुफ्त मार्ग में कार्ड नहीं; Pro के लिए AWS बिलिंग चाहिए
- Pro $19/उपयोगकर्ता/माह और अधिक सीमाएँ देता है

**** [価格](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 2,000 completions और 50 चैट अनुरोध/माह
- Copilot CLI और सीमित एजेंट उपयोग; Free में मॉडल चयन सीमित
- वर्तमान पेज Haiku 4.5, GPT-5 mini और अन्य मॉडल बताता है
- क्रेडिट कार्ड आवश्यक नहीं

**** [プラン詳細](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [エージェントモード](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **वर्तमान कीमत/सीमाएँ सत्यापित नहीं**
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- पुराने सटीक मानों को वर्तमान नहीं बताया गया है
- किसी सीमा पर भरोसा करने से पहले आधिकारिक लिंक जाँचें

**** [価格](https://trae.ai/pricing) | [ドキュメント](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **वर्तमान कीमत/सीमाएँ सत्यापित नहीं**
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- पुराने सटीक मानों को वर्तमान नहीं बताया गया है
- किसी सीमा पर भरोसा करने से पहले आधिकारिक लिंक जाँचें

**** [価格](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Gemini 2.5 Pro アクセス**
- मुफ़्त: चलती 24-घंटे विंडो में 15 कार्य और 3 साथ-साथ
- 同時3タスク
- モデル Gemini 2.5 Pro
- Gmail アカウント要 (18+)
- 24h ローリングリセット
- クレカ不要
- Pro ($19.99/月): 100タスク/日 (5倍)

**** [使用制限](https://jules.google/docs/usage-limits/) | [ドキュメント](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **AWS Kiro Free**
- स्थायी मुफ्त स्तर: 50 क्रेडिट/माह
- सामाजिक लॉगिन या Builder ID से Claude Sonnet 4.5 और open-weight मॉडल, सीमाओं के साथ
- Pro $20/माह: 1,000; Pro+ $40: 2,000; Pro Max $100: 5,000; Power $200: 10,000 क्रेडिट
- पेड प्लान के लिए कार्ड चाहिए

**** [価格](https://kiro.dev/pricing/) | [紹介ブログ](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **वर्तमान कीमत/सीमाएँ सत्यापित नहीं**
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- पुराने सटीक मानों को वर्तमान नहीं बताया गया है
- किसी सीमा पर भरोसा करने से पहले आधिकारिक लिंक जाँचें

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

> **वर्तमान कीमत/सीमाएँ सत्यापित नहीं**
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- पुराने सटीक मानों को वर्तमान नहीं बताया गया है
- किसी सीमा पर भरोसा करने से पहले आधिकारिक लिंक जाँचें

**** [価格](https://www.cerebras.ai/pricing) | [API Docs](https://inference-docs.cerebras.ai/) | [統合ガイド](https://inference-docs.cerebras.ai/integrations/)

---

## 3. プロ級モデルの有料プラン


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- पेड Jira प्लान के साथ मुफ्त: 350 Rovo Dev क्रेडिट/उपयोगकर्ता/माह/साइट
- मासिक क्रेडिट सीमा पूरी होने पर उपयोग रुक जाता है
- वर्तमान बिलिंग पेज CLI के लिए कोई निश्चित मॉडल नहीं बताता
- मुफ्त ऐड-ऑन के लिए कार्ड आवश्यक नहीं
- Standard: $20/उपयोगकर्ता/माह, 2,000 क्रेडिट/उपयोगकर्ता/माह

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

> **Amazon Q Developer Free**
- स्थायी मुफ्त स्तर: 50 एजेंटिक अनुरोध/माह और 1,000 Java LOC/माह
- IDE सीमा Builder ID उपयोगकर्ताओं के लिए; IAM सीमा अकाउंट स्तर पर
- Builder ID मुफ्त मार्ग में कार्ड नहीं; Pro के लिए AWS बिलिंग चाहिए
- Pro $19/उपयोगकर्ता/माह और अधिक सीमाएँ देता है

**** [価格](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Warp Agent और BYOK**
- Free प्लान: क्लाउड एजेंट का सीमित उपयोग; सीमा पर AI रुकता है
- Build $20/माह से, 1,500 क्रेडिट ($20 एजेंट उपयोग शामिल)
- 10 या कम लोगों वाले व्यक्ति और कंपनियों का BYOK/custom inference Warp क्रेडिट नहीं खर्च करता
- उपयोग मॉडल, संदर्भ और कार्य पर निर्भर है

**** [価格](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 2,000 completions और 50 चैट अनुरोध/माह
- Copilot CLI और सीमित एजेंट उपयोग; Free में मॉडल चयन सीमित
- वर्तमान पेज Haiku 4.5, GPT-5 mini और अन्य मॉडल बताता है
- क्रेडिट कार्ड आवश्यक नहीं

**** [プラン詳細](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [GPT-5.1-Codex-Max プレビュー](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **वर्तमान कीमत/सीमाएँ सत्यापित नहीं**
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- पुराने सटीक मानों को वर्तमान नहीं बताया गया है
- किसी सीमा पर भरोसा करने से पहले आधिकारिक लिंक जाँचें

**** [価格](https://trae.ai/pricing) | [ドキュメント](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **वर्तमान कीमत/सीमाएँ सत्यापित नहीं**
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- पुराने सटीक मानों को वर्तमान नहीं बताया गया है
- किसी सीमा पर भरोसा करने से पहले आधिकारिक लिंक जाँचें

**** [価格](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Lovable अब क्रेडिट आधारित है**
- Free में रोज़ 5 build क्रेडिट (महीने में अधिकतम 30), 20 मासिक Cloud क्रेडिट और 4 मासिक AI क्रेडिट हैं
- क्रेडिट और grants की समाप्ति अलग है; आधिकारिक pricing देखें

**** [Pricing](https://lovable.dev/pricing)

---

### [Bolt.new](https://bolt.new/)

> **Free में रोज़ 300K और महीने में 1M token सीमा है**
- Pro $25/माह से 10M token/माह; Teams $30/सदस्य/माह से
- सशुल्क token सक्रिय सदस्यता में एक महीने तक rollover होते हैं

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Cursor Free और पेड प्लान**
- Hobby मुफ्त, बिना कार्ड, सीमित Agent और Composer एक्सेस
- Pro $20/माह; Pro+ $60; Ultra $200; Teams Standard $40/उपयोगकर्ता/माह
- GPT-5.1-Codex-Max का 11 दिसंबर 2025 तक मुफ्त प्रचार समाप्त हो चुका है
- उपयोग और मॉडल प्लान पर निर्भर हैं

**** [価格](https://cursor.com/en/pricing) | [GPT-5.1-Codex-Max アナウンス](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Codex प्लान और API बिलिंग**
- Codex Free ($0), Go ($8/माह), Plus ($20/माह), Pro ($100/माह से), Business ($20/उपयोगकर्ता वार्षिक या $25 मासिक), Edu और Enterprise में शामिल है
- API कुंजी मॉडल के अनुसार अलग बिल होती हैं; local और cloud उपयोग प्लान सीमा साझा करते हैं
- सीमाएँ कार्य की जटिलता पर निर्भर हैं; आधिकारिक pricing देखें

**** [Pricing](https://developers.openai.com/codex/pricing/) | [GitHub](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

> **वर्तमान कीमत/सीमाएँ सत्यापित नहीं**
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- पुराने सटीक मानों को वर्तमान नहीं बताया गया है
- किसी सीमा पर भरोसा करने से पहले आधिकारिक लिंक जाँचें

**** [価格](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Tabnine के वर्तमान सशुल्क प्लान**
- Code Assistant: वार्षिक बिलिंग में $39/उपयोगकर्ता/माह; Agentic Platform: $59/उपयोगकर्ता/माह
- वर्तमान pricing में मुफ़्त tier विज्ञापित नहीं है
- अपने on-prem/cloud LLM का उपयोग Tabnine द्वारा असीमित है; Tabnine LLM पर provider लागत +5% शुल्क है

**** [Pricing](https://www.tabnine.com/pricing/)

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
- Google AI Pro के साथ Jules Pro: चलती 24 घंटे में 100 कार्य और 15 साथ-साथ
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

> **Free में रोज़ 300K और महीने में 1M token सीमा है**
- Pro $25/माह से 10M token/माह; Teams $30/सदस्य/माह से
- सशुल्क token सक्रिय सदस्यता में एक महीने तक rollover होते हैं

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Lovable अब क्रेडिट आधारित है**
- Free में रोज़ 5 build क्रेडिट (महीने में अधिकतम 30), 20 मासिक Cloud क्रेडिट और 4 मासिक AI क्रेडिट हैं
- क्रेडिट और grants की समाप्ति अलग है; आधिकारिक pricing देखें

**** [Pricing](https://lovable.dev/pricing)

---

### [v0.dev](https://v0.dev/)

> **Free में हर माह $5 क्रेडिट और रोज़ 7 संदेश हैं**
- Plus $30/उपयोगकर्ता/माह और $30 क्रेडिट; Business $100/उपयोगकर्ता/माह
- उपयोग input/output token से मापा और credits में बदला जाता है

**** [Pricing](https://api2.v0.dev/pricing)

---

### [Codeium](https://codeium.com/)

> **वर्तमान कीमत/सीमाएँ सत्यापित नहीं**
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- पुराने सटीक मानों को वर्तमान नहीं बताया गया है
- किसी सीमा पर भरोसा करने से पहले आधिकारिक लिंक जाँचें

**** [価格](https://codeium.com/pricing) | [ドキュメント](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Tabnine के वर्तमान सशुल्क प्लान**
- Code Assistant: वार्षिक बिलिंग में $39/उपयोगकर्ता/माह; Agentic Platform: $59/उपयोगकर्ता/माह
- वर्तमान pricing में मुफ़्त tier विज्ञापित नहीं है
- अपने on-prem/cloud LLM का उपयोग Tabnine द्वारा असीमित है; Tabnine LLM पर provider लागत +5% शुल्क है

**** [Pricing](https://www.tabnine.com/pricing/)

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
- **上限の種類**: リクエスト/トークン/クレジット/チャットなど多様で単純比較は困難。ドキュメント参照
- **実利用**: コーディングスタイル、タスク難度、ツール実装で大きく変わる
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- सुलभ आधिकारिक पेज स्थिर कोटा या कीमत तालिका नहीं देता
- **तुलनीयता:** SWE-bench परिणाम अलग परीक्षण स्थितियों से हैं; parallel, interactive और single रन सीधे तुलनीय नहीं हैं। क्रेडिट, टोकन, अनुरोध, चैट और कार्यों को उदारता की रैंकिंग में नहीं बदला जाना चाहिए।

---

## 関連リソース

- [Coding with AI](https://coding-with-ai.dev/) - LLMでのコーディングに役立つ実践的手法
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - 自作統合に使える無料LLM API集

---

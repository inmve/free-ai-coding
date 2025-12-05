Son güncelleme: 5 Aralık 2025 • PR/issue'lar açık

**Diller:** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md) • [Türkçe](README-tr.md)

# AI Kodlama Araçları: Profesyonel Modellerin Gerçekten Ücretsiz Olduğu Yer 

Birçok AI kodlama aracı "ücretsiz" olduğunu iddia eder, ancak profesyonel modellere erişim genellikle hızla tükenir ve ardından düşürülürsünüz. Her araç farklı limitler (kredi, token, istek) kullanır; bu yüzden karşılaştırma zordur. Bu liste, gerçekten ücretsiz ne elde ettiğinizi yan yana gösterir.

## TL;DR — Profesyonel AI Kodlama için Ücretsiz Katmanlar
(daha yüksek limitli araçlar önce)

| Araç | Profesyonel modeller | Ücretsiz limit | Kredi kartı |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen3-Coder-480B | 2.000 istek/gün | Hayır |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Claude Sonnet 4 | 5M token/gün (beta) | Hayır |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Gemini 3 Pro, Gemini 2.5 Pro | Gemini 3 Pro (bekleme/ücretli), 100 istek/gün Gemini 2.5 Pro | Hayır |
| [Cursor](https://cursor.com/) | GPT-5.1-Codex-Max | 11 Aralık 2025'e kadar ücretsiz (77.9% SWE-bench) | Hayır |
| [Kilo Code](https://kilocode.ai/) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | $25'e kadar kayıt kredisi (tek seferlik) | Evet |
| [Warp](https://warp.dev/) | GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro | 150 kredi/ay (ilk 2 ay), sonra 75/ay | Hayır |
| [Trae](https://trae.ai/) | Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro | Ayda 10 hızlı + 50 yavaş istek | Hayır |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Claude Sonnet 4 | Ayda 50 ajantik istek | Evet |
| [GitHub Copilot](https://github.com/features/copilot/plans) | GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1 | Ayda 50 sohbet + 2.000 tamamlama | Hayır |
| [Windsurf](https://windsurf.com/) | OpenAI, Anthropic, Google, xAI | Ayda 25 kredi | Evet |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | Günde 15 görev | Hayır |
| [AWS Kiro](https://kiro.dev/) | Claude 4 Sonnet, Claude 3.7 Sonnet | Ayda 50 kredi | Hayır |
| [Qoder](https://qoder.com/) | Qwen3-Coder-480B, Claude, GPT, Gemini | Ücretsiz + 2 haftalık Pro deneme (1.000 kredi) | Hayır |

### Uygun profesyonel modeller
SWE-bench Verified'da >%60 alan modeller profesyonel kabul edilir. Mevcut liste:

| Model | SWE-bench Verified | Sağlayıcı |
|-------|-------------------|----------|
| Claude Opus 4.5 | %80.9 | Anthropic |
| GPT-5.1-Codex-Max | %77.9 | OpenAI |
| Claude Sonnet 4.5 | %77.2 (paralel %82.0) | Anthropic |
| Gemini 3 Pro | %76.2 | Google |
| GPT-5 | %74.9 | OpenAI |
| Claude Opus 4.1 | %74.5 | Anthropic |
| Claude Sonnet 4 | %72.7 (paralel %80.2) | Anthropic |
| GPT-5 mini | %71.0 | OpenAI |
| Qwen3-Coder-480B | %69.6 (etkileşimli) / %67.0 (tekil) | Alibaba |
| Gemini 2.5 Pro | %63.2 | Google |

### Katkı

Hata, kaynak eksiği veya güncel kota/model bilgisi görürseniz, kaynakla birlikte issue ya da PR açın. Yeni araç katkıları memnuniyetle karşılanır! Ayrıntılar için CONTRIBUTING.md.

### Sorumluluk Reddi

Herhangi bir sağlayıcıyla bağlantı yoktur. Tüm markalar sahiplerine aittir. Bilgiler araştırma içindir; doğruluk garanti edilmez; limitler/fiyatlar sık değişir.

## İçindekiler

- [1. Profesyonel modellere ücretsiz erişim sunan AI kodlama araçları](#1-profesyonel-modellere-ucretsiz-erisimi-sunan-ai-kodlama-araclari)
- [2. AI kodlama araçları için API sağlayıcıları](#2-ai-kodlama-araclari-icin-api-saglayicilari)
- [3. Profesyonel modelleri içeren ücretli katmanlı araçlar](#3-profesyonel-modelleri-iceren-ucretli-katmanli-araclar)
- [4. Temel modellere ücretsiz erişim sunan araçlar](#4-temel-modellere-ucretsiz-erisim-sunan-araclar)
- [5. Yerel modeller](#5-yerel-modeller)
- [Karşılaştırma notları](#karsilastirma-notlari)
- [İlgili kaynaklar](#ilgili-kaynaklar)

## 1. Profesyonel modellere ücretsiz erişim sunan AI kodlama araçları
(en cömertten en aza doğru)

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Qwen3-Coder-480B erişimi**
- Qwen OAuth ile günde 2.000 istek
- Dakikada 60 istek sınırı
- Gemini CLI'den uyarlanan komut satırı AI iş akışı
- Tek tıkla tarayıcı doğrulaması
- Kredi kartı gerekmez

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Dokümantasyon](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Beta sırasında Claude Sonnet 4 erişimi**
- Günde 5M token (ilk gün 20M)
- Claude Sonnet 4 modeli (testlerle doğrulandı)
- Beta'da kredi kartı gerekmez
- Token limitleri UTC gece yarısı sıfırlanır
- 20M/gün için Jira Standard/Premium/Enterprise'a yükseltin

**** [Dokümantasyon](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token limitleri](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini 3 Pro ve Gemini 2.5 Pro erişimi**
- Gemini 3 Pro 4 Aralık 2025'te Google AI Ultra aboneleri ve ücretli API kullanıcılarına açıldı
- Gemini 3 Pro: %76.2 SWE-bench — Google'ın en iyi kodlama modeli
- Gemini 2.5 Pro için ücretsiz geri dönüş: 100 istek/gün
- Gemini 2.5 Flash: 250 istek/gün
- Ücretsiz katmanda kredi kartı gerekmez
- Google AI Pro, Gemini Code Assist standard ve ücretsiz kullanıcılar için bekleme listesi
- `/settings` → Preview features → true ile etkinleştir

**** [Oran limitleri](https://ai.google.dev/gemini-api/docs/rate-limits) | [Fiyatlandırma](https://ai.google.dev/gemini-api/docs/pricing) | [Gemini 3 Pro duyurusu](https://developers.googleblog.com/en/5-things-to-try-with-gemini-3-pro-in-gemini-cli/)

---

### [Kilo Code](https://kilocode.ai/)

> **Claude Opus/Sonnet, Gemini 2.5 Pro, GPT-4.1 erişimi**
- Tek seferlik $25'e kadar kayıt kredisi
- Açık kaynak VS Code uzantısı
- Model fiyatına ek ücret yok, kullanıma göre ödeme
- Bonus krediler için kredi kartı gerekli
- Kendi API anahtarınızı getirebilirsiniz

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [Dokümantasyon](https://kilocode.ai/docs/) | [Fiyatlandırma](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro erişimi**
- Ayda 150 AI kredisi (ilk 2 ay), ardından 75/ay
- Birden çok sağlayıcı (OpenAI GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro)
- Temel kayıt için kredi kartı gerekmez
- 30 Ekim 2025'te açıklanan yeni fiyat: tek Build planı ($20/ay) 1.500 kredi ile

**** [Fiyatlandırma](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Claude Sonnet 4 erişimi**
- Ayda 50 ajantik istek (çok turlu konuşma)
- En güncel Claude modelleri (AWS barındırmalı)
- Kredi kartı gerekli
- Devam için Pro'ya yükseltme gerekir
- Sürekli ücretsiz katman

**** [Fiyatlandırma](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Agent Mode (GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)**
- Ayda 50 sohbet + 2.000 tamamlama
- Otonom çok adımlı kodlama
- Birden çok sağlayıcı (GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)
- Kredi kartı gerekmez
- Kotadan sonra temel özellikler

**** [Plan detayları](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Agent Mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro erişimi**
- Premium modeller için ayda 10 hızlı + 50 yavaş istek
- Gelişmiş modeller için ayda 1.000 yavaş istek
- Ayda 5.000 otomatik tamamlama
- VS Code tabanlı, AI entegre IDE
- Premium modeller: Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1
- Ücretsiz katmanda kredi kartı gerekmez
- Pro plan: $10/ay (600 hızlı + sınırsız yavaş)

**** [Fiyatlandırma](https://trae.ai/pricing) | [Dokümantasyon](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **OpenAI, Anthropic, Google, xAI modelleri**
- Ayda 25 prompt kredisi
- Birden çok sağlayıcı (OpenAI, Claude, Gemini, xAI)
- Kredi kartı gerekli
- Ek kredi satın alınabilir

**** [Fiyatlandırma](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Gemini 2.5 Pro erişimi**
- Günlük 15 görev (ücretsiz)
- Aynı anda 3 görev
- Gemini 2.5 Pro modeli
- Gmail hesabı gerekir (18+)
- 24 saatlik kayan pencerede reset
- Kredi kartı gerekmez
- Pro ($19.99/ay): Günde 100 görev (5x)

**** [Kullanım limitleri](https://jules.google/docs/usage-limits/) | [Dokümantasyon](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **Claude 4 Sonnet, Claude 3.7 Sonnet erişimi**
- Ayda 50 kredi (ücretsiz katman)
- Claude 4 Sonnet ve Claude 3.7 Sonnet (AWS barındırmalı)
- Kredi kartı gerekmez
- 14 günlük hoş geldin bonusu: 500 kredi
- Ücretli: Pro ($20/ay - 1.000), Pro+ ($40/ay - 2.000), Power ($200/ay - 10.000)

**** [Fiyatlandırma](https://kiro.dev/pricing/) | [Giriş blogu](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Qwen3-Coder-480B, Claude, GPT, Gemini modelleri**
- Ücretsiz: sınırsız tamamlama/düzenleme + sınırlı sohbet/agent + 2 haftalık Pro deneme (1.000 kredi)
- Alibaba'nın AI IDE'si
- Windows ve macOS için
- Ana model: Qwen3-Coder-480B
- Claude, GPT-4, Gemini desteği
- Agent ve Quest modlarıyla otonom kodlama
- Ücretsiz katmanda kredi kartı yok
- Ücretli: Pro ($20/ay - 2.000), Pro+ ($60/ay - 6.000)

**** [Site](https://qoder.com/) | [Fiyatlandırma](https://qoder.com/pricing)

Limitler hızla değişir. Hata, yeni kota/model veya eklemek istediğiniz araç varsa kaynakla issue/PR açın. CONTRIBUTING.md'ye bakın.

---

## 2. AI kodlama araçları için API sağlayıcıları
(en cömertten en aza)

Bu servisler Cursor, Continue.dev, Cline gibi araçlara entegre edilen kod odaklı modellere API erişimi sunar. Kendi başına araç değil, mevcut araçların AI arka ucu olarak çalışırlar.

### [OpenRouter](https://openrouter.ai/)

> **OpenRouter ile Qwen3-Coder-480B**
- Ücretsiz 50 istek/gün (10$+ kredi alınca 1.000/gün)
- Ek ücretsiz modeller: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- Başlıca IDE'ler için OpenAI uyumlu API
- Ücretsiz modellerde kredi kartı yok
- Ücretsizte 20 istek/dak
- Continue.dev, Cline, Cursor vb. ile çalışır

**** [Ücretsiz modeller](https://openrouter.ai/models/?q=free) | [Qwen3-Coder API](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **Qwen3-235B ve Llama 3.1 erişimi**
- Ücretsiz: günde 1M token
- Kredi kartı gerekmez
- Dakikada 30 istek, 8.192 token bağlam
- Modeller: Qwen3-235B, Llama 3.1 70B (Not: Qwen3-Coder-480B 5 Kas 2025'te kaldırıldı)
- OpenAI uyumlu (Cursor, Continue.dev, Cline, RooCode, vb.)
- Çok hızlı çıkarım: 2.000 token/sn (tipik sağlayıcılardan 40x hızlı)
- **Ücretli:** Developer ($10+ self-serve), Enterprise (özel)

**** [Fiyat](https://www.cerebras.ai/pricing) | [API Doküman](https://inference-docs.cerebras.ai/) | [Entegrasyon rehberleri](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Profesyonel modelleri içeren ücretli katmanlı araçlar


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Jira Standard ($7.53/kullanıcı/ay):** 20M token/gün
- **Jira Premium ($15.25/kullanıcı/ay):** 20M token/gün
- **Jira Enterprise (özel):** 20M token/gün
- Ücretsiz katmana göre 4x artış (5M → 20M)
- Ücretsizle aynı Claude tabanlı model
- UTC gece yarısı sıfırlanır

**** [Dokümantasyon](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token limitleri](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira fiyatları](https://www.atlassian.com/software/jira/pricing)

---

### [Claude Code](https://www.anthropic.com/claude-code)

> **Pro ($20/ay veya $17/ay yıllık):** Ücretsiz katmandan fazla Sonnet 4 kullanımı
- **Max 5x ($100/ay):** ~225 mesaj/5 saat — haftada 140–280 saat Sonnet 4 + 15–35 saat Opus 4.5
- **Max 20x ($200/ay):** ~900 mesaj/5 saat — haftada 240–480 saat Sonnet 4 + 24–40 saat Opus 4.5
- think (~4K), megathink (~10K), ultrathink (~32K) modları
- Ultrathink karmaşık refaktör, mimari, derin debug için
- Opus 4.5, Sonnet 4'ten ~5x daha maliyetli
- 5 saatlik kayan pencereyle haftalık reset
- Opus 4.5, Sonnet 4.5, Haiku 4.5 destekler

**** [Fiyat](https://www.anthropic.com/pricing) | [Claude Code Rehberi](https://docs.anthropic.com/en/docs/claude-code)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Pro ($19/ay):** Agent istek limitleri artar
- Kullanım bölge ve desenlere göre ayarlanabilir

**** [Fiyat](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Build ($20/ay):** Ayda 1.500 AI kredisi
- Yenileme kredileri (%50'ye kadar ucuz, 12 ay geçerli)
- BYOK seçeneği
- Yeni fiyatlar 30 Ekim 2025'ten itibaren yeni müşterilere
- Mevcut aboneler 1 Aralık 2025'ten sonraki yenilemede geçer
- Enterprise: özel fiyat

**** [Fiyat](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Pro ($10/ay):** 300 premium istek + sınırsız tamamlama/ay
- **Pro+ ($39/ay):** 1.500 premium + sınırsız/ay
- **Business ($19/kullanıcı/ay):** 300 premium + sınırsız/kullanıcı/ay
- **Enterprise ($39/kullanıcı/ay):** 1.000 premium + sınırsız/kullanıcı/ay
- **GPT-5.1-Codex-Max** 4 Aralık 2025'ten public preview (Pro/Pro+/Business/Enterprise)
- Çoklu modeller: GPT-5.1-Codex-Max, GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1
- Aşım $0.04/istek

**** [Plan detayları](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [GPT-5.1-Codex-Max duyurusu](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Pro ($10/ay):** Premium modeller için 600 hızlı + sınırsız yavaş
- Gelişmiş modellerde yavaş sınırsız
- Oran kısıtı yok, daha hızlı erişim
- Ek hızlı paketler: $3-$12
- Premium modeller: Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, Gemini 2.5 Pro, GPT‑4.1, GPT‑4o
- VS Code tabanlı, tam AI entegrasyonlu
- İlk ay $3

**** [Fiyat](https://trae.ai/pricing) | [Dokümantasyon](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Pro ($15/ay):** Ayda 500 prompt kredisi
- **Teams ($30/kullanıcı/ay):** 500 prompt/kullanıcı/ay
- **Enterprise ($60+/kullanıcı/ay):** 1.000 prompt/kullanıcı/ay

**** [Fiyat](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Pro ($25/ay):** Ayda 150 kredi (günde 5)
- **Teams ($30/ay):** Daha yüksek limitler (açıklanmadı)

**** [Mesaj limitleri](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

> **$20/ay:** Ayda 10M token
- **$200/ay:** Ayda 120M token

**** [Token dokümanı](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Hobby (Ücretsiz):** Sınırlı Agent + sınırlı Tab + 1 haftalık Pro deneme
- **Pro ($20/ay veya $16/ay yıllık):** Geniş Agent limitleri + sınırsız Tab tamamlama + Arka plan Agent + maksimum bağlam
- **Pro+ ($60/ay):** Tüm OpenAI, Claude, Gemini modellerinde 3x kullanım
- **Ultra ($200/ay):** 20x kullanım + yeni özelliklerde öncelik
- **Teams ($40/kullanıcı/ay):** Pro özellikleri + merkezi faturalama + kullanım analizi + SAML/OIDC SSO
- **Enterprise (Özel):** Teams + paylaşımlı kullanım + SCIM + AI kod takip API'si + denetim kayıtları
- **GPT-5.1-Codex-Max 11 Aralık 2025'e kadar herkese ücretsiz** (77.9% SWE-bench)
- Ücretsiz katmanda 1 haftalık Pro denemesi
- Ücretsiz katman artık istek değil token takibi kullanır
- Ücretsiz modeller: Cursor Small, Deepseek v3, Gemini 2.5 Flash, GPT-4o mini (500/gün), Grok 3 Mini Beta
- Ücretli katman: OpenAI, Claude, Gemini modelleri (GPT-5.1-Codex-Max dahil)
- Not: Claude modelleri ~2025 Haziran'da ücretsizten çıkarıldı
- Otonom kodlama yetenekli AI destekli editör

**** [Fiyat](https://cursor.com/en/pricing) | [GPT-5.1-Codex-Max duyurusu](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **ChatGPT Plus ($20/ay) ile ücretsiz:** Kodlama için 5 saatte 30–150 mesaj
- **ChatGPT Pro ($200/ay):** 5 saatte 300–1.500 mesaj — en yüksek limitler
- **Kullandığın kadar öde API:** GPT-5.1-Codex-Max $1.25/$10 her 1M token (girdi/çıktı)
- **Ücretsiz OSS modu:** Sadece açık kaynak modeller (--oss bayrağı)
- **GPT-5.1-Codex-Max** (19 Kas 2025): 77.9% SWE-bench — varsayılan model
- Çok milyon token oturumları için ilk "compaction" destekli model
- Önceki GPT-5.1-Codex'e göre %30 daha az düşünme token'ı
- GitHub Copilot (Pro, Pro+, Business, Enterprise) ile de mevcut
- Windows desteği eklendi
- Çapraz platform: macOS 12+, Ubuntu 20.04+, Windows 11 (WSL2)

**** [GitHub](https://github.com/openai/codex) | [GPT-5.1-Codex-Max duyurusu](https://openai.com/index/gpt-5-1-codex-max/)

---

### [Codeium](https://codeium.com/)

> **Pro ($10/ay):** Gelişmiş bağlamla sınırsız kullanım
- Claude 3.5 Sonnet, GPT-4o erişimi
- Geniş bağlam penceresi ve kişiselleştirme
- **Teams ($12/kullanıcı/ay):** Pro özellikleri + takım yönetimi
- **Enterprise (Özel):** On-prem dağıtım, özel modeller

**** [Fiyatlandırma](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Pro ($12/ay):** Gelişmiş AI tamamlama ve sohbet
- **Enterprise ($39/kullanıcı/ay):** Birden fazla LLM, özel dağıtım
- Modeller: Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, özel
- 600+ programlama dili
- On-prem ve izole dağıtım seçenekleri
- Kendi fine-tune modellerini getirme

**** [Fiyat](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **AI Pro ($15/ay):** Daha yüksek bulut kota + sınırsız yerel model
- **AI Ultimate ($25/ay):** Maksimum bulut kota + gelişmiş özellikler
- Ücretsiz katman: sınırsız kod tamamlama + yerel model + sınırlı bulut kota
- 30 günlük Pro deneme dahil
- All Products Pack AI Pro içerir
- Ollama/LM Studio ile yerel model offline

**** [AI fiyat](https://www.jetbrains.com/ai-ides/buy/)

---

### [Jules](https://jules.google/)

> **Pro ($19.99/ay, Google AI Pro):** 100 görev/gün
- Ücretsiz katmandan 5x (15 → 100 görev/gün)
- 5x eşzamanlı görev (3 → 15)
- En yeni modellere daha yüksek erişim
- **Ultra (Google AI Ultra):** 300 görev/gün
- Ücretsiz katmandan 20x
- 60 eşzamanlı görev
- Yeni modellere öncelik
- Gmail hesabı gerekir (18+)

**** [Kullanım limitleri](https://jules.google/docs/usage-limits/) | [Google AI planları](https://one.google.com/about/google-ai-plans/)

---

### [SuperMaven](https://supermaven.com/)

> **Pro ($10/ay):** 1M token bağlam penceresi + sohbet kredileri
- Alternatif: $99/yıl
- Sohbet: GPT-4o, Claude 3.5 Sonnet, GPT-4
- **Team ($10/kullanıcı/ay):** Pro özellikleri + takım yönetimi
- Not: Kasım 2024'te Cursor IDE ile birleşti

**** [Fiyat](https://supermaven.com/pricing)

Daha iyi fiyat/limit biliyorsanız, güncellemek için issue/PR'da kaynak paylaşın. CONTRIBUTING.md'ye bakın.

---

## 4. Temel modellere ücretsiz erişim sunan araçlar
(belirtilmemiş/temel modeller)

### [Bolt.new](https://bolt.new/)

> **Belirtilmemiş modeller**
- Aylık 1M token limiti
- Spesifik model kamuya açık değil
- Kredi kartı gerekir

**** [Token dokümantasyonu](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Belirtilmemiş modeller**
- Günde 5 kredi, ayda 30 (ücretsiz)
- Modeller kamuya açık listelenmiyor
- Kredi kartı gerekir

**** [Mesaj limitleri](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

> **Özel (frontier olmayan) modeller**
- GPT-5 erişimi için v0 Premium gerekir
- $5/ay kredi limiti
- Çeşitli yönlendirmeyle özel modeller
- Kredi kartı gerekir

**** [Güncellenmiş fiyat blogu](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

> **Temel AI kodlama desteği ücretsiz ve sınırsız**
- Bireysel plan: sınırsız tamamlama/AI sohbet/komut ile sonsuza dek ücretsiz
- 70+ programlama dili
- IDE entegrasyonları: VS Code, JetBrains, Vim/Neovim, Jupyter
- Kredi kartı gerekmez
- Bağlam farkındalığı sınırlı (ücretli katmanlarda genişler)
- Sadece temel model (Llama 3.1 70B); profesyonel modeller abonelik gerektirir

**** [Fiyat](https://codeium.com/pricing) | [Dokümantasyon](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Sınırlı özellikli ücretsiz katman**
- Temel AI kod tamamlama ve sohbet
- Yerel işlem seçeneği
- Ücretsiz katmanda bağlam çok sınırlı
- Kaynak tasarrufu için performans kısılmış
- 600+ dil desteği

**** [Fiyat](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **IDE'lerle gelen ücretsiz AI katmanı**
- Sınırsız kod tamamlama ve yerel model desteği
- Bulut özellikleri için sınırlı kota
- 30 günlük AI Pro denemesi
- Yerel modellerle sohbet/kod üretimi/commit mesajları

**** [AI özellikleri](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

> **Temel özellikli ücretsiz katman**
- Basit kod önerileri
- 7 günlük veri saklama
- Kayıt için kredi kartı gerekir
- 1M token bağlam penceresi (ücretsiz için dikkat çekici)

**** [Fiyat](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

> **Esnek model desteği olan ücretsiz açık kaynak uzantı**
- VS Code ve JetBrains için ücretsiz uzantı
- Ollama, LM Studio aracılığıyla yerel modelleri tam destekler
- Solo katman: özel/ekip/genel seçenekleri
- 200+ model (bulut için kendi API anahtarınız gerekir)
- Özel AI asistanları için topluluk hub'ı
- Yerel modellerde satıcı bağımlılığı veya kullanım limiti yok

**** [GitHub](https://github.com/continuedev/continue) | [Model Hub](https://hub.continue.dev/explore/models)

Resmi limit veya modeli biliyor musunuz? Güncellemek için issue/PR'de link paylaşın. CONTRIBUTING.md'ye bakın.

---

## 5. Yerel modeller


Açık ağırlıklı frontier modellerini yerelde çalıştırmak, API maliyeti olmadan sınırsız kod yardımı sağlar. Popüler araçlar: **[Cline](https://cline.bot/)** (VS Code eklentisi, Plan/Act, MCP), **[Aider](https://aider.chat/)** (CLI + Git entegrasyonu), **[Continue.dev](https://www.continue.dev/)** (VS Code eklentisi, 200+ model). Hepsi **[Ollama](https://ollama.com/)** ile Devstral (24B, agent odaklı), Qwen3-Coder, DeepSeek Coder V2, Codestral, GLM-4.5 gibi modelleri çalıştırır.

**Not**: Frontier modeller yüksek RAM/VRAM ister. Qwen3‑Coder‑480B'nin Ollama GGUF'u ~150GB, pratik çıkarım ~150GB birleşik bellek (RAM+VRAM) gerektirebilir; 30B quant genelde ~18GB ister. Detaylar için Unsloth Qwen3‑Coder yerel rehberi ([docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) ve Simon Willison'ın [GLM‑4.5 AIR'i laptopta çalıştırıp Space Invaders yaptığı yazı](https://simonwillison.net/2025/Jul/29/space-invaders/)na bakın.

---

## Karşılaştırma notları

- **Hedef**: AI kodlama araçlarını profesyonel model erişimi ve ücretsiz limitlere göre karşılaştırmak.
- **Profesyonel kriteri**: SWE-bench Verified ≥%60. Mevcut: Claude Opus 4.5 (80.9%), GPT-5.1-Codex-Max (77.9%), Claude Sonnet 4.5 (77.2%), Gemini 3 Pro (76.2%), GPT-5 (74.9%), Claude Opus 4.1 (74.5%), Claude Sonnet 4 (72.7%), GPT-5 mini (71.0%), Qwen3-Coder-480B (69.6%), Gemini 2.5 Pro (63.2%).
- **Limit türleri**: İstek, token, kredi, sohbet vs. doğrudan karşılaştırmak zor; belgeleri kontrol edin.
- **Gerçek kullanım**: Kodlama stiline, görev karmaşıklığına ve araç uygulamasına göre büyük değişkenlik gösterir.

---

## İlgili kaynaklar

- [Coding with AI](https://coding-with-ai.dev/) - LLM ile kodlamaya dair pratik teknikler
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Kendi entegrasyonlarınız için ücretsiz LLM API listesi

---

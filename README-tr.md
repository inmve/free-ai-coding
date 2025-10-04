Son güncelleme: 4 Ekim 2025 • PR/issue'lar açık • ⭐ Daha sonra dönmek için yıldızla

**Diller:** [English](README.md) • [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Türkçe](README-tr.md)

# AI Kodlama Araçları: Profesyonel Modellerin Gerçekten Ücretsiz Olduğu Yer

Birçok AI kodlama aracı "ücretsiz" olduğunu iddia eder, ancak profesyonel sınıf modellere erişim genellikle hızla tükenir ve ardından düşük seviyeye indirilirsiniz. Her araç farklı limitler kullanır (kredi, token, istek), bu yüzden adil karşılaştırma zordur. Bu liste onları yan yana koyar ve **gerçekte ücretsiz olarak neler elde ettiğinizi** gösterir.

## TL;DR — Profesyonel Sınıf AI Kodlama için Ücretsiz Katmanlar
_(yüksek limitli araçlar önce listelenir)_

| Araç | Profesyonel sınıf modeller | Ücretsiz katman limiti | Kredi kartı |
|------|---------------------------|------------------------|----------------------------------|-------------|
| [Qwen Code](#qwen-code) | Qwen3-Coder-480B | 2,000 istek/gün | Hayır |
| [Rovo Dev CLI](#rovo-dev-cli) | Claude Sonnet 4 | 5M token/gün (beta) | Hayır |
| [Gemini CLI](#gemini-cli) | Gemini 2.5 Pro | 100 istek/gün | Hayır |
| [Kilo Code](#kilo-code) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | $20 kayıt kredisi (tek seferlik) | Evet |
| [Warp](#warp) | GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro | 150 istek/ay | Hayır |
| [Trae](#trae) | Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro | 10 hızlı + 50 yavaş istek/ay | Hayır |
| [Amazon Q Developer](#amazon-q-developer) | Claude Sonnet 4 | 50 ajantik istek/ay | Evet |
| [GitHub Copilot](#github-copilot) | GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1 | 50 sohbet isteği + 2,000 tamamlama/ay | Hayır |
| [Windsurf](#windsurf) | OpenAI, Anthropic, Google, xAI | 25 kredi/ay | Evet |
| [Jules](#jules) | Gemini 2.5 Pro | 15 görev/gün | Hayır |
| [AWS Kiro](#aws-kiro) | Claude 4 Sonnet, Claude 3.7 Sonnet | 50 kredi/ay | Hayır |
| [Qoder](#qoder) | Qwen3-Coder-480B, Claude, GPT, Gemini | Sınırlı kredi (önizleme) | Hayır (önizleme) |

## Bunu Daha Doğru Hale Getirmeye Yardımcı Olun

**Gerçek kullanım kodlama stiline, görev karmaşıklığına ve araç uygulamasına göre geniş ölçüde fark gösterir**. Bu kaynağı iyileştirmeye yardımcı olun [gerçek deneyiminizi paylaşarak →](https://free-ai-usage.vercel.app/)

### Uygun Profesyonel Sınıf Modeller
Yalnızca SWE-bench Verified'da >%60 başarı gösteren modeller gerçek dünya kodlama görevleri için profesyonel sınıf olarak nitelendirilir. Mevcut liste aşağıdadır

| Model | SWE-bench Verified | Sağlayıcı |
|-------|-------------------|----------|
| GPT-5 | %74.9 | OpenAI |
| Claude Opus 4.1 | %74.5 | Anthropic |
| Claude Sonnet 4 | %72.7 (paralel ile %80.2) | Anthropic |
| GPT-5 mini | %71.0 | OpenAI |
| Qwen3-Coder-480B | %69.6 (etkileşimli) / %67.0 (tekil) | Alibaba |
| Gemini 2.5 Pro | %63.2 | Google |

### Katkıda Bulunma

Bu kaynağı iyileştirmeye yardımcı olun gerçek kullanım deneyiminizi paylaşarak → [Geri bildiriminizi gönderin](https://free-ai-usage.vercel.app/)

Eğer bir hata, eksik kaynak bağlantısı görüyorsanız, ya da güncellenmiş kota/model bilginiz varsa, lütfen bir kaynak ile issue veya pull request açın. Yeni araç katkıları hoş karşılanır! Ayrıntılı kılavuzlar için [CONTRIBUTING.md](CONTRIBUTING.md) bakın.

### Sorumluluk Reddi

Hiçbir satıcıyla bağlantı yoktur. Tüm ticari markalar sahiplerine aittir. Bilgiler araştırma amaçlıdır; doğruluk garanti edilmez; limitler/fiyatlandırma sık sık değişir.

## İçindekiler

- [1. Profesyonel Sınıf Modellere Ücretsiz Erişimi Olan AI-kodlama Araçları](#1-profesyonel-sınıf-modellere-ücretsiz-erişimi-olan-ai-kodlama-araçları)
- [2. AI Kodlama Araçları için API Sağlayıcıları](#2-ai-kodlama-araçları-için-api-sağlayıcıları)
- [3. Profesyonel Sınıf Modellere Sahip Ücretli Katmanlı Araçlar](#3-profesyonel-sınıf-modellere-sahip-ücretli-katmanlı-araçlar)
- [4. Temel Modellere Ücretsiz Erişimi Olan Araçlar](#4-temel-modellere-ücretsiz-erişimi-olan-araçlar)
- [5. Yerel Modeller](#5-yerel-modeller)
- [Karşılaştırma Notları](#karşılaştırma-notları)
- [İlgili Kaynaklar](#ilgili-kaynaklar)


## 1. Profesyonel Sınıf Modellere Ücretsiz Erişimi Olan AI-kodlama Araçları
_(en cömert olandan en az cömerte sıralı)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Qwen3-Coder-480B erişimi**
- Qwen OAuth ile günde 2,000 istek ücretsiz katman
- Dakikada 60 istek hız limiti
- Komut satırı AI iş akışı aracı (Gemini CLI'dan uyarlanmış)
- Tek tıkla tarayıcı kimlik doğrulaması
- Kredi kartı gerekli değil

**Bağlantılar:** [GitHub](https://github.com/QwenLM/qwen-code) | [Dokümantasyon](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Beta sırasında Claude Sonnet 4 erişimi**
- Günde 5M token ücretsiz katman (ilk gün sadece 20M)
- Claude Sonnet 4 modeli (test ile doğrulandı)
- Beta sırasında kredi kartı gerekli değil
- Token limitleri gece yarısı UTC'de sıfırlanır
- Not: Günde 20M token için Jira Standard/Premium/Enterprise'a yükseltme

**Bağlantılar:** [Dokümantasyon](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token Limitleri](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini 2.5 Pro erişimi**
- Günde 100 istek limiti
- Yedek: Gemini 2.5 Flash ile ~4.2sa/gün (günde 250 istek)
- Kredi kartı gerekli değil
- Sadece Google modelleri
- Ücretsiz kota sonrası ücretli fiyatlara geçiş

**Bağlantılar:** [Hız Limitleri](https://ai.google.dev/gemini-api/docs/rate-limits) | [Fiyatlandırma](https://ai.google.dev/gemini-api/docs/pricing)

---

### [Kilo Code](https://kilocode.ai/)

> **Claude 4 Sonnet/Opus, Gemini 2.5 Pro, GPT-4.1 erişimi**
- $25 ücretsiz kredi (kayıtta $5 + ilk doldurmada $20)
- Açık kaynaklı VS Code uzantısı
- Model fiyatlandırmasında markup olmayan kullandıkça öde
- Bonus kredileri almak için kredi kartı gerekli
- Kendi API anahtarlarınızı getirmeyi destekler

**Bağlantılar:** [GitHub](https://github.com/Kilo-Org/kilocode) | [Dokümantasyon](https://kilocode.ai/docs/)

---

### [Warp](https://warp.dev/)

> **Claude Sonnet 4, OpenAI GPT-5, Gemini 2.5 Pro erişimi**
- Ayda 150 istek limiti
- Çoklu sağlayıcılar (Claude, OpenAI, Gemini)
- Temel kayıt için kredi kartı gerekli değil
- Kullandıkça öde aşım mevcut

**Bağlantılar:** [Fiyatlandırma](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Claude Sonnet 4 erişimi**
- Ayda 50 aracı sohbet limiti (çok turlu konuşmalar)
- En son Claude modelleri (AWS barındırımlı)
- Kredi kartı gerekli
- Devam eden erişim için Pro'ya yükseltme gerekli
- Kalıcı ücretsiz katman

**Bağlantılar:** [Fiyatlandırma](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Ajan etkileşimleri (GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1) erişimi**
- Ayda 50 sohbet isteği + 2,000 tamamlama limiti
- Özerk çok adımlı kodlama ile Ajan Modu
- Çoklu sağlayıcılar (GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)
- Kredi kartı gerekli değil
- Kota sonrası temel özelliklere sınırlı

**Bağlantılar:** [Plan Detayları](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Ajan Modu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Windsurf](https://windsurf.com/)

> **OpenAI, Anthropic, Google, xAI modelleri erişimi**
- Ayda 25 prompt kredisi limiti
- Çoklu sağlayıcılar (OpenAI, Claude, Gemini, xAI)
- Kredi kartı gerekli
- Devam etmek için ek krediler satın alınabilir

**Bağlantılar:** [Fiyatlandırma](https://windsurf.com/pricing)

---

### [AWS Kiro](https://kiro.dev/)

> **Claude 4 Sonnet, Claude 3.7 Sonnet erişimi**
- Ayda 50 kredi (Ücretsiz katman)
- Claude 4 Sonnet ve Claude 3.7 Sonnet modelleri (AWS barındırımlı)
- Kredi kartı gerekli değil
- 14 günlük hoş geldin bonusu: 500 kredi
- Ücretli katmanlar: Pro (Ayda $20 - 1,000 kredi), Pro+ (Ayda $40 - 2,000 kredi), Power (Ayda $200 - 10,000 kredi)

**Bağlantılar:** [Fiyatlandırma](https://kiro.dev/pricing/) | [Tanıtım Blog'u](https://kiro.dev/blog/introducing-kiro/)

---

> Limitler hızla değişir. Bir hata, daha yeni kota/model görürseniz veya yeni bir araç eklemek istiyorsanız, bir kaynak ile issue veya PR açın. Yeni araç katkıları hoş karşılanır!

---

## 2. AI Kodlama Araçları için API Sağlayıcıları
_(en cömert olandan en az cömerte sıralı)_

Bu hizmetler Cursor, Continue.dev, Cline ve diğerleri gibi popüler AI kodlama araçları ile entegre olan kodlama için optimize edilmiş modellere API erişimi sağlar. Bağımsız kodlama araçları sunmazlar ancak mevcut araçlar için AI backend'i sağlarlar.

### [OpenRouter](https://openrouter.ai/)

> **Qwen3-Coder erişimi**
- Qwen3-Coder-480B için günde 2,000 istek ücretsiz katman
- Ek ücretsiz modeller: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- Tüm büyük IDE'ler için OpenAI-uyumlu API
- Ücretsiz modeller için kredi kartı gerekli değil
- Ücretsiz katman için yoğun trafik sırasında hız sınırlaması
- Continue.dev, Cline, Cursor, vb. ile çalışır

**Bağlantılar:** [Ücretsiz Modeller](https://openrouter.ai/models/?q=free) | [Qwen3-Coder API](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **Qwen3-Coder/Llama 3.1 erişimi**
- Günde 100 istek ücretsiz katman
- Modeller: Qwen3-Coder-480B (Claude Sonnet 4 performansıyla eşleşir), Llama 3.1 70B
- OpenAI-uyumlu API (Cursor, Continue.dev, Cline, RooCode, vb. ile çalışır)
- Ultra hızlı çıkarım: 2,000 token/saniye (tipik sağlayıcılardan 40x daha hızlı)
- Kredi kartı gerekli değil
- **Ücretli katmanlar:** Code ($50/ay - 24M token günlük), Growth ($1,500/ay - 300+ RPM), Enterprise (özel)

**Bağlantılar:** [Fiyatlandırma](https://www.cerebras.ai/pricing) | [API Dokümanları](https://inference-docs.cerebras.ai/) | [Entegrasyon Kılavuzları](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Profesyonel Sınıf Modellere Sahip Ücretli Katmanlı Araçlar

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

**Jira Standard ($7.53/kullanıcı/ay):** Günde 20M token (~80sa/gün Claude Sonnet kodlama)
**Jira Premium ($15.25/kullanıcı/ay):** Günde 20M token
**Jira Enterprise (özel):** Günde 20M token
- Ücretsiz katmandan 4x artış (5M → 20M token/gün)
- Ücretsiz katmanla aynı Claude tabanlı model
- Token limitleri gece yarısı UTC'de sıfırlanır

**Bağlantılar:** [Dokümantasyon](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token Limitleri](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira Fiyatlandırma](https://www.atlassian.com/software/jira/pricing)

---


### [Claude Code](https://www.anthropic.com/claude-code)

**Pro ($17/ay yıllık ile):** Sonnet 4 erişimi
**Max ($100/ay):** Opus 4.1 + Sonnet 4 erişimi (5x veya 20x daha fazla kullanım)
**Max ($200/ay):** Daha yüksek Opus 4.1 + Sonnet 4 limitleri
- Kullanım limitleri haftalık sıfırlanır
- 5 saatlik dönen pencere limitleri uygulanır
- Yüksek trafik sırasında öncelikli erişim (Max seviye)

**Bağlantılar:** [Fiyatlandırma](https://www.anthropic.com/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

**Pro ($19/ay):** Aracı istekleri için artırılmış limitler
- Kullanım bölgesel faktörlere ve kullanım paternlerine göre ayarlanabilir

**Bağlantılar:** [Fiyatlandırma](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

**Pro ($15/ay yıllık, $18/ay aylık):** 2,500 istek/ay
**Turbo ($40/ay yıllık, $50/ay aylık):** 10,000 istek/ay  
**Lightspeed ($200/ay yıllık, $225/ay aylık):** 50,000 istek/ay
- Aşım için kullandıkça öde mevcut
- Enterprise katmanı: Özel fiyatlandırma

**Bağlantılar:** [Fiyatlandırma](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

**Pro ($10/ay):** 300 premium istek + sınırsız tamamlama/ay
**Pro+ ($39/ay):** 1,500 premium istek + sınırsız tamamlama/ay
**Business ($19/kullanıcı/ay):** 300 premium istek + sınırsız tamamlama/kullanıcı/ay
**Enterprise ($39/kullanıcı/ay):** 1,000 premium istek + sınırsız tamamlama/kullanıcı/ay
- Birden fazla modele erişim (Claude Sonnet 4, GPT-5, Gemini 2.5 Pro)
- $0.04/istek'te aşım faturalandırma mevcut

**Bağlantılar:** [Plan Detayları](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot)

---

### [Windsurf](https://windsurf.com/)

**Pro ($15/ay):** 500 prompt kredisi/ay
**Teams ($30/kullanıcı/ay):** 500 prompt kredisi/kullanıcı/ay
**Enterprise ($60+/kullanıcı/ay):** 1,000 prompt kredisi/kullanıcı/ay

**Bağlantılar:** [Fiyatlandırma](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

**Pro ($25/ay):** 150 kredi/ay (günde 5 kredi)
**Teams ($30/ay):** Daha yüksek limitler (açıklanmamış)

**Bağlantılar:** [Mesajlaşma Limitleri](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

**$20/ay:** 10M token/ay
**$200/ay:** 120M token/ay

**Bağlantılar:** [Token Dokümantasyonu](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

**Hobby (Ücretsiz):** Sadece temel modellerle sınırlı ajan istekleri
**Pro ($20/ay):** Agent üzerinde genişletilmiş limitler, Claude Sonnet 4, OpenAI o3-pro, GPT-4.1, Claude Opus 4 erişimi
**Ultra ($200/ay):** Tüm OpenAI, Claude, Gemini modellerinde 20x kullanım
**Teams ($40/kullanıcı/ay):** Pro özellikleri + takım yönetimi
- İki hafta Pro deneme mevcut
- Ücretsiz katman için kredi kartı gerekli

**Bağlantılar:** [Fiyatlandırma](https://cursor.com/en/pricing)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

**ChatGPT Plus ile Ücretsiz ($20/ay):** Kodlama görevleri için GPT-5 erişimi
**Kullandıkça öde:** OpenAI API anahtarı ile kullan
**Ücretsiz OSS modu:** Sadece açık kaynak modellere erişim (--oss bayrağıyla)
- Yerel çalışan hafif kodlama ajanı
- Sandbox modu ile etkileşimli terminal UI
- macOS 12+, Ubuntu 20.04+, WSL2 ile Windows 11
- Aktif geliştirme altındaki deneysel proje

**Bağlantılar:** [GitHub Repo](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

**Pro ($10/ay):** Gelişmiş bağlam farkındalığı ile sınırsız kullanım
- Claude 3.5 Sonnet, GPT-4o erişimi
- Geliştirilmiş bağlam penceresi ve kişiselleştirme
**Teams ($12/kullanıcı/ay):** Pro özellikleri + takım yönetimi
**Enterprise (Özel):** Kendi sunucunda dağıtım, özel modeller

**Bağlantılar:** [Fiyatlandırma](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

**Pro ($12/ay):** Gelişmiş AI tamamlamaları ve sohbet
**Enterprise ($39/kullanıcı/ay):** Çoklu LLM'ler, özel dağıtım
- Modeller: Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, tescilli modeller
- 600+ programlama dili desteği
- Kendi sunucunda ve air-gapped dağıtım seçenekleri
- Kendi fine-tuned modellerinizi getirin

**Bağlantılar:** [Fiyatlandırma](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**AI Pro ($15/ay):** Artırılmış bulut kotası + sınırsız yerel modeller
**AI Ultimate ($25/ay):** Maksimum bulut kotası + gelişmiş özellikler
- Ücretsiz katman: Sınırsız kod tamamlama + yerel modeller + sınırlı bulut kotası
- 30 gün Pro deneme dahil
- All Products Pack AI Pro içerir
- Ollama/LM Studio ile yerel modellerle çevrimdışı mod

**Bağlantılar:** [AI Fiyatlandırma](https://www.jetbrains.com/ai-ides/buy/)

---

### [SuperMaven](https://supermaven.com/)

**Pro ($10/ay):** 1M token bağlam penceresi + sohbet kredileri
- Alternatif: $99/yıl
- GPT-4o, Claude 3.5 Sonnet, GPT-4 ile sohbet arayüzü
**Team ($10/kullanıcı/ay):** Pro özellikleri + takım yönetimi
- Not: Kasım 2024'te Cursor IDE ile birleşti

**Bağlantılar:** [Fiyatlandırma](https://supermaven.com/pricing)

---

> Daha iyi fiyatlandırma veya limitler biliyor musunuz? Bu güncel kalmaya yardımcı olmak için bir issue veya PR'da bağlantı paylaşın.

---

## 4. Temel Modellere Ücretsiz Erişimi Olan Araçlar
__(belirtilmemiş/temel modeller)__

### [Bolt.new](https://bolt.new/)

**Belirtilmemiş modellerle ~100sa/ay**
- Ayda 1M token limiti
- Spesifik model herkese açık olarak belirtilmemiş
- Kredi kartı gerekli

**Bağlantılar:** [Token Dokümantasyonu](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

**Belirtilmemiş modellerle ~0.5sa/ay**
- Günde 5 kredi, ayda maksimum 30 (ücretsiz)
- Modeller herkese açık olarak numaralandırılmamış
- Kredi kartı gerekli

**Bağlantılar:** [Mesajlaşma Limitleri](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

**Tescilli modellerle değişken süre (frontier değil)**
- GPT-5 erişimi v0 Premium aboneliği gerektirir
- Ayda $5 kredi limiti
- Çeşitli yönlendirme ile tescilli modeller kullanır
- Kredi kartı gerekli

**Bağlantılar:** [Güncellenmiş Fiyatlandırma Blog'u](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

**Temel AI kodlama yardımının sınırsız ücretsiz kullanımı**
- Bireysel plan: Sınırsız kod tamamlamaları, AI sohbet, komutlarla sonsuza kadar ücretsiz
- 70+ programlama dili desteği
- IDE entegrasyonları: VS Code, JetBrains, Vim/Neovim, Jupyter
- Kredi kartı gerekli değil
- Sınırlı bağlam farkındalığı (ücretli katmanlarda genişletilmiş)
- Sadece temel model (Llama 3.1 70B), profesyonel sınıf modeller abonelik gerektirir

**Bağlantılar:** [Fiyatlandırma](https://codeium.com/pricing) | [Dokümantasyon](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

**Sınırlı özelliklerle ücretsiz katman**
- Temel AI kod tamamlamaları ve sohbet (sınırlı)
- Yerel işlem mevcut
- Ücretsiz katmanda bağlam ağır şekilde sınırlı
- Kaynakları korumak için performans düşürülmüş
- 600+ programlama dili desteği

**Bağlantılar:** [Fiyatlandırma](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**IDE'lerle dahil AI Ücretsiz katmanı**
- Sınırsız kod tamamlama ve yerel model desteği
- Bulut tabanlı özellikler için sınırlı kota
- 30 gün AI Pro deneme
- Yerel modellerle sohbet, kod üretimi, commit mesajları

**Bağlantılar:** [AI Özellikleri](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

**Temel özelliklerle ücretsiz katman**
- Temel kod önerileri
- 7 gün veri saklama limiti
- Kayıt için kredi kartı gerekli
- 1M token bağlam penceresi (ücretsiz katman için etkileyici)

**Bağlantılar:** [Fiyatlandırma](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

**Esnek model desteği ile ücretsiz açık kaynak uzantısı**
- Ücretsiz VS Code ve JetBrains uzantısı
- Ollama, LM Studio ile yerel modeller için tam destek
- Solo katmanı: Özel/takım/genel görünürlük seçenekleri
- 200+ modeli destekler (bulut modelleri için kendi API anahtarlarınız gerekli)
- Özel AI asistanları için topluluk hub'ı
- Satıcı kilitlenmesi veya yerel modeller için kullanım limiti yok

**Bağlantılar:** [GitHub](https://github.com/continuedev/continue) | [Model Hub](https://hub.continue.dev/explore/models)

---

> Resmi limitleri veya modelleri biliyor musunuz? Bilgiyi güncellemek için bir issue veya PR'da bağlantı paylaşın.

---

## 5. Yerel Modeller

Açık ağırlıklı frontier modelleri yerel olarak çalıştırmak API maliyetleri veya kullanım limitleri olmadan sınırsız kodlama yardımı sağlar. Yerel dağıtım için popüler araçlar **[Cline](https://cline.bot/)** (Plan/Act modları ve MCP desteği ile VS Code uzantısı), **[Aider](https://aider.chat/)** (yerleşik Git entegrasyonu ile komut satırı asistanı), ve **[Continue.dev](https://www.continue.dev/)** (200+ modeli destekleyen açık kaynak VS Code uzantısı) içerir. Hepsi **[Ollama](https://ollama.com/)** ile sorunsuz çalışarak Devstral (24B parametre, aracı kodlama için optimize), Qwen3-Coder, DeepSeek Coder V2, Codestral, ve GLM-4.5 gibi frontier modelleri çalıştırır.

**Not**: Frontier modeller önemli miktarda RAM/VRAM gerektirir. Özellikle, Qwen3‑Coder‑480B için Ollama‑dostu GGUF ~150GB'dir ve pratik yerel çıkarım ~150GB birleşik bellek (RAM+VRAM) gerektirebilir, bu da tipik dizüstü bilgisayarlarda zor kılar; 30B kuantizasyonu genellikle ~18GB gerektirir. Detaylar için Unsloth Qwen3‑Coder yerel kılavuzuna ([dokümanlar](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) ve pratik bir örnek için Simon Willison'ın [dizüstü bilgisayarında GLM‑4.5 AIR çalıştırarak Space Invaders oluşturma](https://simonwillison.net/2025/Jul/29/space-invaders/) makalesi bakın.

---

## Karşılaştırma Notları

- **Amaç**: AI kodlama araçlarını profesyonel sınıf modellere erişim ve ücretsiz katman sınırlarına göre karşılaştırmak.
- **Bir modeli "profesyonel sınıf" olarak nitelendiren nedir?** Modeller SWE-bench Verified'da ≥60% başarı göstermeli, gerçek dünya yazılım mühendisliği yeteneğini kanıtlamalı. Şu anda uygun modeller: GPT-5 (%74.9), Claude Opus 4.1 (%74.5), Claude Sonnet 4 (%72.7), GPT-5 mini (%71.0), Qwen3-Coder-480B (%69.6), ve Gemini 2.5 Pro (%63.2).
- **Farklı tür sınırlar**: Araçlar çeşitli kota sistemleri kullanır - istek, token, kredi, sohbet - doğrudan karşılaştırmayı zorlaştırır. Özellikler için dokümantasyona bakın.
- **Gerçek dünya kullanımı**: Gerçek tüketim kodlama stiline, görev karmaşıklığına ve araç uygulamasına göre dramatik şekilde değişir.

---

## İlgili Kaynaklar

- [Ücretsiz LLM API Kaynakları](https://github.com/cheahjs/free-llm-api-resources) - Özel entegrasyonlar oluşturmak için ücretsiz LLM API'lerinin kapsamlı listesi

---
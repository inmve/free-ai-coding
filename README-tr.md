Son güncelleme: 15 Eylül 2026 • PR/issue'lar açık • ⭐ Daha sonra dönmek için yıldızla

**Diller:** [English](README.md) • [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Türkçe](README-tr.md)

# AI Kodlama Araçları: Profesyonel Modellerin Gerçekten Ücretsiz Olduğu Yer

Birçok AI kodlama aracı "ücretsiz" olduğunu iddia eder, ancak profesyonel sınıf modellere erişim genellikle hızla tükenir ve ardından düşük seviyeye indirilirsiniz. Her araç farklı limitler kullanır (kredi, token, istek), bu yüzden adil karşılaştırma zordur. Bu liste onları yan yana koyar ve **gerçekte ücretsiz olarak neler elde ettiğinizi** gösterir.

## TL;DR — Profesyonel Sınıf AI Kodlama için Ücretsiz Katmanlar
_(kota birimleri farklıdır; satırlar eşdeğer kapasite sıralaması değildir)_

| Araç | Profesyonel sınıf modeller | Ücretsiz katman limiti | Kredi kartı |
|------|---------------------------|------------------------|-------------|
| [Qwen Code](#qwen-code) | Qwen ve diğer sağlayıcılar | Güncel OAuth kotası resmi README'de belirtilmiyor | Hayır |
| [Rovo Dev CLI](#rovo-dev-cli) | Rovo Dev (plana bağlı) | Ücretli Jira ile kullanıcı/site başına ayda 350 kredi | Hayır |
| [Gemini CLI](#gemini-cli) | Gemini 3 modelleri | Bireysel ücretsiz/Google AI erişimi 18 Haziran 2026'da sona erdi; Antigravity CLI'ye geçin | Hayır |
| [Kilo Code](#kilo-code) | Yapılandırılan sağlayıcıya bağlı | Güncel kayıt kredisi doğrulanamadı | Belirsiz |
| [Warp](#warp) | Warp Agent; BYOK | Free: sınırlı cloud-agent; ≤10 kişilik kişi/şirketlerde BYOK Warp kredisi tüketmez | Belirsiz |
| [Trae](#trae) | Premium model erişimi resmi fiyat sayfasında belirtilmiyor | Güncel kota resmi sayfada yayınlanmıyor | Belirsiz |
| [Amazon Q Developer](#amazon-q-developer) | En yeni Claude modelleri (AWS) | 50 ajantik istek + 1.000 Java LOC/ay | Hayır (Builder ID) |
| [GitHub Copilot](#github-copilot) | Haiku 4.5, GPT-5 mini ve diğerleri | 50 sohbet + 2.000 tamamlama/ay; sınırlı ajan/CLI | Hayır |
| [Windsurf](#windsurf) | Belirsiz (resmi URL Devin'e yönlendiriyor) | Doğrulanmadı; Devin fiyatları Windsurf'e uygulanamaz | Belirsiz |
| [Jules](#jules) | Gemini 2.5 Pro | Kayan 24 saatte 15 görev; 3 eşzamanlı | Hayır |
| [AWS Kiro](#aws-kiro) | Claude Sonnet 4.5 ve open-weight modeller | 50 kredi/ay | Hayır |
| [Qoder](#qoder) | En yeni modeller (liste belirtilmemiş) | 2 haftalık Pro deneme; sonra Free (kota belirsiz) | Belirsiz |

## Bunu Daha Doğru Hale Getirmeye Yardımcı Olun

**Gerçek kullanım kodlama stiline, görev karmaşıklığına ve araç uygulamasına göre geniş ölçüde fark gösterir**. Bu kaynağı iyileştirmeye yardımcı olun [gerçek deneyiminizi paylaşarak →](https://free-ai-usage.vercel.app/)

### Uygun Profesyonel Sınıf Modeller
Birincil kaynak bağlantıları olan seçilmiş tarihsel değerler. Test koşulları farklıdır; bu tablo güncel ve eksiksiz bir sıralama değildir.

| Model | SWE-bench Verified | Sağlayıcı |
|-------|-------------------|----------|
| [Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) | %80.9 | Anthropic |
| [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) | %77.2 | Anthropic |
| [Qwen3-Coder-480B](https://qwenlm.github.io/blog/qwen3-coder/) | %69.6 | Alibaba |

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
_(kota birimleri farklıdır; sıra yalnızca yönlendiricidir ve eşdeğer kapasite sıralaması değildir)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Qwen modelleri ve sağlayıcı esnekliği**
- Qwen OAuth ücretsiz katmanı 15 Nisan 2026'da sona erdi; Alibaba ModelStudio Coding Plan, Token Plan, API anahtarı veya başka sağlayıcı kullanın
- Kimlik doğrulama ayarları üzerinden Qwen ve diğer sağlayıcıları destekler
- Terminal, IDE, masaüstü ve web arayüzleri olan açık kaynak kodlama ajanı
- BYOK veya yerel sağlayıcılar için barındırılan kota varsayılmaz

**Bağlantılar:** [GitHub](https://github.com/QwenLM/qwen-code) | [Dokümantasyon](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free erişimi**
- Ücretli Jira planlarıyla ücretsiz: kullanıcı/site başına ayda 350 Rovo Dev kredisi
- Aylık kredi kotası dolunca kullanım durur
- Güncel faturalandırma sayfası CLI için sabit bir model belirtmiyor
- Ücretsiz eklenti için kredi kartı gerekmez; site uygunluğunu Atlassian'da doğrulayın

**Bağlantılar:** [Dokümantasyon](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token Limitleri](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Bireysel kullanıcılar için Gemini CLI'den Antigravity CLI'ye geçiş**
- 18 Haziran 2026'da Gemini CLI bireysel ve Google AI Pro/Ultra katmanlarına hizmet vermeyi bıraktı
- Antigravity CLI herkese açık ve geçiş yoludur
- Standard/Enterprise kuruluş erişimi değişmedi; ücretli Gemini API anahtarları destekleniyor
- Eski bireysel Google girişinin 1.000/gün ve 60/dakika sınırı tarihsel ve sona ermiştir

**Bağlantılar:** [Geçiş duyurusu](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) | [Hız Limitleri](https://ai.google.dev/gemini-api/docs/rate-limits)

---

### [Kilo Code](https://kilocode.ai/)

> **Kilo Code sağlayıcı/model erişimi**
- Güncel erişilebilir resmi fiyatlandırma sayfası eski $25 kayıt kredisini belirtmiyor
- Kullandıkça öde model kullanımı olan açık kaynaklı VS Code uzantısı
- Kendi API anahtarlarınızı getirmeyi destekler
- Güncel promosyon ve kart gereksinimini kullanmadan önce doğrulayın

**Bağlantılar:** [GitHub](https://github.com/Kilo-Org/kilocode) | [Dokümantasyon](https://kilocode.ai/docs/)

---

### [Warp](https://warp.dev/)

> **Warp Agent ve BYOK erişimi**
- Free planı sınırlı cloud-agent erişimi sunar; sınıra ulaşınca AI durur
- Build aylık $20'dan başlar ve 1.500 kredi içerir
- 10 veya daha az kişilik bireyler ve şirketlerde BYOK/custom inference Warp kredisi tüketmez
- Tüketim model, bağlam, araç çağrıları ve göreve göre değişir

**Bağlantılar:** [Fiyatlandırma](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Free**
- Kalıcı ücretsiz katman: ayda 50 ajantik istek ve 1.000 Java LOC
- IDE sınırları Builder ID kullanıcılarında, IAM sınırları hesap düzeyindedir
- Builder ID ücretsiz yolunda kart gerekmez; Pro için AWS faturalandırması gerekir
- Pro kullanıcı başına aylık $19'dur ve daha yüksek sınırlar sunar

**Bağlantılar:** [Fiyatlandırma](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- Ayda 2.000 tamamlama ve 50 sohbet isteği
- Copilot CLI ve sınırlı ajan kullanımı; Free'de model seçimi kısıtlıdır
- Güncel plan sayfası Haiku 4.5, GPT-5 mini ve diğer modelleri listeler
- Kredi kartı gerekmez

**Bağlantılar:** [Plan Detayları](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Ajan Modu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Windsurf](https://windsurf.com/)

> **Windsurf fiyatlandırması doğrulanamadı**
- Resmi fiyatlandırma URL'si şu anda Devin fiyatlandırmasına yönlendiriyor
- Devin/Cognition fiyat ve kotaları Windsurf'e uygulanamaz
- Eski Windsurf kredi miktarları ve kart gereksinimi doğrulanmadı
- Güncel limite güvenmeden önce resmi Windsurf ürün sayfasını kontrol edin

**Bağlantılar:** [Fiyatlandırma](https://windsurf.com/pricing)

---

### [AWS Kiro](https://kiro.dev/)

> **Claude Sonnet 4.5 ve open-weight model erişimi**
- Kalıcı Free katmanı: ayda 50 kredi
- Sosyal giriş veya AWS Builder ID ile Claude Sonnet 4.5 ve open-weight modeller (sınırlı)
- Pro $20/ay: 1.000; Pro+ $40: 2.000; Pro Max $100: 5.000; Power $200: 10.000 kredi
- Ücretli abonelikler geçerli kredi kartı gerektirir

**Bağlantılar:** [Fiyatlandırma](https://kiro.dev/pricing/) | [Tanıtım Blog'u](https://kiro.dev/blog/introducing-kiro/)

---

> Limitler hızla değişir. Bir hata, daha yeni kota/model görürseniz veya yeni bir araç eklemek istiyorsanız, bir kaynak ile issue veya PR açın. Yeni araç katkıları hoş karşılanır!

---

## 2. AI Kodlama Araçları için API Sağlayıcıları
_(kota birimleri farklıdır; sıra yalnızca yönlendiricidir ve eşdeğer kapasite sıralaması değildir)_

Bu hizmetler Cursor, Continue.dev, Cline ve diğerleri gibi popüler AI kodlama araçları ile entegre olan kodlama için optimize edilmiş modellere API erişimi sağlar. Bağımsız kodlama araçları sunmazlar ancak mevcut araçlar için AI backend'i sağlarlar.

### [OpenRouter](https://openrouter.ai/)

> **OpenRouter üzerinden Qwen3-Coder-480B**
- Günde 50 istek ücretsiz katman ($10+ kredi satın alınırsa 1,000/gün)
- Ek ücretsiz modeller: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- Tüm büyük IDE'ler için OpenAI-uyumlu API
- Ücretsiz modeller için kredi kartı gerekli değil
- Ücretsiz katman için dakikada 20 istek limiti
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

**Rovo Dev Standard ($20/kullanıcı/ay):** Kullanıcı başına ayda 2.000 Rovo Dev kredisi
- Krediler Atlassian kuruluşundaki uygun sitelerde kullanılabilir
- Kuruluş etkinleştirirse ek kullanım kredi başına $0.01'dır
- Rovo Dev Free: ücretli Jira ile ücretsiz, kullanıcı/site başına ayda 350 kredi

**Bağlantılar:** [Dokümantasyon](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token Limitleri](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira Fiyatlandırma](https://www.atlassian.com/software/jira/pricing)

---


### [Claude Code](https://www.anthropic.com/claude-code)

**Pro ($20/ay veya yıllık faturalandırmayla $17/ay):** Claude Code erişimi
**Max 5x ($100/ay) ve Max 20x ($200/ay):** Daha yüksek kullanım limitleri
- Claude Code limitleri modele ve göreve göre değişen dönen pencerelerdir; mesaj tahminleri sabit kota değildir
- API/konsol kullanımı abonelikten ayrı kullandıkça öde modelidir

**Bağlantılar:** [Fiyatlandırma](https://www.anthropic.com/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

**Pro ($19/ay):** Aracı istekleri için artırılmış limitler
- Kullanım bölgesel faktörlere ve kullanım paternlerine göre ayarlanabilir

**Bağlantılar:** [Fiyatlandırma](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

**Build ($20/ay'dan başlayan):** 1.500 kredi ($20 dahil ajan kullanımı)
- Yenileme kredileri ve otomatik yenileme mevcut olabilir; ek kullanım koşulları değişebilir
- Bireyler ve 10 veya daha az kişilik şirketlerde BYOK Warp kredisi tüketmez
- Enterprise koşulları özel veya kullanıma dayalıdır

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

**Windsurf ücretli fiyatlandırması doğrulanamadı:** Resmi URL Devin'e yönlendiriyor; Devin planları Windsurf'e uygulanamaz.

**Bağlantılar:** [Fiyatlandırma](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

**Lovable artık kredi tabanlı:** Free planı günlük 5 build kredisi (ayda 30'a kadar), aylık 20 Cloud kredisi ve aylık 4 AI kredisi içerir. Kredilerin sona erme kuralları farklıdır.

**Bağlantılar:** [Fiyatlandırma](https://lovable.dev/pricing)

---

### [Bolt.new](https://bolt.new/)

**Bolt.new Free:** Günlük 300K token ve aylık 1M token limiti. Pro aylık $25'ten (10M token), Teams $30/üye/ay'dan başlar. Ücretli tokenlar aktif abonelikte bir ay devreder.

**Bağlantılar:** [Fiyatlandırma](https://bolt.new/pricing) | [Token Dokümantasyonu](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

**Hobby (Ücretsiz):** Sadece temel modellerle sınırlı ajan istekleri
**Pro ($20/ay):** Genişletilmiş Agent erişimi
**Pro+ ($60/ay) ve Ultra ($200/ay):** Daha yüksek kullanım
**Teams Standard ($40/kullanıcı/ay):** Takım özellikleri; Premium $120/kullanıcı/ay
- Hobby ücretsiz, kredi kartı gerektirmez, Agent sınırlıdır ve Composer'a erişir
- GPT-5.1-Codex-Max'in 11 Aralık 2025'e kadar ücretsiz promosyonu sona ermiştir

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

**Bolt.new Free**
- Günlük 300K token ve aylık 1M token limiti
- Spesifik model herkese açık olarak belirtilmemiş
- Kredi kartı gerekli

**Bağlantılar:** [Token Dokümantasyonu](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

**Lovable Free**
- Günlük 5 build kredisi (ayda 30'a kadar), aylık 20 Cloud ve 4 AI kredisi
- Modeller herkese açık olarak numaralandırılmamış
- Kredi kartı gerekli

**Bağlantılar:** [Mesajlaşma Limitleri](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

**v0 Free**
- Ayda $5 kredi ve günde 7 mesaj
- Çeşitli yönlendirme ile tescilli modeller kullanır
- Kredi kartı gerekli

**Bağlantılar:** [Fiyatlandırma](https://api2.v0.dev/pricing)

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
- **Benchmark kapsamı**: Tabloda birincil kaynak bağlantıları olan seçilmiş tarihsel değerler bulunur. Farklı harness koşulları nedeniyle değerler doğrudan karşılaştırılamaz ve tablo güncel, eksiksiz bir sıralama değildir.
- **Farklı tür sınırlar**: Araçlar çeşitli kota sistemleri kullanır - istek, token, kredi, sohbet - doğrudan karşılaştırmayı zorlaştırır. Özellikler için dokümantasyona bakın.
- **Gerçek dünya kullanımı**: Gerçek tüketim kodlama stiline, görev karmaşıklığına ve araç uygulamasına göre dramatik şekilde değişir.

---

## İlgili Kaynaklar

- [Ücretsiz LLM API Kaynakları](https://github.com/cheahjs/free-llm-api-resources) - Özel entegrasyonlar oluşturmak için ücretsiz LLM API'lerinin kapsamlı listesi

---

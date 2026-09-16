Zuletzt aktualisiert: 15. September 2026 • PRs/Issues willkommen

**Sprachen:** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md)

# KI-Coding-Tools: Wo Pro-Grade-Modelle wirklich gratis sind 

Viele KI-Coding-Tools behaupten „gratis“ zu sein, aber der Zugriff auf Pro-Modelle ist oft schnell aufgebraucht und wird dann herabgestuft. Jedes Tool hat andere Limits (Credits, Tokens, Requests), wodurch ein Vergleich schwer ist. Diese Liste stellt sie nebeneinander, um zu zeigen, was wirklich kostenlos ist.

## TL;DR — Gratis-Tiers für Pro‑Grade KI-Coding
_(Quota-Einheiten unterscheiden sich; die Reihenfolge dient nur der Orientierung und ist kein Vergleich gleichwertiger Kapazitäten.)_

| Tool | Pro‑Grade-Modelle | Gratis-Limit | Kreditkarte |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen und andere Anbieter | Das kostenlose Qwen-OAuth-Angebot wurde am 15. April 2026 eingestellt; nutze Alibaba ModelStudio Coding Plan, Token Plan, API-Key oder einen anderen Anbieter | Nein |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Rovo-Dev-Modell je nach Tarif | 350 Credits/Benutzer/Monat/Standort (mit bezahltem Jira) | Keine |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Enterprise-/bezahlter API-Zugang bleibt; Privatnutzer wechselten zu Antigravity CLI | Individueller Free-/Google-AI-Zugang endete am 18. Juni 2026; Wechsel zu Antigravity CLI | Keine |
| [Cursor](https://cursor.com/) | Composer; begrenzter Agent | Begrenzter Agent; keine zeitlich begrenzte Aktion | Keine |
| [Kilo Code](https://kilocode.ai/) | Nicht veröffentlicht | Aktuelle Werte nicht verifiziert | Unklar |
| [Warp](https://warp.dev/) | Warp Agent; BYOK | Free: begrenzter Cloud-Agent; BYOK für Einzelpersonen und Unternehmen mit ≤10 Personen ohne Warp-Credits | Unklar |
| [Trae](https://trae.ai/) | Nicht veröffentlicht | Aktuelle Werte nicht verifiziert | Unklar |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Neueste Claude-Modelle (AWS-gehostet) | 50 agentische Anfragen + 1.000 Java-LOC/Monat | Nein |
| [GitHub Copilot](https://github.com/features/copilot/plans) | Haiku 4.5, GPT-5 mini und weitere | 2.000 Completions + 50 Chat-Anfragen/Monat; Agent/CLI begrenzt | Nein |
| [Windsurf](https://windsurf.com/) | Nicht veröffentlicht | Aktuelle Werte nicht verifiziert | Unklar |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 15 Aufgaben in rollierendem 24-Stunden-Fenster; 3 gleichzeitig | Nein |
| [AWS Kiro](https://kiro.dev/) | Claude Sonnet 4.5 und Open Weight | 50 Credits/Monat | Keine |
| [Qoder](https://qoder.com/) | Nicht veröffentlicht | Aktuelle Werte nicht verifiziert | Unklar |

### Qualifizierte Pro-Grade-Modelle
Ausgewählte historische Werte mit Links zu Primärquellen. Die Werte verwenden unterschiedliche Testbedingungen und sind kein aktuelles, vollständiges Ranking.

| Modell | SWE-bench Verified | Anbieter |
|-------|-------------------|----------|
| [Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) | 80,9% | Anthropic |
| [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) | 77,2% | Anthropic |
| [Qwen3-Coder-480B](https://qwenlm.github.io/blog/qwen3-coder/) | 69,6% | Alibaba |

### Beitragen

Wenn du einen Fehler, fehlende Quelle oder aktualisierte Kontingent-/Modellinfos findest, öffne bitte ein Issue oder PR mit Quelle. Neue Tool-Beiträge sind willkommen! Siehe CONTRIBUTING.md für Details.

### Haftungsausschluss

Keine Verbindung zu Anbietern. Alle Marken gehören ihren Eigentümern. Informationen nur zu Forschungszwecken; Genauigkeit nicht garantiert; Limits/Preise ändern sich häufig.

## Inhalt

- [1. KI-Coding-Tools mit kostenlosem Zugang zu Pro-Grade-Modellen](#1-ki-coding-tools-mit-kostenlosem-zugang-zu-pro-grade-modellen)
- [2. API-Anbieter für KI-Coding-Tools](#2-api-anbieter-fur-ki-coding-tools)
- [3. Tools mit kostenpflichtigen Tiers und Pro-Grade-Modellen](#3-tools-mit-kostenpflichtigen-tiers-und-pro-grade-modellen)
- [4. Tools mit kostenlosem Zugang zu Basis-Modellen](#4-tools-mit-kostenlosem-zugang-zu-basis-modellen)
- [5. Lokale Modelle](#5-lokale-modelle)
- [Vergleichsnotizen](#vergleichsnotizen)
- [Verwandte Ressourcen](#verwandte-ressourcen)

## 1. KI-Coding-Tools mit kostenlosem Zugang zu Pro-Grade-Modellen
_(Quota-Einheiten unterscheiden sich; die Reihenfolge dient nur der Orientierung und ist keine Gleichwertung.)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Das kostenlose Qwen-OAuth-Angebot wurde am 15. April 2026 eingestellt; nutze Alibaba ModelStudio Coding Plan, Token Plan, API-Key oder einen anderen Anbieter**
- Das kostenlose Qwen-OAuth-Angebot wurde am 15. April 2026 eingestellt; nutze Alibaba ModelStudio Coding Plan, Token Plan, API-Key oder einen anderen Anbieter
- Unterstützt Qwen und andere Anbieter über die Authentifizierung
- Open-Source-Coding-Agent für Terminal, IDE, Desktop und Web

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Authentication](https://github.com/QwenLM/qwen-code/blob/main/docs/users/configuration/auth.md)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- Kostenlos mit bezahlten Jira-Plänen: 350 Rovo-Dev-Credits/Benutzer/Monat/Standort
- Die Nutzung endet nach dem monatlichen Kontingent
- Die aktuelle Abrechnungsseite nennt kein festes CLI-Modell; der Modellzugang kann vom Plan abhängen
- Für das kostenlose Add-on ist keine Kreditkarte erforderlich

**** [Dokumentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token-Limits](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini CLI wechselt für Privatnutzer zu Antigravity CLI**
- Am 18. Juni 2026 stellte Gemini CLI die Bedienung für Privatnutzer sowie Google AI Pro/Ultra ein
- Antigravity CLI ist für alle verfügbar und der Migrationspfad
- Standard-/Enterprise-Organisationen behalten ihren Zugang; bezahlte Gemini-API-Schlüssel bleiben möglich
- Die frühere individuelle Google-Anmeldung mit 1.000/Tag und 60/Minute ist historisch und beendet

**** [Transition announcement](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) | [Documentation](https://ai.google.dev/gemini-api/docs/rate-limits)

---

### [Kilo Code](https://kilocode.ai/)

> **Aktuelle Preis-/Limitangaben nicht verifiziert**
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- Frühere exakte Werte werden nicht als aktuell dargestellt
- Vor einer Nutzung bitte die verlinkte Herstellerseite prüfen

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [Dokumentation](https://kilocode.ai/docs/) | [Preise](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Warp Agent und BYOK**
- Kostenlos: begrenzter Cloud-Agent-Zugriff; danach pausiert die KI
- Build ab $20/Monat mit 1.500 Credits ($20 enthaltene Agent-Nutzung)
- Für Einzelpersonen und Unternehmen mit höchstens 10 Personen verbraucht BYOK/Custom Inference keine Warp-Credits
- Der Verbrauch hängt von Modell, Kontext und Aufgabe ab

**** [Preise](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Free**
- Dauerhaft kostenlos: 50 agentische Anfragen/Monat und 1.000 Java-LOC/Monat
- IDE-Limits gelten für Builder-ID-Nutzer; IAM-Limits gelten auf Kontoebene
- Für den kostenlosen Builder-ID-Zugang ist keine Karte nötig; Pro erfordert AWS-Abrechnung
- Pro kostet $19/Benutzer/Monat und bietet höhere Limits

**** [Preise](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 2.000 Completions und 50 Chat-Anfragen pro Monat
- Copilot CLI und begrenzte Agent-Nutzung; Modellauswahl ist im Free-Tarif eingeschränkt
- Die aktuelle Pläne-Seite nennt Haiku 4.5, GPT-5 mini und weitere Modelle
- Keine Kreditkarte erforderlich

**** [Plan-Details](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Agent Mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Aktuelle Preis-/Limitangaben nicht verifiziert**
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- Frühere exakte Werte werden nicht als aktuell dargestellt
- Vor einer Nutzung bitte die verlinkte Herstellerseite prüfen

**** [Preise](https://trae.ai/pricing) | [Dokumentation](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Aktuelle Preis-/Limitangaben nicht verifiziert**
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- Frühere exakte Werte werden nicht als aktuell dargestellt
- Vor einer Nutzung bitte die verlinkte Herstellerseite prüfen

**** [Preise](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Zugriff Gemini 2.5 Pro**
- Gratis: 15 Aufgaben in einem rollierenden 24-Stunden-Fenster und 3 gleichzeitig
- 3 gleichzeitige Aufgaben
- Gemini 2.5 Pro Modell
- Gmail-Konto erforderlich (18+)
- Aufgabenlimit rollierend 24h
- Keine Kreditkarte erforderlich
- Pro ($19.99/Monat): 100 Aufgaben/Tag (5x)

**** [Nutzungs-Limits](https://jules.google/docs/usage-limits/) | [Dokumentation](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **AWS Kiro Free**
- Dauerhaft kostenlos: 50 Credits/Monat
- Claude Sonnet 4.5 und Open-Weight-Modelle für Social-Login oder Builder ID, mit Limits
- Pro $20/Monat: 1.000 Credits; Pro+ $40: 2.000; Pro Max $100: 5.000; Power $200: 10.000
- Bezahlte Tarife benötigen eine Kreditkarte

**** [Preise](https://kiro.dev/pricing/) | [Intro-Blog](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Aktuelle Preis-/Limitangaben nicht verifiziert**
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- Frühere exakte Werte werden nicht als aktuell dargestellt
- Vor einer Nutzung bitte die verlinkte Herstellerseite prüfen

**** [Homepage](https://qoder.com/) | [Preise](https://qoder.com/pricing)

Limits ändern sich schnell. Falls Fehler oder neuere Quoten/Modelle, bitte Issue/PR mit Quelle. Siehe CONTRIBUTING.md für Richtlinien.

---

## 2. API-Anbieter für KI-Coding-Tools
_(vom großzügigsten zum kleinsten geordnet)_

Diese Services bieten API-Zugriff auf coding-optimierte Modelle, die mit Tools wie Cursor, Continue.dev, Cline usw. arbeiten. Sie sind keine Standalone-Coding-Tools, sondern das AI-Backend für bestehende Tools.

### [OpenRouter](https://openrouter.ai/)

> **Qwen3-Coder-480B via OpenRouter**
- 50 Requests/Tag gratis (1.000/Tag bei $10+ Credits)
- Weitere Gratis-Modelle: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- OpenAI-kompatible API für alle großen IDEs
- Keine Kreditkarte für Gratis-Modelle
- 20 Requests/Minute Limit gratis
- Funktioniert mit Continue.dev, Cline, Cursor, etc.

**** [Kostenlose Modelle](https://openrouter.ai/models/?q=free) | [Qwen3-Coder API](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **Aktuelle Preis-/Limitangaben nicht verifiziert**
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- Frühere exakte Werte werden nicht als aktuell dargestellt
- Vor einer Nutzung bitte die verlinkte Herstellerseite prüfen

**** [Preise](https://www.cerebras.ai/pricing) | [API-Dokumentation](https://inference-docs.cerebras.ai/) | [Integrations-Guides](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Tools mit kostenpflichtigen Tiers und Pro-Grade-Modellen


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- Kostenlos mit bezahlten Jira-Plänen: 350 Rovo-Dev-Credits/Benutzer/Monat/Standort
- Die Nutzung endet nach dem monatlichen Kontingent
- Die aktuelle Abrechnungsseite nennt kein festes CLI-Modell; der Modellzugang kann vom Plan abhängen
- Für das kostenlose Add-on ist keine Kreditkarte erforderlich
- Standard: $20/Benutzer/Monat mit 2.000 Credits/Benutzer/Monat

**** [Dokumentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token-Limits](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Jira Preise](https://www.atlassian.com/software/jira/pricing)

---

### [Claude Code](https://www.anthropic.com/claude-code)

> **Pro ($20/Monat oder $17/Monat jährlich):** Sonnet 4 mit mehr Nutzung als gratis
- **Max 5x ($100/Monat):** ~225 Nachrichten/5h — 140–280h Sonnet 4 + 15–35h Opus 4.5 wöchentlich
- **Max 20x ($200/Monat):** ~900 Nachrichten/5h — 240–480h Sonnet 4 + 24–40h Opus 4.5 wöchentlich
- Denkmodi: „think“ (~4K Tokens), „megathink“ (~10K), „ultrathink“ (~32K)
- Ultrathink für komplexe Refactors, Architektur, Deep-Debugging
- Opus 4.5 verbraucht ~5x mehr als Sonnet 4
- Reset wöchentlich mit rollierenden 5h-Fenstern
- Funktioniert mit Opus 4.5, Sonnet 4.5, Haiku 4.5

**** [Preise](https://www.anthropic.com/pricing) | [Claude Code Guide](https://docs.anthropic.com/en/docs/claude-code)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Free**
- Dauerhaft kostenlos: 50 agentische Anfragen/Monat und 1.000 Java-LOC/Monat
- IDE-Limits gelten für Builder-ID-Nutzer; IAM-Limits gelten auf Kontoebene
- Für den kostenlosen Builder-ID-Zugang ist keine Karte nötig; Pro erfordert AWS-Abrechnung
- Pro kostet $19/Benutzer/Monat und bietet höhere Limits

**** [Preise](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Warp Agent und BYOK**
- Kostenlos: begrenzter Cloud-Agent-Zugriff; danach pausiert die KI
- Build ab $20/Monat mit 1.500 Credits ($20 enthaltene Agent-Nutzung)
- Für Einzelpersonen und Unternehmen mit höchstens 10 Personen verbraucht BYOK/Custom Inference keine Warp-Credits
- Der Verbrauch hängt von Modell, Kontext und Aufgabe ab

**** [Preise](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 2.000 Completions und 50 Chat-Anfragen pro Monat
- Copilot CLI und begrenzte Agent-Nutzung; Modellauswahl ist im Free-Tarif eingeschränkt
- Die aktuelle Pläne-Seite nennt Haiku 4.5, GPT-5 mini und weitere Modelle
- Keine Kreditkarte erforderlich

**** [Plan-Details](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [GPT-5.1-Codex-Max Preview](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Aktuelle Preis-/Limitangaben nicht verifiziert**
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- Frühere exakte Werte werden nicht als aktuell dargestellt
- Vor einer Nutzung bitte die verlinkte Herstellerseite prüfen

**** [Preise](https://trae.ai/pricing) | [Dokumentation](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Aktuelle Preis-/Limitangaben nicht verifiziert**
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- Frühere exakte Werte werden nicht als aktuell dargestellt
- Vor einer Nutzung bitte die verlinkte Herstellerseite prüfen

**** [Preise](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Lovable nutzt jetzt ein kreditbasiertes Abrechnungsmodell**
- Free umfasst 5 tägliche Build-Credits (bis zu 30/Monat), 20 monatliche Cloud-Credits und 4 monatliche KI-Credits
- Credits und Grants haben unterschiedliche Ablaufregeln; aktuelle Pläne auf der offiziellen Preisseite prüfen

**** [Pricing](https://lovable.dev/pricing)

---

### [Bolt.new](https://bolt.new/)

> **Free umfasst 300.000 Tokens täglich und 1 Mio. Tokens monatlich**
- Pro beginnt bei 25 $/Monat mit 10 Mio. Tokens/Monat; Teams bei 30 $/Mitglied/Monat
- Bezahlte Tokens können bei aktivem Abo einen weiteren Monat übertragen werden

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Cursor Free und bezahlte Tarife**
- Hobby ist kostenlos, ohne Kreditkarte, mit begrenztem Agent-Zugriff und Composer
- Pro $20/Monat; Pro+ $60; Ultra $200; Teams Standard $40/Benutzer/Monat
- Die GPT-5.1-Codex-Max-Aktion bis 11. Dezember 2025 ist abgelaufen und entfernt
- Nutzung und Modelle hängen vom Tarif ab

**** [Preise](https://cursor.com/en/pricing) | [GPT-5.1-Codex-Max Ankündigung](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Codex-Tarife und API-Abrechnung**
- Codex ist in Free (0 $), Go (8 $/Monat), Plus (20 $/Monat), Pro (ab 100 $/Monat), Business (20 $/Benutzer bei Jahreszahlung oder 25 $ monatlich), Edu und Enterprise enthalten
- API-Schlüssel werden je Modell separat abgerechnet; lokale und Cloud-Nutzung teilen sich Tarifkontingente
- Limits hängen von der Aufgabenkomplexität ab; aktuelle Preisseite prüfen

**** [Pricing](https://developers.openai.com/codex/pricing/) | [GitHub](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

> **Aktuelle Preis-/Limitangaben nicht verifiziert**
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- Frühere exakte Werte werden nicht als aktuell dargestellt
- Vor einer Nutzung bitte die verlinkte Herstellerseite prüfen

**** [Preise](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Aktuelle kostenpflichtige Tabnine-Tarife**
- Code Assistant: 39 $/Benutzer/Monat bei Jahreszahlung; Agentic Platform: 59 $/Benutzer/Monat bei Jahreszahlung
- Auf der aktuellen Preisseite wird kein kostenloser Tarif beworben
- Eigene LLMs on-prem/cloud sind durch Tabnine unbegrenzt; Tabnine-LLM-Zugriff kostet Anbieterpreis plus 5 % Bearbeitung

**** [Pricing](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **AI Pro ($15/Monat):** Höheres Cloud-Quota + unbegrenzte lokale Modelle
- **AI Ultimate ($25/Monat):** Maximales Cloud-Quota + Advanced Features
- Gratis-Tier: unbegrenzte Code-Completion + lokale Modelle + begrenztes Cloud-Quota
- 30-Tage Pro-Test inklusive
- All Products Pack enthält AI Pro
- Offline-Modus mit lokalen Modellen via Ollama/LM Studio

**** [AI Preise](https://www.jetbrains.com/ai-ides/buy/)

---

### [Jules](https://jules.google/)

> **Pro ($19.99/Monat via Google AI Pro):** 100 Aufgaben/Tag
- Jules Pro über Google AI Pro: 100 Aufgaben im rollierenden 24-Stunden-Fenster und 15 gleichzeitig
- 5x gleichzeitige Aufgaben (3 → 15)
- Höherer Zugang zu neuesten Modellen
- **Ultra (via Google AI Ultra):** 300 Aufgaben/Tag
- 20x höhere Limits vs gratis
- 60 gleichzeitige Aufgaben
- Priorisierter Zugang zu neuen Modellen
- Gmail-Konto nötig (18+)

**** [Nutzungs-Limits](https://jules.google/docs/usage-limits/) | [Google AI Pläne](https://one.google.com/about/google-ai-plans/)

---

### [SuperMaven](https://supermaven.com/)

> **Pro ($10/Monat):** 1M Token Kontextfenster + Chat-Credits
- Alternative: $99/Jahr
- Chat-Interface mit GPT-4o, Claude 3.5 Sonnet, GPT-4
- **Team ($10/User/Monat):** Pro-Features + Team-Management
- Hinweis: Fusioniert mit Cursor IDE Nov 2024

**** [Preise](https://supermaven.com/pricing)

Kennst du bessere Preise oder Limits? Link im Issue/PR teilen, um aktuell zu bleiben. Siehe CONTRIBUTING.md für Richtlinien.

---

## 4. Tools mit kostenlosem Zugang zu Basis-Modellen
__(unspezifizierte/basics Modelle)__

### [Bolt.new](https://bolt.new/)

> **Free umfasst 300.000 Tokens täglich und 1 Mio. Tokens monatlich**
- Pro beginnt bei 25 $/Monat mit 10 Mio. Tokens/Monat; Teams bei 30 $/Mitglied/Monat
- Bezahlte Tokens können bei aktivem Abo einen weiteren Monat übertragen werden

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Lovable nutzt jetzt ein kreditbasiertes Abrechnungsmodell**
- Free umfasst 5 tägliche Build-Credits (bis zu 30/Monat), 20 monatliche Cloud-Credits und 4 monatliche KI-Credits
- Credits und Grants haben unterschiedliche Ablaufregeln; aktuelle Pläne auf der offiziellen Preisseite prüfen

**** [Pricing](https://lovable.dev/pricing)

---

### [v0.dev](https://v0.dev/)

> **Free umfasst monatlich Credits im Wert von 5 $ und 7 Nachrichten täglich**
- Plus kostet 30 $/Nutzer/Monat mit 30 $ monatlichen Credits; Business 100 $/Nutzer/Monat
- Die Nutzung wird nach Ein-/Ausgabe-Tokens gemessen und in Credits umgerechnet

**** [Pricing](https://api2.v0.dev/pricing)

---

### [Codeium](https://codeium.com/)

> **Aktuelle Preis-/Limitangaben nicht verifiziert**
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- Frühere exakte Werte werden nicht als aktuell dargestellt
- Vor einer Nutzung bitte die verlinkte Herstellerseite prüfen

**** [Preise](https://codeium.com/pricing) | [Dokumentation](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Aktuelle kostenpflichtige Tabnine-Tarife**
- Code Assistant: 39 $/Benutzer/Monat bei Jahreszahlung; Agentic Platform: 59 $/Benutzer/Monat bei Jahreszahlung
- Auf der aktuellen Preisseite wird kein kostenloser Tarif beworben
- Eigene LLMs on-prem/cloud sind durch Tabnine unbegrenzt; Tabnine-LLM-Zugriff kostet Anbieterpreis plus 5 % Bearbeitung

**** [Pricing](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **AI Free Tier in IDEs enthalten**
- Unbegrenzte Code-Completion und lokale Modelle
- Begrenztes Kontingent für Cloud-Features
- 30-Tage AI Pro Test
- Chat, Code-Generierung, Commit-Messages mit lokalen Modellen

**** [AI Features](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

> **Gratis-Tier mit Basis-Funktionen**
- Einfache Code-Vorschläge
- 7-Tage Datenaufbewahrung
- Kreditkarte für Registrierung erforderlich
- 1M Token Kontextfenster (beachtlich für gratis)

**** [Preise](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

> **Kostenlose Open-Source-Erweiterung mit flexiblem Modell-Support**
- Kostenlose VS Code & JetBrains Erweiterung
- Voller Support für lokale Modelle via Ollama, LM Studio
- Solo-Tier: privat/team/öffentlich
- Unterstützt 200+ Modelle (eigene API-Keys für Cloud nötig)
- Community-Hub für Custom AI-Assistenten
- Kein Vendor-Lock-in oder Nutzungslimits für lokale Modelle

**** [GitHub](https://github.com/continuedev/continue) | [Model Hub](https://hub.continue.dev/explore/models)

Kennst du offizielle Limits oder Modelle? Link im Issue/PR teilen, um zu aktualisieren. Siehe CONTRIBUTING.md für Richtlinien.

---

## 5. Lokale Modelle


Lokales Ausführen von Open-Weight Frontier-Modellen bietet unbegrenzte Coding-Hilfe ohne API-Kosten oder Limits. Beliebte Tools: **[Cline](https://cline.bot/)** (VS Code Erweiterung mit Plan/Act und MCP), **[Aider](https://aider.chat/)** (CLI-Assistent mit Git-Integration), **[Continue.dev](https://www.continue.dev/)** (VS Code Erweiterung, 200+ Modelle). Alle arbeiten mit **[Ollama](https://ollama.com/)** für Devstral (24B, agentisches Coding), Qwen3-Coder, DeepSeek Coder V2, Codestral, GLM-4.5.

**Hinweis**: Frontier-Modelle brauchen viel RAM/VRAM. Für Qwen3‑Coder‑480B ist das Ollama-GGUF ~150GB, praktische Inferenz kann ~150GB Unified Memory (RAM+VRAM) erfordern; 30B Quant braucht ~18GB. Siehe Unsloth Qwen3‑Coder Guide ([docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) und Simon Willison zu [GLM‑4.5 AIR auf seinem Laptop](https://simonwillison.net/2025/Jul/29/space-invaders/) als Beispiel.

---

## Vergleichsnotizen

- **Ziel**: Vergleich nach Zugang zu Pro-Modellen und Gratis-Limits.
- **Unterschiedliche Limit-Typen**: Requests, Tokens, Credits, Chats – direkte Vergleiche sind schwierig. Doku prüfen.
- **Realer Gebrauch**: Stark abhängig von Coding-Stil, Aufgabenkosten und Tool-Implementierung.
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- Die zugängliche offizielle Seite nennt keine stabile aktuelle Quota- oder Preistabelle
- **Vergleichbarkeit:** SWE-bench-Werte stammen aus unterschiedlichen Testbedingungen; parallele, interaktive und einzelne Läufe sind nicht direkt vergleichbar. Credits, Tokens, Anfragen, Chats und Aufgaben dürfen nicht in eine Großzügigkeitsrangfolge umgerechnet werden.

---

## Verwandte Ressourcen

- [Coding with AI](https://coding-with-ai.dev/) - Praktische Techniken und Ressourcen für LLM-Coding
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Umfassende Liste kostenloser LLM-APIs für Integrationen

---

Zuletzt aktualisiert: 5. Dezember 2025 • PRs/Issues willkommen

**Sprachen:** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md) • [Türkçe](README-tr.md)

# KI-Coding-Tools: Wo Pro-Grade-Modelle wirklich gratis sind 

Viele KI-Coding-Tools behaupten „gratis“ zu sein, aber der Zugriff auf Pro-Modelle ist oft schnell aufgebraucht und wird dann herabgestuft. Jedes Tool hat andere Limits (Credits, Tokens, Requests), wodurch ein Vergleich schwer ist. Diese Liste stellt sie nebeneinander, um zu zeigen, was wirklich kostenlos ist.

## TL;DR — Gratis-Tiers für Pro‑Grade KI-Coding
(Tools mit höheren Limits zuerst)

| Tool | Pro‑Grade-Modelle | Gratis-Limit | Kreditkarte |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen3-Coder-480B | 2.000 Requests/Tag | Nein |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Claude Sonnet 4 | 5M Tokens/Tag (Beta) | Nein |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Gemini 3 Pro, Gemini 2.5 Pro | Gemini 3 Pro (Warteliste/bezahlt), 100 Req/Tag Gemini 2.5 Pro | Nein |
| [Cursor](https://cursor.com/) | GPT-5.1-Codex-Max | Gratis bis 11. Dez 2025 (77,9% SWE-bench) | Nein |
| [Kilo Code](https://kilocode.ai/) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | Bis zu $25 Signup-Credits (einmalig) | Ja |
| [Warp](https://warp.dev/) | GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro | 150 Credits/Monat (erste 2 Monate), dann 75/Monat | Nein |
| [Trae](https://trae.ai/) | Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro | 10 schnelle + 50 langsame Requests/Monat | Nein |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Claude Sonnet 4 | 50 agentische Requests/Monat | Ja |
| [GitHub Copilot](https://github.com/features/copilot/plans) | GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1 | 50 Chat-Requests + 2.000 Completions/Monat | Nein |
| [Windsurf](https://windsurf.com/) | OpenAI, Anthropic, Google, xAI | 25 Credits/Monat | Ja |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 15 Aufgaben/Tag | Nein |
| [AWS Kiro](https://kiro.dev/) | Claude 4 Sonnet, Claude 3.7 Sonnet | 50 Credits/Monat | Nein |
| [Qoder](https://qoder.com/) | Qwen3-Coder-480B, Claude, GPT, Gemini | Gratis-Tier + 2-wöchige Pro-Testphase (1.000 Credits) | Nein |

### Qualifizierte Pro-Grade-Modelle
Nur Modelle mit >60% auf SWE-bench Verified gelten als pro-tauglich. Aktuelle Liste:

| Modell | SWE-bench Verified | Anbieter |
|-------|-------------------|----------|
| Claude Opus 4.5 | 80,9% | Anthropic |
| GPT-5.1-Codex-Max | 77,9% | OpenAI |
| Claude Sonnet 4.5 | 77,2% (82,0% mit Parallel) | Anthropic |
| Gemini 3 Pro | 76,2% | Google |
| GPT-5 | 74,9% | OpenAI |
| Claude Opus 4.1 | 74,5% | Anthropic |
| Claude Sonnet 4 | 72,7% (80,2% mit Parallel) | Anthropic |
| GPT-5 mini | 71,0% | OpenAI |
| Qwen3-Coder-480B | 69,6% (interaktiv) / 67,0% (single) | Alibaba |
| Gemini 2.5 Pro | 63,2% | Google |

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
_(vom großzügigsten zum kleinsten geordnet)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Zugriff auf Qwen3-Coder-480B**
- Gratis-Tier 2.000 Requests/Tag via Qwen OAuth
- 60 Requests/Minute Rate Limit
- CLI-Workflow-Tool (adaptiert von Gemini CLI)
- Ein-Klick-Browser-Login
- Keine Kreditkarte erforderlich

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Dokumentation](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Claude Sonnet 4 Zugriff während der Beta**
- 5M Tokens/Tag gratis (20M nur am ersten Tag)
- Claude Sonnet 4 Modell (per Tests bestätigt)
- Keine Kreditkarte in der Beta
- Token-Limits reset um Mitternacht UTC
- Upgrade auf Jira Standard/Premium/Enterprise für 20M Tokens/Tag

**** [Dokumentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Token-Limits](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Zugriff auf Gemini 3 Pro und Gemini 2.5 Pro**
- Gemini 3 Pro verfügbar (4. Dez 2025) für Google AI Ultra Abonnenten und zahlende API-Nutzer
- Gemini 3 Pro: 76,2% SWE-bench Verified — bestes Google-Coding-Modell
- 100 Requests/Tag Limit für Gemini 2.5 Pro (Gratis-Fallback)
- 250 Requests/Tag Limit für Gemini 2.5 Flash
- Keine Kreditkarte für Gratis-Tier
- Warteliste für Gemini 3 Pro (Google AI Pro, Gemini Code Assist Standard, Gratis)
- Aktivieren via `/settings` → Preview features → true

**** [Rate Limits](https://ai.google.dev/gemini-api/docs/rate-limits) | [Preise](https://ai.google.dev/gemini-api/docs/pricing) | [Gemini 3 Pro Ankündigung](https://developers.googleblog.com/en/5-things-to-try-with-gemini-3-pro-in-gemini-cli/)

---

### [Kilo Code](https://kilocode.ai/)

> **Zugriff auf Claude Opus/Sonnet, Gemini 2.5 Pro, GPT-4.1**
- Bis zu $25 Signup-Credits (einmalig)
- Open-Source VS Code Erweiterung
- Pay-as-you-go ohne Aufschlag
- Kreditkarte erforderlich für Bonus-Credits
- Unterstützt eigene API-Schlüssel

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [Dokumentation](https://kilocode.ai/docs/) | [Preise](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Zugriff GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro**
- 150 Credits/Monat (erste 2 Monate), dann 75/Monat
- Mehrere Anbieter (OpenAI GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro)
- Keine Kreditkarte für Basis-Registrierung
- Neue Preise ab 30. Okt 2025: Build-Plan ($20/Monat) mit 1.500 Credits

**** [Preise](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Zugriff auf Claude Sonnet 4**
- 50 agentische Requests/Monat (Multi-Turn)
- Neueste Claude-Modelle (AWS-gehostet)
- Kreditkarte erforderlich
- Upgrade auf Pro für dauerhaften Zugriff
- Dauerhaftes Gratis-Tier

**** [Preise](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Agent Mode mit GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1**
- 50 Chat-Requests + 2.000 Completions/Monat
- Autonomes Multi-Step-Coding
- Mehrere Anbieter (GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)
- Keine Kreditkarte erforderlich
- Nach dem Kontingent nur Basisfunktionen

**** [Plan-Details](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Agent Mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Zugriff Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro**
- 10 schnelle + 50 langsame Requests/Monat für Premium-Modelle
- 1.000 langsame Requests/Monat für Advanced-Modelle
- 5.000 Autocompletions/Monat
- VS Code-basierte IDE mit IA-Integration
- Mehrere Premium-Modelle inkl. Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1
- Keine Kreditkarte im Gratis-Tier
- Pro-Plan: $10/Monat (600 schnelle + unbegrenzte langsame)

**** [Preise](https://trae.ai/pricing) | [Dokumentation](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Zugriff auf OpenAI, Anthropic, Google, xAI Modelle**
- 25 Prompt-Credits/Monat
- Mehrere Anbieter (OpenAI, Claude, Gemini, xAI)
- Kreditkarte erforderlich
- Zusatz-Credits verfügbar

**** [Preise](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Zugriff Gemini 2.5 Pro**
- 15 Aufgaben/Tag gratis
- 3 gleichzeitige Aufgaben
- Gemini 2.5 Pro Modell
- Gmail-Konto erforderlich (18+)
- Aufgabenlimit rollierend 24h
- Keine Kreditkarte erforderlich
- Pro ($19.99/Monat): 100 Aufgaben/Tag (5x)

**** [Nutzungs-Limits](https://jules.google/docs/usage-limits/) | [Dokumentation](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **Zugriff Claude 4 Sonnet, Claude 3.7 Sonnet**
- 50 Credits/Monat (Gratis-Tier)
- Claude 4 Sonnet und Claude 3.7 Sonnet (AWS-gehostet)
- Keine Kreditkarte erforderlich
- 14-Tage-Willkommensbonus: 500 Credits
- Bezahl-Tiers: Pro ($20/Monat - 1.000 Credits), Pro+ ($40/Monat - 2.000 Credits), Power ($200/Monat - 10.000 Credits)

**** [Preise](https://kiro.dev/pricing/) | [Intro-Blog](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Qwen3-Coder-480B, Claude, GPT, Gemini Modelle**
- Gratis-Tier: unbegrenzte Completions/Edits + begrenzte Chat/Agent-Requests + 2-wöchige Pro-Testphase (1.000 Credits)
- KI-IDE von Alibaba
- Verfügbar für Windows und macOS
- Nutzt primär Qwen3-Coder-480B (Flaggschiff von Alibaba)
- Unterstützt auch Claude, GPT-4, Gemini
- Agent Mode und Quest Mode für autonomes Coding
- Keine Kreditkarte erforderlich (gratis)
- Bezahl-Tiers: Pro ($20/Monat - 2.000 Credits), Pro+ ($60/Monat - 6.000 Credits)

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

> **Zugriff auf Qwen3-235B und Llama 3.1**
- Gratis-Tier: 1M Tokens/Tag
- Keine Kreditkarte nötig
- 30 Requests/Minute, 8.192 Token Kontext
- Modelle: Qwen3-235B, Llama 3.1 70B (Hinweis: Qwen3-Coder-480B deprecated 5. Nov 2025)
- OpenAI-kompatibel (funktioniert mit Cursor, Continue.dev, Cline, RooCode, etc.)
- Sehr schnelle Inferenz: 2.000 Tokens/Sekunde (40x schneller als üblich)
- **Bezahl-Tiers:** Developer ($10+ self-serve), Enterprise (custom)

**** [Preise](https://www.cerebras.ai/pricing) | [API-Dokumentation](https://inference-docs.cerebras.ai/) | [Integrations-Guides](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Tools mit kostenpflichtigen Tiers und Pro-Grade-Modellen


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Jira Standard ($7.53/User/Monat):** 20M Tokens/Tag
- **Jira Premium ($15.25/User/Monat):** 20M Tokens/Tag
- **Jira Enterprise (custom):** 20M Tokens/Tag
- 4x Anstieg vs gratis (5M → 20M Tokens/Tag)
- Gleiches Claude-basiertes Modell wie gratis
- Reset um Mitternacht UTC

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

> **Pro ($19/Monat):** Höhere Limits für agentische Requests
- Nutzung kann regional/verbrauchsbasiert angepasst werden

**** [Preise](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Build ($20/Monat):** 1.500 AI-Credits/Monat
- Nachlade-Credits verfügbar (bis 50% günstiger, 12 Monate gültig)
- BYOK-Option (eigener API-Key)
- Neue Preise sofort für neue Kunden (30. Okt 2025)
- Bestehende Abos wechseln nach 1. Dez 2025
- Enterprise: individuelle Preise

**** [Preise](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Pro ($10/Monat):** 300 Premium-Requests + unbegrenzte Completions/Monat
- **Pro+ ($39/Monat):** 1.500 Premium-Requests + unbegrenzte Completions/Monat
- **Business ($19/User/Monat):** 300 Premium-Requests + unbegrenzte Completions/User/Monat
- **Enterprise ($39/User/Monat):** 1.000 Premium-Requests + unbegrenzte Completions/User/Monat
- **GPT-5.1-Codex-Max** public preview (4. Dez 2025) für Pro, Pro+, Business, Enterprise
- Zugang zu GPT-5.1-Codex-Max, GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1
- Überziehungen zu $0.04/Request

**** [Plan-Details](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [GPT-5.1-Codex-Max Preview](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Pro ($10/Monat):** 600 schnelle Requests + unbegrenzte langsame (Premium-Modelle)
- Unbegrenzte langsame Requests für Advanced-Modelle
- Keine Rate Limits und schnellerer Zugang
- Zusatzpakete: $3-$12 für mehr schnelle Requests
- Premium-Modelle: Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, Gemini 2.5 Pro, GPT‑4.1, GPT‑4o
- VS Code IDE mit voller IA-Integration
- Erster Monat für $3

**** [Preise](https://trae.ai/pricing) | [Dokumentation](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Pro ($15/Monat):** 500 Prompt-Credits/Monat
- **Teams ($30/User/Monat):** 500 Prompt-Credits/User/Monat
- **Enterprise ($60+/User/Monat):** 1.000 Prompt-Credits/User/Monat

**** [Preise](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Pro ($25/Monat):** 150 Credits/Monat (5 täglich)
- **Teams ($30/Monat):** Höhere Limits (nicht veröffentlicht)

**** [Messaging-Limits](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

> **$20/Monat:** 10M Tokens/Monat
- **$200/Monat:** 120M Tokens/Monat

**** [Token-Dokumentation](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Hobby (Gratis):** Begrenzte Agent-Requests + begrenzte Tab-Completes + 1 Woche Pro-Test
- **Pro ($20/Monat oder $16/Monat jährlich):** Erweiterte Agent-Limits + unbegrenzte Tab-Completions + Background Agents + maximale Kontextfenster
- **Pro+ ($60/Monat):** 3x Nutzung aller OpenAI, Claude, Gemini Modelle
- **Ultra ($200/Monat):** 20x Nutzung aller OpenAI, Claude, Gemini Modelle + Priorität für neue Features
- **Teams ($40/User/Monat):** Pro-Features + zentrale Abrechnung + Nutzungsanalysen + SAML/OIDC SSO
- **Enterprise (Custom):** Alles aus Teams + Pooling + SCIM + AI-Code-Tracking API + Audit Logs
- **GPT-5.1-Codex-Max gratis für alle bis 11. Dez 2025** (77,9% SWE-bench)
- Einwöchige Pro-Testversion verfügbar (gratis Tier)
- Gratis-Tier nutzt jetzt tokenbasiertes Tracking
- Gratis-Modelle: Cursor Small, Deepseek v3, Gemini 2.5 Flash, GPT-4o mini (500/Tag Limit), Grok 3 Mini Beta
- Bezahl-Tiers: Zugriff auf OpenAI, Claude, Gemini inkl. GPT-5.1-Codex-Max
- Hinweis: Claude-Modelle ~Juni 2025 aus Gratis-Tier entfernt
- KI-Code-Editor mit autonomen Coding-Fähigkeiten

**** [Preise](https://cursor.com/en/pricing) | [GPT-5.1-Codex-Max Ankündigung](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Gratis mit ChatGPT Plus ($20/Monat):** 30–150 Nachrichten/5h für Coding
- **ChatGPT Pro ($200/Monat):** 300–1.500 Nachrichten/5h — höchste Limits
- **Pay-as-you-go API:** GPT-5.1-Codex-Max $1.25/$10 pro Mio Tokens (Input/Output)
- **Free OSS Mode:** Zugriff nur auf Open-Source-Modelle (--oss Flag)
- **GPT-5.1-Codex-Max** (19. Nov 2025): 77,9% SWE-bench — Standardmodell
- Erstes Modell mit „Compaction“ für Multi-Million-Token-Sessions (24h+ Tasks)
- 30% weniger Thinking-Tokens als vorheriger GPT-5.1-Codex
- Auch in GitHub Copilot (Pro, Pro+, Business, Enterprise)
- Windows-Support inklusive
- Cross-Platform: macOS 12+, Ubuntu 20.04+, Windows 11 via WSL2

**** [GitHub Repo](https://github.com/openai/codex) | [GPT-5.1-Codex-Max Ankündigung](https://openai.com/index/gpt-5-1-codex-max/)

---

### [Codeium](https://codeium.com/)

> **Pro ($10/Monat):** Unbegrenzte Nutzung mit erweitertem Kontext
- Zugriff auf Claude 3.5 Sonnet, GPT-4o
- Verbesserte Kontextfenster und Personalisierung
- **Teams ($12/User/Monat):** Pro-Features + Team-Management
- **Enterprise (Custom):** On-Prem Deployment, Custom Models

**** [Preise](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Pro ($12/Monat):** Verbesserte AI-Completions und Chat
- **Enterprise ($39/User/Monat):** Mehrere LLMs, Private Deployment
- Modelle: Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, proprietär
- 600+ Programmiersprachen unterstützt
- On-Prem und Air-Gap Optionen
- Eigene Fine-Tunes möglich

**** [Preise](https://www.tabnine.com/pricing/)

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
- 5x höhere Limits vs gratis (15 → 100 Aufgaben/Tag)
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

> **Unspezifizierte Modelle**
- 1M Tokens/Monat Limit
- Konkretes Modell nicht öffentlich genannt
- Kreditkarte erforderlich

**** [Token-Dokumentation](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Unspezifizierte Modelle**
- 5 Credits/Tag, max 30/Monat (gratis)
- Modelle nicht öffentlich aufgeführt
- Kreditkarte erforderlich

**** [Messaging-Limits](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

> **Proprietäre Modelle (nicht Frontier)**
- GPT-5 Zugang erfordert v0 Premium
- $5 Credits/Monat Limit
- Proprietäre Modelle mit variablem Routing
- Kreditkarte erforderlich

**** [Updated Pricing Blog](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

> **Unbegrenzte Gratis-Nutzung der Basis-AI-Unterstützung**
- Individueller Plan: dauerhaft gratis mit unbegrenzten Completions, AI-Chat, Commands
- 70+ Programmiersprachen unterstützt
- IDE-Integrationen: VS Code, JetBrains, Vim/Neovim, Jupyter
- Keine Kreditkarte erforderlich
- Begrenztes Kontextverständnis (erweitert in bezahlten Tiers)
- Nur Basismodell (Llama 3.1 70B), Pro-Modelle benötigen Abo

**** [Preise](https://codeium.com/pricing) | [Dokumentation](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Gratis-Tier mit begrenzten Features**
- Basis-AI-Completions und Chat (limitiert)
- Lokale Verarbeitung verfügbar
- Kontext stark begrenzt im Gratis-Tier
- Reduzierte Performance zur Ressourcenschonung
- 600+ Sprachen unterstützt

**** [Preise](https://www.tabnine.com/pricing/)

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
- **Was gilt als „Pro“?** ≥60% auf SWE-bench Verified. Aktuelle Modelle: Claude Opus 4.5 (80,9%), GPT-5.1-Codex-Max (77,9%), Claude Sonnet 4.5 (77,2%), Gemini 3 Pro (76,2%), GPT-5 (74,9%), Claude Opus 4.1 (74,5%), Claude Sonnet 4 (72,7%), GPT-5 mini (71,0%), Qwen3-Coder-480B (69,6%), Gemini 2.5 Pro (63,2%).
- **Unterschiedliche Limit-Typen**: Requests, Tokens, Credits, Chats – direkte Vergleiche sind schwierig. Doku prüfen.
- **Realer Gebrauch**: Stark abhängig von Coding-Stil, Aufgabenkosten und Tool-Implementierung.

---

## Verwandte Ressourcen

- [Coding with AI](https://coding-with-ai.dev/) - Praktische Techniken und Ressourcen für LLM-Coding
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Umfassende Liste kostenloser LLM-APIs für Integrationen

---

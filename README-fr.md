Dernière mise à jour: 5 décembre 2025 • PRs/issues bienvenus

**Langues :** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md) • [Türkçe](README-tr.md)

# Outils de Codage IA : Où les Modèles de Niveau Professionnel Sont Vraiment Gratuits 

Beaucoup d'outils de codage IA prétendent être « gratuits », mais l'accès aux modèles de niveau professionnel s'épuise généralement rapidement, puis vous êtes rétrogradé. Chaque outil utilise différentes limites (crédits, tokens, requêtes), donc la comparaison est difficile. Cette liste les met côte à côte pour montrer ce que vous obtenez réellement gratuitement.

## TL;DR — Niveaux Gratuits pour le Codage IA de Niveau Professionnel
(outils avec des limites plus élevées listés en premier)

| Outil | Modèles de niveau professionnel | Limite du niveau gratuit | Carte de crédit |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen3-Coder-480B | 2 000 requêtes/jour | Non |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Claude Sonnet 4 | 5M tokens/jour (beta) | Non |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Gemini 3 Pro, Gemini 2.5 Pro | Gemini 3 Pro (liste d’attente/payant), 100 req/jour Gemini 2.5 Pro | Non |
| [Cursor](https://cursor.com/) | GPT-5.1-Codex-Max | Gratuit jusqu'au 11 déc. 2025 (77,9% SWE-bench) | Non |
| [Kilo Code](https://kilocode.ai/) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | Jusqu'à $25 de crédits d'inscription (unique) | Oui |
| [Warp](https://warp.dev/) | GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro | 150 crédits/mois (2 premiers mois), puis 75/mois | Non |
| [Trae](https://trae.ai/) | Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro | 10 rapides + 50 lentes requêtes/mois | Non |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Claude Sonnet 4 | 50 requêtes agentiques/mois | Oui |
| [GitHub Copilot](https://github.com/features/copilot/plans) | GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1 | 50 requêtes de chat + 2 000 complétions/mois | Non |
| [Windsurf](https://windsurf.com/) | OpenAI, Anthropic, Google, xAI | 25 crédits/mois | Oui |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 15 tâches/jour | Non |
| [AWS Kiro](https://kiro.dev/) | Claude 4 Sonnet, Claude 3.7 Sonnet | 50 crédits/mois | Non |
| [Qoder](https://qoder.com/) | Qwen3-Coder-480B, Claude, GPT, Gemini | Niveau gratuit + essai Pro de 2 semaines (1 000 crédits) | Non |

### Modèles de Niveau Professionnel Qualifiés
Seuls les modèles atteignant >60% sur SWE-bench Verified se qualifient pour des tâches de codage réelles. Voici la liste actuelle

| Modèle | SWE-bench Verified | Fournisseur |
|-------|-------------------|----------|
| Claude Opus 4.5 | 80,9% | Anthropic |
| GPT-5.1-Codex-Max | 77,9% | OpenAI |
| Claude Sonnet 4.5 | 77,2% (82,0% avec parallèle) | Anthropic |
| Gemini 3 Pro | 76,2% | Google |
| GPT-5 | 74,9% | OpenAI |
| Claude Opus 4.1 | 74,5% | Anthropic |
| Claude Sonnet 4 | 72,7% (80,2% avec parallèle) | Anthropic |
| GPT-5 mini | 71,0% | OpenAI |
| Qwen3-Coder-480B | 69,6% (interactif) / 67,0% (single) | Alibaba |
| Gemini 2.5 Pro | 63,2% | Google |

### Contribuer

Si vous voyez une erreur, un lien source manquant ou des informations de quota/modèle à jour, ouvrez un issue ou PR avec une source. Les nouvelles contributions d'outils sont bienvenues ! Voir CONTRIBUTING.md pour les directives détaillées.

### Avertissement

Aucune affiliation avec un fournisseur. Toutes les marques appartiennent à leurs propriétaires. Informations fournies à titre de recherche; exactitude non garantie; limites/prix changent fréquemment.

## Contenus

- [1. Outils de Codage IA avec Accès Gratuit à des Modèles de Niveau Professionnel](#1-outils-de-codage-ia-avec-acces-gratuit-a-des-modeles-de-niveau-professionnel)
- [2. Fournisseurs d’API pour Outils de Codage IA](#2-fournisseurs-dapi-pour-outils-de-codage-ia)
- [3. Outils avec Niveaux Payants et Modèles de Niveau Professionnel](#3-outils-avec-niveaux-payants-et-modeles-de-niveau-professionnel)
- [4. Outils avec Accès Gratuit à des Modèles de Base](#4-outils-avec-acces-gratuit-a-des-modeles-de-base)
- [5. Modèles Locaux](#5-modeles-locaux)
- [Notes de Comparaison](#notes-de-comparaison)
- [Ressources Liées](#ressources-liees)

## 1. Outils de Codage IA avec Accès Gratuit à des Modèles de Niveau Professionnel
_(classés du plus généreux au moins généreux)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Accès Qwen3-Coder-480B**
- Niveau gratuit de 2 000 requêtes/jour via Qwen OAuth
- Limite de 60 requêtes/minute
- Outil de flux de travail IA en ligne de commande (adapté de Gemini CLI)
- Authentification navigateur en un clic
- Carte de crédit non requise

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Documentation](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Accès Claude Sonnet 4 pendant la beta**
- Niveau gratuit 5M tokens/jour (20M uniquement le premier jour)
- Modèle Claude Sonnet 4 (confirmé par tests)
- Pas de carte de crédit requise pendant la beta
- Réinitialisation des limites à minuit UTC
- Note : passer à Jira Standard/Premium/Enterprise pour 20M tokens/jour

**** [Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Limites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Accès Gemini 3 Pro et Gemini 2.5 Pro**
- Gemini 3 Pro disponible (4 déc 2025) pour abonnés Google AI Ultra et API payants
- Gemini 3 Pro : 76,2% SWE-bench Verified — meilleur modèle de codage Google
- Limite 100 requêtes/jour pour Gemini 2.5 Pro (fallback gratuit)
- Limite 250 requêtes/jour pour Gemini 2.5 Flash
- Pas de carte de crédit requise pour le niveau gratuit
- Liste d'attente pour Gemini 3 Pro pour Google AI Pro, Gemini Code Assist standard et utilisateurs gratuits
- Activer via `/settings` → Preview features → true

**** [Limites de Débit](https://ai.google.dev/gemini-api/docs/rate-limits) | [Tarifs](https://ai.google.dev/gemini-api/docs/pricing) | [Annonce Gemini 3 Pro](https://developers.googleblog.com/en/5-things-to-try-with-gemini-3-pro-in-gemini-cli/)

---

### [Kilo Code](https://kilocode.ai/)

> **Accès Claude Opus/Sonnet, Gemini 2.5 Pro, GPT-4.1**
- Jusqu'à $25 crédits d'inscription (bonus unique)
- Extension VS Code open source
- Paiement à l'usage sans marge sur les prix des modèles
- Carte de crédit requise pour réclamer le bonus complet
- Support des clés API personnelles

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentation](https://kilocode.ai/docs/) | [Tarifs](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Accès GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro**
- 150 crédits IA/mois (2 premiers mois), puis 75 crédits/mois
- Multiples fournisseurs (OpenAI GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro)
- Pas de carte de crédit requise pour l'inscription de base
- Nouvelle tarification annoncée 30 oct 2025 : plan Build unique ($20/mois) avec 1 500 crédits

**** [Tarifs](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Accès Claude Sonnet 4**
- Limite 50 requêtes agentiques/mois (conversations multi-tours)
- Derniers modèles Claude (hébergés AWS)
- Carte de crédit requise
- Mise à niveau Pro nécessaire pour un accès continu
- Niveau gratuit perpétuel

**** [Tarifs](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Mode Agent avec GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1**
- 50 requêtes de chat + 2 000 complétions/mois
- Mode Agent avec codage autonome multi-étapes
- Multiples fournisseurs (GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)
- Pas de carte de crédit requise
- Fonctionnalités basiques après quota

**** [Détails des Plans](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Mode Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Accès Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro**
- 10 requêtes rapides + 50 requêtes lentes/mois pour modèles premium
- 1 000 requêtes lentes/mois pour modèles avancés
- 5 000 auto-complétions/mois
- IDE basé VS Code avec intégration IA
- Multiples modèles premium dont Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1
- Pas de carte de crédit requise pour le niveau gratuit
- Plan Pro : $10/mois (600 rapides + lentes illimitées)

**** [Tarifs](https://trae.ai/pricing) | [Documentation](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Accès modèles OpenAI, Anthropic, Google, xAI**
- Limite de 25 crédits de prompt/mois
- Multiples fournisseurs (OpenAI, Claude, Gemini, xAI)
- Carte de crédit requise
- Crédits additionnels disponibles

**** [Tarifs](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Accès Gemini 2.5 Pro**
- 15 tâches/jour niveau gratuit
- 3 tâches concurrentes
- Modèle Gemini 2.5 Pro
- Compte Gmail requis (18+)
- Réinitialisation des tâches sur fenêtre glissante 24h
- Pas de carte de crédit requise
- Niveau Pro ($19.99/mois) : 100 tâches/jour (x5)

**** [Limites d'Usage](https://jules.google/docs/usage-limits/) | [Documentation](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **Accès Claude 4 Sonnet, Claude 3.7 Sonnet**
- 50 crédits/mois (niveau gratuit)
- Modèles Claude 4 Sonnet et Claude 3.7 Sonnet (hébergés AWS)
- Pas de carte de crédit requise
- Bonus de bienvenue 14 jours : 500 crédits
- Niveaux payants : Pro ($20/mois - 1 000 crédits), Pro+ ($40/mois - 2 000 crédits), Power ($200/mois - 10 000 crédits)

**** [Tarifs](https://kiro.dev/pricing/) | [Blog d'Introduction](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Modèles Qwen3-Coder-480B, Claude, GPT, Gemini**
- Niveau gratuit : complétions/éditions illimitées + chat/agent limités + essai Pro 2 semaines (1 000 crédits)
- IDE IA d'Alibaba
- Disponible pour Windows et macOS
- Utilise principalement Qwen3-Coder-480B (modèle phare Alibaba)
- Supporte aussi Claude, GPT-4, Gemini
- Mode Agent et Mode Quest pour codage autonome
- Pas de carte de crédit requise (niveau gratuit)
- Niveaux payants : Pro ($20/mois - 2 000 crédits), Pro+ ($60/mois - 6 000 crédits)

**** [Site](https://qoder.com/) | [Tarifs](https://qoder.com/pricing)

Les limites changent vite. Si vous voyez une erreur, une nouvelle quota/modèle, ou souhaitez ajouter un outil, ouvrez un issue ou PR avec une source. Voir CONTRIBUTING.md pour les directives.

---

## 2. Fournisseurs d’API pour Outils de Codage IA
_(classés du plus généreux au moins généreux)_

Ces services fournissent une API vers des modèles optimisés pour le codage qui s'intègrent avec des outils populaires comme Cursor, Continue.dev, Cline, etc. Ils ne sont pas des outils de codage autonomes mais l'IA backend pour les outils existants.

### [OpenRouter](https://openrouter.ai/)

> **Qwen3-Coder-480B via OpenRouter**
- 50 requêtes/jour en gratuit (1 000/jour si $10+ crédits achetés)
- Modèles gratuits additionnels : Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- API compatible OpenAI pour les IDE majeurs
- Pas de carte de crédit pour les modèles gratuits
- Limite 20 requêtes/minute en gratuit
- Fonctionne avec Continue.dev, Cline, Cursor, etc.

**** [Modèles Gratuits](https://openrouter.ai/models/?q=free) | [API Qwen3-Coder](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **Accès Qwen3-235B et Llama 3.1**
- Niveau gratuit : 1M tokens/jour
- Pas de carte de crédit requise
- Limite 30 requêtes/minute, contexte 8 192 tokens
- Modèles : Qwen3-235B, Llama 3.1 70B (Note : Qwen3-Coder-480B déprécié 5 nov 2025)
- API compatible OpenAI (fonctionne avec Cursor, Continue.dev, Cline, RooCode, etc.)
- Inférence ultra-rapide : 2 000 tokens/seconde (40x plus rapide que typique)
- **Niveaux payants :** Developer ($10+ self-serve), Enterprise (personnalisé)

**** [Tarifs](https://www.cerebras.ai/pricing) | [Docs API](https://inference-docs.cerebras.ai/) | [Guides d’Intégration](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Outils avec Niveaux Payants et Modèles de Niveau Professionnel


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Jira Standard ($7.53/utilisateur/mois) :** 20M tokens/jour
- **Jira Premium ($15.25/utilisateur/mois) :** 20M tokens/jour
- **Jira Enterprise (custom) :** 20M tokens/jour
- Augmentation x4 vs gratuit (5M → 20M tokens/jour)
- Même modèle Claude que le niveau gratuit
- Réinitialisation à minuit UTC

**** [Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Limites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Tarifs Jira](https://www.atlassian.com/software/jira/pricing)

---

### [Claude Code](https://www.anthropic.com/claude-code)

> **Pro ($20/mois ou $17/mois annuel) :** Accès Sonnet 4 avec plus d'usage que le gratuit
- **Max 5x ($100/mois) :** ~225 messages/5h — 140–280h Sonnet 4 + 15–35h Opus 4.5 hebdo
- **Max 20x ($200/mois) :** ~900 messages/5h — 240–480h Sonnet 4 + 24–40h Opus 4.5 hebdo
- Modes « think » (~4K tokens), « megathink » (~10K), « ultrathink » (~32K)
- Ultrathink pour refactors complexes, architecture, débogage profond
- Opus 4.5 consomme ~5x plus que Sonnet 4
- Limites réinitialisées chaque semaine avec fenêtres glissantes de 5h
- Fonctionne avec Opus 4.5, Sonnet 4.5 et Haiku 4.5

**** [Tarifs](https://www.anthropic.com/pricing) | [Guide Claude Code](https://docs.anthropic.com/en/docs/claude-code)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Pro ($19/mois) :** Limites augmentées pour requêtes agentiques
- Usage ajusté selon région et modèle d'utilisation

**** [Tarifs](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Build ($20/mois) :** 1 500 crédits IA/mois
- Crédits rechargeables (jusqu'à 50% moins chers, cumul 12 mois)
- Option BYOK (clé API perso)
- Nouvelle tarification effective pour nouveaux clients (30 oct 2025)
- Transition des abonnés mensuels à partir du 1 déc 2025
- Niveau Enterprise : prix personnalisés

**** [Tarifs](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Pro ($10/mois) :** 300 requêtes premium + complétions illimitées/mois
- **Pro+ ($39/mois) :** 1 500 requêtes premium + complétions illimitées/mois
- **Business ($19/utilisateur/mois) :** 300 requêtes premium + complétions illimitées/utilisateur/mois
- **Enterprise ($39/utilisateur/mois) :** 1 000 requêtes premium + complétions illimitées/utilisateur/mois
- **GPT-5.1-Codex-Max** en preview publique (4 déc 2025) pour Pro, Pro+, Business, Enterprise
- Accès à plusieurs modèles (GPT-5.1-Codex-Max, GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)
- Facturation des dépassements à $0.04/requête

**** [Détails des Plans](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Preview GPT-5.1-Codex-Max](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Pro ($10/mois) :** 600 requêtes rapides + requêtes lentes illimitées (modèles premium)
- Requêtes lentes illimitées pour modèles avancés
- Pas de limites de débit, accès plus rapide aux modèles premium
- Packages additionnels : $3-$12 pour plus de requêtes rapides
- Modèles premium : Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, Gemini 2.5 Pro, GPT‑4.1, GPT‑4o
- IDE VS Code avec intégration IA complète
- Premier mois à $3

**** [Tarifs](https://trae.ai/pricing) | [Documentation](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Pro ($15/mois) :** 500 crédits de prompt/mois
- **Teams ($30/utilisateur/mois) :** 500 crédits de prompt/utilisateur/mois
- **Enterprise ($60+/utilisateur/mois) :** 1 000 crédits de prompt/utilisateur/mois

**** [Tarifs](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Pro ($25/mois) :** 150 crédits/mois (5 crédits quotidiens)
- **Teams ($30/mois) :** Limites plus élevées (non divulguées)

**** [Limites de Messages](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

> **$20/mois :** 10M tokens/mois
- **$200/mois :** 120M tokens/mois

**** [Documentation Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Hobby (Gratuit) :** Requêtes Agent limitées + Tab limitées + essai Pro 1 semaine
- **Pro ($20/mois ou $16/mois annuel) :** Limites Agent étendues + Tab illimitées + Agents en arrière-plan + fenêtres de contexte max
- **Pro+ ($60/mois) :** Usage x3 sur tous les modèles OpenAI, Claude, Gemini
- **Ultra ($200/mois) :** Usage x20 sur tous les modèles OpenAI, Claude, Gemini + accès prioritaire aux nouveautés
- **Teams ($40/utilisateur/mois) :** Fonctions Pro + facturation centralisée + analytics d'usage + SAML/OIDC SSO
- **Enterprise (Custom) :** Tout Teams + usage mutualisé + SCIM + API suivi de code IA + journaux d'audit
- **GPT-5.1-Codex-Max gratuit pour tous jusqu'au 11 déc 2025** (77,9% SWE-bench Verified)
- Essai Pro d'une semaine disponible (niveau gratuit)
- Niveau gratuit suit maintenant l'usage en tokens (pas en requêtes)
- Modèles gratuits : Cursor Small, Deepseek v3, Gemini 2.5 Flash, GPT-4o mini (limite 500/jour), Grok 3 Mini Beta
- Niveaux payants : accès aux modèles OpenAI, Claude, Gemini dont GPT-5.1-Codex-Max
- Note : modèles Claude retirés du niveau gratuit ~juin 2025
- Éditeur de code IA avec capacités de codage autonome

**** [Tarifs](https://cursor.com/en/pricing) | [Annonce GPT-5.1-Codex-Max](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Gratuit avec ChatGPT Plus ($20/mois) :** 30–150 messages/5h pour tâches de codage
- **ChatGPT Pro ($200/mois) :** 300–1 500 messages/5h — limites les plus élevées
- **API pay-as-you-go :** GPT-5.1-Codex-Max à $1.25/$10 par million de tokens (entrée/sortie)
- **Mode OSS gratuit :** Accès aux modèles open source uniquement (flag --oss)
- **GPT-5.1-Codex-Max** (19 nov 2025) : 77,9% SWE-bench Verified — modèle par défaut
- Premier modèle avec « compaction » pour sessions multi-million de tokens (tâches 24+ h)
- 30% moins de tokens de raisonnement que le précédent GPT-5.1-Codex
- Disponible aussi dans GitHub Copilot (Pro, Pro+, Business, Enterprise)
- Support Windows inclus
- Multi-plateforme : macOS 12+, Ubuntu 20.04+, Windows 11 via WSL2

**** [Repo GitHub](https://github.com/openai/codex) | [Annonce GPT-5.1-Codex-Max](https://openai.com/index/gpt-5-1-codex-max/)

---

### [Codeium](https://codeium.com/)

> **Pro ($10/mois) :** Usage illimité avec conscience de contexte avancée
- Accès Claude 3.5 Sonnet, GPT-4o
- Fenêtre de contexte améliorée et personnalisation
- **Teams ($12/utilisateur/mois) :** Fonctions Pro + gestion d'équipe
- **Enterprise (Custom) :** Déploiement on-prem, modèles personnalisés

**** [Tarifs](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Pro ($12/mois) :** Complétions et chat IA améliorés
- **Enterprise ($39/utilisateur/mois) :** Multiples LLMs, déploiement privé
- Modèles : Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, modèles propriétaires
- 600+ langages pris en charge
- Options on-prem et isolées
- Apportez vos modèles fine-tunés

**** [Tarifs](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **AI Pro ($15/mois) :** Quota cloud augmenté + modèles locaux illimités
- **AI Ultimate ($25/mois) :** Quota cloud maximum + fonctions avancées
- Niveau gratuit : complétion illimitée + modèles locaux + quota cloud limité
- Essai Pro 30 jours inclus
- All Products Pack inclut AI Pro
- Mode hors-ligne avec modèles locaux via Ollama/LM Studio

**** [Tarifs AI](https://www.jetbrains.com/ai-ides/buy/)

---

### [Jules](https://jules.google/)

> **Pro ($19.99/mois via Google AI Pro) :** 100 tâches/jour
- Limites x5 vs gratuit (15 → 100 tâches/jour)
- 5x tâches concurrentes (3 → 15)
- Accès accru aux derniers modèles
- **Ultra (via Google AI Ultra) :** 300 tâches/jour
- Limites x20 vs gratuit
- 60 tâches concurrentes
- Accès prioritaire aux nouveaux modèles
- Compte Gmail requis (18+)

**** [Limites d'Usage](https://jules.google/docs/usage-limits/) | [Plans Google AI](https://one.google.com/about/google-ai-plans/)

---

### [SuperMaven](https://supermaven.com/)

> **Pro ($10/mois) :** Fenêtre de contexte 1M tokens + crédits de chat
- Alternative : $99/an
- Interface chat avec GPT-4o, Claude 3.5 Sonnet, GPT-4
- **Team ($10/utilisateur/mois) :** Fonctions Pro + gestion d'équipe
- Note : Fusionné avec Cursor IDE en novembre 2024

**** [Tarifs](https://supermaven.com/pricing)

Vous connaissez de meilleurs tarifs ou limites ? Partagez un lien dans un issue ou PR pour aider à tenir à jour. Voir CONTRIBUTING.md pour les directives.

---

## 4. Outils avec Accès Gratuit à des Modèles de Base
__(modèles non spécifiés/basiques)__

### [Bolt.new](https://bolt.new/)

> **Modèles non spécifiés**
- Limite 1M tokens/mois
- Modèle spécifique non indiqué publiquement
- Carte de crédit requise

**** [Documentation Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Modèles non spécifiés**
- 5 crédits/jour, max 30 par mois (gratuit)
- Modèles non listés publiquement
- Carte de crédit requise

**** [Limites de Messages](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

> **Modèles propriétaires (non frontier)**
- Accès GPT-5 nécessite v0 Premium
- $5 de crédits/mois
- Utilise des modèles propriétaires avec routage variable
- Carte de crédit requise

**** [Blog Tarifs Mis à Jour](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

> **Usage gratuit illimité de l'assistance IA basique**
- Plan individuel : gratuit à vie avec complétions, chat IA, commandes illimités
- Plus de 70 langages supportés
- Intégrations IDE : VS Code, JetBrains, Vim/Neovim, Jupyter
- Pas de carte de crédit requise
- Conscience de contexte limitée (étendue en payant)
- Modèle de base (Llama 3.1 70B), modèles pro nécessitent un abonnement

**** [Tarifs](https://codeium.com/pricing) | [Documentation](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Niveau gratuit avec fonctionnalités limitées**
- Complétions et chat IA basiques (limités)
- Traitement local disponible
- Contexte fortement limité en gratuit
- Performances réduites pour économiser les ressources
- 600+ langages supportés

**** [Tarifs](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **Niveau AI gratuit inclus avec les IDE**
- Complétion de code illimitée et support de modèles locaux
- Quota limité pour fonctionnalités cloud
- Essai AI Pro 30 jours
- Chat, génération de code, messages de commit avec modèles locaux

**** [Fonctionnalités AI](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

> **Niveau gratuit avec fonctions basiques**
- Suggestions de code basiques
- Rétention des données 7 jours
- Carte de crédit requise pour l'inscription
- Fenêtre de contexte 1M tokens (remarquable pour un niveau gratuit)

**** [Tarifs](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

> **Extension open-source gratuite avec support flexible des modèles**
- Extension gratuite VS Code et JetBrains
- Support complet des modèles locaux via Ollama, LM Studio
- Niveau Solo : options privé/équipe/public
- Supporte 200+ modèles (requiert vos clés API pour le cloud)
- Hub communauté pour assistants IA personnalisés
- Pas de verrou fournisseur ni de limites pour les modèles locaux

**** [GitHub](https://github.com/continuedev/continue) | [Model Hub](https://hub.continue.dev/explore/models)

Vous connaissez les limites officielles ou modèles ? Partagez un lien dans un issue ou PR pour mettre à jour. Voir CONTRIBUTING.md pour les directives.

---

## 5. Modèles Locaux


Exécuter des modèles open-weight de pointe en local offre une assistance illimitée sans coûts d’API ni quotas. Outils populaires : **[Cline](https://cline.bot/)** (extension VS Code avec modes Plan/Act et support MCP), **[Aider](https://aider.chat/)** (assistant CLI avec intégration Git), et **[Continue.dev](https://www.continue.dev/)** (extension VS Code open source supportant 200+ modèles). Tous fonctionnent avec **[Ollama](https://ollama.com/)** pour exécuter Devstral (24B, optimisé pour codage agentique), Qwen3-Coder, DeepSeek Coder V2, Codestral, GLM-4.5.

**Note** : Les modèles frontier nécessitent beaucoup de RAM/VRAM. Pour Qwen3‑Coder‑480B, le GGUF Ollama ~150GB et l'inférence pratique peut demander ~150GB de mémoire unifiée (RAM+VRAM), difficile sur laptop ; le quant 30B demande ~18GB. Voir le guide local Unsloth Qwen3‑Coder ([docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) et l'article de Simon Willison sur [GLM‑4.5 AIR sur son laptop pour Space Invaders](https://simonwillison.net/2025/Jul/29/space-invaders/) pour un exemple.

---

## Notes de Comparaison

- **Objectif** : Comparer les outils IA par accès aux modèles pro et limites gratuites.
- **Qu'est-ce qui qualifie un modèle « pro » ?** ≥60% sur SWE-bench Verified. Modèles actuels : Claude Opus 4.5 (80,9%), GPT-5.1-Codex-Max (77,9%), Claude Sonnet 4.5 (77,2%), Gemini 3 Pro (76,2%), GPT-5 (74,9%), Claude Opus 4.1 (74,5%), Claude Sonnet 4 (72,7%), GPT-5 mini (71,0%), Qwen3-Coder-480B (69,6%), Gemini 2.5 Pro (63,2%).
- **Types de limites** : Requêtes, tokens, crédits, chats — comparer directement est difficile. Vérifiez la doc.
- **Usage réel** : Varie fortement selon style de code, complexité et implémentation.

---

## Ressources Liées

- [Coding with AI](https://coding-with-ai.dev/) - Techniques pratiques et ressources pour coder avec des LLMs
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Liste d'APIs LLM gratuites pour construire des intégrations

---

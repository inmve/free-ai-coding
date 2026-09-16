Dernière mise à jour: 15 septembre 2026 • PRs/issues bienvenus

**Langues :** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md)

# Outils de Codage IA : Où les Modèles de Niveau Professionnel Sont Vraiment Gratuits 

Beaucoup d'outils de codage IA prétendent être « gratuits », mais l'accès aux modèles de niveau professionnel s'épuise généralement rapidement, puis vous êtes rétrogradé. Chaque outil utilise différentes limites (crédits, tokens, requêtes), donc la comparaison est difficile. Cette liste les met côte à côte pour montrer ce que vous obtenez réellement gratuitement.

## TL;DR — Niveaux Gratuits pour le Codage IA de Niveau Professionnel
_(les unités de quota diffèrent ; l’ordre sert uniquement de repère et ne classe pas des capacités équivalentes)_

| Outil | Modèles de niveau professionnel | Limite du niveau gratuit | Carte de crédit |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen et autres fournisseurs | Le niveau gratuit Qwen OAuth a été arrêté le 15 avril 2026 ; utilisez Alibaba ModelStudio ou un autre fournisseur | Non |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Modèle Rovo Dev selon le forfait | 350 crédits/utilisateur/mois/site avec Jira payant | Non |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | L’accès Enterprise/API payant des organisations reste disponible ; les particuliers passent à Antigravity CLI | L’accès individuel gratuit/Google AI a cessé le 18 juin 2026 ; migrez vers Antigravity CLI | Non |
| [Cursor](https://cursor.com/) | Composer ; Agent limité | Agent limité ; aucune promotion temporaire | Non |
| [Kilo Code](https://kilocode.ai/) | Non publié | Valeurs actuelles non vérifiées | Non vérifié |
| [Warp](https://warp.dev/) | Warp Agent ; BYOK | Free : agent cloud limité ; le BYOK des particuliers et entreprises de ≤10 personnes ne consomme pas de crédits Warp | Non vérifié |
| [Trae](https://trae.ai/) | Non publié | Valeurs actuelles non vérifiées | Non vérifié |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Derniers modèles Claude (AWS) | 50 requêtes agentiques + 1 000 LOC Java/mois | Non |
| [GitHub Copilot](https://github.com/features/copilot/plans) | Haiku 4.5, GPT-5 mini et autres | 2 000 complétions + 50 chats/mois ; agents/CLI limités | Non |
| [Windsurf](https://windsurf.com/) | Non publié | Valeurs actuelles non vérifiées | Non vérifié |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 15 tâches sur 24 h glissantes ; 3 simultanées | Non |
| [AWS Kiro](https://kiro.dev/) | Claude Sonnet 4.5 et open weight | 50 crédits/mois | Non |
| [Qoder](https://qoder.com/) | Non publié | Valeurs actuelles non vérifiées | Non vérifié |

### Modèles de Niveau Professionnel Qualifiés
Valeurs historiques sélectionnées avec des liens vers les sources primaires. Les conditions de test diffèrent et il ne s’agit pas d’un classement exhaustif actuel.

| Modèle | SWE-bench Verified | Fournisseur |
|-------|-------------------|----------|
| [Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) | 80,9% | Anthropic |
| [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) | 77,2% | Anthropic |
| [Qwen3-Coder-480B](https://qwenlm.github.io/blog/qwen3-coder/) | 69,6% | Alibaba |

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
_(les unités de quota diffèrent ; l’ordre est indicatif et ne compare pas des capacités équivalentes)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Le niveau gratuit Qwen OAuth a été arrêté le 15 avril 2026 ; utilisez Alibaba ModelStudio ou un autre fournisseur**
- Le niveau gratuit Qwen OAuth a été arrêté le 15 avril 2026 ; utilisez Alibaba ModelStudio ou un autre fournisseur
- Prend en charge Qwen et d’autres fournisseurs via l’authentification
- Agent de codage open source pour terminal, IDE, bureau et web

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Authentication](https://github.com/QwenLM/qwen-code/blob/main/docs/users/configuration/auth.md)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- Gratuit avec les forfaits Jira payants : 350 crédits Rovo Dev/utilisateur/mois/site
- Le service s’arrête lorsque le quota mensuel est atteint
- La page de facturation actuelle ne fixe pas le modèle du CLI
- Aucune carte n’est requise pour le complément gratuit

**** [Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Limites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini CLI passe à Antigravity CLI pour les particuliers**
- Le 18 juin 2026, Gemini CLI a cessé de servir les particuliers et Google AI Pro/Ultra
- Antigravity CLI est disponible pour tous et constitue le parcours de migration
- L’accès Standard/Enterprise reste inchangé ; les clés API Gemini payantes restent disponibles
- L’ancienne limite individuelle de 1 000/jour et 60/minute est terminée

**** [Transition announcement](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) | [Documentation](https://ai.google.dev/gemini-api/docs/rate-limits)

---

### [Kilo Code](https://kilocode.ai/)

> **Prix et limites actuels non vérifiés**
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- Les anciennes valeurs exactes ne sont pas présentées comme actuelles
- Vérifiez la page officielle liée avant de vous fier à une limite

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentation](https://kilocode.ai/docs/) | [Tarifs](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Warp Agent et BYOK**
- Forfait Free : accès limité aux agents cloud ; l’IA s’arrête à la limite
- Build à partir de 20 $/mois avec 1 500 crédits (20 $ d’usage agent inclus)
- Pour les particuliers et entreprises de 10 personnes ou moins, le BYOK/inférence personnalisée ne consomme pas de crédits Warp
- La consommation dépend du modèle, du contexte et de la tâche

**** [Tarifs](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Free**
- Niveau gratuit permanent : 50 requêtes agentiques/mois et 1 000 LOC Java/mois
- Les limites IDE sont disponibles avec Builder ID ; IAM est limité au compte
- Aucune carte pour le parcours Builder ID gratuit ; Pro nécessite la facturation AWS
- Pro coûte 19 $/utilisateur/mois avec des limites supérieures

**** [Tarifs](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 2 000 complétions et 50 requêtes de chat par mois
- Copilot CLI et agents limités ; la sélection de modèles est restreinte en Free
- La page actuelle cite Haiku 4.5, GPT-5 mini et d’autres modèles
- Aucune carte bancaire requise

**** [Détails des Plans](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Mode Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Prix et limites actuels non vérifiés**
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- Les anciennes valeurs exactes ne sont pas présentées comme actuelles
- Vérifiez la page officielle liée avant de vous fier à une limite

**** [Tarifs](https://trae.ai/pricing) | [Documentation](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Prix et limites actuels non vérifiés**
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- Les anciennes valeurs exactes ne sont pas présentées comme actuelles
- Vérifiez la page officielle liée avant de vous fier à une limite

**** [Tarifs](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Accès Gemini 2.5 Pro**
- Gratuit : 15 tâches sur une fenêtre glissante de 24 heures et 3 simultanées
- 3 tâches concurrentes
- Modèle Gemini 2.5 Pro
- Compte Gmail requis (18+)
- Réinitialisation des tâches sur fenêtre glissante 24h
- Pas de carte de crédit requise
- Niveau Pro ($19.99/mois) : 100 tâches/jour (x5)

**** [Limites d'Usage](https://jules.google/docs/usage-limits/) | [Documentation](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **AWS Kiro Free**
- Niveau gratuit permanent : 50 crédits/mois
- Claude Sonnet 4.5 et modèles open weight avec connexion sociale ou Builder ID, sous limites
- Pro 20 $/mois : 1 000 crédits ; Pro+ 40 $ : 2 000 ; Pro Max 100 $ : 5 000 ; Power 200 $ : 10 000
- Les forfaits payants nécessitent une carte

**** [Tarifs](https://kiro.dev/pricing/) | [Blog d'Introduction](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Prix et limites actuels non vérifiés**
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- Les anciennes valeurs exactes ne sont pas présentées comme actuelles
- Vérifiez la page officielle liée avant de vous fier à une limite

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

> **Prix et limites actuels non vérifiés**
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- Les anciennes valeurs exactes ne sont pas présentées comme actuelles
- Vérifiez la page officielle liée avant de vous fier à une limite

**** [Tarifs](https://www.cerebras.ai/pricing) | [Docs API](https://inference-docs.cerebras.ai/) | [Guides d’Intégration](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Outils avec Niveaux Payants et Modèles de Niveau Professionnel


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- Gratuit avec les forfaits Jira payants : 350 crédits Rovo Dev/utilisateur/mois/site
- Le service s’arrête lorsque le quota mensuel est atteint
- La page de facturation actuelle ne fixe pas le modèle du CLI
- Aucune carte n’est requise pour le complément gratuit
- Standard : 20 $/utilisateur/mois avec 2 000 crédits/utilisateur/mois

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

> **Amazon Q Developer Free**
- Niveau gratuit permanent : 50 requêtes agentiques/mois et 1 000 LOC Java/mois
- Les limites IDE sont disponibles avec Builder ID ; IAM est limité au compte
- Aucune carte pour le parcours Builder ID gratuit ; Pro nécessite la facturation AWS
- Pro coûte 19 $/utilisateur/mois avec des limites supérieures

**** [Tarifs](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Warp Agent et BYOK**
- Forfait Free : accès limité aux agents cloud ; l’IA s’arrête à la limite
- Build à partir de 20 $/mois avec 1 500 crédits (20 $ d’usage agent inclus)
- Pour les particuliers et entreprises de 10 personnes ou moins, le BYOK/inférence personnalisée ne consomme pas de crédits Warp
- La consommation dépend du modèle, du contexte et de la tâche

**** [Tarifs](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 2 000 complétions et 50 requêtes de chat par mois
- Copilot CLI et agents limités ; la sélection de modèles est restreinte en Free
- La page actuelle cite Haiku 4.5, GPT-5 mini et d’autres modèles
- Aucune carte bancaire requise

**** [Détails des Plans](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Preview GPT-5.1-Codex-Max](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Prix et limites actuels non vérifiés**
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- Les anciennes valeurs exactes ne sont pas présentées comme actuelles
- Vérifiez la page officielle liée avant de vous fier à une limite

**** [Tarifs](https://trae.ai/pricing) | [Documentation](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Prix et limites actuels non vérifiés**
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- Les anciennes valeurs exactes ne sont pas présentées comme actuelles
- Vérifiez la page officielle liée avant de vous fier à une limite

**** [Tarifs](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Lovable est désormais basé sur des crédits**
- Free inclut 5 crédits de build quotidiens (jusqu’à 30/mois), 20 crédits Cloud mensuels et 4 crédits IA mensuels
- Les crédits et subventions ont des expirations différentes ; consultez la page officielle

**** [Pricing](https://lovable.dev/pricing)

---

### [Bolt.new](https://bolt.new/)

> **Free inclut une limite de 300 000 tokens/jour et 1 million/mois**
- Pro commence à 25 $/mois avec 10 millions de tokens/mois ; Teams à 30 $/membre/mois
- Les tokens payants sont reportés d’un mois si l’abonnement reste actif

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Cursor Free et forfaits payants**
- Hobby est gratuit, sans carte, avec Agent limité et accès à Composer
- Pro 20 $/mois ; Pro+ 60 $ ; Ultra 200 $ ; Teams Standard 40 $/utilisateur/mois
- La promotion GPT-5.1-Codex-Max jusqu’au 11 décembre 2025 est terminée et supprimée
- L’usage et les modèles dépendent du forfait

**** [Tarifs](https://cursor.com/en/pricing) | [Annonce GPT-5.1-Codex-Max](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Forfaits Codex et facturation API**
- Codex est inclus dans Free (0 $), Go (8 $/mois), Plus (20 $/mois), Pro (à partir de 100 $/mois), Business (20 $/utilisateur en annuel ou 25 $ mensuel), Edu et Enterprise
- Les clés API sont facturées par modèle ; les usages local et cloud partagent les allocations du forfait
- Les limites varient selon la complexité ; consultez la page officielle

**** [Pricing](https://developers.openai.com/codex/pricing/) | [GitHub](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

> **Prix et limites actuels non vérifiés**
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- Les anciennes valeurs exactes ne sont pas présentées comme actuelles
- Vérifiez la page officielle liée avant de vous fier à une limite

**** [Tarifs](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Forfaits Tabnine payants actuels**
- Code Assistant : 39 $/utilisateur/mois en annuel ; Agentic Platform : 59 $/utilisateur/mois en annuel
- Aucun forfait gratuit n’est annoncé sur la page actuelle
- Les LLM propres on-prem/cloud sont illimités ; les LLM Tabnine coûtent le prix fournisseur plus 5 % de frais

**** [Pricing](https://www.tabnine.com/pricing/)

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
- Jules Pro via Google AI Pro : 100 tâches sur 24 heures glissantes et 15 simultanées
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

> **Free inclut une limite de 300 000 tokens/jour et 1 million/mois**
- Pro commence à 25 $/mois avec 10 millions de tokens/mois ; Teams à 30 $/membre/mois
- Les tokens payants sont reportés d’un mois si l’abonnement reste actif

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Lovable est désormais basé sur des crédits**
- Free inclut 5 crédits de build quotidiens (jusqu’à 30/mois), 20 crédits Cloud mensuels et 4 crédits IA mensuels
- Les crédits et subventions ont des expirations différentes ; consultez la page officielle

**** [Pricing](https://lovable.dev/pricing)

---

### [v0.dev](https://v0.dev/)

> **Free inclut 5 $ de crédits mensuels et 7 messages/jour**
- Plus coûte 30 $/utilisateur/mois avec 30 $ de crédits ; Business 100 $/utilisateur/mois
- L’usage est mesuré en tokens d’entrée/sortie convertis en crédits

**** [Pricing](https://api2.v0.dev/pricing)

---

### [Codeium](https://codeium.com/)

> **Prix et limites actuels non vérifiés**
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- Les anciennes valeurs exactes ne sont pas présentées comme actuelles
- Vérifiez la page officielle liée avant de vous fier à une limite

**** [Tarifs](https://codeium.com/pricing) | [Documentation](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Forfaits Tabnine payants actuels**
- Code Assistant : 39 $/utilisateur/mois en annuel ; Agentic Platform : 59 $/utilisateur/mois en annuel
- Aucun forfait gratuit n’est annoncé sur la page actuelle
- Les LLM propres on-prem/cloud sont illimités ; les LLM Tabnine coûtent le prix fournisseur plus 5 % de frais

**** [Pricing](https://www.tabnine.com/pricing/)

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
- **Types de limites** : Requêtes, tokens, crédits, chats — comparer directement est difficile. Vérifiez la doc.
- **Usage réel** : Varie fortement selon style de code, complexité et implémentation.
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- La page officielle accessible ne publie pas de tableau stable des quotas ou prix
- **Comparabilité :** les résultats SWE-bench utilisent des conditions différentes ; les exécutions parallèles, interactives et uniques ne sont pas directement comparables. Crédits, tokens, requêtes, chats et tâches ne doivent pas être convertis en classement de générosité.

---

## Ressources Liées

- [Coding with AI](https://coding-with-ai.dev/) - Techniques pratiques et ressources pour coder avec des LLMs
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Liste d'APIs LLM gratuites pour construire des intégrations

---

> 🤖 **Avis de Traduction Automatique**
> Cette page a été traduite automatiquement de l'anglais en utilisant Claude AI.
> Pour plus de précision, consultez la [version anglaise originale](README.md).

Dernière mise à jour : 19 août 2025 • PRs/issues bienvenus • ⭐ Mettre en favori pour revenir plus tard

# Outils de Codage IA : Où les Modèles de Niveau Professionnel Sont Vraiment Gratuits

Beaucoup d'outils de codage IA prétendent être "gratuits", mais l'accès aux modèles de niveau professionnel s'épuise généralement rapidement, puis vous êtes rétrogradé. Chaque outil utilise différentes limites (crédits, tokens, requêtes), donc la comparaison équitable est difficile. Cette liste les met côte à côte et montre **combien d'heures de codage sur des LLMs de niveau professionnel vous obtenez réellement gratuitement**.

## TL;DR — Niveaux Gratuits Classés pour le Codage de Niveau Professionnel
_(ordonnés du plus généreux au moins généreux ; les estimations de temps utilisent la [Méthodologie](#méthodologie--hypothèses) ci-dessous)_

| Outil | Modèles de niveau professionnel | Limite du niveau gratuit | Temps de codage gratuit approximatif | Carte de crédit |
|-------|----------------------------------|---------------------------|---------------------------------------|------------------|
| [Qwen Code](#qwen-code) | Qwen3-Coder-480B | 2,000 requêtes/jour | ~33h/jour (~1000h/mois) | Non |
| [Rovo Dev CLI](#rovo-dev-cli) | Claude Sonnet 4 | 5M tokens/jour (bêta) | ~20h/jour (~600h/mois) | Non |
| [Gemini CLI](#gemini-cli) | Gemini 2.5 Pro | 100 requêtes/jour | ~1.7h/jour (~50h/mois) | Non |
| [Kilo Code](#kilo-code) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | $20 crédits d'inscription (unique) | ~3h total | Oui |
| [Warp](#warp) | Claude, OpenAI, Gemini | 150 requêtes/mois | ~2.5h/mois | Non |
| [Amazon Q Developer](#amazon-q-developer) | Claude Sonnet 4 | 50 chats d'agent/mois | ~0.8h/mois | Oui |
| [GitHub Copilot](#github-copilot) | GPT‑4o, Claude 3.5 Sonnet, Gemini 2.0 Flash | 50 chats + 2,000 complétions/mois | ~0.8h/mois (agent) | Non |
| [Windsurf](#windsurf) | OpenAI, Anthropic, Google, xAI | 25 crédits/mois | ~0.4h/mois | Oui |
| [AWS Kiro](#aws-kiro) | Claude Sonnet 4 / 3.7 | Limites quotidiennes (non divulguées) | Inconnu | Non (aperçu) |

## À Quel Point Ces Estimations Sont-Elles Précises ?

Ces estimations de temps sont basées sur des calculs, mais **l'utilisation réelle varie selon le style de codage et la complexité des tâches**. Aidez à rendre cette ressource plus précise en [partageant vos heures de codage réelles →](https://free-ai-usage.vercel.app/)

### Modèles de Niveau Professionnel Qualifiés
Seuls les modèles atteignant >60% sur SWE-bench Verified se qualifient comme de niveau professionnel pour les tâches de codage du monde réel. Voici la liste actuelle

| Modèle | SWE-bench Verified | Fournisseur |
|--------|-------------------|-------------|
| GPT-5 | 74.9% | OpenAI |
| Claude Opus 4.1 | 74.5% | Anthropic |
| Claude Sonnet 4 | 72.7% (80.2% avec parallèle) | Anthropic |
| GPT-5 mini | 71.0% | OpenAI |
| Qwen3-Coder-480B | 69.6% (interactif) / 67.0% (unique) | Alibaba |
| Gemini 2.5 Pro | 63.2% | Google |


## Sommaire

- [1. Outils de Codage IA avec Accès Gratuit aux Modèles de Niveau Professionnel](#1-outils-de-codage-ia-avec-accès-gratuit-aux-modèles-de-niveau-professionnel)
- [2. Fournisseurs d'API pour Outils de Codage IA](#2-fournisseurs-dapi-pour-outils-de-codage-ia)
- [3. Outils avec Niveaux Payants avec Modèles de Niveau Professionnel](#3-outils-avec-niveaux-payants-avec-modèles-de-niveau-professionnel)
- [4. Outils avec Accès Gratuit aux Modèles de Base](#4-outils-avec-accès-gratuit-aux-modèles-de-base)
- [5. Modèles Locaux](#5-modèles-locaux)


## 1. Outils de Codage IA avec Accès Gratuit aux Modèles de Niveau Professionnel
_(ordonnés du plus généreux au moins généreux)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **~33h/jour (~1000h/mois) de codage Qwen3-Coder-480B**
- Niveau gratuit de 2,000 requêtes/jour via Qwen OAuth
- Limite de taux de 60 requêtes/minute
- Outil de workflow IA en ligne de commande (adapté de Gemini CLI)
- Authentification navigateur en un clic
- Aucune carte de crédit requise

**Liens :** [GitHub](https://github.com/QwenLM/qwen-code) | [Documentation](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **~20h/jour (~600h/mois) de codage Claude Sonnet pendant la bêta**
- Accès GPT-5 avec quota quotidien généreux pendant l'aperçu
- Niveau gratuit de 5M tokens/jour (20M le premier jour seulement)
- Modèle basé sur Claude (fournisseur Anthropic)
- Aucune carte de crédit requise pendant la bêta
- Les limites de tokens se réinitialisent à minuit UTC
- Note : Mise à niveau vers Jira Standard/Premium/Enterprise pour 20M tokens/jour

**Liens :** [Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Limites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **~1.7h/jour (~50h/mois) de codage Gemini 2.5 Pro**
- Limite de 100 requêtes/jour
- Solution de secours : ~4.2h/jour avec Gemini 2.5 Flash (250 requêtes/jour)
- Aucune carte de crédit requise
- Modèles Google uniquement
- Bascule vers les tarifs payants après quota gratuit

**Liens :** [Limites de Taux](https://ai.google.dev/gemini-api/docs/rate-limits) | [Tarification](https://ai.google.dev/gemini-api/docs/pricing)

---

### [Kilo Code](https://kilocode.ai/)

> **~3h total de codage Claude 4 Sonnet/Opus, Gemini 2.5 Pro, GPT-4.1**
- $20 crédits gratuits à l'inscription
- Extension VS Code open source
- Paiement à l'utilisation sans majoration sur la tarification des modèles
- Carte de crédit requise pour réclamer les crédits bonus
- Supporte l'apport de vos propres clés API

**Liens :** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentation](https://kilocode.ai/docs/)

---

### [Warp](https://warp.dev/)

> **~2.5h/mois à travers Claude Sonnet 4, OpenAI GPT-5, Gemini 2.5 Pro**
- Limite de 150 requêtes/mois
- Multiples fournisseurs (Claude, OpenAI, Gemini)
- Aucune carte de crédit requise pour l'inscription de base
- Dépassements paiement à l'utilisation disponibles

**Liens :** [Tarification](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **~0.8h/mois de codage Claude Sonnet 4**
- Limite de 50 chats agentiques/mois (conversations multi-tours)
- Derniers modèles Claude (hébergés AWS)
- Carte de crédit requise
- Doit passer à Pro pour un accès continu
- Niveau gratuit perpétuel

**Liens :** [Tarification](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **~0.8h/mois d'interactions d'agent (GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Flash)**
- Limite de 50 chats + 2,000 complétions/mois
- Mode Agent avec codage autonome multi-étapes
- Multiples fournisseurs (GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Flash)
- Aucune carte de crédit requise
- Limité aux fonctionnalités de base après quota

**Liens :** [Détails des Plans](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Mode Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Windsurf](https://windsurf.com/)

> **~0.4h/mois à travers les modèles OpenAI, Anthropic, Google, xAI**
- Limite de 25 crédits de prompt/mois
- Multiples fournisseurs (OpenAI, Claude, Gemini, xAI)
- Carte de crédit requise
- Peut acheter des crédits supplémentaires pour continuer

**Liens :** [Tarification](https://windsurf.com/pricing)

---

### [AWS Kiro](https://kiro.dev/)

> **Durée inconnue de codage Claude Sonnet 4 / 3.7**
- Limites quotidiennes (non divulguées)
- Modèles Claude uniquement (hébergés AWS)
- Aucune carte de crédit requise (période d'aperçu)
- Épuisement du quota inconnu (période d'aperçu)

**Liens :** [Blog d'Introduction](https://kiro.dev/blog/introducing-kiro/)

---

> Les limites changent rapidement. Si vous voyez une erreur, un quota/modèle plus récent, ou voulez ajouter un nouvel outil, ouvrez un issue ou PR avec une source. Les contributions de nouveaux outils sont bienvenues !

---

## 2. Fournisseurs d'API pour Outils de Codage IA
_(ordonnés du plus généreux au moins généreux)_

Ces services fournissent un accès API aux modèles optimisés pour le codage qui s'intègrent avec les outils populaires de codage IA comme Cursor, Continue.dev, Cline et autres. Ils ne fournissent pas d'outils de codage autonomes mais offrent le backend IA pour les outils existants.

### [OpenRouter](https://openrouter.ai/)

> **~33h/jour (~1000h/mois) de codage Qwen3-Coder**
- Niveau gratuit de 2,000 requêtes/jour pour Qwen3-Coder-480B
- Modèles gratuits supplémentaires : Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- API compatible OpenAI pour tous les IDEs majeurs
- Aucune carte de crédit requise pour les modèles gratuits
- Limitation du taux pendant le trafic élevé pour le niveau gratuit
- Fonctionne avec Continue.dev, Cline, Cursor, etc.

**Liens :** [Modèles Gratuits](https://openrouter.ai/models/?q=free) | [API Qwen3-Coder](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **~1.7h/jour (~50h/mois) de codage Qwen3-Coder/Llama 3.1**
- Niveau gratuit de 100 requêtes/jour
- Modèles : Qwen3-Coder-480B (égale les performances de Claude Sonnet 4), Llama 3.1 70B
- API compatible OpenAI (fonctionne avec Cursor, Continue.dev, Cline, RooCode, etc.)
- Inférence ultra-rapide : 2,000 tokens/seconde (40x plus rapide que les fournisseurs typiques)
- Aucune carte de crédit requise
- **Niveaux payants :** Code Pro ($50/mois), Code Max ($200/mois) - aucune limite hebdomadaire

**Liens :** [Tarification](https://www.cerebras.ai/pricing) | [Documentation API](https://inference-docs.cerebras.ai/) | [Guides d'Intégration](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Outils avec Niveaux Payants avec Modèles de Niveau Professionnel

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

**Jira Standard ($7.53/utilisateur/mois) :** 20M tokens/jour (~80h/jour de codage Claude Sonnet)
**Jira Premium ($15.25/utilisateur/mois) :** 20M tokens/jour
**Jira Enterprise (personnalisé) :** 20M tokens/jour
- Augmentation de 4x par rapport au niveau gratuit (5M → 20M tokens/jour)
- Même modèle basé sur Claude que le niveau gratuit
- Les limites de tokens se réinitialisent à minuit UTC

**Liens :** [Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Limites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Tarification Jira](https://www.atlassian.com/software/jira/pricing)

---


### [Claude Code](https://www.anthropic.com/claude-code)

**Pro ($20/mois) :** Accès Sonnet 4
**Max ($100/mois) :** Accès Opus 4 + Sonnet 4
**Max ($200/mois) :** Limites plus élevées Opus 4 + Sonnet 4
- Les limites d'utilisation se réinitialisent chaque semaine
- Limites de fenêtre glissante de 5 heures appliquées

**Liens :** [Tarification](https://www.anthropic.com/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

**Pro ($19/mois) :** Limites augmentées pour les requêtes agentiques
- L'utilisation peut être ajustée en fonction des facteurs régionaux et des modèles d'utilisation

**Liens :** [Tarification](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

**Pro ($15/mois) :** 2,500 requêtes/mois
**Turbo ($40/mois) :** 10,000 requêtes/mois  
**Lightspeed ($200/mois) :** 50,000 requêtes/mois
- Paiement à l'utilisation disponible pour les dépassements

**Liens :** [Tarification](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

**Pro ($10/mois) :** 300 chats + complétions illimitées/mois
**Pro+ ($39/mois) :** 1,500 chats + complétions illimitées/mois
**Business ($19/utilisateur/mois) :** 300 chats + complétions illimitées/utilisateur/mois
**Enterprise ($39/utilisateur/mois) :** 1,000 chats + complétions illimitées/utilisateur/mois
- Facturation de dépassement disponible à $0.04/requête

**Liens :** [Détails des Plans](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot)

---

### [Windsurf](https://windsurf.com/)

**Pro ($15/mois) :** 500 crédits de prompt/mois
**Teams ($30/utilisateur/mois) :** 500 crédits de prompt/utilisateur/mois
**Enterprise ($60+/utilisateur/mois) :** 1,000 crédits de prompt/utilisateur/mois

**Liens :** [Tarification](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

**Pro ($25/mois) :** 100 messages/mois
**Teams ($30/mois) :** Limites plus élevées (non divulguées)

**Liens :** [Limites de Messages](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

**$20/mois :** 10M tokens/mois
**$200/mois :** 120M tokens/mois

**Liens :** [Documentation des Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

**Hobby (Gratuit) :** Requêtes d'agent limitées avec modèles de base uniquement
**Pro ($20/mois) :** Limites étendues sur Agent, accès à GPT-5, Claude Sonnet 4, Gemini 2.5 Pro
**Ultra ($200/mois) :** 20x d'utilisation sur tous les modèles OpenAI, Claude, Gemini
**Teams ($40/utilisateur/mois) :** Fonctionnalités Pro + gestion d'équipe
- Essai Pro de deux semaines disponible
- Carte de crédit requise pour le niveau gratuit

**Liens :** [Tarification](https://cursor.com/en/pricing)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

**Gratuit avec ChatGPT Plus ($20/mois) :** Accès GPT-5 pour les tâches de codage
**Paiement à l'utilisation :** Utiliser avec une clé API OpenAI
**Mode OSS gratuit :** Accès aux modèles open-source uniquement (via le flag --oss)
- Agent de codage léger fonctionnant localement
- UI de terminal interactif avec mode sandbox
- macOS 12+, Ubuntu 20.04+, Windows 11 via WSL2
- Projet expérimental en développement actif

**Liens :** [Dépôt GitHub](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

**Pro ($10/mois) :** Utilisation illimitée avec conscience contextuelle avancée
- Accès Claude 3.5 Sonnet, GPT-4o
- Fenêtre contextuelle améliorée et personnalisation
**Teams ($12/utilisateur/mois) :** Fonctionnalités Pro + gestion d'équipe
**Enterprise (Personnalisé) :** Déploiement sur site, modèles personnalisés

**Liens :** [Tarification](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

**Pro ($12/mois) :** Complétions IA et chat améliorés
**Enterprise ($39/utilisateur/mois) :** Multiples LLMs, déploiement privé
- Modèles : Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, modèles propriétaires
- Support de 600+ langages de programmation
- Options de déploiement sur site et en environnement isolé
- Apportez vos propres modèles affinés

**Liens :** [Tarification](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**AI Pro ($15/mois) :** Quota cloud augmenté + modèles locaux illimités
**AI Ultimate ($25/mois) :** Quota cloud maximum + fonctionnalités avancées
- Niveau gratuit : Complétion de code illimitée + modèles locaux + quota cloud limité
- Essai Pro de 30 jours inclus
- All Products Pack inclut AI Pro
- Mode hors ligne avec modèles locaux via Ollama/LM Studio

**Liens :** [Tarification AI](https://www.jetbrains.com/ai-ides/buy/)

---

### [SuperMaven](https://supermaven.com/)

**Pro ($10/mois) :** Fenêtre contextuelle 1M tokens + crédits de chat
- Alternative : $99/an
- Interface de chat avec GPT-4o, Claude 3.5 Sonnet, GPT-4
**Team ($10/utilisateur/mois) :** Fonctionnalités Pro + gestion d'équipe
- Note : Fusionné avec Cursor IDE en novembre 2024

**Liens :** [Tarification](https://supermaven.com/pricing)

---

> Connaissez de meilleurs prix ou limites ? Partagez un lien dans un issue ou PR pour aider à maintenir ceci à jour.

---

## 4. Outils avec Accès Gratuit aux Modèles de Base
__(modèles non spécifiés/de base)__

### [Bolt.new](https://bolt.new/)

**~100h/mois avec modèles non spécifiés**
- Limite de 1M tokens/mois
- Modèle spécifique non spécifié publiquement
- Carte de crédit requise

**Liens :** [Documentation des Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

**~0.5h/mois avec modèles non spécifiés**
- 5 crédits/jour, plafond de 30/mois
- Modèles non énumérés publiquement
- Carte de crédit requise

**Liens :** [Limites de Messages](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

**Durée variable avec modèles propriétaires (non frontière)**
- L'accès GPT-5 nécessite un abonnement v0 Premium
- Limite de $5 en crédits/mois
- Utilise des modèles propriétaires avec routage varié
- Carte de crédit requise

**Liens :** [Blog de Tarification Mis à Jour](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

**Utilisation gratuite illimitée d'assistance de codage IA de base**
- Plan individuel : Gratuit à vie avec complétions de code illimitées, chat IA, commandes
- Support de 70+ langages de programmation
- Intégrations IDE : VS Code, JetBrains, Vim/Neovim, Jupyter
- Aucune carte de crédit requise
- Conscience contextuelle limitée (élargie dans les niveaux payants)
- Modèle de base uniquement (Llama 3.1 70B), les modèles de niveau professionnel nécessitent un abonnement

**Liens :** [Tarification](https://codeium.com/pricing) | [Documentation](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

**Niveau gratuit avec fonctionnalités limitées**
- Complétions de code IA de base et chat (limité)
- Traitement local disponible
- Contexte fortement limité dans le niveau gratuit
- Performances réduites pour économiser les ressources
- Support de 600+ langages de programmation

**Liens :** [Tarification](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**Niveau gratuit AI inclus avec les IDEs**
- Complétion de code illimitée et support de modèle local
- Quota limité pour les fonctionnalités basées sur le cloud
- Essai AI Pro de 30 jours
- Chat, génération de code, messages de commit avec modèles locaux

**Liens :** [Fonctionnalités AI](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

**Niveau gratuit avec fonctionnalités de base**
- Suggestions de code de base
- Limite de rétention des données de 7 jours
- Carte de crédit requise pour l'inscription
- Fenêtre contextuelle de 1M tokens (impressionnant pour le niveau gratuit)

**Liens :** [Tarification](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

**Extension open-source gratuite avec support de modèle flexible**
- Extension gratuite pour VS Code et JetBrains
- Support complet pour les modèles locaux via Ollama, LM Studio
- Niveau Solo : options de visibilité privée/équipe/publique
- Support de 200+ modèles (nécessite vos propres clés API pour les modèles cloud)
- Hub communautaire pour assistants IA personnalisés
- Aucun verrouillage de fournisseur ou limite d'utilisation pour les modèles locaux

**Liens :** [GitHub](https://github.com/continuedev/continue) | [Hub de Modèles](https://hub.continue.dev/explore/models)

---

> Connaissez les limites officielles ou modèles ? Partagez un lien dans un issue ou PR pour mettre à jour les informations.

---

## 5. Modèles Locaux

Exécuter des modèles frontière à poids ouvert localement fournit une assistance de codage illimitée sans coûts d'API ou limites d'utilisation. Les outils populaires pour le déploiement local incluent **[Cline](https://cline.bot/)** (extension VS Code avec modes Plan/Act et support MCP), **[Aider](https://aider.chat/)** (assistant en ligne de commande avec intégration Git intégrée), et **[Continue.dev](https://www.continue.dev/)** (extension VS Code open-source supportant 200+ modèles). Tous fonctionnent parfaitement avec **[Ollama](https://ollama.com/)** pour exécuter des modèles frontière comme Devstral (24B paramètres, optimisé pour le codage agentique), Qwen3-Coder, DeepSeek Coder V2, Codestral, et GLM-4.5.

**Note** : Les modèles frontière nécessitent une RAM/VRAM substantielle. En particulier, pour Qwen3‑Coder‑480B, le GGUF compatible Ollama fait ~150GB, et l'inférence locale pratique peut nécessiter ~150GB de mémoire unifiée (RAM+VRAM), ce qui le rend difficile sur les ordinateurs portables typiques ; la quantification 30B nécessite généralement ~18GB. Voir le guide local Unsloth Qwen3‑Coder pour les détails ([docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) et l'article de Simon Willison sur [l'exécution de GLM‑4.5 AIR sur son ordinateur portable pour construire Space Invaders](https://simonwillison.net/2025/Jul/29/space-invaders/) comme exemple pratique.

---

## Méthodologie / Hypothèses

- **Objectif** : Comparer les systèmes de codage agentique par leur accès aux modèles frontière.
- **Qu'est-ce qui qualifie un modèle comme "niveau professionnel" ?** Pour cette comparaison, les modèles doivent atteindre ≥60% sur SWE-bench Verified, démontrant une capacité d'ingénierie logicielle du monde réel. Modèles actuellement qualifiés : GPT-5 (74.9%), Claude Opus 4.1 (74.5%), Claude Sonnet 4 (72.7%), GPT-5 mini (71.0%), Qwen3-Coder-480B (69.6%), et Gemini 2.5 Pro (63.2%).
- **[1] Requêtes en heures** : 60 requêtes ≈ 1 heure de codage assisté par IA (basé sur une simulation de tâche du monde réel).
- **[2] Tokens en heures** : ~250k tokens ≈ 1 heure de codage (basé sur des données d'utilisation d'agent IA du monde réel).
- **[3] Chats/Crédits en heures** : Les chats agentiques multi-tours et crédits de prompt sont supposés équivalents aux requêtes uniques à des fins d'estimation.
- Si vous repérez une erreur ou un lien source manquant, veuillez ouvrir un issue ou une pull request.

---

## Ressources Connexes

- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Liste complète d'APIs LLM gratuites pour construire des intégrations personnalisées

---

## Avertissement
Aucune affiliation avec aucun fournisseur. Toutes les marques appartiennent à leurs propriétaires. Les informations sont à des fins de recherche ; précision non garantie ; les limites/prix changent fréquemment.

---
*Cette traduction a été créée avec Claude AI. Pour les informations les plus récentes, veuillez consulter la [version originale anglaise](README.md).*
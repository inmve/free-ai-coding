Última actualización: 5 de diciembre de 2025 • PRs/issues bienvenidos

**Idiomas:** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md)

# Herramientas de Codificación con IA: Donde los Modelos de Grado Profesional Son Realmente Gratuitos 

Muchas herramientas de codificación con IA afirman ser "gratuitas", pero el acceso a modelos de grado profesional generalmente se agota rápido, luego te degradan. Cada herramienta usa diferentes límites (créditos, tokens, solicitudes), haciendo que la comparación sea difícil. Esta lista los pone lado a lado para mostrar lo que realmente obtienes gratis.

## TL;DR — Niveles Gratuitos para Codificación de IA de Grado Profesional
(herramientas con límites más altos listadas primero)

| Herramienta | Modelos de grado profesional | Límite de nivel gratuito | Tarjeta de crédito |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen3-Coder-480B | 2,000 solicitudes/día | No |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Claude Sonnet 4 | 5M tokens/día (beta) | No |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Gemini 3 Pro, Gemini 2.5 Pro | Gemini 3 Pro (lista de espera/pago), 100 sol/día Gemini 2.5 Pro | No |
| [Cursor](https://cursor.com/) | GPT-5.1-Codex-Max | Gratis hasta 11 de dic, 2025 (77.9% SWE-bench) | No |
| [Kilo Code](https://kilocode.ai/) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | Hasta $25 créditos de registro (único) | Sí |
| [Warp](https://warp.dev/) | GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro | 150 créditos/mes (primeros 2 meses), luego 75/mes | No |
| [Trae](https://trae.ai/) | Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro | 10 rápidas + 50 lentas solicitudes/mes | No |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Claude Sonnet 4 | 50 solicitudes agénticas/mes | Sí |
| [GitHub Copilot](https://github.com/features/copilot/plans) | GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1 | 50 solicitudes de chat + 2,000 completados/mes | No |
| [Windsurf](https://windsurf.com/) | OpenAI, Anthropic, Google, xAI | 25 créditos/mes | Sí |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 15 tareas/día | No |
| [AWS Kiro](https://kiro.dev/) | Claude 4 Sonnet, Claude 3.7 Sonnet | 50 créditos/mes | No |
| [Qoder](https://qoder.com/) | Qwen3-Coder-480B, Claude, GPT, Gemini | Nivel gratuito + prueba Pro de 2 semanas (1,000 créditos) | No |

### Modelos de Grado Profesional Calificados
Solo los modelos que logran >60% en SWE-bench Verified califican como grado profesional para tareas de codificación del mundo real. A continuación está la lista actual

| Modelo | SWE-bench Verified | Proveedor |
|-------|-------------------|----------|
| Claude Opus 4.5 | 80.9% | Anthropic |
| GPT-5.1-Codex-Max | 77.9% | OpenAI |
| Claude Sonnet 4.5 | 77.2% (82.0% con paralelo) | Anthropic |
| Gemini 3 Pro | 76.2% | Google |
| GPT-5 | 74.9% | OpenAI |
| Claude Opus 4.1 | 74.5% | Anthropic |
| Claude Sonnet 4 | 72.7% (80.2% con paralelo) | Anthropic |
| GPT-5 mini | 71.0% | OpenAI |
| Qwen3-Coder-480B | 69.6% (interactivo) / 67.0% (único) | Alibaba |
| Gemini 2.5 Pro | 63.2% | Google |

### Contribuir

Si ves un error, enlace de fuente faltante, o tienes información actualizada de cuota/modelo, por favor abre un issue o pull request con una fuente. ¡Las contribuciones de nuevas herramientas son bienvenidas! Consulta CONTRIBUTING.md para pautas detalladas.

### Descargo de Responsabilidad

Sin afiliación con ningún proveedor. Todas las marcas registradas pertenecen a sus propietarios. La información es para investigación; no se garantiza la precisión; los límites/precios cambian con frecuencia.

## Contenidos

- [1. Herramientas de Codificación con IA con Acceso Gratuito a Modelos de Grado Profesional](#1-herramientas-de-codificacion-con-ia-con-acceso-gratuito-a-modelos-de-grado-profesional)
- [2. Proveedores de API para Herramientas de Codificación con IA](#2-proveedores-de-api-para-herramientas-de-codificacion-con-ia)
- [3. Herramientas con Niveles Pagos con Modelos de Grado Profesional](#3-herramientas-con-niveles-pagos-con-modelos-de-grado-profesional)
- [4. Herramientas con Acceso Gratuito a Modelos Básicos](#4-herramientas-con-acceso-gratuito-a-modelos-basicos)
- [5. Modelos Locales](#5-modelos-locales)
- [Notas de Comparación](#notas-de-comparacion)
- [Recursos Relacionados](#recursos-relacionados)

## 1. Herramientas de Codificación con IA con Acceso Gratuito a Modelos de Grado Profesional
_(ordenadas de más generosas a menos generosas)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **Acceso a Qwen3-Coder-480B**
- Nivel gratuito de 2,000 solicitudes/día vía Qwen OAuth
- Límite de velocidad de 60 solicitudes/minuto
- Herramienta de flujo de trabajo de IA de línea de comandos (adaptada de Gemini CLI)
- Autenticación del navegador con un clic
- No se requiere tarjeta de crédito

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Documentación](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Acceso a Claude Sonnet 4 durante beta**
- 5M tokens/día nivel gratuito (20M solo el primer día)
- Modelo Claude Sonnet 4 (confirmado mediante pruebas)
- No se requiere tarjeta de crédito durante beta
- Los límites de tokens se reinician a medianoche UTC
- Nota: Actualiza a Jira Standard/Premium/Enterprise para 20M tokens/día

**** [Documentación](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Límites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Acceso a Gemini 3 Pro y Gemini 2.5 Pro**
- Gemini 3 Pro disponible (4 dic 2025) para suscriptores Google AI Ultra y usuarios API pagos
- Gemini 3 Pro: 76.2% SWE-bench Verified — el mejor modelo de codificación de Google
- Límite de 100 solicitudes/día para Gemini 2.5 Pro (nivel gratuito de respaldo)
- Límite de 250 solicitudes/día para Gemini 2.5 Flash
- No se requiere tarjeta de crédito para el nivel gratuito
- Lista de espera para Gemini 3 Pro para Google AI Pro, Gemini Code Assist standard y usuarios del nivel gratuito
- Habilita vía `/settings` → Preview features → true

**** [Límites de Velocidad](https://ai.google.dev/gemini-api/docs/rate-limits) | [Precios](https://ai.google.dev/gemini-api/docs/pricing) | [Anuncio de Gemini 3 Pro](https://developers.googleblog.com/en/5-things-to-try-with-gemini-3-pro-in-gemini-cli/)

---

### [Kilo Code](https://kilocode.ai/)

> **Acceso a Claude Opus/Sonnet, Gemini 2.5 Pro, GPT-4.1**
- Hasta $25 créditos de registro (bonificación única)
- Extensión de VS Code de código abierto
- Pago por uso sin margen en precios de modelos
- Se requiere tarjeta de crédito para reclamar créditos de bonificación
- Soporta traer tus propias claves API

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentación](https://kilocode.ai/docs/) | [Precios](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Acceso a GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro**
- 150 créditos de IA/mes (primeros 2 meses), luego 75 créditos/mes
- Múltiples proveedores (OpenAI GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro)
- No se requiere tarjeta de crédito para registro básico
- Nueva estructura de precios anunciada 30 oct 2025: plan Build único ($20/mes) con 1,500 créditos

**** [Precios](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Acceso a Claude Sonnet 4**
- Límite de 50 solicitudes agénticas/mes (conversaciones multi-turno)
- Últimos modelos Claude (alojados en AWS)
- Se requiere tarjeta de crédito
- Debe actualizarse a Pro para acceso continuo
- Nivel gratuito perpetuo

**** [Precios](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Modo Agente con GPT‑4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1**
- Límite de 50 mensajes de chat + 2,000 completados/mes
- Modo Agente con codificación autónoma multi-paso
- Múltiples proveedores (GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)
- No se requiere tarjeta de crédito
- Limitado a características básicas después de la cuota

**** [Detalles de Planes](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Modo Agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Acceso a Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro**
- 10 solicitudes rápidas + 50 solicitudes lentas/mes para modelos premium
- 1,000 solicitudes lentas/mes para modelos avanzados
- 5,000 autocompletados/mes
- IDE basado en VS Code con integración de IA
- Múltiples modelos premium incluyendo Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1
- No se requiere tarjeta de crédito para el nivel gratuito
- Plan Pro: $10/mes (600 rápidas + solicitudes lentas ilimitadas)

**** [Precios](https://trae.ai/pricing) | [Documentación](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Acceso a modelos OpenAI, Anthropic, Google, xAI**
- Límite de 25 créditos de prompt/mes
- Múltiples proveedores (OpenAI, Claude, Gemini, xAI)
- Se requiere tarjeta de crédito
- Se pueden comprar créditos adicionales para continuar

**** [Precios](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Acceso a Gemini 2.5 Pro**
- 15 tareas/día en el nivel gratuito
- 3 tareas concurrentes
- Modelo Gemini 2.5 Pro
- Se requiere cuenta Gmail (mayores de 18 años)
- Límites de tareas se reinician en ventana móvil de 24 horas
- No se requiere tarjeta de crédito
- Nivel Pro ($19.99/mes): 100 tareas/día (5x límites)

**** [Límites de Uso](https://jules.google/docs/usage-limits/) | [Documentación](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **Acceso a Claude 4 Sonnet, Claude 3.7 Sonnet**
- 50 créditos/mes (nivel gratuito)
- Modelos Claude 4 Sonnet y Claude 3.7 Sonnet (alojados en AWS)
- No se requiere tarjeta de crédito
- Bono de bienvenida de 14 días: 500 créditos
- Niveles pagos: Pro ($20/mes - 1,000 créditos), Pro+ ($40/mes - 2,000 créditos), Power ($200/mes - 10,000 créditos)

**** [Precios](https://kiro.dev/pricing/) | [Blog de Introducción](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Modelos Qwen3-Coder-480B, Claude, GPT, Gemini**
- Nivel gratuito: completados/ediciones ilimitadas + chat/solicitudes de agente limitadas + prueba Pro de 2 semanas (1,000 créditos)
- IDE con IA de Alibaba
- Disponible para Windows y macOS
- Usa principalmente Qwen3-Coder-480B (modelo insignia de Alibaba)
- También soporta modelos Claude, GPT-4, Gemini
- Modo Agente y Modo Quest para codificación autónoma
- No se requiere tarjeta de crédito (nivel gratuito)
- Niveles pagos: Pro ($20/mes - 2,000 créditos), Pro+ ($60/mes - 6,000 créditos)

**** [Sitio](https://qoder.com/) | [Precios](https://qoder.com/pricing)

Los límites cambian rápido. Si ves un error, una cuota/modelo más nuevo, o quieres agregar una nueva herramienta, abre un issue o PR con una fuente. Consulta CONTRIBUTING.md para pautas.

---

## 2. Proveedores de API para Herramientas de Codificación con IA
_(ordenados de más generosos a menos generosos)_

Estos servicios proporcionan acceso API a modelos optimizados para codificación que se integran con herramientas populares de codificación con IA como Cursor, Continue.dev, Cline y otros. No proporcionan herramientas de codificación independientes sino que ofrecen el backend de IA para herramientas existentes.

### [OpenRouter](https://openrouter.ai/)

> **Qwen3-Coder-480B vía OpenRouter**
- 50 solicitudes/día nivel gratuito (1,000/día si has comprado $10+ créditos)
- Modelos gratuitos adicionales: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- API compatible con OpenAI para todos los IDEs principales
- No se requiere tarjeta de crédito para modelos gratuitos
- Límite de 20 solicitudes/minuto para nivel gratuito
- Funciona con Continue.dev, Cline, Cursor, etc.

**** [Modelos Gratuitos](https://openrouter.ai/models/?q=free) | [API Qwen3-Coder](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **Acceso a Qwen3-235B y Llama 3.1**
- Nivel gratuito: 1M tokens/día
- No se requiere tarjeta de crédito
- Límite de 30 solicitudes/minuto, contexto de 8,192 tokens
- Modelos: Qwen3-235B, Llama 3.1 70B (Nota: Qwen3-Coder-480B desaprobado 5 nov 2025)
- API compatible con OpenAI (funciona con Cursor, Continue.dev, Cline, RooCode, etc.)
- Inferencia ultra-rápida: 2,000 tokens/segundo (40x más rápido que proveedores típicos)
- **Niveles pagos:** Developer ($10+ autoservicio), Enterprise (personalizado)

**** [Precios](https://www.cerebras.ai/pricing) | [Documentación API](https://inference-docs.cerebras.ai/) | [Guías de Integración](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Herramientas con Niveles Pagos con Modelos de Grado Profesional


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Jira Standard ($7.53/usuario/mes):** 20M tokens/día
- **Jira Premium ($15.25/usuario/mes):** 20M tokens/día
- **Jira Enterprise (personalizado):** 20M tokens/día
- Aumento de 4x del nivel gratuito (5M → 20M tokens/día)
- Mismo modelo basado en Claude que el nivel gratuito
- Los límites de tokens se reinician a medianoche UTC

**** [Documentación](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Límites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Precios de Jira](https://www.atlassian.com/software/jira/pricing)

---

### [Claude Code](https://www.anthropic.com/claude-code)

> **Pro ($20/mes o $17/mes anual):** Acceso a Sonnet 4 con más uso que el nivel gratuito
- **Max 5x ($100/mes):** ~225 mensajes/5 horas — 140–280h Sonnet 4 + 15–35h Opus 4.5 semanal
- **Max 20x ($200/mes):** ~900 mensajes/5 horas — 240–480h Sonnet 4 + 24–40h Opus 4.5 semanal
- Modos de pensamiento extendidos: "think" (~4K tokens), "megathink" (~10K), "ultrathink" (~32K)
- Ultrathink habilita refactors complejos, arquitectura de sistemas y depuración profunda
- Opus 4.5 consume ~5x más recursos que Sonnet 4
- Límites de uso se reinician semanalmente con ventanas móviles de 5 horas
- Funciona con modelos Opus 4.5, Sonnet 4.5 y Haiku 4.5

**** [Precios](https://www.anthropic.com/pricing) | [Guía Claude Code](https://docs.anthropic.com/en/docs/claude-code)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Pro ($19/mes):** Límites aumentados para solicitudes agénticas
- El uso puede ajustarse basado en factores regionales y patrones de uso

**** [Precios](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Build ($20/mes):** 1,500 créditos de IA/mes
- Créditos recargables disponibles (hasta 50% más baratos que tarifas antiguas y acumulables 12 meses)
- Opción BYOK (trae tu propia API)
- Nueva tarifa efectiva para nuevos clientes (30 oct 2025)
- Suscriptores mensuales existentes migran en la primera renovación después del 1 dic 2025
- Nivel Enterprise: precios personalizados

**** [Precios](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **Pro ($10/mes):** 300 solicitudes premium + completados ilimitados/mes
- **Pro+ ($39/mes):** 1,500 solicitudes premium + completados ilimitados/mes
- **Business ($19/usuario/mes):** 300 solicitudes premium + completados ilimitados/usuario/mes
- **Enterprise ($39/usuario/mes):** 1,000 solicitudes premium + completados ilimitados/usuario/mes
- **GPT-5.1-Codex-Max** disponible en vista previa pública (4 dic 2025) para Pro, Pro+, Business, Enterprise
- Acceso a múltiples modelos (GPT-5.1-Codex-Max, GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1)
- Facturación de excedentes a $0.04/solicitud

**** [Detalles de Planes](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Vista previa GPT-5.1-Codex-Max](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Pro ($10/mes):** 600 solicitudes rápidas + solicitudes lentas ilimitadas para modelos premium
- Solicitudes lentas ilimitadas para modelos avanzados
- Cero límites de velocidad y acceso más rápido a modelos premium
- Paquetes extra disponibles: $3-$12 para solicitudes rápidas adicionales
- Múltiples modelos premium: Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, Claude 3.5 Sonnet, Gemini 2.5 Pro, GPT‑4.1, GPT‑4o
- IDE basado en VS Code con integración completa de IA
- Primer mes disponible por $3

**** [Precios](https://trae.ai/pricing) | [Documentación](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Pro ($15/mes):** 500 créditos de prompt/mes
- **Teams ($30/usuario/mes):** 500 créditos de prompt/usuario/mes
- **Enterprise ($60+/usuario/mes):** 1,000 créditos de prompt/usuario/mes

**** [Precios](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Pro ($25/mes):** 150 créditos/mes (5 créditos diarios)
- **Teams ($30/mes):** Límites más altos (no divulgados)

**** [Límites de Mensajes](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

> **$20/mes:** 10M tokens/mes
- **$200/mes:** 120M tokens/mes

**** [Documentación de Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Hobby (Gratis):** Solicitudes de Agente limitadas + completados de Tab limitados + prueba Pro de 1 semana
- **Pro ($20/mes o $16/mes anual):** Límites extendidos de Agente + completados de Tab ilimitados + Agentes en segundo plano + ventanas de contexto máximas
- **Pro+ ($60/mes):** 3x uso en todos los modelos OpenAI, Claude, Gemini
- **Ultra ($200/mes):** 20x uso en todos los modelos OpenAI, Claude, Gemini + acceso prioritario a nuevas funciones
- **Teams ($40/usuario/mes):** Características Pro + facturación centralizada + analíticas de uso + SAML/OIDC SSO
- **Enterprise (Personalizado):** Todo lo de Teams + uso agrupado + SCIM + API de seguimiento de código IA + registros de auditoría
- **GPT-5.1-Codex-Max gratis para todos los usuarios hasta el 11 dic 2025** (77.9% SWE-bench Verified)
- Prueba Pro de una semana disponible (nivel gratuito)
- Nivel gratuito ahora usa seguimiento de uso basado en tokens (no basado en solicitudes)
- Modelos gratuitos: Cursor Small, Deepseek v3, Gemini 2.5 Flash, GPT-4o mini (límite 500/día), Grok 3 Mini Beta
- Niveles pagos: Acceso a modelos OpenAI, Claude, Gemini incluyendo GPT-5.1-Codex-Max
- Nota: Modelos Claude removidos del nivel gratuito ~junio 2025
- Editor de código con capacidades de codificación autónoma impulsado por IA

**** [Precios](https://cursor.com/en/pricing) | [Anuncio GPT-5.1-Codex-Max](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Gratuito con ChatGPT Plus ($20/mes):** 30–150 mensajes/5 horas para tareas de codificación
- **ChatGPT Pro ($200/mes):** 300–1,500 mensajes/5 horas — límites más altos
- **API pago por uso:** GPT-5.1-Codex-Max a $1.25/$10 por millón de tokens (entrada/salida)
- **Modo OSS gratuito:** Acceso solo a modelos de código abierto (flag --oss)
- **GPT-5.1-Codex-Max** (19 nov 2025): 77.9% SWE-bench Verified — ahora modelo por defecto
- Primer modelo con "compaction" para sesiones de millones de tokens (tareas de 24+ horas)
- 30% menos tokens de razonamiento que el GPT-5.1-Codex previo
- También disponible en GitHub Copilot (Pro, Pro+, Business, Enterprise)
- Soporte Windows incluido
- Multiplataforma: macOS 12+, Ubuntu 20.04+, Windows 11 vía WSL2

**** [Repositorio GitHub](https://github.com/openai/codex) | [Anuncio GPT-5.1-Codex-Max](https://openai.com/index/gpt-5-1-codex-max/)

---

### [Codeium](https://codeium.com/)

> **Pro ($10/mes):** Uso ilimitado con conciencia de contexto avanzada
- Acceso a Claude 3.5 Sonnet, GPT-4o
- Ventana de contexto mejorada y personalización
- **Teams ($12/usuario/mes):** Características Pro + gestión de equipo
- **Enterprise (Personalizado):** Despliegue en sitio, modelos personalizados

**** [Precios](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Pro ($12/mes):** Completados y chat de IA mejorados
- **Enterprise ($39/usuario/mes):** Múltiples LLMs, despliegue privado
- Modelos: Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, modelos propietarios
- Más de 600 lenguajes de programación soportados
- Opciones de despliegue en sitio y aislado
- Trae tus propios modelos afinados

**** [Precios](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **AI Pro ($15/mes):** Cuota en la nube aumentada + modelos locales ilimitados
- **AI Ultimate ($25/mes):** Cuota máxima en la nube + características avanzadas
- Nivel gratuito: Completado de código ilimitado + modelos locales + cuota limitada en la nube
- Prueba Pro de 30 días incluida
- All Products Pack incluye AI Pro
- Modo offline con modelos locales vía Ollama/LM Studio

**** [Precios AI](https://www.jetbrains.com/ai-ides/buy/)

---

### [Jules](https://jules.google/)

> **Pro ($19.99/mes vía Google AI Pro):** 100 tareas/día
- 5x límites más altos que el nivel gratuito (15 tareas/día → 100 tareas/día)
- 5x tareas concurrentes (3 → 15 concurrentes)
- Mayor acceso a los últimos modelos
- **Ultra (vía Google AI Ultra):** 300 tareas/día
- 20x límites más altos que el nivel gratuito
- 60 tareas concurrentes
- Acceso prioritario a los últimos modelos
- Se requiere cuenta Gmail (mayores de 18 años)

**** [Límites de Uso](https://jules.google/docs/usage-limits/) | [Planes de Google AI](https://one.google.com/about/google-ai-plans/)

---

### [SuperMaven](https://supermaven.com/)

> **Pro ($10/mes):** Ventana de contexto de 1M tokens + créditos de chat
- Alternativa: $99/año
- Interfaz de chat con GPT-4o, Claude 3.5 Sonnet, GPT-4
- **Team ($10/usuario/mes):** Características Pro + gestión de equipo
- Nota: Se fusionó con Cursor IDE en noviembre 2024

**** [Precios](https://supermaven.com/pricing)

¿Conoces mejores precios o límites? Comparte un enlace en un issue o PR para ayudar a mantener esto actualizado. Consulta CONTRIBUTING.md para pautas.

---

## 4. Herramientas con Acceso Gratuito a Modelos Básicos
__(modelos no especificados/básicos)__

### [Bolt.new](https://bolt.new/)

> **Modelos no especificados**
- Límite de 1M tokens/mes
- Modelo específico no especificado públicamente
- Se requiere tarjeta de crédito

**** [Documentación de Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Modelos no especificados**
- 5 créditos diarios, máximo 30 por mes (gratis)
- Modelos no enumerados públicamente
- Se requiere tarjeta de crédito

**** [Límites de Mensajes](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

> **Modelos propietarios (no de frontera)**
- El acceso GPT-5 requiere suscripción v0 Premium
- $5 en créditos/mes de límite
- Usa modelos propietarios con enrutamiento variado
- Se requiere tarjeta de crédito

**** [Blog de Precios Actualizados](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

> **Uso gratuito ilimitado de asistencia básica de IA**
- Plan individual: Gratis para siempre con completados de código ilimitados, chat de IA, comandos
- 70+ lenguajes de programación soportados
- Integraciones IDE: VS Code, JetBrains, Vim/Neovim, Jupyter
- No se requiere tarjeta de crédito
- Conciencia de contexto limitada (expandida en niveles pagos)
- Solo modelo base (Llama 3.1 70B), modelos de grado profesional requieren suscripción

**** [Precios](https://codeium.com/pricing) | [Documentación](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Nivel gratuito con características limitadas**
- Completados de código con IA básicos y chat (limitado)
- Procesamiento local disponible
- Contexto fuertemente limitado en nivel gratuito
- Rendimiento reducido para ahorrar recursos
- Más de 600 lenguajes de programación soportados

**** [Precios](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

> **Nivel gratuito AI incluido con IDEs**
- Completado de código ilimitado y soporte de modelo local
- Cuota limitada para características basadas en la nube
- Prueba AI Pro de 30 días
- Chat, generación de código, mensajes de commit con modelos locales

**** [Características AI](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

> **Nivel gratuito con características básicas**
- Sugerencias básicas de código
- Límite de retención de datos de 7 días
- Se requiere tarjeta de crédito para registro
- Ventana de contexto de 1M tokens (impresionante para el nivel gratuito)

**** [Precios](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

> **Extensión gratuita de código abierto con soporte flexible de modelos**
- Extensión gratuita para VS Code y JetBrains
- Soporte completo para modelos locales vía Ollama, LM Studio
- Nivel Solo: opciones de visibilidad privada/equipo/pública
- Soporta más de 200 modelos (requiere tus propias claves API para modelos en la nube)
- Hub de comunidad para asistentes de IA personalizados
- Sin bloqueo de proveedor o límites de uso para modelos locales

**** [GitHub](https://github.com/continuedev/continue) | [Hub de Modelos](https://hub.continue.dev/explore/models)

¿Conoces los límites oficiales o modelos? Comparte un enlace en un issue o PR para actualizar la información. Consulta CONTRIBUTING.md para pautas.

---

## 5. Modelos Locales


Ejecutar modelos de frontera de peso abierto localmente proporciona asistencia de codificación ilimitada sin costos de API o límites de uso. Las herramientas populares para despliegue local incluyen **[Cline](https://cline.bot/)** (extensión VS Code con modos Plan/Act y soporte MCP), **[Aider](https://aider.chat/)** (asistente de línea de comandos con integración Git incorporada), y **[Continue.dev](https://www.continue.dev/)** (extensión VS Code de código abierto que soporta más de 200 modelos). Todas funcionan perfectamente con **[Ollama](https://ollama.com/)** para ejecutar modelos de frontera como Devstral (24B parámetros, optimizado para codificación agéntica), Qwen3-Coder, DeepSeek Coder V2, Codestral, y GLM-4.5.

**Nota**: Los modelos de frontera requieren RAM/VRAM sustancial. En particular, para Qwen3‑Coder‑480B el GGUF compatible con Ollama es ~150GB, y la inferencia local práctica puede requerir ~150GB de memoria unificada (RAM+VRAM), lo que lo hace difícil en laptops típicas; la cuantización 30B comúnmente necesita ~18GB. Ver la guía local de Unsloth Qwen3‑Coder para detalles ([docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) y el artículo de Simon Willison sobre [ejecutar GLM‑4.5 AIR en su laptop para construir Space Invaders](https://simonwillison.net/2025/Jul/29/space-invaders/) como ejemplo práctico.

---

## Notas de Comparación

- **Objetivo**: Comparar herramientas de codificación de IA por su acceso a modelos de grado profesional y límites de nivel gratuito.
- **¿Qué califica un modelo como "grado profesional"?** Los modelos deben lograr ≥60% en SWE-bench Verified, demostrando capacidad de ingeniería de software del mundo real. Modelos actuales calificados: Claude Opus 4.5 (80.9%), GPT-5.1-Codex-Max (77.9%), Claude Sonnet 4.5 (77.2%), Gemini 3 Pro (76.2%), GPT-5 (74.9%), Claude Opus 4.1 (74.5%), Claude Sonnet 4 (72.7%), GPT-5 mini (71.0%), Qwen3-Coder-480B (69.6%), y Gemini 2.5 Pro (63.2%).
- **Diferentes tipos de límites**: Las herramientas usan varios sistemas de cuotas - solicitudes, tokens, créditos, chats - haciendo la comparación directa desafiante. Consulta la documentación para especificaciones.
- **Uso del mundo real**: El consumo real varía dramáticamente según el estilo de codificación, la complejidad de la tarea y la implementación de la herramienta.

---

## Recursos Relacionados

- [Coding with AI](https://coding-with-ai.dev/) - Técnicas prácticas y recursos para codificar con LLMs
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Lista completa de APIs LLM gratuitas para construir integraciones personalizadas

---

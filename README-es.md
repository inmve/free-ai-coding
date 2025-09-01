> 🤖 **Aviso de Traducción Automática**
> Esta página fue traducida automáticamente del inglés usando Claude AI.
> Para mayor precisión, consulte la [versión original en inglés](README.md).

Última actualización: 26 de agosto, 2025 • PRs/issues bienvenidos • ⭐ Dale estrella para volver más tarde

# Herramientas de Codificación con IA: Donde los Modelos de Grado Profesional Son Realmente Gratuitos

Muchas herramientas de codificación con IA afirman ser "gratuitas", pero el acceso a modelos de grado profesional generalmente se agota rápido, luego te degradan. Cada herramienta usa diferentes límites (créditos, tokens, solicitudes), haciendo que la comparación sea difícil. Esta lista los pone lado a lado para mostrar lo que realmente obtienes gratis.

## TL;DR — Niveles Gratuitos para Codificación de IA de Grado Profesional
_(herramientas con límites más altos listadas primero)_

| Herramienta | Modelos de grado profesional | Límite de nivel gratuito | Tarjeta de crédito |
|-------------|------------------------------|--------------------------|-------------------|
| [Qwen Code](#qwen-code) | Qwen3-Coder-480B | 2,000 solicitudes/día | No |
| [Rovo Dev CLI](#rovo-dev-cli) | Claude Sonnet 4 | 5M tokens/día (beta) | No |
| [Gemini CLI](#gemini-cli) | Gemini 2.5 Pro | 100 solicitudes/día | No |
| [Kilo Code](#kilo-code) | Claude Opus/Sonnet, Gemini 2.5 Pro, GPT‑4.1 | $25 créditos de registro (una vez) | Sí |
| [Warp](#warp) | GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro | 150 solicitudes/mes | No |
| [Trae](#trae) | Claude 4 Sonnet (Beta), Claude 3.7 Sonnet, GPT‑4.1, GPT‑4o, Gemini 2.5 Pro | 60 solicitudes/mes | No |
| [Amazon Q Developer](#amazon-q-developer) | Claude Sonnet 4 | 50 chats de agente/mes | Sí |
| [GitHub Copilot](#github-copilot) | GPT‑4o, Claude 3.5 Sonnet, Gemini 2.0 Flash | 50 mensajes de chat + 2,000 completados/mes | No |
| [Windsurf](#windsurf) | OpenAI, Anthropic, Google, xAI | 25 créditos/mes | Sí |
| [Jules](#jules) | Gemini 2.5 Pro | 15 tareas/día | No |
| [AWS Kiro](#aws-kiro) | Claude 4 Sonnet, Claude 3.7 Sonnet | 50 solicitudes vibe/mes | No |
| [Qoder](#qoder) | Qwen3-Coder-480B, Claude, GPT, Gemini | Créditos limitados (vista previa) | No (vista previa) |

## Ayuda a Hacer Esto Más Preciso

**El uso real varía ampliamente según el estilo de codificación, la complejidad de la tarea y la implementación de la herramienta**. Ayuda a mejorar este recurso [compartiendo tu experiencia real →](https://free-ai-usage.vercel.app/)

### Modelos de Grado Profesional Calificados
Solo los modelos que logran >60% en SWE-bench Verified califican como grado profesional para tareas de codificación del mundo real. A continuación está la lista actual

| Modelo | SWE-bench Verified | Proveedor |
|--------|-------------------|-----------|
| GPT-5 | 74.9% | OpenAI |
| Claude Opus 4.1 | 74.5% | Anthropic |
| Claude Sonnet 4 | 72.7% (80.2% c/ paralelo) | Anthropic |
| GPT-5 mini | 71.0% | OpenAI |
| Qwen3-Coder-480B | 69.6% (interactivo) / 67.0% (único) | Alibaba |
| Gemini 2.5 Pro | 63.2% | Google |

### Contribuir

Ayuda a mejorar este recurso compartiendo tu experiencia de uso real → [Envía tus comentarios](https://free-ai-usage.vercel.app/)

Si ves un error, enlace de fuente faltante, o tienes información actualizada de cuota/modelo, por favor abre un issue o pull request con una fuente. ¡Las contribuciones de nuevas herramientas son bienvenidas! Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para pautas detalladas.

### Descargo de Responsabilidad

Sin afiliación con ningún proveedor. Todas las marcas registradas pertenecen a sus propietarios. La información es para investigación; no se garantiza la precisión; los límites/precios cambian con frecuencia.

## Contenidos

- [1. Herramientas de Codificación con IA con Acceso Gratuito a Modelos de Grado Profesional](#1-herramientas-de-codificación-con-ia-con-acceso-gratuito-a-modelos-de-grado-profesional)
- [2. Proveedores de API para Herramientas de Codificación con IA](#2-proveedores-de-api-para-herramientas-de-codificación-con-ia)
- [3. Herramientas con Niveles Pagos con Modelos de Grado Profesional](#3-herramientas-con-niveles-pagos-con-modelos-de-grado-profesional)
- [4. Herramientas con Acceso Gratuito a Modelos Básicos](#4-herramientas-con-acceso-gratuito-a-modelos-básicos)
- [5. Modelos Locales](#5-modelos-locales)
- [Notas de Comparación](#notas-de-comparación)
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

**Enlaces:** [GitHub](https://github.com/QwenLM/qwen-code) | [Documentación](https://github.com/QwenLM/qwen-code#readme)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Acceso a Claude Sonnet 4 durante beta**
- Nivel gratuito de 5M tokens/día (20M solo el primer día)
- Modelo Claude Sonnet 4 (confirmado mediante pruebas)
- No se requiere tarjeta de crédito durante beta
- Los límites de tokens se reinician a medianoche UTC
- Nota: Actualiza a Jira Standard/Premium/Enterprise para 20M tokens/día

**Enlaces:** [Documentación](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Límites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Acceso a Gemini 2.5 Pro**
- Límite de 100 solicitudes/día para Gemini 2.5 Pro
- Límite de 250 solicitudes/día para Gemini 2.5 Flash
- No se requiere tarjeta de crédito
- Solo modelos de Google
- Cambia a tarifas pagadas después de la cuota gratuita

**Enlaces:** [Límites de Velocidad](https://ai.google.dev/gemini-api/docs/rate-limits) | [Precios](https://ai.google.dev/gemini-api/docs/pricing)

---

### [Kilo Code](https://kilocode.ai/)

> **~3h total de codificación con Claude 4 Sonnet/Opus, Gemini 2.5 Pro, GPT-4.1**
- $20 créditos gratuitos al registrarse
- Extensión de VS Code de código abierto
- Pago por uso sin margen en precios de modelos
- Se requiere tarjeta de crédito para reclamar créditos de bonificación
- Soporta traer tus propias claves API

**Enlaces:** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentación](https://kilocode.ai/docs/)

---

### [Warp](https://warp.dev/)

> **~2.5h/mes a través de GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro**
- Límite de 150 solicitudes/mes
- Múltiples proveedores (OpenAI GPT‑5, Claude Opus 4.1, Claude Sonnet 4, Gemini 2.5 Pro)
- No se requiere tarjeta de crédito para registro básico
- Excedentes de pago por uso disponibles

**Enlaces:** [Precios](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **~0.8h/mes de codificación con Claude Sonnet 4**
- Límite de 50 chats agénticos/mes (conversaciones multi-turno)
- Últimos modelos Claude (alojados en AWS)
- Se requiere tarjeta de crédito
- Debe actualizarse a Pro para acceso continuo
- Nivel gratuito perpetuo

**Enlaces:** [Precios](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **~0.8h/mes de interacciones de agente (GPT‑4o, Claude 3.5 Sonnet, Gemini 2.0 Flash)**
- Límite de 50 mensajes de chat + 2,000 completados/mes
- Modo Agente con codificación autónoma multi-paso
- Múltiples proveedores (GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Flash)
- No se requiere tarjeta de crédito
- Limitado a características básicas después de la cuota

**Enlaces:** [Detalles de Planes](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Modo Agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Windsurf](https://windsurf.com/)

> **~0.4h/mes a través de modelos OpenAI, Anthropic, Google, xAI**
- Límite de 25 créditos de prompt/mes
- Múltiples proveedores (OpenAI, Claude, Gemini, xAI)
- Se requiere tarjeta de crédito
- Puede comprar créditos adicionales para continuar

**Enlaces:** [Precios](https://windsurf.com/pricing)

---

### [AWS Kiro](https://kiro.dev/)

> **Duración desconocida de codificación con Claude 4 Sonnet, Claude 3.7 Sonnet**
- Límites diarios (no divulgados)
- Modelos Claude 4 Sonnet y Claude 3.7 Sonnet (alojados en AWS)
- No se requiere tarjeta de crédito (período de vista previa)
- Agotamiento de cuota desconocido (período de vista previa)

**Enlaces:** [Blog de Introducción](https://kiro.dev/blog/introducing-kiro/)

---

> Los límites cambian rápido. Si ves un error, una cuota/modelo más nuevo, o quieres agregar una nueva herramienta, abre un issue o PR con una fuente. ¡Las contribuciones de nuevas herramientas son bienvenidas!

---

## 2. Proveedores de API para Herramientas de Codificación con IA
_(ordenados de más generosos a menos generosos)_

Estos servicios proporcionan acceso API a modelos optimizados para codificación que se integran con herramientas populares de codificación con IA como Cursor, Continue.dev, Cline y otros. No proporcionan herramientas de codificación independientes sino que ofrecen el backend de IA para herramientas existentes.

### [OpenRouter](https://openrouter.ai/)

> **~33h/día (~1000h/mes) de codificación con Qwen3-Coder**
- Nivel gratuito de 2,000 solicitudes/día para Qwen3-Coder-480B
- Modelos gratuitos adicionales: Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- API compatible con OpenAI para todos los IDEs principales
- No se requiere tarjeta de crédito para modelos gratuitos
- Limitación de velocidad durante alto tráfico para nivel gratuito
- Funciona con Continue.dev, Cline, Cursor, etc.

**Enlaces:** [Modelos Gratuitos](https://openrouter.ai/models/?q=free) | [API Qwen3-Coder](https://openrouter.ai/qwen/qwen3-coder:free/api)

---

### [Cerebras](https://cloud.cerebras.ai/)

> **~1.7h/día (~50h/mes) de codificación con Qwen3-Coder/Llama 3.1**
- Nivel gratuito de 100 solicitudes/día
- Modelos: Qwen3-Coder-480B (iguala el rendimiento de Claude Sonnet 4), Llama 3.1 70B
- API compatible con OpenAI (funciona con Cursor, Continue.dev, Cline, RooCode, etc.)
- Inferencia ultra-rápida: 2,000 tokens/segundo (40x más rápido que proveedores típicos)
- No se requiere tarjeta de crédito
- **Niveles pagos:** Code Pro ($50/mes), Code Max ($200/mes) - sin límites semanales

**Enlaces:** [Precios](https://www.cerebras.ai/pricing) | [Documentación API](https://inference-docs.cerebras.ai/) | [Guías de Integración](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Herramientas con Niveles Pagos con Modelos de Grado Profesional

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

**Jira Standard ($7.53/usuario/mes):** 20M tokens/día (~80h/día de codificación con Claude Sonnet)
**Jira Premium ($15.25/usuario/mes):** 20M tokens/día
**Jira Enterprise (personalizado):** 20M tokens/día
- Aumento de 4x del nivel gratuito (5M → 20M tokens/día)
- Mismo modelo basado en Claude que el nivel gratuito
- Los límites de tokens se reinician a medianoche UTC

**Enlaces:** [Documentación](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Límites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/) | [Precios de Jira](https://www.atlassian.com/software/jira/pricing)

---


### [Claude Code](https://www.anthropic.com/claude-code)

**Pro ($20/mes):** Acceso a Sonnet 4
**Max ($100/mes):** Acceso a Opus 4 + Sonnet 4
**Max ($200/mes):** Límites más altos de Opus 4 + Sonnet 4
- Los límites de uso se reinician semanalmente
- Se aplican límites de ventana móvil de 5 horas

**Enlaces:** [Precios](https://www.anthropic.com/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

**Pro ($19/mes):** Límites aumentados para solicitudes agénticas
- El uso puede ajustarse basado en factores regionales y patrones de uso

**Enlaces:** [Precios](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

**Pro ($15/mes):** 2,500 solicitudes/mes
**Turbo ($40/mes):** 10,000 solicitudes/mes  
**Lightspeed ($200/mes):** 50,000 solicitudes/mes
- Pago por uso disponible para excedentes

**Enlaces:** [Precios](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

**Pro ($10/mes):** 300 solicitudes premium + completados ilimitados/mes
**Pro+ ($39/mes):** 1,500 solicitudes premium + completados ilimitados/mes
**Business ($19/usuario/mes):** 300 solicitudes premium + completados ilimitados/usuario/mes
**Enterprise ($39/usuario/mes):** 1,000 solicitudes premium + completados ilimitados/usuario/mes
- Facturación de excedentes disponible a $0.04/solicitud

**Enlaces:** [Detalles de Planes](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot)

---

### [Windsurf](https://windsurf.com/)

**Pro ($15/mes):** 500 créditos de prompt/mes
**Teams ($30/usuario/mes):** 500 créditos de prompt/usuario/mes
**Enterprise ($60+/usuario/mes):** 1,000 créditos de prompt/usuario/mes

**Enlaces:** [Precios](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

**Pro ($25/mes):** 100 mensajes/mes
**Teams ($30/mes):** Límites más altos (no divulgados)

**Enlaces:** [Límites de Mensajes](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [Bolt.new](https://bolt.new/)

**$20/mes:** 10M tokens/mes
**$200/mes:** 120M tokens/mes

**Enlaces:** [Documentación de Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

**Hobby (Gratuito):** Solicitudes de agente limitadas solo con modelos básicos
**Pro ($20/mes):** Límites extendidos en Agente, acceso a GPT-5, Claude Sonnet 4, Gemini 2.5 Pro
**Ultra ($200/mes):** 20x uso en todos los modelos OpenAI, Claude, Gemini
**Teams ($40/usuario/mes):** Características Pro + gestión de equipo
- Prueba Pro de dos semanas disponible
- Se requiere tarjeta de crédito para nivel gratuito

**Enlaces:** [Precios](https://cursor.com/en/pricing)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

**Gratuito con ChatGPT Plus ($20/mes):** Acceso GPT-5 para tareas de codificación
**Pago por uso:** Usar con clave API de OpenAI
**Modo OSS gratuito:** Acceso solo a modelos de código abierto (vía flag --oss)
- Agente de codificación ligero ejecutándose localmente
- UI de terminal interactiva con modo sandbox
- macOS 12+, Ubuntu 20.04+, Windows 11 vía WSL2
- Proyecto experimental bajo desarrollo activo

**Enlaces:** [Repositorio GitHub](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

**Pro ($10/mes):** Uso ilimitado con conciencia de contexto avanzada
- Acceso a Claude 3.5 Sonnet, GPT-4o
- Ventana de contexto mejorada y personalización
**Teams ($12/usuario/mes):** Características Pro + gestión de equipo
**Enterprise (Personalizado):** Despliegue en sitio, modelos personalizados

**Enlaces:** [Precios](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

**Pro ($12/mes):** Completados y chat de IA mejorados
**Enterprise ($39/usuario/mes):** Múltiples LLMs, despliegue privado
- Modelos: Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, modelos propietarios
- Más de 600 lenguajes de programación soportados
- Opciones de despliegue en sitio y aislado
- Trae tus propios modelos afinados

**Enlaces:** [Precios](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**AI Pro ($15/mes):** Cuota en la nube aumentada + modelos locales ilimitados
**AI Ultimate ($25/mes):** Cuota máxima en la nube + características avanzadas
- Nivel gratuito: Completado de código ilimitado + modelos locales + cuota limitada en la nube
- Prueba Pro de 30 días incluida
- All Products Pack incluye AI Pro
- Modo offline con modelos locales vía Ollama/LM Studio

**Enlaces:** [Precios AI](https://www.jetbrains.com/ai-ides/buy/)

---

### [SuperMaven](https://supermaven.com/)

**Pro ($10/mes):** Ventana de contexto de 1M tokens + créditos de chat
- Alternativa: $99/año
- Interfaz de chat con GPT-4o, Claude 3.5 Sonnet, GPT-4
**Team ($10/usuario/mes):** Características Pro + gestión de equipo
- Nota: Se fusionó con Cursor IDE en noviembre 2024

**Enlaces:** [Precios](https://supermaven.com/pricing)

---

> ¿Conoces mejores precios o límites? Comparte un enlace en un issue o PR para ayudar a mantener esto actualizado.

---

## 4. Herramientas con Acceso Gratuito a Modelos Básicos
__(modelos no especificados/básicos)__

### [Bolt.new](https://bolt.new/)

**~100h/mes con modelos no especificados**
- Límite de 1M tokens/mes
- Modelo específico no especificado públicamente
- Se requiere tarjeta de crédito

**Enlaces:** [Documentación de Tokens](https://support.bolt.new/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

**~0.5h/mes con modelos no especificados**
- 5 créditos/día, límite de 30/mes
- Modelos no enumerados públicamente
- Se requiere tarjeta de crédito

**Enlaces:** [Límites de Mensajes](https://docs.lovable.dev/user-guides/messaging-limits)

---

### [v0.dev](https://v0.dev/)

**Duración variable con modelos propietarios (no de frontera)**
- El acceso GPT-5 requiere suscripción v0 Premium
- Límite de $5 en créditos/mes
- Usa modelos propietarios con enrutamiento variado
- Se requiere tarjeta de crédito

**Enlaces:** [Blog de Precios Actualizados](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)

---

### [Codeium](https://codeium.com/)

**Uso gratuito ilimitado de asistencia básica de codificación con IA**
- Plan individual: Gratuito para siempre con completados de código ilimitados, chat de IA, comandos
- Más de 70 lenguajes de programación soportados
- Integraciones IDE: VS Code, JetBrains, Vim/Neovim, Jupyter
- No se requiere tarjeta de crédito
- Conciencia de contexto limitada (expandida en niveles pagos)
- Solo modelo base (Llama 3.1 70B), modelos de grado profesional requieren suscripción

**Enlaces:** [Precios](https://codeium.com/pricing) | [Documentación](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

**Nivel gratuito con características limitadas**
- Completados de código con IA básicos y chat (limitado)
- Procesamiento local disponible
- Contexto fuertemente limitado en nivel gratuito
- Rendimiento reducido para ahorrar recursos
- Más de 600 lenguajes de programación soportados

**Enlaces:** [Precios](https://www.tabnine.com/pricing/)

---

### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**Nivel gratuito AI incluido con IDEs**
- Completado de código ilimitado y soporte de modelo local
- Cuota limitada para características basadas en la nube
- Prueba AI Pro de 30 días
- Chat, generación de código, mensajes de commit con modelos locales

**Enlaces:** [Características AI](https://www.jetbrains.com/ai-assistant/)

---

### [SuperMaven](https://supermaven.com/)

**Nivel gratuito con características básicas**
- Sugerencias básicas de código
- Límite de retención de datos de 7 días
- Se requiere tarjeta de crédito para registro
- Ventana de contexto de 1M tokens (impresionante para nivel gratuito)

**Enlaces:** [Precios](https://supermaven.com/pricing)

---

### [Continue.dev](https://www.continue.dev/)

**Extensión gratuita de código abierto con soporte flexible de modelos**
- Extensión gratuita para VS Code y JetBrains
- Soporte completo para modelos locales vía Ollama, LM Studio
- Nivel Solo: opciones de visibilidad privada/equipo/pública
- Soporta más de 200 modelos (requiere tus propias claves API para modelos en la nube)
- Hub de comunidad para asistentes de IA personalizados
- Sin bloqueo de proveedor o límites de uso para modelos locales

**Enlaces:** [GitHub](https://github.com/continuedev/continue) | [Hub de Modelos](https://hub.continue.dev/explore/models)

---

> ¿Conoces los límites oficiales o modelos? Comparte un enlace en un issue o PR para actualizar la información.

---

## 5. Modelos Locales

Ejecutar modelos de frontera de peso abierto localmente proporciona asistencia de codificación ilimitada sin costos de API o límites de uso. Las herramientas populares para despliegue local incluyen **[Cline](https://cline.bot/)** (extensión VS Code con modos Plan/Act y soporte MCP), **[Aider](https://aider.chat/)** (asistente de línea de comandos con integración Git incorporada), y **[Continue.dev](https://www.continue.dev/)** (extensión VS Code de código abierto que soporta más de 200 modelos). Todas funcionan perfectamente con **[Ollama](https://ollama.com/)** para ejecutar modelos de frontera como Devstral (24B parámetros, optimizado para codificación agéntica), Qwen3-Coder, DeepSeek Coder V2, Codestral, y GLM-4.5.

**Nota**: Los modelos de frontera requieren RAM/VRAM sustancial. En particular, para Qwen3‑Coder‑480B el GGUF compatible con Ollama es ~150GB, y la inferencia local práctica puede requerir ~150GB de memoria unificada (RAM+VRAM), lo que lo hace difícil en laptops típicas; la cuantización 30B comúnmente necesita ~18GB. Ver la guía local de Unsloth Qwen3‑Coder para detalles ([docs](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally)) y el artículo de Simon Willison sobre [ejecutar GLM‑4.5 AIR en su laptop para construir Space Invaders](https://simonwillison.net/2025/Jul/29/space-invaders/) como ejemplo práctico.

---

## Notas de Comparación

- **Objetivo**: Comparar herramientas de codificación de IA por su acceso a modelos de grado profesional y límites de nivel gratuito.
- **¿Qué califica un modelo como "grado profesional"?** Los modelos deben lograr ≥60% en SWE-bench Verified, demostrando capacidad de ingeniería de software del mundo real. Modelos actuales calificados: GPT-5 (74.9%), Claude Opus 4.1 (74.5%), Claude Sonnet 4 (72.7%), GPT-5 mini (71.0%), Qwen3-Coder-480B (69.6%), y Gemini 2.5 Pro (63.2%).
- **Diferentes tipos de límites**: Las herramientas usan varios sistemas de cuotas - solicitudes, tokens, créditos, chats - haciendo la comparación directa desafiante. Consulta la documentación para especificaciones.
- **Uso del mundo real**: El consumo real varía dramáticamente según el estilo de codificación, la complejidad de la tarea y la implementación de la herramienta.

---

## Recursos Relacionados

- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Lista completa de APIs LLM gratuitas para construir integraciones personalizadas

---

## Descargo de Responsabilidad
Sin afiliación con ningún proveedor. Todas las marcas comerciales pertenecen a sus propietarios. La información es para investigación; precisión no garantizada; límites/precios cambian frecuentemente.

---
*Esta traducción fue creada con Claude AI. Para la información más actualizada, por favor consulte la [versión original en inglés](README.md).*
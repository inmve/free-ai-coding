Última actualización: 15 de septiembre de 2026 • PRs/issues bienvenidos

**Idiomas:** [Español](README-es.md) • [Português](README-pt-BR.md) • [中文](README-zh.md) • [Français](README-fr.md) • [日本語](README-ja.md) • [हिन्दी](README-hi.md) • [Deutsch](README-de.md)

# Herramientas de Codificación con IA: Donde los Modelos de Grado Profesional Son Realmente Gratuitos 

Muchas herramientas de codificación con IA afirman ser "gratuitas", pero el acceso a modelos de grado profesional generalmente se agota rápido, luego te degradan. Cada herramienta usa diferentes límites (créditos, tokens, solicitudes), haciendo que la comparación sea difícil. Esta lista los pone lado a lado para mostrar lo que realmente obtienes gratis.

## TL;DR — Niveles Gratuitos para Codificación de IA de Grado Profesional
_(las unidades de cuota difieren; el orden solo orienta y no clasifica capacidades equivalentes)_

| Herramienta | Modelos de grado profesional | Límite de nivel gratuito | Tarjeta de crédito |
|------|------------------|------------------|-------------|
| [Qwen Code](https://github.com/QwenLM/qwen-code) | Qwen y otros proveedores | El nivel gratuito de Qwen OAuth se suspendió el 15 de abril de 2026; usa Alibaba ModelStudio o otro proveedor | No |
| [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface) | Modelos Rovo Dev según el plan | 350 créditos/usuario/mes/sitio con Jira de pago | No |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | El acceso de organizaciones Enterprise/API de pago continúa; los particulares migran a Antigravity CLI | El acceso individual gratuito/Google AI terminó el 18 de junio de 2026; migra a Antigravity CLI | No |
| [Cursor](https://cursor.com/) | Composer; Agent limitado | Agent limitado; sin promoción temporal | No |
| [Kilo Code](https://kilocode.ai/) | No publicado | Valores actuales no verificados | No verificado |
| [Warp](https://warp.dev/) | Warp Agent; BYOK | Free: agente cloud limitado; BYOK para personas y empresas de ≤10 personas no consume créditos Warp | No verificado |
| [Trae](https://trae.ai/) | No publicado | Valores actuales no verificados | No verificado |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Últimos modelos Claude (AWS) | 50 solicitudes agénticas + 1.000 LOC Java/mes | No |
| [GitHub Copilot](https://github.com/features/copilot/plans) | Haiku 4.5, GPT-5 mini y más | 2.000 completados + 50 chats/mes; agentes/CLI limitados | No |
| [Windsurf](https://windsurf.com/) | No publicado | Valores actuales no verificados | No verificado |
| [Jules](https://jules.google/) | Gemini 2.5 Pro | 15 tareas en una ventana móvil de 24 h; 3 simultáneas | No |
| [AWS Kiro](https://kiro.dev/) | Claude Sonnet 4.5 y open-weight | 50 créditos/mes | No |
| [Qoder](https://qoder.com/) | No publicado | Valores actuales no verificados | No verificado |

### Modelos de Grado Profesional Calificados
Valores históricos seleccionados con enlaces a fuentes primarias. Usan condiciones de prueba distintas y no forman una clasificación exhaustiva actual.

| Modelo | SWE-bench Verified | Proveedor |
|-------|-------------------|----------|
| [Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) | 80.9% | Anthropic |
| [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) | 77.2% | Anthropic |
| [Qwen3-Coder-480B](https://qwenlm.github.io/blog/qwen3-coder/) | 69.6% | Alibaba |

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
_(las unidades de cuota difieren; el orden es orientativo y no equivale capacidad)_

### [Qwen Code](https://github.com/QwenLM/qwen-code)

> **El nivel gratuito de Qwen OAuth se suspendió el 15 de abril de 2026; usa Alibaba ModelStudio o otro proveedor**
- El nivel gratuito de Qwen OAuth se suspendió el 15 de abril de 2026; usa Alibaba ModelStudio o otro proveedor
- Admite Qwen y otros proveedores mediante la autenticación
- Agente de código de código abierto para terminal, IDE, escritorio y web

**** [GitHub](https://github.com/QwenLM/qwen-code) | [Authentication](https://github.com/QwenLM/qwen-code/blob/main/docs/users/configuration/auth.md)

---

### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- Gratis con planes Jira de pago: 350 créditos de Rovo Dev/usuario/mes/sitio
- El uso se detiene al alcanzar la cuota mensual
- La página de facturación actual no indica un modelo fijo para CLI
- No se requiere tarjeta para el complemento gratuito

**** [Documentación](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) | [Límites de Tokens](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)

---

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

> **Gemini CLI pasó a Antigravity CLI para particulares**
- El 18 de junio de 2026 Gemini CLI dejó de servir a particulares y Google AI Pro/Ultra
- Antigravity CLI está disponible para todos y es la vía de migración
- El acceso de organizaciones Standard/Enterprise no cambia; las API Gemini de pago siguen disponibles
- La antigua cuota individual de 1.000/día y 60/minuto es histórica y ya no está vigente

**** [Transition announcement](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) | [Documentation](https://ai.google.dev/gemini-api/docs/rate-limits)

---

### [Kilo Code](https://kilocode.ai/)

> **Precios y límites actuales no verificados**
- La página oficial accesible no publica una tabla estable de cuotas o precios
- Los valores exactos anteriores no se presentan como actuales
- Comprueba la página oficial enlazada antes de confiar en un límite

**** [GitHub](https://github.com/Kilo-Org/kilocode) | [Documentación](https://kilocode.ai/docs/) | [Precios](https://kilocode.ai/pricing)

---

### [Warp](https://warp.dev/)

> **Warp Agent y BYOK**
- Plan Free: acceso limitado a agentes en la nube; la IA se detiene al alcanzar el límite
- Build desde $20/mes con 1.500 créditos ($20 de uso de agente incluido)
- Para personas y empresas de 10 o menos, BYOK/inferencia personalizada no consume créditos Warp
- El consumo depende del modelo, el contexto y la tarea

**** [Precios](https://www.warp.dev/pricing)

---

### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

> **Amazon Q Developer Free**
- Nivel gratuito permanente: 50 solicitudes agénticas/mes y 1.000 LOC de Java/mes
- Los límites de IDE están disponibles con Builder ID; IAM se controla por cuenta
- No se requiere tarjeta en la ruta gratuita con Builder ID; Pro requiere facturación AWS
- Pro cuesta $19/usuario/mes y ofrece límites mayores

**** [Precios](https://aws.amazon.com/q/developer/pricing/)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 2.000 completados y 50 solicitudes de chat al mes
- Incluye Copilot CLI y uso de agentes limitado; Free restringe la selección de modelos
- La página actual menciona Haiku 4.5, GPT-5 mini y otros
- No se requiere tarjeta de crédito

**** [Detalles de Planes](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Modo Agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)

---

### [Trae](https://trae.ai/)

> **Precios y límites actuales no verificados**
- La página oficial accesible no publica una tabla estable de cuotas o precios
- Los valores exactos anteriores no se presentan como actuales
- Comprueba la página oficial enlazada antes de confiar en un límite

**** [Precios](https://trae.ai/pricing) | [Documentación](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Precios y límites actuales no verificados**
- La página oficial accesible no publica una tabla estable de cuotas o precios
- Los valores exactos anteriores no se presentan como actuales
- Comprueba la página oficial enlazada antes de confiar en un límite

**** [Precios](https://windsurf.com/pricing)

---

### [Jules](https://jules.google/)

> **Acceso a Gemini 2.5 Pro**
- Gratis: 15 tareas en una ventana móvil de 24 horas y 3 simultáneas
- 3 tareas concurrentes
- Modelo Gemini 2.5 Pro
- Se requiere cuenta Gmail (mayores de 18 años)
- Límites de tareas se reinician en ventana móvil de 24 horas
- No se requiere tarjeta de crédito
- Nivel Pro ($19.99/mes): 100 tareas/día (5x límites)

**** [Límites de Uso](https://jules.google/docs/usage-limits/) | [Documentación](https://jules.google/docs/)

---

### [AWS Kiro](https://kiro.dev/)

> **AWS Kiro Free**
- Nivel gratuito permanente: 50 créditos/mes
- Claude Sonnet 4.5 y modelos de pesos abiertos con inicio social o Builder ID, sujetos a límites
- Pro $20/mes: 1.000 créditos; Pro+ $40: 2.000; Pro Max $100: 5.000; Power $200: 10.000
- Los planes de pago requieren tarjeta

**** [Precios](https://kiro.dev/pricing/) | [Blog de Introducción](https://kiro.dev/blog/introducing-kiro/)

---

### [Qoder](https://qoder.com/)

> **Precios y límites actuales no verificados**
- La página oficial accesible no publica una tabla estable de cuotas o precios
- Los valores exactos anteriores no se presentan como actuales
- Comprueba la página oficial enlazada antes de confiar en un límite

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

> **Precios y límites actuales no verificados**
- La página oficial accesible no publica una tabla estable de cuotas o precios
- Los valores exactos anteriores no se presentan como actuales
- Comprueba la página oficial enlazada antes de confiar en un límite

**** [Precios](https://www.cerebras.ai/pricing) | [Documentación API](https://inference-docs.cerebras.ai/) | [Guías de Integración](https://inference-docs.cerebras.ai/integrations/)

---

## 3. Herramientas con Niveles Pagos con Modelos de Grado Profesional


### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> **Rovo Dev Free**
- Gratis con planes Jira de pago: 350 créditos de Rovo Dev/usuario/mes/sitio
- El uso se detiene al alcanzar la cuota mensual
- La página de facturación actual no indica un modelo fijo para CLI
- No se requiere tarjeta para el complemento gratuito
- Standard: $20/usuario/mes con 2.000 créditos/usuario/mes

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

> **Amazon Q Developer Free**
- Nivel gratuito permanente: 50 solicitudes agénticas/mes y 1.000 LOC de Java/mes
- Los límites de IDE están disponibles con Builder ID; IAM se controla por cuenta
- No se requiere tarjeta en la ruta gratuita con Builder ID; Pro requiere facturación AWS
- Pro cuesta $19/usuario/mes y ofrece límites mayores

**** [Precios](https://aws.amazon.com/q/developer/pricing/)

---

### [Warp](https://warp.dev/)

> **Warp Agent y BYOK**
- Plan Free: acceso limitado a agentes en la nube; la IA se detiene al alcanzar el límite
- Build desde $20/mes con 1.500 créditos ($20 de uso de agente incluido)
- Para personas y empresas de 10 o menos, BYOK/inferencia personalizada no consume créditos Warp
- El consumo depende del modelo, el contexto y la tarea

**** [Precios](https://www.warp.dev/pricing)

---

### [GitHub Copilot](https://github.com/features/copilot/plans)

> **GitHub Copilot Free**
- 2.000 completados y 50 solicitudes de chat al mes
- Incluye Copilot CLI y uso de agentes limitado; Free restringe la selección de modelos
- La página actual menciona Haiku 4.5, GPT-5 mini y otros
- No se requiere tarjeta de crédito

**** [Detalles de Planes](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot) | [Vista previa GPT-5.1-Codex-Max](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)

---

### [Trae](https://trae.ai/)

> **Precios y límites actuales no verificados**
- La página oficial accesible no publica una tabla estable de cuotas o precios
- Los valores exactos anteriores no se presentan como actuales
- Comprueba la página oficial enlazada antes de confiar en un límite

**** [Precios](https://trae.ai/pricing) | [Documentación](https://docs.trae.ai/ide/billing)

---

### [Windsurf](https://windsurf.com/)

> **Precios y límites actuales no verificados**
- La página oficial accesible no publica una tabla estable de cuotas o precios
- Los valores exactos anteriores no se presentan como actuales
- Comprueba la página oficial enlazada antes de confiar en un límite

**** [Precios](https://windsurf.com/pricing)

---

### [Lovable](https://lovable.dev/)

> **Lovable usa ahora créditos**
- Free incluye 5 créditos diarios de construcción (hasta 30/mes), 20 créditos Cloud mensuales y 4 créditos de IA mensuales
- Los créditos y las concesiones tienen caducidades distintas; revisa la página oficial

**** [Pricing](https://lovable.dev/pricing)

---

### [Bolt.new](https://bolt.new/)

> **Free incluye un límite de 300.000 tokens diarios y 1 millón mensual**
- Pro empieza en 25 $/mes con 10 millones de tokens/mes; Teams en 30 $/miembro/mes
- Los tokens de pago se arrastran un mes mientras la suscripción siga activa

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Cursor](https://cursor.com/)

> **Cursor Free y planes de pago**
- Hobby es gratis, sin tarjeta, con Agent limitado y acceso a Composer
- Pro $20/mes; Pro+ $60; Ultra $200; Teams Standard $40/usuario/mes
- La promoción de GPT-5.1-Codex-Max hasta el 11 de diciembre de 2025 terminó y se eliminó
- El uso y los modelos dependen del plan

**** [Precios](https://cursor.com/en/pricing) | [Anuncio GPT-5.1-Codex-Max](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)

---

### [OpenAI Codex CLI](https://github.com/openai/codex)

> **Planes y facturación de API de Codex**
- Codex está incluido en Free (0 $), Go (8 $/mes), Plus (20 $/mes), Pro (desde 100 $/mes), Business (20 $/usuario anual o 25 $ mensual), Edu y Enterprise
- Las claves API se cobran por modelo; el uso local y cloud comparte las asignaciones del plan
- Los límites varían según la complejidad; consulta la página oficial

**** [Pricing](https://developers.openai.com/codex/pricing/) | [GitHub](https://github.com/openai/codex)

---

### [Codeium](https://codeium.com/)

> **Precios y límites actuales no verificados**
- La página oficial accesible no publica una tabla estable de cuotas o precios
- Los valores exactos anteriores no se presentan como actuales
- Comprueba la página oficial enlazada antes de confiar en un límite

**** [Precios](https://codeium.com/pricing)

---

### [Tabnine](https://www.tabnine.com/)

> **Planes de pago actuales de Tabnine**
- Code Assistant: 39 $/usuario/mes con facturación anual; Agentic Platform: 59 $/usuario/mes anual
- La página actual no anuncia un nivel gratuito
- Los LLM propios on-prem/cloud son ilimitados; los LLM de Tabnine cuestan el precio del proveedor más 5 % de gestión

**** [Pricing](https://www.tabnine.com/pricing/)

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
- Jules Pro con Google AI Pro: 100 tareas por 24 horas móviles y 15 simultáneas
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

> **Free incluye un límite de 300.000 tokens diarios y 1 millón mensual**
- Pro empieza en 25 $/mes con 10 millones de tokens/mes; Teams en 30 $/miembro/mes
- Los tokens de pago se arrastran un mes mientras la suscripción siga activa

**** [Pricing](https://bolt.new/pricing) | [Token documentation](https://support.bolt.new/faqs/account-and-subscription/tokens)

---

### [Lovable](https://lovable.dev/)

> **Lovable usa ahora créditos**
- Free incluye 5 créditos diarios de construcción (hasta 30/mes), 20 créditos Cloud mensuales y 4 créditos de IA mensuales
- Los créditos y las concesiones tienen caducidades distintas; revisa la página oficial

**** [Pricing](https://lovable.dev/pricing)

---

### [v0.dev](https://v0.dev/)

> **Free incluye 5 $ de créditos mensuales y 7 mensajes/día**
- Plus cuesta 30 $/usuario/mes con 30 $ de créditos; Business, 100 $/usuario/mes
- El uso se mide por tokens de entrada/salida convertidos en créditos

**** [Pricing](https://api2.v0.dev/pricing)

---

### [Codeium](https://codeium.com/)

> **Precios y límites actuales no verificados**
- La página oficial accesible no publica una tabla estable de cuotas o precios
- Los valores exactos anteriores no se presentan como actuales
- Comprueba la página oficial enlazada antes de confiar en un límite

**** [Precios](https://codeium.com/pricing) | [Documentación](https://codeium.com/docs)

---

### [Tabnine](https://www.tabnine.com/)

> **Planes de pago actuales de Tabnine**
- Code Assistant: 39 $/usuario/mes con facturación anual; Agentic Platform: 59 $/usuario/mes anual
- La página actual no anuncia un nivel gratuito
- Los LLM propios on-prem/cloud son ilimitados; los LLM de Tabnine cuestan el precio del proveedor más 5 % de gestión

**** [Pricing](https://www.tabnine.com/pricing/)

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
- **Diferentes tipos de límites**: Las herramientas usan varios sistemas de cuotas - solicitudes, tokens, créditos, chats - haciendo la comparación directa desafiante. Consulta la documentación para especificaciones.
- **Uso del mundo real**: El consumo real varía dramáticamente según el estilo de codificación, la complejidad de la tarea y la implementación de la herramienta.
- La página oficial accesible no publica una tabla estable de cuotas o precios
- La página oficial accesible no publica una tabla estable de cuotas o precios
- **Comparabilidad:** los resultados de SWE-bench usan condiciones distintas; ejecuciones paralelas, interactivas y únicas no son comparables directamente. Créditos, tokens, solicitudes, chats y tareas no deben convertirse en un ranking de generosidad.

---

## Recursos Relacionados

- [Coding with AI](https://coding-with-ai.dev/) - Técnicas prácticas y recursos para codificar con LLMs
- [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources) - Lista completa de APIs LLM gratuitas para construir integraciones personalizadas

---

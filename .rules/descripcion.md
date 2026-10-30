# ☢️ Project Spec: Pip-OS & RobCo Terminal Portfolio (Fallout 3 Theme)

> **Documento de Especificación de Producto y Directiva para Claude Code**  
> **Stack principal:** Astro + Tailwind CSS / Vanilla CSS + Lucide / Retro Icons  
> **Skills requeridas para Claude:** `taste-skill-impeccable` + `ui-ux-pro-max` (ejecución sinérgica obligatoria).

---

## 1. Directiva Principal para el Asistente (Prompt Inicial para Claude Code)

```markdown
Eres un Frontend Architect y Senior Creative Technologist. Tu objetivo es implementar la Fase 1 del portafolio personal interactivo con temática diegética inspirada en los terminales de RobCo Industries y el Pip-Boy 3000 de Fallout 3.

Debes activar y sincronizar rigurosamente las skills:
- `taste-skill-impeccable`: Cuidado maniático por la tipografía monospaciada, curvatura de pantalla CRT, efectos de fósforo verde monocromático, flicker, scanlines sutiles, microinteracciones táctiles y consistencia de diseño retrofuturista de 1950/2077.
- `ui-ux-pro-max`: Accesibilidad (WCAG AA donde sea viable, toggle para reducir movimiento), rendimiento impecable en Astro, jerarquía visual clara, navegación intuitiva para que un reclutador no se pierda ni sienta frustración por la temática.

El resultado final no debe verse como un disfraz barato de Fallout, sino como una pieza de ingeniería de software inmersiva, elegante y con estándar de producción.
```

---

## 2. Sistema de Diseño (Fallout 3 Aesthetic Guidelines)

### 2.1 Paleta de Color Monocromática (Green Phosphor CRT)
El tono verde característico de los terminales de la Capital Wasteland (*Fallout 3*):

*   **Phosphor Core (`#1bff80` / `#22ee77`):** Color de texto principal, alta luminosidad con sutil resplandor (`text-shadow`).
*   **Phosphor Glow (`#1bff8044` / `#00ff6633`):** Halo difuso en textos seleccionados y bordes.
*   **Phosphor Dim (`#0f7740` / `#0c5c32`):** Textos secundarios, comentarios de sistema, líneas divisoras.
*   **Terminal Surface Background (`#0a110d` a `#020503`):** Fondo negro con matiz verdoso muy oscuro y degradado radial simulando cristal abombado.
*   **Phosphor Accent Warning (`#a8e600` o `#ffb000` si se requiere alerta):** Para errores de terminal o tags especiales.

### 2.2 Tipografía
*   **Monospace Terminal:** `Share Tech Mono`, `VT323` o `Courier Prime`.
*   Propiedades: Tracking ampliado (`letter-spacing: 0.08em`), mayúsculas prominentes para comandos del sistema, interlineado ajustado.

### 2.3 Capas Visuales de Pantalla CRT (Shader CSS / Overlay)
1.  **Curvatura de Pantalla:** Viñeta radial oscura en las esquinas (`radial-gradient(circle, transparent 65%, rgba(0,0,0,0.85) 100%)`).
2.  **Líneas de Escaneo (Scanlines):** Patrón repetitivo de líneas horizontales de 1px semitransparentes (`rgba(0, 0, 0, 0.25)`).
3.  **Flicker & Glow:** Micro-parpadeo de iluminación casi imperceptible que emula un tubo de rayos catódicos real.
4.  **Botón de accesibilidad ("Tension de Tubo / CRT Switch"):** Opción flotante para desactivar scanlines y flicker si el usuario lo prefiere.

---

## 3. Alcance de la Fase 1: Hero Page & Terminal Inicial

La meta de la Fase 1 es consolidar la experiencia inicial sin abrumar al reclutador, asegurando un punto de anclaje perfecto para las siguientes vistas.

```
+--------------------------------------------------------------------------+
|  ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM (ROBCO-UOS) v4.0.1           |
|  COPYRIGHT 2077 ROBCO CORP.                                             |
+--------------------------------------------------------------------------+
|                                                                          |
|  [>] INICIALIZANDO SECUENCIA DE ARRANQUE...                              |
|  [>] MEMORIA: 64KB OK | PROTOCOLO PIP-BOY: ACTIVO                        |
|                                                                          |
|       =========================================================          |
|       >> BIENVENIDO A MI PORTAFOLIO // SISTEMA DE DESARROLLADOR <<       |
|       =========================================================          |
|                                                                          |
|  Seleccione una directiva de navegación con el teclado o el cursor:      |
|                                                                          |
|  [1] > PERFIL (PROFILE_DATA.EXE)                                         |
|  [2] > MIS PROYECTOS (PROJECTS_ARCHIVE.DAT)                              |
|  [3] > MIS CERTIFICACIONES (VERIFIED_CREDS.LOG)                          |
|  [4] > ACERCA DE MÍ (BIOGRAPHY_STREAM.TXT)                               |
|                                                                          |
|  ----------------------------------------------------------------------  |
|  [STATUS]: LISTO PARA INSPECCIÓN RECLUTADOR | PULSA [TAB] O CLIC EN OPCIÓN|
+--------------------------------------------------------------------------+
```

### 3.1 Flujo de Interacción Paso a Paso

1.  **Secuencia de Arranque (Boot Sequence - Duración: ~1.2s máx):**
    *   Sonido opcional (con switch de mute por defecto).
    *   Efecto de encendido de tubo CRT (expansión de una línea blanca/verde horizontal central hacia pantalla completa).
    *   Líneas rápidas de diagnóstico:
        *   `ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL`
        *   `CARGANDO MÓDULOS DE INGENIERÍA... [OK]`
        *   `VERIFICANDO ACCESO DE RECLUTADOR... CONCEDIDO.`
2.  **Mensaje de Bienvenida:**
    *   Efecto typewriter con cursor parpadeante (`█` o `_`).
    *   `BIENVENIDO A MI PORTAFOLIO`.
3.  **Hero Dashboard & Menú de Navegación Principal:**
    *   Presentación del nombre del profesional, rol (ej. *Fullstack Developer / Software Engineer*) y estado de disponibilidad (*STATUS: OPEN FOR RECRUITMENT*).
    *   Las 4 pestañas directivas retrofuturistas:
        *   `[01] PERFIL`
        *   `[02] MIS PROYECTOS`
        *   `[03] MIS CERTIFICACIONES`
        *   `[04] ACERCA DE MÍ`
    *   Efecto Hover: Sonido sutil de bip monocromático + inversión de color (texto negro con fondo verde fósforo brillante, tal como en las consolas de Fallout 3).
4.  **Mecanismo de Guía para el Reclutador:**
    *   Un asistente o indicador interactivo estilo "V.A.T.S." o pip-boy que resalta: *"Comience explorando [02] MIS PROYECTOS para ver casos de estudio reales"*.

---

## 4. Estructura de Componentes en Astro

```
src/
├── components/
│   ├── crt/
│   │   ├── CRTScreen.astro       # Contenedor con curvatura, scanlines y viñeta
│   │   ├── PhosphorText.astro    # Tipografía con text-shadow y flicker regulable
│   │   └── CRTControls.astro     # Toggle para apagar efectos / sonido
│   ├── terminal/
│   │   ├── BootSequence.astro    # Animación de arranque inicial con skipping al clic
│   │   ├── TerminalHeader.astro  # Header diegético (RobCo industries, memoria, versión)
│   │   └── NavTabs.astro         # Las 4 pestañas interactivas estilo terminal prompt
│   └── hero/
│       ├── HeroIntro.astro       # Nombre, titular técnico y bienvenida
│       └── SystemStatus.astro    # Indicador de estado para reclutadores
├── layouts/
│   └── TerminalLayout.astro      # Layout base con theme de Fallout 3
└── pages/
    └── index.astro               # Entrada Fase 1 (Boot + Hero + Selector)
```

---

## 5. Criterios de Aceptación (Fase 1)

1.  **Estética Fallout 3:** Pantalla con verde fósforo auténtico, sin desentonar con tipografías no monospaciadas ni degradados modernos incompatibles.
2.  **Rendimiento:** Cero layout shift (CLS = 0) durante la animación de terminal.
3.  **Accesibilidad del Reclutador:** El reclutador puede saltarse la animación de arranque haciendo un solo clic o presionando la barra espaciadora (`Skip Boot`).
4.  **Responsive:** En móviles, la interfaz del terminal se adapta simulando la pantalla de un Pip-Boy de muñeca vertical.
5.  **Extensibilidad a Fase 2:** El sistema de navegación por pestañas debe quedar listo para recibir los componentes de contenido (Grid de Proyectos, Certificados con look holotape, Bio interactiva).
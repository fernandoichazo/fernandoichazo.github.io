---
name: Pip-OS · Portafolio de Fernando Ichazo Cisneros
description: Una sesión de termlink RobCo en fósforo verde, leída de arriba abajo dentro de un tubo CRT.
colors:
  phosphor: "#1bff80"
  phosphor-glow: "#1bff8044"
  phosphor-soft: "#2fb36c"
  phosphor-dim: "#0f7740"
  phosphor-deep: "#0c5c32"
  surface-lift: "#0a110d"
  surface: "#060c08"
  status-bar: "#040805"
  void: "#020503"
  warning: "#ffb000"
  warning-glow: "#ffb00055"
  pipboy-housing: "#121810"
  housing-label: "#7d8f73"
typography:
  display:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "clamp(2.75rem, min(1.2rem + 5.6vw, 11vh), 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.02em"
  headline:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "clamp(1.625rem, 1.2rem + 1vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.06em"
  title:
    fontFamily: "Share Tech Mono, ui-monospace, monospace"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.08em"
  body:
    fontFamily: "Share Tech Mono, ui-monospace, monospace"
    fontSize: "clamp(1rem, 0.94rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.08em"
  label:
    fontFamily: "Share Tech Mono, ui-monospace, monospace"
    fontSize: "clamp(0.875rem, 0.82rem + 0.2vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.08em"
  rule:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  tube: "34px"
  tube-pipboy: "22px"
spacing:
  gutter: "clamp(1rem, 0.4rem + 3vw, 6rem)"
  tube-inset: "18px"
  tube-top: "18px"
  tube-inset-pipboy: "10px"
  tube-top-pipboy: "34px"
  row-x: "0.875rem"
components:
  menu-row:
    textColor: "{colors.phosphor}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.875rem"
    height: "46px"
  menu-row-active:
    backgroundColor: "{colors.phosphor}"
    textColor: "{colors.void}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.875rem"
    height: "46px"
  button-command:
    backgroundColor: "{colors.phosphor}"
    textColor: "{colors.void}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.875rem"
    height: "48px"
  button-command-hover:
    backgroundColor: "{colors.void}"
    textColor: "{colors.phosphor}"
  toggle:
    textColor: "{colors.phosphor-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0.75rem"
    height: "44px"
  toggle-hover:
    backgroundColor: "{colors.phosphor}"
    textColor: "{colors.void}"
  status-bar:
    backgroundColor: "{colors.status-bar}"
    textColor: "{colors.phosphor-soft}"
    typography: "{typography.label}"
  vats-guide:
    textColor: "{colors.warning}"
    typography: "{typography.label}"
    width: "19rem"
  skip-link:
    backgroundColor: "{colors.phosphor}"
    textColor: "{colors.void}"
    padding: "0.5rem 1rem"
---

# Design System: Pip-OS · Portafolio de Fernando Ichazo Cisneros

## Overview

**Creative North Star: "La sesión de termlink"**

El sitio no imita un terminal RobCo: es uno. Toda superficie es una sola columna de fósforo verde leída de arriba abajo, dentro de un tubo CRT de cristal abombado con viñeta, scanlines de 1px y un flicker casi imperceptible. No hay tarjetas, ni split de marketing, ni fotografía: la jerarquía se construye con tamaño de letra, tono de fósforo e inversión. El mundo está fijado por el brief del proyecto (Fallout 3, Capital Wasteland) y se ejecuta con contención: debe leerse como una pieza de ingeniería, no como un disfraz.

La densidad es la de una pantalla de sistema: texto en mayúsculas con tracking amplio, logs cortos, reglas de "=" como separadores y un menú numerado operable con teclado. El color es monocromático; el único segundo tono es el ámbar, reservado para la atención (la guía V.A.T.S., los avisos y el anillo de foco). La profundidad no viene de sombras sino de luz: el halo del fósforo, el degradado radial del cristal y el marco negro del tubo.

El movimiento es diegético y breve: encendido del tubo (~1.15s, omitible con clic, espacio, Enter o Escape, solo en la primera visita de la sesión), impresión de líneas escalonada, typewriter en la bienvenida, cursor parpadeante y un bip de onda cuadrada sintetizado (desactivado por defecto). Todo cede ante `prefers-reduced-motion`, `prefers-contrast: more` y el interruptor CRT.

**Key Characteristics:**
- Una sola columna de terminal; nunca rejillas de tarjetas.
- Fósforo verde monocromático con halo; ámbar solo para atención.
- Solo tipografía monoespaciada, todo en mayúsculas, peso 400.
- Resaltar = invertir el fósforo (verde sólido, texto en vacío).
- Capas CRT (scanlines, flicker, halo) con interruptor persistente.
- Tubo redondeado como única curva; la interfaz dentro es de esquinas rectas.

## Colors

Un monocromo de fósforo verde sobre un vacío con matiz verdoso, con un único acento ámbar de atención.

### Primary
- **Fósforo Núcleo** (`phosphor`): tinta principal de todo el texto, el cursor, el haz de encendido y el relleno de cualquier elemento invertido (fila activa del menú, botón de comando, interruptor en hover, selección de texto, skip link).
- **Halo de Fósforo** (`phosphor-glow`): solo como luz: `text-shadow` y `box-shadow` difusos alrededor del fósforo. Nunca como relleno ni texto.

### Secondary
- **Ámbar V.A.T.S.** (`warning`, con su halo `warning-glow`): la guía V.A.T.S. junto a la directiva recomendada, el aviso "MÓDULO EN PREPARACIÓN" y el anillo de foco de teclado (2px sólido, separación 3px).

### Neutral
- **Fósforo Tenue** (`phosphor-soft`): texto secundario: prompts, logs, nombres de archivo del menú, separadores "//", barra de estado, interruptores en reposo. Mantiene ≥6:1 sobre la superficie.
- **Fósforo Apagado** (`phosphor-dim`): solo elementos no textuales: reglas de "=" decorativas (`aria-hidden`) y el pulgar de la barra de desplazamiento.
- **Fósforo Profundo** (`phosphor-deep`): el filete superior de 2px de la barra de estado.
- **Cristal Iluminado** (`surface-lift`): centro del degradado radial del tubo.
- **Cristal** (`surface`): anillo medio del degradado y fondo del tubo apagado durante el encendido.
- **Consola** (`status-bar`): fondo opaco de la barra de estado fija, un paso sobre el vacío.
- **Vacío** (`void`): fondo del documento, borde exterior del degradado, marco del tubo, texto sobre fósforo invertido, `theme-color`.
- **Carcasa Pip-Boy** (`pipboy-housing`) y **Rótulo de Carcasa** (`housing-label`): solo en ≤720px, la carcasa que rodea el tubo y su serigrafía "ROBCO IND. · PIP-BOY 3000". Sin halo.

### Named Rules
**The Single Phosphor Rule.** Hay un solo color de tinta. La jerarquía se hace con tono (núcleo, tenue, apagado) y tamaño, nunca con un segundo verde o un azul de enlace.

**The Amber Is Attention Rule.** El ámbar aparece solo donde el sistema pide atención: la guía V.A.T.S., un aviso o el foco de teclado. Nunca decorativo, nunca para marca.

**The Dim Is Not Text Rule.** `phosphor-dim` y `phosphor-deep` no llevan texto legible; todo texto secundario usa `phosphor-soft`.

## Typography

**Display Font:** VT323 (con ui-monospace, monospace)
**Body Font:** Share Tech Mono (con ui-monospace, monospace)

**Character:** VT323 es el bitmap de la pantalla: titulares, menú y reglas. Share Tech Mono es la voz del sistema: logs, prompts, estado y cuerpo. Ambas autoalojadas con `@fontsource` y precargadas para evitar CLS.

### Hierarchy
- **Display** (VT323, 400, `--step-display`, 0.95): el `h1` de cada pantalla ("BIENVENIDO A MI PORTAFOLIO", el título del módulo). Con halo fuerte y `text-wrap: balance`.
- **Headline** (VT323, 400, 1.625→2rem, 1.2, tracking 0.06em): filas del menú de directivas y botón de comando.
- **Title** (Share Tech Mono, 400, `--step-1`): log del encendido y párrafo de cuerpo de módulo (máx. 60ch).
- **Body** (Share Tech Mono, 400, `--step-0`, 1.5): texto base del documento y el eco del prompt.
- **Label** (Share Tech Mono, 400, `--step--1`): prompts, logs de arranque, nombres de archivo, barra de estado, guía V.A.T.S.
- **Rule** (VT323, 1.5rem, tracking 0.2em): la línea de "=" que separa bloques, recortada al ancho de la columna (máx. 70rem).

### Named Rules
**The All-Caps Rule.** Todo el documento va en mayúsculas con tracking 0.08em (heredado del `body`). El display lo afina a 0.02em y el menú a 0.06em; nada vuelve a minúsculas.

**The One Weight Rule.** Todo es peso 400. El énfasis se hace con tamaño, tono, halo o inversión, nunca con negrita.

## Layout

Una columna de terminal alineada a la izquierda dentro del tubo. El tubo ocupa todo el viewport menos un marco (`tube-top`/`tube-inset`: 18px; en ≤720px, 34px arriba y 10px a los lados para dejar ver la carcasa Pip-Boy). Dentro, el contenido usa `gutter` horizontal fluido y un margen superior de `clamp(1.25rem, 4vh, 2.75rem)`; es flex en columna para que la barra de estado caiga al pie.

El ritmo vertical es fluido y ligado a la altura: los bloques (cabecera, hero, menú) se separan con `clamp(1rem, 5vh, 3rem)` y los sub-bloques con `clamp(0.75rem, 2.5vh, 1.25rem)`, para que la primera pantalla quepa entera en escritorio. Anchos máximos: reglas 70rem, menú 54rem, cuerpo 60ch.

Puntos de corte observados: 1240px (la guía V.A.T.S. pasa de flotar a la derecha de la fila a ir debajo de ella), 1100px (mensaje de estado medio), 720px (tubo Pip-Boy en carcasa), 640px (cabecera corta sin log, identidad apilada, filas del menú en dos columnas, barra de estado estática y mensaje corto).

## Elevation & Depth

Sin sombras de elevación. La profundidad es óptica: el tubo es un degradado radial (`surface-lift` → `surface` → `void`), oscurecido en las esquinas por una viñeta elíptica, cruzado por scanlines y enmarcado por un bezel fijo que recorta lo que se desplaza. Encima, la luz: el fósforo emite halo. Las capas CRT van por encima del contenido (`z-index` 20-22) con `pointer-events: none`.

### Shadow Vocabulary
- **Halo** (`--glow`: `0 0 6px var(--phosphor-glow)`): todo texto y el cursor, por defecto.
- **Halo fuerte** (`--glow-strong`: `0 0 16px var(--phosphor-glow), 0 0 2px var(--phosphor)`): titulares display.
- **Halo de inversión** (`0 0 18px var(--phosphor-glow)`): la fila activa del menú.
- **Halo ámbar** (`0 0 6px var(--warning-glow)`): texto V.A.T.S. y avisos.
- **Bezel** (`0 0 0 100vmax var(--void)`): máscara del marco del tubo; no es una sombra visible.

### Named Rules
**The Light Not Lift Rule.** Nada flota ni se proyecta. Un elemento destaca porque emite más luz o se invierte, no porque se eleve.

**The Switch Kills Glow Rule.** `data-crt="off"` y `prefers-contrast: more` anulan todos los halos y ocultan scanlines y flicker; el texto debe seguir siendo perfectamente legible sin ellos.

## Shapes

La única curva del sistema es el tubo: 34px de radio (22px en Pip-Boy), compartido por el cristal, las capas CRT, el bezel y la pantalla de encendido. Todo lo que vive dentro del tubo es rectangular y sin radio: filas invertidas, botones, interruptores, barra de estado. Los bordes son escasos y funcionales: el filete de 2px de la barra de estado, el anillo interior de 2px del botón de comando en hover y el corchete de mira V.A.T.S. (borde ámbar de 2px abierto a la derecha).

## Components

### Menú de directivas (firma)
Prompt RobCo con cuatro filas numeradas [1]-[4]: tecla, etiqueta con "> " y nombre de archivo a la derecha en Label `phosphor-soft`.
- **Shape:** rejilla `4.5rem 1fr auto`, sin radio, alto mínimo 46px.
- **Activa:** inversión de fósforo con halo de inversión. La fila recomendada ([2]) está invertida en reposo; cuando el cursor o el foco pasa a otra, solo esa queda invertida.
- **Interacción:** teclas 1-4 abren la directiva, flechas/Inicio/Fin mueven el foco, bip al entrar; el eco "> RUN ARCHIVO" aparece en el prompt inferior con cursor. `:active` desplaza la fila 4px a la derecha.
- **Móvil (≤640px):** dos columnas; el nombre de archivo baja bajo la etiqueta.

### Guía V.A.T.S.
Texto ámbar Label con halo ámbar, enmarcado por un corchete de mira a la izquierda. Flota a la derecha de la fila recomendada; por debajo de 1240px se coloca bajo ella.

### Botones
- **Comando** (p. ej. "[ESC] VOLVER AL MENÚ PRINCIPAL"): fósforo sólido, texto vacío, Headline VT323, alto mínimo 48px. Hover: se invierte a vacío con texto fósforo y anillo interior de 2px.
- **Interruptor** (CRT / SONIDO): texto `phosphor-soft` con estado ON/OFF en fósforo, alto mínimo 44px; hover y foco lo invierten. `aria-pressed` refleja el estado; la preferencia persiste en `localStorage`.
- **Foco:** anillo ámbar global de 2px con separación 3px en cualquier elemento enfocable.

### Navigation
La barra de estado es el pie fijo (sticky) de cada pantalla: `[STATUS]` en fósforo, mensaje en tres longitudes según el ancho, interruptores a la derecha, filete superior `phosphor-deep`. En ≤640px deja de ser sticky.

### Cabecera y log
Cabecera RobCo en Body (dos líneas; en móvil, la versión corta), seguida de tres líneas de log Label `phosphor-soft` con resultado en fósforo. Las pantallas de módulo omiten el log.

### Tubo CRT y encendido
El tubo envuelve todo el contenido. En la primera visita de la sesión, un haz horizontal de 2px se abre y llena la pantalla (~1.15s), se imprime un diagnóstico y luego cada línea de la página aparece con 70ms de escalonado (`print-line`). El cursor parpadea con `steps(1)` a 1.05s.

## Do's and Don'ts

### Do:
- **Do** construir cada pantalla nueva como una columna de terminal dentro de `TerminalLayout`, con cabecera, contenido y barra de estado.
- **Do** resaltar invirtiendo: fondo `phosphor`, texto `void`, sin `text-shadow`.
- **Do** usar `phosphor-soft` para todo texto secundario y reservar `phosphor-dim`/`phosphor-deep` para líneas y elementos no textuales.
- **Do** dar a todo elemento interactivo un alto mínimo de 44px y un estado de foco visible (anillo ámbar 2px).
- **Do** hacer que cada efecto (halo, scanlines, flicker, encendido, typewriter, bip) se apague con el interruptor CRT/SONIDO, `prefers-reduced-motion` o `prefers-contrast: more`.
- **Do** separar bloques con la regla de "=" en `phosphor-dim` y marcarla `aria-hidden`.

### Don't:
- **Don't** usar tarjetas, rejillas de tarjetas, fotografía de héroe ni el patrón "foto + titular + botones".
- **Don't** introducir tipografías proporcionales, negritas o texto en minúsculas.
- **Don't** usar el ámbar fuera de guía V.A.T.S., avisos y foco.
- **Don't** redondear elementos dentro del tubo; la curva pertenece solo al cristal.
- **Don't** usar sombras de elevación o desplazadas; la profundidad es luz y cristal.
- **Don't** usar iconos de librería ni emoji; los marcadores son texto de terminal (`[1]`, `[>]`, `>`, `//`).

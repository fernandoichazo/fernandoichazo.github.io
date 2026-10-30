---
name: Pip-OS · Portafolio de Fernando Ichazo Cisneros
description: Una sesión de termlink RobCo en fósforo verde, leída de arriba abajo en la pantalla de un Pip-Boy 3000.
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
  casing: "#4a4b33"
  casing-hi: "#6e6c4b"
  casing-lo: "#2a2b1d"
  casing-metal: "#8c8a66"
  casing-rubber: "#0b0c08"
  casing-lip: "#34352a"
  casing-recess: "#1f2016"
  casing-edge: "#5d5c40"
  casing-socket: "#1c1d14"
  casing-knurl: "#24251a"
  casing-cap: "#5b5a40"
  casing-cap-lo: "#2e2f21"
  casing-button: "#77754f"
  casing-shine: "#c4c1a0"
  casing-shine-dim: "#9a987a"
  casing-plate-ink: "#9a987a"
  led-core: "#c8ffdf"
typography:
  display:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "clamp(2.75rem, min(1.2rem + 5.6vw, var(--screen-h) * 0.11), 6rem)"
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
  plate:
    fontFamily: "Share Tech Mono, ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 400
    letterSpacing: "0.3em"
  plate-compact:
    fontFamily: "Share Tech Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0.24em"
rounded:
  none: "0px"
  tube: "30px"
  tube-compact: "20px"
  plate: "3px"
  slot: "5px"
  slot-compact: "4px"
  key: "10px"
  round: "50%"
spacing:
  gutter: "clamp(1rem, 0.4rem + 3vw, 6rem)"
  win-top: "56px"
  win-right: "clamp(72px, 10.3vw, 148px)"
  win-bottom: "64px"
  win-left: "56px"
  win-top-compact: "86px"
  win-right-compact: "22px"
  win-bottom-compact: "48px"
  win-left-compact: "14px"
  row-x: "0.875rem"
components:
  menu-row:
    textColor: "{colors.phosphor}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.875rem"
    height: "44px"
  menu-row-active:
    backgroundColor: "{colors.phosphor}"
    textColor: "{colors.void}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.875rem"
    height: "44px"
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
  frame-plate:
    backgroundColor: "{colors.casing-lo}"
    textColor: "{colors.casing-plate-ink}"
    typography: "{typography.plate}"
    rounded: "{rounded.plate}"
    padding: "3px 12px"
  frame-key:
    backgroundColor: "{colors.casing-button}"
    rounded: "{rounded.key}"
    height: "52px"
    width: "13.9vw"
  frame-screw:
    backgroundColor: "{colors.casing-metal}"
    rounded: "{rounded.round}"
    size: "22px"
  frame-led:
    backgroundColor: "{colors.phosphor}"
    rounded: "{rounded.round}"
    size: "20px"
---

# Design System: Pip-OS · Portafolio de Fernando Ichazo Cisneros

## Overview

**Creative North Star: "La sesión de termlink"**

El sitio no imita un terminal RobCo: es uno, y se lee en la pantalla de un Pip-Boy 3000. Toda superficie es una sola columna de fósforo verde leída de arriba abajo, dentro de un tubo CRT de cristal abombado con viñeta, scanlines de 1px y un flicker casi imperceptible. Alrededor del tubo, en todas las páginas, está el dispositivo: carcasa de metal pintado oliva, labio de goma, bisel hundido, tornillos, LED de encendido, la placa impresa "PIP-BOY 3000" y lo que asoma de las perillas, la rejilla y los botones, cortados por el encuadre. No hay tarjetas, ni split de marketing, ni fotografía: la jerarquía de la pantalla se construye con tamaño de letra, tono de fósforo e inversión. El mundo está fijado por el brief del proyecto (Fallout 3, Capital Wasteland) y se ejecuta con contención: debe leerse como una pieza de ingeniería, no como un disfraz.

La densidad es la de una pantalla de sistema: texto en mayúsculas con tracking amplio, logs cortos, reglas de "=" como separadores y un menú numerado operable con teclado. El color de la pantalla es monocromático; el único segundo tono es el ámbar, reservado para la atención (la guía V.A.T.S., los avisos y el anillo de foco). Dentro de la pantalla la profundidad no viene de sombras sino de luz: el halo del fósforo, el degradado radial del cristal y el bisel. El marco, en cambio, es hardware y tiene material: luz rasante arriba, desgaste con ruido, anillos de bisel y sombras cortas de piezas físicas.

El movimiento es diegético y breve. En la primera visita de la sesión, una intro de ~2.4s (omitible con clic, espacio, Enter o Escape, nunca con `prefers-reduced-motion`) sube el antebrazo con el Pip-Boy, gira la muñeca, enciende el LED y un haz de fósforo, y la cámara se acerca hasta encajar la pantalla en la ventana del marco. Luego la página se imprime línea a línea, la bienvenida se escribe con typewriter, el cursor parpadea y un bip de onda cuadrada sintetizado (desactivado por defecto) acompaña el menú. Todo cede ante `prefers-reduced-motion`, `prefers-contrast: more` y el interruptor CRT.

**Key Characteristics:**
- Una sola columna de terminal; nunca rejillas de tarjetas.
- Fósforo verde monocromático con halo; ámbar solo para atención.
- Solo tipografía monoespaciada, todo en mayúsculas, peso 400.
- Resaltar = invertir el fósforo (verde sólido, texto en vacío).
- Capas CRT (scanlines, flicker, halo) con interruptor persistente.
- La pantalla es de esquinas rectas dentro de un tubo redondeado; las curvas restantes son del hardware del marco.
- El marco Pip-Boy rodea todas las páginas; la ventana (`--win-*`) define el alto útil (`--screen-h`).

## Colors

Un monocromo de fósforo verde sobre un vacío con matiz verdoso, con un único acento ámbar de atención, enmarcado por una carcasa de metal pintado oliva que no emite luz.

### Primary
- **Fósforo Núcleo** (`phosphor`): tinta principal de todo el texto, el cursor, el haz de la intro y el relleno de cualquier elemento invertido (fila activa del menú, botón de comando, interruptor en hover, selección de texto, skip link). También es el cuerpo del LED de encendido del marco: la única luz del dispositivo es fósforo.
- **Halo de Fósforo** (`phosphor-glow`): solo como luz: `text-shadow` y `box-shadow` difusos alrededor del fósforo. Nunca como relleno ni texto.
- **Núcleo del LED** (`led-core`): el punto caliente del degradado radial del LED. Solo ahí.

### Secondary
- **Ámbar V.A.T.S.** (`warning`, con su halo `warning-glow`): la guía V.A.T.S. junto a la directiva recomendada, el aviso "MÓDULO EN PREPARACIÓN" y el anillo de foco de teclado (2px sólido, separación 3px).

### Neutral
- **Fósforo Tenue** (`phosphor-soft`): texto secundario: prompts, logs, nombres de archivo del menú, separadores "//", barra de estado, interruptores en reposo, aviso de omitir la intro. Mantiene ≥6:1 sobre la superficie (7.6:1 sobre `void`).
- **Fósforo Apagado** (`phosphor-dim`): solo elementos no textuales: reglas de "=" decorativas (`aria-hidden`), el pulgar de la barra de desplazamiento y el borde del degradado del LED.
- **Fósforo Profundo** (`phosphor-deep`): el filete superior de 2px de la barra de estado.
- **Cristal Iluminado** (`surface-lift`): centro del degradado radial del tubo.
- **Cristal** (`surface`): anillo medio del degradado.
- **Consola** (`status-bar`): fondo opaco de la barra de estado, un paso sobre el vacío.
- **Vacío** (`void`): borde exterior del degradado, fondo de la intro, texto sobre fósforo invertido.

### Carcasa Pip-Boy
La paleta del hardware: oliva desaturado (matiz ~105-113 en OKLCH, croma ≤0.055), siempre sin halo. Cada token tiene una pieza fija; no se reutilizan dentro de la pantalla.
- **Carcasa** (`casing`): el metal pintado que llena todo lo que no es ventana (anillo exterior del bisel, fondo de `.crt`) y el `theme-color` del documento.
- **Arista Clara** (`casing-hi`): estrías claras del aro de las perillas y el brillo de 1px bajo las ranuras de la rejilla.
- **Sombra de Carcasa** (`casing-lo`): fondo de la placa impresa, ranura de los tornillos y el canto inferior de los botones.
- **Metal** (`casing-metal`) con **Brillo** (`casing-shine`): cabeza de los tornillos, en degradado radial.
- **Goma** (`casing-rubber`), **Labio** (`casing-lip`), **Hueco** (`casing-recess`), **Canto** (`casing-edge`): los cuatro anillos del bisel, de dentro hacia fuera (10, 12, 30 y 32px; 5, 6, 12 y 13px en ≤720px).
- **Zócalo** (`casing-socket`): el aro del LED y el fondo de las ranuras de la rejilla.
- **Moleteado** (`casing-knurl`): estrías oscuras y aro exterior de las perillas.
- **Tapa** (`casing-cap`) y **Tapa Baja** (`casing-cap-lo`): la cara de las perillas y el pie del degradado de los botones.
- **Tecla** (`casing-button`): cara superior de los botones.
- **Brillo Tenue** (`casing-shine-dim`): centro de la tapa de las perillas y el filo de luz de 1px en el borde superior de los botones.
- **Tinta de Placa** (`casing-plate-ink`): el texto impreso "PIP-BOY 3000" sobre `casing-lo` (4.9:1). Mismo valor que `casing-shine-dim`, pero con rol propio: si uno cambia, el otro no lo sigue.

La ilustración de la intro (`PipBoyScene`) usa los mismos olivas para el dispositivo y añade, solo en el dibujo, la manga azul del traje de refugio, el puño amarillo y el guante oscuro con costuras verdes. Esos colores pertenecen a la escena y no son tokens.

### Named Rules
**The Single Phosphor Rule.** Hay un solo color de tinta en la pantalla. La jerarquía se hace con tono (núcleo, tenue, apagado) y tamaño, nunca con un segundo verde o un azul de enlace.

**The Amber Is Attention Rule.** El ámbar aparece solo donde el sistema pide atención: la guía V.A.T.S., un aviso o el foco de teclado. Nunca decorativo, nunca para marca.

**The Dim Is Not Text Rule.** `phosphor-dim` y `phosphor-deep` no llevan texto legible; todo texto secundario usa `phosphor-soft`.

**The Casing Does Not Glow Rule.** La carcasa es metal pintado: sus tokens nunca llevan halo ni aparecen dentro del tubo, y el fósforo solo aparece en el marco como el LED, la única fuente de luz del dispositivo.

## Typography

**Display Font:** VT323 (con ui-monospace, monospace)
**Body Font:** Share Tech Mono (con ui-monospace, monospace)

**Character:** VT323 es el bitmap de la pantalla: titulares, menú y reglas. Share Tech Mono es la voz del sistema: logs, prompts, estado y cuerpo, y también la serigrafía del dispositivo. Ambas autoalojadas con `@fontsource` y precargadas para evitar CLS.

### Hierarchy
- **Display** (VT323, 400, `--step-display`, 0.95): el `h1` de cada pantalla ("BIENVENIDO A MI PORTAFOLIO", el título del módulo). Se limita también por la altura de la ventana (`--screen-h` × 0.11). Con halo fuerte y `text-wrap: balance`.
- **Headline** (VT323, 400, 1.625→2rem, 1.2, tracking 0.06em): filas del menú de directivas y botón de comando.
- **Title** (Share Tech Mono, 400, `--step-1`): párrafo de cuerpo de módulo (máx. 60ch).
- **Body** (Share Tech Mono, 400, `--step-0`, 1.5): texto base del documento, la cabecera RobCo y el eco del prompt.
- **Label** (Share Tech Mono, 400, `--step--1`): prompts, logs de arranque, nombres de archivo, barra de estado, guía V.A.T.S., aviso de omitir la intro.
- **Rule** (VT323, 1.5rem, tracking 0.2em): la línea de "=" que separa bloques, recortada al ancho de la columna (máx. 70rem).
- **Plate** (Share Tech Mono, 400, 14px, tracking 0.3em; 13px y 0.24em en ≤720px): solo la placa impresa "PIP-BOY 3000" del marco. Es serigrafía del hardware, no texto de la interfaz: tamaño fijo en px porque es un objeto físico a escala del marco, sin halo y `aria-hidden`. La escena de la intro repite la misma placa.

### Named Rules
**The All-Caps Rule.** Todo el documento va en mayúsculas con tracking 0.08em (heredado del `body`). El display lo afina a 0.02em y el menú a 0.06em; la placa del marco lo abre a 0.3em. Nada vuelve a minúsculas.

**The One Weight Rule.** Todo es peso 400, incluida la placa. El énfasis se hace con tamaño, tono, halo o inversión, nunca con negrita.

**The Plate Is Hardware Rule.** Los 13-14px de la placa existen solo en la serigrafía del marco. Ningún texto de la pantalla baja de `--step--1`.

## Layout

El documento no se desplaza: `.crt` ocupa `100dvh` con `overflow: hidden`, pintado de `casing`, y deja libre una ventana definida por `--win-top`, `--win-right`, `--win-bottom` y `--win-left` (56px, `clamp(72px, 10.3vw, 148px)`, 64px y 56px). El lado derecho es más ancho porque ahí asoman las perillas y la rejilla; abajo asoman los botones. La pantalla (`.crt__content`) es el único contenedor de scroll, con `overscroll-behavior: contain` y una barra fina (`scrollbar-width: thin`, pulgar `phosphor-dim` sobre transparente) dentro del cristal. Su alto es `--screen-h` (`100dvh` menos la ventana superior e inferior), y todo el ritmo vertical se mide contra ese alto, no contra el viewport.

Dentro, el contenido es una columna alineada a la izquierda con `gutter` horizontal fluido y un margen superior de `clamp(1.25rem, --screen-h × 0.04, 2.75rem)`; es flex en columna para que la barra de estado caiga al pie. Los bloques (hero, menú) se separan con `clamp(1rem, --screen-h × 0.03, 3rem)` y los sub-bloques con `clamp(0.75rem, --screen-h × 0.02-0.025, 1.25-1.5rem)`, para que la primera pantalla quepa entera en escritorio. Anchos máximos: reglas 70rem, menú `min(54rem, 100% - 22rem)` (deja sitio a V.A.T.S.), cuerpo 60ch.

En ≤720px el Pip-Boy está girado 90°: la ventana pasa a 86px arriba, 22px a la derecha, 48px abajo y 14px a la izquierda, con `--tube-radius` de 20px. Perillas y rejilla asoman arriba, el LED, la placa y los dos tornillos inferiores van abajo, y los botones asoman por el borde derecho.

Puntos de corte observados: contenedor del menú ≤60rem (la guía V.A.T.S. pasa de flotar a la derecha de la fila a ir debajo, y el menú ocupa todo el ancho), 1100px (mensaje de estado medio), 720px (Pip-Boy girado), 640px (cabecera corta sin log, identidad apilada, filas del menú en dos columnas, barra de estado estática y mensaje corto), y alto ≤820px con ancho >640px (el log de arranque se oculta para que el menú quede sobre la barra de estado).

## Elevation & Depth

Dos regímenes. Dentro de la pantalla no hay sombras de elevación: la profundidad es óptica. El tubo es un degradado radial (`surface-lift` → `surface` → `void`, fijo al viewport), oscurecido en las esquinas por una viñeta elíptica, cruzado por scanlines y con el bisel por encima. Encima, la luz: el fósforo emite halo. Las capas CRT van por encima del contenido (`z-index` 20) con `pointer-events: none`.

El marco, en cambio, es un objeto físico (`z-index` 30-32, `aria-hidden`, sin puntero) y se modela con anillos sólidos y sombras cortas de pieza: el bisel son anillos `box-shadow` concéntricos que siguen `--tube-radius`, con una sombra interior que hunde el cristal; una capa de sombreado aplica luz rasante arriba, oscurecimiento en los bordes y ruido fractal de desgaste, recortada alrededor del bisel. La intro (`z-index` 40) va por encima de todo.

### Shadow Vocabulary
- **Halo** (`--glow`: `0 0 6px var(--phosphor-glow)`): todo texto y el cursor, por defecto.
- **Halo fuerte** (`--glow-strong`: `0 0 16px var(--phosphor-glow), 0 0 2px var(--phosphor)`): titulares display.
- **Halo de inversión** (`0 0 18px var(--phosphor-glow)`): la fila activa del menú.
- **Halo ámbar** (`0 0 6px var(--warning-glow)`): texto V.A.T.S. y avisos.
- **Bisel** (`inset 0 0 18px 6px rgb(0 0 0 / 0.65)` y anillos de 10/12/30/32px en `casing-rubber`, `casing-lip`, `casing-recess`, `casing-edge`, más `0 0 0 100vmax var(--casing)`): hunde el cristal y pinta la carcasa. En ≤720px: `inset 0 0 14px 4px` y anillos de 5/6/12/13px.
- **Halo del LED** (`0 0 0 4px var(--casing-socket), 0 0 14px 2px #1bff8088`): la única luz del marco.
- **Pieza** (perillas `-6px 8px 18px rgb(0 0 0 / 0.5)`, tornillos `0 1px 2px rgb(0 0 0 / 0.6)`): sombra de contacto de una pieza que sobresale de la carcasa.
- **Canto de tecla** (`0 4px 0 var(--casing-lo)` con filo `0 -1px 0 var(--casing-shine-dim) inset`): el lateral de los botones físicos, como en la ilustración.

### Named Rules
**The Light Not Lift Rule.** Dentro de la pantalla nada flota ni se proyecta. Un elemento destaca porque emite más luz o se invierte, no porque se eleve.

**The Hardware Has Mass Rule.** Las sombras de contacto, los anillos y los cantos existen solo en las piezas del marco y en la ilustración de la intro. Ningún elemento de la interfaz las hereda.

**The Switch Kills Glow Rule.** `data-crt="off"` y `prefers-contrast: more` anulan todos los halos y ocultan scanlines y flicker; el texto debe seguir siendo perfectamente legible sin ellos.

## Shapes

Dentro de la pantalla, la única curva es el tubo: `--tube-radius` 30px (20px en ≤720px), compartido por el cristal, las capas CRT y el bisel. Todo lo que vive dentro del tubo es rectangular y sin radio: filas invertidas, botones, interruptores, barra de estado. Los bordes son escasos y funcionales: el filete de 2px de la barra de estado, el anillo interior de 2px del botón de comando en hover y el corchete de mira V.A.T.S. (borde ámbar de 2px abierto a la derecha).

El marco tiene su propia geometría de hardware, con radios pequeños y fijos en px porque son piezas a escala del dispositivo: placa impresa de 3px, ranuras de la rejilla como píldoras de 5px (4px en ≤720px), teclas de 10px (igual que en la ilustración), y círculos completos para tornillos (22px, 16px en ≤720px), LED (20px, 16px) y perillas (360px y 170px; 300px y 150px en ≤720px). Las perillas llevan un aro estriado (`repeating-conic-gradient` de 3°) y los tornillos una ranura girada con ángulo propio. Las piezas aparecen cortadas por el borde del viewport: el encuadre es una cámara acercada, no un dispositivo entero.

## Components

### Menú de directivas (firma)
Prompt RobCo con cuatro filas numeradas [1]-[4]: tecla, etiqueta con "> " y nombre de archivo a la derecha en Label `phosphor-soft`.
- **Shape:** rejilla `4.5rem 1fr auto`, sin radio, alto mínimo 44px.
- **Activa:** inversión de fósforo con halo de inversión. La fila recomendada ([2]) está invertida en reposo; cuando el cursor o el foco pasa a otra, solo esa queda invertida.
- **Interacción:** teclas 1-4 abren la directiva, flechas/Inicio/Fin mueven el foco, bip al entrar; el eco "> RUN ARCHIVO" aparece en el prompt inferior con cursor. `:active` desplaza la fila 4px a la derecha.
- **Ancho:** responde al ancho de la pantalla del Pip-Boy (container query), no al del navegador.
- **Móvil (≤640px):** dos columnas; el nombre de archivo baja bajo la etiqueta.

### Guía V.A.T.S.
Texto ámbar Label con halo ámbar, enmarcado por un corchete de mira a la izquierda. Flota a la derecha de la fila recomendada; cuando el menú mide ≤60rem se coloca bajo ella.

### Botones
- **Comando** (p. ej. "[ESC] VOLVER AL MENÚ PRINCIPAL"): fósforo sólido, texto vacío, Headline VT323, alto mínimo 48px. Hover: se invierte a vacío con texto fósforo y anillo interior de 2px.
- **Interruptor** (CRT / SONIDO): texto `phosphor-soft` con estado ON/OFF en fósforo, alto mínimo 44px; hover y foco lo invierten. `aria-pressed` refleja el estado; la preferencia persiste en `localStorage`.
- **Foco:** anillo ámbar global de 2px con separación 3px en cualquier elemento enfocable.

### Navigation
La barra de estado es el pie de cada pantalla: `[STATUS]` en fósforo, mensaje en tres longitudes según el ancho, interruptores a la derecha, filete superior `phosphor-deep`. Por encima de 640px es sticky al pie de la pantalla (el contenedor de scroll), no de la página; en ≤640px es estática y va al final del contenido.

### Cabecera y log
Cabecera RobCo en Body (dos líneas; en móvil, la versión corta), seguida de tres líneas de log Label `phosphor-soft` con resultado en fósforo. Las pantallas de módulo omiten el log; en ventanas bajas (≤820px de alto) también se oculta.

### Tubo CRT
El tubo envuelve todo el contenido dentro de la ventana del marco y es el contenedor de scroll. Tras la intro (o directamente, si no corre), cada línea de la página aparece con 70ms de escalonado (`print-line`, 0.14s) a partir de `--boot-duration` (2.3s); si la intro se omite, todo aparece de inmediato. El cursor parpadea con `steps(1)` a 1.05s.

### Marco Pip-Boy (firma)
El dispositivo alrededor de la pantalla, en todas las páginas. Decorativo (`aria-hidden`, `pointer-events: none`, `position: fixed`), por encima del cristal.
- **Bisel:** anillos de goma, labio, hueco y canto que siguen `--tube-radius`; la carcasa llena el resto.
- **Sombreado:** luz cálida rasante arriba, oscurecimiento a los lados y abajo, ruido de desgaste; recortado alrededor del bisel.
- **Tornillos:** cuatro (dos en ≤720px, abajo), metal en degradado radial con ranura en `casing-lo`.
- **LED:** degradado `led-core` → `phosphor` → `phosphor-dim` en un zócalo de 4px, con halo verde.
- **Placa:** "PIP-BOY 3000" en Plate, `casing-plate-ink` sobre `casing-lo`, radio 3px, centrada sobre la ventana (arriba en escritorio, abajo en ≤720px).
- **Módulo de sintonía:** perilla grande, rejilla de tres ranuras y perilla menor, cortadas a la derecha (en ≤720px, arriba).
- **Teclas:** tres botones cortados por el borde inferior, repartidos con el ancho (en ≤720px, en el borde derecho).

### Intro del Pip-Boy (firma)
Solo en la portada, solo en la primera visita de la sesión (`sessionStorage`), nunca con `prefers-reduced-motion`. Una ilustración SVG original (`PipBoyScene`: antebrazo con manga azul de refugio, Pip-Boy oliva y puño enguantado, con puntos de animación `pb-*`) se anima con WAAPI:
- 0-0.7s: el antebrazo sube y gira hasta quedar de frente (`cubic-bezier(0.16, 1, 0.3, 1)`).
- 0.68-1.06s: giro seco de muñeca.
- 0.86s: LED y bip (660Hz); 0.9s: haz de fósforo que abre la pantalla; 1.1s: la pantalla se ilumina.
- 1.3-2.3s: la cámara se acerca hasta encajar el cristal de la ilustración en la ventana `--win-*` del marco (`cubic-bezier(0.65, 0, 0.35, 1)`).
- 2.15-2.4s: fundido al marco fijo.
- En ≤720px la escena gira -90° y el brazo sube en vertical, como el marco girado.
- Se omite con clic, espacio, Enter o Escape ("[ESPACIO] O CLIC PARA OMITIR" en Label `phosphor-soft`); una salida de seguridad CSS la oculta a los 4s si el script no corre.

## Do's and Don'ts

### Do:
- **Do** construir cada pantalla nueva como una columna de terminal dentro de `TerminalLayout`, con cabecera, contenido y barra de estado, dentro del marco Pip-Boy.
- **Do** medir el ritmo vertical y los tamaños dependientes de la altura contra `--screen-h`, no contra `100vh`/`100dvh`.
- **Do** resaltar invirtiendo: fondo `phosphor`, texto `void`, sin `text-shadow`.
- **Do** usar `phosphor-soft` para todo texto secundario y reservar `phosphor-dim`/`phosphor-deep` para líneas y elementos no textuales.
- **Do** dar a todo elemento interactivo un alto mínimo de 44px y un estado de foco visible (anillo ámbar 2px).
- **Do** hacer que cada efecto (halo, scanlines, flicker, intro, typewriter, bip) se apague con el interruptor CRT/SONIDO, `prefers-reduced-motion` o `prefers-contrast: more`.
- **Do** separar bloques con la regla de "=" en `phosphor-dim` y marcarla `aria-hidden`.
- **Do** pintar las piezas del marco solo con los tokens `casing-*`, cada uno en su pieza, y mantener el marco `aria-hidden` y sin puntero.

### Don't:
- **Don't** usar tarjetas, rejillas de tarjetas, fotografía de héroe ni el patrón "foto + titular + botones".
- **Don't** introducir tipografías proporcionales, negritas o texto en minúsculas.
- **Don't** usar el ámbar fuera de guía V.A.T.S., avisos y foco.
- **Don't** redondear elementos dentro del tubo; dentro de la pantalla la curva pertenece solo al cristal.
- **Don't** usar sombras de elevación o desplazadas en la interfaz de la pantalla; la profundidad ahí es luz y cristal. Las sombras de pieza son solo del marco.
- **Don't** usar tokens `casing-*` ni el tamaño de la placa dentro de la pantalla.
- **Don't** hacer que la página se desplace; el scroll vive en la pantalla.
- **Don't** usar iconos de librería ni emoji; los marcadores son texto de terminal (`[1]`, `[>]`, `>`, `//`).

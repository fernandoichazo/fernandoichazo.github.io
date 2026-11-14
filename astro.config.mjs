// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://fernandoichazo.github.io",
    // Precarga las páginas enlazadas en cuanto aparecen en pantalla: al pulsar un botón el
    // documento ya está en caché y la View Transition (src/styles/transitions.css) arranca sin esperar a la red.
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport'
    }
});

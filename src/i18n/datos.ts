// Contenido de src/data/<idioma>/ visto desde los servicios.
import { IDIOMA_POR_DEFECTO, type Idioma } from './config';

/** Un mismo archivo en cada idioma. El idioma por defecto es obligatorio; los demás pueden faltar. */
export type PorIdioma<T> = Record<typeof IDIOMA_POR_DEFECTO, T> & Partial<Record<Idioma, T>>;

/** Versión del idioma pedido; si aún no está traducida, la del idioma por defecto. */
export function enIdioma<T>(datos: PorIdioma<T>, idioma: Idioma): T {
  return datos[idioma] ?? datos[IDIOMA_POR_DEFECTO];
}

/** Recorre cada idioma presente (para validaciones de build). */
export function cadaIdioma<T>(datos: PorIdioma<T>): [Idioma, T][] {
  return Object.entries(datos) as [Idioma, T][];
}

/**
 * Las traducciones de una lista deben tener los mismos ids que el idioma por defecto:
 * si alguien agrega o borra un elemento en un solo idioma, el build se detiene.
 */
export function verificarIds(archivo: string, datos: PorIdioma<{ id: string }[]>): void {
  const base = datos[IDIOMA_POR_DEFECTO].map((item) => item.id).sort();
  for (const [idioma, lista] of cadaIdioma(datos)) {
    const ids = lista.map((item) => item.id).sort();
    if (ids.join('|') !== base.join('|')) {
      throw new Error(
        `${archivo}: los ids en "${idioma}" [${ids.join(', ')}] no coinciden con "${IDIOMA_POR_DEFECTO}" [${base.join(', ')}].`,
      );
    }
  }
}

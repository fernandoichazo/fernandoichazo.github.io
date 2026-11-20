// URLs por idioma: /<idioma>/ para el menú y /<idioma>/<slug traducido> para cada directiva.
import { directives, type DirectivaId } from '@data/site';
import { IDIOMAS, type Idioma } from './config';

/** Identifica una pantalla sin importar el idioma; sirve para saltar a su equivalente. */
export type Pagina = 'inicio' | DirectivaId;

export function rutaDe(idioma: Idioma, pagina: Pagina): string {
  if (pagina === 'inicio') return `/${idioma}/`;
  const directiva = directives.find((item) => item.id === pagina);
  if (!directiva) throw new Error(`Directiva desconocida: "${pagina}".`);
  return `/${idioma}/${directiva.slugs[idioma]}`;
}

/** La misma pantalla en cada idioma (selector y <link rel="alternate" hreflang>). */
export function alternativasDe(pagina: Pagina): Record<Idioma, string> {
  return Object.fromEntries(IDIOMAS.map((idioma) => [idioma, rutaDe(idioma, pagina)])) as Record<Idioma, string>;
}

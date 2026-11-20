// URLs por idioma: /<idioma>/ para el menú, /<idioma>/<slug traducido> para cada directiva
// y /<idioma>/<slug de proyectos>/<id> para el detalle de un proyecto.
import { directives, type DirectivaId } from '@data/site';
import { IDIOMAS, type Idioma } from './config';

/**
 * Identifica una pantalla sin importar el idioma; sirve para saltar a su equivalente.
 * El detalle de un proyecto se escribe "proyecto:<id>".
 */
export type Pagina = 'inicio' | DirectivaId | `proyecto:${string}`;

/** Pagina del detalle de un proyecto. */
export const paginaProyecto = (id: string): Pagina => `proyecto:${id}`;

function slugDe(idioma: Idioma, id: DirectivaId): string {
  const directiva = directives.find((item) => item.id === id);
  if (!directiva) throw new Error(`Directiva desconocida: "${id}".`);
  return directiva.slugs[idioma];
}

export function rutaDe(idioma: Idioma, pagina: Pagina): string {
  if (pagina === 'inicio') return `/${idioma}/`;
  if (pagina.startsWith('proyecto:')) {
    return `/${idioma}/${slugDe(idioma, 'proyectos')}/${pagina.slice('proyecto:'.length)}`;
  }
  return `/${idioma}/${slugDe(idioma, pagina as DirectivaId)}`;
}

/** La misma pantalla en cada idioma (selector y <link rel="alternate" hreflang>). */
export function alternativasDe(pagina: Pagina): Record<Idioma, string> {
  return Object.fromEntries(IDIOMAS.map((idioma) => [idioma, rutaDe(idioma, pagina)])) as Record<Idioma, string>;
}

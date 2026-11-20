// Punto de entrada de i18n: diccionario de interfaz, idioma de la página actual, rutas y datos por idioma.
import { en, type Diccionario } from './en';
import { es } from './es';
import { esIdioma, IDIOMAS, type Idioma } from './config';

export * from './config';
export * from './rutas';
export * from './datos';
export type { Diccionario } from './en';

const diccionarios: Record<Idioma, Diccionario> = { es, en };

export function traducir(idioma: Idioma): Diccionario {
  return diccionarios[idioma];
}

/** Idioma de la página que se está renderizando, tomado del parámetro [lang] de la ruta. */
export function idiomaDe(astro: { params: Record<string, string | undefined> }): Idioma {
  const { lang } = astro.params;
  if (!esIdioma(lang)) throw new Error(`Ruta sin idioma válido: "${lang}". Esperado uno de ${IDIOMAS.join(', ')}.`);
  return lang;
}

/** getStaticPaths de las rutas que solo dependen del idioma. */
export function rutasPorIdioma() {
  return IDIOMAS.map((lang) => ({ params: { lang } }));
}

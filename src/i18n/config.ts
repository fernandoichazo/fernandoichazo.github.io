// Idiomas del portafolio. Para sumar uno: agrégalo aquí, crea su diccionario en src/i18n/
// y (opcionalmente) su carpeta src/data/<idioma>/; el contenido que falte cae al idioma por defecto.

export const IDIOMAS = ['es', 'en'] as const;
export type Idioma = (typeof IDIOMAS)[number];

/** Se muestra cuando el navegador no pide ninguno de los idiomas contemplados. */
export const IDIOMA_POR_DEFECTO = 'en' satisfies Idioma;

/** Nombre de cada idioma en su propia lengua (accesibilidad del selector). */
export const NOMBRES_NATIVOS: Record<Idioma, string> = {
  es: 'Español',
  en: 'English',
};

/** Clave de localStorage con la elección manual del visitante; gana sobre el idioma del navegador. */
export const CLAVE_IDIOMA = 'pipos:lang';

export function esIdioma(valor: unknown): valor is Idioma {
  return typeof valor === 'string' && (IDIOMAS as readonly string[]).includes(valor);
}

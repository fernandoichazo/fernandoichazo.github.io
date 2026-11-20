// Contenido centralizado que no depende del idioma.
// Los textos traducibles (etiquetas, log de arranque, guía V.A.T.S.) viven en src/i18n/.
import type { Idioma } from '@i18n/config';

// Nombre y cargo viven en src/data/<idioma>/perfil/personal.json (vía PersonalService).
export const availability = {
  status: 'OPEN FOR RECRUITMENT',
} as const;

// Texto diegético de RobCo: se mantiene en inglés en todos los idiomas.
export const system = {
  os: 'ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM (ROBCO-UOS) v4.0.1',
  osShort: 'ROBCO-UOS v4.0.1', // cabecera en la pantalla de Pip-Boy (móvil)
  copyright: 'COPYRIGHT 2075-2077 ROBCO INDUSTRIES',
} as const;

export type DirectivaId = 'perfil' | 'proyectos' | 'certificaciones' | 'acerca-de-mi';

export interface Directive {
  id: DirectivaId;
  key: '1' | '2' | '3' | '4';
  /** Segmento de URL en cada idioma: /es/perfil, /en/profile. */
  slugs: Record<Idioma, string>;
  file: string;
  recommended?: boolean;
}

// Las 4 directivas de navegación. Su etiqueta visible está en el diccionario (directivas.<id>).
// Todas se generan en src/pages/[lang]/[directiva].astro, que elige la pantalla de cada una.
export const directives: Directive[] = [
  { id: 'perfil', key: '1', slugs: { es: 'perfil', en: 'profile' }, file: 'PROFILE_DATA.EXE' },
  {
    id: 'proyectos',
    key: '2',
    slugs: { es: 'proyectos', en: 'projects' },
    file: 'PROJECTS_ARCHIVE.DAT',
    recommended: true,
  },
  { id: 'certificaciones', key: '3', slugs: { es: 'certificaciones', en: 'certifications' }, file: 'VERIFIED_CREDS.LOG' },
  { id: 'acerca-de-mi', key: '4', slugs: { es: 'acerca-de-mi', en: 'about-me' }, file: 'BIOGRAPHY_STREAM.TXT' },
];

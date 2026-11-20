// Certificaciones y reconocimientos. Única puerta de acceso a src/data/<idioma>/perfil/logros.json;
// también lo reutilizará la directiva [3] MIS CERTIFICACIONES.
import type { ImageMetadata } from 'astro';
import type { Logro } from '@interfaces/perfil';
import { enIdioma, verificarIds, type Idioma, type PorIdioma } from '@i18n';
import { resolverImagen } from '@lib/imagenes';
import logrosEs from '@data/es/perfil/logros.json';
import logrosEn from '@data/en/perfil/logros.json';

const logros: PorIdioma<Logro[]> = { es: logrosEs, en: logrosEn };

verificarIds('perfil/logros.json', logros);

/** Más reciente primero; los que no tienen año, al final. */
const porAnioDesc = (a: Logro, b: Logro) => {
  if (a.anio === b.anio) return 0;
  if (a.anio === null) return 1;
  if (b.anio === null) return -1;
  return b.anio.localeCompare(a.anio);
};

export const LogroService = {
  async getAll(idioma: Idioma): Promise<Logro[]> {
    return [...enIdioma(logros, idioma)].sort(porAnioDesc);
  },

  async getByTipo(idioma: Idioma, tipo: string): Promise<Logro[]> {
    return enIdioma(logros, idioma)
      .filter((logro) => logro.tipo === tipo)
      .sort(porAnioDesc);
  },

  async getTipos(idioma: Idioma): Promise<string[]> {
    return [...new Set(enIdioma(logros, idioma).map((logro) => logro.tipo))];
  },

  /** Imagen del logro desde src/images/logros/, o null si no tiene. */
  async getImagen(logro: Logro): Promise<ImageMetadata | null> {
    return resolverImagen('logros', logro.imagen);
  },
};

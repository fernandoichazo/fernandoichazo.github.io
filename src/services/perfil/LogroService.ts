// Certificaciones y reconocimientos. Única puerta de acceso a logros.json;
// también lo reutilizará la directiva [3] MIS CERTIFICACIONES.
import type { ImageMetadata } from 'astro';
import type { Logro } from '@interfaces/perfil';
import { resolverImagen } from '@lib/imagenes';
import logrosJson from '@data/perfil/logros.json';

const logros: Logro[] = logrosJson;

/** Más reciente primero; los que no tienen año, al final. */
const porAnioDesc = (a: Logro, b: Logro) => {
  if (a.anio === b.anio) return 0;
  if (a.anio === null) return 1;
  if (b.anio === null) return -1;
  return b.anio.localeCompare(a.anio);
};

export const LogroService = {
  async getAll(): Promise<Logro[]> {
    return [...logros].sort(porAnioDesc);
  },

  async getByTipo(tipo: string): Promise<Logro[]> {
    return logros.filter((logro) => logro.tipo === tipo).sort(porAnioDesc);
  },

  async getTipos(): Promise<string[]> {
    return [...new Set(logros.map((logro) => logro.tipo))];
  },

  /** Imagen del logro desde src/images/logros/, o null si no tiene. */
  async getImagen(logro: Logro): Promise<ImageMetadata | null> {
    return resolverImagen('logros', logro.imagen);
  },
};

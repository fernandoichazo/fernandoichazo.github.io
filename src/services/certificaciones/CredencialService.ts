// Certificaciones, competencias, cursos e idiomas. Única puerta de acceso a
// src/data/<idioma>/certificaciones/credenciales.json.
import type { ImageMetadata } from 'astro';
import type {
  CategoriaCredencial,
  Credencial,
  CredencialDetalle,
  EstadoCredencial,
} from '@interfaces/certificaciones';
import { HabilidadService } from '@services/perfil';
import { cadaIdioma, enIdioma, verificarIds, type Idioma, type PorIdioma } from '@i18n';
import { fechaVencida } from '@lib/fechas';
import { resolverImagen } from '@lib/imagenes';
import credencialesEs from '@data/es/certificaciones/credenciales.json';
import credencialesEn from '@data/en/certificaciones/credenciales.json';

// El JSON infiere `categoria` como string; la interfaz la acota a la unión.
const credenciales: PorIdioma<Credencial[]> = {
  es: credencialesEs as Credencial[],
  en: credencialesEn as Credencial[],
};

verificarIds('certificaciones/credenciales.json', credenciales);

// Toda certificación necesita su progreso (100 si está terminada) y debe estar entre 0 y 100.
for (const [idioma, lista] of cadaIdioma(credenciales)) {
  for (const credencial of lista) {
    const { progreso } = credencial;
    if (credencial.categoria === 'certificacion' && progreso === null) {
      throw new Error(`${idioma}/certificaciones/credenciales.json: "${credencial.id}" es una certificación sin "progreso".`);
    }
    if (progreso !== null && (progreso < 0 || progreso > 100)) {
      throw new Error(`${idioma}/certificaciones/credenciales.json: "${credencial.id}" tiene progreso ${progreso} (0-100).`);
    }
  }
}

/** ¿Sigue en curso? (progreso definido y menor a 100). */
const enCurso = (credencial: Credencial) => credencial.progreso !== null && credencial.progreso < 100;

/** Terminadas antes que en curso; destacadas primero; después la más reciente; sin fecha al final. */
const porRelevancia = (a: Credencial, b: Credencial) => {
  if (enCurso(a) !== enCurso(b)) return enCurso(a) ? 1 : -1;
  if (enCurso(a) && enCurso(b)) return (b.progreso ?? 0) - (a.progreso ?? 0);
  if (a.destacado !== b.destacado) return a.destacado ? -1 : 1;
  if (a.emision === b.emision) return 0;
  if (a.emision === null) return 1;
  if (b.emision === null) return -1;
  return b.emision.localeCompare(a.emision);
};

function estadoDe(credencial: Credencial): EstadoCredencial {
  if (enCurso(credencial)) return 'en-progreso';
  if (credencial.expiracion && fechaVencida(credencial.expiracion)) return 'expirada';
  return credencial.url ? 'verificada' : 'sin-enlace';
}

async function detallar(idioma: Idioma, lista: Credencial[]): Promise<CredencialDetalle[]> {
  const habilidades = await HabilidadService.getAll(idioma);
  const nombres = new Map(habilidades.map((habilidad) => [habilidad.id, habilidad.nombre]));
  return lista.map((credencial) => ({
    ...credencial,
    estado: estadoDe(credencial),
    // Integridad referencial: una habilidad inexistente detiene el build.
    nombresHabilidades: credencial.habilidades.map((id) => {
      const nombre = nombres.get(id);
      if (!nombre) {
        throw new Error(
          `${idioma}/certificaciones/credenciales.json: "${credencial.id}" usa la habilidad "${id}", que no existe en perfil/habilidades.json.`,
        );
      }
      return nombre;
    }),
  }));
}

export const CredencialService = {
  async getAll(idioma: Idioma): Promise<CredencialDetalle[]> {
    return detallar(idioma, [...enIdioma(credenciales, idioma)].sort(porRelevancia));
  },

  async getByCategoria(idioma: Idioma, categoria: CategoriaCredencial): Promise<CredencialDetalle[]> {
    const lista = enIdioma(credenciales, idioma).filter((credencial) => credencial.categoria === categoria);
    return detallar(idioma, lista.sort(porRelevancia));
  },


  /** Imagen de la credencial desde src/images/certificaciones/, o null si no tiene. */
  async getImagen(credencial: Credencial): Promise<ImageMetadata | null> {
    return resolverImagen('certificaciones', credencial.imagen);
  },
};

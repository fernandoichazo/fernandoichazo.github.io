// Certificaciones, competencias, cursos e idiomas. Única puerta de acceso a
// src/data/<idioma>/certificaciones/credenciales.json.
import type { ImageMetadata } from 'astro';
import type {
  CategoriaCredencial,
  Credencial,
  CredencialDetalle,
  EstadoCredencial,
  ResumenCredenciales,
} from '@interfaces/certificaciones';
import { HabilidadService } from '@services/perfil';
import { enIdioma, verificarIds, type Idioma, type PorIdioma } from '@i18n';
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

/** Destacadas primero; después la más reciente; sin fecha al final. */
const porRelevancia = (a: Credencial, b: Credencial) => {
  if (a.destacado !== b.destacado) return a.destacado ? -1 : 1;
  if (a.emision === b.emision) return 0;
  if (a.emision === null) return 1;
  if (b.emision === null) return -1;
  return b.emision.localeCompare(a.emision);
};

function estadoDe(credencial: Credencial): EstadoCredencial {
  if (credencial.categoria === 'en-progreso') return 'en-progreso';
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

  async getResumen(idioma: Idioma): Promise<ResumenCredenciales> {
    const todas = await this.getAll(idioma);
    const de = (...categorias: CategoriaCredencial[]) => todas.filter((c) => categorias.includes(c.categoria));
    const credenciales = de('certificacion', 'idioma');
    const cursos = de('curso');
    const fechas = todas
      .filter((c) => c.categoria !== 'en-progreso' && c.emision !== null)
      .map((c) => c.emision as string)
      .sort();
    return {
      credenciales: credenciales.length,
      verificadas: credenciales.filter((c) => c.estado === 'verificada').length,
      competencias: de('competencia').length,
      cursos: cursos.length,
      horasCursos: cursos.reduce((total, c) => total + (c.horas ?? 0), 0),
      enProgreso: de('en-progreso').length,
      ultima: fechas.at(-1) ?? null,
    };
  },

  /** Imagen de la credencial desde src/images/certificaciones/, o null si no tiene. */
  async getImagen(credencial: Credencial): Promise<ImageMetadata | null> {
    return resolverImagen('certificaciones', credencial.imagen);
  },
};

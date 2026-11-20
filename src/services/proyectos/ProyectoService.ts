// Proyectos y sus categorías. Única puerta de acceso a proyectos.json y categorias.json
// de src/data/<idioma>/proyectos/.
import type { ImageMetadata } from 'astro';
import type {
  CategoriaProyecto,
  Proyecto,
  ProyectoDetalle,
  ResumenProyectos,
} from '@interfaces/proyectos';
import { cadaIdioma, enIdioma, verificarIds, IDIOMA_POR_DEFECTO, type Idioma, type PorIdioma } from '@i18n';
import { resolverImagen } from '@lib/imagenes';
import proyectosEs from '@data/es/proyectos/proyectos.json';
import categoriasEs from '@data/es/proyectos/categorias.json';
import proyectosEn from '@data/en/proyectos/proyectos.json';
import categoriasEn from '@data/en/proyectos/categorias.json';

// El JSON infiere `estado` como string; la interfaz lo acota a la unión.
const proyectos: PorIdioma<Proyecto[]> = {
  es: proyectosEs as Proyecto[],
  en: proyectosEn as Proyecto[],
};
const categorias: PorIdioma<CategoriaProyecto[]> = { es: categoriasEs, en: categoriasEn };

verificarIds('proyectos/proyectos.json', proyectos);
verificarIds('proyectos/categorias.json', categorias);

// El id es el segmento de URL del detalle: minúsculas, números y guiones.
const ID_VALIDO = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Integridad referencial: una categoría inexistente o un id inválido detienen el build.
for (const [idioma, lista] of cadaIdioma(proyectos)) {
  const categoriasIdioma = enIdioma(categorias, idioma);
  for (const proyecto of lista) {
    if (!ID_VALIDO.test(proyecto.id)) {
      throw new Error(
        `${idioma}/proyectos/proyectos.json: el id "${proyecto.id}" no sirve como URL (usa minúsculas, números y guiones).`,
      );
    }
    if (!categoriasIdioma.some((categoria) => categoria.id === proyecto.categoriaId)) {
      throw new Error(
        `${idioma}/proyectos/proyectos.json: "${proyecto.id}" usa la categoría "${proyecto.categoriaId}", que no existe en proyectos/categorias.json.`,
      );
    }
  }
}

const PESO_ESTADO = { online: 0, desarrollo: 1, archivado: 2 } as const;

/** Destacados primero; luego online > en desarrollo > archivado; después el más reciente. */
const porRelevancia = (a: Proyecto, b: Proyecto) => {
  if (a.destacado !== b.destacado) return a.destacado ? -1 : 1;
  if (a.estado !== b.estado) return PESO_ESTADO[a.estado] - PESO_ESTADO[b.estado];
  return b.fecha.localeCompare(a.fecha);
};

/** Solo por fecha, el más reciente primero (archivo completo). */
const porFecha = (a: Proyecto, b: Proyecto) => b.fecha.localeCompare(a.fecha);

function detallar(idioma: Idioma, lista: Proyecto[]): ProyectoDetalle[] {
  const nombres = new Map(enIdioma(categorias, idioma).map((categoria) => [categoria.id, categoria.nombre]));
  return lista.map((proyecto) => ({ ...proyecto, nombreCategoria: nombres.get(proyecto.categoriaId)! }));
}

export const ProyectoService = {
  async getAll(idioma: Idioma): Promise<ProyectoDetalle[]> {
    return detallar(idioma, [...enIdioma(proyectos, idioma)].sort(porRelevancia));
  },

  async getDestacados(idioma: Idioma): Promise<ProyectoDetalle[]> {
    return detallar(idioma, enIdioma(proyectos, idioma).filter((p) => p.destacado).sort(porRelevancia));
  },

  /** Los que no son destacados, del más reciente al más antiguo. */
  async getArchivo(idioma: Idioma): Promise<ProyectoDetalle[]> {
    return detallar(idioma, enIdioma(proyectos, idioma).filter((p) => !p.destacado).sort(porFecha));
  },

  /** Categorías en el orden del JSON; con `soloCon`, solo las que tienen algún proyecto de esa lista. */
  async getCategorias(idioma: Idioma, soloCon?: Proyecto[]): Promise<CategoriaProyecto[]> {
    const lista = enIdioma(categorias, idioma);
    if (!soloCon) return [...lista];
    const usadas = new Set(soloCon.map((proyecto) => proyecto.categoriaId));
    return lista.filter((categoria) => usadas.has(categoria.id));
  },

  async getResumen(idioma: Idioma): Promise<ResumenProyectos> {
    const lista = enIdioma(proyectos, idioma);
    const fechas = lista.map((proyecto) => proyecto.fecha).sort();
    return {
      total: lista.length,
      online: lista.filter((proyecto) => proyecto.estado === 'online').length,
      ultimaActualizacion: fechas.at(-1) ?? null,
    };
  },

  /** Ids de todos los proyectos (iguales en cada idioma): generan las rutas de detalle. */
  getIds(): string[] {
    return enIdioma(proyectos, IDIOMA_POR_DEFECTO).map((proyecto) => proyecto.id);
  },

  async getById(idioma: Idioma, id: string): Promise<ProyectoDetalle> {
    const proyecto = enIdioma(proyectos, idioma).find((item) => item.id === id);
    if (!proyecto) throw new Error(`${idioma}/proyectos/proyectos.json: no existe el proyecto "${id}".`);
    return detallar(idioma, [proyecto])[0];
  },

  /** Capturas del proyecto desde src/images/proyectos/; lista vacía si no tiene. */
  async getImagenes(proyecto: Proyecto): Promise<ImageMetadata[]> {
    return (proyecto.imagenes ?? []).map((archivo) => resolverImagen('proyectos', archivo)!);
  },
};

// Habilidades y sus categorías. Única puerta de acceso a habilidades.json y categorias-habilidad.json.
import type { CategoriaHabilidad, Habilidad, HabilidadesPorCategoria } from '@interfaces/perfil';
import habilidadesJson from '@data/perfil/habilidades.json';
import categoriasJson from '@data/perfil/categorias-habilidad.json';

const habilidades: Habilidad[] = habilidadesJson;
const categorias: CategoriaHabilidad[] = categoriasJson;

// Integridad referencial: si una habilidad apunta a una categoría inexistente, el build se detiene.
for (const habilidad of habilidades) {
  if (!categorias.some((categoria) => categoria.id === habilidad.categoriaId)) {
    throw new Error(
      `habilidades.json: "${habilidad.id}" usa la categoría "${habilidad.categoriaId}", que no existe en categorias-habilidad.json.`,
    );
  }
}

export const HabilidadService = {
  async getAll(): Promise<Habilidad[]> {
    return [...habilidades];
  },

  async getCategorias(): Promise<CategoriaHabilidad[]> {
    return [...categorias];
  },

  async getByCategoria(categoriaId: string): Promise<Habilidad[]> {
    return habilidades.filter((habilidad) => habilidad.categoriaId === categoriaId);
  },

  /** Categorías en el orden del JSON, cada una con sus habilidades; omite las vacías. */
  async getAgrupadasPorCategoria(): Promise<HabilidadesPorCategoria[]> {
    return categorias
      .map((categoria) => ({
        categoria,
        habilidades: habilidades.filter((habilidad) => habilidad.categoriaId === categoria.id),
      }))
      .filter((grupo) => grupo.habilidades.length > 0);
  },
};

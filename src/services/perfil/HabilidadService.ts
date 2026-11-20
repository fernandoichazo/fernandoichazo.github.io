// Habilidades y sus categorías. Única puerta de acceso a habilidades.json y categorias-habilidad.json
// de src/data/<idioma>/perfil/.
import type { CategoriaHabilidad, Habilidad, HabilidadesPorCategoria } from '@interfaces/perfil';
import { cadaIdioma, enIdioma, verificarIds, type Idioma, type PorIdioma } from '@i18n';
import habilidadesEs from '@data/es/perfil/habilidades.json';
import categoriasEs from '@data/es/perfil/categorias-habilidad.json';
import habilidadesEn from '@data/en/perfil/habilidades.json';
import categoriasEn from '@data/en/perfil/categorias-habilidad.json';

const habilidades: PorIdioma<Habilidad[]> = { es: habilidadesEs, en: habilidadesEn };
const categorias: PorIdioma<CategoriaHabilidad[]> = { es: categoriasEs, en: categoriasEn };

verificarIds('perfil/habilidades.json', habilidades);
verificarIds('perfil/categorias-habilidad.json', categorias);

// Integridad referencial: si una habilidad apunta a una categoría inexistente, el build se detiene.
for (const [idioma, lista] of cadaIdioma(habilidades)) {
  const categoriasIdioma = enIdioma(categorias, idioma);
  for (const habilidad of lista) {
    if (!categoriasIdioma.some((categoria) => categoria.id === habilidad.categoriaId)) {
      throw new Error(
        `${idioma}/perfil/habilidades.json: "${habilidad.id}" usa la categoría "${habilidad.categoriaId}", que no existe en categorias-habilidad.json.`,
      );
    }
  }
}

export const HabilidadService = {
  async getAll(idioma: Idioma): Promise<Habilidad[]> {
    return [...enIdioma(habilidades, idioma)];
  },

  async getCategorias(idioma: Idioma): Promise<CategoriaHabilidad[]> {
    return [...enIdioma(categorias, idioma)];
  },

  async getByCategoria(idioma: Idioma, categoriaId: string): Promise<Habilidad[]> {
    return enIdioma(habilidades, idioma).filter((habilidad) => habilidad.categoriaId === categoriaId);
  },

  /** Categorías en el orden del JSON, cada una con sus habilidades; omite las vacías. */
  async getAgrupadasPorCategoria(idioma: Idioma): Promise<HabilidadesPorCategoria[]> {
    const lista = enIdioma(habilidades, idioma);
    return enIdioma(categorias, idioma)
      .map((categoria) => ({
        categoria,
        habilidades: lista.filter((habilidad) => habilidad.categoriaId === categoria.id),
      }))
      .filter((grupo) => grupo.habilidades.length > 0);
  },
};

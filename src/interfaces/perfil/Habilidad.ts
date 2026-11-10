export interface CategoriaHabilidad {
  id: string;
  nombre: string;
}

export interface Habilidad {
  id: string;
  nombre: string;
  /** Debe coincidir con un id de categorias-habilidad.json. */
  categoriaId: string;
}

export interface HabilidadesPorCategoria {
  categoria: CategoriaHabilidad;
  habilidades: Habilidad[];
}

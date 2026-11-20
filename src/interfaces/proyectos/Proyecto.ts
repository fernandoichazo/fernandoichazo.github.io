// Un proyecto de src/data/<idioma>/proyectos/proyectos.json y sus categorías (categorias.json).
export type EstadoProyecto = 'online' | 'desarrollo' | 'archivado';

export interface CategoriaProyecto {
  id: string;
  nombre: string;
}

export interface EnlacesProyecto {
  /** Repositorio en GitHub; null si es privado o no existe. */
  github: string | null;
  /** Versión publicada o demo en vivo. */
  demo: string | null;
}

export interface Proyecto {
  /** También es el segmento de la URL del detalle: /es/proyectos/<id>. */
  id: string;
  nombre: string;
  /** Resumen corto: es lo que se ve en el listado de MIS PROYECTOS. */
  descripcion: string;
  /** Una frase que abre la vista de detalle. */
  tagline: string;
  /** Qué problema resolvió. */
  problema: string | null;
  /** Cómo se resolvió (enfoque, arquitectura, decisiones). */
  solucion: string | null;
  /** Cómo se usa o quién lo usa. */
  uso: string | null;
  /** Mejor con números: usuarios, % de mejora, tiempo ahorrado. */
  resultado: string | null;
  /** Qué hiciste tú: "Backend · equipo de 4", "Proyecto individual". */
  rol: string;
  /** Tecnologías en texto libre (no tienen que existir en perfil/habilidades.json). */
  stack: string[];
  /** Arquitecturas y patrones en texto libre: "Arquitectura Limpia", "API REST". Puede estar vacío. */
  arquitecturas: string[];
  /** Debe coincidir con un id de categorias.json. */
  categoriaId: string;
  /** "AAAA" o "AAAA-MM": cuándo empezó (o se publicó) el proyecto. */
  fecha: string;
  estado: EstadoProyecto;
  /** Los destacados salen primero, en su propia sección. */
  destacado: boolean;
  /** Capturas: rutas dentro de src/images/proyectos/ ("eco-ruta/mapa.png"); null si no hay. */
  imagenes: string[] | null;
  enlaces: EnlacesProyecto;
}

/** Proyecto listo para pintar: nombre de su categoría resuelto. */
export interface ProyectoDetalle extends Proyecto {
  nombreCategoria: string;
}

/** Cifras de la cabecera del archivo. */
export interface ResumenProyectos {
  total: number;
  online: number;
  /** Fecha más reciente entre los proyectos ("AAAA" o "AAAA-MM"). */
  ultimaActualizacion: string | null;
}

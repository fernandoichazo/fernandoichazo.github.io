// Una credencial de src/data/<idioma>/certificaciones/credenciales.json.
export type CategoriaCredencial = 'certificacion' | 'competencia' | 'curso' | 'idioma';

/** Estado calculado al compilar; no se guarda en el JSON. */
export type EstadoCredencial = 'verificada' | 'sin-enlace' | 'expirada' | 'en-progreso';

export interface Credencial {
  id: string;
  titulo: string;
  /** Organización que la otorga (o plataforma/sede en competencias). */
  emisor: string;
  categoria: CategoriaCredencial;
  /** "AAAA" o "AAAA-MM". Si el progreso es menor a 100, es la fecha objetivo. */
  emision: string | null;
  /** "AAAA" o "AAAA-MM"; null si no vence. */
  expiracion: string | null;
  credencialId: string | null;
  /** Enlace público para verificar la credencial. */
  url: string | null;
  /** Puesto, nivel o nota: "Puesto 3 de 40", "C1". */
  resultado: string | null;
  /** Duración de cursos. */
  horas: number | null;
  /**
   * 0-100. Las certificaciones siempre lo llevan (100 = terminada); con menos de 100 se
   * muestran en curso y su enlace de verificación queda bloqueado. null si no aplica.
   */
  progreso: number | null;
  /** Ids de src/data/<idioma>/perfil/habilidades.json que respalda. */
  habilidades: string[];
  /** Nombre de archivo dentro de src/images/certificaciones/. */
  imagen: string | null;
  destacado: boolean;
}

/** Credencial lista para pintar: estado calculado y nombres de habilidades resueltos. */
export interface CredencialDetalle extends Credencial {
  estado: EstadoCredencial;
  nombresHabilidades: string[];
}

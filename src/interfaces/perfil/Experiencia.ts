export interface Experiencia {
  id: string;
  cargo: string;
  empresa: string;
  ubicacion: string;
  /** "AAAA-MM" */
  inicio: string;
  /** "AAAA-MM"; null si es el trabajo actual. */
  fin: string | null;
  descripcion: string;
  tecnologias: string[];
}

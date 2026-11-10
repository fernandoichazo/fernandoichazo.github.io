export interface Formacion {
  id: string;
  titulo: string;
  institucion: string;
  ubicacion: string;
  /** "AAAA" o "AAAA-MM"; null si solo se conoce el año de finalización. */
  inicio: string | null;
  /** "AAAA" o "AAAA-MM"; null mientras esté en curso. */
  fin: string | null;
}

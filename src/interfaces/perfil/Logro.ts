export interface Logro {
  id: string;
  titulo: string;
  /** "AAAA"; null si no tiene fecha. */
  anio: string | null;
  tipo: string;
  /** Enlace para verificar la credencial. */
  url: string | null;
  /** Nombre de archivo dentro de src/images/logros/. */
  imagen: string | null;
}

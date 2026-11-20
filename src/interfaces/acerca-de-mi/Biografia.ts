export interface Biografia {
  /** Párrafo de presentación en primera persona. */
  presentacion: string;
  /** Frase que resume qué te mueve; se muestra como cita destacada. */
  directiva: string;
  /** Mensaje que invita a seguir navegando o a contactar. */
  cierre: string;
}

export interface Pasion {
  id: string;
  titulo: string;
  descripcion: string;
}

export interface Pasatiempo {
  id: string;
  nombre: string;
  descripcion: string;
  /** Texto libre en mayúsculas, p. ej. "DIARIA", "SEMANAL". */
  frecuencia: string;
}

export interface Atributo {
  id: string;
  nombre: string;
  /** Nivel del 1 al 10. */
  valor: number;
  descripcion: string;
}

export interface EstadoActual {
  id: string;
  etiqueta: string;
  valor: string;
}

export interface DatoCurioso {
  id: string;
  texto: string;
}

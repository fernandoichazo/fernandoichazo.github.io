export interface Ubicacion {
  ciudad: string;
  pais: string;
}

export interface Contacto {
  linkedin: string;
  linkedinUsuario: string;
}

export interface Personal {
  nombreCompleto: string;
  titular: string;
  resumen: string;
  ubicacion: Ubicacion;
  contacto: Contacto;
  /** Nombre de archivo dentro de src/images/perfil/, o null para mostrar la silueta. */
  foto: string | null;
}

export interface Fortaleza {
  id: string;
  nombre: string;
}

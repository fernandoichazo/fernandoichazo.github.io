// Formación académica. Única puerta de acceso a formacion.json.
import type { Formacion } from '@interfaces/perfil';
import { compararFechasDesc } from '@lib/fechas';
import formacionJson from '@data/perfil/formacion.json';

const formacion: Formacion[] = formacionJson;

export const FormacionService = {
  /** De lo vigente a lo más antiguo. */
  async getAll(): Promise<Formacion[]> {
    return [...formacion].sort((a, b) => compararFechasDesc(a.fin, b.fin));
  },

  async getEnCurso(): Promise<Formacion[]> {
    return formacion.filter((item) => item.fin === null);
  },

  estaEnCurso(item: Formacion): boolean {
    return item.fin === null;
  },
};

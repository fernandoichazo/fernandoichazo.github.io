// Formación académica. Única puerta de acceso a src/data/<idioma>/perfil/formacion.json.
import type { Formacion } from '@interfaces/perfil';
import { enIdioma, verificarIds, type Idioma, type PorIdioma } from '@i18n';
import { compararFechasDesc } from '@lib/fechas';
import formacionEs from '@data/es/perfil/formacion.json';
import formacionEn from '@data/en/perfil/formacion.json';

const formacion: PorIdioma<Formacion[]> = { es: formacionEs, en: formacionEn };

verificarIds('perfil/formacion.json', formacion);

export const FormacionService = {
  /** De lo vigente a lo más antiguo. */
  async getAll(idioma: Idioma): Promise<Formacion[]> {
    return [...enIdioma(formacion, idioma)].sort((a, b) => compararFechasDesc(a.fin, b.fin));
  },

  async getEnCurso(idioma: Idioma): Promise<Formacion[]> {
    return enIdioma(formacion, idioma).filter((item) => item.fin === null);
  },

  estaEnCurso(item: Formacion): boolean {
    return item.fin === null;
  },
};

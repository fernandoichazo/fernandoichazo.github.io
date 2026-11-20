// Experiencia laboral. Única puerta de acceso a src/data/<idioma>/perfil/experiencia.json.
import type { Experiencia } from '@interfaces/perfil';
import { enIdioma, verificarIds, type Idioma, type PorIdioma } from '@i18n';
import { compararFechasDesc } from '@lib/fechas';
import experienciaEs from '@data/es/perfil/experiencia.json';
import experienciaEn from '@data/en/perfil/experiencia.json';

const experiencia: PorIdioma<Experiencia[]> = { es: experienciaEs, en: experienciaEn };

verificarIds('perfil/experiencia.json', experiencia);

export const ExperienciaService = {
  /** Del trabajo actual o más reciente al más antiguo. */
  async getAll(idioma: Idioma): Promise<Experiencia[]> {
    return [...enIdioma(experiencia, idioma)].sort(
      (a, b) => compararFechasDesc(a.fin, b.fin) || compararFechasDesc(a.inicio, b.inicio),
    );
  },

  async getById(idioma: Idioma, id: string): Promise<Experiencia | undefined> {
    return enIdioma(experiencia, idioma).find((item) => item.id === id);
  },

  esActual(item: Experiencia): boolean {
    return item.fin === null;
  },
};

// Experiencia laboral. Única puerta de acceso a experiencia.json.
import type { Experiencia } from '@interfaces/perfil';
import { compararFechasDesc } from '@lib/fechas';
import experienciaJson from '@data/perfil/experiencia.json';

const experiencia: Experiencia[] = experienciaJson;

export const ExperienciaService = {
  /** Del trabajo actual o más reciente al más antiguo. */
  async getAll(): Promise<Experiencia[]> {
    return [...experiencia].sort(
      (a, b) => compararFechasDesc(a.fin, b.fin) || compararFechasDesc(a.inicio, b.inicio),
    );
  },

  async getById(id: string): Promise<Experiencia | undefined> {
    return experiencia.find((item) => item.id === id);
  },

  esActual(item: Experiencia): boolean {
    return item.fin === null;
  },
};

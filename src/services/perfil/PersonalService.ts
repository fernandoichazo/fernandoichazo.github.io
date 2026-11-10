// Datos personales y fortalezas. Única puerta de acceso a personal.json y fortalezas.json.
import type { ImageMetadata } from 'astro';
import type { Fortaleza, Personal } from '@interfaces/perfil';
import { resolverImagen } from '@lib/imagenes';
import personalJson from '@data/perfil/personal.json';
import fortalezasJson from '@data/perfil/fortalezas.json';

const personal: Personal = personalJson;
const fortalezas: Fortaleza[] = fortalezasJson;

export const PersonalService = {
  async getPersonal(): Promise<Personal> {
    return personal;
  },

  async getFortalezas(): Promise<Fortaleza[]> {
    return [...fortalezas];
  },

  /** Foto de perfil desde src/images/perfil/, o null si aún no hay una. */
  async getFoto(): Promise<ImageMetadata | null> {
    return resolverImagen('perfil', personal.foto);
  },
};

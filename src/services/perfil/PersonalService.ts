// Datos personales y fortalezas. Única puerta de acceso a personal.json y fortalezas.json
// de src/data/<idioma>/perfil/.
import type { ImageMetadata } from 'astro';
import type { Fortaleza, Personal } from '@interfaces/perfil';
import { enIdioma, verificarIds, type Idioma, type PorIdioma } from '@i18n';
import { resolverImagen } from '@lib/imagenes';
import personalEs from '@data/es/perfil/personal.json';
import fortalezasEs from '@data/es/perfil/fortalezas.json';
import personalEn from '@data/en/perfil/personal.json';
import fortalezasEn from '@data/en/perfil/fortalezas.json';

const personal: PorIdioma<Personal> = { es: personalEs, en: personalEn };
const fortalezas: PorIdioma<Fortaleza[]> = { es: fortalezasEs, en: fortalezasEn };

verificarIds('perfil/fortalezas.json', fortalezas);

export const PersonalService = {
  async getPersonal(idioma: Idioma): Promise<Personal> {
    return enIdioma(personal, idioma);
  },

  async getFortalezas(idioma: Idioma): Promise<Fortaleza[]> {
    return [...enIdioma(fortalezas, idioma)];
  },

  /** Foto de perfil desde src/images/perfil/, o null si aún no hay una. */
  async getFoto(idioma: Idioma): Promise<ImageMetadata | null> {
    return resolverImagen('perfil', enIdioma(personal, idioma).foto);
  },
};

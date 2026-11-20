// Contenido de la directiva [4] ACERCA DE MÍ. Única puerta de acceso a src/data/<idioma>/acerca-de-mi/.
// PLACEHOLDER: el contenido de los JSON es ficticio; reemplázalo por información real antes de publicar.
import type { Atributo, Biografia, DatoCurioso, EstadoActual, Pasatiempo, Pasion } from '@interfaces/acerca-de-mi';
import { cadaIdioma, enIdioma, verificarIds, type Idioma, type PorIdioma } from '@i18n';
import biografiaEs from '@data/es/acerca-de-mi/biografia.json';
import pasionesEs from '@data/es/acerca-de-mi/pasiones.json';
import tiempoLibreEs from '@data/es/acerca-de-mi/tiempo-libre.json';
import atributosEs from '@data/es/acerca-de-mi/atributos.json';
import actualmenteEs from '@data/es/acerca-de-mi/actualmente.json';
import datosCuriososEs from '@data/es/acerca-de-mi/datos-curiosos.json';
import biografiaEn from '@data/en/acerca-de-mi/biografia.json';
import pasionesEn from '@data/en/acerca-de-mi/pasiones.json';
import tiempoLibreEn from '@data/en/acerca-de-mi/tiempo-libre.json';
import atributosEn from '@data/en/acerca-de-mi/atributos.json';
import actualmenteEn from '@data/en/acerca-de-mi/actualmente.json';
import datosCuriososEn from '@data/en/acerca-de-mi/datos-curiosos.json';

const biografia: PorIdioma<Biografia> = { es: biografiaEs, en: biografiaEn };
const pasiones: PorIdioma<Pasion[]> = { es: pasionesEs, en: pasionesEn };
const tiempoLibre: PorIdioma<Pasatiempo[]> = { es: tiempoLibreEs, en: tiempoLibreEn };
const atributos: PorIdioma<Atributo[]> = { es: atributosEs, en: atributosEn };
const actualmente: PorIdioma<EstadoActual[]> = { es: actualmenteEs, en: actualmenteEn };
const datosCuriosos: PorIdioma<DatoCurioso[]> = { es: datosCuriososEs, en: datosCuriososEn };

verificarIds('acerca-de-mi/pasiones.json', pasiones);
verificarIds('acerca-de-mi/tiempo-libre.json', tiempoLibre);
verificarIds('acerca-de-mi/atributos.json', atributos);
verificarIds('acerca-de-mi/actualmente.json', actualmente);
verificarIds('acerca-de-mi/datos-curiosos.json', datosCuriosos);

// Los atributos se dibujan como barra de 10 celdas: un valor fuera de rango detiene el build.
for (const [idioma, lista] of cadaIdioma(atributos)) {
  for (const atributo of lista) {
    if (!Number.isInteger(atributo.valor) || atributo.valor < 1 || atributo.valor > 10) {
      throw new Error(
        `${idioma}/acerca-de-mi/atributos.json: "${atributo.id}" tiene valor ${atributo.valor}; debe ser un entero del 1 al 10.`,
      );
    }
  }
}

export const BiografiaService = {
  async getBiografia(idioma: Idioma): Promise<Biografia> {
    return enIdioma(biografia, idioma);
  },

  async getPasiones(idioma: Idioma): Promise<Pasion[]> {
    return [...enIdioma(pasiones, idioma)];
  },

  async getTiempoLibre(idioma: Idioma): Promise<Pasatiempo[]> {
    return [...enIdioma(tiempoLibre, idioma)];
  },

  async getAtributos(idioma: Idioma): Promise<Atributo[]> {
    return [...enIdioma(atributos, idioma)];
  },

  async getActualmente(idioma: Idioma): Promise<EstadoActual[]> {
    return [...enIdioma(actualmente, idioma)];
  },

  async getDatosCuriosos(idioma: Idioma): Promise<DatoCurioso[]> {
    return [...enIdioma(datosCuriosos, idioma)];
  },
};

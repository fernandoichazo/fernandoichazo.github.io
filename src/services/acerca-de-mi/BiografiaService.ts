// Contenido de la directiva [4] ACERCA DE MÍ. Única puerta de acceso a src/data/acerca-de-mi/.
// PLACEHOLDER: el contenido de los JSON es ficticio; reemplázalo por información real antes de publicar.
import type { Atributo, Biografia, DatoCurioso, EstadoActual, Pasatiempo, Pasion } from '@interfaces/acerca-de-mi';
import biografiaJson from '@data/acerca-de-mi/biografia.json';
import pasionesJson from '@data/acerca-de-mi/pasiones.json';
import tiempoLibreJson from '@data/acerca-de-mi/tiempo-libre.json';
import atributosJson from '@data/acerca-de-mi/atributos.json';
import actualmenteJson from '@data/acerca-de-mi/actualmente.json';
import datosCuriososJson from '@data/acerca-de-mi/datos-curiosos.json';

const biografia: Biografia = biografiaJson;
const pasiones: Pasion[] = pasionesJson;
const tiempoLibre: Pasatiempo[] = tiempoLibreJson;
const atributos: Atributo[] = atributosJson;
const actualmente: EstadoActual[] = actualmenteJson;
const datosCuriosos: DatoCurioso[] = datosCuriososJson;

// Los atributos se dibujan como barra de 10 celdas: un valor fuera de rango detiene el build.
for (const atributo of atributos) {
  if (!Number.isInteger(atributo.valor) || atributo.valor < 1 || atributo.valor > 10) {
    throw new Error(`atributos.json: "${atributo.id}" tiene valor ${atributo.valor}; debe ser un entero del 1 al 10.`);
  }
}

export const BiografiaService = {
  async getBiografia(): Promise<Biografia> {
    return biografia;
  },

  async getPasiones(): Promise<Pasion[]> {
    return [...pasiones];
  },

  async getTiempoLibre(): Promise<Pasatiempo[]> {
    return [...tiempoLibre];
  },

  async getAtributos(): Promise<Atributo[]> {
    return [...atributos];
  },

  async getActualmente(): Promise<EstadoActual[]> {
    return [...actualmente];
  },

  async getDatosCuriosos(): Promise<DatoCurioso[]> {
    return [...datosCuriosos];
  },
};

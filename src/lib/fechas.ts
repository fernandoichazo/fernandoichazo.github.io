// Fechas del portafolio: se guardan como "AAAA" o "AAAA-MM" y null significa "presente".
import { traducir, type Idioma } from '@i18n';

export function formatearFecha(fecha: string | null, idioma: Idioma): string {
  const { meses, presente } = traducir(idioma).fechas;
  if (fecha === null) return presente;
  const [anio, mes] = fecha.split('-');
  return mes ? `${meses[Number(mes) - 1]} ${anio}` : anio;
}

export function formatearPeriodo(inicio: string | null, fin: string | null, idioma: Idioma): string {
  return inicio
    ? `${formatearFecha(inicio, idioma)} - ${formatearFecha(fin, idioma)}`
    : formatearFecha(fin, idioma);
}

/** Orden descendente: lo vigente (null) primero, luego lo más reciente. */
export function compararFechasDesc(a: string | null, b: string | null): number {
  if (a === b) return 0;
  if (a === null) return -1;
  if (b === null) return 1;
  return b.localeCompare(a);
}

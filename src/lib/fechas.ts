// Fechas del portafolio: se guardan como "AAAA" o "AAAA-MM" y null significa "presente".

const MESES = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

export function formatearFecha(fecha: string | null): string {
  if (fecha === null) return 'PRESENTE';
  const [anio, mes] = fecha.split('-');
  return mes ? `${MESES[Number(mes) - 1]} ${anio}` : anio;
}

export function formatearPeriodo(inicio: string | null, fin: string | null): string {
  return inicio ? `${formatearFecha(inicio)} - ${formatearFecha(fin)}` : formatearFecha(fin);
}

/** Orden descendente: lo vigente (null) primero, luego lo más reciente. */
export function compararFechasDesc(a: string | null, b: string | null): number {
  if (a === b) return 0;
  if (a === null) return -1;
  if (b === null) return 1;
  return b.localeCompare(a);
}

// Preferencias del terminal (efectos CRT y sonido) y el bip de fósforo.
// El estado vive en atributos de <html> para que el CSS reaccione sin re-render.

export type Pref = 'crt' | 'sound';

const STORAGE_KEY = (pref: Pref) => `pipos:${pref}`;

export function readPref(pref: Pref): 'on' | 'off' {
  return document.documentElement.dataset[pref] === 'on' ? 'on' : 'off';
}

export function writePref(pref: Pref, value: 'on' | 'off') {
  document.documentElement.dataset[pref] = value;
  try {
    localStorage.setItem(STORAGE_KEY(pref), value);
  } catch {
    // Almacenamiento bloqueado: la preferencia dura solo esta visita.
  }
  document.dispatchEvent(new CustomEvent('pipos:pref', { detail: { pref, value } }));
}

let audio: AudioContext | undefined;

// Bip monocromático corto, sintetizado: no descarga archivos de audio.
export function beep(frequency = 1180, duration = 0.035) {
  if (readPref('sound') !== 'on') return;
  audio ??= new AudioContext();
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = 'square';
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(0.025, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration);
  osc.connect(gain).connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + duration);
}

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

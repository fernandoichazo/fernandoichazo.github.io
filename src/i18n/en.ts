// Textos de interfaz en inglés. Este diccionario define las claves: los demás idiomas se
// declaran con el tipo Diccionario, así que una traducción faltante no pasa `astro check`.
import type { DirectivaId } from '@data/site';

export const en = {
  meta: {
    inicioDescripcion: (nombre: string, titular: string) =>
      `Portfolio of ${nombre}, ${titular}. Projects, certifications and professional profile.`,
    directivaDescripcion: (seccion: string, nombre: string) => `${seccion}: a section of ${nombre}'s portfolio.`,
  },
  layout: {
    saltarContenido: 'Skip to content',
  },
  estado: {
    mensaje: 'READY FOR RECRUITER INSPECTION · PRESS [TAB] OR CLICK AN OPTION',
    mensajeMedio: 'READY FOR INSPECTION',
    mensajeCorto: 'READY',
    modulo: (archivo: string, secciones: number) =>
      `${archivo} · [A] PREVIOUS · [D] NEXT · [1]-[${secciones}] SECTION · [ESC] BACK`,
    moduloPendiente: (archivo: string) => `${archivo} · PRESS [ESC] TO GO BACK`,
    moduloMedio: (archivo: string) => `${archivo} · [ESC] BACK`,
    volver: '[ESC] BACK',
  },
  controles: {
    grupo: 'Display preferences',
    crt: 'CRT',
    sonido: 'SOUND',
  },
  idioma: {
    etiqueta: 'LANG',
    grupo: 'Language',
  },
  arranque: {
    diagnostico: 'System diagnostics',
    log: [
      { text: 'INITIALIZING BOOT SEQUENCE...', result: '[OK]' },
      { text: 'MEMORY: 64KB OK | PIP-BOY PROTOCOL:', result: 'ACTIVE' },
      { text: 'VERIFYING RECRUITER ACCESS...', result: 'GRANTED' },
    ],
    omitir: '[SPACE] OR CLICK TO SKIP',
  },
  inicio: {
    bienvenida: 'WELCOME TO MY PORTFOLIO',
  },
  nav: {
    prompt: 'SELECT A NAVIGATION DIRECTIVE WITH THE KEYBOARD OR CURSOR:',
    guiaTitulo: 'V.A.T.S. RECOMMENDS:',
    guiaTexto: 'START WITH [2] TO SEE REAL CASE STUDIES',
  },
  directivas: {
    perfil: 'PROFILE',
    proyectos: 'MY PROJECTS',
    certificaciones: 'MY CERTIFICATIONS',
    'acerca-de-mi': 'ABOUT ME',
  } satisfies Record<DirectivaId, string>,
  comun: {
    volverMenu: '[ESC] BACK TO MAIN MENU',
    pestanaNueva: '(opens in a new tab)',
    subdirectorios: 'FILE SUBDIRECTORIES:',
    ejecutando: 'EXECUTING',
    cargando: 'LOADING',
  },
  modulo: {
    preparando: 'MODULE IN PREPARATION',
    cuerpo: 'THIS FILE IS BEING COMPILED AND WILL BE AVAILABLE IN THE NEXT SYSTEM UPDATE.',
  },
  perfil: {
    ubicacion: 'LOCATION:',
    enlace: 'LINK:',
    foto: (nombre: string) => `Photo of ${nombre}`,
    sinFoto: 'No profile photo',
    sinSenal: 'NO SIGNAL',
    actual: 'CURRENT',
    enCurso: 'IN PROGRESS',
    tecnologias: 'Technologies',
    secciones: {
      experiencia: 'EXPERIENCE',
      fortalezas: 'STRENGTHS',
      habilidades: 'SKILLS',
      formacion: 'EDUCATION',
    },
  },
  acercaDeMi: {
    quienSoy: 'WHO I AM',
    directivaPrincipal: '[ PRIME DIRECTIVE ]',
    descanso: 'REST MODE ENABLED',
    inventario: (objetos: number) => `${objetos} ITEMS IN INVENTORY`,
    frecuencia: 'Frequency: ',
    nivel: (valor: number, maximo: number) => `Level ${valor} of ${maximo}`,
    verProyectos: 'SEE MY PROJECTS',
    linkedin: "LET'S TALK ON LINKEDIN",
    secciones: {
      pasiones: 'PASSIONS',
      tiempoLibre: 'FREE TIME',
      comportamiento: 'BEHAVIOR',
      actualmente: 'CURRENTLY',
      datosCuriosos: 'FUN FACTS',
    },
  },
  logros: {
    verificar: '[VERIFY]',
    sinFecha: 'N/D',
  },
  fechas: {
    meses: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    presente: 'PRESENT',
  },
};

export type Diccionario = typeof en;

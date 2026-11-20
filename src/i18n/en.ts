// Textos de interfaz en inglés. Este diccionario define las claves: los demás idiomas se
// declaran con el tipo Diccionario, así que una traducción faltante no pasa `astro check`.
import type { DirectivaId } from '@data/site';
import type { EstadoCredencial } from '@interfaces/certificaciones';
import type { EstadoProyecto } from '@interfaces/proyectos';

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
  certificaciones: {
    titulo: 'VERIFIED CREDENTIALS',
    intro:
      'Certifications, competitions and complementary training. Every credential with a link can be verified on the issuer’s platform.',
    estados: {
      verificada: 'VERIFIED',
      'sin-enlace': 'NO LINK',
      expirada: 'EXPIRED',
      'en-progreso': 'IN PROGRESS',
    } satisfies Record<EstadoCredencial, string>,
    emitida: 'ISSUED',
    expira: 'EXPIRES',
    expiro: 'EXPIRED',
    credencialId: 'ID',
    resultado: 'RESULT',
    habilidades: 'Backed skills',
    horas: (horas: number) => `${horas} h`,
    objetivo: 'TARGET',
    progreso: (porcentaje: number) => `Progress: ${porcentaje}%`,
    destacada: 'FEATURED',
    verificar: '[VERIFY]',
    verificarBloqueado: 'Available once the certification is completed',
    sinFecha: 'N/D',
    secciones: {
      certificaciones: 'TECHNICAL CERTIFICATIONS',
      competencias: 'COMPETITIONS & AWARDS',
      cursos: 'COURSES & TRAINING',
      idiomas: 'LANGUAGES',
    },
  },
  proyectos: {
    titulo: 'PROJECTS ARCHIVE',
    intro: 'Selected work. Open any record with [SEE MORE] to read the problem it solved, how it is used and the stack behind it.',
    registros: (total: number) => `${total} RECORDS FOUND`,
    enProduccion: (total: number) => `${total} IN PRODUCTION`,
    ultimaActualizacion: (fecha: string) => `LAST UPDATE ${fecha}`,
    verMas: '[SEE MORE]',
    tecnologias: 'Technologies',
    arquitecturas: 'Architecture',
    filtros: 'Filter by category',
    todos: 'ALL',
    mostrando: 'SHOWING',
    de: 'OF',
    sinResultados: 'NO RECORDS MATCH THIS FILTER.',
    cierre: {
      mensaje: 'GOT A PROJECT IN MIND?',
      transmision: 'START TRANSMISSION (LINKEDIN)',
      perfil: 'SEE MY PROFILE',
    },
    secciones: {
      destacados: 'FEATURED PROJECTS',
      archivo: 'FULL ARCHIVE',
    },
    detalle: {
      abriendo: 'OPENING RECORD',
      estados: {
        online: 'ONLINE',
        desarrollo: 'IN DEVELOPMENT',
        archivado: 'ARCHIVED',
      } satisfies Record<EstadoProyecto, string>,
      rol: 'ROLE',
      problema: 'PROBLEM',
      solucion: 'SOLUTION',
      resultado: 'RESULT',
      enlaces: 'Project links',
      github: '[VIEW ON GITHUB]',
      demo: '[LIVE DEMO]',
      captura: (nombre: string, numero: number) => `Screenshot ${numero} of ${nombre}`,
      volver: '[ESC] BACK TO PROJECTS',
      secciones: {
        resolvio: 'WHAT IT SOLVED',
        uso: 'HOW IT IS USED',
        tecnologias: 'TECHNOLOGIES & ARCHITECTURE',
        galeria: 'GALLERY',
      },
    },
  },
  fechas: {
    meses: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    presente: 'PRESENT',
  },
};

export type Diccionario = typeof en;

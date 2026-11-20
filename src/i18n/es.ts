// Textos de interfaz en español. Las claves las define en.ts (tipo Diccionario).
import type { Diccionario } from './en';

export const es: Diccionario = {
  meta: {
    inicioDescripcion: (nombre, titular) =>
      `Portafolio de ${nombre}, ${titular}. Proyectos, certificaciones y perfil profesional.`,
    directivaDescripcion: (seccion, nombre) => `${seccion}: sección del portafolio de ${nombre}.`,
  },
  layout: {
    saltarContenido: 'Saltar al contenido',
  },
  estado: {
    mensaje: 'LISTO PARA INSPECCIÓN DEL RECLUTADOR · PULSA [TAB] O CLIC EN UNA OPCIÓN',
    mensajeMedio: 'LISTO PARA INSPECCIÓN',
    mensajeCorto: 'LISTO',
    modulo: (archivo, secciones) => `${archivo} · [A] ANTERIOR · [D] SIGUIENTE · [1]-[${secciones}] SECCIÓN · [ESC] VOLVER`,
    moduloPendiente: (archivo) => `${archivo} · PULSA [ESC] PARA VOLVER`,
    moduloMedio: (archivo) => `${archivo} · [ESC] VOLVER`,
    volver: '[ESC] VOLVER',
  },
  controles: {
    grupo: 'Preferencias de pantalla',
    crt: 'CRT',
    sonido: 'SONIDO',
  },
  idioma: {
    etiqueta: 'IDIOMA',
    grupo: 'Idioma',
  },
  arranque: {
    diagnostico: 'Diagnóstico del sistema',
    log: [
      { text: 'INICIALIZANDO SECUENCIA DE ARRANQUE...', result: '[OK]' },
      { text: 'MEMORIA: 64KB OK | PROTOCOLO PIP-BOY:', result: 'ACTIVO' },
      { text: 'VERIFICANDO ACCESO DE RECLUTADOR...', result: 'CONCEDIDO' },
    ],
    omitir: '[ESPACIO] O CLIC PARA OMITIR',
  },
  inicio: {
    bienvenida: 'BIENVENIDO A MI PORTAFOLIO',
  },
  nav: {
    prompt: 'SELECCIONE UNA DIRECTIVA DE NAVEGACIÓN CON EL TECLADO O EL CURSOR:',
    guiaTitulo: 'V.A.T.S. RECOMIENDA:',
    guiaTexto: 'COMIENCE POR [2] PARA VER CASOS DE ESTUDIO REALES',
  },
  directivas: {
    perfil: 'PERFIL',
    proyectos: 'MIS PROYECTOS',
    certificaciones: 'MIS CERTIFICACIONES',
    'acerca-de-mi': 'ACERCA DE MÍ',
  },
  comun: {
    volverMenu: '[ESC] VOLVER AL MENÚ PRINCIPAL',
    pestanaNueva: '(se abre en una pestaña nueva)',
    subdirectorios: 'SUBDIRECTORIOS DEL ARCHIVO:',
    ejecutando: 'EJECUTANDO',
    cargando: 'CARGANDO',
  },
  modulo: {
    preparando: 'MÓDULO EN PREPARACIÓN',
    cuerpo: 'ESTE ARCHIVO SE ESTÁ COMPILANDO Y ESTARÁ DISPONIBLE EN LA PRÓXIMA ACTUALIZACIÓN DEL SISTEMA.',
  },
  perfil: {
    ubicacion: 'UBICACIÓN:',
    enlace: 'ENLACE:',
    foto: (nombre) => `Foto de ${nombre}`,
    sinFoto: 'Sin foto de perfil',
    sinSenal: 'SIN SEÑAL',
    actual: 'ACTUAL',
    enCurso: 'EN CURSO',
    tecnologias: 'Tecnologías',
    secciones: {
      experiencia: 'EXPERIENCIA',
      fortalezas: 'FORTALEZAS',
      habilidades: 'HABILIDADES',
      formacion: 'FORMACIÓN',
    },
  },
  acercaDeMi: {
    quienSoy: 'QUIÉN SOY',
    directivaPrincipal: '[ DIRECTIVA PRINCIPAL ]',
    descanso: 'MODO DESCANSO ACTIVADO',
    inventario: (objetos) => `${objetos} OBJETOS EN INVENTARIO`,
    frecuencia: 'Frecuencia: ',
    nivel: (valor, maximo) => `Nivel ${valor} de ${maximo}`,
    verProyectos: 'VER MIS PROYECTOS',
    linkedin: 'HABLEMOS EN LINKEDIN',
    secciones: {
      pasiones: 'PASIONES',
      tiempoLibre: 'TIEMPO LIBRE',
      comportamiento: 'COMPORTAMIENTO',
      actualmente: 'ACTUALMENTE',
      datosCuriosos: 'DATOS CURIOSOS',
    },
  },
  certificaciones: {
    titulo: 'CREDENCIALES VERIFICADAS',
    intro:
      'Certificaciones, competencias y formación complementaria. Cada credencial con enlace puede verificarse en la plataforma del emisor.',
    resumen: {
      etiqueta: 'Resumen de credenciales',
      credenciales: 'CREDENCIALES',
      verificadas: 'VERIFICADAS',
      competencias: 'COMPETENCIAS',
      cursos: 'CURSOS',
      horas: (horas) => `${horas} H`,
      enProgreso: 'EN CURSO',
      ultima: 'ÚLTIMA ACTUALIZACIÓN',
    },
    estados: {
      verificada: 'VERIFICADA',
      'sin-enlace': 'SIN ENLACE',
      expirada: 'EXPIRADA',
      'en-progreso': 'EN CURSO',
    },
    emitida: 'EMITIDA',
    expira: 'VENCE',
    expiro: 'VENCIÓ',
    credencialId: 'ID',
    resultado: 'RESULTADO',
    habilidades: 'Habilidades respaldadas',
    horas: (horas) => `${horas} h`,
    objetivo: 'OBJETIVO',
    progreso: (porcentaje) => `Progreso: ${porcentaje}%`,
    destacada: 'DESTACADA',
    verificar: '[VERIFICAR]',
    sinFecha: 'S/F',
    secciones: {
      certificaciones: 'CERTIFICACIONES TÉCNICAS',
      competencias: 'COMPETENCIAS Y RECONOCIMIENTOS',
      cursos: 'CURSOS Y FORMACIÓN',
      idiomas: 'IDIOMAS',
      enProgreso: 'EN PROGRESO',
    },
  },
  fechas: {
    meses: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
    presente: 'PRESENTE',
  },
};

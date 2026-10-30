// Contenido centralizado de la Fase 1.
// Todo lo marcado como PLACEHOLDER se reemplaza por información real antes de publicar.

export const profile = {
  name: 'Fernando Ichazo Cisneros',
  role: 'Full-Stack Web Developer',
  scope: 'Frontend · Backend · Datos',
  status: 'OPEN FOR RECRUITMENT',
} as const;

export const system = {
  os: 'ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM (ROBCO-UOS) v4.0.1',
  osShort: 'ROBCO-UOS v4.0.1', // cabecera en la pantalla de Pip-Boy (móvil)
  copyright: 'COPYRIGHT 2075-2077 ROBCO INDUSTRIES',
  bootLog: [
    { text: 'INICIALIZANDO SECUENCIA DE ARRANQUE...', result: '[OK]' },
    { text: 'MEMORIA: 64KB OK | PROTOCOLO PIP-BOY:', result: 'ACTIVO' },
    { text: 'VERIFICANDO ACCESO DE RECLUTADOR...', result: 'CONCEDIDO' },
  ],
} as const;

export interface Directive {
  key: '1' | '2' | '3' | '4';
  slug: string;
  label: string;
  file: string;
  recommended?: boolean;
}

// Las 4 directivas de navegación. Cada slug genera su ruta en src/pages/[directiva].astro,
// lista para recibir el contenido de la Fase 2.
export const directives: Directive[] = [
  { key: '1', slug: 'perfil', label: 'PERFIL', file: 'PROFILE_DATA.EXE' },
  { key: '2', slug: 'proyectos', label: 'MIS PROYECTOS', file: 'PROJECTS_ARCHIVE.DAT', recommended: true },
  { key: '3', slug: 'certificaciones', label: 'MIS CERTIFICACIONES', file: 'VERIFIED_CREDS.LOG' },
  { key: '4', slug: 'acerca-de-mi', label: 'ACERCA DE MÍ', file: 'BIOGRAPHY_STREAM.TXT' },
];

export const guide = {
  title: 'V.A.T.S. RECOMIENDA:',
  text: 'COMIENCE POR [2] PARA VER CASOS DE ESTUDIO REALES',
} as const;

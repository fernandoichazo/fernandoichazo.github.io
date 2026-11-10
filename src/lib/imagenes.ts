// Resuelve un nombre de archivo guardado en los JSON a una imagen optimizable de src/images/.
import type { ImageMetadata } from 'astro';

const imagenes = import.meta.glob<{ default: ImageMetadata }>('/src/images/**/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
});

export function resolverImagen(carpeta: string, archivo: string | null): ImageMetadata | null {
  if (!archivo) return null;
  const modulo = imagenes[`/src/images/${carpeta}/${archivo}`];
  if (!modulo) throw new Error(`Imagen no encontrada: src/images/${carpeta}/${archivo}`);
  return modulo.default;
}

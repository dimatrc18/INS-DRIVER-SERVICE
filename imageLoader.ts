/// <reference types="vite/client" />
/**
 * This file ensures that Vite includes all images in the final build,
 * even those that are not explicitly imported in the components.
 */

// 1. Use a more robust glob including webp and handling case sensitivity
const images = import.meta.glob('./images/**/*.{png,jpg,jpeg,avif,svg,webp,PNG,JPG,JPEG}', { eager: true });

// 2. IMPORTANT: We must "use" the images object to prevent tree-shaking.
// By attaching it to a global or logging it, we ensure Vite treats this as a required side-effect.
if (typeof window !== 'undefined') {
  (window as any).__PROJECT_IMAGES__ = images;
}

export default images;


# Rutas públicas y documentación — 20 de octubre de 2026

Se reemplazó la redirección de rutas desconocidas por una vista 404, también para categorías, artículos de documentación y publicaciones de blog inexistentes. El encabezado de documentación muestra «Documentación».

El build toma las rutas de las mismas listas de contenido que usa la interfaz (`routing/publicPaths.ts`) y genera una entrada HTML para cada página válida. Se eliminó el rewrite general a `index.html`: Vercel puede responder 404 y servir `public/404.html` cuando no existe una página. Se conservan `/guide` → `/docs`, el proxy de `/app` y los proxies de assets.

Validación: `npm run build`, `npx tsc --noEmit`, `git diff --check` y comprobación de los 119 entrypoints, sus assets absolutos, el archivo 404 y la ausencia de páginas inexistentes. El navegador de comprobación no logró conectarse a localhost; falta verificar HTTP 404 y los enlaces profundos tras desplegar.

Referencia de alojamiento: [páginas 404 en Vercel](https://vercel.com/kb/guide/custom-404-page).

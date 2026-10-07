# Documentación del visor de documentos

Revisión: 2026-10-06. Documenta las herramientas nuevas del visor de PDF y
vistas previas de `zenith-productivity` (`PdfDocumentPreview`, ver
`docs/architecture/work-items/notes-pdf-viewer-tools-handoff.md` en la app).

## Fuentes

Se contrastó con el código: `ui/PdfDocumentPreview.tsx`, `ui/pdf-preview/*`
(`PdfToolbar`, `PdfSidebar`, `PdfPage`), `domain/pdfViewer.ts`,
`ui/EntryFileViewer.tsx` y `ui/GoogleDriveViewer.tsx` (modo «Ver»,
conversión de Office). Nombres de controles tomados de sus `aria-label`.

## Cambios en zenth-blog

- `content/docs/articles/biblioteca.ts`: artículo nuevo **Leer documentos en el
  visor** (`biblioteca/leer-documentos-en-el-visor`, unas 1.090 palabras): dónde
  aparece, barra, miniaturas e índice, ir a una página, zoom, girar, búsqueda,
  copiar texto, atajos y límites. «Archivos, PDF y notas de voz» lo enlaza.
- `content/docs/articles/integraciones.ts`: Google Drive menciona el modo
  **Ver** con las herramientas del visor.
- `content/docs/articles/atajos.ts`: sección **Visor de documentos**.
- `public/sitemap.xml`: ruta nueva y fechas de los artículos tocados.

Límites documentados: los PDF escaneados no se buscan ni se copian, los enlaces
del PDF no se pulsan, no hay imprimir ni anotar, el giro no se guarda y la
pantalla completa no existe en iPhone. El pellizco de trackpad se indica solo
para Chrome, Edge y Firefox (Safari no envía Ctrl + rueda).

## Verificación

- `npx --no-install tsc --noEmit` y `npm run build`: correctos (aviso existente
  de chunks grandes). `git diff --check`: correcto.
- Registro real con esbuild: 77 artículos sin claves duplicadas, sin enlaces,
  anclas ni relacionados rotos; «buscar en el pdf», «miniaturas», «girar pdf»,
  «ajustar a la página» y «copiar texto pdf» dan el artículo nuevo primero.
- Sitemap: 115 rutas sin duplicados.
- Chrome headless contra `npm run dev`: el artículo nuevo y «Archivos, PDF y
  notas de voz» sin desborde horizontal a 1280 y 390 px.

No se publicó la web ni se hizo commit.

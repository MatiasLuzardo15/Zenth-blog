# Documentación del editor de notas

Revisión: 2026-10-02. Se contrastó la documentación con el código actual de
`zenith-productivity` y los cambios recientes del editor y la galería.

## Fuentes de la revisión

- `675ebee`: galería de 35 plantillas, interlineado, superíndice/subíndice,
  copiar formato, resaltado y cambios de tipografía.
- `fe816c4`: ejemplos de campos vacíos, estilos de tabla/destacado/separador,
  índice automático, espacios de imagen, recortes y columnas.
- `1d2c4a7`, `2f145cc`: protección exterior de columnas, renglones vacíos
  vecinos y estado temporal de copiar formato.
- `50ab6b1`, `e14114b`, `69dceed`: portada opcional, fuente del documento,
  opciones de página en PDF/HTML/impresión y fuente de respaldo al exportar.
- `4a39bb1`: datos del creador y adopción de portadas, fuentes, ejemplos y
  bloques nuevos en el catálogo completo.

Se verificaron los nombres de los controles en `EntryNewMenu`, `TemplateGallery`,
`EntryEditor`, `EditorToolbar`, `NotePageSettingsPanel`, `ImageTools`,
`noteContextMenu` y `slashCommands`; el catálogo y sus borradores en
`domain/noteTemplates.ts`; y el comportamiento de exportación y carga de fuentes.
Las herramientas del grafo no estaban disponibles; se usó búsqueda local.

## Cambios en zenth-blog

- `content/docs/articles/biblioteca.ts`: guía del editor ampliada, nuevo artículo
  **Plantillas de notas**, flujo Nuevo actualizado y enlaces relacionados.
- `content/docs/articles/atajos.ts`: copiar/pegar formato, superíndice/subíndice,
  navegación entre columnas y activación de espacios de imagen.
- `content/docs/articles/primeros-pasos.ts`: elección de nota en blanco o
  plantilla en el recorrido inicial.
- `public/sitemap.xml`: nueva ruta y fechas de los artículos/categorías afectados.

La guía distingue el emoji de la imagen de portada, la fuente del fragmento de
la fuente de toda la nota y el índice lateral del índice insertado en el cuerpo.
Explica permisos del propietario para diseño y subidas, el recorte centrado,
columnas de igual ancho sin tablas/anidación y las diferencias de exportación.
Los CV de la galería se documentan con Juan Pérez y correo@ejemplo.com; los datos
del perfil se completan al crear una nota y quedan editables. Guardar como
plantilla personal, variantes de color y fotos de stock siguen pendientes.

## Verificación

En zenth-blog:

- `npx --no-install tsc --noEmit`: correcto.
- `npm run build`: correcto; aviso existente de chunks grandes.
- Validación del registro real con esbuild: 63 artículos sin claves duplicadas,
  5 artículos revisados con fecha correcta, 21 enlaces internos con destinos y
  anclas válidos, relacionados válidos y resultados para 5 búsquedas nuevas.
- Sitemap leído como XML: 99 rutas sin duplicados; contiene la nueva guía.
- `git diff --check`: correcto.
- Navegador local: guía del editor y navegación al artículo de plantillas en
  escritorio; catálogo en móvil de 390 × 844 px sin desborde de la página,
  tabla con desplazamiento propio; buscar «índice automático» y Enter abre
  la sección correspondiente del editor.

En zenith-productivity, revisión sin editar el código del editor:

- `npm run typecheck`, `npm run check:boundaries`, `npm run check:security`,
  `npm run build` y `git diff --check`: correctos. Cero ciclos y sin deuda nueva.
- `npm test`: 291 archivos y 1.903 pruebas correctas.
- La compilación conserva el aviso existente de chunks grandes.

No se afirma un nuevo smoke autenticado, persistencia real, colaboración entre
usuarios ni inspección manual de un PDF en esta revisión documental. Las
comprobaciones visuales se realizaron en la web de documentación local.
Los servidores y pestañas temporales se cierran al terminar.

Los cambios locales ajenos en `.claude/launch.json`,
`.claude/settings.local.json` y `EntryCard.tsx` se conservaron. No se cambiaron
dependencias, configuración del sitio ni código de la aplicación, y esta tarea
no publicó la web.

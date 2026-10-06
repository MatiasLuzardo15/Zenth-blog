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
Todas las plantillas de la galería se documentan con ejemplos genéricos como
Juan Pérez y correo@ejemplo.com; los datos
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

## Ampliación: guías de uso paso a paso

El 2026-10-02 se añadieron seis guías a petición del usuario, con entre 800 y
1.150 palabras aproximadamente por guía, procedimientos, ejemplos genéricos,
ejercicios y soluciones a dudas habituales:

- Escribir y dar formato a una nota.
- Organizar una nota con bloques e índice.
- Trabajar con tablas y columnas en notas.
- Añadir imágenes y una portada a una nota.
- Usar código, fórmulas y diagramas en notas.
- Diseñar una nota y exportarla.

Los artículos viven en `content/docs/articles/editor-notas.ts` y se incorporan
al registro de Biblioteca desde `biblioteca.ts`, después de la guía general.
La guía general ofrece un recorrido enlazado por las seis tareas. Plantillas y
atajos incluyen enlaces hacia las guías pertinentes. Las seis rutas nuevas se
añadieron a `public/sitemap.xml`.

Se contrastaron las instrucciones con los controles del editor: selector de
modo, barra de formato, menú de bloques, búsqueda/reemplazo, menús contextuales,
herramientas de imagen, fórmulas y opciones de página. Se explican en particular
el bloque actual que pasa a la primera columna, Tab dentro de listas antes que
entre columnas, los controles estructurales disponibles en escritorio, el
recorte centrado y la diferencia entre portada y hoja de presentación. Los
ejemplos usan Juan y Ana; no se añadieron datos personales del usuario.

Verificación de esta ampliación, independiente de los controles de la aplicación
registrados en la revisión anterior:

- TypeScript y compilación de zenth-blog: correctos; permanece el aviso de
  chunks grandes.
- Registro real validado en memoria con esbuild: 69 artículos sin claves
  duplicadas; 129 enlaces internos y todos los relacionados con destino válido.
  Los enlaces de sección apuntan a anclas existentes.
- Las seis guías tienen fecha de revisión, ejercicio y ruta en el sitemap.
  Se comprobaron seis consultas de búsqueda y sus destinos de sección.
- Sitemap: 105 rutas únicas. Se detectaron dos omisiones anteriores, ajenas al
  editor: `integraciones/zenth-mcp` y `ayuda/la-camara-no-funciona`. No se amplió
  esta tarea para modificar esos artículos ni sus rutas.
- Navegador local: acceso desde la guía principal a la guía de escritura en
  escritorio; enlace a la sección de fórmulas; guía de tablas en 390 × 844 px,
  sin desborde de página y con desplazamiento propio de la tabla; búsqueda
  «pie de página» y Enter abren la sección exacta de la guía de exportación.
- `git diff --check`: correcto.

La ejecución inicial de esbuild y el arranque directo de Vite encontraron un
bloqueo de lectura del sandbox; se completaron con la ejecución autorizada fuera
de ese límite. No fue un fallo del producto. No se editó zenith-productivity ni
se repitió su suite por esta ampliación de contenido. No se afirma un nuevo
smoke autenticado o una exportación real de la aplicación. El servidor y la
pestaña usados para verificar la documentación se cierran al terminar.

## Ejemplos visuales del editor

El 2026-10-02 se incorporaron tres representaciones interactivas a las guías:

- **Bloques e índice:** un informe ficticio muestra la jerarquía del índice y
  permite elegir una entrada para ver el título, nivel y contenido de su sección.
- **Tablas y columnas:** se comparan tres resultados desde un grupo original de
  tres columnas. Reducir a dos coloca la tercera sección al final de la segunda;
  convertir a texto conserva el orden. En móvil el ejemplo se apila.
- **Imágenes:** un patrón geométrico SVG compara el archivo original de 3:2 con
  vistas centradas de 16:9, 1:1 y 3:4 mediante `xMidYMid slice`. Original
  recupera la vista completa. En móvil las dos figuras se apilan y las vistas
  altas se muestran completas.

El nuevo bloque `noteExample` tiene un contrato tipado en `content/docs/types.ts`,
constructor en `blocks.ts`, texto indexable en `text.ts` y renderizado desde
`DocBlocks.tsx` mediante `NoteExamples.tsx`. Los datos de los ejemplos permanecen
en `editor-notas.ts`. Las interacciones usan estado local, botones nativos y un
selector nativo; no guardan datos ni modifican las notas de la aplicación.
Los botones exponen su selección y el destino con ARIA, los cambios de vista
se anuncian y el SVG tiene una descripción. Se conservan los tokens del sitio.

Verificación: TypeScript y build correctos; permanece el aviso existente de
chunks grandes. El detector de Impeccable devolvió `[]` sobre los componentes.
Se validaron 69 artículos y 129 enlaces internos con destinos y anclas válidos.
Se comprobaron los controles con teclado, la comparación de distribuciones
sin pérdida de contenido, las proporciones y la vuelta a Original, las vistas
de escritorio y móvil sin desborde y `git diff --check`.

La revisión final independiente de Impeccable devolvió la disposición `ship`,
sin hallazgos materiales. Este handoff documenta la ampliación de tres guías
existentes; los tokens y la estructura del sitio se conservan, sin decisiones
nuevas del sistema de diseño global.

Las capturas de las secciones son evidencia del sitio de documentación, no
capturas del editor real. No se afirma un smoke autenticado de la aplicación.
No se cambiaron dependencias ni código de zenith-productivity, y esta ampliación
no publicó la web ni creó un commit.

## Vista de hojas (2026-10-05)

Se documenta la vista de hojas del editor de notas (zenith-productivity,
`docs/architecture/work-items/notes-sheet-view-handoff.md`).

- `editor-notas.ts`, guía **Diseñar una nota y exportarla**: sección nueva
  «Ver la nota en hojas» (activar desde el grupo de vista, A4 o Carta, vertical
  u horizontal, reparto mientras se escribe, títulos que no quedan solos al pie,
  preferencia personal recordada en el navegador, PDF/impresión/HTML con el papel
  elegido, escala en ventanas estrechas, bloques largos y diferencia de
  tipografía con el PDF). Se ajustó el párrafo de saltos de página, se sumó una
  fila de solución de problemas y un paso a la práctica. El resumen y las
  palabras clave incluyen hojas, A4, Carta y orientación.
- `editor-notas.ts`, guía **Organizar una nota con bloques**: la nota sobre el
  ancho de lectura enlaza a la vista de hojas.
- `biblioteca.ts`, artículo **Notas**: la vista de hojas en «Moverte dentro de
  una nota larga», la barra al pie y el papel en «PDF, HTML e impresión».
- `public/sitemap.xml`: `lastmod` de Notas y de Diseñar y exportar.

Los cambios pendientes de atajos de teclado en `atajos.ts`, `biblioteca.ts`,
`editor-notas.ts`, `ArticleCard.tsx` y el sitemap pertenecen a otra tarea y se
conservaron. No se publicó la web ni se creó un commit.

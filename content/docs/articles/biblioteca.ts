import { h2, keys, list, note, p, path, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const bibliotecaArticles: DocArticle[] = [
  {
    slug: 'explorar-la-biblioteca',
    category: 'biblioteca',
    title: 'Explorar la Biblioteca',
    summary: 'Un único explorador para tus notas y lienzos de Zenth y, si conectas Google, tu Drive: filtra, busca, ordena y crea desde el menú Nuevo.',
    keywords: ['biblioteca', 'entradas', 'explorador', 'notas', 'archivos', 'filtros', 'buscar', 'cuadrícula', 'lista', 'recientes', 'nuevo', 'carpetas', 'resumen'],
    updated: UPDATED,
    related: ['biblioteca/notas', 'biblioteca/lienzos', 'integraciones/google-drive'],
    blocks: [
      p('**Biblioteca** es donde viven tus notas, lienzos, archivos y, si conectas Google, tus documentos de Drive. Las notas y lienzos son de Zenth; los documentos, hojas, presentaciones y formularios de Google se guardan en tu Drive y Zenth los muestra y edita sin duplicarlos.'),

      h2('Moverte por la Biblioteca'),
      p('En escritorio, la columna de la izquierda reúne todos los lugares de la Biblioteca:'),
      table(
        ['Lugar', 'Qué encuentras'],
        ['Resumen', 'Todo junto: tus elementos de Zenth y los de Drive.'],
        ['Archivos Zenth', 'Solo lo que vive en Zenth: notas, lienzos y archivos.'],
        ['Compartidos conmigo', 'Notas y lienzos que otras personas compartieron contigo.'],
        ['Recientes', 'Lo último que abriste o editaste.'],
        ['Papelera', 'Lo que borraste. Ver [Papelera](/docs/cuenta/papelera).'],
        ['Google Drive', 'Mi unidad, Destacados y Compartidos conmigo de Drive, más una acción para crear carpetas. Si no lo conectaste, verás **Conectar Drive**.'],
        ['Carpetas Zenth', 'Si tenías carpetas de Zenth, siguen ahí (puedes renombrarlas, moverlas o eliminarlas). Las carpetas nuevas se crean en Drive.'],
        ['Tipo de contenido', 'Atajos para ver solo Notas, Lienzos, Documentos, Hojas, Archivos o Multimedia.'],
      ),
      p('La columna se puede contraer a una franja de iconos.'),

      h2('Buscar, filtrar y ordenar'),
      list(
        '**Buscar archivos, notas y carpetas…** filtra al escribir, ignorando tildes.',
        '**Filtros** acotan por origen (Resumen, Zenth, Google Drive) y por formato: Todo, Notas, Lienzos, Documentos, Hojas, Presentaciones, Formularios, PDFs, Multimedia, Carpetas y Archivos.',
        'Cambia entre **cuadrícula** y **lista**, y ordena los resultados.',
      ),
      tip('Para buscar en todo Zenth (tareas, pizarras, notas y Drive a la vez) usa el [buscador global](/docs/primeros-pasos/busqueda-y-notificaciones) con `Ctrl` + `K`.'),

      h2('Crear con «Nuevo»'),
      p('El botón **Nuevo** ofrece:'),
      table(
        ['Opción', 'Qué crea', 'Necesita Drive'],
        ['Nota', 'Una nota nativa de Zenth.', 'No'],
        ['Lienzo', 'Una pizarra de dibujo con Excalidraw.', 'No'],
        ['Documento, Hoja de cálculo, Presentación, Formulario', 'Un archivo nuevo de Google Docs, Sheets, Slides o Forms en tu Drive.', 'Sí'],
        ['Carpeta', 'Una carpeta real en tu Drive.', 'Sí'],
        ['Subir archivo', 'Guarda un archivo en tu Drive.', 'Sí'],
        ['Desde Google Drive', 'Elige un archivo existente con Google Picker.', 'Sí'],
        ['Nota de voz', 'Graba audio directamente en tu Drive.', 'Sí'],
      ),
      p('Si no has conectado Drive, esas opciones te llevan a conectarlo. Ver [Google Drive y Workspace](/docs/integraciones/google-drive).'),

      h2('Acciones sobre un elemento'),
      p('Cada elemento tiene un menú con acciones como **Descargar**, **Mover a…** una carpeta y **Mover a papelera**. Los archivos y carpetas de Drive añaden renombrar, compartir y destacar. Lo que hagas con archivos de Google afecta al archivo real de tu Drive.'),
      p('Estando en Biblioteca, la tecla `C` crea una nota nueva.'),

      h2('En el móvil'),
      p('La Biblioteca se adapta: las secciones y los filtros se abren en hojas desde abajo, el botón **+** crea una nota, y **Mover a…** abre una hoja para elegir carpeta.'),
    ],
  },

  {
    slug: 'notas',
    category: 'biblioteca',
    title: 'Notas: el editor de Zenth',
    summary: 'Escribe con bloques (menú «/»), formato, tablas, imágenes, buscar y reemplazar, modo concentración, índice y exportación a Markdown, HTML o PDF.',
    keywords: ['nota', 'editor', 'markdown', 'bloques', 'slash', 'formato', 'imágenes', 'tabla', 'exportar', 'pdf', 'índice', 'concentración', 'buscar y reemplazar', 'autoguardado', 'portada', 'etiquetas'],
    updated: UPDATED,
    related: ['atajos/atajos-del-editor-de-notas', 'biblioteca/compartir-notas-y-lienzos', 'agenda/detalle-de-una-tarea'],
    blocks: [
      p('Las notas de Zenth usan un editor de bloques pensado para pensar por escrito: empiezas a escribir y le das forma sobre la marcha, sin salir del teclado.'),

      h2('Crear y guardar'),
      steps(
        'En **Biblioteca**, pulsa **Nuevo › Nota** (o convierte una tarea con **Convertir en nota**).',
        'Escribe un título en «Título de la nota» y elige una **portada** (un emoji) si quieres.',
        'Escribe en el cuerpo. Zenth **guarda solo** unos instantes después de que dejes de escribir; el indicador muestra **Guardando** y **Guardado**.',
        'Pulsa `Esc` para guardar y salir, o `Ctrl` + `S` para guardar sin salir.',
      ),

      h2('El menú de bloques «/»'),
      p('Escribe `/` en una línea vacía para abrir el menú de bloques, y sigue escribiendo para filtrarlo.'),
      table(
        ['Grupo', 'Bloques'],
        ['Formato', 'Texto, Título grande, mediano y chico, Lista, Lista numerada, Lista de tareas, Cita, Bloque de código.'],
        ['Insertar', 'Bloque destacado, Bloque de atención (advertencia), Tabla (3 × 3; se agranda con `Tab`), Separador, Imagen, Enlace y Fecha de hoy.'],
      ),

      h2('Formato al seleccionar'),
      p('Al seleccionar texto aparece una barra flotante con **negrita, cursiva, subrayado, tachado, código, resaltado, cita y enlace**. La barra de herramientas ofrece además tipografías (Inter, DM Sans, Sora, Lora, Playfair Display, JetBrains Mono, Patrick Hand, Gaegu y DynaPuff), tamaños (Normal, Grande, Enorme) y alineación.'),

      h2('Markdown mientras escribes'),
      p('Si conoces Markdown, no hace falta abrir ningún menú:'),
      table(
        ['Escribes', 'Obtienes'],
        ['`#` y espacio', 'Un título'],
        ['`-` y espacio', 'Una lista con viñetas'],
        ['`1.` y espacio', 'Una lista numerada'],
        ['`[]` y espacio', 'Una tarea con casilla'],
        ['`>` y espacio', 'Una cita'],
        ['`---`', 'Un separador'],
        ['`**texto**`', 'Negrita'],
      ),
      p('Al pegar texto de fuera, Zenth limpia el formato externo y conserva la estructura (títulos y listas).'),

      h2('Imágenes'),
      p('Pega una imagen con `Ctrl` + `V` o arrástrala al editor. Pulsa una imagen para ajustar su tamaño o quitarla.'),

      h2('Moverte dentro de una nota larga'),
      list(
        '**Buscar y reemplazar** con `Ctrl` + `F`: `Enter` va a la siguiente coincidencia, `Shift` + `Enter` a la anterior.',
        '**Índice de la nota:** un panel con los títulos para saltar de sección. En el móvil es un navegador lateral que muestra el porcentaje y el título actual.',
        '**Modo concentración** (`Ctrl` + `Shift` + `F`): oculta lo que sobra para escribir sin ruido.',
        '**Ancho del texto:** alterna entre columna de lectura y ancho completo.',
      ),

      h2('Etiquetas, compartir y exportar'),
      list(
        '**Etiquetar la nota** para agruparla con tus tareas.',
        '**Compartir** con otras personas: ver [Compartir notas y lienzos](/docs/biblioteca/compartir-notas-y-lienzos).',
        '**Exportar:** copiar como Markdown o como texto; descargar como `.md`, `.html` o PDF; o imprimir.',
        '**Mover a la papelera:** la nota se puede recuperar. Ver [Papelera](/docs/cuenta/papelera).',
      ),
      note('Si una nota nació de una tarea, mantiene su vínculo con ella. Puedes también **vincular** notas a tareas desde el editor de tareas: [Vincular documentos a tareas](/docs/biblioteca/vincular-documentos-a-tareas).'),
      p('La lista completa de atajos está dentro del editor con `Ctrl` + `/` y en [Atajos del editor de notas](/docs/atajos/atajos-del-editor-de-notas).'),
    ],
  },

  {
    slug: 'lienzos',
    category: 'biblioteca',
    title: 'Lienzos: dibujar y esquematizar',
    summary: 'Un lienzo infinito con Excalidraw para bocetos, diagramas y mapas de ideas, con figuras reutilizables y edición colaborativa.',
    keywords: ['lienzo', 'canvas', 'excalidraw', 'dibujo', 'diagrama', 'pizarra blanca', 'boceto', 'figuras', 'formas', 'esquema', 'mapa mental'],
    updated: UPDATED,
    related: ['biblioteca/compartir-notas-y-lienzos', 'biblioteca/vincular-documentos-a-tareas'],
    blocks: [
      p('Un **lienzo** es una superficie de dibujo libre para lo que no cabe en un texto: un diagrama, un boceto de pantalla, un mapa de ideas. Está construido sobre [Excalidraw](https://excalidraw.com), un editor de código abierto con trazo de mano alzada.'),

      h2('Crear y abrir un lienzo'),
      steps(
        'En **Biblioteca**, pulsa **Nuevo › Lienzo** («Pizarra de Excalidraw»).',
        'Ponle nombre en «Lienzo sin título».',
        'Dibuja. Zenth guarda automáticamente; al terminar, **Guardar y cerrar lienzo**.',
      ),
      p('Los lienzos se ven junto a tus notas, se filtran con **Lienzos** y se pueden buscar, mover, etiquetar y mandar a la papelera como cualquier otra entrada.'),

      h2('Figuras reutilizables'),
      p('¿Dibujaste algo que vas a querer usar otra vez? Guárdalo como **figura**:'),
      steps(
        'Selecciona uno o varios elementos en el lienzo.',
        'Abre el panel **Figuras** y pulsa **Guardar selección**. Zenth confirma con «Figura guardada».',
        'Para reutilizarla, pulsa la figura en el panel y se inserta en el lienzo. También puedes quitarla del panel.',
      ),
      p('En un lienzo compartido, las figuras que guarda cada persona aparecen en el panel de todos.'),

      h2('Trabajar con otras personas'),
      p('Un lienzo se puede compartir con permiso de **edición** o de **solo lectura**. Todas las personas invitadas dibujan sobre el mismo lienzo y ven los cambios de las demás en vivo, junto con quién está dibujando y quién solo mira. Ver [Compartir notas y lienzos](/docs/biblioteca/compartir-notas-y-lienzos).'),
      note('Los lienzos no tienen el modo Sugerencias de las notas: solo se puede editar o ver.'),

      h2('Vincularlos a tareas'),
      p('Un lienzo puede vincularse a una tarea o tarjeta, igual que una nota. Desde el detalle de la tarea abrirás el lienzo con un clic. Ver [Vincular documentos a tareas](/docs/biblioteca/vincular-documentos-a-tareas).'),
    ],
  },

  {
    slug: 'compartir-notas-y-lienzos',
    category: 'biblioteca',
    title: 'Compartir notas y lienzos',
    summary: 'Invita por correo con permiso de ver, sugerir o editar, trabaja en la misma nota en vivo, revisa sugerencias y guarda lo que te comparten.',
    keywords: ['compartir nota', 'colaborar', 'sugerencias', 'permisos', 'puede editar', 'puede ver', 'compartidos conmigo', 'presencia', 'tiempo real', 'invitar', 'guardar en mi biblioteca', 'modo sugerencia'],
    updated: UPDATED,
    related: ['biblioteca/notas', 'biblioteca/lienzos', 'privacidad/quien-ve-que'],
    blocks: [
      p('Una nota o un lienzo son tuyos hasta que los compartes. Al compartirlos, otras personas pueden verlos o trabajar en ellos contigo, sin copias ni versiones cruzadas.'),

      h2('Compartir con alguien'),
      steps(
        'Abre la nota o el lienzo y pulsa **Compartir**.',
        'Escribe el correo, elige el permiso y pulsa **Invitar**. Zenth confirma «Invitación enviada»; si el correo no puede enviarse, el acceso queda creado igualmente.',
        'También puedes elegir directamente a **personas de tus pizarras** de una lista.',
      ),
      table(
        ['Permiso', 'En una nota', 'En un lienzo'],
        ['Puede editar', 'Escribe sobre la misma nota.', 'Dibuja sobre el mismo lienzo.'],
        ['Puede sugerir', 'Propone cambios que tú revisas.', 'No existe en lienzos.'],
        ['Puede ver', 'Solo lee.', 'Solo mira.'],
      ),
      p('El panel muestra quién tiene **acceso**, las invitaciones pendientes y te deja retirar el permiso. **El propietario conserva el control del acceso** en todo momento.'),
      note('Si invitas a alguien sin cuenta, la invitación queda ligada a esa dirección y se cumple cuando se registre con ella.'),

      h2('Trabajar a la vez'),
      list(
        '**Presencia:** ves los avatares de quienes están en la nota o el lienzo y qué hacen («Está escribiendo», «Está sugiriendo», «Está viendo la nota», «Está dibujando»).',
        '**Cambios en vivo:** lo que escribe cada persona llega a las demás sin recargar.',
      ),

      h2('Modos: edición, sugerencias y visualización'),
      p('En una nota compartida, el selector de modo permite elegir cómo trabajas:'),
      table(
        ['Modo', 'Para qué'],
        ['Edición', 'Edita el documento directamente.'],
        ['Sugerencias', 'Propone cambios para revisión, sin tocar el texto original.'],
        ['Visualización', 'Lee el documento final.'],
      ),
      steps(
        'Quien tiene permiso de sugerir cambia al modo **Sugerencias**, edita y pulsa **Enviar sugerencia**.',
        'Quien puede editar ve un panel con las propuestas.',
        'Elige **Aplicar** o **Descartar** en cada una. Zenth confirma «Sugerencia aplicada» o «Sugerencia descartada».',
      ),

      h2('Cuando alguien comparte algo contigo'),
      list(
        'Recibes un correo con la invitación y un aviso en el [centro de notificaciones](/docs/primeros-pasos/busqueda-y-notificaciones).',
        'Lo encuentras en **Biblioteca › Compartidos conmigo**.',
        'Pulsa **Guardar en mi Biblioteca** para tenerlo junto a tus notas. **Quitar de mi Biblioteca** lo retira de tu vista sin borrar el original.',
      ),

      h2('Compartir con una pizarra'),
      p('Además de personas, una nota o lienzo puede darse a los **miembros de una pizarra** al vincularlo a una tarjeta: elige entre **Solo yo**, **La pizarra puede leer** o **La pizarra puede editar**. Ver [Vincular documentos a tareas](/docs/biblioteca/vincular-documentos-a-tareas).'),
      warn('Compartir con permiso de edición deja que otras personas cambien tu texto. Revisa el destinatario y el permiso antes de confirmar.', 'Antes de dar permiso de edición'),
    ],
  },

  {
    slug: 'tablas-y-hojas-de-calculo',
    category: 'biblioteca',
    title: 'Tablas y hojas de cálculo',
    summary: 'Tablas con fórmulas en español e inglés dentro de Zenth, y hojas de cálculo de Google Sheets para todo lo demás.',
    keywords: ['tabla', 'hoja', 'excel', 'spreadsheet', 'fórmulas', 'suma', 'buscarv', 'sheets', 'celdas', 'csv', 'funciones'],
    updated: UPDATED,
    related: ['atajos/atajos-del-editor-de-notas', 'integraciones/google-drive'],
    blocks: [
      p('Hay dos tipos de hoja en Zenth, y conviene no confundirlos.'),

      h2('Tablas de Zenth'),
      p('Las **tablas** son hojas de cálculo nativas: viven en Zenth, se abren en su propio editor y calculan fórmulas al instante. Si ya tenías tablas creadas, siguen ahí y las encuentras con el filtro **Hojas**.'),
      list(
        '**Fórmulas** que empiezan por `=`, por ejemplo `=SUMA(A1:A10)`. Funcionan tanto los nombres en español como en inglés (`SUMA` o `SUM`, `BUSCARV` o `VLOOKUP`, `SI` o `IF`).',
        '**Catálogo de funciones:** un panel con buscador («Buscar SUMA, BUSCARV, IF, VLOOKUP…») para descubrir y usar cualquier función.',
        '**Formato:** negrita, cursiva, subrayado, color del texto y de relleno, alineación y formato numérico (porcentaje, moneda…).',
        '**Filas y columnas:** insertar, eliminar, ordenar; las referencias de las fórmulas se ajustan solas.',
        '**Etiquetar**, **descargar como CSV**, deshacer y rehacer, y **eliminar** la tabla.',
      ),
      keys(
        [['Ctrl', 'S'], 'Guardar y salir'],
        [['Ctrl', 'Z'], 'Deshacer'],
        [['Ctrl', 'Y'], 'Rehacer'],
        [['Ctrl', 'B'], 'Negrita'],
        [['Ctrl', 'I'], 'Cursiva'],
        [['Ctrl', 'U'], 'Subrayado'],
        [['Ctrl', 'C'], 'Copiar la selección'],
      ),
      p('El cálculo lo hace un motor de fórmulas de código abierto (HyperFormula).'),

      h2('Hojas de Google'),
      p('Al elegir **Nuevo › Hoja de cálculo** se crea un archivo de **Google Sheets** en tu Drive. Puedes editarlo dentro de Zenth (insertar y eliminar filas y columnas, negrita, alineación…) o abrirlo en Google para usar todas sus funciones. Ver [Google Drive y Workspace](/docs/integraciones/google-drive).'),
      tip('Si necesitas colaboración simultánea completa, comentarios o gráficos avanzados, usa **Abrir en Google**.'),
    ],
  },

  {
    slug: 'archivos-pdf-y-notas-de-voz',
    category: 'biblioteca',
    title: 'Archivos, PDF y notas de voz',
    summary: 'Sube y consulta archivos, previsualiza PDFs sin salir de Zenth y graba notas de voz directamente en tu Drive.',
    keywords: ['archivos', 'subir', 'pdf', 'vista previa', 'audio', 'nota de voz', 'grabar', 'multimedia', 'imágenes', 'descargar', 'drive'],
    updated: UPDATED,
    related: ['integraciones/google-drive', 'biblioteca/explorar-la-biblioteca'],
    blocks: [
      h2('Subir archivos'),
      p('Con **Nuevo › Subir archivo** guardas archivos en tu Google Drive. Un panel de subidas muestra el progreso de cada archivo («% completado»), permite cancelarlos, minimizarlo y te avisa si alguno falla.'),
      p('También puedes **arrastrar** archivos a la Biblioteca. Si ya tenías archivos guardados directamente en Zenth, los ves en **Archivos Zenth** con los filtros **Archivos** y **Multimedia**.'),

      h2('Vista previa de PDF e imágenes'),
      p('Los PDF y las imágenes se abren en un visor dentro de Zenth, sin descargarlos. Desde el visor puedes **descargar** el archivo o **moverlo a la papelera**.'),

      h2('Notas de voz'),
      steps(
        'Pulsa **Nuevo › Nota de voz**.',
        'Concede el permiso del micrófono si el navegador lo pide.',
        'Graba y detén. El audio se guarda **en tu Google Drive**, no en Zenth.',
      ),
      note('Las notas de voz necesitan Drive conectado. Si el micrófono está bloqueado, mira [El micrófono no funciona](/docs/ayuda/el-microfono-no-funciona).'),

      h2('Dónde queda cada cosa'),
      table(
        ['Qué', 'Dónde se guarda'],
        ['Notas y lienzos', 'En Zenth.'],
        ['Documentos, hojas, presentaciones, formularios de Google', 'En tu Drive.'],
        ['Archivos que subes y notas de voz nuevas', 'En tu Drive.'],
        ['Archivos que ya estaban guardados en Zenth', 'En Zenth, visibles en Archivos Zenth.'],
      ),
    ],
  },

  {
    slug: 'vincular-documentos-a-tareas',
    category: 'biblioteca',
    title: 'Vincular documentos a tareas',
    summary: 'Adjunta notas, lienzos y archivos de Drive a una tarea o tarjeta, y decide qué acceso tiene la pizarra sobre los documentos de Zenth.',
    keywords: ['vincular', 'adjuntar', 'documentos', 'tarea', 'tarjeta', 'nota', 'lienzo', 'acceso de la pizarra', 'solo yo', 'expandir a nota', 'convertir en nota'],
    updated: UPDATED,
    related: ['biblioteca/compartir-notas-y-lienzos', 'agenda/detalle-de-una-tarea', 'pizarras/colaborar-en-tarjetas'],
    blocks: [
      p('Una tarea rara vez está sola: suele tener una nota de contexto, un diagrama o un documento de referencia. **Vincular** deja esos documentos a un clic de la tarea, sin copiarlos.'),

      h2('Vincular un documento'),
      steps(
        'Abre el editor de la tarea y pulsa **Documentos**.',
        'En **Vincular documentos**, busca en «Buscar notas, lienzos y archivos». Verás dos listas: **Biblioteca Zenth** y **Google Drive**.',
        'Elige lo que quieras vincular. Puedes también **crear un lienzo** ahí mismo.',
        'Guarda la tarea.',
      ),
      p('Si no tienes Drive conectado, la lista de Drive te ofrece **Conectar Google Drive**; y con **Explorar Drive** puedes elegir cualquier archivo, no solo los recientes.'),

      h2('Quién puede abrir el documento'),
      p('Cuando la tarea vive en una pizarra compartida, decides el acceso de la pizarra a los documentos **de Zenth** vinculados:'),
      table(
        ['Acceso', 'Efecto'],
        ['Solo yo', 'Los demás ven que hay un documento vinculado, pero no pueden abrirlo.'],
        ['La pizarra puede leer', 'Los miembros pueden abrirlo en solo lectura.'],
        ['La pizarra puede editar', 'Los miembros pueden editarlo.'],
      ),
      p('Si alguien intenta abrir un documento privado, ve «Nota privada» o «Lienzo privado», con «Sin acceso», y un aviso para pedirle al propietario que lo comparta con la pizarra. Los archivos de **Drive** conservan los permisos definidos en Google.'),

      h2('Convertir una tarea en nota'),
      p('Desde el detalle de cualquier tarea, **Convertir en nota** la expande a una nota completa de tu Biblioteca, manteniendo el vínculo. Es útil cuando una tarea de una línea se convierte en algo que merece páginas.'),
    ],
  },
];

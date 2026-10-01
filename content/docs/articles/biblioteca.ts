import { h2, keys, list, note, p, path, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const bibliotecaArticles: DocArticle[] = [
  {
    slug: 'explorar-la-biblioteca',
    category: 'biblioteca',
    title: 'Explorar la Biblioteca',
    summary: 'Un único explorador para tus notas y lienzos de Zenth y, si conectas Google, tu Drive: vistas, ubicaciones en árbol, filtros por tipo y búsqueda en todo o en un lugar.',
    keywords: ['biblioteca', 'entradas', 'explorador', 'notas', 'archivos', 'filtros', 'tipo', 'buscar', 'cuadrícula', 'lista', 'todo', 'recientes', 'destacados', 'compartidos', 'ubicaciones', 'carpetas', 'migas', 'nuevo', 'más'],
    updated: '2026-09-30',
    related: ['biblioteca/notas', 'biblioteca/lienzos', 'integraciones/google-drive'],
    blocks: [
      p('**Biblioteca** es donde viven tus notas, lienzos, archivos y, si conectas Google, tus documentos de Drive. Las notas y lienzos son de Zenth; los documentos, hojas, presentaciones y formularios de Google se guardan en tu Drive y Zenth los muestra y edita sin duplicarlos.'),

      h2('El lateral: vistas y ubicaciones'),
      p('En escritorio, la columna de la izquierda separa dos cosas: arriba, las **vistas**, que miran en toda la Biblioteca; debajo, las **ubicaciones**, que son los lugares donde se guardan las cosas.'),
      table(
        ['Sección', 'Qué encuentras'],
        ['Todo', 'Tus elementos de Zenth y los de Drive, juntos.'],
        ['Recientes', 'Lo último que abriste o editaste, de Zenth y de Drive.'],
        ['Compartidos conmigo', 'Lo que otras personas te compartieron, en una sola lista: notas y lienzos de Zenth y archivos de Drive.'],
        ['Destacados', 'Tus archivos destacados de Drive. Aparece al conectar Drive.'],
        ['Ubicaciones › Archivos Zenth', 'Lo que vive en Zenth: notas, lienzos y archivos, con sus carpetas.'],
        ['Ubicaciones › Google Drive', 'Tu Drive con sus carpetas. Si no lo conectaste, verás **Conectar Google Drive**.'],
      ),
      p('Cada ubicación es un árbol: la flecha despliega sus carpetas sin cambiarte de lugar y el nombre las abre. Las carpetas de Drive se cargan a medida que las despliegas. Más abajo ves el almacenamiento usado en Zenth y en Drive y, al pie, la [Papelera](/docs/cuenta/papelera). La columna se puede contraer a una franja de iconos.'),
      note('Si tenías carpetas de Zenth, siguen en **Archivos Zenth** (puedes renombrarlas, moverlas o eliminarlas). Las carpetas nuevas se crean en Drive.'),

      h2('Saber dónde estás'),
      list(
        'El título dice el lugar o la vista abierta.',
        'Dentro de una ubicación, las **migas** muestran la ruta desde **Archivos Zenth** o **Google Drive** hasta la carpeta abierta. Cada tramo te lleva de vuelta, y puedes soltar elementos sobre ellos para moverlos.',
        'La dirección de la página guarda dónde estás, con el filtro incluido: **Atrás** en el navegador vuelve al paso anterior, al recargar sigues en el mismo sitio y puedes guardar el enlace para volver.',
      ),

      h2('Filtrar por tipo'),
      p('Sobre el contenido hay una fila de filtros: **Todo**, **Notas**, **Lienzos**, **Documentos**, **Hojas**, **PDFs** y **Más**, que reúne **Presentaciones**, **Formularios**, **Multimedia**, **Carpetas** y **Archivos**.'),
      list(
        'El filtro acota el lugar abierto sin sacarte de él: en una carpeta de Drive, **PDFs** muestra solo los PDF de esa carpeta. También se combina con Recientes o Compartidos conmigo.',
        'Si eliges un tipo de **Más**, esa píldora toma su nombre.',
        'Al abrir otro lugar desde el lateral, el filtro vuelve a **Todo**.',
        'Si nada coincide, la Biblioteca lo dice y ofrece **Quitar filtro**.',
      ),

      h2('Ordenar y cambiar la vista'),
      p('Ordena por **Nombre**, **Última modificación**, **Creación** o **Tipo**, y alterna entre **cuadrícula** y **lista**. Zenth recuerda las dos elecciones.'),

      h2('Buscar'),
      list(
        'En el móvil y en pantallas medianas, **Buscar archivos, notas y carpetas…** filtra mientras escribes, ignorando tildes.',
        'La búsqueda mira en **toda la Biblioteca**, incluido lo que te compartieron, para que no haga falta recordar dónde guardaste algo.',
        'Si estás en **Archivos Zenth**, en **Google Drive** o en una carpeta, puedes acotarla a ese lugar. En una carpeta de Zenth incluye sus subcarpetas; en una de Drive, solo lo que está directamente dentro.',
      ),
      tip('En escritorio, usa el [buscador global](/docs/primeros-pasos/busqueda-y-notificaciones) con `Ctrl` + `K`: busca en todo Zenth a la vez (tareas, pizarras, notas y Drive).'),

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
      p('La Biblioteca se adapta: el botón de **lugar y vista** abre una hoja para elegir **Todo**, **Archivos Zenth** o **Google Drive**, o las vistas **Recientes**, **Compartidos conmigo** y **Destacados**. La fila de tipos se desliza de lado, el botón **+** crea una nota y **Mover a…** abre una hoja para elegir carpeta.'),
    ],
  },

  {
    slug: 'notas',
    category: 'biblioteca',
    title: 'Notas: el editor de Zenth',
    summary: 'Escribe y pega documentos con formato, organiza imágenes y tablas, crea fórmulas y diagramas, y enlaza secciones dentro de tus notas.',
    keywords: ['nota', 'editor', 'markdown', 'bloques', 'slash', 'formato', 'imágenes', 'tabla', 'exportar', 'pdf', 'índice', 'concentración', 'buscar y reemplazar', 'autoguardado', 'portada', 'etiquetas', 'historial', 'versiones', 'pegar desde ChatGPT', 'código', 'copiar código', 'buscar lenguaje', 'lenguajes', 'fórmula', 'latex', 'mermaid', 'diagrama', 'enlace interno', 'sección', 'clic derecho', 'menú contextual', 'texto alternativo', 'reemplazar imagen'],
    updated: '2026-10-01',
    related: ['atajos/atajos-del-editor-de-notas', 'biblioteca/historial-de-versiones', 'biblioteca/compartir-notas-y-lienzos', 'agenda/detalle-de-una-tarea'],
    blocks: [
      p('Las notas de Zenth usan un editor de bloques pensado para pensar por escrito: empiezas a escribir y le das forma sobre la marcha, sin salir del teclado.'),

      h2('Crear y guardar'),
      steps(
        'En **Biblioteca**, pulsa **Nuevo › Nota** (o convierte una tarea con **Convertir en nota**).',
        'Escribe un título en «Título de la nota» y elige una **portada** (un emoji) si quieres.',
        'Escribe en el cuerpo. Zenth **guarda solo** unos instantes después de que dejes de escribir. La cabecera indica los cambios pendientes, el guardado en curso y su confirmación.',
        'Pulsa `Esc` para guardar y salir, o `Ctrl` + `S` para guardar sin salir.',
      ),
      p('Si hay cambios pendientes, puedes pulsar el indicador para **Guardar ahora**. Si el guardado falla, aparece **No se guardó · Reintentar**: púlsalo para volver a intentarlo.'),

      h2('El menú de bloques «/»'),
      p('Escribe `/` en una línea vacía para abrir el menú de bloques, y sigue escribiendo para filtrarlo. La barra también tiene **Tipo de bloque** para transformar el bloque actual e **Insertar** para agregar contenido.'),
      table(
        ['Grupo', 'Bloques'],
        ['Formato', 'Texto, títulos de nivel 1 a 6, Lista, Lista numerada, Lista de tareas, Cita y Bloque de código.'],
        ['Insertar', 'Fórmula, Diagrama, Bloque destacado, Bloque de atención (advertencia), Tabla (3 × 3; se agranda con `Tab`), Separador, Imagen, Enlace y Fecha de hoy.'],
      ),

      h2('Formato al seleccionar'),
      p('Al seleccionar texto aparece una barra flotante con **negrita, cursiva, subrayado, tachado, bloque de código, resaltado, cita y enlace**. La barra de herramientas ofrece además tipografías (Inter, DM Sans, Sora, Lora, Playfair Display, JetBrains Mono, Patrick Hand, Gaegu y DynaPuff), tamaños (Normal, Grande, Enorme) y alineación.'),
      p('En **Más acciones de formato** puedes alinear el texto, mover el bloque arriba o abajo, duplicarlo y quitar el formato. En pantallas pequeñas, la barra se desliza horizontalmente para llegar a todos sus controles.'),

      h2('Markdown mientras escribes'),
      p('Si conoces Markdown, no hace falta abrir ningún menú:'),
      table(
        ['Escribes', 'Obtienes'],
        ['De `#` a `######` y espacio', 'Un título de nivel 1 a 6'],
        ['`-` y espacio', 'Una lista con viñetas'],
        ['`1.` y espacio', 'Una lista numerada'],
        ['`[]` y espacio', 'Una tarea con casilla'],
        ['`>` y espacio', 'Una cita'],
        ['`---`', 'Un separador'],
        ['`**texto**`', 'Negrita'],
        ['Tres acentos graves seguidos', 'Un bloque de código'],
        ['Un acento grave a cada lado del texto', 'Código dentro de una frase'],
      ),
      h2('Pegar desde ChatGPT y otros documentos'),
      p('Cuando pegas contenido con formato con `Ctrl` + `V`, Zenth intenta conservar su estructura: títulos, listas y subtareas, citas, tablas, enlaces, imágenes, bloques de código, fórmulas y notas al pie. También convierte el Markdown que pegas como texto. Como cada aplicación copia información distinta, puede que tengas que retocar algún detalle después de pegar.'),
      tip('Usa `Ctrl` + `Shift` + `V` para **pegar sin formato** y conservar el texto literal, sin convertir el Markdown. Dentro de un bloque de código, el pegado también conserva el texto literal.'),
      p('En los bloques de código, Zenth intenta reconocer el lenguaje cuando encuentra señales claras en el contenido. Abre **Lenguaje** para buscarlo y elegirlo. **Detectar automáticamente** vuelve a intentarlo; **Texto sin formato** muestra el código sin resaltado. En fragmentos cortos o ambiguos, puedes indicar el lenguaje manualmente.'),

      h2('Bloques de código'),
      p('Al seleccionar varias líneas, usa el botón **Código** o `Ctrl` + `E` para convertirlas en un bloque. Zenth conserva los saltos de línea y la sangría. En la barra del bloque, pulsa el selector que muestra el lenguaje actual para buscar por nombre o abreviatura, elegir otro o volver a **Detectar automáticamente**. El botón **Copiar código**, junto al selector, copia el bloque.'),
      p('Dentro del bloque, `Enter` agrega una línea; dos `Enter` seguidos al final te llevan a un párrafo nuevo. Puedes recorrer los resultados del selector de lenguaje con las flechas y cerrarlo con `Esc`.'),
      tip('Para escribir código dentro de una frase, sigue usando el formato en línea de Markdown con acentos graves; el botón Código crea un bloque.'),

      h2('Fórmulas'),
      steps(
        'Elige **Insertar › Fórmula**, o busca «Fórmula» en el menú `/`.',
        'Escribe la expresión en **Fórmula LaTeX**. Puedes insertar estructuras como **Fracción**, **Raíz**, **Potencia**, **Subíndice**, **Suma**, **Integral** o **Matriz**, y completar sus espacios.',
        'Comprueba la **Vista previa**. Marca **En un bloque separado** si quieres una fórmula independiente; desmárcalo para incluirla en la línea.',
        'Pulsa **Guardar fórmula** o `Ctrl` + `Enter`.',
      ),
      p('Para editar una fórmula, haz doble clic sobre ella o usa **Editar fórmula…** en el menú de clic derecho. En el campo LaTeX, `Tab` y `Shift` + `Tab` recorren los espacios vacíos de las estructuras insertadas.'),

      h2('Diagramas Mermaid'),
      steps(
        'Elige **Insertar › Diagrama**, o busca «Diagrama» en el menú `/`. Se crea un bloque Mermaid con un ejemplo de flujo.',
        'Edita el código del bloque. También puedes elegir el lenguaje **Mermaid** en un bloque de código existente.',
        'Pulsa **Ver diagrama** en la barra del bloque o en su menú de clic derecho para abrir la vista previa.',
      ),
      p('En escritorio, el diagrama se abre en un diálogo; en el móvil, en una hoja. Si hay un error de sintaxis, la vista previa muestra el problema y, cuando puede identificarla, la línea: corrígelo en el bloque y vuelve a abrirla. Si no se pudo cargar la vista previa, ofrece **Reintentar**.'),

      h2('Imágenes'),
      p('Sube una imagen desde **Insertar › Imagen**, pégala con `Ctrl` + `V` o arrástrala al editor. Pulsa la imagen para abrir sus herramientas:'),
      list(
        '**Tamaño:** elige el 25, 50, 75 o 100 % del ancho del texto, o arrastra los tiradores para ajustarlo.',
        '**Alineación:** izquierda, centro o derecha para imágenes fuera de listas y tablas.',
        '**Mover:** en escritorio, arrastra el control de movimiento; en el móvil, usa **Subir la imagen** y **Bajar la imagen**. Para imágenes fuera de listas y tablas también sirven `Ctrl` + `Shift` + `↑` o `↓`.',
        '**Texto alternativo:** escribe una descripción para las personas que usan lectores de pantalla.',
        '**Ver en grande**, **Reemplazar la imagen** por otra de tu dispositivo conservando su tamaño, alineación y texto alternativo, o **Quitar la imagen**.',
      ),

      h2('Tablas'),
      p('**Insertar › Tabla** crea una tabla editable de **3 × 3**. `Tab` avanza a la celda siguiente y, desde la última, agrega una fila; `Shift` + `Tab` vuelve a la anterior.'),
      p('En escritorio, haz clic derecho en una celda: **Agregar fila o columna** permite insertar arriba, abajo, a la izquierda o a la derecha; **Eliminar fila, columna o tabla** quita la fila, la columna o la tabla entera. La fila de encabezados no permite insertar otra fila por encima.'),

      h2('Enlaces a páginas y secciones'),
      steps(
        'Selecciona el texto que será el enlace y pulsa **Enlace** o `Ctrl` + `K`. Sin una selección, puedes escribir el **Texto del enlace**.',
        'En **Buscar sección o pegar enlace**, pega una dirección web o escribe el nombre de un título de esta nota. **Títulos de este documento** muestra todos con su jerarquía.',
        'Elige el destino o pulsa **Aplicar**. Las flechas recorren las opciones y `Enter` elige la activa.',
      ),
      p('Los enlaces internos te llevan al título dentro de la misma nota y siguen funcionando si lo renombras. Si eliminas el título, al editar el enlace Zenth avisa que la sección ya no existe y te permite elegir otra. En escritorio, el menú de clic derecho ofrece **Ir a la sección** o **Abrir enlace**, según el destino, además de editarlo o quitarlo.'),

      h2('El menú de clic derecho'),
      p('En escritorio, haz clic derecho en el texto o en un elemento para ver sus acciones. El menú se adapta: ofrece herramientas de imagen, lenguaje y copia de código, edición y copia de LaTeX, enlaces o filas y columnas de tabla. Sobre texto seleccionado también reúne formato, cortar, copiar y pegar; sobre un bloque, convertir, insertar, mover y duplicar.'),
      tip('Con `Shift` + clic derecho abres el menú del navegador, útil para su corrector ortográfico. En pantallas compactas se conserva el menú del navegador y la selección táctil; usa la barra de Zenth para sus herramientas.'),

      h2('Moverte dentro de una nota larga'),
      list(
        '**Buscar y reemplazar** con `Ctrl` + `F`: `Enter` va a la siguiente coincidencia, `Shift` + `Enter` a la anterior.',
        '**Índice de la nota:** en escritorio aparece como una guía estrecha en el borde derecho. Pasa el cursor, enfócala con el teclado o púlsala para desplegar los títulos; selecciona uno para saltar a esa sección. La flecha señala el título activo. En el móvil es un navegador lateral que muestra el porcentaje y el título actual.',
        '**Modo concentración** (`Ctrl` + `Shift` + `F`): oculta lo que sobra para escribir sin ruido.',
        '**Ancho del texto:** alterna entre columna de lectura y ancho completo.',
      ),
      p('En pantallas anchas, una barra al pie muestra los caracteres, los títulos y el ancho del texto. En el móvil no aparece, para dejarle más alto a la escritura.'),

      h2('Etiquetas, compartir y exportar'),
      list(
        '**Etiquetar la nota** para agruparla con tus tareas.',
        '**Compartir** con otras personas: ver [Compartir notas y lienzos](/docs/biblioteca/compartir-notas-y-lienzos).',
        '**Historial de versiones:** ve y restaura estados anteriores de la nota. Ver [Historial de versiones](/docs/biblioteca/historial-de-versiones).',
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
    summary: 'Invita con permiso de ver, sugerir o editar, trabaja en vivo y propone cambios que se guardan solos para su revisión.',
    keywords: ['compartir nota', 'colaborar', 'sugerencias', 'permisos', 'puede editar', 'puede ver', 'compartidos conmigo', 'presencia', 'tiempo real', 'invitar', 'guardar en mi biblioteca', 'modo sugerencia', 'sugerencia guardada', 'comentarios', 'menciones', 'adjuntos'],
    updated: '2026-10-01',
    related: ['biblioteca/revisar-sugerencias', 'biblioteca/historial-de-versiones', 'biblioteca/notas', 'privacidad/quien-ve-que'],
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
        '**Cambios en vivo:** lo que escribe cada persona llega a las demás sin recargar. También lo que agrega un asistente conectado con [Zenth MCP](/docs/integraciones/zenth-mcp) y lo que escribes en otra pestaña con la misma nota abierta.',
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
        'Quien puede sugerir o editar elige **Sugerencias**. Lo que agrega queda marcado y lo que propone quitar, tachado; la propuesta se guarda automáticamente.',
        'La cabecera muestra **Guardando…** y **Sugerencia guardada**. Puedes seguir ajustando tu propuesta sin enviarla de nuevo.',
        'Quien puede editar ve tarjetas junto a los cambios en escritorio; en el móvil, el botón de sugerencias abre la lista.',
        'Acepta o rechaza cada cambio por separado, o todos juntos. Ver [Revisar sugerencias](/docs/biblioteca/revisar-sugerencias).',
      ),
      p('También puedes seleccionar texto y elegir **Sugerir un cambio aquí** desde la barra de selección o el menú de clic derecho de escritorio. Al salir o cambiar de modo, Zenth intenta guardar lo pendiente; si falla, ofrece reintentarlo o descartar esos últimos cambios.'),

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
    slug: 'revisar-sugerencias',
    category: 'biblioteca',
    title: 'Revisar sugerencias',
    summary: 'Propón cambios que se guardan solos, revísalos junto al texto y conversa sobre cada uno con comentarios, menciones y adjuntos.',
    keywords: ['sugerencias', 'revisar', 'propuesta', 'aceptar', 'rechazar', 'aplicar', 'descartar', 'cambios', 'control de cambios', 'google docs', 'ia', 'asistente', 'mcp', 'conflicto', 'tachado', 'autoguardado', 'comentarios', 'menciones', 'adjuntos', 'hilo', 'tarjetas', 'sugerencia guardada'],
    updated: '2026-10-01',
    related: ['biblioteca/compartir-notas-y-lienzos', 'biblioteca/historial-de-versiones', 'integraciones/zenth-mcp'],
    blocks: [
      p('Una **sugerencia** es una propuesta de cambios sobre una nota que no toca el texto hasta que alguien la acepta. Puede venir de una persona con permiso de **sugerir** o **editar**, que escribió en el modo Sugerencias, o de tu asistente de IA conectado con [Zenth MCP](/docs/integraciones/zenth-mcp). Las del asistente llevan la marca **IA**.'),

      h2('Proponer cambios'),
      steps(
        'Elige el modo **Sugerencias**, o selecciona un fragmento y pulsa **Sugerir un cambio aquí**.',
        'Escribe, reemplaza o borra: el editor marca lo agregado y tacha lo que propones quitar. En escritorio, una tarjeta junto al texto resume cada cambio.',
        'La propuesta se guarda sola. La cabecera muestra **Guardando…** y luego **Sugerencia guardada**; puedes seguir editándola.',
      ),
      p('Para retirar un cambio propio mientras sugieres, abre su tarjeta y pulsa **Descartar**. También puedes usar **Deshacer**. Si la propuesta no se pudo guardar al salir, Zenth ofrece **Reintentar** o descartar lo pendiente.'),

      h2('El panel de sugerencias'),
      list(
        'En escritorio, las **tarjetas** aparecen en el margen derecho, a la altura del texto que cambian. El botón con el contador de la cabecera abre una revisión; **Terminar revisión** vuelve a la edición.',
        'Cada tarjeta identifica al autor, cuándo hizo la propuesta y qué quiere agregar, quitar o reemplazar. Pulsa la tarjeta para ampliarla y ver el detalle.',
        'La tarjeta abierta ofrece flechas de **Cambio anterior** y **Cambio siguiente**, con su posición en la lista. Las tarjetas cerradas muestran el número de comentarios cuando tienen un hilo.',
        'En el móvil, el botón de sugerencias abre una **hoja desde abajo** con las propuestas y sus cambios. Elige uno para verlo en la nota.',
        'El modo concentración oculta las tarjetas del margen para dejar espacio a la escritura.',
      ),

      h2('Ver un cambio en su lugar'),
      steps(
        'Pulsa la tarjeta de un cambio.',
        'La nota pasa a **modo revisión**, de solo lectura: salta al lugar del cambio y lo destaca.',
        'En el texto, lo anterior aparece **tachado** y lo nuevo **marcado**. En un párrafo de solo texto, la marca es palabra por palabra.',
        'Pulsa otras tarjetas para recorrer los cambios. **Terminar revisión** vuelve a la edición normal.',
      ),

      h2('Aceptar o rechazar'),
      table(
        ['Acción', 'Qué hace'],
        ['Aceptar este cambio', 'Aplica solo ese cambio a la nota. Los demás siguen pendientes.'],
        ['Rechazar este cambio', 'Lo descarta. Queda recordado: no vuelve a aparecer al recargar.'],
        ['Aceptar todo', 'Aplica todos los cambios que se pueden aplicar, de una vez.'],
        ['Rechazar todo', 'Descarta la sugerencia completa.'],
      ),
      p('Cuando a una sugerencia no le quedan cambios pendientes, **se cierra sola**. Antes de aplicar cambios, Zenth guarda una versión de la nota en el [historial](/docs/biblioteca/historial-de-versiones), así que siempre puedes volver atrás.'),
      note('Si alguien editó la nota **en esa misma parte** después de que se hizo la propuesta, la tarjeta lo avisa y ese cambio **solo se puede rechazar**: aplicarlo pisaría lo que se escribió después. Los cambios en otras partes de la nota se aplican sin problema.', 'Cuando la nota cambió después'),
      p('Aceptar y rechazar es para el **propietario** y las personas con permiso de **edición**. Quien solo puede sugerir o ver, ve las sugerencias pero no las decide.'),

      h2('Comentarios, menciones y adjuntos'),
      p('En escritorio, abre una tarjeta para ver su hilo. Si aparece **Agregar un comentario…**, puedes conversar sobre ese cambio antes de decidirlo. Para comentar sobre un cambio propio, espera a que su sugerencia esté guardada.'),
      steps(
        'Escribe en **Agregar un comentario…**. Pulsa **Mencionar a alguien** o escribe `@` y elige una persona de la nota.',
        'Usa **Adjuntar archivos** si necesitas acompañarlo con un documento o una imagen. Puedes agregar hasta **10 archivos**, de hasta **15 MB** cada uno.',
        'Pulsa **Publicar el comentario** o `Enter`. `Shift` + `Enter` agrega un salto de línea. Si está abierta la lista de menciones, `Enter` elige primero a la persona.',
      ),
      p('El propietario y quienes pueden editar o sugerir pueden comentar; quienes solo pueden ver leen los hilos existentes. Puedes borrar tus propios comentarios; el propietario y los editores también pueden borrar los de otras personas. Los adjuntos del hilo se abren desde el comentario.'),
      tip('Si le pides a tu asistente que corrija o reescriba una nota, no la cambia: deja una sugerencia con la marca **IA** para que la revises aquí.'),
    ],
  },

  {
    slug: 'historial-de-versiones',
    category: 'biblioteca',
    title: 'Historial de versiones',
    summary: 'Vuelve a cualquier estado anterior de una nota. Zenth guarda versiones mientras escribes y siempre antes de que la cambie la IA; puedes ponerles nombre y restaurarlas.',
    keywords: ['historial', 'versiones', 'versión anterior', 'restaurar', 'deshacer', 'recuperar', 'volver atrás', 'nombre de versión', 'copia', 'respaldo', 'google docs', 'ia'],
    updated: '2026-09-29',
    related: ['biblioteca/notas', 'biblioteca/revisar-sugerencias', 'cuenta/papelera'],
    blocks: [
      p('El **historial de versiones** guarda estados anteriores de tus notas para que puedas verlos y volver a cualquiera. Funciona como en Google Docs: la nota actual va arriba y, debajo, las versiones anteriores.'),

      h2('Abrir el historial'),
      steps(
        'Abre una nota.',
        'Pulsa el botón **Historial** de la cabecera. En escritorio se abre una columna a la derecha; en el móvil, una hoja desde abajo.',
        'Arriba está la **Versión actual** y, debajo, las anteriores agrupadas por **Hoy**, **Ayer** y fecha, con la hora, quién escribió y su nombre si tiene.',
      ),

      h2('Cuándo se guarda una versión'),
      list(
        'Mientras escribes, **como máximo una cada 10 minutos**.',
        'Cuando **otra persona** empieza a editar la nota.',
        'Siempre **antes de un cambio de la IA**: si un asistente conectado agrega algo, la versión de antes queda guardada.',
        'Siempre **antes de aplicar sugerencias** y **antes de restaurar** otra versión.',
        'Cuando tú **le pones nombre** a la versión actual.',
      ),
      p('Las versiones guardadas por un motivo especial lo dicen: «Antes de un cambio de la IA», «Antes de aplicar sugerencias» o «Antes de restaurar». Una nota vacía no genera versiones.'),

      h2('Ver y restaurar una versión'),
      steps(
        'Pulsa una versión de la lista.',
        'La nota pasa a solo lectura y marca en su lugar **lo que cambiaría si la restauras**: lo que se iría, **tachado**; lo que volvería, **marcado**. La cabecera dice qué versión estás viendo.',
        'Pulsa **Restaurar** y confirma. Si solo querías mirar, pulsa **Volver a la actual**.',
      ),
      note('Restaurar **no borra nada**: antes de restaurar, Zenth guarda la versión que tenías como «Antes de restaurar». Si te arrepientes, restaura esa.', 'Siempre puedes deshacerlo'),

      h2('Ponerle nombre'),
      p('Pulsa **Ponerle nombre** en la versión actual, o en una anterior mientras la ves, y escribe algo como «Antes de la reunión con el cliente». Las versiones con nombre se ven en negrita y **nunca se borran**.'),

      h2('Cuánto tiempo se conservan'),
      p('Como en Google Docs, el historial no tiene un tope de cantidad: con el tiempo, Zenth va juntando las versiones viejas para no ocupar espacio de más.'),
      table(
        ['Antigüedad', 'Qué se conserva'],
        ['Última semana', 'Todas las versiones.'],
        ['De 7 a 90 días', 'La última versión de cada día.'],
        ['Más de 90 días', 'La última versión de cada semana.'],
        ['Con nombre', 'Siempre, sin importar la antigüedad.'],
      ),
      p('Si eliminas una nota de forma definitiva desde la [Papelera](/docs/cuenta/papelera), su historial se elimina con ella.'),

      h2('Quién puede verlo'),
      list(
        'El **propietario** y las personas con permiso de **edición** ven el historial y restauran versiones.',
        'Quien solo puede **ver** o **sugerir** no ve el historial: una versión anterior puede tener texto que se quitó a propósito antes de compartir.',
        'Un asistente de IA conectado **no puede** restaurar versiones ni ponerles nombre. Eso lo decides siempre tú.',
      ),
      tip('Por ahora el historial es para **notas**. Los lienzos todavía no lo tienen.'),
    ],
  },

  {
    slug: 'archivos-pdf-y-notas-de-voz',
    category: 'biblioteca',
    title: 'Archivos, PDF y notas de voz',
    summary: 'Sube y consulta archivos, previsualiza PDFs sin salir de Zenth y graba notas de voz directamente en tu Drive.',
    keywords: ['archivos', 'subir', 'pdf', 'vista previa', 'audio', 'nota de voz', 'grabar', 'multimedia', 'imágenes', 'descargar', 'drive'],
    updated: '2026-09-30',
    related: ['integraciones/google-drive', 'biblioteca/explorar-la-biblioteca'],
    blocks: [
      h2('Subir archivos'),
      p('Con **Nuevo › Subir archivo** guardas archivos en tu Google Drive. Un panel de subidas muestra el progreso de cada archivo («% completado»), permite cancelarlos, minimizarlo y te avisa si alguno falla.'),
      p('También puedes **arrastrar** archivos a la Biblioteca. Si ya tenías archivos guardados directamente en Zenth, los ves en **Archivos Zenth**; para ver solo esos, usa **Más › Archivos** o **Más › Multimedia** en la fila de filtros.'),

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

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
    summary: 'Escribe con bloques (menú «/»), formato, tablas, imágenes, buscar y reemplazar, modo concentración, índice y exportación a Markdown, HTML o PDF.',
    keywords: ['nota', 'editor', 'markdown', 'bloques', 'slash', 'formato', 'imágenes', 'tabla', 'exportar', 'pdf', 'índice', 'concentración', 'buscar y reemplazar', 'autoguardado', 'portada', 'etiquetas', 'historial', 'versiones'],
    updated: '2026-09-29',
    related: ['atajos/atajos-del-editor-de-notas', 'biblioteca/historial-de-versiones', 'biblioteca/compartir-notas-y-lienzos', 'agenda/detalle-de-una-tarea'],
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
    summary: 'Invita por correo con permiso de ver, sugerir o editar, trabaja en la misma nota en vivo, revisa sugerencias y guarda lo que te comparten.',
    keywords: ['compartir nota', 'colaborar', 'sugerencias', 'permisos', 'puede editar', 'puede ver', 'compartidos conmigo', 'presencia', 'tiempo real', 'invitar', 'guardar en mi biblioteca', 'modo sugerencia'],
    updated: '2026-09-29',
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
        'Quien tiene permiso de sugerir cambia al modo **Sugerencias**, edita y pulsa **Enviar sugerencia**.',
        'Quien puede editar ve la sugerencia en el panel de la derecha, separada en cambios.',
        'Acepta o rechaza cada cambio por separado, o todos juntos. Ver [Revisar sugerencias](/docs/biblioteca/revisar-sugerencias).',
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
    slug: 'revisar-sugerencias',
    category: 'biblioteca',
    title: 'Revisar sugerencias',
    summary: 'Revisa las propuestas de otras personas y de tu asistente de IA como en Google Docs: cada cambio en su lugar, con lo anterior tachado, y decide uno por uno.',
    keywords: ['sugerencias', 'revisar', 'propuesta', 'aceptar', 'rechazar', 'aplicar', 'descartar', 'cambios', 'control de cambios', 'google docs', 'ia', 'asistente', 'mcp', 'conflicto', 'tachado'],
    updated: '2026-09-29',
    related: ['biblioteca/compartir-notas-y-lienzos', 'biblioteca/historial-de-versiones', 'integraciones/zenth-mcp'],
    blocks: [
      p('Una **sugerencia** es una propuesta de cambios sobre una nota que no toca el texto hasta que alguien la acepta. Puede venir de una persona con permiso de **sugerir**, que escribió en el modo Sugerencias, o de tu asistente de IA conectado con [Zenth MCP](/docs/integraciones/zenth-mcp). Las del asistente llevan la marca **IA**.'),

      h2('El panel de sugerencias'),
      list(
        'En escritorio, las sugerencias aparecen en una **columna a la derecha** del texto, que se abre sola cuando hay alguna. El botón con el contador, en la cabecera de la nota, la muestra u oculta.',
        'En el móvil, el mismo botón abre una **hoja desde abajo**.',
        'Cada sugerencia muestra quién la hizo, la fecha y su **resumen completo**, sin cortar.',
        'Debajo, la sugerencia está separada en **cambios**: cada uno es una tarjeta que dice qué hace (**Reemplaza**, **Agrega**, **Quita** o **Cambia el título**) y muestra el texto entero.',
        'Cuando un párrafo se reemplaza por otro, la tarjeta lo muestra en una sola línea: las palabras que se van, **tachadas**, y las que llegan, **marcadas**.',
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

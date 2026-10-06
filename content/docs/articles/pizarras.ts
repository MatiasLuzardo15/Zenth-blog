import { boardMove, chain, h2, h3, list, note, p, path, rule, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const pizarrasArticles: DocArticle[] = [
  {
    slug: 'crear-y-organizar-pizarras',
    category: 'pizarras',
    title: 'Crear y organizar pizarras',
    summary: 'Crea pizarras por proyecto, marca tus favoritas, personaliza su diseño y conserva los proyectos terminados cerrando la pizarra.',
    keywords: ['tablero', 'kanban', 'trello', 'proyecto', 'listas', 'columnas', 'nueva pizarra', 'icono', 'color', 'diseño', 'eliminar pizarra', 'salir', 'descripción', 'favoritas', 'estrella', 'cerrar pizarra'],
    updated: '2026-10-06',
    related: ['pizarras/campos-personalizados', 'pizarras/cerrar-y-reabrir-pizarras', 'pizarras/acciones-de-listas', 'pizarras/vistas-de-pizarra', 'pizarras/calendario-de-pizarra', 'pizarras/compartir-una-pizarra', 'cuenta/papelera'],
    blocks: [
      p('Una **pizarra** es un tablero por proyecto: tiene sus propias listas, sus tarjetas y, si la compartes, sus miembros. Puedes tener tantas como necesites, y cada una empieza siendo privada.'),

      h2('Crear una pizarra'),
      steps(
        'Ve a **Pizarras** (`Alt` + `2`) y abre el selector de la cabecera.',
        'Elige **Nueva pizarra**.',
        'Ponle nombre, elige un icono y pulsa **Crear**.',
      ),
      p('Para cambiar de pizarra usa el mismo selector. Ahí también aparecen, en una sección aparte, las pizarras **compartidas conmigo** (con tu rol en cada una) y las **invitaciones** pendientes.'),

      h2('Marcar tus favoritas'),
      steps(
        'Abre el selector de pizarras. En el móvil, pulsa el nombre de la pizarra.',
        'Pulsa la **estrella** junto a una pizarra para marcarla como favorita.',
        'La pizarra pasa a **Favoritas**, al principio del selector. Pulsa la estrella otra vez para quitarla.',
      ),
      p('Puedes marcar pizarras propias o compartidas, incluso si eres Observador. Las favoritas son **personales** y se guardan en tu cuenta: no cambian el orden de tus compañeros ni conceden permisos nuevos. Una pizarra cerrada conserva su estrella y vuelve a Favoritas cuando la reabres.'),

      h2('Personalizar una pizarra'),
      p('El menú de la pizarra activa (la sección «Esta pizarra» del selector) reúne todo lo que la define:'),
      table(
        ['Opción', 'Qué hace'],
        ['Acerca de esta pizarra', 'Una descripción para dar contexto a los miembros.'],
        ['Visibilidad', 'Privada o con enlace público de solo lectura. Ver [Pizarra pública con enlace](/docs/pizarras/pizarra-publica-con-enlace).'],
        ['Cambiar icono', 'El icono que la identifica en el selector y en las listas.'],
        ['Color de la pizarra', 'Da color a la cabecera para reconocerla de un vistazo.'],
        ['Diseño', '**Horizontal**: columnas en una sola fila con desplazamiento lateral. **Ajustar al espacio**: columnas en varias filas. También tiene un botón propio en la cabecera. En el móvil navegas por listas, una por pantalla.'],
      ),
      p('Renombrar, cambiar icono y cambiar ajustes de la pizarra requieren ser administrador. Cualquier rol puede elegir el diseño de columnas: un Administrador o Miembro lo guarda en la pizarra; un Observador lo cambia solo para sí. El ancho y el plegado de las columnas son preferencias locales. Ver [Vistas y espacio de la pizarra](/docs/pizarras/vistas-de-pizarra).'),
      p('En escritorio, **Vista** permite también cambiar a **Tabla** o **Calendario**. El calendario organiza las tarjetas de esta pizarra por mes, semana o día; la elección de vista se recuerda en tu navegador y no cambia la del equipo. Ver [Calendario de la pizarra](/docs/pizarras/calendario-de-pizarra).'),
      p('Para añadir información propia del proyecto, abre **Colaboración › Preferencias › Campos**. Puedes definir texto, números, opciones, casillas y fechas para sus tarjetas. Ver [Campos personalizados](/docs/pizarras/campos-personalizados).'),

      h2('Listas'),
      p('Cada pizarra tiene sus propias listas (columnas). Si tienes permiso para editarlas:'),
      list(
        '**Añade** una con el botón de nueva lista, escribiendo su nombre.',
        '**Renómbrala** tocando el título.',
        '**Reordénalas** arrastrando el asa de puntos de la cabecera de cada columna.',
        'Cambia su **color de acento** para distinguirlas.',
        '**Elimínala** si ya no la necesitas: sus tarjetas no se pierden, pasan a la lista de respaldo o, si no queda ninguna, a la bandeja.',
      ),
      p('Las listas de una pizarra nueva son Alto, Medio, Bajo y Pendientes, pero son solo un punto de partida: una tarjeta puede vivir en cualquier lista que crees.'),
      note('La **prioridad** de una tarjeta es, en realidad, la lista donde está. Por eso el campo «Prioridad» del editor muestra los nombres de tus listas.'),
      p('El menú **…** de cada lista permite además ordenar sus tarjetas, moverlas juntas, archivar las completadas, fijar un límite, copiar la lista o llevarla a otra pizarra. Los pasos y sus diferencias están en [Acciones de listas](/docs/pizarras/acciones-de-listas).'),

      h2('Cerrar una pizarra'),
      p('El propietario y los administradores pueden **Cerrar pizarra** para retirarla de la lista normal y conservar su contenido en solo lectura. Puedes reabrirla desde **Pizarras cerradas**. Ver [Cerrar y reabrir pizarras](/docs/pizarras/cerrar-y-reabrir-pizarras).'),

      h2('Salir de una pizarra o eliminarla'),
      list(
        '**Salir** (si no eres el propietario): dejas de ver la pizarra y sus tarjetas. Podrás volver si un administrador te invita otra vez. Un administrador solo puede salir si queda al menos otro.',
        '**Eliminar** (solo el propietario): las tareas de la pizarra pasan a la [papelera](/docs/cuenta/papelera) y la pizarra desaparece para todos sus miembros. Revisa la confirmación antes de eliminarla: cerrar permite conservarla entera.',
      ),
      p('Si eliminas tu **pizarra predeterminada**, Zenth designa otra pizarra propia abierta o crea una nueva vacía. Cerrar una pizarra conserva su contenido; no crea una sustituta por ese motivo.'),
    ],
  },

  {
    slug: 'cerrar-y-reabrir-pizarras',
    category: 'pizarras',
    title: 'Cerrar y reabrir pizarras',
    summary: 'Retira una pizarra de la lista sin perder su contenido, consúltala en solo lectura y reábrela cuando la necesites.',
    keywords: ['cerrar pizarra', 'pizarras cerradas', 'reabrir pizarra', 'archivar proyecto', 'solo lectura', 'conservar tablero', 'eliminar pizarra', 'pausar correos', 'pausar automatizaciones'],
    updated: '2026-10-06',
    related: ['pizarras/crear-y-organizar-pizarras', 'pizarras/compartir-una-pizarra', 'pizarras/automatizaciones', 'pizarras/pizarra-publica-con-enlace', 'cuenta/papelera'],
    blocks: [
      p('Cuando terminas un proyecto, **cerrar la pizarra** permite apartarla sin perder sus listas, tarjetas ni colaboración. Puedes volver a consultarla y reabrirla más adelante.'),

      h2('Cerrar una pizarra'),
      steps(
        'Abre la pizarra que quieres cerrar.',
        'En escritorio, abre su selector y busca la sección **Esta pizarra**. En móvil, abre el menú **…** de la cabecera y pulsa **Ajustes de la pizarra**.',
        'Elige **Cerrar pizarra**. Solo el propietario y los administradores tienen esta acción.',
      ),
      p('La pizarra sale de las secciones habituales del selector y pasa a **Pizarras cerradas**. Si la estás viendo, aparece la franja **Esta pizarra está cerrada**.'),

      h2('Consultar una pizarra cerrada'),
      p('Abre el selector —el nombre de la pizarra en móvil— y elige su nombre en **Pizarras cerradas**. Sus miembros mantienen el acceso para leer el contenido.'),
      list(
        'Todos quedan en **solo lectura**, incluido el propietario: no se crean, editan, completan ni mueven tarjetas; tampoco se cambian listas, etiquetas, campos personalizados, checklists, comentarios o reglas.',
        'La gestión de miembros, las invitaciones y los ajustes esperan hasta reabrirla.',
        'Puedes leer los avisos existentes y marcarlos como leídos. Si no eres propietario, puedes salir respetando la regla del último administrador.',
        'Las favoritas personales se conservan. Cerrar no envía las tarjetas a la papelera.',
      ),
      p('Sus tarjetas dejan de aparecer en **Agenda** y en el historial del día mientras la pizarra esté cerrada. Puedes consultarlas en la propia pizarra y en su historial. Al reabrir, vuelven a Agenda las que tenían activada esa visibilidad.'),

      h2('Reabrir una pizarra'),
      steps(
        'Busca la pizarra en **Pizarras cerradas**.',
        'Pulsa el icono **Reabrir pizarra** junto a su nombre, o ábrela y pulsa **Reabrir** en la franja.',
        'Vuelve a trabajar con sus listas y tarjetas: reaparece entre las abiertas, con los mismos permisos y favoritos.',
      ),
      p('Solo el propietario y los administradores pueden reabrir. Un Miembro u Observador puede consultar la pizarra y pedir a un administrador que la reabra.'),

      h2('Correos, automatizaciones y enlace público'),
      list(
        'Los **correos de la pizarra** quedan pausados. Los pendientes pueden continuar al reabrir, según tus preferencias de correo.',
        'Las **automatizaciones** se conservan y dejan de ejecutarse mientras esté cerrada. Al reabrir, las reglas activas vuelven a responder a nuevos cambios; las que habías desactivado siguen desactivadas.',
        'El **enlace público** deja de mostrar el contenido. Si la pizarra tenía visibilidad Con enlace, al reabrir vuelve a estar disponible con esa visibilidad.',
        'Tu asistente conectado por [Zenth MCP](/docs/integraciones/zenth-mcp) tampoco puede modificarla. Reábrela desde Zenth antes de pedir cambios.',
      ),

      h2('Eliminar una pizarra cerrada'),
      p('Solo el propietario ve **Eliminar pizarra** junto al nombre en Pizarras cerradas. Pulsa el icono de papelera y revisa la confirmación; **Cancelar** conserva todo y **Eliminar** retira la pizarra para sus miembros.'),
      note('La pizarra eliminada no se puede reabrir. Sus tarjetas van a la [papelera](/docs/cuenta/papelera), donde pueden recuperarse como tareas; la papelera no restaura la pizarra completa con sus listas y miembros.'),
    ],
  },

  {
    slug: 'tarjetas-y-bandeja-rapida',
    category: 'pizarras',
    title: 'Tarjetas y bandeja rápida',
    summary: 'Captura ideas sin clasificar en la bandeja, conviértelas en tarjetas, muévelas entre listas, archiva las que terminas y decide si aparecen en Agenda.',
    keywords: ['tarjeta', 'bandeja', 'inbox', 'captura', 'arrastrar', 'mover', 'completar', 'tachada', 'archivar', 'archivadas', 'buscar en pizarra', 'filtrar', 'lista', 'tareas', 'campos personalizados'],
    updated: '2026-10-06',
    related: ['pizarras/campos-personalizados', 'pizarras/seleccionar-y-gestionar-tarjetas', 'pizarras/mover-y-duplicar-tarjetas', 'pizarras/acciones-de-listas', 'agenda/historial-de-completadas', 'pizarras/colaborar-en-tarjetas'],
    blocks: [
      p('Una **tarjeta** es una tarea dentro de una pizarra. Usa el mismo editor que en Agenda (fecha, hora, duración, repetición, etiquetas, pasos, imágenes, documentos), con dos añadidos: vive en una lista y puede compartirse con el equipo.'),

      h2('La bandeja rápida'),
      p('La bandeja es el lugar para **capturar sin pensar**. Escribe «Añade una tarea rápidamente…» y pulsa Enter: nace una tarjeta sin fecha y sin prioridad, sin abrir el editor.'),
      list(
        'Las tarjetas de la bandeja son las que aún no has clasificado.',
        '**Arrástralas** a una lista y salen de la bandeja automáticamente, con esa lista como prioridad. También puedes devolver una tarjeta a la bandeja arrastrándola de vuelta.',
        'En pantallas pequeñas no hay bandeja lateral: la primera lista recoge lo que no está clasificado.',
      ),

      h2('Crear tarjetas'),
      list(
        'Directamente en una lista, con **Añadir tarea** al final de la columna.',
        'Desde la bandeja rápida, para capturar primero y clasificar después.',
        'Tocando el botón **+** de la barra inferior en el móvil.',
      ),
      p('Si tienes permiso de edición puedes además **arrastrar** las tarjetas entre listas para mover el trabajo.'),
      p('Para elegir una posición exacta o cambiar de pizarra, abre el detalle y usa **Mover tarjeta**. **Duplicar tarjeta** crea una copia con el título y destino que elijas. Ver [Mover y duplicar tarjetas](/docs/pizarras/mover-y-duplicar-tarjetas).'),
      p('En escritorio, el **clic derecho** sobre una tarjeta del tablero o una fila de la tabla reúne sus acciones. Para trabajar con varias a la vez, usa la selección y su barra inferior. Ver [Seleccionar y gestionar tarjetas](/docs/pizarras/seleccionar-y-gestionar-tarjetas).'),

      h2('Campos de la tarjeta'),
      p('Si la pizarra tiene campos personalizados, abre el detalle de una tarjeta y busca **Campos**. Sus valores se guardan automáticamente al rellenarlos, también en el móvil. Puedes ver los que tengan activado **Mostrar en la tarjeta** en la cara frontal. Ver [Campos personalizados](/docs/pizarras/campos-personalizados).'),

      h2('Inicio y vencimiento'),
      p('El editor de la pizarra permite distinguir **Inicio**, el día en que empieza el trabajo, y **Vence**, el día en que debe terminar. Puedes poner solo una de las fechas o ambas. Quita el inicio con el botón **Quitar fecha de inicio** para volver a dejarlo sin inicio.'),
      p('El detalle muestra ambas fechas. La tarjeta puede resumirlas como «1 oct – 5 oct» o «Desde 1 oct» cuando solo hay inicio. La fecha de inicio no oculta la tarjeta hasta ese día: sigue visible en su lista.'),
      p('El inicio no puede quedar después del vencimiento. Si eliges un inicio posterior, el editor lleva el vencimiento a ese día; si adelantas el vencimiento por delante del inicio, el inicio se ajusta también. En una serie repetida, cada ocurrencia conserva la distancia entre las dos fechas.'),
      tip('Usa [Calendario de la pizarra](/docs/pizarras/calendario-de-pizarra) para organizar estas tarjetas por fecha. Se colocan en su vencimiento o, si solo tienen inicio, en el día de inicio.'),

      h2('Completar y archivar'),
      p('Al completar una tarjeta **sin repetición**, se queda **tachada en su lista**, en el mismo sitio. Así el equipo ve lo que se acaba de cerrar antes de que desaparezca.'),
      steps(
        'Marca el círculo de la tarjeta: queda tachada.',
        'Pasa el cursor por encima y pulsa el icono de **Archivar** que aparece a la derecha. En el móvil el icono está siempre a la vista.',
        'La tarjeta sale de la lista y va a **Completadas**, el [historial de completadas](/docs/agenda/historial-de-completadas) de la pizarra.',
      ),
      list(
        'Si vuelves a marcar el círculo de una tachada, se reabre y sigue en su lista.',
        'Una tachada que **arrastras a otra lista** sigue tachada.',
        'Si sueltas una tarjeta sobre **Completadas**, se completa y se archiva de una vez.',
        'En la **bandeja rápida** no hay listas: lo que completas ahí se archiva directamente.',
      ),
      note('Una tarjeta **repetida** pasa directamente al historial cuando la completas, y el tablero o la tabla muestran la siguiente ocurrencia pendiente según su fecha. No queda una copia tachada junto a ella en esas vistas. Esto también ocurre si la completas desde Agenda, una automatización o tu asistente. El calendario puede mostrar la ocurrencia terminada en su día. Ver [Fechas futuras y tareas repetidas](/docs/pizarras/vistas-de-pizarra#fechas-futuras-y-tareas-repetidas).'),
      p('Mientras no la archives, una tarjeta sin repetición tachada sigue contando en los filtros de la pizarra. Las archivadas no cuentan en las listas ni en sus recuentos; el [calendario](/docs/pizarras/calendario-de-pizarra#tarjetas-completadas-y-archivadas) permite verlas tachadas en su fecha.'),
      p('Para retirar varias tachadas de una vez, abre el menú **…** de su lista y elige **Archivar completadas**. Las tarjetas pendientes siguen donde estaban.'),

      h2('Entrar a una reunión desde la tarjeta'),
      p('Una tarjeta pendiente con un enlace de reunión de Zenth muestra **Entrar a la reunión** en su cara frontal, sin abrir el detalle. Si ya estás en esa llamada, el botón pasa a **Mostrar la llamada**. Los enlaces de otros proveedores se abren desde el detalle de la tarjeta.'),
      p('La entrada usa la misma preparación de audio y las mismas condiciones de acceso que el detalle. Consulta [Audio y dispositivos](/docs/reuniones/audio-y-dispositivos) para preparar el micrófono antes de entrar.'),

      h2('¿Aparece en Agenda?'),
      p('Por defecto, las tarjetas de una pizarra viven solo en su tablero. Si quieres que las **tareas nuevas de una pizarra** aparezcan también en Agenda, activa **Ajustes › Productividad › Añadir tareas de pizarras a Agenda**. Solo afecta a las tarjetas que crees a partir de ese momento.'),
      path('Ajustes', 'Productividad', 'Añadir tareas de pizarras a Agenda'),
      p('Mientras una pizarra está **cerrada**, sus tarjetas se apartan de Agenda. Al reabrir, vuelven las que tenían activada esa visibilidad. El cierre no cambia el ajuste de cada tarjeta.'),

      h2('Buscar dentro de la pizarra'),
      p('La cabecera de la pizarra tiene un buscador propio: **Buscar tareas en esta pizarra…**. Filtra las tarjetas del tablero sin salir de él. Para buscar en todo Zenth usa el [buscador global](/docs/primeros-pasos/busqueda-y-notificaciones).'),

      h2('Filtrar la pizarra'),
      p('El botón de **filtro** de la cabecera deja ver solo lo que buscas: por palabra clave, por persona (**Asignadas a mí**, **Sin responsable** o un compañero concreto), por estado, por vencimiento, por etiqueta o por los campos personalizados de la pizarra. Todo está explicado en [Menú de colaboración](/docs/pizarras/menu-de-colaboracion).'),
    ],
  },

  {
    slug: 'campos-personalizados',
    category: 'pizarras',
    title: 'Campos personalizados en las pizarras',
    summary: 'Añade datos propios a tus tarjetas, muéstralos en el tablero y úsalos para filtrar, ordenar y reutilizar el trabajo.',
    keywords: ['campos', 'campos personalizados', 'campo de tarjeta', 'propiedades', 'cliente', 'estimación', 'texto', 'número', 'desplegable', 'opciones', 'casilla', 'fecha', 'mostrar en la tarjeta', 'con valor', 'sin valor', 'filtrar campos', 'ordenar campos', 'reordenar campos', 'eliminar campo', 'color de opción', 'sin marcar', 'copiar campos', 'plantillas', 'móvil'],
    updated: '2026-10-06',
    related: ['pizarras/tarjetas-y-bandeja-rapida', 'pizarras/menu-de-colaboracion', 'pizarras/vistas-de-pizarra', 'pizarras/mover-y-duplicar-tarjetas', 'pizarras/automatizaciones-y-plantillas', 'integraciones/zenth-mcp'],
    blocks: [
      p('Los **campos personalizados** guardan la información que necesita cada proyecto: Cliente, Estimación, Estado de aprobación o Entrega al cliente, por ejemplo. Cada pizarra define sus propios campos y cada tarjeta puede tener un valor para cada uno.'),

      h2('Crear un campo'),
      steps(
        'Abre la pizarra y su menú **Colaboración**. En escritorio, usa **Más opciones de la pizarra**; en móvil, abre **…** en la cabecera y elige **Colaboración**.',
        'Entra en **Preferencias › Campos** y pulsa **Añadir campo**.',
        'Escribe un **Nombre** y elige el **Tipo** entre las cinco tarjetas; debajo verás para qué sirve cada uno.',
        'Si es Desplegable, pulsa **Añadir opción** y escribe su nombre. Pulsa Enter para pasar a la siguiente. Cada opción recibe un color distinto; toca su muestra de color para cambiarlo.',
        'Decide con el interruptor si quieres **Mostrar en la tarjeta** y pulsa **Crear campo**.',
      ),
      path('Colaboración', 'Preferencias', 'Campos'),
      p('Un Desplegable necesita al menos una opción, y todas deben tener nombre: hasta entonces, el botón para crear o guardar no se activa y la ventana indica qué falta.'),
      p('Solo el **propietario y los administradores** pueden crear o gestionar campos. Un Miembro puede rellenarlos en las tarjetas, y un Observador puede consultar los valores. En una [pizarra cerrada](/docs/pizarras/cerrar-y-reabrir-pizarras), todos los valores quedan en solo lectura.'),

      h2('Los cinco tipos'),
      table(
        ['Tipo', 'Qué guarda', 'Ejemplo'],
        ['Texto', 'Una sola línea, hasta 500 caracteres.', 'Cliente: Acme'],
        ['Número', 'Un número, también con decimales o cero.', 'Estimación: 3,5'],
        ['Desplegable', 'Una de las opciones que define el administrador, con su color.', 'Estado: Listo'],
        ['Casilla', 'Marcada o sin marcar.', 'Aprobado: Sí'],
        ['Fecha', 'Una fecha elegida en el calendario.', 'Entrega al cliente: 13 de octubre'],
      ),
      note('Una Fecha personalizada es información adicional: **no cambia Inicio ni Vence** y no coloca la tarjeta por sí sola en el calendario o en Agenda. La visibilidad en Agenda sigue dependiendo de [Añadir tareas de pizarras a Agenda](/docs/pizarras/tarjetas-y-bandeja-rapida#aparece-en-agenda).'),

      h2('Rellenar o borrar un valor'),
      steps(
        'Abre el detalle de la tarjeta y busca la sección **Campos**. Cada campo ocupa una fila con su icono de tipo, su nombre y su valor; los vacíos muestran **Vacío**.',
        'Pulsa el valor para escribir el texto o número, elige una opción, marca la casilla o selecciona una fecha.',
        'El cambio se **guarda automáticamente**. En texto y número, también puedes pulsar Enter o salir del campo para guardar lo escrito.',
      ),
      p('Puedes hacerlo en ordenador y móvil si tienes permiso de edición. Para borrar, vacía el texto o número, elige **Sin valor** en un desplegable o pulsa el botón **×** junto a una fecha (en ordenador aparece al pasar el ratón por encima).'),
      p('El número **0** es un valor. Una casilla se marca y se desmarca al pulsarla: una casilla que nadie ha tocado se ve igual que una sin marcar.'),
      p('En solo lectura se muestran los campos con valor y se omiten los vacíos.'),

      h2('Mostrar en la tarjeta'),
      p('En **Preferencias › Campos**, el administrador puede activar **Mostrar en la tarjeta** para que ese dato aparezca como una marca en la cara frontal cuando está rellenado. Desactivar esa opción conserva el valor en el detalle y en la tabla.'),
      p('Las marcas muestran el nombre del campo y su valor, por ejemplo **Estimación 2,5** o **Entrega 20 oct**. Los desplegables usan el color de la opción, y una casilla solo aparece cuando está marcada.'),

      h2('Filtrar por campos'),
      steps(
        'Abre el botón de **filtro** de la cabecera de la pizarra.',
        'Busca el grupo **Campos** y despliega el nombre del campo que quieres usar.',
        'Marca una condición o introduce el texto o número que buscas.',
      ),
      table(
        ['Tipo', 'Condiciones'],
        ['Cualquier campo', '**Con valor** o **Sin valor**.'],
        ['Texto', '**Contiene** el texto que escribas, sin distinguir mayúsculas ni tildes.'],
        ['Número', 'Elige **>** (mayor que, la opción inicial), **=** (igual a) o **<** (menor que) y escribe el número.'],
        ['Desplegable', 'Una o varias de sus opciones, cada una con su color.'],
        ['Casilla', '**Marcada** o **Sin marcar**; Sin marcar incluye las que nadie ha tocado.'],
        ['Fecha', '**Vencida**, **Próximos 7 días** o **Sin fecha**, usando la fecha de ese campo.'],
      ),
      p('En una Fecha personalizada, Vencida reúne tarjetas sin completar con una fecha anterior a hoy. Próximos 7 días va **desde mañana hasta dentro de siete días**, incluidos ambos extremos, y también excluye las completadas con fecha. Sin fecha selecciona las que no tienen valor en ese campo.'),
      p('El ajuste **Cualquiera / Todas** se aplica a las condiciones del grupo Campos: con Cualquiera basta con una; con Todas la tarjeta debe cumplirlas todas. Por ejemplo, Estado = Listo y Estimación mayor que 5 reúne las que cumplen ambas con Todas, o cualquiera de las dos con Cualquiera. Los otros grupos, como Miembros o Etiquetas, se combinan con Campos exigiendo también sus condiciones.'),
      tip('Para reunir dos opciones de un mismo desplegable, usa **Cualquiera**: cada tarjeta solo puede tener una opción seleccionada.'),
      p('Las condiciones con opciones muestran recuentos. La tabla y el calendario usan los mismos filtros de la pizarra. Las **archivadas** quedan fuera de esos recuentos; consulta cómo se muestran aparte en [Tarjetas completadas y archivadas](/docs/pizarras/calendario-de-pizarra#tarjetas-completadas-y-archivadas). Si se elimina un campo o una opción, su condición desaparece del filtro.'),

      h2('Ver y ordenar los campos en la tabla'),
      p('En escritorio, abre **Vista › Tabla**. Cada campo tiene su propia columna, con el icono de su tipo y en el orden definido en Campos. Las casillas se muestran como un icono marcado o vacío. Sus valores son de consulta: abre la tarjeta para editarlos. Pulsa la cabecera para ordenar y vuelve a pulsarla para invertir el sentido.'),
      table(
        ['Tipo', 'Orden inicial'],
        ['Texto', 'Alfabético.'],
        ['Número', 'De menor a mayor.'],
        ['Fecha', 'De la más antigua a la más reciente.'],
        ['Desplegable', 'Según el orden de sus opciones.'],
        ['Casilla', 'Sí antes que No.'],
      ),
      p('Los **vacíos siempre quedan al final**, en ambos sentidos. Si dos valores empatan, mantienen el orden del tablero. Ordenar la tabla cambia tu consulta; no mueve las tarjetas para el equipo. Si se elimina el campo por el que ordenabas, la tabla vuelve al orden de listas y tarjetas.'),

      h2('Renombrar, ordenar o eliminar campos'),
      p('Vuelve a **Preferencias › Campos**. Cada campo muestra su tipo y un resumen, como «Desplegable · 3 opciones» u «Oculto en la tarjeta». Pulsa uno para cambiar su nombre, sus opciones y colores o Mostrar en la tarjeta, y guarda con **Guardar**. El **tipo se elige al crearlo y no se puede cambiar** después.'),
      p('Para quitar una opción, pulsa su **×** o borra su nombre y pulsa Retroceso otra vez.'),
      table(
        ['Para', 'En ordenador', 'En el móvil'],
        ['Cambiar el orden', 'Arrastra el asa de la izquierda, o selecciónala con el teclado y usa las flechas ↑ y ↓.', 'Pulsa **Ordenar**, usa las flechas de cada campo y termina con **Listo**.'],
        ['Volver a la lista', 'Flecha atrás o Escape.', 'Flecha atrás.'],
        ['Eliminar un campo', 'Ábrelo y pulsa **Eliminar**, abajo a la izquierda.', 'Ábrelo y pulsa **Eliminar campo**, al final.'],
      ),
      warn('Eliminar un campo pide confirmación y **borra sus valores en todas las tarjetas**. No se puede deshacer. Quitar una opción de un desplegable también deja sin valor las tarjetas que la tenían seleccionada.', 'Antes de eliminar'),

      h2('Copias y cambios de pizarra'),
      table(
        ['Acción', 'Qué ocurre con los campos'],
        ['Mover a otra lista de la misma pizarra', 'Los valores se conservan.'],
        ['Duplicar una tarjeta en la misma pizarra', 'Sus valores se copian automáticamente.'],
        ['Copiar una lista', 'Las tarjetas pendientes que se copian conservan sus valores.'],
        ['Mover una tarjeta o lista a otra pizarra', 'Se borran los valores de las tarjetas trasladadas.'],
        ['Duplicar una tarjeta en otra pizarra', 'La copia empieza sin valores personalizados. La original los conserva.'],
      ),
      p('Los campos pertenecen a cada pizarra. Tener un campo con el mismo nombre en el destino **no transfiere** sus valores. Ver [Mover y duplicar tarjetas](/docs/pizarras/mover-y-duplicar-tarjetas).'),

      h2('Plantillas y asistente'),
      p('Una **plantilla de pizarra** guarda las definiciones de los campos: nombres, tipos, opciones y colores, orden y Mostrar en la tarjeta. Al usarla, la nueva pizarra recibe campos independientes. No guarda tarjetas ni sus valores; las plantillas de tarjeta y lista tampoco guardan esos valores. Ver [Campos en las plantillas de pizarra](/docs/pizarras/automatizaciones-y-plantillas#campos-en-las-plantillas-de-pizarra).'),
      p('Con [Zenth MCP](/docs/integraciones/zenth-mcp#campos-personalizados-de-las-tarjetas), tu asistente puede consultar y rellenar los campos existentes usando sus nombres. Por ejemplo: «En Preparar lanzamiento, pon Cliente = Acme y Estimación = 3».'),
      note('Los campos y sus valores **no se muestran en el enlace público** de la pizarra. Mostrar en la tarjeta controla su presentación para los miembros; no cambia lo que recibe quien abre el enlace público.'),
    ],
  },

  {
    slug: 'seleccionar-y-gestionar-tarjetas',
    category: 'pizarras',
    title: 'Seleccionar y gestionar tarjetas',
    summary: 'Usa el clic derecho para actuar sobre una tarjeta y selecciona varias para moverlas, completarlas, asignar o etiquetar juntas.',
    keywords: ['clic derecho', 'menú contextual', 'selección múltiple', 'seleccionar tarjetas', 'acciones en lote', 'ctrl clic', 'cmd clic', 'casillas', 'mover varias', 'asignar varias', 'etiquetar varias'],
    updated: '2026-10-06',
    related: ['pizarras/tarjetas-y-bandeja-rapida', 'pizarras/mover-y-duplicar-tarjetas', 'pizarras/acciones-de-listas', 'pizarras/vistas-de-pizarra', 'atajos/atajos-de-la-aplicacion'],
    blocks: [
      p('En escritorio puedes organizar tarjetas sin abrir su detalle una por una. El menú de clic derecho actúa sobre una tarjeta; la barra de selección trabaja con varias.'),

      h2('El menú de clic derecho'),
      p('En **Tablero** o **Tabla**, haz clic derecho sobre una tarjeta o fila. El menú ofrece las acciones que permiten tu rol y el estado de la pizarra:'),
      list(
        '**Abrir tarjeta**, **Editar**, **Completar** o **Marcar como pendiente**.',
        '**Mover a la lista**, **Mover a otra pizarra…** y **Duplicar…**. Los dos últimos abren el diálogo de destino y posición.',
        '**Etiquetas** y **Responsables** para marcar o quitar cada opción disponible.',
        '**Iniciar focus**, **Copiar enlace** y **Seleccionar** o **Quitar de la selección**.',
        '**Archivar**, disponible cuando está completada, y **Enviar a la papelera**.',
      ),
      p('En una pizarra cerrada o con permiso de solo lectura, se conservan las acciones de consulta y las personales, como copiar el enlace o iniciar Enfoque; se ocultan las que modificarían la tarjeta.'),

      h2('Seleccionar varias tarjetas'),
      steps(
        'En el tablero, mantén `Ctrl` (`⌘` en Mac) y pulsa cada tarjeta que quieras incluir. También puedes elegir **Seleccionar** en su menú de clic derecho.',
        'En la tabla, marca las **casillas** de las filas. La casilla de la cabecera selecciona todas las filas que se muestran.',
        'Comprueba el número de seleccionadas en la barra inferior y elige una acción.',
      ),
      p('Volver a marcar una tarjeta la quita de la selección. La **×** de la barra o `Esc` la vacían. Si hay un menú abierto, el primer Esc cierra ese menú. Cambiar de pizarra o de vista limpia la selección; al buscar o filtrar, salen de ella las tarjetas que dejan de verse.'),

      h2('Acciones de la barra inferior'),
      table(
        ['Acción', 'Qué hace con las seleccionadas'],
        ['Mover', 'Las lleva a otra lista de la misma pizarra, debajo de las tarjetas que ya tiene. Las tachadas siguen completadas.'],
        ['Completar', 'Completa las pendientes; las que ya estaban completadas no se vuelven a completar. Las ocurrencias repetidas pasan al historial.'],
        ['Archivar', 'Retira las completadas de sus listas y las lleva al historial; deja las pendientes donde están.'],
        ['Asignar', 'Añade el responsable elegido a las tarjetas que aún no lo tienen, sin quitar a los demás.'],
        ['Etiqueta', 'Añade la etiqueta compartida elegida a las que aún no la tienen, sin duplicarla ni quitar otras.'],
        ['Papelera', 'Envía las seleccionadas a la papelera. Si pertenecen a una serie, retira esas ocurrencias; no elimina toda la serie.'],
      ),
      p('Asignar y Etiqueta aparecen cuando están disponibles los miembros o etiquetas de la pizarra. Al terminar una acción, la selección se vacía y el aviso indica cuántas tarjetas cambiaron.'),
      note('La barra trabaja con **las tarjetas seleccionadas que siguen visibles**. No equivale a **Mover todas** del menú de lista, que incluye también sus tarjetas futuras. Para cambiar de pizarra o duplicar una tarjeta, usa su menú o detalle.'),
      p('Seleccionar y ejecutar acciones en lote requiere permiso de edición y una pizarra abierta. En móvil se mantiene la gestión por tarjeta y por lista.'),
    ],
  },

  {
    slug: 'acciones-de-listas',
    category: 'pizarras',
    title: 'Acciones de listas: ordenar, mover, copiar y limitar',
    summary: 'Usa el menú de una lista para ordenar tarjetas, moverlas juntas, archivar las completadas, copiar el trabajo pendiente y avisar cuando hay demasiado en curso.',
    keywords: ['menú de lista', 'ordenar por', 'fecha más próxima', 'nombre', 'recientes', 'antiguas', 'mover todas', 'archivar completadas', 'copiar lista', 'mover lista', 'límite de tarjetas', 'WIP', 'trabajo en curso'],
    updated: '2026-10-06',
    related: ['pizarras/crear-y-organizar-pizarras', 'pizarras/mover-y-duplicar-tarjetas', 'pizarras/vistas-de-pizarra', 'pizarras/automatizaciones-y-plantillas'],
    blocks: [
      p('El menú **…** de cada lista reúne las acciones que afectan a esa lista o a varias tarjetas a la vez. En el ordenador está en la cabecera de la columna; en el móvil, junto al nombre de la lista que tienes abierta. Administradores y Miembros pueden editar listas y tarjetas. Un Observador puede consultar el contenido, pero no ejecutar estas acciones.'),
      note('Estas acciones requieren una pizarra abierta. Para cambiar solo algunas tarjetas visibles, usa [Seleccionar y gestionar tarjetas](/docs/pizarras/seleccionar-y-gestionar-tarjetas); para recuperar la edición de una cerrada, un administrador debe [reabrirla](/docs/pizarras/cerrar-y-reabrir-pizarras).'),

      h2('Ordenar las tarjetas'),
      steps(
        'Abre el menú **…** de la lista.',
        'Despliega **Ordenar por…**.',
        'Elige **Fecha más próxima**, **Nombre (A–Z)**, **Más recientes primero** o **Más antiguas primero**.',
      ),
      p('El orden se guarda y lo ve el equipo. Es una acción puntual: las tarjetas nuevas no se reordenan continuamente con ese criterio. Si eliges fecha, las tarjetas sin fecha quedan al final; las que empatan conservan su orden anterior. La opción se desactiva cuando no hay al menos dos tarjetas que ordenar.'),

      h2('Mover todas o archivar las completadas'),
      table(
        ['Acción', 'Resultado'],
        ['Mover todas las tarjetas', 'Elige otra lista de la misma pizarra. Las tarjetas se añaden debajo de las que ya estaban allí. Las tachadas llegan tachadas; las pendientes siguen pendientes.'],
        ['Archivar completadas', 'Retira solo las tarjetas tachadas y las lleva a Completadas. Las pendientes permanecen en la lista.'],
      ),
      note('Las acciones de lista no se limitan a los resultados del buscador ni de los filtros. **Mover todas las tarjetas** también incluye las de fecha futura y las ocurrencias pendientes de una serie que no se muestran en el tablero. Revisa la lista antes de aplicar una acción conjunta.'),
      p('Archivar no envía a la papelera: el trabajo queda en el [historial de completadas](/docs/agenda/historial-de-completadas). La acción aparece desactivada si no hay tarjetas tachadas que archivar.'),

      h2('Límite de tarjetas abiertas'),
      steps(
        'Abre **… › Límite de tarjetas**.',
        'Escribe un número entero entre **1 y 99** y pulsa **Guardar**.',
        'Para retirarlo, vuelve al mismo apartado y pulsa **Quitar**.',
      ),
      p('La cabecera muestra cuántas tarjetas abiertas hay frente al límite, por ejemplo **3/2**. Al superarlo, la marca destaca para avisarte. **Puedes seguir añadiendo y moviendo tarjetas**: el límite ayuda a decidir cuánto trabajo asumir y no bloquea la lista.'),
      p('Las tarjetas tachadas ya no cuentan como trabajo en curso. El contador usa las tarjetas abiertas que representa el tablero; no suma las archivadas ni todas las ocurrencias pendientes de una misma repetición. El límite se guarda con la lista y lo comparte el equipo.'),
      tip('Prueba un límite de 2 en «En curso». Si hay 3 pendientes, termina una antes de empezar otra; al completarla, el contador vuelve a 2/2 aunque la tarjeta siga tachada en la lista.'),

      h2('Copiar una lista'),
      p('Pulsa **Copiar lista** para crear una lista justo al lado de la original, con **(copia)** en el nombre. Conserva el color y el límite, y copia en el mismo orden las tarjetas pendientes que representa el tablero. No incluye las tachadas ni las archivadas, ni duplica toda la serie de una tarea repetida.'),
      p('Las tarjetas nuevas llevan título, nota con sus casillas, inicio, vencimiento y documentos vinculados. Conservan los **valores de los campos personalizados**, porque la copia queda en la misma pizarra. También copian automáticamente sus **checklists**, con los mismos títulos y pasos en el mismo orden. Todos los pasos empiezan **sin marcar**, sin responsable ni fecha propia.'),
      p('Empiezan sin repetición y no copian imágenes, comentarios, historial ni la sala de reunión de la original. Esta copia conjunta tampoco conserva responsables de la tarjeta ni etiquetas compartidas. Para elegir esos dos datos o desactivar la copia de checklists al copiar una tarjeta concreta, usa [Duplicar tarjeta](/docs/pizarras/mover-y-duplicar-tarjetas).'),

      h2('Mover la lista a otra pizarra'),
      steps(
        'Abre **… › Mover lista a otra pizarra**.',
        'Elige una de las pizarras de destino disponibles.',
        'Abre esa pizarra para continuar trabajando con la lista.',
      ),
      p('Solo aparecen destinos en los que puedes editar tanto listas como tarjetas. Se traslada la lista con su color, límite y tarjetas sin archivar, incluidas las tachadas y las de fecha futura. La lista desaparece del origen; las tarjetas que ya estaban archivadas permanecen en el historial de la pizarra de origen.'),
      note('Al cambiar de pizarra, las tarjetas trasladadas pierden sus **valores de campos personalizados**. Los campos pertenecen a la pizarra de origen; no se transfieren aunque el destino tenga campos con el mismo nombre. Ver [Copias y cambios de pizarra](/docs/pizarras/campos-personalizados#copias-y-cambios-de-pizarra).'),
      note('Copiar crea trabajo nuevo y mantiene la lista original. Mover cambia dónde vive el trabajo. Si lo que quieres es guardar un modelo para usarlo muchas veces, consulta [Plantillas de tarjeta, lista y pizarra](/docs/pizarras/automatizaciones-y-plantillas).'),
    ],
  },

  {
    slug: 'mover-y-duplicar-tarjetas',
    category: 'pizarras',
    title: 'Mover y duplicar tarjetas',
    summary: 'Elige pizarra, lista y posición desde el detalle de una tarjeta. Decide qué conservar al duplicarla y conoce qué contenido se copia.',
    keywords: ['mover tarjeta', 'duplicar tarjeta', 'copiar tarjeta', 'otra pizarra', 'posición', 'arriba', 'abajo', 'conservar', 'responsables', 'etiquetas', 'copia', 'conservar checklists', 'copiar pasos'],
    updated: '2026-10-06',
    related: ['pizarras/tarjetas-y-bandeja-rapida', 'pizarras/acciones-de-listas', 'pizarras/colaborar-en-tarjetas', 'pizarras/automatizaciones-y-plantillas'],
    blocks: [
      p('Arrastrar sirve para cambiar una tarjeta de lista rápidamente. Desde su detalle puedes además elegir **en qué pizarra, en qué lista y en qué posición** colocarla, o crear una copia. Las dos acciones están disponibles en ordenador y móvil cuando tienes permiso para editar tarjetas.'),
      p('En escritorio también puedes abrir estos diálogos desde el **clic derecho** de la tarjeta o de su fila en la tabla. La pizarra de origen debe estar abierta; los destinos disponibles son pizarras abiertas donde puedes editar. Si alguna está cerrada, primero debe [reabrirla un administrador](/docs/pizarras/cerrar-y-reabrir-pizarras).'),

      h2('Mover una tarjeta'),
      steps(
        'Abre el detalle de la tarjeta dentro de Pizarras.',
        'Pulsa el botón **Mover tarjeta**.',
        'Elige **Pizarra**, **Lista** y **Posición**. El selector marca la primera como **1 · arriba** y la última como **abajo**.',
        'Pulsa **Mover**.',
      ),
      p('Puedes quedarte en la misma pizarra o elegir otra en la que tengas permiso de edición. Si eliges su lista y posición actuales, no hay un cambio que aplicar y el botón se desactiva. Al moverla a otra pizarra, se cierra su detalle en la de origen.'),
      p('Una tarjeta tachada se mueve manteniendo su estado completado. Si mueves una que ya estaba archivada a una lista de trabajo, vuelve abierta. Mover cambia la ubicación de la tarjeta original; no crea otra.'),
      note('Mover entre listas de la misma pizarra conserva los **campos personalizados**. Al llevar la tarjeta a otra pizarra se borran sus valores, incluso si allí hay campos con el mismo nombre. Ver [Copias y cambios de pizarra](/docs/pizarras/campos-personalizados#copias-y-cambios-de-pizarra).'),

      h2('Duplicar una tarjeta'),
      steps(
        'Abre el detalle y pulsa **Duplicar tarjeta**.',
        'Revisa el **Título** de la copia: puedes cambiarlo antes de crearla.',
        'Elige **Pizarra**, **Lista** y **Posición**.',
        'Si la copia queda en la misma pizarra y la original tiene etiquetas compartidas o responsables, decide si quieres conservarlos.',
        'Si tiene pasos en checklists, revisa **Conservar › Checklists**: viene activado y puedes desmarcarlo, también al copiar a otra pizarra.',
        'Pulsa **Duplicar**.',
      ),
      p('Al abrir el diálogo, la copia se coloca por defecto justo debajo de la original si sigue en su lista. Puedes elegir otro puesto. La original permanece intacta y la nueva tarjeta empieza **sin completar**, incluso si copiaste una tachada.'),

      h2('Qué lleva la copia'),
      table(
        ['Contenido', 'Qué ocurre al duplicar'],
        ['Título, emoji y color', 'Se copian; puedes cambiar el título en el diálogo.'],
        ['Nota y casillas dentro de la nota', 'Se copian con su contenido.'],
        ['Inicio, vencimiento, hora, duración y documentos vinculados', 'Se conservan.'],
        ['Etiquetas compartidas y responsables', 'Puedes conservarlos solo dentro de la misma pizarra. Si eliges otra, no viajan.'],
        ['Campos personalizados', 'Sus valores se copian automáticamente dentro de la misma pizarra. En otra pizarra, la copia empieza sin ellos.'],
        ['Checklists del panel de colaboración', 'Se conservan si dejas activada la opción Checklists, incluso en otra pizarra. Los pasos quedan sin marcar, sin responsable ni fecha propia.'],
        ['Imágenes', 'Permanecen en la original; no se copian sus archivos.'],
        ['Repetición y calendario externo', 'La copia no pertenece a la serie de la original ni queda enlazada a su calendario externo.'],
        ['Reunión de la original', 'No se copia el enlace ni la sala.'],
        ['Comentarios, historial, votos y revisiones', 'No se clonan. La nueva tarjeta empieza con su propia colaboración.'],
      ),
      note('Las casillas del texto de una nota y las **checklists del panel de colaboración** son cosas distintas. La nota se copia con su contenido; la opción **Checklists** controla las listas de pasos del panel.'),

      h2('Conservar checklists'),
      p('La opción **Checklists** muestra cuántos elementos tiene la tarjeta y aparece cuando hay pasos que copiar. Se conserva el título de cada checklist y el texto y orden de sus elementos. No conserva las marcas de completado, las personas asignadas a cada paso ni sus fechas, aunque dupliques dentro de la misma pizarra.'),
      p('Por ejemplo, si «Preparar lanzamiento» tiene una checklist con tres pasos y dos marcados, la copia empieza con los mismos tres pasos y un progreso de **0 de 3**. Completar un paso en la copia no modifica el de la original.'),
      tip('Deja **Checklists** activado para reutilizar un proceso en otro proyecto. Después asigna responsables y fechas a sus pasos en la nueva tarjeta. Para copiar varias tarjetas de una vez, **Copiar lista** conserva sus checklists automáticamente.'),

      h2('Elegir entre mover, duplicar y guardar una plantilla'),
      table(
        ['Necesitas…', 'Usa…'],
        ['Cambiar el lugar de un trabajo existente', '**Mover tarjeta**, o arrastrarla entre listas.'],
        ['Repetir una tarjeta ahora y ajustar su destino', '**Duplicar tarjeta**.'],
        ['Hacer lo mismo con varias tarjetas de una lista', '[Acciones de listas](/docs/pizarras/acciones-de-listas).'],
        ['Guardar un modelo para usarlo más adelante', '[Plantillas](/docs/pizarras/automatizaciones-y-plantillas).'],
      ),
      tip('Por ejemplo, duplica «Preparar informe de septiembre», cambia el título a «Preparar informe de octubre» y elige la lista Por hacer. Después revisa la fecha: la copia conserva la de la original.'),
    ],
  },

  {
    slug: 'vistas-de-pizarra',
    category: 'pizarras',
    title: 'Vistas y espacio de la pizarra',
    summary: 'Elige entre tablero, tabla y calendario, ajusta el espacio de las columnas y entiende cómo se muestran las fechas y las tareas repetidas.',
    keywords: ['vista', 'horizontal', 'ajustar al espacio', 'columnas', 'ancho', 'redimensionar', 'contraer', 'plegar', 'expandir', 'girar', 'vertical', 'tabla', 'ordenar columnas', 'escritorio', 'móvil', 'fecha futura', 'vencimiento', 'próxima ocurrencia', 'tarea repetida'],
    updated: '2026-10-06',
    related: ['pizarras/calendario-de-pizarra', 'pizarras/crear-y-organizar-pizarras', 'pizarras/acciones-de-listas', 'pizarras/tarjetas-y-bandeja-rapida', 'pizarras/menu-de-colaboracion'],
    blocks: [
      p('El tablero permite seguir el trabajo lista por lista. Puedes darle más espacio a una columna o contraer las que no necesitas mirar ahora. Estas opciones cambian cómo recorres la pizarra; sus tarjetas siguen en sus listas.'),

      h2('Elegir el diseño de columnas'),
      p('Usa **Vista** en la cabecera o la opción **Diseño** del menú de la pizarra para elegir:'),
      table(
        ['Diseño', 'Cómo se distribuyen las listas'],
        ['Horizontal', 'En una fila, con desplazamiento lateral. Útil para seguir un flujo de izquierda a derecha.'],
        ['Ajustar al espacio', 'En varias filas según el ancho disponible. Útil para reunir más listas en la pantalla.'],
      ),
      p('Un Administrador o Miembro guarda este diseño en la pizarra. Un Observador puede elegirlo también, pero su elección es local y no cambia la del equipo. En el móvil se usa la navegación por listas, con una lista por pantalla.'),

      h2('Contraer, girar y redimensionar columnas'),
      list(
        '**Ancho:** arrastra el borde derecho de una columna de escritorio para hacerla más estrecha o más ancha.',
        '**Plegado:** abre **… › Contraer columna**. La lista queda reducida a su cabecera. Usa **Expandir columna** para ver de nuevo las tarjetas.',
        '**Orientación:** cuando está contraída, usa **Girar en vertical** para dejarla como una barra estrecha con el título girado; **Girar en horizontal** devuelve la cabecera habitual.',
      ),
      p('El navegador recuerda los anchos; el plegado y la orientación se recuerdan por pizarra. Son ajustes locales: no cambian las columnas de tus compañeros. Si borras los datos del navegador, estas preferencias pueden perderse.'),

      h2('Vista de tabla'),
      p('El botón **Vista** de la cabecera ofrece los diseños del tablero, **Tabla** y **Calendario**. La tabla está pensada para escritorio: presenta una fila por tarjeta de las listas visibles, con columnas **Tarjeta**, **Lista**, **Etiquetas**, **Responsables** y **Fecha**.'),
      p('También añade una columna por cada **campo personalizado** de la pizarra, aunque no tenga activado Mostrar en la tarjeta. Los valores se consultan en la tabla y se editan abriendo el detalle. Puedes ordenar por la cabecera de un campo: los vacíos siempre quedan al final. Ver [Ver y ordenar los campos en la tabla](/docs/pizarras/campos-personalizados#ver-y-ordenar-los-campos-en-la-tabla).'),
      steps(
        'Abre **Vista › Tabla**.',
        'Pulsa una cabecera para ordenar sus filas. Pulsa de nuevo para invertir el sentido.',
        'Pulsa el título o la fila para abrir el detalle de una tarjeta.',
        'Para volver al tablero, abre **Vista** y elige **Horizontal** o **Ajustar al espacio**.',
      ),
      p('La tabla usa el mismo buscador y los mismos filtros del tablero. Incluye las tarjetas con fecha futura y las tarjetas sin repetición tachadas que aún están en una lista; deja fuera las archivadas y las tarjetas sin clasificar de la bandeja rápida. También muestra el número de comentarios y el progreso de las checklists cuando los hay.'),
      p('La elección de tabla se recuerda por pizarra en ese navegador y solo cambia para ti. Ordenar sus filas no modifica el orden guardado de las tarjetas. Si ordenas por fecha, las que no tienen fecha quedan al final en ambos sentidos. Para responsables o etiquetas se toma el primer nombre en orden alfabético.'),
      p('Con permiso de edición, el círculo permite completar o reabrir una tarjeta y el selector **Lista** la mueve a otra lista. Esas acciones sí cambian el trabajo. Un Observador puede consultar, abrir detalles y ordenar la tabla sin editar las tarjetas.'),

      h2('Vista de calendario'),
      p('En escritorio, abre **Vista › Calendario** para recorrer las tarjetas por **Mes**, **Semana** o **Día**. Puedes crear una tarjeta en un hueco, arrastrarla a otra fecha u hora y ajustar su duración con permiso de edición. El color corresponde a su lista y la elección de vista es local.'),
      p('El tablero y la tabla muestran una pendiente por serie; el calendario distribuye sus ocurrencias por día y también permite consultar tarjetas completadas y archivadas. Los pasos de navegación, fechas y filtros están en [Calendario de la pizarra](/docs/pizarras/calendario-de-pizarra).'),

      h2('Fechas futuras y tareas repetidas'),
      p('Una fecha funciona como **vencimiento**: una tarjeta prevista para la semana próxima permanece en su lista, tanto en el tablero como en la tabla. No tienes que esperar a ese día para verla o moverla. Los filtros **Para hoy** y **Vencidas** siguen seleccionando únicamente las fechas que corresponden a esos criterios.'),
      p('En el **tablero y la tabla**, una tarea repetida se representa con una sola tarjeta pendiente de la serie, según este orden:'),
      table(
        ['Si la serie tiene…', 'Tarjeta pendiente que se muestra'],
        ['Una ocurrencia para hoy', 'La de hoy.'],
        ['Ocurrencias atrasadas y ninguna para hoy', 'La atrasada de fecha más reciente.'],
        ['Solo ocurrencias futuras', 'La próxima, con la fecha más cercana.'],
      ),
      p('Al completar una ocurrencia, pasa directamente al [historial de completadas](/docs/agenda/historial-de-completadas) y aparece la siguiente pendiente según ese orden. Si ya no queda una para hoy o atrasada, se muestra la próxima futura; si la serie terminó, no aparece otra. La completada no queda tachada junto a la siguiente en el tablero o la tabla. El calendario puede conservarla tachada en su día, también como parte del historial archivado.'),
      p('Funciona igual al completar desde el tablero, la tabla, Agenda, una automatización o un asistente conectado. Para editar una ocurrencia o la serie, consulta [Repetición y recordatorios](/docs/agenda/repeticion-y-recordatorios).'),

      h2('Crear y editar una serie desde la pizarra'),
      steps(
        'Crea una tarjeta o abre una existente y entra en su editor.',
        'En **Repetición**, elige **Diario**, **Semanal** o **Mensual**. Para Semanal, marca los días que quieras.',
        'Revisa **Vence**, la fecha de la primera ocurrencia: si la tarjeta no tenía fecha, al activar la repetición se propone **hoy**. **Inicio** es una fecha opcional aparte.',
        'Elige la **fecha de fin**, obligatoria para guardar la repetición.',
      ),
      p('Una tarjeta existente puede convertirse en la primera ocurrencia de una serie. Conserva sus comentarios, etiquetas y checklists; Zenth crea las siguientes fechas hasta el fin elegido. El tablero y la tabla muestran solo la ocurrencia pendiente que corresponde; el calendario permite recorrer las demás fechas. Las nuevas ocurrencias mantienen la decisión de la tarjeta sobre aparecer también en Agenda.'),
      p('Al editar una serie que ya existía, los cambios se confirman al cerrar el editor. **Guardar cambios recurrentes** muestra el antes y el después y permite elegir:'),
      table(
        ['Alcance', 'Qué ocurre en la pizarra'],
        ['Solo este evento', 'La tarjeta editada queda independiente, sin repetición. Las otras ocurrencias de la serie siguen como estaban.'],
        ['Este y los siguientes', 'Aplica los cambios desde esa ocurrencia; conserva las anteriores.'],
        ['Toda la serie', 'Aplica los datos comunes, como título o nota, también a las ocurrencias anteriores. Las fechas pasadas no se vuelven a crear.'],
      ),
      p('Pulsa **Guardar cambios** para confirmar, **Seguir editando** para volver al editor o **Descartar cambios** para salir sin aplicar ese cambio. Si acabas de crear o convertir la serie en el mismo editor, los ajustes se aplican a esa serie nueva sin pedir el alcance cada vez.'),
      p('Cuando cambias el inicio, el vencimiento, la frecuencia, los días semanales o el fin de la repetición, Zenth sustituye las ocurrencias siguientes por las del calendario nuevo. Mantiene la tarjeta editada con su colaboración; las fechas anteriores no se duplican. Si cada ocurrencia empieza dos días antes de vencer, conserva ese intervalo en las fechas siguientes.'),
      tip('Para detener lo que viene, elige **No repetir** y confirma **Este y los siguientes**. La tarjeta editada queda independiente y las siguientes ocurrencias se retiran a la [papelera](/docs/cuenta/papelera).'),

      h2('Eliminar una ocurrencia o una serie'),
      p('Al eliminar una tarjeta repetida, el diálogo permite elegir cuánto enviar a la papelera:'),
      table(
        ['Opción', 'Qué se retira'],
        ['Solo esta tarea', 'Solo esa ocurrencia. La serie continúa y el tablero puede mostrar la siguiente pendiente.'],
        ['Esta y las siguientes', 'La ocurrencia elegida y las programadas después. Las anteriores se conservan.'],
        ['Toda la serie', 'Todas las ocurrencias de esa serie.'],
      ),
      p('Los elementos retirados van a la [papelera](/docs/cuenta/papelera), donde puedes recuperarlos. Borrar una sola ocurrencia no detiene las siguientes.'),
    ],
  },

  {
    slug: 'calendario-de-pizarra',
    category: 'pizarras',
    title: 'Calendario de la pizarra',
    summary: 'Organiza las tarjetas por mes, semana o día, consulta lo completado y ajusta fechas, hora y duración. Cómo se muestran las series y los filtros.',
    keywords: ['calendario de pizarra', 'vista calendario', 'mes', 'semana', 'día', 'hoy', 'elegir fecha', 'inicio', 'vence', 'vencimiento', 'sin fecha', 'arrastrar fecha', 'cambiar hora', 'duración', 'reprogramar', 'repeticiones', 'archivadas', 'completadas'],
    updated: '2026-10-06',
    related: ['pizarras/vistas-de-pizarra', 'pizarras/tarjetas-y-bandeja-rapida', 'pizarras/menu-de-colaboracion', 'agenda/repeticion-y-recordatorios'],
    blocks: [
      p('El calendario organiza las **tarjetas de la pizarra que tienes abierta**. Usa las mismas rejillas de mes, semana y día que Agenda, con el color de la lista de cada tarjeta. No añade por su cuenta las tareas de otras pizarras ni de Agenda.'),

      h2('Abrir y recorrer el calendario'),
      steps(
        'En escritorio, abre la pizarra y pulsa **Vista › Calendario**.',
        'En el selector de escala, elige **Mes**, **Semana** o **Día**.',
        'Usa las flechas para ir al período anterior o siguiente, y **Hoy** para volver a la fecha actual.',
        'Pulsa la fecha o el rango de la cabecera para **Elegir fecha** y saltar directamente a ella.',
      ),
      p('En el mes, pulsa el número de un día para abrir su vista de día. En la semana puedes hacerlo pulsando su cabecera. Para volver al tablero o la tabla, usa el botón **Vista** de la pizarra.'),
      p('La vista **Día** muestra únicamente las tarjetas de la fecha elegida. En este calendario, `D`, `S` y `M` cambian de escala; `T` vuelve a hoy y las flechas avanzan o retroceden. Ver [Atajos de Pizarras](/docs/atajos/atajos-de-la-aplicacion#pizarras).'),
      p('El navegador recuerda la vista elegida por pizarra y la escala del calendario. Estas preferencias solo cambian tu forma de recorrer el trabajo; no cambian la vista de los demás miembros. En móvil se mantiene la navegación por listas.'),

      h2('En qué día aparece cada tarjeta'),
      table(
        ['Fechas de la tarjeta', 'Dónde aparece'],
        ['Tiene vencimiento', 'En el día en que vence, aunque tenga también una fecha de inicio.'],
        ['Solo tiene inicio', 'En el día de inicio.'],
        ['No tiene inicio ni vencimiento', 'No ocupa un día. La cabecera cuenta las tarjetas sin fecha de las listas que entran en la vista.'],
      ),
      p('La tarjeta conserva su lista: el calendario cambia su presentación, no su ubicación en el tablero. El color ayuda a reconocer esa lista. Las tarjetas sin clasificar de la bandeja rápida quedan fuera de esta vista; clasifícalas y ponles una fecha para verlas aquí.'),
      tip('Si esperabas ver una tarjeta, revisa su fecha, su lista y los filtros activos. Darle **Inicio** permite colocarla en el calendario aunque no tenga vencimiento. Ver [Inicio y vencimiento](/docs/pizarras/tarjetas-y-bandeja-rapida#inicio-y-vencimiento).'),
      p('Un **campo personalizado de Fecha**, como «Entrega al cliente», guarda un dato adicional. No cambia Inicio ni Vence, ni coloca por sí solo la tarjeta en este calendario o en Agenda.'),

      h2('Crear una tarjeta desde el calendario'),
      list(
        '**Mes:** pulsa un hueco del día para abrir el editor con esa fecha.',
        '**Semana o Día:** pulsa un hueco de la rejilla horaria para abrir el editor con ese día y esa hora.',
        'Revisa el título, la lista y los demás campos antes de cerrar el editor.',
      ),
      p('La tarjeta nace en la pizarra abierta, con su lista de respaldo preseleccionada cuando hay una. Aparecer también en Agenda sigue dependiendo del ajuste **Añadir tareas de pizarras a Agenda**; crear desde este calendario no activa ese ajuste.'),

      h2('Cambiar fecha, hora o duración'),
      table(
        ['Gesto', 'Qué cambia'],
        ['Arrastrar a otro día en Mes', 'Cambia el vencimiento y mantiene la hora que tenía. Si solo había inicio, cambia el inicio.'],
        ['Arrastrar un bloque en Semana o Día', 'Cambia el día y la hora según el lugar donde lo sueltas.'],
        ['Arrastrar el borde inferior de un bloque horario', 'Ajusta la duración del bloque.'],
        ['Pulsar una tarjeta o bloque', 'Abre su detalle para consultar o editar los demás datos.'],
      ),
      p('Si la tarjeta tiene inicio y vencimiento, moverla desplaza **ambas fechas** para conservar su intervalo. Por ejemplo, una tarjeta que empieza el 5 y vence el 8, al mover su vencimiento al 10 pasa a empezar el 7. Ajustar la duración horaria cambia cuánto ocupa el bloque, no ese intervalo entre fechas.'),
      p('Arrastrar una ocurrencia repetida cambia esa ocurrencia. Para ajustar varias o la regla de repetición, abre su editor y elige el alcance en **Guardar cambios recurrentes**. Ver [Crear y editar una serie](/docs/pizarras/vistas-de-pizarra#crear-y-editar-una-serie-desde-la-pizarra).'),
      note('Crear, reprogramar y ajustar duración requieren permiso de edición y una pizarra abierta. Un Observador, o cualquier miembro de una pizarra cerrada, puede recorrer el calendario y abrir detalles sin guardar cambios.'),

      h2('Tarjetas completadas y archivadas'),
      p('Sin filtros activos, las tarjetas archivadas con fecha también aparecen **tachadas en su día**, aunque ya no estén en las listas del tablero. Esto incluye tarjetas sin repetición y ocurrencias de series que ya terminaron.'),
      p('También pueden aparecer al activar **Completadas**. Las archivadas se incorporan aparte: los otros filtros, incluidos los de Campos, no se aplican a ellas. Los recuentos del panel de filtros siguen contando las tarjetas que permanecen en las listas.'),
      p('Conservan el color de la lista de la que salieron; si esa lista dejó de existir, usan el de Completado. El buscador de la pizarra puede acotar el historial que se muestra. Las archivadas sin fecha no ocupan un día ni aumentan el contador de tarjetas sin fecha de las listas.'),
      tip('Para consultar lo terminado sin restringirlo a un período del calendario, abre el [historial de completadas](/docs/agenda/historial-de-completadas). Las tarjetas enviadas a la papelera no aparecen en el calendario.'),

      h2('Series repetidas y filtros'),
      p('El tablero y la tabla muestran una pendiente por serie. En el calendario, una serie con una tarjeta pendiente visible se despliega en **sus distintas fechas**, incluidas las ocurrencias terminadas, que aparecen tachadas. El historial archivado descrito arriba permite consultar también lo terminado cuando ya no queda una pendiente visible de la serie.'),
      p('El buscador y los filtros de la pizarra siguen activos. En una serie, la tarjeta que representa al grupo en el tablero decide si la serie entra en el calendario. Una vez incluida, se muestran sus otras ocurrencias al recorrer sus fechas; no se filtra cada repetición por separado.'),
      p('Por ejemplo, **Para hoy** puede incluir una serie cuya tarjeta actual vence hoy. Al avanzar a mañana en el calendario también puedes ver su ocurrencia de mañana. Las tarjetas sueltas mantienen el resultado individual del filtro. Los filtros de vencimiento se calculan por **Vence**, aunque una tarjeta tenga también Inicio.'),
    ],
  },

  {
    slug: 'compartir-una-pizarra',
    category: 'pizarras',
    title: 'Compartir una pizarra: invitaciones y roles',
    summary: 'Invita por correo o con un enlace, elige el rol de cada persona y entiende quién puede hacer qué, incluido el propietario.',
    keywords: ['compartir', 'invitar', 'invitación', 'enlace', 'roles', 'administrador', 'miembro', 'observador', 'propietario', 'permisos', 'expulsar', 'transferir', 'equipo'],
    updated: '2026-10-06',
    related: ['pizarras/pizarra-publica-con-enlace', 'pizarras/unirse-a-una-pizarra', 'pizarras/colaborar-en-tarjetas'],
    blocks: [
      p('Una pizarra pasa de ser «mi tablero» a ser «un espacio con miembros» cuando la compartes. En Zenth **los permisos son la pizarra**: no hay espacios de trabajo intermedios ni permisos por tarjeta.'),

      h2('Invitar a alguien'),
      steps(
        'En la cabecera de la pizarra, pulsa **Compartir**.',
        'Escribe el correo (`correo@ejemplo.com`), elige un rol y pulsa **Invitar**.',
        'La persona recibe un correo con la invitación. Mientras no la acepte, aparece en «Invitaciones pendientes», y puedes **revocarla**.',
      ),
      h2('Invitar con un enlace'),
      p('En el mismo panel, **Crear enlace** genera una dirección que puedes compartir por donde quieras. Se copia al portapapeles al crearla.'),
      list(
        'Puedes elegir el **rol** que recibe quien entre con el enlace (y cambiarlo después).',
        '**Copiar enlace** lo vuelve a copiar; **Eliminar enlace** lo revoca: quien lo tenga ya no podrá entrar.',
        'Un enlace puede estar **revocado**, haber **caducado** o haber alcanzado su **límite de usos**. En cualquiera de los tres casos, quien lo abre ve un aviso con el motivo.',
      ),
      warn('Un enlace de invitación se puede reenviar. Quien lo tenga entra con el rol que definiste: revócalo cuando ya no lo necesites.', 'Cuida tus enlaces'),

      h2('Los tres roles'),
      table(
        ['Rol', 'Qué puede hacer'],
        ['Administrador', 'Gestiona la pizarra y sus miembros: edita el contenido, define campos personalizados, invita personas, cambia roles y ajustes, expulsa miembros y puede cerrar o reabrir la pizarra.'],
        ['Miembro', 'Crea, edita y mueve tarjetas y listas, y rellena los campos personalizados, pero no administra la pizarra ni define sus campos.'],
        ['Observador', 'Ve las tarjetas, las listas y los valores de sus campos, sin modificarlos. Puede comentar y votar mientras un administrador lo permita (viene activado).'],
      ),
      p('Si entras como Observador, la interfaz **oculta** las acciones que no puedes ejecutar en lugar de dejarte fallar. Y aunque alguien tocara la interfaz, los permisos reales se aplican en el servidor.'),
      note('Estos permisos de edición corresponden a una **pizarra abierta**. En una cerrada, todos sus miembros quedan en solo lectura, incluidos propietario y administradores. Tampoco se comenta ni se vota hasta reabrirla. Ver [Cerrar y reabrir pizarras](/docs/pizarras/cerrar-y-reabrir-pizarras).'),

      h2('El propietario'),
      p('El propietario es quien creó la pizarra. **Siempre es administrador** y no es un cuarto rol: solo él puede **eliminar la pizarra** o **transferir la propiedad** a otro administrador. El propietario no puede abandonar la pizarra sin transferirla antes.'),
      tip('Una pizarra **nunca puede quedarse sin administradores**. La regla se aplica en la base de datos, no solo en la pantalla: el último administrador no puede salir ni ser degradado.'),

      h2('Gestionar a los miembros'),
      list(
        'En el panel Compartir ves a cada miembro con su rol y, si eres administrador, puedes **cambiarlo** o **expulsar** a la persona.',
        'Puedes ver quién tiene invitaciones pendientes y revocarlas.',
        'Si te eliminan de una pizarra durante una llamada, sales de su sala automáticamente.',
      ),

      h2('Qué ven tus compañeros de ti'),
      p('Los miembros ven tu nombre, tu avatar, tu rol, tus aportes y tu presencia **dentro de esa pizarra**. No obtienen acceso a tu Agenda privada, a otras pizarras, a tu Biblioteca personal, a tu ánimo ni a tus estadísticas. Si activas la opción, pueden ver hasta qué hora estás enfocado, nunca en qué. Ver [Enfoque y equipo](/docs/enfoque/enfoque-y-equipo).'),
    ],
  },

  {
    slug: 'unirse-a-una-pizarra',
    category: 'pizarras',
    title: 'Aceptar una invitación a una pizarra',
    summary: 'Qué ocurre cuando recibes una invitación por correo o por enlace, con y sin cuenta de Zenth, y por qué a veces un enlace deja de funcionar.',
    keywords: ['aceptar invitación', 'unirse', 'enlace de invitación', 'invitación caducada', 'me invitaron', 'join', 'entrar a una pizarra'],
    updated: '2026-10-06',
    related: ['pizarras/compartir-una-pizarra', 'ayuda/un-enlace-no-funciona', 'primeros-pasos/crear-cuenta-e-iniciar-sesion'],
    blocks: [
      h2('Por correo'),
      p('El correo de invitación lleva a una pantalla, **Te invitaron a colaborar**, con quién te invita y con qué rol. Pulsa **Aceptar invitación** para entrar.'),
      note('Si la pizarra fue cerrada después de invitarte, pide al propietario o a un administrador que la reabra antes de aceptar. Cerrar conserva las invitaciones, pero pausa la incorporación de nuevos miembros.'),
      list(
        'La invitación está ligada a la **dirección de correo** a la que se envió. Si no tienes cuenta, crea una con ese mismo correo; si ya la tienes, entra con ella.',
        'Si tu sesión es de otra dirección, Zenth te lo indica.',
        'Las invitaciones pendientes también aparecen dentro de Zenth, en el selector de pizarras (sección **Invitaciones**), con el nombre de quien te invitó.',
      ),

      h2('Con un enlace'),
      p('Un enlace de invitación te lleva a una pantalla equivalente. Al aceptarlo, entras como miembro con el rol que definió quien lo creó.'),
      p('Si el enlace no funciona, verás el motivo: fue **revocado**, **caducó** o **alcanzó su límite de usos**. Pide a un administrador de la pizarra uno nuevo. Más pistas en [Un enlace no funciona](/docs/ayuda/un-enlace-no-funciona).'),

      h2('Después de entrar'),
      p('La pizarra aparece en tu selector, en la sección **Compartidas conmigo**, indicando tu rol. Si más adelante quieres irte, ábrela y usa **Salir de la pizarra**.'),
    ],
  },

  {
    slug: 'colaborar-en-tarjetas',
    category: 'pizarras',
    title: 'Colaborar en tarjetas',
    summary: 'Responsables, etiquetas, checklists, votos, revisiones, comentarios con menciones e historial: todo lo que pasa dentro de una tarjeta compartida.',
    keywords: ['comentarios', 'menciones', 'responsables', 'asignar', 'tomar tarea', 'checklist', 'votar', 'aprobación', 'revisión', 'historial', 'seguir', 'adjuntos', 'etiquetas compartidas'],
    updated: '2026-10-06',
    related: ['pizarras/mover-y-duplicar-tarjetas', 'pizarras/menu-de-colaboracion', 'pizarras/compartir-una-pizarra', 'agenda/detalle-de-una-tarea'],
    blocks: [
      p('Cuando una tarjeta vive en una pizarra compartida, su detalle incluye un panel de colaboración con cinco secciones que se pliegan y despliegan.'),
      note('Si la pizarra está **cerrada**, puedes consultar la colaboración existente, pero no cambiar responsables, etiquetas o checklists, comentar, votar ni responder revisiones. Un propietario o administrador debe [reabrir la pizarra](/docs/pizarras/cerrar-y-reabrir-pizarras#reabrir-una-pizarra) para volver a editar.'),

      h2('Equipo: responsables y etiquetas'),
      list(
        '**Responsables:** las personas a cargo de completar la tarjeta. Pulsa un miembro para añadirlo o quitarlo.',
        '**Tomar tarea / Dejar tarea:** un atajo para asignártela (o soltarla) tú mismo.',
        '**Etiquetas compartidas:** clasifican la tarjeta para todo el equipo. Se crean desde el menú de colaboración de la pizarra.',
        '**Seguir / Dejar de seguir:** decide si recibes avisos de esa tarjeta.',
        '**Guardar plantilla:** guarda la tarjeta como plantilla reutilizable (si tienes permiso de edición).',
      ),

      h2('Checklists'),
      p('Divide una tarjeta en pasos concretos. Puedes tener varias checklists con un título, añadir elementos, asignar **responsable** y **fecha** a cada uno, y ver el **progreso general** (por ejemplo «3 de 8»). Un elemento puede **convertirse en una tarjeta** propia si crece.'),
      p('Al [duplicar una tarjeta](/docs/pizarras/mover-y-duplicar-tarjetas#conservar-checklists), puedes conservar estas checklists, incluso en otra pizarra. Los pasos de la copia empiezan sin marcar, sin responsables ni fechas propias. **Copiar lista** también las conserva. Cada copia tiene sus propios pasos y progreso.'),

      h2('Aprobación y votos'),
      list(
        '**Votación rápida:** muestra apoyo a la tarjeta con un botón (**Votar**, luego **Votaste**), con el recuento a la vista.',
        '**Solicitudes de revisión:** elige un revisor, añade una nota opcional y pulsa **Solicitar**. El revisor puede **Aprobar** o **Pedir cambios**. El estado queda como Pendiente, Aprobado o Cambios.',
      ),

      h2('Conversación'),
      p('Comentarios de la tarjeta, con **menciones** y **adjuntos**.'),
      list(
        'Escribe tu comentario y, si quieres avisar a alguien, elige su nombre en **Mencionar**. Las personas mencionadas reciben un aviso.',
        'Usa **Adjuntar** para añadir archivos al comentario.',
        'Los adjuntos son **privados**: solo los ven los miembros de la pizarra.',
      ),

      h2('Historial'),
      p('«Cambios recientes de esta tarjeta»: quién hizo qué y cuándo. Los cambios importantes aparecen aquí sin que tengas que preguntar.'),

      h2('Cómo se ve de un vistazo'),
      p('En el tablero, cada tarjeta muestra sus responsables, etiquetas y el progreso de sus checklists, y el número de comentarios. Los cambios de tus compañeros llegan en vivo, sin recargar.'),
      note('Los **Observadores** pueden comentar y votar solo si un administrador lo permite en las preferencias de la pizarra. Ver [Menú de colaboración](/docs/pizarras/menu-de-colaboracion).'),
    ],
  },

  {
    slug: 'menu-de-colaboracion',
    category: 'pizarras',
    title: 'El menú de colaboración de la pizarra',
    summary: 'Filtros y carga de trabajo, etiquetas, campos personalizados, actividad, notificaciones, seguimiento y preferencias de la pizarra.',
    keywords: ['filtros', 'filtrar', 'palabra clave', 'vencidas', 'sin fecha', 'próximos 7 días', 'próxima semana', 'coincidencia', 'carga', 'etiquetas', 'campos personalizados', 'con valor', 'sin valor', 'actividad', 'seguimiento', 'preferencias', 'observadores', 'notificaciones de pizarra', 'más opciones'],
    updated: '2026-10-06',
    related: ['pizarras/campos-personalizados', 'pizarras/calendario-de-pizarra', 'pizarras/automatizaciones', 'pizarras/colaborar-en-tarjetas', 'enfoque/enfoque-y-equipo'],
    blocks: [
      p('En la cabecera de la pizarra, **Más opciones de la pizarra** abre el panel **Colaboración**. En móvil, abre **…** y elige **Colaboración**. Reúne los ajustes y herramientas que corresponden a la pizarra completa.'),

      h2('Filtros y carga'),
      p('El panel **Filtrar** está en el botón de filtro de la cabecera y también en **Colaboración › Filtros y carga**. Puedes marcar varias opciones a la vez y el panel no se cierra al hacerlo: ves cambiar el tablero mientras ajustas.'),
      table(
        ['Grupo', 'Opciones'],
        ['Palabra clave', 'Busca en títulos, notas, etiquetas y nombres de personas, sin importar tildes.'],
        ['Miembros', '**Sin responsable**, **Asignadas a mí** y cada persona de la pizarra.'],
        ['Estado', '**Completadas** (las tachadas que siguen en su lista) y **Sin completar**.'],
        ['Vencimiento', '**Sin fecha**, **Vencidas** (fecha anterior a hoy y sin completar), **Para hoy** y **Próximos 7 días**.'],
        ['Etiquetas', '**Sin etiquetas** y cada etiqueta compartida de la pizarra.'],
        ['Campos', 'Condiciones según cada campo personalizado: opciones, casillas, comparaciones de números, fechas, texto y Con valor / Sin valor. Ver [Filtrar por campos](/docs/pizarras/campos-personalizados#filtrar-por-campos).'],
      ),
      p('Cada opción muestra **cuántas tarjetas la cumplen**. Si una está en 0, se ve atenuada, y así sabes antes de marcarla que no dejaría nada. Los números de Miembros son también la **carga de trabajo**: ves quién tiene más tarjetas antes de repartir.'),
      p('**Próximos 7 días** reúne las pendientes que vencen desde mañana hasta dentro de siete días, incluidos ambos extremos. No incluye hoy ni las vencidas. Combínalo con **Para hoy** para ver desde hoy hasta una semana; las tarjetas completadas con fecha no entran en esos plazos. **Sin fecha** se refiere a no tener vencimiento, aunque la tarjeta tenga Inicio.'),
      p('La tabla y el calendario usan estos mismos filtros. En el calendario, una serie que pasa el filtro despliega sus ocurrencias por día; el filtro se decide con la tarjeta que representa a la serie en el tablero. Ver [Series repetidas y filtros](/docs/pizarras/calendario-de-pizarra#series-repetidas-y-filtros).'),

      h3('Cualquiera o Todas'),
      list(
        '**Cualquiera:** dentro de cada grupo, basta con uno de los miembros, una de las etiquetas o una de las condiciones de Campos que marcaste.',
        '**Todas:** dentro de cada grupo, la tarjeta debe tener todos los miembros, todas las etiquetas o cumplir todas las condiciones de Campos que marcaste.',
        'Entre grupos distintos siempre se suman las condiciones: «Ana» y «Vencidas» muestra las tarjetas de Ana que están vencidas.',
      ),

      h3('Cuando nada coincide'),
      p('El panel indica cuántos filtros hay activos y tiene un botón **Limpiar**. Si la combinación no deja ninguna tarjeta, la pizarra lo dice («Ninguna tarjeta coincide con los filtros») y ofrece **Limpiar filtros**. El botón de la cabecera se marca mientras haya un filtro activo, y los filtros vuelven a empezar al cambiar de pizarra.'),
      p('En el calendario, ese aviso aparece solo si tampoco hay elementos que mostrar. Las archivadas con fecha pueden seguir visibles con Completadas, aunque los filtros de las listas no coincidan. Ver [Tarjetas completadas y archivadas](/docs/pizarras/calendario-de-pizarra#tarjetas-completadas-y-archivadas).'),
      note('Las tarjetas **archivadas** quedan fuera de las listas y de los recuentos de filtros. Puedes consultarlas en el [historial de completadas](/docs/agenda/historial-de-completadas) o tachadas en su fecha en el [calendario de la pizarra](/docs/pizarras/calendario-de-pizarra#tarjetas-completadas-y-archivadas).'),

      h2('Etiquetas compartidas'),
      p('El vocabulario común de la pizarra. Crea una etiqueta con nombre y color y podrá usarla cualquier miembro en las tarjetas.'),
      note('En una **pizarra cerrada** puedes consultar etiquetas, actividad y avisos existentes, pero la gestión de etiquetas, seguimiento, plantillas, reglas y preferencias espera hasta [reabrir](/docs/pizarras/cerrar-y-reabrir-pizarras). Puedes seguir marcando tus avisos como leídos.'),

      h2('Actividad'),
      p('El registro de la pizarra: quién hizo qué, cuándo y sobre qué tarjeta. Pulsa un evento para abrir la tarjeta. Si lo generó una automatización, aparece «Zenth» como autor.'),

      h2('Automatizaciones'),
      p('Reglas que actúan solas cuando cambia una tarjeta: mover lo terminado, asignar, etiquetar, avisar… Se abren en una ventana propia desde **Colaboración › Automatizaciones**. Todo sobre cómo crearlas y cómo se ejecutan está en [Automatizaciones: reglas que trabajan solas](/docs/pizarras/automatizaciones).'),

      h2('Notificaciones de la pizarra'),
      p('Los avisos que esta pizarra te ha generado (asignaciones, comentarios, menciones…), con **Marcar todo como leído**. Se suman al [centro de notificaciones](/docs/primeros-pasos/busqueda-y-notificaciones) general.'),

      h2('Seguimiento'),
      p('Elige qué quieres seguir para recibir novedades:'),
      list(
        '**Pizarra completa:** recibe novedades de todas las tarjetas.',
        '**Listas concretas:** sigue solo las listas que te interesan.',
      ),

      h2('Preferencias (solo administradores)'),
      list(
        '**Campos:** crea, renombra, ordena y elimina campos personalizados, define opciones y decide qué valores se muestran en la cara frontal de las tarjetas. Ver [Campos personalizados](/docs/pizarras/campos-personalizados).',
        '**Observadores pueden comentar.**',
        '**Observadores pueden votar.**',
        '**Seguir al asignar automáticamente:** quien recibe una tarjeta pasa a seguirla.',
      ),

      h2('Personas enfocadas'),
      p('Si algún miembro tiene un Enfoque en marcha y lo permitió, verás cuántas personas están enfocadas y **hasta qué hora**, para no interrumpirlas. Nunca se muestra en qué trabajan.'),
    ],
  },

  {
    slug: 'automatizaciones',
    category: 'pizarras',
    title: 'Automatizaciones: reglas que trabajan solas',
    summary: 'Cómo crear reglas «Cuando → Si → Entonces» que mueven, completan, asignan, etiquetan o avisan por ti, cómo se ejecutan y cómo revisar qué hizo cada una.',
    keywords: [
      'automatización', 'automatizaciones', 'reglas', 'regla', 'butler', 'trello', 'cuando', 'si', 'entonces',
      'disparador', 'condición', 'acción', 'mover al completar', 'finalizadas', 'archivar', 'asignar', 'etiqueta',
      'checklist', 'comentar', 'avisar', 'historial', 'encadenar', 'bot',
    ],
    updated: '2026-10-06',
    related: ['pizarras/menu-de-colaboracion', 'pizarras/tarjetas-y-bandeja-rapida', 'integraciones/zenth-mcp'],
    blocks: [
      p('Una **automatización** es una regla de la pizarra: **cuando** pasa algo con una tarjeta, **si** la tarjeta cumple unas condiciones, **entonces** Zenth hace una o varias cosas por ti. Sirve para que el tablero se ordene solo: llevar lo terminado a «Finalizadas», asignar a quien empieza una tarjeta, poner fechas, avisar al equipo…'),
      rule(
        'Una regla se lee de izquierda a derecha, igual que en el editor: **cuando** pasa algo, **si** la tarjeta cumple todas las condiciones, **entonces** Zenth hace las acciones en orden. Si alguna condición no se cumple, la regla no hace nada.',
        {
          when: 'Se completa una tarjeta',
          whenScope: 'en cualquier lista',
          conditions: ['No tiene responsable', 'Tiene la etiqueta **Urgente**'],
          actions: ['Moverla a **Finalizadas**, arriba', 'Avisar a la pizarra'],
        },
      ),

      h2('Dónde están'),
      path('Pizarra', 'Más opciones de la pizarra', 'Colaboración', 'Automatizaciones'),
      p('Se abre una ventana con las reglas de la pizarra a la izquierda y el editor a la derecha. En el móvil ocupa toda la pantalla y muestra una cosa a la vez. El enlace **Cómo funciona** de esa ventana trae aquí.'),
      note('Solo quien **administra** la pizarra crea, edita, activa o borra reglas. Los demás miembros pueden abrir la ventana para ver qué reglas hay y qué hicieron.'),

      h2('Crear una regla'),
      steps(
        'Pulsa **Nueva regla**, o elige una de las plantillas del panel de inicio para partir de algo hecho.',
        '**Cuando**: elige el evento que la dispara y, si quieres, acótalo a una lista, una etiqueta o una persona.',
        '**Si** (opcional): añade condiciones. Tienen que cumplirse **todas** para que la regla actúe.',
        '**Entonces**: añade una o más acciones. Se aplican en el orden de la lista; usa las flechas para reordenarlas.',
        'Revisa la **vista previa**: la regla entera escrita en una frase, por ejemplo «Cuando se completa una tarjeta: moverla a Finalizadas».',
        'Ponle un nombre (si lo dejas vacío, Zenth usa la frase de la regla) y pulsa **Crear regla**. Queda activa al instante.',
      ),
      p('Si falta algo, como una lista sin elegir o un mensaje vacío, el editor te lo dice antes de guardar. La base de datos vuelve a comprobarlo al guardar, así que una regla nunca queda a medias.'),

      h2('Cuando: lo que dispara una regla'),
      table(
        ['Evento', 'Ocurre cuando…', 'Se puede acotar a'],
        ['Se crea una tarjeta', 'Alguien crea una tarjeta en la pizarra.', 'Una lista'],
        ['Una tarjeta entra en una lista', 'Una tarjeta pasa a otra lista (arrastrándola, desde el editor o desde otra regla).', 'La lista de destino'],
        ['Se completa una tarjeta', 'Alguien marca la tarjeta como completada.', 'Una lista'],
        ['Se reabre una tarjeta', 'Una tarjeta completada vuelve a estar pendiente.', 'Una lista'],
        ['Se asigna a alguien', 'Se añade un responsable a la tarjeta.', 'Una persona'],
        ['Se añade una etiqueta', 'La tarjeta recibe una etiqueta compartida.', 'Una etiqueta'],
        ['Se marca el último paso de la checklist', 'Se completa el último paso pendiente de las checklists de la tarjeta.', 'No admite filtros'],
      ),
      note('El evento ocurre venga de donde venga el cambio: la app en el ordenador o el móvil, Agenda, otra regla o tu asistente conectado por [Zenth MCP](/docs/integraciones/zenth-mcp).'),

      h2('Si: condiciones'),
      p('Las condiciones miran cómo quedó la tarjeta **después** del cambio. Son opcionales y puedes combinar hasta diez.'),
      table(
        ['Condición', 'Se cumple si la tarjeta…'],
        ['Está en la lista / No está en la lista', 'Está (o no) en la lista elegida.'],
        ['Tiene la etiqueta / No tiene la etiqueta', 'Tiene (o no) esa etiqueta compartida.'],
        ['Está asignada a', 'Tiene a esa persona entre sus responsables.'],
        ['No tiene responsable', 'No tiene a nadie asignado.'],
        ['Tiene fecha / No tiene fecha', 'Tiene (o no) una fecha.'],
        ['Está vencida', 'Tiene una fecha anterior a hoy y no está completada. «Hoy» es el de la zona horaria de quien hizo el cambio.'],
        ['Está completada / No está completada', 'Está (o no) marcada como completada.'],
      ),

      h2('Entonces: acciones'),
      table(
        ['Acción', 'Qué hace'],
        ['Moverla a la lista', 'La lleva a otra lista, **al final** o **arriba**. No puede llevarla a Completadas: para eso está «Archivarla».'],
        ['Completarla / Reabrirla', 'La marca como completada o la devuelve a pendiente. Sin repetición, completarla la deja tachada en su lista; si pertenece a una serie, pasa directamente al historial y se muestra la siguiente pendiente.'],
        ['Archivarla', 'La completa (si no lo estaba) y la saca de su lista hacia el [historial de completadas](/docs/agenda/historial-de-completadas).'],
        ['Asignarla a', 'Añade a un miembro concreto como responsable.'],
        ['Asignarla a quien hizo el cambio', 'Añade como responsable a la persona que movió, creó o cambió la tarjeta.'],
        ['Quitar a los responsables', 'Deja la tarjeta sin nadie asignado.'],
        ['Añadir / Quitar la etiqueta', 'Pone o quita una etiqueta compartida.'],
        ['Ponerle fecha', 'Le pone la fecha de hoy o de dentro de N días (hasta 365).'],
        ['Quitarle la fecha', 'La deja sin fecha.'],
        ['Añadir una checklist', 'Crea una checklist con título y hasta 20 pasos.'],
        ['Comentar', 'Publica un comentario en la tarjeta.'],
        ['Avisar a la pizarra / a los responsables', 'Manda un aviso con tu mensaje a todos los miembros o solo a los responsables. Quien hizo el cambio no se avisa a sí mismo.'],
      ),

      h2('Ejemplos'),
      boardMove(
        'La regla «Cuando se completa una tarjeta: moverla a Finalizadas» en acción con una tarjeta sin repetición. Tú solo marcas la tarjeta; la regla la lleva a su sitio en el mismo instante, y llega tachada hasta que la archives.',
        {
          lists: ['Alta', 'En curso', 'Finalizadas'],
          card: 'Revisar contraste',
          from: 'En curso',
          to: 'Finalizadas',
          trigger: 'Completas la tarjeta en En curso',
          result: 'La regla la lleva a Finalizadas',
          completed: true,
        },
      ),
      table(
        ['Quieres…', 'Regla'],
        ['Que lo terminado se junte en un sitio', 'Cuando se completa una tarjeta → moverla a Finalizadas.'],
        ['Que quien empieza algo quede como responsable', 'Cuando una tarjeta entra en En curso, si no tiene responsable → asignarla a quien hizo el cambio.'],
        ['Cerrar tarjetas por sus pasos', 'Cuando se marca el último paso de la checklist → completarla.'],
        ['Priorizar lo urgente', 'Cuando se añade la etiqueta Urgente → moverla a Alta (arriba) y avisar a los responsables.'],
        ['Preparar cada tarjeta nueva', 'Cuando se crea una tarjeta en Ideas → añadir la checklist «Antes de empezar» y ponerle fecha dentro de 7 días.'],
        ['Limpiar sin pensar', 'Cuando se completa una tarjeta en Finalizadas → archivarla.'],
      ),

      h2('Cómo se ejecutan'),
      list(
        '**Al instante y en el servidor.** La regla corre en la base de datos justo después del cambio, aunque tengas la app cerrada o el cambio venga de otra persona.',
        '**En orden.** Si varias reglas escuchan el mismo evento, corren en el orden en que se crearon, y cada una ve la tarjeta como la dejó la anterior.',
        '**Encadenadas, sin bucles.** Lo que hace una regla puede disparar otra (mover a En curso dispara «entra en En curso»), hasta tres niveles. Una regla no vuelve a dispararse dentro de su propia cadena, así que dos reglas que se mueven la tarjeta entre sí se detienen solas.',
        '**Sin deshacer tu cambio.** Si una acción falla, por ejemplo porque la etiqueta ya no existe, esa acción se salta y queda anotada en el historial; tu cambio y el resto de acciones siguen adelante.',
        '**Con freno.** Una pizarra ejecuta como mucho 120 reglas por minuto. Si se supera, las reglas se pausan ese minuto y el historial lo muestra como «En pausa».',
      ),
      chain(
        'Dos reglas que se mueven la tarjeta entre sí. La cadena no queda dando vueltas: cuando le toca otra vez a una regla que ya actuó, se detiene y la tarjeta se queda donde está.',
        { kind: 'person', label: 'Mueves «Diseño» a **Alta**', depth: 0 },
        { kind: 'rule', label: '«Alta a En curso» la mueve a **En curso**', detail: 'Se dispara porque la tarjeta entró en Alta.', depth: 1 },
        { kind: 'rule', label: '«En curso a Alta» la devuelve a **Alta**', detail: 'Se dispara porque la tarjeta entró en En curso.', depth: 2 },
        { kind: 'stop', label: '«Alta a En curso» ya no se repite', detail: 'Ya actuó en esta cadena: la tarjeta se queda en Alta y todo termina.', depth: 3 },
      ),
      warn('Una regla activa actúa sobre las tarjetas de **todo el equipo**, no solo las tuyas. Antes de activar una que mueva, archive o quite responsables, piensa en qué tarjetas la van a disparar.', 'Piénsalo antes de activarla'),

      h2('Historial y avisos'),
      p('Al abrir una regla, la pestaña **Historial** muestra cada vez que se ejecutó durante los últimos 30 días: sobre qué tarjeta (pulsa para abrirla), cuándo y cómo terminó.'),
      table(
        ['Estado', 'Significa'],
        ['Hecho', 'Todas las acciones se aplicaron.'],
        ['Con errores', 'Algunas acciones no se pudieron aplicar; el historial dice cuáles y por qué.'],
        ['Falló', 'No se pudo aplicar ninguna acción.'],
        ['En pausa', 'La pizarra superó el límite de ejecuciones de ese minuto.'],
      ),
      p('En la lista de reglas, una marca naranja avisa si la última ejecución falló o si la regla **usa algo que ya no existe** (una lista, etiqueta o persona borrada). Lo que hacen las reglas también aparece en la **Actividad** de la pizarra, y sus avisos llegan por correo bajo la categoría **Automatizaciones**, que puedes apagar en [Notificaciones](/docs/cuenta/notificaciones).'),

      h2('Editar, pausar y borrar'),
      list(
        'Pulsa una regla para abrirla y cambiarla; **Guardar** aplica los cambios y **Descartar** los deshace.',
        'El interruptor de cada regla la **activa o desactiva** sin perderla. Una regla desactivada no hace nada.',
        '**Duplicar** crea una copia para hacer una variante sin tocar la original.',
        'El icono de papelera la **borra**, después de confirmarlo.',
      ),
      note('Los comentarios, checklists y avisos que crea una regla aparecen **a nombre de quien la guardó por última vez**. Si editas una regla, pasa a estar a tu nombre; activarla o desactivarla no cambia su autor.'),
      p('Al [cerrar la pizarra](/docs/pizarras/cerrar-y-reabrir-pizarras), sus reglas se conservan, pero quedan pausadas junto con sus correos y no se pueden editar. Reabrir permite que las reglas activas vuelvan a responder a nuevos cambios; no activa las que ya habías desactivado.'),

      h2('Desde tu asistente'),
      p('Con [Zenth MCP](/docs/integraciones/zenth-mcp), un asistente como Claude puede **listar** las reglas de una pizarra, **crear** reglas nuevas (quedan activas al momento) y **activarlas o desactivarlas**. Borrar una regla solo se puede desde la app.'),

      h2('Límites'),
      list(
        'Hasta 10 condiciones y 10 acciones por regla.',
        'El nombre admite 80 caracteres; los comentarios, 2000; los avisos, 300.',
        'Las fechas se ponen entre hoy y dentro de 365 días; una checklist lleva hasta 20 pasos.',
        'Por ahora las reglas responden a cambios en las tarjetas. Las reglas programadas, como «cada lunes» o «cuando una tarjeta vence mañana», todavía no están disponibles.',
      ),
      tip('Empieza por una regla pequeña, mira su historial un par de días y luego sumale condiciones. Es más fácil entender qué hace una regla simple que corregir una enorme.'),
    ],
  },

  {
    slug: 'automatizaciones-y-plantillas',
    category: 'pizarras',
    title: 'Plantillas de tarjeta, lista y pizarra',
    summary: 'Guarda modelos de tarjeta y lista, o la estructura de una pizarra con sus campos personalizados, para reutilizarlos.',
    keywords: ['plantilla', 'plantillas', 'reutilizar', 'modelo', 'duplicar', 'tarjeta modelo', 'lista modelo', 'pizarra modelo', 'campos personalizados'],
    updated: '2026-10-06',
    related: ['pizarras/campos-personalizados', 'pizarras/acciones-de-listas', 'pizarras/mover-y-duplicar-tarjetas', 'pizarras/automatizaciones', 'pizarras/colaborar-en-tarjetas'],
    blocks: [
      note('Las automatizaciones tienen ahora su propia guía: [Automatizaciones: reglas que trabajan solas](/docs/pizarras/automatizaciones).'),

      h2('Plantillas'),
      p('Para repetir algo una sola vez puedes [duplicar una tarjeta](/docs/pizarras/mover-y-duplicar-tarjetas) o [copiar una lista con sus tarjetas pendientes](/docs/pizarras/acciones-de-listas). Una plantilla sirve para guardar un modelo y reutilizarlo más adelante.'),
      p('Guarda un proceso que se repite para no montarlo cada vez. Hay tres tipos:'),
      table(
        ['Tipo', 'Guarda…'],
        ['Tarjeta', 'Una tarjeta modelo. También puedes guardar una tarjeta real desde su detalle, con **Guardar plantilla**.'],
        ['Lista', 'Una lista con su nombre y color.'],
        ['Pizarra', 'El nombre, el icono, las listas y las definiciones de campos personalizados de la pizarra actual, para montar otra con esa estructura. No guarda sus tarjetas.'],
      ),
      p('En **Plantillas** ves las que tienes y pulsas **Usar** para aplicarlas: «Plantilla aplicada».'),
      p('Para crear, usar o eliminar plantillas de una pizarra cerrada, primero debe [reabrirla un propietario o administrador](/docs/pizarras/cerrar-y-reabrir-pizarras).'),

      h2('Campos en las plantillas de pizarra'),
      p('Al guardar una plantilla de **Pizarra**, se conservan los nombres y tipos de sus campos, las opciones con sus colores, el orden de los campos y **Mostrar en la tarjeta**. Al usarla se crean campos nuevos en la pizarra nueva: cambiar una definición allí no modifica la pizarra original ni la plantilla.'),
      p('La plantilla conserva los campos tal como estaban al guardarla. Si después añades o cambias campos en el origen, guarda otra plantilla para reutilizar esa versión. Las plantillas antiguas siguen funcionando; para que incluyan campos, vuelve a guardar el modelo desde una pizarra que los tenga.'),
      note('Las plantillas de pizarra guardan **definiciones**, no tarjetas ni valores. Las plantillas de tarjeta y lista tampoco guardan valores personalizados. Para conservar esos valores al copiar trabajo dentro de la misma pizarra, usa [Duplicar tarjeta o Copiar lista](/docs/pizarras/campos-personalizados#copias-y-cambios-de-pizarra).'),
      tip('Si cada semana montas la misma pizarra de proyecto, guarda una plantilla de **Pizarra**: es más rápido que duplicar a mano y no arrastra contenido que no quieres.'),
    ],
  },

  {
    slug: 'pizarra-publica-con-enlace',
    category: 'pizarras',
    title: 'Pizarra pública con enlace',
    summary: 'Comparte una pizarra en solo lectura con cualquiera que tenga el enlace, sin cuenta. Qué se ve y qué no, y cómo volver a hacerla privada.',
    keywords: ['público', 'visibilidad', 'con enlace', 'solo lectura', 'compartir sin cuenta', 'privada', 'enlace público', 'orden de tarjetas', 'tareas repetidas', 'próxima ocurrencia'],
    updated: '2026-10-06',
    related: ['pizarras/vistas-de-pizarra', 'pizarras/compartir-una-pizarra', 'privacidad/quien-ve-que'],
    blocks: [
      p('La **visibilidad** es independiente de los miembros. Una pizarra puede ser:'),
      table(
        ['Visibilidad', 'Quién la ve'],
        ['Privada', 'Solo sus miembros. Es como nacen todas.'],
        ['Con enlace', 'Cualquiera que tenga la dirección, en modo solo lectura y sin iniciar sesión.'],
      ),

      h2('Activarla'),
      steps(
        'Abre el selector de la pizarra y ve a **Visibilidad**, o pulsa el icono de visibilidad de la cabecera.',
        'En **Cambiar visibilidad** elige **Con enlace**. Zenth confirma «Enlace público activado».',
        'Copia el enlace público y compártelo.',
      ),
      p('Para volver atrás, elige **Privada**: «La pizarra volvió a ser privada». El enlace deja de funcionar.'),

      h2('Qué ve quien abre el enlace'),
      p('El enlace muestra el tablero de esa pizarra, en solo lectura y sin acceso a nada más de tu cuenta. En cada tarjeta se ven:'),
      list(
        'La descripción.',
        'Las etiquetas (con nombre y color).',
        'El progreso de la checklist.',
        'El **número** de comentarios.',
      ),
      p('**No** se muestran los adjuntos y las imágenes, los miembros asignados, los documentos vinculados, la ubicación, el enlace de videollamada, los campos personalizados ni datos de personas. Los comentarios se cuentan, pero nunca se envían. Y tampoco aparecen las tareas **completadas**, porque su historial es de los miembros.'),
      p('Activar **Mostrar en la tarjeta** en un [campo personalizado](/docs/pizarras/campos-personalizados) permite verlo en el tablero de los miembros. Sus definiciones y valores siguen fuera del enlace público.'),

      h2('Orden y tareas repetidas'),
      p('Las tarjetas respetan el orden guardado en la pizarra, incluido el que el equipo haya elegido al arrastrarlas. Las tarjetas pendientes con fecha futura también se ven: la fecha indica su vencimiento.'),
      p('De cada serie repetida se muestra **una sola ocurrencia pendiente**: la de hoy, o la atrasada más reciente si no hay una para hoy; cuando solo quedan futuras, la más cercana. Para decidir qué día es hoy se usa la zona horaria de quien creó la pizarra. Ver [Fechas futuras y tareas repetidas](/docs/pizarras/vistas-de-pizarra#fechas-futuras-y-tareas-repetidas).'),
      p('Al completar una ocurrencia, deja de aparecer en el enlace público y la siguiente pendiente puede ocupar su lugar. El historial de lo terminado continúa siendo exclusivo de los miembros.'),

      h2('Acceso al enlace'),
      warn('Al activar «con enlace» aceptas que **cualquiera que obtenga la dirección** pueda ver esa pizarra. Solo afecta a esa pizarra y puedes revocarlo cuando quieras. No pongas ahí nada que no quieras que se vea.', 'Piénsalo antes de activarlo'),
      p('Quien abre el enlace puede ver un botón para acceder a Zenth, o abrir Zenth si ya tiene sesión. Si la pizarra vuelve a ser privada o el enlace deja de existir, ve «Pizarra no disponible».'),
      p('Una [pizarra cerrada](/docs/pizarras/cerrar-y-reabrir-pizarras) también deja de mostrar contenido por su enlace público. Cerrar conserva su visibilidad: si estaba Con enlace, al reabrir vuelve a estar disponible. Para revocar ese acceso de forma independiente, cambia la visibilidad a **Privada** cuando esté abierta.'),
    ],
  },
];

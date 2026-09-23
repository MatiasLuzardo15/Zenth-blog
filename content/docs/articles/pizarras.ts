import { h2, list, note, p, path, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const pizarrasArticles: DocArticle[] = [
  {
    slug: 'crear-y-organizar-pizarras',
    category: 'pizarras',
    title: 'Crear y organizar pizarras',
    summary: 'Crea pizarras por proyecto, personaliza icono, color y diseño, organiza las listas y entiende qué pasa al salir o eliminar una.',
    keywords: ['tablero', 'kanban', 'trello', 'proyecto', 'listas', 'columnas', 'nueva pizarra', 'icono', 'color', 'diseño', 'eliminar pizarra', 'salir', 'descripción'],
    updated: UPDATED,
    related: ['pizarras/tarjetas-y-bandeja-rapida', 'pizarras/compartir-una-pizarra', 'cuenta/papelera'],
    blocks: [
      p('Una **pizarra** es un tablero por proyecto: tiene sus propias listas, sus tarjetas y, si la compartes, sus miembros. Puedes tener tantas como necesites, y cada una empieza siendo privada.'),

      h2('Crear una pizarra'),
      steps(
        'Ve a **Pizarras** (`Alt` + `2`) y abre el selector de la cabecera.',
        'Elige **Nueva pizarra**.',
        'Ponle nombre, elige un icono y pulsa **Crear**.',
      ),
      p('Para cambiar de pizarra usa el mismo selector. Ahí también aparecen, en una sección aparte, las pizarras **compartidas conmigo** (con tu rol en cada una) y las **invitaciones** pendientes.'),

      h2('Personalizar una pizarra'),
      p('El menú de la pizarra activa (la sección «Esta pizarra» del selector) reúne todo lo que la define:'),
      table(
        ['Opción', 'Qué hace'],
        ['Acerca de esta pizarra', 'Una descripción para dar contexto a los miembros.'],
        ['Visibilidad', 'Privada o con enlace público de solo lectura. Ver [Pizarra pública con enlace](/docs/pizarras/pizarra-publica-con-enlace).'],
        ['Cambiar icono', 'El icono que la identifica en el selector y en las listas.'],
        ['Color de la pizarra', 'Da color a la cabecera para reconocerla de un vistazo.'],
        ['Diseño', '**Horizontal**: columnas en una sola fila con desplazamiento lateral, estilo Trello. **Ajustar al espacio**: columnas en varias filas. En pantallas estrechas las columnas siempre se apilan.'],
      ),
      p('También puedes cambiar el diseño en **Ajustes › Experiencia de uso › Distribución de listas en Pizarras**. Renombrar, cambiar icono y cambiar ajustes requieren ser administrador; el diseño es una preferencia tuya y la puede cambiar cualquier rol, incluido el Observador.'),

      h2('Listas'),
      p('Cada pizarra tiene sus propias listas (columnas). Si tienes permiso para editarlas:'),
      list(
        '**Añade** una con el botón de nueva lista, escribiendo su nombre.',
        '**Renómbrala** tocando el título.',
        '**Reordénalas** arrastrando la cabecera de cada columna.',
        'Cambia su **color de acento** para distinguirlas.',
        '**Elimínala** si ya no la necesitas: sus tarjetas no se pierden, pasan a la lista de respaldo o, si no queda ninguna, a la bandeja.',
      ),
      p('Las listas de una pizarra nueva son Alto, Medio, Bajo y Pendientes, pero son solo un punto de partida: una tarjeta puede vivir en cualquier lista que crees.'),
      note('La **prioridad** de una tarjeta es, en realidad, la lista donde está. Por eso el campo «Prioridad» del editor muestra los nombres de tus listas.'),

      h2('Salir de una pizarra o eliminarla'),
      list(
        '**Salir** (si no eres el propietario): dejas de ver la pizarra y sus tarjetas. Podrás volver si un administrador te invita otra vez. Un administrador solo puede salir si queda al menos otro.',
        '**Eliminar** (solo el propietario): las tareas de la pizarra pasan a la [papelera](/docs/cuenta/papelera) y la pizarra desaparece para todos sus miembros. Antes de confirmar, Zenth te dice cuántas tareas y cuántos miembros tiene.',
      ),
      p('Siempre existe una **pizarra predeterminada** propia. Si eliminas la que lo era, Zenth designa otra de las tuyas o crea una nueva vacía.'),
    ],
  },

  {
    slug: 'tarjetas-y-bandeja-rapida',
    category: 'pizarras',
    title: 'Tarjetas y bandeja rápida',
    summary: 'Captura ideas sin clasificar en la bandeja, conviértelas en tarjetas, muévelas entre listas y decide si aparecen en Agenda.',
    keywords: ['tarjeta', 'bandeja', 'inbox', 'captura', 'arrastrar', 'mover', 'completar', 'buscar en pizarra', 'lista', 'tareas'],
    updated: UPDATED,
    related: ['agenda/crear-tareas-eventos-y-reuniones', 'agenda/historial-de-completadas', 'pizarras/colaborar-en-tarjetas'],
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
      p('Si tienes permiso de edición puedes además **arrastrar** las tarjetas entre listas para mover el trabajo. Una tarjeta completada sale del tablero y va al [historial de completadas](/docs/agenda/historial-de-completadas).'),

      h2('¿Aparece en Agenda?'),
      p('Por defecto, las tarjetas de una pizarra viven solo en su tablero. Si quieres que las **tareas nuevas de una pizarra** aparezcan también en Agenda, activa **Ajustes › Productividad › Añadir tareas de pizarras a Agenda**. Solo afecta a las tarjetas que crees a partir de ese momento.'),
      path('Ajustes', 'Productividad', 'Añadir tareas de pizarras a Agenda'),

      h2('Buscar dentro de la pizarra'),
      p('La cabecera de la pizarra tiene un buscador propio: **Buscar tareas en esta pizarra…**. Filtra las tarjetas del tablero sin salir de él. Para buscar en todo Zenth usa el [buscador global](/docs/primeros-pasos/busqueda-y-notificaciones).'),

      h2('Mi trabajo, filtrado'),
      p('En una pizarra compartida puedes filtrar por persona para ver solo **Mis tarjetas**, las que están **Sin responsable** o las de un compañero concreto. Ver [Menú de colaboración](/docs/pizarras/menu-de-colaboracion).'),
    ],
  },

  {
    slug: 'compartir-una-pizarra',
    category: 'pizarras',
    title: 'Compartir una pizarra: invitaciones y roles',
    summary: 'Invita por correo o con un enlace, elige el rol de cada persona y entiende quién puede hacer qué, incluido el propietario.',
    keywords: ['compartir', 'invitar', 'invitación', 'enlace', 'roles', 'administrador', 'miembro', 'observador', 'propietario', 'permisos', 'expulsar', 'transferir', 'equipo'],
    updated: UPDATED,
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
        ['Administrador', 'Gestiona la pizarra y sus miembros: edita el contenido, invita personas, cambia roles y ajustes, y expulsa miembros.'],
        ['Miembro', 'Crea, edita y mueve tarjetas y listas, pero no administra la pizarra.'],
        ['Observador', 'Ve las tarjetas y las listas, sin modificarlas. Puede comentar y votar mientras un administrador lo permita (viene activado).'],
      ),
      p('Si entras como Observador, la interfaz **oculta** las acciones que no puedes ejecutar en lugar de dejarte fallar. Y aunque alguien tocara la interfaz, los permisos reales se aplican en el servidor.'),

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
    updated: UPDATED,
    related: ['pizarras/compartir-una-pizarra', 'ayuda/un-enlace-no-funciona', 'primeros-pasos/crear-cuenta-e-iniciar-sesion'],
    blocks: [
      h2('Por correo'),
      p('El correo de invitación lleva a una pantalla, **Te invitaron a colaborar**, con quién te invita y con qué rol. Pulsa **Aceptar invitación** para entrar.'),
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
    updated: UPDATED,
    related: ['pizarras/menu-de-colaboracion', 'pizarras/compartir-una-pizarra', 'agenda/detalle-de-una-tarea'],
    blocks: [
      p('Cuando una tarjeta vive en una pizarra compartida, su detalle incluye un panel de colaboración con cinco secciones que se pliegan y despliegan.'),

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
    summary: 'Filtros y carga de trabajo, etiquetas compartidas, actividad, notificaciones, seguimiento y preferencias de una pizarra compartida.',
    keywords: ['filtros', 'carga', 'etiquetas', 'actividad', 'seguimiento', 'preferencias', 'observadores', 'notificaciones de pizarra', 'más opciones'],
    updated: UPDATED,
    related: ['pizarras/automatizaciones-y-plantillas', 'pizarras/colaborar-en-tarjetas', 'enfoque/enfoque-y-equipo'],
    blocks: [
      p('En la cabecera de una pizarra compartida, **Más opciones de la pizarra** abre el panel **Colaboración**. Reúne todo lo que es del equipo y no de una tarjeta concreta.'),

      h2('Filtros y carga'),
      p('Filtra el tablero por equipo:'),
      list(
        '**Todas las tarjetas**, **Mis tarjetas** o **Sin responsable**.',
        'O por una **persona** concreta, con el número de tarjetas que tiene asignadas al lado: así ves quién está más cargado antes de repartir.',
      ),
      p('Cuando hay un filtro activo, el botón lo indica («Filtro activo»).'),

      h2('Etiquetas compartidas'),
      p('El vocabulario común de la pizarra. Crea una etiqueta con nombre y color y podrá usarla cualquier miembro en las tarjetas.'),

      h2('Actividad'),
      p('El registro de la pizarra: quién hizo qué, cuándo y sobre qué tarjeta. Pulsa un evento para abrir la tarjeta. Si lo generó una automatización, aparece «Zenth» como autor.'),

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
        '**Observadores pueden comentar.**',
        '**Observadores pueden votar.**',
        '**Seguir al asignar automáticamente:** quien recibe una tarjeta pasa a seguirla.',
      ),

      h2('Personas enfocadas'),
      p('Si algún miembro tiene un Enfoque en marcha y lo permitió, verás cuántas personas están enfocadas y **hasta qué hora**, para no interrumpirlas. Nunca se muestra en qué trabajan.'),
    ],
  },

  {
    slug: 'automatizaciones-y-plantillas',
    category: 'pizarras',
    title: 'Automatizaciones y plantillas',
    summary: 'Reglas rápidas que actúan cuando una tarjeta se crea, se mueve o se completa, y plantillas de tarjeta, lista o pizarra para no repetir trabajo.',
    keywords: ['automatización', 'reglas', 'plantilla', 'plantillas', 'bot', 'avisar al completar', 'fecha para mañana', 'reutilizar'],
    updated: UPDATED,
    related: ['pizarras/menu-de-colaboracion', 'pizarras/colaborar-en-tarjetas'],
    blocks: [
      h2('Automatizaciones'),
      p('Una automatización es una regla de la pizarra: cuando ocurre algo con una tarjeta, Zenth hace algo por ti. Están en **Más opciones de la pizarra › Automatizaciones**. Lo que las dispara puede ser que una tarjeta se **cree**, se **mueva** a otra lista, se **complete** o se **asigne**.'),
      p('Para empezar hay tres reglas rápidas:'),
      table(
        ['Regla', 'Qué hace'],
        ['Avisar al completar', 'Cuando se completa una tarjeta, avisa a la pizarra.'],
        ['Avisar al iniciar trabajo', 'Avisa a la pizarra cuando una tarjeta entra en la lista de trabajo en curso (la que se llame «En curso», «Progreso» o similar; si no hay, la segunda lista).'],
        ['Nueva tarjeta vence mañana', 'A cada tarjeta nueva le pone fecha de mañana.'],
      ),
      p('Cada regla se puede activar o desactivar. Lo que hacen las automatizaciones aparece en la **Actividad** con «Zenth» como autor, y por correo llegan bajo la categoría **Automatizaciones**, que puedes apagar en [Notificaciones](/docs/cuenta/notificaciones).'),

      h2('Plantillas'),
      p('Guarda un proceso que se repite para no montarlo cada vez. Hay tres tipos:'),
      table(
        ['Tipo', 'Guarda…'],
        ['Tarjeta', 'Una tarjeta modelo. También puedes guardar una tarjeta real desde su detalle, con **Guardar plantilla**.'],
        ['Lista', 'Una lista con su nombre y color.'],
        ['Pizarra', 'El nombre, el icono y las listas de la pizarra actual, para montar otra igual.'],
      ),
      p('En **Plantillas** ves las que tienes y pulsas **Usar** para aplicarlas: «Plantilla aplicada».'),
      tip('Si cada semana montas la misma pizarra de proyecto, guarda una plantilla de **Pizarra**: es más rápido que duplicar a mano y no arrastra contenido que no quieres.'),
    ],
  },

  {
    slug: 'pizarra-publica-con-enlace',
    category: 'pizarras',
    title: 'Pizarra pública con enlace',
    summary: 'Comparte una pizarra en solo lectura con cualquiera que tenga el enlace, sin cuenta. Qué se ve y qué no, y cómo volver a hacerla privada.',
    keywords: ['público', 'visibilidad', 'con enlace', 'solo lectura', 'compartir sin cuenta', 'privada', 'enlace público'],
    updated: UPDATED,
    related: ['pizarras/compartir-una-pizarra', 'privacidad/quien-ve-que'],
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
      p('**No** se muestran los adjuntos y las imágenes, los miembros asignados, los documentos vinculados, la ubicación, el enlace de videollamada, ni datos de personas. Los comentarios se cuentan, pero nunca se envían. Y tampoco aparecen las tareas **completadas**, porque su historial es de los miembros.'),
      warn('Al activar «con enlace» aceptas que **cualquiera que obtenga la dirección** pueda ver esa pizarra. Solo afecta a esa pizarra y puedes revocarlo cuando quieras. No pongas ahí nada que no quieras que se vea.', 'Piénsalo antes de activarlo'),
      p('Quien abre el enlace puede ver un botón para acceder a Zenth, o abrir Zenth si ya tiene sesión. Si la pizarra vuelve a ser privada o el enlace deja de existir, ve «Pizarra no disponible».'),
    ],
  },
];

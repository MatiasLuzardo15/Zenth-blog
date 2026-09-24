import { h2, h3, keys, list, note, p, path, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const agendaArticles: DocArticle[] = [
  {
    slug: 'vistas-y-planificacion',
    category: 'agenda',
    title: 'Vistas de Agenda y planificador anual',
    summary: 'Cambia entre día, semana y mes, entiende Mañana, Tarde y Noche, usa el panel lateral y planifica el año entero de un vistazo.',
    keywords: ['calendario', 'día', 'semana', 'mes', 'año', 'planificador', 'momentos', 'hoy', 'panel lateral', 'nota del día', 'captura rápida', 'vista'],
    updated: UPDATED,
    related: ['agenda/crear-tareas-eventos-y-reuniones', 'atajos/atajos-de-la-aplicacion', 'integraciones/google-calendar'],
    blocks: [
      p('Agenda es donde decides **cuándo** cabe cada cosa. Reúne tus tareas, eventos y reuniones (y, si los conectas, los eventos de Google Calendar) en una vista de día, semana o mes.'),

      h2('Día, semana y mes'),
      p('Los selectores de la cabecera cambian la vista. Zenth recuerda la última que usaste.'),
      keys(
        [['D'], 'Vista de día'],
        [['S'], 'Vista de semana'],
        [['M'], 'Vista de mes'],
        [['T'], 'Volver a hoy'],
        [['←'], 'Período anterior (un día, una semana o un mes, según la vista)'],
        [['→'], 'Período siguiente'],
      ),
      list(
        '**Día.** La vista de trabajo. Puedes crear una tarea tocando un hueco del calendario (la fecha y la hora salen del punto que tocas), **arrastrar** un bloque para reprogramarlo y **redimensionarlo** para cambiar su duración.',
        '**Semana.** Los siete días de un vistazo. Elige un día para abrirlo en la vista diaria.',
        '**Mes.** Para ver la carga del mes. Elige un día para abrirlo.',
      ),
      p('Estos atajos se pausan mientras escribes en un campo o tienes un diálogo abierto, para no interferir.'),

      h2('Mañana, Tarde y Noche'),
      p('No todo necesita una hora exacta. Cada tarea puede vivir en un **momento del día**: Mañana, Tarde o Noche. Si necesita precisión, además le pones una hora de inicio y una duración.'),
      p('El panel **Momentos del día** muestra lo que tienes en cada franja. Puedes plegarlo si necesitas más espacio. A qué hora empieza tu mañana lo eliges en **Ajustes › Productividad › Inicio de la mañana** y los bloques se reorganizan según tu horario real.'),
      path('Ajustes', 'Productividad', 'Inicio de la mañana'),

      h2('El panel lateral'),
      p('En escritorio, Agenda tiene un panel a la izquierda con varias piezas. Puedes contraerlo a una columna de iconos para ganar espacio: cada icono abre su pieza, y Zenth recuerda cómo lo dejaste.'),
      table(
        ['Pieza', 'Qué hace'],
        ['Calendario', 'Un mes en miniatura para saltar a cualquier día.'],
        ['Progreso del día', 'Cuánto llevas hecho de lo que planificaste para hoy.'],
        ['Próximo bloque', 'Lo siguiente que tienes, para no tener que buscarlo.'],
        ['Captura rápida', 'Escribe «Añadir una tarea…» y pulsa Enter: se agenda automáticamente en el momento adecuado del día.'],
        ['Nota del día', 'Un espacio para ideas, contexto o recordatorios de ese día. Se guarda como una nota en tu Biblioteca.'],
        ['Calendarios visibles', 'Activa o desactiva qué calendarios (Zenth, Google) aparecen en la vista.'],
      ),

      h2('El planificador anual'),
      p('Para ver el año entero, abre el **Planificador anual** desde el panel lateral. Tiene dos formas de leerlo:'),
      list(
        '**Cuadrícula:** los doce meses, mes a mes. Pasa el cursor sobre un día para ver sus eventos y púlsalo para abrirlo.',
        '**Lista:** día a día, con lo que hay en cada uno.',
      ),
      p('También puedes filtrar por calendario: por ejemplo, ver solo lo que viene de Google Calendar.'),

      h2('En el móvil'),
      list(
        'Agenda muestra una **tira de la semana** arriba y la lista del día debajo; el mes se ve en cuadrícula.',
        'El panel **Momentos** se abre como una hoja desde abajo.',
        'Un **doble toque** en Agenda en la barra inferior te lleva al momento actual del día.',
        'El botón **+** de la barra inferior crea una tarea.',
      ),
    ],
  },

  {
    slug: 'crear-tareas-eventos-y-reuniones',
    category: 'agenda',
    title: 'Crear tareas, eventos y reuniones',
    summary: 'Todos los campos del editor: momento, fecha, hora, duración, pasos, etiquetas, documentos, imágenes, gran objetivo y aviso.',
    keywords: ['tarea', 'evento', 'nueva tarea', 'editor', 'gran objetivo', 'pasos', 'subtareas', 'etiquetas', 'duración', 'emoji', 'icono', 'avisar', 'crear'],
    updated: UPDATED,
    related: ['agenda/repeticion-y-recordatorios', 'agenda/detalle-de-una-tarea', 'integraciones/zen-asistente'],
    blocks: [
      p('El mismo editor sirve para una tarea de una línea, un bloque con hora y duración, o una reunión con invitados. Solo rellenas lo que necesitas.'),

      h2('Abrir el editor'),
      list(
        'En Agenda: el botón de crear tarea, la tecla `C`, o tocando un hueco de la vista de día.',
        'En una pizarra: **Añadir tarea** al final de una lista, o la bandeja rápida para capturar sin clasificar.',
        'En el móvil: el botón **+** de la barra inferior.',
      ),
      tip('Escribe una frase como «Cita médica el lunes a las 10» y pulsa **Pedir a Zen**: rellena título, fecha, hora y prioridad por ti. Ver [Zen, el asistente](/docs/integraciones/zen-asistente).'),

      h2('Los campos'),
      table(
        ['Campo', 'Para qué sirve'],
        ['Icono y título', 'El título responde a «¿Cuál es tu próximo paso?». El icono ayuda a reconocerla de un vistazo.'],
        ['Momento', 'Mañana, Tarde o Noche. Pulsa para cambiar.'],
        ['Prioridad', 'Solo aparece dentro de una pizarra: es la lista donde vive la tarjeta (por ejemplo Alto, Medio, Bajo o las listas que hayas creado).'],
        ['Fecha y hora', 'La hora es opcional: sin hora, la tarea vive en su momento del día.'],
        ['Duración', 'Cuánto tiempo ocupa el bloque en la vista de día.'],
        ['Repetición', 'No repetir, Diario, Semanal o Mensual. Ver [Repetición y recordatorios](/docs/agenda/repeticion-y-recordatorios).'],
        ['Etiquetas', 'Para agrupar y filtrar. Se comparten dentro de una pizarra.'],
        ['Pasos a seguir', 'Una lista de subtareas que puedes ir marcando.'],
        ['Documentos', 'Vincula notas y lienzos de Zenth, o archivos de Google Drive. Ver [Vincular documentos a tareas](/docs/biblioteca/vincular-documentos-a-tareas).'],
        ['Imágenes', 'Adjunta imágenes a la tarea.'],
        ['Gran objetivo', 'Márcala si es lo que de verdad importa hoy: vale 50 XP en vez de 10 y se distingue en la lista.'],
        ['Avisar', 'Activa un recordatorio a la hora de la tarea.'],
        ['Reunión', 'Añade servicio de videollamada, enlace, ubicación e invitados. Ver [Reuniones con invitados en Agenda](/docs/agenda/reuniones-con-invitados-en-agenda).'],
      ),

      h2('Ayuda de Zen dentro del editor'),
      list(
        '**Pedir a Zen** convierte una frase en una tarea completa.',
        '**Auto-agendar** propone el mejor momento para la tarea a partir de su texto y de la fecha actual.',
        '**Sugerir pasos** parte una tarea grande en tres a cinco micro-pasos concretos.',
      ),
      note('Zen solo actúa cuando se lo pides y solo recibe el texto de esa solicitud. Detalles en [Privacidad de Zen](/docs/integraciones/zen-asistente).'),

      h2('Agenda y pizarras: ¿en cuál vive la tarea?'),
      p('Una tarea puede pertenecer a una pizarra, a Agenda o a las dos. Tú eliges cómo se comporta por defecto en **Ajustes › Productividad**:'),
      list(
        '**Añadir tareas de pizarras a Agenda:** las tareas nuevas de una pizarra también aparecen en Agenda.',
        '**Añadir tareas de Agenda a la pizarra activa:** las tareas nuevas de Agenda también pertenecen a la pizarra que tienes abierta.',
      ),
      p('Los dos sentidos se controlan por separado y ambos vienen desactivados. Sin ellos, las tarjetas de una pizarra viven solo en su tablero y las tareas creadas en Agenda, solo en Agenda.'),
    ],
  },

  {
    slug: 'repeticion-y-recordatorios',
    category: 'agenda',
    title: 'Repetición y recordatorios',
    summary: 'Crea rutinas diarias, semanales o mensuales, edita una sola repetición o toda la serie, y elige cómo quieres que Zenth te avise.',
    keywords: ['recurrente', 'rutina', 'repetir', 'serie', 'hábito', 'diario', 'semanal', 'mensual', 'aviso', 'recordatorio', 'notificación', 'anticipación'],
    updated: UPDATED,
    related: ['cuenta/notificaciones', 'ayuda/los-avisos-no-llegan', 'cuenta/papelera'],
    blocks: [
      h2('Tareas que se repiten'),
      p('En el editor, el selector **Repetición** alterna entre **No repetir**, **Diario**, **Semanal** y **Mensual**. Al elegir Semanal aparece una fila con los días (L M X J V S D) para marcar cuáles.'),
      warn('Toda repetición necesita una **fecha de fin**. Bajo el selector aparece «Finalizar repetición» marcado como «Requerido»; hasta que elijas una fecha, no se puede guardar la tarea.', 'La fecha de fin es obligatoria'),

      h2('Editar o borrar una tarea repetida'),
      p('Cuando editas una tarea que forma parte de una serie, Zenth te pregunta a qué parte se aplica el cambio:'),
      table(
        ['Opción', 'Qué pasa'],
        ['Solo esta tarea', 'El cambio afecta únicamente a esa aparición; la serie continúa igual.'],
        ['Esta y las siguientes', 'El cambio se aplica desde esa fecha en adelante.'],
        ['Toda la serie', 'El cambio se aplica a todas las repeticiones.'],
      ),
      p('Al borrarla pasa lo mismo: «Elige cuánto de la serie quieres mover a la papelera». Si mandas una tarea recurrente a la [papelera](/docs/cuenta/papelera), Zenth detiene sus repeticiones futuras.'),

      h2('Recordatorios'),
      p('Activa **Avisar** en el editor para que Zenth te recuerde la tarea a su hora. Cómo te llega el aviso depende de lo que hayas activado en **Ajustes › Notificaciones**:'),
      list(
        '**Dentro de Zenth:** «Notificaciones Zen», recordatorios suaves mientras la app está abierta.',
        '**En el dispositivo (push):** avisos del sistema aunque Zenth esté cerrado. Requiere permiso del navegador, y en iPhone la app instalada.',
        '**Por correo:** avisos de tareas, eventos y reuniones, con la anticipación que elijas: a la hora, 5, 10, 15, 30 minutos o 1 hora antes.',
      ),
      p('Todo esto está explicado en [Notificaciones](/docs/cuenta/notificaciones). Si algo no llega, mira [Los avisos no llegan](/docs/ayuda/los-avisos-no-llegan).'),
      tip('El **aviso de racha** por correo es distinto: solo se envía cuando tu racha vence esta noche o llevas días sin entrar, y a la hora que tú elijas.'),
    ],
  },

  {
    slug: 'reuniones-con-invitados-en-agenda',
    category: 'agenda',
    title: 'Reuniones con invitados en Agenda',
    summary: 'Convierte un evento en una reunión: elige el servicio (Zenth, Meet, Zoom, Teams u otro), añade invitados por correo y sigue quién aceptó.',
    keywords: ['reunión', 'invitados', 'invitación', 'videollamada', 'meet', 'zoom', 'teams', 'enlace', 'aceptar', 'rechazar', 'programar', 'evento'],
    updated: UPDATED,
    related: ['reuniones/reuniones-rapidas-e-invitados', 'agenda/crear-tareas-eventos-y-reuniones'],
    blocks: [
      p('Cualquier tarea o evento de Agenda puede ser una **reunión**. Al activar el interruptor **Reunión** del editor aparecen el servicio de videollamada, el enlace, la ubicación y los invitados.'),

      h2('Elegir el servicio'),
      table(
        ['Servicio', 'Cómo funciona'],
        ['Zenth', 'Pulsa **Crear** y Zenth genera un enlace de invitación seguro sin salir del editor. Quien lo recibe entra con su nombre, sin cuenta.'],
        ['Google Meet, Zoom, Microsoft Teams', 'Pega el enlace que creaste en ese servicio. Zenth solo lo guarda y lo muestra.'],
        ['Otro enlace', 'Cualquier otra videoconferencia.'],
      ),
      p('También puedes añadir una **ubicación física** si la reunión es presencial. Si cambias entre Zenth y otro servicio, el enlace anterior se limpia para no mezclarlos.'),
      note('Las reuniones de Zenth tienen voz, cámara opcional y pantalla compartida, y no se graban. Ver [Reuniones rápidas e invitados](/docs/reuniones/reuniones-rapidas-e-invitados).'),

      h2('Invitar por correo'),
      steps(
        'En el editor, abre **Agregar invitados**.',
        'Escribe el correo en «persona@correo.com» y pulsa **Agregar**. Repite con cada persona.',
        'Guarda la tarea.',
      ),
      p('Los invitados reciben la invitación al guardar y **otro correo a la hora del evento**, con el enlace de la llamada si existe. Junto a cada dirección ves su estado:'),
      table(
        ['Estado', 'Significa'],
        ['Por enviar', 'Todavía no se ha enviado la invitación (se envía al guardar).'],
        ['Pendiente', 'Enviada, sin respuesta.'],
        ['Aceptó', 'Confirmó su asistencia.'],
        ['No asistirá', 'Rechazó la invitación.'],
      ),

      h2('Qué ve quien recibe la invitación'),
      p('El correo lleva a una página donde la persona confirma si podrá participar. **No necesita una cuenta de Zenth para responder.** Puede cambiar su respuesta más adelante. Quien confirma recibe un recordatorio a la hora del evento; quien rechaza, no.'),
      p('Si tiene o crea una cuenta con el mismo correo, puede pulsar **Guardar en mi calendario** y el evento aparece en su Agenda. Con una cuenta puede además entrar a la llamada de Zenth desde el propio evento.'),

      h2('Entrar a la reunión'),
      p('Desde el detalle de la tarea, el botón **Entrar a la reunión de Zenth** te mete en la llamada. Si ya estás en otra conversación, Zenth te pide que salgas de ella antes de iniciar esta.'),
    ],
  },

  {
    slug: 'detalle-de-una-tarea',
    category: 'agenda',
    title: 'El detalle de una tarea',
    summary: 'Qué puedes hacer al abrir una tarea: editarla, convertirla en nota, iniciar un Enfoque, ver sus documentos y mandarla a la papelera.',
    keywords: ['abrir tarea', 'detalle', 'convertir en nota', 'expandir', 'iniciar focus', 'notas', 'documentos vinculados', 'acceso', 'papelera'],
    updated: UPDATED,
    related: ['biblioteca/vincular-documentos-a-tareas', 'enfoque/usar-enfoque', 'agenda/crear-tareas-eventos-y-reuniones'],
    blocks: [
      p('Al pulsar una tarea se abre su detalle: un resumen de todo lo que sabe Zenth sobre ella, con las acciones más usadas a mano.'),

      h2('Acciones de la cabecera'),
      table(
        ['Acción', 'Qué hace'],
        ['Convertir en nota', 'Expande la tarea a una nota completa de la Biblioteca y mantiene el vínculo entre las dos.'],
        ['Editar', 'Vuelve al editor para cambiar cualquier campo. En una tarea repetida, pregunta si el cambio es solo para esa aparición o para la serie.'],
        ['Iniciar focus', 'Empieza una sesión de Enfoque vinculada a esta tarea. Ver [Usar Enfoque](/docs/enfoque/usar-enfoque).'],
        ['Enviar a la papelera', 'La retira de Agenda y de la pizarra. Puedes recuperarla desde la [papelera](/docs/cuenta/papelera).'],
      ),

      h2('Lo que muestra'),
      list(
        'Fecha, hora, duración y momento del día. Si no hay nada programado dice «Sin programar».',
        'La nota de la tarea, plegada, con «Ver más» si es larga.',
        'Los **documentos vinculados**. Si un documento es privado de otra persona, aparece como «Nota privada» o «Lienzo privado» con «Sin acceso». Si es de Zenth y está compartido con la pizarra, dice si la pizarra puede leerlo o editarlo. Los de Drive dicen «Permisos administrados por Google».',
        'Si la tarea es una reunión de Zenth, el botón para entrar a la llamada.',
        '**Acceso:** «Solo tú» si es personal, o «Miembros de la pizarra» si pertenece a una pizarra compartida.',
        'De dónde viene: «Importado desde Google Calendar» si es un evento externo, o «creado en Zenth».',
      ),
      tip('En un evento importado de Google Calendar puedes usar **Llevar a pizarra** para convertirlo en una tarjeta. Nada llega a una pizarra por su cuenta. Ver [Google Calendar](/docs/integraciones/google-calendar).'),

      h2('Colaboración en la tarjeta'),
      p('Si la tarea vive en una pizarra compartida, su detalle incluye comentarios, menciones, responsables, votos, aprobaciones y checklists. Están explicados en [Colaborar en tarjetas](/docs/pizarras/colaborar-en-tarjetas).'),
    ],
  },

  {
    slug: 'historial-de-completadas',
    category: 'agenda',
    title: 'Historial de tareas completadas',
    summary: 'Las tareas terminadas salen de la vista pero no desaparecen: búscalas y devuélvelas al tablero desde el historial de un día o de una pizarra.',
    keywords: ['completadas', 'historial', 'archivadas', 'restaurar', 'terminadas', 'hechas', 'devolver'],
    updated: UPDATED,
    related: ['pizarras/crear-y-organizar-pizarras', 'cuenta/papelera'],
    blocks: [
      p('Antes las tareas completadas se acumulaban en una columna del tablero. Ahora, al terminarlas, pasan a un **historial** y las listas quedan limpias. En su lugar verás una tarjeta llamada **Completadas · Ver historial**, con un contador.'),

      h2('Dónde está'),
      list(
        '**En una pizarra:** la tarjeta Completadas, al final de las listas, abre el historial de esa pizarra.',
        '**En Agenda:** el panel de momentos del día (en móvil, la hoja Momentos) tiene la misma tarjeta y abre el historial de ese día, donde aparecen como **Archivadas** las tareas que completaste durante él.',
      ),

      h2('Qué puedes hacer'),
      list(
        '**Buscar** por título, categoría o palabras de las notas: «Buscar tareas, categorías o notas…».',
        'Recorrerlas **agrupadas por mes** (en una pizarra) o por día.',
        '**Restaurar** una tarea para devolverla al tablero. Zenth confirma con «Tarea devuelta al tablero».',
      ),
      note('Una pizarra pública **no muestra** el historial: las completadas son cosa de los miembros. Ver [Pizarra pública con enlace](/docs/pizarras/pizarra-publica-con-enlace).'),
      p('Completar no es lo mismo que borrar. Las tareas borradas van a la [papelera](/docs/cuenta/papelera).'),
    ],
  },
];

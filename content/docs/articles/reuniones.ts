import { h2, keys, list, note, p, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const reunionesArticles: DocArticle[] = [
  {
    slug: 'la-seccion-reuniones',
    category: 'reuniones',
    title: 'La sección Reuniones',
    summary: 'Un solo lugar para las salas de tus pizarras, las llamadas privadas y las reuniones con invitados. La conversación sigue mientras navegas.',
    keywords: ['reuniones', 'llamadas', 'salas', 'directorio', 'voz', 'cámara', 'vídeo', 'videollamada', 'nueva reunión', 'panel', 'minimizar', 'pantalla completa', 'llamada en curso'],
    updated: '2026-10-08',
    related: ['reuniones/salas-de-pizarra-y-llamadas-privadas', 'reuniones/reuniones-rapidas-e-invitados', 'reuniones/durante-una-llamada'],
    blocks: [
      p('**Reuniones** (`Alt` + `4`) reúne, sin cambiar de sección ni de pizarra, todas las formas de hablar dentro de Zenth. Antes se llamaba «Llamadas». Está pensada como una herramienta más de colaboración, no como una plataforma de videoconferencia: **hay voz, cámara opcional y pantalla compartida, pero no grabación**. La cámara siempre empieza apagada y solo la enciendes tú.'),

      h2('Qué hay en la sección'),
      table(
        ['Bloque', 'Qué es'],
        ['Nueva reunión', 'Crea una reunión rápida para invitados: un enlace para más tarde, una reunión express o una programada en Agenda.'],
        ['Salas de tus pizarras', 'La sala de voz de cada pizarra compartida en la que estás. Aparece en el directorio cuando la pizarra tiene al menos dos integrantes.'],
        ['Llamadas privadas', 'Desde la cara de un integrante puedes llamarle en privado.'],
        ['Reuniones programadas', 'Lo próximo en tu Agenda y las reuniones con invitados que siguen abiertas.'],
      ),
      p('Cada sala muestra quién está dentro ahora y, en el directorio, quién está **En línea** o **Sin conexión**. Abrir una sala **no cambia de pizarra ni de sección**: solo empieza la preparación de audio de esa conversación.'),

      h2('La conversación sigue contigo'),
      p('Una llamada en curso sobrevive a la navegación: puedes ir a Agenda, escribir una nota o abrir una pizarra mientras hablas. En escritorio puedes mostrarla de cinco formas, sin cortar la conexión:'),
      list(
        '**Empotrada:** dentro de la propia sección Reuniones.',
        '**Expandida:** un panel flotante que puedes **arrastrar por el título**.',
        '**Minimizada:** una pastilla que sigue mostrando el estado.',
        '**Oculta:** el audio continúa aunque no veas nada.',
        '**Pantalla completa.**',
      ),
      note('Ocultar o minimizar una llamada **no es abandonarla**. Lo único que corta la conexión es **Salir** o **Colgar**.'),
      p('Solo puedes estar en una conversación a la vez. Si intentas entrar en otra, Zenth te pide que salgas de la actual («Sal de la conversación actual para iniciar otra»).'),

      h2('El chat junto a la pizarra'),
      p('En una **sala de pizarra**, el botón **Chat** del panel flotante abre la conversación dentro del mismo widget. Puedes seguir viendo el tablero, escribir y compartir tarjetas con los controles de llamada a mano. Vuelve a pulsar **Chat** para cerrarlo. Ver [Compartir tarjetas y crear tareas en el chat](/docs/reuniones/tarjetas-y-tareas-en-el-chat-de-la-sala).'),

      h2('En el móvil'),
      p('En el móvil, **Reuniones** está dentro de **Más**, junto a Progreso, Actividad y ánimo y la Papelera. Un punto en el icono indica que tienes una llamada en curso.'),
      p('La llamada activa se recoge en una **franja** desde la que puedes abrirla entera. El panel flotante de escritorio no se superpone al móvil; el chat se abre como una vista completa.'),
      tip('Las llamadas necesitan HTTPS para usar el micrófono, la cámara y compartir pantalla. En zenth.space ya lo es; si Zenth te avisa de que las llamadas «todavía no están listas» o «habilitadas», es una cuestión del servicio, no de tu equipo.'),
    ],
  },

  {
    slug: 'salas-de-pizarra-y-llamadas-privadas',
    category: 'reuniones',
    title: 'Salas de pizarra y llamadas privadas',
    summary: 'Cada pizarra compartida tiene una sala de voz para su equipo. Entre integrantes también puedes llamarte en privado, uno a uno.',
    keywords: ['sala', 'sala del equipo', 'llamada privada', 'llamar', 'timbre', 'pizarra', 'integrantes', 'voz', 'fondo de la llamada', 'chat de la sala', 'moderar', 'sacar de la sala', 'unirse', 'en la sala', 'presencia', 'cabecera'],
    updated: '2026-10-08',
    related: ['reuniones/tarjetas-y-tareas-en-el-chat-de-la-sala', 'reuniones/durante-una-llamada', 'reuniones/el-menu-de-cada-persona', 'pizarras/compartir-una-pizarra', 'privacidad/quien-ve-que'],
    blocks: [
      h2('La sala de una pizarra'),
      p('Cada pizarra compartida tiene **su** sala de voz, abierta a sus integrantes. Cualquier miembro entra y sale libremente, cuando quiere.'),
      steps(
        'Abre **Reuniones**. Verás las salas de todas tus pizarras compartidas.',
        'Pulsa **Entrar a la sala** (o **Unirse a la sala** si ya hay gente).',
        'Zenth abre **Preparar audio** para que elijas micrófono y salida. Después, **Entrar a la sala**.',
      ),
      list(
        'La sala solo se abre cuando entra la primera persona y se cierra cuando sale la última: una sala vacía no consume nada.',
        'También puedes abrirla desde el menú **Equipo de la pizarra** (**Sala del equipo**), dentro de la propia pizarra.',
        'Si te eliminan de la pizarra mientras estás en la sala, sales de ella automáticamente.',
      ),
      note('**Conocer el nombre de una sala no sirve de nada:** para entrar hace falta ser integrante actual de la pizarra. La comprobación se hace en el servidor, no en la pantalla.'),

      h2('Ver quién está en la sala desde la pizarra'),
      p('En **escritorio**, cuando hay gente en la sala, la cabecera de esa pizarra muestra sus iniciales: hasta tres personas y un **+N** si hay más. Al pasar el cursor puedes leer los nombres. Solo cuenta a quienes están en la sala de esa pizarra, no a todos sus miembros.'),
      list(
        '**Unirse** abre la preparación de audio sin cambiar de pizarra.',
        'Si ya estás dentro, **En la sala** vuelve a mostrar tu llamada; no inicia otra conexión.',
        'Si estás en otra conversación, debes salir de ella antes de unirte.',
        'Cuando sale la última persona, las iniciales y el botón desaparecen. Este acceso de la cabecera no se muestra en móvil.',
      ),

      h2('Chat de la sala'),
      p('El chat de una sala de pizarra **se guarda con la pizarra**: quien llega tarde, o vuelve otro día, lee el historial (los últimos 200 mensajes al conectar). Los mensajes solo los ven los integrantes, quien escribe puede borrar los suyos, y el aviso dentro del chat lo recuerda: «Este chat se queda en la sala».'),
      p('Además de mensajes, puedes **compartir tarjetas de esa pizarra** y **crear una tarea con /tarea**, con responsables elegidos mediante menciones. El chat también funciona dentro del panel flotante, junto al tablero. Ver [Compartir tarjetas y crear tareas en el chat](/docs/reuniones/tarjetas-y-tareas-en-el-chat-de-la-sala).'),

      h2('Fondo de la sala'),
      p('Un administrador de la pizarra puede elegir el fondo de la sala entre ocho degradados: **Medianoche, Océano, Aurora, Atardecer, Bosque, Uva, Grafito y Rosa**. Queda guardado en la pizarra y lo ven todos los que entran, también quienes ya estaban dentro.'),

      h2('Moderar la sala'),
      p('Un administrador de la pizarra puede, desde la ficha de cualquier integrante (**clic derecho** o su botón **⋯**), **silenciarlo para todos**, **detener su pantalla** o **sacarlo de la llamada**. No puede hacerlo sobre sí mismo ni sobre el **dueño** de la pizarra. Sacar a alguien de la sala no lo saca de la pizarra: sigue siendo integrante y puede volver a entrar. Ver [El menú de cada persona](/docs/reuniones/el-menu-de-cada-persona).'),

      h2('Llamadas privadas'),
      p('Una llamada privada es **uno a uno**, entre dos personas que comparten al menos una pizarra.'),
      steps(
        'En el directorio de Reuniones, o en el menú **Equipo de la pizarra**, pulsa la cara de un integrante para llamarle.',
        'A la otra persona le suena una **llamada entrante** con dos opciones: **Aceptar** (`Enter`) o **Rechazar** (`Esc`).',
        'Si nadie contesta en unos 45 segundos, la llamada se cancela sola («Llamada perdida»).',
      ),
      list(
        'Solo puedes llamar a quien comparte pizarra contigo; no a cualquier persona.',
        'El chat de una llamada privada **no se guarda**: existe mientras la conversación está abierta y desaparece al colgar.',
        'Para hablar con un grupo externo usa una [reunión rápida](/docs/reuniones/reuniones-rapidas-e-invitados); para un grupo de integrantes, la sala de la pizarra.',
      ),
    ],
  },

  {
    slug: 'tarjetas-y-tareas-en-el-chat-de-la-sala',
    category: 'reuniones',
    title: 'Compartir tarjetas y crear tareas en el chat',
    summary: 'Adjunta tarjetas antes de enviarlas, abre su detalle desde la conversación y usa /tarea con menciones para convertir los acuerdos en trabajo.',
    keywords: ['chat de la sala', 'tarjetas', 'adjuntar', 'arrastrar', 'soltar', 'enviar', 'enlace de tarjeta', 'ficha', 'otra pizarra', 'tarea', '/tarea', 'comando', 'menciones', 'responsables', 'asignar', 'bandeja', 'widget'],
    updated: '2026-10-08',
    related: ['reuniones/salas-de-pizarra-y-llamadas-privadas', 'reuniones/durante-una-llamada', 'pizarras/tarjetas-y-bandeja-rapida', 'pizarras/colaborar-en-tarjetas', 'privacidad/quien-ve-que'],
    blocks: [
      p('El chat de una **sala de pizarra** conecta la conversación con el trabajo de ese equipo: puedes compartir una tarjeta o crear una nueva sin dejar la llamada. En escritorio, abre **Chat** dentro del panel flotante para tenerlo junto al tablero. El historial se conserva con la sala.'),
      note('Las fichas de tarjetas y el comando **/tarea** funcionan en **salas de pizarra**. En una llamada privada o una reunión con invitados, los enlaces y `/tarea` son texto normal.'),

      h2('Compartir el enlace de una tarjeta'),
      steps(
        'Copia el enlace de una tarjeta de la pizarra de la sala.',
        'Pégalo en el campo del chat. Puedes añadir texto para explicar qué quieres revisar.',
        'Pulsa **Enviar** o `Enter`. Pegar el enlace no envía nada por sí solo.',
      ),
      p('Al enviarlo, la tarjeta de esa pizarra aparece como una **ficha** con su título, estado o lista y responsables. Es una referencia a la tarjeta actual: si cambia, la ficha se actualiza. Pulsa la ficha para abrir su detalle; la llamada sigue conectada.'),

      h2('Arrastrar una tarjeta al chat'),
      p('En **escritorio**, puedes arrastrar una tarjeta del tablero sobre el chat de su sala. La tarjeta se ve por encima del widget mientras la arrastras.'),
      steps(
        'Suelta la tarjeta sobre el chat. Queda **adjunta al borrador**: todavía no se ha enviado.',
        'El campo de escritura crece para mostrar la ficha dentro. Puedes adjuntar más tarjetas y escribir un mensaje debajo.',
        'Para quitar una tarjeta del borrador, pulsa su **×**. Para compartirlo, pulsa **Enviar** o `Enter`.',
      ),
      p('Compartir una tarjeta **mantiene su posición en la pizarra**. Soltarla sobre el chat no la mueve a otra lista ni crea una copia. Usa `Shift` + `Enter` para añadir una línea al mensaje sin enviarlo.'),

      h2('Si la tarjeta es de otra pizarra'),
      table(
        ['Lo que intentas', 'Qué ocurre'],
        ['Pegar su enlace', 'Permanece como un enlace normal. El chat avisa de que no todos los de la sala podrán verlo; tú decides si enviarlo.'],
        ['Arrastrarla al chat', 'Se rechaza: no queda adjunta, no se envía y no cambia de lista.'],
      ),
      p('Al rechazar un arrastre, aparece un aviso breve **en el centro del chat**: «Esta tarjeta es de otra pizarra. Usa una tarjeta de esta sala». El contenido del chat queda oculto mientras se muestra y el widget hace un pequeño movimiento de «no», salvo que tengas activada la reducción de movimiento. El aviso desaparece solo y vuelve el historial.'),
      note('Compartir un enlace **no concede acceso** a otra pizarra. Quien lo abra necesita sus permisos habituales. Solo se convierten en ficha las tarjetas que pertenecen realmente a la pizarra de la sala.'),
      p('Si una tarjeta compartida antes ya pertenece a otra pizarra, la referencia muestra **Tarjeta de otra pizarra**. Si se elimina, pasa a la Papelera o deja de estar disponible para ti, muestra **Tarjeta no disponible**, sin mantener un título antiguo que ya no puedes consultar.'),

      h2('Crear una tarea con /tarea'),
      p('Si tienes permiso de edición en la pizarra de la sala, escribe el comando seguido del título. Por ejemplo: `/tarea Revisar el logo @Ana`.'),
      steps(
        'Escribe **/tarea** y qué hay que hacer. El chat muestra una ayuda para completar el comando.',
        'Si quieres responsables, escribe `@` y parte de su nombre. Elige una sugerencia o pulsa `Tab` para completar la primera. Puedes mencionar a varias personas.',
        'Pulsa **Enviar** o `Enter`. Se crea la tarjeta y el chat publica **Nueva tarea**, con su ficha y tu nombre como autor.',
      ),
      p('La tarea nace **en la pizarra de la sala**, aunque estés mirando otra pizarra o sección. Se crea sin fecha y sin clasificar, como una captura de la **bandeja rápida**. En pantallas pequeñas, la primera lista recoge las tarjetas sin clasificar. Su aparición en Agenda respeta tu ajuste **Añadir tareas de pizarras a Agenda**. Ver [Tarjetas y bandeja rápida](/docs/pizarras/tarjetas-y-bandeja-rapida).'),
      p('Las menciones se convierten en responsables de la tarjeta; no forman parte de su título. El mensaje publicado contiene la ficha, en lugar del comando escrito.'),

      h2('Elegir responsables con menciones'),
      p('Las sugerencias son integrantes de **la pizarra de la sala**, no contactos de otras pizarras. Si el nombre basta para identificar a alguien, puedes usar `@Ana`. Cuando hay más de una Ana, la sugerencia usa el nombre completo sin espacios, como `@AnaRuiz`.'),
      list(
        'Las mayúsculas y las tildes no impiden encontrar a la persona.',
        'Si una mención no encuentra a nadie o corresponde a varias personas, la tarea se crea y el chat te avisa de que esa mención **no se asignó**. No elige a alguien al azar.',
        'Las menciones válidas sí se asignan. Si alguien deja de pertenecer a la pizarra antes de terminar o falla una asignación, el aviso te indica que revises los responsables.',
      ),
      tip('Elige la sugerencia del chat cuando haya nombres parecidos. Después puedes abrir la ficha y revisar o cambiar los responsables desde la tarjeta.'),

      h2('Si el comando no se completa'),
      table(
        ['Situación', 'Resultado'],
        ['Escribes solo /tarea, sin título', 'El chat te pide un título y no crea ninguna tarjeta.'],
        ['Eres Observador o la pizarra está cerrada', 'No puedes crear tareas. La ayuda no se ofrece y, si escribes el comando, se rechaza sin publicarlo como mensaje.'],
        ['Falla la creación', 'El chat muestra el error y conserva el borrador para que puedas revisarlo.'],
        ['Se crea la tarea, pero falla el mensaje', 'La tarjeta ya existe en la pizarra. Verás «La tarea se creó, pero no se pudo avisar en el chat».'],
      ),
      warn('Si la tarea se creó pero falló el aviso, **búscala en la pizarra antes de repetir el comando**. Enviarlo otra vez crearía otra tarjeta.', 'Evitar duplicados'),
    ],
  },

  {
    slug: 'reuniones-rapidas-e-invitados',
    category: 'reuniones',
    title: 'Reuniones rápidas e invitados',
    summary: 'Habla con clientes, candidatos o colaboradores sin darles acceso a tu espacio: comparten un enlace, escriben su nombre y entran, sin cuenta.',
    keywords: ['reunión rápida', 'invitado', 'enlace', 'sin cuenta', 'express', 'programar', 'externos', 'clientes', 'sala de espera', 'antesala', 'admisión', 'anfitrión'],
    updated: UPDATED,
    related: ['reuniones/controles-del-anfitrion', 'agenda/reuniones-con-invitados-en-agenda', 'privacidad/quien-ve-que'],
    blocks: [
      p('Una **reunión rápida** es una llamada **aislada**. Sirve para hablar con quien todavía no pertenece a tu espacio: la persona que recibe el enlace solo obtiene acceso a esa conversación, nunca a tus pizarras, tareas, archivos, historial ni otras salas.'),

      h2('Crear una reunión'),
      p('En **Reuniones**, pulsa **Nueva reunión** y elige una de tres formas:'),
      table(
        ['Opción', 'Para qué'],
        ['Crear enlace', 'Prepara un enlace ahora y úsalo cuando llegue el momento.'],
        ['Iniciar ahora', 'Crea una reunión express y entras al momento, tras preparar el audio.'],
        ['Programar en Agenda', 'Crea el enlace y completa fecha, hora e invitados en Agenda. Ver [Reuniones con invitados en Agenda](/docs/agenda/reuniones-con-invitados-en-agenda).'],
      ),
      p('También puedes crear una desde el editor de una tarea: activa **Reunión**, elige **Zenth** y pulsa **Crear**.'),
      warn('Solo una persona **con cuenta** puede crear y cerrar una reunión. Quien la recibe no necesita registrarse.', 'Quién puede crearla'),

      h2('Lo que hace quien recibe el enlace'),
      steps(
        'Abre el enlace en el navegador.',
        'Escribe su **nombre** (es obligatorio) y prepara micrófono y salida de audio.',
        'Pulsa **Solicitar unirse**. Si la reunión exige admisión, espera en una **antesala** con sus controles a mano y entra **automáticamente** en cuanto la persona anfitriona la acepta.',
      ),
      list(
        'Se identifica como **Invitado**, con una identidad temporal que no crea una cuenta.',
        'Si el micrófono está bloqueado, puede entrar **solo para escuchar**.',
        'Si el anfitrión no aprueba su entrada, ve «No se aprobó tu entrada» y puede volver a solicitar acceso. Si la reunión ya terminó, se lo indica.',
        'Tiene un acceso visible para abrir Zenth en otra pestaña, siempre voluntario: nunca bloquea ni condiciona su entrada.',
      ),

      h2('La sala de espera'),
      p('Por defecto, una reunión con invitados **pide admisión**: nadie entra hasta que el anfitrión lo aprueba. El anfitrión ve las solicitudes («Solicita entrar»), y puede admitir o rechazar una a una, o admitir a todos. Puede desactivar esa exigencia. Ver [Controles del anfitrión](/docs/reuniones/controles-del-anfitrion).'),

      h2('Cuando termina'),
      p('El anfitrión puede **cerrar la reunión para todos**. En ese momento se desconecta a todo el mundo y **el enlace deja de funcionar**. Cerrar solo tu conexión (**Salir**) no cierra la reunión para los demás.'),
      note('Los invitados **no ven el chat ni el historial** de ninguna pizarra. El chat de una reunión rápida existe solo mientras la conversación está abierta y no se guarda.'),
    ],
  },

  {
    slug: 'controles-del-anfitrion',
    category: 'reuniones',
    title: 'Controles del anfitrión',
    summary: 'Admite o rechaza invitados, decide si pueden usar micrófono y cámara o compartir pantalla, silencia a todos, expulsa a alguien o cierra la reunión.',
    keywords: ['anfitrión', 'host', 'admitir', 'rechazar', 'silenciar', 'expulsar', 'quitar', 'bloquear', 'cerrar reunión', 'finalizar para todos', 'permisos de invitados', 'cámara de invitados', 'sala de espera', 'nuevas entradas', 'detener pantalla', 'sacar de la llamada'],
    updated: '2026-10-06',
    related: ['reuniones/reuniones-rapidas-e-invitados', 'reuniones/el-menu-de-cada-persona', 'reuniones/durante-una-llamada'],
    blocks: [
      p('Quien crea una reunión con invitados es su **anfitrión**. Durante la llamada, un panel de **Controles del anfitrión** (panel lateral en escritorio, hoja inferior en el móvil) reúne los ajustes para gestionar a los invitados. Todo se aplica en el servidor: no depende de que el invitado use una versión concreta de la pantalla.'),

      h2('Admisión'),
      list(
        '**Solicitar aprobación para entrar:** si está activo (viene activado), cada invitado espera a que lo aceptes.',
        '**Solicitudes:** ves quién «solicita entrar» y puedes **admitir** o **rechazar** a cada persona, o **admitir a todos** de una vez. Junto al botón **Más opciones** de la llamada, un contador te avisa de cuántas personas están esperando.',
        'Si desactivas la aprobación mientras hay gente esperando, esas personas entran sin aprobación (Zenth te avisa cuántas).',
        '**Permitir nuevas entradas:** ciérrala cuando ya estén todos, para que nadie más pueda entrar con el enlace.',
      ),

      h2('Permisos de los invitados'),
      list(
        '**Usar micrófono y cámara:** van juntos. Si lo desactivas, los invitados no pueden hablar ni encender la cámara; a quien la tuviera encendida se le apaga al momento, y todos ven «El anfitrión desactivó el micrófono y la cámara de los invitados».',
        '**Compartir pantalla:** lo mismo para la pantalla compartida.',
      ),
      p('Estos ajustes se guardan y los hace cumplir el servidor, no solo la interfaz.'),

      h2('Gestionar a las personas'),
      list(
        '**Silenciar a todos:** apaga los micrófonos de todos los invitados de una vez.',
        '**Quitar de la reunión:** expulsa a una persona. Zenth te pide confirmación, y esa persona **no podrá volver a entrar con ese navegador**.',
      ),
      p('También puedes hacerlo invitado por invitado desde su ficha en la llamada (**clic derecho** o su botón **⋯**): **Silenciar para todos**, **Detener su pantalla** y **Sacar de la llamada**. Funcionan solo sobre invitados. Ver [El menú de cada persona](/docs/reuniones/el-menu-de-cada-persona).'),

      h2('Opciones de la llamada'),
      p('En **Más opciones** de la llamada tienes, además:'),
      list(
        '**Copiar enlace de invitación.**',
        '**Cambiar el fondo** de la llamada.',
        '**Finalizar para todos:** se desconecta a todo el mundo y el enlace deja de funcionar. Es distinto de salir tú.',
      ),
      note('En una **sala de pizarra**, cambiar el fondo, finalizar para todos o moderar a alguien requiere ser **administrador de la pizarra**. En una llamada privada no existen: son dos personas iguales.'),
    ],
  },

  {
    slug: 'durante-una-llamada',
    category: 'reuniones',
    title: 'Durante una llamada',
    summary: 'Micrófono, burbuja de audio, cámara, ventana flotante, pantalla compartida, turnos de palabra, chat y atajos de la llamada.',
    keywords: ['micrófono', 'silenciar', 'cámara', 'vídeo', 'encender cámara', 'elegir cámara', 'pantalla compartida', 'reacciones', 'mano levantada', 'chat', 'emojis', 'atajos de llamada', 'salir', 'colgar', 'sigues ahí', 'estás solo', 'burbuja', 'ensordecer', 'ventana flotante', 'picture in picture', 'pip', 'turnos', 'cola de manos', 'vuelvo enseguida'],
    updated: '2026-10-08',
    related: ['reuniones/tarjetas-y-tareas-en-el-chat-de-la-sala', 'reuniones/el-menu-de-cada-persona', 'reuniones/audio-y-dispositivos', 'atajos/atajos-de-la-aplicacion', 'reuniones/controles-del-anfitrion'],
    blocks: [
      h2('Los controles'),
      table(
        ['Control', 'Qué hace'],
        ['Micrófono', 'Silencia o activa tu micrófono.'],
        ['Burbuja', 'Deja de oír la llamada y cierra tu micrófono, sin salir. Está junto al micrófono en la vista grande y en el menú de tu propia ficha.'],
        ['Configuración de audio', 'Elige micrófono y salida, y ajusta el tratamiento del sonido. Ver [Audio y dispositivos](/docs/reuniones/audio-y-dispositivos).'],
        ['Cámara', 'Enciende o apaga tu cámara. Encendida, el botón se ve relleno. Si tienes más de una cámara, la flecha de al lado te deja elegir cuál usar.'],
        ['Compartir pantalla', 'Comparte tu pantalla. Solo una persona puede compartir a la vez; si otra ya lo hace, Zenth lo indica.'],
        ['Reacciones', 'Envía una reacción que todos ven un momento en pantalla.'],
        ['Levantar la mano', 'Avisa de que quieres hablar. Vuelve a pulsar para bajarla.'],
        ['Chat', 'Abre el chat de la llamada.'],
        ['Más opciones', 'Copiar el enlace de invitación, cambiar el fondo o finalizar para todos (según tu rol).'],
        ['Salir', 'Abandona la conversación. No la cierra para los demás.'],
      ),
      keys(
        [['M'], 'Silenciar o activar el micrófono'],
        [['Shift', 'M'], 'Entrar o salir de la burbuja de audio'],
        [['V'], 'Encender o apagar la cámara'],
        [['C'], 'Abrir o cerrar el chat'],
        [['Q'], 'Abandonar la llamada o la sala'],
        [['Enter'], 'Aceptar una llamada entrante'],
        [['Esc'], 'Rechazar una llamada entrante'],
      ),
      p('Estos atajos funcionan mientras tienes una llamada en curso y no estás escribiendo en un campo. Con un **lienzo** abierto, **V** y **Q** son del lienzo (seleccionar y fijar la herramienta): ahí la cámara y la salida se usan con sus botones.'),
      tip('Cada persona tiene además su propio menú: **clic derecho** sobre su ficha, o su botón **⋯**, para bajarle el volumen, silenciarla solo para ti, ocultar su cámara o fijarla. Ver [El menú de cada persona](/docs/reuniones/el-menu-de-cada-persona).'),

      h2('La burbuja de audio'),
      p('Pulsa el botón de **auriculares**, usa **Mayús + M** o elige **Entrar en la burbuja** en tu propia ficha. Dejas de oír tanto las voces como el sonido de la pantalla compartida, y tu micrófono se cierra. Sigues dentro de la conversación y puedes ver el chat y el vídeo.'),
      p('**Salir de la burbuja** devuelve el sonido y restaura el estado que tenía tu micrófono al entrar: si estaba apagado, sigue apagado; si estaba encendido, vuelve a encenderse.'),

      h2('La cámara'),
      list(
        'Siempre **entras con la cámara apagada**, también si recargas la página a mitad de la llamada. Solo se enciende cuando pulsas su botón o la tecla **V**.',
        'Tu propia imagen se ve **en espejo**, como en cualquier videollamada; los demás te ven al derecho.',
        'En cuanto alguien enciende la cámara, las fichas de la llamada pasan a formato **16:9**. Quien no tiene cámara sigue viéndose con su foto o sus iniciales en el centro. Sin ninguna cámara encendida, la llamada se ve como una llamada de voz.',
        'Puedes navegar por Zenth con la cámara encendida: sigue transmitiendo aunque minimices u ocultes la llamada. Para dejar de enviar imagen, apágala.',
        'Si la cámara no está disponible, Zenth te lo dice con un aviso junto a su botón y una marca en el propio botón. Ver [La cámara no funciona](/docs/ayuda/la-camara-no-funciona).',
      ),
      note('Si tu conexión es lenta, Zenth baja la calidad de las cámaras que ves en pequeño y pausa las que no están en pantalla. La voz no se resiente.'),

      h2('Pantalla compartida'),
      p('Comparte una ventana, una pestaña o toda la pantalla desde el selector de tu navegador. Puedes cancelarlo sin que se rompa la llamada, y si lo detienes desde el propio navegador, Zenth se entera y deja de publicar. Quien la recibe puede verla ampliada.'),
      p('En la imagen compartida tienes un botón para verla a **pantalla completa del navegador**. Es distinto de ampliar el panel de la llamada: oculta también las pestañas y la barra del navegador.'),
      note('En iPhone y iPad se puede compartir pantalla desde **iOS y iPadOS 27**. En versiones anteriores el navegador no lo permite, pero la voz sí funciona.'),

      h2('Vídeo en una ventana flotante'),
      p('Si tu navegador lo admite, puedes sacar **la cámara de otra persona** o **la pantalla compartida** a una ventana del sistema, por encima de otras aplicaciones. En el menú de esa persona, pulsa **Ver en ventana flotante**; para una pantalla compartida, usa su botón **Ventana flotante**.'),
      list(
        'La imagen sigue visible aunque cambies de sección o minimices el panel de Zenth.',
        'Puedes cambiar de cámara a pantalla compartida, o a otra cámara, usando la misma ventana.',
        '**Cerrar la ventana flotante**, o su botón de cierre, solo cierra esa vista; la llamada continúa.',
        'La ventana se cierra cuando deja de llegar ese vídeo: si la persona apaga la cámara, tú ocultas su vídeo, deja de compartir la pantalla o sale. También se cierra al terminar la llamada.',
      ),
      note('La opción aparece cuando el navegador ofrece esta función y hay una imagen disponible. Una cámara apagada u oculta no se puede sacar a una ventana.'),

      h2('Manos levantadas y turnos'),
      p('Al levantar la mano, tu ficha muestra tu **número de turno**. En la cabecera de la llamada aparece un contador de manos: ábrelo para verlas **por orden de llegada**. Cada persona puede bajar la suya desde esa lista o desde el botón de mano.'),
      p('Quien organiza puede además bajar las manos de los demás desde la cola o desde **Bajar su mano** en el menú de la persona. En una sala de pizarra lo hacen sus administradores; en una reunión con invitados, el anfitrión.'),

      h2('Vuelvo enseguida'),
      p('En el menú de tu propia ficha, activa **Vuelvo enseguida** cuando te apartes un momento. Los demás ven ese estado en tu ficha y tu micrófono se cierra. La llamada sigue abierta. Si también quieres dejar de mostrar imagen, apaga la cámara o detén la pantalla compartida.'),
      p('Vuelve a desmarcarlo cuando regreses. Eso quita el estado sin abrir el micrófono automáticamente. También vuelves al participar: activar el micrófono o la cámara, compartir pantalla, levantar la mano, enviar una reacción o hablar con el walkie-talkie quita el aviso de ausencia.'),

      h2('El chat de la llamada'),
      list(
        'Escribe un mensaje y pulsa **Enviar**. Con el icono de **emoji** insertas emojis, y con **Más reacciones** reaccionas a un mensaje.',
        '**Enter** envía; **Mayús + Enter** añade una línea. En una sala de pizarra también puedes adjuntar tarjetas y crear tareas con **/tarea**. Ver [Compartir tarjetas y crear tareas en el chat](/docs/reuniones/tarjetas-y-tareas-en-el-chat-de-la-sala).',
        'El menú de un mensaje (clic derecho, pulsación larga o el botón de acciones) permite **copiar**, y **eliminar** si es tuyo. Solo puedes borrar lo propio.',
        'Hay un límite de ritmo: si envías muchos mensajes seguidos verás «Espera un momento antes de enviar otro mensaje».',
        'El chat de una **sala de pizarra** se guarda y quien llega tarde lo lee. El de una **llamada privada** o una **reunión rápida** no se guarda: quien llega tarde no lo ve y al salir desaparece. El propio chat te lo indica.',
      ),

      h2('Si te quedas solo'),
      p('Si eres la única persona en una llamada y no hay actividad durante unos cinco minutos, Zenth pregunta **¿Sigues ahí?** con las opciones de seguir o de salir. Si no respondes, la conversación se cierra sola en menos de dos minutos. Es para no dejar salas abiertas sin sentido.'),

      h2('Otros detalles'),
      list(
        'Los sonidos de entrar y salir respetan el ajuste **Sonidos de la interfaz** de Zenth: no hay un interruptor extra.',
        'Si tienes Zenth abierto en dos pestañas y entras a una llamada, te ofrece **Usar esta pestaña** para no duplicar la conexión.',
        'Al perder la red, la llamada muestra «Reconectando…» y vuelve sola.',
      ),
    ],
  },

  {
    slug: 'el-menu-de-cada-persona',
    category: 'reuniones',
    title: 'El menú de cada persona',
    summary: 'Clic derecho sobre alguien en la llamada para bajarle el volumen, silenciarlo solo para ti, ocultar su cámara o fijarlo. Quien organiza también puede silenciarlo, detener su pantalla o sacarlo.',
    keywords: ['clic derecho', 'menú', 'volumen de usuario', 'volumen', 'silenciar para mí', 'ocultar vídeo', 'ocultar cámara', 'fijar', 'enfoque', 'silenciar para todos', 'detener pantalla', 'sacar de la llamada', 'expulsar', 'moderar', 'moderación', 'discord', 'burbuja', 'vuelvo enseguida', 'ventana flotante', 'bajar mano'],
    updated: '2026-10-08',
    related: ['reuniones/durante-una-llamada', 'reuniones/controles-del-anfitrion', 'reuniones/salas-de-pizarra-y-llamadas-privadas'],
    blocks: [
      p('Cada persona de la llamada tiene su propio menú, como en Discord. Ábrelo con **clic derecho** sobre su ficha o con el botón **⋯** de la esquina. Con ratón, ese botón aparece al pasar por encima; en pantallas táctiles se ve siempre. Con el teclado, **Tab** lleva al deslizador de volumen, las flechas lo mueven y **Esc** cierra el menú.'),

      h2('Lo que cambia solo para ti'),
      p('Estas opciones solo cambian lo que tú oyes y ves: nadie más se entera y la otra persona no recibe ningún aviso.'),
      table(
        ['Opción', 'Qué hace'],
        ['Volumen de usuario', 'Sube o baja su voz entre 0 y 100 %. Zenth lo recuerda en este navegador para tu cuenta, así que en la próxima llamada se le sigue oyendo igual. Si estaba silenciada, mover el deslizador le devuelve la voz.'],
        ['Silenciar para mí', 'Deja de oír su voz sin perder el volumen que tenía. El sonido de una pantalla que comparta se sigue oyendo.'],
        ['Ocultar su vídeo', 'Deja de recibir su cámara: no solo la tapa, deja de descargarla, así que ahorra datos. Su ficha muestra su cara o sus iniciales. Dura hasta que termina la llamada, aunque apague y vuelva a encender la cámara.'],
        ['Fijar en el Enfoque', 'La deja en el escenario aunque hable otra persona. Solo aparece con **tres personas o más** y alguna cámara encendida: con dos, el escenario ya es de la otra. **Dejar de fijar** vuelve a seguir a quien habla.'],
        ['Ver en ventana flotante', 'Saca su cámara a una ventana del sistema que sigue visible al cambiar de aplicación. Aparece si el navegador lo admite y estás recibiendo su cámara. Cerrar esa ventana no corta la llamada.'],
      ),
      p('Para que no parezca un fallo de su micrófono, la ficha de quien silenciaste lleva un **altavoz tachado**, y la de quien ocultaste un **ojo tachado**.'),
      note('En Safari de iPhone y iPad no aparece el deslizador de volumen, porque ese navegador no deja cambiar el volumen de cada voz. **Silenciar para mí** sí funciona.'),

      h2('En tu propia ficha'),
      p('El menú de tu ficha tiene tus controles: **Silenciar mi micrófono** o **Activar mi micrófono** (`M`) y **Apagar mi cámara** o **Encender mi cámara** (`V`). No tiene volumen, porque tu propia voz no te suena.'),
      list(
        '**Entrar en la burbuja** / **Salir de la burbuja** (**Mayús + M**): dejas de oír la llamada y cierras tu micrófono sin abandonarla. Al salir, vuelve el estado anterior del micrófono.',
        '**Vuelvo enseguida:** avisa a los demás de que te apartaste y cierra el micrófono. Desmarcarlo no lo enciende por sí solo.',
      ),
      p('Si organizas la conversación, el menú de quien tiene la mano levantada también incluye **Bajar su mano**. Es una forma de ordenar los turnos, independiente de silenciar o sacar a alguien. Ver [Manos levantadas y turnos](/docs/reuniones/durante-una-llamada#manos-levantadas-y-turnos).'),

      h2('Moderar: lo que cambia para todos'),
      p('Quien organiza la conversación ve al final del menú, en rojo, tres acciones que afectan a **toda la sala**:'),
      table(
        ['Acción', 'Qué hace'],
        ['Silenciar para todos', 'Apaga su micrófono. Solo aparece si lo tiene abierto. Esa persona puede volver a activarlo cuando quiera: nadie puede abrirle el micrófono a otro.'],
        ['Detener su pantalla', 'Corta la pantalla que está compartiendo, con su sonido. Solo aparece mientras comparte.'],
        ['Sacar de la llamada', 'La desconecta. Zenth pide confirmación antes, y a esa persona le avisa: «Quien organiza te sacó de la llamada».'],
      ),
      p('Quién puede hacerlo depende del tipo de conversación:'),
      table(
        ['Conversación', 'Quién modera', 'Sobre quién'],
        ['Sala de pizarra', 'Los **administradores** de la pizarra', 'Cualquier integrante, menos a sí mismos y al **dueño** de la pizarra. Quien sale de la sala sigue siendo integrante y puede volver a entrar.'],
        ['Reunión con invitados', 'El **anfitrión**', 'Solo los invitados. Un invitado expulsado **no puede volver a entrar con ese navegador**.'],
        ['Llamada privada', 'Nadie', 'Son dos personas iguales: si algo no va bien, se cuelga.'],
      ),
      note('Que un botón no aparezca no es lo que protege a nadie: **cada acción se vuelve a comprobar en el servidor**. Un editor o un observador de la pizarra no puede silenciar ni sacar a nadie aunque lo intente por otros medios.'),
    ],
  },

  {
    slug: 'audio-y-dispositivos',
    category: 'reuniones',
    title: 'Audio y dispositivos',
    summary: 'Prepara el audio, elige micrófono y salida, ajusta el tratamiento del sonido y usa el walkie-talkie para pulsar una tecla y hablar.',
    keywords: ['audio', 'micrófono', 'auriculares', 'altavoces', 'preparar audio', 'permiso', 'salida de audio', 'cancelación de eco', 'reducción de ruido', 'ganancia automática', 'probar sonido', 'dispositivo', 'walkie-talkie', 'pulsar para hablar', 'push to talk', 'ptt', 'espacio', 'tecla para hablar'],
    updated: '2026-10-08',
    related: ['ayuda/el-microfono-no-funciona', 'cuenta/ajustes-generales', 'reuniones/durante-una-llamada'],
    blocks: [
      h2('Preparar audio, antes de entrar'),
      p('Antes de entrar a una sala o reunión, Zenth abre **Preparar audio**:'),
      list(
        'Elige tu **micrófono**. Un medidor de **nivel de entrada** se mueve cuando hablas: «Se te oye bien» o «Habla para comprobar que entra sonido».',
        'Elige tu **salida de audio** y pulsa **Probar sonido** para oír un tono.',
        'Pulsa **Entrar a la sala** (o **Entrar a la reunión**).',
      ),
      p('Si no tienes micrófono o niegas el permiso, **puedes entrar como oyente**. Los estados de conexión, permisos y errores siempre se explican con texto, no solo con color o sonido.'),

      h2('Cambiar de dispositivo'),
      list(
        'Durante la llamada, el botón de **Configuración de audio** abre un panel para elegir micrófono y salida.',
        'Si desconectas los auriculares en plena llamada, Zenth cambia solo al dispositivo predeterminado y te avisa. Si **conectas** unos nuevos, te **pregunta**: nunca cambia sin tu permiso.',
        'También puedes configurar el audio fuera de una llamada, en **Ajustes › Audio**, con prueba de micrófono y de salida.',
        'La **cámara** se elige desde la flecha junto a su botón, dentro de la llamada. Zenth recuerda la que elegiste para la próxima vez.',
      ),
      note('En Firefox y Safari (y en iOS) el navegador no permite elegir la salida de audio: verás «Predeterminada del sistema» en lugar de un selector.'),

      h2('Tratamiento del micrófono'),
      p('Tres interruptores en el panel del micrófono, que se aplican en el momento y se recuerdan:'),
      table(
        ['Opción', 'Qué hace'],
        ['Cancelación de eco', 'Evita que el sonido de tus altavoces vuelva a entrar.'],
        ['Reducción de ruido', 'Atenúa los sonidos de fondo constantes.'],
        ['Ganancia automática', 'Mantiene el volumen de tu voz más uniforme.'],
      ),
      p('Los tres vienen activados. Si usas auriculares y un micrófono profesional, puede convenirte apagarlos.'),

      h2('Walkie-talkie: pulsar para hablar'),
      p('En la **Configuración de audio** de la llamada, busca **Modo de entrada** y activa **Walkie-talkie**. Al encenderlo, el micrófono se cierra. Mantén **Espacio** para hablar y suéltalo para cerrarlo otra vez; puedes cambiar esa tecla.'),
      steps(
        'Activa **Walkie-talkie** en el panel del micrófono.',
        'Si quieres otra tecla, pulsa el botón que muestra la actual y después la tecla elegida. **Esc** cancela el cambio; Tab y Enter están reservadas para navegar y enviar.',
        'Mantén la tecla mientras hablas. El botón del micrófono indica que se te está oyendo.',
      ),
      list(
        'El modo y la tecla se recuerdan en este navegador.',
        'No se activa mientras escribes en un campo. Si cambias de ventana o de pestaña con la tecla pulsada, el micrófono vuelve a cerrarse.',
        'Dentro de la **burbuja de audio** la tecla no abre el micrófono.',
        'El botón normal del micrófono sigue disponible para abrirlo o cerrarlo a mano.',
      ),
      tip('Si eliges una letra que ya controla la llamada, esa tecla se reserva para hablar mientras el walkie-talkie esté activo. Usa los botones para la otra acción, o elige otra tecla.'),

      h2('Si el micrófono está bloqueado o no aparece'),
      p('Zenth detecta cuando el navegador bloquea el micrófono o no encuentra ninguno, y abre una ventana de ayuda paso a paso, al estilo de las videollamadas habituales. Cuando arreglas el permiso desde el candado del navegador, la ventana se cierra sola y el nivel empieza a moverse. Las soluciones están en [El micrófono no funciona](/docs/ayuda/el-microfono-no-funciona).'),
      p('Lo mismo pasa **ya dentro de la llamada**: si pulsas activar el micrófono y el navegador no lo permite, se abre esa misma ventana por encima de la conversación, y el botón del micrófono queda con una **marca naranja** mientras el problema siga. Al permitirlo desde el candado, la ventana se cierra sola y el micrófono se enciende; también puedes pulsar **Ya lo activé**.'),
    ],
  },

  {
    slug: 'limites-y-privacidad-de-las-llamadas',
    category: 'reuniones',
    title: 'Límites y privacidad de las llamadas',
    summary: 'Cámara opcional y sin grabación, con acceso mínimo para cada persona y topes que bloquean entradas nuevas, nunca conversaciones en curso.',
    keywords: ['cámara', 'grabación', 'privacidad', 'límites', 'minutos', 'plazas', 'sin plazas', 'livekit', 'seguridad', 'https', 'topes', 'cupo'],
    updated: '2026-10-08',
    related: ['privacidad/que-datos-guarda-zenth', 'reuniones/reuniones-rapidas-e-invitados'],
    blocks: [
      h2('Lo que Zenth no hace'),
      list(
        '**No enciende tu cámara por ti.** Siempre entras con ella apagada y solo la enciendes tú. Qué puede publicar cada persona (micrófono, cámara, pantalla) lo decide el servidor al darle acceso, no la aplicación: la cámara de un invitado depende del permiso que le dé el anfitrión.',
        '**No se graba** el audio, la cámara ni la pantalla. Lo efímero de la llamada (quién habla, la calidad, las pistas) solo existe en memoria mientras dura.',
        'Ninguna otra persona obtiene más acceso del que necesita: un invitado solo entra a **esa** conversación.',
      ),
      warn('Zenth no graba, pero **quien participa puede hacerlo con herramientas externas**. No compartas información sensible si no confías en quienes están en la llamada.', 'Una precaución'),

      h2('Qué se guarda'),
      table(
        ['Dato', 'Se guarda…'],
        ['Audio, cámara y pantalla compartida', 'No.'],
        ['Chat de una sala de pizarra (y sus reacciones)', 'Sí, con la pizarra.'],
        ['Tarjetas compartidas en el chat de una sala', 'Se guarda su referencia en el mensaje. La ficha consulta la tarjeta actual y sigue sus permisos.'],
        ['Chat de llamadas privadas y reuniones rápidas', 'No: desaparece al terminar.'],
        ['Quién participa, cuándo entra y sale, y cuánto dura', 'Sí: son metadatos necesarios para autorizar el acceso, mostrar presencia y aplicar límites.'],
        ['Nombre y estado de admisión de un invitado', 'Sí, mientras dura esa reunión.'],
      ),
      p('Más detalle en [Qué datos guarda Zenth](/docs/privacidad/que-datos-guarda-zenth) y en la [Política de privacidad](/privacy).'),

      h2('Límites de uso'),
      p('Las llamadas usan un servicio de voz externo (LiveKit) con capacidad limitada. Zenth mide dos cosas con exactitud y aplica topes:'),
      list(
        '**Conexiones simultáneas.** Cuando se llena, aparece «Sin plazas ahora mismo».',
        '**Minutos mensuales de participación.** Antes de llegar al tope, el menú del equipo avisa cuántos minutos quedan.',
      ),
      tip('**El corte se aplica a las entradas nuevas, nunca a una conversación en curso.** Cortar a alguien a mitad de una frase no se considera un ahorro, sino un fallo del producto.'),
      p('Una llamada privada reserva dos plazas (quien llama y quien contesta), para que aceptar nunca falle una vez que ya está sonando. Los invitados de una reunión rápida ocupan y consumen exactamente igual que los integrantes.'),

      h2('Requisitos técnicos'),
      list(
        'Necesitas **HTTPS** para usar el micrófono, la cámara y compartir pantalla (todo el sitio ya lo usa).',
        'Chrome y Edge admiten todas las funciones. Firefox y Safari de escritorio no permiten elegir la salida de audio. Safari en iPhone y iPad comparte pantalla desde iOS y iPadOS 27; en versiones anteriores, no.',
      ),
    ],
  },
];

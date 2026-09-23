import { h2, keys, list, note, p, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const reunionesArticles: DocArticle[] = [
  {
    slug: 'la-seccion-reuniones',
    category: 'reuniones',
    title: 'La sección Reuniones',
    summary: 'Un solo lugar para las salas de tus pizarras, las llamadas privadas y las reuniones con invitados. La conversación sigue mientras navegas.',
    keywords: ['reuniones', 'llamadas', 'salas', 'directorio', 'voz', 'nueva reunión', 'panel', 'minimizar', 'pantalla completa', 'llamada en curso'],
    updated: UPDATED,
    related: ['reuniones/salas-de-pizarra-y-llamadas-privadas', 'reuniones/reuniones-rapidas-e-invitados', 'reuniones/durante-una-llamada'],
    blocks: [
      p('**Reuniones** (`Alt` + `4`) reúne, sin cambiar de sección ni de pizarra, todas las formas de hablar dentro de Zenth. Antes se llamaba «Llamadas». Está pensada como una herramienta más de colaboración, no como una plataforma de videoconferencia: **hay voz y pantalla compartida, pero no cámara ni grabación**.'),

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
      p('Una llamada en curso sobrevive a la navegación: puedes ir a Agenda, escribir una nota o abrir una pizarra mientras hablas. Zenth muestra la llamada de cinco formas y puedes pasar de una a otra sin cortar la conexión:'),
      list(
        '**Empotrada:** dentro de la propia sección Reuniones.',
        '**Expandida:** un panel flotante que puedes **arrastrar por el título**.',
        '**Minimizada:** una pastilla que sigue mostrando el estado.',
        '**Oculta:** el audio continúa aunque no veas nada.',
        '**Pantalla completa.**',
      ),
      note('Ocultar o minimizar una llamada **no es abandonarla**. Lo único que corta la conexión es **Salir** o **Colgar**.'),
      p('Solo puedes estar en una conversación a la vez. Si intentas entrar en otra, Zenth te pide que salgas de la actual («Sal de la conversación actual para iniciar otra»).'),

      h2('En el móvil'),
      p('En el móvil, **Reuniones** está dentro de **Más**, junto a Progreso, Actividad y ánimo y la Papelera. Un punto en el icono indica que tienes una llamada en curso.'),
      tip('Las llamadas necesitan HTTPS para usar el micrófono y compartir pantalla. En zenth.space ya lo es; si Zenth te avisa de que las llamadas «todavía no están listas» o «habilitadas», es una cuestión del servicio, no de tu equipo.'),
    ],
  },

  {
    slug: 'salas-de-pizarra-y-llamadas-privadas',
    category: 'reuniones',
    title: 'Salas de pizarra y llamadas privadas',
    summary: 'Cada pizarra compartida tiene una sala de voz para su equipo. Entre integrantes también puedes llamarte en privado, uno a uno.',
    keywords: ['sala', 'sala del equipo', 'llamada privada', 'llamar', 'timbre', 'pizarra', 'integrantes', 'voz', 'fondo de la llamada', 'chat de la sala'],
    updated: UPDATED,
    related: ['reuniones/durante-una-llamada', 'pizarras/compartir-una-pizarra', 'privacidad/quien-ve-que'],
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

      h2('Chat de la sala'),
      p('El chat de una sala de pizarra **se guarda con la pizarra**: quien llega tarde, o vuelve otro día, lee el historial (los últimos 200 mensajes al conectar). Los mensajes solo los ven los integrantes, quien escribe puede borrar los suyos, y el aviso dentro del chat lo recuerda: «Este chat se queda en la sala».'),

      h2('Fondo de la sala'),
      p('Un administrador de la pizarra puede elegir el fondo de la sala entre ocho degradados: **Medianoche, Océano, Aurora, Atardecer, Bosque, Uva, Grafito y Rosa**. Queda guardado en la pizarra y lo ven todos los que entran, también quienes ya estaban dentro.'),

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
    summary: 'Admite o rechaza invitados, decide si pueden usar micrófono o compartir pantalla, silencia a todos, expulsa a alguien o cierra la reunión.',
    keywords: ['anfitrión', 'host', 'admitir', 'rechazar', 'silenciar', 'expulsar', 'quitar', 'bloquear', 'cerrar reunión', 'finalizar para todos', 'permisos de invitados', 'sala de espera', 'nuevas entradas'],
    updated: UPDATED,
    related: ['reuniones/reuniones-rapidas-e-invitados', 'reuniones/durante-una-llamada'],
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
        '**Usar el micrófono:** si lo desactivas, los invitados no pueden hablar y ven «El anfitrión desactivó los micrófonos de invitados».',
        '**Compartir pantalla:** lo mismo para la pantalla compartida.',
      ),
      p('Estos ajustes se guardan y los hace cumplir el servidor, no solo la interfaz.'),

      h2('Gestionar a las personas'),
      list(
        '**Silenciar a todos:** apaga los micrófonos de todos los invitados de una vez.',
        '**Quitar de la reunión:** expulsa a una persona. Zenth te pide confirmación, y esa persona **no podrá volver a entrar con ese navegador**.',
      ),

      h2('Opciones de la llamada'),
      p('En **Más opciones** de la llamada tienes, además:'),
      list(
        '**Copiar enlace de invitación.**',
        '**Cambiar el fondo** de la llamada.',
        '**Finalizar para todos:** se desconecta a todo el mundo y el enlace deja de funcionar. Es distinto de salir tú.',
      ),
      note('En una **sala de pizarra**, cambiar el fondo o finalizar para todos requiere ser **administrador de la pizarra**. En una llamada privada no existen: son dos personas iguales.'),
    ],
  },

  {
    slug: 'durante-una-llamada',
    category: 'reuniones',
    title: 'Durante una llamada',
    summary: 'Micrófono, pantalla compartida, reacciones, mano levantada, chat con emojis, atajos de teclado y qué pasa si te quedas solo.',
    keywords: ['micrófono', 'silenciar', 'pantalla compartida', 'reacciones', 'mano levantada', 'chat', 'emojis', 'atajos de llamada', 'salir', 'colgar', 'sigues ahí', 'estás solo'],
    updated: UPDATED,
    related: ['reuniones/audio-y-dispositivos', 'atajos/atajos-de-la-aplicacion', 'reuniones/controles-del-anfitrion'],
    blocks: [
      h2('Los controles'),
      table(
        ['Control', 'Qué hace'],
        ['Micrófono', 'Silencia o activa tu micrófono.'],
        ['Configuración de audio', 'Elige micrófono y salida, y ajusta el tratamiento del sonido. Ver [Audio y dispositivos](/docs/reuniones/audio-y-dispositivos).'],
        ['Compartir pantalla', 'Comparte tu pantalla. Solo una persona puede compartir a la vez; si otra ya lo hace, Zenth lo indica.'],
        ['Reacciones', 'Envía una reacción que todos ven un momento en pantalla.'],
        ['Levantar la mano', 'Avisa de que quieres hablar. Vuelve a pulsar para bajarla.'],
        ['Chat', 'Abre el chat de la llamada.'],
        ['Más opciones', 'Copiar el enlace de invitación, cambiar el fondo o finalizar para todos (según tu rol).'],
        ['Salir', 'Abandona la conversación. No la cierra para los demás.'],
      ),
      keys(
        [['M'], 'Silenciar o activar el micrófono'],
        [['C'], 'Abrir o cerrar el chat'],
        [['Q'], 'Abandonar la llamada o la sala'],
        [['Enter'], 'Aceptar una llamada entrante'],
        [['Esc'], 'Rechazar una llamada entrante'],
      ),
      p('Estos atajos funcionan mientras tienes una llamada en curso y no estás escribiendo en un campo.'),

      h2('Pantalla compartida'),
      p('Comparte una ventana, una pestaña o toda la pantalla desde el selector de tu navegador. Puedes cancelarlo sin que se rompa la llamada, y si lo detienes desde el propio navegador, Zenth se entera y deja de publicar. Quien la recibe puede verla ampliada.'),
      note('En iPhone y iPad, el navegador no permite compartir pantalla. La voz sí funciona.'),

      h2('El chat de la llamada'),
      list(
        'Escribe un mensaje y pulsa **Enviar**. Con el icono de **emoji** insertas emojis, y con **Más reacciones** reaccionas a un mensaje.',
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
    slug: 'audio-y-dispositivos',
    category: 'reuniones',
    title: 'Audio y dispositivos',
    summary: 'Prepara el audio antes de entrar, elige micrófono y salida, prueba el sonido, ajusta cancelación de eco, reducción de ruido y ganancia automática.',
    keywords: ['audio', 'micrófono', 'auriculares', 'altavoces', 'preparar audio', 'permiso', 'salida de audio', 'cancelación de eco', 'reducción de ruido', 'ganancia automática', 'probar sonido', 'dispositivo'],
    updated: UPDATED,
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

      h2('Si el micrófono está bloqueado o no aparece'),
      p('Zenth detecta cuando el navegador bloquea el micrófono o no encuentra ninguno, y abre una ventana de ayuda paso a paso, al estilo de las videollamadas habituales. Cuando arreglas el permiso desde el candado del navegador, la ventana se cierra sola y el nivel empieza a moverse. Las soluciones están en [El micrófono no funciona](/docs/ayuda/el-microfono-no-funciona).'),
    ],
  },

  {
    slug: 'limites-y-privacidad-de-las-llamadas',
    category: 'reuniones',
    title: 'Límites y privacidad de las llamadas',
    summary: 'Sin cámara y sin grabación, con acceso mínimo para cada persona y topes que bloquean entradas nuevas, nunca conversaciones en curso.',
    keywords: ['cámara', 'grabación', 'privacidad', 'límites', 'minutos', 'plazas', 'sin plazas', 'livekit', 'seguridad', 'https', 'topes', 'cupo'],
    updated: UPDATED,
    related: ['privacidad/que-datos-guarda-zenth', 'reuniones/reuniones-rapidas-e-invitados'],
    blocks: [
      h2('Lo que Zenth no hace'),
      list(
        '**No hay cámara personal.** No es un olvido: el servidor solo emite tokens para micrófono y pantalla, así que aunque alguien modificara la aplicación, el servidor rechazaría el vídeo personal.',
        '**No se graba** el audio ni la pantalla. Lo efímero de la llamada (quién habla, la calidad, las pistas) solo existe en memoria mientras dura.',
        'Ninguna otra persona obtiene más acceso del que necesita: un invitado solo entra a **esa** conversación.',
      ),
      warn('Zenth no graba, pero **quien participa puede hacerlo con herramientas externas**. No compartas información sensible si no confías en quienes están en la llamada.', 'Una precaución'),

      h2('Qué se guarda'),
      table(
        ['Dato', 'Se guarda…'],
        ['Audio y pantalla compartida', 'No.'],
        ['Chat de una sala de pizarra (y sus reacciones)', 'Sí, con la pizarra.'],
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
        'Necesitas **HTTPS** para usar el micrófono y compartir pantalla (todo el sitio ya lo usa).',
        'Chrome y Edge admiten todas las funciones. Firefox y Safari de escritorio no permiten elegir la salida de audio. Safari en iOS no puede compartir pantalla.',
      ),
    ],
  },
];

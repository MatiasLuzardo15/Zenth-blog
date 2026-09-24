import { h2, list, note, p, steps, table, tip } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const ayudaArticles: DocArticle[] = [
  {
    slug: 'el-microfono-no-funciona',
    category: 'ayuda',
    title: 'El micrófono no funciona o no se oye',
    summary: 'Qué hacer cuando Zenth dice que no puede usar el micrófono, no encuentra ninguno o está ocupado, y cómo entrar solo para escuchar mientras tanto.',
    keywords: ['micrófono', 'no se oye', 'permiso bloqueado', 'no encuentra micrófono', 'auriculares', 'sonido', 'altavoces', 'no me escuchan', 'audio', 'bloqueado', 'candado', 'salida de audio'],
    updated: UPDATED,
    related: ['reuniones/audio-y-dispositivos', 'reuniones/durante-una-llamada'],
    blocks: [
      p('Si el audio falla, Zenth lo detecta y abre solo una **ventana de ayuda** con los pasos que corresponden. Estas son las tres causas habituales y qué hacer en cada una.'),
      tip('Mientras lo arreglas, **puedes entrar igualmente** a la sala o reunión y escuchar a los demás. Ni el micrófono bloqueado ni la falta de uno te impiden entrar como oyente.'),

      h2('«Zenth no puede usar el micrófono»'),
      p('El navegador tiene bloqueado el permiso para Zenth.'),
      steps(
        'Haz clic en el **icono de información de la página**, junto a la dirección (a la izquierda de zenth.space).',
        'Activa el **permiso del micrófono** para el sitio.',
        'Vuelve a Zenth y pulsa **Ya lo activé**. La ventana se cierra sola en cuanto el permiso se concede y el nivel del micrófono empieza a moverse.',
      ),
      p('Si cierras la ventana sin arreglarlo, el aviso queda visible en la pantalla de fondo y puedes reabrirla desde ahí.'),

      h2('«No se encontró ningún micrófono»'),
      list(
        'Conecta un micrófono o unos auriculares con micrófono.',
        'Comprueba en los **ajustes de sonido de tu sistema** que aparece como dispositivo de **entrada**.',
        'Pulsa **Buscar de nuevo**: Zenth detecta un micrófono nuevo sin que tengas que hacer nada más.',
      ),

      h2('«Otra aplicación está usando el micrófono»'),
      list(
        'Cierra la otra aplicación o pestaña que lo esté usando, como otra llamada o una grabación.',
        'Pulsa **Volver a intentarlo** desde Zenth.',
      ),

      h2('Se me oye bajo, con eco o con ruido'),
      list(
        'Abre **Configuración de audio** en la llamada y comprueba que eliges el micrófono correcto.',
        'Revisa los tres interruptores del micrófono: **Cancelación de eco**, **Reducción de ruido** y **Ganancia automática**. Vienen activados; a veces conviene apagar alguno con auriculares profesionales.',
        'Con altavoces en lugar de auriculares es más fácil que haya eco: prueba con auriculares.',
      ),

      h2('No oigo a los demás'),
      list(
        'Si Zenth avisa de que **no se encontró una salida de audio**, conecta altavoces o auriculares y pulsa **Buscar de nuevo**.',
        'En **Ajustes › Audio** puedes elegir la salida y pulsar **Probar sonido** para oír un tono.',
        'En Firefox y Safari, y en iOS, el navegador no deja elegir la salida: Zenth usa **la predeterminada del sistema**. Cámbiala en los ajustes de sonido de tu equipo.',
        'Si la llamada muestra «El navegador bloqueó el sonido. Toca aquí para escuchar la conversación», toca ese aviso: algunos navegadores exigen una interacción antes de reproducir audio.',
      ),

      h2('Compartir pantalla no funciona'),
      note('En **iPhone y iPad** el navegador no permite compartir pantalla. La voz sí funciona. En otros navegadores, si cancelaste el selector, vuelve a pulsar **Compartir pantalla**. Solo una persona puede compartir a la vez.'),
      h2('Si pasa con la llamada en curso'),
      p('La misma ventana de ayuda se abre **dentro de la llamada**, por encima de la conversación, cuando intentas activar el micrófono y el navegador no lo permite. El botón del micrófono queda con una **marca naranja** mientras dure el problema; si cierras la ventana, vuelve a pulsar el micrófono para reabrirla. En cuanto permites el micrófono desde el candado, la ventana se cierra sola y el micrófono se enciende, sin salir ni volver a entrar.'),
      p('Si nada de esto funciona, prueba con otro navegador (Chrome y Edge admiten todas las funciones) y escríbeme si persiste.'),
    ],
  },

  {
    slug: 'la-camara-no-funciona',
    category: 'ayuda',
    title: 'La cámara no funciona',
    summary: 'Qué significa cada aviso que aparece sobre el botón de la cámara durante una llamada y cómo resolverlo sin salir de la conversación.',
    keywords: ['cámara', 'webcam', 'vídeo', 'no se encontró una cámara', 'no me ven', 'permiso', 'bloqueada', 'en uso', 'se desconectó', 'videollamada'],
    updated: UPDATED,
    related: ['reuniones/durante-una-llamada', 'ayuda/el-microfono-no-funciona'],
    blocks: [
      p('Cuando la cámara no se puede encender, Zenth no interrumpe la llamada: aparece un **aviso justo encima del botón de la cámara** y el botón queda con una **marca naranja** mientras el problema siga. Puedes cerrar el aviso con la **X**; la marca desaparece sola cuando se resuelve.'),
      tip('La voz no depende de la cámara. Mientras lo arreglas, sigues hablando y escuchando con normalidad.'),

      h2('«No se encontró una cámara»'),
      list(
        'Conecta una cámara o comprueba que la del portátil no esté desactivada (algunos equipos tienen un interruptor o una tapa).',
        'En cuanto el equipo la detecta, la marca del botón desaparece sola. Pulsa el botón de la cámara (o **V**) para encenderla.',
      ),

      h2('«Zenth no puede usar la cámara»'),
      p('El navegador tiene bloqueado el permiso de la cámara para Zenth.'),
      steps(
        'Haz clic en el **icono de información de la página**, junto a la dirección (a la izquierda de zenth.space).',
        'Activa el **permiso de la cámara** para el sitio.',
        'Vuelve a pulsar el botón de la cámara. En la mayoría de navegadores la marca desaparece sola en cuanto concedes el permiso.',
      ),

      h2('«La cámara está en uso»'),
      list(
        'Otra aplicación o pestaña la está usando, como otra videollamada. Ciérrala.',
        'Pulsa **Volver a intentar** en el aviso, o el botón de la cámara.',
      ),

      h2('«La cámara se desconectó»'),
      p('Pasa si desconectas una cámara USB con la llamada en curso. Zenth apaga la cámara y **no salta sola a otra**: aparecer de pronto por una cámara distinta no es algo que deba decidir la aplicación. Vuelve a conectarla, o elige otra con la flecha junto al botón, y enciéndela de nuevo.'),

      h2('No veo el botón de la cámara'),
      list(
        'Si eres **invitado** en una reunión rápida, el anfitrión puede haber desactivado **Usar micrófono y cámara** para los invitados.',
        'Si no aparece en ninguna llamada, puede que el servicio de llamadas aún no tenga la cámara habilitada. Escríbeme si persiste.',
      ),
      note('Con un **lienzo** abierto, la tecla **V** es la herramienta de selección del lienzo y no enciende la cámara. Usa el botón.'),
    ],
  },

  {
    slug: 'los-avisos-no-llegan',
    category: 'ayuda',
    title: 'Los avisos no llegan',
    summary: 'Una lista para revisar cuando no recibes recordatorios: los interruptores de Zenth, el permiso del navegador, iPhone, el correo y el silencio de Enfoque.',
    keywords: ['avisos', 'notificaciones no llegan', 'recordatorios', 'push', 'correo', 'spam', 'iphone', 'permiso', 'no me avisa', 'silencio', 'no molestar'],
    updated: UPDATED,
    related: ['cuenta/notificaciones', 'primeros-pasos/instalar-la-app', 'agenda/repeticion-y-recordatorios'],
    blocks: [
      p('Los avisos dependen de varias cosas a la vez: la tarea, tus ajustes, el permiso del navegador y, en el móvil, cómo tienes instalada la app. Repásalas en este orden.'),

      h2('1. La tarea'),
      list(
        'La tarea tiene activado **Avisar** en el editor y una **fecha y una hora** definidas (sin hora no hay a qué hora avisar).',
        'La fecha y la hora son las que crees, y estás en la zona horaria correcta.',
      ),

      h2('2. Tus ajustes de Zenth'),
      p('En **Ajustes › Notificaciones**, comprueba el canal que esperas:'),
      list(
        '**Notificaciones Zen** para avisos dentro de la app.',
        '**Recordatorios push** para avisos con Zenth cerrado.',
        '**Correos transaccionales** y la **categoría** concreta (Tareas, Eventos y reuniones…). Si el interruptor maestro está apagado, ninguna categoría envía.',
        '**Anticipación:** puede que el aviso ya llegara antes de lo que piensas (5, 10, 15, 30 minutos o 1 hora antes).',
      ),

      h2('3. El permiso del navegador (push)'),
      list(
        'El permiso lo concede el **navegador** y solo se puede retirar desde él. Si lo bloqueaste una vez, actívalo en la configuración del sitio y vuelve a activar los recordatorios push en Zenth.',
        'Comprueba que el sistema operativo no tenga activado el modo **No molestar** o un modo de concentración que silencie el navegador.',
      ),

      h2('4. En iPhone y iPad'),
      list(
        'Los recordatorios push **solo llegan con Zenth instalada** en la pantalla de inicio. Desde Safari a secas no llegan. Ver [Instalar Zenth](/docs/primeros-pasos/instalar-la-app).',
        'Abre la app instalada, entra en Ajustes › Notificaciones y actívalos desde ahí.',
      ),

      h2('5. El correo'),
      list(
        'Revisa la carpeta de **spam** o «promociones».',
        'Comprueba que la dirección de tu cuenta es la correcta (Ajustes › Cuenta).',
        'Recuerda que hay categorías que tú decides: si apagaste «Comentarios», no recibirás correos de comentarios.',
      ),

      h2('6. Enfoque en marcha'),
      p('Si activaste **Silenciar avisos no urgentes** en Ajustes › Enfoque, los avisos de progreso y logros esperan al final de la sesión. Los errores llegan igual.'),
      tip('Si has revisado todo y sigue sin llegar, cuéntame qué canal esperabas, en qué dispositivo y con qué navegador, y lo miro.'),
    ],
  },

  {
    slug: 'un-enlace-no-funciona',
    category: 'ayuda',
    title: 'Un enlace no funciona',
    summary: 'Por qué puede fallar un enlace de invitación, de reunión, de pizarra pública o de evento, y qué hacer en cada caso.',
    keywords: ['enlace', 'invitación caducada', 'enlace revocado', 'límite de usos', 'pizarra no disponible', 'reunión terminó', 'no puedo entrar', 'enlace no válido', 'invitado', 'sala de espera', 'no me admiten'],
    updated: UPDATED,
    related: ['pizarras/unirse-a-una-pizarra', 'reuniones/reuniones-rapidas-e-invitados', 'pizarras/pizarra-publica-con-enlace'],
    blocks: [
      p('Cada tipo de enlace de Zenth tiene sus propias razones para dejar de funcionar. Busca el tuyo:'),

      h2('Enlace de invitación a una pizarra'),
      table(
        ['Lo que ves', 'Qué significa', 'Qué hacer'],
        ['«Este enlace de invitación fue revocado»', 'Un administrador lo eliminó.', 'Pide uno nuevo.'],
        ['«Este enlace de invitación ha caducado»', 'Pasó su fecha de vigencia.', 'Pide uno nuevo.'],
        ['«Este enlace ya alcanzó su límite de usos»', 'Ya lo usó el máximo de personas.', 'Pide uno nuevo o una invitación por correo.'],
        ['«Invitación no disponible»', 'La invitación por correo caducó o ya no existe.', 'Pide que te inviten de nuevo.'],
        ['«Usa [correo], que es el correo que recibió la invitación»', 'La invitación está ligada a una dirección concreta.', 'Entra o regístrate con esa dirección.'],
      ),

      h2('Enlace de una reunión rápida'),
      list(
        '**«Esta reunión ya terminó»:** el anfitrión la cerró para todos y el enlace dejó de ser válido. Pide un enlace nuevo.',
        '**«El enlace no es válido»:** está mal copiado o ya no existe.',
        '**«No se aprobó tu entrada»:** el anfitrión no admitió tu solicitud. Puedes volver a solicitar acceso.',
        '**Te quedas en la antesala:** el anfitrión tiene que admitirte; entrarás automáticamente cuando lo haga. Si tarda, escríbele por otro medio.',
        '**No te deja entrar sin motivo aparente:** el anfitrión puede haber cerrado las nuevas entradas o haberte quitado de la reunión (en ese caso no puedes volver a entrar con ese navegador).',
        '**Solo puedes escuchar:** el navegador no permitió usar el micrófono, o el anfitrión desactivó los micrófonos de invitados. Ver [El micrófono no funciona](/docs/ayuda/el-microfono-no-funciona).',
      ),

      h2('Enlace público de una pizarra'),
      p('Si ves **«Pizarra no disponible»**, la pizarra volvió a ser privada o el enlace ya no existe. Pídele a un administrador que vuelva a activar «Con enlace» y te pase el nuevo. Recuerda que el enlace público **no muestra** las tareas completadas ni los adjuntos.'),

      h2('Invitación a un evento'),
      p('**«El evento fue eliminado o la invitación dejó de estar disponible»**: quien organizaba el evento lo eliminó o te quitó de la lista. No necesitas una cuenta para responder una invitación, pero sí para guardarla en tu Agenda con el mismo correo al que llegó.'),

      h2('Invitación a una nota o lienzo'),
      p('Los enlaces a notas y lienzos **no dan acceso por sí solos**: hace falta que el propietario te haya compartido el documento. Si te aparece sin acceso, pídele que lo comparta con tu correo. Ver [Compartir notas y lienzos](/docs/biblioteca/compartir-notas-y-lienzos).'),
    ],
  },

  {
    slug: 'google-se-desconecta',
    category: 'ayuda',
    title: 'Google Drive o Calendar se desconectan',
    summary: 'Qué significa «Requiere atención» o «Reactivar sincronización», por qué caduca la conexión y cómo volver a conectar sin perder nada.',
    keywords: ['google', 'drive', 'calendar', 'desconectado', 'requiere atención', 'reactivar', 'volver a conectar', 'permiso caducado', 'reautorizar', 'ventana emergente', 'workspace', 'no sincroniza'],
    updated: UPDATED,
    related: ['integraciones/google-drive', 'integraciones/google-calendar'],
    blocks: [
      p('Las conexiones con Google usan permisos que Google puede hacer caducar o que tú puedes revocar. Cuando eso pasa, Zenth te lo indica y pide que vuelvas a autorizar. **No pierdes archivos ni tareas**: solo hay que reconectar.'),

      h2('Google Drive'),
      list(
        'En **Ajustes › Integraciones › Google Drive y Workspace**, un estado **Requiere atención** significa que hay que **Volver a conectar**. Púlsalo y acepta el permiso.',
        'Tus archivos siguen en Drive. Lo que Zenth guarda —la conexión y referencias mínimas— se restablece al reconectar.',
        'Si tu cuenta es de un **Google Workspace** (trabajo o centro educativo), el administrador puede haber restringido aplicaciones de terceros. Habla con él si Google rechaza el permiso.',
      ),

      h2('Google Calendar'),
      list(
        'Google Calendar se conecta con una **autorización temporal**. Si caduca, verás **Vuelve a autorizar la cuenta** y el botón **Reactivar sincronización**.',
        'Si viste **Actualización de Agenda pausada**, alguien (tú) la pausó: pulsa **Reanudar**.',
        'Si un evento no aparece, comprueba que su calendario está activado en **Calendarios visibles en Agenda** y pulsa **Actualizar Agenda**.',
      ),

      h2('La ventana de Google no se abre'),
      list(
        'Zenth abre Google en una **ventana emergente**. Si el navegador la bloquea, permite las ventanas emergentes para Zenth y vuelve a intentarlo.',
        'Si la ventana se cerró sin terminar, Zenth lo detecta («Cancelaste el acceso con Google») y puedes reintentarlo.',
      ),

      h2('Quiero empezar de cero'),
      p('**Desconectar** elimina de Zenth la conexión y, en el caso de Drive, las referencias asociadas, sin borrar tus archivos. Después puedes **conectar** de nuevo con la misma cuenta u otra. Puedes revisar y retirar los permisos también desde la configuración de seguridad de tu cuenta de Google.'),
    ],
  },

  {
    slug: 'no-puedo-entrar-a-mi-cuenta',
    category: 'ayuda',
    title: 'No puedo entrar a mi cuenta',
    summary: 'Contraseña incorrecta, correo sin confirmar, cuenta creada con Google, sesión que caducó: cómo recuperar el acceso paso a paso.',
    keywords: ['no puedo entrar', 'contraseña', 'olvidé mi contraseña', 'correo no llega', 'confirmar correo', 'iniciar sesión', 'google', 'sesión caducada', 'cuenta bloqueada', 'reautenticar', 'no recibo el correo'],
    updated: UPDATED,
    related: ['primeros-pasos/crear-cuenta-e-iniciar-sesion', 'cuenta/correo-contrasena-y-sesion', 'cuenta/varias-cuentas'],
    blocks: [
      h2('«El correo o la contraseña no coinciden»'),
      list(
        'Comprueba mayúsculas y minúsculas, y que no se haya colado un espacio. Con el ojo junto al campo puedes **mostrar la contraseña**.',
        'Si no la recuerdas, pulsa **¿La olvidaste?** junto al campo Contraseña para recibir un enlace. Ver [Crear tu cuenta e iniciar sesión](/docs/primeros-pasos/crear-cuenta-e-iniciar-sesion).',
        'Las contraseñas **nuevas** deben tener 12 caracteres o más, con mayúscula, minúscula, número y símbolo.',
      ),

      h2('Me registré, pero no puedo entrar'),
      list(
        'Zenth te envió un correo para **verificar la cuenta**. Ábrelo y sigue el enlace.',
        'Revisa **spam** y promociones. Si no llega, comprueba que escribiste bien la dirección.',
        'Si intentas registrarte con un correo que ya existe, Zenth te dice «Esta cuenta ya existe. Por favor, inicia sesión».',
      ),

      h2('Creé la cuenta con Google'),
      p('Si te registraste con **Entrar con Google**, no tienes una contraseña de Zenth: usa el mismo botón para entrar. Si prefieres una contraseña, puedes pedir una con **¿La olvidaste?**, usando el mismo correo de tu cuenta de Google.'),

      h2('Llegué por una invitación'),
      p('La invitación está ligada a **una dirección de correo**. Entra o crea la cuenta con esa misma dirección; si usas otra, Zenth te lo dice.'),

      h2('«Volver a iniciar sesión» en una de mis cuentas'),
      p('Si guardas varias cuentas en el dispositivo y una muestra **«Hay que volver a iniciar sesión»**, su sesión caducó o se invalidó. Pulsa la cuenta y entra de nuevo **con esa misma cuenta**: si usas otra, Zenth lo detecta y no la mezcla. Ver [Varias cuentas](/docs/cuenta/varias-cuentas).'),

      h2('El enlace del correo no funciona'),
      p('Los enlaces de confirmación y de restablecimiento de contraseña caducan. Pide uno nuevo desde la pantalla de inicio de sesión. Si el navegador no abre la aplicación, copia el enlace y pégalo en la barra de direcciones.'),
      tip('Si sigues sin poder entrar, escríbeme a **matiasluzardevv@gmail.com** desde la dirección con la que te registraste e indícame qué mensaje ves exactamente.'),
    ],
  },
];

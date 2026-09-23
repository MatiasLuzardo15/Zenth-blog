import { h2, list, note, p, path, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const cuentaArticles: DocArticle[] = [
  {
    slug: 'ajustes-generales',
    category: 'cuenta',
    title: 'Ajustes: perfil, apariencia y rutina',
    summary: 'Todo lo que se configura en Ajustes: tu perfil y avatar, el tema, la densidad, el formato de hora, cómo se reparten las tareas y más.',
    keywords: ['ajustes', 'configuración', 'preferencias', 'perfil', 'nombre', 'avatar', 'tema', 'oscuro', 'claro', 'zen', 'compacto', 'ancho', 'formato de hora', '12 horas', '24 horas', 'apoyar', 'donar', 'paypal'],
    updated: UPDATED,
    related: ['cuenta/notificaciones', 'cuenta/varias-cuentas', 'enfoque/historial-objetivo-y-constancia'],
    blocks: [
      p('Abre **Ajustes** con `Alt` + `,`, desde el menú de tu avatar (escritorio) o tocando tu avatar arriba a la derecha (móvil). El panel tiene un **buscador** propio: escribe el nombre de un ajuste («compacto», «hora», «micrófono») y te lleva a su sección.'),

      h2('Las secciones de Ajustes'),
      table(
        ['Sección', 'Qué contiene'],
        ['General', 'Tu nombre y tu avatar.'],
        ['Experiencia de uso', 'Tema, modo compacto, sonidos de la interfaz, ancho del contenido y distribución de listas en Pizarras.'],
        ['Productividad', 'Formato de hora, inicio de la mañana y la relación entre Agenda y Pizarras.'],
        ['Enfoque', 'Objetivo diario, avisos, silencio temporal y qué ve tu equipo. Ver [Enfoque](/docs/enfoque/historial-objetivo-y-constancia).'],
        ['Notificaciones', 'Avisos dentro de Zenth, push y correo. Ver [Notificaciones](/docs/cuenta/notificaciones).'],
        ['Audio', 'Micrófono y salida de tus llamadas, con prueba. Ver [Audio y dispositivos](/docs/reuniones/audio-y-dispositivos).'],
        ['Integraciones', 'Google Drive y Workspace, y Google Calendar. Ver [Integraciones y Zen](/docs/integraciones).'],
        ['Cuenta', 'Correo, política de privacidad, papelera, cuentas del dispositivo, cerrar sesión y zona de riesgo.'],
        ['Apoyar', 'Un aporte voluntario para sostener el proyecto.'],
      ),
      p('En el móvil, **Estadísticas** también aparece en el índice de Ajustes, bajo «Tu actividad».'),

      h2('General: nombre y avatar'),
      list(
        '**Nombre:** se usa en los saludos, en los comentarios y junto a tu avatar. Los miembros de tus pizarras lo ven.',
        '**Avatar:** elige tu **inicial** sobre uno de **12 degradados**, un **diseño** (Órbita, Flor, Cumbre u Ondas) o sube una **foto**.',
      ),

      h2('Experiencia de uso'),
      list(
        '**Tema:** **Sistema** (sigue el modo claro u oscuro de tu dispositivo), **Claro**, **Oscuro** o **Zen** (un claro cálido y sereno).',
        '**Modo compacto:** reduce espacios para ver más tareas a la vez.',
        '**Sonidos de la interfaz:** señales breves al completar acciones. No afecta a la música ni a los ambientes de Enfoque.',
        '**Ancho del contenido:** **Fluido** aprovecha todo el ancho, **Contenido** mantiene una columna centrada. Se aplica en escritorio a Agenda, Pizarras y Biblioteca.',
        '**Distribución de listas en Pizarras:** Horizontal (una fila) o Ajustar al espacio (varias filas).',
      ),
      tip('`Alt` + `T` cambia entre claro y oscuro sin abrir Ajustes.'),

      h2('Productividad'),
      list(
        '**Formato de hora:** 24 h o AM/PM. Se aplica a calendarios, tareas y selectores de hora.',
        '**Inicio de la mañana:** desde qué hora se ordenan los bloques de Agenda.',
        '**Añadir tareas de pizarras a Agenda** y **Añadir tareas de Agenda a la pizarra activa:** dos interruptores independientes. Ver [Crear tareas, eventos y reuniones](/docs/agenda/crear-tareas-eventos-y-reuniones).',
      ),

      h2('Apoyar Zenth'),
      p('Zenth es gratuito y no muestra publicidad. Si quieres ayudar con el coste de los servidores, hay un aporte voluntario por PayPal. **No compra funciones, prioridad ni propiedad sobre el proyecto**, y Zenth no ve ningún dato de pago: se hace en la página de PayPal.'),

      h2('Tus preferencias viajan contigo'),
      p('El tema y la mayoría de los ajustes se **guardan en tu cuenta**, no en el navegador: los encuentras igual en cualquier dispositivo.'),
    ],
  },

  {
    slug: 'notificaciones',
    category: 'cuenta',
    title: 'Notificaciones: dentro de Zenth, push y correo',
    summary: 'Elige qué avisos recibes y por qué canal: en la app, en el dispositivo (push) o por correo, con anticipación y aviso de racha.',
    keywords: ['notificaciones', 'avisos', 'recordatorios', 'push', 'correo', 'email', 'anticipación', 'racha', 'ánimo', 'permiso', 'campana', 'centro de notificaciones', 'silenciar'],
    updated: UPDATED,
    related: ['ayuda/los-avisos-no-llegan', 'primeros-pasos/instalar-la-app', 'agenda/repeticion-y-recordatorios'],
    blocks: [
      p('Zenth puede avisarte por **tres canales independientes**. Todos se configuran en **Ajustes › Notificaciones** y puedes usar los que quieras.'),
      path('Ajustes', 'Notificaciones'),

      h2('1. Dentro de Zenth'),
      list(
        '**Notificaciones Zen:** recordatorios suaves mientras la aplicación está abierta.',
        '**Recordatorio de ánimo:** una vez al día te pregunta cómo te fue, a la hora que elijas, o desactívalo.',
        'El **centro de notificaciones** (la campana, `Alt` + `N`) reúne los avisos de tus pizarras y de notas compartidas. Ver [Buscar y notificaciones](/docs/primeros-pasos/busqueda-y-notificaciones).',
      ),

      h2('2. En el dispositivo (push)'),
      p('**Recordatorios push** te avisan aunque Zenth no esté abierto. Al activarlos, el navegador te pide permiso; ese permiso solo se puede retirar desde el propio navegador.'),
      list(
        'En **Android y escritorio** funcionan desde el navegador.',
        'En **iPhone y iPad** solo llegan si has [instalado Zenth](/docs/primeros-pasos/instalar-la-app) en la pantalla de inicio.',
      ),

      h2('3. Por correo'),
      p('El interruptor maestro **Correos transaccionales** activa o pausa todos los avisos por correo. Debajo puedes elegir categorías una a una:'),
      table(
        ['Categoría', 'Cuándo se envía'],
        ['Tareas', 'A la hora programada, cuando activaste «Avisar».'],
        ['Eventos y reuniones', 'Recordatorio previo de tu agenda.'],
        ['Vencimientos', 'Tarjetas y subtareas próximas o vencidas.'],
        ['Asignaciones', 'Cuando alguien te asigna una tarjeta.'],
        ['Comentarios', 'Conversaciones en tarjetas que sigues.'],
        ['Menciones', 'Cuando una persona te menciona directamente.'],
        ['Aprobaciones', 'Solicitudes y respuestas de revisión.'],
        ['Automatizaciones', 'Avisos generados por reglas de pizarra.'],
        ['Otra actividad', 'Cambios en tarjetas y pizarras que sigues.'],
      ),
      list(
        '**Anticipación:** con cuánto tiempo avisar de tareas, eventos y reuniones: a la hora, o 5, 10, 15, 30 minutos o 1 hora antes.',
        '**Aviso de racha:** un correo solo cuando tu racha vence esta noche o llevas días sin entrar, a la hora que elijas. Si tu racha ya está asegurada, no se envía nada.',
      ),
      note('Hay correos que **no** se pueden apagar porque no son avisos, sino parte del servicio: confirmación de cuenta, seguridad, restablecimiento de contraseña e invitaciones que otra persona te envía.'),

      h2('Mientras enfocas'),
      p('**Silenciar avisos no urgentes** (Ajustes › Enfoque) hace que los avisos de progreso y logros esperen al final de la sesión. Los errores llegan igual. Ver [Historial, objetivo y constancia](/docs/enfoque/historial-objetivo-y-constancia).'),
      tip('Si no recibes un aviso que esperabas, [esta guía](/docs/ayuda/los-avisos-no-llegan) te lleva por las causas más comunes.'),
    ],
  },

  {
    slug: 'varias-cuentas',
    category: 'cuenta',
    title: 'Varias cuentas en un dispositivo',
    summary: 'Añade otra cuenta sin cerrar la actual, cambia entre ellas en un clic y entiende qué pasa con las llamadas, sesiones de enfoque y cambios sin guardar.',
    keywords: ['varias cuentas', 'cambiar de cuenta', 'añadir cuenta', 'multi cuenta', 'sesiones', 'cerrar sesión', 'quitar del dispositivo', 'reautenticar', 'cuenta personal', 'cuenta de trabajo'],
    updated: UPDATED,
    related: ['cuenta/correo-contrasena-y-sesion', 'primeros-pasos/crear-cuenta-e-iniciar-sesion'],
    blocks: [
      p('Si tienes, por ejemplo, una cuenta personal y otra de trabajo, no hace falta cerrar sesión para cambiar. Zenth puede guardar **varias cuentas en el mismo navegador** y dejarte pasar de una a otra con un clic, como el menú de cuentas de Google.'),
      note('Cada cuenta es **una identidad independiente**: sus tareas, pizarras, notas, ajustes, integraciones y conversaciones nunca se mezclan con las de otra. No hay «espacios de trabajo» intermedios: una cuenta es una persona.'),

      h2('Añadir otra cuenta'),
      steps(
        'Abre el menú de tu **avatar**.',
        'Elige **Añadir otra cuenta**. Se abre una ventana **sin que salgas de la pantalla actual** ni se cierre tu sesión.',
        'Entra con otro correo y contraseña, crea una cuenta nueva, o usa **Añadir con Google** (Google se abre en una ventana aparte).',
      ),
      p('Tu cuenta actual sigue abierta. Después puedes cambiar entre las dos desde el mismo menú. Si Google no responde, permite las ventanas emergentes para Zenth.'),

      h2('Cambiar de cuenta'),
      p('En el menú del avatar aparece **Cambiar de cuenta** con las otras cuentas abiertas. Pulsa una y Zenth cambia al instante.'),
      p('El cambio es inmediato salvo que haya algo delicado en marcha. Zenth te lo dice y espera tu confirmación si:'),
      list(
        'Estás en una **llamada o reunión**.',
        'Tienes una **sesión de Enfoque** en curso.',
        'Hay **cambios pendientes de guardar**.',
      ),
      p('Antes de cambiar, Zenth guarda lo pendiente de la cuenta anterior de forma segura.'),

      h2('Gestionar las cuentas del dispositivo'),
      p('**Gestionar cuentas en este dispositivo** (menú del avatar, o Ajustes › Cuenta en el móvil) muestra la lista completa con el estado de cada una y estas acciones:'),
      table(
        ['Acción', 'Qué hace'],
        ['Cambiar a esta cuenta', 'Pasa a esa cuenta.'],
        ['Cerrar sesión de esta cuenta', 'Cierra **solo esa** sesión **en este dispositivo**. No la cierra en otros dispositivos.'],
        ['Volver a iniciar sesión', 'Aparece cuando la sesión de esa cuenta ya no es válida: hay que entrar de nuevo, y con la **misma** cuenta.'],
        ['Quitar de este dispositivo', 'La borra de la lista de este navegador.'],
      ),
      p('Cuando hay más de una cuenta, la opción del menú pasa a llamarse **Cerrar todas las cuentas**.'),

      h2('Cosas que conviene saber'),
      list(
        'Las cuentas **siguen disponibles al cerrar y reabrir el navegador**, hasta que las cierres o las quites, o hasta que la sesión caduque.',
        'La cuenta activa es **por pestaña**: cambiar de cuenta en una pestaña no cambia otra en silencio. Una pestaña nueva puede empezar con la última cuenta usada.',
        'Si al cerrar una sesión otra pestaña de esa cuenta no responde, Zenth ofrece **Forzar cierre** y avisa de que pueden perderse los cambios sin guardar de esas pestañas.',
        'Cerrar una sesión en este dispositivo **no borra ningún dato**: tus datos siguen en la nube.',
      ),
    ],
  },

  {
    slug: 'correo-contrasena-y-sesion',
    category: 'cuenta',
    title: 'Correo, contraseña y cierre de sesión',
    summary: 'Cambia tu correo, recupera tu contraseña, cierra la sesión de este dispositivo y entiende qué hace cada opción de la zona de riesgo.',
    keywords: ['cambiar correo', 'email', 'contraseña', 'cerrar sesión', 'eliminar cuenta', 'borrar datos', 'zona de riesgo', 'eliminar todas las tareas', 'privacidad', 'seguridad', 'salir'],
    updated: UPDATED,
    related: ['privacidad/eliminar-y-exportar-tus-datos', 'primeros-pasos/crear-cuenta-e-iniciar-sesion', 'ayuda/no-puedo-entrar-a-mi-cuenta'],
    blocks: [
      h2('Cambiar tu correo'),
      steps(
        'Ve a **Ajustes › Cuenta › Cambiar correo**.',
        'Escribe la dirección nueva y pulsa el botón para enviar la confirmación.',
        '**Revisa el correo nuevo** y abre el enlace de confirmación. El cambio solo se aplica cuando lo confirmas.',
      ),
      p('Mientras no confirmes, sigues entrando con el correo anterior. Si la dirección no es válida o es la misma que la actual, Zenth te lo indica. Zenth puede además enviarte un aviso cuando tu correo o tu contraseña cambian.'),

      h2('Contraseña'),
      p('Para elegir una contraseña nueva, usa **¿La olvidaste?** en la pantalla de inicio de sesión: te enviamos un enlace para escoger una nueva. Las contraseñas nuevas deben tener **12 caracteres o más, con mayúscula, minúscula, número y símbolo**. Ver [Crear tu cuenta e iniciar sesión](/docs/primeros-pasos/crear-cuenta-e-iniciar-sesion).'),

      h2('Cerrar sesión'),
      p('**Cerrar sesión** (menú del avatar o Ajustes › Cuenta) cierra la sesión **en este dispositivo**. No elimina ningún dato: todo sigue en la nube y vuelve cuando entres de nuevo. Con varias cuentas verás **Cerrar todas las cuentas**. Ver [Varias cuentas](/docs/cuenta/varias-cuentas).'),

      h2('La zona de riesgo'),
      warn('**Eliminar todas las tareas** borra **permanentemente** las tareas de Agenda y de Pizarras **sin enviarlas a la papelera**. No se puede deshacer. Zenth pide una confirmación adicional antes de ejecutarlo.', 'Es irreversible'),
      p('Ese botón elimina **tareas**, no tu cuenta. Tus notas, lienzos, ajustes y el resto de tus datos no se tocan.'),

      h2('Eliminar tu cuenta'),
      p('Hoy no hay un botón para eliminar la cuenta dentro de la aplicación. Para eliminarla junto con tus datos, escribe a **matiasluzardevv@gmail.com** desde el correo de tu cuenta. Antes, desconecta las integraciones que quieras revocar: los archivos de Google seguirán en tu Drive hasta que tú los elimines allí. Los detalles están en [Eliminar y exportar tus datos](/docs/privacidad/eliminar-y-exportar-tus-datos) y en la [Política de privacidad](/privacy).'),
    ],
  },

  {
    slug: 'papelera',
    category: 'cuenta',
    title: 'Papelera: recuperar lo que borraste',
    summary: 'Tareas y notas eliminadas van a la papelera hasta que la vacíes. Cómo restaurar, borrar para siempre y qué pasa con los archivos de Drive.',
    keywords: ['papelera', 'restaurar', 'recuperar', 'borrar', 'eliminar para siempre', 'vaciar', 'trash', 'eliminado', 'drive'],
    updated: UPDATED,
    related: ['agenda/historial-de-completadas', 'pizarras/crear-y-organizar-pizarras', 'integraciones/google-drive'],
    blocks: [
      p('Borrar deja de ser una decisión definitiva. Lo que eliminas va a la **Papelera**, donde queda hasta que la vacíes tú.'),

      h2('Abrir la papelera'),
      list(
        'Menú del avatar › **Papelera**, o `Alt` + `P`.',
        'Ajustes › Cuenta › **Papelera**, o el botón **Papelera** de la Biblioteca.',
        'En el móvil, dentro de **Más**.',
      ),

      h2('Las tres pestañas'),
      table(
        ['Pestaña', 'Qué contiene', 'Qué puedes hacer'],
        ['Tareas', 'Tareas y tarjetas que enviaste a la papelera, también las de una pizarra que eliminaste.', 'Restaurar, eliminar para siempre, o vaciar la sección.'],
        ['Biblioteca', 'Notas, lienzos y archivos nativos de Zenth.', 'Restaurar, eliminar para siempre, o vaciar la sección.'],
        ['Drive', 'Archivos de tu Google Drive que enviaste a su papelera.', 'Restaurarlos en Drive. Para eliminarlos definitivamente, hazlo desde Google.'],
      ),
      list(
        '**Restaurar** devuelve un elemento a su sitio original con un clic.',
        '**Eliminar para siempre** (o vaciar) sí es permanente.',
        'Al mandar una **tarea recurrente** a la papelera, Zenth detiene sus repeticiones futuras.',
      ),
      note('Zenth **no borra la papelera automáticamente**: los elementos se quedan hasta que tú los restaures o los elimines. Y **Eliminar todas las tareas**, en la zona de riesgo de Ajustes, se salta la papelera.'),

      h2('Qué no pasa por la papelera'),
      list(
        'Las tareas **completadas** no están en la papelera: están en el [historial de completadas](/docs/agenda/historial-de-completadas).',
        'Lo que borras **dentro de Google** (fuera de Zenth) sigue las reglas de Google Drive.',
      ),
    ],
  },
];

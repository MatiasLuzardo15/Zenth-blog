import { h2, h3, list, note, p, path, steps, table, tip } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const primerosPasosArticles: DocArticle[] = [
  {
    slug: 'que-es-zenth',
    category: 'primeros-pasos',
    title: 'Qué es Zenth y cómo está organizado',
    summary: 'Un espacio de productividad con Agenda, Pizarras, Biblioteca, Reuniones, Enfoque y Progreso. Aquí ves qué hace cada sección y cómo se conectan.',
    keywords: ['introducción', 'secciones', 'navegación', 'menú', 'empezar', 'novedades', 'gratis', 'menú principal'],
    updated: UPDATED,
    related: ['primeros-pasos/recorrido-de-cinco-minutos', 'primeros-pasos/crear-cuenta-e-iniciar-sesion', 'atajos/atajos-de-la-aplicacion'],
    blocks: [
      p('Zenth reúne en una sola aplicación web lo que normalmente vive en cuatro o cinco herramientas: la **agenda** donde decides cuándo cabe cada cosa, las **pizarras** donde organizas proyectos (solo o con un equipo), una **biblioteca** para tus notas y documentos, **reuniones** para hablar sin salir del trabajo y un **temporizador de enfoque** que te acompaña por toda la aplicación.'),
      p('Todo está pensado para que pasar de una cosa a otra no cueste: una tarea puede vivir en Agenda y en una pizarra a la vez, convertirse en una nota y terminar en una sesión de enfoque.'),

      h2('Las secciones'),
      table(
        ['Sección', 'Para qué sirve', 'Atajo'],
        ['Agenda', 'Planificar tu tiempo con tareas, eventos y reuniones en vista de día, semana y mes.', '`Alt + 1`'],
        ['Pizarras', 'Proyectos con listas y tarjetas, para ti o para compartir con un equipo.', '`Alt + 2`'],
        ['Biblioteca', 'Notas, lienzos y archivos de Zenth, junto con tu Google Drive si lo conectas.', '`Alt + 3`'],
        ['Reuniones', 'Salas de tus pizarras, llamadas privadas y reuniones rápidas con invitados.', '`Alt + 5`'],
        ['Enfoque', 'Un temporizador global que sigue corriendo mientras navegas.', '`Alt + F`'],
        ['Progreso', 'XP, niveles, logros y racha.', '`Alt + 4`'],
        ['Actividad y ánimo', 'Tu registro de ánimo y el ritmo de tus días.', '`Alt + 6`'],
        ['Estadísticas', 'Cuánto tiempo pasas en cada parte de Zenth, y cómo evolucionan tus tareas y sesiones.', '`Alt + 7`'],
      ),
      note('En macOS, `Alt` se muestra como `⌥` y `Ctrl` como `⌘`. Todos los atajos están en [Atajos de la aplicación](/docs/atajos/atajos-de-la-aplicacion).'),

      h2('Cómo te mueves por Zenth'),
      h3('En escritorio'),
      p('Hay una **barra superior** con las cuatro secciones principales (Agenda, Pizarras, Biblioteca y Reuniones). A la derecha tienes la **búsqueda** (`Ctrl` + `K`), el icono de **Enfoque** con tu racha, las **notificaciones** y tu **avatar**. El menú del avatar guarda Progreso, Actividad y ánimo, Estadísticas, Ajustes, los atajos de teclado, la Papelera, el cambio de tema (`Alt` + `T`) y la gestión de cuentas. `Alt` + `M` oculta o muestra la barra.'),
      h3('En el móvil'),
      p('La navegación cambia para que todo quede al alcance del pulgar:'),
      list(
        'La **barra inferior** tiene Agenda, Pizarras, Biblioteca y el botón de Enfoque, más **Más**, que abre Progreso, Actividad y ánimo, Reuniones y la Papelera.',
        'El botón **+** crea una tarea o, si estás en Biblioteca, una nota.',
        'Tu **avatar**, arriba a la derecha, abre Ajustes. Agenda y Pizarras tienen su propio buscador en la cabecera.',
      ),

      h2('Todo está conectado'),
      list(
        'Las tareas de una pizarra pueden aparecer también en Agenda, y las de Agenda pertenecer a la pizarra activa. Tú decides si eso pasa, en Ajustes.',
        'Desde cualquier tarea puedes **expandirla a una nota**, vincular notas y archivos de Drive, o iniciar una sesión de Enfoque.',
        'Una reunión se puede programar desde Agenda, con invitados y el enlace de tu proveedor favorito.',
        'Completar tareas y sesiones de enfoque alimenta tu progreso: XP, racha, niveles y logros.',
      ),

      h2('Gratis, sin publicidad'),
      p('Todas las funciones están disponibles sin pagar y Zenth no muestra publicidad ni usa rastreadores publicitarios. Si quieres ayudar con el coste de los servidores, hay un aporte voluntario en **Ajustes › Apoyar**; no compra funciones ni prioridad.'),

      h2('Funciona en el navegador y se instala'),
      p('Zenth es una aplicación web progresiva: la abres desde el navegador, o la instalas para tenerla como una app más. Cuenta y datos son los mismos en móvil y escritorio. Los pasos están en [Instalar Zenth](/docs/primeros-pasos/instalar-la-app).'),
      tip('Si es tu primera vez, Zenth te muestra un recorrido de siete pantallas breves. Puedes saltar a cualquier tema o entrar directamente a la aplicación.'),
    ],
  },

  {
    slug: 'crear-cuenta-e-iniciar-sesion',
    category: 'primeros-pasos',
    title: 'Crear tu cuenta e iniciar sesión',
    summary: 'Regístrate con correo y contraseña o con Google, confirma tu correo, recupera el acceso si olvidas la contraseña y entiende la aceptación de términos.',
    keywords: ['registro', 'registrarse', 'contraseña', 'olvidé', 'recuperar', 'google', 'login', 'entrar', 'confirmar correo', 'verificar', 'términos'],
    updated: UPDATED,
    related: ['cuenta/correo-contrasena-y-sesion', 'cuenta/varias-cuentas', 'ayuda/no-puedo-entrar-a-mi-cuenta'],
    blocks: [
      p('Necesitas una cuenta para usar Zenth. Puedes crearla con un correo y una contraseña, o entrar con tu cuenta de Google. Solo hay que hacerlo una vez: la sesión queda abierta en ese dispositivo hasta que la cierres.'),

      h2('Crear una cuenta con correo'),
      steps(
        'Abre Zenth y elige **Registrate** en la pantalla de inicio de sesión.',
        'Escribe tu correo y una contraseña que cumpla los requisitos (abajo).',
        'Marca que aceptas la **Política de privacidad** y los **Términos y condiciones**. Sin ese paso no se crea la cuenta.',
        'Pulsa **Crear mi cuenta** y revisa tu correo: te enviamos un enlace para verificarla.',
        'Abre el enlace. Zenth te lleva de vuelta a la aplicación con la sesión iniciada.',
      ),
      p('La contraseña debe tener **al menos 12 caracteres**, con mayúscula, minúscula, número y símbolo. Las cuentas antiguas que se crearon con una contraseña más corta pueden seguir entrando con ella, pero cualquier contraseña nueva (al registrarte o al restablecerla) debe cumplir esta regla.'),
      tip('Un gestor de contraseñas genera y guarda una clave larga sin que tengas que recordarla. Zenth nunca puede ver tu contraseña en texto legible.'),

      h2('Entrar con Google'),
      p('Pulsa **Entrar con Google** (o **Registrarme con Google** si aún no tienes cuenta) y elige tu cuenta en la ventana de Google. No hace falta contraseña de Zenth.'),
      p('Si es la primera vez que entras así, Zenth te muestra una pantalla, **Antes de entrar**, para que aceptes las condiciones. Es necesaria porque el botón de Google también sirve para registrarse y, de otro modo, quedarías registrado sin haber visto nada. Si no aceptas, se cierra la sesión.'),
      note('Iniciar sesión con Google es distinto de conectar Google Drive o Google Calendar. Esas conexiones son opcionales, se hacen después desde Ajustes y piden sus propios permisos. Ver [Integraciones y Zen](/docs/integraciones).'),

      h2('Olvidé mi contraseña'),
      steps(
        'En la pantalla de inicio de sesión, pulsa **¿La olvidaste?**, junto al campo Contraseña.',
        'Escribe tu correo y pulsa **Enviar enlace**.',
        'Abre el correo y sigue el enlace para elegir una contraseña nueva, que también debe tener 12 caracteres o más.',
      ),
      p('Si el correo no llega, revisa la carpeta de spam. Hay más pistas en [No puedo entrar a mi cuenta](/docs/ayuda/no-puedo-entrar-a-mi-cuenta).'),

      h2('Si llegas desde una invitación'),
      p('Cuando alguien te invita a una pizarra o a un evento por correo, la invitación está ligada a **esa dirección**. Para aceptarla tienes que registrarte o entrar con el mismo correo que la recibió; si usas otro, Zenth te lo indica. En el caso de un evento, se añade a tu Agenda automáticamente al confirmar el acceso.'),

      h2('Varias cuentas en el mismo dispositivo'),
      p('Puedes tener más de una cuenta abierta a la vez y cambiar entre ellas sin volver a escribir contraseñas. Está explicado en [Varias cuentas en un dispositivo](/docs/cuenta/varias-cuentas).'),
    ],
  },

  {
    slug: 'instalar-la-app',
    category: 'primeros-pasos',
    title: 'Instalar Zenth en el móvil o en el escritorio',
    summary: 'Zenth se añade a la pantalla de inicio desde el navegador, sin tiendas de aplicaciones. Pasos para iPhone, Android y escritorio.',
    keywords: ['pwa', 'instalar', 'aplicación', 'app', 'pantalla de inicio', 'iphone', 'ios', 'android', 'safari', 'chrome', 'push', 'móvil'],
    updated: UPDATED,
    related: ['cuenta/notificaciones', 'ayuda/los-avisos-no-llegan'],
    blocks: [
      p('Zenth es una **aplicación web progresiva**: no se descarga de una tienda. La instalas desde el navegador, tiene su propio icono y se abre en su propia ventana, con la misma cuenta y los mismos datos que en cualquier otro dispositivo. No ocupa espacio como una app nativa.'),

      h2('iPhone y iPad (Safari)'),
      steps(
        'Abre Zenth en **Safari**. Otros navegadores en iOS no ofrecen este paso.',
        'Toca el botón **Compartir** de la barra de Safari.',
        'Elige **Añadir a pantalla de inicio** y confirma.',
      ),
      p('Zenth abrirá desde ese icono, sin la barra del navegador.'),

      h2('Android (Chrome)'),
      steps(
        'Abre Zenth en Chrome.',
        'Toca el menú **⋮** en la esquina superior derecha.',
        'Elige **Instalar aplicación** (o **Añadir a pantalla de inicio**) y confirma con **Instalar**.',
      ),

      h2('Ordenador'),
      p('En Chrome o Edge, busca el **icono de instalar** en la barra de direcciones y sigue las instrucciones. La aplicación se abre en una ventana propia y puedes fijarla en la barra de tareas o en el dock.'),

      h2('Para qué sirve instalarla'),
      list(
        '**Recordatorios push.** Con la app instalada puedes recibir avisos aunque Zenth no esté abierta. Se activan en Ajustes › Notificaciones.',
        '**Abre más rápido**, sin barra del navegador.',
        '**Misma cuenta en todas partes**: móvil, tablet y escritorio comparten datos en tiempo real.',
      ),
      note('**En iOS los recordatorios push solo funcionan con la app instalada**; desde Safari a secas no llegan. En Android y en escritorio también funcionan desde el navegador.', 'Importante en iPhone'),
      p('Si ya instalaste Zenth y no llegan los avisos, revisa [Los avisos no llegan](/docs/ayuda/los-avisos-no-llegan).'),
    ],
  },

  {
    slug: 'recorrido-de-cinco-minutos',
    category: 'primeros-pasos',
    title: 'Tu primer día: un recorrido de cinco minutos',
    summary: 'Crea una tarea, una pizarra, una nota y una sesión de enfoque, registra tu ánimo y personaliza Zenth. Un camino corto para ver cómo encaja todo.',
    keywords: ['empezar', 'tutorial', 'inicio rápido', 'primer uso', 'guía rápida', 'bienvenida', 'onboarding'],
    updated: UPDATED,
    related: ['agenda/crear-tareas-eventos-y-reuniones', 'pizarras/crear-y-organizar-pizarras', 'biblioteca/notas', 'enfoque/usar-enfoque'],
    blocks: [
      p('No hace falta aprender Zenth entero para empezar. Este recorrido tarda unos minutos y pasa por lo esencial. Cada paso enlaza al artículo donde está explicado a fondo.'),

      h2('1. Crea tu primera tarea'),
      steps(
        'Ve a **Agenda** (`Alt` + `1`).',
        'Pulsa el botón de crear tarea, o la tecla `C`. También puedes tocar un hueco del calendario en la vista de día: la fecha y la hora se rellenan solas.',
        'Escribe un título. Si no necesitas una hora exacta, colócala en **Mañana, Tarde o Noche**.',
        'Guarda. Cuando la completes, suma 10 XP.',
      ),
      tip('Prueba a escribir una frase completa, como «Cita médica el lunes a las 10», y pulsa **Pedir a Zen**: rellena título, fecha, hora y prioridad por ti. Ver [Zen, el asistente](/docs/integraciones/zen-asistente).'),

      h2('2. Crea una pizarra'),
      steps(
        'Ve a **Pizarras** (`Alt` + `2`) y abre el selector de pizarras de la cabecera.',
        'Elige **Nueva pizarra**, ponle nombre e icono y pulsa **Crear**.',
        'Captura una idea en la **bandeja rápida** y arrástrala a una lista cuando sepas dónde va.',
      ),
      p('Más en [Crear y organizar pizarras](/docs/pizarras/crear-y-organizar-pizarras).'),

      h2('3. Escribe una nota'),
      steps(
        'Ve a **Biblioteca** (`Alt` + `3`) y pulsa **Nuevo › Nota**.',
        'Escribe. Con `/` aparece el menú de bloques (títulos, listas, tablas, imágenes…).',
        'Pulsa `Esc` para guardar y salir.',
      ),
      p('Más en [Notas: el editor de Zenth](/docs/biblioteca/notas).'),

      h2('4. Prueba una sesión de Enfoque'),
      steps(
        'Pulsa el icono de **Enfoque** en la cabecera (`Alt` + `F`).',
        'Elige 25 minutos y, si quieres, vincula una tarea.',
        'Trabaja. El temporizador sigue corriendo aunque cambies de sección.',
      ),
      p('Más en [Usar Enfoque](/docs/enfoque/usar-enfoque).'),

      h2('5. Registra cómo estás'),
      p('En **Actividad y ánimo** (`Alt` + `6`) puedes marcar tu estado del día con un toque. No es obligatorio ni te pone nota; sirve para ver patrones con el tiempo. Ver [Registro de ánimo](/docs/progreso/registro-de-animo).'),

      h2('6. Personaliza'),
      p('Abre **Ajustes** (`Alt` + `,`) para elegir el tema (Sistema, Claro, Oscuro o Zen), a qué hora empieza tu mañana y cuándo quieres recibir avisos.'),
      path('Ajustes', 'Experiencia de uso'),

      h2('Y después'),
      list(
        'Invita a alguien a una pizarra: [Compartir una pizarra](/docs/pizarras/compartir-una-pizarra).',
        'Conecta tu Google Drive para ver tus documentos en Biblioteca: [Google Drive y Workspace](/docs/integraciones/google-drive).',
        'Aprende los atajos de teclado: [Atajos de la aplicación](/docs/atajos/atajos-de-la-aplicacion).',
      ),
    ],
  },

  {
    slug: 'busqueda-y-notificaciones',
    category: 'primeros-pasos',
    title: 'Buscar en todo Zenth y el centro de notificaciones',
    summary: 'El buscador global encuentra pizarras, tareas, notas y archivos de Drive desde cualquier pantalla. El centro de notificaciones reúne los avisos de tus pizarras y notas compartidas.',
    keywords: ['buscar', 'buscador', 'ctrl k', 'paleta', 'avisos', 'campana', 'notificaciones', 'alt n', 'encontrar'],
    updated: UPDATED,
    related: ['cuenta/notificaciones', 'atajos/atajos-de-la-aplicacion'],
    blocks: [
      h2('El buscador global'),
      p('Sirve para saltar a cualquier cosa sin recordar en qué sección estaba. En escritorio se abre desde cualquier pantalla con `Ctrl` + `K` (`⌘` + `K` en Mac) o con la lupa de la barra superior.'),
      steps(
        'Pulsa `Ctrl` + `K` y escribe. Da igual si usas mayúsculas o tildes: «diseno» encuentra «Diseño».',
        'Los resultados se agrupan en **Pizarras**, **Tareas**, **Notas** y **Drive**. Los que empiezan por lo que escribiste salen primero.',
        'Muévete con las flechas y pulsa `Enter` para abrir el resultado. `Esc` cierra el buscador.',
      ),
      p('En Notas caben las notas, los lienzos, las tablas, los audios y los adjuntos. Si tienes Google Drive conectado, el buscador también recorre tus archivos de Drive (verás un aviso mientras termina de buscar).'),
      note('Dentro de una pizarra hay además un buscador propio, **Buscar tareas en esta pizarra**, que solo mira las tarjetas de ese tablero.'),

      h2('El centro de notificaciones'),
      p('La campana de la cabecera (o `Alt` + `N`) abre el centro de notificaciones: los avisos que generan tus pizarras, tus tarjetas y las notas y lienzos que otras personas comparten contigo.'),
      list(
        'Los avisos sin leer se distinguen por un punto y por un fondo más claro; arriba se indica cuántos hay pendientes.',
        'Pulsa un aviso para ir directamente a lo que lo generó (una tarjeta, una pizarra, una nota compartida).',
        '**Marcar todo como leído** limpia la lista de una vez.',
        'Desde el mismo panel puedes abrir los ajustes de notificaciones para elegir qué avisos recibes.',
      ),
      p('Cómo elegir qué avisos recibes (dentro de la app, push y correo) está en [Notificaciones](/docs/cuenta/notificaciones).'),
    ],
  },
];


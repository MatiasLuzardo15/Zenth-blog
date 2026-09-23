import { h2, list, note, p, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const privacidadArticles: DocArticle[] = [
  {
    slug: 'que-datos-guarda-zenth',
    category: 'privacidad',
    title: 'Qué datos guarda Zenth, en lenguaje claro',
    summary: 'Un repaso sin jerga de la información que guarda Zenth, para qué, y lo que nunca hace: no vende datos, no muestra publicidad y no graba tus llamadas.',
    keywords: ['datos', 'privacidad', 'qué guarda', 'información', 'tiempo en la app', 'chat', 'invitados', 'rastreadores', 'publicidad', 'venta de datos', 'cookies', 'proveedores', 'supabase', 'livekit', 'gemini'],
    updated: UPDATED,
    related: ['privacidad/quien-ve-que', 'privacidad/eliminar-y-exportar-tus-datos', 'reuniones/limites-y-privacidad-de-las-llamadas'],
    blocks: [
      p('Esta guía resume, en lenguaje llano, qué información guarda Zenth. La versión completa y vinculante está en la [Política de privacidad](/privacy) y los [Términos y condiciones](/terms); si algo difiere, mandan esos textos.'),

      h2('Lo esencial'),
      list(
        'Zenth usa tus datos **para prestar el servicio que eliges**. No los vende, no los cede para publicidad y no muestra anuncios.',
        '**No usa rastreadores publicitarios** ni herramientas de analítica de terceros.',
        '**No graba** el audio ni la pantalla de tus llamadas, y no hay cámara.',
        'Las integraciones con Google (Drive, Calendar y Zen) son **opcionales, revocables** y solo actúan cuando usas sus funciones.',
      ),

      h2('Qué se guarda'),
      table(
        ['Qué', 'Ejemplos', 'Quién lo ve'],
        ['Tu cuenta y perfil', 'Correo, identificador, nombre, avatar. Tu contraseña la gestiona el sistema de autenticación y Zenth no puede leerla.', 'Tú. Los miembros de tus pizarras ven tu nombre y avatar.'],
        ['Tu organización', 'Tareas, eventos y reuniones, repeticiones, recordatorios, etiquetas, pasos, adjuntos, notas, lienzos, sesiones de enfoque, objetivos, estadísticas, rachas, niveles, logros y registros de ánimo.', 'Solo tú, salvo lo que compartas.'],
        ['Tiempo en la app', 'Por cada tramo con la pestaña visible: día, hora de inicio y fin, sección y, en Pizarras, la pizarra abierta. Alimenta la sección Estadísticas.', 'Solo tú.'],
        ['Colaboración', 'Pizarras, listas, miembros, roles, invitaciones, comentarios, menciones, asignaciones, votos, aprobaciones, actividad y presencia. También los colaboradores, permisos y sugerencias de notas y lienzos compartidos.', 'Las personas con acceso a esa pizarra, nota o lienzo.'],
        ['Reuniones', 'Quién participa, cuándo entra y sale, y cuánto dura. Para invitados: el nombre que escriben y el estado de su admisión. El **chat de las salas de pizarra**.', 'Los participantes; el chat de una sala, los miembros de la pizarra.'],
        ['Preferencias', 'Tema, densidad, formato de hora, opciones de Enfoque, sonido, notificaciones e integraciones. También la fecha en que aceptaste los términos.', 'Solo tú.'],
        ['Datos técnicos', 'Sesión, almacenamiento local del navegador, la lista de cuentas abiertas en tu dispositivo y, si activas push, el token de entrega del dispositivo.', 'Solo tú.'],
      ),

      h2('Con Google'),
      list(
        '**Drive:** Zenth guarda la conexión cifrada y referencias mínimas. Tus archivos siguen en tu Drive; Zenth los transmite para mostrarlos o editarlos, pero no conserva una segunda copia permanente.',
        '**Calendar:** permiso de solo lectura. El acceso permanece en memoria y caduca; la lista de calendarios y tus preferencias se guardan en tu navegador. Los eventos de los calendarios que eliges se importan a Agenda.',
        '**Zen:** cuando pulsas una acción, se envía a Google Gemini únicamente el texto de esa solicitud (la frase o el título de una tarea) y la fecha de hoy.',
      ),

      h2('A quién recurre Zenth para funcionar'),
      table(
        ['Proveedor', 'Para qué'],
        ['Supabase', 'Base de datos, autenticación, funciones y almacenamiento.'],
        ['Google', 'Drive, Docs, Sheets, Slides, Forms, Calendar, Gemini y Firebase Cloud Messaging (notificaciones push).'],
        ['LiveKit', 'Transmisión de voz y pantalla.'],
        ['Vercel', 'Alojamiento y entrega de la aplicación y del sitio.'],
        ['Proveedor de correo', 'Correos de cuenta y los avisos que actives.'],
        ['PayPal', 'Contribuciones voluntarias, si decides abrir su página. Zenth no recibe datos de pago.'],
        ['Google Fonts', 'Tipografías del sitio.'],
      ),
      p('Pueden procesar datos en países distintos al tuyo, conforme a sus propios términos.'),
      tip('¿Quién ve qué, exactamente? Lo detallamos en [Quién ve qué](/docs/privacidad/quien-ve-que). ¿Cómo borrar lo tuyo? En [Eliminar y exportar tus datos](/docs/privacidad/eliminar-y-exportar-tus-datos).'),
    ],
  },

  {
    slug: 'quien-ve-que',
    category: 'privacidad',
    title: 'Quién ve qué',
    summary: 'De un vistazo: qué es solo tuyo, qué ven los miembros de una pizarra, qué ve quien tiene un enlace público y qué ven los invitados de una reunión.',
    keywords: ['quién ve', 'visibilidad', 'privado', 'compartido', 'permisos', 'enlace público', 'invitados', 'presencia', 'miembros', 'seguridad', 'acceso lateral'],
    updated: UPDATED,
    related: ['pizarras/pizarra-publica-con-enlace', 'biblioteca/compartir-notas-y-lienzos', 'reuniones/reuniones-rapidas-e-invitados'],
    blocks: [
      p('La regla de Zenth es que **cada persona recibe solo el acceso que necesita** para lo que está haciendo, y que esa regla la aplica el servidor, no la pantalla: un botón oculto nunca es la única barrera.'),

      h2('Solo tuyo'),
      p('Salvo que tú lo compartas, nadie más ve tu **Agenda privada, tu Biblioteca personal, tu registro de ánimo, tus estadísticas, tu tiempo en la app, tus sesiones de enfoque y tu progreso**. Ni siquiera los miembros de tus pizarras.'),

      h2('Miembros de una pizarra'),
      list(
        'Ven tu **nombre, avatar, rol, aportes y presencia** dentro de esa pizarra.',
        'Ven el contenido de esa pizarra según su rol: Administrador, Miembro u Observador.',
        'Si lo activas, ven **hasta qué hora estás enfocado**; nunca la tarea. Ver [Enfoque y equipo](/docs/enfoque/enfoque-y-equipo).',
        'Pueden leer el **chat de la sala** de esa pizarra. No pueden ver el de una llamada privada.',
        'No obtienen acceso a otras pizarras ni a nada personal.',
      ),

      h2('Con un enlace público'),
      p('Si cambias una pizarra a **Con enlace**, cualquiera que tenga la dirección la ve **sin iniciar sesión y en solo lectura**. Solo afecta a esa pizarra y puedes revocarlo cuando quieras.'),
      table(
        ['Se muestra', 'No se muestra'],
        ['Tablero, listas y tarjetas; descripción; etiquetas; progreso de la checklist; número de comentarios.', 'Adjuntos e imágenes, miembros asignados, documentos vinculados, ubicación, enlaces de videollamada, comentarios (solo se cuentan), tareas completadas y datos de personas.'],
      ),

      h2('Notas y lienzos compartidos'),
      p('Los ven quienes tienen acceso, con el permiso que les diste: ver, sugerir o editar. Quien tiene acceso ve la presencia de los demás en ese documento. Tú, como propietario, conservas el control del acceso.'),

      h2('Reuniones'),
      list(
        '**Sala de pizarra:** solo integrantes actuales.',
        '**Llamada privada:** solo las dos personas, que deben compartir una pizarra.',
        '**Reunión rápida:** quien tenga el enlace y sea admitido. Ven a los demás participantes de **esa** reunión y nada más de tu cuenta.',
      ),
      note('Un invitado **nunca** ve tus pizarras, tareas, archivos, historial ni otras salas.'),

      h2('Google Drive'),
      p('Compartir un archivo de Google aplica los **permisos reales de Drive**. Revisa siempre destinatario y rol antes de confirmar.'),
    ],
  },

  {
    slug: 'eliminar-y-exportar-tus-datos',
    category: 'privacidad',
    title: 'Eliminar y exportar tus datos',
    summary: 'Cómo borrar contenido, desconectar integraciones, sacar copias de lo tuyo y pedir la eliminación de tu cuenta.',
    keywords: ['eliminar cuenta', 'borrar datos', 'exportar', 'descargar mis datos', 'derechos', 'supresión', 'acceso', 'ley 18.331', 'copia de seguridad', 'portabilidad', 'olvido'],
    updated: UPDATED,
    related: ['cuenta/correo-contrasena-y-sesion', 'cuenta/papelera', 'integraciones/google-drive'],
    blocks: [
      h2('Borrar contenido'),
      list(
        'Las **tareas, notas y lienzos** que eliminas van a la [Papelera](/docs/cuenta/papelera) y se pueden restaurar hasta que la vacíes. Vaciarla es permanente.',
        '**Eliminar todas las tareas** (Ajustes › Cuenta › Zona de riesgo) borra las tareas de Agenda y Pizarras **para siempre**, sin pasar por la papelera.',
        'Los archivos de **Google Drive** siguen las reglas de Drive: van a su papelera y se recuperan desde Google.',
      ),

      h2('Desconectar integraciones'),
      list(
        '**Drive:** desconectar intenta revocar el permiso y elimina de Zenth la conexión y las referencias asociadas. Tus archivos **permanecen en tu Drive**.',
        '**Calendar:** desconectar detiene el acceso futuro. Los eventos ya importados a Agenda no se borran solos.',
      ),
      p('También puedes retirar los permisos desde la configuración de seguridad de tu cuenta de Google.'),

      h2('Sacar copias de lo tuyo'),
      p('Hoy no hay un botón que exporte toda la cuenta de una vez, pero sí puedes descargar por partes:'),
      table(
        ['Qué', 'Cómo'],
        ['Notas', 'Copiar como Markdown o texto; descargar `.md`, `.html` o PDF; imprimir. Ver [Notas](/docs/biblioteca/notas).'],
        ['Estadísticas', 'Exportar a Excel, CSV o PDF. Ver [Estadísticas](/docs/progreso/estadisticas).'],
        ['Archivos de Drive', 'Descargar o exportar (Word, Excel, PowerPoint, PDF…) desde el diálogo del archivo.'],
      ),

      h2('Eliminar tu cuenta o ejercer tus derechos'),
      p('Puedes pedir el **acceso, la rectificación, la supresión** de tus datos y la eliminación de tu cuenta escribiendo a **matiasluzardevv@gmail.com**, desde el correo de tu cuenta. Es gratuito, y podemos pedirte información razonable para verificar tu identidad. Algunos registros pueden conservarse el tiempo estrictamente necesario por seguridad, obligaciones legales o resolución de controversias.'),
      note('La ley uruguaya Nº 18.331 reconoce derechos de información, acceso, actualización, rectificación, inclusión, supresión y oposición. También puedes acudir a la Unidad Reguladora y de Control de Datos Personales de Uruguay. Todo está en la [Política de privacidad](/privacy).'),
      warn('Eliminar la cuenta es definitivo. Antes, descarga lo que quieras conservar y desconecta las integraciones que quieras revocar.', 'Antes de pedirlo'),
    ],
  },
];

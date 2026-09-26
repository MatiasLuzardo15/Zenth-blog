import { flow, h2, list, note, p, path, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const integracionesArticles: DocArticle[] = [
  {
    slug: 'google-drive',
    category: 'integraciones',
    title: 'Google Drive y Workspace',
    summary: 'Conecta tu Drive para ver, crear, editar, subir, mover y compartir tus archivos de Google desde la Biblioteca, sin duplicarlos.',
    keywords: ['google drive', 'drive', 'workspace', 'docs', 'sheets', 'hojas de cálculo', 'hoja de cálculo', 'excel', 'spreadsheet', 'slides', 'forms', 'documentos', 'conectar', 'desconectar', 'picker', 'permisos', 'archivos', 'subir', 'compartir', 'exportar'],
    updated: UPDATED,
    related: ['biblioteca/explorar-la-biblioteca', 'biblioteca/archivos-pdf-y-notas-de-voz', 'privacidad/que-datos-guarda-zenth'],
    blocks: [
      p('La conexión con **Google Drive** es opcional. Le da a la Biblioteca la infraestructura documental: Drive guarda tus documentos, hojas, presentaciones, formularios, carpetas y archivos, y Zenth te los muestra y te deja trabajar con ellos. Las notas y lienzos nativos de Zenth siguen siendo independientes.'),

      h2('Conectar Drive'),
      steps(
        'Ve a **Ajustes › Integraciones › Google Drive y Workspace**, o pulsa **Conectar Drive** en la Biblioteca.',
        'Pulsa **Conectar Drive** y elige tu cuenta en la ventana de Google.',
        'Acepta el permiso. Zenth muestra el estado de la conexión: **Conectado**, **Requiere atención** (si hay que **Volver a conectar**) o **Sin conectar**.',
      ),
      path('Ajustes', 'Integraciones', 'Google Drive y Workspace'),
      note('**Qué acceso pide.** Para ofrecer un explorador completo, Zenth solicita el permiso de Drive que permite operar sobre los archivos a los que tu cuenta ya tiene acceso. Zenth solo hace algo cuando tú realizas la acción correspondiente. Puedes revocar el permiso desde tu cuenta de Google en cualquier momento.', 'Un permiso amplio, por una razón'),

      h2('Qué puedes hacer'),
      table(
        ['Acción', 'Cómo'],
        ['Explorar', 'Mi unidad, Destacados y Compartidos conmigo, desde la Biblioteca.'],
        ['Crear', '**Nuevo** › Documento, Hoja de cálculo, Presentación, Formulario o Carpeta.'],
        ['Subir', 'Con **Nuevo › Subir archivo** o arrastrando archivos. Un panel muestra el progreso.'],
        ['Elegir uno existente', 'Con **Desde Google Drive** (Google Picker).'],
        ['Grabar', '**Nota de voz** directamente en Drive.'],
        ['Editar dentro de Zenth', 'Documentos, hojas, presentaciones y formularios tienen un editor integrado para lo esencial.'],
        ['Mover, duplicar, destacar', 'Desde el menú de cada archivo. Modifican el archivo real.'],
        ['Compartir', 'Detalles, **Compartir** (personas y permisos de Drive), **Mover** y **Exportar** en un mismo diálogo.'],
        ['Exportar', 'Word (`.docx`), Excel (`.xlsx`), CSV (hoja activa), PowerPoint (`.pptx`), PDF y otros, según el tipo.'],
        ['Papelera', 'Enviar a la papelera de Drive, y restaurar desde la [Papelera de Zenth](/docs/cuenta/papelera).'],
      ),
      warn('Las acciones sobre archivos de Google **no son simulaciones**: editar, mover, compartir o enviar a la papelera afecta al archivo real de tu Drive. Revisa el archivo, el destino y el permiso antes de confirmar.', 'Son tus archivos reales'),

      h2('Editar dentro de Zenth o abrir en Google'),
      p('Los editores integrados cubren lo habitual (por ejemplo, en Documentos: estilos de párrafo, tipografía, tamaño, negrita, cursiva, subrayado, colores, listas, enlaces, alineación, interlineado y buscar y reemplazar; en Hojas: insertar y eliminar filas y columnas y dar formato). **No reproducen todas las funciones** de los editores nativos de Google. Cuando necesites colaboración simultánea completa, comentarios o maquetación especializada, usa **Abrir en Google**.'),
      p('Si un documento tiene una estructura avanzada que el editor integrado no puede mostrar bien, Zenth te lo dice y te ofrece abrirlo en Google.'),

      h2('Dónde vive cada cosa'),
      list(
        'El **contenido** está en tu Google Drive. Zenth lo transmite para mostrarlo o editarlo, pero **no conserva una segunda copia permanente**.',
        'Zenth guarda la **conexión cifrada** (las credenciales solo son accesibles desde la función segura del servidor) y referencias mínimas para recordar los elementos vinculados a tus tareas.',
      ),

      h2('Desconectar'),
      p('**Desconectar** revoca el permiso (cuando es posible) y **elimina de Zenth la conexión** y las referencias asociadas. **No borra ningún archivo** de tu Drive: siguen ahí hasta que tú los elimines. Tampoco se pierden por cerrar sesión.'),
      tip('Si Drive «requiere atención» o pierde la conexión, mira [Google se desconecta](/docs/ayuda/google-se-desconecta).'),
    ],
  },

  {
    slug: 'google-calendar',
    category: 'integraciones',
    title: 'Google Calendar en Agenda',
    summary: 'Trae los eventos de tus calendarios de Google a Agenda con un permiso de solo lectura: Zenth mira, nunca escribe.',
    keywords: ['google calendar', 'calendario', 'eventos', 'sincronizar', 'solo lectura', 'importar', 'llevar a pizarra', 'pausar', 'desconectar', 'calendarios visibles'],
    updated: UPDATED,
    related: ['agenda/vistas-y-planificacion', 'agenda/detalle-de-una-tarea', 'ayuda/google-se-desconecta'],
    blocks: [
      p('Con **Google Calendar** conectado, tus eventos aparecen en Agenda junto a tus tareas, no en una pestaña aparte. Es una integración de **solo lectura**: Zenth mira tu calendario y **nunca escribe en él**.'),

      h2('Conectar'),
      steps(
        'Ve a **Ajustes › Integraciones** y pulsa **Conectar Google Calendar**. También puede aparecer una invitación en Agenda («Conecta tu calendario»).',
        'Acepta el permiso de **solo lectura** en la ventana de Google.',
        'Elige qué calendarios quieres ver. Los que no marques no aparecen en ningún sitio.',
      ),
      path('Ajustes', 'Integraciones', 'Google Calendar'),

      h2('Cómo se comporta'),
      list(
        '**Se actualiza sola cada cinco minutos** mientras el permiso está activo. **Actualizar Agenda** fuerza una actualización en el momento.',
        '**Pausar** detiene esa actualización automática: no se traen cambios hasta que **Reanudes**.',
        'Los eventos importados se muestran con la etiqueta «Importado desde Google Calendar». Puedes activar o desactivar cada calendario en **Calendarios visibles en Agenda**.',
        'La conexión es una autorización temporal de Google: a veces caduca y hay que **Reactivar sincronización**.',
      ),

      h2('Llevar eventos a una pizarra'),
      p('Ningún evento entra a una pizarra por su cuenta. Si quieres que los de un calendario aparezcan como tarjetas, usa **Llevar eventos a una pizarra**, elige el calendario y la pizarra de destino. Es una acción explícita y reversible: **Quitar de la pizarra** los retira.'),

      h2('Desconectar'),
      p('**Desconectar** detiene la sincronización futura. **No elimina automáticamente** los eventos que ya se importaron a tu Agenda.'),
      note('Los detalles técnicos: el token de acceso permanece en memoria y caduca; la lista de calendarios y las preferencias se guardan localmente en tu navegador. Ver la [Política de privacidad](/privacy).'),
    ],
  },

  {
    slug: 'zen-asistente',
    category: 'integraciones',
    title: 'Zen, el asistente',
    summary: 'IA de Google solo donde ahorra trabajo real: rellenar una tarea desde una frase, sugerir el mejor momento y dividirla en pasos. Nunca actúa sin que se lo pidas.',
    keywords: ['zen', 'ia', 'inteligencia artificial', 'gemini', 'asistente', 'auto agendar', 'sugerir pasos', 'pedir a zen', 'lenguaje natural', 'micro pasos'],
    updated: UPDATED,
    related: ['agenda/crear-tareas-eventos-y-reuniones', 'privacidad/que-datos-guarda-zenth'],
    blocks: [
      p('**Zen** es el asistente de Zenth. Usa **Google Gemini** para quitarte campos por rellenar, no para tomar decisiones por ti. Solo actúa cuando pulsas una acción, y solo en el editor de tareas.'),

      h2('Qué puede hacer'),
      table(
        ['Acción', 'Qué hace'],
        ['Pedir a Zen', 'Convierte una frase en una tarea. «Cena con Ana el viernes a las 9pm» rellena título, fecha, hora, prioridad y un icono.'],
        ['Auto-agendar', 'Propone la mejor fecha y hora para una tarea, a partir de su texto y de la fecha actual. Si menciona «mañana» o «el viernes», lo tiene en cuenta.'],
        ['Sugerir pasos', 'Parte una tarea grande en tres a cinco micro-pasos concretos, empezando cada uno con un verbo de acción.'],
      ),
      steps(
        'Abre el editor de una tarea.',
        'Pulsa **Pedir a Zen** y escribe la frase, o usa **Auto-agendar** o **Sugerir pasos** sobre la tarea que ya escribiste.',
        'Revisa lo que propone y cámbialo si quieres antes de guardar.',
      ),
      tip('Zen puede equivocarse: **revisa** fechas, prioridades y pasos antes de guardar. No presta asesoramiento médico, legal, financiero ni profesional.'),

      h2('Qué recibe Zen'),
      list(
        'Solo el **texto de esa solicitud** (la frase o el título de la tarea) y la fecha de hoy, para interpretar «mañana» o «el viernes».',
        '**No analiza toda tu cuenta** en segundo plano, ni lee tus notas, tus pizarras o tus archivos.',
        'La solicitud pasa por una función segura del servidor de Zenth, que la envía a Google Gemini y devuelve la respuesta.',
      ),
      note('Hay un límite de ritmo: si haces muchas solicitudes seguidas, Zenth te pide que esperes un momento.'),
      p('Más detalle en la [Política de privacidad](/privacy).'),
    ],
  },

  {
    slug: 'zenth-mcp',
    category: 'integraciones',
    title: 'Zenth MCP (próximamente)',
    summary: 'Conecta Claude o Codex a tu cuenta para consultar y organizar tu agenda, tus pizarras y tu Biblioteca desde la conversación. En desarrollo: aún no está abierto a todas las cuentas.',
    keywords: ['mcp', 'model context protocol', 'claude', 'claude code', 'codex', 'chatgpt', 'openai', 'anthropic', 'ia', 'inteligencia artificial', 'asistente', 'conector', 'conectar', 'aplicaciones conectadas', 'oauth', 'permisos', 'revocar', 'desconectar'],
    updated: '2026-09-26',
    related: ['integraciones/zen-asistente', 'cuenta/papelera', 'privacidad/que-datos-guarda-zenth'],
    blocks: [
      warn('Zenth MCP **está en desarrollo**: lo estamos probando y todavía no está disponible para todas las cuentas. Esta página cuenta cómo va a funcionar; cuando se abra, aquí estarán los pasos para conectarlo.', 'En desarrollo'),
      p('**MCP** (Model Context Protocol) es un estándar abierto con el que los asistentes de IA se conectan a otras aplicaciones. Con Zenth MCP, **Claude** (en la web, la app de escritorio y Claude Code) y **Codex** pueden consultar y actualizar tu espacio mientras conversas con ellos: le pides algo con tus palabras y el asistente lo hace en tu cuenta.'),

      h2('Cómo funciona un pedido'),
      p('El asistente no entra a la app ni ve tu pantalla: usa un conjunto cerrado de herramientas de Zenth, y cada una pasa por los mismos controles que usa la app.'),
      flow(
        'Un pedido de principio a fin. Si algo no está permitido, el pedido se detiene en el paso de la base de datos y no cambia nada.',
        { icon: 'person', label: 'Tú', detail: '«Anótame llamar al banco mañana a las 9:30».' },
        { icon: 'assistant', label: 'Tu asistente', detail: 'Elige la herramienta: crear una tarea.' },
        { icon: 'zenth', label: 'Zenth MCP', detail: 'Comprueba que la conexión es tuya y sigue activa.' },
        { icon: 'database', label: 'Base de datos', detail: 'Aplica las mismas reglas que la app.' },
        { icon: 'agenda', label: 'Tu agenda', detail: 'La tarea aparece en Zenth y el asistente te lo confirma.' },
      ),

      h2('Qué puede hacer un asistente conectado'),
      table(
        ['Área', 'Qué le puedes pedir'],
        ['Agenda', 'Ver tu día o varios días seguidos, con tareas, eventos y reuniones. Buscar pendientes y atrasadas.'],
        ['Tareas', 'Crear tareas (también repetitivas, con fecha de fin), cambiar título, fecha, hora, prioridad o etiquetas, sumar notas al final, activar el aviso por correo, completarlas o reabrirlas.'],
        ['Papelera', 'Mandar una tarea a la papelera, ver lo que hay y restaurarla.'],
        ['Pizarras', 'Ver tus pizarras y sus listas, crear tarjetas y moverlas de lista, en las pizarras donde puedes editar.'],
        ['Biblioteca', 'Buscar y leer tus notas, crear un documento nuevo (en una carpeta, si quieres) y sumar texto al final de uno existente.'],
        ['Lienzos', 'Crear un lienzo con un diagrama (cajas, decisiones y flechas), sumarle partes y leer lo que tiene.'],
        ['Progreso', 'Consultar tu nivel, tu racha y un resumen de lo que hiciste.'],
      ),
      p('En una tarea repetitiva, los cambios afectan solo a esa ocurrencia. Para cambiar la serie entera, usa la app.'),

      h2('Lo que un asistente no puede hacer'),
      list(
        '**Borrar de forma definitiva.** Como mucho manda una tarea a la papelera, y tú la recuperas cuando quieras. Ver [Papelera](/docs/cuenta/papelera).',
        '**Compartir o cambiar permisos.** No invita personas a tus pizarras ni a tus notas, no crea enlaces públicos y no cambia roles.',
        '**Reemplazar lo que escribiste.** En notas y tareas solo **agrega** al final; nunca sobrescribe el contenido.',
        '**Editar eventos de Google Calendar.** Los eventos importados se cambian en Google, y Zenth los sincroniza solo.',
      ),
      note('Borrar y compartir **no dependen del asistente**: la base de datos de Zenth rechaza esas acciones cuando llegan desde una aplicación conectada, aunque alguien lo intente por fuera de las herramientas de Zenth MCP. Tú, desde la app, sigues pudiendo hacer todo lo de siempre.', 'Protegido en el servidor'),

      h2('Cómo se conecta'),
      steps(
        'En tu asistente, agrega Zenth como conector o servidor MCP y elige **Conectar**.',
        'Se abre una pantalla de Zenth con la aplicación que pide acceso, a dónde vuelve, los permisos que pide y la cuenta con la que vas a autorizarla. Si usas varias cuentas, elige la correcta.',
        'Pulsa **Permitir**. Vuelves a tu asistente y la conexión queda lista; se renueva sola.',
      ),
      tip('Nunca tienes que copiar tu contraseña ni una clave en el asistente. Si alguien te pide un token de Zenth para conectarlo, no lo compartas.'),

      h2('Ver y desconectar aplicaciones'),
      path('Ajustes', 'Integraciones', 'Aplicaciones conectadas'),
      p('Ahí ves cada asistente que autorizaste y qué permisos tiene. **Desconectar** le quita el acceso. Aunque el asistente siga mostrando Zenth en su lista, ya no puede entrar: para volver a usarlo tendrá que pedirte permiso de nuevo.'),

      h2('Límites mientras está en desarrollo'),
      list(
        'Las tareas completadas desde un asistente **todavía no suman XP**.',
        'Si tienes una nota o un lienzo abiertos mientras el asistente les agrega algo, lo nuevo aparece **al guardar o al volver a abrirlos**.',
        'Un diagrama nuevo se dibuja en el lienzo **la primera vez que lo abres** en Zenth.',
      ),
    ],
  },
];

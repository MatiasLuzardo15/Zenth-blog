import { h2, list, note, p, path, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const integracionesArticles: DocArticle[] = [
  {
    slug: 'google-drive',
    category: 'integraciones',
    title: 'Google Drive y Workspace',
    summary: 'Conecta tu Drive para ver, crear, editar, subir, mover y compartir tus archivos de Google desde la Biblioteca, sin duplicarlos.',
    keywords: ['google drive', 'drive', 'workspace', 'docs', 'sheets', 'slides', 'forms', 'documentos', 'conectar', 'desconectar', 'picker', 'permisos', 'archivos', 'subir', 'compartir', 'exportar'],
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
];

import { h2, keys, list, note, p, path, steps, table, tip } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const enfoqueArticles: DocArticle[] = [
  {
    slug: 'usar-enfoque',
    category: 'enfoque',
    title: 'Usar Enfoque: temporizador, descansos y notas rápidas',
    summary: 'Un temporizador global que sigue corriendo mientras navegas: elige duración o cronómetro, vincula una tarea, descansa y apunta ideas sin salir.',
    keywords: ['enfoque', 'focus', 'temporizador', 'pomodoro', 'cronómetro', 'sesión', 'descanso', 'concentración', 'misión', 'nota rápida', 'pausa', 'tarea'],
    updated: UPDATED,
    related: ['enfoque/sonidos-y-musica', 'enfoque/historial-objetivo-y-constancia', 'agenda/detalle-de-una-tarea'],
    blocks: [
      p('**Enfoque** no es una sección más: es un temporizador que se abre encima de lo que estés haciendo y **sigue corriendo mientras te mueves por Zenth**. Sirve para trabajar en una sola cosa durante un rato y saber cuánto tiempo le dedicaste de verdad.'),

      h2('Abrir Enfoque'),
      list(
        'Pulsa el icono de **Enfoque** en la cabecera (junto a tu racha), o usa `Alt` + `F`. En el móvil, está en la barra inferior.',
        'Desde una tarea, con **Iniciar focus**: la sesión nace ya vinculada a ella.',
      ),
      p('Abrirlo no cambia tu sección actual: puedes cerrarlo y el temporizador continúa.'),

      h2('Empezar una sesión'),
      steps(
        'Elige la duración: **15, 25, 45 o 60 minutos**, o ajústala a tu medida escribiendo los minutos o con los botones de sumar y restar un minuto.',
        'Si no quieres un límite, usa el modo **Sin duración**: funciona como cronómetro.',
        'Opcionalmente, vincula una **tarea** para registrar cuánto tiempo le dedicaste.',
        'Pulsa **Enfocar**. El estado pasa a «Enfocando». **Seguir** reanuda una sesión en pausa; **Detener** la termina y guarda el tiempo.',
      ),
      keys(
        [['Alt', 'F'], 'Abrir o cerrar el panel de Enfoque'],
        [['Espacio'], 'Pausar o reanudar la sesión'],
        [['Ctrl', 'Enter'], 'Guardar la nota rápida'],
      ),
      note('Una sesión de menos de **30 segundos** se considera demasiado corta y no se registra. La sesión en curso sobrevive a la navegación, y Zenth no te dejará cambiar de cuenta a mitad sin avisarte.'),

      h2('Cuando termina'),
      p('Al acabar (o detener) una sesión ves un resumen: **Sesión completada** o **Sesión guardada**, cuánto tiempo estuviste **Enfocado** frente a lo **Previsto**, y qué quieres hacer después:'),
      list(
        '**Seguir enfocando:** con la misma tarea o «otra igual», con la misma duración u otra que escribas.',
        '**Descansar:** 5, 10 o 15 minutos, o uno a tu medida.',
        '**Marcar completada:** si la sesión estaba vinculada a una tarea, la cierras desde ahí mismo.',
      ),

      h2('Contexto y notas sin salir'),
      list(
        '**Contexto de la tarea:** si hay una tarea vinculada, ves su descripción, sus subtareas y sus enlaces (por ejemplo, el de la reunión) sin abandonar el temporizador.',
        '**Nota rápida:** captura una idea sin cortar la concentración. Elige si se guarda en **la sesión** o en **la tarea**. No abre ningún editor: lo que interrumpe una sesión no es escribir la idea, es tener que buscar dónde escribirla.',
      ),

      h2('En una llamada'),
      p('Si estás en una llamada, el sonido de Enfoque se **pausa mientras dure** y vuelve solo al salir. Ver [Sonidos y música](/docs/enfoque/sonidos-y-musica).'),
    ],
  },

  {
    slug: 'sonidos-y-musica',
    category: 'enfoque',
    title: 'Sonidos, mezclas y música para enfocarte',
    summary: 'Mezcla lluvia, bosque, café u olas, guarda tus combinaciones, reproduce música de Zenth o guarda enlaces a tus listas de Spotify, Apple Music o YouTube Music.',
    keywords: ['sonido', 'ambiente', 'lluvia', 'bosque', 'café', 'olas', 'chimenea', 'ruido blanco', 'ruido marrón', 'música', 'mezcla', 'playlist', 'spotify', 'volumen', 'ambiental'],
    updated: UPDATED,
    related: ['enfoque/usar-enfoque', 'cuenta/ajustes-generales'],
    blocks: [
      p('El reproductor de Enfoque acompaña la sesión con sonido. Tiene tres modos: **Silencio**, **Ambiente** y **Música**, y su volumen es independiente del resto de la aplicación.'),

      h2('Sonidos ambientales'),
      p('Elige uno o **mezcla varios a la vez**, cada uno con su propio volumen:'),
      list(
        '**Lluvia, Bosque, Café, Olas y Chimenea.**',
        '**Ruido blanco y ruido marrón**, para tapar el ruido del entorno.',
      ),
      p('Puedes **guardar una mezcla** con un nombre («Mezclas») para recuperarla con un toque la próxima vez.'),

      h2('Música'),
      list(
        '**Música de Zenth:** pistas instrumentales incluidas en la aplicación (piano, ambientales y arpegios), de dominio público (CC0).',
        '**Tus servicios de música:** pega el enlace de una playlist de **Spotify, Apple Music, YouTube Music** u otra dirección web, y Zenth lo guarda para abrirla con un toque.',
      ),

      h2('¿Cuándo suena?'),
      p('Decide cuándo se reproduce el sonido, en **Ajustes › Enfoque** o en el propio reproductor:'),
      table(
        ['Modo', 'Cómo funciona'],
        ['A mano', 'Lo enciendes y lo apagas tú.'],
        ['Con la sesión', 'Empieza con la sesión y sigue sonando en pausas y descansos.'],
        ['Solo enfocando', 'Solo mientras el reloj corre.'],
      ),

      h2('Otras cosas que debes saber'),
      list(
        'Al **entrar a una llamada**, el sonido se pausa («En pausa mientras dure la llamada») y vuelve al salir.',
        'El ajuste **Sonidos de la interfaz** (Ajustes › Experiencia de uso) es independiente: no afecta a la música ni a los ambientes del reproductor.',
        'El **sonido de finalización** de una sesión tiene su propio volumen y se activa por separado. Ver [Historial, objetivo y constancia](/docs/enfoque/historial-objetivo-y-constancia).',
      ),
    ],
  },

  {
    slug: 'historial-objetivo-y-constancia',
    category: 'enfoque',
    title: 'Historial, objetivo diario y constancia',
    summary: 'Revisa y corrige tus sesiones, fija un objetivo diario, entiende cómo se cuenta la constancia y configura los avisos al terminar.',
    keywords: ['historial', 'sesiones', 'objetivo diario', 'meta', 'constancia', 'racha de enfoque', 'estadísticas de enfoque', 'corregir', 'avisos', 'notificación', 'silenciar', 'no molestar'],
    updated: UPDATED,
    related: ['enfoque/usar-enfoque', 'progreso/estadisticas', 'progreso/xp-niveles-y-logros'],
    blocks: [
      h2('Historial de sesiones'),
      p('En el panel de Enfoque, el icono **Historial** lista tus sesiones (las de hoy, o las de un período que elijas). Cada una indica la tarea vinculada o «Sesión libre», si fue con cronómetro, y si se **detuvo antes** de la duración prevista o llegó a **completa**.'),
      list(
        '**Corrige la duración** de una sesión (mínimo un minuto) si te olvidaste de detenerla.',
        '**Cambia la tarea** vinculada, o déjala **sin tarea**.',
        '**Elimínala** si fue un error.',
      ),

      h2('Estadísticas de enfoque'),
      p('El icono **Estadísticas** del panel resume tu tiempo:'),
      list(
        'Media por día con enfoque, este mes.',
        'Sesiones registradas, día con más tiempo, sesión más larga.',
        'Mejor constancia y días con el objetivo cumplido.',
        '**Dónde se fue el tiempo:** el reparto por tarea.',
      ),
      p('Para una vista más amplia (junto con tareas, presencia en la app y ánimo), mira [Estadísticas](/docs/progreso/estadisticas).'),

      h2('Objetivo diario'),
      p('Cuánto tiempo quieres enfocar cada día: **30, 60 o 90 minutos**, un valor propio, o ninguno. Se elige en **Ajustes › Enfoque › Objetivo diario de enfoque**.'),
      path('Ajustes', 'Enfoque', 'Objetivo diario de enfoque'),
      p('Cambiarlo no modifica las sesiones ya guardadas ni la constancia.'),

      h2('Constancia'),
      p('La **constancia** cuenta los días en que hiciste **al menos una sesión** de enfoque. La tarjeta de constancia muestra los últimos siete días.'),

      h2('Avisos al terminar una sesión'),
      p('En Ajustes › Enfoque hay tres avisos independientes:'),
      table(
        ['Aviso', 'Qué hace'],
        ['Aviso dentro de Zenth', 'Un mensaje breve, aunque estés en otra pantalla.'],
        ['Sonido de finalización', 'Una campana corta con su propio volumen, independiente del ambiente y de la música.'],
        ['Notificación del sistema', 'Te avisa aunque Zenth esté en segundo plano o minimizado. El permiso del navegador solo se pide al activar el último aviso.'],
      ),

      h2('Silenciar avisos mientras enfocas'),
      p('**Silenciar avisos no urgentes** hace que los avisos de progreso y logros esperen al final de la sesión y aparezcan entonces. Los errores llegan igual.'),
      tip('Si trabajas en equipo, mira también qué ve tu equipo de tu Enfoque: [Enfoque y equipo](/docs/enfoque/enfoque-y-equipo).'),
    ],
  },

  {
    slug: 'enfoque-y-equipo',
    category: 'enfoque',
    title: 'Enfoque y equipo: qué ven tus compañeros',
    summary: 'Si lo activas, las pizarras compartidas muestran hasta qué hora estás enfocado: nunca la tarea ni el contenido.',
    keywords: ['presencia', 'estado de enfoque', 'equipo', 'compartido', 'privacidad', 'enfocada hasta', 'interrumpir', 'no molestar'],
    updated: UPDATED,
    related: ['pizarras/menu-de-colaboracion', 'privacidad/quien-ve-que'],
    blocks: [
      p('Enfoque puede avisar a tus compañeros de que estás concentrado, para que no te interrumpan sin necesidad. Es **opcional** y muy limitado por diseño.'),

      h2('Qué se comparte'),
      list(
        'Solo **hasta qué hora** estás enfocado. Nada más.',
        '**Nunca** el nombre de la tarea, el contenido ni el tipo de trabajo.',
        'El estado **termina solo** cuando acaba la sesión.',
        'Únicamente lo ven los miembros de tus pizarras compartidas.',
      ),
      p('En el menú de colaboración de la pizarra, esto se ve como «1 persona enfocada · Enfocada hasta las 15:30» (o, con varias, cuándo termina la primera).'),

      h2('Cómo activarlo o desactivarlo'),
      path('Ajustes', 'Enfoque', 'Mostrar mi estado al equipo'),
      p('Es un interruptor: «En las pizarras compartidas verán hasta qué hora estás enfocado. Nunca el nombre de la tarea».'),
    ],
  },
];

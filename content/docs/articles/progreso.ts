import { h2, list, note, p, path, steps, table, tip } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const progresoArticles: DocArticle[] = [
  {
    slug: 'xp-niveles-y-logros',
    category: 'progreso',
    title: 'XP, niveles, constelaciones y logros',
    summary: 'Cómo suman las tareas y el enfoque, qué exige cada uno de los 20 niveles, cómo se cuenta la racha y qué logros existen.',
    keywords: ['xp', 'experiencia', 'niveles', 'constelaciones', 'logros', 'racha', 'progreso', 'medallas', 'gran objetivo', 'ruta', 'recorrido', 'colección', 'mi ritmo'],
    updated: UPDATED,
    related: ['progreso/registro-de-animo', 'progreso/estadisticas', 'agenda/crear-tareas-eventos-y-reuniones'],
    blocks: [
      p('**Progreso** (`Alt` + `5`, antes «Mi ritmo») reúne lo que has construido: tus puntos de experiencia, tu nivel, tu racha y tus logros. No es una carrera: es una forma de ver, sin presión, que lo pequeño se acumula.'),

      h2('Cómo se gana XP'),
      table(
        ['Qué haces', 'Qué obtienes'],
        ['Completar una tarea', '**10 XP**.'],
        ['Completar una tarea marcada como **Gran objetivo**', '**50 XP**.'],
        ['Una sesión de Enfoque', 'Suma **minutos de enfoque** acumulados (no XP directo), que cuentan para subir de nivel y para los logros.'],
      ),
      p('Marca como **Gran objetivo** lo que de verdad importa: calidad sobre cantidad. Se distingue en la lista y vale cinco veces más.'),

      h2('La racha'),
      p('Tu **racha** cuenta los **días seguidos en los que usas Zenth**: basta con entrar y usarlo ese día, no hace falta cerrar una tarea. Si dejas pasar un día sin entrar, la racha actual vuelve a cero, pero Zenth conserva tu **mejor racha** histórica. Esa mejor racha es la que cuenta para subir de nivel.'),

      h2('Los 20 niveles'),
      p('Cada nivel es una constelación. Para alcanzar uno tienes que cumplir **cuatro condiciones a la vez**: XP, mejor racha, tareas completadas y minutos de enfoque acumulados.'),
      table(
        ['Nivel', 'Constelación', 'XP', 'Mejor racha (días)', 'Tareas', 'Enfoque (min)'],
        ['1', 'Triángulo', '0', '0', '0', '0'],
        ['2', 'Lira', '250', '3', '15', '75'],
        ['3', 'Casiopea', '750', '7', '40', '250'],
        ['4', 'Cruz del Sur', '1.750', '14', '75', '500'],
        ['5', 'Cisne', '3.500', '30', '120', '600'],
        ['6', 'Osa Menor', '6.000', '50', '200', '1.500'],
        ['7', 'Osa Mayor', '10.000', '75', '300', '2.400'],
        ['8', 'Orión', '15.000', '100', '450', '3.600'],
        ['9', 'Escorpio', '22.000', '180', '600', '4.800'],
        ['10', 'Corona Boreal', '30.000', '365', '800', '6.000'],
        ['11', 'Cochero', '38.000', '450', '1.000', '7.500'],
        ['12', 'Boyero', '47.000', '550', '1.250', '9.000'],
        ['13', 'Andrómeda', '57.000', '660', '1.500', '11.000'],
        ['14', 'Perseo', '69.000', '780', '1.800', '13.000'],
        ['15', 'Géminis', '83.000', '912', '2.200', '15.500'],
        ['16', 'Tauro', '99.000', '1.050', '2.600', '18.000'],
        ['17', 'León', '117.000', '1.200', '3.100', '21.000'],
        ['18', 'Pegaso', '138.000', '1.370', '3.700', '24.500'],
        ['19', 'Hércules', '162.000', '1.580', '4.400', '28.500'],
        ['20', 'Centauro', '190.000', '1.825', '5.200', '33.000'],
      ),
      list(
        'Los **niveles son permanentes**: si un día se rompe la racha, conservas el nivel alcanzado.',
        'La **Ruta de progreso** recorre las 20 constelaciones y te muestra exactamente qué te falta para la siguiente, en cada una de las cuatro condiciones.',
        'Los últimos niveles están pensados para años de uso, no para semanas.',
      ),

      h2('Los 25 logros'),
      p('Los logros marcan saltos reales de hábito y se reparten en cuatro grupos. En la **Colección** los ves todos, con su avance visible aunque todavía no los hayas conseguido:'),
      table(
        ['Grupo', 'Mide', 'Logros'],
        ['Ejecución', 'Tareas que llegaste a cerrar.', 'Primer paso, Día denso, Cien tareas, Quinientas, Mil tareas, Cinco mil.'],
        ['Constancia', 'Días seguidos usando la app sin cortar.', 'Siete seguidos, Mes sostenido, Cien días, Medio año, Año entero, Dos años, Cinco años.'],
        ['Enfoque', 'Minutos de trabajo profundo acumulados.', 'Primera sesión, Diez horas, Cincuenta horas, Cien horas, Doscientas horas, Quinientas horas.'],
        ['Recorrido', 'Niveles alcanzados y XP.', 'Estructura, Corona, Mitad del cielo, Centauro, Diez mil, Cien mil.'],
      ),
      p('Cada logro tiene una dificultad de 1 a 4 (**Primeros pasos, Constante, Difícil, De años**), y cuanto más alta, más lados tiene su medalla. Al conseguir un logro o subir de nivel, Zenth te lo celebra con un aviso.'),
      note('Si activas **Silenciar avisos no urgentes** en Ajustes › Enfoque, los avisos de logros y de nivel esperan al final de tu sesión de Enfoque.'),
    ],
  },

  {
    slug: 'registro-de-animo',
    category: 'progreso',
    title: 'Actividad y ánimo: registra cómo estás',
    summary: 'Anota cómo te sientes con un toque, mira tu mes y tu año en colores, y lee tu ritmo de actividad junto a tu estado de ánimo.',
    keywords: ['ánimo', 'mood', 'emociones', 'bienestar', 'calendario de ánimo', 'año en píxeles', 'balance mensual', 'recordatorio de ánimo', 'actividad', 'ritmo', 'estado'],
    updated: UPDATED,
    related: ['progreso/estadisticas', 'cuenta/notificaciones', 'progreso/xp-niveles-y-logros'],
    blocks: [
      p('**Actividad y ánimo** (`Alt` + `6`) es la parte que casi ninguna app de tareas quiere mirar: cómo estabas mientras hacías todo eso. Su subtítulo lo resume: «Tu pulso del mes: lo que hiciste y cómo te sentiste».'),

      h2('Registrar tu ánimo'),
      steps(
        'Abre **Actividad y ánimo**, o responde al **recordatorio diario** si lo tienes activado.',
        'Elige el día en el **Calendario de ánimo**.',
        'Marca un estado: **excelente, bien, neutral, bajo o mal**.',
      ),
      list(
        'Puedes registrar un día **pasado**, pero no uno que **todavía no llegó**.',
        'Es un registro personal y voluntario: nadie te pone nota, y nadie más lo ve.',
      ),
      tip('No busques el registro perfecto: uno cada tanto ya deja ver patrones. Si llevas dos semanas en tonos bajos, la respuesta probablemente no sea apretar más.'),

      h2('Lo que ves'),
      table(
        ['Elemento', 'Qué muestra'],
        ['Ritmo de actividad', 'Una comparación de catorce días (con botones para ir a períodos anteriores) de lo que hiciste.'],
        ['Calendario de ánimo', 'El mes completo, con un color por día. Cambia de mes con las flechas.'],
        ['Año en píxeles', 'Doce meses de registros en un solo mosaico, donde los patrones se ven de golpe.'],
        ['Balance mensual', 'El **estado predominante** del mes, los **días registrados**, la distribución y una lectura breve.'],
        ['Historial de meses', 'Los balances de meses anteriores, cuando hay datos suficientes.'],
      ),

      h2('El recordatorio diario'),
      p('Una vez al día, Zenth puede preguntarte cómo te fue. Puedes activarlo o desactivarlo y elegir **a qué hora** aparece en **Ajustes › Notificaciones**.'),
      path('Ajustes', 'Notificaciones', 'Recordatorio de ánimo'),
      p('También puedes registrar tu ánimo desde esta sección sin necesidad del recordatorio.'),

      h2('Para qué sirve, y para qué no'),
      p('Nombrar cómo estás ayuda a **observar** tus días, no a controlarlos. Es una herramienta de autoconocimiento, no un diagnóstico ni un tratamiento, y no sustituye el apoyo profesional.'),
    ],
  },

  {
    slug: 'estadisticas',
    category: 'progreso',
    title: 'Estadísticas: tu tiempo en Zenth',
    summary: 'Cuánto tiempo pasas en cada sección, cómo va tu enfoque y tus tareas, comparado con el período anterior y exportable a Excel, CSV o PDF.',
    keywords: ['estadísticas', 'tiempo en la app', 'tiempo de pantalla', 'analítica', 'comparar', 'exportar', 'excel', 'csv', 'pdf', 'presencia', 'insights', 'informe', 'gráficos'],
    updated: UPDATED,
    related: ['enfoque/historial-objetivo-y-constancia', 'privacidad/que-datos-guarda-zenth', 'progreso/registro-de-animo'],
    blocks: [
      p('**Estadísticas** (`Alt` + `7`) responde a una pregunta: «Cuánto tiempo pasas en Zenth, y qué haces con él». Está en el menú de tu avatar. No sustituye al temporizador de Enfoque: **mide por separado la presencia en la app y las sesiones de trabajo** para no mezclar un reloj de trabajo con tiempo delante de la pantalla.'),

      h2('Elegir el período'),
      p('Arriba eliges qué mirar: **Hoy, Semana, Mes** o **Rango** (7, 14 o 30 días, o unas fechas concretas). Zenth puede mostrar hasta los últimos **180 días**.'),
      p('El selector **Comparar con** contrasta el período con el **anterior** (ayer, la semana pasada, el mes pasado) u **otro rango** que elijas: ves cuánto más o menos que antes.'),

      h2('Qué contiene'),
      table(
        ['Módulo', 'Qué te cuenta'],
        ['Resumen y comparación', 'Días con actividad, mejor día (o el pico del día) y cuánto cambió respecto al período de comparación.'],
        ['A qué hora', 'En qué franjas del día pasas más tiempo.'],
        ['Dónde', 'El reparto entre secciones según la que tenías abierta: Agenda, Pizarras, Biblioteca, Enfoque, Reuniones, Progreso, Ánimo y Estadísticas.'],
        ['Calidad de enfoque', 'Media por sesión, sesiones terminadas frente a detenidas antes de tiempo, tiempo previsto y objetivo diario.'],
        ['Tareas', 'Cerradas en el período, creadas, siguen abiertas, atrasadas y «Importantes cerradas» (grandes objetivos), por tipo y por lista.'],
        ['Momentos', 'Tu presencia en la app por Mañana, Tarde y Noche, y las tareas cerradas en cada momento.'],
        ['Pizarras y notas', 'Notas creadas, notas editadas y tu racha.'],
        ['Sesiones', 'El detalle de tus sesiones de enfoque.'],
        ['Ánimo', 'Tu estado en el período (y si hoy todavía no está anotado).'],
      ),

      h2('Cómo se mide el tiempo en la app'),
      p('Zenth cuenta **presencia con la pestaña visible**. Para cada tramo guarda el día, la hora de inicio y de fin, la sección y, dentro de Pizarras, la pizarra que tenías abierta. **Solo tú puedes ver estos datos**: ninguna otra persona, ni siquiera los miembros de tus pizarras, accede a ellos.'),
      note('Es información tuya, para ti. No hay analítica de terceros ni publicidad. Los detalles están en la [Política de privacidad](/privacy) y en [Qué datos guarda Zenth](/docs/privacidad/que-datos-guarda-zenth).'),

      h2('Exportar'),
      p('El botón de **exportar** descarga el informe del período en tres formatos:'),
      table(
        ['Formato', 'Para qué'],
        ['Excel (`.xlsx`)', 'Analizarlo con tus propias fórmulas y gráficos.'],
        ['CSV', 'Importarlo a otras herramientas.'],
        ['PDF', 'Guardarlo o compartirlo tal cual.'],
      ),
      path('Estadísticas', 'Exportar'),
    ],
  },
];

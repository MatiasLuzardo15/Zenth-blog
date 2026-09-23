import { h2, keys, note, p, table, tip } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-09-23';

export const atajosArticles: DocArticle[] = [
  {
    slug: 'atajos-de-la-aplicacion',
    category: 'atajos',
    title: 'Atajos de la aplicación',
    summary: 'Buscar, cambiar de sección, crear, moverte por Agenda, controlar Enfoque y las llamadas: todos los atajos globales de Zenth.',
    keywords: ['atajos', 'teclado', 'shortcuts', 'teclas', 'alt', 'ctrl', 'comandos', 'navegación', 'buscar', 'rápido', 'hotkeys', 'mac', 'cmd'],
    updated: UPDATED,
    related: ['atajos/atajos-del-editor-de-notas', 'primeros-pasos/busqueda-y-notificaciones', 'reuniones/durante-una-llamada'],
    blocks: [
      p('Puedes navegar por Zenth sin apartar las manos del teclado. Las teclas se muestran para tu sistema: en Windows y Linux verás `Ctrl` y `Alt`; en macOS, `⌘` y `⌥`.'),
      tip('Pulsa `Ctrl` + `Shift` + `/` (`⌘` + `⇧` + `/` en Mac) en cualquier momento para abrir el **catálogo de atajos** dentro de la propia aplicación. También está en el menú de tu avatar, con el nombre «Atajos de teclado».'),

      h2('General'),
      keys(
        [['Ctrl', 'K'], 'Buscar en todo Zenth'],
        [['Alt', ','], 'Ajustes'],
        [['Ctrl', 'Shift', '/'], 'Atajos de teclado'],
        [['Alt', 'T'], 'Cambiar entre tema claro y oscuro'],
        [['Alt', 'M'], 'Mostrar u ocultar la navegación'],
        [['Alt', 'N'], 'Notificaciones'],
        [['Alt', 'P'], 'Papelera'],
        [['C'], 'Nueva tarea (en Agenda y Pizarras) o nueva nota (en Biblioteca)'],
      ),

      h2('Navegación'),
      keys(
        [['Alt', '1'], 'Agenda'],
        [['Alt', '2'], 'Pizarras'],
        [['Alt', '3'], 'Biblioteca'],
        [['Alt', '4'], 'Reuniones'],
        [['Alt', '5'], 'Progreso'],
        [['Alt', '6'], 'Actividad y ánimo'],
        [['Alt', '7'], 'Estadísticas'],
      ),
      p('Estos atajos usan la posición de la tecla, no el carácter que produce, así que funcionan aunque tu distribución de teclado no genere un «1» con `Alt` + `1`. Volver a pulsar `Alt` + `1` estando en Agenda te reenfoca en el bloque actual.'),

      h2('Agenda'),
      keys(
        [['D'], 'Vista de día'],
        [['S'], 'Vista de semana'],
        [['M'], 'Vista de mes'],
        [['T'], 'Ir a hoy'],
        [['←'], 'Período anterior'],
        [['→'], 'Período siguiente'],
      ),

      h2('Enfoque'),
      keys(
        [['Alt', 'F'], 'Abrir o cerrar el panel de Enfoque'],
        [['Espacio'], 'Pausar o reanudar la sesión'],
        [['Ctrl', 'Enter'], 'Guardar la nota rápida'],
      ),

      h2('Reuniones y llamadas'),
      p('Solo funcionan mientras tienes una llamada en curso o una llamada entrante:'),
      keys(
        [['M'], 'Silenciar o activar el micrófono'],
        [['C'], 'Abrir o cerrar el chat'],
        [['Q'], 'Abandonar la llamada o la sala'],
        [['Enter'], 'Aceptar una llamada entrante'],
        [['Esc'], 'Rechazar una llamada entrante'],
      ),

      h2('Buscador'),
      keys(
        [['↑'], 'Resultado anterior'],
        [['↓'], 'Resultado siguiente'],
        [['Enter'], 'Abrir el resultado'],
        [['Esc'], 'Cerrar el buscador'],
      ),

      h2('Cuándo se pausan los atajos'),
      note('Los atajos de **una sola letra** (como `C`, `D` o `M`) se pausan mientras escribes en un campo o tienes un diálogo abierto, para que nunca interfieran. `Esc` cierra los paneles y diálogos que no necesitan confirmación. Para recorrer los controles usa `Tab` y `Shift` + `Tab`; `Enter` o `Espacio` activan el control seleccionado.'),
      table(
        ['Otros atajos útiles', 'Dónde'],
        ['`Ctrl` + `Shift` + `F`, `Ctrl` + `F`, `Ctrl` + `S`…', 'En el editor de notas: ver [Atajos del editor de notas](/docs/atajos/atajos-del-editor-de-notas).'],
        ['`Ctrl` + `Z`, `Ctrl` + `Y`, `Ctrl` + `S`', 'En las tablas de Zenth.'],
      ),
    ],
  },

  {
    slug: 'atajos-del-editor-de-notas',
    category: 'atajos',
    title: 'Atajos del editor de notas y las tablas',
    summary: 'Formato, bloques, Markdown al escribir, buscar y reemplazar, modo concentración y los atajos de las tablas de Zenth.',
    keywords: ['atajos editor', 'notas', 'negrita', 'cursiva', 'títulos', 'listas', 'markdown', 'buscar y reemplazar', 'modo concentración', 'tablas', 'tachado', 'código', 'enlace', 'duplicar bloque'],
    updated: UPDATED,
    related: ['biblioteca/notas', 'biblioteca/tablas-y-hojas-de-calculo', 'atajos/atajos-de-la-aplicacion'],
    blocks: [
      p('Dentro del editor de notas, `Ctrl` + `/` (`⌘` + `/` en Mac) abre esta misma lista sin salir de la nota. En macOS, `Ctrl` se muestra como `⌘`.'),

      h2('Formato del texto'),
      keys(
        [['Ctrl', 'B'], 'Negrita'],
        [['Ctrl', 'I'], 'Cursiva'],
        [['Ctrl', 'U'], 'Subrayado'],
        [['Ctrl', 'Shift', 'X'], 'Tachado'],
        [['Ctrl', 'E'], 'Código en la línea'],
        [['Ctrl', 'Shift', 'H'], 'Resaltar'],
        [['Ctrl', 'K'], 'Enlace'],
        [['Ctrl', '\\'], 'Quitar el formato'],
      ),

      h2('Bloques'),
      keys(
        [['/'], 'Menú de bloques'],
        [['Ctrl', 'Alt', '1'], 'Título 1'],
        [['Ctrl', 'Alt', '2'], 'Título 2'],
        [['Ctrl', 'Alt', '3'], 'Título 3'],
        [['Ctrl', 'Shift', '8'], 'Lista con viñetas'],
        [['Ctrl', 'Shift', '7'], 'Lista numerada'],
        [['Ctrl', 'Shift', '9'], 'Lista de tareas'],
        [['Ctrl', 'Enter'], 'Marcar o desmarcar la tarea'],
        [['Ctrl', 'Shift', '↑'], 'Mover el bloque hacia arriba'],
        [['Ctrl', 'Shift', '↓'], 'Mover el bloque hacia abajo'],
        [['Ctrl', 'D'], 'Duplicar el bloque'],
        [['Tab'], 'Aumentar sangría'],
        [['Shift', 'Tab'], 'Reducir sangría'],
      ),

      h2('Markdown al escribir'),
      table(
        ['Escribes', 'Obtienes'],
        ['`#` y espacio', 'Un título'],
        ['`-` y espacio', 'Una lista con viñetas'],
        ['`1.` y espacio', 'Una lista numerada'],
        ['`[]` y espacio', 'Una tarea con casilla'],
        ['`>` y espacio', 'Una cita'],
        ['Tres acentos graves seguidos', 'Un bloque de código'],
        ['`---`', 'Un separador'],
        ['`**texto**`', 'Negrita'],
      ),

      h2('La nota'),
      keys(
        [['Ctrl', 'S'], 'Guardar'],
        [['Ctrl', 'F'], 'Buscar y reemplazar'],
        [['Ctrl', 'Shift', 'F'], 'Modo concentración'],
        [['Ctrl', '/'], 'Mostrar la lista de atajos'],
        [['Ctrl', 'Z'], 'Deshacer'],
        [['Ctrl', 'Y'], 'Rehacer'],
        [['Esc'], 'Guardar y salir'],
      ),

      h2('Tablas de Zenth'),
      keys(
        [['Ctrl', 'S'], 'Guardar y salir'],
        [['Ctrl', 'Z'], 'Deshacer'],
        [['Ctrl', 'Y'], 'Rehacer'],
        [['Ctrl', 'B'], 'Negrita'],
        [['Ctrl', 'I'], 'Cursiva'],
        [['Ctrl', 'U'], 'Subrayado'],
        [['Ctrl', 'C'], 'Copiar la selección'],
      ),
    ],
  },
];

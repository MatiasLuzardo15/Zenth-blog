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
        [['V'], 'Encender o apagar la cámara'],
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
      ),
    ],
  },

  {
    slug: 'atajos-del-editor-de-notas',
    category: 'atajos',
    title: 'Atajos del editor de notas',
    summary: 'Formato, copiar estilos, bloques, columnas, código, fórmulas y comentarios: las teclas para trabajar dentro de una nota.',
    keywords: ['atajos editor', 'notas', 'negrita', 'cursiva', 'títulos', 'listas', 'markdown', 'buscar y reemplazar', 'modo concentración', 'tachado', 'copiar formato', 'pegar formato', 'superíndice', 'subíndice', 'columnas', 'espacio para imagen', 'código', 'bloque de código', 'enlace', 'duplicar bloque', 'pegar sin formato', 'tabla', 'fórmula', 'latex', 'comentario', 'mención', 'menú contextual', 'clic derecho'],
    updated: '2026-10-02',
    related: ['biblioteca/notas', 'biblioteca/revisar-sugerencias', 'atajos/atajos-de-la-aplicacion'],
    blocks: [
      p('Dentro del editor de notas, `Ctrl` + `/` (`⌘` + `/` en Mac) abre esta misma lista sin salir de la nota. En macOS, `Ctrl` se muestra como `⌘`.'),

      h2('Formato del texto'),
      keys(
        [['Ctrl', 'B'], 'Negrita'],
        [['Ctrl', 'I'], 'Cursiva'],
        [['Ctrl', 'U'], 'Subrayado'],
        [['Ctrl', 'Shift', 'X'], 'Tachado'],
        [['Ctrl', 'E'], 'Alternar bloque de código; conserva líneas y sangría al convertir una selección'],
        [['Ctrl', 'Shift', 'H'], 'Resaltar'],
        [['Ctrl', '.'], 'Superíndice'],
        [['Ctrl', ','], 'Subíndice'],
        [['Ctrl', 'Alt', 'C'], 'Copiar el formato del fragmento seleccionado'],
        [['Ctrl', 'Alt', 'V'], 'Aplicar el formato copiado al texto seleccionado'],
        [['Ctrl', 'K'], 'Insertar o editar un enlace a una página o a un título de la misma nota'],
        [['Ctrl', '\\'], 'Quitar el formato'],
      ),
      p('También puedes pulsar **Copiar formato** y seleccionar el destino con el ratón. Se desactiva después de aplicarlo; `Esc` cancela la herramienta. Está disponible en Edición.'),

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
        [['Tab'], 'En una lista, aumentar sangría; en una tabla, pasar a la celda siguiente y agregar una fila desde la última; en columnas, pasar a la siguiente'],
        [['Shift', 'Tab'], 'En una lista, reducir sangría; en una tabla, volver a la celda anterior; en columnas, volver a la anterior'],
      ),
      p('Busca **Índice automático**, **Dos columnas**, **Tres columnas**, **Espacio para imagen** o **Salto de página** con `/` para insertarlos desde el teclado. En un espacio para imagen enfocado, `Enter` o `Espacio` abre el selector.'),

      h2('Pegar y escribir código'),
      keys(
        [['Ctrl', 'V'], 'Pegar con formato; el Markdown de texto se convierte en bloques'],
        [['Ctrl', 'Shift', 'V'], 'Pegar texto literal sin formato ni conversión de Markdown'],
        [['Enter'], 'Dentro de un bloque de código, agregar una línea'],
      ),
      p('Dentro de un bloque de código, el pegado conserva el texto literal. Dos `Enter` seguidos al final del bloque te llevan a un párrafo nuevo.'),

      h2('Fórmulas, enlaces y comentarios'),
      keys(
        [['Ctrl', 'Enter'], 'En el editor de fórmulas, guardar la fórmula'],
        [['Tab'], 'En el campo LaTeX, saltar al siguiente espacio vacío de una estructura'],
        [['Shift', 'Tab'], 'En el campo LaTeX, volver al espacio vacío anterior'],
        [['↑', '↓'], 'En el buscador de enlaces o de lenguajes, recorrer las opciones'],
        [['Enter'], 'En el selector de enlaces, elegir el destino activo; en un comentario, publicar'],
        [['Shift', 'Enter'], 'En un comentario, agregar un salto de línea'],
        [['@'], 'En un comentario, buscar una persona para mencionarla'],
        [['Esc'], 'Cerrar el selector de enlace o lenguaje; con la lista de títulos abierta, volver primero a la búsqueda'],
      ),
      note('Con la lista de menciones abierta, las flechas recorren personas y `Enter` o `Tab` elige una; `Esc` cierra la lista. Los comentarios aparecen en las tarjetas de sugerencias de escritorio. Ver [Revisar sugerencias](/docs/biblioteca/revisar-sugerencias).'),
      tip('En escritorio, `Shift` + clic derecho abre el menú del navegador en lugar del menú de Zenth.'),

      h2('Markdown al escribir'),
      table(
        ['Escribes', 'Obtienes'],
        ['De `#` a `######` y espacio', 'Un título de nivel 1 a 6'],
        ['`-` y espacio', 'Una lista con viñetas'],
        ['`1.` y espacio', 'Una lista numerada'],
        ['`[]` y espacio', 'Una tarea con casilla'],
        ['`>` y espacio', 'Una cita'],
        ['Tres acentos graves seguidos', 'Un bloque de código'],
        ['`---`', 'Un separador'],
        ['`**texto**`', 'Negrita'],
        ['Un acento grave a cada lado del texto', 'Código dentro de una frase'],
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
      note('Si hay un menú o panel abierto, `Esc` lo cierra primero. En modo Sugerencias, Zenth guarda la propuesta automáticamente; al salir intenta guardar los últimos cambios y, si falla, te deja reintentarlo.'),
      p('Alrededor de un grupo de columnas, Supr al final del párrafo anterior y Retroceso al inicio del posterior mantienen la separación de las columnas. Los cambios de estructura también admiten Deshacer y Rehacer.'),
    ],
  },
];

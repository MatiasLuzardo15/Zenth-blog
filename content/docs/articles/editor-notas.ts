import { h2, h3, keys, list, note, noteExample, p, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-10-02';

/** Guías prácticas: cada artículo enseña una tarea y termina con un ejercicio. */
export const editorNotasArticles: DocArticle[] = [
  {
    slug: 'escribir-y-dar-formato-a-notas',
    category: 'biblioteca',
    title: 'Escribir y dar formato a una nota',
    summary: 'Crea tu primera nota, distingue el formato del texto del formato de bloque y practica con listas, tipografías, pegado y búsqueda.',
    keywords: ['editor', 'tutorial', 'primer documento', 'seleccionar texto', 'negrita', 'cursiva', 'color', 'resaltado', 'interlineado', 'tipografía', 'copiar formato', 'pegar sin formato', 'buscar', 'reemplazar', 'guardar'],
    updated: UPDATED,
    related: ['biblioteca/notas', 'biblioteca/organizar-notas-con-bloques', 'biblioteca/disenar-y-exportar-notas', 'atajos/atajos-del-editor-de-notas'],
    blocks: [
      p('En esta guía vas a preparar una nota llamada **Plan del taller**, con una introducción, una lista de materiales y una frase destacada. Puedes practicar en una nota en blanco; si prefieres una estructura preparada, empieza por [Plantillas de notas](/docs/biblioteca/plantillas-de-notas).'),

      h2('Crear la nota y reconocer sus controles'),
      steps(
        'Abre **Biblioteca › Nuevo › Nota › Nota en blanco**.',
        'En **Título de la nota**, escribe «Plan del taller». Pulsa el cuerpo del documento y escribe una introducción de dos o tres frases.',
        'Comprueba que el selector de modo indica **Edición**. **Visualización** permite leer el resultado; **Sugerencias** propone cambios para revisión. Las opciones disponibles dependen de tu acceso.',
        'Localiza la barra de formato: contiene **Tipo de bloque**, los botones de texto, **Insertar**, **Tipografía y tamaño** y **Más acciones de formato**. En móvil, deslízala horizontalmente para llegar a los controles que quedan fuera de la vista.',
      ),
      p('La selección decide dónde se aplica una acción. Para cambiar unas palabras, selecciónalas; para transformar un párrafo en título o lista, coloca el cursor dentro de ese párrafo. El título de la nota, en la cabecera, se edita por separado del cuerpo.'),
      note('En estas guías, los atajos usan `Ctrl` en Windows y Linux. En Mac, usa `⌘` en su lugar. Puedes consultar los atajos dentro del editor con `Ctrl` + `/`.'),

      h2('Dar formato a palabras y frases'),
      steps(
        'Selecciona una frase de la introducción, por ejemplo «El taller dura dos horas».',
        'Pulsa **Negrita** o usa `Ctrl` + `B`. La barra flotante que aparece al seleccionar también ofrece formato.',
        'Para dar énfasis adicional, selecciona otra frase y elige **Color del texto** o **Resaltar** en la barra. El primero cambia las letras; el segundo añade un fondo.',
        'Para desactivar negrita, cursiva, subrayado o tachado, selecciona el fragmento y vuelve a pulsar el mismo botón.',
      ),
      table(
        ['Quieres conseguir', 'Usa'],
        ['Destacar una idea principal', '**Negrita**.'],
        ['Marcar un énfasis breve', '**Cursiva**.'],
        ['Mostrar texto descartado sin borrarlo', '**Tachado**.'],
        ['Cambiar el color de las letras', '**Color del texto**; **Color de la nota** vuelve al color base.'],
        ['Marcar una frase con fondo', '**Resaltar** y un color.'],
        ['Escribir una potencia o un índice breve', '**Más acciones de formato › Superíndice** o **Subíndice**.'],
      ),
      tip('Para escribir x², escribe «x2», selecciona solo el 2 y aplica **Superíndice**. Para H₂O, selecciona el 2 y aplica **Subíndice**. Las expresiones más complejas tienen su propio [editor de fórmulas](/docs/biblioteca/codigo-formulas-y-diagramas-en-notas#insertar-y-editar-una-formula).'),

      h2('Cambiar tamaño, fuente y espaciado'),
      p('Selecciona el texto y abre **Tipografía y tamaño**. Puedes elegir **Pequeño**, **Normal**, **Grande** o **Enorme**, y una familia tipográfica. Esta elección pertenece al fragmento seleccionado.'),
      p('Si buscas una fuente uniforme para el documento, usa **Más opciones › Diseño de la nota › Fuente de toda la nota**. La cambia el propietario en Edición. Los fragmentos que ya tienen fuente propia conservan esa elección: cambiar la fuente base no borra sus excepciones.'),
      steps(
        'Para espaciar un párrafo, coloca el cursor dentro de él. Para varios párrafos, selecciona el texto que los recorre.',
        'Abre **Más acciones de formato › Interlineado** y elige **Compacto**, **Normal**, **Amplio** o **Doble**.',
        'En el mismo menú, elige **Izquierda**, **Centro**, **Derecha** o **Justificado** para la alineación.',
      ),
      note('Un título grande tiene una función dentro del documento: aparece en el índice. Aumentar el tamaño de un párrafo solo cambia su aspecto. Para crear secciones, usa **Tipo de bloque › Título grande**, **Título mediano** o **Título chico**.'),

      h2('Crear listas y casillas'),
      steps(
        'En un párrafo nuevo, escribe «Materiales» y conviértelo en un título con **Tipo de bloque**.',
        'En el párrafo siguiente, pulsa **Lista con viñetas** y escribe el primer material. Continúa escribiendo los elementos de la lista.',
        'Usa **Lista numerada** si el orden importa, o **Lista de tareas** si necesitas marcar lo terminado.',
        'Dentro de una lista, `Tab` aumenta la sangría y `Shift` + `Tab` la reduce. En una lista de tareas, pulsa la casilla o usa `Ctrl` + `Enter` para marcar el elemento actual.',
      ),
      p('También puedes empezar una línea con `-` y espacio para una viñeta, `1.` y espacio para una lista numerada, o `[]` y espacio para una casilla. Las casillas de la nota forman parte del documento; para gestionar una tarea de la Agenda, usa el módulo de tareas.'),

      h2('Pegar contenido sin sorpresas'),
      table(
        ['Cómo pegas', 'Qué ocurre'],
        ['`Ctrl` + `V`', 'Zenth intenta conservar títulos, listas, tablas, enlaces y otros bloques. Si recibe Markdown como texto, lo convierte.'],
        ['`Ctrl` + `Shift` + `V`', 'Pega texto literal, sin formato y sin convertir Markdown.'],
        ['Dentro de un bloque de código', 'El pegado conserva el texto literal para mantener el código.'],
      ),
      p('Después de pegar desde ChatGPT, un procesador de texto o una web, revisa los títulos, la sangría de listas y las tablas. El resultado depende de los datos que copie la aplicación de origen. Si querías conservar literalmente símbolos como `#` o asteriscos, deshaz con `Ctrl` + `Z` y pega sin formato.'),

      h2('Reutilizar un formato'),
      steps(
        'Selecciona un fragmento que ya tenga el estilo que quieres repetir.',
        'Pulsa **Copiar formato** y selecciona con el ratón el texto de destino. Sus palabras permanecen y recibe el formato copiado.',
        'Con teclado, usa `Ctrl` + `Alt` + `C` en el origen; selecciona el destino y usa `Ctrl` + `Alt` + `V`.',
      ),
      p('La herramienta de la barra se desactiva tras aplicarse. Si la activaste por error, pulsa **Cancelar copiar formato** o `Esc`. Para limpiar el formato de una selección, usa **Más acciones de formato › Quitar el formato**.'),

      h2('Buscar una palabra y reemplazarla'),
      steps(
        'Abre **Buscar y reemplazar** con `Ctrl` + `F` y escribe «taller» en **Buscar en la nota**.',
        'Revisa el contador. `Enter` avanza a la siguiente coincidencia y `Shift` + `Enter` vuelve a la anterior. Activa **Distinguir mayúsculas** si necesitas una coincidencia exacta de mayúsculas y minúsculas.',
        'En Edición, escribe el nuevo texto en **Reemplazar por**. Pulsa **Reemplazar esta** para una coincidencia o **Reemplazar todas** para cambiarlas juntas.',
        'Cierra la barra con su botón o `Esc` y revisa el resultado en contexto.',
      ),
      tip('Empieza por **Reemplazar esta** cuando una palabra pueda tener distintos usos. **Reemplazar todas** cambia todas las coincidencias del cuerpo que encuentra la búsqueda.'),

      h2('Guardar y corregir un cambio'),
      p('El autoguardado actúa cuando dejas de escribir unos instantes. Si quieres confirmar un guardado antes de salir, usa `Ctrl` + `S` o pulsa el indicador de cambios pendientes. **No se guardó · Reintentar** indica que necesitas volver a intentarlo; comprueba la conexión y pulsa el aviso.'),
      keys(
        [['Ctrl', 'Z'], 'Deshacer el último cambio'],
        [['Ctrl', 'Y'], 'Rehacer'],
        [['Ctrl', 'S'], 'Guardar sin cerrar la nota'],
        [['Esc'], 'Cerrar primero el panel abierto; sin panel, guardar y salir en Edición'],
      ),
      p('Para volver a un estado anterior después de una edición más larga, consulta [Historial de versiones](/docs/biblioteca/historial-de-versiones).'),

      h2('Practica: termina el plan del taller'),
      list(
        'La introducción contiene una frase en negrita y otra resaltada.',
        '«Materiales» es un título real y tiene debajo una lista con viñetas.',
        'Añadiste una lista de tareas con al menos una casilla marcada.',
        'Cambiaste el interlineado de la introducción y probaste copiar su formato a otro párrafo.',
        'Buscaste una palabra, revisaste una coincidencia y confirmaste el guardado.',
      ),
    ],
  },
  {
    slug: 'organizar-notas-con-bloques',
    category: 'biblioteca',
    title: 'Organizar una nota con bloques e índice',
    summary: 'Construye secciones, añade un índice automático y enlaces internos, destaca avisos y mueve bloques sin rehacer el documento.',
    keywords: ['editor', 'tutorial', 'bloques', 'slash', 'títulos', 'encabezados', 'índice', 'tabla de contenidos', 'enlace interno', 'secciones', 'destacado', 'aviso', 'separador', 'duplicar', 'mover', 'concentración'],
    updated: UPDATED,
    related: ['biblioteca/escribir-y-dar-formato-a-notas', 'biblioteca/tablas-y-columnas-en-notas', 'biblioteca/disenar-y-exportar-notas', 'biblioteca/plantillas-de-notas'],
    blocks: [
      p('Un bloque es una unidad del cuerpo de la nota: un párrafo, un título, una lista, una imagen o una tabla. Puedes cambiar su tipo o moverlo sin reconstruir el documento. En esta guía vas a organizar un informe breve con **Resumen**, **Objetivos** y **Próximos pasos**.'),

      h2('Insertar un bloque con «/» o con la barra'),
      steps(
        'Coloca el cursor en una línea vacía del cuerpo y escribe `/`.',
        'Sigue escribiendo para filtrar: por ejemplo, «título», «destacado» o «índice». No hace falta escribir tildes.',
        'Recorre los resultados con `↑` y `↓`, y pulsa `Enter` para elegir uno. También puedes pulsar el resultado. `Esc` cierra el menú.',
        'Si prefieres usar la barra, coloca primero el cursor donde quieres trabajar y abre **Insertar**. Para transformar un párrafo existente, usa **Tipo de bloque**.',
      ),
      table(
        ['Necesitas', 'Elige'],
        ['Una sección o subsección', '**Título grande**, **Título mediano** o **Título chico**.'],
        ['Un conjunto de puntos o pasos', '**Lista**, **Lista numerada** o **Lista de tareas**.'],
        ['Un aviso que destaque del texto', '**Bloque destacado** o **Bloque de atención**.'],
        ['Separar visualmente dos partes', '**Separador**.'],
        ['Una nueva hoja al exportar', '**Salto de página**.'],
        ['Una lista de secciones con enlaces', '**Índice automático**.'],
      ),
      tip('En **Insertar** también hay **Notas de reunión**, **Registro de decisiones** y **Plan de proyecto**. Insertan una estructura en la nota abierta. La galería de plantillas, en cambio, crea una nota nueva.'),

      h2('Crear una jerarquía de secciones'),
      steps(
        'Escribe «Resumen» en un párrafo y elige **Tipo de bloque › Título grande**. Es un título de nivel 1 dentro del cuerpo.',
        'Añade debajo el texto del resumen. Crea «Objetivos» y «Próximos pasos» con el mismo nivel.',
        'Dentro de «Objetivos», usa **Título mediano** para una subsección, por ejemplo «Qué vamos a medir». **Título chico** sirve para un apartado dentro de esa subsección.',
      ),
      p('Hay seis niveles de títulos. Una estructura fácil de recorrer mantiene el mismo nivel para secciones equivalentes y baja de nivel cuando entra en un detalle. El título principal de la nota, en la cabecera, no sustituye los títulos del cuerpo.'),
      note('La negrita o un tamaño de letra grande no convierten un párrafo en sección. Si un texto no aparece en el índice, comprueba su **Tipo de bloque**.'),

      h2('Insertar el índice dentro del documento'),
      steps(
        'Prepara primero algunos títulos en el cuerpo.',
        'Coloca el cursor en una línea vacía donde quieras el índice, por ejemplo antes de «Resumen».',
        'Elige **Insertar › Índice automático**, o búscalo con `/`.',
        'Renombra un título o añade una sección. El índice se actualiza a partir de los títulos de la nota; no necesitas escribir sus entradas a mano.',
      ),
      p('El bloque de índice reúne enlaces a los títulos y refleja su jerarquía. También se incluye en PDF y HTML con enlaces a las secciones. Para cambiar sus entradas, modifica los títulos originales.'),
      noteExample('Ejemplo visual: pulsa una entrada del índice para ver su sección. «Qué vamos a medir» es un título de nivel 2, por eso aparece con sangría. Este ejemplo no modifica tus notas.', {
        kind: 'outline',
        title: 'Informe del taller',
        sections: [
          { title: 'Resumen', level: 1, text: 'Un taller de dos horas para preparar el próximo proyecto.' },
          { title: 'Objetivos', level: 1, text: 'Acordar el alcance y repartir el trabajo.' },
          { title: 'Qué vamos a medir', level: 2, text: 'Participación, acuerdos y tareas pendientes.' },
          { title: 'Próximos pasos', level: 1, text: 'Juan prepara los materiales y Ana confirma el espacio.' },
        ],
      }),
      table(
        ['Índice automático en el cuerpo', 'Índice de la nota en el lateral'],
        ['Forma parte del documento y lo insertas tú.', 'Es una herramienta de navegación del editor.'],
        ['Aparece en la exportación del documento.', 'Sirve para saltar entre secciones mientras escribes o lees.'],
        ['Se coloca en el punto del cuerpo que elijas.', 'Se muestra en el borde derecho; puedes mostrarlo u ocultarlo.'],
      ),

      h2('Enlazar una frase con otra sección'),
      steps(
        'En el resumen, escribe «Consulta los próximos pasos» y selecciona esa frase.',
        'Pulsa **Enlace** o `Ctrl` + `K`.',
        'En **Buscar sección o pegar enlace**, escribe «Próximos pasos». También puedes abrir **Títulos de este documento** para recorrer la estructura completa.',
        'Elige la sección. Para un enlace web, pega la dirección y pulsa **Aplicar**.',
      ),
      p('Sin texto seleccionado, el editor permite completar **Texto del enlace**. Los enlaces internos siguen apuntando a su sección si renombras el título. Si eliminas el título de destino, al editar el enlace aparece **La sección enlazada ya no existe. Elige otra.**'),
      p('En escritorio, el clic derecho sobre un enlace ofrece **Ir a la sección** o **Abrir enlace**, además de editarlo o quitarlo.'),

      h2('Añadir destacados y separadores'),
      h3('Un aviso dentro del informe'),
      steps(
        'En la posición del aviso, inserta **Bloque destacado** o **Bloque de atención**.',
        'Escribe el mensaje, por ejemplo «Confirmar el presupuesto antes del viernes».',
        'En escritorio, haz clic derecho dentro del bloque y abre **Tono del bloque**. Elige **Información**, **Logro**, **Atención**, **Peligro**, **Nota**, **Idea** o **Franja de fondo**.',
      ),
      p('El tono cambia la presentación del aviso. Escribe también su significado en palabras: así se entiende sin depender del color o del icono.'),
      h3('Una separación visual'),
      p('Inserta **Separador** entre dos partes del informe. En escritorio, abre **Estilo del separador** en su menú de clic derecho y elige **Línea fina**, **Línea de color**, **Línea gruesa** o **Puntos**. Si necesitas que una sección empiece en otra hoja, usa **Salto de página**; un separador solo divide visualmente el contenido.'),

      h2('Mover o repetir un bloque'),
      steps(
        'Coloca el cursor en el bloque que quieres mover.',
        'Abre **Más acciones de formato** y usa las acciones para moverlo arriba o abajo. También sirven `Ctrl` + `Shift` + `↑` y `Ctrl` + `Shift` + `↓`.',
        'Para repetirlo, usa **Más acciones de formato › Duplicar** o `Ctrl` + `D` con el foco en el editor.',
        'Revisa el orden final y los títulos del índice. Si el cambio no era el esperado, usa **Deshacer**.',
      ),
      p('En escritorio, el menú de clic derecho del bloque también reúne convertir, insertar, mover y duplicar. En móvil, usa la barra de Zenth: la pulsación larga conserva la selección táctil y el menú del navegador.'),

      h2('Recorrer una nota larga'),
      list(
        'En escritorio, despliega **Índice de la nota** en el borde derecho y elige un título para saltar a su sección.',
        'En móvil, el navegador lateral muestra tu progreso y el título actual. **Más opciones › Índice de la nota** permite mostrarlo u ocultarlo.',
        'Usa `Ctrl` + `F` para buscar una palabra concreta, aunque no sea un título.',
        'Activa **Modo concentración** con `Ctrl` + `Shift` + `F` para escribir con menos controles alrededor. El ancho de lectura y el ancho completo son opciones de vista; no definen el tamaño de la hoja exportada.',
      ),

      h2('Practica: un informe que se pueda recorrer'),
      list(
        'Crea las tres secciones «Resumen», «Objetivos» y «Próximos pasos», y una subsección dentro de «Objetivos».',
        'Inserta un índice automático antes del resumen y comprueba que aparecen los títulos.',
        'Enlaza una frase del resumen con «Próximos pasos». Renombra ese título y comprueba su destino.',
        'Añade un aviso de presupuesto y un separador.',
        'Mueve un bloque, deshaz el movimiento y confirma el guardado.',
      ),
    ],
  },
  {
    slug: 'tablas-y-columnas-en-notas',
    category: 'biblioteca',
    title: 'Trabajar con tablas y columnas en notas',
    summary: 'Crea una tabla, añade filas y estilos, distribuye contenido en dos o tres columnas y cambia la estructura conservando el texto.',
    keywords: ['editor', 'tutorial', 'tabla', 'fila', 'celda', 'cabecera', 'sin bordes', 'filas alternadas', 'columnas', 'dos columnas', 'tres columnas', 'convertir columnas en texto', 'Tab', 'Supr', 'Retroceso', 'móvil'],
    updated: UPDATED,
    related: ['biblioteca/organizar-notas-con-bloques', 'biblioteca/imagenes-y-portadas-en-notas', 'biblioteca/disenar-y-exportar-notas', 'atajos/atajos-del-editor-de-notas'],
    blocks: [
      p('Usa una **tabla** cuando cada fila tenga los mismos datos, como actividad, responsable y fecha. Usa **columnas** para colocar secciones independientes una al lado de otra, como un resumen y una imagen. En esta guía vas a preparar ambas estructuras por separado.'),

      h2('Crear y completar una tabla'),
      steps(
        'Coloca el cursor en un párrafo del cuerpo, fuera de un grupo de columnas.',
        'Elige **Insertar › Tabla**, o escribe `/` en una línea vacía y busca «tabla». Se crea una tabla de **3 filas por 3 columnas**, con la primera fila como cabecera.',
        'Escribe «Actividad», «Responsable» y «Fecha» en la primera fila. Pulsa cada celda o usa `Tab` para avanzar.',
        'Completa las filas con datos de ejemplo. Desde la última celda, `Tab` añade una fila nueva. `Shift` + `Tab` vuelve a la celda anterior.',
      ),
      table(
        ['Actividad', 'Responsable', 'Fecha'],
        ['Preparar materiales', 'Juan', 'Lunes'],
        ['Confirmar el espacio', 'Ana', 'Martes'],
      ),
      p('La tabla sirve para organizar contenido del documento. Sus celdas no calculan fórmulas como una hoja de cálculo.'),

      h2('Añadir o quitar filas y columnas de tabla'),
      p('Las acciones de estructura están en el menú de clic derecho de escritorio. La celda sobre la que haces clic determina dónde se aplica la acción.'),
      steps(
        'Haz clic derecho en una celda cercana al cambio que necesitas.',
        'Abre **Agregar fila o columna**. Elige **Fila arriba**, **Fila abajo**, **Columna a la izquierda** o **Columna a la derecha**.',
        'Completa las celdas nuevas. Para añadir «Estado» como cuarta columna, haz clic en una celda de la última columna y elige **Columna a la derecha**.',
        'Para quitar una parte, abre **Eliminar fila, columna o tabla** y elige **Fila**, **Columna** o **Tabla entera**.',
      ),
      note('No se puede insertar otra fila por encima de la cabecera. Para añadir datos desde esa fila, usa **Fila abajo**. Eliminar una fila o columna quita también su contenido; si lo hiciste por error, usa **Deshacer**.'),

      h2('Aplicar estilos de tabla'),
      steps(
        'En escritorio, haz clic derecho dentro de la tabla y abre **Estilo de tabla**.',
        'Activa **Cabecera de color** para distinguir los nombres de las columnas.',
        'Activa **Filas alternadas** para facilitar la lectura de filas largas. Puedes combinarla con la cabecera.',
        'Usa **Sin bordes** si quieres una presentación más ligera. Vuelve a pulsar una opción marcada para desactivarla.',
      ),
      p('Los estilos pertenecen a la tabla completa y se conservan en HTML, PDF e impresión. El texto de sus celdas puede tener además su propio formato.'),

      h2('Crear un grupo de dos o tres columnas'),
      steps(
        'Coloca el cursor en un párrafo fuera de la tabla. Para empezar sin contenido, usa un párrafo vacío.',
        'Elige **Insertar › Dos columnas** o **Tres columnas**, o busca el comando con `/`.',
        'El bloque actual pasa a la primera columna. Las demás empiezan vacías; escribe o añade texto, títulos, listas e imágenes en cada una.',
        'Desde un párrafo dentro de la columna, `Tab` pasa a la siguiente y `Shift` + `Tab` vuelve a la anterior. Desde la última, `Tab` puede llevarte al párrafo que sigue al grupo.',
      ),
      note('Dentro de una lista, `Tab` cambia su sangría antes que la columna. Para pasar a otra columna desde una lista, pulsa directamente el lugar de destino o usa un párrafo fuera de la lista.'),
      p('Las columnas tienen el mismo ancho. En móvil se apilan siguiendo su orden: primero el contenido de la primera, después el de la segunda y, si existe, el de la tercera.'),

      h2('Cambiar el número de columnas'),
      steps(
        'En escritorio, haz clic derecho dentro del grupo.',
        'Elige **Dos columnas** o **Tres columnas**. Al ampliar, se añade una columna vacía.',
        'Al pasar de tres a dos, el contenido de la tercera se incorpora al final de la segunda. Revisa el orden de lectura y ajusta los títulos si hace falta.',
        'Para volver a un documento continuo, elige **Convertir columnas en texto**. El contenido se coloca en el cuerpo, en el orden de las columnas.',
      ),
      p('Puedes deshacer y rehacer estos cambios de estructura. Convertir en texto es una forma de retirar la distribución en columnas conservando lo escrito.'),
      noteExample('Ejemplo visual: cada vista parte del grupo original de tres columnas. Compara el resultado de convertirlo en dos columnas o en texto continuo. Las secciones conservan su orden y su contenido; en móvil se apilan.', {
        kind: 'columns',
        sections: [
          { title: 'Objetivo', text: 'Preparar un taller de dos horas para el equipo.' },
          { title: 'Materiales', text: 'Cuaderno, marcadores y una pantalla para compartir.' },
          { title: 'Riesgos', text: 'Confirmar el espacio y la conexión antes de empezar.' },
        ],
      }),

      h2('Límites y comportamiento al borrar'),
      list(
        'No se insertan tablas dentro de columnas ni grupos de columnas dentro de otras columnas. Mantén la tabla antes o después del grupo.',
        'Supr al final del párrafo anterior mantiene el límite del grupo, sin sacar el contenido de la primera columna.',
        'Retroceso al inicio del párrafo posterior mantiene ese párrafo fuera de la última columna.',
        'Para eliminar la distribución, usa **Convertir columnas en texto**; para corregir un cambio accidental, usa **Deshacer**.',
      ),
      p('En móvil puedes escribir y leer el contenido, y crear filas de tabla con un teclado que tenga `Tab`. Los menús para insertar o eliminar columnas de tabla, cambiar sus estilos y convertir un grupo de columnas se usan en escritorio.'),

      h2('Practica: un plan con resumen y responsables'),
      list(
        'Prepara la tabla de actividad, responsable y fecha, y añade una cuarta columna «Estado».',
        'Combina cabecera de color y filas alternadas.',
        'Después de la tabla, crea dos columnas: «Objetivo» a la izquierda y «Materiales» a la derecha.',
        'Pasa a tres columnas, escribe «Riesgos» en la tercera y vuelve a dos. Comprueba que el texto sigue en la segunda.',
        'Convierte el grupo en texto, deshaz la conversión y revisa el orden que tendría al leerlo en móvil.',
      ),
    ],
  },
  {
    slug: 'imagenes-y-portadas-en-notas',
    category: 'biblioteca',
    title: 'Añadir imágenes y una portada a una nota',
    summary: 'Inserta fotos, ajusta tamaño y recorte, escribe texto alternativo y completa espacios de imagen. Añade o retira una portada opcional.',
    keywords: ['editor', 'tutorial', 'imagen', 'foto', 'subir', 'arrastrar', 'recorte', 'proporción', 'cuadrada', 'vertical', 'tamaño', 'texto alternativo', 'reemplazar', 'espacio para imagen', 'portada', 'emoji'],
    updated: UPDATED,
    related: ['biblioteca/tablas-y-columnas-en-notas', 'biblioteca/disenar-y-exportar-notas', 'biblioteca/plantillas-de-notas', 'biblioteca/compartir-notas-y-lienzos'],
    blocks: [
      p('Una imagen del cuerpo acompaña una sección; una portada aparece encima del título de la nota. Puedes tener imágenes sin portada, portada sin otras imágenes, o solo texto. Subir o reemplazar imágenes requiere ser el **propietario** y estar en **Edición**.'),

      h2('Insertar una imagen en el cuerpo'),
      steps(
        'Coloca el cursor donde quieres añadir la imagen.',
        'Pulsa **Insertar › Imagen** y elige un archivo de tu dispositivo. También puedes pegar una imagen con `Ctrl` + `V` o arrastrarla al editor.',
        'Espera a que termine la subida. Pulsa la imagen insertada para mostrar sus herramientas.',
        'Usa **Ver en grande** para revisar detalles antes de ajustar su presentación.',
      ),
      p('Si estás leyendo una nota en Visualización, pulsar la imagen abre el visor. Para modificar su tamaño o posición, vuelve a Edición si tu acceso lo permite.'),

      h2('Ajustar el tamaño y la alineación'),
      steps(
        'Selecciona la imagen y elige **25 %**, **50 %**, **75 %** o **100 %** en su barra. El porcentaje se refiere al ancho disponible del contenido, no a una medida fija en centímetros.',
        'Para un ajuste más fino, arrastra los tiradores de la imagen.',
        'Si está fuera de una lista o tabla, elige **Alinear a la izquierda**, **Centrar** o **Alinear a la derecha**.',
      ),
      tip('Una foto pequeña puede servir como apoyo junto al texto; una captura con letras suele necesitar más ancho. Revisa que siga siendo legible al exportarla, especialmente si está dentro de una columna.'),

      h2('Cambiar la proporción sin modificar el archivo'),
      p('En la barra de la imagen, abre **Proporción de la imagen** y elige:'),
      table(
        ['Proporción', 'Cuándo puede servir'],
        ['Original', 'Para mostrar la imagen completa con sus proporciones originales.'],
        ['Horizontal (16:9)', 'Para una imagen panorámica o una cabecera de sección.'],
        ['Cuadrada (1:1)', 'Para fotos que quieras presentar con un marco uniforme.'],
        ['Vertical (3:4)', 'Para un retrato o una foto alta.'],
      ),
      p('El recorte se centra en la imagen. Conserva el archivo original y cambia cómo se muestra dentro del documento. Si queda fuera una cara, una etiqueta o un detalle importante, vuelve a **Original** o elige otra imagen; el control no permite desplazar el punto de recorte.'),
      noteExample('Ejemplo visual de recorte centrado: compara el archivo completo con la vista de la nota. Los números permiten reconocer qué zonas quedan dentro del marco. Es una imagen geométrica de prueba.', {
        kind: 'imageCrop',
        alt: 'Imagen de prueba con tres zonas numeradas de izquierda a derecha: 1, 2 y 3, y marcas en los bordes superior e inferior.',
      }),

      h2('Escribir texto alternativo'),
      steps(
        'Pulsa la imagen y abre **Texto alternativo**.',
        'Describe lo que aporta a esa sección. Por ejemplo: «Distribución del aula: seis mesas alrededor de una zona central libre».',
        'Pulsa **Guardar** en el formulario de texto alternativo.',
      ),
      p('El texto alternativo ayuda a quien usa un lector de pantalla y aparece también en el visor. Evita descripciones que solo digan «imagen» o el nombre del archivo. Si la foto contiene información imprescindible, inclúyela también en el texto de la nota.'),

      h2('Mover, reemplazar o quitar una imagen'),
      list(
        '**Mover en escritorio:** arrastra el control de movimiento de la imagen. Para imágenes fuera de listas y tablas, también sirven `Ctrl` + `Shift` + `↑` y `Ctrl` + `Shift` + `↓`.',
        '**Mover en móvil:** pulsa **Subir la imagen** o **Bajar la imagen** en sus herramientas, cuando estén disponibles para ese bloque.',
        '**Reemplazar:** pulsa **Reemplazar la imagen** y elige otro archivo. Conserva el tamaño, la alineación y el texto alternativo; revisa que la descripción siga siendo correcta para la foto nueva.',
        '**Quitar:** pulsa **Quitar la imagen**. Para recuperar un cambio accidental durante la edición, usa **Deshacer**.',
      ),

      h2('Reservar una imagen para más adelante'),
      steps(
        'Elige **Insertar › Espacio para imagen** donde quieras reservar una foto, también dentro de una columna.',
        'Continúa preparando el texto. El espacio no contiene todavía una imagen.',
        'Cuando tengas el archivo, pulsa **Elegir imagen** en el espacio. Con un teclado, también puedes enfocarlo y pulsar `Enter` o `Espacio`.',
        'Elige la imagen. Al terminar la subida, sustituye al espacio y puedes ajustar sus herramientas habituales.',
      ),
      note('Si cancelas el selector o la subida falla, el espacio permanece para volver a intentarlo. Los espacios sin completar se omiten al exportar: revisa que hayas añadido todas las fotos que necesita el documento.'),

      h2('Añadir o retirar una portada opcional'),
      steps(
        'Como propietario en Edición, abre **Más opciones › Diseño de la nota**.',
        'En **Portada opcional**, pulsa **Agregar portada** y elige una imagen de tu dispositivo.',
        'Comprueba su posición encima del título. Usa **Cambiar portada** si quieres sustituirla.',
        'Para dejar la nota sin portada, pulsa **Quitar**. El título y el contenido del cuerpo se conservan.',
      ),
      p('La portada se incluye una vez al principio en HTML, PDF e impresión. No tienes que agregarla otra vez como imagen del cuerpo. El emoji junto al título identifica la nota en la Biblioteca y se elige por separado de esta imagen.'),

      h2('Si una opción no aparece o no termina la subida'),
      table(
        ['Lo que ves', 'Qué revisar'],
        ['No aparece Agregar portada o Reemplazar la imagen', 'Comprueba que eres el propietario y que el modo es Edición.'],
        ['No aparecen alineación o movimiento', 'Comprueba dónde está la imagen: las herramientas disponibles dependen de si está dentro de una lista o tabla.'],
        ['La foto pierde un detalle en el recorte', 'Vuelve a Original; los recortes se centran automáticamente.'],
        ['El espacio sigue vacío después de elegir archivo', 'Si la subida falló, comprueba la conexión y vuelve a elegir la imagen.'],
      ),

      h2('Practica: una ficha con foto'),
      list(
        'Crea una nota de prueba o una plantilla de ficha, con datos genéricos.',
        'Inserta un espacio para imagen, complétalo y prueba un recorte cuadrado.',
        'Ajusta el ancho, escribe una descripción útil y sustituye la foto por otra.',
        'Prueba añadir una portada y quitarla: comprueba que la imagen del cuerpo permanece.',
        'Revisa el resultado en [PDF o HTML](/docs/biblioteca/disenar-y-exportar-notas).',
      ),
    ],
  },
  {
    slug: 'codigo-formulas-y-diagramas-en-notas',
    category: 'biblioteca',
    title: 'Usar código, fórmulas y diagramas en notas',
    summary: 'Conserva líneas de código, elige su lenguaje, construye una fórmula con vista previa y revisa diagramas escritos en Mermaid.',
    keywords: ['editor', 'tutorial', 'código', 'programación', 'lenguaje', 'detectar automáticamente', 'LaTeX', 'KaTeX', 'fórmula', 'fracción', 'matriz', 'Mermaid', 'diagrama', 'vista previa', 'error de sintaxis'],
    updated: UPDATED,
    related: ['biblioteca/escribir-y-dar-formato-a-notas', 'biblioteca/organizar-notas-con-bloques', 'biblioteca/disenar-y-exportar-notas', 'atajos/atajos-del-editor-de-notas'],
    blocks: [
      p('Estos bloques permiten escribir apuntes técnicos sin convertirlos en imágenes. El código conserva líneas y sangría, las fórmulas se escriben en LaTeX con vista previa y los diagramas parten de un bloque Mermaid editable.'),

      h2('Crear un bloque de código'),
      steps(
        'Coloca el cursor en el cuerpo y elige **Tipo de bloque › Bloque de código**, o busca «código» con `/` en una línea vacía.',
        'Pega el fragmento dentro del bloque. El pegado conserva el texto literal, incluidos símbolos y saltos de línea.',
        'Si ya tienes varias líneas en la nota, selecciónalas y pulsa **Bloque de código** o `Ctrl` + `E` para convertirlas conservando sus líneas y sangría.',
        'Dentro del bloque, `Enter` añade una línea. Dos `Enter` seguidos al final permiten continuar en un párrafo nuevo.',
      ),
      note('Para una palabra de código dentro de una frase, rodéala con un acento grave a cada lado al escribir. El botón **Bloque de código** crea o transforma un bloque completo.'),

      h2('Elegir el lenguaje y copiar el fragmento'),
      steps(
        'Abre el selector del lenguaje en la barra del bloque.',
        'Busca el lenguaje por nombre o abreviatura y elígelo. Las flechas recorren los resultados y `Esc` cierra el selector.',
        'Usa **Detectar automáticamente** para que Zenth vuelva a intentar identificarlo, o **Texto sin formato** para mostrarlo sin resaltado de sintaxis.',
        'Pulsa **Copiar código** para llevarte el contenido del bloque al portapapeles.',
      ),
      p('La detección automática necesita señales claras. Un fragmento corto o una línea parecida en varios lenguajes puede requerir elección manual. El lenguaje cambia el resaltado; no ejecuta el código.'),
      tip('Si el navegador bloquea el botón de copiar, selecciona el código y usa el atajo de copia del sistema. En escritorio, el clic derecho del bloque también ofrece **Copiar código** y **Lenguaje…**.'),

      h2('Insertar y editar una fórmula'),
      steps(
        'Coloca el cursor en el lugar de la expresión y elige **Insertar › Fórmula**, o busca «fórmula» con `/`.',
        'Escribe la expresión en **Fórmula LaTeX**. Para practicar, escribe `x^{2} + y^{2} = r^{2}`.',
        'Comprueba **Vista previa**. Activa **En un bloque separado** para una ecuación independiente, o desactívalo para una expresión dentro de la línea.',
        'Pulsa **Guardar fórmula** o `Ctrl` + `Enter`.',
        'Para corregirla después, haz doble clic en la fórmula. En escritorio también puedes usar **Editar fórmula…** con clic derecho.',
      ),
      p('Para copiar la expresión original en escritorio, abre su menú de clic derecho y elige **Copiar LaTeX**. Es útil cuando necesitas reutilizarla fuera de la nota.'),

      h2('Construir una expresión con los botones'),
      p('El editor de fórmulas ofrece **Fracción**, **Raíz**, **Potencia**, **Subíndice**, **Suma**, **Integral** y **Matriz**. Los botones insertan una estructura en el campo; después completas sus valores.'),
      steps(
        'Abre una fórmula nueva y pulsa **Fracción**.',
        'Completa el primer espacio con el numerador, por ejemplo «a+b».',
        'Pulsa `Tab` para ir al siguiente espacio vacío y escribe el denominador, por ejemplo «c». `Shift` + `Tab` vuelve al espacio vacío anterior cuando existe.',
        'Revisa la fracción en la vista previa y guarda.',
      ),
      p('Los espacios se delimitan con llaves en LaTeX. Si la vista previa muestra un error, revisa que las llaves estén cerradas y que la estructura tenga sus valores. Corrige el texto antes de guardar; la vista previa te permite comprobar la expresión sin salir del panel.'),

      h2('Crear y revisar un diagrama Mermaid'),
      steps(
        'Elige **Insertar › Diagrama**, o busca «diagrama» con `/`. Se inserta un bloque Mermaid con un ejemplo de flujo.',
        'Edita el código del bloque para describir tu proceso. También puedes convertir un bloque de código existente eligiendo **Mermaid** en su selector de lenguaje.',
        'Pulsa **Ver diagrama** en la barra del bloque. En escritorio, el clic derecho ofrece la misma acción.',
        'Revisa el resultado en el diálogo de escritorio o la hoja de móvil. Cierra la vista previa para volver al código y hacer cambios.',
      ),
      p('La vista previa se genera a partir del código Mermaid. Para cambiar un nombre, una conexión o un paso, edita el bloque y vuelve a abrirla.'),

      h2('Resolver problemas de la vista previa'),
      table(
        ['Problema', 'Qué hacer'],
        ['El código tiene colores de otro lenguaje', 'Elige el lenguaje manualmente; en un diagrama debe ser Mermaid.'],
        ['La fórmula muestra un error', 'Revisa las llaves, los comandos y los valores en el campo LaTeX mientras miras la vista previa.'],
        ['El diagrama muestra un error de sintaxis', 'Corrige el código del bloque. El aviso señala la línea cuando puede identificarla; después vuelve a abrir Ver diagrama.'],
        ['No se pudo cargar la vista previa del diagrama', 'Usa Reintentar. Este aviso es distinto de un error en el código Mermaid.'],
      ),

      h2('Practica: un apunte técnico completo'),
      list(
        'Crea un bloque de código con varias líneas, elige el lenguaje y copia su contenido.',
        'Añade una fórmula en una línea y otra como bloque separado.',
        'Usa el botón Fracción para completar numerador y denominador sin memorizar su estructura.',
        'Inserta el diagrama de ejemplo, cambia uno de sus nombres y vuelve a abrir la vista previa.',
        'Guarda la nota y comprueba el formato en la [salida que vayas a usar](/docs/biblioteca/disenar-y-exportar-notas).',
      ),
    ],
  },
  {
    slug: 'disenar-y-exportar-notas',
    category: 'biblioteca',
    title: 'Diseñar una nota y exportarla',
    summary: 'Elige la fuente del documento y una portada opcional, prepara encabezados, pie y saltos de página, y decide entre PDF, HTML, Markdown o texto.',
    keywords: ['editor', 'tutorial', 'diseño de la nota', 'fuente', 'portada opcional', 'PDF', 'HTML', 'Markdown', 'imprimir', 'exportar', 'descargar', 'encabezado', 'pie de página', 'numeración', 'salto de página', 'fuente de respaldo'],
    updated: UPDATED,
    related: ['biblioteca/imagenes-y-portadas-en-notas', 'biblioteca/organizar-notas-con-bloques', 'biblioteca/tablas-y-columnas-en-notas', 'biblioteca/plantillas-de-notas'],
    blocks: [
      p('Antes de compartir un documento terminado, revisa su fuente, sus imágenes y el lugar donde empiezan las secciones. El diseño se guarda con la nota; descargar un archivo crea una salida de su contenido actual. En esta guía vas a preparar un informe breve para entregar.'),

      h2('Elegir una fuente para el documento'),
      steps(
        'Como propietario en **Edición**, abre **Más opciones › Diseño de la nota**.',
        'En **Fuente de toda la nota**, elige una familia. Se aplica al título y al cuerpo, incluidos títulos de sección, listas y tablas.',
        'Revisa los fragmentos que tenían una fuente propia: conservan esa elección.',
        'Para volver a la fuente base habitual de Zenth, elige **Predeterminada**.',
      ),
      p('El selector incluye Inter, DM Sans, Sora, Lora, Playfair Display, JetBrains Mono, Patrick Hand, Gaegu y DynaPuff. Puedes usar una familia para el documento y reservar el formato de fragmentos para necesidades puntuales. **Tipografía y tamaño** en la barra cambia una selección, mientras **Fuente de toda la nota** cambia la base.'),

      h2('Decidir si necesitas una portada'),
      p('La portada es opcional. En el mismo panel, pulsa **Agregar portada** para elegir una imagen; **Cambiar portada** la sustituye y **Quitar** deja el documento sin ella, conservando el título y el cuerpo. Para el manejo de imágenes, consulta [Añadir imágenes y una portada](/docs/biblioteca/imagenes-y-portadas-en-notas).'),
      note('La portada es una imagen encima del título; no crea por sí sola una hoja de presentación separada. Si necesitas que el contenido posterior comience en otra hoja, usa un salto de página en el cuerpo y revisa la exportación.'),

      h2('Configurar encabezado, pie de página y numeración'),
      p('En **Diseño de la nota › PDF e impresión**, ajusta las tres opciones del documento:'),
      table(
        ['Control', 'Cómo usarlo'],
        ['Encabezado automático', 'Actívalo para mostrar título, fecha y Zenth; desactívalo para omitir ese encabezado.'],
        ['Pie de página', 'Escribe el texto que quieres al pie, hasta 120 caracteres. Déjalo vacío para quitar el texto.'],
        ['Números de página', 'Actívalos o desactívalos según lo que necesite el documento.'],
      ),
      p('De forma predeterminada, el encabezado y la numeración están activos y el pie dice **ZENTH**. Vaciar el pie no desactiva la numeración: son controles independientes. Los cambios se guardan con la nota y el propietario los prepara antes de la exportación.'),

      h2('Hacer que una sección empiece en otra hoja'),
      steps(
        'Coloca el cursor en el punto del cuerpo donde quieres separar el contenido.',
        'Elige **Insertar › Salto de página**, o búscalo con `/` en una línea vacía.',
        'Continúa escribiendo la sección que debe empezar después del salto.',
        'Descarga el PDF o abre la vista de impresión para comprobar la separación.',
      ),
      p('Un **Separador** es una línea visual dentro del contenido; un **Salto de página** indica una nueva hoja en una salida paginada. La altura del editor y el ancho de lectura no equivalen a las páginas del PDF. Los párrafos, imágenes y columnas largos pueden continuar en hojas siguientes.'),

      h2('Elegir el formato de salida'),
      table(
        ['Opción en Más opciones', 'Cuándo elegirla'],
        ['Descargar PDF', 'Para entregar o leer un documento distribuido en páginas, con su presentación visual.'],
        ['Descargar .html', 'Para abrir la nota como una página en el navegador, conservando fuente, portada y estilos de bloques.'],
        ['Imprimir', 'Para abrir el diálogo de impresión del navegador y revisar su vista previa antes de imprimir.'],
        ['Descargar .md o Copiar como Markdown', 'Para reutilizar el contenido y su estructura textual en herramientas que admitan Markdown.'],
        ['Copiar como texto', 'Para obtener el contenido sin la presentación visual.'],
      ),
      p('PDF, HTML e impresión conservan la portada, las imágenes recortadas y los estilos de tablas, destacados y separadores. Markdown y texto plano no reproducen toda la tipografía ni la distribución visual de columnas. La copia como texto sale del cuerpo de la nota.'),
      note('El HTML sigue siendo una página web al abrirlo. Su aspecto continuo en pantalla no es la paginación del PDF; revisa cada formato en el lugar donde lo vas a usar.'),

      h2('Descargar un PDF o imprimir'),
      steps(
        'Revisa el título, los ejemplos que aún quedan en el texto y los espacios de imagen pendientes. Los textos de ayuda en campos vacíos y los espacios sin completar se omiten al exportar.',
        'Confirma el guardado con `Ctrl` + `S` y abre **Más opciones**.',
        'Elige **Descargar PDF** para generar el archivo o **Imprimir** para abrir el diálogo del navegador.',
        'Abre el resultado y revisa la primera página, las tablas, el orden de las columnas, los recortes y el inicio de cada sección.',
        'Si algo necesita ajuste, vuelve a la nota, corrígelo y genera una salida nueva.',
      ),
      p('La portada aparece una sola vez antes del título. El índice automático del cuerpo se incluye con enlaces a sus secciones. Si la fuente elegida no puede cargarse, PDF e impresión continúan con una fuente de respaldo; el aspecto puede variar.'),
      tip('Si el diálogo de impresión del navegador añade además su propia fecha, dirección o encabezados, revisa sus opciones de encabezado y pie. Son independientes de los controles guardados en la nota.'),

      h2('Revisar el resultado antes de entregarlo'),
      list(
        'El título y el nombre del archivo identifican el documento.',
        'Los nombres, fechas y ejemplos de las plantillas se han revisado. Un ejemplo escrito como contenido sí se exporta; un texto de ayuda en un campo vacío no.',
        'Las imágenes necesarias están completas, sus recortes dejan visible la información y los espacios vacíos no ocultan una tarea pendiente.',
        'Las tablas se leen con claridad y las columnas siguen el orden esperado.',
        'Los títulos, el índice y los enlaces internos apuntan a las secciones correctas.',
        'El encabezado, el pie y la numeración coinciden con la entrega.',
      ),

      h2('Si la salida no se ve como esperabas'),
      table(
        ['Lo que ocurre', 'Qué revisar'],
        ['Faltan fuentes, colores o columnas al copiar', 'Usa PDF o HTML cuando necesites conservar el diseño; texto y Markdown tienen otra finalidad.'],
        ['Un fragmento no cambia de fuente', 'Puede tener una fuente propia aplicada desde la barra. La fuente base conserva esas excepciones.'],
        ['No aparece una imagen reservada', 'Completa el espacio para imagen antes de exportar.'],
        ['El PDF usa otra tipografía', 'La fuente elegida pudo no cargarse y se usó una de respaldo.'],
        ['El navegador no dejó copiar', 'Prueba la descarga .md para obtener el Markdown sin usar el portapapeles.'],
      ),
      warn('Cambiar o eliminar contenido en la nota después de descargar no modifica los archivos que ya entregaste. Genera otra salida cuando actualices el documento.'),

      h2('Practica: preparar un informe para entregar'),
      list(
        'Usa una nota con dos secciones, una tabla y una imagen.',
        'Elige una fuente base y decide si quieres portada; puedes entregar el informe sin ella.',
        'Escribe «Informe de ejemplo» en el pie y activa la numeración.',
        'Inserta un salto de página antes de la segunda sección.',
        'Descarga PDF y HTML. Revisa los dos resultados y compara cómo presentan el mismo contenido.',
      ),
    ],
  },
];

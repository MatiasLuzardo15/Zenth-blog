import { h2, list, note, p, path, steps, table, tip, warn } from '../blocks';
import type { DocArticle } from '../types';

const UPDATED = '2026-10-20';

export const sitiosArticles: DocArticle[] = [
  {
    slug: 'que-son-los-sitios',
    category: 'sitios',
    title: 'Qué son los sitios de Zenth',
    summary: 'Publica tus notas como páginas web en tu propia dirección de zenth.website, sin hosting ni HTML. Una copia fija: los cambios no salen hasta que vuelvas a publicar.',
    keywords: ['sitios', 'zenth sites', 'publicar', 'web', 'página', 'zenth.website', 'subdominio', 'nota pública', 'sitio web'],
    updated: UPDATED,
    related: ['sitios/publicar-una-nota', 'sitios/que-sale-al-publico', 'biblioteca/notas', 'privacidad/quien-ve-que'],
    blocks: [
      p('**Sitios** convierte notas tuyas en páginas web. Quien abre el enlace ve el contenido publicado; no entra a Zenth ni a tu cuenta. La dirección vive en **zenth.website**, un dominio aparte de la app.'),
      note('Sitios aparece cuando está habilitado para tu cuenta: lo ves en el editor de una nota (**Publicar en la web** y el interruptor **Nota · Sitio**) y en **Ajustes › Sitios**. Si no está, esas entradas no se muestran.'),

      h2('Cómo se entiende'),
      list(
        'El **editor de notas** sigue siendo el editor: escribes y guardas como siempre.',
        '**Publicar** genera una **copia fija** en HTML. Quien visita no consulta tu Biblioteca en vivo.',
        'Los cambios posteriores **no salen** hasta que pulses **Publicar cambios**.',
        'Solo el **dueño** de las notas puede publicarlas. Colaboradores, sugerencias, comentarios e historial **nunca** aparecen en la web.',
      ),

      h2('Dónde se abre'),
      table(
        ['Desde', 'Para qué'],
        ['Una nota', '**Publicar en la web** crea el sitio o actualiza el que ya usa esa nota. **Vista previa** muestra el resultado antes de confirmar.'],
        ['Cabecera del editor', '**Nota** es el documento; **Sitio** abre el diseño de esa página. Si la nota todavía no es una página, **Sitio** te lleva a publicar.'],
        ['Ajustes › Sitios', 'Lista, páginas, apariencia, buscadores, visitas, despublicar y borrar.'],
      ),
      path('Ajustes', 'Sitios'),

      h2('La dirección'),
      p('Cada sitio tiene un subdominio `tu-nombre.zenth.website`. Se propone a partir del título de la nota; puedes cambiarlo mientras el sitio **no** está publicado. Después queda bloqueado hasta que lo despublicas.'),
      list(
        'De **3 a 40** caracteres: letras minúsculas, números y guiones, sin guion al inicio ni al final y sin dos guiones seguidos.',
        'No puede incluir la palabra **zenth** ni usar direcciones reservadas (`www`, `app`, `login`, `soporte`…).',
        'Si ya está tomada, Zenth te pide otra.',
      ),

      h2('Límites de ahora'),
      table(
        ['Tope', 'Valor'],
        ['Sitios por cuenta', '3'],
        ['Páginas por sitio', '200'],
      ),
      p('Una nota pertenece como máximo a **un** sitio. Si ya está en otro, Zenth te lo dice.'),

      h2('Qué no es'),
      list(
        'No es un constructor por secciones independiente de las notas, ni un segundo formato de contenido.',
        'No vive bajo zenth.space: un sitio publicado no comparte la sesión de la app.',
        'Las colecciones (una carpeta como blog o portafolio) todavía **no se publican** como listado. Las notas de esa carpeta pueden ser páginas, una a una.',
        'Formularios de contacto e incrustados con reproductor propio todavía no salen: al publicar, Zenth te avisa y los omite.',
      ),
    ],
  },

  {
    slug: 'publicar-una-nota',
    category: 'sitios',
    title: 'Publicar una nota en la web',
    summary: 'Elige la dirección, revisa la vista previa y publica. Luego copia el enlace, comparte el código QR o despublica sin borrar las notas.',
    keywords: ['publicar', 'publicar en la web', 'vista previa', 'despublicar', 'qr', 'copiar dirección', 'publicar cambios', 'borrador'],
    updated: UPDATED,
    related: ['sitios/que-son-los-sitios', 'sitios/paginas-y-ajustes', 'sitios/que-sale-al-publico', 'biblioteca/notas'],
    blocks: [
      p('El camino más corto es una nota tuya. Zenth arma un sitio de una página con esa nota como inicio.'),

      h2('Primera vez'),
      steps(
        'Abre la nota en Biblioteca. En la cabecera, cambia a **Sitio** o abre **Publicar en la web**.',
        'Revisa cómo se verá: título, portada y un recorte del texto.',
        'Confirma o cambia la **dirección** (`algo.zenth.website`). Zenth comprueba si está libre mientras escribes.',
        'Pulsa **Publicar**. Verás el avance («Publicando 1 de 1…»).',
      ),
      p('Cuando termina, el estado pasa a **Publicada** y puedes abrir el sitio, **copiar la dirección** o mostrar un **código QR**.'),
      list(
        '**Lo publicado es una copia.** Lo que edites después no sale hasta **Publicar cambios**.',
        '**No se muestra quién colaboró.**',
      ),
      warn('Si ya tienes 3 sitios, el botón de publicar se desactiva hasta que borres uno. Ver [Qué son los sitios](/docs/sitios/que-son-los-sitios#limites-de-ahora).', 'Tope por cuenta'),

      h2('Más páginas'),
      p('En el panel de publicar, la lista de **páginas** te deja añadir otras notas tuyas, cambiar cuál es el **inicio** y ordenar el menú. El inicio vive en `/`; las demás, en `/su-direccion`.'),
      p('Si abres **Publicar** desde una nota que **no** es el inicio, Zenth te indica de qué sitio forma parte y te ofrece ir a la nota de inicio o quitarla de las páginas.'),

      h2('Vista previa'),
      p('**Vista previa** construye una copia temporal, en móvil, tableta y escritorio. No sustituye a publicar: si hay cambios pendientes, desde ahí también puedes **Publicar** o **Publicar cambios**.'),

      h2('Cuando hay cambios sin publicar'),
      p('El estado pasa a **Publicada · hay cambios sin publicar**. Antes de confirmar, un resumen dice qué páginas son nuevas, editadas, con diseño nuevo o quitadas, y qué se omite (por ejemplo una imagen externa o un diagrama). Ver [Qué sale al público](/docs/sitios/que-sale-al-publico).'),

      h2('Despublicar'),
      steps(
        'En el panel de la nota, abre las opciones de publicación y pulsa **Despublicar**.',
        'Confirma. El sitio deja de verse en la web. Las notas y el sitio **siguen en Zenth**.',
      ),
      p('Quien abra la dirección antigua deja de ver el contenido. Puedes volver a publicar cuando quieras. **Borrar el sitio** (en Ajustes) es otra acción: elimina el sitio de tu cuenta, no las notas.'),
      tip('Enviar una nota a la [papelera](/docs/cuenta/papelera) retira su página del sitio. Restaurarla **no** la republica sola: vuelve a publicar cuando quieras que esté en la web.'),
    ],
  },

  {
    slug: 'paginas-y-ajustes',
    category: 'sitios',
    title: 'Páginas, apariencia y Ajustes del sitio',
    summary: 'Nombre, menú, color, fuente, cabecera, pie, buscadores y visitas. Los cambios de Ajustes tampoco salen a la web hasta que publiques de nuevo.',
    keywords: ['ajustes del sitio', 'páginas', 'apariencia', 'buscadores', 'visitas', 'seo', 'favicon', 'cabecera', 'pie', 'indexar', 'google'],
    updated: UPDATED,
    related: ['sitios/publicar-una-nota', 'sitios/modo-sitio', 'sitios/que-sale-al-publico', 'cuenta/ajustes-generales'],
    blocks: [
      p('Desde el panel de publicar, **Ajustes del sitio** cierra la nota (si se pudo guardar) y abre **Ajustes › Sitios** en ese sitio. También puedes entrar directo al índice: cada sitio es una tarjeta con su dirección y su estado.'),
      path('Ajustes', 'Sitios'),
      note('Si el sitio ya está en la web y dejaste cambios a medias, Zenth te pide **publicarlos o descartarlos** antes de salir o de cambiar de sección.'),

      h2('General'),
      list(
        'Nombre, descripción breve e imagen principal.',
        'La **dirección**, mientras el sitio no esté publicado.',
        'Código QR y enlace para abrir o copiar.',
        '**Despublicar** o **borrar** el sitio (con confirmación).',
      ),

      h2('Páginas'),
      p('Ordena el menú, elige el inicio y añade o quita notas. Solo entran **notas propias**, no las que te compartieron ni los lienzos.'),

      h2('Apariencia'),
      p('Los cambios se guardan solos y salen al **volver a publicar**:'),
      table(
        ['Ajuste', 'Qué hace'],
        ['Color', 'Botones, enlaces y detalles.'],
        ['Fuente', 'Las mismas familias que en tus notas.'],
        ['Modo', 'Sistema, claro u oscuro.'],
        ['Ancho', 'Normal o amplio.'],
        ['Idioma', 'Español, inglés o portugués, para el sitio publicado.'],
        ['Cabecera y pie', 'Logo, nombre, texto del pie y hasta seis enlaces (`https://` o `mailto:`).'],
        ['Página', 'Si se muestra la portada, el título y la fecha de actualización.'],
      ),

      h2('Buscadores'),
      p('**Aparecer en buscadores** empieza **apagado**: el sitio se abre con su enlace, pero Google y otros no lo listan hasta que lo actives. Al activarlo, pueden mostrar el sitio y recibir su mapa de páginas.'),
      list(
        '**Título** y **descripción** para el resultado. Si los dejas vacíos, se usa el nombre del sitio.',
        '**Imagen para redes**, al pegar el enlace en WhatsApp, X o LinkedIn. Si no eliges una, se usa la portada de cada nota.',
        'Códigos de verificación de Google y Bing, si los necesitas.',
      ),
      p('Estos cambios también salen al republicar.'),

      h2('Visitas'),
      p('Cuando el sitio está publicado, Zenth cuenta **vistas y visitantes aproximados** al servir cada página: **sin cookies ni seguimiento**. Puedes ver 7 o 30 días, las páginas más abiertas, de dónde llegan, países y si entran desde teléfono, computadora o tableta. El visitante se cuenta por día, sin identificar a nadie.'),
    ],
  },

  {
    slug: 'modo-sitio',
    category: 'sitios',
    title: 'Modo Sitio: diseñar la página',
    summary: 'En la cabecera del editor, Nota es el documento y Sitio es el diseño de esa página: secciones, estilos y una vista previa del resultado publicado.',
    keywords: ['modo sitio', 'nota o sitio', 'diseñador', 'secciones', 'estilos', 'plantilla de sección', 'rejilla'],
    updated: UPDATED,
    related: ['sitios/publicar-una-nota', 'sitios/paginas-y-ajustes', 'biblioteca/notas'],
    blocks: [
      p('En una nota que ya es página de un sitio, la cabecera muestra **Nota** y **Sitio**. **Nota** es el contenido de siempre. **Sitio** abre el diseño de esa página sobre el mismo documento.'),
      p('Si la nota todavía no pertenece a un sitio, **Sitio** abre **Publicar en la web** para crearlo. Si la quitas de las páginas, el editor vuelve solo a **Nota**.'),

      h2('Qué puedes hacer'),
      list(
        'Componer la página con **secciones y elementos** (texto, imagen, botón, cabecera o pie del sitio).',
        'Mover y redimensionar en la rejilla; el menú de clic derecho actúa sobre la sección o el elemento.',
        'Ajustar **estilos** del sitio (paleta, fuentes de título y cuerpo, esquinas, botones y escala) que se guardan unos instantes después del último cambio.',
        'Guardar una sección en **Mis secciones** (hasta 20) para reutilizarla en otras páginas del mismo sitio.',
      ),
      p('El logo, el nombre y los enlaces de la cabecera salen de **Ajustes › Sitios**, no se editan a mano en cada página. La página que estás mirando queda marcada en el menú.'),

      h2('Publicar el diseño'),
      p('El diseño se guarda con la página. Hasta que **publicas**, la web sigue mostrando la versión anterior. Si el diseño no se puede leer al publicar, esa página sale **como la nota**, y el resumen te lo dice.'),
      tip('La **vista previa** del panel Publicar es el resultado real (móvil, tableta y escritorio), no un boceto del lienzo.'),
    ],
  },

  {
    slug: 'que-sale-al-publico',
    category: 'sitios',
    title: 'Qué sale al público y qué se omite',
    summary: 'El sitio es HTML y CSS, sin JavaScript ni cookies. Revisa qué de la nota se publica, qué se calla y cómo retirar una página o el sitio entero.',
    keywords: ['privacidad', 'omitir', 'imagen externa', 'mermaid', 'drive', 'colaboradores', '410', 'despublicar', 'papelera'],
    updated: UPDATED,
    related: ['sitios/publicar-una-nota', 'privacidad/quien-ve-que', 'privacidad/que-datos-guarda-zenth', 'cuenta/papelera'],
    blocks: [
      p('Quien visita `tu-sitio.zenth.website` recibe una página estática. No hay sesión de Zenth, no hay JavaScript de la app y no se publican nombres, fotos ni correos de nadie.'),

      h2('Sale igual que en la nota'),
      p('Texto, títulos, listas, citas, separadores, tablas, desplegables, destacados, columnas (apiladas en el teléfono), índice, portada e imágenes **subidas a Zenth** (sin metadatos EXIF). El título de la nota es el `h1` de la página. El código se resalta en el servidor; las fórmulas se renderizan ahí mismo.'),

      h2('Se omite o se degrada'),
      table(
        ['En la nota', 'En el sitio'],
        ['Imagen con URL externa', 'Se omite (no se copia desde internet).'],
        ['Diagrama Mermaid', 'Se omite.'],
        ['Incrustado', 'Se omite.'],
        ['Lienzo, hoja o archivo, incluido Drive', 'Se omite.'],
        ['Enlace a una nota que no es de este sitio, o a una tarea o pizarra', 'Queda como texto, sin enlace.'],
        ['Enlace a otra página del mismo sitio', 'Se reescribe a su ruta pública.'],
        ['Sugerencias, comentarios, historial, colaboradores', 'Nunca.'],
        ['Nota en la papelera, o página sin nota', 'Esa página no se publica.'],
        ['Colección (carpeta como listado)', 'Todavía no se publica como grilla.'],
      ),
      p('Antes de publicar, el resumen lista esas omisiones. Una imagen **sin texto alternativo** también se avisa: conviene completarlo en la nota.'),

      h2('Papelera y despublicar'),
      list(
        'Una nota a la papelera **retira su página** del sitio publicado. Restaurarla no la vuelve a poner en línea sola.',
        '**Despublicar** apaga el sitio entero: la dirección deja de mostrar contenido; el sitio y las notas siguen en tu cuenta.',
        'Si cambias la dirección (solo con el sitio sin publicar), la anterior no queda redirigida.',
      ),

      h2('Visitas'),
      p('Las visitas se cuentan **en el servidor** al abrir cada página, sin cookies. Solo tú las ves, en Ajustes › Sitios › Visitas. Ver [Páginas, apariencia y Ajustes](/docs/sitios/paginas-y-ajustes#visitas).'),
    ],
  },
];

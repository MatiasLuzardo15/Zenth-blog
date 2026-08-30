import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '20',
    title: 'Llamadas en Zenth: reuniones rápidas y salas sin accesos de más',
    excerpt: 'Crea un enlace para invitar a alguien sin cuenta, entra a las salas de tus pizarras desde Llamadas y sigue trabajando mientras hablas.',
    content: `
Una llamada de trabajo no siempre empieza con una pizarra. A veces es un cliente que necesita conversar, una entrevista o alguien que solo tiene que entrar diez minutos. Para esos casos, Zenth incorpora **reuniones rápidas**: conversaciones con enlace, separadas del resto de tu espacio.

## Un solo panel para hablar

En escritorio, **Llamadas** vive en la navegación global. Desde ahí puedes ver las salas de tus pizarras, llamar en privado a alguien con quien compartes proyecto y crear una reunión rápida sin cambiar de sección.

Hay tres formas de empezar:

- **Crear enlace:** prepara la invitación ahora y compártela cuando llegue el momento.
- **Iniciar ahora:** crea el enlace y entra directamente a preparar el audio.
- **Programar en Agenda:** guarda la reunión con fecha, hora e invitados dentro del mismo lugar donde organizas tu día.

## Invitados sin cuenta

Quien recibe el enlace abre la reunión en el navegador, escribe su nombre y comprueba el micrófono y el audio. No necesita registrarse en Zenth. El anfitrión puede compartir el enlace, controlar la entrada de nuevos participantes y cerrar la reunión para todos.

El enlace da acceso **solo a esa conversación**. Un invitado no puede abrir tus pizarras, archivos, historial ni otras salas. Cuando cierras la reunión, el enlace deja de funcionar.

## Las salas de tu equipo siguen en su sitio

Las salas de voz de las pizarras compartidas siguen perteneciendo a sus integrantes. Llamadas las reúne para que no tengas que recordar en qué pizarra estaba cada una. Las llamadas privadas también respetan esa relación: solo puedes llamar a alguien con quien compartes al menos una pizarra.

La conversación continúa mientras navegas por Agenda, Pizarras, Biblioteca o Mi ritmo. Minimizar el panel no equivale a salir de la llamada.

## Voz y pantalla, sin videoconferencia

Zenth ofrece voz, selección de dispositivos, pantalla compartida, reacciones y mano levantada. **No hay cámara personal ni grabación**: la comunicación acompaña al trabajo, no pretende convertirse en otra plataforma de videoconferencias.

## Reuniones dentro de Agenda

Al editar una reunión en Agenda puedes elegir **Zenth, Google Meet, Zoom, Teams u otro enlace**. También puedes añadir invitados por correo y consultar el estado de sus invitaciones desde el evento. Así la convocatoria y el trabajo posterior no quedan repartidos en dos herramientas.

La regla es sencilla: cada persona entra a la conversación que necesita, con el acceso justo para ese momento.

**Abre Llamadas en Zenth y crea tu primer enlace.**
`,
    author: 'Matías Zenth',
    date: '29 Aug, 2026',
    imageUrl: '/blog/appview.png',
    category: 'Lanzamiento',
    readTime: '6 min lectura'
  },
  {
    id: '19',
    title: 'Zenth hoy: Agenda, Pizarras, Biblioteca y un Enfoque que te acompaña',
    excerpt: 'La aplicación cambió de estructura: cuatro espacios claros, Llamadas globales, Google Drive dentro de Biblioteca y un recorrido de 20 constelaciones.',
    content: `
Zenth creció y su navegación anterior dejó de contar bien lo que hace. La versión actual se organiza alrededor de cuatro espacios: **Agenda, Pizarras, Biblioteca y Mi ritmo**. A eso se suma Llamadas, un panel global para las salas del equipo y las reuniones rápidas. Enfoque sigue siendo central, pero ya no es un lugar al que tienes que ir: se abre desde la cabecera y continúa mientras trabajas en cualquier pantalla.

## Agenda: planificar el tiempo de verdad

Agenda combina vistas de **día, semana y mes**. Puedes usar Mañana, Tarde y Noche para planificar con flexibilidad o definir una hora y duración cuando el compromiso lo exige. En la vista diaria, mover y redimensionar un bloque reprograma la tarea directamente.

Las tareas pueden convertirse en eventos o reuniones e incluir repetición, avisos, etiquetas, pasos, imágenes, ubicación, invitados y enlaces de videollamada. En cada reunión puedes elegir Zenth, Google Meet, Zoom, Teams u otro enlace. Si conectas Google Calendar, eliges qué calendarios quieres ver y sus eventos aparecen en esta misma vista.

## Pizarras: cada proyecto conserva su contexto

Pizarras ya no es una lista general. Cada proyecto tiene sus propias columnas, su bandeja de captura y una regla explícita para decidir qué tareas también aparecen en Agenda.

Cuando invitas a otras personas, la pizarra suma roles, presencia, comentarios, menciones, asignaciones, votos, aprobaciones y actividad en vivo. También puede tener una sala de voz y llamadas privadas con pantalla compartida; Llamadas las reúne junto a tus demás conversaciones.

Las tarjetas colaborativas también pueden tener varios responsables, etiquetas compartidas, adjuntos privados y checklists con fechas y progreso. Los filtros de carga, la vista Mis tarjetas, las notificaciones, las automatizaciones y las plantillas ayudan a que la pizarra siga siendo útil cuando el proyecto crece.

## Enfoque: una capa global

El temporizador se abre desde la cabecera, no desde una sección. Puedes vincularlo con una tarea y seguir recorriendo Zenth sin perder la sesión. Hay duraciones de 15, 25, 45 y 60 minutos, una duración propia y un modo sin límite.

La experiencia incluye descansos, objetivo diario, historial editable y una capa de sonido: lluvia, bosque, cafetería, olas, chimenea, ruido blanco o marrón, mezclas guardadas y música. Si entras a una llamada, Zenth pausa el audio de enfoque y lo recupera al salir.

## Biblioteca: Zenth y Google Drive en un mismo explorador

Las notas nativas siguen dentro de Zenth, con editor enriquecido, imágenes, etiquetas y asistencia de Zen. A su lado, Google Drive aporta la infraestructura documental.

Al conectar tu cuenta puedes recorrer **Mi unidad, Recientes, Destacados y Compartidos conmigo**. Desde Nuevo puedes:

- crear un Documento de Google;
- crear una Hoja, Presentación o Formulario;
- crear una carpeta real de Drive;
- subir archivos o elegirlos con Google Picker;
- grabar una nota de voz directamente en Drive.

Zenth ofrece editores integrados para trabajar sin abandonar la aplicación. Cuando necesitas colaboración simultánea completa o herramientas avanzadas de Google, **Abrir en Google** lleva al editor nativo.

## Mi ritmo: más recorrido, menos presión

Mi ritmo reúne actividad, tareas completadas, minutos de enfoque, rachas, bienestar y perfil. El recorrido pasó de diez rangos genéricos a **20 niveles inspirados en constelaciones**. Cada nivel exige cuatro cosas: XP, mejor racha, tareas completadas y minutos de enfoque.

También hay **24 logros** repartidos entre ejecución, constancia, enfoque y recorrido. Los niveles alcanzados son permanentes: una pausa no borra lo que ya construiste.

## Ajustes que reflejan cómo trabajas

Los ajustes se reorganizaron en General, Apariencia, Productividad, Enfoque, Notificaciones, Pizarras, Integraciones, Cuenta y Apoyar. Incluyen búsqueda, tema del sistema, Claro, Oscuro o Zen, densidad, ancho del contenido, objetivos de enfoque y control independiente de la relación entre Agenda y Pizarras.

La idea de fondo no cambió: Zenth no quiere empujarte a hacer más por inercia. Quiere darte una imagen clara de tu tiempo, tus proyectos y tu energía para que decidas mejor.

**Abre la versión actual de Zenth y recorre el nuevo espacio.**
`,
    author: 'Matías Zenth',
    date: '8 Aug, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    category: 'Lanzamiento',
    readTime: '8 min lectura'
  },
  {
    id: '18',
    title: 'Tu pizarra ahora habla: salas, llamadas privadas y Llamadas',
    excerpt: 'Las salas de tus pizarras, las llamadas privadas y las reuniones rápidas viven en un mismo panel. Voz y pantalla compartida, sin salir de Zenth.',
    content: `
Trabajar sobre la misma pizarra resuelve el *qué*, pero no siempre el *cómo*: hay cosas que se arreglan en dos minutos hablando y en veinte mensajes escritos. Cada pizarra compartida de Zenth tiene **su sala del equipo**: una sala de voz siempre abierta para sus integrantes.

## La sala está donde ya estabas

En escritorio, la sala se descubre desde **Llamadas**, el panel global de la navegación. En móvil sigue estando en el desplegable **Equipo** —el de los avatares—. Cualquier integrante entra y sale libremente. No hay reuniones que programar ni enlaces que caducan para la sala de pizarra: el proyecto es el sitio; la sala vive ahí.

Desde Llamadas puedes **llamar en privado** a cualquiera con quien compartas pizarra. En móvil, la acción sigue disponible desde el desplegable Equipo. Le suena el aviso y, si acepta, ya están hablando.

Y una vez dentro, la conversación no te ata a la pantalla: puedes seguir moviéndote por Zenth —Agenda, Pizarras, Biblioteca o Mi ritmo— y el audio continúa. Minimiza el panel o escóndelo del todo: la llamada sigue.

## Antes de entrar: preparar audio

Nadie debería descubrir que tenía el micrófono equivocado hablando delante de tres personas. Antes de entrar verás la pantalla de **Preparar audio**: eliges micrófono y auriculares, compruebas que entra señal y decides si entrar callado o solo a escuchar. Si no das permiso al micrófono, puedes entrar igualmente como oyente.

## Voz y pantalla compartida

La sala combina **voz** con **pantalla compartida**, que es la pareja que de verdad hace falta para trabajar: enseñar una tarjeta, mirar juntos una tabla, recorrer el tablero. El caso real siempre fue *"mira esto"*.

Puedes elegir qué micrófono y qué auriculares usar, y cambiarlos en mitad de la llamada. Solo una persona comparte pantalla a la vez; si lo intentas con otra en curso, la aplicación te lo dice claramente.

Si necesitas hablar con alguien que no pertenece a la pizarra, crea una **reunión rápida** desde Llamadas. La otra persona entra con un enlace y su nombre, sin cuenta y sin acceso lateral a tu espacio. El anuncio completo de las reuniones rápidas está en el artículo más reciente.

## Los permisos de la pizarra, y ninguno más

¿Quién puede entrar en la sala? Los integrantes de la pizarra, ni uno más. ¿A quién puedes llamar? A quien comparte una pizarra contigo. No hay contactos que importar ni una libreta nueva que mantener: si trabajan juntos en un tablero, ya pueden hablar; si no, no.

Y quien deja de ser integrante de la pizarra deja de tener acceso a su sala. Los permisos no se quedan desactualizados.

## Lo que esto no es

Zenth sigue siendo una aplicación de productividad. La sala del equipo es una herramienta más de colaboración, no el centro del producto: está cuando hace falta hablar y desaparece cuando no. Si trabajas solo, nada ha cambiado.

**Abre una pizarra compartida en Zenth y entra en la sala del equipo.**
`,
    author: 'Matías Zenth',
    date: '1 Aug, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
    category: 'Lanzamiento',
    readTime: '6 min lectura'
  },
  {
    id: '15',
    title: 'Tus pizarras ahora tienen miembros: llega la colaboración a Zenth',
    excerpt: 'Invita a quien quieras, reparte permisos con tres roles claros y trabajen sobre el mismo tablero en tiempo real. Sin espacios de trabajo, sin plan de pago.',
    content: `
Hasta ahora, una pizarra de Zenth era **tu** pizarra. Hoy deja de serlo: pasa a ser un espacio con miembros, donde cada persona puede hacer exactamente lo que su rol permite.

Y quiero empezar por lo que **no** hemos hecho, porque define el resto: no hay espacios de trabajo, ni equipos, ni organizaciones, ni una jerarquía de cinco niveles que aprender antes de invitar a nadie. La pizarra es la única unidad de permisos. Un concepto, no cuatro.

## Dos ejes que conviene no mezclar

La mayoría de las herramientas confunden estas dos preguntas, y por eso acabas compartiendo por error algo que creías privado. Zenth las mantiene separadas:

- **Miembros y roles** deciden quién puede *entrar y editar*. Se gestionan desde el panel **Compartir**.
- **Visibilidad** decide hasta dónde llega la pizarra para quien **no** es miembro. Se gestiona desde el panel **Visibilidad**.

Cambiar una nunca cambia la otra.

## Tres roles

| Rol | Puede |
| :--- | :--- |
| **Administrador** | Todo: invitar, expulsar, cambiar roles, renombrar, cambiar el icono, editar listas y tarjetas |
| **Miembro** | Crear, editar, mover, completar y borrar tarjetas. Crear y reordenar listas. No administra la pizarra |
| **Observador** | Solo lectura. Ve las tarjetas y las listas, no puede tocar nada |

El **propietario** no es un cuarto rol: es quien creó la pizarra. Siempre es administrador, es el único que puede eliminarla y no puede ser expulsado. Si te vas del proyecto, puedes **transferir la propiedad** a otro administrador.

Hay una regla que no se puede saltar: **una pizarra nunca puede quedarse sin administradores**. Y no está solo en la interfaz —donde bastaría con abrir las herramientas de desarrollo para saltársela— sino en la propia base de datos. Si eres el último administrador, la opción de abandonar la pizarra ni siquiera aparece.

## Dos formas de invitar

- **Por correo electrónico.** Escribes la dirección, eliges el rol y la persona recibe una invitación. Si aún no tiene cuenta en Zenth, la invitación la espera hasta que se registre.
- **Por enlace.** Generas una dirección que puedes pegar donde quieras —un chat de grupo, un mensaje— y quien la abra entra con el rol que definiste. Puedes revocarla cuando quieras.

## Visibilidad: privada, o pública de solo lectura

Toda pizarra **nace privada**. Nadie la ve hasta que invitas a alguien: no hay un estado intermedio en el que esté "en el equipo" sin que lo hayas decidido.

Si activas la visibilidad **con enlace**, Zenth genera una dirección pública de solo lectura. Sirve para enseñar el estado de un proyecto a un cliente, publicar una hoja de ruta o compartir un tablero de recursos: quien abra el enlace ve el tablero sin necesidad de cuenta, y no puede modificar absolutamente nada. Volver a privada es un clic.

## En vivo, de verdad

Cuando alguien de tu pizarra mueve una tarjeta, la ves moverse. No hay que recargar ni pulsar un botón de sincronizar. Era la razón de ser de todo esto: si tienes que refrescar para saber en qué está tu compañero, no estás colaborando, estás turnándote.

La suite de colaboración creció alrededor de esa misma tarjeta: responsables múltiples, etiquetas compartidas, comentarios, menciones, reacciones, adjuntos privados, checklists, filtros, notificaciones, automatizaciones y plantillas. No son herramientas paralelas; viven en el contexto del proyecto.

## Qué cambia si trabajas solo

Nada. Si nunca invitas a nadie, tus pizarras siguen siendo privadas, con un solo miembro y sin un solo botón nuevo estorbando. La colaboración aparece cuando la necesitas y desaparece cuando no.

**Abre una pizarra en Zenth y prueba a invitar a alguien.**
`,
    author: 'Matías Zenth',
    date: '29 Jul, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    category: 'Lanzamiento',
    readTime: '7 min lectura'
  },
  {
    id: '16',
    title: 'De Entradas a Biblioteca: notas Zenth y Google Drive en un mismo lugar',
    excerpt: 'Biblioteca reúne tus notas nativas con Mi unidad, documentos de Workspace, carpetas, archivos y notas de voz guardadas en Google Drive.',
    content: `
Biblioteca es la evolución de Entradas. Sigue teniendo un espacio nativo para escribir, pero ahora también funciona como un explorador de Google Drive: el material de un proyecto puede vivir donde ya lo tienes, sin obligarte a mantener copias en dos sistemas.

## Notas nativas de Zenth

Las notas conservan el editor enriquecido con títulos, listas, citas, código, resaltado, separadores, tipografías e imágenes que puedes pegar o arrastrar. Zen puede mejorar, resumir o expandir el texto que selecciones, siempre bajo una acción explícita.

Una tarea que necesita más contexto puede usar **Expandir a nota** y mantener el vínculo con su origen.

## Drive dentro de Biblioteca

Al conectar Google Drive aparecen **Mi unidad, Recientes, Destacados y Compartidos conmigo**. El resumen combina esos elementos con tus notas Zenth y puedes cambiar entre cuadrícula y lista, ordenar o filtrar por tipo.

Desde el menú Nuevo puedes crear:

- un Documento de Google;
- una Hoja de cálculo;
- una Presentación;
- un Formulario;
- una carpeta real de Drive;
- un archivo subido o elegido con Google Picker;
- una nota de voz grabada directamente en Drive.

## Editar sin perder el contexto

Zenth incluye editores integrados para documentos, hojas, presentaciones y formularios. Sirven para el trabajo cotidiano sin abandonar Biblioteca. El botón **Abrir en Google** queda disponible cuando necesitas todas las funciones nativas, colaboración simultánea o una maquetación más avanzada.

## Un archivo, no dos copias

Los elementos de Google siguen viviendo en tu Drive. Mover, duplicar, destacar, compartir o enviar a la papelera desde Zenth modifica ese archivo real. La cuota que ves también es la de tu cuenta de Google.

Las notas nativas continúan bajo la privacidad y la papelera de Zenth; los documentos de Google usan sus permisos y la papelera de Drive. Esa frontera es intencional y siempre se muestra en la interfaz.

**Abre Biblioteca en Zenth y conecta tu espacio documental.**
`,
    author: 'Matías Zenth',
    date: '8 Aug, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    category: 'Funcionalidad',
    readTime: '7 min lectura'
  },
  {
    id: '17',
    title: 'Tu Google Calendar dentro de Agenda',
    excerpt: 'Conecta Calendar con permiso de solo lectura, elige qué calendarios ver y decide de forma explícita cuáles llevar a una pizarra.',
    content: `
Tener las reuniones en un sitio y las tareas en otro no es organización, es contabilidad doble. Pasas el día calculando mentalmente si lo que te queda por hacer cabe entre dos llamadas.

Ya no hace falta: puedes conectar tu **Google Calendar** y ver sus eventos en Agenda, al lado de tus tareas.

## Solo lectura

Zenth se conecta **únicamente con permiso de lectura**: puede ver tus eventos, pero no crearlos, moverlos ni borrarlos. Tu calendario queda siempre tal como lo tienes.

## Cómo se conecta

1. Ve a **Ajustes → Integraciones** y pulsa *Conectar Google Calendar*.
2. Acepta el permiso de lectura en la pantalla de Google.
3. Elige **qué calendarios** quieres ver. Los que no marques no aparecen en ningún sitio: el calendario compartido de la oficina puede quedarse fuera sin problema.

A partir de ahí la sincronización se mantiene sola y se actualiza cada cinco minutos. Puedes **pausarla** cuando quieras —útil en vacaciones— y reanudarla después.

## Los eventos no invaden tus pizarras

Hay otro límite claro: los eventos importados aparecen **solo en Agenda**. No entran en ninguna pizarra por su cuenta, porque nadie quiere que su tablero de proyecto se llene de cumpleaños y recordatorios del dentista.

Si en algún caso concreto sí quieres llevarlos, existe la acción **Llevar a pizarra**: eliges los calendarios y el destino, y confirmas. Solo a partir de ese momento esos eventos pertenecen también a esa pizarra. La conexión se puede retirar después.

## Pausar y desconectar

Puedes pausar la actualización sin perder la selección. Si desconectas la cuenta, Zenth revoca el token disponible y deja de leer cambios futuros. Los eventos que ya se importaron no se borran automáticamente, para evitar que una desconexión accidental elimine información de Agenda o de una pizarra.

**Conecta tu calendario en Zenth y deja de hacer contabilidad doble.**
`,
    author: 'Matías Zenth',
    date: '8 Aug, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
    category: 'Integraciones',
    readTime: '5 min lectura'
  },
  {
    id: '14',
    title: 'El corazón nativo de Biblioteca: notas para pensar más allá de una tarea',
    excerpt: 'Las notas de Zenth conservan un editor enriquecido, imágenes, identidad visual, Zen AI y un vínculo directo con tus tareas.',
    content: `
¿Alguna vez has sentido que una línea de tarea no alcanza para contener una idea? Las **notas nativas de Biblioteca** existen para ese momento: pensar, documentar y desarrollar sin convertir cada párrafo en un pendiente.

Mientras que Agenda y Pizarras se enfocan en ejecutar, Biblioteca también guarda el contexto que hace posible ese trabajo.

## 1. Zen Writing: Escritura sin fricciones
Hemos diseñado un **Editor Rich-Text Nativo** que se siente instantáneo. Sin menús complicados que se interpongan en tu camino.

- **Jerarquía Visual:** Organiza tus pensamientos con títulos (H2, H3).
- **Estilos que Importan:** Negrita, cursiva, subrayado y tachado para dar énfasis.
- **Citas en Bloque:** Resalta esos "Aha moments" o frases inspiradoras.
- **Listas Inteligentes:** Porque a veces, dentro de una nota, necesitas otra lista.
- **Highlighter:** Resalta texto como si usaras un marcador real para tus sesiones de estudio.

## 2. Un Lienzo con Identidad Propia
En Zenth, la estética es función. Queremos que cada nota se sienta como un objeto físico único.

- **Cubiertas de Emojis:** Asigna un emoji a cada entrada. No solo es divertido, hace que encontrar una nota en tu cuadrícula sea una experiencia visual y rápida.
- **Tipografía Dinámica:** ¿Estás escribiendo un diario? Usa la fuente *Escrito a mano*. ¿Notas de programación? Cambia a *Código*. Tenemos 10 estilos seleccionados para que el "mood" del texto coincida con tu contenido.

## 3. Ciudadanos de Primera Clase: Las Imágenes
Olvídate de procesos de subida tediosos. En las Notas Zen, las imágenes fluyen:
- **Pegar y Listo:** Copia una imagen de cualquier sitio y pégala (Ctrl+V) directamente en tu nota.
- **Drag & Drop:** Arrastra archivos desde tu escritorio.
- **Redimensionamiento Vivo:** Haz clic en cualquier imagen para ajustar su tamaño (de 25% a 100%) y maquetar tu nota como si fuera un artículo de revista.

---

## 4. El vínculo con tus tareas: "Expandir a nota"
Esta es la función que lo cambia todo. ¿Tienes una tarea que se está volviendo compleja? Con un solo clic, puedes **Expandirla a una nota**. 

Esa simple tarea de "Planificar viaje" se convierte instantáneamente en una Entrada completa donde puedes pegar mapas, itinerarios, presupuestos y reflexiones, manteniendo el vínculo con tu lista original.

## 5. Sincronización y asistencia
Tus notas se sincronizan con tu cuenta mediante Supabase. Si seleccionas un fragmento, **Zen AI** puede mejorarlo, resumirlo o expandirlo, pero solo cuando tú lo pides.

## Conclusión
Las notas son la parte nativa de Biblioteca: el lugar donde una tarea breve puede crecer hasta convertirse en documentación útil.

> **Actualización:** Biblioteca ahora también integra Google Drive y Workspace. Puedes crear documentos, hojas, presentaciones, formularios, carpetas, archivos y notas de voz sin abandonar Zenth. Lo cuento en el artículo «De Entradas a Biblioteca».

**Abre Biblioteca en Zenth y empieza una nota.**
`,
    author: 'Matías Zenth',
    date: '25 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
    category: 'Funcionalidad',
    readTime: '7 min lectura'
  },
  {
    id: '1',
    title: 'Libérate del Caos: Cómo Zenth Transforma tu Productividad en Paz Mental',
    excerpt: '¿Tu lista de tareas es un monstruo que no para de crecer? Descubre cómo Zenth rediseña la productividad como un ritual de bienestar.',
    content: `
¿Alguna vez has sentido que tu lista de tareas es un monstruo que solo crece? En Zenth, no solo queremos que seas productivo, queremos que disfrutes del camino. Por eso, hemos diseñado un **Sistema de Niveles** que transforma tu disciplina en una aventura de crecimiento personal.

## ¿Qué hace a Zenth diferente para TI?

### 1. Tu día, en armonía con tu energía
Dividimos tu jornada en Mañana, Tarde y Noche. ¿Por qué? Porque tu energía no es la misma a las 8 AM que a las 8 PM. Zenth te ayuda a decidir qué batallas pelear en cada momento, reduciendo la fatiga de decisión y permitiéndote disfrutar de tu tiempo libre sin culpas.

### 2. Un sistema que reconoce la constancia
Convertimos el "deber" en algo que se puede ver crecer. Cada tarea completada suma experiencia, y esa experiencia —junto a tu racha, tus tareas y tus minutos de enfoque— determina tu nivel.

- **Tareas diarias:** +10 XP por cada una.
- **Grandes metas:** +50 XP por las que de verdad mueven la aguja.
- **Rachas:** los días consecutivos con actividad se acumulan. Y si un día se rompe la racha, **no pierdes el nivel**: lo alcanzado es permanente.

### 3. Mide lo que importa: Tus Minutos de Enfoque
No se trata de cuántos checks haces, sino de la calidad de tu atención. Zenth rastrea tus Minutos de Enfoque, dándote una métrica real de tu capacidad de profundidad (Deep Work). ¿Cuánto tiempo le dedicaste hoy a lo que de verdad mueve la aguja?

### 4. Tu bienestar emocional es prioridad
Productividad sin salud mental es agotamiento. Con nuestro Mood Tracker, puedes registrar cómo te sientes cada día. Con el tiempo, descubrirás cómo tu estado de ánimo influye en tus logros, permitiéndote ser más compasivo contigo mismo en los días difíciles.

### 5. Una interfaz que no compite por tu atención
Zenth es sobrio: fondo neutro, una sola tipografía, jerarquía marcada por el tamaño y no por diez colores distintos. El color aparece donde significa algo —tus etiquetas, tu estado de ánimo, la acción activa— y en ningún otro sitio.

Puedes seguir el tema del sistema o elegir Claro, Oscuro y Zen —este último con un fondo cálido—, activar el modo compacto y ajustar el ancho del área de trabajo. El azul es el acento estable de la interfaz; los colores libres quedan para etiquetas, listas y datos.

### 6. Vista Panorámica de tu Vida (Pixel View)
¿Cómo fue tu año? Con nuestra vista de Pixel View, cada día es un punto de color en tu lienzo anual. Identifica patrones, celebra meses de alta energía y planifica tu futuro con una perspectiva que las listas tradicionales no pueden ofrecer.

---

## Y todo lo que ha llegado después:

*   **Agenda y Pizarras:** planifica el tiempo sin mezclarlo por defecto con cada proyecto.
*   **Biblioteca + Drive:** notas nativas, documentos de Workspace, carpetas, archivos y grabaciones en un mismo explorador.
*   **Enfoque global:** temporizador, cronómetro, descansos, objetivo diario, historial y sonido desde cualquier pantalla.
*   **Google Calendar:** tus eventos junto a tus tareas en Agenda, con permiso de solo lectura.
*   **Mi ritmo:** 20 niveles de constelaciones, 24 logros, rachas, actividad y ánimo.
*   **Sincronización total:** tus datos te acompañan en móvil y escritorio sin que hagas nada.
*   **Rutinas automáticas:** configura tareas recurrentes y deja de recordarlas.

## Conclusión

¿Estás listo para dejar de sobrevivir a tu lista de tareas y empezar a dominar tu día con calma?

**Inicia sesión en Zenth ahora y vive la productividad consciente. ✨**
`,
    author: 'Matías Zenth',
    date: '13 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800',
    category: 'Lanzamiento',
    readTime: '6 min lectura'
  },
  {
    id: '2',
    title: 'Las 20 constelaciones de Zenth: un recorrido pensado para años',
    excerpt: 'El nivel no mide una tarde intensa: combina XP, mejor racha, tareas y enfoque a lo largo de un mapa de 20 constelaciones.',
    content: `
Casi todos los sistemas de puntos de las apps de productividad tienen el mismo agujero: si acumulas puntos, subes. Y como los puntos vienen de completar tareas, basta con partir el trabajo en trozos ridículamente pequeños para inflar el marcador. El sistema premia a quien mejor lo engaña.

El de Zenth está construido para que eso no compense.

## Cuatro requisitos a la vez

Para alcanzar un nivel no basta con acumular experiencia. La aplicación comprueba **cuatro cosas simultáneamente**, y hace falta cumplirlas todas:

1. **XP.** Cada tarea completada suma **10 XP**. Las que marcas como **gran meta**, **50**.
2. **Racha.** Días consecutivos con actividad registrada.
3. **Tareas completadas.** El total acumulado a lo largo del tiempo.
4. **Minutos de enfoque.** Tiempo real medido con el temporizador.

El cuarto es el que cierra la puerta a los atajos: los minutos de enfoque solo se consiguen dejando correr el reloj. Puedes fabricar cien tareas falsas en una tarde, pero no puedes fabricar cien horas.

---

## El mapa completo de constelaciones

| Nivel | Nombre | XP | Racha | Tareas | Enfoque |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Triángulo | 0 | — | — | — |
| 2 | Lira | 250 | 3 días | 15 | 75 min |
| 3 | Casiopea | 750 | 7 días | 40 | 250 min |
| 4 | Cruz del Sur | 1.750 | 14 días | 75 | 500 min |
| 5 | Cisne | 3.500 | 30 días | 120 | 10 h |
| 6 | Osa Menor | 6.000 | 50 días | 200 | 25 h |
| 7 | Osa Mayor | 10.000 | 75 días | 300 | 40 h |
| 8 | Orión | 15.000 | 100 días | 450 | 60 h |
| 9 | Escorpio | 22.000 | 180 días | 600 | 80 h |
| 10 | Corona Boreal | 30.000 | 365 días | 800 | 100 h |
| 11 | Cochero | 38.000 | 450 días | 1.000 | 125 h |
| 12 | Boyero | 47.000 | 550 días | 1.250 | 150 h |
| 13 | Andrómeda | 57.000 | 660 días | 1.500 | 183 h |
| 14 | Perseo | 69.000 | 780 días | 1.800 | 216 h |
| 15 | Géminis | 83.000 | 912 días | 2.200 | 258 h |
| 16 | Tauro | 99.000 | 1.050 días | 2.600 | 300 h |
| 17 | León | 117.000 | 1.200 días | 3.100 | 350 h |
| 18 | Pegaso | 138.000 | 1.370 días | 3.700 | 408 h |
| 19 | Hércules | 162.000 | 1.580 días | 4.400 | 475 h |
| 20 | Centauro | 190.000 | 1.825 días | 5.200 | 550 h |

Los primeros diez niveles construyen el primer año. Los siguientes diez estiran el recorrido hasta cinco años: no están pensados para completarse rápido, sino para que Zenth siga teniendo horizonte cuando la organización ya forma parte de tu vida.

---

## Los niveles son permanentes

Esta es la parte que más me importa. **Un nivel alcanzado no se pierde nunca.**

Si te rompes una pierna, te vas dos semanas de vacaciones o simplemente pasas por un mal mes, tu racha se corta. Eso ya duele bastante. No tiene ningún sentido que además la aplicación te degrade y te obligue a reconquistar lo que ya demostraste ser capaz de hacer.

Por eso el cálculo usa tu **mejor racha histórica**, no la actual: el sistema recuerda de lo que fuiste capaz aunque hoy no lo estés siendo. Volver después de un parón cuesta lo que tenga que costar emocionalmente, pero no cuesta niveles.

## Cómo ver qué te falta

En **Mi ritmo** está la ruta completa: las 20 constelaciones, tu posición actual y los cuatro requisitos exactos. No hay una barra opaca ni un «sigue así»: si faltan 40 minutos de enfoque para la siguiente, lo dice.

## Veinticuatro logros paralelos

El nivel cuenta el recorrido largo. Los **24 logros** reconocen hitos concretos de ejecución, constancia, enfoque y recorrido: desde la primera tarea o la primera sesión hasta cinco años de racha, 5.000 tareas o 500 horas de enfoque. Los que todavía no alcanzaste muestran su progreso en lugar de esconderse.

## Conclusión

Este sistema no está pensado para que compitas con nadie ni para que te enganches. Está pensado para responder a una sola pregunta con honestidad: *¿esto que estoy haciendo lo llevo sosteniendo el tiempo suficiente como para llamarlo un hábito?*

**Mira tu ruta de progreso en Zenth.**
`,
    author: 'Matías Zenth',
    date: '8 Aug, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=800',
    category: 'Gamificación',
    readTime: '10 min lectura'
  },
  {
    id: '3',
    title: 'Tu Vida en Píxeles: Cómo Funciona el Calendario de Estados de Ánimo en Zenth',
    excerpt: 'Descubre cómo el sistema "Year in Pixels" de Zenth te ayuda a entender tu bienestar emocional y encontrar tu flujo ideal.',
    content: `
En Zenth, creemos que la productividad no es solo tachar tareas, sino también entender cómo nos sentimos mientras lo hacemos. El **Calendario de Estados de Ánimo** (o "Year in Pixels") es una de nuestras herramientas más queridas, diseñada para ayudarte a visualizar tu bienestar emocional a lo largo de los meses.

## ¿Qué es el Calendario de Píxeles?

Es una representación visual de tu año, donde cada día es un pequeño círculo (un "píxel") de color. Al final del año, tendrás un mosaico vibrante que cuenta la historia de tus emociones, permitiéndote identificar patrones: ¿Eres más productivo cuando estás "Bien"? ¿Hay meses del año donde tu energía tiende a ser más "Baja"?

---

## Los Colores de tu Bienestar

El sistema utiliza una paleta de colores suaves y armoniosos para categorizar cómo te sientes:

*   **🟣 Excelente (#8B7FFF):** Días de flujo máximo, alegría y metas cumplidas.
*   **🟢 Bien (#A8E6CF):** Un día sólido, productivo y tranquilo.
*   **🟠 Neutral (#FFD3B6):** Un día equilibrado, sin grandes picos pero sin caídas.
*   **🔵 Bajo (#80D4FF):** Energía baja, cansancio o falta de motivación.
*   **🔴 Mal (#FFAAA5):** Días difíciles o de mucho estrés.
*   **⚪ Sin Registro (#E5E5E7):** Días en los que aún no has marcado tu estado.

---

## Características Principales

### 1. Vista Anual Completa
La pantalla principal te permite navegar por años y ver los 12 meses simultáneamente. Es la forma más rápida de detectar tendencias a largo plazo.

### 2. Interacción Fluida
- **Hover Dinámico:** Al pasar el ratón sobre cualquier día, el píxel se amplía para mostrarte la fecha exacta y el sentimiento registrado.
- **Registro Rápido:** Con un solo clic en cualquier "píxel", puedes abrir el selector para actualizar cómo te sientes hoy (o corregir un día pasado).

### 3. Sincronización en la Nube
Tus estados de ánimo se guardan de forma segura en tu cuenta. Esto significa que puedes empezar a registrar en la web y ver tu progreso en cualquier otro dispositivo donde uses Zenth.

### 4. Balance mensual
Dentro de **Mi ritmo**, el balance resume qué estado apareció con más frecuencia y cuántos días registraste. Es una lectura descriptiva, no un diagnóstico ni una puntuación de rendimiento.

---

## Cómo Sacarle el Máximo Provecho

1.  **Sé Honesto:** No todos los días pueden ser púrpuras. El valor real del calendario está en la honestidad del registro.
2.  **Busca Patrones:** Al final de cada mes, revisa tu cuadrícula. ¿Ves muchas manchas rojas o azules seguidas? Quizás sea momento de ajustar tu carga de trabajo o tomar un descanso.
3.  **Combínalo con tus Estadísticas:** Observa si tus días "Excelentes" coinciden con tus rachas de tareas más largas o tus mejores tiempos de enfoque.

## Conclusión

El calendario de estados de ánimo es tu espejo emocional en Zenth. Es una invitación a la pausa, a la reflexión y, sobre todo, a entender que para ser productivos, primero debemos estar bien con nosotros mismos.

**¿Ya elegiste tu color de hoy? Abre Mi ritmo en Zenth y deja tu registro.**
`,
    author: 'Matías Zenth',
    date: '10 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    category: 'Bienestar',
    readTime: '5 min lectura'
  },
  {
    id: '4',
    title: 'Productividad Humana: Por qué Zenth te pregunta cómo estás antes de decirte qué hacer',
    excerpt: '¿Vives para trabajar o trabajas para vivir? Descubre por qué el bienestar emocional es el motor real de tu productividad en Zenth.',
    content: `
Vivimos en la era de los "hackers de la productividad". Se nos dice que debemos ser máquinas, que cada minuto debe estar optimizado y que el descanso es para los débiles. Las aplicaciones de gestión de tareas suelen actuar como capataces digitales: si no terminas tu lista, te castigan con notificaciones rojas y una sensación de culpa abrumadora.

En Zenth, creemos que ese modelo está roto. Una lista de tareas no sirve de nada si el ser humano que la maneja está agotado. Por eso, hemos creado lo que llamamos **Productividad Humana**.

## El Problema de la "Productividad Tóxica"

La mayoría de nosotros hemos caído en la trampa: forzarnos a trabajar al 100% incluso en días en los que hemos dormido mal, estamos lidiando con problemas personales o simplemente nos sentimos "sin batería". Ignorar nuestras emociones no nos hace más eficientes; nos lleva directo al **burnout** (agotamiento extremo).

---

## La Solución Zenth: La Intersección de Tareas y Emociones

Zenth integra un registro sencillo de **bienestar emocional** junto al flujo de trabajo. No diagnostica ni interpreta tu salud: te ayuda a conservar un historial para tu propia reflexión.

### 1. Un recordatorio opcional
Zenth puede preguntarte cómo estuvo el día. Puedes ocultar ese recordatorio en Ajustes y registrar el ánimo cuando quieras desde **Mi ritmo**. Al elegir un estado —de Excelente a Mal— creas un punto de referencia para mirar más adelante.

### 2. El Espejo del Calendario de Píxeles
Al final del mes, tu calendario de estados de ánimo te cuenta una historia que tus estadísticas de tareas no pueden. ¿Ves una mancha roja que coincide con una semana de mucho trabajo? Zenth te ayuda a ver que ese cansancio no es pereza, es una respuesta natural de tu cuerpo.

### 3. Ajuste de Carga Basado en la Energía
Zenth no puede prevenir ni tratar el burnout, pero una organización flexible puede ayudarte a ajustar expectativas. En un día de mucha energía quizá avances una gran meta; en uno bajo puedes reprogramar tareas en Agenda sin recibir castigos ni perder el nivel alcanzado.

---

## Cómo Prevenir el Burnout con Zenth

Para que Zenth sea tu aliado y no tu juez, te recomendamos seguir estas tres prácticas:

*   **Escucha el patrón:** Si notas varios días en «Bajo» o «Mal», tómalo como una señal para revisar la carga, descansar o pedir apoyo si lo necesitas.
*   **Relaciona Esfuerzo y Ánimo:** Observa tus rachas. A veces, forzar una racha de 30 días cuando no te sientes bien es contraproducente. En Zenth, valoramos la racha honesta, no la racha forzada.
*   **Usa Enfoque para lo esencial:** En días de baja energía, elige una sola tarea, abre el temporizador global y decide de antemano cuándo terminar. La calidad importa más que la cantidad.

## Conclusión: Eres un Humano, No una Máquina

El éxito no es terminar cien tareas en un estado de agotamiento absoluto. El éxito es terminar el día con tus metas cumplidas y tu paz mental intacta. Zenth está diseñado para recordarte que **tú eres lo más importante de tu sistema de productividad.**

**Entra en Zenth, abre Mi ritmo y empieza a observar tu propio patrón.**
`,
    author: 'Matías Zenth',
    date: '17 Feb, 2026',
    imageUrl: '/blog/productivity.jpg',
    category: 'Filosofía',
    readTime: '7 min lectura'
  },
  {
    id: '5',
    title: 'Calidad sobre Cantidad: El Método de la "Gran Meta" de Zenth',
    excerpt: '¿Te sientes atrapado en la trampa de la falsa productividad? Descubre cómo el Método de la Gran Meta de Zenth te ayuda a priorizar el Trabajo Profundo.',
    content: `
¿Alguna vez has terminado el día agotado, habiendo tachado 20 tareas de tu lista, pero con la sensación de que no has avanzado nada en lo que realmente importa? Bienvenido a la trampa de la "falsa productividad". 

En Zenth, hemos diseñado un sistema para romper este ciclo: el **Método de la Gran Meta**.

## La diferencia entre estar ocupado y ser productivo

Estar ocupado es fácil. Responder correos, organizar carpetas o cambiar colores de un documento son tareas que nos dan una satisfacción inmediata pero que rara vez cambian nuestra vida o carrera. La verdadera productividad requiere lo que el autor Cal Newport llama **Deep Work** (Trabajo Profundo): la capacidad de concentrarse sin distracciones en una tarea cognitivamente exigente.

Zenth responde con dos herramientas conectadas: las **grandes metas** y **Enfoque**.

---

## Las Grandes Metas (Big Goals): El 80/20 de tu día

En Zenth, no todas las tareas son iguales. Cuando creas una tarea, tienes la opción de marcarla como una **Gran Meta**.

- **¿Qué es una Gran Meta?** Es esa tarea que, si la terminas hoy, hará que el resto del día haya valido la pena. Es el proyecto de escritura, el diseño de la nueva web o la planificación financiera de tu negocio.
- **La recompensa:** Completar una tarea normal te da 10 XP. Una Gran Meta te otorga **50 XP**. Zenth no solo te anima a hacer lo importante, sino que premia tu valentía por enfrentarte a lo difícil.

---

## Enfoque: una capa que te acompaña

Una gran meta sin tiempo protegido es solo una intención. Por eso, Zenth integra un temporizador global que se abre desde la cabecera y continúa aunque cambies de pantalla.

### 1. Una sola misión
Puedes iniciar Enfoque desde una tarea o escribir una misión libre. La sesión queda vinculada para que luego puedas revisar cuánto tiempo recibió ese trabajo.

### 2. Métricas de Valor
No contamos cuántas veces abriste la app; contamos cuántos **Minutos de Enfoque** has acumulado. Esta es la métrica real de tu progreso personal.

### 3. Sonido, descansos e historial
Puedes mezclar sonidos ambientales, guardar combinaciones, elegir música y terminar con descansos de 5, 10 o 15 minutos. El historial permite corregir la duración o borrar una sesión si registraste algo mal.

### 4. El camino de constelaciones
Los niveles superiores exigen decenas o cientos de horas de enfoque acumulado. El recorrido llega hasta Centauro, nivel 20, con una meta de 550 horas: no se puede completar inflando una lista en una tarde.

---

## Cómo aplicar el Método de la Gran Meta hoy mismo

*   **Define tu 1-3:** Al empezar el día, identifica de 1 a 3 tareas que realmente muevan la aguja. Márcalas como "Grandes Metas" en Zenth.
*   **Usa el temporizador:** No intentes trabajar en tu gran meta mientras saltas entre mensajes. Dale 25, 45 o los minutos que necesite, o usa el modo sin duración.
*   **Cierra el día:** Si terminaste tus Grandes Metas pero te quedaron 5 tareas pequeñas sin hacer, considérate victorioso. La calidad ha ganado a la cantidad.

## Conclusión

Zenth no se trata de hacer más cosas en menos tiempo; se trata de elegir lo importante y reservarle atención. Las grandes metas destacan la prioridad y Enfoque te ayuda a registrar el tiempo que realmente le dedicaste.

**¿Cuál es tu gran meta de hoy? Inicia sesión en Zenth y abre Enfoque desde la cabecera.**
`,
    author: 'Matías Zenth',
    date: '17 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    category: 'Productividad',
    readTime: '9 min lectura'
  },
  {
    id: '6',
    title: 'Fatiga de decisión: cómo reducir elecciones pequeñas sin rigidizar tu día',
    excerpt: 'Tomar decisiones repetidas consume atención. Zenth reduce elecciones operativas con bloques flexibles, vistas claras y rutinas configurables.',
    content: `
Cuando cada paso exige decidir dónde anotar, cuándo hacer, qué prioridad usar y en qué herramienta continuar, una parte importante de la atención se va antes de empezar. A esa sensación acumulada se la suele llamar **fatiga de decisión**.

## No es una batería literal

La idea popular de que la voluntad funciona como una reserva fija de glucosa es una simplificación discutida. Lo útil en la práctica es más modesto: demasiadas elecciones, interrupciones y cambios de contexto pueden aumentar la carga mental. Diseñar valores predeterminados y rutinas reduce ese trabajo administrativo.

## Cómo Zenth elimina la Fatiga de Decisión

Zenth está diseñado para reducir el número de decisiones triviales que debes tomar para ser productivo:

### 1. Precisión solo cuando hace falta
Agenda permite usar **Mañana, Tarde y Noche** sin elegir una hora exacta, pero también acepta inicio y duración cuando el compromiso sí lo necesita.

### 2. Contextos separados
Agenda responde qué cabe en el tiempo. Pizarras conserva el backlog de cada proyecto. La bandeja permite capturar primero y clasificar después, sin obligarte a resolver todo en el momento.

### 3. Rutinas configurables
Las tareas recurrentes guardan una decisión que no quieres repetir cada semana. Cuando cambias una aparición, Zenth pregunta si el ajuste afecta solo a esa fecha o a toda la serie.

### 4. Zen cuando ahorra campos
Puedes escribir una frase natural y pedir a Zen que proponga título, fecha, hora o prioridad. La sugerencia se revisa antes de guardar: automatizar no significa ceder el control.

**Simplifica tu vida con Zenth.**
`,
    author: 'Matías Zenth',
    date: '17 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1494178270175-e96de2971df9?auto=format&fit=crop&q=80&w=800',
    category: 'Psicología',
    readTime: '6 min lectura'
  },
  {
    id: '7',
    title: 'El Cerebro TDAH: Por qué las listas de tareas normales no funcionan para ti',
    excerpt: 'Las listas largas y rígidas pueden aumentar la fricción. Estas son las decisiones de Zenth para ofrecer estructura flexible y feedback visible.',
    content: `
Para algunas personas con TDAH, una lista larga puede dejar de ser un mapa y convertirse en una pared: sabes qué hay que hacer, pero iniciar, priorizar o estimar el tiempo sigue siendo difícil.

Zenth no trata el TDAH ni pretende representar a todas las personas neurodivergentes. Sí adopta decisiones de diseño que pueden resultar útiles: menos ruido, estructura flexible, captura rápida y feedback visible.

## 1. Motivación y recompensa inmediata

El TDAH se relaciona con diferencias complejas en atención, función ejecutiva y procesamiento de recompensas; no se resume en una simple «falta de dopamina». Aun así, un resultado visible e inmediato puede hacer que una acción abstracta se sienta más concreta.

**La Solución Zenth:**
*   **Feedback inmediato:** el sonido opcional y la animación confirman que la acción terminó.
*   **XP, niveles y logros:** convierten semanas de actividad en un recorrido visible, sin afirmar que una puntuación mida tu valor o tu salud.

---

## 2. La Ceguera al Tiempo (Time Blindness)

"Lo haré en 5 minutos" se convierte en 3 horas. Para muchas personas neurodivergentes, el tiempo es un concepto abstracto y resbaladizo. O es "ahora" o es "nunca". Los calendarios rígidos suelen generar ansiedad porque, al fallar en la primera tarea del día, se siente que todo el día está arruinado.

**La Solución Zenth:**
*   **Bloques Flexibles:** En lugar de horas exactas, usamos "Mañana", "Tarde" y "Noche". Esto da estructura sin la rigidez que provoca culpa.
*   **Enfoque visible:** el temporizador global mantiene una sola misión a la vista y puede funcionar con duración definida o como cronómetro.

---

## 3. Parálisis por Elección y Sobreestimulación

Tener 50 tareas pendientes en una lista larga genera **parálisis por análisis**. Tu cerebro intenta procesarlas todas a la vez, se sobrecarga y se apaga (shutdown). Además, las interfaces desordenadas contribuyen al ruido visual que agota tu energía cognitiva.

**La Solución Zenth:**
*   **Diseño de bajo ruido:** la interfaz es sobria. Fondo neutro, una sola tipografía y color únicamente donde significa algo. Nada parpadea, nada se pone rojo para presionarte.
*   **Divulgación progresiva:** no ves las 50 tareas a la vez. Ves el bloque del día que toca, y el resto espera fuera de la vista.
*   **Foco en lo esencial:** las grandes metas permiten distinguir lo importante sin obligarte a convertir cada pendiente en una urgencia.

## Conclusión

No existe una interfaz universal para el TDAH. Zenth ofrece opciones para adaptar el día, reducir decisiones pequeñas y hacer visible el avance; cada persona decide si encajan con su forma de trabajar.

> Este artículo describe decisiones de producto, no orientación médica. Si el TDAH afecta tu vida cotidiana, consulta a un profesional cualificado.

**Inicia sesión en Zenth y prueba una estructura flexible.**
`,
    author: 'Matías Zenth',
    date: '18 Feb, 2026',
    imageUrl: '/blog/brain.jpg',
    category: 'Neurociencia',
    readTime: '10 min lectura'
  },
  {
    id: '8',
    title: 'La trampa de cambiar de contexto: proteger la atención sin aislarte del trabajo',
    excerpt: 'Alternar tareas tiene un coste de reorientación. Agenda, Pizarras y el Enfoque global ayudan a conservar el contexto visible.',
    content: `
En muchas tareas cognitivas no hacemos dos cosas complejas al mismo tiempo: alternamos la atención. Cada cambio exige recordar dónde estábamos, recuperar información y decidir qué sigue. Ese coste varía según la tarea y la persona, pero se acumula cuando el día está fragmentado.

Mucha gente se siente "quemada" no por la cantidad de trabajo, sino por la fragmentación de su atención.

## El Costo del "Context Switching"

La investigación de Gloria Mark sobre trabajo interrumpido muestra que volver al contexto puede llevar tiempo y aumentar el estrés. La cifra popular de 23 minutos corresponde a observaciones concretas y no es una regla universal para cada interrupción.

Imagina esto repetido 50 veces al día. El resultado es un cerebro agotado, incapaz de procesar información compleja y propenso a errores.

---

## Cómo Zenth protege tu Reserva Cognitiva

Estas son las decisiones de diseño que se tomaron pensando exactamente en ese coste:

### 1. Protección contra el Ruido Visual
La mayoría de las apps de productividad son árboles de navidad de botones y alertas. Zenth utiliza un diseño de **baja carga cognitiva**: fondo neutro, una sola tipografía, jerarquía marcada por el tamaño y color reservado para lo que significa algo. La interfaz no compite por tu atención, y eso deja el lóbulo frontal libre para la tarea.

### 2. Enfoque como recordatorio visible
El panel global mantiene una misión y un reloj a la vista sin obligarte a abandonar Agenda, Pizarras o Biblioteca. También puede silenciar avisos no urgentes hasta que termine la sesión.

### 3. Externalización de la Memoria de Trabajo
Al volcar pendientes en Agenda o en la pizarra correspondiente reduces la necesidad de recordarlos activamente. Las dos áreas permanecen separadas hasta que decides vincular una tarea.

## Conclusión

La productividad sostenible no nace de forzar la máquina, sino de respetar su biología. Una buena herramienta no solo organiza tu trabajo: protege el recurso con el que lo haces.

> Este artículo se apoya en la investigación de **Gloria Mark** (Universidad de California, Irvine) sobre interrupciones y recuperación del foco. No sustituye el criterio de un profesional de la salud.

**Prueba Zenth y dale un respiro a tus neuronas.**
`,
    author: 'Matías Zenth',
    date: '20 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=800',
    category: 'Salud Mental',
    readTime: '7 min lectura'
  },
  {
    id: '9',
    title: 'Minimalismo Digital: La Ciencia de por qué menos interfaz significa más enfoque',
    excerpt: 'La Teoría de la Carga Cognitiva explica por qué las interfaces saturadas agotan tu cerebro. Descubre por qué Zenth optó por un diseño de "baja fricción".',
    content: `
Vivimos en una economía de atención. El psicólogo **Daniel Levitin**, autor de *The Organized Mind*, explica que cada píxel y notificación en tu pantalla compite por tus recursos neuronales. El desorden visual no es solo "feo"; aumenta los niveles de cortisol y reduce tu capacidad de resolución de problemas.

## La Teoría de la Carga Cognitiva

Nuestro cerebro tiene un ancho de banda limitado, conocido como memoria de trabajo. Si gastas el 20% de tu energía procesando menús complejos y alertas rojas, solo te queda un 80% para tu trabajo real.

Zenth aplica principios de **minimalismo funcional**:

### 1. Una sola voz tipográfica
Toda la interfaz usa una única familia tipográfica. La jerarquía la marcan el tamaño y el espaciado, no una mezcla de fuentes ni una escalera de pesos en negrita. Menos variables que procesar, menos energía gastada en descifrar la pantalla antes de leerla.

### 2. Jerarquía Visual Clara
En lugar de mostrarte todo a la vez, Zenth utiliza una divulgación progresiva. Solo ves lo que necesitas ver. Si es de noche, la app prioriza las tareas nocturnas, ocultando el ruido del resto del día.

### 3. El Color como Señal
El uso de colores pastel en el "Mood Tracker" es intencional. La psicología del color indica que los tonos suaves reducen la ansiedad visual, a diferencia de los colores saturados que activan la señal de alerta en la amígdala.

## Conclusión

El diseño no es solo cómo se ve, es cómo funciona. Zenth está diseñado para ser "invisible": lo suficientemente bonito para motivar, pero lo suficientemente simple para no distraer.

**Experimenta el diseño calmado de Zenth.**
`,
    author: 'Matías Zenth',
    date: '21 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    category: 'Diseño',
    readTime: '6 min lectura'
  },
  {
    id: '10',
    title: 'Nombrar para observar: qué puede —y qué no puede— hacer un registro de ánimo',
    excerpt: 'Poner una palabra al día crea un historial útil para reconocer patrones. No es un diagnóstico ni una herramienta terapéutica.',
    content: `
Muchas personas ignoran el hábito de registrar sus emociones porque sienten que es una pérdida de tiempo. Sin embargo, la ciencia nos dice lo contrario.

## "Name it to Tame it" (Decirlo para domarlo)

La frase popularizada por **Daniel Siegel** resume una idea sencilla: poner palabras a una experiencia puede crear distancia y facilitar la reflexión. Estudios de etiquetado afectivo han observado cambios en la respuesta cerebral bajo condiciones experimentales, pero eso no convierte un selector de color en terapia ni garantiza un efecto clínico.

Cuando Zenth pregunta «¿Cómo estuvo tu día?» y eliges un estado, estás creando un registro breve para tu propia observación.

---

## Beneficios Cognitivos del Registro

### 1. Una pausa breve
Elegir entre Excelente, Bien, Neutral, Bajo o Mal obliga a detenerse unos segundos. El valor está en repetir una pregunta comparable, no en encontrar una etiqueta perfecta.

### 2. Detección de Patrones
Un mes o un año de registros puede mostrar agrupaciones que no recordabas. Son pistas para hacerte mejores preguntas, no pruebas de causalidad entre ánimo y productividad.

### 3. Cierre Cognitivo
Para algunas personas, registrar al final del día funciona como un pequeño ritual de cierre. El recordatorio es opcional y se puede ocultar desde Ajustes.

> Si observas malestar persistente o intenso, el registro no sustituye la ayuda de un profesional de salud.

**Abre Mi ritmo en Zenth y empieza tu registro.**
`,
    author: 'Matías Zenth',
    date: '22 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
    category: 'Psicología',
    readTime: '5 min lectura'
  },
  {
    id: '11',
    title: 'Estado de flujo: preparar condiciones sin convertirlo en una obligación',
    excerpt: 'Objetivo claro, dificultad adecuada y menos interrupciones pueden favorecer una atención profunda. Zenth ayuda a preparar el contexto.',
    content: `
¿Alguna vez has estado tan inmerso en una tarea que el tiempo pareció desaparecer? Ese es el **estado de flujo**, un concepto desarrollado por el psicólogo Mihaly Csikszentmihalyi. No existe un botón que lo garantice ni una cifra universal de productividad: depende de la persona, la actividad y el contexto.

## Una experiencia, no un truco

El flujo se estudia como una experiencia de absorción, objetivos claros, feedback cercano y equilibrio entre reto y habilidad. Sus mecanismos son complejos y no se reducen a un único «cóctel» cerebral.

## Cómo Zenth prepara el contexto

### 1. Reto vs. Habilidad
Dividir una tarea grande en pasos puede acercar el reto a un tamaño manejable. Zen puede proponer micro-pasos, pero tú decides cuáles tienen sentido.

### 2. Menos interrupciones con Enfoque
El panel global mantiene una misión visible, puede silenciar avisos no urgentes y ofrece sonido ambiental. No fuerza el flujo; reduce parte de la fricción para sostener una tarea.

### 3. Feedback Inmediato
El reloj, los pasos de una tarea y el sonido opcional al completar ofrecen señales cercanas de avance sin convertirlas en una evaluación de tu valor personal.

**Prepara una sesión de Enfoque en Zenth.**
`,
    author: 'Matías Zenth',
    date: '23 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    category: 'Productividad',
    readTime: '8 min lectura'
  },
  {
    id: '12',
    title: 'Hábitos visibles: diseñar una repetición que puedas sostener',
    excerpt: 'La repetición importa, pero no ocurre por magia. Señales, pasos claros y una recompensa discreta pueden ayudar a mantener una rutina.',
    content: `
El cerebro conserva capacidad de cambio durante la vida, pero hablar de «reprogramarlo» simplifica procesos biológicos y conductuales complejos. Para una herramienta de productividad, la pregunta útil es más concreta: ¿cómo hacemos que una acción sea fácil de repetir y revisar?

## El Bucle del Hábito en Zenth

Un modelo popular describe señal, rutina y recompensa. No es la única explicación de los hábitos, pero funciona como una guía práctica para diseñar recordatorios y reducir fricción.

### 1. La Señal (Trigger)
Las notificaciones opcionales, una tarea recurrente o abrir Agenda por la mañana pueden funcionar como recordatorio. Tú eliges qué canales activar.

### 2. La Rutina
Es la acción concreta: revisar Agenda, vaciar la bandeja de una pizarra o iniciar una sesión breve de Enfoque. Cuanto menos ambigua sea, más fácil es repetirla.

### 3. La Recompensa (Dopamina)
Zenth devuelve una señal visible: **XP**, racha, logros y un mapa de 20 constelaciones. No mide tu valor ni garantiza un cambio cerebral; simplemente hace perceptible una continuidad que de otro modo sería fácil olvidar.

Con el tiempo, algunas acciones pueden requerir menos deliberación, aunque los hábitos cambian con el contexto y nunca quedan garantizados para siempre.

**Diseña una rutina pequeña en Zenth.**
`,
    author: 'Matías Zenth',
    date: '24 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
    category: 'Neurociencia',
    readTime: '7 min lectura'
  },
  {
    id: '13',
    title: 'Zen: IA de Google para quitar campos, no para tomar decisiones por ti',
    excerpt: 'Zen interpreta tareas, propone fechas, divide trabajo y transforma texto solo cuando se lo pides. Tú revisas y confirmas el resultado.',
    content: `
Zenth integra un asistente llamado **Zen**, que utiliza Google Gemini a través de funciones seguras de Supabase. Su objetivo es reducir trabajo de escritura y clasificación, no decidir por ti.

Cada respuesta es una propuesta que conviene revisar antes de guardar, especialmente fechas, horarios, prioridades y texto sensible.

## Funciones principales de Inteligencia Artificial ("Zen")

### 1. Entrada Mágica (Magic Input) ✨
En lugar de rellenar cada campo a mano, puedes usar el botón **"Pedir a Zen ✨"** dentro del editor de tareas.

**Ejemplo:** Puedes escribir algo como: *"Cena con Ana el viernes a las 9pm con prioridad alta"*
La IA extraerá automáticamente: el título, la fecha correcta, la hora y el nivel de prioridad, configurando la tarea por ti en un solo paso.

### 2. Auto-Agendado (Smart Schedule) 📅
Si tienes una tarea pero no sabes cuándo hacerla, Zen puede ayudarte. 

Al escribir el título de una tarea, verás un chip llamado **"Auto-Agendar"**. La IA analiza el texto de la tarea (por ejemplo, si dice "mañana" o "lunes") y la fecha actual para sugerirte el mejor día y hora para realizarla de forma lógica, optimizando tu carga de trabajo diaria.

### 3. Sugerencia de Micro-pasos (Task Breakdown) 📝
Para evitar que las tareas grandes te abrumen, Zen actúa como un coach de productividad. 

Al usar la opción **"Sugerir Pasos"**, la IA desglosa tu tarea principal en 3 a 5 micro-pasos inmediatos y concretos. Estos pasos se añaden como una lista de control (sub-tareas) para que sepas exactamente por dónde empezar con verbos de acción.

### 4. Categorización Inteligente 🤖
Aunque es una lógica más híbrida, el sistema sincroniza automáticamente el momento del día (**Mañana, Tarde, Noche**) según la hora de inicio que elijas o que la IA te sugiera, ayudándote a visualizar tu carga de trabajo de forma balanceada sin intervención manual.

### 5. Zen AI dentro de Biblioteca ✍️
La IA no se queda en las tareas. Dentro de una nota nativa de Biblioteca, selecciona un fragmento y pulsa **Zen AI** para:

- **Mejorar la redacción:** reescribe un párrafo confuso con un tono más claro.
- **Resumir:** condensa un bloque largo quedándose con las ideas principales.
- **Expandir:** toma una frase corta y la desarrolla con más profundidad.

Nada de esto ocurre solo: la IA actúa sobre el texto necesario para la opción que pulsaste. No recorre silenciosamente toda tu cuenta ni tus archivos de Google Drive.

---

## ¿Cómo activar estas funciones?

Para usar estas funciones, abre el editor de tareas y busca **Pedir a Zen**, **Auto-Agendar** o **Sugerir pasos**. En las notas nativas, Zen AI aparece en la barra del editor.

Zen puede equivocarse. No lo uses como fuente única para decisiones médicas, legales, financieras o de seguridad.

Zen está aquí para que dejes de preocuparte por *cómo* organizar y empieces a enfocarte en *hacer* lo que importa.

**Prueba Zen en Zenth, revisa su propuesta y conserva el control.**
`,
    author: 'Matías Zenth',
    date: '19 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'IA',
    readTime: '5 min lectura'
  }
];

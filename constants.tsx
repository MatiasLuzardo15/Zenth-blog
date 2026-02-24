import React from 'react';
import { BlogPost, Feature } from './types';
import { Timer, Trophy, Smile, Layout, Zap, Brain, PenTool } from 'lucide-react';

// Usamos ruta absoluta para asegurar que el navegador la encuentre desde la raíz
const heroImage = '/components/funcionalityheader.png';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '14',
    title: 'Más allá de las listas: Presentamos Entradas, tu nuevo lienzo de pensamientos en Zenth',
    excerpt: 'Descubre cómo las Notas Zen transforman Zenth de una lista de tareas a un ecosistema completo para tu creatividad y reflexión profunda.',
    content: `
¿Alguna vez has sentido que una simple línea de texto no es suficiente para contener una gran idea? En Zenth, sabemos que la productividad no solo se trata de tachar tareas, sino de cultivar pensamientos. Por eso, presentamos **Entradas (Notas Zen)**, un espacio de lienzo infinito diseñado para que tus ideas respiren.

Mientras que las Listas se enfocan en la ejecución del "hacer", las Entradas nacen para la reflexión, la creatividad y el registro profundo. Es el puente entre tu lista de pendientes y tu jardín digital de conocimiento.

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

## 4. El Poder del Ecosistema: "Expandir a Nota"
Esta es la función que lo cambia todo. ¿Tienes una tarea que se está volviendo compleja? Con un solo clic, puedes **Expandirla a una nota**. 

Esa simple tarea de "Planificar viaje" se convierte instantáneamente en una Entrada completa donde puedes pegar mapas, itinerarios, presupuestos y reflexiones, manteniendo el vínculo con tu lista original.

## 5. Seguridad y Enfoque
Tus notas se sincronizan automáticamente con **Supabase**, asegurando que nunca pierdas una sola palabra. Además, el **Modo de Enfoque** expande el editor a pantalla completa con un elegante desenfoque de fondo, eliminando cualquier distracción del mundo exterior.

## Conclusión
Las Entradas no son solo notas; son el lugar donde el caos se convierte en estructura. Es tu **Infinite Canvas** para crecer, aprender y recordar.

**[Prueba las nuevas Entradas en Zenth](/app) y empieza a escribir tu historia hoy mismo. ✨**
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

### 2. Un sistema que te recompensa (Literalmente)
Convertimos el "deber" en un juego. Con nuestro sistema de XP (Puntos de Experiencia) y Niveles Zen, cada tarea completada te acerca a ser un "Guerrero Zen".

- **Misiones Diarias:** Gana +10 XP por tareas estándar.
- **Grandes Objetivos:** ¡Conquista un "Big Goal" y recibe +50 XP!
- **Rachas Imparables:** Mantén tu consistencia y mira cómo crece tu racha diaria. No es solo una lista, es tu historial de victorias.

### 3. Mide lo que importa: Tus Minutos de Enfoque
No se trata de cuántos checks haces, sino de la calidad de tu atención. Zenth rastrea tus Minutos de Enfoque, dándote una métrica real de tu capacidad de profundidad (Deep Work). ¿Cuánto tiempo le dedicaste hoy a lo que de verdad mueve la aguja?

### 4. Tu bienestar emocional es prioridad
Productividad sin salud mental es agotamiento. Con nuestro Mood Tracker, puedes registrar cómo te sientes cada día. Con el tiempo, descubrirás cómo tu estado de ánimo influye en tus logros, permitiéndote ser más compasivo contigo mismo en los días difíciles.

### 5. Estética que calma los ojos
Olvídate de las interfaces frías y corporativas. Zenth utiliza un estilo "Sketchy" único, inspirado en el dibujo a mano y la textura del papel. Cada detalle está diseñado para ser visualmente placentero, convirtiendo tu planificación en un momento de creatividad y relax.


### 6. Vista Panorámica de tu Vida (Pixel View)
¿Cómo fue tu año? Con nuestra vista de Pixel View, cada día es un punto de color en tu lienzo anual. Identifica patrones, celebra meses de alta energía y planifica tu futuro con una perspectiva que las listas tradicionales no pueden ofrecer.

![Vista de la aplicación](/blog/appview.png)

---

## Datos Relevantes que te encantarán:

*   **Sincronización Total:** Tus tareas te acompañan en móvil y desktop sin que tengas que hacer nada.
*   **Hábitos Inteligentes:** Configura tareas recurrentes para que tus rutinas se gestionen solas.
*   **Mobile-First:** La app más rápida y táctil que hayas probado, diseñada para caber en tu mano y en tu vida.

## Conclusión

¿Estás listo para dejar de sobrevivir a tu lista de tareas y empezar a dominar tu día con calma?

**[Inicia sesión en Zenth ahora](/app) y vive la productividad consciente. ✨**
`,
    author: 'Matías Zenth',
    date: 'Hoy',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800',
    category: 'Lanzamiento',
    readTime: '6 min lectura'
  },
  {
    id: '2',
    title: 'Ascendiendo en Zenth: El Camino del Guerrero de la Productividad',
    excerpt: '¿Alguna vez has sentido que tu lista de tareas es una montaña interminable? Descubre cómo nuestro sistema de niveles transforma tu disciplina en una aventura.',
    content: `
¿Alguna vez has sentido que tu lista de tareas es una montaña interminable? En Zenth, no solo queremos que seas productivo, queremos que disfrutes del camino. Por eso, hemos diseñado un **Sistema de Niveles** que transforma tu disciplina en una aventura de crecimiento personal.

## ¿Qué es el Sistema de Niveles de Zenth?

No es solo un número. Tu nivel en Zenth es un reflejo de tu consistencia, tu enfoque y tu capacidad para cumplir tus promesas. Inspirado en la filosofía oriental y el minimalismo, nuestro sistema te premia por cada paso que das hacia una vida más organizada.

---

## Los 4 Pilares del Ascenso

Para subir de nivel en Zenth, la aplicación analiza cuatro dimensiones fundamentales de tu trabajo:

1.  **XP (Experiencia):** Se obtiene al completar tareas. Las tareas estándar te otorgan **10 XP**, mientras que las "Grandes Metas" (Big Goals) te dan un impulso de **50 XP**.
2.  **Racha (Streak):** La constancia es la clave. Cada día que registras actividad, tu racha aumenta. Mantenerla es vital para alcanzar los rangos más altos.
3.  **Tiempo de Enfoque:** No se trata solo de hacer, sino de estar presente. El tiempo que dedicas a sesiones de enfoque profundo es un requisito indispensable.
4.  **Tareas Totales:** La acumulación de victorias diarias construye tu legado en la aplicación.

---

## El Mapa del Progreso: 10 Niveles de Maestría

![Niveles de Zenth](/blog/levels.png)

Aquí tienes los rangos que puedes alcanzar. ¿En cuál te encuentras tú hoy?

| Nivel | Nombre | Requisito Clave | Filosofía |
| :--- | :--- | :--- | :--- |
| **1** | **Piedra en el Camino** | 0 XP | "Incluso la montaña más alta empezó siendo una piedrita." |
| **2** | **Bambú Flexible** | 250 XP + 3d Racha | Adaptabilidad y los primeros brotes de disciplina. |
| **3** | **Monje con Cafeína** | 750 XP + 7d Racha | Paz mental y productividad máxima en equilibrio. |
| **4** | **Guerrero del Post-it** | 1,750 XP + 14d | El papel es tu escudo y el lápiz tu espada. |
| **5** | **Arquitecto de Rutinas** | 3,500 XP + 30d | Diseñas tu tiempo con la precisión de un maestro. |
| **6** | **Maestro del Caos** | 6,000 XP + 50d | El caos te mira y parpadea primero. |
| **7** | **Sombra de la Eficiencia** | 10,000 XP + 75d | Te mueves por tus objetivos sin dejar rastro. |
| **8** | **Oráculo del Tiempo** | 15,000 XP + 100d | Ves el futuro de tu agenda antes de que suceda. |
| **9** | **Espíritu de la Calma** | 22,000 XP + 180d | Estado de flujo constante e ininterrumpido. |
| **10** | **Universo Expandido** | 30,000 XP + 365d | Has alcanzado el Nirvana de la organización. |

---

## Consejos para Subir de Nivel más Rápido

- **No rompas la cadena:** Mantener tu racha es el multiplicador más poderoso. Incluso si solo completas una tarea pequeña, ¡regístrala!
- **Enfócate en lo Importante:** Utiliza el temporizador de enfoque. Muchos niveles requieren horas mínimas de trabajo profundo.
- **Define Grandes Metas:** No todas las tareas son iguales. Marca tus hitos más importantes como "Big Goals" para obtener un bonus de +50 XP.

## Conclusión

El sistema de niveles de Zenth no busca que compitas con otros, sino que superes a tu versión de ayer. Cada ascenso es una prueba de que eres dueño de tu tiempo.

**¿Listo para el próximo nivel? [Inicia sesión en Zenth](/app) y empieza tu sesión hoy mismo. ✨**
`,
    author: 'Matías Zenth',
    date: '15 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=800',
    category: 'Gamificación',
    readTime: '8 min lectura'
  },
  {
    id: '3',
    title: 'Tu Vida en Píxeles: Cómo Funciona el Calendario de Estados de Ánimo en Zenth',
    excerpt: 'Descubre cómo el sistema "Year in Pixels" de Zenth te ayuda a entender tu bienestar emocional y encontrar tu flujo ideal.',
    content: `
En Zenth, creemos que la productividad no es solo tachar tareas, sino también entender cómo nos sentimos mientras lo hacemos. El **Calendario de Estados de Ánimo** (o "Year in Pixels") es una de nuestras herramientas más queridas, diseñada para ayudarte a visualizar tu bienestar emocional a lo largo de los meses.

## ¿Qué es el Calendario de Píxeles?

Es una representación visual de tu año, donde cada día es un pequeño círculo (un "píxel") de color. Al final del año, tendrás un mosaico vibrante que cuenta la historia de tus emociones, permitiéndote identificar patrones: ¿Eres más productivo cuando estás "Bien"? ¿Hay meses del año donde tu energía tiende a ser más "Baja"?

![Calendario de Emociones](/blog/emotioncalendar.png)

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

---

## Cómo Sacarle el Máximo Provecho

1.  **Sé Honesto:** No todos los días pueden ser púrpuras. El valor real del calendario está en la honestidad del registro.
2.  **Busca Patrones:** Al final de cada mes, revisa tu cuadrícula. ¿Ves muchas manchas rojas o azules seguidas? Quizás sea momento de ajustar tu carga de trabajo o tomar un descanso.
3.  **Combínalo con tus Estadísticas:** Observa si tus días "Excelentes" coinciden con tus rachas de tareas más largas o tus mejores tiempos de enfoque.

## Conclusión

El calendario de estados de ánimo es tu espejo emocional en Zenth. Es una invitación a la pausa, a la reflexión y, sobre todo, a entender que para ser productivos, primero debemos estar bien con nosotros mismos.

**¿Ya elegiste tu color de hoy? [Inicia sesión en Zenth](/app) y deja tu marca. ✨**
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

Zenth es una de las pocas herramientas que integra tu **bienestar emocional** en el núcleo de tu flujo de trabajo. Aquí te explicamos cómo lo logramos:

### 1. El Registro de Estado de Ánimo como Pausa Obligatoria
Antes de sumergirte en tu lista de "Hoy", Zenth te invita a registrar tu estado de ánimo. No es una estadística vacía; es una forma de autoconocimiento. Al elegir un color —desde el vibrante púrpura de "Excelente" hasta el suave rojo de "Mal"— estás validando tu estado actual. 

### 2. El Espejo del Calendario de Píxeles
Al final del mes, tu calendario de estados de ánimo te cuenta una historia que tus estadísticas de tareas no pueden. ¿Ves una mancha roja que coincide con una semana de mucho trabajo? Zenth te ayuda a ver que ese cansancio no es pereza, es una respuesta natural de tu cuerpo.

### 3. Ajuste de Carga Basado en la Energía
Zenth soluciona el burnout a través de su organización flexible. En un día "Excelente", puedes atacar tus **Grandes Metas (Big Goals)**. En un día donde tu humor es "Bajo", Zenth te da la flexibilidad de mover tareas a "Mañana" o "En cualquier momento" sin penalizaciones agresivas.

---

## Cómo Prevenir el Burnout con Zenth

Para que Zenth sea tu aliado y no tu juez, te recomendamos seguir estas tres prácticas:

*   **Escucha a tus Píxeles:** Si notas que llevas varios días en color "Bajo" o "Mal", Zenth te está dando permiso visual para descansar. Reduce tu lista de "Hoy" a lo mínimo indispensable.
*   **Relaciona Esfuerzo y Ánimo:** Observa tus rachas. A veces, forzar una racha de 30 días cuando no te sientes bien es contraproducente. En Zenth, valoramos la racha honesta, no la racha forzada.
*   **Usa el Modo Enfoque para lo esencial:** En días de baja energía, no trates de hacerlo todo. Elige una sola Gran Meta, activa el temporizador de enfoque y, cuando termines, cierra la aplicación. La calidad importa más que la cantidad.

## Conclusión: Eres un Humano, No una Máquina

El éxito no es terminar cien tareas en un estado de agotamiento absoluto. El éxito es terminar el día con tus metas cumplidas y tu paz mental intacta. Zenth está diseñado para recordarte que **tú eres lo más importante de tu sistema de productividad.**

**No esperes a estar agotado para empezar a escucharte. [Entra en Zenth](/app), marca tu estado de ánimo y trabajemos juntos, respetando tu ritmo. ✨**
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

Zenth soluciona esto a través de dos herramientas clave: las **Big Goals** y el **Focus Mode**.

---

## Las Grandes Metas (Big Goals): El 80/20 de tu día

En Zenth, no todas las tareas son iguales. Cuando creas una tarea, tienes la opción de marcarla como una **Gran Meta**.

- **¿Qué es una Gran Meta?** Es esa tarea que, si la terminas hoy, hará que el resto del día haya valido la pena. Es el proyecto de escritura, el diseño de la nueva web o la planificación financiera de tu negocio.
- **La recompensa:** Completar una tarea normal te da 10 XP. Una Gran Meta te otorga **50 XP**. Zenth no solo te anima a hacer lo importante, sino que premia tu valentía por enfrentarte a lo difícil.

---

## Focus Mode: Blindaje contra distracciones

Una Gran Meta sin enfoque es solo un deseo. Por eso, Zenth integra un **Temporizador de Enfoque (Focus Mode)** diseñado para proteger tu tiempo.

### 1. Inmersión Total
Al activar el modo enfoque, Zenth se convierte en un entorno minimalista que te ayuda a mantener la vista en el objetivo.

### 2. Métricas de Valor
No contamos cuántas veces abriste la app; contamos cuántos **Minutos de Enfoque** has acumulado. Esta es la métrica real de tu progreso personal.

### 3. El Camino a la Maestría
Muchos de los niveles superiores en Zenth (como "Oráculo del Tiempo" o "Universo Expandido") requieren que hayas acumulado decenas de horas de enfoque total. No puedes "jugar" con el sistema; tienes que dedicar el tiempo.

![Focus Mode](/blog/focus.png)

---

## Cómo aplicar el Método de la Gran Meta hoy mismo

*   **Define tu 1-3:** Al empezar el día, identifica de 1 a 3 tareas que realmente muevan la aguja. Márcalas como "Grandes Metas" en Zenth.
*   **Usa el temporizador:** No intentes trabajar en tu Gran Meta mientras saltas a WhatsApp o redes sociales. Dale a tu Gran Meta 25 o 50 minutos de enfoque total en Zenth.
*   **Cierra el día:** Si terminaste tus Grandes Metas pero te quedaron 5 tareas pequeñas sin hacer, considérate victorioso. La calidad ha ganado a la cantidad.

## Conclusión

Zenth no se trata de hacer más cosas en menos tiempo; se trata de hacer las cosas correctas con toda tu atención. Al priorizar tus **Grandes Metas** y protegerlas con el **Modo Enfoque**, estás entrenando a tu cerebro para alcanzar niveles de excelencia que la mayoría de la gente nunca llega a tocar.

**¿Cuál es tu Gran Meta de hoy? [Inicia sesión en Zenth](/app) y empieza tu sesión de enfoque. ✨**
`,
    author: 'Matías Zenth',
    date: '17 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    category: 'Productividad',
    readTime: '9 min lectura'
  },
  {
    id: '6',
    title: 'La Fatiga de Decisión: Por qué Steve Jobs vestía siempre igual',
    excerpt: '¿Te sientes agotado antes de empezar a trabajar? Descubre cómo la "Fatiga de Decisión" drena tu voluntad y cómo Zenth simplifica tu vida.',
    content: `
¿Por qué Barack Obama solo usa trajes azules o grises? ¿Por qué Steve Jobs siempre llevaba el mismo cuello de tortuga negro? La respuesta no es falta de estilo, es **economía cognitiva**.

Los psicólogos lo llaman **Fatiga de Decisión**.

## Tu Voluntad es una Batería Limitada

Cada decisión que tomas a lo largo del día, desde "¿qué desayuno?" hasta "¿qué tarea hago primero?", consume una cantidad finita de glucosa y neurotransmisores en tu corteza prefrontal.

Al llegar a la tarde, si has tomado cientos de micro-decisiones irrelevantes, tu cerebro entra en modo "ahorro de energía". Esto se manifiesta como procrastinación o impulsividad (comer mal, no ir al gimnasio).

## Cómo Zenth elimina la Fatiga de Decisión

Zenth está diseñado para reducir el número de decisiones triviales que debes tomar para ser productivo:

### 1. Bloques de Energía Predefinidos
En lugar de preguntarte "¿a qué hora exacta hago esto?", Zenth te ofrece tres cubos simples: **Mañana, Tarde, Noche**. Clasificar es más rápido que agendar. Tu cerebro descansa.

### 2. La Pregunta Única
Al abrir la app, Zenth no te muestra todo tu backlog de 100 tareas. Te muestra "Hoy". Y dentro de Hoy, te anima a elegir solo **1-3 Grandes Metas**. Simplificamos el menú para que puedas elegir el plato principal sin agobio.

### 3. Rutinas Automatizadas
Las tareas recurrentes en Zenth funcionan como el cuello de tortuga de Jobs: una decisión tomada una vez que se repite automáticamente. "Pagar facturas" aparece solo cuando debe aparecer, sin que tengas que recordarlo.

**[Simplifica tu vida con Zenth.](/app)**
`,
    author: 'Roy F. Baumeister (Ref.)',
    date: '17 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1494178270175-e96de2971df9?auto=format&fit=crop&q=80&w=800',
    category: 'Psicología',
    readTime: '6 min lectura'
  },
  {
    id: '7',
    title: 'El Cerebro TDAH: Por qué las listas de tareas normales no funcionan para ti',
    excerpt: '¿Sufres de parálisis por análisis? Descubre cómo Zenth utiliza la neurociencia para hackear la dopamina y vencer la procrastinación.',
    content: `
Para una persona neurotípica, una lista de tareas es un mapa. Para una mente con TDAH (Trastorno por Déficit de Atención e Hiperactividad), a menudo es un muro de ladrillos. Miras la lista, sabes que tienes que hacer las cosas, pero existe una desconexión física entre el "saber" y el "hacer". 

En Zenth, hemos diseñado nuestra app basándonos en cómo funciona realmente el cerebro neurodivergente. Aquí te explicamos por qué las herramientas tradicionales te fallan y cómo Zenth es diferente.

## 1. La Caza de Dopamina (Dopamine Hunting)

El cerebro TDAH tiene una deficiencia en la transmisión de dopamina, el neurotransmisor de la recompensa y la motivación. Las listas de papel o las apps corporativas grises no dan dopamina; solo dan obligaciones. El resultado es que tu cerebro busca estimulación en otro lado (redes sociales, comida, videojuegos).

**La Solución Zenth:**
Convertimos la productividad en un videojuego.
*   **Feedback Inmediato:** El sonido satisfactorio al completar una tarea y la animación visual proporcionan una micro-recompensa sensorial inmediata.
*   **XP y Niveles:** Ver subir tu barra de progreso libera esa pequeña dosis de dopamina necesaria para mantenerte enganchado a tus propias metas. Hackeamos tu sistema de recompensa para que *quieras* hacer la siguiente tarea.

---

## 2. La Ceguera al Tiempo (Time Blindness)

"Lo haré en 5 minutos" se convierte en 3 horas. Para muchas personas neurodivergentes, el tiempo es un concepto abstracto y resbaladizo. O es "ahora" o es "nunca". Los calendarios rígidos suelen generar ansiedad porque, al fallar en la primera tarea del día, se siente que todo el día está arruinado.

**La Solución Zenth:**
*   **Bloques Flexibles:** En lugar de horas exactas, usamos "Mañana", "Tarde" y "Noche". Esto da estructura sin la rigidez que provoca culpa.
*   **Focus Mode Visceral:** Nuestro temporizador no es solo un reloj; es un compromiso visual. Al activarlo, te anclas al presente, combatiendo la dispersión temporal.

---

## 3. Parálisis por Elección y Sobreestimulación

Tener 50 tareas pendientes en una lista larga genera **parálisis por análisis**. Tu cerebro intenta procesarlas todas a la vez, se sobrecarga y se apaga (shutdown). Además, las interfaces desordenadas contribuyen al ruido visual que agota tu energía cognitiva.

**La Solución Zenth:**
*   **Diseño Calmante:** Nuestro estilo "Sketchy" (boceto a mano) es intencionalmente bajo en "ruido digital". Es amigable, imperfecto y humano, reduciendo la ansiedad de perfección.
*   **Foco en lo Esencial:** Zenth te empuja a priorizar tus "Grandes Metas". Al destacar 1 o 3 cosas importantes, silenciamos el resto del ruido para que puedas avanzar.

## Conclusión

Tu cerebro no está roto; simplemente tiene un sistema operativo diferente. Las herramientas de productividad estándar están diseñadas para cerebros lineales. Zenth es la interfaz compatible que estabas esperando: una que entiende tu necesidad de novedad, desafío y feedback inmediato.

**Deja de luchar contra tu propia mente. [Inicia sesión en Zenth](/app) y dale a tu cerebro las herramientas que necesita para brillar. ✨**
`,
    author: 'Matías Zenth',
    date: '18 Feb, 2026',
    imageUrl: '/blog/brain.jpg',
    category: 'Neurociencia',
    readTime: '10 min lectura'
  },
  {
    id: '8',
    title: 'La Trampa de la Multitarea: Lo que la Neurociencia dice sobre tu Atención',
    excerpt: '¿Crees que eres bueno haciendo varias cosas a la vez? La ciencia dice lo contrario. Descubre cómo el "Context Switching" reduce tu CI y cómo Zenth te ayuda a recuperar tu capacidad cognitiva.',
    content: `
El cerebro humano no está diseñado para la multitarea. A pesar de lo que nos gusta creer, cuando intentamos hacer dos cosas a la vez, en realidad estamos haciendo "switch-tasking": cambiando rápidamente el foco de atención de una cosa a otra. Y este proceso tiene un costo metabólico y cognitivo altísimo.

Como neuropsicóloga, a menudo veo pacientes que se sienten "quemados" no por la cantidad de trabajo, sino por la fragmentación de su atención.

## El Costo del "Context Switching"

Cada vez que interrumpes una tarea para mirar una notificación o cambiar de pestaña, tu cerebro necesita un tiempo de "re-calibración" para volver al nivel de profundidad anterior. Estudios de la Universidad de California sugieren que podemos tardar hasta **23 minutos** en recuperar el foco total tras una interrupción.

Imagina esto repetido 50 veces al día. El resultado es un cerebro agotado, incapaz de procesar información compleja y propenso a errores.

---

## Cómo Zenth protege tu Reserva Cognitiva

He analizado Zenth desde una perspectiva clínica y he encontrado herramientas que funcionan como verdaderos "protectores" de la atención:

### 1. Protección contra el Ruido Visual
La mayoría de las apps de productividad son árboles de navidad de botones y alertas. Zenth utiliza un diseño de **baja carga cognitiva**. Su estética de papel y trazos simples no compite por tu atención; descansa la vista y permite que el lóbulo frontal se centre en la tarea, no en la interfaz.

### 2. El Temporizador como Ancla (Focus Mode)
En terapia, utilizamos técnicas de "anclaje" para tratar la ansiedad. El Focus Mode de Zenth actúa de manera similar: al iniciar el temporizador, creas un compromiso contractual con tu yo presente. "Durante estos 25 minutos, solo existe esta tarea". Esto reduce la ansiedad por lo que "tienes que hacer después".

### 3. Externalización de la Memoria de Trabajo
Al volcar tus pendientes y organizarlos por bloques de energía (Mañana/Tarde/Noche), liberas tu memoria de trabajo. Tu cerebro deja de gastar energía en *recordar* qué hacer y empieza a usarla en *hacerlo*.

## Conclusión Clínica

La productividad sostenible no nace de forzar la máquina, sino de respetar su biología. Herramientas como Zenth no solo organizan tu trabajo; cuidan la salud de tu órgano más importante: tu cerebro.

**Dra. Elena Vital**
*Neuropsicóloga Clínica y Especialista en Alto Rendimiento*

**[Prueba Zenth y dale un respiro a tus neuronas.](/app)**
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

Zenth aplica principios de **Ludic Minimalism**:

### 1. La Calidez de lo Analógico
Estudios en la Universidad de Tokio sugieren que escribir a mano o interactuar con texturas "papel" mejora la retención de memoria más que las interfaces digitales frías. Zenth imita esta estética para evocar esa calma cognitiva.

### 2. Jerarquía Visual Clara
En lugar de mostrarte todo a la vez, Zenth utiliza una divulgación progresiva. Solo ves lo que necesitas ver. Si es de noche, la app prioriza las tareas nocturnas, ocultando el ruido del resto del día.

### 3. El Color como Señal
El uso de colores pastel en el "Mood Tracker" es intencional. La psicología del color indica que los tonos suaves reducen la ansiedad visual, a diferencia de los colores saturados que activan la señal de alerta en la amígdala.

## Conclusión

El diseño no es solo cómo se ve, es cómo funciona. Zenth está diseñado para ser "invisible": lo suficientemente bonito para motivar, pero lo suficientemente simple para no distraer.

**[Experimenta el diseño calmado de Zenth.](/app)**
`,
    author: 'Daniel Levitin (Ref.)',
    date: '21 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    category: 'Diseño',
    readTime: '6 min lectura'
  },
  {
    id: '10',
    title: 'Nombrar para Domar: La ciencia detrás del "Mood Tracking"',
    excerpt: '¿Por qué Zenth te pregunta cómo estás? La neurociencia demuestra que etiquetar tus emociones reduce la actividad de la amígdala y previene el burnout.',
    content: `
Muchas personas ignoran el hábito de registrar sus emociones porque sienten que es una pérdida de tiempo. Sin embargo, la ciencia nos dice lo contrario.

## "Name it to Tame it" (Decirlo para domarlo)

El psiquiatra **Dr. Dan Siegel** acuñó esta frase para explicar un mecanismo cerebral fascinante: el simple acto de ponerle una etiqueta verbal a una emoción ("Me siento ansioso", "Estoy neutral") disminuye la actividad eléctrica en la amígdala —el centro del miedo en el cerebro— y aumenta la actividad en la corteza prefrontal derecha, responsable de la regulación emocional.

Cuando Zenth te pregunta "¿Cómo estás?" y tú seleccionas un color, estás realizando una micro-intervención terapéutica.

---

## Beneficios Cognitivos del Registro

### 1. Autoconciencia (Metacognición)
Estudios en la *University of Rochester* encontraron que la autoconciencia es un predictor clave del éxito profesional. Al ver tu mes en píxeles, pasas de "ser" tus emociones a "observarlas".

### 2. Detección de Patrones
Registrar tus datos te permite correlacionar: "Mis días más productivos suelen ser los 'Neutrales', no los 'Excelentes'". Esto te ayuda a planificar mejor tu carga de trabajo basándote en datos reales, no en suposiciones.

### 3. Cierre Cognitivo
Hacer el registro al final del día actúa como un ritual de cierre, ayudando a tu cerebro a desconectar del modo trabajo y pasar al modo descanso.

**[Empieza tu diario emocional en Zenth hoy.](/app)**
`,
    author: 'Dr. Dan Siegel (Ref.)',
    date: '22 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
    category: 'Psicología',
    readTime: '5 min lectura'
  },
  {
    id: '11',
    title: 'El Estado de Flujo: Cómo hackear tu cerebro para la productividad extrema',
    excerpt: 'El "Flow" no es magia, es neuroquímica. Descubre cómo Zenth utiliza los desencadenantes del flujo para ayudarte a entrar en la zona.',
    content: `
¿Alguna vez has estado tan inmerso en una tarea que el tiempo pareció desaparecer? Ese es el **Estado de Flujo**, un término popularizado por el psicólogo Mihaly Csikszentmihalyi. Según un estudio de McKinsey, los ejecutivos en estado de flujo son hasta un **500% más productivos**.

## La Neuroquímica del Flujo

Durante el flujo, el cerebro libera un cóctel de neuroquímicos de rendimiento: dopamina, norepinefrina y anandamida. Además, ocurre algo llamado **"Hipofrontalidad Transitoria"**: la parte de tu cerebro que duda y se critica a sí misma se apaga temporalmente.

## Cómo Zenth activa el Flujo

### 1. Reto vs. Habilidad
El flujo ocurre cuando el desafío de la tarea iguala tu nivel de habilidad. Zenth te permite dividir tareas grandes ("Big Goals") en pasos manejables, manteniendo ese equilibrio perfecto.

### 2. Eliminación de Distracciones (Focus Mode)
Para entrar en flujo, necesitas de 15 a 20 minutos de concentración ininterrumpida. El **Focus Mode** de Zenth protege ese tiempo sagrado, actuando como un portero para tu atención.

### 3. Feedback Inmediato
El cerebro necesita saber que está progresando. Las barras de XP y el sonido al completar tareas en Zenth proporcionan ese feedback instantáneo necesario para mantener el ciclo de dopamina activo.

**[Entra en la zona con Zenth.](/app)**
`,
    author: 'Mihaly Csikszentmihalyi (Ref.)',
    date: '23 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    category: 'Productividad',
    readTime: '8 min lectura'
  },
  {
    id: '12',
    title: 'Neuroplasticidad y Hábitos: Reprogramando tu mente con Zenth',
    excerpt: 'Tu cerebro puede cambiar físicamente. Aprende cómo la repetición y la recompensa en Zenth fortalecen nuevas conexiones neuronales.',
    content: `
La vieja idea de que el cerebro adulto no cambia es falsa. La **Neuroplasticidad** es la capacidad del cerebro para formar nuevas conexiones neuronales a lo largo de la vida. Como dice el principio de Hebb: *"Las neuronas que disparan juntas, permanecen juntas"*.

## El Bucle del Hábito en Zenth

Para formar un hábito, necesitas tres elementos (según *The Power of Habit* de Charles Duhigg): Señal, Rutina y Recompensa.

### 1. La Señal (Trigger)
Las notificaciones suaves de Zenth o simplemente abrir la app por la mañana actúan como el disparador para tu sesión de planificación.

### 2. La Rutina
Es la acción en sí: organizar tu día en bloques de Mañana/Tarde/Noche. Al hacerlo repetidamente en la misma interfaz, fortaleces esa vía neuronal.

### 3. La Recompensa (Dopamina)
Aquí es donde brilla Zenth. Ganar **XP**, ver subir tu nivel y mantener tu racha (Streak) libera dopamina. Esta recompensa química le dice a tu cerebro: *"Esto se sintió bien, hazlo de nuevo mañana"*.

Con el tiempo, la "fuerza de voluntad" deja de ser necesaria porque el comportamiento se ha automatizado en los ganglios basales del cerebro.

**[Empieza a recablear tu cerebro hoy.](/app)**
`,
    author: 'Charles Duhigg (Ref.)',
    date: '24 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
    category: 'Neurociencia',
    readTime: '7 min lectura'
  },
  {
    id: '13',
    title: 'Zen: Cómo la IA de Google está Redefiniendo tu Productividad en Zenth',
    excerpt: '¿Te imaginas tener un coach de productividad personal disponible 24/7? Conoce a Zen, el asistente inteligente que hace el trabajo pesado por ti.',
    content: `
La aplicación Zenth integra un asistente inteligente llamado **"Zen"**, que utiliza la IA de Google (Gemini) a través de funciones en la nube (Supabase Edge Functions) para llevar tu organización al siguiente nivel.

No se trata solo de añadir tareas; se trata de delegar la carga cognitiva de la planificación a un sistema inteligente.

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

---

## ¿Cómo activar estas funciones?

Para usar estas funciones, solo tienes que abrir el **Editor de Tareas** (el botón +) y buscar los iconos de destellos o el botón de **"Pedir a Zen"**.

Zen está aquí para que dejes de preocuparte por *cómo* organizar y empieces a enfocarte en *hacer* lo que importa.

**[Prueba a Zen ahora en Zenth](/app) y experimenta la productividad aumentada. ✨**
`,
    author: 'Matías Zenth',
    date: '19 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'IA',
    readTime: '5 min lectura'
  }
];


export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Neurodivergente Friendly',
    description: 'Diseñada para cerebros TDAH. Bloques de tiempo claros y recompensas inmediatas de dopamina.',
    icon: <Brain className="w-6 h-6 text-zenth-600" />
  },
  {
    id: 'f2',
    title: '10 Niveles Zen',
    description: 'Evoluciona tu avatar de Panda desde "Piedra en el Camino" hasta "Maestro del Caos".',
    icon: <Trophy className="w-6 h-6 text-zenth-600" />
  },
  {
    id: 'f3',
    title: 'Semáforo Emocional',
    description: 'Rastrea si tu día es Lavanda (Excelente) o Rosa (Mal). Recibe consejos según tu energía.',
    icon: <Smile className="w-6 h-6 text-zenth-600" />
  },
  {
    id: 'f4',
    title: 'Foco Inmediato',
    description: 'Sin configuraciones eternas. Entra en Zenth, pon el timer de 25min y entra en la zona.',
    icon: <Zap className="w-6 h-6 text-zenth-600" />
  },
  {
    id: 'f5',
    title: 'Zen AI Assistant',
    description: 'Usa Magic Input y Auto-Agendado inteligente con Google Gemini.',
    icon: <Zap className="w-6 h-6 text-zenth-600" />
  },
  {
    id: 'f6',
    title: 'Entradas (Notas Zen)',
    description: 'Lienzo infinito con Editor Pro, imágenes y tipografía dinámica.',
    icon: <PenTool className="w-6 h-6 text-zenth-600" />
  }
];
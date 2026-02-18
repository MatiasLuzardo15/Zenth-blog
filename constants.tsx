import React from 'react';
import { BlogPost, Feature } from './types';
import { Timer, Trophy, Smile, Layout, Zap, Brain } from 'lucide-react';

// Usamos ruta absoluta para asegurar que el navegador la encuentre desde la raíz
const heroImage = '/components/funcionalityheader.png';

export const BLOG_POSTS: BlogPost[] = [
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

**[Inicia sesión en Zenth ahora](https://www.zenth.space/#/auth) y vive la productividad consciente. ✨**
`,
    author: 'El Creador',
    date: 'Hoy',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800',
    category: 'Lanzamiento'
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

**¿Listo para el próximo nivel? [Inicia sesión en Zenth](https://www.zenth.space/#/auth) y empieza tu sesión hoy mismo. ✨**
`,
    author: 'Matías Zenth',
    date: '15 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=800',
    category: 'Gamificación'
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

**¿Ya elegiste tu color de hoy? [Inicia sesión en Zenth](https://www.zenth.space/#/auth) y deja tu marca. ✨**
`,
    author: 'Sofia Design',
    date: '10 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    category: 'Bienestar'
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

**No esperes a estar agotado para empezar a escucharte. [Entra en Zenth](https://www.zenth.space/#/auth), marca tu estado de ánimo y trabajemos juntos, respetando tu ritmo. ✨**
`,
    author: 'Matías Zenth',
    date: '17 Feb, 2026',
    imageUrl: '/blog/productivity.jpg',
    category: 'Filosofía'
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

**¿Cuál es tu Gran Meta de hoy? [Inicia sesión en Zenth](https://www.zenth.space/#/auth) y empieza tu sesión de enfoque. ✨**
`,
    author: 'Matías Zenth',
    date: '17 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    category: 'Productividad'
  },
  {
    id: '6',
    title: 'El Efecto Cascada: Construcción de Hábitos sin Esfuerzo en Zenth',
    excerpt: '¿Tus propósitos mueren en febrero? Descubre cómo el Efecto Cascada de Zenth usa la psicología para crear hábitos inquebrantables.',
    content: `
La mayoría de los propósitos de año nuevo mueren en febrero. ¿Por qué? Porque confiamos demasiado en la fuerza de voluntad, un recurso que es limitado y traicionero. En Zenth, hemos diseñado una arquitectura que no depende de tu voluntad, sino de tu psicología natural.

Bienvenidos al **Efecto Cascada**.

## La Fricción: El Enemigo de tus Nuevos Hábitos

El cerebro humano ama lo familiar y teme el esfuerzo. Empezar a meditar, estudiar un nuevo idioma o simplemente organizar el día requiere "energía de activación". Si esa energía es muy alta, simplemente no lo haces.

Zenth reduce la fricción inicial mediante tres mecanismos psicológicos:

---

### 1. El Poder de la Racha (Streaks)
No hay nada más doloroso para un cerebro humano que romper una cadena que ha costado construir. 
- **Feedback Inmediato:** Cada vez que registras actividad, Zenth te premia con un mensaje de ánimo y un incremento en tu racha.
- **La Barrera del Abandono:** Cuando llevas una racha de 10 o 20 días, la pereza de hoy se enfrenta al "miedo" de perder lo logrado. La racha de Zenth es tu guardaespaldas contra la procrastinación.

### 2. Gamificación: De la Obligación al Juego
Al convertir la productividad en un sistema de niveles (XP), Zenth cambia el "tengo que trabajar" por el "quiero subir de nivel".
- **Reconocimiento Constante:** Pasar de ser una "Piedra en el Camino" a un "Bambú Flexible" te da un sentido de progreso que las listas de tareas tradicionales no ofrecen.
- **Micro-Victorias:** Cada +10 XP por tarea completada es una pequeña dosis de dopamina saludable que refuerza el hábito positivamente.

### 3. El Efecto Cascada
Cuando logras mantener una racha y subir un par de niveles, ocurre algo mágico: el hábito ya no requiere esfuerzo. Se vuelve parte de tu identidad. "Yo soy una persona organizada" es mucho más potente que "Estoy intentando ser organizado".

---

## Estrategias para no romper la cadena

¿Quieres construir un hábito inquebrantable? Sigue la regla de oro de Zenth:

- **La Tarea Mínima Vial:** En los días en los que no tengas ganas de nada, completa al menos una tarea diminuta (ej. "Beber un vaso de agua") y regístrala. Esto mantiene tu racha viva y tu identidad intacta.
- **Visualiza tu Progreso:** Entra en tu perfil y mira cuánto te falta para el siguiente nivel. Ese pequeño empujón visual suele ser suficiente para activar el Focus Mode por 25 minutos.
- **Celebra el Ascenso:** Cuando subas de nivel, tómate un momento para reconocer tu esfuerzo. Te lo has ganado.

## Conclusión

Construir hábitos no debería sentirse como una guerra contra ti mismo. Con Zenth, la disciplina se convierte en un flujo natural. Aprovecha el **Efecto Cascada**: deja que las pequeñas victorias de hoy se conviertan en la inercia del mañana.

**¿Estás listo para empezar tu cadena hoy? [Entra en Zenth](https://www.zenth.space/#/auth) y haz que este sea el primer día de tu nueva racha. ✨**
`,
    author: 'Matías Zenth',
    date: '17 Feb, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    category: 'Hábitos'
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

**Deja de luchar contra tu propia mente. [Inicia sesión en Zenth](https://www.zenth.space/#/auth) y dale a tu cerebro las herramientas que necesita para brillar. ✨**
`,
    author: 'Dra. Ana Mind',
    date: '18 Feb, 2026',
    imageUrl: '/blog/brain.jpg',
    category: 'Neurociencia'
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
  }
];
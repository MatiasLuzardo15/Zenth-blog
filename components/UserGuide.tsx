import React from 'react';
import {
    ArrowLeft, ArrowUpRight, Mail, Sun, LayoutDashboard, Users, PenLine, Keyboard,
    Timer, Trophy, HeartPulse, SlidersHorizontal, CalendarDays, Trash2, Sparkles,
} from 'lucide-react';

interface GuideSection {
    title: string;
    intro: string;
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    steps: string[];
}

const SECTIONS: GuideSection[] = [
    {
        title: 'Hoy',
        icon: Sun,
        intro: 'La pantalla de inicio. Tu día repartido en bloques de energía en lugar de una agenda que se rompe a la primera.',
        steps: [
            'Las tareas se agrupan en Mañana, Tarde y Noche. Si una no tiene momento definido, cae en «En cualquier momento» y se muestra junto a la mañana.',
            'Cambia entre vista de día, semana y mes con los selectores de la cabecera, o con las teclas D, S y M.',
            'Pulsa el botón de añadir para crear una tarea: título, emoji, momento del día, hora concreta si la necesitas, prioridad y etiquetas.',
            'Toca una tarea para abrir su detalle. Desde ahí puedes editarla, añadir notas, cambiar la fecha o convertirla directamente en una sesión de enfoque.',
            'Marca como gran meta lo que de verdad importa hoy: vale 50 XP en lugar de 10 y se distingue en la lista.',
            'Configura la repetición para las rutinas. Al editar una tarea recurrente, Zenth te pregunta si el cambio afecta solo a esa aparición o a toda la serie.',
            'En Ajustes puedes definir a qué hora empieza tu mañana, y los bloques se reorganizan según tu horario real.',
            'El historial de completadas guarda lo que ya terminaste, por día o por pizarra.',
        ],
    },
    {
        title: 'Listas y pizarras',
        icon: LayoutDashboard,
        intro: 'El tablero, para lo que no vive en un día concreto: proyectos, backlogs y trabajo en curso.',
        steps: [
            'Crea tantas pizarras como necesites, cada una con su nombre y su icono. Se cambia entre ellas desde el selector de la cabecera.',
            'En «Añade una tarea» se abre el editor completo. Escribe el siguiente paso y define su tipo, prioridad, fecha, hora, duración, repetición, etiquetas y notas antes de agregarla.',
            'Cada pizarra tiene sus propias columnas: renómbralas, cámbiales el color de acento y arrastra su cabecera para reordenarlas a tu gusto.',
            'Arrastra las tarjetas entre columnas para mover el trabajo. La tarjeta se integra en la lista de destino y el tablero conserva el nuevo orden.',
            'Cuando termines una tarea, marca su checkbox. La tarjeta pasa a Completado, donde queda archivada en el historial de la pizarra.',
            'Elige el diseño del tablero en Ajustes: horizontal, con desplazamiento lateral estilo Trello, o ajustado al espacio en varias filas.',
            'La pizarra por defecto recoge las tareas antiguas que no pertenecen a ninguna otra, y por eso no se puede eliminar.',
        ],
    },
    {
        title: 'Compartir una pizarra',
        icon: Users,
        intro: 'Una pizarra pasa de ser «mi tablero» a ser «un espacio con miembros». Los permisos son la pizarra: no hay espacios de trabajo intermedios.',
        steps: [
            'Pulsa Compartir en la cabecera de la pizarra. Es un panel para colaborar: escribe el correo, elige un rol y pulsa Invitar.',
            'También puedes copiar un enlace de invitación desde ese panel, cambiar sus permisos o eliminarlo cuando ya no lo necesites.',
            'Asigna el rol al invitar: Administrador gestiona la pizarra y sus miembros, Miembro crea y edita contenido, Observador solo lee.',
            'El panel Visibilidad controla el otro eje: hasta dónde llega la pizarra para quien no es miembro. Privada, o pública con un enlace de solo lectura.',
            'Los administradores pueden cambiar roles y expulsar miembros. El propietario, además, puede eliminar la pizarra o transferir la propiedad a otro administrador.',
            'Una pizarra nunca puede quedarse sin administradores: la regla se aplica en la base de datos, no solo en la interfaz.',
            'Los cambios de tus compañeros llegan en vivo. Si entras como observador, la interfaz oculta las acciones que no puedes ejecutar en lugar de dejarte fallar.',
        ],
    },
    {
        title: 'Entradas',
        icon: PenLine,
        intro: 'Dejó de ser un bloc de notas. Es donde vive todo lo que no es una tarea.',
        steps: [
            'Desde el botón de nueva entrada eliges qué crear: nota de texto, tabla, carpeta, archivo subido o nota de voz.',
            'Las notas usan un editor de texto enriquecido: títulos, listas, citas, código, resaltador, separadores y más de diez tipografías.',
            'Pega imágenes con Ctrl+V o arrástralas al editor, y haz clic en cualquiera para ajustar su tamaño.',
            'Las tablas admiten fórmulas, formato de celda, orden y exportación a CSV. Viven en la base de datos, así que no consumen tu cuota de archivos.',
            'Sube PDF, imágenes o documentos y consúltalos desde la propia aplicación, sin descargarlos.',
            'Graba notas de voz desde el micrófono cuando escribir sea más lento que hablar.',
            'Organízalo todo en carpetas y etiquetas. El buscador global encuentra dentro del contenido, no solo en los títulos.',
            'Desde cualquier tarea puedes usar «Expandir a nota» para convertirla en una entrada completa manteniendo el vínculo.',
        ],
    },
    {
        title: 'Atajos de la aplicación',
        icon: Keyboard,
        intro: 'Navega entre las secciones y por la agenda sin apartar las manos del teclado. En macOS, Alt se muestra como ⌥ y las combinaciones con Ctrl del editor usan Cmd.',
        steps: [
            'Alt + 1 abre Hoy · Alt + 2 abre Lista · Alt + 3 abre Enfoque · Alt + 4 abre Notas · Alt + 5 abre Objetivos.',
            'Alt + M pliega o vuelve a mostrar la navegación. Alt + , abre Ajustes y Alt + T cambia entre tema claro y oscuro.',
            'D cambia a la vista de día · S abre la semana · M abre el mes.',
            'T vuelve a Hoy desde cualquier fecha que estés consultando.',
            'Flecha izquierda y flecha derecha avanzan o retroceden el período activo: un día, una semana o un mes según la vista.',
            'Los atajos de navegación se pausan mientras escribes en un campo o tienes abierto un modal, para que no interfieran con lo que estás haciendo.',
            'Esc cierra los paneles y diálogos abiertos cuando la acción no requiere confirmación. Para recorrer los controles, usa Tab y Shift + Tab; Enter o Espacio activa el control seleccionado.',
        ],
    },
    {
        title: 'Atajos del editor de notas',
        icon: Keyboard,
        intro: 'Comprobados sobre la versión actual del editor. En macOS, sustituye Ctrl por Cmd.',
        steps: [
            'Esc guarda y cierra la nota. Ctrl+S guarda sin salir.',
            'Ctrl+B negrita · Ctrl+I cursiva · Ctrl+U subrayado · Ctrl+Shift+X tachado.',
            'Ctrl+Alt+1 título principal (H2) · Ctrl+Alt+2 título secundario (H3).',
            'Ctrl+Shift+8 lista con viñetas · Ctrl+Shift+7 lista numerada · Tab inserta sangría.',
            'Deshacer y rehacer usan los atajos nativos del navegador.',
            'Al pegar texto de fuera, Zenth limpia el formato externo y conserva la estructura (títulos y listas).',
        ],
    },
    {
        title: 'Modo enfoque',
        icon: Timer,
        intro: 'Un temporizador que mide atención real. Los minutos que registres son los que cuentan para tu nivel.',
        steps: [
            'También puedes iniciar desde una tarea: ábrela en Hoy y elige «Iniciar focus». Zenth lleva su nombre a Enfoque como tu misión.',
            'Elige una de las cuatro duraciones rápidas —15, 25, 45 o 60 minutos— o escribe la tuya.',
            'Revisa la misión y pulsa Enfocar para iniciar el temporizador. La tarea queda asociada a la sesión para saber cuánto tiempo le dedicaste de verdad.',
            'Ajusta la duración sobre la marcha con los botones de más y menos minuto.',
            'Al terminar, los minutos se guardan como sesión y se suman a tu total de enfoque.',
            'Debajo del temporizador tienes las sesiones de hoy y tu constancia de la semana.',
        ],
    },
    {
        title: 'Progreso y niveles',
        icon: Trophy,
        intro: 'Diez niveles que miden constancia, no velocidad. No se pueden acelerar con una tarde intensa.',
        steps: [
            'Cada tarea completada suma 10 XP. Las grandes metas, 50.',
            'Subir de nivel exige cuatro cosas a la vez: XP, racha, tareas completadas y minutos de enfoque acumulados.',
            'La ruta de progreso, en Objetivos, muestra los diez niveles y exactamente qué te falta para el siguiente.',
            'Los niveles son permanentes: si un día se rompe la racha, conservas el nivel alcanzado.',
            'Para el cálculo se usa tu mejor racha histórica, no solo la actual.',
        ],
    },
    {
        title: 'Registro de ánimo',
        icon: HeartPulse,
        intro: 'La parte que ninguna app de tareas quiere mirar: cómo estabas mientras hacías todo eso.',
        steps: [
            'Registra tu estado del día con un toque: excelente, bien, neutral, bajo o mal.',
            'El calendario de ánimo, en Objetivos, muestra el mes completo con un color por día.',
            'El año en píxeles convierte doce meses de registros en un solo mosaico donde los patrones se ven de golpe.',
            'El balance mensual resume qué estado predominó y cuántos días registraste.',
            'Léelo junto a tus rachas: si llevas dos semanas en tonos bajos, la respuesta no es apretar más.',
        ],
    },
    {
        title: 'Google Calendar',
        icon: CalendarDays,
        intro: 'Integración de solo lectura: Zenth mira tu calendario, nunca escribe en él.',
        steps: [
            'Ve a Ajustes → Integraciones y pulsa Conectar Google Calendar. Solo se pide permiso de lectura.',
            'Elige qué calendarios quieres ver: los que no marques no aparecen en ningún sitio.',
            'Sus eventos se muestran en Hoy junto a tus tareas. La sincronización se actualiza sola cada cinco minutos.',
            'Puedes pausar la sincronización cuando quieras, o desconectar la cuenta y borrar lo importado.',
            'Los eventos no entran en ninguna pizarra por su cuenta. Si quieres llevarlos a una, usa «Llevar eventos a Todo» y elige listas y pizarra destino.',
        ],
    },
    {
        title: 'Zen, el asistente',
        icon: Sparkles,
        intro: 'IA de Google donde ahorra trabajo real, y en ningún otro sitio. Nunca actúa sin que se lo pidas.',
        steps: [
            'En el editor de tareas, «Pedir a Zen» convierte lenguaje natural en una tarea: «Cita médica el lunes a las 10» rellena título, fecha, hora y prioridad.',
            'Auto-Agendar propone el mejor momento para una tarea a partir de su texto y de la fecha actual.',
            'Sugerir Pasos parte una tarea grande en tres a cinco micro-pasos concretos, con verbos de acción.',
            'En el editor de notas, selecciona un texto y pulsa Zen AI para mejorar la redacción, resumirlo o expandirlo.',
        ],
    },
    {
        title: 'Ajustes',
        icon: SlidersHorizontal,
        intro: 'Seis secciones. Todas las opciones se guardan en tu cuenta y viajan contigo entre dispositivos.',
        steps: [
            'General: tu nombre, el avatar y la imagen de portada de tu perfil de Objetivos.',
            'Apariencia: tema Claro, Oscuro o Zen, color de acento, modo compacto y ancho del contenido en escritorio.',
            'Productividad: hora de inicio de la mañana, formato de 12 o 24 horas, notificaciones Zen, recordatorios push y efectos de sonido.',
            'Pizarras: pizarra activa, diseño del tablero y un resumen de miembros, visibilidad e invitaciones pendientes.',
            'Integraciones: conexión con Google Calendar.',
            'Cuenta: cambio de correo, acceso a la papelera, cierre de sesión y la zona de riesgo para borrar datos.',
        ],
    },
    {
        title: 'Papelera',
        icon: Trash2,
        intro: 'Borrar deja de ser una decisión definitiva.',
        steps: [
            'Ábrela desde Ajustes → Cuenta, o directamente en /trash.',
            'Las tareas y las entradas eliminadas se listan en pestañas separadas.',
            'Restaura cualquier elemento a su sitio original con un clic.',
            'Vacía la papelera cuando quieras liberar espacio de verdad; ahí sí es permanente.',
            'Al mandar una tarea recurrente a la papelera, Zenth detiene sus repeticiones futuras.',
        ],
    },
];

const UserGuide = ({ onBack }: { onBack: () => void }) => {
    const goToSection = (title: string) => {
        const id = `guia-${title.toLowerCase().replace(/\s+/g, '-')}`;
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen pt-28 pb-24 lg:pt-36">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <button
                    onClick={onBack}
                    className="t-caption group mb-10 inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                    Volver a las preguntas frecuentes
                </button>

                <p className="t-eyebrow">Documentación</p>
                <h1 className="t-display-xl mt-4 text-ink">Manual del usuario.</h1>
                <p className="t-body-lg mt-6 max-w-xl text-ink-muted">
                    Cada sección de Zenth explicada de arriba abajo: qué hace, dónde está y para qué
                    sirve realmente.
                </p>

                {/* Índice */}
                <nav className="fr-card mt-12">
                    <p className="t-caption text-ink">En esta página</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {SECTIONS.map(section => (
                            <button
                                key={section.title}
                                onClick={() => goToSection(section.title)}
                                className="fr-btn fr-btn-translucent t-micro"
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </nav>

                <div className="mt-16 space-y-16">
                    {SECTIONS.map(section => {
                        const Icon = section.icon;
                        const id = `guia-${section.title.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                            <section key={section.title} id={id} className="scroll-mt-24">
                                <div className="flex items-center gap-3">
                                    <Icon className="h-6 w-6 text-ink" strokeWidth={1.5} />
                                    <h2 className="t-display-md text-ink">{section.title}</h2>
                                </div>

                                <p className="t-body-lg mt-4 max-w-2xl text-ink-muted">{section.intro}</p>

                                <ol className="mt-8 space-y-4">
                                    {section.steps.map((step, idx) => (
                                        <li key={idx} className="flex gap-4">
                                            <span className="t-micro mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-1 tabular-nums text-ink-muted">
                                                {idx + 1}
                                            </span>
                                            <p className="t-body text-ink-muted">{step}</p>
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        );
                    })}
                </div>

                <div className="fr-card-featured mt-20 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="t-headline text-ink">¿Falta algo en el manual?</h2>
                        <p className="t-body mt-2 text-ink-muted">
                            Dime qué no encontraste y lo añado.
                        </p>
                    </div>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasluzardevv@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fr-btn fr-btn-primary shrink-0"
                    >
                        <Mail className="h-4 w-4" />
                        Escribirme
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserGuide;

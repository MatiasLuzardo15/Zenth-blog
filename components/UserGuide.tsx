import React from 'react';
import {
    ArrowLeft, ArrowUpRight, Mail, Sun, LayoutDashboard, Users, PenLine, Keyboard,
    CircleDashed, Orbit, HeartPulse, SlidersHorizontal, CalendarDays, Trash2, Sparkles, HardDrive, PhoneCall,
} from 'lucide-react';

interface GuideSection {
    title: string;
    intro: string;
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    steps: string[];
}

const SECTIONS: GuideSection[] = [
    {
        title: 'Agenda',
        icon: CalendarDays,
        intro: 'Planifica el tiempo con vistas de día, semana y mes, sin perder la flexibilidad de Mañana, Tarde y Noche.',
        steps: [
            'Las tareas pueden vivir en Mañana, Tarde o Noche. Si necesitan precisión, añade una hora de inicio y una duración.',
            'Cambia entre vista de día, semana y mes con los selectores de la cabecera, o con las teclas D, S y M.',
            'En la vista diaria puedes arrastrar una tarea para reprogramarla y cambiar su duración directamente sobre el calendario.',
            'Pulsa añadir para crear una tarea, evento o reunión con fecha, hora, repetición, avisos, etiquetas, pasos, adjuntos, ubicación o enlace de videollamada. Para una reunión puedes elegir Zenth, Google Meet, Zoom, Teams u otro enlace y añadir invitados por correo.',
            'Abre una tarea para editarla, tomar notas, cambiar su fecha o iniciar una sesión de Enfoque vinculada.',
            'Marca como gran meta lo que de verdad importa hoy: vale 50 XP en lugar de 10 y se distingue en la lista.',
            'Configura la repetición para las rutinas. Al editar una tarea recurrente, Zenth te pregunta si el cambio afecta solo a esa aparición o a toda la serie.',
            'En Ajustes puedes definir a qué hora empieza tu mañana, y los bloques se reorganizan según tu horario real.',
            'Decide en Ajustes si las nuevas tareas de Agenda también deben pertenecer a la pizarra activa.',
        ],
    },
    {
        title: 'Pizarras',
        icon: LayoutDashboard,
        intro: 'Cada proyecto tiene sus propias listas, su bandeja de captura, sus miembros y su relación con Agenda.',
        steps: [
            'Crea tantas pizarras como necesites, cada una con su nombre y su icono. Se cambia entre ellas desde el selector de la cabecera.',
            'Captura una idea rápidamente en la bandeja y clasifícala después, o crea la tarea directamente dentro de una lista.',
            'El editor permite definir tipo, prioridad, fecha, hora, duración, repetición, etiquetas, pasos, imágenes y notas.',
            'Cada pizarra tiene sus propias columnas: renómbralas, cámbiales el color de acento y arrastra su cabecera para reordenarlas a tu gusto.',
            'Arrastra las tarjetas entre columnas para mover el trabajo. La tarjeta se integra en la lista de destino y el tablero conserva el nuevo orden.',
            'Una tarea de pizarra solo aparece en Agenda si activas esa visibilidad o eliges la automatización correspondiente en Ajustes.',
            'Elige el diseño del tablero en Ajustes: horizontal, con desplazamiento lateral estilo Trello, o ajustado al espacio en varias filas.',
            'La pizarra predeterminada recoge las tareas que no pertenecen a otra y por eso no se puede eliminar.',
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
            'Los cambios de tus compañeros llegan en vivo. Las tarjetas pueden tener varios responsables, etiquetas compartidas, comentarios, menciones, reacciones, adjuntos privados y checklists con progreso.',
            'Usa filtros de persona y carga de trabajo, automatizaciones para acciones repetidas y plantillas para reutilizar pizarras, listas o tarjetas.',
            'Si entras como observador, la interfaz oculta las acciones que no puedes ejecutar en lugar de dejarte fallar.',
        ],
    },
    {
        title: 'Biblioteca',
        icon: PenLine,
        intro: 'Un explorador único para tus notas Zenth y, si conectas Google, tu contenido de Drive y Workspace.',
        steps: [
            'En Resumen conviven tus notas nativas y los elementos de Drive. También puedes entrar por separado en Archivos Zenth o Mi unidad.',
            'Las notas de Zenth usan un editor enriquecido con títulos, listas, citas, código, resaltador, separadores, imágenes y asistencia de Zen.',
            'Pega imágenes con Ctrl+V o arrástralas al editor, y haz clic en cualquiera para ajustar su tamaño.',
            'Filtra por tipo, cambia entre cuadrícula y lista, ordena resultados y usa Recientes, Destacados o Compartidos conmigo.',
            'El buscador global encuentra tareas, notas y elementos de Drive desde cualquier sección.',
            'Desde cualquier tarea puedes usar «Expandir a nota» para convertirla en una entrada completa manteniendo el vínculo.',
        ],
    },
    {
        title: 'Llamadas y reuniones',
        icon: PhoneCall,
        intro: 'Reúnete con tu equipo o comparte una conversación puntual sin entregar acceso de más.',
        steps: [
            'En escritorio, abre Llamadas desde la navegación global. El panel reúne las salas de tus pizarras, las llamadas privadas y las reuniones rápidas sin sacarte de la sección actual.',
            'Para una reunión rápida elige Crear enlace si quieres compartirlo más tarde, Iniciar ahora si ya vas a entrar o Programar en Agenda si necesitas fecha, hora e invitados.',
            'La persona invitada abre el enlace, escribe su nombre y prepara el micrófono y el audio. No necesita crear una cuenta ni puede abrir tus pizarras, archivos, historial u otras salas.',
            'Las salas de pizarra solo están disponibles para sus integrantes. Las llamadas privadas solo aparecen entre personas que comparten al menos una pizarra.',
            'Puedes usar voz, reacciones, mano levantada y pantalla compartida. Zenth no usa cámara personal ni graba las conversaciones.',
            'Al crear o editar una reunión en Agenda, selecciona el proveedor, copia el enlace si hace falta y agrega invitados por correo. El anfitrión puede cerrar una reunión rápida para todos.',
        ],
    },
    {
        title: 'Google Drive y Workspace',
        icon: HardDrive,
        intro: 'Drive aporta la infraestructura documental de Biblioteca; las notas nativas de Zenth siguen siendo independientes.',
        steps: [
            'Ve a Ajustes → Integraciones → Google Drive y Workspace. La autorización permite trabajar con Mi unidad según tus permisos de Google.',
            'Desde Nuevo puedes crear un Documento, Hoja, Presentación, Formulario o una carpeta real de Drive.',
            'También puedes subir archivos, elegir uno existente con Google Picker o grabar una nota de voz directamente en Drive.',
            'Los editores integrados permiten trabajar dentro de Zenth. Usa «Abrir en Google» cuando necesites todas las funciones nativas o colaboración avanzada.',
            'Puedes mover, duplicar, destacar, compartir y enviar elementos a la papelera de Drive. Esas acciones modifican el archivo real.',
            'Desconectar elimina la autorización guardada por Zenth, pero no borra los archivos que ya existen en tu Drive.',
        ],
    },
    {
        title: 'Atajos de la aplicación',
        icon: Keyboard,
        intro: 'Navega entre las secciones y por la agenda sin apartar las manos del teclado. En macOS, Alt se muestra como ⌥ y las combinaciones con Ctrl del editor usan Cmd.',
        steps: [
            'Alt + 1 abre Agenda · Alt + 2 abre Pizarras · Alt + 3 abre Biblioteca · Alt + 4 abre Reuniones · Alt + 5 abre Progreso.',
            'Alt + M pliega o vuelve a mostrar la navegación. Alt + , abre Ajustes y Alt + T cambia entre tema claro y oscuro.',
            'D cambia a la vista de día · S abre la semana · M abre el mes.',
            'T vuelve al día de hoy desde cualquier fecha que estés consultando en Agenda.',
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
        title: 'Enfoque',
        icon: CircleDashed,
        intro: 'Un panel global que continúa funcionando mientras te mueves por Zenth.',
        steps: [
            'Ábrelo desde el icono de Enfoque en la cabecera o desde una tarea con «Iniciar enfoque». No cambia tu sección actual.',
            'Elige 15, 25, 45 o 60 minutos, escribe una duración propia o usa «Sin duración» como cronómetro.',
            'Vincula una tarea para registrar cuánto tiempo le dedicaste; el equipo solo puede ver hasta qué hora estás enfocado, nunca el contenido.',
            'Usa descansos de 5, 10 o 15 minutos al terminar una sesión.',
            'Mezcla sonidos ambientales, guarda tus combinaciones, reproduce música de Zenth o conserva enlaces a tus servicios de música.',
            'El historial permite corregir la duración o borrar una sesión, y las estadísticas comparan tu avance con el objetivo diario elegido.',
        ],
    },
    {
        title: 'Mi ritmo',
        icon: Orbit,
        intro: 'Actividad, constancia, niveles, logros y bienestar reunidos en un perfil personal.',
        steps: [
            'Cada tarea completada suma 10 XP. Las grandes metas, 50.',
            'Subir de nivel exige cuatro cosas a la vez: XP, racha, tareas completadas y minutos de enfoque acumulados.',
            'La ruta recorre 20 constelaciones y muestra exactamente qué te falta para la siguiente.',
            'Hay 24 logros repartidos entre ejecución, constancia, enfoque y recorrido, con progreso visible incluso antes de desbloquearlos.',
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
            'El calendario de ánimo, dentro de Mi ritmo, muestra el mes completo con un color por día.',
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
            'Sus eventos se muestran en Agenda junto a tus tareas. La sincronización se actualiza cada cinco minutos mientras el permiso esté activo.',
            'Puedes pausar o desconectar la cuenta. Desconectar detiene la sincronización, pero no elimina automáticamente las filas ya importadas.',
            'Los eventos no entran en ninguna pizarra por su cuenta. Si quieres llevarlos a una, usa «Llevar a pizarra» y elige el destino.',
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
        intro: 'Un panel con búsqueda para configurar tu perfil, tu rutina, Enfoque, avisos, pizarras e integraciones.',
        steps: [
            'General: tu nombre, avatar y portada de Mi ritmo.',
            'Apariencia: Sistema, Claro, Oscuro o Zen, modo compacto y ancho del contenido.',
            'Productividad: formato horario, inicio de la mañana y relación predeterminada entre Agenda y Pizarras.',
            'Enfoque: objetivo diario, avisos, silencio temporal y visibilidad para el equipo.',
            'Notificaciones: avisos dentro de Zenth, efectos, recordatorio de ánimo, push y correo.',
            'Pizarras: pizarra activa, diseño del tablero y resumen de colaboración.',
            'Integraciones: Google Drive y Workspace, además de Google Calendar.',
            'Cuenta: cambio de correo, acceso a la papelera, cierre de sesión y la zona de riesgo para borrar datos.',
        ],
    },
    {
        title: 'Papelera',
        icon: Trash2,
        intro: 'Borrar deja de ser una decisión definitiva.',
        steps: [
            'Ábrela desde Ajustes → Cuenta, o directamente en /trash.',
            'Las tareas y las notas nativas eliminadas se listan en pestañas separadas.',
            'Restaura cualquier elemento a su sitio original con un clic.',
            'Vacía la papelera cuando quieras liberar espacio de verdad; ahí sí es permanente.',
            'Al mandar una tarea recurrente a la papelera, Zenth detiene sus repeticiones futuras.',
            'Los documentos y archivos de Google usan la papelera de Drive, no esta pantalla.',
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

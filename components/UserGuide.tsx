import React from 'react';
import { ChevronDown, Zap, Smartphone, Brain, Trophy, Mail, BookOpen, Layout, Sparkles, BarChart2, Rocket, Target, ArrowDown, PenTool, Type, Image, Trash2 } from 'lucide-react';

const GuideSection: React.FC<{
    title: string,
    steps: string[],
    icon: React.ReactNode,
    color: string,
    extension?: { title: string, steps: string[], icon: React.ReactNode }
}> = ({ title, steps, icon, color, extension }) => (
    <div className={`break-inside-avoid mb-8 p-8 border-4 border-black dark:border-white rounded-lg shadow-sketch-lg dark:shadow-sketch-lg-white ${color} h-fit transform transition-transform hover:-translate-y-1`}>
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white dark:bg-slate-800 border-2 border-black rounded-full shadow-sketch">
                {icon}
            </div>
            <h3 className="text-3xl font-marker text-black">{title}</h3>
        </div>
        <div className="space-y-4">
            {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold font-mono border-2 border-white shadow-sketch">
                        {idx + 1}
                    </span>
                    <p className="text-lg font-bold text-black leading-tight pt-1">
                        {step}
                    </p>
                </div>
            ))}
        </div>

        {extension && (
            <div className="mt-10 pt-10 border-t-4 border-black/10 dark:border-white/10 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 p-2 border-2 border-black rounded-full shadow-sketch">
                    <ArrowDown className="w-6 h-6 text-black dark:text-white" />
                </div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white dark:bg-slate-800 border-2 border-black rounded-full shadow-sketch">
                        {extension.icon}
                    </div>
                    <h3 className="text-2xl font-marker text-black">{extension.title}</h3>
                </div>
                <div className="space-y-4">
                    {extension.steps.map((step, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                            <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold font-mono border-2 border-white shadow-sketch">
                                {idx + 1}
                            </span>
                            <p className="text-lg font-bold text-black leading-tight pt-1">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
);

const UserGuide = ({ onBack }: { onBack: () => void }) => {
    const technicalGuides = [
        {
            title: "Planificación por Energía",
            icon: <Layout className="w-8 h-8 text-zenth-markerBlue" />,
            color: "bg-[#e3f2fd]",
            steps: [
                "Abre el panel lateral 'Hoy' para ver tus tres cubos de energía: Mañana, Tarde y Noche.",
                "Pulsa el botón '+' para crear una tarea: elige título, emoji, categoría y prioridad.",
                "Selecciona el momento del día (Mañana, Tarde, Noche o Anytime) según tu energía.",
                "Arrastra y suelta las tareas entre los bloques para equilibrar tu carga diaria.",
                "Define tu 'Inicio Mañana' en ajustes para que Zenth organice tus tareas según tu horario real."
            ]
        },
        {
            title: "Poder de la IA 'Zen'",
            icon: <Sparkles className="w-8 h-8 text-zenth-markerYellow" />,
            color: "bg-[#fffde7]",
            steps: [
                "Usa 'Pedir a Zen ✨': escribe 'Cita médica el lunes a las 10am' y Zen agendará todo por ti.",
                "Pide 'Sugerir Pasos' para desglosar tareas complejas (ej: 'Organizar evento') en micro-metas.",
                "Confía en el 'Auto-Agendado' para que la IA sugiera el mejor momento basado en el nombre de la tarea.",
                "Dile a Zen tus pendientes en lenguaje natural para ahorrar tiempo en configuración manual.",
                "Zen aprende de tu ritmo para ayudarte a recuperar tu paz mental sin esfuerzo."
            ]
        },
        {
            title: "Filosofía: Contenedores",
            icon: <BookOpen className="w-8 h-8 text-zenth-markerBlue" />,
            color: "bg-[#f3e5f5]",
            steps: [
                "Hoy: Tu enfoque inmediato. Solo lo que planeas hacer y completar hoy.",
                "Mañana: Planifica hoy para despertar sin estrés. Libera espacio mental para descansar.",
                "Misiones: El lugar para lo que harás 'En cualquier momento' sin fecha fija.",
                "Objetivos: Tu centro de mando. Revisa estadísticas, nivel de evolución y gestiona tu cuenta.",
                "Zenth divide tu vida en estos bloques para evitar que te sientas abrumado por una lista infinita."
            ]
        },
        {
            title: "Gamificación y Progreso",
            icon: <Trophy className="w-8 h-8 text-zenth-markerYellow" />,
            color: "bg-[#e8f5e9]",
            steps: [
                "Gana XP (Experiencia) completando tareas y realizando sesiones de enfoque (Flow).",
                "Zen Path: Sigue tu ruta desde 'Piedra en el Camino' hasta el 'Universo Expandido'.",
                "Rachas (Streaks): Mantén la constancia diaria para no perder tu racha mensual de bienestar.",
                "Sube de nivel para ver madurar tu brote de conciencia y fortalecer tu mente diamante.",
                "Zenth premia tu constancia, convirtiendo la disciplina en un juego de crecimiento personal."
            ]
        },
        {
            title: "Guía de Ajustes",
            icon: <Rocket className="w-8 h-8 text-zenth-markerPink" />,
            color: "bg-[#fce4ec]",
            steps: [
                "Identidad: Personaliza el nombre con el que Zen te saludará y sube tu avatar o emoji.",
                "Estilo: Elige tu color de acento y activa el Modo Zen para un tono crema más suave.",
                "Preferencias: Define a qué hora empieza tu mañana y activa notificaciones motivadoras.",
                "Accesibilidad: Usa el Modo Compacto para ver más tareas o Reducir Movimiento para mayor fluidez.",
                "Seguridad: Gestiona tu política de privacidad, borra datos si quieres empezar de cero o cierra sesión."
            ]
        },
        {
            title: "Modo Enfoque (Flow)",
            icon: <Zap className="w-8 h-8 text-orange-500" />,
            color: "bg-[#fff3e0]",
            steps: [
                "Busca el icono de cronómetro en el panel lateral o en tus tareas activas.",
                "Elige entre Pomodoro (25/5 min) o sesiones de Deep Work (50/10 min).",
                "Inicia el Focus Mode: la interfaz se simplificará para que solo veas tu objetivo.",
                "No cambies de pestaña; Zenth rastreará tus minutos reales de atención plena.",
                "Al terminar, reclama tus XP de enfoque y mira cómo sube tu nivel de maestría."
            ],
            extension: {
                title: "Configuración Zen Focus",
                icon: <Target className="w-8 h-8 text-red-500" />,
                steps: [
                    "Toca cualquier tarjeta de tarea y pulsa el botón 'Configuración Zen Focus'.",
                    "El nombre de esa tarea aparecerá como tu 'Misión' principal en el enfoque.",
                    "El tiempo que pases concentrado se registrará específicamente para esa tarea.",
                    "Ideal para proyectos largos donde quieres medir el esfuerzo real invertido.",
                    "Convierte tus tareas en misiones de atención con objetivos claros y trazables."
                ]
            }
        },
        {
            title: "Atajos y Gestos Rápidos",
            icon: <Smartphone className="w-8 h-8 text-zenth-markerBlue" />,
            color: "bg-[#f1f8e9]",
            steps: [
                "Desliza hacia la derecha en cualquier tarea para marcarla como 'Completada' al instante.",
                "Mantén presionada una tarea para entrar en el modo de edición rápida sin abrir el modal.",
                "Toca dos veces el icono de 'Hoy' para desplazarte rápidamente al bloque de energía actual.",
                "Usa el gesto de 'Pull to Refresh' en la pantalla principal para sincronizar tus datos con la nube.",
                "Zenth está diseñado para ser usado con una sola mano: casi todo está a un pulgar de distancia."
            ]
        },
        {
            title: "Seguimiento Emocional",
            icon: <Brain className="w-8 h-8 text-zenth-markerBlue" />,
            color: "bg-[#e0f7fa]",
            steps: [
                "Al terminar el día, elige el color que represente tu humor (excelente hasta bajo).",
                "Analiza la relación entre tus rachas de tareas completadas y tus picos de felicidad.",
                "Si detectamos muchos días en 'Bajo', la IA te sugerirá reducir tu carga mental.",
                "Zenth te ayuda a entender que tu productividad no es solo hacer, sino sentirte bien.",
                "Convierte tu autoconocimiento en el pilar de tu productividad sostenible."
            ],
            extension: {
                title: "Tu Mural de Pixels",
                icon: <BarChart2 className="w-8 h-8 text-zenth-markerPink" />,
                steps: [
                    "Descubre tu tendencia emocional a través del año en el panel 'Objetivos'.",
                    "Cada píxel representa tu estado de paz tras completar tu jornada.",
                    "Identifica patrones: ¿Qué hábitos o días de la semana mejoran tu humor?",
                    "Usa los filtros sociales para ver cómo tu bienestar evoluciona con tu racha.",
                    "Transforma datos subjetivos en una hoja de ruta visual para tu salud mental."
                ]
            }
        },
        {
            title: "Entradas (Notas Zen)",
            icon: <PenTool className="w-8 h-8 text-zenth-markerBlue" />,
            color: "bg-[#e1f5fe]",
            steps: [
                "Haz clic en el icono de 'Entradas' o selecciona 'Expandir a nota' desde cualquier tarea.",
                "Escribe sin distracciones en el editor minimalista con soporte para jerarquías (H2, H3) y formatos.",
                "Personaliza tu nota: asigna un emoji de portada y elige entre 10 estilos tipográficos diferentes.",
                "Añade vida a tus notas pegando imágenes directamente (Ctrl+V) o arrastrándolas al editor.",
                "Las notas se guardan automáticamente en la nube, permitiéndote acceder a ellas desde cualquier lugar."
            ],
            extension: {
                title: "Personalización y Multimedia",
                icon: <Type className="w-8 h-8 text-zenth-markerPink" />,
                steps: [
                    "Toca cualquier imagen para redimensionarla entre 25% y 100% de ancho.",
                    "Usa el menú de tipografía para cambiar el 'humor' de tu nota (Moderno, Escrito a mano, etc).",
                    "Aprovecha el buscador global para encontrar palabras clave dentro de tus notas en milisegundos.",
                    "El Modo Enfoque en las notas oscurece el fondo para que solo existas tú y tu escritura.",
                    "Recuerda que una Entrada puede ser un diario, un wiki personal o la documentación de un objetivo."
                ]
            }
        },
        {
            title: "Papelera (Trash Bin)",
            icon: <Trash2 className="w-8 h-8 text-slate-500" />,
            color: "bg-[#f5f5f5]",
            steps: [
                "Accede a la Papelera desde tu perfil (Me) en la sección de cuenta.",
                "Gestiona tus elementos eliminados en pestañas separadas para Tareas y Notas.",
                "Restaura cualquier elemento a su lugar original con un solo clic.",
                "Usa 'Vaciar Papelera' para borrar permanentemente y liberar espacio en tu nube.",
                "Zenth detendrá automáticamente las recurrencias de las tareas movidas a la papelera."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-zenth-bg dark:bg-zenth-darkBg pt-24 pb-20 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-zenth-markerYellow rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-zenth-markerBlue rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <button
                    onClick={onBack}
                    className="mb-8 flex items-center gap-2 text-black dark:text-white font-bold hover:translate-x-[-4px] transition-transform group"
                >
                    <div className="p-2 border-2 border-black dark:border-white bg-white dark:bg-slate-800 shadow-sketch dark:shadow-sketch-white">
                        <ChevronDown className="w-5 h-5 rotate-90" />
                    </div>
                    <span className="underline decoration-zenth-markerYellow decoration-4 text-2xl">Volver a FAQ</span>
                </button>

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-marker text-black dark:text-white mb-6 transform -rotate-1">
                        Manual del Usuario y Guía de Bienestar
                    </h1>
                    <p className="text-2xl font-bold text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-tight italic">
                        Aprende a dominar cada sección, ajuste y flujo para optimizar tu experiencia y recuperar tu paz mental.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                    {technicalGuides.map((guide, idx) => (
                        <GuideSection
                            key={idx}
                            title={guide.title}
                            steps={guide.steps}
                            icon={guide.icon}
                            color={guide.color}
                            extension={guide.extension}
                        />
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-20 relative px-4 md:px-0">
                    <div className="bg-black dark:bg-white text-white dark:text-black p-10 rounded-lg shadow-sketch-lg dark:shadow-sketch-lg-white border-2 border-white dark:border-black text-center transform -rotate-1">
                        <h2 className="text-4xl font-marker mb-4">¿Aún tienes dudas?</h2>
                        <p className="text-xl font-bold mb-8 opacity-90">
                            Escríbenos y estaremos encantados de ayudarte a entrar en tu estado Zen.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasluzardevv@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-zenth-markerYellow text-black px-10 py-4 rounded-md font-black text-xl border-2 border-black shadow-sketch hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                            >
                                <Mail className="w-6 h-6" />
                                Contactar Soporte
                            </a>
                        </div>
                    </div>
                    <div className="absolute -inset-2 bg-zenth-markerPink -z-10 rounded-lg transform rotate-1 opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default UserGuide;

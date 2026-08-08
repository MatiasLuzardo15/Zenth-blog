import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Plus, Mail, BookOpen } from 'lucide-react';

interface FAQEntry {
    question: string;
    answer: React.ReactNode;
}

const FAQS: FAQEntry[] = [
    {
        question: '¿Qué es Zenth exactamente?',
        answer:
            'Un espacio de productividad con cuatro áreas principales: Agenda para planificar el tiempo, Pizarras para organizar proyectos y colaborar, Biblioteca para tus notas y documentos de Google Drive, y Mi ritmo para observar actividad, constancia y bienestar. Enfoque funciona como un temporizador global que puedes abrir desde cualquier pantalla.',
    },
    {
        question: '¿Es gratuito?',
        answer: (
            <>
                Sí. Todas las funciones —incluidas las pizarras compartidas y la sincronización— están
                disponibles sin pagar. No hay plan de pago ni funciones bloqueadas. Si quieres ayudar
                con el coste de los servidores, puedes{' '}
                <a
                    href="https://www.paypal.com/donate/?hosted_button_id=2ZXKDRWUK3M6C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fr-link"
                >
                    donar aquí
                </a>
                , pero es completamente opcional.
            </>
        ),
    },
    {
        question: '¿Cuáles son las secciones actuales?',
        answer:
            'Agenda, Pizarras, Biblioteca y Mi ritmo. Enfoque ya no ocupa una sección de navegación: se abre desde el icono de la cabecera y sigue funcionando mientras recorres la aplicación.',
    },
    {
        question: '¿Puedo compartir una pizarra con otras personas?',
        answer:
            'Sí. Cada pizarra nace privada y puedes invitar por correo o mediante un enlace. Los cambios, la presencia y la actividad aparecen en tiempo real. También hay comentarios, menciones, asignaciones, votos, aprobaciones, sala del equipo y llamadas privadas.',
    },
    {
        question: '¿Qué puede hacer cada rol?',
        answer:
            'El Administrador gestiona la pizarra, sus miembros y su contenido. El Miembro crea y edita tarjetas y listas, pero no administra personas ni permisos. El Observador solo lee. El propietario siempre es administrador, puede transferir la propiedad y es quien puede eliminar la pizarra.',
    },
    {
        question: '¿Qué significa la visibilidad «con enlace»?',
        answer:
            'Es independiente de los miembros. Una pizarra privada solo la ven sus integrantes. Si activas «con enlace», cualquiera que tenga esa dirección puede verla en modo solo lectura, sin cuenta. Puedes volver a privada cuando quieras.',
    },
    {
        question: '¿Qué puedo guardar en Biblioteca?',
        answer:
            'Notas nativas de Zenth y, al conectar Google Drive, documentos, hojas, presentaciones, formularios, carpetas, archivos subidos y grabaciones de voz. Biblioteca también muestra Mi unidad, recientes, destacados y archivos compartidos contigo.',
    },
    {
        question: '¿Qué acceso necesita Google Drive?',
        answer:
            'Para ofrecer un explorador completo, Zenth solicita acceso a Google Drive. Eso permite mostrar y administrar archivos según tus permisos de Google: crear, leer, editar, mover, copiar, compartir o enviar a la papelera cuando tú realizas la acción. Puedes desconectarlo y revocar el permiso en cualquier momento.',
    },
    {
        question: '¿Dónde se guardan los documentos y archivos de Google?',
        answer:
            'En tu propio Google Drive. Zenth guarda la conexión cifrada y referencias mínimas para recordar los elementos vinculados, pero no mantiene una segunda copia permanente de su contenido. Desconectar Zenth no borra los archivos que ya existen en Drive.',
    },
    {
        question: '¿Puedo editar documentos de Google dentro de Zenth?',
        answer:
            'Sí, Zenth incluye editores integrados para documentos, hojas, presentaciones y formularios. Para funciones avanzadas de Google —como colaboración simultánea completa, comentarios o maquetación especializada— puedes usar «Abrir en Google».',
    },
    {
        question: '¿Puedo conectar mi Google Calendar?',
        answer:
            'Sí, con permiso de solo lectura. Eliges qué calendarios ver y sus eventos aparecen en Agenda. La sincronización se actualiza cada cinco minutos mientras el permiso está activo y puedes pausarla. Nada llega a una pizarra hasta que usas explícitamente «Llevar a pizarra».',
    },
    {
        question: '¿Cómo funciona Enfoque ahora?',
        answer:
            'Abres el panel desde la cabecera, eliges 15, 25, 45 o 60 minutos, una duración propia o el modo sin duración, y puedes vincular una tarea. El temporizador continúa aunque cambies de pantalla. Incluye descansos, objetivo diario, historial editable, sonidos ambientales, mezclas guardadas y música.',
    },
    {
        question: '¿Para qué sirven XP, niveles y logros?',
        answer:
            'Cada tarea suma 10 XP y una gran meta, 50. Hay 20 niveles inspirados en constelaciones; cada uno exige XP, mejor racha, tareas completadas y minutos de enfoque. Además hay 24 logros de ejecución, constancia, enfoque y recorrido. Los niveles alcanzados son permanentes.',
    },
    {
        question: "¿Cómo funciona el asistente 'Zen'?",
        answer:
            'Zen usa Google Gemini solo cuando se lo pides. Puede interpretar una frase para completar una tarea, sugerir una fecha, dividir trabajo en micro-pasos y mejorar, resumir o expandir el texto seleccionado de una nota. No analiza silenciosamente todo tu contenido.',
    },
    {
        question: '¿Puedo recuperar algo que borré por error?',
        answer:
            'Las tareas y notas nativas van a la papelera de Zenth y pueden restaurarse. Los archivos administrados mediante Google Drive van a la papelera de Drive, por lo que su recuperación se hace desde Google. Vaciar cualquiera de las dos papeleras es una acción permanente.',
    },
    {
        question: '¿Puedo cambiar el aspecto de la aplicación?',
        answer:
            'Puedes usar el tema del sistema, Claro, Oscuro o Zen; activar el modo compacto; cambiar el ancho del contenido y elegir formato de 12 o 24 horas. El azul es el acento estable de la interfaz, mientras que etiquetas, listas y estados conservan sus propios colores.',
    },
    {
        question: '¿Por qué Zenth puede resultar útil para personas con TDAH?',
        answer:
            'Porque ofrece estructura flexible, captura rápida, información por capas y feedback visible sin exigir una agenda rígida. No es un tratamiento médico ni sustituye apoyo profesional; es una herramienta de organización que cada persona puede adaptar a su manera de trabajar.',
    },
    {
        question: '¿Cómo puedo cambiar mi dirección de correo?',
        answer:
            'Desde Ajustes → Cuenta → Cambiar correo. Recibirás un enlace de confirmación en la dirección nueva y el cambio solo se aplicará cuando lo confirmes.',
    },
    {
        question: '¿Puedo usarlo en el teléfono?',
        answer:
            'Sí. Zenth es una aplicación web progresiva: se instala desde el navegador y funciona como una app nativa, con su icono en la pantalla de inicio. En iOS los recordatorios push solo llegan si la instalas —Safari a secas no los soporta—; en Android y escritorio funcionan también desde el navegador.',
    },
];

const FAQItem: React.FC<FAQEntry> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-hairline-soft">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
            >
                <h3 className="t-headline text-ink">{question}</h3>
                <Plus
                    className={`mt-1 h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300 ${isOpen ? 'rotate-45' : ''
                        }`}
                    strokeWidth={1.75}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <p className="t-body-lg max-w-2xl pb-8 pr-10 text-ink-muted">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = ({ onBack, onGoToGuide }: { onBack: () => void; onGoToGuide: () => void }) => {
    return (
        <div className="min-h-screen pt-28 pb-24 lg:pt-36">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <button
                    onClick={onBack}
                    className="t-caption group mb-10 inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                    Volver al inicio
                </button>

                <p className="t-eyebrow">Soporte</p>
                <h1 className="t-display-xl mt-4 text-ink">Preguntas frecuentes.</h1>
                <p className="t-body-lg mt-6 max-w-xl text-ink-muted">
                    Lo que más me preguntan por correo, respondido sin rodeos.
                </p>

                <div className="mt-16 border-t border-hairline-soft">
                    {FAQS.map(faq => (
                        <FAQItem key={faq.question} {...faq} />
                    ))}
                </div>

                <div className="fr-card mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="t-headline text-ink">¿Buscabas el paso a paso?</h2>
                        <p className="t-body mt-2 text-ink-muted">
                            El manual del usuario recorre cada sección de la aplicación en detalle.
                        </p>
                    </div>
                    <button onClick={onGoToGuide} className="fr-btn fr-btn-primary shrink-0">
                        <BookOpen className="h-4 w-4" />
                        Ver el manual
                    </button>
                </div>

                <div className="fr-card-featured mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="t-headline text-ink">¿Sigues con dudas?</h2>
                        <p className="t-body mt-2 text-ink-muted">
                            Escríbeme directamente. Contesto yo, no un formulario.
                        </p>
                    </div>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasluzardevv@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fr-btn fr-btn-secondary shrink-0"
                    >
                        <Mail className="h-4 w-4" />
                        Contactar
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;

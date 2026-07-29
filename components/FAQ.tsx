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
            'Un planificador visual que reúne cuatro cosas en una sola aplicación: la agenda del día organizada por bloques de energía, pizarras tipo tablero que puedes compartir con otras personas, un espacio de entradas para notas, tablas, archivos y notas de voz, y un modo enfoque que mide tu atención real. Encima de todo eso hay una capa ligera de progreso —XP, niveles y rachas— y un registro de ánimo.',
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
        question: '¿Puedo compartir una pizarra con otras personas?',
        answer:
            'Sí. Cada pizarra nace privada y se convierte en un espacio compartido en cuanto invitas a alguien, por correo electrónico o generando un enlace de invitación. A partir de ahí sus tarjetas son de todos los miembros y los cambios aparecen en tiempo real, sin recargar la página.',
    },
    {
        question: '¿Qué puede hacer cada rol?',
        answer:
            'Hay tres. El Administrador gestiona todo: invita, expulsa, cambia roles, renombra la pizarra y edita el contenido. El Miembro crea, edita, mueve, completa y borra tarjetas, y gestiona las listas, pero no administra la pizarra. El Observador solo lee. Aparte está el propietario, que es quien la creó: siempre es administrador, es el único que puede eliminarla y puede transferir la propiedad a otro administrador. Una pizarra nunca puede quedarse sin administradores.',
    },
    {
        question: '¿Qué significa la visibilidad «con enlace»?',
        answer:
            'Es el segundo eje, independiente de los miembros. Una pizarra privada solo la ven sus miembros. Si la cambias a «con enlace», Zenth genera una dirección pública de solo lectura: quien la tenga puede mirar el tablero sin cuenta y sin poder tocar nada. Puedes volver a privada cuando quieras.',
    },
    {
        question: '¿Puedo conectar mi Google Calendar?',
        answer:
            'Sí, con permiso de solo lectura. Eliges qué calendarios quieres ver y sus eventos aparecen en Hoy junto a tus tareas. La sincronización se actualiza sola cada cinco minutos y puedes pausarla en cualquier momento. Los eventos no entran en ninguna pizarra por su cuenta: si quieres llevarlos a una, hay que hacerlo explícitamente desde «Llevar eventos a Todo».',
    },
    {
        question: '¿Qué puedo guardar en Entradas?',
        answer:
            'Notas de texto enriquecido, tablas con fórmulas y formato de celda, archivos que subas (PDF, imágenes, documentos) y notas de voz grabadas desde el micrófono. Todo se organiza en carpetas y etiquetas, con un buscador global. Cualquier tarea puede expandirse a una nota si se te queda pequeña.',
    },
    {
        question: '¿Cómo funciona el modo enfoque?',
        answer:
            'Eliges una duración —15, 25, 45 o 60 minutos, o la que escribas— y opcionalmente la asocias a una tarea concreta. Al terminar, los minutos se guardan como sesión de enfoque. Esa métrica no es decorativa: los niveles altos exigen decenas de horas acumuladas, así que no se puede falsear.',
    },
    {
        question: '¿Para qué sirven los XP y los niveles?',
        answer:
            'Cada tarea completada suma 10 XP y las grandes metas 50. Hay diez niveles, de Punto de Partida a Zenth, y cada uno pide una combinación de XP, racha, tareas completadas y minutos de enfoque: no basta con acumular puntos. Los niveles son permanentes, así que romper una racha no te hace bajar de nivel.',
    },
    {
        question: '¿Por qué se dice que es ideal para personas con TDAH?',
        answer:
            'Porque está diseñado alrededor de tres cosas que suelen fallar con las apps convencionales: bloques flexibles (Mañana, Tarde, Noche) en lugar de horarios rígidos que se rompen a la primera; recompensa inmediata y visible al completar algo; y una interfaz de baja carga visual, sin alertas rojas ni listas infinitas a la vista.',
    },
    {
        question: "¿Cómo funciona el asistente 'Zen'?",
        answer:
            'Zen usa la IA de Google (Gemini) en los puntos donde ahorra trabajo de verdad. En el editor de tareas: escribes «Cena con Ana el viernes a las 21 h» y rellena los campos por ti, sugiere el mejor momento con Auto-Agendar y parte una tarea grande en micro-pasos. En el editor de notas: selecciona un texto y Zen AI lo mejora, lo resume o lo expande.',
    },
    {
        question: '¿Puedo recuperar algo que borré por error?',
        answer:
            'Sí. Las tareas y las entradas eliminadas van a la papelera, no desaparecen. Puedes abrirla desde Ajustes o desde /trash, restaurar cualquier elemento a su sitio original con un clic, o vaciarla para liberar espacio. Al mandar una tarea recurrente a la papelera, Zenth detiene sus repeticiones automáticamente.',
    },
    {
        question: '¿Puedo cambiar el aspecto de la aplicación?',
        answer:
            'Hay tres temas: Claro, Oscuro y Zen, este último con un fondo cálido más suave por la noche. Además puedes elegir el color de acento, activar el modo compacto para ver más tareas de una vez, cambiar el ancho del contenido en escritorio y usar formato de hora de 12 o 24 horas.',
    },
    {
        question: '¿Cómo puedo cambiar mi dirección de correo?',
        answer:
            'Desde Ajustes → Cuenta → Cambiar correo. Escribe la nueva dirección y recibirás un enlace de confirmación: el cambio no se aplica hasta que lo confirmas desde el correo nuevo.',
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

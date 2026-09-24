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
            'Un espacio de productividad con cuatro áreas principales: Agenda para planificar el tiempo, Pizarras para organizar proyectos y colaborar, Biblioteca para tus notas, lienzos y documentos de Google Drive, y Reuniones para hablar con tu equipo o con invitados. Progreso reúne tus niveles y logros, Estadísticas te muestra cómo usas tu tiempo, y Enfoque funciona como un temporizador global que puedes abrir desde cualquier pantalla.',
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
            'En la barra principal: Agenda, Pizarras, Biblioteca y Reuniones. En el menú de tu avatar (y en el móvil, dentro de Más) están Progreso, Actividad y ánimo, Estadísticas y la Papelera. Enfoque no ocupa una sección: se abre desde el icono de la cabecera y sigue funcionando mientras recorres la aplicación.',
    },
    {
        question: '¿Puedo compartir una pizarra con otras personas?',
        answer:
            'Sí. Cada pizarra nace privada y puedes invitar por correo o mediante un enlace que puedes revocar. Los cambios, la presencia y la actividad aparecen en tiempo real. También hay comentarios, menciones, responsables múltiples, adjuntos privados, checklists, automatizaciones, plantillas, votos, aprobaciones, sala del equipo y llamadas privadas.',
    },
    {
        question: '¿Puedo compartir una nota o dibujar con otras personas?',
        answer:
            'Sí. Las notas y los lienzos se comparten por correo con permiso de ver, editar o, en las notas, sugerir cambios que tú revisas. Ves quién está dentro y qué hace en cada momento. Lo que te comparten aparece en Biblioteca › Compartidos conmigo y puedes guardarlo en tu propia Biblioteca.',
    },
    {
        question: '¿Qué son las reuniones rápidas?',
        answer:
            'Son llamadas aisladas para clientes, candidatos o colaboradores que no necesitan entrar a tu espacio de trabajo. Desde Reuniones puedes crear un enlace para más tarde, iniciar una reunión al instante o programarla en Agenda. La otra persona entra con su nombre, sin registrarse, y tú decides quién pasa de la sala de espera.',
    },
    {
        question: '¿Qué diferencia hay entre una sala de pizarra y una reunión rápida?',
        answer:
            'La sala de una pizarra pertenece a sus integrantes y aparece en Reuniones junto a tus demás salas; su chat se guarda con la pizarra. Una reunión rápida no está vinculada a ninguna pizarra: quien recibe el enlace solo obtiene acceso a esa conversación, no a tus tareas, archivos, historial ni otras salas, y su chat desaparece al terminar. El enlace deja de funcionar cuando el anfitrión cierra la reunión.',
    },
    {
        question: '¿Zenth tiene cámara o graba las llamadas?',
        answer:
            'Tiene cámara opcional, pero no graba. Las llamadas ofrecen voz, cámara, selección de dispositivos, pantalla compartida, reacciones, mano levantada y chat. Siempre entras con la cámara apagada y solo la enciendes tú; en una reunión rápida, el anfitrión decide si los invitados pueden usarla. No se graba el audio, la cámara ni la pantalla.',
    },
    {
        question: '¿Qué puede hacer cada rol?',
        answer:
            'El Administrador gestiona la pizarra, sus miembros y su contenido. El Miembro crea y edita tarjetas y listas, pero no administra personas ni permisos. El Observador solo lee (y puede comentar y votar si un administrador lo permite). El propietario siempre es administrador, puede transferir la propiedad y es quien puede eliminar la pizarra.',
    },
    {
        question: '¿Qué significa la visibilidad «con enlace»?',
        answer:
            'Es independiente de los miembros. Una pizarra privada solo la ven sus integrantes. Si activas «con enlace», cualquiera que tenga esa dirección puede verla en modo solo lectura, sin cuenta: ve el tablero, las descripciones, las etiquetas y el progreso de las checklists, pero no los adjuntos, los miembros asignados, los documentos vinculados ni las tareas completadas. Puedes volver a privada cuando quieras.',
    },
    {
        question: '¿Qué puedo guardar en Biblioteca?',
        answer:
            'Notas y lienzos de Zenth y, al conectar Google Drive, documentos, hojas, presentaciones, formularios, carpetas, archivos subidos y grabaciones de voz. Biblioteca también muestra Mi unidad, recientes, destacados y archivos compartidos contigo.',
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
            'Sí, con permiso de solo lectura. Eliges qué calendarios ver y sus eventos aparecen en Agenda. La sincronización se actualiza cada cinco minutos mientras el permiso está activo y puedes pausarla. Nada llega a una pizarra hasta que usas explícitamente «Llevar eventos a una pizarra».',
    },
    {
        question: '¿Puedo añadir invitados y un enlace a una reunión desde Agenda?',
        answer:
            'Sí. Al editar un evento o tarea de tipo reunión puedes elegir Zenth, Google Meet, Zoom, Teams u otro enlace, y añadir direcciones de correo como invitados. Reciben la invitación al guardar y otro correo a la hora del evento; no necesitan una cuenta para responder, y tú ves quién aceptó.',
    },
    {
        question: '¿Cómo funciona Enfoque ahora?',
        answer:
            'Abres el panel desde la cabecera, eliges 15, 25, 45 o 60 minutos, una duración propia o el modo sin duración, y puedes vincular una tarea. El temporizador continúa aunque cambies de pantalla. Incluye descansos, nota rápida, objetivo diario, historial editable, sonidos ambientales, mezclas guardadas y música.',
    },
    {
        question: '¿Para qué sirven XP, niveles y logros?',
        answer:
            'Cada tarea suma 10 XP y una gran meta, 50. Hay 20 niveles inspirados en constelaciones; cada uno exige XP, mejor racha, tareas completadas y minutos de enfoque. Además hay 25 logros de ejecución, constancia, enfoque y recorrido. Los niveles alcanzados son permanentes.',
    },
    {
        question: '¿Qué mide Estadísticas y quién la ve?',
        answer:
            'Cuánto tiempo pasas en cada sección de Zenth (contando solo con la pestaña visible), cómo van tu enfoque y tus tareas, y cómo cambian respecto al período anterior. Puedes exportar el informe a Excel, CSV o PDF. Solo tú lo ves: ni siquiera los miembros de tus pizarras acceden a esos datos.',
    },
    {
        question: "¿Cómo funciona el asistente 'Zen'?",
        answer:
            'Zen usa Google Gemini solo cuando se lo pides, dentro del editor de tareas: puede interpretar una frase para completar una tarea, sugerir la mejor fecha y hora, y dividir el trabajo en micro-pasos. Solo recibe el texto de esa solicitud; no analiza silenciosamente el resto de tu contenido.',
    },
    {
        question: '¿Puedo recuperar algo que borré por error?',
        answer:
            'Las tareas, notas y lienzos van a la papelera de Zenth y pueden restaurarse. Los archivos de Google Drive que envías a su papelera aparecen en la pestaña Drive de la Papelera, desde donde también puedes restaurarlos. Vaciar la papelera de Zenth es una acción permanente; y «Eliminar todas las tareas», en Ajustes, se salta la papelera.',
    },
    {
        question: '¿Puedo usar varias cuentas en el mismo dispositivo?',
        answer:
            'Sí. Desde el menú de tu avatar puedes añadir otra cuenta sin cerrar la actual y cambiar entre ellas en un clic. Cada cuenta conserva sus datos, ajustes e integraciones por separado. Si hay una llamada, una sesión de Enfoque o cambios sin guardar, Zenth te avisa antes de cambiar.',
    },
    {
        question: '¿Hay atajos de teclado?',
        answer:
            'Sí: Ctrl+K busca en todo Zenth, Alt+1 a Alt+7 cambian de sección, D/S/M cambian la vista de Agenda, y el editor de notas tiene atajos de formato y bloques. Ctrl+Shift+/ abre el catálogo completo dentro de la aplicación, y en la documentación están todos.',
    },
    {
        question: '¿Puedo cambiar el aspecto de la aplicación?',
        answer:
            'Puedes usar el tema del sistema, Claro, Oscuro o Zen; activar el modo compacto; cambiar el ancho del contenido y elegir formato de 12 o 24 horas. También personalizas tu avatar con degradados, ilustraciones o una foto. El azul es el acento estable de la interfaz, mientras que etiquetas, listas y estados conservan sus propios colores.',
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
        question: '¿Cómo elimino mi cuenta o mis datos?',
        answer:
            'Puedes borrar contenido desde la Papelera y desconectar Google Drive y Calendar desde Ajustes. Para eliminar tu cuenta y tus datos, escríbeme desde el correo de tu cuenta: hoy no hay un botón para hacerlo dentro de la aplicación. Los detalles están en la política de privacidad.',
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

const FAQ = ({ onBack, onGoToDocs }: { onBack: () => void; onGoToDocs: () => void }) => {
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
                            La documentación explica cada sección de la aplicación paso a paso y tiene buscador.
                        </p>
                    </div>
                    <button onClick={onGoToDocs} className="fr-btn fr-btn-primary shrink-0">
                        <BookOpen className="h-4 w-4" />
                        Ver la documentación
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

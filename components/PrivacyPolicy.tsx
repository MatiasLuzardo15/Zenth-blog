import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const Section: React.FC<{ n: number; title: string; children: React.ReactNode }> = ({ n, title, children }) => (
    <section className="mt-14">
        <h2 className="t-display-md flex items-baseline gap-3 text-ink">
            <span className="t-caption tabular-nums text-ink-muted">{String(n).padStart(2, '0')}</span>
            {title}
        </h2>
        <div className="mt-5 space-y-4">{children}</div>
    </section>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="t-body-lg text-ink-muted">{children}</p>
);

const List: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
    <ul className="space-y-3">
        {items.map((item, i) => (
            <li key={i} className="flex gap-3">
                <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="t-body-lg text-ink-muted">{item}</span>
            </li>
        ))}
    </ul>
);

const B: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <strong className="font-semibold text-ink">{children}</strong>
);

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen pt-28 pb-24 lg:pt-36">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <button onClick={onBack} className="t-caption group mb-10 inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                    Volver
                </button>

                <p className="t-eyebrow">Legal</p>
                <h1 className="t-display-xl mt-4 text-ink">Política de privacidad.</h1>
                <p className="t-micro mt-6 text-ink-muted">Última actualización: 23 de septiembre de 2026</p>

                <div className="fr-card-featured mt-10">
                    <p className="t-caption text-ink">En una frase</p>
                    <p className="t-body-lg mt-3 text-ink-muted">
                        Zenth utiliza tus datos para prestar el servicio que eliges: no los vende, no muestra
                        publicidad y no usa rastreadores publicitarios. Las integraciones de Google son
                        opcionales, revocables y solo actúan cuando utilizas sus funciones.
                    </p>
                </div>

                <Section n={1} title="Responsable y alcance">
                    <P>
                        El responsable de Zenth es <B>Matías Luzardo</B>, Uruguay. Esta política se aplica a
                        la aplicación web y PWA disponible en <B>zenth.space</B>, a este sitio informativo y a
                        las comunicaciones operativas relacionadas con el Servicio.
                    </P>
                    <P>
                        Para ejercer derechos o consultar cualquier tratamiento, escribe a{' '}
                        <a href="mailto:matiasluzardevv@gmail.com" className="fr-link">matiasluzardevv@gmail.com</a>.
                    </P>
                </Section>

                <Section n={2} title="Información que tratamos">
                    <List items={[
                        <><B>Cuenta y perfil.</B> Correo electrónico, identificador de usuario, nombre, avatar y portada. La autenticación y la contraseña son gestionadas por Supabase; Zenth no puede consultar tu contraseña en texto legible.</>,
                        <><B>Organización personal.</B> Tareas, eventos, reuniones, repeticiones, recordatorios, etiquetas, pasos, adjuntos, notas, lienzos, carpetas nativas, sesiones de enfoque, objetivos, estadísticas, rachas, niveles, logros y registros de ánimo.</>,
                        <><B>Tiempo en la aplicación.</B> Para la sección Estadísticas, por cada tramo de uso con la pestaña visible guardamos el día, la hora de inicio y de fin, la sección de Zenth y, dentro de Pizarras, la pizarra abierta. Solo tú puedes leer estos datos: ningún otro usuario, ni siquiera los miembros de tus pizarras, accede a ellos. No usamos herramientas de analítica de terceros.</>,
                        <><B>Colaboración.</B> Pizarras, listas, miembros, roles, invitaciones, comentarios, menciones, asignaciones, votos, aprobaciones, actividad y presencia compartida. En las notas y lienzos compartidos, también los colaboradores, sus permisos, las invitaciones, las sugerencias y la presencia dentro del documento.</>,
                        <><B>Archivos nativos.</B> Imágenes de tareas y notas, y archivos o grabaciones heredados que hayas almacenado directamente en Zenth.</>,
                        <><B>Preferencias.</B> Tema, densidad, ancho, formato horario, relación entre Agenda y Pizarras, opciones de Enfoque, sonido, notificaciones e integraciones.</>,
                        <><B>Datos técnicos.</B> Sesión, almacenamiento local del navegador (incluida la lista de cuentas abiertas en tu dispositivo), información necesaria para seguridad y funcionamiento, la fecha en que aceptaste los Términos y, si activas notificaciones, el token de entrega del dispositivo.</>,
                    ]} />
                </Section>

                <Section n={3} title="Google Drive y Workspace">
                    <P>
                        La conexión con Google Drive es opcional. Para que Biblioteca pueda mostrar y
                        administrar <B>Mi unidad</B>, Zenth solicita el permiso de Drive que permite operar
                        sobre los archivos a los que tu cuenta ya tiene acceso.
                    </P>
                    <List items={[
                        <><B>Qué puede hacer.</B> Listar, buscar, leer, crear, editar, subir, descargar, exportar, copiar, mover, destacar, compartir o enviar archivos a la papelera cuando realizas la acción correspondiente en Zenth.</>,
                        <><B>Qué se guarda en Zenth.</B> La cuenta de Google conectada, los permisos concedidos, identificadores y metadatos mínimos de elementos vinculados, la carpeta de trabajo y tokens OAuth cifrados. Las credenciales solo son accesibles desde la función segura del servidor.</>,
                        <><B>Dónde vive el contenido.</B> Los documentos, hojas, presentaciones, formularios, carpetas, archivos subidos y nuevas notas de voz se guardan en tu Google Drive. Zenth los transmite para mostrarlos o editarlos, pero no conserva una segunda copia permanente de su contenido.</>,
                        <><B>Desconexión.</B> Al desconectar Drive, Zenth intenta revocar el permiso y elimina de su base la conexión y las referencias asociadas. Tus archivos permanecen en Google Drive hasta que tú los elimines allí.</>,
                    ]} />
                    <P>
                        El uso de datos obtenidos de Google cumple la{' '}
                        <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer" className="fr-link">
                            Política de datos de usuario de los servicios API de Google
                        </a>, incluidos sus requisitos de Uso Limitado.
                    </P>
                </Section>

                <Section n={4} title="Google Calendar y Zen AI">
                    <List items={[
                        <><B>Google Calendar.</B> Solicita permiso de solo lectura. El token permanece en memoria y caduca; la lista de calendarios y las preferencias se guardan localmente en tu navegador. Los eventos de los calendarios elegidos se importan como filas de Agenda para poder mostrarlos y, si tú lo decides, vincularlos con una pizarra. Desconectar detiene el acceso futuro, pero no elimina automáticamente elementos ya importados.</>,
                        <><B>Zen AI.</B> Cuando pulsas una acción de inteligencia artificial en el editor de tareas (completar una tarea desde una frase, proponer una fecha y hora o dividirla en pasos), se envía a Google Gemini únicamente el texto de esa solicitud —la frase o el título de la tarea— y la fecha de hoy. Zen no analiza toda tu cuenta en segundo plano ni lee tus notas, pizarras o archivos.</>,
                    ]} />
                </Section>

                <Section n={5} title="Voz, cámara, pantalla y comunicaciones">
                    <List items={[
                        <><B>Salas y llamadas.</B> El audio, la cámara y la pantalla compartida se transmiten en tiempo real mediante LiveKit. La cámara es opcional: siempre empieza apagada y solo la enciende quien aparece en ella. Zenth no graba el audio, la cámara ni la pantalla y no almacena su contenido.</>,
                        <><B>Chat.</B> El chat de una sala de pizarra (mensajes y reacciones) se guarda con la pizarra y lo leen sus integrantes; quien escribe puede borrar sus propios mensajes. El chat de las llamadas privadas y de las reuniones rápidas no se guarda: existe solo mientras esa conversación está abierta.</>,
                        <><B>Invitados de reuniones rápidas.</B> Quien entra con un enlace no crea una cuenta: usa una identidad temporal y el nombre que escribe. Guardamos ese nombre, el estado de su solicitud de admisión (pendiente, admitido, rechazado o bloqueado) y sus momentos de entrada y salida para autorizar el acceso, mostrar la presencia y aplicar los controles del anfitrión y los límites técnicos.</>,
                        <><B>Metadatos operativos.</B> Se registra quién participa, en qué pizarra o llamada, los momentos de entrada y salida, la duración y datos de presencia necesarios para autorizar el acceso, mostrar el estado y aplicar límites técnicos.</>,
                        <><B>Correo y push.</B> Podemos usar tu correo y tokens de notificación para confirmaciones de cuenta, seguridad, invitaciones y las categorías de avisos que hayas activado. Puedes cambiar las preferencias no esenciales desde Ajustes.</>,
                        <><B>Personas que invitas.</B> Si invitas a alguien a una pizarra, a un evento, a una nota o a un lienzo, tratamos su dirección de correo para enviarle la invitación, mostrarte su estado (por enviar, pendiente, aceptada o rechazada) y asociarla a su cuenta si se registra con esa dirección. Quien recibe un evento puede responder sin tener cuenta.</>,
                    ]} />
                </Section>

                <Section n={6} title="Finalidades y bases del tratamiento">
                    <List items={[
                        <><B>Prestar y sincronizar el Servicio:</B> ejecutar las funciones que solicitas, mantener tu sesión y hacer disponible tu contenido entre dispositivos.</>,
                        <><B>Colaborar:</B> aplicar roles, compartir contenido y mostrar autoría, actividad o presencia a las personas de una pizarra.</>,
                        <><B>Proteger Zenth:</B> prevenir accesos indebidos, investigar fallos y hacer cumplir los límites del Servicio.</>,
                        <><B>Comunicar:</B> enviar mensajes necesarios para la cuenta y los avisos opcionales que hayas configurado.</>,
                        <><B>Integraciones opcionales:</B> tratar datos de Google, IA, voz o notificaciones sobre la base de tu solicitud y del consentimiento que puedes retirar.</>,
                    ]} />
                    <P>
                        El tratamiento se basa, según el caso, en la ejecución del Servicio que solicitas,
                        tu consentimiento para funciones opcionales, el cumplimiento de obligaciones legales
                        y el interés legítimo de mantener el Servicio seguro y operativo.
                    </P>
                </Section>

                <Section n={7} title="Qué ven otras personas">
                    <List items={[
                        <><B>Pizarras compartidas.</B> Sus miembros ven tu nombre, avatar, rol, aportes y presencia relacionada con esa pizarra. No obtienen acceso a tu Agenda privada, otras pizarras, Biblioteca personal, ánimo, estadísticas ni tiempo de uso.</>,
                        <><B>Enfoque.</B> Si habilitas esta opción, los miembros pueden ver que estás en una sesión y hasta qué hora; no ven la tarea asociada.</>,
                        <><B>Enlaces públicos.</B> Si cambias una pizarra a «con enlace», cualquiera que tenga la dirección puede verla sin iniciar sesión. Es de solo lectura, afecta únicamente esa pizarra y puede revocarse. Se ven el tablero, las descripciones, las etiquetas, el progreso de las checklists y el número de comentarios; no se muestran adjuntos, miembros asignados, documentos vinculados, tareas completadas ni datos de personas.</>,
                        <><B>Notas y lienzos compartidos.</B> Quienes tengan acceso ven el contenido según el permiso que les concedas (ver, sugerir o editar) y la presencia de las demás personas dentro de ese documento, por ejemplo si están escribiendo o mirando.</>,
                        <><B>Reuniones.</B> Los participantes de una conversación ven a las demás personas de esa conversación. Quien entra como invitado no accede a tus pizarras, tareas, archivos, historial ni otras salas.</>,
                        <><B>Drive.</B> Compartir un archivo de Google aplica los permisos reales de Drive. Revisa destinatario y rol antes de confirmar.</>,
                    ]} />
                </Section>

                <Section n={8} title="Proveedores y transferencias">
                    <P>Zenth utiliza proveedores para operar. Pueden procesar datos en países distintos al tuyo conforme a sus propios términos y salvaguardas:</P>
                    <List items={[
                        <><B>Supabase:</B> base de datos, autenticación, funciones y almacenamiento nativo.</>,
                        <><B>Google:</B> Drive, Docs, Sheets, Slides, Forms, Calendar, Gemini y Firebase Cloud Messaging.</>,
                        <><B>LiveKit:</B> transmisión de voz, cámara y pantalla.</>,
                        <><B>Vercel:</B> alojamiento y entrega de la aplicación y del sitio.</>,
                        <><B>Proveedor SMTP:</B> entrega de correos transaccionales y avisos elegidos.</>,
                        <><B>PayPal:</B> procesa las contribuciones voluntarias cuando decides abrir su página; Zenth no recibe datos completos de pago.</>,
                        <><B>Google Fonts:</B> sirve las tipografías del sitio y recibe la solicitud técnica de tu navegador.</>,
                    ]} />
                    <P>No vendemos, alquilamos ni cedemos datos para publicidad comportamental.</P>
                </Section>

                <Section n={9} title="Conservación y eliminación">
                    <List items={[
                        <><B>Cuenta activa.</B> Conservamos los datos necesarios mientras mantengas la cuenta o hasta que elimines contenido.</>,
                        <><B>Papelera de Zenth.</B> Las tareas, notas y lienzos eliminados pueden restaurarse hasta que vacíes la papelera. Los elementos de Google usan la papelera de Drive, que también puedes consultar desde Zenth.</>,
                        <><B>Sesiones en tu dispositivo.</B> La lista de cuentas abiertas vive en tu navegador. Cerrar una sesión o quitar una cuenta del dispositivo elimina esa sesión guardada; tus datos siguen en tu cuenta.</>,
                        <><B>Conexiones.</B> La conexión cifrada de Drive se elimina al desconectarla; el token temporal de Calendar se pierde al caducar o cerrar la sesión. Los archivos guardados en Google no se borran por desconectar Zenth.</>,
                        <><B>Estadísticas.</B> La sección Estadísticas muestra hasta los últimos 180 días de tiempo de uso.</>,
                        <><B>Cuenta y derechos.</B> Puedes solicitar la eliminación de tu cuenta y datos escribiendo al correo de contacto. Determinados registros podrán conservarse durante el plazo estrictamente necesario para seguridad, obligaciones legales o resolución de controversias.</>,
                    ]} />
                </Section>

                <Section n={10} title="Seguridad">
                    <P>
                        Usamos conexiones cifradas, autenticación, políticas de acceso a nivel de base de
                        datos, validaciones del servidor, tokens OAuth cifrados y permisos por pizarra.
                        Ningún sistema es infalible: protege tu cuenta, usa una contraseña única y avísanos
                        si detectas actividad sospechosa.
                    </P>
                </Section>

                <Section n={11} title="Tus derechos">
                    <P>
                        La Ley uruguaya Nº 18.331 reconoce derechos de información, acceso, actualización,
                        rectificación, inclusión, supresión y oposición, según corresponda. Puedes ejercerlos
                        gratuitamente mediante el correo de contacto; podremos pedir información razonable
                        para verificar tu identidad.
                    </P>
                    <P>
                        También puedes consultar o denunciar ante la{' '}
                        <a href="https://www.gub.uy/unidad-reguladora-control-datos-personales/" target="_blank" rel="noreferrer" className="fr-link">
                            Unidad Reguladora y de Control de Datos Personales de Uruguay
                        </a>.
                    </P>
                </Section>

                <Section n={12} title="Cambios y contacto">
                    <P>
                        Podemos actualizar esta política cuando cambie Zenth, sus proveedores o la normativa.
                        Si el cambio es relevante, lo comunicaremos por medios razonables y actualizaremos la
                        fecha de esta página.
                    </P>
                    <div className="fr-card">
                        <p className="t-body text-ink-muted">Responsable: Matías Luzardo · Uruguay</p>
                        <p className="t-body mt-2 text-ink-muted">Correo: <a href="mailto:matiasluzardevv@gmail.com" className="fr-link">matiasluzardevv@gmail.com</a></p>
                        <p className="t-body mt-2 text-ink-muted">Web: <a href="https://zenth.space" className="fr-link">zenth.space</a></p>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

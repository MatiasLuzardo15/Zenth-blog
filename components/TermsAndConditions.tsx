import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsAndConditionsProps {
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

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBack }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen pt-28 pb-24 lg:pt-36">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <button onClick={onBack} className="t-caption group mb-10 inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                    Volver
                </button>

                <p className="t-eyebrow">Legal</p>
                <h1 className="t-display-xl mt-4 text-ink">Términos y condiciones.</h1>
                <p className="t-micro mt-6 text-ink-muted">Última actualización: 23 de septiembre de 2026</p>

                <div className="fr-card-featured mt-10">
                    <p className="t-caption text-ink">En una frase</p>
                    <p className="t-body-lg mt-3 text-ink-muted">
                        Zenth es gratuito y tu contenido sigue siendo tuyo. Cuida tu cuenta, respeta a las
                        personas con quienes colaboras y revisa antes de compartir o modificar archivos externos.
                    </p>
                </div>

                <div className="mt-12 border-t border-hairline-soft pt-10">
                    <P>
                        Estos Términos regulan el uso de Zenth, disponible en <B>zenth.space</B> y como
                        aplicación web progresiva. Al crear una cuenta o utilizar el Servicio aceptas estos
                        Términos y la <a href="/privacy" className="fr-link">Política de Privacidad</a>. Si
                        no estás de acuerdo, no utilices el Servicio.
                    </P>
                </div>

                <Section n={1} title="Quién presta el Servicio">
                    <P>
                        Zenth es un proyecto independiente desarrollado y operado por <B>Matías Luzardo</B>,
                        Uruguay. Puedes escribir a <a href="mailto:matiasluzardevv@gmail.com" className="fr-link">matiasluzardevv@gmail.com</a>.
                    </P>
                </Section>

                <Section n={2} title="Qué ofrece Zenth">
                    <List items={[
                        <><B>Agenda:</B> tareas, eventos y reuniones en vistas de día, semana, mes y año.</>,
                        <><B>Pizarras:</B> proyectos, listas, bandeja de captura, colaboración, actividad y permisos.</>,
                        <><B>Biblioteca:</B> notas y lienzos nativos y acceso opcional a Google Drive y Workspace.</>,
                        <><B>Reuniones:</B> salas de voz de las pizarras, llamadas privadas y reuniones rápidas con invitados, con voz, cámara opcional, pantalla compartida y chat.</>,
                        <><B>Enfoque:</B> temporizador o cronómetro global, descansos, sonido, objetivo e historial.</>,
                        <><B>Progreso y estadísticas:</B> XP, rachas, 20 niveles, 25 logros, registro de ánimo y estadísticas de tu tiempo en la aplicación.</>,
                        <><B>Integraciones:</B> Google Drive, Docs, Sheets, Slides, Forms, Calendar, Gemini, notificaciones, correo y voz mediante terceros.</>,
                    ]} />
                    <P>
                        Las funciones pueden evolucionar, cambiar de ubicación o recibir límites técnicos para
                        mantener el Servicio seguro y sostenible.
                    </P>
                </Section>

                <Section n={3} title="Cuenta y requisitos">
                    <List items={[
                        <>Debes proporcionar información correcta, mantener actualizado tu correo y proteger tus credenciales.</>,
                        <>Eres responsable de la actividad de tu cuenta y de cerrar sesión en dispositivos compartidos.</>,
                        <>Si no tienes edad o capacidad legal para aceptar estos Términos en tu país, necesitas la autorización de tu representante legal.</>,
                        <>Avísanos sin demora si sospechas un acceso no autorizado.</>,
                        <>Puedes tener varias cuentas abiertas en un mismo dispositivo. Cada una es una identidad independiente y eres responsable de cada una de ellas.</>,
                        <>Al crear tu cuenta, o al entrar por primera vez con Google, debes aceptar estos Términos y la Política de Privacidad. Guardamos la fecha de esa aceptación.</>,
                    ]} />
                </Section>

                <Section n={4} title="Tu contenido">
                    <P>
                        Conservas la titularidad de las tareas, notas, archivos, comentarios y demás contenido
                        que creas o conectas. Concedes a Zenth una licencia limitada, no exclusiva y revocable
                        para alojar, procesar, transmitir y mostrar ese contenido únicamente en la medida
                        necesaria para operar las funciones que solicitas.
                    </P>
                    <P>
                        Debes tener derecho a usar y compartir el contenido que incorporas. No subas datos,
                        imágenes, grabaciones o documentos de terceros sin la autorización correspondiente.
                    </P>
                </Section>

                <Section n={5} title="Pizarras, roles y enlaces">
                    <List items={[
                        <><B>Administrador.</B> Gestiona miembros, permisos, configuración y contenido de la pizarra.</>,
                        <><B>Miembro.</B> Puede crear y modificar contenido, sin administrar los permisos generales.</>,
                        <><B>Observador.</B> Accede en modo solo lectura.</>,
                        <><B>Propietario.</B> Es el administrador responsable de la pizarra, puede transferir su propiedad y eliminarla.</>,
                    ]} />
                    <P>
                        Quien invita a otra persona decide el acceso que concede. Los enlaces de invitación y
                        los enlaces públicos pueden reenviarse: revócalos cuando ya no sean necesarios. Al
                        activar «con enlace», aceptas que cualquiera que obtenga la dirección pueda ver esa
                        pizarra sin iniciar sesión. Esa vista es de solo lectura: muestra el tablero, las
                        descripciones, las etiquetas, el progreso de las checklists y el número de
                        comentarios, y no muestra adjuntos, miembros asignados, documentos vinculados ni
                        tareas completadas.
                    </P>
                </Section>

                <Section n={6} title="Notas y lienzos compartidos">
                    <P>
                        Puedes compartir notas y lienzos con otras personas con permiso de <B>ver</B>,{' '}
                        <B>sugerir</B> (solo en notas) o <B>editar</B>. Con permiso de edición, otras
                        personas pueden modificar el contenido de ese documento: concede el acceso con
                        criterio y revisa siempre el destinatario y el permiso.
                    </P>
                    <List items={[
                        <>Como propietario conservas el control del acceso y puedes retirarlo cuando quieras; al hacerlo, la otra persona deja de verlo.</>,
                        <>Quien recibe un documento puede guardarlo en su Biblioteca. Quitarlo de su Biblioteca no borra el original.</>,
                        <>Al vincular una nota o un lienzo a una tarea de una pizarra eliges si los miembros de esa pizarra pueden leerlo, editarlo o si permanece privado.</>,
                        <>Las personas con acceso ven quién está en el documento y qué hace (por ejemplo, escribiendo o mirando).</>,
                    ]} />
                </Section>

                <Section n={7} title="Google Drive y Workspace">
                    <P>
                        Al conectar Google Drive autorizas a Zenth a operar sobre los archivos que tu cuenta
                        puede utilizar. Las acciones realizadas en Biblioteca afectan los elementos reales de
                        Drive: editar, mover, copiar, compartir o enviar a la papelera no son simulaciones.
                    </P>
                    <List items={[
                        <>Revisa el archivo, destino y permiso antes de confirmar una acción.</>,
                        <>Los editores integrados de Zenth no reproducen todas las funciones de los editores nativos de Google. Usa «Abrir en Google» cuando necesites compatibilidad completa.</>,
                        <>Desconectar Zenth revoca la integración cuando es posible, pero no elimina los archivos ya creados o subidos a tu Drive.</>,
                        <>El uso de Google también está sujeto a los términos, cuotas, disponibilidad y decisiones de tu cuenta o administrador de Workspace.</>,
                    ]} />
                </Section>

                <Section n={8} title="Google Calendar">
                    <P>
                        Calendar se conecta con permiso de solo lectura. Zenth importa eventos a Agenda y solo
                        los lleva a una pizarra cuando tú lo eliges. La sincronización depende de una autorización
                        temporal de Google; puede requerir que vuelvas a conectar. Desvincular la cuenta detiene
                        futuras lecturas, pero no borra automáticamente los elementos ya importados.
                    </P>
                </Section>

                <Section n={9} title="Zen y contenido generado por IA">
                    <P>
                        Zen utiliza Google Gemini para interpretar una frase, proponer una fecha y hora o dividir
                        una tarea en pasos cuando pulsas una acción en el editor de tareas. Sus resultados pueden
                        ser incompletos, imprecisos o inadecuados. Debes revisar
                        fechas, prioridades, redacción y cualquier decisión antes de guardar o utilizar la
                        respuesta. Zen no presta asesoramiento médico, legal, financiero ni profesional.
                    </P>
                </Section>

                <Section n={10} title="Reuniones, voz, cámara, pantalla y límites técnicos">
                    <P>
                        Las salas y las llamadas privadas están vinculadas a los permisos de las pizarras. Las
                        reuniones rápidas permiten entrar a personas sin cuenta mediante un enlace. Todas usan
                        LiveKit. La cámara es opcional y solo la enciende quien aparece en ella. Zenth no graba
                        audio, cámara ni pantalla, pero las demás personas pueden usar herramientas externas: no
                        compartas información sensible sin confiar en quienes participan.
                    </P>
                    <P>
                        Quien crea una reunión rápida es su <B>anfitrión</B>. Puede exigir aprobación para entrar,
                        permitir o no a los invitados el micrófono y la cámara o la pantalla compartida, silenciarlos, quitar
                        a una persona (que no podrá volver a entrar con ese navegador), cerrar las nuevas entradas
                        y cerrar la reunión para todos. Es responsable de compartir el enlace solo con quien
                        corresponde y de cómo usa esos controles. Quien entra como invitado participa con el nombre
                        que escribe y no debe hacerse pasar por otra persona.
                    </P>
                    <P>
                        El chat de una sala de pizarra se guarda con la pizarra y puede ser leído por sus
                        integrantes; el de las llamadas privadas y las reuniones rápidas no se guarda.
                    </P>
                    <P>
                        La voz está sujeta a capacidad simultánea, minutos mensuales, disponibilidad del proveedor
                        y medidas de uso razonable. Una conversación en curso puede continuar cuando se alcanza un
                        límite, aunque nuevas conexiones podrían quedar temporalmente bloqueadas.
                    </P>
                </Section>

                <Section n={11} title="Uso aceptable">
                    <P>No puedes utilizar Zenth para:</P>
                    <List items={[
                        <>Realizar actividades ilegales, fraudulentas, abusivas, amenazantes o que vulneren derechos de terceros.</>,
                        <>Distribuir malware, intentar acceder a cuentas ajenas o eludir permisos y controles de seguridad.</>,
                        <>Enviar spam, acosar a otras personas o publicar datos personales sin una base legítima.</>,
                        <>Sobrecargar, automatizar abusivamente, revender o explotar el Servicio de manera que perjudique a otras personas o a la infraestructura.</>,
                        <>Copiar, modificar o descompilar componentes del Servicio salvo cuando una licencia o la ley lo permita expresamente.</>,
                    ]} />
                </Section>

                <Section n={12} title="Servicio gratuito y contribuciones">
                    <P>
                        Zenth se ofrece actualmente sin plan de pago ni publicidad. Las contribuciones mediante
                        PayPal son voluntarias, no compran funciones, prioridad ni propiedad sobre el proyecto y
                        se rigen también por las condiciones de PayPal. La gratuidad actual no obliga a mantener
                        para siempre el mismo modelo; cualquier cambio material se comunicará antes de aplicarse.
                    </P>
                </Section>

                <Section n={13} title="Disponibilidad y copias">
                    <P>
                        Trabajamos para mantener Zenth disponible, pero no garantizamos funcionamiento continuo ni
                        ausencia total de errores. Puede haber mantenimiento, fallos de red o interrupciones de
                        Supabase, Google, LiveKit, Vercel u otros proveedores.
                    </P>
                    <P>
                        Conserva copias de la información crítica. Para contenido de Google, utiliza también las
                        opciones de historial, exportación y recuperación de Drive. Zenth no debe ser el único
                        lugar donde guardes información cuya pérdida podría causarte un perjuicio grave.
                    </P>
                </Section>

                <Section n={14} title="Propiedad intelectual y componentes de terceros">
                    <P>
                        La marca Zenth, su diseño, código, textos y recursos propios pertenecen a su creador o a
                        sus licenciantes. Los nombres y marcas de Google, PayPal, LiveKit, Supabase y demás
                        terceros pertenecen a sus respectivos titulares. Estos Términos no transfieren derechos
                        de propiedad sobre el Servicio.
                    </P>
                    <P>
                        Zenth incorpora software de terceros con sus propias licencias, entre ellos{' '}
                        <B>Excalidraw</B> (MIT) para los lienzos. Sus avisos de licencia se conservan y se
                        distribuyen con el proyecto.
                    </P>
                </Section>

                <Section n={15} title="Suspensión y finalización">
                    <P>
                        Podemos limitar o suspender una cuenta cuando sea razonablemente necesario para investigar
                        un riesgo de seguridad, cumplir la ley, proteger a otras personas o responder a un
                        incumplimiento grave de estos Términos. Procuraremos avisar y permitir una solución cuando
                        las circunstancias lo permitan.
                    </P>
                    <P>
                        Puedes dejar de usar Zenth en cualquier momento y solicitar la eliminación de tu cuenta.
                        Desconecta primero las integraciones que quieras revocar. Los archivos de Google seguirán
                        en tu Drive hasta que tú los elimines allí.
                    </P>
                </Section>

                <Section n={16} title="Responsabilidad">
                    <P>
                        Zenth es una herramienta de organización, no un servicio de emergencia ni un sustituto
                        de asesoramiento profesional. En la máxima medida permitida por la ley aplicable, no somos
                        responsables por decisiones tomadas a partir de la IA, permisos de compartición elegidos
                        por el usuario, acciones ejecutadas en servicios externos ni interrupciones fuera de
                        nuestro control. Nada de esta sección limita derechos irrenunciables de consumidores ni
                        responsabilidad que legalmente no pueda excluirse.
                    </P>
                </Section>

                <Section n={17} title="Cambios en el Servicio o en estos Términos">
                    <P>
                        Podemos modificar funciones y actualizar estos Términos para reflejar cambios técnicos,
                        operativos o legales. Si el cambio es relevante, lo comunicaremos con antelación razonable
                        por la aplicación, el sitio o correo. La fecha superior indica la versión vigente.
                    </P>
                </Section>

                <Section n={18} title="Ley y jurisdicción">
                    <P>
                        Estos Términos se rigen por las leyes de la <B>República Oriental del Uruguay</B>, sin
                        perjuicio de los derechos imperativos que te correspondan por tu lugar de residencia.
                        Las controversias se someterán a los tribunales competentes de <B>Montevideo, Uruguay</B>,
                        salvo que una norma de protección al consumidor establezca otro fuero obligatorio.
                    </P>
                </Section>

                <Section n={19} title="Contacto">
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

export default TermsAndConditions;

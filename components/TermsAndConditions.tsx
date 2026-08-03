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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-28 pb-24 lg:pt-36">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <button
                    onClick={onBack}
                    className="t-caption group mb-10 inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                    Volver
                </button>

                <p className="t-eyebrow">Legal</p>
                <h1 className="t-display-xl mt-4 text-ink">Términos y condiciones.</h1>
                <p className="t-micro mt-6 text-ink-muted">Última actualización: 3 de agosto de 2026</p>

                <div className="fr-card-featured mt-10">
                    <p className="t-caption text-ink">En una frase</p>
                    <p className="t-body-lg mt-3 text-ink-muted">
                        Zenth es gratis y tu contenido es tuyo. Úsalo con sentido común: nada ilegal,
                        nada que perjudique a otras personas. Nosotros cuidamos el servicio; tú eres
                        responsable de tu cuenta y de lo que decides compartir.
                    </p>
                </div>

                <div className="mt-12 border-t border-hairline-soft pt-10">
                    <P>
                        Estos Términos regulan el acceso y el uso de la aplicación web Zenth (el
                        "Servicio"), disponible en zenth.space y en su versión instalable como PWA. Al
                        crear una cuenta, marcar la casilla de aceptación del registro o usar el Servicio,
                        declaras que has leído y aceptado estos Términos junto con la{' '}
                        <a href="/privacy" className="fr-link">Política de Privacidad</a>. Si no estás de
                        acuerdo, por favor no uses el Servicio.
                    </P>
                </div>

                <Section n={1} title="Qué es Zenth">
                    <P>
                        Zenth es una aplicación de productividad y bienestar hecha por una sola
                        persona. Incluye, entre otras, estas funciones:
                    </P>
                    <List
                        items={[
                            <>
                                <B>Gestión de tareas</B> por momentos del día (Mañana, Tarde, Noche),
                                secciones como "Hoy" y "En cualquier momento", tareas recurrentes,
                                etiquetas y una papelera de recuperación.
                            </>,
                            <>
                                <B>Pizarras y listas</B> para organizar proyectos, con historial de lo
                                completado.
                            </>,
                            <>
                                <B>Notas y entradas</B> con editor enriquecido, archivos adjuntos y
                                notas de voz.
                            </>,
                            <>
                                <B>Modo Enfoque:</B> temporizador de trabajo profundo con registro de
                                sesiones y minutos de enfoque.
                            </>,
                            <>
                                <B>Calendario de estados de ánimo</B> y resúmenes de bienestar.
                            </>,
                            <>
                                <B>Sistema de progreso:</B> experiencia (XP), niveles, rachas, logros y
                                estadísticas.
                            </>,
                            <>
                                <B>Colaboración:</B> pizarras compartidas, invitaciones por correo,
                                enlaces públicos de solo lectura, salas de voz y llamadas privadas uno
                                a uno.
                            </>,
                            <>
                                <B>Integraciones:</B> importación de solo lectura de Google Calendar y
                                notificaciones del navegador, push y por correo.
                            </>,
                        ]}
                    />
                    <P>
                        Zenth es una herramienta de organización personal. <B>No es un servicio
                        médico, psicológico ni de salud mental:</B> las funciones de registro de ánimo
                        y bienestar son de auto-observación y en ningún caso sustituyen el consejo,
                        diagnóstico o tratamiento profesional.
                    </P>
                </Section>

                <Section n={2} title="Requisitos de la cuenta">
                    <List
                        items={[
                            <>
                                <B>Registro.</B> Necesitas una dirección de correo válida y una
                                contraseña. Debes proporcionar información veraz.
                            </>,
                            <>
                                <B>Edad.</B> Debes ser mayor de 16 años o contar con el
                                consentimiento de tu madre, padre o tutor legal. Al registrarte
                                declaras que cumples este requisito.
                            </>,
                            <>
                                <B>Seguridad.</B> Eres responsable de tus credenciales y de la
                                actividad que ocurra bajo tu cuenta. Si detectas un uso no autorizado,
                                avísanos cuanto antes.
                            </>,
                            <>
                                <B>Comunicaciones de cuenta.</B> La confirmación de registro, los
                                cambios de correo o contraseña y el restablecimiento se envían a tu
                                dirección registrada.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={3} title="Tu contenido">
                    <List
                        items={[
                            <>
                                <B>Es tuyo.</B> Conservas la propiedad de todo lo que creas: tareas,
                                notas, imágenes, notas de voz, pizarras y cualquier otro material que
                                subas.
                            </>,
                            <>
                                <B>Licencia mínima.</B> Nos concedes una licencia limitada y revocable
                                para alojar, procesar y mostrar tu contenido con el único fin de operar
                                el Servicio: sincronizarlo entre tus dispositivos, mostrarlo a quienes
                                decides compartirlo y enviarte recordatorios.
                            </>,
                            <>
                                <B>Responsabilidad.</B> Eres el único responsable de tu contenido y de
                                tener los derechos necesarios sobre él.
                            </>,
                            <>
                                <B>Copias.</B> Te recomendamos conservar copia de la información
                                importante. Aplicamos buenas prácticas de respaldo, pero no
                                garantizamos la conservación perpetua de los datos.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={4} title="Colaboración, salas de voz y llamadas">
                    <List
                        items={[
                            <>
                                <B>Pizarras compartidas.</B> Al invitar a alguien, sus miembros ven y, según su rol,
                                editan el contenido de esa pizarra. Invita con criterio.
                            </>,
                            <>
                                <B>Enlaces públicos.</B> Si activas el enlace público de una pizarra,
                                cualquiera que lo tenga puede verla en solo lectura, sin cuenta. No
                                publiques ahí información sensible. Es reversible en cualquier momento.
                            </>,
                            <>
                                <B>Voz y llamadas.</B> Funcionan sobre infraestructura de terceros
                                (LiveKit), con voz y pantalla compartida. <B>No hay cámara ni
                                videollamada</B>: el servidor lo impide técnicamente. Solo puedes
                                llamar a personas con las que compartes una pizarra, y solo los
                                integrantes de una pizarra entran a su sala.
                            </>,
                            <>
                                <B>Nada se graba.</B> No almacenamos audio, pantalla ni ningún
                                contenido de las conversaciones: son efímeras y viven solo en memoria
                                mientras duran. Tampoco podemos recuperarlas después.
                            </>,
                            <>
                                <B>Límites de uso.</B> Las funciones de voz tienen topes de conexiones
                                simultáneas y minutos mensuales según la capacidad contratada. Al
                                alcanzarse se bloquean las entradas nuevas, pero las conversaciones en
                                curso nunca se interrumpen. Los topes pueden cambiar y su estado es
                                visible dentro de la aplicación.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={5} title="Proveedores e integraciones de terceros">
                    <P>
                        Zenth se apoya en servicios de terceros para operar. Al usar esas funciones
                        también aplican sus propios términos y políticas, y no somos responsables de
                        su disponibilidad ni de sus prácticas.
                    </P>
                    <List
                        items={[
                            <>
                                <B>Supabase.</B> Autenticación, base de datos, almacenamiento de
                                adjuntos y sincronización en tiempo real.
                            </>,
                            <>
                                <B>Resend.</B> Envío de correos transaccionales: verificación,
                                recuperación de contraseña, invitaciones y recordatorios.
                            </>,
                            <>
                                <B>Firebase Cloud Messaging.</B> Entrega de notificaciones push, solo
                                si las activas.
                            </>,
                            <>
                                <B>Google Gemini.</B> Las funciones del asistente Zen. El texto se
                                procesa solo cuando pulsas una acción de IA, nunca de fondo.
                            </>,
                            <>
                                <B>Google Calendar.</B> Integración opcional y de <B>solo lectura</B>.
                                Zenth no puede crear, modificar ni eliminar eventos; el token de
                                acceso se mantiene en la memoria del navegador y no se guarda en
                                nuestros servidores. Puedes pausar o desvincular la conexión desde
                                Ajustes en cualquier momento.
                            </>,
                            <>
                                <B>LiveKit.</B> Salas de voz y llamadas privadas.
                            </>,
                            <>
                                <B>Vercel.</B> Alojamiento del sitio web y de la aplicación.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={6} title="Notificaciones y recordatorios">
                    <P>
                        Los recordatorios por navegador, push y correo son configurables por ti, pero
                        su entrega depende de tu navegador, sistema operativo, red y de los
                        proveedores anteriores. <B>Se ofrecen como "mejor esfuerzo": no garantizamos
                        su entrega, puntualidad ni recepción.</B> No uses Zenth como único sistema de
                        aviso para asuntos críticos de salud, seguridad o compromisos ineludibles.
                    </P>
                </Section>

                <Section n={7} title="Plan gratuito, límites y cambios del Servicio">
                    <List
                        items={[
                            <>
                                <B>Gratis.</B> Actualmente Zenth se ofrece de forma gratuita. Si en el
                                futuro se introducen planes de pago o funciones premium, se anunciará
                                con antelación razonable y nunca se te cobrará sin tu consentimiento
                                expreso previo.
                            </>,
                            <>
                                <B>Evolución.</B> Podemos añadir, modificar, suspender o retirar
                                funciones en cualquier momento, procurando avisar cuando el cambio sea
                                relevante.
                            </>,
                            <>
                                <B>Suspensión.</B> Podemos suspender o cancelar cuentas que incumplan
                                estos Términos, hagan un uso abusivo de los recursos o comprometan la
                                seguridad o la experiencia de otras personas.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={8} title="Usos prohibidos">
                    <P>Te comprometes a no:</P>
                    <List
                        items={[
                            <>Usar el Servicio para fines ilegales, fraudulentos o contrarios a la normativa aplicable.</>,
                            <>
                                Subir contenido ilícito, difamatorio, violento, que infrinja derechos
                                de terceros (incluida la propiedad intelectual) o que vulnere la
                                privacidad de otras personas.
                            </>,
                            <>Compartir pizarras o enlaces públicos con contenido de terceros sin su consentimiento.</>,
                            <>
                                Intentar acceder sin autorización a cuentas, pizarras, salas o
                                sistemas ajenos, ni interferir en la infraestructura del Servicio.
                            </>,
                            <>
                                Extraer datos de forma automatizada o realizar ingeniería inversa del
                                Servicio, salvo en lo permitido por la ley.
                            </>,
                            <>
                                Suplantar identidades o usar las invitaciones y la colaboración para
                                enviar comunicaciones no solicitadas.
                            </>,
                            <>Usar las salas de voz para acosar, amenazar o vulnerar derechos de terceros.</>,
                        ]}
                    />
                </Section>

                <Section n={9} title="Propiedad intelectual">
                    <P>
                        Zenth, su nombre, marca, diseño, logotipos y elementos visuales nos pertenecen
                        (o a sus licenciantes) y no se te concede ningún derecho sobre ellos más allá
                        del necesario para usar el Servicio. Algunas partes del software se distribuyen
                        bajo licencias de código abierto, que se rigen por sus propios términos. Estos
                        Términos no te transfieren ninguna propiedad intelectual sobre el Servicio, ni
                        a nosotros ninguna sobre tu contenido.
                    </P>
                </Section>

                <Section n={10} title="Disponibilidad y garantías">
                    <P>
                        El Servicio se ofrece <B>"tal cual" y "según disponibilidad"</B>, sin garantías
                        de ningún tipo, expresas o implícitas, en la máxima medida permitida por la
                        ley. No garantizamos que sea ininterrumpido, puntual o libre de errores, ni
                        que los datos nunca se pierdan. Ninguna estadística, nivel o resumen generado
                        por la app constituye consejo médico, psicológico, legal ni financiero.
                    </P>
                </Section>

                <Section n={11} title="Limitación de responsabilidad">
                    <P>
                        En la máxima medida permitida por la legislación aplicable, no seremos
                        responsables de daños indirectos, incidentales, especiales o consecuentes, ni
                        de pérdida de beneficios, datos o uso, derivados del uso (o de la imposibilidad
                        de uso) del Servicio. Nuestra responsabilidad total acumulada por cualquier
                        reclamación relacionada con el Servicio no excederá de cien euros (100 €) o el
                        importe mínimo permitido por la ley aplicable, el que sea menor. Nada de lo
                        anterior excluye la responsabilidad que no pueda excluirse conforme a la ley.
                    </P>
                </Section>

                <Section n={12} title="Cancelación y eliminación de la cuenta">
                    <List
                        items={[
                            <>
                                <B>Cuando quieras.</B> Puedes dejar de usar Zenth en cualquier momento
                                y solicitar la eliminación de tu cuenta escribiéndonos.
                            </>,
                            <>
                                <B>Papelera.</B> Lo que eliminas dentro de la app pasa primero a la
                                papelera, desde donde puedes restaurarlo antes de su borrado
                                definitivo.
                            </>,
                            <>
                                <B>Eliminación.</B> Tras eliminar la cuenta, tus datos se borran o
                                anonimizan según lo descrito en la Política de Privacidad, salvo lo que
                                debamos conservar por obligación legal.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={13} title="Cambios en estos Términos">
                    <P>
                        Podemos actualizar estos Términos para reflejar cambios en el Servicio o en la
                        normativa. Si el cambio es relevante, lo anunciaremos con antelación razonable
                        dentro de la aplicación o en este sitio, y actualizaremos la fecha de "última
                        actualización". Seguir usando el Servicio tras la entrada en vigor de los
                        cambios implica su aceptación; si no estás de acuerdo, puedes dejar de usarlo y
                        eliminar tu cuenta.
                    </P>
                </Section>

                <Section n={14} title="Legislación y jurisdicción">
                    <P>
                        Estos Términos se rigen por las leyes de la <B>República Oriental del
                        Uruguay</B>, sin perjuicio de los derechos irrenunciables que te reconozca la
                        legislación de tu lugar de residencia. Cualquier controversia se someterá a los
                        tribunales de <B>Montevideo, Uruguay</B>, salvo que la normativa de protección
                        del consumidor establezca otro fuero imperativo.
                    </P>
                </Section>

                <Section n={15} title="Contacto">
                    <P>Si tienes cualquier duda sobre estos Términos o sobre el Servicio, escríbeme:</P>
                    <div className="fr-card">
                        <p className="t-body text-ink-muted">
                            Correo:{' '}
                            <a href="mailto:matiasluzardevv@gmail.com" className="fr-link">
                                matiasluzardevv@gmail.com
                            </a>
                        </p>
                        <p className="t-body mt-2 text-ink-muted">
                            Web:{' '}
                            <a href="https://zenth.space" className="fr-link">
                                zenth.space
                            </a>
                        </p>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default TermsAndConditions;

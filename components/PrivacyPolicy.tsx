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
                <h1 className="t-display-xl mt-4 text-ink">Política de privacidad.</h1>
                <p className="t-micro mt-6 text-ink-muted">Última actualización: 29 de julio de 2026</p>

                <div className="fr-card-featured mt-10">
                    <p className="t-caption text-ink">En una frase</p>
                    <p className="t-body-lg mt-3 text-ink-muted">
                        Tus datos son tuyos. Zenth guarda lo necesario para que la aplicación funcione,
                        se apoya en proveedores de confianza y no vende tu información a nadie. No hay
                        publicidad ni rastreadores de terceros.
                    </p>
                </div>

                <Section n={1} title="Qué información recopilamos">
                    <P>
                        Para que Zenth funcione y puedas sincronizar tu progreso entre dispositivos hace
                        falta procesar estos datos:
                    </P>
                    <List
                        items={[
                            <>
                                <B>Cuenta.</B> Tu dirección de correo electrónico y tu contraseña, que se
                                almacena cifrada y nunca en texto plano. También el nombre, el avatar y la
                                imagen de portada si decides personalizar tu perfil.
                            </>,
                            <>
                                <B>Contenido que creas.</B> Tareas, pizarras y listas, entradas —notas,
                                tablas, archivos subidos y notas de voz—, etiquetas, registros de ánimo,
                                sesiones de enfoque y estadísticas de progreso.
                            </>,
                            <>
                                <B>Preferencias.</B> Tema, color de acento, hora de inicio de la mañana,
                                formato de hora, densidad y demás ajustes de la aplicación.
                            </>,
                            <>
                                <B>Datos técnicos mínimos.</B> Información básica del dispositivo y, si
                                activas los recordatorios, el identificador necesario para entregarte las
                                notificaciones push.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={2} title="Para qué la usamos">
                    <List
                        items={[
                            <><B>Prestar el servicio:</B> crear, editar y gestionar tu contenido.</>,
                            <><B>Sincronizar:</B> que tus datos estén disponibles en todos tus dispositivos.</>,
                            <><B>Autenticar y proteger:</B> verificar tu identidad al iniciar sesión.</>,
                            <>
                                <B>Comunicarnos contigo:</B> únicamente correos relacionados con tu cuenta
                                —confirmación, recuperación de contraseña, invitaciones a pizarras—. Sin
                                boletines no solicitados y sin venta de tu correo.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={3} title="Pizarras compartidas y visibilidad">
                    <P>
                        Al invitar a alguien a una pizarra, ese contenido deja de ser exclusivamente tuyo:
                        los miembros ven y —según su rol— editan las tarjetas y las listas de esa pizarra.
                    </P>
                    <List
                        items={[
                            <>
                                <B>Identidad visible.</B> Los demás miembros ven tu nombre, tu avatar y tu
                                color de acento. Es la información mínima para saber quién ha hecho qué. El
                                resto de tu cuenta —tus otras pizarras, tus notas, tu ánimo, tus
                                estadísticas— no es visible para ellos en ningún caso.
                            </>,
                            <>
                                <B>Enlaces públicos.</B> Si activas la visibilidad «con enlace», cualquiera
                                con esa dirección puede ver esa pizarra en modo solo lectura, sin cuenta.
                                Solo afecta a la pizarra donde lo actives, es reversible en cualquier momento
                                y nunca se activa por su cuenta.
                            </>,
                            <>
                                <B>Invitaciones por correo.</B> Para invitar a alguien se procesa la dirección
                                que escribas, con el único fin de enviarle esa invitación.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={4} title="Proveedores que utilizamos">
                    <P>
                        Zenth se apoya en servicios de terceros para operar. Ninguno recibe tus datos con
                        fines comerciales o publicitarios.
                    </P>
                    <List
                        items={[
                            <>
                                <B>Supabase.</B> Base de datos, autenticación y almacenamiento de los archivos
                                y notas de voz que subas a Entradas.
                            </>,
                            <>
                                <B>Resend.</B> Envío de los correos transaccionales (verificación, cambio de
                                contraseña, invitaciones).
                            </>,
                            <>
                                <B>Firebase Cloud Messaging.</B> Entrega de los recordatorios push, solo si
                                los activas.
                            </>,
                            <>
                                <B>Google Gemini.</B> Las funciones del asistente Zen. El texto que envías a
                                la IA se procesa para generar esa respuesta concreta. Solo se envía cuando tú
                                pulsas una acción de IA: nunca de fondo ni sobre todo tu contenido.
                            </>,
                            <>
                                <B>Google Calendar.</B> Integración opcional y de <B>solo lectura</B>. Zenth
                                no puede crear, modificar ni eliminar eventos. El token de acceso se mantiene
                                en la memoria del navegador y no se guarda en la base de datos.
                            </>,
                            <>
                                <B>Vercel.</B> Alojamiento del sitio web y de la aplicación.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={5} title="Conservación y eliminación">
                    <List
                        items={[
                            <>
                                <B>Papelera.</B> Lo que eliminas dentro de la app pasa primero a la papelera,
                                donde puedes restaurarlo. Al vaciarla, se borra de forma permanente.
                            </>,
                            <>
                                <B>Conservación.</B> Guardamos tus datos mientras tu cuenta siga activa, para
                                que puedas consultar tu historial.
                            </>,
                            <>
                                <B>Eliminación.</B> Puedes eliminar tu cuenta cuando quieras. Al hacerlo, tus
                                datos personales y tu contenido se eliminan de forma permanente de nuestros
                                servidores. Las pizarras que hayas compartido y de las que no seas propietario
                                seguirán existiendo para sus demás miembros.
                            </>,
                        ]}
                    />
                </Section>

                <Section n={6} title="Seguridad">
                    <P>
                        Todas las conexiones viajan cifradas (SSL/TLS). El acceso a los datos está protegido
                        a nivel de base de datos con políticas por fila: los permisos de una pizarra se
                        aplican en el servidor, no solo en la interfaz, de modo que nadie puede saltárselos
                        manipulando el navegador.
                    </P>
                </Section>

                <Section n={7} title="Cambios en esta política">
                    <P>
                        Podemos actualizarla para reflejar cambios en la aplicación o por motivos legales.
                        Si el cambio es importante, te avisaremos dentro de la aplicación o por correo.
                    </P>
                </Section>

                <Section n={8} title="Contacto">
                    <P>Si tienes cualquier duda sobre cómo se tratan tus datos, escríbeme:</P>
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

export default PrivacyPolicy;

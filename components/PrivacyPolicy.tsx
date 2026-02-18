import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 bg-zenth-bg dark:bg-zenth-darkBg min-h-screen relative font-sans text-slate-800 dark:text-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={onBack}
                        className="group flex items-center text-lg font-bold text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver
                    </button>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <h1 className="text-4xl md:text-5xl font-marker mb-2 text-center text-black dark:text-white">Política de Privacidad de Zenth</h1>
                    <p className="text-center text-slate-500 dark:text-slate-400 mb-10 font-mono text-sm">Última actualización: 18 de Febrero, 2026</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p className="mb-6 font-serif text-xl leading-relaxed">
                            En <strong>Zenth</strong>, la privacidad y seguridad de tus datos es nuestra prioridad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tu información cuando utilizas nuestra aplicación de productividad y construcción de hábitos.
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold font-serif map-10 mb-4 mt-10 text-black dark:text-white flex items-center">
                            <span className="bg-zenth-markerYellow dark:bg-zenth-markerYellow/20 px-2 -rotate-1 inline-block mr-2 text-black dark:text-white">1.</span>
                            Información que Recopilamos
                        </h2>
                        <p className="mb-4">Para que Zenth funcione correctamente y puedas sincronizar tu progreso entre dispositivos, necesitamos procesar ciertos datos:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-zenth-markerBlue">
                            <li><strong>Información de la Cuenta:</strong> Cuando te registras, recopilamos tu dirección de correo electrónico y contraseña (la cual se almacena de forma encriptada y segura, nunca en texto plano). También podemos almacenar tu nombre o apodo si decides personalizar tu perfil.</li>
                            <li><strong>Datos de Uso de la Aplicación:</strong> Recopilamos los datos que tú mismo generas al usar la app, tales como:
                                <ul className="list-[circle] pl-6 mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                                    <li>Tus tareas y listas de pendientes.</li>
                                    <li>Tus hábitos y el historial de seguimiento (streaks).</li>
                                    <li>Tus notas y entradas de diario.</li>
                                    <li>Configuraciones de preferencias (como el tema oscuro/claro).</li>
                                </ul>
                            </li>
                            <li><strong>Datos Técnicos:</strong> Podemos recibir información básica de tu dispositivo (como el tipo de dispositivo o sistema operativo) para optimizar la visualización de la app y enviar notificaciones push si las activas.</li>
                        </ul>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold font-serif mb-4 mt-10 text-black dark:text-white flex items-center">
                            <span className="bg-zenth-markerYellow dark:bg-zenth-markerYellow/20 px-2 -rotate-1 inline-block mr-2 text-black dark:text-white">2.</span>
                            Cómo Usamos tu Información
                        </h2>
                        <p className="mb-4">Utilizamos tus datos exclusivamente para los siguientes propósitos:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-zenth-markerBlue">
                            <li><strong>Proveer el Servicio:</strong> Permitirte crear, editar y gestionar tus tareas y hábitos.</li>
                            <li><strong>Sincronización:</strong> Asegurar que tus datos estén disponibles en tiempo real en todos tus dispositivos (móvil, tablet, escritorio).</li>
                            <li><strong>Autenticación y Seguridad:</strong> Verificar tu identidad al iniciar sesión y proteger tu cuenta contra accesos no autorizados.</li>
                            <li><strong>Comunicaciones:</strong> Enviarte correos importantes relacionados con tu cuenta (por ejemplo, confirmación de correo, recuperación de contraseña). <strong>No te enviaremos spam ni venderemos tu correo.</strong></li>
                        </ul>

                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold font-serif mb-4 mt-10 text-black dark:text-white flex items-center">
                            <span className="bg-zenth-markerYellow dark:bg-zenth-markerYellow/20 px-2 -rotate-1 inline-block mr-2 text-black dark:text-white">3.</span>
                            Servicios de Terceros e Infraestructura
                        </h2>
                        <p className="mb-4">Zenth utiliza servicios de confianza para operar de manera segura. No compartimos tus datos con terceros para fines comerciales o publicitarios.</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-zenth-markerBlue">
                            <li><strong>Supabase:</strong> Utilizamos Supabase como nuestra infraestructura backend (Base de Datos y Autenticación). Supabase es una plataforma segura y robusta que cumple con altos estándares de la industria para el almacenamiento de datos.</li>
                            <li><strong>Resend:</strong> Utilizamos Resend para el envío de correos electrónicos transaccionales (como verificar tu cuenta).</li>
                        </ul>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold font-serif mb-4 mt-10 text-black dark:text-white flex items-center">
                            <span className="bg-zenth-markerYellow dark:bg-zenth-markerYellow/20 px-2 -rotate-1 inline-block mr-2 text-black dark:text-white">4.</span>
                            Retención y Eliminación de Datos
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-zenth-markerBlue">
                            <li><strong>Retención:</strong> Conservamos tus datos mientras mantengas tu cuenta activa para que puedas acceder a tu historial de productividad.</li>
                            <li><strong>Eliminación:</strong> Tienes el derecho absoluto de eliminar tu cuenta en cualquier momento. Si decides hacerlo, todos tus datos personales, tareas y registros asociados serán eliminados permanentemente de nuestros servidores.</li>
                        </ul>

                        {/* Section 5 */}
                        <h2 className="text-2xl font-bold font-serif mb-4 mt-10 text-black dark:text-white flex items-center">
                            <span className="bg-zenth-markerYellow dark:bg-zenth-markerYellow/20 px-2 -rotate-1 inline-block mr-2 text-black dark:text-white">5.</span>
                            Seguridad de los Datos
                        </h2>
                        <p className="mb-6">Tomamos medidas de seguridad razonables para proteger tu información contra pérdida, robo y uso no autorizado. Utilizamos conexiones seguras (SSL/TLS) para transferir datos entre tu dispositivo y nuestros servidores.</p>

                        {/* Section 6 */}
                        <h2 className="text-2xl font-bold font-serif mb-4 mt-10 text-black dark:text-white flex items-center">
                            <span className="bg-zenth-markerYellow dark:bg-zenth-markerYellow/20 px-2 -rotate-1 inline-block mr-2 text-black dark:text-white">6.</span>
                            Cambios a esta Política
                        </h2>
                        <p className="mb-6">Podemos actualizar nuestra Política de Privacidad ocasionalmente para reflejar cambios en nuestras prácticas o por razones operativas, legales o reglamentarias. Te notificaremos sobre cualquier cambio importante a través de la aplicación o por correo electrónico.</p>

                        {/* Section 7 */}
                        <h2 className="text-2xl font-bold font-serif mb-4 mt-10 text-black dark:text-white flex items-center">
                            <span className="bg-zenth-markerYellow dark:bg-zenth-markerYellow/20 px-2 -rotate-1 inline-block mr-2 text-black dark:text-white">7.</span>
                            Contáctanos
                        </h2>
                        <p className="mb-6">Si tienes preguntas sobre esta política o sobre cómo manejamos tus datos, por favor contáctanos en:</p>
                        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                            <p className="mb-2"><strong>Correo electrónico:</strong> <a href="mailto:matiasluzardevv@gmail.com" className="text-zenth-markerBlue hover:underline">matiasluzardevv@gmail.com</a></p>
                            <p><strong>Web:</strong> <a href="https://zenth.space" className="text-zenth-markerBlue hover:underline">https://zenth.space</a></p>
                        </div>
                    </div>

                    {/* Summary Box */}
                    <div className="mt-12 p-6 bg-zenth-100/50 dark:bg-zenth-100/10 border-2 border-zenth-100 rounded-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold font-serif mb-2 text-zenth-darkBg dark:text-white">Resumen rápido:</h3>
                            <p className="italic text-slate-700 dark:text-slate-300 font-serif">
                                "En Zenth, tus datos son tuyos. Solo guardamos lo necesario para que la app funcione (tus tareas, hábitos y email de login). Usamos infraestructura segura (Supabase) y nunca vendemos tu información a terceros."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

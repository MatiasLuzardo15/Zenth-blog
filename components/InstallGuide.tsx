import React from 'react';
import { MoreVertical, Smartphone, Download, PlusSquare, Share, RefreshCcw } from 'lucide-react';

// Logotipo oficial de Apple (Sketchy)
const AppleLogo = () => (
  <svg className="w-8 h-8 text-black dark:text-white fill-current transform rotate-6" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
  </svg>
);

// Logotipo oficial de Android (Sketchy)
const AndroidLogo = () => (
  <svg className="w-9 h-9 text-black dark:text-white fill-current transform -rotate-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.523 15.3414C17.523 16.7126 16.3995 17.8242 15.0135 17.8242C13.6274 17.8242 12.5039 16.7126 12.5039 15.3414C12.5039 13.9702 13.6274 12.8586 15.0135 12.8586C16.3995 12.8586 17.523 13.9702 17.523 15.3414ZM6.47656 15.3414C6.47656 16.7126 7.60009 17.8242 8.98609 17.8242C10.3721 17.8242 11.4956 16.7126 11.4956 15.3414C11.4956 13.9702 10.3721 12.8586 8.98609 12.8586C7.60009 12.8586 6.47656 13.9702 6.47656 15.3414ZM22.4487 11.3976C22.3653 11.2335 22.2541 11.0872 22.1221 10.969L24.6469 6.59414C24.7859 6.35084 24.7025 6.04495 24.4592 5.9059C24.2158 5.76686 23.9099 5.85029 23.7709 6.0936L21.2117 10.5171C18.6666 9.14041 15.6555 8.35478 12.4274 8.35478C12.337 8.35478 12.2467 8.35478 12.1563 8.36173V8.35478C8.8324 8.35478 5.74235 9.18908 3.16912 10.6423L0.64436 6.22574 -0.043883 6.08669C-0.287188 6.22574 -0.370624 6.53163 -0.231572 6.77493L2.2441 11.0569C2.15371 11.1264 2.06332 11.2029 1.97989 11.2794C0.77692 12.4484 0.012085 14.1162 0.012085 15.9811C0.012085 19.3463 2.54308 22.1485 5.77712 22.51V23.5946C5.77712 23.8171 5.9579 24 6.17345 24H17.8219C18.0375 24 18.2182 23.8192 18.2182 23.5946V22.5031C21.4173 22.1137 23.9064 19.3254 23.9064 15.9811C23.9064 14.1927 23.2111 12.5875 22.094 11.4463C22.2053 11.4324 22.3305 11.4115 22.4487 11.3976Z" />
  </svg>
);

const InstallGuide: React.FC = () => {
  return (
    <section id="install" className="py-24 bg-zenth-100 dark:bg-slate-800 relative overflow-hidden border-t-4 border-black dark:border-white border-dashed">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="flex-1">
            <div className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black transform -rotate-2 font-bold text-lg mb-6 shadow-sketch dark:shadow-sketch-white">PWA Ready</div>
            <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black dark:text-white mb-6">
              <span className="bg-white dark:bg-slate-900 px-2">Sin descargas molestas.</span>
            </h2>
            <p className="text-2xl text-slate-800 dark:text-slate-300 font-sans leading-relaxed mb-8">
              Olvídate de las tiendas de apps. Zenth es una PWA: se instala directo desde tu navegador, no ocupa espacio y respeta tu privacidad. Simple, rápido y sin vueltas.
              <span className="block mt-4 text-base opacity-80 flex items-center gap-2">
                <RefreshCcw className="w-4 h-4" /> Funciona igual que una app nativa, pero más ligera.
              </span>
            </p>
            <div className="flex items-center space-x-4 text-black dark:text-white font-bold text-xl font-marker">
              <div className="flex items-center"><Smartphone className="w-6 h-6 mr-2" /> iOS & Android</div>
            </div>
          </div>

          <div className="flex-1 w-full grid gap-8">
            {/* iOS Guide */}
            <div className="bg-white dark:bg-slate-900 border-2 border-black dark:border-white rounded-lg p-8 shadow-sketch-lg dark:shadow-sketch-lg-white transform rotate-1 relative">
              <div className="absolute -top-3 -right-3">
                <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-black dark:border-white"></div>
              </div>
              <div className="flex items-center mb-6 pb-4 border-b-2 border-dashed border-black dark:border-white">
                <div className="mr-4"><AppleLogo /></div>
                <h3 className="text-2xl font-bold text-black dark:text-white font-serif">iPhone (Safari)</h3>
              </div>
              <div className="flex flex-wrap items-center text-black dark:text-white font-bold text-lg gap-2">
                <span>1. Toca</span>
                <span className="bg-gray-200 dark:bg-slate-700 border border-black dark:border-white px-2 py-1 rounded"><Share className="w-4 h-4 inline" /></span>
                <span>→ 2. Selecciona "Agregar a Inicio"</span>
                <PlusSquare className="inline w-6 h-6 text-black dark:text-white" />
              </div>
            </div>

            {/* Android Guide */}
            <div className="bg-white dark:bg-slate-900 border-2 border-black dark:border-white rounded-lg p-8 shadow-sketch-lg dark:shadow-sketch-lg-white transform -rotate-1 relative">
              <div className="absolute -top-3 -left-3">
                <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-black dark:border-white"></div>
              </div>
              <div className="flex items-center mb-6 pb-4 border-b-2 border-dashed border-black dark:border-white">
                <div className="mr-4"><AndroidLogo /></div>
                <h3 className="text-2xl font-bold text-black dark:text-white font-serif">Android (Chrome)</h3>
              </div>
              <div className="flex flex-wrap items-center text-black dark:text-white font-bold text-lg gap-2">
                <span>1. Toca</span>
                <MoreVertical className="w-6 h-6 border border-black dark:border-white rounded bg-gray-200 dark:bg-slate-700" />
                <span>→ 2. "Instalar aplicación"</span>
                <Download className="inline w-6 h-6 text-black dark:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallGuide;
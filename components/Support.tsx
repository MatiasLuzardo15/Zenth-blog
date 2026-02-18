import React from 'react';
import { Heart, Zap } from 'lucide-react';

const Support: React.FC = () => {
  const handleDonate = () => {
    window.open('https://www.paypal.com/donate/?hosted_button_id=2ZXKDRWUK3M6C', '_blank');
  };

  return (
    <section id="colaborar" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
        
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contenedor principal estilo "Ticket" o "Nota" */}
        <div className="bg-zenth-paper dark:bg-slate-800 border-2 border-black dark:border-white p-8 md:p-12 shadow-sketch-lg dark:shadow-sketch-lg-white transform rotate-1 relative rounded-lg">
            
            {/* Cinta adhesiva visual */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-zenth-200/80 -rotate-2 shadow-sm z-20"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                
                {/* Icono animado */}
                <div className="flex-shrink-0 relative group cursor-pointer" onClick={handleDonate}>
                    <div className="absolute inset-0 bg-zenth-markerPink rounded-full transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform border-2 border-black dark:border-white"></div>
                    <div className="relative bg-white dark:bg-slate-700 w-24 h-24 rounded-full border-2 border-black dark:border-white flex items-center justify-center z-10 group-hover:-translate-y-1 transition-transform">
                        <Heart className="w-12 h-12 text-black dark:text-white animate-pulse" />
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black font-marker text-sm transform -rotate-2 mb-3 shadow-sketch dark:shadow-sketch-white">
                        Indie Developer
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white mb-4 leading-tight">
                        Mantén Zenth vivo <br/>y funcionando
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 font-sans mb-6">
                        Zenth es gratis, no tiene inversores y no vende tus datos. 
                        Es un proyecto mantenido por una sola persona. Si la app te ayuda a organizar tu caos, 
                        considera hacer una donación para pagar los servidores.
                    </p>
                    
                    <button 
                        onClick={handleDonate}
                        className="inline-flex items-center bg-zenth-markerYellow text-black px-6 py-3 rounded-lg font-bold text-xl border-2 border-black hover:bg-yellow-300 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] group"
                    >
                        <Heart className="w-5 h-5 mr-2 text-red-500 fill-current group-hover:scale-110 transition-transform" />
                        Apoyar con PayPal
                    </button>
                    
                    <p className="text-xs text-slate-400 mt-4 font-sans italic">
                        * O simplemente compártelo con un amigo, eso también ayuda mucho.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Support;
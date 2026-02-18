import React from 'react';
import { Quote, User, Mail, MessageCircle, Linkedin } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Ana G.",
    role: "Diseñadora (TDAH)",
    content: "Por fin una app que no me satura la cabeza. Las otras me estresaban con las notificaciones en rojo. Zenth es muy visual, de verdad. Ver al panda subir de nivel es mi motivación diaria. ¡Gracias por crearla!",
    style: "bg-yellow-100 rotate-1",
    sticker: "🐼",
    via: "Email",
    icon: <Mail className="w-3 h-3 mr-1" />
  },
  {
    id: 2,
    name: "Carlos M.",
    role: "Dev Junior",
    content: "Te quería comentar que el 'Modo Enfoque' es excelente. Pongo 45 minutos y me olvido del mundo, evito distraerme con las redes. Corta y efectiva. La verdad que funciona bárbaro.",
    style: "bg-blue-100 -rotate-2",
    sticker: "⚡",
    via: "LinkedIn",
    icon: <Linkedin className="w-3 h-3 mr-1" />
  },
  {
    id: 3,
    name: "Laura S.",
    role: "Opositora",
    content: "Hola! Venía muy pasada de rosca y el registro emocional me mostró la realidad: llevaba 10 días mal. Gracias a Zenth bajé un cambio a tiempo. No es solo anotar cosas, es salud.",
    style: "bg-pink-100 rotate-2",
    sticker: "❤️",
    via: "Instagram DM",
    icon: <MessageCircle className="w-3 h-3 mr-1" />
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-zenth-bg dark:bg-zenth-darkBg relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <div className="inline-block mb-2 transform -rotate-3">
                <span className="bg-black dark:bg-white text-white dark:text-black font-marker px-3 py-1 shadow-sketch dark:shadow-sketch-white">
                    Nuestros guerreros Zen
                </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                Mensajes que <span className="underline decoration-wavy decoration-zenth-markerPink">inspiran</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-hand">
                Historias reales que llegan a mi bandeja de entrada.
            </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div 
                key={review.id} 
                className={`relative p-6 ${review.style} shadow-sketch-lg dark:shadow-none border-2 border-black dark:border-white transform transition-transform hover:scale-105 hover:z-10 flex flex-col`}
            >
                {/* Pin/Tape Effect */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm rotate-1"></div>
                
                {/* Sticker */}
                <div className="absolute -bottom-4 -right-2 text-4xl filter drop-shadow-md transform rotate-12">
                    {review.sticker}
                </div>

                <div className="mb-4 text-slate-800/60">
                    <Quote className="w-8 h-8 opacity-50" />
                </div>

                <p className="text-lg text-slate-800 font-hand font-bold leading-relaxed mb-6 flex-grow">
                    "{review.content}"
                </p>

                <div className="flex items-center justify-between border-t border-black/10 pt-4 mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center overflow-hidden">
                            <User className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 font-serif leading-none">{review.name}</p>
                            <p className="text-xs text-slate-600 font-mono uppercase">{review.role}</p>
                        </div>
                    </div>
                    
                    {/* Source Badge (Email/DM) */}
                    <div className="flex items-center text-xs font-bold text-slate-500 bg-white/50 px-2 py-1 rounded border border-black/10">
                        {review.icon}
                        {review.via}
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
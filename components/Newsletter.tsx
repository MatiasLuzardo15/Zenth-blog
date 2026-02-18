import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias! Te enviaremos los mejores trucos. (${email})`);
    setEmail('');
  };

  return (
    <section className="py-20 px-4 bg-zenth-markerYellow dark:bg-slate-800 border-y-4 border-black dark:border-white border-dashed relative overflow-hidden">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block bg-white dark:bg-slate-900 border-2 border-black dark:border-white p-3 rounded-full mb-6 shadow-sketch dark:shadow-sketch-white animate-bounce">
                <Mail className="w-8 h-8 text-black dark:text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-black text-black dark:text-white mb-4">
                No te pierdas las novedades
            </h2>
            <p className="text-xl md:text-2xl font-sans text-slate-800 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Zenth crece cada semana con nuevos avatares y funciones. Suscríbete para recibir trucos de productividad y noticias del desarrollo.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                    type="email" 
                    placeholder="tucorreo@ejemplo.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white dark:bg-slate-700 border-2 border-black dark:border-white rounded-lg px-6 py-4 text-lg outline-none focus:shadow-sketch dark:focus:shadow-sketch-white transition-all text-black dark:text-white font-sans placeholder:text-slate-400"
                    required
                />
                <button 
                    type="submit"
                    className="bg-black dark:bg-white text-white dark:text-black font-bold text-xl px-8 py-4 rounded-lg border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-white hover:text-black dark:hover:bg-slate-900 dark:hover:text-white transition-all shadow-sketch dark:shadow-sketch-white hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                    Suscribirme
                </button>
            </form>
        </div>
    </section>
  );
};

export default Newsletter;
import React from 'react';
import { CheckCircle, Mail, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'blog' | 'privacy', targetId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="about" className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="flex justify-center items-center text-white mb-6">
          <img src="/blog/favicon2.png" alt="Zenth Logo" className="h-8 w-8 object-contain rounded-lg" />
          <span className="text-3xl font-serif font-bold tracking-tight">enth</span>
        </div>

        <p className="text-lg text-slate-400 leading-relaxed mb-8 font-sans max-w-xl mx-auto">
          Hecho a mano con mucha cafeína y código nocturno. <br />
          Sin inversores, sin ventas de datos, solo ganas de poner orden al caos.
        </p>

        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasluzardevv@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-400 hover:text-white transition-colors group"
          >
            <div className="p-2 border border-slate-600 rounded-full group-hover:border-white group-hover:bg-slate-800 transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <span className="ml-2 font-bold">Contáctame</span>
          </a>
          <a
            href="https://www.linkedin.com/in/matias-luzardo-a87280248"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-400 hover:text-white transition-colors group"
          >
            <div className="p-2 border border-slate-600 rounded-full group-hover:border-white group-hover:bg-slate-800 transition-all">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="ml-2 font-bold">LinkedIn</span>
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col items-center gap-4 text-sm text-slate-500 font-mono">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Zenth App.</span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center">
              Codeado con <Heart className="w-3 h-3 text-red-500 mx-1 fill-current" /> por un desarrollador independiente.
            </span>
          </div>

          <button
            onClick={() => onNavigate('privacy')}
            className="text-slate-600 hover:text-slate-400 hover:underline transition-colors text-xs"
          >
            Política de Privacidad
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
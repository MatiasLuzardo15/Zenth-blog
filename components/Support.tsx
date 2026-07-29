import React from 'react';
import { Heart, ArrowUpRight, Share2 } from 'lucide-react';

const Support: React.FC = () => {
  const handleDonate = () => {
    window.open('https://www.paypal.com/donate/?hosted_button_id=2ZXKDRWUK3M6C', '_blank', 'noopener');
  };

  return (
    <section id="colaborar" className="scroll-mt-20 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="fr-spotlight fr-spotlight--orange">
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <span className="t-eyebrow !text-white/70">Proyecto independiente</span>
              <h2 className="t-display-md mt-4 max-w-lg">
                Zenth se mantiene con donaciones, no con tus datos.
              </h2>
              <p className="t-body-lg mt-5 max-w-lg text-white/85">
                No hay inversores detrás ni un plan para vender tu información. Solo una persona
                pagando servidores. Si la app te está sirviendo, una donación ayuda a que siga
                funcionando; compartirla con alguien, también.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <button
                onClick={handleDonate}
                className="fr-btn fr-btn-lg bg-white text-black hover:opacity-90"
              >
                <Heart className="h-[18px] w-[18px]" strokeWidth={2} />
                Apoyar con PayPal
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: 'Zenth', url: 'https://www.zenth.space' }).catch(() => { });
                  } else {
                    navigator.clipboard.writeText('https://www.zenth.space');
                  }
                }}
                className="fr-btn fr-btn-lg bg-white/15 text-white hover:bg-white/25"
              >
                <Share2 className="h-[18px] w-[18px]" strokeWidth={2} />
                Compartir
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

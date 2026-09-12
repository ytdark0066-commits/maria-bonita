import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FloatingWhatsAppProps {
  onOpenReservation: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenReservation }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directWhatsAppUrl = `https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá! Vim pelo site e gostaria de saber sobre mesas e reservas no Restaurante e Buteco Maria Bonita.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col space-y-2">
      {/* Tooltip badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 bg-[#0F0F0F]/95 text-[#FDFBF7] px-4 py-2 rounded-xl shadow-2xl border border-[#D4AF37]/40 backdrop-blur-md text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="font-medium text-emerald-400">Atendimento WhatsApp</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-300">Aberto até 23:30</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-zinc-500 hover:text-white ml-1 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Pulsating Button */}
      <div className="relative group">
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 blur-sm animate-ping duration-1000"></span>
        <span className="absolute -inset-2 rounded-full bg-[#C04000]/30 blur-md"></span>

        <a
          id="floating-whatsapp-btn"
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Falar no WhatsApp com Maria Bonita"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-transparent" />
        </a>
      </div>
    </div>
  );
};

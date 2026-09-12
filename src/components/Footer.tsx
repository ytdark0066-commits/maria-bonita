import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Clock, Heart, ArrowUp, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0A0A0A] text-[#E8E4DD] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Manifesto (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-[#C04000]/20 flex items-center justify-center text-[#D4AF37]">
                <span className="font-playfair text-xl font-bold italic">MB</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-white tracking-tight">
                Maria Bonita
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Um ponto de convergência entre a rusticidade do sertão e a elegância da gastronomia contemporânea. Self-service premium durante o dia e buteco vibrante à noite em Alagoinha - PE.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={`https://instagram.com/${RESTAURANT_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#25D366] hover:border-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#C04000] hover:border-[#C04000] transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-playfair text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">A Dualidade (Dia & Noite)</a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-white transition-colors">Destaques do Menu</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Google Reviews (4.4 ★)</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização & Contato</a>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div className="space-y-3">
            <h4 className="font-playfair text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
              Horários de Funcionamento
            </h4>
            <div className="text-xs sm:text-sm text-zinc-400 space-y-2">
              <div>
                <span className="block text-white font-medium">Seg, Qua, Qui e Sex</span>
                <span>11:00 às 14:00 (Almoço)</span>
              </div>
              <div>
                <span className="block text-[#D4AF37] font-medium">Sábado e Domingo</span>
                <span>Sáb: 11:00 às 23:30 • Dom: 10:00 às 23:30</span>
              </div>
              <div className="text-xs text-red-400 font-medium pt-1 border-t border-white/10">
                Terça-feira: Fechado
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div className="space-y-3">
            <h4 className="font-playfair text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
              Onde Estamos
            </h4>
            <div className="text-sm text-zinc-400 space-y-1.5">
              <p className="text-white font-medium">Maria Bonita - Restaurante e Buteco</p>
              <p>Rua Tenente Dorgival Galindo, 31</p>
              <p>Centro, Alagoinha - PE</p>
              <p>CEP 55260-000</p>
              <p className="text-xs text-[#D4AF37] pt-0.5">{RESTAURANT_INFO.phone}</p>
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#D4AF37] hover:text-white transition-colors underline underline-offset-4"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Ver perfil no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits with Arthur Web Designer contact */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Restaurante e Buteco Maria Bonita. Todos os direitos reservados.</p>
          
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-0.5">
            <div className="flex items-center space-x-1.5 text-zinc-400">
              <span>Desenvolvido por</span>
              <a
                href="https://wa.me/5587988091104?text=Ol%C3%A1%2C%20quero%20criar%20um%20web%20site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] font-semibold tracking-wide hover:underline hover:text-[#e5c358] transition-colors inline-flex items-center gap-1"
                title="Conversar com Arthur Web Designer no WhatsApp"
              >
                <span>Arthur Web Designer</span>
              </a>
            </div>
            <a
              href="https://wa.me/5587988091104?text=Ol%C3%A1%2C%20quero%20criar%20um%20web%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-zinc-500 hover:text-zinc-400 transition-colors tracking-normal"
            >
              Contato para criação de sites
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

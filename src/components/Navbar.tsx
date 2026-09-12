import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Clock, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="group flex items-center space-x-3 text-left">
          <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-[#C04000]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 group-hover:border-[#D4AF37] transition-all">
            <span className="font-cormorant text-2xl font-bold italic">MB</span>
          </div>
          <div className="flex flex-col">
            <span className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors leading-none">
              Maria Bonita
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]/90 font-medium mt-0.5">
              Restaurante & Buteco • Alagoinha - PE
            </span>
          </div>
        </a>

        {/* Live Status indicator on desktop - centralizado entre o brand e os links de navegação */}
        <div className="hidden xl:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/25 text-xs text-[#E8E4DD] ml-6 mr-10 xl:mr-16 shadow-sm whitespace-nowrap">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-emerald-400">Aberto agora</span>
          <span className="text-zinc-500">•</span>
          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Até 23:30</span>
        </div>

        {/* Desktop Nav Links - centralizado e na mesma linha sem quebra */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-8 text-sm font-medium mr-4 lg:mr-6">
          <a
            href="#experiencia"
            className="text-[#E8E4DD] hover:text-[#D4AF37] transition-colors relative py-1 whitespace-nowrap hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C04000] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            A Dualidade
          </a>
          <a
            href="#cardapio"
            className="text-[#E8E4DD] hover:text-[#D4AF37] transition-colors relative py-1 whitespace-nowrap hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C04000] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Menu & Sabores
          </a>
          <a
            href="#avaliacoes"
            className="text-[#E8E4DD] hover:text-[#D4AF37] transition-colors relative py-1 whitespace-nowrap hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C04000] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Avaliações
          </a>
          <a
            href="#localizacao"
            className="text-[#E8E4DD] hover:text-[#D4AF37] transition-colors relative py-1 whitespace-nowrap hover:after:w-full after:w-0 after:h-[2px] after:bg-[#C04000] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Localização
          </a>
        </nav>

        {/* Header Actions: Reservar Mesa & Menu Toggle com espaçamento refinado */}
        <div className="flex items-center space-x-3 sm:space-x-4 pl-3 sm:pl-6 md:pl-8 border-l border-white/10 ml-2 sm:ml-4">
          <button
            id="nav-reservation-btn"
            onClick={onOpenReservation}
            className="hidden sm:inline-flex group relative items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full overflow-hidden transition-all duration-300 bg-[#C04000] text-[#FDFBF7] hover:bg-[#a63700] shadow-[0_0_20px_rgba(192,64,0,0.35)] border border-[#D4AF37]/40 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Reservar Mesa</span>
            </span>
          </button>

          {/* Mobile menu trigger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#FDFBF7] hover:text-[#D4AF37] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F0F]/98 border-b border-[#D4AF37]/30 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#E8E4DD]">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-400 font-medium">Aberto agora</span>
              <span>• Até 23:30</span>
            </div>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-[#D4AF37] hover:underline"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Alagoinha - PE (Maps)</span>
            </a>
          </div>

          <div className="flex flex-col space-y-3 font-medium text-base">
            <a
              href="#experiencia"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FDFBF7] hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              A Dualidade (Dia & Noite)
            </a>
            <a
              href="#cardapio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FDFBF7] hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              Menu & Bento Grid
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FDFBF7] hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              Google Reviews (4.4 ★)
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FDFBF7] hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              Localização & Horários
            </a>
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 text-center bg-[#C04000] text-[#FDFBF7] font-semibold text-sm rounded-full uppercase tracking-wider flex items-center justify-center space-x-2 border border-[#D4AF37]/50 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Reservar Mesa via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowUpRight, Flame, Beer, Wine, Coffee, Utensils, X } from 'lucide-react';
import { BENTO_ITEMS, SAMPLE_MENU_ITEMS, MENU_CATEGORIES } from '../data/restaurantData';
import { MenuItem } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface MenuBentoProps {
  onOpenReservation: () => void;
}

export const MenuBento: React.FC<MenuBentoProps> = ({ onOpenReservation }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [showFullMenuModal, setShowFullMenuModal] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.bento-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getBentoIcon = (id: string) => {
    switch (id) {
      case 'bento-pizzas':
        return <Flame className="w-5 h-5 text-[#C04000]" />;
      case 'bento-cerveja':
        return <Beer className="w-5 h-5 text-[#D4AF37]" />;
      case 'bento-drinks':
        return <Wine className="w-5 h-5 text-[#C04000]" />;
      case 'bento-cafe':
        return <Coffee className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const filteredItems =
    activeCategory === 'todos'
      ? SAMPLE_MENU_ITEMS
      : SAMPLE_MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="cardapio"
      className="py-24 sm:py-32 bg-[#0F0F0F] text-[#FDFBF7] relative overflow-hidden"
    >
      {/* Subtle radial warmth in background */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C04000]/10 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#D4AF37]/8 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Curadoria Gastronômica</span>
          </div>
          <h2 className="font-playfair text-[#FDFBF7] text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-tight leading-[1.15] mb-5">
            Destaques do Menu
          </h2>
          <p className="text-zinc-300 text-base sm:text-xl font-light leading-relaxed">
            &ldquo;Uma curadoria de sabores premiada por quem entende de felicidade.&rdquo;
          </p>
        </div>

        {/* Bento Grid layout as requested */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14">
          {BENTO_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`bento-card ${item.colSpan} group relative rounded-2xl overflow-hidden bg-[#161616] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-end min-h-[380px] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-[0.45] contrast-110 group-hover:brightness-[0.55]"
                  onError={(e) => {
                    // Fallback to a solid high quality food/drink image if anything fails
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
              </div>

              {/* Card Top Pill */}
              <div className="relative z-10 mb-auto flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F0F0F]/80 backdrop-blur-md border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
                  {getBentoIcon(item.id)}
                  <span>{item.badge}</span>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#C04000] group-hover:border-[#C04000] transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 pt-12">
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#FDFBF7] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-5 max-w-xl">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Menu Explorer Action */}
        <div className="bg-[#141414] rounded-2xl border border-[#D4AF37]/25 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#FDFBF7] mb-3">
              Explore o Cardápio Completo
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base mb-8">
              Conheça nossas opções para almoço self-service, rodadas de petiscos, sobremesas pernambucanas e a carta exclusiva de bebidas geladas.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#C04000] text-[#FDFBF7] border border-[#D4AF37]/40 shadow-lg'
                      : 'bg-[#1E1E1E] text-zinc-300 hover:text-white border border-white/10 hover:border-white/25'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Quick Menu Item Previews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
              {filteredItems.slice(0, 4).map((dish) => (
                <div
                  key={dish.id}
                  onClick={() => setSelectedMenuItem(dish)}
                  className="flex items-center space-x-4 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 transition-all cursor-pointer group"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-playfair text-base font-semibold text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors truncate">
                        {dish.name}
                      </h4>
                      {dish.price && (
                        <span className="text-xs font-bold text-[#D4AF37] ml-2 shrink-0">
                          {dish.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 line-clamp-2 mt-0.5">
                      {dish.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowFullMenuModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-[#C04000] hover:bg-[#A63700] text-[#FDFBF7] text-xs font-semibold tracking-wider uppercase rounded-sm border border-[#D4AF37]/50 shadow-lg transition-all"
              >
                <Utensils className="w-4 h-4 mr-2" />
                <span>Ver Todos os Pratos & Valores</span>
              </button>

              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white/5 hover:bg-white/10 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase rounded-sm border border-[#D4AF37]/30 transition-all"
              >
                <span>Fazer Pedido ou Reservar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dish Quick Detail Modal */}
      {selectedMenuItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#181818] border border-[#D4AF37]/40 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedMenuItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-56 relative">
              <img
                src={selectedMenuItem.image}
                alt={selectedMenuItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
              {selectedMenuItem.tag && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#C04000] text-white">
                  {selectedMenuItem.tag}
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-playfair text-2xl font-bold text-[#FDFBF7]">
                  {selectedMenuItem.name}
                </h3>
                {selectedMenuItem.price && (
                  <span className="text-lg font-bold text-[#D4AF37]">
                    {selectedMenuItem.price}
                  </span>
                )}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {selectedMenuItem.description}
              </p>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    setSelectedMenuItem(null);
                    onOpenReservation();
                  }}
                  className="flex-1 py-3 text-center bg-[#C04000] hover:bg-[#A63700] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
                >
                  Pedir no WhatsApp
                </button>
                <button
                  onClick={() => setSelectedMenuItem(null)}
                  className="px-5 py-3 border border-white/20 text-zinc-300 hover:text-white rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Menu Modal */}
      {showFullMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#141414] border border-[#D4AF37]/40 rounded-2xl max-w-4xl w-full max-h-[88vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 sticky top-0 bg-[#141414] z-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Cardápio Digital Completo
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#FDFBF7]">
                  Sabores de Maria Bonita
                </h3>
              </div>
              <button
                onClick={() => setShowFullMenuModal(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:text-[#D4AF37] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {SAMPLE_MENU_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex space-x-4 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-playfair text-base font-semibold text-[#FDFBF7] truncate">
                        {item.name}
                      </h4>
                      {item.price && (
                        <span className="text-xs font-bold text-[#D4AF37] ml-2 shrink-0">
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    {item.tag && (
                      <span className="inline-block mt-2 text-[10px] uppercase font-bold text-[#C04000]">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-zinc-400">
                * Valores e pratos sujeitos a variação sazonal dos produtores locais.
              </p>
              <button
                onClick={() => {
                  setShowFullMenuModal(false);
                  onOpenReservation();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#C04000] text-white text-xs font-semibold uppercase tracking-wider rounded-sm shadow-lg hover:bg-[#a63700]"
              >
                Consultar Prato do Dia via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sun, Moon, Utensils, Music, CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface DualitySectionProps {
  onOpenReservation: () => void;
}

export const DualitySection: React.FC<DualitySectionProps> = ({ onOpenReservation }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const dayCardRef = useRef<HTMLDivElement>(null);
  const nightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Parallax card reveal
      if (dayCardRef.current && nightCardRef.current) {
        gsap.fromTo(
          dayCardRef.current,
          { opacity: 0, y: 60, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: dayCardRef.current,
              start: 'top 80%',
            },
          }
        );

        gsap.fromTo(
          nightCardRef.current,
          { opacity: 0, y: 75, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            delay: 0.15,
            scrollTrigger: {
              trigger: nightCardRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="py-24 sm:py-32 bg-[#FDFBF7] text-[#2D2D2D] relative overflow-hidden"
    >
      {/* Subtle organic background pattern reminiscent of handcraft linen / clay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C04000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C04000] mb-3">
            <span>A Alma do Sertão</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span>Dois Tempos</span>
          </div>
          <h2 className="font-playfair text-[#2D2D2D] text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-tight leading-[1.15] mb-5">
            A Dualidade da Casa
          </h2>
          <p className="text-[#555048] text-base sm:text-lg font-normal leading-relaxed">
            O ritmo acolhedor do almoço regional encontra a efervescência noturna do buteco mais
            charmoso do Agreste. Uma transição pensada para você viver o melhor de Alagoinha em qualquer hora.
          </p>
        </div>

        {/* 2 Parallax Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Card 1: Dia - Self-Service */}
          <div
            ref={dayCardRef}
            className="group rounded-2xl overflow-hidden bg-white border border-[#E8E2D5] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(192,64,0,0.15)] transition-all duration-500 flex flex-col"
          >
            {/* Image Header with Badge */}
            <div className="relative h-72 sm:h-80 overflow-hidden bg-[#2D2D2D]">
              <img
                src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&q=80"
                alt="Buffet Self-Service do Restaurante Maria Bonita"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Day Time Badge */}
              <div className="absolute top-5 left-5 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#C04000] text-xs font-semibold tracking-wider shadow-md">
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>A partir das 10h/11h • Almoço & Self-Service</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-1">
                  Gastronomia Afetiva
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
                  Dia: O melhor Self-Service da região
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[#555048] text-sm sm:text-base leading-relaxed mb-6">
                  Um buffet farto e generoso que homenageia as raízes pernambucanas. Preparado diariamente com ingredientes frescos da terra, panelas de barro fumegantes e aquele toque de casa de vó elevado ao padrão gourmet.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3 text-sm text-[#2D2D2D]">
                    <CheckCircle2 className="w-4 h-4 text-[#C04000] shrink-0 mt-0.5" />
                    <span><strong>Carne de sol artesanal na nata</strong> com mandioca na manteiga de garrafa.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-[#2D2D2D]">
                    <CheckCircle2 className="w-4 h-4 text-[#C04000] shrink-0 mt-0.5" />
                    <span><strong>Baião de dois cremoso</strong> com queijo coalho tostado no maçarico.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-[#2D2D2D]">
                    <CheckCircle2 className="w-4 h-4 text-[#C04000] shrink-0 mt-0.5" />
                    <span><strong>Galinha caipira com pirão de raiz</strong> e temperos colhidos na hora.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-[#2D2D2D]">
                    <CheckCircle2 className="w-4 h-4 text-[#C04000] shrink-0 mt-0.5" />
                    <span>Buffet balanceado de saladas leves, legumes assados e opções sem glúten.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E2D5] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7A746B] block">Modalidade</span>
                  <span className="text-sm font-semibold text-[#2D2D2D]">Buffet Livre & Por Quilo</span>
                </div>
                <a
                  href="#cardapio"
                  className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#C04000] hover:text-[#A63700] group/link transition-colors"
                >
                  <span>Ver Pratos Diurnos</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Noite - Drinks, Música ao Vivo e Gastronomia */}
          <div
            ref={nightCardRef}
            className="group rounded-2xl overflow-hidden bg-[#141414] text-[#FDFBF7] border border-[#D4AF37]/30 shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col"
          >
            {/* Image Header with Badge */}
            <div className="relative h-72 sm:h-80 overflow-hidden bg-[#0A0A0A]">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80"
                alt="Noite no Buteco Maria Bonita em Alagoinha"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent"></div>

              {/* Night Time Badge */}
              <div className="absolute top-5 left-5 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F0F0F]/90 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-wider shadow-md">
                <Moon className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sáb e Dom até 23:30 • Buteco & Bar</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-[#FDFBF7]">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-1">
                  Vibração & Boemia
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
                  Noite: Drinks, Música ao Vivo e Gastronomia
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  Quando o sol se põe sobre Alagoinha, a casa se transforma. Iluminação cênica âmbar, mesas na calçada e no salão, petiscos estalando na brasa e aquela trilha sonora ao vivo com o melhor do acústico regional.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Pizzas artesanais de fermentação lenta</strong> com bordas crocantes e recheios autorais.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Cervejas trincando a zero grau</strong> servidas em canecas congeladas no sal e gelo.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Mixologia autoral</strong> com cachaças envelhecidas em amburana, caju e xarope de rapadura.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Música ao vivo aos fins de semana (Voz & Violão, Pé-de-Serra e MPB).</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-400 block">Destaque da Noite</span>
                  <span className="text-sm font-semibold text-[#D4AF37]">Música & Rodada de Petiscos</span>
                </div>
                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37] hover:text-white group/link transition-colors cursor-pointer"
                >
                  <span>Garantir Mesa Noturna</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

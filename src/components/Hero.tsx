import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MessageCircle, ArrowDown, Sparkles, Star, UtensilsCrossed, Moon } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const magneticButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate badge
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
      }

      // GSAP TextReveal effect on title
      if (titleRef.current) {
        const letters = titleRef.current.querySelectorAll('.reveal-char');
        gsap.fromTo(
          letters,
          {
            opacity: 0,
            y: 40,
            rotateX: -45,
            filter: 'blur(8px)',
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 1.1,
            stagger: 0.02,
            ease: 'power4.out',
            delay: 0.4,
          }
        );
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.0 }
        );
      }

      // Animate CTA & metrics
      if (ctaGroupRef.current) {
        gsap.fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 1.2 }
        );
      }

      if (metricsRef.current) {
        gsap.fromTo(
          metricsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.4 }
        );
      }
    }, heroRef);

    // Magnetic button effect
    const btn = magneticButtonRef.current;
    if (btn) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * 0.25,
          y: y * 0.25,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
        });
      };

      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        btn.removeEventListener('mousemove', handleMouseMove);
        btn.removeEventListener('mouseleave', handleMouseLeave);
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  const headlinePhrase = "Sabor que conta história, alma que celebra a vida.";

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0F0F0F]"
    >
      {/* Cinematographic gourmet backdrop with dramatic lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85"
          alt="Gastronomia Neo-Sertaneja Maria Bonita com iluminação dramática"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-125"
        />
        {/* Layered rustic gradients: terracotta warmth, deep charcoal fade, aged gold rim glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-[#0F0F0F]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-transparent to-[#0F0F0F]/70"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C04000]/15 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Neo-Sertanejo Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#0F0F0F]/70 backdrop-blur-md mb-6 sm:mb-8 text-[#D4AF37]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase">
            Alagoinha • Pernambuco | Neo-Sertaneja
          </span>
          <div className="w-1 h-1 rounded-full bg-[#C04000]"></div>
          <div className="flex items-center text-amber-300 text-xs">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline mr-1" />
            <span className="font-semibold">4.4</span>
          </div>
        </div>

        {/* Title with GSAP TextReveal effect */}
        <h1
          ref={titleRef}
          className="font-playfair text-[#FDFBF7] font-bold tracking-tight text-[clamp(2.3rem,6.5vw,5rem)] leading-[1.1] max-w-4xl drop-shadow-2xl perspective-1000 mb-6"
        >
          {headlinePhrase.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em]">
              {word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="reveal-char inline-block"
                  style={{
                    color:
                      wordIndex >= 5 ? '#D4AF37' : '#FDFBF7',
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-[#E8E4DD] text-[clamp(1.05rem,2.2vw,1.4rem)] max-w-2xl font-light leading-relaxed mb-10 text-center text-zinc-300"
        >
          Do buffet self-service premium ao buteco mais vibrante de Alagoinha.
        </p>

        {/* Action Group with Magnetic CTA button */}
        <div
          ref={ctaGroupRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          <button
            ref={magneticButtonRef}
            id="hero-cta-whatsapp"
            onClick={onOpenReservation}
            className="w-full sm:w-auto relative group inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-semibold tracking-wider uppercase text-[#FDFBF7] bg-[#C04000] hover:bg-[#A63700] rounded-sm transition-all duration-300 shadow-[0_0_35px_rgba(192,64,0,0.45)] border border-[#D4AF37]/50 overflow-hidden cursor-pointer"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            <span className="relative z-10 flex items-center space-x-3">
              <MessageCircle className="w-5 h-5 text-[#FDFBF7] fill-[#FDFBF7]/20" />
              <span>Reservar Mesa via WhatsApp</span>
            </span>
          </button>

          <a
            href="#cardapio"
            id="hero-explore-menu-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-sm sm:text-base font-medium tracking-wide text-[#FDFBF7] hover:text-[#D4AF37] bg-white/5 hover:bg-white/10 rounded-sm border border-white/15 hover:border-[#D4AF37]/50 backdrop-blur-sm transition-all duration-300"
          >
            <span>Explorar Cardápio</span>
          </a>
        </div>

        {/* Highlights Bar */}
        <div
          ref={metricsRef}
          className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/10 text-left"
        >
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="p-2 rounded bg-[#C04000]/20 text-[#C04000] shrink-0">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-zinc-400 font-medium">Buffet Diurno</div>
              <div className="text-sm font-semibold text-[#FDFBF7] font-montserrat">
                11:00 às 15:00
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="p-2 rounded bg-[#D4AF37]/20 text-[#D4AF37] shrink-0">
              <Moon className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-zinc-400 font-medium">Buteco & Noite</div>
              <div className="text-sm font-semibold text-[#FDFBF7] font-montserrat">
                18:00 às 23:30
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="p-2 rounded bg-amber-500/20 text-amber-400 shrink-0">
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <div>
              <div className="text-xs text-zinc-400 font-medium">Google Reviews</div>
              <div className="text-sm font-semibold text-[#FDFBF7] font-montserrat">
                4.4 ★ (+180 notas)
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#experiencia"
          className="inline-flex flex-col items-center mt-12 text-xs text-zinc-500 hover:text-[#D4AF37] transition-colors"
        >
          <span className="mb-2 tracking-widest uppercase text-[10px]">Descubra a Dualidade</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
        </a>
      </div>
    </section>
  );
};

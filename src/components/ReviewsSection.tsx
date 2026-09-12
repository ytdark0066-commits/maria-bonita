import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

gsap.registerPlugin(ScrollTrigger);

export const ReviewsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const reviewCards = cardsRef.current.querySelectorAll('.review-card');
        gsap.fromTo(
          reviewCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="avaliacoes"
      className="py-24 sm:py-32 bg-[#FDFBF7] text-[#2D2D2D] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Google Trust Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C04000] mb-3">
              <Star className="w-3.5 h-3.5 fill-[#C04000] text-[#C04000]" />
              <span>Prova Social Real</span>
            </div>
            <h2 className="font-playfair text-[#2D2D2D] text-[clamp(2.2rem,5vw,3.6rem)] font-bold tracking-tight leading-[1.15]">
              A Voz de Quem Já Viveu a Experiência
            </h2>
          </div>

          {/* Google Score Summary Card */}
          <div className="inline-flex items-center space-x-4 p-4 rounded-2xl bg-white border border-[#E8E2D5] shadow-md shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#0F0F0F] text-[#D4AF37] flex items-center justify-center font-bold text-lg font-playfair shadow-inner">
              G
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-bold text-sm text-[#2D2D2D] ml-1.5 font-montserrat">
                  {RESTAURANT_INFO.googleRating} / 5.0
                </span>
              </div>
              <p className="text-xs text-[#7A746B]">
                Mais de {RESTAURANT_INFO.reviewsCount} avaliações reais no Google Maps
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="review-card rounded-2xl p-7 bg-white border border-[#E8E2D5] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(192,64,0,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C04000]/20 group-hover:text-[#C04000]/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-[#3D3A35] text-sm sm:text-base leading-relaxed mb-6 font-normal italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-[#F0EBE0] flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    review.avatarBg || 'bg-[#C04000]'
                  }`}
                >
                  {review.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-playfair text-sm font-bold text-[#2D2D2D] truncate">
                      {review.author}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  </div>
                  <span className="text-[11px] text-[#7A746B] block truncate">
                    {review.role || 'Cliente Verificado'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External verification link */}
        <div className="text-center">
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#C04000] hover:text-[#8B2E00] transition-colors py-2 px-4 rounded-full border border-[#C04000]/20 bg-white/60 hover:bg-white"
          >
            <span>Ver Todas as Avaliações no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

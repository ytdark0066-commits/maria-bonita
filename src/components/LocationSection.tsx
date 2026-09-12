import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, MessageSquare, Calendar, Users, Send, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface LocationSectionProps {
  onOpenReservation: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenReservation }) => {
  const [copied, setCopied] = useState(false);
  const [quickForm, setQuickForm] = useState({
    nome: '',
    dia: String(new Date().getDate()).padStart(2, '0'),
    mes: '09',
    horario: '19:30',
    pessoas: '2',
  });

  const meses = [
    { value: '01', label: 'Jan' },
    { value: '02', label: 'Fev' },
    { value: '03', label: 'Mar' },
    { value: '04', label: 'Abr' },
    { value: '05', label: 'Mai' },
    { value: '06', label: 'Jun' },
    { value: '07', label: 'Jul' },
    { value: '08', label: 'Ago' },
    { value: '09', label: 'Set' },
    { value: '10', label: 'Out' },
    { value: '11', label: 'Nov' },
    { value: '12', label: 'Dez' },
  ];

  const handleCopyAddress = () => {
    const fullAddr = `${RESTAURANT_INFO.address}, ${RESTAURANT_INFO.city}, CEP ${RESTAURANT_INFO.cep}`;
    navigator.clipboard.writeText(fullAddr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nomeMes = meses.find((m) => m.value === quickForm.mes)?.label || quickForm.mes;
    const dataFormatada = `${quickForm.dia} de ${nomeMes}`;

    const text = encodeURIComponent(
      `Olá! Gostaria de reservar uma mesa no Restaurante e Buteco Maria Bonita:\n- Nome: ${quickForm.nome || 'Cliente'}\n- Data: ${dataFormatada}\n- Horário: ${quickForm.horario}\n- Pessoas: ${quickForm.pessoas}\nPor favor, confirmem a disponibilidade.`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section
      id="localizacao"
      className="py-24 sm:py-32 bg-[#0F0F0F] text-[#FDFBF7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C04000]" />
            <span>O Ponto de Encontro</span>
          </div>
          <h2 className="font-playfair text-[#FDFBF7] text-[clamp(2.2rem,5vw,3.6rem)] font-bold tracking-tight leading-[1.15] mb-4">
            Localização e Contato
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            Estamos situados no coração histórico de Alagoinha, prontos para acolher você, seus amigos e sua família.
          </p>
        </div>

        {/* 2-Column Layout: Left Map & Hours, Right Details & Quick Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stylized Grayscale Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#161616] shadow-2xl relative group">
              {/* Grayscale Map Embed */}
              <div className="h-96 w-full relative overflow-hidden">
                <iframe
                  title="Localização do Restaurante e Buteco Maria Bonita no Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.79!2d-36.7749334!3d-8.4652307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a82f53bb9e0b4f%3A0x5478f35e6ee819a1!2sMaria%20Bonita%20-%20Restaurante%20e%20Buteco.!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter grayscale contrast-125 brightness-75 group-hover:filter-none transition-all duration-700"
                ></iframe>

                {/* Floating Map Pin Badge linking to the restaurant profile */}
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 z-10 px-4 py-2.5 rounded-xl bg-[#0F0F0F]/90 hover:bg-[#0F0F0F] backdrop-blur-md border border-[#D4AF37]/40 shadow-xl flex items-center space-x-3 transition-transform hover:scale-105 cursor-pointer group/pin"
                >
                  <div className="w-8 h-8 rounded-full bg-[#C04000] group-hover/pin:bg-[#A63700] flex items-center justify-center text-white shrink-0 shadow-md">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-playfair text-sm font-bold text-white flex items-center space-x-1">
                      <span>Maria Bonita</span>
                      <ExternalLink className="w-3 h-3 text-[#D4AF37] opacity-70 group-hover/pin:opacity-100" />
                    </div>
                    <div className="text-[11px] text-zinc-300">Restaurante e Buteco • Maps</div>
                  </div>
                </a>

                {/* Direct Google Maps Trigger */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    id="map-directions-btn"
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#C04000] hover:bg-[#A63700] text-white text-xs font-semibold uppercase tracking-wider shadow-lg transition-colors border border-[#D4AF37]/30"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Traçar Rota no Maps</span>
                  </a>
                </div>
              </div>

              {/* Address Strip */}
              <div className="p-6 bg-[#161616] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#C04000] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                      Perfil Oficial no Maps
                    </span>
                    <p className="text-[#FDFBF7] font-medium text-sm sm:text-base">
                      Maria Bonita - Restaurante e Buteco
                    </p>
                    <span className="text-xs text-zinc-400">
                      {RESTAURANT_INFO.address}, Alagoinha - PE
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    id="open-maps-btn"
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-[#C04000] hover:bg-[#A63700] text-xs font-semibold uppercase tracking-wider text-white border border-[#D4AF37]/40 shadow-md transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Abrir Perfil no Maps</span>
                  </a>

                  <button
                    id="copy-address-btn"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-200 border border-white/10 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#D4AF37]" />
                        <span>Copiar Endereço</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="rounded-2xl p-6 sm:p-7 bg-[#161616] border border-white/10 shadow-xl">
              <div className="flex items-center space-x-3 mb-5">
                <div className="p-2.5 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-white">
                    Horários de Funcionamento
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium flex items-center space-x-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{RESTAURANT_INFO.hoursText}</span>
                  </p>
                </div>
              </div>

              {/* Resumo Direto e Limpo de Horários */}
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-zinc-300 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-white/5 gap-1">
                  <span className="font-medium text-white flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                    <span>Segunda, Quarta, Quinta e Sexta</span>
                  </span>
                  <span className="text-[#D4AF37] font-semibold font-montserrat">
                    11:00 às 14:00 <span className="text-xs text-zinc-400 font-normal">(Almoço)</span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-white/5 gap-1">
                  <span className="font-medium text-white flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Sábado e Domingo</span>
                  </span>
                  <span className="text-white font-semibold font-montserrat">
                    Sáb: 11h às 23:30 • Dom: 10h às 23:30
                  </span>
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <span className="font-medium text-red-400 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    <span>Terça-feira</span>
                  </span>
                  <span className="text-red-400 font-bold uppercase text-xs tracking-wider px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20">
                    Fechado
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Instant WhatsApp Reservation Form (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#161616] border border-[#D4AF37]/30 p-7 sm:p-9 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C04000]/20 blur-3xl pointer-events-none"></div>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                Atendimento Direto
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-2">
                Garanta sua Mesa
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                Envie suas informações e confirme instantaneamente pelo WhatsApp com a nossa equipe de atendimento.
              </p>
            </div>

            <form onSubmit={handleQuickSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria das Graças"
                  value={quickForm.nome}
                  onChange={(e) => setQuickForm({ ...quickForm, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0F0F0F] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-[#D4AF37]" />
                    <span>Data (Dia/Mês)</span>
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    <select
                      value={quickForm.dia}
                      onChange={(e) => setQuickForm({ ...quickForm, dia: e.target.value })}
                      className="w-full px-2 py-3 rounded-lg bg-[#0F0F0F] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      aria-label="Dia"
                    >
                      {Array.from({ length: 31 }, (_, i) => {
                        const d = String(i + 1).padStart(2, '0');
                        return (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        );
                      })}
                    </select>

                    <select
                      value={quickForm.mes}
                      onChange={(e) => setQuickForm({ ...quickForm, mes: e.target.value })}
                      className="w-full px-2 py-3 rounded-lg bg-[#0F0F0F] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      aria-label="Mês"
                    >
                      {meses.map((m) => (
                        <option key={m.value} value={m.value}>
                          {m.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>Horário</span>
                  </label>
                  <select
                    value={quickForm.horario}
                    onChange={(e) => setQuickForm({ ...quickForm, horario: e.target.value })}
                    className="w-full px-3 py-3 rounded-lg bg-[#0F0F0F] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <optgroup label="Almoço Diurno (Até 14h)">
                      <option value="11:30">11:30 (Almoço)</option>
                      <option value="12:00">12:00 (Almoço)</option>
                      <option value="12:30">12:30 (Almoço)</option>
                      <option value="13:00">13:00 (Almoço)</option>
                      <option value="13:30">13:30 (Almoço)</option>
                    </optgroup>
                    <optgroup label="Fim de Semana (Sáb/Dom até 23:30)">
                      <option value="18:30">18:30 (Sáb/Dom)</option>
                      <option value="19:30">19:30 (Sáb/Dom)</option>
                      <option value="20:30">20:30 (Sáb/Dom)</option>
                      <option value="21:30">21:30 (Sáb/Dom)</option>
                      <option value="22:30">22:30 (Sáb/Dom)</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center space-x-1">
                  <Users className="w-3 h-3 text-[#D4AF37]" />
                  <span>Número de Pessoas</span>
                </label>
                <select
                  value={quickForm.pessoas}
                  onChange={(e) => setQuickForm({ ...quickForm, pessoas: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0F0F0F] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  <option value="1">1 Pessoa (Individual)</option>
                  <option value="2">2 Pessoas (Casal)</option>
                  <option value="4">4 Pessoas (Família/Amigos)</option>
                  <option value="6">6 Pessoas (Grupo)</option>
                  <option value="8+">8+ Pessoas (Comemoração)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C04000] hover:bg-[#A63700] text-white font-semibold text-xs uppercase tracking-widest rounded-full border border-[#D4AF37]/50 shadow-[0_0_25px_rgba(192,64,0,0.4)] transition-all flex items-center justify-center space-x-2.5 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Reserva via WhatsApp</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </span>
              <span className="text-emerald-400 font-medium">Resposta em poucos minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

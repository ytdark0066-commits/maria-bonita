import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MessageSquare, Sparkles, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    data: '',
    horario: '19:30',
    pessoas: '2',
    ocasiao: 'Jantar Casual',
    observacoes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*SOLICITAÇÃO DE RESERVA - MARIA BONITA*
📍 Alagoinha - PE

👤 *Nome:* ${formData.nome}
📱 *Contato:* ${formData.telefone}
📅 *Data:* ${formData.data || 'Hoje/Próximo'}
⏰ *Horário:* ${formData.horario}
👥 *Pessoas:* ${formData.pessoas}
🥂 *Ocasião:* ${formData.ocasiao}
${formData.observacoes ? `📝 *Observações:* ${formData.observacoes}` : ''}

Por gentileza, confirmem a disponibilidade da mesa!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#141414] border border-[#D4AF37]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C04000]/25 blur-3xl pointer-events-none"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Restaurante & Buteco</span>
          </div>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#FDFBF7]">
            Reservar Mesa via WhatsApp
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Preencha os dados abaixo para ser direcionado ao nosso WhatsApp oficial com a mensagem pronta.
          </p>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              required
              placeholder="Como podemos te chamar?"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1 flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Data *</span>
              </label>
              <input
                type="date"
                required
                value={formData.data}
                onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Horário *</span>
              </label>
              <select
                value={formData.horario}
                onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              >
                <optgroup label="Almoço Diurno (11h - 15h)">
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                </optgroup>
                <optgroup label="Buteco Noturno (18h - 23:30)">
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1 flex items-center space-x-1">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Número de Pessoas</span>
              </label>
              <select
                value={formData.pessoas}
                onChange={(e) => setFormData({ ...formData, pessoas: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              >
                <option value="1 Pessoa">1 Pessoa</option>
                <option value="2 Pessoas">2 Pessoas (Casal)</option>
                <option value="3 a 4 Pessoas">3 a 4 Pessoas</option>
                <option value="5 a 6 Pessoas">5 a 6 Pessoas</option>
                <option value="7 a 10 Pessoas">7 a 10 Pessoas</option>
                <option value="Mais de 10 Pessoas">Mais de 10 Pessoas (Grupo)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                Ocasião
              </label>
              <select
                value={formData.ocasiao}
                onChange={(e) => setFormData({ ...formData, ocasiao: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#0F0F0F] border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              >
                <option value="Almoço de Trabalho / Família">Almoço</option>
                <option value="Jantar Casual">Jantar Casual</option>
                <option value="Aniversário / Comemoração">Aniversário</option>
                <option value="Encontro de Casal">Encontro a Dois</option>
                <option value="Confraternização de Amigos">Confraternização</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
              Observações especiais (opcional)
            </label>
            <input
              type="text"
              placeholder="Ex: Mesa externa, cadeirinha para criança, etc."
              value={formData.observacoes}
              onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-[#0F0F0F] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#C04000] hover:bg-[#A63700] text-white font-semibold text-xs uppercase tracking-widest rounded-sm border border-[#D4AF37]/50 shadow-[0_0_20px_rgba(192,64,0,0.4)] transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Confirmar no WhatsApp Oficial</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

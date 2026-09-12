/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DualitySection } from './components/DualitySection';
import { MenuBento } from './components/MenuBento';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#FDFBF7] font-montserrat flex flex-col selection:bg-[#C04000] selection:text-white">
      {/* Top Rustic-Chic Navigation */}
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Seção 1: Hero (O Impacto) */}
        <Hero onOpenReservation={() => setReservationOpen(true)} />

        {/* Seção 2: A Dualidade (Experiência) - Fundo #FDFBF7 */}
        <DualitySection onOpenReservation={() => setReservationOpen(true)} />

        {/* Seção 3: Destaques do Menu (Bento Grid) - Fundo #0F0F0F */}
        <MenuBento onOpenReservation={() => setReservationOpen(true)} />

        {/* Seção 4: Prova Social (Google Reviews) - Fundo #FDFBF7 */}
        <ReviewsSection />

        {/* Seção 5: Localização e Contato - Fundo #0F0F0F */}
        <LocationSection onOpenReservation={() => setReservationOpen(true)} />
      </main>

      {/* Rodapé com Assinatura da Vibe Studio */}
      <Footer />

      {/* Botão Flutuante de WhatsApp Pulsante */}
      <FloatingWhatsApp onOpenReservation={() => setReservationOpen(true)} />

      {/* Modal de Reserva Direta no WhatsApp */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}


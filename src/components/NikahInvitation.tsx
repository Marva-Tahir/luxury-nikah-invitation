import React from 'react';
import { motion } from 'framer-motion';
import { invitationConfig } from '../config/invitation';
import CountdownTimer from './CountdownTimer';
import LocationSection from './LocationSection';
import { Sparkles, Calendar, Clock, MapPin, Heart } from 'lucide-react';

export const NikahInvitation: React.FC = () => {
  const { bride, groom, event, venue, hosts } = invitationConfig;

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-3 sm:px-6 py-10 sm:py-16 bg-[#08231B] text-stone-800 overflow-x-hidden">
      {/* Background radial luxury lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0E4032_0%,_#07241C_55%,_#03140F_100%)] pointer-events-none" />

      {/* Subtle floating gold shimmer dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold-shimmer/35"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${8 + (i * 5.8)}%`,
              left: `${4 + ((i * 19) % 92)}%`,
            }}
            animate={{
              y: [-12, 16, -12],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Main Luxury Printed Invitation Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        className="relative w-full max-w-[480px] rounded-3xl bg-[#FAF7F0] shadow-card border-2 border-[#D4B26F] p-5 sm:p-8 md:p-10 z-10 my-4"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 15%, #FFFDF9 0%, #FAF5EA 60%, #F5ECDA 100%)',
        }}
      >
        {/* Subtle Islamic watermarked background inside card */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-30 rounded-3xl pointer-events-none" />

        {/* Multi-layered Gold Filigree Inner Border */}
        <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#C5A059]/50 pointer-events-none">
          {/* Ornate Gold Corner Ornaments */}
          <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#C5A059]" />
          <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#C5A059]" />
          <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#C5A059]" />
          <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#C5A059]" />
        </div>

        {/* Card Header: Islamic Calligraphy */}
        <div className="relative text-center pt-2 sm:pt-4 mb-4">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl text-emerald font-bold leading-normal select-none"
            style={{
              textShadow: '0 1px 10px rgba(197, 160, 89, 0.4)',
            }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          {/* Golden Monogram Crest */}
          <div className="mt-3 mb-2 flex justify-center">
            <div className="w-12 h-12 rounded-full border border-[#C5A059] flex items-center justify-center bg-gradient-to-b from-[#FFFDF8] to-[#F5EBCE] shadow-sm">
              <span className="font-cinzel text-sm font-bold text-gold-dark tracking-wider">
                {bride.monogramLetter} &amp; {groom.monogramLetter}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <Sparkles size={13} className="text-[#C5A059]" />
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          <h2 className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#8F6E2B] uppercase font-bold">
            A Special Invitation
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-stone-600 mt-2 max-w-xs mx-auto leading-relaxed">
            With the blessings of Allah Almighty and the prayers of our families,
            we joyfully invite you to celebrate the Nikah ceremony of
          </p>
        </div>

        {/* Bride & Groom Royal Names Section */}
        <div className="relative my-6 py-4 text-center rounded-2xl bg-[#064E3B]/[0.03] border border-[#C5A059]/30">
          {/* Bride */}
          <div className="space-y-1">
            <h1 className="font-script text-4xl sm:text-5xl text-emerald tracking-wide">
              {bride.fullName}
            </h1>
            <p className="font-sans text-[11px] sm:text-xs text-stone-600 tracking-wide">
              {bride.parentage}
            </p>
          </div>

          {/* Decorative '&' Ampersand Divider */}
          <div className="my-3 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#C5A059]/40" />
            <span className="font-serif italic text-2xl text-gold-dark font-normal">
              &amp;
            </span>
            <div className="h-[1px] w-12 bg-[#C5A059]/40" />
          </div>

          {/* Groom */}
          <div className="space-y-1">
            <h1 className="font-script text-4xl sm:text-5xl text-emerald tracking-wide">
              {groom.fullName}
            </h1>
            <p className="font-sans text-[11px] sm:text-xs text-stone-600 tracking-wide">
              {groom.parentage}
            </p>
          </div>
        </div>

        {/* Event Schedule Details */}
        <div className="relative my-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
            {/* Date Box */}
            <div className="p-3 rounded-xl bg-white/70 border border-[#C5A059]/40 shadow-sm flex flex-col items-center">
              <Calendar size={18} className="text-[#C5A059] mb-1" />
              <span className="font-cinzel text-[10px] tracking-widest text-[#8F6E2B] uppercase">
                Date &amp; Day
              </span>
              <span className="font-serif text-sm font-bold text-emerald mt-0.5">
                {event.dayFormatted}
              </span>
              {event.hijriDate && (
                <span className="font-arabic text-xs text-stone-500 mt-0.5">
                  {event.hijriDate}
                </span>
              )}
            </div>

            {/* Time Box */}
            <div className="p-3 rounded-xl bg-white/70 border border-[#C5A059]/40 shadow-sm flex flex-col items-center">
              <Clock size={18} className="text-[#C5A059] mb-1" />
              <span className="font-cinzel text-[10px] tracking-widest text-[#8F6E2B] uppercase">
                Nikah Ceremony Time
              </span>
              <span className="font-serif text-sm font-bold text-emerald mt-0.5">
                {event.timeFormatted}
              </span>
              <span className="font-sans text-[11px] text-stone-500 mt-0.5">
                Reception to follow
              </span>
            </div>
          </div>
        </div>

        {/* Live Countdown Section */}
        <div className="my-6 pt-2 pb-4 border-y border-[#C5A059]/30">
          <CountdownTimer targetDateISO={event.dateISO} />
        </div>

        {/* Venue & Location Button Section */}
        <div className="my-6">
          <LocationSection
            venueName={venue.name}
            hallName={venue.hall}
            city={venue.city}
            fullAddress={venue.fullAddress}
            googleMapsUrl={venue.googleMapsUrl}
          />
        </div>

        {/* Sentimental Closing & Family Signatures */}
        <div className="text-center pt-4 border-t border-[#C5A059]/30 space-y-2">
          <p className="font-serif italic text-xs sm:text-sm text-stone-700 max-w-sm mx-auto leading-relaxed">
            "Your presence and duas will make our special day even more memorable."
          </p>

          <p className="font-cinzel text-xs sm:text-sm text-emerald font-bold tracking-wider pt-1">
            With love, {hosts.families}
          </p>
          <p className="font-sans text-[10px] text-stone-500 uppercase tracking-widest">
            {hosts.signatureNote}
          </p>
        </div>

        {/* Personal Message & Final Decorative Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 pt-6 border-t border-dashed border-[#C5A059]/40 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/[0.06] border border-[#C5A059]/40">
            <Heart size={13} className="text-[#C5A059] fill-[#C5A059]/30" />
            <span className="font-serif italic text-xs sm:text-sm text-emerald font-medium">
              "Your prayers are the most precious gift."
            </span>
            <Heart size={13} className="text-[#C5A059] fill-[#C5A059]/30" />
          </div>

          <div className="mt-4 flex justify-center items-center gap-1.5 text-gold opacity-75">
            <Sparkles size={11} />
            <span className="font-cinzel text-[9px] uppercase tracking-[0.25em]">
              A &amp; A • FOREVER IN DUA
            </span>
            <Sparkles size={11} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NikahInvitation;

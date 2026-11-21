import React from 'react';
import { motion } from 'framer-motion';
import { invitationConfig } from '../config/invitation';
import CountdownTimer from './CountdownTimer';
import LocationSection from './LocationSection';
import { Sparkles, Calendar, Clock, Heart } from 'lucide-react';

export const NikahInvitation: React.FC = () => {
  const { bride, groom, event, venue, hosts } = invitationConfig;

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-3 sm:px-6 py-10 sm:py-16 bg-[#FAF6F0] text-stone-800 overflow-x-hidden">
      {/* Background soft pearl damask texture */}
      <div className="absolute inset-0 bg-pearl-damask opacity-60 pointer-events-none" />

      {/* Floating subtle rose-gold sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#DFB76C]/30"
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

      {/* Main Luxury Printed Invitation Card in Pearl, White, Rose Gold & Metallic Gold */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        className="relative w-full max-w-[480px] rounded-3xl bg-[#FFFDF9] shadow-card border-2 border-[#DFB76C] p-5 sm:p-8 md:p-10 z-10 my-4"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 15%, #FFFFFF 0%, #FAF6F0 60%, #F5ECDA 100%)',
        }}
      >
        {/* Floral overlay */}
        <div className="absolute inset-0 bg-[url('./assets/floral-pattern.svg')] bg-cover bg-center opacity-30 pointer-events-none rounded-3xl"></div>

        {/* Multi-layered Gold Filigree Inner Border */}
        <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#DFB76C]/50 pointer-events-none">
          {/* Ornate Gold Corner Ornaments */}
          <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#DFB76C]" />
          <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#DFB76C]" />
          <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#DFB76C]" />
          <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#DFB76C]" />
        </div>

        {/* Card Header: Islamic Calligraphy */}
        <div className="relative text-center pt-2 sm:pt-4 mb-4">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl text-[#967431] font-bold leading-normal select-none"
            style={{
              textShadow: '0 1px 12px rgba(223, 183, 108, 0.45)',
            }}
          >
        {/* Floral overlay */}
        <div className="absolute inset-0 bg-[url('./assets/floral-pattern.svg')] bg-cover bg-center opacity-30 pointer-events-none rounded-3xl"></div>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          {/* Golden Monogram Crest */}
          <div className="mt-3 mb-2 flex justify-center">
            <div className="w-12 h-12 rounded-full border border-[#DFB76C] flex items-center justify-center bg-gradient-to-b from-[#FFFFFF] to-[#FAF2E1] shadow-sm">
              <span className="font-cinzel text-sm font-bold text-[#967431] tracking-wider">
                {bride.monogramLetter} &amp; {groom.monogramLetter}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#DFB76C]" />
            <Sparkles size={13} className="text-[#DFB76C]" />
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#DFB76C]" />
          </div>

          <h2 className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#967431] uppercase font-bold">
            A Special Invitation
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-stone-600 mt-2 max-w-xs mx-auto leading-relaxed">
            With the blessings of Allah Almighty and the prayers of our families,
            we joyfully invite you to celebrate the Nikah ceremony of
          </p>
        </div>

        {/* Bride & Groom Names Section */}
        <div className="relative my-6 py-4 text-center rounded-2xl bg-[#ECC8CF]/15 border border-[#DFB76C]/40">
          {/* Bride */}
          <div className="space-y-1">
            <h1 className="font-script text-4xl sm:text-5xl text-[#8F4E5D] tracking-wide">
              {bride.fullName}
            </h1>
            <p className="font-sans text-[11px] sm:text-xs text-stone-600 tracking-wide">
              {bride.parentage}
            </p>
          </div>

          {/* Decorative '&' Ampersand Divider */}
          <div className="my-3 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#DFB76C]/50" />
            <span className="font-serif italic text-2xl text-[#967431] font-normal">
              &amp;
            </span>
            <div className="h-[1px] w-12 bg-[#DFB76C]/50" />
          </div>

          {/* Groom */}
          <div className="space-y-1">
            <h1 className="font-script text-4xl sm:text-5xl text-[#8F4E5D] tracking-wide">
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
            <div className="p-3 rounded-xl bg-white/80 border border-[#DFB76C]/40 shadow-sm flex flex-col items-center">
              <Calendar size={18} className="text-[#DFB76C] mb-1" />
              <span className="font-cinzel text-[10px] tracking-widest text-[#967431] uppercase font-semibold">
                Date &amp; Day
              </span>
              <span className="font-serif text-sm font-bold text-[#8F4E5D] mt-0.5">
                {event.dayFormatted}
              </span>
              {event.hijriDate && (
                <span className="font-arabic text-xs text-stone-500 mt-0.5">
                  {event.hijriDate}
                </span>
              )}
            </div>

            {/* Time Box */}
            <div className="p-3 rounded-xl bg-white/80 border border-[#DFB76C]/40 shadow-sm flex flex-col items-center">
              <Clock size={18} className="text-[#DFB76C] mb-1" />
              <span className="font-cinzel text-[10px] tracking-widest text-[#967431] uppercase font-semibold">
                Nikah Ceremony Time
              </span>
              <span className="font-serif text-sm font-bold text-[#8F4E5D] mt-0.5">
                {event.timeFormatted}
              </span>
              <span className="font-sans text-[11px] text-stone-500 mt-0.5">
                Reception to follow
              </span>
            </div>
          </div>
        </div>

        {/* Live Countdown Section */}
        <div className="my-6 pt-2 pb-4 border-y border-[#DFB76C]/30">
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
        <div className="text-center pt-4 border-t border-[#DFB76C]/30 space-y-2">
          <p className="font-serif italic text-xs sm:text-sm text-stone-700 max-w-sm mx-auto leading-relaxed">
            "Your presence and duas will make our special day even more memorable."
          </p>

          <p className="font-cinzel text-xs sm:text-sm text-[#8F4E5D] font-bold tracking-wider pt-1">
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
          className="mt-8 pt-6 border-t border-dashed border-[#DFB76C]/40 text-center"
        >
        {/* Floral overlay */}
        <div className="absolute inset-0 bg-[url('./assets/floral-pattern.svg')] bg-cover bg-center opacity-30 pointer-events-none rounded-3xl"></div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-blush border border-[#DFB76C]/50">
            <Heart size={13} className="text-[#C98A98] fill-[#ECC8CF]" />
            <span className="font-serif italic text-xs sm:text-sm text-[#8F4E5D] font-medium">
              "Your prayers are the most precious gift."
            </span>
            <Heart size={13} className="text-[#C98A98] fill-[#ECC8CF]" />
          </div>

          <div className="mt-4 flex justify-center items-center gap-1.5 text-gold-dark opacity-75">
            <Sparkles size={11} className="text-[#DFB76C]" />
            <span className="font-cinzel text-[9px] uppercase tracking-[0.25em] text-[#967431]">
              A &amp; A • FOREVER IN DUA
            </span>
            <Sparkles size={11} className="text-[#DFB76C]" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NikahInvitation;

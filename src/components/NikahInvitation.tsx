import React, { useEffect, useState } from 'react';
import { invitation } from '../config/invitation';
import CountdownTimer from './CountdownTimer';
import LocationSection from './LocationSection';
import MusicController from './MusicController';

/**
 * NikahInvitation – the main invitation card with details, countdown, location, and music toggle.
 */
const NikahInvitation: React.FC = () => {
  const { bride, groom, date, day, time, venue, address, family, mapLink } = invitation;

  // Format date string for display (e.g., "10 March 2027")
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ivory p-4">
      {/* Card container */}
      <div className="max-w-md w-full bg-champagne rounded-xl shadow-xl border-4 border-gold p-6 relative">
        {/* Decorative top gold border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gold rounded-t-xl" />
        <h2 className="text-center text-2xl md:text-3xl font-serif text-emerald mb-2">
          A special invitation
        </h2>
        <p className="text-center text-sm text-gray-700 mb-4">
          With the blessings of Allah Almighty and the prayers of our families,
        </p>
        <h1 className="text-center text-4xl md:text-5xl font-bold text-gold mb-2">
          {bride}
        </h1>
        <div className="text-center text-2xl md:text-3xl text-gold mb-4">&amp;</div>
        <h1 className="text-center text-4xl md:text-5xl font-bold text-gold mb-6">
          {groom}
        </h1>
        {/* Details list */}
        <div className="space-y-2 text-center text-gray-800">
          <p><strong>Nikah Date:</strong> {formattedDate} ({day})</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Venue:</strong> {venue}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>
        <p className="mt-4 text-center text-sm text-gray-700">
          Your presence and duas will make our special day even more memorable.
        </p>
        <p className="mt-2 text-center text-sm text-gray-700">
          With love, {family}
        </p>
        {/* Divider */}
        <hr className="my-4 border-t-2 border-gold" />
        {/* Interactive sections */}
        <div className="flex flex-col items-center space-y-3">
          <CountdownTimer targetDate={date} />
          <LocationSection link={mapLink} venue={venue} />
          <MusicController src={invitation.musicSrc} />
        </div>
      </div>
    </div>
  );
};

export default NikahInvitation;

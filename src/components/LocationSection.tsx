import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface LocationSectionProps {
  venueName: string;
  hallName: string;
  city: string;
  fullAddress: string;
  googleMapsUrl: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  venueName,
  hallName,
  city,
  fullAddress,
  googleMapsUrl,
}) => {
  return (
    <div className="w-full flex flex-col items-center text-center space-y-3">
      <div className="space-y-1">
        <h4 className="font-serif text-lg sm:text-xl font-bold text-emerald">
          {hallName}
        </h4>
        <p className="font-cinzel text-xs tracking-wider text-[#8F6E2B]">
          {venueName} • {city}
        </p>
        <p className="font-sans text-xs text-stone-600 max-w-xs mx-auto">
          {fullAddress}
        </p>
      </div>

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#064E3B] via-[#0A5C47] to-[#064E3B] text-[#FFF9E9] text-xs sm:text-sm font-cinzel font-semibold tracking-widest uppercase shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-[#C5A059]/60"
      >
        <MapPin size={16} className="text-[#DFB76C] group-hover:animate-bounce" />
        <span>View Location on Maps</span>
        <ExternalLink size={13} className="text-[#DFB76C]/80" />
      </a>
    </div>
  );
};

export default LocationSection;

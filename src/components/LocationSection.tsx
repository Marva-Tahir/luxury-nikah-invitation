import React from 'react';
import { MapPin } from 'lucide-react';

/**
 * LocationSection – button that opens the Google Maps link in a new tab.
 */
const LocationSection: React.FC<{ link: string; venue: string }> = ({ link, venue }) => {
  const openMap = () => {
    window.open(link, '_blank');
  };

  return (
    <button
      onClick={openMap}
      className="flex items-center gap-2 bg-emerald text-white px-4 py-2 rounded shadow"
    >
      <MapPin size={20} />
      View Location: {venue}
    </button>
  );
};

export default LocationSection;

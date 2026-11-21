import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface MusicControllerProps {
  musicSrc?: string;
  musicTitle?: string;
}

export const MusicController: React.FC<MusicControllerProps> = ({ musicSrc, musicTitle = 'Royal Theme' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    audioEngine.toggleMusic(musicSrc, (playing) => {
      setIsPlaying(playing);
    });
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={handleToggle}
        aria-label="Toggle background music"
        className="group relative flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full bg-[#FAF7F0]/90 backdrop-blur-md border border-[#C5A059]/60 shadow-lg text-emerald hover:border-[#C5A059] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-[2px] h-3.5 w-3.5">
              <span className="w-[2.5px] bg-[#C5A059] rounded-full animate-[bounce_0.8s_ease-in-out_infinite]" style={{ height: '60%' }} />
              <span className="w-[2.5px] bg-emerald rounded-full animate-[bounce_0.6s_ease-in-out_infinite_0.2s]" style={{ height: '100%' }} />
              <span className="w-[2.5px] bg-[#C5A059] rounded-full animate-[bounce_0.9s_ease-in-out_infinite_0.4s]" style={{ height: '40%' }} />
            </div>
            <Volume2 size={16} className="text-[#C5A059]" />
          </>
        ) : (
          <>
            <Music size={15} className="text-[#8F6E2B]" />
            <VolumeX size={15} className="text-stone-400" />
          </>
        )}

        <span className="hidden sm:inline font-cinzel text-[11px] font-semibold tracking-wider text-stone-700">
          {isPlaying ? 'Music On' : 'Play Music'}
        </span>
      </button>
    </div>
  );
};

export default MusicController;

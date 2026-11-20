import React, { useState, useRef } from 'react';
import { Music } from 'lucide-react';

/**
 * MusicController – toggles background music playback.
 * The audio element is created lazily after the first user interaction to satisfy mobile autoplay policies.
 */
const MusicController: React.FC<{ src: string }> = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      // Must be triggered by a user gesture.
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={togglePlay}
      className="flex items-center gap-2 bg-gold text-white px-3 py-1 rounded shadow"
    >
      <Music size={20} />
      {playing ? 'Pause Music' : 'Play Music'}
    </button>
  );
};

export default MusicController;

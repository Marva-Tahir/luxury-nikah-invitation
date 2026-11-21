// Web Audio Ambient Synthesizer for Luxury Experience
// Provides a warm, serene harmonic soundtrack with zero external file dependencies,
// plus realistic audio feedback for wax seal cracking.

class LuxuryAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private gainNode: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Realistic wax seal crack sound
  public playWaxCrack() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      // White noise burst filtered for crisp snap
      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1800, t);
      filter.Q.setValueAtTime(3, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.4, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(t);

      // Add a subtle low thud
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(120, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.18);
      oscGain.gain.setValueAtTime(0.3, t);
      oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.2);
    } catch {
      // Audio autoplay policy catch
    }
  }

  // Toggle ambient soundtrack
  public toggleMusic(audioUrl?: string, onStateChange?: (playing: boolean) => void): boolean {
    if (this.isPlaying) {
      this.stop();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.start(audioUrl);
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private start(audioUrl?: string) {
    this.initContext();
    this.isPlaying = true;

    // If an external MP3 is provided and actually playable, try to load it
    if (audioUrl && audioUrl.endsWith('.mp3') && !audioUrl.includes('placeholder')) {
      try {
        if (!this.audioElement) {
          this.audioElement = new Audio(audioUrl);
          this.audioElement.loop = true;
          this.audioElement.volume = 0.5;
        }
        this.audioElement.play().catch(() => {
          // If file fails, fallback to synthesizer
          this.startSynthAmbience();
        });
        return;
      } catch {
        // Fallback
      }
    }

    // Default: Serene royal harmonic synthesizer
    this.startSynthAmbience();
  }

  public stop() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.gainNode && this.ctx) {
      try {
        this.gainNode.gain.setTargetAtTime(0.001, this.ctx.currentTime, 0.4);
      } catch {
        // ignore
      }
    }
  }

  // Plays a meditative, sacred pentatonic bell/chime progression
  private startSynthAmbience() {
    if (!this.ctx) return;
    const ctx = this.ctx;

    this.gainNode = ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.18, ctx.currentTime);
    this.gainNode.connect(ctx.destination);

    // Warm chord notes in Hz (Pentatonic D Hijaz / Raag Bhairav inspired, serene & peaceful)
    // D4, F#4, A4, B4, D5, E5, F#5
    const notes = [293.66, 369.99, 440.00, 493.88, 587.33, 659.25, 739.99, 880.00];

    const playHarmonic = (freq: number, duration: number = 3.5) => {
      if (!this.isPlaying || !this.ctx || !this.gainNode) return;
      const t = this.ctx.currentTime;
      
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      // Warm overtone
      const osc2 = this.ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2, t);

      noteGain.gain.setValueAtTime(0.001, t);
      noteGain.gain.linearRampToValueAtTime(0.08, t + 0.8);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(noteGain);
      osc2.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(t);
      osc2.start(t);
      osc.stop(t + duration);
      osc2.stop(t + duration);
    };

    let step = 0;
    const progression = [
      [293.66, 440.00], // D + A
      [369.99, 587.33], // F# + D5
      [440.00, 659.25], // A + E5
      [493.88, 739.99], // B + F#5
      [587.33, 880.00], // D5 + A5
    ];

    // Trigger initial chime
    playHarmonic(293.66, 4.0);
    playHarmonic(440.00, 4.5);

    this.intervalId = window.setInterval(() => {
      if (!this.isPlaying) return;
      const chord = progression[step % progression.length];
      step++;
      playHarmonic(chord[0], 4.2);
      setTimeout(() => {
        if (this.isPlaying) playHarmonic(chord[1], 3.8);
      }, 700);
    }, 2800);
  }
}

export const audioEngine = new LuxuryAudioEngine();

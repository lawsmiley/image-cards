// Sound effects simulation for card interactions
export class SoundEffects {
  private static audioContext: AudioContext | null = null;

  static init() {
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      this.audioContext = new AudioContext();
    }
  }

  static playCardHover() {
    this.playTone(800, 0.1, 0.1);
  }

  static playCardDrag() {
    this.playTone(600, 0.2, 0.15);
  }

  static playCardDrop() {
    this.playTone(400, 0.3, 0.2);
  }

  static playCardReorder() {
    this.playTone(300, 0.4, 0.25);
  }

  private static playTone(frequency: number, duration: number, volume: number) {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }
}

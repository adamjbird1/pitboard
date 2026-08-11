import type { SoundDef } from "./soundboard";

function fileExists(url: string): Promise<boolean> {
  return fetch(url, { method: "HEAD" })
    .then((res) => res.ok)
    .catch(() => false);
}

function playBark(): void {
  const ctx = new AudioContext();
  const now = ctx.currentTime;

  // Two quick barks: short noise burst shaped with a bandpass + fast envelope.
  const barkAt = (start: number) => {
    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 350;
    filter.Q.value = 0.8;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(1, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(start);
    noise.stop(start + 0.16);
  };

  barkAt(now);
  barkAt(now + 0.22);

  setTimeout(() => ctx.close(), 600);
}

function speak(sound: SoundDef): void {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(sound.ttsText);
  utterance.rate = sound.rate ?? 1;
  utterance.pitch = sound.pitch ?? 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

export async function playSound(sound: SoundDef): Promise<void> {
  const fileUrl = `/sounds/${sound.id}.mp3`;
  if (await fileExists(fileUrl)) {
    const audio = new Audio(fileUrl);
    audio.play().catch(() => (sound.isBark ? playBark() : speak(sound)));
    return;
  }

  if (sound.isBark) {
    playBark();
  } else {
    speak(sound);
  }
}

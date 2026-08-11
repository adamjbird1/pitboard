export interface SoundDef {
  id: string;
  label: string;
  ttsText: string;
  /** SpeechSynthesisVoice.lang hint, and rate/pitch to sell the bit */
  rate?: number;
  pitch?: number;
  /** Set true to have this button play a synthesized dog bark instead of TTS */
  isBark?: boolean;
}

// Drop a file named `${id}.mp3` into /public/sounds/ to override the
// generated TTS/bark for that button with a real audio clip.
export const SOUNDS: SoundDef[] = [
  { id: "mr-worldwide", label: "MR. WORLDWIDE", ttsText: "Mr. Worldwide." },
  { id: "dale", label: "DALE!", ttsText: "Dale!", rate: 1.3 },
  {
    id: "mr-305",
    label: "MR. 305",
    ttsText: "Mr. 305 to Mr. Worldwide.",
  },
  {
    id: "eeeyoo",
    label: "EEEEYOOO",
    ttsText: "Eeeeeyoooo!",
    rate: 0.8,
    pitch: 1.4,
  },
  {
    id: "voyage",
    label: "VOYAGE",
    ttsText: "Voyage.",
    rate: 0.85,
  },
  {
    id: "fluent-spanish",
    label: "FLUENT SPANISH",
    ttsText: "I speak fluent Spanish.",
  },
  {
    id: "everything-tonight",
    label: "GIVE ME EVERYTHING",
    ttsText: "Give me everything, tonight.",
  },
  {
    id: "bang-bang",
    label: "BANG BANG",
    ttsText: "Bang bang, into the room.",
  },
  {
    id: "international-love",
    label: "INTERNATIONAL LOVE",
    ttsText: "International love.",
  },
  {
    id: "timber",
    label: "TIMBER",
    ttsText: "It is going down, for real. Timber!",
  },
  {
    id: "one-two-three-four",
    label: "1-2-3-4",
    ttsText: "One, two, three, four.",
  },
  {
    id: "bald-headed",
    label: "THE BALD-HEADED ONE",
    ttsText: "The bald-headed one.",
    pitch: 0.7,
  },
  {
    id: "dog-bark",
    label: "ACTUAL DOG BARK",
    ttsText: "",
    isBark: true,
  },
];

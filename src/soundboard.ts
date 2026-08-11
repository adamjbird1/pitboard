export interface SoundDef {
  id: string;
  label: string;
  emoji: string;
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
  {
    id: "mr-worldwide",
    label: "Mr. Worldwide",
    emoji: "🌎",
    ttsText: "Mr. Worldwide.",
  },
  { id: "dale", label: "Dale!", emoji: "🔥", ttsText: "Dale!", rate: 1.3 },
  {
    id: "mr-305",
    label: "Mr. 305",
    emoji: "🕶️",
    ttsText: "Mr. 305 to Mr. Worldwide.",
  },
  {
    id: "eeeyoo",
    label: "EEEEYOOO",
    emoji: "📣",
    ttsText: "Eeeeeyoooo!",
    rate: 0.8,
    pitch: 1.4,
  },
  {
    id: "voyage",
    label: "Voyage",
    emoji: "🚢",
    ttsText: "Voyage.",
    rate: 0.85,
  },
  {
    id: "fluent-spanish",
    label: "Fluent Spanish",
    emoji: "🗣️",
    ttsText: "I speak fluent Spanish.",
  },
  {
    id: "everything-tonight",
    label: "Give Me Everything",
    emoji: "🎉",
    ttsText: "Give me everything, tonight.",
  },
  {
    id: "bang-bang",
    label: "Bang Bang",
    emoji: "💥",
    ttsText: "Bang bang, into the room.",
  },
  {
    id: "international-love",
    label: "International Love",
    emoji: "💃",
    ttsText: "International love.",
  },
  {
    id: "timber",
    label: "Timber",
    emoji: "🌲",
    ttsText: "It is going down, for real. Timber!",
  },
  {
    id: "one-two-three-four",
    label: "1-2-3-4",
    emoji: "🕺",
    ttsText: "One, two, three, four.",
  },
  {
    id: "bald-headed",
    label: "The Bald-Headed One",
    emoji: "💡",
    ttsText: "The bald-headed one.",
    pitch: 0.7,
  },
  {
    id: "dog-bark",
    label: "Actual Dog Bark",
    emoji: "🐕",
    ttsText: "",
    isBark: true,
  },
];

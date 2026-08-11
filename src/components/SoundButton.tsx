import { useState } from "react";
import type { SoundDef } from "../soundboard";
import { playSound } from "../audio";

interface SoundButtonProps {
  sound: SoundDef;
}

export function SoundButton({ sound }: SoundButtonProps) {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(true);
    setTimeout(() => setPressed(false), 150);
    void playSound(sound);
  };

  return (
    <button
      type="button"
      className={`sound-tile${pressed ? " pressed" : ""}`}
      onClick={handleClick}
    >
      <span className="sound-tile-emoji">{sound.emoji}</span>
      <span className="sound-tile-label">{sound.label}</span>
    </button>
  );
}

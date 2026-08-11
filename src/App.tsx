import { SOUNDS } from "./soundboard";
import { SoundButton } from "./components/SoundButton";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="banner">
        <h1>
          Mr. <span className="worldwide">Worldwide</span>
        </h1>
        <p className="subtitle">
          🕶️ 🌎 the unofficial Pitbull soundboard 🌎 🕶️
        </p>
      </header>

      <main className="grid">
        {SOUNDS.map((sound) => (
          <SoundButton key={sound.id} sound={sound} />
        ))}
      </main>

      <footer className="footer">
        <p>
          Dale. All catchphrases spoken via your browser's TTS voice, not the
          real Pitbull.
        </p>
      </footer>
    </div>
  );
}

export default App;

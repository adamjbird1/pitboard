import { SOUNDS } from "./soundboard";
import { SoundButton } from "./components/SoundButton";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="marquee-wrap">
        <div className="marquee">
          *** MR. WORLDWIDE *** MR. 305 *** DALE *** WELCOME TO THE OFFICIAL
          UNOFFICIAL PITBULL SOUNDBOARD *** BEST VIEWED IN 1024x768 *** TURN
          YOUR SPEAKERS UP *** MR. WORLDWIDE ***
        </div>
      </div>

      <header className="banner">
        <h1 className="glitch-title">MR. WORLDWIDE</h1>
        <p className="subtitle">[ the unofficial pitbull soundboard.exe ]</p>
        <hr className="rule" />
      </header>

      <main className="grid">
        {SOUNDS.map((sound) => (
          <SoundButton key={sound.id} sound={sound} />
        ))}
      </main>

      <footer className="footer">
        <hr className="rule" />
        <p>
          &gt; all catchphrases generated live by YOUR browser's text-to-speech
          engine, not the real pitbull. no rights reserved because none were
          used. dale.
        </p>
        <p className="under-construction">
          *** SITE PERMANENTLY UNDER CONSTRUCTION ***
        </p>
      </footer>
    </div>
  );
}

export default App;

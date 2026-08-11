# Sound overrides

By default every button on the soundboard uses the browser's built-in
text-to-speech (or a synthesized bark for the dog button). To use a real
audio clip instead, drop an mp3 in this folder named after the button's
`id` from `src/soundboard.ts`, e.g.:

```
public/sounds/dale.mp3
public/sounds/mr-worldwide.mp3
public/sounds/dog-bark.mp3
```

If the file exists, it takes priority over TTS/synthesis automatically —
no code changes needed.

import { createContext, useCallback, useState } from "react";

export type AudioContext = {
  audio?: HTMLAudioElement;
  play?: (url: string | undefined) => void;
  pause?: () => void;
  playing?: boolean;
};

export const audioContext = createContext<AudioContext>({});

const useAudio = (): AudioContext => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement>(new Audio());

  audio.addEventListener("ended", () => {
    setPlaying(false);
    audio.setAttribute("src", "");
    setAudio(audio);
  });

  const play = useCallback(async (url: string | undefined) => {
    if (!url) return;

    audio.setAttribute("src", url);
    setAudio(audio);
    setPlaying(true);
    await audio.play();
  }, []);

  const pause = () => {
    audio.pause();
    setPlaying(false);
  };

  return { audio, play, pause, playing };
};

export default useAudio;

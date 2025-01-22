import { useEffect } from "react";

export default function MusicBackground() {
  useEffect(() => {
    const audio = new Audio("/music/space-music.mp3");  
    audio.loop = true;  
    audio.volume = 0.1;  
    audio.play();

    return () => {
      audio.pause(); 
    };
  }, []);

  return null;  
}

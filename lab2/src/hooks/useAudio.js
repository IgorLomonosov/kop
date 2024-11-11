import { useState, useEffect, useRef } from 'react';

function useAudio(url) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0); // Значення від 0.0 до 1.0
  const audioRef = useRef(new Audio(url));

  useEffect(() => {
    const audio = audioRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
    };
  }, []);

  const play = () => {
    audioRef.current.play();
  };

  const pause = () => {
    audioRef.current.pause();
  };

  const rewind = (time) => {
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - time);
  };

  const forward = (time) => {
    audioRef.current.currentTime = Math.min(audioRef.current.duration, audioRef.current.currentTime + time);
  };

  const setAudioVolume = (value) => {
    const volumeValue = Math.min(Math.max(value, 0), 1);
    setVolume(volumeValue);
    audioRef.current.volume = volumeValue;
  };

  return {
    isPlaying,
    play,
    pause,
    rewind,
    forward,
    setAudioVolume,
    volume
  };
}

export default useAudio;

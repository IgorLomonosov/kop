import React from 'react';
import useAudio from '../hooks/useAudio';

const AudioPlayer = ({ url }) => {
  const { isPlaying, play, pause, rewind, forward, setAudioVolume, volume } = useAudio(url);

  return (
    <div>
      <button onClick={isPlaying ? pause : play}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button onClick={() => rewind(5)}>Rewind 5s</button>
      <button onClick={() => forward(5)}>Forward 5s</button>
      <div>
        <label>
          Volume:
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setAudioVolume(parseFloat(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default AudioPlayer;

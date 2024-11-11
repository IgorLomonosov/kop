import React from 'react';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="App">
      <h1>Custom Audio Player</h1>
      <AudioPlayer url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </div>
  );
}

export default App;

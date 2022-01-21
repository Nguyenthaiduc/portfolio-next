import {useState, useEffect} from 'react';
import Player from '../components/music/Player';
function App() {
  const [songs] = useState([
    {
      title: "Homesick",
      artist: "MitiS",
      img_src: "/images/thumnail.jpg",
      src: "/mp3/music1.mp3"
    },
    {
        title: "Million Days",
        artist: "Sabai",
        img_src: "/images/thumnail2.jpg",
        src: "/mp3/music2.mp3"
    },
    
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
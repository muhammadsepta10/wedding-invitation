'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto play when audio file is detected and ready
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Auto play failed (browser policy):', error);
          // Browser may block autoplay, user needs to interact first
        });
    };

    // Check if audio is already loaded
    if (audio.readyState >= 2) {
      handleCanPlay();
    } else {
      audio.addEventListener('canplaythrough', handleCanPlay);
    }

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, []);

  // Handle play/pause state changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.log('Audio play failed:', error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/music/wedding-music.mp3"
        preload="auto"
      />
      <div
        className={`music-player ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <FaPause className="text-2xl text-primary" />
        ) : (
          <FaPlay className="text-2xl text-primary ml-1" />
        )}
      </div>
    </>
  );
}


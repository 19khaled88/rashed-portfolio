// components/SimpleVideoPlayer.tsx
'use client';

import { useState, useRef } from 'react';
import { Play} from 'lucide-react';

interface SimpleVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function SimpleVideoPlayer({ src, poster, className = '' }: SimpleVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full"
        poster={poster}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors"
        >
          <div className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
            <Play size={32} className="text-white" />
          </div>
        </button>
      )}
    </div>
  );
}
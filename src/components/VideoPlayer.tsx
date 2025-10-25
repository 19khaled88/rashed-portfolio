// components/VideoPlayer.tsx
'use client';

import { useState, useRef, useEffect } from 'react';

import { Play, Pause,  VolumeX, Maximize,  Download } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean; // This will be forced to true
}

export default function VideoPlayer({
  src,
  poster,
  title,
  className = '',
  autoPlay = false,
  controls = true,
  loop = false,
  muted = true // Force muted by default
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true); // Always true
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0); // Always 0
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showControls, setShowControls] = useState(true);

  // Force mute the video on mount and whenever it plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force mute the video
    video.muted = true;
    video.volume = 0;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('play', () => {
      // Ensure video stays muted when playing
      video.muted = true;
      video.volume = 0;
    });

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('play', () => {});
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is muted before playing
    video.muted = true;
    video.volume = 0;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(error => {
        console.log('Video play failed:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Override mute function to always keep it muted
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    // Force mute regardless of user action
    video.muted = true;
    video.volume = 0;
    setIsMuted(true);
    setVolume(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Override volume change to always keep volume at 0
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    // Force volume to 0 and muted to true
    video.volume = 0;
    video.muted = true;
    setVolume(0);
    setIsMuted(true);
  };

  const handlePlaybackRate = (rate: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = title || 'video.mp4';
    link.click();
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={`relative bg-black rounded-lg overflow-hidden group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Element - Always muted */}
      <video
        ref={videoRef}
        className="w-full h-full"
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={true} // Force muted
        
        onClick={togglePlay}
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Controls */}
      {controls && (
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Progress Bar */}
          <div className="mb-3">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            />
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              {/* Volume Control - Always muted and disabled */}
              <div className="flex items-center space-x-2 opacity-50 cursor-not-allowed" title="Sound is disabled">
                <button
                  onClick={toggleMute}
                  className="text-white transition-colors"
                  disabled
                >
                  <VolumeX size={18} />
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={0}
                  onChange={handleVolumeChange}
                  disabled
                  className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-not-allowed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-400"
                />
              </div>

              {/* Time Display */}
              <span className="text-white text-sm font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {/* Playback Speed */}
              <select
                value={playbackRate}
                onChange={(e) => handlePlaybackRate(parseFloat(e.target.value))}
                className="bg-gray-800 text-white text-sm rounded px-2 py-1 border border-gray-600 focus:outline-none focus:border-blue-500"
              >
                <option value={0.5}>0.5x</option>
                <option value={0.75}>0.75x</option>
                <option value={1}>1x</option>
                <option value={1.25}>1.25x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>

              {/* Download */}
              <button
                onClick={handleDownload}
                className="text-white hover:text-gray-300 transition-colors"
                title="Download video"
              >
                <Download size={18} />
              </button>

              {/* Fullscreen */}
              <button
                onClick={handleFullscreen}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Maximize size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Title Overlay */}
      {title && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4">
          <h3 className="text-white text-sm font-medium">{title}</h3>
        </div>
      )}

      {/* Play Button Overlay */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors"
        >
          <div className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors">
            <Play size={40} className="text-white" />
          </div>
        </button>
      )}

      {/* Mute Indicator Badge */}
      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
        🔇 Muted
      </div>
    </div>
  );
}
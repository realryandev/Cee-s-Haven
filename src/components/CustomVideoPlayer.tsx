"use client";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

interface VideoPlayerProps {
  src: string;
}

export default function CustomVideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative max-w-3xl mx-auto bg-[url(/pixel.png)] rounded-lg ${isFullscreen ? "fixed inset-0 z-50  flex items-center justify-center" : ""
        }`}
    >
      <video
        ref={videoRef}
        className={`w-80 h-42 rounded-lg shadow-lg cursor-pointer object-center  ${isFullscreen ? "w-screen h-screen object-contain" : ""
          }`}
        src={src}
        onClick={togglePlay}
      />
      <div
        className={`absolute bottom-4 left-4 flex items-center gap-3 bg-black/50 p-2 rounded-lg transition-opacity ${isFullscreen ? "bottom-8 left-8" : ""
          }`}
      >
        <button onClick={togglePlay} className="p-2 text-white">
          {isPlaying ? <Pause size={15} /> : <Play size={15} />}
        </button>
        <button onClick={toggleMute} className="p-2 text-white">
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
        <button onClick={toggleFullscreen} className="p-2 text-white">
          {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
        </button>
      </div>
    </div>
  );
}

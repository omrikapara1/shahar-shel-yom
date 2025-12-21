
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
    src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    // Start muted to allow the browser to autoplay immediately
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // 1. Setup: Set volume and start muted (required for autoplay)
        audio.volume = 0.4;
        audio.muted = true;

        // 2. Attempt Autoplay immediately
        const startPlayback = async () => {
            try {
                await audio.play();
                // If we get here, audio is playing (silently)
            } catch (err) {
                console.warn("Autoplay failed:", err);
            }
        };
        startPlayback();

        // 3. Unlock Audio (Unmute) on the VERY FIRST user interaction
        const enableAudio = () => {
            if (audio) {
                // Unmute
                audio.muted = false;
                setIsMuted(false);
                
                // Ensure it's playing
                if (audio.paused) {
                    audio.play().catch(e => console.warn("Play on interaction failed", e));
                }
            }
            
            // Remove these listeners immediately so they only run once
            document.removeEventListener('click', enableAudio);
            document.removeEventListener('touchstart', enableAudio);
            document.removeEventListener('keydown', enableAudio);
            document.removeEventListener('scroll', enableAudio);
        };

        // Listen for any sign of life from the user
        document.addEventListener('click', enableAudio);
        document.addEventListener('touchstart', enableAudio);
        document.addEventListener('keydown', enableAudio);
        document.addEventListener('scroll', enableAudio);

        return () => {
            document.removeEventListener('click', enableAudio);
            document.removeEventListener('touchstart', enableAudio);
            document.removeEventListener('keydown', enableAudio);
            document.removeEventListener('scroll', enableAudio);
        };
    }, [src]);

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation(); // Don't trigger the document listeners
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.muted) {
            // User wants to hear music
            audio.muted = false;
            setIsMuted(false);
            if (audio.paused) audio.play();
        } else {
            // User wants silence
            audio.muted = true;
            setIsMuted(true);
        }
    };

    return (
        <div className="fixed bottom-24 left-4 md:bottom-6 md:left-6 z-50 transition-all duration-300">
            <audio 
                ref={audioRef} 
                src={src} 
                loop 
                playsInline 
                preload="auto"
                onError={(e) => console.warn("Audio failed to load. Check file path.", e)}
            />
            
            <button 
                onClick={toggleMute}
                className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm border border-white/50 transition-all duration-300 hover:scale-110 ${
                    isMuted
                        ? 'bg-white/80 text-slate-400' 
                        : 'bg-teal-500/90 text-white animate-pulse'
                }`}
                title={isMuted ? "הפעל מוזיקה" : "השתק מוזיקה"}
            >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
        </div>
    );
};

export default AudioPlayer;

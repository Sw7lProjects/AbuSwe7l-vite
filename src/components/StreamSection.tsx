import React, { useState } from "react";
import { Play, Youtube } from "lucide-react";

const KICK_CHANNEL_URL = "https://kick.com/abuswe7l";
const KICK_LIVE_EMBED_URL = "https://kick.com/abuswe7l?autoplay=true";
const KICK_CHANNEL_IMAGE = "https://images-ext-1.discordapp.net/external/McCo7Nj2JSChxqGDO7DZ62ttup3VVosJid9-UaZ50kI/https/yt3.googleusercontent.com/6skf3aJYTrBh2Vz5MZ2qXaRvjUCxjkHtwZCTCTfSMZ95eSf7uPsDhdefIMGkyEHQeIPF474gIA%3Ds900-c-k-c0x00ffffff-no-rj?format=webp"; // Replace with your channel image
const LATEST_VIDEO_EMBED_URL = "https://www.youtube.com/embed/DkQ4QjfWH64";

const isLive = false; // Set to true if live, false if offline

const StreamSection: React.FC = () => {
  const [showLive, setShowLive] = useState(true);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1e293b] to-[#23242a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(35,36,42,0.10),transparent_60%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#60a5fa] to-[#1e40af] mb-3 sm:mb-4 drop-shadow-lg">Streams & Videos</h2>
          <p className="text-base sm:text-lg text-gray-200 mb-4 sm:mb-6 drop-shadow">Watch the latest live stream or YouTube video from AbuSwe7l!</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            className={`flex items-center justify-center px-4 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-base transition-all duration-200 border-2 focus:outline-none shadow-glow ${showLive ? 'bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white border-[#1e40af]' : 'bg-[#23242a]/70 text-white border-[#1e40af] hover:bg-[#2563eb]/10'}`}
            onClick={() => setShowLive(true)}
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
            Live Stream
          </button>
          <button
            className={`flex items-center justify-center px-4 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-base transition-all duration-200 border-2 focus:outline-none shadow-glow ${!showLive ? 'bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white border-[#1e40af]' : 'bg-[#23242a]/70 text-white border-[#1e40af] hover:bg-[#2563eb]/10'}`}
            onClick={() => setShowLive(false)}
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
            Latest Video
          </button>
        </div>
        <div className="relative w-full aspect-video mb-6 sm:mb-10">
          {/* Kick channel image as background */}
          <img
            src={KICK_CHANNEL_IMAGE}
            alt="Kick Channel Background"
            className="absolute inset-0 w-full h-full object-cover rounded-xl brightness-75 select-none pointer-events-none"
            style={{ zIndex: 1 }}
          />
          {/* Overlay for darkness and blue glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#23242a]/80 via-[#181a1f]/20 to-[#23242a]/90 rounded-xl shadow-[0_0_40px_10px_rgba(35,36,42,0.3)]" style={{ zIndex: 2 }} />
          {/* Main content (iframe or offline) */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 3 }}>
            <div className="w-full h-full">
              {showLive ? (
                isLive ? (
                  <iframe
                    src={KICK_LIVE_EMBED_URL}
                    title="Kick Live Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-xl border-2 border-gray-700 shadow-glow-lg"
                  />
                ) : (
                  <a href={KICK_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="w-full h-full block relative">
                    <span className="absolute inset-0 flex items-center justify-center bg-[#23242a]/80 text-2xl sm:text-3xl font-bold text-gray-light select-none rounded-xl border-2 border-gray-700 shadow-glow-lg">OFFLINE</span>
                  </a>
                )
              ) : (
                <iframe
                  src={LATEST_VIDEO_EMBED_URL}
                  title="Latest YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl border-2 border-gray-700 shadow-glow-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamSection;

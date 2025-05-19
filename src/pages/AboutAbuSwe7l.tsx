import React from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Twitter } from "lucide-react";
import { SiTiktok, SiSnapchat, SiDiscord } from "react-icons/si";
import { User, Award, Star, Heart, Share2 } from "lucide-react";

const aboutData = {
  name: "AbuSwe7l",
  age: 23,
  location: "Riyadh, Saudi Arabia",
  team: "Clan Power (2021)",
  bio: `AbuSwe7l is a passionate Saudi streamer and content creator. He started his journey in gaming at a young age, quickly becoming one of the most recognized names in the Arab gaming community. Known for his engaging streams, positive energy, and dedication to his fans, AbuSwe7l has built a vibrant community that spans the region and beyond.`,
  story: `Growing up in Riyadh, AbuSwe7l developed a love for video games early on. His journey began with classic titles and evolved into competitive gaming and streaming. Joining Clan Power in 2021 marked a turning point, allowing him to participate in top-tier tournaments and collaborate with elite players. His streams are known for their high energy, interactive chat, and exclusive giveaways.`,
  achievements: [
    "Reached 300,000+ subscribers on YouTube",
    "Represented Clan Power in international tournaments since 2021",
    "Hosted charity streams for various causes",
    "Built one of the most active Discord communities in the region"
  ],
  hobbies: [
    "Gaming",
    "Traveling",
    "Tech reviews",
    "Collaborating with other creators"
  ],
  avatar: "https://cdn.discordapp.com/avatars/1275574902736424971/80c19f39d0d484c5694658466ea36a2d.webp?size=4096"
};

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@AbuSwe7l", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/ASwe7l", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/abuswe7l?igsh=MWZvbmFjeTE4dWd1cw==", label: "Instagram" },
  { icon: SiTiktok, href: "https://www.tiktok.com/@abuswe7ll", label: "TikTok" },
  { icon: SiDiscord, href: "https://discord.gg/vx4UczGd", label: "Discord" },
  { icon: SiSnapchat, href: "https://www.snapchat.com/add/abuswe7l", label: "Snapchat" },
];

const streamingPlatforms = [
  { name: "Kick", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Kick.com_logo.svg", url: "#" },
];
const adsEmail = "ads@abuswe7l.com";

const AboutAbuSwe7l: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#23242a] to-[#181a1f] text-white">
      <Navigation />
      <div className="h-24 md:h-28"></div>
      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-[#23242a]/90 to-[#181a1f]/80 border border-[#3b82f6]/40 rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col items-center overflow-hidden group"
          >
            {/* لمعة أعلى الكارد */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#3b82f6]/40 via-white/10 to-[#5a6cff]/40 opacity-60 blur-sm z-10" />
            <img
              src={aboutData.avatar}
              alt={aboutData.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#3b82f6] shadow-[0_0_32px_4px_#3b82f6aa] object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="text-center">
              <h1 className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-transparent bg-clip-text mb-2 drop-shadow-lg">
                <User className="w-7 h-7 text-[#3b82f6]" />
                {aboutData.name}
              </h1>
              <div className="flex flex-wrap gap-3 justify-center mb-2">
                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#3b82f6]/80 to-[#5a6cff]/80 text-white font-bold text-sm border border-[#3b82f6]/40 shadow-md">{aboutData.team}</span>
                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#23242a]/80 to-[#3b82f6]/30 text-white font-semibold text-sm border border-[#3b82f6]/20 shadow">{aboutData.location}</span>
                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#23242a]/80 to-[#5a6cff]/30 text-white font-semibold text-sm border border-[#5a6cff]/20 shadow">Age: {aboutData.age}</span>
              </div>
              <p className="text-gray-100 text-base md:text-lg mb-2 font-medium drop-shadow">{aboutData.bio}</p>
            </div>
          </motion.div>
          {/* Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-gradient-to-br from-[#23242a]/90 to-[#181a1f]/80 border border-[#3b82f6]/40 rounded-3xl shadow-2xl p-10 flex flex-col overflow-hidden group"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#3b82f6]/40 via-white/10 to-[#5a6cff]/40 opacity-60 blur-sm z-10" />
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-2 bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-transparent bg-clip-text drop-shadow-lg">
              <Heart className="w-6 h-6 text-[#5a6cff]" /> My Story
            </h2>
            <p className="text-gray-200 leading-relaxed font-medium">{aboutData.story}</p>
          </motion.div>
          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-gradient-to-br from-[#23242a]/90 to-[#181a1f]/80 border border-[#3b82f6]/40 rounded-3xl shadow-2xl p-10 flex flex-col overflow-hidden group"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#3b82f6]/40 via-white/10 to-[#5a6cff]/40 opacity-60 blur-sm z-10" />
            <h3 className="flex items-center gap-2 text-xl font-bold mb-2 bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-transparent bg-clip-text drop-shadow-lg">
              <Award className="w-6 h-6 text-[#FFD700]" /> Achievements
            </h3>
            <ul className="list-disc list-inside text-gray-100 space-y-2 font-medium">
              {aboutData.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </motion.div>
          {/* Hobbies Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-gradient-to-br from-[#23242a]/90 to-[#181a1f]/80 border border-[#3b82f6]/40 rounded-3xl shadow-2xl p-10 flex flex-col overflow-hidden group"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#3b82f6]/40 via-white/10 to-[#5a6cff]/40 opacity-60 blur-sm z-10" />
            <h3 className="flex items-center gap-2 text-xl font-bold mb-2 bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-transparent bg-clip-text drop-shadow-lg">
              <Star className="w-6 h-6 text-[#FFD700]" /> Hobbies & Interests
            </h3>
            <ul className="list-disc list-inside text-gray-100 space-y-2 font-medium">
              {aboutData.hobbies.map((hobby, i) => (
                <li key={i}>{hobby}</li>
              ))}
            </ul>
          </motion.div>
          {/* Social/Streaming/Ads Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative bg-gradient-to-br from-[#23242a]/90 to-[#181a1f]/80 border border-[#3b82f6]/40 rounded-3xl shadow-2xl p-10 flex flex-col items-center overflow-hidden group"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#3b82f6]/40 via-white/10 to-[#5a6cff]/40 opacity-60 blur-sm z-10" />
            <h3 className="flex items-center gap-2 text-xl font-bold mb-4 bg-gradient-to-r from-[#3b82f6] to-[#5a6cff] text-transparent bg-clip-text drop-shadow-lg">
              <Share2 className="w-6 h-6 text-[#3b82f6]" /> Social Media AbuSwe7l
            </h3>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#3b82f6] to-[#5a6cff] text-white text-2xl shadow-lg hover:scale-110 transition-transform duration-200"
                  title={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            {/* Streaming Platform - Only Kick */}
            <div className="w-full flex flex-col items-center mb-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-semibold text-gray-200">Live on:</span>
                <a href={streamingPlatforms[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#3b82f6]/80 to-[#5a6cff]/80 text-white text-sm font-bold shadow hover:scale-105 transition-all">
                  <img src={streamingPlatforms[0].icon} alt={streamingPlatforms[0].name} className="w-5 h-5" />
                  Kick
                </a>
              </div>
            </div>
            {/* Ads Email */}
            <div className="flex items-center gap-2 mt-2">
              <span className="font-semibold text-gray-200">Business/Ads:</span>
              <a href={`mailto:${adsEmail}`} className="text-[#3b82f6] font-bold underline hover:text-[#5a6cff] transition-all">{adsEmail}</a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutAbuSwe7l; 
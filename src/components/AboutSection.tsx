import React from "react";
import { motion } from "framer-motion";
import { Youtube, Instagram, Twitter, MessageCircle, Send } from "lucide-react";
import { SiTiktok, SiSnapchat, SiDiscord } from "react-icons/si";
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@AbuSwe7l", label: "YouTube", bg: "bg-gradient-to-br from-[#23242a] to-[#181a1f] hover:from-[#2a2c33] hover:to-[#1f2127]" },
    { icon: SiTiktok, href: "https://www.tiktok.com/@abuswe7ll", label: "TikTok", bg: "bg-gradient-to-br from-[#23242a] to-[#181a1f] hover:from-[#2a2c33] hover:to-[#1f2127]" },
    { icon: Instagram, href: "https://www.instagram.com/abuswe7l?igsh=MWZvbmFjeTE4dWd1cw==", label: "Instagram", bg: "bg-gradient-to-br from-[#23242a] to-[#181a1f] hover:from-[#2a2c33] hover:to-[#1f2127]" },
    { icon: Twitter, href: "https://x.com/ASwe7l", label: "Twitter", bg: "bg-gradient-to-br from-[#23242a] to-[#181a1f] hover:from-[#2a2c33] hover:to-[#1f2127]" },
    { icon: SiSnapchat, href: "https://www.snapchat.com/add/abuswe7l", label: "Snapchat", bg: "bg-gradient-to-br from-[#23242a] to-[#181a1f] hover:from-[#2a2c33] hover:to-[#1f2127]" },
    { icon: Send, href: "https://kick.com/abuswe7l", label: "Kick", bg: "bg-gradient-to-br from-[#23242a] to-[#181a1f] hover:from-[#2a2c33] hover:to-[#1f2127]" },
    { icon: SiDiscord, href: "https://discord.gg/vx4UczGd", label: "Discord", bg: "bg-gradient-to-br from-[#23242a] to-[#181a1f] hover:from-[#2a2c33] hover:to-[#1f2127]" },
    { icon: MessageCircle, href: "https://www.whatsapp.com/channel/0029Valjotc8fewjWURDUS3l", label: "WhatsApp", bg: "bg-gradient-to-br from-[#23242a] to-[#181a1f] hover:from-[#2a2c33] hover:to-[#1f2127]" },
  ];

  const paymentLinks = [
    { href: "https://streamlabs.com/abuswe7l/tip", label: "PayPal", bg: "bg-gradient-to-br from-[#23242a] to-[#181a1f] hover:from-[#2a2c33] hover:to-[#1f2127]" },
    { href: "https://abnpay.co/s/NALJHe", label: "ABN Pay", bg: "bg-gradient-to-br from-[#23242a] to-[#181a1f] hover:from-[#2a2c33] hover:to-[#1f2127]" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1e293b] to-[#23242a] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(35,36,42,0.10),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#60a5fa] to-[#1e40af] drop-shadow-lg mb-3 sm:mb-4">About AbuSwe7l</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 drop-shadow max-w-2xl mx-auto">Discover the story behind your favorite gaming and streaming platform</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="modern-card bg-gradient-to-br from-[#23242a] to-[#181a1f] border border-gray-700/40 p-4 sm:p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#60a5fa] to-[#1e40af] mb-3 sm:mb-4 drop-shadow-lg">
                About AbuSwe7l
              </h3>
              <p className="text-base sm:text-lg text-gray-100 mb-4 sm:mb-6 max-w-xl drop-shadow">
                AbuSwe7l is a professional streamer and content creator from Saudi Arabia. Known for his passion and community spirit, he's one of the region's top streamers.
                As a member of Clan Power, he participates in top-tier tournaments and collaborations, sharing epic moments with fans around the world.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-white/90 text-sm sm:text-base">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#23242a] to-[#181a1f] mr-2 sm:mr-3 shadow-glow flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </span>
                  Daily live streams of popular games
                </li>
                <li className="flex items-center text-white/90 text-sm sm:text-base">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#23242a] to-[#181a1f] mr-2 sm:mr-3 shadow-glow flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </span>
                  Active community of players and followers
                </li>
                <li className="flex items-center text-white/90 text-sm sm:text-base">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#23242a] to-[#181a1f] mr-2 sm:mr-3 shadow-glow flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </span>
                  24/7 technical support
                </li>
                <li className="flex items-center text-white/90 text-sm sm:text-base">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#23242a] to-[#181a1f] mr-2 sm:mr-3 shadow-glow flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </span>
                  Exciting tournaments and valuable prizes
                </li>
              </ul>
              <Link to="/about-abuswe7l" className="inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-bold text-base sm:text-lg shadow hover:from-[#60a5fa] hover:to-[#3b82f6] hover:shadow-lg transition-all duration-300">
                Learn More About Us
              </Link>
            </div>
            <div className="relative mt-6 md:mt-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative w-full aspect-square rounded-2xl overflow-hidden group"
              >
                <img
                  src="https://cdn.discordapp.com/avatars/1275574902736424971/80c19f39d0d484c5694658466ea36a2d.webp?size=4096"
                  alt="AbuSwe7l Gaming"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent mix-blend-overlay group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500"></div>
                <div className="absolute inset-0 border-4 border-primary/30 rounded-2xl group-hover:border-primary/50 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
                  Verified Creator
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-gradient-to-r from-primary to-accent text-white px-3 sm:px-4 py-1 rounded-full text-xs font-medium shadow-glow"
              >
                Clan Power Member
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="modern-card bg-gradient-to-br from-[#23242a] to-[#181a1f] border border-gray-700/40 p-4 sm:p-6">
            <h4 className="text-lg sm:text-xl font-semibold text-gradient mb-3 sm:mb-4">Social Media AbuSwe7l</h4>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-2 sm:p-3 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white border border-[#2563eb] hover:from-[#60a5fa] hover:to-[#3b82f6] hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(90,108,255,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="modern-card bg-gradient-to-br from-[#23242a] to-[#181a1f] border border-gray-700/40 p-4 sm:p-6">
            <h4 className="text-lg sm:text-xl font-semibold text-gradient mb-3 sm:mb-4">Payment Methods</h4>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {paymentLinks.map((payment) => (
                <motion.a
                  key={payment.label}
                  href={payment.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-3 sm:p-4 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white border border-[#2563eb] hover:from-[#60a5fa] hover:to-[#3b82f6] hover:shadow-lg transition-all duration-300 text-sm sm:text-base`}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(90,108,255,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {payment.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

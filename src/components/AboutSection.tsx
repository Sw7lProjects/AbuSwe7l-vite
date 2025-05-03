import React from "react";
import { useTranslation } from "react-i18next";

import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
  FaKickstarterK,
  FaDiscord,
  FaWhatsapp,
  FaPaypal,
  FaMoneyBillWave,
} from "react-icons/fa";

const SocialButton = ({ icon: Icon, label, href, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 px-5 py-3 rounded-full text-white font-medium transition-all transform hover:scale-110 shadow-xl ${color}`}
  >
    <Icon size={24} />
    <span className="text-lg">{label}</span>
  </a>
);

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#111111] to-[#111111] text-white flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <img
              src="https://yt3.googleusercontent.com/6skf3aJYTrBh2Vz5MZ2qXaRvjUCxjkHtwZCTCTfSMZ95eSf7uPsDhdefIMGkyEHQeIPF474gIA=s900-c-k-c0x00ffffff-no-rj"
              alt="AbuSwe7l"
              className="w-48 h-48 rounded-full border-4 border-pink-600 shadow-xl animate-spin-slow"
            />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-1 text-sm rounded-full">
              {t("about.badge")}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-pink-500">AbuSwe7l</h1>
          <p className="text-md text-gray-400">{t("about.Content")}</p>

          <div className="flex gap-8 mt-4">
            <div className="bg-white/5 px-6 py-3 rounded-xl text-center">
              <p className="text-pink-400 font-semibold">{t("about.subscribersTitle")}</p>
              <p className="text-2xl font-bold">344K</p>
            </div>
            <div className="bg-white/5 px-6 py-3 rounded-xl text-center">
              <p className="text-blue-400 font-semibold">{t("about.discordTitle")}</p>
              <p className="text-2xl font-bold">22K</p>
            </div>
          </div>

          <p className="text-white mt-6">{t("about.follow")}❤️</p>

          <div className="grid grid-cols-3 gap-5 w-full justify-center">
            <SocialButton icon={FaYoutube} label="YouTube" href="#" color="bg-red-600" />
            <SocialButton icon={FaTiktok} label="TikTok" href="#" color="bg-black" />
            <SocialButton icon={FaInstagram} label="Instagram" href="#" color="bg-gradient-to-r from-pink-500 to-yellow-500" />
            <SocialButton icon={FaTwitter} label="Twitter" href="#" color="bg-blue-500" />
            <SocialButton icon={FaSnapchatGhost} label="Snapchat" href="#" color="bg-yellow-400 text-black" />
            <SocialButton icon={FaKickstarterK} label="Kick" href="#" color="bg-green-600" />
            <SocialButton icon={FaDiscord} label="Discord" href="#" color="bg-indigo-600" />
            <SocialButton icon={FaWhatsapp} label="WhatsApp" href="#" color="bg-green-500" />
          </div>

          <div className="flex gap-5 mt-6">
            <SocialButton icon={FaPaypal} label="PayPal" href="#" color="bg-blue-600" />
            <SocialButton icon={FaMoneyBillWave} label="ABN Pay" href="#" color="bg-purple-700" />
          </div>
        </div>

        <div className="text-left">
          <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
            {t("about.heading")}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">{t("about.bio1")}</p>
          <p className="text-gray-400 mb-8 leading-relaxed">{t("about.bio2")}</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {t("about.cards", { returnObjects: true }).map((card, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-xl">
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

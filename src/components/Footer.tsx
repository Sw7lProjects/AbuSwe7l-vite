import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react";
import { SiTiktok, SiSnapchat, SiDiscord } from "react-icons/si";
import { useTranslation } from "react-i18next";

// مكون KickIcon يستخدم الشعار الرسمي من ويكيميديا
const KickIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (
  props
) => (
  <img
    {...props}
    src="https://www.svgrepo.com/show/204346/kickstarter.svg"
    alt="Kick Logo"
    className="w-6 h-6"
  />
);
interface SocialItem {
  icon: React.ReactNode;
  url?: string;
  email?: string;
  label: string;
}

// قائمة الروابط الاجتماعية مع الأيقونات الصحيحة
const socialLinks: SocialItem[] = [
  { icon: <KickIcon />, label: "Kick", url: "https://kick.com/abuswe7l" },
  {
    icon: <Youtube className="w-6 h-6" />,
    label: "YouTube",
    url: "https://www.youtube.com/@AbuSwe7l",
  },
  {
    icon: <SiDiscord className="w-6 h-6" />,
    label: "Discord",
    url: "https://discord.gg/ru4RXet4",
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
    url: "https://www.instagram.com/abuswe7l",
  },
  {
    icon: <SiTiktok className="w-6 h-6" />,
    label: "TikTok",
    url: "https://www.tiktok.com/@abuswe7ll",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: "Twitter",
    url: "https://x.com/aswe7l",
  },
  {
    icon: <SiSnapchat className="w-6 h-6" />,
    label: "Snapchat",
    url: "https://www.snapchat.com/add/abuswe7l",
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const desc = t("footer.description");
  const quickItems = t("footer.quickLinks.items", {
    returnObjects: true,
  }) as string[];
  const adminItems = t("footer.administration.items", {
    returnObjects: true,
  }) as string[];
  const connect = t("footer.connect.items", { returnObjects: true }) as Array<{
    label: string;
    url?: string;
    email?: string;
  }>;
  const copyright = t("footer.copyright", { year });
  const privacy = t("footer.privacy");

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://cdn.discordapp.com/avatars/1275574902736424971/80c19f39d0d484c5694658466ea36a2d.webp?size=4096"
                alt="Logo"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                AbuSwe7l
              </span>
            </Link>

            <p className="text-sm opacity-75">{desc}</p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-4">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url ? item.url : `mailto:${item.email}`}
                  target={item.url ? "_blank" : undefined}
                  rel={item.url ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full shadow-inner hover:bg-opacity-20 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              {t("footer.quickLinks.heading")}
            </h3>
            <ul className="space-y-3 text-sm">
              {quickItems.map((text, i) => (
                <li key={i}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="inline-block hover:text-indigo-400 transition"
                  >
                    <Link to={`#${text.toLowerCase()}`}>{text}</Link>
                  </motion.span>
                </li>
              ))}
            </ul>
          </div>

          {/* Administration */}
          <div>
            <h3 className="font-semibold mb-4">
              {t("footer.administration.heading")}
            </h3>
            <ul className="space-y-3 text-sm">
              {adminItems.map((text, i) => (
                <li key={i}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="inline-block hover:text-indigo-400 transition"
                  >
                    <Link to={i === 0 ? "/admin-info" : "/terms-conditions"}>
                      {text}
                    </Link>
                  </motion.span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">
              {t("footer.connect.heading")}
            </h3>
            <ul className="space-y-3 text-sm opacity-75">
              {connect.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-400 transition"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>
                      {item.label}:{" "}
                      <a
                        href={`mailto:${item.email}`}
                        className="hover:text-indigo-400 transition"
                      >
                        {item.email}
                      </a>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 border-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs opacity-75">
          <p>{copyright}</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              to="/terms-conditions"
              className="hover:text-indigo-400 transition"
            >
              {adminItems[1]}
            </Link>
            <Link to="/privacy" className="hover:text-indigo-400 transition">
              {privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

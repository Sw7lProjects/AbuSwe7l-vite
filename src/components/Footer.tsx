import React from "react";
import { Link } from "react-router-dom";
import { Youtube, Instagram, Twitter } from "lucide-react";
import { SiTiktok, SiSnapchat, SiDiscord } from "react-icons/si";
import { KickIcon } from "./icons/KickIcon";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "YouTube", href: "https://www.youtube.com/@AbuSwe7l" },
    { name: "Kick", href: "https://kick.com/abuswe7l" },
    { name: "TikTok", href: "https://www.tiktok.com/@abuswe7ll" },
    { name: "Instagram", href: "https://www.instagram.com/abuswe7l?igsh=MWZvbmFjeTE4dWd1cw==" },
    { name: "Twitter", href: "https://x.com/ASwe7l" },
    { name: "Snapchat", href: "https://www.snapchat.com/add/abuswe7l" },
    { name: "Discord", href: "https://discord.gg/vx4UczGd" },
  ];

  const footerLinks = [
    { href: "/terms-conditions", label: "Terms & Conditions" },
    { href: "/admin-info", label: "Admin Info" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <footer className="w-full bg-background-dark border-t-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="space-y-3 sm:space-y-4">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <img
                src="https://yt3.googleusercontent.com/6skf3aJYTrBh2Vz5MZ2qXaRvjUCxjkHtwZCTCTfSMZ95eSf7uPsDhdefIMGkyEHQeIPF474gIA=s900-c-k-c0x00ffffff-no-rj"
                alt="AbuSwe7l Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary shadow-[0_0_8px_2px_#0066ffcc] bg-background-dark"
              />
              <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-200">
                AbuSwe7l
              </span>
            </Link>
            <p className="text-sm sm:text-base text-gray-400">
              Your ultimate destination for gaming entertainment and community interaction
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/admin-info" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors duration-200">
                  Admins
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors duration-200">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="text-sm sm:text-base text-gray-400">
                <span className="text-primary">Email:</span> saadas.yt@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-primary/20 text-center text-sm sm:text-base text-gray-400">
          <p>&copy; {new Date().getFullYear()} AbuSwe7l. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

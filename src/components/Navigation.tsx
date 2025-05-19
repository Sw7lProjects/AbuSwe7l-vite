import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/admin-info", label: "Admins" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/login", label: "Login" },
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center mt-4">
      <nav
        className="w-full max-w-6xl flex items-center justify-between px-4 md:px-6 py-2 bg-background-dark/70 rounded-2xl border-2 border-primary shadow-[0_0_16px_2px_#0066ffcc]"
        style={{ boxShadow: "0 0 16px 2px #0066ffcc" }}
      >
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="https://yt3.googleusercontent.com/6skf3aJYTrBh2Vz5MZ2qXaRvjUCxjkHtwZCTCTfSMZ95eSf7uPsDhdefIMGkyEHQeIPF474gIA=s900-c-k-c0x00ffffff-no-rj"
            alt="AbuSwe7l Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary shadow-[0_0_8px_2px_#0066ffcc] bg-background-dark"
          />
          <span className="text-2xl md:text-3xl font-extrabold text-white font-serif tracking-wide select-none group-hover:text-primary transition-colors duration-200">
            AbuSwe7l
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-4 right-4 md:left-auto md:right-auto bg-background-dark/95 md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 border-2 md:border-0 border-primary md:space-x-8 space-y-4 md:space-y-0 z-50`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="relative text-white font-bold text-lg transition-all duration-200 select-none group block"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="group-hover:text-primary group-hover:scale-110 transition-all duration-200 inline-block">
                  {link.label}
                  <span className="block h-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-full transition-all duration-300 w-0 group-hover:w-full mt-1"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
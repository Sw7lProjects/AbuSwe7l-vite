import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/admin-info", label: "Admins" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/login", label: "Login" },
];

const Navigation: React.FC = () => {
  return (
    <header className="w-full flex justify-center mt-4">
      <nav
        className="w-full max-w-6xl flex items-center justify-between px-6 py-2 bg-background-dark/70 rounded-2xl border-2 border-primary shadow-[0_0_16px_2px_#0066ffcc]"
        style={{ boxShadow: "0 0 16px 2px #0066ffcc" }}
      >
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="https://yt3.googleusercontent.com/6skf3aJYTrBh2Vz5MZ2qXaRvjUCxjkHtwZCTCTfSMZ95eSf7uPsDhdefIMGkyEHQeIPF474gIA=s900-c-k-c0x00ffffff-no-rj"
            alt="AbuSwe7l Logo"
            className="w-12 h-12 rounded-full border-2 border-primary shadow-[0_0_8px_2px_#0066ffcc] bg-background-dark"
          />
          <span className="text-3xl font-extrabold text-white font-serif tracking-wide select-none group-hover:text-primary transition-colors duration-200">
            AbuSwe7l
          </span>
        </Link>
        {/* Navigation Links */}
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="relative text-white font-bold text-lg transition-all duration-200 select-none group"
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
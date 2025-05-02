import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Monitor, Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navigation: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // i18n
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);

  const toggleLanguage = () => {
    const next = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(next);
    setLang(next);
  };

  // اضبط اتجاه الصفحة تلقائياً عند تغيير اللغة
  useEffect(() => {
    document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/terms-conditions", label: t("nav.terms") },
    { path: "/admin-info", label: t("nav.admins") },
    { path: "/Dashboard", label: t("Dashboard") },
    { path: "/", label: t("nav.login") },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[70%] lg:w-[60%]">
      <div
        className="px-6 py-4 shadow-xl backdrop-blur-md transition-all duration-300 flex items-center justify-between"
        style={{
          borderRadius: "9999px",
          background: "rgba(17, 24, 39, 0.7)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://cdn.discordapp.com/avatars/1275574902736424971/80c19f39d0d484c5694658466ea36a2d.webp?size=4096"
            alt="Logo"
            className="w-6 h-6"
          />
          <a className="text-xl font-bold tracking-tight">AbuSwe7l</a>
        </div>

        {/* Desktop Navigation + Language Switch */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* زر تبديل اللغة */}
          <button
            onClick={toggleLanguage}
            className="flex items-center text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 rounded-full py-2 px-4 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
          >
            <Globe className="w-5 h-5 mr-3 transition-transform duration-300 transform hover:rotate-180" />
            <span>{lang === "en" ? t("switch") : t("switch")}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center">
          {/* زر تبديل اللغة على الموبايل */}
          <button
            onClick={toggleLanguage}
            className="md:hidden text-gray-300 hover:text-white mr-4"
          >
            <Globe className="w-6 h-6" />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out mt-2 bg-gray-900/80 border border-gray-700 py-4 px-6 space-y-4 rounded-xl shadow-md backdrop-blur transform ${
          menuOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={`block text-sm font-medium ${
              isActive(link.path)
                ? "text-purple-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navigation;

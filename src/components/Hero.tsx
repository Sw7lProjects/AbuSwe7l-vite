import React from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="container relative z-10 text-white text-center px-4 py-24 md:py-36">
        <div className="inline-flex items-center mb-6 px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-purple-500/30 shadow-lg">
          <span className="h-2.5 w-2.5 bg-red-500 rounded-full animate-ping mr-2"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-200" dangerouslySetInnerHTML={{ __html: t("hero.status") }} />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 drop-shadow-md">
          {t("hero.title")}
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300" dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }} />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size={isMobile ? "default" : "lg"} className="bg-purple-600 hover:bg-purple-700 shadow-lg transition-all duration-300">
            <a href="https://kick.com/abuswe7l" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1">
              {t("hero.watch")}
            </a>
          </Button>
          <Button size={isMobile ? "default" : "lg"} variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm shadow-md transition-all">
            <a href="#streams" className="px-4 py-1">
              {t("hero.latest")}
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 -top-10 -left-10 animate-pulse" />
        <div className="absolute w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20 -bottom-10 -right-10 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;

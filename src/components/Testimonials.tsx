import React from "react";
import { useTranslation } from "react-i18next";

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const cards = t("testimonials.cards", { returnObjects: true }) as Array<{
    name: string;
    role: string;
    text: string;
    imgAlt: string;
    imgSrc: string;
  }>;

  return (
    <section id="testimonials" className="py-24 text-white">
      <div className="container text-center px-4">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
          {t("testimonials.heading")}
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-[1.03] transition duration-300">
              <div className="flex items-center mb-4">
                <img src={card.imgSrc} alt={card.imgAlt} className="w-14 h-14 rounded-full object-cover border-2 border-purple-500 shadow-md mr-4" />
                <div className="text-left">
                  <p className="font-semibold text-white">{card.name}</p>
                  <p className="text-sm text-purple-300">{card.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: card.text }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

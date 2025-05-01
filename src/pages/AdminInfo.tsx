import React from "react";
import Navigation from "../components/Navigation";
import AdminCard from "../components/AdminCard";
import { Shield } from "lucide-react";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const AdminInfo: React.FC = () => {
  const { t } = useTranslation();

  const headerText    = t("adminInfo.header");
  const aboutTitle    = t("adminInfo.about.title");
  const aboutText     = t("adminInfo.about.text");
  const contactTitle  = t("adminInfo.contact.title");
  const contactIntro  = t("adminInfo.contact.intro");
  const contactItems  = t("adminInfo.contact.items", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Navigation />
      <div className="h-20 md:h-28"></div>

      <main className="flex-1 px-4 py-10 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <Shield className="w-10 h-10 text-purple-400" />
            <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
              {headerText}
            </h1>
          </div>

          {/* About */}
          <section className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-10 mb-12 shadow-lg border border-white/10">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">{aboutTitle}</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">{aboutText}</p>
          </section>

          {/* Cards */}
          <AdminCard />

          {/* Contact */}
          <section className="mt-20 bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg border border-white/10">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">{contactTitle}</h2>
            <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">{contactIntro}</p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 text-base">
              {contactItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminInfo;
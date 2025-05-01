import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const useCountUp = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      const current = Math.floor(progressRatio * target);
      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
};

//  تنسيق الأرقام إلى K
const formatK = (number: number): string => {
  return `${Math.floor(number)}K`;
};

const AboutSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const heading = t("about.heading");
  const bio1 = t("about.bio1");
  const bio2 = t("about.bio2");
  const badge = t("about.badge");
  const cards = t("about.cards", { returnObjects: true }) as Array<{ title: string; text: string }>;

  const subscribersTarget = 344;
  const discordMembersTarget = 22;

  const subscribers = useCountUp(subscribersTarget, 2000);
  const discordMembers = useCountUp(discordMembersTarget, 2000);

  return (
    <section id="about" className="py-24 text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">

        {/*  الشعار والإحصائيات */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative flex flex-col items-center">
            <img
              src="https://yt3.googleusercontent.com/6skf3aJYTrBh2Vz5MZ2qXaRvjUCxjkHtwZCTCTfSMZ95eSf7uPsDhdefIMGkyEHQeIPF474gIA=s900-c-k-c0x00ffffff-no-rj"
              alt="AbuSwe7l Logo"
              className="w-40 h-40 rounded-full object-cover border-4 border-pink-500 animate-spin-slow shadow-lg"
            />
            <div className="absolute -bottom-4">
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md">{badge}</Badge>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-pink-400">AbuSwe7l</h3>
          <p className="text-sm text-gray-300">Saudi Arabian Content Creator</p>

          <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md shadow-lg text-center">
              <h4 className="text-pink-400 font-semibold mb-1">{t("about.subscribersTitle", "المشتركين")}</h4>
              <p className="text-lg font-bold">{formatK(subscribers)}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md shadow-lg text-center">
              <h4 className="text-blue-400 font-semibold mb-1">{t("about.discordTitle", "أعضاء الديسكورد")}</h4>
              <p className="text-lg font-bold">{formatK(discordMembers)}</p>
            </div>
          </div>
        </div>

        {/*  المحتوى */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
              {heading}
            </h2>
            
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">{bio1}</p>
          <p className="text-gray-400 mb-6 leading-relaxed">{bio2}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <Card
                key={idx}
                className="bg-white/5 border border-white/10 backdrop-blur-md shadow hover:scale-[1.03] transition"
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">{card.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

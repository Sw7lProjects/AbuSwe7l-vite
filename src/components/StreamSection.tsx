import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StreamSection: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("kick");
  const { t } = useTranslation();

  return (
    <section id="streams" className="py-24 text-white">
      <div className="container text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
          {t("streams.heading")}
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">{t("streams.subtitle")}</p>

        <Tabs defaultValue="kick" className="w-full max-w-4xl mx-auto" onValueChange={setSelectedPlatform}>
          <TabsList className="flex justify-center gap-4 mb-6">
            <TabsTrigger value="kick" className="px-6 py-2 bg-white/10 text-white border border-white/20 rounded-md hover:bg-purple-700 transition">
              {t("streams.tabs.kick")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="kick">
            <Card className="bg-white/5 border border-purple-800/40 shadow-xl backdrop-blur-md">
              <CardContent className="p-0 overflow-hidden aspect-video relative">
                <iframe
                  src="https://kick.com/abuswe7l"
                  className="w-full h-full"
                  title="Kick Stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4">
                  <h3 className="text-3xl font-bold text-pink-400 mb-2">{t("streams.kick.title")}</h3>
                  <p className="text-gray-300">{t("streams.kick.unavailable")}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default StreamSection;

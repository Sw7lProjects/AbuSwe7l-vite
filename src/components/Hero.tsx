import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                AbuSwe7l Gaming
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            AbuSwe7l is a content creator on the Kick platform and he is in Clan Power.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>
    </div>
  )
}
export default Hero;
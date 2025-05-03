"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function FloatingPaper({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-full">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            {/* استبدال الأيقونة بشعار كاميرا بث مباشر */}
            <img
              src="https://sdmntprwestus.oaiusercontent.com/files/00000000-6948-6230-a636-931350ed200d/raw?se=2025-05-04T02%3A29%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=a7815fff-0db0-5369-9129-8b833a838fdb&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-03T23%3A06%3A33Z&ske=2025-05-04T23%3A06%3A33Z&sks=b&skv=2024-08-04&sig=aW/LcqR/hLKvsYDZ2NaTRQDJspN6ZIQx2K5KuL3ofgE%3D" // رابط شعار كاميرا يوتيوب
              alt="Streamer Logo"
              className="w-8 h-8"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

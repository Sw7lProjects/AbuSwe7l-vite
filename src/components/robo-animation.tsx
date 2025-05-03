"use client"

import { motion } from "framer-motion"

export function RoboAnimation() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          {/* استبدال الأيقونة بشعارك */}
          <img
            src="https://cdn.discordapp.com/avatars/1107071123738333224/c3cf04eac51014a32a55596138b38567.png?size=1024&format=webp&width=768&height=768"
            alt="Logo"
            className="w-32 h-32 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
}

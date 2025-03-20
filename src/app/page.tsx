"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import YoutubeVideo from "@/components/youtube-video";

export default function Home() {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatePresence>
        {!revealed ? (
          <motion.div
            key="reveal-button"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 z-50"
            onClick={handleReveal}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-4xl md:text-6xl font-bold text-white p-8 cursor-pointer rounded-xl border-4 border-white hover:bg-white/10 transition-colors"
            >
              REVELAR A CHAVE API
            </motion.button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-pink-500">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
            A Verdadeira chave da API são os trotes que caímos pelo caminho...
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            revealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <YoutubeVideo
            video="https://youtu.be/dQw4w9WgXcQ"
            playing={revealed}
          />
        </motion.div>
      </div>
    </main>
  );
}

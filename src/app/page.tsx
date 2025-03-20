"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import YoutubeVideo from "@/components/youtube-video";

export default function Home() {
  const [showVideo] = useState(true);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
          A Verdadeira chave da API são os trotes que caímos pelo caminho...
        </h1>
      </motion.div>

      {showVideo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <YoutubeVideo video="https://youtu.be/dQw4w9WgXcQ" />
        </motion.div>
      )}
    </main>
  );
}

"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Background.png" 
          alt="Poetry background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* overlay */}
      </div>

      {/* Content */}
      <div className="hero-container">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          Paulah&apos;s Poems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-description"
        >
          Where words flow like rivers of meaning, painting emotions in verses.
        </motion.p>

        <motion.a
          href="#poems"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hero-button"
        >
          Explore Poems
          <ArrowDown className="hero-icon" />
        </motion.a>
      </div>
    </main>
  );
}

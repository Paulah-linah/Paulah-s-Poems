"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const poems = [
  {
    title: "The Window of Reflection",
    excerpt: "A quiet gaze, a world beyond the glass…",
  },
  {
    title: "The Ocean of Words",
    excerpt: "Waves crash, carrying verses untold…",
  },
  {
    title: "Midnight Whispers",
    excerpt: "Shadows speak in delicate tones of night…",
  },
  {
    title: "Dancing Flames",
    excerpt: "Every flicker, a story of warmth and longing…",
  },
];

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* Landing Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/Background.png" 
            alt="Poetry background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50" /> {/* overlay */}
        </div>

        {/* Floating particles */}
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-20, -100, -180],
                x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="hero-container">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hero-title"
          >
            Paulah&apos;s Poems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="hero-description"
          >
            Where words flow like rivers of meaning, painting emotions in verses.
          </motion.p>

          <motion.a
            href="#poems"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "backOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-button"
          >
            Explore Poems
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="hero-icon" />
            </motion.div>
          </motion.a>
        </div>
      </section>

      {/* Poems Section */}
      <section
        id="poems"
        className="poems-section"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="poems-title"
        >
          Featured Poems
        </motion.h2>

        <div className="poems-grid">
          {poems.map((poem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="poem-card"
            >
              <h3 className="poem-title">{poem.title}</h3>
              <p className="poem-excerpt">{poem.excerpt}</p>
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="poem-link"
              >
                Read More →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}



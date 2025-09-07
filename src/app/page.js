"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import Image from "next/image";

const poems = [
  {
    title: "The Window of Reflection",
    excerpt: "A quiet gaze, a world beyond the glass…",
    full: `Through the glass, the world unfolds,
Whispers of silence, stories untold.
In still reflection, truth is clear,
A mirror of dreams, both far and near.`,
    image: "/poem-images/Background.png", // Add your image path here
  },
  {
    title: "The Ocean of Words",
    excerpt: "Waves crash, carrying verses untold…",
    full: `Each wave a stanza, fierce yet free,
Carving poems into the sea.
Tides of meaning, vast and deep,
Secrets the ocean dares to keep.`,
    image: "/poem-images/ocean-waves.jpg", // Add your image path here
  },
  {
    title: "Midnight Whispers",
    excerpt: "Shadows speak in delicate tones of night…",
    full: `The stars lean low, the silence speaks,
Moonlight drips in silver streaks.
Whispers linger in the air,
Nighttime secrets everywhere.`,
    image: "/poem-images/midnight-stars.jpg", // Add your image path here
  },
  {
    title: "Dancing Flames",
    excerpt: "Every flicker, a story of warmth and longing…",
    full: `The fire sways, its rhythm bold,
Stories shimmer, stories told.
Each spark a memory, burning bright,
A fleeting dance in endless night.`,
    image: "/poem-images/dancing-flames.jpg", // Add your image path here
  },
];

export default function Home() {
  const [selectedPoem, setSelectedPoem] = useState(null);

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
              <motion.button
                onClick={() => setSelectedPoem(poem)}
                whileHover={{ x: 5 }}
                className="poem-link"
              >
                Read More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedPoem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedPoem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="poem-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPoem(null)}
                className="poem-modal-close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="poem-modal-layout">
                {/* Image Section */}
                <div className="poem-modal-image">
                  <Image
                    src={selectedPoem.image}
                    alt={selectedPoem.title}
                    width={400}
                    height={300}
                    className="poem-image"
                  />
                </div>

                {/* Text Section */}
                <div className="poem-modal-text">
                  <h3 className="poem-modal-title">
                    {selectedPoem.title}
                  </h3>
                  <p className="poem-modal-content">
                    {selectedPoem.full}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}



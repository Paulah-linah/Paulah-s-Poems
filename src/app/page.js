"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import Image from "next/image";

const poems = [
  {
    title: "Turmoil",
    excerpt: "They cut like blades…",
    full: `Can you see these things thin?
They get under your skin,
They cut like blades,
You can't take it in,
All they do is form a blaze.`,
    image: "/poem-images/Turmoil.jpeg", 
  },
  {
    title: "Ease",
    excerpt: "All moments were spent within…",
    full: `Why do you spread yourself so thin?
All moments were spent within,
Suck it up, let yourself begin,
Give a rest to your being,
Get past those things.`,
    image: "/poem-images/Ease.jpeg", 
  },
  {
    title: "Hush My Love",
    excerpt: "There there, it doesn't have to be…",
    full: `These are the words I say to me,
There there, it doesn't have to be,
How it hurts, are these stings from bees?
Every string attached, its overwhelming me,
I hide my face from thee, coz no one needs to see,
They say you need to be alone to calm down,
So all I need right now is me.`,
    image: "/poem-images/Hush.jpeg", 
  },
  {
    title: "Solitude",
    excerpt: "Open space fears my return…",
    full: `Let me give myself time,
I'll let the silence fill the void this time,
As i gather composure, surely there's no crime,
Open space should fear my return,
For peace of mind I'll find.
`,
    image: "/poem-images/Solitude.jpeg", 
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
            src="/Background.jpg" 
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



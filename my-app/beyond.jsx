"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace photo paths with your own images (e.g. in /public/beyondthecode/)
const CARDS = [
  {
    id: "nyikaphant",
    name: "Nyikaphant",
    tagline: "Elephant-inspired digital craft",
    photo: "", // e.g. "/beyondthecode/nyikaphant.jpg" — leave blank to keep the placeholder
    accent: "#D97757",
    details:
      "Nyikaphant blends bold pattern work with storytelling rooted in the wild. Every piece starts as a sketch before it becomes code.",
    links: [
      { label: "Instagram", url: "https://instagram.com/nyikaphant" },
      { label: "Twitter", url: "https://twitter.com/nyikaphant" },
    ],
  },
  {
    id: "mwanartu",
    name: "mwanARTu",
    tagline: "Contemporary African illustration",
    photo: "",
    accent: "#3B7A57",
    details:
      "mwanARTu explores identity and heritage through color-driven illustration, moving between traditional media and digital tools.",
    links: [
      { label: "Instagram", url: "https://instagram.com/mwanartu" },
      { label: "Behance", url: "https://behance.net/mwanartu" },
    ],
  },
  {
    id: "ecohearit",
    name: "Ecohearit",
    tagline: "Sound, sustainability, and story",
    photo: "",
    accent: "#3E6B9C",
    details:
      "Ecohearit is a project about listening — to nature, to community, to the quiet parts of the environment we usually miss.",
    links: [
      { label: "SoundCloud", url: "https://soundcloud.com/ecohearit" },
      { label: "Instagram", url: "https://instagram.com/ecohearit" },
    ],
  },
  {
    id: "gallery",
    name: "Gallery",
    tagline: "A running collection of work",
    photo: "",
    accent: "#8A5FBF",
    details:
      "A rotating gallery of finished pieces, experiments, and works in progress from everything above.",
    links: [{ label: "View full gallery", url: "/gallery" }],
  },
];

// Simple placeholder shown on a card when no photo is set yet
const CardPlaceholder = ({ accent, name }) => (
  <div
    className="absolute inset-0 flex items-center justify-center"
    style={{ background: `linear-gradient(160deg, ${accent}33, ${accent}11)` }}
  >
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-semibold"
      style={{ backgroundColor: accent }}
    >
      {name.charAt(0)}
    </div>
  </div>
);

const FAN_ROTATIONS = [-9, -3, 3, 9];
const FAN_OFFSETS = [0, 34, 68, 102]; // px, left-to-right stacking

const BeyondTheCode = () => {
  const [activeId, setActiveId] = useState(null);
  const active = CARDS.find((c) => c.id === activeId);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
      className="relative flex flex-col items-center justify-center py-24 px-6"
    >
      <h2 className="text-2xl font-medium mb-16 text-neutral-800">Beyond The Code</h2>

      {/* Fanned card stack */}
      <div className="relative flex items-center" style={{ height: 280 }}>
        {CARDS.map((card, i) => (
          <motion.button
            key={card.id}
            onClick={() => setActiveId(card.id)}
            initial={{ rotate: FAN_ROTATIONS[i], y: 0 }}
            whileHover={{ y: -20, scale: 1.04, zIndex: 10 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              position: i === 0 ? "relative" : "absolute",
              left: i === 0 ? 0 : FAN_OFFSETS[i],
              zIndex: i,
              transformOrigin: "bottom center",
            }}
            className="w-44 h-64 rounded-2xl bg-white border border-neutral-200 shadow-lg
                       cursor-pointer overflow-hidden"
          >
            {/* Photo area (or placeholder until a real photo is set) */}
            <div className="relative w-full h-full">
              {card.photo ? (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${card.photo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ) : (
                <CardPlaceholder accent={card.accent} name={card.name} />
              )}

              {/* Name label on the exposed left edge — stays visible even when a later
                  card overlaps the rest of this one, like a corner index on a playing card */}
              <div
                className="absolute top-3 left-2 bottom-3 flex items-start"
                style={{ writingMode: "vertical-rl" }}
              >
                <span
                  className="px-1 py-2 rounded-full text-[11px] font-semibold tracking-wide text-white whitespace-nowrap"
                  style={{ backgroundColor: card.accent }}
                >
                  {card.name}
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Expanded bubble */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-6"
          >
            <motion.div
              key="bubble"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              <div className="relative h-56 w-full">
                {active.photo ? (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${active.photo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ) : (
                  <CardPlaceholder accent={active.accent} name={active.name} />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900">{active.name}</h3>
                <p className="text-sm text-neutral-500 mt-1">{active.tagline}</p>
                <p className="text-neutral-700 mt-4 leading-relaxed">{active.details}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {active.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-neutral-300 text-sm
                                 text-neutral-700 hover:bg-neutral-100 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setActiveId(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 shadow
                           flex items-center justify-center text-neutral-600 hover:bg-white"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default BeyondTheCode;

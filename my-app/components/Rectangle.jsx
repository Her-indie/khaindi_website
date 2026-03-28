"use client";
import { animate, motion } from "framer-motion";

//variants
const rectangleVariants = {
  initial: {
    y: "-100%",
    height: "100%",
  },

  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "-100%"],
    height: ["0%", "100%"],
  },
};

const Rectangle = () => {
  return (
    <>
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.4, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-30 bg-[#1a0505]"
      />

      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.25, duration: 0.6, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-20 bg-[#2f0e07cc]"
      />


      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.35, duration: 0.8, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-20 bg-[#4b1d1499]"
      />

      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.45, duration: 1, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-20 bg-[#6e322466]"
      />
    </>
  );
};

export default Rectangle;

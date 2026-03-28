"use client";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      Portfolio
    </motion.section>
  );
};

export default Portfolio;

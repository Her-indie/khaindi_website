"use client";
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      Articles
    </motion.section>
  );
};

export default Articles;

"use client";

import { motion } from "framer-motion";

const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

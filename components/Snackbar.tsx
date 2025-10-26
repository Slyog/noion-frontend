"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Snackbar({ show, text }: { show: boolean; text: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ivory px-5 py-2 text-night shadow-gold-glow"
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

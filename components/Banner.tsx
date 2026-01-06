"use client";

import { motion } from "framer-motion";

export function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-green-500 text-white py-3 text-center relative z-10"
    >
      <p className="text-sm font-medium">
        Launching Inbound 360 | The tool behind our journey to 523 demos and a
        $1.5M pipeline.
      </p>
    </motion.div>
  );
}


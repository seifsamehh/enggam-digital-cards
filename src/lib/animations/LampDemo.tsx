"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

import localFont from "next/font/local";

// Tanker font
const tanker = localFont({
  src: [
    {
      path: "../../../public/fonts/Tanker/Tanker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h3
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={`${tanker.className} mt-8 bg-gradient-to-br from-background dark:from-white to-slate-400 py-4 bg-clip-text text-center text-8xl tracking-tight text-transparent`}
      >
        Who we are?
      </motion.h3>
      <motion.p
        initial={{ opacity: 0.5, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="max-w-2xl text-center text-white"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
        praesentium, error tempore ipsam molestiae illum deleniti dolor quia
        ullam placeat sunt recusandae, voluptatem omnis! Possimus tenetur omnis
        vero laudantium ab.
      </motion.p>
    </LampContainer>
  );
}

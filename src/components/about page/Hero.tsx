"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";

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

const Hero = () => {
  return (
    <section className="about-hero">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <h1
            className={`${tanker.className} text-3xl md:text-7xl font-bold dark:text-white text-center`}
          >
            What is ENGGAM?
          </h1>
          <p className="text-base md:text-3xl dark:text-neutral-200 py-4 max-w-4xl text-center">
            enggam is an e-commerce website that specializes in selling a wide
            range of digital cards, including game cards, gift cards, and
            payment cards. Our mission is to provide a convenient and secure
            platform for users to purchase digital cards easily.
          </p>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;

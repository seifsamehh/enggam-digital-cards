"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

export default function Loading() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to("body", {
      overflow: "hidden",
    })
      .to(".preloader .text-container", {
        duration: 0,
        opacity: 1,

        ease: "Power3.easeOut",
      })
      .from(".preloader .text-container h1", {
        duration: 1.5,
        delay: 0.2,
        y: 200,
        skewY: 10,
        stagger: 0.4,

        ease: "Power3.easeOut",
      })
      .to(".preloader .text-container h1", {
        duration: 1.2,
        y: 200,
        skewY: -20,
        stagger: 0.2,

        ease: "Power3.easeOut",
      })
      .to(".preloader", {
        duration: 1,

        height: "0vh",
        ease: "Power3.easeOut",
      })
      .to(
        "body",
        {
          overflow: "auto",
        },
        "-=1"
      )
      .to(".preloader", {
        display: "none",
      });
  });
  return (
    <section className="loading-screen">
      <div className="preloader">
        <div className="text-container">
          <h1 className={`${tanker.className} big-text`}>Enggam</h1>
          <h1 className={`${tanker.className} big-text`}>Digital</h1>
          <h1 className={`${tanker.className} big-text`}>Cards</h1>
        </div>
      </div>
    </section>
  );
}

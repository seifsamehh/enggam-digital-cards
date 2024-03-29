import { CanvasRevealEffectDemo } from "@/lib/animations/CanvasRevealEffectDemo";

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

function Categories() {
  return (
    <section className="categories">
      <h2
        className={`${tanker.className} text-center min-[290px]:text-6xl md:text-8xl`}
      >
        Categories
      </h2>
      <CanvasRevealEffectDemo />
    </section>
  );
}

export default Categories;

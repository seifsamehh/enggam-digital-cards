import { InfiniteMovingCardsDemo } from "@/lib/animations/InfiniteMovingCardsDemo";
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

export default function Testimonals() {
  return (
    <section className="partners">
      <h2
        className={`${tanker.className} text-center min-[290px]:text-6xl md:text-8xl`}
      >
        What people says?
      </h2>
      <InfiniteMovingCardsDemo />
    </section>
  );
}

import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroProps } from "../../../types/HeroProps";

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

export function Hero({ h1Data, pData }: HeroProps) {
  return (
    <div className="h-[40rem] w-full relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className={`${tanker.className} relative z-10 text-lg md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-600 text-center font-bold`}
        >
          {h1Data}
        </h1>
        <p className="text-neutral-500 dark:text-neutral-100 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
          {pData}
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

import HeaderHome from "@/components/shared/HeaderHome";
import SaleBanner from "@/components/shared/SaleBanner";
import localFont from "next/font/local";

// Tanker font
const tanker = localFont({
  src: [
    {
      path: "../../../../public/fonts/Tanker/Tanker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function page() {
  return (
    <>
      <SaleBanner />
      <HeaderHome />
      <main className="home-page min-h-screen flex justify-center items-center">
        <h1 className={`${tanker.className} min-[290px]:text-4xl md:text-8xl`}>
          Under Construction
        </h1>
      </main>
    </>
  );
}

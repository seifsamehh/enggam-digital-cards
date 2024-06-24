import { Hero } from "@/components/categories/Hero";
import GameBoxs from "@/components/game cards/GameBoxs";
import Footer from "@/components/shared/Footer";
import HeaderHome from "@/components/shared/HeaderHome";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import localFont from "next/font/local";

// Tanker font
const tanker = localFont({
  src: [
    {
      path: "../../../../../../public/fonts/Tanker/Tanker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();

  return (await isAuthenticated()) ? (
    <>
      <HeaderHome />
      <section className="game-cards protected py-6">
        <Hero
          h1Data="Game Cards"
          pData="Game cards, also known as gaming gift cards or gaming vouchers, are prepaid cards specifically designed for use in gaming platforms, allowing users to purchase games, downloadable content (DLC), in-game items."
        />
        <GameBoxs />
      </section>
      <Footer />
    </>
  ) : (
    <section className="game-cards non-protected min-h-screen flex justify-center items-center gap-6 flex-col bg-cyan-500 text-white">
      <h1 className={`${tanker.className} text-9xl`}>unauthorized</h1>
      <p>
        This page is protected, please{" "}
        <LoginLink className="border-b-2 border-solid border-b-white">
          Login
        </LoginLink>{" "}
        to view it
      </p>
    </section>
  );
};

export default page;

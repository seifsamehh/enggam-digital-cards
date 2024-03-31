import HeaderHome from "@/components/shared/HeaderHome";
import SaleBanner from "@/components/shared/SaleBanner";

import dynamic from "next/dynamic";

const Welcome = dynamic(() => import("@/components/home page/Welcome"));

export default function page() {
  return (
    <>
      <SaleBanner />
      <HeaderHome />
      <main className="home-page min-h-screen flex justify-center items-center">
        <Welcome />
      </main>
    </>
  );
}

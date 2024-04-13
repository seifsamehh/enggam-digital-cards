import Feedback from "@/components/landing page/Feedback";
import Footer from "@/components/shared/Footer";
import HeaderHome from "@/components/shared/HeaderHome";
import SaleBanner from "@/components/shared/SaleBanner";

import dynamic from "next/dynamic";

const Welcome = dynamic(() => import("@/components/home page/Welcome"));
const TopSeller = dynamic(() => import("@/components/home page/TopSeller"));
const TopSale = dynamic(() => import("@/components/home page/TopSale"));
const Categories = dynamic(() => import("@/components/home page/Categories"));

export default function page() {
  return (
    <>
      <SaleBanner />
      <HeaderHome />
      <main className="home-page">
        <Welcome />
        <TopSeller />
        <TopSale />
        <Categories />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}

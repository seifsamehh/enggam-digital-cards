import Categories from "@/components/home page/Categories";
import TopSale from "@/components/home page/TopSale";
import TopSeller from "@/components/home page/TopSeller";
import Welcome from "@/components/home page/Welcome";
import Feedback from "@/components/landing page/Feedback";
import Footer from "@/components/shared/Footer";
import HeaderHome from "@/components/shared/HeaderHome";
import SaleBanner from "@/components/shared/SaleBanner";

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

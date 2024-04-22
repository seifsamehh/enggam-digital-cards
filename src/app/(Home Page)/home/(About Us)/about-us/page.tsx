import HeaderHome from "@/components/shared/HeaderHome";
import Footer from "@/components/shared/Footer";
import Features from "@/components/about page/Features";
import Team from "@/components/about page/Team";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/about page/Hero"));

const page = () => {
  return (
    <>
      <HeaderHome />
      <main className="about-us-page">
        <Hero />
        <Features />
        <Team />
      </main>
      <Footer />
    </>
  );
};

export default page;

import HeaderHome from "@/components/shared/HeaderHome";
import Footer from "@/components/shared/Footer";
import Features from "@/components/about page/Features";
import Team from "@/components/about page/Team";
import dynamic from "next/dynamic";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Header from "@/components/shared/Header";

const Hero = dynamic(() => import("@/components/about page/Hero"));

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  return (await isAuthenticated()) ? (
    <>
      <HeaderHome />
      <main className="about-us-page">
        <Hero />
        <Features />
        <Team />
      </main>
      <Footer />
    </>
  ) : (
    <>
      <Header />
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

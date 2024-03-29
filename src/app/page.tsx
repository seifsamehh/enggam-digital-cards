import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/landing page/Hero"));
const About = dynamic(() => import("@/components/landing page/About"));
const Categories = dynamic(
  () => import("@/components/landing page/Categories")
);
const Testimonals = dynamic(
  () => import("@/components/landing page/Testimonals")
);
const Partners = dynamic(() => import("@/components/landing page/Partners"));

const Feedback = dynamic(() => import("@/components/landing page/Feedback"));

export default function Home() {
  return (
    <>
      <Header />
      <main className="landing-page">
        <Hero />
        <About />
        <Categories />
        <Testimonals />
        <Partners />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}

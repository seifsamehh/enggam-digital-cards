import { Hero } from "@/components/categories/Hero";
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
      <section className="software-cards protected">
        <Hero h1Data="Software Cards" pData="Buy software cards online" />
      </section>
      <Footer />
    </>
  ) : (
    <section className="software-cards non-protected min-h-screen flex justify-center items-center gap-6 flex-col bg-cyan-500 text-white">
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

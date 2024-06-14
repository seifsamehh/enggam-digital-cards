import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeaderHome from "@/components/shared/HeaderHome";
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

const PrivacyPage = async () => {
  const { isAuthenticated } = getKindeServerSession();
  return (await isAuthenticated()) ? (
    <>
      <HeaderHome />
      <section className="privacy protected py-6">
        <div className="container">
          <h1
            className={`${tanker.className} text-3xl md:text-8xl text-center`}
          >
            Privacy & Policy
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            similique provident natus, cumque ducimus dolorem unde atque ea
            tenetur adipisci iste reiciendis veritatis quos, cum reprehenderit
            cupiditate nam eum corporis.
          </p>
        </div>
      </section>
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <section className="privacy non-protected py-6">
        <div className="container">
          <h1
            className={`${tanker.className} text-3xl md:text-8xl text-center`}
          >
            Privacy & Policy
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            similique provident natus, cumque ducimus dolorem unde atque ea
            tenetur adipisci iste reiciendis veritatis quos, cum reprehenderit
            cupiditate nam eum corporis.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPage;

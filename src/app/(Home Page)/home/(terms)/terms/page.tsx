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

const TermsPage = async () => {
  const { isAuthenticated } = getKindeServerSession();
  return (await isAuthenticated()) ? (
    <>
      <HeaderHome />
      <section className="terms protected py-6">
        <div className="container">
          <h1
            className={`${tanker.className} text-3xl md:text-8xl text-center`}
          >
            Terms & Conditions
          </h1>
          <p>
            These Terms of Service govern your rights and obligations, as users
            of the portals administered and managed by Enggam otherwise provided
            by Enggam, all new portals introduced and managed by Enggam shall be
            governed by these Terms of Service. By registering an account with
            Enggam and accessing any of the Portals, you acknowledge and accept
            that your usage of the Portals (or any of them) shall be governed by
            these Terms of Service and any other specific rules, procedures,
            terms and conditions for the products, services or facilities
            offered as determined or as may be amended by Enggam at any time or
            from time to time at its absolute discretion.
          </p>
        </div>
      </section>
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <section className="terms non-protected py-6">
        <div className="container">
          <h1
            className={`${tanker.className} text-3xl md:text-8xl text-center`}
          >
            Terms & Conditions
          </h1>
          <p>
            These Terms of Service govern your rights and obligations, as users
            of the portals administered and managed by Enggam otherwise provided
            by Enggam, all new portals introduced and managed by Enggam shall be
            governed by these Terms of Service. By registering an account with
            Enggam and accessing any of the Portals, you acknowledge and accept
            that your usage of the Portals (or any of them) shall be governed by
            these Terms of Service and any other specific rules, procedures,
            terms and conditions for the products, services or facilities
            offered as determined or as may be amended by Enggam at any time or
            from time to time at its absolute discretion.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsPage;

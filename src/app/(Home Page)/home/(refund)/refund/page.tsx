import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeaderHome from "@/components/shared/HeaderHome";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import localFont from "next/font/local";
import Link from "next/link";

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

const RefundPage = async () => {
  const { isAuthenticated } = getKindeServerSession();
  return (await isAuthenticated()) ? (
    <>
      <HeaderHome />
      <section className="refund protected py-6">
        <div className="container">
          <h1
            className={`${tanker.className} text-3xl md:text-8xl text-center`}
          >
            Refund Policy
          </h1>
          <p>
            We don’t accept return or refund once your order is processed , but
            we guarantee that every code is correct and valid. If you have any
            problem we are happy to help you 24/7 , you can chat with us through
            our Facebook Page : 
            <Link
              href="https://www.facebook.com/enggam.co/"
              target="_blank"
              title="facebook"
            >
              https://www.facebook.com/enggam.co/
            </Link>
             Send Email To : 
            <Link
              href="mailto:enggam729@gmail.com"
              target="_blank"
              title="Email"
            >
              enggam729@gmail.com
            </Link>
             WhatsUp on 
            <Link
              href="https://wa.me/1014402598"
              target="_blank"
              title="Whatsapp"
            >
              +201014402598
            </Link>
             Once Bought and Delivered , cannot be returned , nor refunded So
            Please make sure to select the right product , with the right
            country code and\or in the right currency before you purchase it ,
            as we cannot take products back , nor refund or exchange products
            that have already been paid and delivered.
          </p>
        </div>
      </section>
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <section className="refund non-protected py-6">
        <div className="container">
          <h1
            className={`${tanker.className} text-3xl md:text-8xl text-center`}
          >
            Refund Policy
          </h1>
          <p>
            We don’t accept return or refund once your order is processed , but
            we guarantee that every code is correct and valid. If you have any
            problem we are happy to help you 24/7 , you can chat with us through
            our Facebook Page : 
            <Link
              href="https://www.facebook.com/enggam.co/"
              target="_blank"
              title="facebook"
            >
              https://www.facebook.com/enggam.co/
            </Link>
             Send Email To : 
            <Link
              href="mailto:enggam729@gmail.com"
              target="_blank"
              title="Email"
            >
              enggam729@gmail.com
            </Link>
             WhatsUp on 
            <Link
              href="https://wa.me/1014402598"
              target="_blank"
              title="Whatsapp"
            >
              +201014402598
            </Link>
             Once Bought and Delivered , cannot be returned , nor refunded So
            Please make sure to select the right product , with the right
            country code and\or in the right currency before you purchase it ,
            as we cannot take products back , nor refund or exchange products
            that have already been paid and delivered.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RefundPage;

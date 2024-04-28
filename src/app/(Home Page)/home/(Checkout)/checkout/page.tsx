import Checkout from "@/components/checkout page/Checkout";
import Footer from "@/components/shared/Footer";
import HeaderHome from "@/components/shared/HeaderHome";

const page = () => {
  return (
    <>
      <HeaderHome />
      <section className="checkout-page">
        <Checkout />
      </section>
      <Footer />
    </>
  );
};

export default page;

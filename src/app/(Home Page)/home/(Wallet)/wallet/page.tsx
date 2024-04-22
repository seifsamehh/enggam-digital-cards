import Footer from "@/components/shared/Footer";
import HeaderHome from "@/components/shared/HeaderHome";
import Wallet from "@/components/wallet page/Wallet";

const page = () => {
  return (
    <>
      <HeaderHome />
      <section className="wallet">
        <Wallet />
      </section>
      <Footer />
    </>
  );
};

export default page;

import TopSellerSlider from "@/lib/sliders/TopSellerSlider";

import localFont from "next/font/local";

// Tanker font
const tanker = localFont({
  src: [
    {
      path: "../../../public/fonts/Tanker/Tanker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const TopSeller = () => {
  return (
    <section className="top-seller">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#016fd0"
          fillOpacity="1"
          d="M0,64L48,101.3C96,139,192,213,288,256C384,299,480,309,576,266.7C672,224,768,128,864,85.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <h2
        className={`${tanker.className} text-center min-[290px]:text-7xl md:text-9xl`}
      >
        Top Seller
      </h2>
      <TopSellerSlider />
    </section>
  );
};

export default TopSeller;

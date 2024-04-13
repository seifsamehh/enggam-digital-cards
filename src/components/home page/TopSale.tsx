import TopSaleSlider from "@/lib/sliders/TopSaleSlider";
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

const TopSale = () => {
  return (
    <section className="top-sale">
      <h2
        className={`${tanker.className} text-center min-[290px]:text-7xl md:text-9xl`}
      >
        Latest Sale
      </h2>
      <TopSaleSlider />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#016fd0"
          fillOpacity="1"
          d="M0,256L48,256C96,256,192,256,288,250.7C384,245,480,235,576,224C672,213,768,203,864,197.3C960,192,1056,192,1152,208C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default TopSale;

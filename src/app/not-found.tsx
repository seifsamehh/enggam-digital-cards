import Link from "next/link";
import localFont from "next/font/local";

// Tanker font
const tanker = localFont({
  src: [
    {
      path: "../../public/fonts/Tanker/Tanker-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Tanker/Tanker-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Tanker/Tanker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function NotFound() {
  return (
    <section className="relative z-10 bg-primary py-[120px] overflow-hidden h-screen flex justify-center items-center">
      <div className="container">
        <div className="flex -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2
                className={`${tanker.className} overflow-hidden mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]`}
              >
                404
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                Oops! That page can&apos;t be found
              </h4>
              <p className="mb-8 text-lg text-white">
                The page you are looking for it maybe deleted
              </p>
              <Link
                href="/profile/contact-us"
                className="inline-block px-8 py-3 text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
        <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
        <div className="flex w-1/3 h-full">
          <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
          <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
        </div>
        <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
      </div>
    </section>
  );
}

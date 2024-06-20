import Image from "next/image";
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

export default function Partners() {
  return (
    <section className="partners py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          className={`${tanker.className} text-center min-[290px]:text-6xl md:text-8xl`}
        >
          Trusted by the world’s most innovative companies
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
            src="/assets/partner-1.webp"
            alt="partner"
            width={200}
            height={200}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
          />
          <Image
            className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
            src="/assets/partner-2.webp"
            alt="partner"
            width={200}
            height={200}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
          />
          <Image
            className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
            src="/assets/partner-3.webp"
            alt="partner"
            width={200}
            height={200}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
          />
          <Image
            className="col-span-2 max-h-40 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/assets/partner-4.webp"
            alt="partner"
            width={200}
            height={200}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
          />
          <Image
            className="col-span-2 col-start-2 max-h-40 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/assets/partner-5.webp"
            alt="partner"
            width={200}
            height={200}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
    </section>
  );
}

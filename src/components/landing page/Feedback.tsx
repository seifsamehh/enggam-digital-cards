import Image from "next/image";
import Link from "next/link";
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

export default function Feedback() {
  return (
    <section className="feedback">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 dark:bg-slate-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#00b678" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2
              className={`${tanker.className} text-5xl font-bold tracking-tight text-white dark:text-[#00b678] sm:text-4xl}`}
            >
              Give us your feedback
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 dark:text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              et porro, dolor perferendis dolores quas hic praesentium.
              Consectetur numquam atque vitae iusto ab at aspernatur, fuga,
              inventore nobis, hic in?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="https://www.trustpilot.com/review/enggam.com"
                target="_blank"
                title="Get started"
                aria-label="Get started"
                className="rounded-md bg-white dark:bg-[#00b678] px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 min-[290px]:w-full md:w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1711715262/Enggam/trustpilot_jbtgnj.webp"
              alt="App screenshot"
              width={1524}
              height={500}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div>
    </section>
  );
}

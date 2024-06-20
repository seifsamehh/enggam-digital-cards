import { Dot } from "lucide-react";
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

const features = [
  {
    name: "Fast Order",
    description:
      "The order can be made at any time and delivered as quickly as possible by selecting the card and it will be sent to you via email.",
  },
  {
    name: "Secure Payment",
    description: "We Provides High Securely Payment Gateways.",
  },
  {
    name: "Reach The Right Market",
    description:
      "You can have the most aesthetically appealing online store with easy navigation, the highest quality products backed by top-notch customer service and bottomless pockets when it comes to marketing budget.",
  },
];

const Features = () => {
  return (
    <section className="about-features py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2
                className={`${tanker.className} text-2xl font-semibold leading-7 text-blue-600`}
              >
                Features
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better experience
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are working hard to reach the global markets, obtain great
                competition, and raise the site to the highest point of
                development to reach the best things, and the site will provide
                the possibility of accessing the global market.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Dot
                        className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/assets/story.webp"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={500}
            height={500}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

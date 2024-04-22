import Image from "next/image";
import GoShoppingBtn from "@/actions/GoShoppingBtn";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

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

const Welcome = async () => {
  const { getUser } = getKindeServerSession();

  const userName = await getUser().then((user) => user?.given_name);
  return (
    <section className="welcome relative overflow-hidden w-full min-h-screen">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1
              className={`${tanker.className} text-4xl font-bold tracking-tight text-gray-900 dark:text-foreground sm:text-6xl`}
            >
              Welcome, {userName}
            </h1>
            <p className="my-4 text-xl text-muted-foreground dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis ratione doloribus ad culpa itaque dolor nobis
              similique sunt saepe officia aut doloremque obcaecati, voluptates
              dolores blanditiis temporibus exercitationem veniam officiis?
            </p>
            <GoShoppingBtn />
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png"
                          alt="product"
                          className="h-full w-full object-cover object-center"
                          width={300}
                          height={300}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png"
                          alt="product"
                          className="h-full w-full object-cover object-center"
                          width={300}
                          height={300}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png"
                          alt="product"
                          className="h-full w-full object-cover object-center"
                          width={300}
                          height={300}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png"
                          alt="product"
                          className="h-full w-full object-cover object-center"
                          width={300}
                          height={300}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png"
                          alt="product"
                          className="h-full w-full object-cover object-center"
                          width={300}
                          height={300}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png"
                          alt="product"
                          className="h-full w-full object-cover object-center"
                          width={300}
                          height={300}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png"
                          alt="product"
                          className="h-full w-full object-cover object-center"
                          width={300}
                          height={300}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#016fd0"
          fillOpacity="1"
          d="M0,64L48,101.3C96,139,192,213,288,256C384,299,480,309,576,266.7C672,224,768,128,864,85.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Welcome;

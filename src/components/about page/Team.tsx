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

const people = [
  {
    name: "Ali Nasr",
    role: "Founder / CEO",
    imageUrl: "/assets/ali.webp",
  },
  {
    name: "Seif Eldin Sameh",
    role: "Web Developer",
    imageUrl: "/assets/Seif-Sameh.webp",
  },
  {
    name: "Ola Nasr",
    role: "Motion Graphic Designer",
    imageUrl:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png",
  },
  // More people...
];

const Team = () => {
  return (
    <section className="about-team py-12">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2
            className={`${tanker.className} text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
          >
            Meet our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to Enggam! Our Talent Team is dedicated to attracting,
            developing, and retaining the best talent to drive our company
            success. Get to know the dynamic individuals who are at the heart of
            our talent acquisition and management efforts.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt="team member"
                  width={64}
                  height={64}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-blue-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;

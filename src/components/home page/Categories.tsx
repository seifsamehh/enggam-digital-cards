import Link from "next/link";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";

import localFont from "next/font/local";
import { CardProps } from "@/interfaces/cardProps";

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

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

const Card: React.FC<CardProps> = ({ title, description, href, icon }) => {
  return (
    <GlowingStarsBackgroundCard>
      <GlowingStarsTitle className={`${tanker.className}`}>
        {title}
      </GlowingStarsTitle>
      <div className="flex justify-between items-end">
        <GlowingStarsDescription>{description}</GlowingStarsDescription>
        <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
          <Link href={href} title={title} aria-label={title}>
            {icon}
          </Link>
        </div>
      </div>
    </GlowingStarsBackgroundCard>
  );
};

const Categories = () => {
  const cards = [
    {
      title: "Gift Cards",
      description: "Gift cards are prepaid cards.",
      href: "/home/gift-cards",
      icon: <Icon />,
    },
    {
      title: "Game Cards",
      description: "Game cards, also known as gaming gift cards.",
      href: "/home/game-cards",
      icon: <Icon />,
    },
    {
      title: "Payment Cards",
      description: "Payment cards are financial tools.",
      href: "/home/payment-cards",
      icon: <Icon />,
    },
    {
      title: "Software Cards",
      description: "Software cards, are software license cards.",
      href: "/home/software-cards",
      icon: <Icon />,
    },
    // Add more card objects for different categories
  ];

  return (
    <section className="categories-home">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#016fd0"
          fillOpacity="1"
          d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,229.3C672,235,768,213,864,170.7C960,128,1056,64,1152,53.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="flex py-20 items-center justify-center gap-2 min-[290px]:flex-wrap md:flex-nowrap antialiased">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Categories;

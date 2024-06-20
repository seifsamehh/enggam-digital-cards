"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I will use it all the time.This site is very excellent and was very useful to me. There is also honesty in their transactions, so I recommend it to anyone.",
    name: "Ahmed Ibrahim",
  },
  {
    quote: "Best place for payment cards! Secure and trustworthy. I love it!",
    name: "Yasein Metwaly",
  },
  {
    quote: "Great promotions and discounts. Saved on both game and gift cards.",
    name: "Gamela Talal",
  },
  {
    quote: "Great selection of payment cards for online services. Very useful!",
    name: "Hagar Essam",
  },
  {
    quote:
      "Thanks for your comfort service , You are distinguished by very rapid service and confidence.",
    name: "Mahmoud El Badry",
  },
  {
    quote: "Great store",
    name: "Ali Nasr",
  },
  {
    quote: "One of the best stores in Egypt",
    name: "Seif Eldin",
  },
];

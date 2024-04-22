"use client";

import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const GoShoppingBtn = () => {
  const handleClick = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#seller" } });
  };

  return (
    <Button
      className="bg-destructive text-center font-medium text-destructive-foreground hover:bg-red-700"
      onClick={handleClick}
    >
      Start Shopping
    </Button>
  );
};

export default GoShoppingBtn;

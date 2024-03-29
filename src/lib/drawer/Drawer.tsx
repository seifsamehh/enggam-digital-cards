"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import localFont from "next/font/local";

const tanker = localFont({
  src: [
    {
      path: "../../../public/fonts/Tanker/Tanker-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Tanker/Tanker-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Tanker/Tanker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className={`${tanker.className} text-3xl`}>
              Enggam Digital Cards
            </DrawerTitle>
            <DrawerDescription>Buy Easily, Buy Safely</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <nav className="flex justify-center items-center gap-2 flex-col">
              <Link
                href={"/about-us"}
                title="About us"
                aria-label="About us"
                className="text-lg"
              >
                About us
              </Link>
              <Link
                href={"/gift-cards"}
                title="Gift Cards"
                aria-label="Gift Cards"
                className="text-lg"
              >
                Gift Cards
              </Link>
              <Link
                href={"/game-cards"}
                title="Game Cards"
                aria-label="Game Cards"
                className="text-lg"
              >
                Game Cards
              </Link>
              <Link
                href={"/payment-cards"}
                title="Payment Cards"
                aria-label="Payment Cards"
                className="text-lg"
              >
                Payment Cards
              </Link>
              <Link
                href={"/software-cards"}
                title="software Cards"
                aria-label="software Cards"
                className="text-lg"
              >
                Software Cards
              </Link>
            </nav>
          </div>
          <DrawerFooter>
            <Button asChild variant={"default"}>
              <LoginLink postLoginRedirectURL="/home">Sign in</LoginLink>
            </Button>
            <Button asChild variant={"ghost"}>
              <RegisterLink postLoginRedirectURL="/home">Sign up</RegisterLink>
            </Button>
            <DrawerClose asChild>
              <Button variant="destructive">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

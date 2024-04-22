"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import Image from "next/image";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/lib/toogle/ModeToogle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DrawerDemoHome from "@/lib/drawer/DrawerDemoHome";
import { ShoppingBag, Wallet } from "lucide-react";
import CartProducts from "./CartProducts";

const HeaderHome = () => {
  // user
  const { user } = useKindeBrowserClient();

  const userImg =
    user?.picture ||
    "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png";
  const userName = user?.given_name || "MR/MRS";

  return (
    <header className="bg-foreground text-background min-[290px]:px-1 md:px-4 flex justify-between items-center">
      <div className="left flex justify-center items-center">
        <Link href={"/home"} title="Enggam" aria-label="Enggam">
          <Image
            src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709486629/Enggam/enggam-white_guxlav.png"
            alt="Enggam"
            width={150}
            height={150}
            title="Enggam"
            aria-label="Enggam"
            priority
          />
        </Link>
        <nav className="md:flex items-center gap-2 min-[290px]:hidden">
          <Link
            href={"/home/about-us"}
            title="About us"
            aria-label="About us"
            className="text-lg"
          >
            About us
          </Link>
          <Link
            href={"/home/gift-cards"}
            title="Gift Cards"
            aria-label="Gift Cards"
            className="text-lg"
          >
            Gift Cards
          </Link>
          <Link
            href={"/home/game-cards"}
            title="Game Cards"
            aria-label="Game Cards"
            className="text-lg"
          >
            Game Cards
          </Link>
          <Link
            href={"/home/payment-cards"}
            title="Payment Cards"
            aria-label="Payment Cards"
            className="text-lg"
          >
            Payment Cards
          </Link>
          <Link
            href={"/home/software-cards"}
            title="software Cards"
            aria-label="software Cards"
            className="text-lg"
          >
            Software Cards
          </Link>
        </nav>
      </div>
      <div className="right flex justify-center items-center gap-2">
        <div className="user-img">
          <Avatar>
            {userImg ? (
              <AvatarImage src={userImg} />
            ) : (
              <AvatarFallback>{userName}</AvatarFallback>
            )}
          </Avatar>
        </div>
        <div className="logout-btn">
          <Button
            asChild
            variant={"secondary"}
            className="min-[290px]:hidden md:block"
          >
            <LogoutLink postLogoutRedirectURL="/">Logout</LogoutLink>
          </Button>
        </div>
        <div className="mode">
          <ModeToggle />
        </div>
        <div className="wallet">
          <Link href={"/home/wallet"} title="Wallet" aria-label="Wallet">
            <Button size="icon" variant={"outline"}>
              <Wallet color="#016fd0" />
            </Button>
          </Link>
        </div>
        <div className="cart">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant={"outline"}>
                <ShoppingBag color="#016fd0" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
                <SheetDescription>
                  Check products here. Click checkout when you are done.
                </SheetDescription>
              </SheetHeader>
              {/* sheet content */}
              <CartProducts />
              <SheetFooter>
                <SheetClose asChild>
                  <Link
                    href={"/home/checkout"}
                    title="Checkout"
                    aria-label="Checkout"
                  >
                    <Button>Checkout</Button>
                  </Link>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="drawer md:hidden">
          <DrawerDemoHome />
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;

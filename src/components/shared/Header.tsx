import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/lib/toogle/ModeToogle";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { DrawerDemo } from "@/lib/drawer/Drawer";

export default function Header() {
  return (
    <header className="bg-foreground text-background min-[290px]:px-1 md:px-4 flex justify-between items-center">
      <div className="left flex justify-center items-center">
        <Link href={"/"} title="Enggam" aria-label="Enggam">
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
            href={"/about-us"}
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
        <div className="auth-btns md:flex items-center gap-2 min-[290px]:hidden">
          <Button asChild variant={"secondary"}>
            <LoginLink postLoginRedirectURL="/home">Sign in</LoginLink>
          </Button>
          <Button asChild variant={"ghost"}>
            <RegisterLink postLoginRedirectURL="/home">Sign up</RegisterLink>
          </Button>
        </div>
        <div className="mode">
          <ModeToggle />
        </div>
        <div className="drawer md:hidden">
          <DrawerDemo />
        </div>
      </div>
    </header>
  );
}

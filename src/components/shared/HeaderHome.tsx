import Image from "next/image";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "../ui/button";
import { ModeToggle } from "@/lib/toogle/ModeToogle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DrawerDemoHome from "@/lib/drawer/DrawerDemoHome";
import { ShoppingBag } from "lucide-react";

const HeaderHome = async () => {
  const { getUser } = getKindeServerSession();

  const userImg = await getUser().then((user) => user?.picture);
  const userName = await getUser().then((user) => user?.given_name);
  return (
    <header className="bg-foreground text-background min-[290px]:px-1 md:px-4 flex justify-between items-center">
      <div className="left flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709486629/Enggam/enggam-white_guxlav.png"
          alt="Enggam"
          width={150}
          height={150}
          title="Enggam"
          aria-label="Enggam"
          priority
        />
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
        <div className="cart">
          <Button size="icon" variant={"outline"}>
            <ShoppingBag color="#016fd0" />
          </Button>
        </div>
        <div className="drawer md:hidden">
          <DrawerDemoHome />
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;

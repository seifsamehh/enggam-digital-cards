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
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import localFont from "next/font/local";
import { Badge } from "@/components/ui/badge";

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

const DrawerDemoHome = () => {
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
              <Link
                href={"/home/sale"}
                title="Sale"
                aria-label="Sale"
                className="text-lg relative"
              >
                Sale
                <Badge
                  variant="destructive"
                  className="absolute -top-3 -right-8"
                >
                  Hot
                </Badge>
              </Link>
            </nav>
          </div>
          <DrawerFooter>
            <Button asChild>
              <LogoutLink postLogoutRedirectURL="/">Logout</LogoutLink>
            </Button>
            <DrawerClose asChild>
              <Button variant="destructive">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDemoHome;

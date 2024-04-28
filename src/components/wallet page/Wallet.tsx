"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import localFont from "next/font/local";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { WalletBalanceInputProps } from "@/interfaces/wallet";
import Link from "next/link";

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

const WalletBalanceInput: React.FC<WalletBalanceInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="field flex md:gap-4 mb-6">
      <Button
        variant={"destructive"}
        size={"icon"}
        onClick={() => onChange(Math.max(value - 50, 50))}
      >
        <Minus color="#f3f3f3" />
      </Button>
      <input
        type="number"
        name="amount"
        id="amout"
        className="rounded-md px-4"
        min="50"
        value={value.toString()}
        onChange={(e) =>
          onChange(parseInt((e.target as HTMLInputElement).value))
        }
        onInput={(e) => {
          const inputValue = parseInt((e.target as HTMLInputElement).value);
          if (isNaN(inputValue)) {
            (e.target as HTMLInputElement).value = inputValue.toString();
          } else {
            (e.target as HTMLInputElement).value = Math.max(
              50,
              inputValue
            ).toString();
          }
        }}
      />

      <Button
        variant={"destructive"}
        size={"icon"}
        onClick={() => onChange(value + 50)}
      >
        <Plus color="#f3f3f3" />
      </Button>
    </div>
  );
};

const Wallet: React.FC = () => {
  const [balance, setBalance] = useState(50);

  return (
    <div className="container flex justify-around items-center min-[290px]:flex-wrap md:flex-nowrap">
      <div className="left">
        <Image
          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1713810823/Enggam/wallet_meggki.svg"
          alt="wallet"
          aria-label="wallet"
          width={500}
          height={500}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="right">
        <h1
          className={`${tanker.className} text-black dark:text-white text-7xl`}
        >
          Enggam Wallet
        </h1>
        <p className="text-balance max-w-2xl my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a
          beatae! Totam assumenda quibusdam temporibus? Repellat ipsa autem,
          distinctio cum placeat possimus nam? Facere libero itaque provident
          adipisci nostrum maiores.
        </p>
        <WalletBalanceInput value={balance} onChange={setBalance} />
        <Link href={"/home/checkout"} title="checkout" aria-label="checkout">
          <Button variant={"default"}>Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default Wallet;

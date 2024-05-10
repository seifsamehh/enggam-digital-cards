import Image from "next/image";
import { subCategories } from "../../../constants/subCategories";
import Link from "next/link";
import { Button } from "../ui/button";

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

const PaymentBoxs = () => {
  const paymentCards = subCategories.find(
    (category) => category.name === "Payment Cards"
  );
  const mappedSubCategories = paymentCards?.sub?.map((subcategory) => {
    return {
      imageUrl: subcategory.imageUrl,
      title: subcategory.title,
      description: subcategory.description,
      path: subcategory.path,
    };
  });

  return (
    <div className="container flex justify-center items-center gap-4 flex-wrap">
      {mappedSubCategories?.map((subcategory, index) => (
        <div key={index} className="flex flex-col items-start gap-2">
          <Image
            src={subcategory.imageUrl}
            alt={subcategory.title}
            width={300}
            height={300}
          />
          <h2 className={`${tanker.className} text-2xl`}>
            {subcategory.title}
          </h2>
          <p>{subcategory.description}</p>
          <Button variant={"destructive"}>
            <Link href={subcategory.path} aria-label="Start Shopping">
              Start Shopping
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PaymentBoxs;

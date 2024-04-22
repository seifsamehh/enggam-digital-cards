"use client";

import { useProductStore } from "@/store/store";
import Image from "next/image";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { Product } from "@/interfaces/product";
import { X } from "lucide-react";
import { Button } from "../ui/button";

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

const CartProducts: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  // products
  const products: Product[] = useProductStore((state) => state.products);

  useEffect(() => {
    // Calculate total price when products change
    const newTotalPrice = products.reduce(
      (total, product) => total + product.price!,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [products]);

  const removeFromCart = (productId: string) => {
    useProductStore.getState().removeFromCart(productId);
  };

  return (
    <div className="sheet-content">
      {products.length === 0 ? (
        <div className="product-content flex justify-center items-center py-2">
          <div className="left">
            <Image
              src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1713791182/Enggam/empty-cart_hqk2v0.svg"
              alt="empty cart"
              width={500}
              height={500}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      ) : (
        products.map((product) => (
          <div
            className="product-content flex justify-between items-start gap-2 py-2"
            key={product.id}
          >
            <div className="left">
              <Image
                src={product.image!}
                alt="product image"
                width={100}
                height={100}
                className="w-16 h-16 rounded-md"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="right">
              <h3 className={`${tanker.className} text-2xl`}>{product.name}</h3>
              <p className="text-black">{product.price}$</p>
            </div>
            <Button
              variant={"destructive"}
              size={"icon"}
              aria-label="close"
              onClick={() => removeFromCart(product.id)}
            >
              <X />
            </Button>
          </div>
        ))
      )}
      <p className="text-black mt-6">Total Price: {totalPrice}$</p>
    </div>
  );
};

export default CartProducts;

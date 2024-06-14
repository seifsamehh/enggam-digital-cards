"use client";

import { usePathname } from "next/navigation";
import { subCategoryProducts } from "../../../../../../../constants/subCategoriesProducts";
import { useProductStore } from "@/store/store";

import { useState } from "react";
import HeaderHome from "@/components/shared/HeaderHome";
import Footer from "@/components/shared/Footer";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import localFont from "next/font/local";
import { Product } from "@/interfaces/product";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Tanker font
const tanker = localFont({
  src: [
    {
      path: "../../../../../../../public/fonts/Tanker/Tanker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const SubCategory = ({ params }: { params: { subCategory: string } }) => {
  const handleAddToCart = (product: Product) => {
    useProductStore.getState().addToCart(product);

    const currentTime = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    toast.success(`${product.name} added to cart`, {
      description: currentTime,
    });
  };

  const pathname = usePathname().split("/").pop();
  const [filter, setFilter] = useState<string | undefined>(undefined);

  const filteredProducts = subCategoryProducts.filter(
    (product) =>
      product.related === pathname &&
      product.related === params.subCategory &&
      (filter ? product.country === filter : true)
  );

  if (filteredProducts.length === 0) {
    return (
      <>
        <HeaderHome />
        <main className="py-6 flex justify-center items-center flex-col gap-2">
          <Image
            src="/assets/product-not-found.svg"
            alt="not found"
            width={500}
            height={500}
          />

          <div className="countries text-center my-4">
            <label htmlFor="country-filter" className="mr-2">
              Filter by country:
            </label>
            <select
              className="border border-gray-300 rounded-md p-2"
              id="country-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="Egypt">Egypt</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <h1 className={`${tanker.className} text-3xl md:text-8xl`}>
            Product not found
          </h1>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <HeaderHome />
        <main className="min-h-screen py-4">
          <h2
            className={`${tanker.className} text-3xl md:text-8xl text-center`}
          >
            {params.subCategory}
          </h2>
          <div className="countries text-center my-4">
            <label htmlFor="country-filter" className="mr-2">
              Filter by country:
            </label>
            <select
              className="border border-gray-300 rounded-md p-2"
              id="country-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="Egypt">Egypt</option>
              <option value="USA">USA</option>
            </select>
          </div>

          <div className="container">
            <div className="products-boxes flex justify-center items-center gap-2 flex-wrap">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-md p-4 flex flex-col justify-start items-start gap-2"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-sm"
                  />
                  <h3
                    className={`${tanker.className} text-3xl font-bold text-red-500`}
                  >
                    {product.name}
                  </h3>
                  <p>{product.price} $</p>
                  <Badge>{product.country}</Badge>
                  <div className="product-btns">
                    <Button
                      variant={"default"}
                      onClick={() => handleAddToCart(product)}
                      className="mr-2"
                    >
                      Add to cart
                    </Button>
                    <Link
                      href={`/home/gift-cards/${params.subCategory}/${product.id}`}
                    >
                      <Button variant={"outline"}>View details</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
};

export default SubCategory;

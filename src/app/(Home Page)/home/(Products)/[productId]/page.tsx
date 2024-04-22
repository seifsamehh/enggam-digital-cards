"use client";

import { useParams } from "next/navigation";

import Footer from "@/components/shared/Footer";
import {
  categories,
  saleProducts,
  sellerProducts,
} from "../../../../../../constants/products";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces/product";
import { useProductStore } from "@/store/store";
import { toast } from "sonner";
import HeaderHome from "@/components/shared/HeaderHome";

// Tanker font
const tanker = localFont({
  src: [
    {
      path: "../../../../../../public/fonts/Tanker/Tanker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const ProductDetails = () => {
  //  Get the product ID from the URL parameters
  const params = useParams<{ productId: string }>();

  let product: Product | null = null;
  const allProducts = [...sellerProducts, ...saleProducts];

  // Loop through categories and add their products to allProducts
  for (const category of categories) {
    // Check if subcategories is not undefined
    if (category.subcategories !== undefined) {
      for (const subcategory of category.subcategories) {
        for (const item of subcategory.products) {
          allProducts.push(item);
        }
      }
    }
  }

  // Find the product with the matching ID (adapt as needed)
  for (const item of allProducts) {
    if (item.id === params.productId) {
      product = item;
      break;
    }
  }

  if (!product) {
    return (
      <section className="product-not-found min-h-screen flex justify-center items-center flex-col gap-6">
        <Image
          src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1713816826/Enggam/No_data-bro_aptz1f.svg"
          alt="not-found"
          aria-label="not-found"
          width={500}
          height={500}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
        />
        <h1 className={`${tanker.className} text-7xl`}>
          Sorry this product not found
        </h1>
      </section>
    );
  }

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

  return (
    <>
      <HeaderHome />
      <section className="product-details py-6 relative">
        <div className="container flex justify-around items-start gap-8 min-[290px]:flex-wrap md:flex-nowrap">
          <div className="left">
            <Image
              src={product.image!}
              alt={product.name}
              aria-label={product.name}
              className="rounded-md object-cover"
              width={700}
              height={700}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw1KGgAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="right">
            <h1
              className={`${tanker.className} text-7xl text-black dark:text-white`}
            >
              {product.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-300 py-4 max-w-3xl">
              {product.description}
            </p>
            <p>Price: {product.price}$</p>
            <p>Country: {product.country}</p>
            <Button
              variant={"default"}
              className="relative z-10 mt-4"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute -bottom-5 left-0"
        >
          <path
            fill="#0e7490"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,165.3C384,203,480,245,576,234.7C672,224,768,160,864,154.7C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;

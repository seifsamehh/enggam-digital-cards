"use client";

import { useParams } from "next/navigation";

import Footer from "@/components/shared/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces/product";
import { useProductStore } from "@/store/store";
import { toast } from "sonner";
import HeaderHome from "@/components/shared/HeaderHome";
import { useEffect, useState } from "react";
import { subCategoryProducts } from "../../../../../../../../constants/subCategoriesProducts";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import localFont from "next/font/local";

// Tanker font
const tanker = localFont({
  src: [
    {
      path: "../../../../../../../../public/fonts/Tanker/Tanker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const SubProductDetails = () => {
  const params = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = () => {
      const allProducts = [...subCategoryProducts];

      const foundProduct = allProducts.find(
        (item) => item.id === params.productId
      );
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        toast.error("Product not found");
      }
    };

    fetchProduct();
  }, [params.productId]);

  useEffect(() => {
    const getRandomProducts = () => {
      const allProducts = [...subCategoryProducts];
      const shuffled = allProducts.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 5); // Select 5 random products
    };
  
    setRandomProducts(getRandomProducts());
  }, []);

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
      {product ? (
        <>
                <section className="product-details py-6 relative">
          <div className="container flex justify-around items-start gap-8 flex-wrap lg:flex-nowrap">
            <div className="left">
              <Image
                src={product.image!}
                alt={product.name}
                className="rounded-md object-cover"
                width={500}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
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
              <p className="text-2xl">Price: {product.price}$</p>
              <p className="text-2xl">Country: {product.country}</p>
              <Button
                variant="default"
                className="mt-4 relative z-10"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
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
            </div>
          </div>
        </section>
          <section className="random-products py-6">
          <div className="container">
            <h2 className={`${tanker.className} text-4xl mb-4`}>You may also like</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              {randomProducts.map((randomProduct) => (
                <SwiperSlide key={randomProduct.id}>
                  <div className="product-card">
                    <Image
                      src={randomProduct.image!}
                      alt={randomProduct.name}
                      width={200}
                      height={200}
                      className="rounded-md object-cover"
                    />
                    <h3 className="text-lg mt-2">{randomProduct.name}</h3>
                    <p className="text-sm text-gray-500">${randomProduct.price}</p>
                    <Button
                      variant="outline"
                      className="mt-2"
                      onClick={() => handleAddToCart(randomProduct)}
                    >
                      Add to cart
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        </>
      ) : (
        <section className="product-not-found min-h-screen flex justify-center items-center flex-col gap-6">
          <Image
            src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1713816826/Enggam/No_data-bro_aptz1f.svg"
            alt="not-found"
            width={500}
            height={500}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
          />
          <h1 className="text-7xl">Sorry, this product was not found</h1>
        </section>
      )}
      <Footer />
    </>
  );
};

export default SubProductDetails;

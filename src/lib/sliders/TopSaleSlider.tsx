"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { saleProducts } from "../../../constants/products";
import { Product } from "@/interfaces/product";
import { useProductStore } from "@/store/store";
import { toast } from "sonner";
import Link from "next/link";

const TopSaleSlider = () => {
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
    <div className="contianer mx-auto px-6 my-6">
      <Swiper
        breakpoints={{
          250: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {saleProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Card className="border-none">
              <CardHeader>
                <CardTitle>
                  <Image
                    src={product.image!}
                    alt={product.name}
                    aria-label={product.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
                  />
                </CardTitle>
                <CardDescription className="text-3xl">
                  {product.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="prices flex items-center gap-2">
                  <p className="text-2xl">{product.price}$</p>
                  <del className="text-xl text-gray-500 dark:text-gray-300">
                    {product.discount}$
                  </del>
                </div>
                <Badge variant="destructive">{product.country}</Badge>
              </CardContent>
              <CardFooter className="flex justify-start items-center gap-2">
                <Button
                  variant={"default"}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </Button>
                <Link href={`/home/${product.id}`}>
                  <Button variant={"outline"}>View details</Button>
                </Link>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSaleSlider;

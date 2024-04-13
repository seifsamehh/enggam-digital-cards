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

// products
const products = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png",
    name: "Product 1",
    price: 10,
    del: 20,
    country: "Egypt",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png",
    name: "Product 2",
    price: 20,
    del: 30,
    country: "USA",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png",
    name: "Product 3",
    price: 30,
    del: 40,
    country: "UK",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png",
    name: "Product 4",
    price: 40,
    del: 50,
    country: "GER",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png",
    name: "Product 5",
    price: 50,
    del: 60,
    country: "AUS",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709456772/Enggam/maskable_icon_p0oanz.png",
    name: "Product 6",
    price: 60,
    del: 70,
    country: "CAN",
  },
  // Add more product objects as needed
];

const TopSaleSlider = () => {
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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card className="border-none">
              <CardHeader>
                <CardTitle>
                  <Image
                    src={product.image}
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
                    {product.del}$
                  </del>
                </div>
                <Badge variant="destructive">{product.country}</Badge>
              </CardContent>
              <CardFooter className="flex justify-start items-center gap-2">
                <Button variant={"default"}>Add to cart</Button>
                <Button variant={"outline"}>View product</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSaleSlider;

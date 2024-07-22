"use client";

import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { subCategoryProducts } from "../../../../../../../constants/subCategoriesProducts";
import { useProductStore } from "@/store/store";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import localFont from "next/font/local";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderHome from "@/components/shared/HeaderHome";
import Footer from "@/components/shared/Footer";

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
  const pathname = usePathname().split("/").pop();

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered products and pagination setup
  const { currentProducts, totalPages } = useMemo(() => {
    const filteredProducts = subCategoryProducts.filter(
      (product) =>
        product.related === pathname && product.related === params.subCategory
    );

    const productsPerPage = 10;
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    return { currentProducts, totalPages };
  }, [pathname, params.subCategory, currentPage]);

  // Handle adding to cart
  const handleAddToCart = (product: any) => {
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

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // If no products found, show "Product not found" message
  if (currentProducts.length === 0) {
    return (
      <>
        <HeaderHome />
        <main className="py-6 flex justify-center items-center flex-col gap-2">
          <Image
            src="/assets/out-of-stock.svg"
            alt="out of stock"
            width={500}
            height={500}
          />
          <h1 className={`${tanker.className} text-3xl md:text-8xl`}>
            Out of stock
          </h1>
        </main>
        <Footer />
      </>
    );
  }

  // Render products
  return (
    <>
      <HeaderHome />
      <main className="min-h-screen py-4">
        <h2 className={`${tanker.className} text-3xl md:text-8xl text-center`}>
          {params.subCategory}
        </h2>

        <div className="container">
          <div className="products-boxes flex justify-center items-center gap-2 flex-wrap">
            {currentProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-md p-4 flex flex-col justify-start items-start gap-2"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-sm"
                />
                <h3
                  className={`${tanker.className} text-3xl font-bold text-red-500`}
                >
                  {product.name}
                </h3>
                <p className="text-2xl">{product.price} $</p>
                <Badge className="text-lg">
                  {product.country ? product.country : "No Country"}
                </Badge>
                <div className="product-btns">
                  <Button
                    variant={"default"}
                    onClick={() => handleAddToCart(product)}
                    className="mr-2"
                  >
                    Add to cart
                  </Button>
                  <Link
                    href={`/home/payment-cards/${params.subCategory}/${product.id}`}
                  >
                    <Button variant={"outline"}>View details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination controls */}
        <div className="flex items-center justify-around mt-4 flex-wrap px-4 md:px-0">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
          <div>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "default" : "ghost"}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SubCategory;

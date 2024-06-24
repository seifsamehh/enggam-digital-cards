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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Number of products to display per page
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="saudi arabia">Saudi Arabia</option>
              <option value="China">China</option>
              <option value="Germany">Germany</option>
              <option value="Australia">Australia</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="Canada">Canada</option>
              <option value="Austria">Austria</option>
              <option value="Belgium">Belgium</option>
              <option value="Denmark">Denmark</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Turkey">Turkey</option>
              <option value="Sweden">Sweden</option>
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
          {/* ... (same as before) */}
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
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="saudi arabia">Saudi Arabia</option>
              <option value="China">China</option>
              <option value="Germany">Germany</option>
              <option value="Australia">Australia</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="Canada">Canada</option>
              <option value="Austria">Austria</option>
              <option value="Belgium">Belgium</option>
              <option value="Denmark">Denmark</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Turkey">Turkey</option>
              <option value="Sweden">Sweden</option>
            </select>
          </div>

          <div className="container">
            <div className="products-boxes flex justify-center items-center gap-2 flex-wrap">
              {currentProducts.map((product, index) => (
                // <></>
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
  }
};

export default SubCategory;

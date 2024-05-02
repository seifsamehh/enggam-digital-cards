"use client";

import { useProductStore } from "@/store/store";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import CryptoJS from "crypto-js";
import Image from "next/image";
import localFont from "next/font/local";
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

const Checkout = () => {
  // get the products from cart
  const products = useProductStore((state) => state.products);

  const handleClear = () => {
    useProductStore.setState({ products: [] });
  };
  // get user information from kinde
  const { user } = useKindeBrowserClient();

  // Extract customer data
  // Check if user object exists before extracting data
  const customerEmail = user ? user.email : "customer@domain.com";
  const customerName = user ? user.given_name : "MR/MRS";
  const customerProfileId = user ? user.id : "";

  // Function to generate a random ID
  function generateRandomId() {
    return Math.floor(Math.random() * 1000000).toString();
  }

  // Function to build the charge request
  const merchantRefNum = generateRandomId();
  function buildChargeRequest(products) {
    console.log("merchantRefNum", merchantRefNum);
    const chargeItems = products.map((product) => ({
      itemId: product.id,
      description: product.name,
      price: (product.price * 47.08).toFixed(2),
      imageUrl: product.image,
      quantity: product.quantity || 1,
    }));

    // Concatenate the elements for signature calculation
    const concatenatedString =
      "770000019150" +
      merchantRefNum +
      customerProfileId +
      "https://enggam-digital-cards.vercel.app/home" +
      chargeItems.map((item) => item.itemId).join("") +
      chargeItems.map((item) => item.quantity).join("") +
      chargeItems.map((item) => item.price).join("") +
      "0743aa6f-53e6-43ca-a3e2-46fe25c1e3be";

    // Calculate the signature
    const signature = CryptoJS.SHA256(concatenatedString).toString();

    return {
      merchantCode: "770000019150",
      merchantRefNum: merchantRefNum,
      customerEmail: customerEmail,
      customerName: customerName,
      paymentMethod: "",
      customerProfileId: customerProfileId,
      chargeItems: chargeItems,
      returnUrl: "https://enggam-digital-cards.vercel.app/home",
      authCaptureModePayment: false,
      signature: signature,
    };
  }

  // Concatenate the elements for signature calculation
  const concatenatedStringPaymentStatus =
    "770000019150" + merchantRefNum + "0743aa6f-53e6-43ca-a3e2-46fe25c1e3be";

  // Calculate the signature
  const signaturePaymentStatus = CryptoJS.SHA256(
    concatenatedStringPaymentStatus
  ).toString();

  // Function to handle checkout
  async function checkout(products) {
    const configuration = {
      locale: "en", // Default locale
      mode: DISPLAY_MODE.POPUP, // Required mode
    };
    const chargeRequest = buildChargeRequest(products);

    // Make the initial FawryPay checkout request
    FawryPay.checkout(chargeRequest, configuration);

    // Make the additional request to check the payment status
    const merchantCode = "770000019150";
    const merchantRefNumber = merchantRefNum;
    const signature = signaturePaymentStatus;

    const statusUrl =
      "https://atfawry.fawrystaging.com/ECommerceWeb/Fawry/payments/status/v2";
    const queryParams = `merchantCode=${merchantCode}&merchantRefNumber=${merchantRefNumber}&signature=${signature}`;

    try {
      const response = await fetch(`${statusUrl}?${queryParams}`);
      console.log(`${statusUrl}?${queryParams}`);
      const data = await response.json();
      // Handle the response data as needed
      console.log(data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  }

  return (
    <div className="container flex justify-center items-center gap-8 min-[290px]:flex-wrap md:flex-nowrap min-h-screen">
      <div className="left">
        <h1
          className={`${tanker.className} text-7xl text-black dark:text-white mb-8`}
        >
          Products in Cart:
        </h1>
        <ul>
          {products.length === 0 ? (
            <Image
              src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1713791182/Enggam/empty-cart_hqk2v0.svg"
              alt="No products in cart"
              aria-label="No products in cart"
              width={500}
              height={500}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
            />
          ) : (
            products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                quantity={product.quantity}
              />
            ))
          )}
        </ul>
        {products.length > 0 && (
          <Button
            variant={"destructive"}
            onClick={handleClear}
            className="clear-button mt-4"
          >
            Clear Products
          </Button>
        )}
      </div>
      <div className="right">
        {products.length > 0 && (
          <input
            type="image"
            onClick={() => checkout(products)}
            src="https://www.atfawry.com/assets/img/FawryPayLogo.jpg"
            alt="pay-using-fawry"
            id="fawry-payment-btn"
          />
        )}
      </div>
    </div>
  );
};

// ProductItem component for rendering each product
const ProductItem = ({ product }) => {
  const products = useProductStore((state) => state.products); // Get the products from the store
  const productIndex = products.findIndex((p) => p.id === product.id); // Find the index of the current product in the store
  const quantity = products[productIndex]?.quantity || 1; // Get the quantity of the product from the store, default to 1 if not found

  const handleIncrement = () => {
    useProductStore.setState((state) => {
      const updatedProducts = state.products.map((p) =>
        p.id === product.id ? { ...p, quantity: (p.quantity || 0) + 1 } : p
      );
      return { ...state, products: updatedProducts };
    });
  };

  const handleDecrement = () => {
    useProductStore.setState((state) => {
      const updatedProducts = state.products.map((p) =>
        p.id === product.id ? { ...p, quantity: (p.quantity || 0) - 1 } : p
      );
      return { ...state, products: updatedProducts };
    });
  };

  return (
    <li className="flex justify-start md:justify-center items-center gap-4 flex-wrap md:flex-nowrap">
      <Image
        src={product.image}
        alt={product.name}
        aria-label={product.name}
        className="rounded-md"
        width={100}
        height={100}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkEPtbDwACxQGUCODXZAAAAABJRU5ErkJggg=="
      />
      <div className="product-content">
        <h2 className={`${tanker.className} text-5xl`}>{product.name}</h2>
        <p className="text-balance max-w-3xl my-6">{product.description}</p>
      </div>
      <div className="quantity-buttons flex items-center gap-2">
        <Button
          variant={"destructive"}
          onClick={handleDecrement}
          disabled={quantity === 1}
        >
          -
        </Button>
        <p>{quantity}</p>
        <Button variant={"destructive"} onClick={handleIncrement}>
          +
        </Button>
      </div>
      <p>${(product.price * quantity).toFixed(2)}</p>
    </li>
  );
};

export default Checkout;

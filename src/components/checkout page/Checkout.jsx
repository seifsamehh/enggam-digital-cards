"use client";

import { useProductStore } from "@/store/store";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import CryptoJS from "crypto-js";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import confetti from "canvas-confetti";

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

  // USD currency
  const USDcurrency = 52.0;
  const fees = 5.525;

  const router = useRouter();

  // Function to generate a random ID
  function generateRandomId() {
    return Math.floor(Math.random() * 1000000).toString();
  }

  // Function to build the charge request
  const merchantRefNum = generateRandomId();

  // Fawry integration
  function buildChargeRequest(products) {
    const chargeItems = products.map((product) => ({
      itemId: product.id,
      description: product.name,
      price: (product.price * USDcurrency + fees + 2.0).toFixed(2),
      imageUrl: product.image,
      quantity: product.quantity || 1,
    }));

    // Concatenate the elements for signature calculation
    const concatenatedString =
      "400000018490" +
      merchantRefNum +
      customerProfileId +
      "https://enggam-digital-cards.vercel.app/home" +
      chargeItems.map((item) => item.itemId).join("") +
      chargeItems.map((item) => item.quantity).join("") +
      chargeItems.map((item) => item.price).join("") +
      "5d289a9c-6a46-4b5a-a618-23b2929de937";

    // Calculate the signature
    const signature = CryptoJS.SHA256(concatenatedString).toString();

    return {
      merchantCode: "400000018490",
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
    "400000018490" + merchantRefNum + "5d289a9c-6a46-4b5a-a618-23b2929de937";

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
    const merchantCode = "400000018490";
    const merchantRefNumber = merchantRefNum;
    const signature = signaturePaymentStatus;

    const statusUrl =
      "https://atfawry.fawrystaging.com/ECommerceWeb/Fawry/payments/status/v2";
    const queryParams = `merchantCode=${merchantCode}&merchantRefNumber=${merchantRefNumber}&signature=${signature}`;

    try {
      const response = await fetch(`${statusUrl}?${queryParams}`);
      const data = await response.json();
      // Handle the response data as needed
      console.log(data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  }

  // Geidea integration
  function calculateTotalPrice() {
    return products.reduce((acc, product) => {
      return acc + product.price * (product.quantity || 1);
    }, 0);
  }

  const paymentAmount = calculateTotalPrice() * USDcurrency + fees + 2.0;

  const productItems = useProductStore((state) => state.products);

  const generateError = () => {
    toast.error("Something went Wrong Please Try Again!");
  };

  const generateCancel = () => {
    router.push("/Home-Page/cancel");
    toast.warning("You canceled the order!");
  };

  const generateSuccess = async () => {
    const email = customerEmail || "customer@domain.com";
    const price = paymentAmount;
    const products = productItems.map((product) => ({
      name: product.name,
      quantity: product.quantity || 1,
    }));

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          price,
          products,
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        router.push("/home/success");
        useProductStore.setState({ products: [] });
        confetti({
          particleCount: 200,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2,
          },
        });
        toast.success("Your order has been confirmed!");
      } else {
        console.error("Failed to send email:", responseData.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleSubmit = async () => {
    const name = customerName;
    const email = customerEmail;
    const amount = paymentAmount;

    const onSuccess = () => {
      generateSuccess("Payment Successful!");
    };
    const onError = () => {
      generateError("Something went Wrong Please Try Again!");
    };
    const onCancel = () => {
      generateCancel("You have Canceled the operation!");
    };

    try {
      const response = await axios.post("/api/payments", {
        amount: amount,
        name: name,
        email: email,
      });

      const sessionId = response.data.session.id;
      var payment = new GeideaCheckout(onSuccess, onError, onCancel);
      payment.startPayment(sessionId);
    } catch (err) {
      console.error(err);
      generateError("Failed to process payment.");
    }
  };

  return (
    <div className="container flex justify-start items-center gap-8 min-[290px]:flex-wrap md:flex-nowrap min-h-screen my-4">
      <div className="left min-h-screen flex flex-col justify-start">
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
      <Separator
        orientation="vertical"
        className="min-h-screen hidden md:block"
      />
      <div className="right min-h-screen flex flex-col justify-start">
        {products.length === 0 ? (
          <>
            <h2
              className={`${tanker.className} text-7xl text-black dark:text-white mb-8`}
            >
              Payment Methods:
            </h2>
            <p className="text-2xl mb-8 text-center">No products in cart</p>
          </>
        ) : (
          <>
            <h2
              className={`${tanker.className} text-7xl text-black dark:text-white mb-8`}
            >
              Payment Methods:
            </h2>
            {products.length > 0 && (
              <div className="payments flex justify-center items-center gap-4 flex-col">
                <Button
                  onClick={() => checkout(products)}
                  id="fawry-payment-btn"
                  // className="hidden"
                >
                  Fawry Checkout
                </Button>
                <Button onClick={handleSubmit} id="geidea-payment-btn">
                  Geidea Checkout
                </Button>
              </div>
            )}
          </>
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

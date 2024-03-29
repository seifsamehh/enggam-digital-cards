"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import cookie from "js-cookie";

import localFont from "next/font/local";

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

const ConsentCookies = () => {
  const [consentAccepted, setConsentAccepted] = useState(false);

  useEffect(() => {
    const consentStatus = cookie.get("cookieConsent");

    if (consentStatus === "accepted") {
      setConsentAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    // Save consent status in cookie with expires and path options
    cookie.set("cookieConsent", "accepted", { expires: 30, path: "/" });
    setConsentAccepted(true);
  };

  const handleRevoke = () => {
    // Remove the consent cookie
    cookie.remove("cookieConsent");
    setConsentAccepted(false);
  };

  return (
    !consentAccepted && (
      <div className="cookie-banner flex justify-between items-center min-[290px]:flex-wrap md:flex-nowrap px-2 min-[290px]:py-2 md:py-0 fixed bottom-0 left-0 right-0 bg-destructive text-destructive-foreground z-50 min-[290px]:h-40 md:h-24 w-screen">
        <p className={`${tanker.className} text-xl`}>
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our use of cookies.{" "}
        </p>
        <div className="cookies-btns">
          <Button
            onClick={handleAccept}
            className="bg-secondary text-secondary-foreground py-2 px-4 rounded-md mr-2"
          >
            Accept
          </Button>
          <Button onClick={handleRevoke} variant={"ghost"}>
            Close
          </Button>
        </div>
      </div>
    )
  );
};

export default ConsentCookies;

import Script from "next/script";
import { WebsiteData } from "@/interfaces/websiteData";
import type { Metadata, Viewport } from "next";
import { Parallax } from "@/hooks/useParallaxAnimation";
import { ThemeProvider } from "@/config/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Preloader from "@/components/shared/Preloader";
import ConsentCookies from "@/components/shared/ConsentCookies";
import localFont from "next/font/local";
import "./globals.css";
import "../../public/fawrypay.css";

// bespoke font
const bespoke = localFont({
  src: [
    {
      path: "../../public/fonts/Bespoke/BespokeSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#013c6f" },
  ],
};

export const metadata: Metadata = {
  title: "Enggam - Digital Cards E-commerce Website",
  description:
    "Find a wide selection of gift, game, payment, and software cards on Enggam, the leading digital cards e-commerce website.",
  generator: "Next.js",
  metadataBase: new URL("https://enggam-digital-cards.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  applicationName: "Enggam - Digital Cards E-commerce Website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Enggam gift cards",
    "Buy gift cards online",
    "Gift cards Egypt",
    "Prepaid cards Egypt",
    "iTunes gift cards Egypt",
    "Google Play gift cards Egypt",
    "PSN gift cards Egypt",
    "Xbox gift cards Egypt",
    "Razer gold cards Egypt",
    "Amazon gift cards Egypt",
    "Steam gift cards Egypt",
    "Safe and fast gift cards",
    "Easy to get gift cards",
    "Digital gift cards",
    "Gift cards online",
    "Buy gift cards Egypt",
    "Prepaid cards online",
    "بطاقات هدايا",
    "شراء بطاقات الهدايا عبر الإنترنت",
    "بطاقات الهدايا مصر",
    "بطاقات مسبقة الدفع مصر",
    "بطاقات هدايا آمنة وسريعة",
    "بطاقات هدايا سهلة الحصول عليها",
    "بطاقات هدايا رقمية",
    "بطاقات هدايا عبر الإنترنت",
    "شراء بطاقات الهدايا مصر",
    "بطاقات مسبقة الدفع عبر الإنترنت",
  ],
  authors: [
    { name: "Seif Eldin Sameh", url: "https://seif-eldin-website.vercel.app/" },
  ],
  creator: "Seif Eldin Sameh",
  publisher: "Seif Eldin Sameh",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/assets/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/assets/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/assets/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/assets/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/assets/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/assets/apple-touch-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/assets/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/apple-touch-icon.png",
      },
    ],
  },
  openGraph: {
    title: "Enggam - Digital Cards E-commerce Website",
    description:
      "Find a wide selection of gift, game, payment, and software cards on Enggam, the leading digital cards e-commerce website.",
    url: "https://enggam-digital-cards.vercel.app/",
    siteName: "Enggam - Digital Cards E-commerce Website",
    images: [
      {
        url: "/assets/maskable_icon.png",
        width: 512,
        height: 512,
        alt: "ENGGAM Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enggam - Digital Cards E-commerce Website",
    description:
      "Find a wide selection of gift, game, payment, and software cards on Enggam, the leading digital cards e-commerce website.",
    creator: "@seiffsameh",
    images: ["/assets/maskable_icon.png"],
  },
  verification: {
    google: "google",
    other: {
      me: ["seiffsameh00@gmail.com", "https://seif-eldin-website.vercel.app/"],
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Cards Store",
};

// structure data
const website: WebsiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Enggam",
  url: "https://enggam-digital-cards.vercel.app/",
  logo: "https://i.imgur.com/3xFPJUP.jpg",
  favicon: "https://i.imgur.com/3xFPJUP.jpg",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Cairo Governorate",
    postalCode: "11835",
    addressCountry: "Egypt",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+201014402598",
    email: "enggam729@gmail.com",
  },
  description:
    "Find a wide selection of gift, game, payment, and software cards on Enggam, the leading digital cards e-commerce website.",
  foundingDate: "January 11, 2020",
  founders: ["Ali Nasr"],
  employees: 50,
  industry: "Technology",
  socialMedia: {
    twitter: "https://twitter.com/enggam729",
    facebook: "https://www.facebook.com/profile.php?id=100095357415380",
    instagram: "https://www.instagram.com/enggam.co/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = JSON.stringify(website);
  const sanitizedStructuredData = structuredData
    .replace(/<\/script/g, "<\\/script")
    .replace(/<!--/g, "<\\!--");
  return (
    <html lang="en">
      <body className={bespoke.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Parallax>
            <Preloader />
            {children}
            <ConsentCookies />
          </Parallax>
        </ThemeProvider>
        <Toaster />
        <Script
          id="structure-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedStructuredData }}
          defer
        />
        <Script
          id="fawrypay"
          type="text/javascript"
          src="https://atfawry.fawrystaging.com/atfawry/plugin/assets/payments/js/fawrypay-payments.js"
        />
        <Script
          id="geidea"
          type="text/javascript"
          src="https://www.merchant.geidea.net/hpp/geideaCheckout.min.js"
        />
      </body>
    </html>
  );
}

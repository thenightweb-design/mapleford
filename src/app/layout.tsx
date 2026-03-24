import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Lato } from "next/font/google";
import "./globals.css";
import WhatsAppChat from "../components/WhatsAppChat";
import Preloader from "../components/Preloader";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  fallback: ["monospace"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mapleford International School | CBSE & Canadian Curriculum | Hyderabad",
    template: "%s | Mapleford International School",
  },
  description:
    "Mapleford International School in Hayathnagar, Hyderabad offers a world-class CBSE curriculum enriched by Canadian pedagogy through Maple Bear Global Schools. Admissions open for Nursery to Grade 10.",
  keywords: [
    "Mapleford International School",
    "CBSE school Hyderabad",
    "Maple Bear Global Schools",
    "international school Hayathnagar",
    "Canadian curriculum India",
    "best school Hyderabad",
    "CBSE school Telangana",
    "top school Hayathnagar",
  ],
  authors: [{ name: "Mapleford International School" }],
  creator: "Mapleford International School",
  publisher: "Mapleford International School",
  metadataBase: new URL("https://maplefordinternational.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://maplefordinternational.com",
    siteName: "Mapleford International School",
    title: "Mapleford International School | CBSE & Canadian Curriculum | Hyderabad",
    description:
      "A premier CBSE school in Hayathnagar, Hyderabad, blending Indian academic excellence with Canadian pedagogy. Admissions open for Nursery to Grade 10.",
    images: [
      {
        url: "/SHEI.png",
        width: 512,
        height: 512,
        alt: "Mapleford International School Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mapleford International School | CBSE & Canadian Curriculum | Hyderabad",
    description:
      "A premier CBSE school in Hayathnagar, Hyderabad — where CBSE excellence meets Canadian innovation.",
    images: ["/SHEI.png"],
  },
  icons: {
    icon: [
      { url: "/SHEI.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/SHEI.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/SHEI.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${lato.variable} antialiased`}
      >
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18033379752"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18033379752');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSQHVZQ6');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSQHVZQ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Preloader />
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}

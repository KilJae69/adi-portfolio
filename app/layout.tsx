import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adi | Personal Portfolio",
  description:
    "I am fullstack and frontend developer highly focused on React, Next.js, and Tailwind CSS. ",
  metadataBase: new URL("https://adi-toromanovic.com"),
  openGraph: {
    title: "Adi | Personal Portfolio",
    description:
      "I am fullstack and frontend developer highly focused on React, Next.js, and Tailwind CSS.",
    url: "https://adi-toromanovic.com",
    type: "website",
    images: [
      {
        url: "/images/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Adi Toromanovic website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "Showcasing my React and Next.js projects",
    images: [
      {
        url: "/images/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Screenshot of my portfolio website",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 relative text-gray-950 pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900", "800", "600", "500", "300"],
  
})

export const metadata: Metadata = {
  title: "Fresh Flowers Delivered with Love",
  description: "Order fresh, beautiful flowers online. Handcrafted bouquets for birthdays, weddings, anniversaries & more. Same-day delivery available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}

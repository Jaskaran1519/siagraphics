import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

const inter = Manrope({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "Sia Graphics",
  description: "Your first stop for print related services",
  icons: {
    icon: "/whitelogo.png",
    shortcut: "/whitelogo.png",
    apple: "/whitelogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#ffff]`}>
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

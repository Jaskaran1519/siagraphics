// app/(routes)/cart/page.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext"; // Adjust the path as necessary
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface IIconProps {
  className?: string;
}

export default function Cart() {
  const { cart, clearCart } = useCart();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const calculatedTotal = cart.reduce(
      (acc, item) =>
        acc + (item.details?.price || 0) * (item.details?.quantity || 0),
      0
    );
    setTotal(calculatedTotal);
  }, [cart]);

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}
        >
          <PrinterIcon className="h-6 w-6" />
          <span>Acme Printing</span>
        </Link>
      </header>
      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          {cart.length > 0 ? (
            <div className="bg-background rounded-lg shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] hidden md:table-cell">
                      Image
                    </TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="hidden md:table-cell">
                        <img
                          src={item.details?.imageURL || ""}
                          width="64"
                          height="64"
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.productType}
                      </TableCell>
                      <TableCell>{item.details?.quantity || 0}</TableCell>
                      <TableCell>
                        ${(item.details?.price || 0).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        $
                        {(
                          (item.details?.price || 0) *
                          (item.details?.quantity || 0)
                        ).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="icon" onClick={clearCart}>
                  <XIcon className="h-4 w-4" />
                  <span className="sr-only">Clear Cart</span>
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-lg">Your cart is empty.</p>
              <Link href="/products">
                <Button className="mt-4">Shop Now</Button>
              </Link>
            </div>
          )}
          <div className="mt-8 bg-background rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="text-2xl font-bold">${total.toFixed(2)}</div>
            </div>
            <Button size="lg" className="w-full">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

function PrinterIcon(props: IIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  );
}

function TrashIcon(props: IIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function XIcon(props: IIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

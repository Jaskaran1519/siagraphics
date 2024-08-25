import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";

const cartitems: any[] = [
  {
    productId: "lklkllk",
    name: "Purse",
    price: "30000",
    photo:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "large",
    color: "red",
    quantity: "23",
    stock: "12",
  },
];
const subtotal = 100;
const shippingcharges = 100;
const discount = 50;
let total = subtotal + shippingcharges;

const Cart = () => {
  const [coupon, setCoupon] = useState("");
  const [isValidCoupon, setIsValidCoupon] = useState<Boolean>(false);
  if (cartitems.length == 0) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center">
        <h1 className="text-[3rem]">Cart is empty</h1>
      </div>
    );
  }
  return (
    <div className="w-[90%] mx-auto h-auto md:flex justify-between">
      <div className="w-full h-auto mb-44">
        <h1 className="mt-5 text-[2rem] mb-10">Shopping Cart</h1>
        {cartitems.map((i, idx) => (
          <CartItems key={idx} cartItem={i} />
        ))}
      </div>

      <div className="bg-background p-6 md:p-8 lg:p-10  rounded-lg  max-w-2xl text-zinc-900">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold border-b-2 border-black pb-3 mb-3">
              Order Summary
            </h2>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Subtotal</h2>
              <span className="text-2xl font-bold">${subtotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base text-muted-foreground">Shipping Fee</h3>
              <span className="text-lg font-medium">${shippingcharges}</span>
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="coupon" className="text-base font-medium">
              Coupon Code
            </label>
            <div className="flex items-center gap-2">
              <Input
                id="coupon"
                placeholder="Enter coupon code"
                className="flex-1"
                value={coupon}
                onChange={(e) => {
                  setCoupon(e.target.value);
                }}
              />
              <Button
                variant="outline"
                className="bg-zinc-800 text-white rounded-xl"
              >
                Apply
              </Button>
            </div>
            (coupon && isValidCoupon ?{" "}
            <span>{discount} off using the coupon code </span>:{" "}
            <span>Invalid coupon code </span>)
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Total</h2>
            <span className="text-3xl font-bold">${total}</span>
          </div>
          <Button
            size="lg"
            className="w-full bg-zinc-800 hover:bg-zinc-600 text-white rounded-xl"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

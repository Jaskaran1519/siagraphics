"use client";
import { ChangeEvent, useState } from "react";
export default function Component() {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
  });

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold mb-6">Review Order</h1>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Glimmer Lamps</h3>
                  <p className="text-gray-500">Quantity: 2</p>
                </div>
                <p className="font-medium">$250.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Aqua Filters</h3>
                  <p className="text-gray-500">Quantity: 1</p>
                </div>
                <p className="font-medium">$49.00</p>
              </div>
              <div className="border-t pt-4 flex justify-between items-center">
                <p className="font-medium">Subtotal</p>
                <p className="font-medium">$299.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium">Shipping</p>
                <p className="font-medium">$5.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium">Tax</p>
                <p className="font-medium">$25.00</p>
              </div>
              <div className="border-t pt-4 flex justify-between items-center">
                <p className="text-lg font-bold">Total</p>
                <p className="text-lg font-bold">$329.00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-6">Shipping Information</h1>
          <form action="">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={shippingInfo.name}
                  onChange={changeHandler}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={shippingInfo.address}
                  onChange={changeHandler}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your address"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={changeHandler}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your city"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={shippingInfo.state}
                    onChange={changeHandler}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your state"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="postal-code"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postal-code"
                    name="pinCode"
                    value={shippingInfo.pinCode}
                    onChange={changeHandler}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your postal code"
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={shippingInfo.country}
                    onChange={changeHandler}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your country"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl w-full"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

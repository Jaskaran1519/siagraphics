"use client";
import { useState, FormEvent } from "react";
import { useCart } from "../../../context/CartContext";

const StandeesOrder = () => {
  const [dimensions, setDimensions] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newOrder = {
      productType: "standee",
      details: { dimensions, quantity },
    };
    addToCart(newOrder);
    setDimensions("");
    setQuantity(1);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Order Standees</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="dimensions" className="block mb-1">
            Dimensions
          </label>
          <input
            id="dimensions"
            type="text"
            placeholder="Dimensions"
            value={dimensions}
            onChange={(e) => setDimensions(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block mb-1">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded"
            required
            min="1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default StandeesOrder;

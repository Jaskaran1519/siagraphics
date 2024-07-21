"use client";
import { useState, FormEvent } from "react";
import { useCart } from "../../../context/CartContext";

const CupsOrder = () => {
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { addToCart } = useCart();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    try {
      const cupOrder = {
        productType: "cup",
        details: { size, color, quantity },
      };

      // Add the order to the cart
      addToCart(cupOrder);
      setMessage("Cup order added to cart!");
      setSize("");
      setColor("");
      setQuantity(1);
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Order Cup</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="size" className="block mb-1">
            Size
          </label>
          <input
            id="size"
            type="text"
            placeholder="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="color" className="block mb-1">
            Color
          </label>
          <input
            id="color"
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
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
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Add to Cart"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 p-2 ${
            message.includes("Error")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default CupsOrder;

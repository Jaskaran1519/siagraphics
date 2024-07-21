"use client";
import { useState } from "react";

const VisitingCardOrder = () => {
  const [cardType, setCardType] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/orders/visitingCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cardType, quantity, image }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Card Type"
        value={cardType}
        onChange={(e) => setCardType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default VisitingCardOrder;

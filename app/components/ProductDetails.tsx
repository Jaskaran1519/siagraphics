import React from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div>
      <p>{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
    </div>
  );
}

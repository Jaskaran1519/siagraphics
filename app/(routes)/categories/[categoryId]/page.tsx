"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CarouselDemo } from "../../../components/CarouselDemo";
import { ProductDetails } from "../../../components/ProductDetails";
import { getProductsByCategory } from "../../../utils/productData";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export default function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const { categoryId } = params;
  const products = getProductsByCategory(categoryId);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const productId = searchParams.get("variant") || products[0].id;
    const product = products.find((p) => p.id === productId) || products[0];
    setSelectedProduct(product);
  }, [categoryId, searchParams, products]);

  const handleProductChange = (productId: string) => {
    router.push(`?variant=${productId}`, undefined);
  };

  if (!selectedProduct) return null;

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-3xl mb-4">{selectedProduct.name}</h1>
      <CarouselDemo products={products} onProductChange={handleProductChange} />
      <ProductDetails product={selectedProduct} />
    </div>
  );
}

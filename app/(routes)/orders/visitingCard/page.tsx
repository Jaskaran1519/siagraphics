"use client";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { useCart } from "../../../context/CartContext";
import FileUpload from "../../../components/FileUpload";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const VisitingCardsOrder = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [cardType, setCardType] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>("");
  const { addToCart } = useCart();

  const handleUpload = (url: string) => {
    setImageURL(url);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageURL) {
      alert("Please upload an image before submitting.");
      return;
    }
    const newOrder = {
      productType: "visitingCard",
      details: { quantity, cardType, imageURL },
    };
    addToCart(newOrder);
    setQuantity(1);
    setCardType("");
    setImageURL("");
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          {imageURL ? (
            <Image
              src={imageURL}
              alt="Uploaded Image"
              width={600}
              height={900}
              className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
            />
          ) : (
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={600}
              height={900}
              className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
            />
          )}
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Order Visiting Cards
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">$19.99 each</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label htmlFor="cardType" className="text-base">
              Card Type
            </Label>
            <Select
              onValueChange={(value) => setCardType(value)}
              defaultValue="matte"
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="matte">Matte Finish</SelectItem>
                <SelectItem value="glossy">Glossy Finish</SelectItem>
                <SelectItem value="raw">Raw</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-base">
              Quantity
            </Label>
            <Select
              onValueChange={(value) => setQuantity(Number(value))}
              defaultValue="1"
            >
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="upload" className="text-base">
              Upload Image
            </Label>
            <FileUpload onUpload={handleUpload} />
          </div>
          <Button size="lg" type="submit">
            Add to cart
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VisitingCardsOrder;

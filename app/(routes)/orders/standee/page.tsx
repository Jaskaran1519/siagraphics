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
import { generateMockup } from "../../../../utils/generateMockup";

const StandeesOrder = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [dimensions, setDimensions] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>("");
  const [mockupURL, setMockupURL] = useState<string>(""); // State to store the mockup URL
  const { addToCart } = useCart();

  const handleUpload = async (url: string) => {
    setImageURL(url);
    const mockupUrl = await generateMockup("standee", url); // Generate mockup URL
    setMockupURL(mockupUrl);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageURL) {
      alert("Please upload an image before submitting.");
      return;
    }
    const newOrder = {
      productType: "standee",
      details: { quantity, dimensions, imageURL, mockupURL }, // Include the mockup URL in the order details
    };
    addToCart(newOrder);
    setQuantity(1);
    setDimensions("");
    setImageURL("");
    setMockupURL("");
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          {mockupURL ? ( // Display the mockup if available
            <Image
              src={mockupURL}
              alt="Mockup Image"
              width={600}
              height={900}
              className="aspect-[4/4] object-cover border w-full rounded-lg overflow-hidden"
            />
          ) : (
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={600}
              height={900}
              className="aspect-[4/4] object-cover border w-full rounded-lg overflow-hidden"
            />
          )}
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">Order Standees</h1>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">$24.99 each</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label htmlFor="dimensions" className="text-base">
              Dimensions
            </Label>
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

export default StandeesOrder;

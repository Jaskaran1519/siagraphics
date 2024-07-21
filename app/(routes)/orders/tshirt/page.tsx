// app/(routes)/orders/tshirt/page.tsx
"use client";
import { useState, FormEvent } from "react";
import { useCart } from "../../../context/CartContext";
import FileUpload from "../../../components/FileUpload";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface IIconProps {
  className?: string;
}

export default function TShirtOrder() {
  const [size, setSize] = useState<string>("m");
  const [color, setColor] = useState<string>("black");
  const [quantity, setQuantity] = useState<number>(1);
  const [imageURL, setImageURL] = useState<string>("");
  const { addToCart, cart } = useCart();

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
      productType: "tshirt",
      details: { size, color, quantity, imageURL },
    };
    addToCart(newOrder);
    console.log("Cart after adding:", cart); // This may not reflect the latest addition due to state batching
    setSize("m");
    setColor("black");
    setQuantity(1);
    setImageURL("");
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <Image
            src={imageURL || "/placeholder.svg"}
            alt="Product Image"
            width={600}
            height={900}
            className="aspect-[4/4] object-cover border w-full rounded-lg overflow-hidden"
          />
          <div className="hidden md:flex gap-4 items-start">
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <Image
                src={imageURL || "/placeholder.svg"}
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 1</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <Image
                src={imageURL || "/placeholder.svg"}
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 2</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <Image
                src={imageURL || "/placeholder.svg"}
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 3</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <Image
                src={imageURL || "/placeholder.svg"}
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 4</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Acme Circles T-Shirt
          </h1>
          <div>
            <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <div className="text-4xl font-bold">$99</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label htmlFor="color" className="text-base">
              Color
            </Label>
            <RadioGroup
              id="color"
              value={color}
              onValueChange={(value) => setColor(value)}
              className="flex items-center gap-2"
            >
              <Label
                htmlFor="color-black"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-black" value="black" />
                Black
              </Label>
              <Label
                htmlFor="color-white"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-white" value="white" />
                White
              </Label>
              <Label
                htmlFor="color-blue"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-blue" value="blue" />
                Blue
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="size" className="text-base">
              Size
            </Label>
            <RadioGroup
              id="size"
              value={size}
              onValueChange={(value) => setSize(value)}
              className="flex items-center gap-2"
            >
              <Label
                htmlFor="size-xs"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-xs" value="xs" />
                XS
              </Label>
              <Label
                htmlFor="size-s"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-s" value="s" />S
              </Label>
              <Label
                htmlFor="size-m"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-m" value="m" />M
              </Label>
              <Label
                htmlFor="size-l"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-l" value="l" />L
              </Label>
              <Label
                htmlFor="size-xl"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-xl" value="xl" />
                XL
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-base">
              Quantity
            </Label>
            <Select
              value={String(quantity)}
              onValueChange={(value) => setQuantity(Number(value))}
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
          <div>
            <Label htmlFor="upload" className="text-base">
              Upload Image
            </Label>
            <FileUpload onUpload={handleUpload} />
          </div>
          <Button size="lg" type="submit">
            Add to Cart
          </Button>
        </form>
      </div>
    </div>
  );
}

function StarIcon({ className }: IIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M12 17.75l-5.42 2.85a.73.73 0 01-1.06-.76l1.03-6.02-4.4-4.29a.74.74 0 01.41-1.26l6.08-.88L11.3 2a.73.73 0 011.31 0l2.72 5.52 6.08.88a.74.74 0 01.41 1.26l-4.4 4.28 1.04 6.03a.73.73 0 01-1.07.76L12 17.75z"
        fill="currentColor"
      />
    </svg>
  );
}

"use client"; // Ensure this is a client component

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Breadcrumb from "../_components/Breadcrumb";

// Example data structure for products
const productData: Record<
  string,
  { id: string; name: string; image: string; description: string }[]
> = {
  "stickers-cards": [
    {
      id: "bcards",
      name: "Business Cards",
      image: "/collection/Cards/bcards.webp",
      description: "High-quality business cards.",
    },
    {
      id: "letterhead",
      name: "Letterhead",
      image: "/collection/Cards/letterhead.webp",
      description: "Professional letterheads.",
    },
    {
      id: "sticker",
      name: "Stickers",
      image: "/collection/Cards/sticker.webp",
      description: "High-quality Stickers.",
    },
    {
      id: "nfccards",
      name: "NFC Cards",
      image: "/collection/Cards/nfccards.webp",
      description: "Professional NFC cards.",
    },
  ],
  "marketing-prints": [
    {
      id: "flyer",
      name: "Flyers",
      image: "/collection/Marketing/flyer.webp",
      description: "Attractive flyers.",
    },
    {
      id: "phampleys",
      name: "Pamphlets",
      image: "/collection/Marketing/phampleys.webp",
      description: "Informative pamphlets.",
    },
    {
      id: "trifold",
      name: "Trifold",
      image: "/collection/Marketing/trifold.webp",
      description: "Compact and informative trifolds.",
    },
    {
      id: "brouchure",
      name: "Brochure",
      image: "/collection/Marketing/brouchure.webp",
      description: "Detailed brochures for marketing.",
    },
  ],
  banner: [
    {
      id: "banner",
      name: "Banners",
      image: "/collection/Banners/banner.webp",
      description: "Personalized marketing banners.",
    },
    {
      id: "canvas",
      name: "Canvas",
      image: "/collection/Banners/canvas.webp",
      description: "Customized canvas prints.",
    },
  ],
  apparel: [
    {
      id: "tshirt",
      name: "T-Shirt",
      image: "/collection/Apparel/tshirt.webp",
      description: "Comfortable custom t-shirts.",
    },
    {
      id: "stickers",
      name: "Stickers",
      image: "/collection/Apparel/stickers.webp",
      description: "Comfortable custom t-shirts.",
    },
    {
      id: "cup",
      name: "Cup",
      image: "/collection/Apparel/cup.webp",
      description: "Comfortable custom t-shirts.",
    },
    {
      id: "bottle",
      name: "Bottle",
      image: "/collection/Apparel/bottle.webp",
      description: "Comfortable custom t-shirts.",
    },
    {
      id: "mousepad",
      name: "Mousepad",
      image: "/collection/Apparel/mousepad.webp",
      description: "Warm and cozy hoodies.",
    },
  ],
  vynels: [
    {
      id: "frost",
      name: "Frost",
      image: "/collection/Vynels/frost.webp",
      description: "Custom printed mugs.",
    },
    {
      id: "onewayvision",
      name: "One Way Vision",
      image: "/collection/Vynels/onewayvision.webp",
      description: "Soft and decorative pillows.",
    },
    {
      id: "vynel",
      name: "Vynel",
      image: "/collection/Vynels/vynel.webp",
      description: "Custom printed mugs.",
    },
    {
      id: "standee",
      name: "Standee",
      image: "/collection/Vynels/standee.webp",
      description: "Soft and decorative pillows.",
    },
    {
      id: "sunboard",
      name: "Sunboard",
      image: "/collection/Vynels/sunboard.webp",
      description: "Soft and decorative pillows.",
    },
  ],
  boards: [
    {
      id: "noparking",
      name: "No Parking Posters",
      image: "/collection/Boards/noparking.webp",
      description: "Customizable notebooks.",
    },
    {
      id: "kiteshape",
      name: "Kite Shape Banners",
      image: "/collection/Boards/kiteshape.webp",
      description: "Personalized pens.",
    },
  ],
  "acrylic-neon": [
    {
      id: "acrylic",
      name: "Acrylic Boards",
      image: "/collection/Acrylic/acrylic.webp",
      description: "Vibrant posters for decoration.",
    },
    {
      id: "neon",
      name: "Neon Boards",
      image: "/collection/Acrylic/neon.webp",
      description: "Elegant framed posters.",
    },
  ],
  "lolipop-canopy": [
    {
      id: "lolipop",
      name: "Lolipop Boards",
      image: "/collection/Lolipop/lolipop.webp",
      description: "Downloadable e-books.",
    },
    {
      id: "canopy",
      name: "Canopy",
      image: "/collection/Lolipop/canopy.webp",
      description: "Customizable digital templates.",
    },
  ],
};

const colorOptions = ["Black", "White", "Blue"];
const sizeOptions = ["XS", "S", "M", "L", "XL"];

const CategoryPage = () => {
  const { category } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Assert category is a string
  const categoryString = typeof category === "string" ? category : "";

  // Get the initial variant from the URL, or default to the first product
  const initialVariant =
    searchParams.get("variant") || productData[categoryString]?.[0]?.id;
  const [selectedVariant, setSelectedVariant] = useState<string | null>(
    initialVariant || null
  );
  const [selectedColor, setSelectedColor] = useState<string | null>("Black");
  const [selectedSize, setSelectedSize] = useState<string | null>("M");

  // Update the URL when the variant changes
  useEffect(() => {
    if (selectedVariant) {
      router.push(
        `/collection/${categoryString}?variant=${selectedVariant}`,
        undefined
      );
    }
  }, [selectedVariant]);

  // Find the current product based on the selected variant
  const currentProduct = productData[categoryString]?.find(
    (product) => product.id === selectedVariant
  );

  if (!currentProduct) return <div>Product not found</div>;

  return (
    <div className="w-[90%] mx-auto h-auto bg-background text-foreground flex flex-col">
      <main className="flex-1 container mx-auto py-3 px-4 md:px-6 lg:px-8 my-5">
        <Breadcrumb />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
          <div
            style={{
              backgroundImage:
                "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(90deg)",
            }}
            className=" aspect-square min-h-[40vh] md:max-w-[40vw] md:h-auto rounded-2xl overflow-hidden relative md:sticky top-20"
          >
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              width={500}
              height={500}
              className="w-[90%] -rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h1>Sia Graphics</h1>
              <h1 className="text-4xl font-bold mb-3">{currentProduct.name}</h1>
              <p className="text-muted-foreground">
                {currentProduct.description}
              </p>
            </div>

            {/* Product Select Dropdown */}
            <div className="space-y-4">
              <Label htmlFor="product" className="text-base font-medium">
                Choose a Product
              </Label>
              <Select onValueChange={(value) => setSelectedVariant(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  {productData[categoryString]?.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Color Select Dropdown */}
            <div className="space-y-4">
              <Label htmlFor="color" className="text-base font-medium">
                Color
              </Label>
              <Select onValueChange={(value) => setSelectedColor(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  {colorOptions.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Size Select Dropdown */}
            <div className="space-y-4">
              <Label htmlFor="size" className="text-base font-medium">
                Size
              </Label>
              <Select onValueChange={(value) => setSelectedSize(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {sizeOptions.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Upload Design */}
            <div className="space-y-2">
              <Label htmlFor="image" className="text-base font-medium ">
                Upload your Design
              </Label>
              <div className="flex items-center gap-4">
                <Input id="image" type="file" className="w-[50%]" />
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-[1vh] bg-primary text-white"
                >
                  Upload
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                size="lg"
                variant="outline"
                className="flex-1 bg-primary text-white rounded-xl hover:bg-background hover:text-black "
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 bg-white rounded-xl "
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;

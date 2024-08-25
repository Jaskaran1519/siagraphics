
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="w-[90%] mx-auto h-auto bg-background text-foreground  flex flex-col">
      <main className="flex-1 container mx-auto py-12 px-4 md:px-6 lg:px-8 my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
          <div>
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-cover aspect-square"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-3">Acme Prism T-Shirt</h1>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat illo ducimus sapiente obcaecati nulla unde sit soluta
                quia omnis vitae!
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="color" className="text-base font-medium">
                  Color
                </Label>
                <RadioGroup
                  id="color"
                  defaultValue="black"
                  className="flex items-center gap-4"
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
              <div>
                <Label htmlFor="size" className="text-base font-medium">
                  Size
                </Label>
                <RadioGroup
                  id="size"
                  defaultValue="m"
                  className="flex items-center gap-4"
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
              <div className="space-y-2">
                <Label htmlFor="image" className="text-base font-medium ">
                  Upload you Design
                </Label>
                <div className="flex items-center gap-4">
                  <Input id="image" type="file" className="w-[50%]" />
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-[1vh] bg-zinc-800 text-white"
                  >
                    Upload
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex gap-4 ">
              <Button
                size="lg"
                className="flex-1 bg-zinc-900 text-white rounded-xl hover:bg-zinc-600"
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
}

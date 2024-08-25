import * as React from "react";
import { Cross, Minus, Plus, ShoppingBagIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Cart from "./cart/Cart";

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button >
          <ShoppingBagIcon className="text-white p-0" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <Cart />
        <DrawerClose asChild className="fixed top-5 right-5">
          <div className="p-1 rounded-xl border-[2px] border-zinc-600 ">
            <X />
          </div>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerDemo;

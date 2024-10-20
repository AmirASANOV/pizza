"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { FC, PropsWithChildren } from "react";

export const CartTest: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className=" bg-[#ffffff]">
        <div>123</div>
      </SheetContent>
    </Sheet>
  );
};

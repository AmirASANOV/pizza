'use client'

import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

interface Props {
  className?: string;
}

export const CartDrawer: FC<PropsWithChildren<Props>> = ({ children, className }) => {

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
          <SheetDescription>View your cart</SheetDescription>
        </SheetHeader>
        <div>123123123</div>
        {/*  items */}

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
              </span>

              <span className="font-bold text-lg">500 ₽</span>
            </div>

            <Link href="/cart">
              <Button className="w-full h-12 text-base" type="submit">
                Оформить заказ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};



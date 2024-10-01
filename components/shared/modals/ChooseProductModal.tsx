"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import React, { FC } from "react";
import { Title } from "../title";
import { useRouter } from "next/navigation";
import { ChoosePizzaForm } from "../ChoosePizzaForm";

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ product, className }) => {
  const router = useRouter();
  console.log(product);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className="p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden">
        <ChoosePizzaForm
          imageUrl={product.imageUrl}
          name={product.name}
          ingredients={undefined}
          items={undefined}
        />
      </DialogContent>
    </Dialog>
  );
};

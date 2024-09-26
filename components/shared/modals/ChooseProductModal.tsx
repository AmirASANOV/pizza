"use client";

import { Dialog } from "@/components/ui/dialog";
import { DialogContent, Title } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";

import React, { FC } from "react";

interface Props {
  product: Product;
}

export const ChooseProductModal: FC<Props> = ({ product }) => {
  return (
    <Dialog open={Boolean(product)}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden"
        )}
      >
        <Title>{product.name}</Title>
      </DialogContent>
    </Dialog>
  );
};

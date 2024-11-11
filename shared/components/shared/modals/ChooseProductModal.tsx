"use client";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "../ChoosePizzaForm";
import { ChooseProductForm } from "../ChooseProductForm";
import { useCartStore } from "@/shared/store/Cart";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(product.items[0].pizzaType);
  const addCartItem = useCartStore((state) => state.addCartItem);

  const onAddProduct = () => {
    addCartItem({
      productId: firstItem.id,
    });
  };
  const onAddPizza = (productItemId: number, ingredients: number[]) => {
    addCartItem({
      productItemId,
      ingredients,
    });
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className="p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden">
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onAddPizza}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onAddProduct}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

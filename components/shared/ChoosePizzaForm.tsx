import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { ProductImage } from "./ProductImage";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any;
  items: any;
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  onClickAdd,
  className,
}) => {
  const textDetails = "30см, традиционное тесто, сыр Моцарелла, сырный соус";
  const price = 350;

  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={20} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="sm" className="mb-5 font-bold" />

        <p className="text-gray-400 ">{textDetails}</p>

        <Button className="h-[55px] px-10 text-base font-bold rounded-[18px] w-full">
          Добавить в корзину за <b>{price} ₽</b>
        </Button>
      </div>
    </div>
  );
};

import { cn } from "@/shared/lib/utils";
import React, { FC } from "react";
import { ProductImage } from "./ProductImage";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;

  onSubmit?: VoidFunction;
  className?: string;
}

/**
 * Форма выбора продукта
 * @param param0
 * @returns
 */

export const ChooseProductForm: FC<Props> = ({
  imageUrl,
  name,
  onSubmit,
  className,
}) => {
  const textDetails = "30см, традиционное тесто, сыр Моцарелла, сырный соус";
  const price = 350;

  return (
    <div className={cn(className, "flex flex-1")}>
      {/* <ProductImage imageUrl={imageUrl} size={40} /> */}
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[450px] h-[450px]"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="sm" className="mb-5 font-bold" />

        <p className="text-gray-400 ">{textDetails}</p>

        <Button
          onClick={onSubmit}
          className="h-[55px] px-10 text-base font-bold rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за <p className="ml-1">{price} ₽</p>
        </Button>
      </div>
    </div>
  );
};

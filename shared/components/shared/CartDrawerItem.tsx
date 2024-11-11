import { cn } from "@/shared/lib/utils";
import React, { FC } from "react";

import * as CartItem from "./cart-item-details";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CountButton } from "./CountButton";
import { Trash2Icon } from "lucide-react";

interface Props extends CartItemProps {
  className?: string;
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
}

export const CartDrawerItem: FC<Props> = ({
  className,
  id,
  onClickCountButton,
  imageUrl,
  name,
  price,
  details,
  quantity,
  onClickRemove,
}) => {
  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
      <CartItem.Image src={imageUrl} />

      <div className="flex-1">
        <CartItem.Info details={details} name={name} />
        <hr className="my-3" />

        <div className="flex justify-between items-center">
          <CountButton
            onClick={onClickCountButton}
            size="sm"
            value={quantity}
          />

          <div className="flex items-center gap-3">
            <CartItem.Price value={price} />
            <Trash2Icon
              onClick={onClickRemove}
              className="text-gray-400 cursor-pointer hover:text-gray-500"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
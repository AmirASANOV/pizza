import { Cart } from "@prisma/client";
import { CartDTO } from "../services/dto/cart.dto";
import { calcCartItemTotalPrice } from "./calcCartItemTotalPrice";

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  pizzaSizes?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
  price: number;
};

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.ProductItem.product.name,
    imageUrl: item.ProductItem.product.imageUrl,
    pizzaSizes: item.ProductItem.size,
    price: calcCartItemTotalPrice(item),
    pizzaType: item.ProductItem.pizzaType,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  }));

  return { items, totalAmount: data.totalAmount };
};

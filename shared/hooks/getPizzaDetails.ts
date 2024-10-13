import { Ingredient, ProductItem } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcTotalPizzaPrice } from "../lib";

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(
    items,
    size,
    type,
    ingredients,
    selectedIngredients
  );
  const textDetails = `${size}  см, ${mapPizzaType[type]} пицца `;

  return {
    totalPrice,
    textDetails,
  };
};

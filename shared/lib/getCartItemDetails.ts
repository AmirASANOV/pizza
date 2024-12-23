import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";

import { Ingredient } from "@prisma/client";

export const getCartItemDetails = (
  ingredients: Ingredient[],
  pizzaType: PizzaType | null,
  pizzaSize: PizzaSize | null
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};

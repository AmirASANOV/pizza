import { ProductItem, Ingredient } from "@prisma/client";
import { PizzaSize, PizzaType } from "./../constants/pizza";

/**
 * Функция для подсчета общей стоимости пиццы
 * @param items
 * @param size
 * @param type
 * @param ingredients
 * @param selectedIngredients
 * @returns
 */

export const calcTotalPizzaPrice = (
  items: ProductItem[],
  size: PizzaSize,
  type: PizzaType,
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  const price = pizzaPrice + totalIngredientPrice;

  return price;
};

import { type } from "os";
import { useEffect } from "react";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { Variant } from "../components/shared/GroupVariants";

export const useActiveAvailablePizzaSizes = (
  availableSizes: Variant[],
  size: PizzaSize,
  type: PizzaType
) => {
  useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);
};

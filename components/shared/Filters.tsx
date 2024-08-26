"use client";
import React from "react";
import { FilterCheckbox, Title, RangeSlider } from ".";
import { Input } from "../ui";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
import { useFilterIngredients } from "@/app/hooks/useFiltersIngredients";
import { useSet } from "react-use";

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters = () => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));

  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };
  return (
    <div>
      <Title text="Фильтры" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-5">
        <CheckboxFiltersGroup
          name="sizes"
          selected={sizes}
          title="Размеры"
          className="mb-5"
          onClickCheckbox={toggleSizes}
          items={[
            { text: "Маленькая", value: "20" },
            { text: "Средняя", value: "30" },
            { text: "Большая", value: "40" },
          ]}
        />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={2000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="3000"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          value={[prices.priceFrom, prices.priceTo]}
          step={10}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>

      <CheckboxFiltersGroup
        title={"Ингрендиенты"}
        className="mt-5"
        limit={5}
        defaultItems={items.slice(0, 5)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIds}
      />
    </div>
  );
};

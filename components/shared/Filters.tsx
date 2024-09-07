"use client";

import React, { useEffect } from "react";
import { Title, RangeSlider } from ".";
import { Input } from "../ui";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
import { useIngredients, useFilters, useQueryFilters } from "@/hooks";

export const Filters = () => {
  const filters = useFilters();
  const { ingredients, loading } = useIngredients();

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  useQueryFilters(filters);

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div>
      <Title text="Фильтры" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-5 mb-5">
        <CheckboxFiltersGroup
          name="pizzaTypes"
          selected={filters.pizzaTypes}
          title="Тип теста: "
          className="mb-5"
          onClickCheckbox={filters.setPizzaTypes}
          items={[
            { text: "Тонкое", value: "1" },
            { text: "Традиционное", value: "2" },
          ]}
        />
      </div>

      <div className="flex flex-col gap-5">
        <CheckboxFiltersGroup
          name="sizes"
          selected={filters.sizes}
          title="Размеры"
          className="mb-5"
          onClickCheckbox={filters.setSizes}
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
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="3000"
            min={100}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          step={10}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title={"Ингрендиенты"}
        name="ingredients"
        className="mt-5"
        limit={5}
        defaultItems={items.slice(0, 5)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};

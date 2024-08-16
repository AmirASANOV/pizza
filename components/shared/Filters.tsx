import React from "react";
import { FilterCheckbox, Title, RangeSlider } from ".";
import { Input } from "../ui";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";

export const Filters = () => {
  return (
    <div>
      <Title text="Фильтры" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-5">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={2000}
            defaultValue={0}
          />
          <Input type="number" placeholder="30000" min={100} max={30000} />
        </div>
        <RangeSlider min={0} max={30000} value={[0, 30000]} step={0} />
      </div>

      <CheckboxFiltersGroup
        title={"Ингрендиенты"}
        className="mt-5"
        limit={5}
        defaultItems={[
          { text: "Сыр", value: "1" },
          { text: "Мясо", value: "2" },
          { text: "Сыр", value: "1" },
          { text: "Мясо", value: "2" },
          { text: "Сыр", value: "1" },
          { text: "Мясо", value: "2" },
          { text: "Сыр", value: "1" },
          { text: "Мясо", value: "2" },
        ]}
        items={[
          { text: "Сыр", value: "1", endAdornment: "2" },
          { text: "Мясо", value: "2", endAdornment: "3" },
          { text: "Огурцы", value: "1", endAdornment: "2" },
          { text: "Морковь", value: "2", endAdornment: "3" },
          { text: "стейк", value: "2", endAdornment: "3" },
          { text: "Огурцы", value: "1", endAdornment: "2" },
          { text: "Морковь", value: "2", endAdornment: "3" },
          { text: "стейк", value: "2", endAdornment: "3" },
        ]}
      />
    </div>
  );
};

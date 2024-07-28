import { cn } from "@/lib/utils";
import React, { FC } from "react";

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
  "Десерты",
];
const activeIndex = 0;

interface Props {
  className?: string;
}

export const Categories: FC<Props> = (className) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            "flex items-center gap-1 px-3 py-1 rounded-2xl",
            index === activeIndex &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};

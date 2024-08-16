"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/Category";
import React, { FC } from "react";

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Бургеры" },
  { id: 3, name: "Напитки" },
  { id: 4, name: "Десерты" },
  { id: 5, name: "Закуски" },
  { id: 6, name: "Соусы" },
];

interface Props {
  className?: string;
}

export const Categories: FC<Props> = (className) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items-center gap-1 px-3 py-1 rounded-2xl",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};

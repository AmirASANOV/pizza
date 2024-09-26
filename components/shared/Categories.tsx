"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/Category";
import { Category } from "@prisma/client";
import React, { FC } from "react";

interface Props {
  className?: string;
  items: Category[];
}

export const Categories: FC<Props> = ({ className, items }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {items.map(({ name, id }, index) => (
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

import React, { FC } from "react";
import { Categories } from "./Categories";
import { SortPopup } from "./Sort-popup";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
}

export const TopBar: FC<Props> = ({ categories }) => {
  return (
    <div
      className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10")}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};

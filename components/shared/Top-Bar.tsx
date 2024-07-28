import React from "react";
import { Categories } from "./Categories";
import { SortPopup } from "./Sort-popup";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export const TopBar = () => {
  return (
    <div
      className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10")}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};

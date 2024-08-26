"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

import Link from "next/link";
import React, { useRef } from "react";
import { useClickAway, useDebounce } from "react-use";

import { Api } from "../../services/api-client";
import { Product } from "@prisma/client";

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);

  const ref = useRef(null);

  useClickAway(ref, () => setFocused(false));

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((data) => setProducts(data));
    },
    100,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30" />
      )}
      <div
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30"
        )}
        ref={ref}
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full h-11 px-12 bg-gray-100 pl-11"
          type="text"
          placeholder="Поиск"
          onFocus={() => setFocused(!focused)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100"
                onClick={onClickItem}
              >
                <img
                  src={product.imageUrl}
                  alt="image"
                  className="rounded-sm h-8 w-8"
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

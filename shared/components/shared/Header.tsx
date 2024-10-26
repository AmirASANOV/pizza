"use client";

import React from "react";
import { Container } from "./Container";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";

import { Button } from "../ui";
import { ArrowRight, Moon, ShoppingCart, Sun, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { CartButton } from "./CartButton";
import { useTheme } from "next-themes";
import { SwitchButton } from "./SwitchButton";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <Image src="/logo.png" width={35} height={35} alt="Logo" />

            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <SwitchButton />

          <Button className="flex items-center gap-1" variant={"outline"}>
            <User size={16} />
            Вход
          </Button>

          <CartButton />
        </div>
      </Container>
    </header>
  );
};

'use client';

import React from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Button } from "../ui";
import { ArrowRight, Moon, ShoppingCart, Sun, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { CartButton } from "./CartButton";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


interface Props {
  className?: string;
}

export const Header: React.FC< Props > = ({ className }) => {
  const { setTheme } = useTheme();
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
          <Button className="flex items-center gap-1" variant={"outline"}>
            <User size={16} />
            Вход
          </Button>

          <CartButton />
        </div>

        {/* <div className="ml-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
      </Container>
    </header>
  );
};

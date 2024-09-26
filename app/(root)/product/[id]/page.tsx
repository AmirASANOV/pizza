import { ProductsGroupList } from "@/components/shared/ProductsGroupList";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { Container } from "postcss";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>123</div>;
}

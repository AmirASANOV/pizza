import { ProductImage } from "@/components/shared/ProductImage";

import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { Container, Title } from "@/components/shared";
import { GroupVariants } from "@/components/shared/GroupVariants";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="mt-10">
      <div className="flex gap-10 flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} />
        <div className="w-[490px] bg-[#e2e2e277] p-7">
          <Title text={product.name} size="md" className="font-extrabold" />
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            repellat porro iste.
          </p>
          <GroupVariants
            selectedValue="2"
            items={[
              {
                name: "small",
                value: "1",
              },
              {
                name: "sredn",
                value: "2",
              },
              {
                name: "big",
                value: "3",
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}

import { Container, Filters, Title, TopBar } from "@/shared/components/shared";
import { ProductsGroupList } from "@/shared/components/shared/ProductsGroupList";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
          ingredients: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="Главная" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />

      <Container className="mt-[40px] pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map((category) => (
                <ProductsGroupList
                  key={category.id}
                  title={category.name}
                  items={category.products}
                  categoryId={category.id}
                />
              ))}

              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Пицца 12",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 300,
                    items: [{ price: 300 }],
                  },
                ]}
                categoryId={2}
              />
              <ProductsGroupList
                title="Закуски"
                items={[
                  {
                    id: 1,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 300,
                    items: [{ price: 300 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

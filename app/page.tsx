import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/ProductCard";
import { ProductsGroupList } from "@/components/shared/ProductsGroupList";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Главная" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-[40px] pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
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
                categoryId={1}
              />

              <ProductsGroupList
                title="Бургеры"
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
                categoryId={2}
              />
              <ProductsGroupList
                title="Напитки"
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

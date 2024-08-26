import { ApiRoutes } from "./constants";
import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
export const search = async (query: string) => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    })
  ).data;
};

// export const search = async (query: string) => {
//   const { data } = await axiosInstance.get<Product[]>("/products/search", {
//     params: { query },
//   });

//   return data;
// };

import { Product } from "@entities/Product";

export interface IProductRepository {
  add: () => Promise<void>,
  getAll: () => Promise<Product[]>,
  getByID: (product_id: number) => Promise<Product | null>,
  delete: (product_id: number) => Promise<void>,
  edit: (product_id: number) => Promise<void>,
}
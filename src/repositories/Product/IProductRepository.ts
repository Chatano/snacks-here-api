import { Product } from "@entities";
import { AddProductDTO } from "@dtos/AddProductDTO";

export interface IProductRepository {
  add: (data: AddProductDTO) => Promise<Product>,
  getAll: () => Promise<Product[]>,
  getByID: (product_id: number) => Promise<Product | null>,
  delete: (product_id: number) => Promise<void>,
  edit: (id: number, updatedFields: Partial<AddProductDTO>) => Promise<Product>,
}
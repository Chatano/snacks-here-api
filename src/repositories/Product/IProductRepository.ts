import type { AddProductDTO } from '@dtos/AddProductDTO'
import type { Product } from '@entities'

export interface IProductRepository {
  add: (data: AddProductDTO) => Promise<Product>
  getAll: () => Promise<Product[]>
  getByID: (productId: number) => Promise<Product | null>
  getByIds: (productIds: number[]) => Promise<Product[]>
  delete: (productId: number) => Promise<void>
  edit: (id: number, updatedFields: Partial<AddProductDTO>) => Promise<Product>
}

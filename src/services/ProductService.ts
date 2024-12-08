import type { AddProductDTO } from '@dtos/AddProductDTO'
import type { IProductRepository } from '@repositories/Product/IProductRepository'
import { inject } from 'tsyringe'

export class ProductService {
  constructor(
    @inject('ProductRepository') private productsRepository: IProductRepository,
  ) {}

  public async addProduct(dto: AddProductDTO) {
    return await this.productsRepository.add(dto)
  }

  public async getAll() {
    return await this.productsRepository.getAll()
  }

  public async getByID(productId: number) {
    return await this.productsRepository.getByID(productId)
  }

  public async edit(id: number, updatedFields: Partial<AddProductDTO>) {
    return await this.productsRepository.edit(id, updatedFields)
  }

  public async delete(productId: number) {
    await this.productsRepository.delete(productId)
  }
}

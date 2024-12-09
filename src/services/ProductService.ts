import type { AddProductDTO } from '@dtos/AddProductDTO'
import { AppError } from '@errors/app-error'
import type { IProductRepository } from '@repositories/Product/IProductRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
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
    const foundOrder = await this.productsRepository.getByID(id)

    if (!foundOrder) throw new AppError('Product ID not found', 404)

    return await this.productsRepository.edit(id, updatedFields)
  }

  public async delete(id: number) {
    const foundOrder = await this.productsRepository.getByID(id)
    
    if (!foundOrder) throw new AppError('Product ID not found', 404)

    await this.productsRepository.delete(id)
  }
}

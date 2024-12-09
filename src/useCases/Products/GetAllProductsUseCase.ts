import { ProductService } from '@services/ProductService'
import { container } from 'tsyringe'

export class GetAllProductsUseCase {
  public static async execute() {
    const service = container.resolve(ProductService)
    const products = await service.getAll()

    return products
  }
}

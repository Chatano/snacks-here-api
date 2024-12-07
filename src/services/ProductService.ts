import { AddProductDTO } from "@dtos/AddProductDTO";
import { IProductRepository } from "@repositories/Product/IProductRepository";

export class ProductService {
  constructor(
    private productsRepository: IProductRepository
  ) {}

  public async addProduct(dto: AddProductDTO) {
    return await this.productsRepository.add(dto)
  }

  public async getAll() {
    return await this.productsRepository.getAll()
  }

  public async getByID(product_id: number) {
    return await this.productsRepository.getByID(product_id)
  }

  public async edit(id: number, updatedFields: Partial<AddProductDTO>) {
    return await this.productsRepository.edit(id, updatedFields)
  }

  public async delete(product_id: number) {
    await this.productsRepository.delete(product_id)
  }
}
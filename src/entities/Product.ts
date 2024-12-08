import type { Product as DbProduct } from '@prisma/client'

export class Product {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly price: number,
  ) {}

  public static mapFromDb(dbProduct: DbProduct): Product {
    return new Product(dbProduct.id, dbProduct.name, dbProduct.price)
  }
}

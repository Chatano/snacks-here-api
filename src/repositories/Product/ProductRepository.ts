import type { AddProductDTO } from '@dtos/AddProductDTO'
import { Product } from '@entities'
import { PrismaClient } from '@prisma/client'
import { injectable } from 'tsyringe'
import type { IProductRepository } from './IProductRepository'

const prisma = new PrismaClient()

@injectable()
export class ProductRepository implements IProductRepository {
  public async add(data: AddProductDTO) {
    const product = await prisma.product.create({ data })
    return Product.mapFromDb(product)
  }

  public async getAll() {
    const products = await prisma.product.findMany()
    return products.map(Product.mapFromDb)
  }

  public async getByID(id: number) {
    const product = await prisma.product.findUnique({ where: { id } })
    if (!product) {
      return null
    }
    return Product.mapFromDb(product)
  }

  public async delete(id: number) {
    await prisma.product.delete({ where: { id } })
  }

  public async edit(id: number, data: Partial<AddProductDTO>) {
    const product = await prisma.product.update({
      where: { id },
      data,
    })
    return Product.mapFromDb(product)
  }
}

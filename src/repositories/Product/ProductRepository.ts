import { PrismaClient } from '@prisma/client';
import { IProductRepository } from './IProductRepository'
import { Product } from '@entities/Product';
import { AddProductDTO } from 'src/dtos/AddProductDTO';

const prisma = new PrismaClient();

export class ProductRepository implements IProductRepository {
  public async add(data: AddProductDTO) {
    const product = await prisma.product.create({ data });
    return Product.mapFromDb(product)
  }

  public async getAll() {
    const products = await prisma.product.findMany()
    return products.map(Product.mapFromDb)
  }

  public async getByID(id: number) {
    const product = await prisma.product.findUnique({ where: { id }})
    if (!product) return null
    return Product.mapFromDb(product)
  }

  public async delete(id: number) {
    await prisma.product.delete({ where: { id }})
  }

  public async edit(id: number, data: Partial<AddProductDTO>) {
    const product = await prisma.product.update({
      where: { id },
      data
    })
    return Product.mapFromDb(product)
  }
}
import type { RegisterOrderProductDTO } from '@dtos/RegisterOrderProductDTO'
import { PrismaClient } from '@prisma/client'
import type { IOrderProductRepository } from './IOrderProductRepository'

const prisma = new PrismaClient()

export class OrderProductRepository implements IOrderProductRepository {
  public async add(data: RegisterOrderProductDTO) {
    await prisma.order_Product.create({ data })
  }

  public async addMany(data: RegisterOrderProductDTO[]) {
    await prisma.order_Product.createMany({ data })
  }
}

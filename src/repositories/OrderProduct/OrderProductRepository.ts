import { PrismaClient } from '@prisma/client';
import { OrderProduct } from '@entities';
import { IOrderProductRepository } from './IOrderProductRepository';
import { RegisterOrderProductDTO } from '@dtos/RegisterOrderProductDTO';

const prisma = new PrismaClient();

export class OrderProductRepository implements IOrderProductRepository {
  public async add(data: RegisterOrderProductDTO) {
    await prisma.order_Product.create({ data });
  }

  public async addMany(data: RegisterOrderProductDTO[]) {
    await prisma.order_Product.createMany({ data });
  }
}
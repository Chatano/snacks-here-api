import { PrismaClient } from '@prisma/client';
import { Order, Product, OrderProduct } from '@entities';
import { IOrderProductRepository } from './IOrderProductRepository';

const prisma = new PrismaClient();

export class OrderProductRepository implements IOrderProductRepository {
  public async add(order_id: number, product_id: number, quantity: number) {
    const orderProduct = await prisma.order_Product.create({ 
      data: { order_id, product_id, quantity },
      include: { product: true }
    });
    return OrderProduct.mapFromDb(orderProduct, orderProduct.product)
  }
}
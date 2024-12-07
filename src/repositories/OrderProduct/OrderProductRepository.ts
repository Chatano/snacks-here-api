import { PrismaClient } from '@prisma/client';
import { Order, Product, OrderProduct } from '@entities';
import { IOrderProductRepository } from './IOrderProductRepository';

const prisma = new PrismaClient();

export class OrderProductRepository implements IOrderProductRepository {
  public async add(order: Order, product: Product, quantity: number) {
    const orderProduct = await prisma.order_Product.create({ 
      data: {
        order_id: order.id,
        product_id: product.id,
        quantity,
      }
    });
    return OrderProduct.mapFromDb(orderProduct, product)
  }
}
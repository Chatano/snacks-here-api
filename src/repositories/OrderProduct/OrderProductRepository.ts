import { PrismaClient, Order_Product as PrismaOrderProduct, Product as PrismaProduct, Order as PrismaOrder } from '@prisma/client';
import { Order } from '@entities/Order';
import { Product } from '@entities/Product';
import { IOrderProductRepository } from './IOrderProductRepository';
import { OrderProduct } from '@entities/OrderProduct';

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
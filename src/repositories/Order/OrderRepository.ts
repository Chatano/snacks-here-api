import { ORDER_STATUS, PrismaClient, Order_Product as PrismaOrderProduct, Product as PrismaProduct, Order as PrismaOrder } from '@prisma/client';
import { Order, OrderProduct } from '@entities/index';
import { IOrderRepository } from './IOrderRepository';
import { RegisterOrderDTO } from '@dtos/RegisterOrderDTO';

const prisma = new PrismaClient();

export class OrderRepository implements IOrderRepository {
  public async add(data: RegisterOrderDTO) {
    const order = await prisma.order.create({ data });
    return Order.mapFromDb(order)
  }
  
  public async getOrders(status?: ORDER_STATUS) {
    const orders = await prisma.order.findMany({ 
      where: { status }, 
      include: { order_products: { include: { product: true }} },
    })

    return this.mapOrders(orders)
  }

  private mapOrders(orders: Array<PrismaOrder & { order_products: Array<PrismaOrderProduct & { product: PrismaProduct }> }>): Order[] {
    const mappedOrders = orders.map(order => {
      const orderProducts = order.order_products.map(orderProduct =>
        OrderProduct.mapFromDb(orderProduct, orderProduct.product)
      );
      return Order.mapFromDb(order, orderProducts);
    });

    return mappedOrders
  }
}
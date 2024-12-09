import type { RegisterOrderDTO } from '@dtos/RegisterOrderDTO'
import { Order, ORDER_STATUS, OrderProduct } from '@entities/index'
import {
  PrismaClient,
  type Order as PrismaOrder,
  type Order_Product as PrismaOrderProduct,
  type Product as PrismaProduct,
} from '@prisma/client'
import { injectable } from 'tsyringe'
import type { IOrderRepository } from './IOrderRepository'

const prisma = new PrismaClient()

@injectable()
export class OrderRepository implements IOrderRepository {
  public async add(data: RegisterOrderDTO) {
    const order = await prisma.order.create({ data })
    return Order.mapFromDb(order)
  }

  public async changeOrderStatus(order_id: number, status: ORDER_STATUS) {
    const order = await prisma.order.update({
      where: { id: order_id },
      data: { status }
    })

    return Order.mapFromDb(order)
  }
  
  public async getOrders(status?: ORDER_STATUS) {
    const orders = await prisma.order.findMany({
      where: { status },
      include: { order_products: { include: { product: true } } },
    })

    return this.mapOrders(orders)
  }


  private mapOrders(
    orders: Array<
      PrismaOrder & {
        order_products: Array<PrismaOrderProduct & { product: PrismaProduct }>
      }
    >,
  ): Order[] {
    const mappedOrders = orders.map((order) => {
      const orderProducts = order.order_products.map((orderProduct) =>
        OrderProduct.mapFromDb(orderProduct, orderProduct.product),
      )
      return Order.mapFromDb(order, orderProducts)
    })

    return mappedOrders
  }
}

import { type Order as DbOrder, ORDER_STATUS } from '@prisma/client'
import type { OrderProduct } from './OrderProduct'

class Order {
  constructor(
    public readonly id: number,
    public readonly status: ORDER_STATUS,
    public readonly orderProducts: OrderProduct[],
    public readonly createdAt: Date,
    public readonly customer_name?: string | null,
  ) {}

  public static mapFromDb(
    dbOrder: DbOrder,
    dbOrderProducts?: OrderProduct[],
  ): Order {
    return new Order(
      dbOrder.id,
      dbOrder.status,
      dbOrderProducts || [],
      new Date(dbOrder.createdAt),
      dbOrder.customer_name,
    )
  }
}

export { ORDER_STATUS, Order }

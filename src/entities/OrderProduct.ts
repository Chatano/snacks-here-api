import type { Order_Product as DbOrderProduct } from '@prisma/client'
import type { Product } from './Product'

export class OrderProduct {
  constructor(
    public readonly id: number,
    public readonly product: Product,
    public readonly quantity: number,
    public readonly orderId: number,
  ) {}

  public static mapFromDb(
    dbOrderProduct: DbOrderProduct,
    dbProduct: Product,
  ): OrderProduct {
    return new OrderProduct(
      dbOrderProduct.id,
      dbProduct,
      dbOrderProduct.quantity,
      dbOrderProduct.order_id,
    )
  }
}

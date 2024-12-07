import { Order, OrderProduct, Product } from "@entities";

export interface IOrderProductRepository {
  add: (order_id: number, product_id: number, quantity: number) => Promise<OrderProduct>
}
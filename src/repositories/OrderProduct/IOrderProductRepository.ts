import { Order, OrderProduct, Product } from "@entities";

export interface IOrderProductRepository {
  add: (order: Order, product: Product, quantity: number) => Promise<OrderProduct>
}
import { Order } from "@entities/Order";
import { OrderProduct } from "@entities/OrderProduct";
import { Product } from "@entities/Product";

export interface IOrderProductRepository {
  add: (order: Order, product: Product, quantity: number) => Promise<OrderProduct>
}
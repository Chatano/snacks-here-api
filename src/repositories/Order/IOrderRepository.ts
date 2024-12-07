import { Order } from "@entities";
import { RegisterOrderDTO } from "@dtos/RegisterOrderDTO";
import { ORDER_STATUS } from "@prisma/client";

export interface IOrderRepository {
  add: (dto: RegisterOrderDTO) => Promise<Order>
  getOrders: (status?: ORDER_STATUS) => Promise<Order[]>
}
import type { RegisterOrderDTO } from '@dtos/RegisterOrderDTO'
import type { ORDER_STATUS, Order } from '@entities'

export interface IOrderRepository {
  add: (dto: RegisterOrderDTO) => Promise<Order>
  changeOrderStatus: (order_id: number, status: ORDER_STATUS) => Promise<Order>
  getOrderByID: (id: number) => Promise<Order | null>
  getOrders: (status?: ORDER_STATUS) => Promise<Order[]>
}

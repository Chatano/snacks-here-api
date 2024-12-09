import type { RegisterOrderDTO } from '@dtos/RegisterOrderDTO'
import type { Order, ORDER_STATUS } from '@entities'

export interface IOrderRepository {
  add: (dto: RegisterOrderDTO) => Promise<Order>
  changeOrderStatus: (order_id: number, status: ORDER_STATUS) => Promise<Order>
  getOrders: (status?: ORDER_STATUS) => Promise<Order[]>
}

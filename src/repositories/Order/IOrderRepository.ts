import type { RegisterOrderDTO } from '@dtos/RegisterOrderDTO'
import type { Order } from '@entities'
import type { ORDER_STATUS } from '@prisma/client'

export interface IOrderRepository {
  add: (dto: RegisterOrderDTO) => Promise<Order>
  getOrders: (status?: ORDER_STATUS) => Promise<Order[]>
}

import type { ORDER_STATUS } from '@entities'
import { AppError } from '@errors/app-error'
import type { IOrderRepository } from '@repositories/Order/IOrderRepository'
import type { IOrderProductRepository } from '@repositories/OrderProduct/IOrderProductRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class OrderService {
  constructor(
    @inject('OrderRepository') private ordersRepository: IOrderRepository,
    @inject('OrderProductRepository')
    private orderProductsRepository: IOrderProductRepository,
  ) {}

  public async createOrder(
    orderProductsDto: Array<{ product_id: number; quantity: number }>,
    customer_name?: string,
  ) {
    const { id: orderId } = await this.ordersRepository.add({ customer_name })

    await this.orderProductsRepository.addMany(
      orderProductsDto.map((orderProduct) => {
        return { ...orderProduct, order_id: orderId }
      }),
    )
  }

  public async changeOrderStatus(order_id: number, status: ORDER_STATUS) {
    const foundOrder = await this.ordersRepository.getOrderByID(order_id)

    if (!foundOrder) throw new AppError('Product ID not found', 404)

    return await this.ordersRepository.changeOrderStatus(order_id, status)
  }
}

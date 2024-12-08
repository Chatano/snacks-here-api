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
  ) {
    const { id: orderId } = await this.ordersRepository.add({})

    await this.orderProductsRepository.addMany(
      orderProductsDto.map((orderProduct) => {
        return { ...orderProduct, order_id: orderId }
      }),
    )
  }
}

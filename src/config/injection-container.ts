import { container } from 'tsyringe'

import type { IOrderRepository } from '@repositories/Order/IOrderRepository'
import type { IOrderProductRepository } from '@repositories/OrderProduct/IOrderProductRepository'
import type { IProductRepository } from '@repositories/Product/IProductRepository'

import { OrderRepository } from '@repositories/Order/OrderRepository'
import { OrderProductRepository } from '@repositories/OrderProduct/OrderProductRepository'
import { ProductRepository } from '@repositories/Product/ProductRepository'

container.register<IOrderRepository>('OrderRepository', OrderRepository)
container.register<IProductRepository>('ProductRepository', ProductRepository)
container.register<IOrderProductRepository>(
  'OrderProductRepository',
  OrderProductRepository,
)

import { OrdersController } from '@controllers/OrdersController'
import { Router } from 'express'

export const ordersRouter = Router()

ordersRouter.post('/', OrdersController.CreateOrder)
ordersRouter.put('/edit-status/:id', OrdersController.UpdateOrderStatus)

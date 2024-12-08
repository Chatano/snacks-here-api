import { ProductsController } from '@controllers/ProductsController'
import { Router } from 'express'

export const productsRouter = Router()

productsRouter.get('/', ProductsController.GetAllProducts)

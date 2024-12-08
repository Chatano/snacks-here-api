import { ProductsController } from '@controllers/ProductsController'
import { Router } from 'express'

export const productsRouter = Router()

productsRouter.get('/', ProductsController.GetAllProducts)
productsRouter.get('/:id', ProductsController.GetProductByID)
productsRouter.post('/', ProductsController.CreateProduct)
productsRouter.put('/', ProductsController.EditProduct)
productsRouter.delete('/:id', ProductsController.DeleteProduct)

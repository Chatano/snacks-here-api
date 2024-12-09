import { CreateProductUseCase } from '@useCases/Products/CreateProductUseCase'
import { DeleteProductUseCase } from '@useCases/Products/DeleteProductUseCase'
import { EditProductUseCase } from '@useCases/Products/EditProductUseCase'
import { GetAllProductsUseCase } from '@useCases/Products/GetAllProductsUseCase'
import { GetProductByIDUseCase } from '@useCases/Products/GetProductByIDUseCase'
import type { Request, Response } from 'express'

export class ProductsController {
  public static async GetAllProducts(req: Request, res: Response) {
    const products = await GetAllProductsUseCase.execute()
    res.status(200).json({ products })
  }

  public static async GetProductByID(req: Request, res: Response) {
    const product = await GetProductByIDUseCase.execute({ id: req.params.id })
    res.status(200).json({ product })
  }

  public static async CreateProduct(req: Request, res: Response) {
    const product = await CreateProductUseCase.execute(req.body)
    res.status(201).json({ product })
  }

  public static async EditProduct(req: Request, res: Response) {
    const product = await EditProductUseCase.execute(req.body)
    res.status(201).json({ product })
  }

  public static async DeleteProduct(req: Request, res: Response) {
    await DeleteProductUseCase.execute({ id: req.params.id })
    res.status(204).send()
  }
}

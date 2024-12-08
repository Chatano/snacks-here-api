import type { Request, Response } from 'express'

export class ProductsController {
  public static async GetAllProducts(req: Request, res: Response) {
    res.json({ test: 'true' })
  }
}

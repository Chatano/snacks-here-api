import { ProductService } from '@services/ProductService'
import type { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod';

class Schemas {
  public static idParam = z.object({
    id: z.string().regex(/^\d+$/, "Invalid ID.").transform(Number)
  })
  public static createProduct = z.object({
    name: z.string().min(1, 'Name is required.'),
    price: z.number().positive('Price must be greater than zero.')
  })
  public static editProduct = z.object({
    id: z.string().regex(/^\d+$/, "Invalid ID.").transform(Number),
    name: z.string().optional(),
    price: z.number().positive().optional()
  })
}

export class ProductsController {
  public static async GetAllProducts(req: Request, res: Response) {
    const service = container.resolve(ProductService);

    const products = await service.getAll()
    res.status(200).json({ products })
  }

  public static async GetProductByID(req: Request, res: Response) {
    const { success, data, error } = Schemas.idParam.safeParse(req.params);

    if (!success) {
      res.status(400).json({ error: error?.errors })
      return ;
    }

    const service = container.resolve(ProductService);
    const product = await service.getByID(data.id)
    res.status(200).json({ product })
  }

  public static async CreateProduct(req: Request, res: Response) {
    const { success, data, error } = Schemas.createProduct.safeParse(req.body)

    if (!success) {
      res.status(400).json({ error: error?.errors })
      return ;
    }

    const service = container.resolve(ProductService);
    const product = await service.addProduct(data)
    res.status(201).json({ product })
  }

  public static async EditProduct(req: Request, res: Response) {
    const { success, data, error } = Schemas.editProduct.safeParse(req.body);
  
    if (!success) {
      res.status(400).json({ error: error?.errors })
      return ;
    }

    const service = container.resolve(ProductService);
    
    const { id, name, price } = data
    const product = await service.edit(id, { name, price });
    res.status(200).json({ product });
  }
  
  public static async DeleteProduct(req: Request, res: Response) {
    const { success, data, error } = Schemas.idParam.safeParse(req.params);

    if (!success) {
      res.status(400).json({ error: error?.errors })
      return ;
    }

    const service = container.resolve(ProductService);
    await service.delete(data.id)
    res.status(204).send()
  }
}

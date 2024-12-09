import { AddProductDTO } from "@dtos/AddProductDTO";
import { AppError } from "@errors/app-error";
import { OrderService } from "@services/OrderService";
import { ProductService } from "@services/ProductService";
import { container } from "tsyringe";
import { z } from "zod";

const schema = z.object({
  products: z.array(
    z.object({
      product_id: z.number(),
      quantity: z.number().positive().min(1)
    })
  ).min(1),
  customer_name: z.string().optional()
})

export class CreateOrderUseCase {
  public static async execute(dto: AddProductDTO) {
    const { products, customer_name } = schema.parse(dto);

    const orderService = container.resolve(OrderService);
    const productService = container.resolve(ProductService);

    // validate if any project_id from dto is not on DB
    const productIDS = products.map(p => p.product_id)
    const productsOnDB = await productService.getByIds(productIDS)

    const invalidIDS = productIDS.filter(id => !productsOnDB.some(p => p.id === id))
    
    if (invalidIDS.length > 0) {  
      throw new AppError(`Product ids not registered: ${invalidIDS.join(', ')}`, 404)
    }

    await orderService.createOrder(products, customer_name)
  }
}
import { AddProductDTO } from "@dtos/AddProductDTO";
import { OrderService } from "@services/OrderService";
import { container } from "tsyringe";
import { z } from "zod";

const schema = z.object({
  products: z.array(
    z.object({
      product_id: z.number(),
      quantity: z.number().positive().min(1)
    })
  ),
  customer_name: z.string().optional()
})

export class CreateOrderUseCase {
  public static async execute(dto: AddProductDTO) {
    const { products, customer_name } = schema.parse(dto);

    const service = container.resolve(OrderService);
    await service.createOrder(products, customer_name)
  }
}
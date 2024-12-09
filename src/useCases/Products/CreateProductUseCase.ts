import { AddProductDTO } from "@dtos/AddProductDTO";
import { ProductService } from "@services/ProductService";
import { container } from "tsyringe";
import { z, ZodError } from "zod";

const schema = z.object({
  name: z.string().min(1, 'Name is required.'),
  price: z.number().positive('Price must be greater than zero.')
})

export class CreateProductUseCase {
  public static async execute(dto: AddProductDTO) {
    const { name, price } = schema.parse(dto);

    const service = container.resolve(ProductService);
    const product = await service.addProduct({ name, price })

    return product
  }
}
import { AddProductDTO } from "@dtos/AddProductDTO";
import { ProductService } from "@services/ProductService";
import { container } from "tsyringe";
import { z, ZodError } from "zod";

const schema = z.object({
  id: z.string().regex(/^\d+$/, "Invalid ID.").transform(Number),
  name: z.string().optional(),
  price: z.number().positive().optional()
})

export class EditProductUseCase {
  public static async execute(dto: AddProductDTO) {
    const { name, price, id } = schema.parse(dto);

    const service = container.resolve(ProductService);
    const product = await service.edit(id, { name, price })

    return product
  }
}
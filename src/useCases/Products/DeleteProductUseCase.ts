import { ProductService } from "@services/ProductService";
import { container } from "tsyringe";
import { z } from "zod";

const schema = z.object({
  id: z.string().regex(/^\d+$/, "Invalid ID.").transform(Number)
})

export class DeleteProductUseCase {
  public static async execute(params: { id: string }) {
    const { id } = schema.parse(params);
    const service = container.resolve(ProductService);
    await service.delete(id)
  }
}
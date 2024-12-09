import { OrderService } from "@services/OrderService";
import { ORDER_STATUS } from '@entities'
import { container } from "tsyringe";
import { z } from "zod";

const schema = z.object({
  order_id: z.string().regex(/^\d+$/, "Invalid ID.").transform(Number),
  status: z.nativeEnum(ORDER_STATUS)
})

export class ChangeOrderStatusUseCase {
  public static async execute(order_id: string, status: ORDER_STATUS) {
    const data = schema.parse({ order_id, status });

    const service = container.resolve(OrderService);
    const order = await service.changeOrderStatus(data.order_id, data.status)

    return order
  }
}
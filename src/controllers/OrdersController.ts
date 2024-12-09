import type { Request, Response } from 'express'
import { CreateOrderUseCase } from '@useCases/Orders/CreateOrderUseCase';
import { ChangeOrderStatusUseCase } from '@useCases/Orders/ChangeOrderStatusUseCase';

export class OrdersController {
  public static async CreateOrder(req: Request, res: Response) {
    const order = await CreateOrderUseCase.execute(req.body);
    res.status(201).json({ order });
  }

  public static async UpdateOrderStatus(req: Request, res: Response) {
    const order = await ChangeOrderStatusUseCase.execute(req.params.id, req.body.status);
    res.status(200).json({ order });
  }
}

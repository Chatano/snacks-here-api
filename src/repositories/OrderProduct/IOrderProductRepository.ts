import type { RegisterOrderProductDTO } from '@dtos/RegisterOrderProductDTO'

export interface IOrderProductRepository {
  add: (props: RegisterOrderProductDTO) => Promise<void>
  addMany: (props: RegisterOrderProductDTO[]) => Promise<void>
}

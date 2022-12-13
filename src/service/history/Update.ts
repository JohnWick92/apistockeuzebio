import { HistoryProps } from '../../entities/History'
import { PrismaClient } from '@prisma/client'

export default class UpdateHistoryService {
  async execute(History: HistoryProps) {
    const prisma = new PrismaClient()
    const response = await prisma.history
      .update({
        data: {
          description: History.description,
          code_material: History.code_material,
          date_of_use: History.date_of_use,
          quantity_used: History.quantity_used,
          shelf_life: History.shelf_life,
          batch: History.batch,
        },
        where: {
          code_pk: History.code_pk,
        },
      })
      .finally(async () => await prisma.$disconnect())
    return response
  }
}

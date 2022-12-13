import { HistoryProps } from '../../entities/History'
import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'

export default class CreateHistoryService {
  async execute(History: HistoryProps) {
    const prisma = new PrismaClient()
    const response = await prisma.history
      .create({
        data: {
          description: History.description,
          code_material: History.code_material,
          date_of_use: History.date_of_use,
          quantity_used: History.quantity_used,
          shelf_life: History.shelf_life,
          batch: History.batch,
          code_pk: randomUUID(),
        },
      })
      .finally(async () => await prisma.$disconnect())
    return response
  }
}

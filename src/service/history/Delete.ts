import { HistoryProps } from '../../entities/History'
import { PrismaClient } from '@prisma/client'

export default class DeleteHistoryService {
  async execute(History: HistoryProps) {
    const prisma = new PrismaClient()
    const response = await prisma.history
      .delete({
        where: {
          code_pk: History.code_pk,
        },
      })
      .finally(async () => await prisma.$disconnect())
    return response
  }
}

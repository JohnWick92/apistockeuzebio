import { PrismaClient } from '@prisma/client'

export default class DeleteHistoryService {
  async execute(code_pk: string) {
    const prisma = new PrismaClient()
    const response = await prisma.history
      .delete({
        where: {
          code_pk: code_pk,
        },
      })
      .finally(async () => await prisma.$disconnect())
    return response
  }
}

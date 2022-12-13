import { PrismaClient } from '@prisma/client'

export default class RetriveHistoryService {
  async execute() {
    const prisma = new PrismaClient()
    const response = await prisma.history
      .findMany({
        orderBy: {
          description: 'asc',
        },
      })
      .finally(async () => await prisma.$disconnect())
    return response
  }
}

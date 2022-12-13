import { PrismaClient } from '@prisma/client'

export default class RetrieveUserService {
  async execute() {
    const prisma = new PrismaClient()
    const response = await prisma.user
      .findMany({
        orderBy: {
          name: 'asc',
        },
      })
      .finally(async () => await prisma.$disconnect())
    return response
  }
}

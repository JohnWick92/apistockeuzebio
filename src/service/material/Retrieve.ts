import { PrismaClient } from '@prisma/client'

export default class RetrieveMaterialService {
  async execute() {
    const prisma = new PrismaClient()
    const response = await prisma.material
      .findMany({
        orderBy: {
          description: 'asc',
        },
      })
      .finally(async () => await prisma.$disconnect())
    return response
  }
}

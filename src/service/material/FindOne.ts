import { PrismaClient } from '@prisma/client'

export default class FindOneMaterialService {
  async execute(code_material: string) {
    const prisma = new PrismaClient()
    const response = await prisma.material
      .findFirst({
        where: {
          code_material: code_material,
        },
      })
      .finally(async () => prisma.$disconnect())
    return response
  }
}

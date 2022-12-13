import { PrismaClient } from '@prisma/client'

export default class DeleteMaterialService {
  async execute(code_material: string) {
    const prisma = new PrismaClient()
    const response = await prisma.material
      .delete({
        where: {
          code_material: code_material,
        },
      })
      .finally(async () => await prisma.$disconnect())
    return response
  }
}

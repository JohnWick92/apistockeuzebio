import { MaterialProps } from '../../entities/Material'
import { PrismaClient } from '@prisma/client'

export default class UpdateMaterialService {
  async execute(Material: MaterialProps) {
    const prisma = new PrismaClient()
    const response = await prisma.material
      .update({
        data: {
          amount: Material.amount,
          description: Material.description,
          batch: Material.batch,
          code_material: Material.code_material,
          shelf_life: Material.shelf_life,
        },
        where: {
          code_material: Material.code_material,
        },
      })
      .finally(async () => await prisma.$disconnect())
    return response
  }
}

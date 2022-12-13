import { MaterialProps } from '../../entities/Material'
import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'

export default class CreateMaterialService {
  async execute(Material: MaterialProps) {
    const prisma = new PrismaClient()
    const response = await prisma.material
      .create({
        data: {
          amount: Material.amount,
          description: Material.description,
          batch: Material.batch,
          code_material: Material.code_material,
          shelf_life: Material.shelf_life,
          code_pk: randomUUID(),
        },
      })
      .finally(async () => prisma.$disconnect())
    return response
  }
}

import { PrismaClient } from '@prisma/client'

export default class DeleteUserService {
  async execute(code_pk: string) {
    const prisma = new PrismaClient()
    const response = await prisma.user
      .delete({
        where: { code_pk: code_pk },
      })
      .finally(() => prisma.$disconnect())
    return response
  }
}

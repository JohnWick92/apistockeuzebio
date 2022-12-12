import { UserProps } from '../../entities/User'
import { PrismaClient } from '@prisma/client'

export default class RetrieveUserService {
  async execute(login: string) {
    const prisma = new PrismaClient()
    const User: UserProps = await prisma.user
      .findFirst({
        where: { login: login },
      })
      .finally(() => prisma.$disconnect())
    return User
  }
}

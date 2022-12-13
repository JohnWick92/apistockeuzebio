import { UserProps } from '../../entities/User'
import { PrismaClient } from '@prisma/client'

export default class FindOneUserService {
  async execute(login: string) {
    const prisma = new PrismaClient()
    const User: UserProps = await prisma.user
      .findFirst({
        where: { login: login },
      })
      .finally(async () => await prisma.$disconnect())
    return User
  }
}

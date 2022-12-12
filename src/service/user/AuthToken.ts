import { UserProps } from './../../entities/User'
import { PrismaClient } from '@prisma/client'

export default class AuthTokenUserService {
  async execute(token: string) {
    const prisma = new PrismaClient()
    const User: UserProps = await prisma.user
      .findFirst({
        where: { token: token },
      })
      .finally(() => prisma.$disconnect())
    if (User) {
      const AuthUser = {
        login: User.login,
        name: User.name,
        code_pk: User.code_pk,
      }
      return AuthUser
    } else {
      return 'Your token is invalid'
    }
  }
}

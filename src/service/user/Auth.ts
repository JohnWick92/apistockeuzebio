import { UserProps } from './../../entities/User'
import { PrismaClient } from '@prisma/client'
import { compare } from 'bcryptjs'

export default class AuthUserService {
  async execute(login: string, password: string) {
    const prisma = new PrismaClient()
    const User: UserProps = await prisma.user.findFirst({
      where: { login: login },
    })
    if (User) {
      if (compare(password, User.password)) {
        const AuthUser = {
          login: User.login,
          name: User.name,
          code_pk: User.code_pk,
        }
        return AuthUser
      } else {
        return 'password incorrect'
      }
    } else {
      return 'user not found'
    }
  }
}

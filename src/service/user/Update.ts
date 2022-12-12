import { UserProps } from '../../entities/User'
import { PrismaClient } from '@prisma/client'

export default class UpdateUserService {
  async execute(User: UserProps) {
    const prisma = new PrismaClient()
    const response = await prisma.user.update({
      data: {
        name: User.name,
        login: User.login,
        password: User.password,
        token: User.token,
      },
      where: { code_pk: User.code_pk },
    })
    return response
  }
}

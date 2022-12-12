import { UserProps } from '../../entities/User'
import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { hash } from 'bcryptjs'

export default class CreateUserService {
  async execute(User: UserProps) {
    const prisma = new PrismaClient()
    const passwordHashed = await hash(User.password, 12)
    const response = await prisma.user.create({
      data: {
        name: User.name,
        login: User.login,
        password: passwordHashed,
        token: randomUUID(),
        code_pk: randomUUID(),
      },
    })
    return response
  }
}

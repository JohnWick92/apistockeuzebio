import { HistoryProps } from '../../entities/History'
import { PrismaClient } from '@prisma/client'

export default class FindOneHistoryService {
  async execute(code_pk: string) {
    const prisma = new PrismaClient()
    const History: HistoryProps = await prisma.history
      .findFirst({ where: { code_pk: code_pk } })
      .finally(async () => await prisma.$disconnect())
    return History
  }
}

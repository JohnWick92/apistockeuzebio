import { HistoryProps } from '../../entities/History'
import { PrismaClient } from '@prisma/client'

export default class FindByDateHistoryService {
  async execute(start_date: Date, end_date: Date) {
    const prisma = new PrismaClient()
    const History: HistoryProps =
      await prisma.$queryRaw<HistoryProps>`select * from history where date_of_use between 
      ${start_date} and ${end_date} order by description`.finally(
        async () => await prisma.$disconnect()
      )
    return History
  }
}

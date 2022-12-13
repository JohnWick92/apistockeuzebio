import FindByDateHistoryService from '../../service/history/FindByDate'
import { Request, Response } from 'express'

export default class CreateHistoryController {
  async handle(request: Request, response: Response) {
    const { start_date, end_Date } = request.body
    const findByDateHistoryService = new FindByDateHistoryService()
    const history = await findByDateHistoryService.execute(start_date, end_Date)
    return response.status(200).json(history)
  }
}

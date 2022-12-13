import CreateHistoryService from '../../service/history/Create'
import { Request, Response } from 'express'
import { HistoryProps } from '../../entities/History'

export default class CreateHistoryController {
  async handle(request: Request, response: Response) {
    const History: HistoryProps = request.body
    const createHistoryService = new CreateHistoryService()
    const history = await createHistoryService.execute(History)
    return response.status(200).json(history)
  }
}

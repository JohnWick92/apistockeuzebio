import UpdateHistoryService from '../../service/history/Update'
import { Request, Response } from 'express'
import { HistoryProps } from '../../entities/History'

export default class UpdateHistoryController {
  async handle(request: Request, response: Response) {
    const History: HistoryProps = request.body
    const updateHistoryService = new UpdateHistoryService()
    const history = await updateHistoryService.execute(History)
    return response.status(200).json(history)
  }
}

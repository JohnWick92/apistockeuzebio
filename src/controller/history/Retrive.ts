import RetriveHistoryService from '../../service/history/Retrive'
import { Request, Response } from 'express'

export default class RetrieveHistoryController {
  async handle(request: Request, response: Response) {
    const retrieveHistoryService = new RetriveHistoryService()
    const history = await retrieveHistoryService.execute()
    return response.status(200).json(history)
  }
}

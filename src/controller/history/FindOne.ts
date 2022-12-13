import FindOneHistoryService from '../../service/history/FindOne'
import { Request, Response } from 'express'

export default class FindOneHistoryController {
  async handle(request: Request, response: Response) {
    const code_pk = request.body
    const findOneHistoryService = new FindOneHistoryService()
    const history = await findOneHistoryService.execute(code_pk)
    return response.status(200).json(history)
  }
}

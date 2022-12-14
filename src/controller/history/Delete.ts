import DeleteHistoryService from '../../service/history/Delete'
import { Request, Response } from 'express'

export default class DeleteHistoryController {
  async handle(request: Request, response: Response) {
    const { code_pk: code_pk } = request.body
    const deleteHistoryService = new DeleteHistoryService()
    const result = await deleteHistoryService.execute(code_pk)
    return response.status(200).json(result)
  }
}

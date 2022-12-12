import DeleteUserService from '../../service/user/Delete'
import { Request, Response } from 'express'

export default class DeleteUserController {
  async handle(request: Request, response: Response) {
    const code_pk = request.body
    const deleteUserService = new DeleteUserService()
    const result = await deleteUserService.execute(code_pk)
    return response.status(200).json(result)
  }
}

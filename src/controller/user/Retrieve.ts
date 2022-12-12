import RetrieveUserService from '../../service/user/Retrieve'
import { Request, Response } from 'express'

export default class RetrieveUserController {
  async handle(request: Request, response: Response) {
    const login = request.body
    const retrieveUserService = new RetrieveUserService()
    const user = await retrieveUserService.execute(login)
    return response.status(200).json(user)
  }
}

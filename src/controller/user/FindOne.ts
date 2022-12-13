import FindOneUserService from '../../service/user/FindOne'
import { Request, Response } from 'express'

export default class FindOneUserController {
  async handle(request: Request, response: Response) {
    const login = request.body
    const findOneUserService = new FindOneUserService()
    const user = await findOneUserService.execute(login)
    return response.status(200).json(user)
  }
}

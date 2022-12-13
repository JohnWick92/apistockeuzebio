import RetrieveUserService from '../../service/user/Retrive'
import { Request, Response } from 'express'

export default class RetriveUserController {
  async handle(request: Request, response: Response) {
    const retriveUserService = new RetrieveUserService()
    const user = await retriveUserService.execute()
    return response.status(200).json(user)
  }
}

import AuthTokenUserService from '../../service/user/AuthToken'
import { Request, Response } from 'express'

export default class AuthToken {
  async handle(request: Request, response: Response) {
    const token = request.body
    const AuthToken = new AuthTokenUserService()
    const user = await AuthToken.execute(token)
    return response.status(200).json(user)
  }
}

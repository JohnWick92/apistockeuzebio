import AuthUserService from '../../service/user/Auth'
import { Request, Response } from 'express'

export default class AuthController {
  async handle(request: Request, response: Response) {
    const { login, password } = request.body
    const authUser = new AuthUserService()
    const user = await authUser.execute(login, password)
    return response.status(200).json(user)
  }
}

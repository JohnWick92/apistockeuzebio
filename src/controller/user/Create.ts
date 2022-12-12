import CreateUserService from '../../service/user/Create'
import { UserProps } from './../../entities/User'
import { Request, Response } from 'express'

export default class CreateUserController {
  async handle(request: Request, response: Response) {
    const User: UserProps = request.body
    const createUserService = new CreateUserService()
    const user = await createUserService.execute(User)
    return response.status(200).json(user)
  }
}

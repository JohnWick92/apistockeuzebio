import UpdateUserService from '../../service/user/Update'
import { UserProps } from './../../entities/User'
import { Request, Response } from 'express'

export default class UpdateUserController {
  async handle(request: Request, response: Response) {
    const User: UserProps = request.body
    const updateUserService = new UpdateUserService()
    const user = await updateUserService.execute(User)
    return response.status(200).json(user)
  }
}

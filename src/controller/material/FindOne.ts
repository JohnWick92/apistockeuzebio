import FindOneMaterialService from '../../service/material/FindOne'
import { Request, Response } from 'express'

export default class FindOneMaterialController {
  async handle(request: Request, response: Response) {
    const code_material = request.body
    const findOneMaterialService = new FindOneMaterialService()
    const material = await findOneMaterialService.execute(code_material)
    return response.status(200).json(material)
  }
}

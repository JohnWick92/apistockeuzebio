import CreateMaterialService from '../../service/material/Create'
import { Request, Response } from 'express'
import { MaterialProps } from '../../entities/Material'

export default class CreateMaterialController {
  async handle(request: Request, response: Response) {
    const Material: MaterialProps = request.body
    const createMaterialService = new CreateMaterialService()
    const material = await createMaterialService.execute(Material)
    return response.status(200).json(material)
  }
}

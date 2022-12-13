import UpdateMaterialService from '../../service/material/Update'
import { Request, Response } from 'express'
import { MaterialProps } from '../../entities/Material'

export default class UpdateMaterialController {
  async handle(request: Request, response: Response) {
    const Material: MaterialProps = request.body
    const updateMaterialService = new UpdateMaterialService()
    const material = await updateMaterialService.execute(Material)
    return response.status(200).json(material)
  }
}

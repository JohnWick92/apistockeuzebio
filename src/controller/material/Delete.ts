import DeleteMaterialService from '../../service/material/Delete'
import { Request, Response } from 'express'

export default class DeleteMaterialController {
  async handle(request: Request, response: Response) {
    const { code_material: code_material } = request.body
    const deleteMaterialService = new DeleteMaterialService()
    const result = await deleteMaterialService.execute(code_material)
    return response.status(200).json(result)
  }
}

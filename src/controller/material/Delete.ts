import DeleteMaterialService from '../../service/material/Delete'
import { Request, Response } from 'express'

export default class DeleteMaterialController {
  async handle(request: Request, response: Response) {
    const code_pk = request.body
    const deleteMaterialService = new DeleteMaterialService()
    const result = await deleteMaterialService.execute(code_pk)
    return response.status(200).json(result)
  }
}

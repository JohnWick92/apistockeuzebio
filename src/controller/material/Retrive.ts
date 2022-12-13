import RetrieveMaterialService from '../../service/material/Retrieve'
import { Request, Response } from 'express'

export default class RetrieveMaterialController {
  async handle(request: Request, response: Response) {
    const retriveMaterialService = new RetrieveMaterialService()
    const material = await retriveMaterialService.execute()
    return response.status(200).json(material)
  }
}

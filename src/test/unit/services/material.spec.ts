import RetrieveMaterialService from '../../../service/material/Retrieve'
import FindOneMaterialService from '../../../service/material/FindOne'
import CreateMaterialService from '../../../service/material/Create'
import { Material, MaterialProps } from '../../../entities/Material'
import DeleteMaterialService from '../../../service/material/Delete'
import UpdateMaterialService from '../../../service/material/Update'
import { describe, it, expect } from 'vitest'
import { randomUUID } from 'node:crypto'

describe('Material service test switch', () => {
  it(' should create a new material if not exists', async () => {
    const createMaterialService = new CreateMaterialService()
    const shelf_life_valid = new Date()
    shelf_life_valid.setDate(shelf_life_valid.getDate() + 1)
    const material: MaterialProps = new Material({
      amount: 2,
      batch: '1',
      code_material: '1',
      description: 'service',
      shelf_life: shelf_life_valid,
      code_pk: randomUUID(),
    })
    const response = await createMaterialService.execute(material)
    expect(response).toHaveProperty('code_material')
  })

  it(' should find one material if exists', async () => {
    const findOneMaterial = new FindOneMaterialService()
    const response: MaterialProps = await findOneMaterial.execute('1')
    expect(response).toHaveProperty('code_material')
  })

  it(' should retrieve all existing material', async () => {
    const retrieveMaterial = new RetrieveMaterialService()
    const response: MaterialProps[] = await retrieveMaterial.execute()
    expect(response.length).toBeGreaterThan(0)
  })

  it(' should update a material if exists', async () => {
    const findOneMaterial = new FindOneMaterialService()
    const updateMaterial = new UpdateMaterialService()
    const exisitingMaterial: MaterialProps = await findOneMaterial.execute('1')
    exisitingMaterial.amount = 2
    const response = await updateMaterial.execute(exisitingMaterial)
    expect(response).toHaveProperty('code_material')
  })

  it(' should delete a existing material if exists', async () => {
    const deleteMaterialService = new DeleteMaterialService()
    const response = await deleteMaterialService.execute('1')
    expect(response).toHaveProperty('code_material')
  })
})

import { randomUUID } from 'crypto'
import { describe, it, expect } from 'vitest'
import { Material } from '../../../entities/Material'

describe('Material entity test switch', () => {
  it(' should create a instancy of Material', () => {
    const material = new Material({
      code_material: randomUUID(),
      code_pk: '1',
      amount: 1,
      batch: '1',
      description: 'test',
      shelf_life: new Date(),
    })
    expect(material).toBeInstanceOf(Material)
  })
})

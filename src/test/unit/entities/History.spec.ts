import { randomUUID } from 'crypto'
import { describe, it, expect } from 'vitest'
import { History } from '../../../entities/History'

describe('History entity test switch', () => {
  it(' should create a instancy of History', () => {
    const history = new History({
      code_pk: randomUUID(),
      batch: '1',
      code_material: '1',
      date_of_use: new Date(),
      description: 'test',
      quantity_used: 1,
      shelf_life: new Date(),
    })
    expect(history).toBeInstanceOf(History)
  })

  it('should throw an error if the shelf life is before date of use', () => {
    const date_of_use = new Date()
    const shelf_life = new Date()
    shelf_life.setDate(shelf_life.getDate() - 1)
    expect(() => {
      return new History({
        code_pk: randomUUID(),
        batch: '1',
        code_material: '1',
        date_of_use,
        description: 'test',
        quantity_used: 1,
        shelf_life,
      })
    }).toThrowError()
  })
})

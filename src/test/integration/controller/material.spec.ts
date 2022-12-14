import { describe, it, expect } from 'vitest'
import { randomUUID } from 'node:crypto'
import request from 'supertest'
import app from '../../../app'

describe('Material controller test switch', () => {
  it(' should create a new material', async () => {
    const shelf_life_valid = new Date()
    shelf_life_valid.setDate(shelf_life_valid.getDate() + 1)
    const response = await request(app).post('/material/create').send({
      amount: 2,
      batch: '1',
      code_material: '2',
      description: 'controller',
      shelf_life: shelf_life_valid,
      code_pk: randomUUID(),
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('code_material')
  })

  it(' should find one material if exists', async () => {
    const response = await request(app).post('/material/findone').send({
      code_material: '2',
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('code_material')
  })

  it(' should retrieve all existing material', async () => {
    const response = await request(app).post('/material/retrieve')
    expect(response.status).toBe(200)
    expect(response.body.length).toBeGreaterThan(0)
  })

  it(' should update a material if exists', async () => {
    const shelf_life_valid = new Date()
    shelf_life_valid.setDate(shelf_life_valid.getDate() + 1)
    const response = await request(app).post('/material/update').send({
      amount: 10,
      batch: '1',
      code_material: '2',
      description: 'controller',
      shelf_life: shelf_life_valid,
      code_pk: randomUUID(),
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('code_material')
  })

  it(' should delete an existing material', async () => {
    const response = await request(app).post('/material/delete').send({
      code_material: '2',
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('code_material')
  })
})

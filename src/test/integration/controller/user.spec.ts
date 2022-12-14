import FindOneUserService from '../../../service/user/FindOne'
import { describe, it, expect } from 'vitest'
import { randomUUID } from 'node:crypto'
import request from 'supertest'
import app from '../../../app'

describe('User controller test switch', () => {
  it(' should create a new user', async () => {
    const response = await request(app).post('/user/create').send({
      code_pk: randomUUID(),
      name: 'John Doe',
      login: 'controller',
      password: 'password',
      token: randomUUID(),
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('code_pk')
  })

  it(' should retrieve all users', async () => {
    const response = await request(app).post('/user/retrieve')
    expect(response.status).toBe(200)
    expect(response.body.length).toBeGreaterThan(0)
  })

  it(' should find one user by login', async () => {
    const response = await request(app)
      .post('/user/findone')
      .send({ login: 'controller' })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('code_pk')
  })

  it(' should retrieve the auth info if login and password is correct', async () => {
    const response = await request(app).post('/user/auth').send({
      login: 'controller',
      password: 'password',
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('code_pk')
  })

  it(' should retrieve the auth info if token is valid', async () => {
    const findOne = new FindOneUserService()
    const existingUser = await findOne.execute('controller')
    const response = await request(app).post('/user/authtoken').send({
      token: existingUser.token,
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('code_pk')
  })

  it(' should update a existing user', async () => {
    const findOne = new FindOneUserService()
    const existingUser = await findOne.execute('controller')
    const response = await request(app).post('/user/update').send({
      name: 'John Doe two',
      code_pk: existingUser.code_pk,
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('code_pk')
  })

  it(' should delete a existing user', async () => {
    const findOne = new FindOneUserService()
    const existingUser = await findOne.execute('controller')
    const response = await request(app).post('/user/delete').send({
      code_pk: existingUser.code_pk,
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('code_pk')
  })
})

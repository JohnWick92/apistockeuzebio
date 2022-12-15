import RetriveHistoryService from '../../../service/history/Retrive'
import FindOneHistoryService from '../../../service/history/FindOne'
import { HistoryProps } from './../../../entities/History'
import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../../../app'

describe('History controller test switch', () => {
  it(' should create a new history if not exists', async () => {
    const shelf_life = new Date()
    shelf_life.setDate(shelf_life.getDate() + 1)
    const response = await request(app).post('/history/create').send({
      batch: '1',
      code_material: '1',
      date_of_use: new Date(),
      description: ' service',
      quantity_used: 1,
      shelf_life: shelf_life,
      code_pk: '1',
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('description')
  })

  it(' should retrieve all existing history', async () => {
    const response = await request(app).post('/history/retrieve')
    expect(response.status).toBe(200)
    expect(response.body.length).toBeGreaterThan(0)
  })

  it(' should find one history if exists', async () => {
    const retrieveHistoryService = new RetriveHistoryService()
    const exisitingHistoryArray = await retrieveHistoryService.execute()
    const response = await request(app)
      .post('/history/findone')
      .send(exisitingHistoryArray[0].code_pk)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('description')
  })

  // it(' should find by date existing histiory', async () => {
  //   const start_date = new Date(),
  //     end_date = new Date()
  //   start_date.setDate(start_date.getDate() - 10)
  //   end_date.setDate(end_date.getDate() + 10)
  //   const response = await request(app).post('/history/findbydate').send({
  //     start_date,
  //     end_date,
  //   })
  //   console.log(response)
  //   // expect(response.status).toBe(200)
  //   // expect(response.body.length).toBeGreaterThan(0)
  // })

  it(' should update a history if exists', async () => {
    const retrieveHistoryService = new RetriveHistoryService()
    const exisitingHistoryArray = await retrieveHistoryService.execute()
    const findOneHistoryService = new FindOneHistoryService()
    const exisitingHistory = await findOneHistoryService.execute(
      exisitingHistoryArray[0].code_pk
    )
    exisitingHistory.quantity_used = 10
    const response = await request(app)
      .post('/history/update')
      .send(exisitingHistory)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('description')
  })

  it(' should delete a existing history if exists', async () => {
    const retrieveHistoryService = new RetriveHistoryService()
    const exisitingHistoryArray: HistoryProps[] =
      await retrieveHistoryService.execute()
    const response = await request(app).post('/history/delete').send({
      code_pk: exisitingHistoryArray[0].code_pk,
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('description')
  })
})

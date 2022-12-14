import RetriveHistoryService from '../../../service/history/Retrive'
import FindOneHistoryService from '../../../service/history/FindOne'
import FindByDateHistoryService from '../../../service/history/FindByDate'
import CreateHistoryService from '../../../service/history/Create'
import { History, HistoryProps } from '../../../entities/History'
import DeleteHistoryService from '../../../service/history/Delete'
import UpdateHistoryService from '../../../service/history/Update'
import { describe, it, expect } from 'vitest'

describe('History service test switch', () => {
  it(' should create a new history if not exists', async () => {
    const createHistoryService = new CreateHistoryService()
    const shelf_life = new Date()
    shelf_life.setDate(shelf_life.getDate() + 1)
    const history: HistoryProps = new History({
      batch: '1',
      code_material: '1',
      date_of_use: new Date(),
      description: ' service',
      quantity_used: 1,
      shelf_life: shelf_life,
      code_pk: '1',
    })
    const response = await createHistoryService.execute(history)
    expect(response).toHaveProperty('description')
  })

  it(' should retrieve all existing histiory', async () => {
    const retrieveHistoryService = new RetriveHistoryService()
    const response: HistoryProps[] = await retrieveHistoryService.execute()
    expect(response.length).toBeGreaterThan(0)
  })

  it(' should find one history if exists', async () => {
    const retrieveHistoryService = new RetriveHistoryService()
    const exisitingHistoryArray: HistoryProps[] =
      await retrieveHistoryService.execute()
    const findOneHistoryService = new FindOneHistoryService()
    const response: HistoryProps = await findOneHistoryService.execute(
      exisitingHistoryArray[0].code_pk
    )
    expect(response).toHaveProperty('description')
  })

  it(' should find by date existing histiory', async () => {
    const findByDateHistoryService = new FindByDateHistoryService()
    const start_date = new Date(),
      end_date = new Date()
    start_date.setDate(start_date.getDate() - 10)
    end_date.setDate(end_date.getDate() + 10)
    const response: HistoryProps[] = await findByDateHistoryService.execute(
      start_date,
      end_date
    )
    expect(response.length).toBeGreaterThan(0)
  })

  it(' should update a history if exists', async () => {
    const retrieveHistoryService = new RetriveHistoryService()
    const exisitingHistoryArray: HistoryProps[] =
      await retrieveHistoryService.execute()
    const findOneHistoryService = new FindOneHistoryService()
    const updateHistoryService = new UpdateHistoryService()
    const exisitingHistory: HistoryProps = await findOneHistoryService.execute(
      exisitingHistoryArray[0].code_pk
    )
    exisitingHistory.quantity_used = 2
    const response = await updateHistoryService.execute(exisitingHistory)
    expect(response).toHaveProperty('description')
  })

  it(' should delete a existing history if exists', async () => {
    const retrieveHistoryService = new RetriveHistoryService()
    const exisitingHistoryArray: HistoryProps[] =
      await retrieveHistoryService.execute()
    const deleteHistoryService = new DeleteHistoryService()
    const response = await deleteHistoryService.execute(
      exisitingHistoryArray[0].code_pk
    )
    expect(response).toHaveProperty('description')
  })
})

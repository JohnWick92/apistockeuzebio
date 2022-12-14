import { Request, Response, Router } from 'express'

import FindByDateHistoryController from './controller/history/FindByDate'
import RetrieveHistoryController from './controller/history/Retrive'
import FindOneHistoryController from './controller/history/FindOne'
import CreateHistoryController from './controller/history/Create'
import UpdateHistoryController from './controller/history/Update'
import DeleteHistoryController from './controller/history/Delete'

import FindOneMaterialController from './controller/material/FindOne'
import RetriveMaterialController from './controller/material/Retrive'
import CreateMaterialController from './controller/material/Create'
import UpdateMaterialController from './controller/material/Update'
import DeleteMaterialController from './controller/material/Delete'

import FindOneUserController from './controller/user/FindOne'
import RetriveUserController from './controller/user/Retrive'
import CreateUserController from './controller/user/Create'
import UpdateUserController from './controller/user/Update'
import DeleteUserController from './controller/user/Delete'
import AuthController from './controller/user/Auth'
import AuthToken from './controller/user/AuthToken'

const router = Router()

const findByDateHistory = new FindByDateHistoryController()
const retrieveHistory = new RetrieveHistoryController()
const findOneHistory = new FindOneHistoryController()
const createHistory = new CreateHistoryController()
const updateHistory = new UpdateHistoryController()
const deleteHistory = new DeleteHistoryController()

const retrieveMaterial = new RetriveMaterialController()
const findOneMaterial = new FindOneMaterialController()
const deleteMaterial = new DeleteMaterialController()
const createMaterial = new CreateMaterialController()
const updateMaterial = new UpdateMaterialController()

const retrieveUser = new RetriveUserController()
const findOneUser = new FindOneUserController()
const createUser = new CreateUserController()
const updateUser = new UpdateUserController()
const deleteUser = new DeleteUserController()
const authToken = new AuthToken()
const auth = new AuthController()

router.get('/', (request: Request, response: Response) => {
  response.json('Ready :) ^-^')
})

router.post('/history/findbydate', findByDateHistory.handle)
router.post('/history/retrieve', retrieveHistory.handle)
router.post('/history/findone', findOneHistory.handle)
router.post('/history/create', createHistory.handle)
router.post('/history/delete', deleteHistory.handle)
router.post('/history/update', updateHistory.handle)

router.post('/material/retrieve', retrieveMaterial.handle)
router.post('/material/findone', findOneMaterial.handle)
router.post('/material/create', createMaterial.handle)
router.post('/material/delete', deleteMaterial.handle)
router.post('/material/update', updateMaterial.handle)

router.post('/user/retrieve', retrieveUser.handle)
router.post('/user/findone', findOneUser.handle)
router.post('/user/authtoken', authToken.handle)
router.post('/user/create', createUser.handle)
router.post('/user/update', updateUser.handle)
router.post('/user/delete', deleteUser.handle)
router.post('/user/auth', auth.handle)

export default router

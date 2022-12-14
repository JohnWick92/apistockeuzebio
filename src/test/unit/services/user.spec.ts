import AuthTokenUserService from '../../../service/user/AuthToken'
import RetriveUserService from '../../../service/user/Retrive'
import FindOneUserService from '../../../service/user/FindOne'
import CreateUserService from '../../../service/user/Create'
import DeleteUserService from '../../../service/user/Delete'
import UpdateUserService from '../../../service/user/Update'
import AuthUserService from '../../../service/user/Auth'
import { UserProps } from './../../../entities/User'
import { User } from '../../../entities/User'
import { describe, it, expect } from 'vitest'
import { randomUUID } from 'node:crypto'

describe('User service test switch', () => {
  it(' should create a new user if not exists', async () => {
    const createUserService = new CreateUserService()
    const user: UserProps = new User({
      code_pk: randomUUID(),
      name: 'John Doe',
      login: 'service',
      password: 'password',
      token: randomUUID(),
    })
    const response: UserProps = await createUserService.execute(user)
    expect(response).toHaveProperty('code_pk')
  })

  it(' should retrive an existing user', async () => {
    const retrieveUserService = new RetriveUserService()
    const response: UserProps[] = await retrieveUserService.execute()
    expect(response.length).toBeGreaterThan(0)
  })

  it(' should find one an existing user', async () => {
    const findOneUserService = new FindOneUserService()
    const response: UserProps = await findOneUserService.execute('service')
    expect(response).toHaveProperty('code_pk')
  })

  it(' should update an existing user', async () => {
    const updateUserService = new UpdateUserService()
    const findOneUserService = new FindOneUserService()
    const existingUser: UserProps = await findOneUserService.execute('service')
    existingUser.name = 'John Doe update'
    const response: UserProps = await updateUserService.execute(existingUser)
    expect(response).property('name').equals('John Doe update')
  })

  it(' should retrieve the auth info if login and password is correct', async () => {
    const authUserService = new AuthUserService()
    const response = await authUserService.execute('service', 'password')
    expect(response).toHaveProperty('code_pk')
  })

  it(' should retrieve user not found if login is incorrect', async () => {
    const authUserService = new AuthUserService()
    const response = await authUserService.execute('services', 'password')
    expect(response).toBe('user not found')
  })

  it(' should retrieve password incorrect if password is incorrect', async () => {
    const authUserService = new AuthUserService()
    const response = await authUserService.execute('service', 'incorrect')
    expect(response).toBe('password incorrect')
  })

  it(' should retrieve the auth info if token is valid', async () => {
    const authToken = new AuthTokenUserService()
    const findOneUserService = new FindOneUserService()
    const existingUser: UserProps = await findOneUserService.execute('service')
    const response = await authToken.execute(existingUser.token)
    expect(response).toHaveProperty('code_pk')
  })

  it(' should retrieve Your token is invalid if token is invalid', async () => {
    const authToken = new AuthTokenUserService()
    const response = await authToken.execute('token')
    expect(response).toBe('Your token is invalid')
  })

  it(' should delete an exisiting user', async () => {
    const login = 'service'
    const deleteUserService = new DeleteUserService()
    const findOneUserService = new FindOneUserService()
    const existingUser: UserProps = await findOneUserService.execute(login)
    const response: UserProps = await deleteUserService.execute(
      existingUser.code_pk
    )
    expect(response).toHaveProperty('code_pk')
  })
})

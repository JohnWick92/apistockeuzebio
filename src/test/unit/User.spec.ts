import { randomUUID } from 'crypto'
import { describe, it, expect } from 'vitest'
import { User } from '../../entities/User'

describe('User entity switch test', () => {
  it(' should create an instancy of a user', () => {
    const user = new User({
      code_pk: randomUUID(),
      name: 'John Doe',
      login: 'login',
      password: 'password',
    })
    expect(user).toBeInstanceOf(User)
  })
})

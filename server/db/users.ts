import connection from './connection'
import * as UserModels from '../../models/users'

const db = connection

export function getUserById(id: number) {
  return db('users').select().where({ id })
}

export function addUser(newUser: UserModels.New) {
  return db('users').insert(newUser).returning('*')
}

export function updateUser(id: number, newUser: UserModels.Update) {
  return db('users').update(newUser).where({ id }).returning('*')
}

export function delUser(id: number) {
  return db('users').delete().where({ id })
}

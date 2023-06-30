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
  const { name, profile_image, email } = newUser
  return db('users')
    .select()
    .where({ id })
    .first()
    .update({
      name,
      profile_image,
      email,
    })
    .returning('*')
}

export function delUser(id: number) {
  return db('users').delete().where({ id })
}

import connection from './connection'
import * as EmailModels from '../../models/emails'

const db = connection

export function getEmailsByUserId(user_id: number) {
  return db('emails').select().where({ user_id }).returning('*')
}

export function addEmail(email: EmailModels.New) {
  return db('emails').insert(email).returning('*')
}

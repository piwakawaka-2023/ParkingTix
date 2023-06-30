import connection from './connection'
import * as EmailModels from '../../models/emails'

const db = connection

export function getEmailsByDisputeId(dispute_id: number) {
  return db('emails').select().where({ dispute_id })
}

export function addEmail(email: EmailModels.New) {
  return db('emails').insert(email).returning('*')
}

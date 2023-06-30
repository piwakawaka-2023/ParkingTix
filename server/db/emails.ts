import connection from './connection'
import * as EmailModels from '../../models/emails'

const db = connection

export function getEmailsByDisputeId(dispute_id: number) {
  return db('emails').select().where({ dispute_id })
}

export function addDispute(dispute: EmailModels.New) {
  return db('disputes').insert(dispute)
}

export function delDispute(id: number) {
  return db('disputes').delete().where('id', id)
}

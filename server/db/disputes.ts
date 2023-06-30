import connection from './connection'
import * as DisputeModels from '../../models/disputes'

const db = connection

export function getDisputesByUserId(user_id: number) {
  return db('disputes').select().where({ user_id })
}

export function addDispute(dispute: DisputeModels.New) {
  return db('disputes').insert(dispute)
}

export function delDispute(id: number) {
  return db('disputes').delete().where('id', id)
}

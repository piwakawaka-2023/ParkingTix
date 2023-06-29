import db from './connection'
import * as disputes from '../../models/disputes'

export function getDisputesByUserId(user_id: number) {
  return db('disputes').select().where({ user_id })
}

export function addDispute(dispute: disputes.New) {
  return db('disputes').insert(dispute)
}

export function delDispute(id: number) {
  return db('disputes').delete().where('id', id)
}

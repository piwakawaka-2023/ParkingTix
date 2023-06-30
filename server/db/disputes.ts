import connection from './connection'
import * as DisputeModels from '../../models/disputes'

const db = connection

export function getDisputesByUserId(user_id: number) {
  return db('disputes').select().where({ user_id })
}

export function addDispute(dispute: DisputeModels.New) {
  return db('disputes').insert(dispute).returning('*')
}

export function updateDispute(id: number, newDispute: DisputeModels.Update) {
  const {
    user_id,
    infringement,
    registration,
    date_issued,
    time_issued,
    location,
    amount,
    status,
  } = newDispute

  return db('disputes')
    .select()
    .where({ id })
    .first()
    .update({
      user_id,
      infringement,
      registration,
      date_issued,
      time_issued,
      location,
      amount,
      status,
    })
    .returning('*')
}

export function delDispute(id: number) {
  return db('disputes').delete().where('id', id)
}

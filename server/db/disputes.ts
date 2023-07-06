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
    thread_id,
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
      thread_id,
      location,
      amount,
      status,
    })
    .returning('*')
}

export function delDispute(id: number) {
  return db('disputes').delete().where('id', id)
}

// Gets dispute back (specifically for DisputeUserDetails model) to generate initial ticket details prompt for gpt
export function getDisputeUserDetails(dispute_id: number) {
  return db('disputes')
    .select(
      'disputes.id as id',
      'disputes.user_id',
      'disputes.infringement',
      'disputes.registration',
      'disputes.date_issued',
      'disputes.time_issued',
      'disputes.offence',
      'disputes.amount',
      'disputes.thread_id',
      'disputes.recipient',
      'disputes.location',
      'users.f_name',
      'users.l_name'
    )
    .where('disputes.id', dispute_id)
    .join('users', 'disputes.user_id', 'users.id')
}

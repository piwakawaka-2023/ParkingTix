import db from './connection'

export function getAllDisputes() {
  return db('disputes').select()
}

export function getSingleDispute(id) {
  return db('disputes').select().where('id', id)
}

export function addDispute(dispute) {
  return db('disputes').insert(dispute)
}

export function delDispute(id) {
  return db('disputes').delete().where('id', id)
}
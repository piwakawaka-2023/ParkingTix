import db from './connection'
import * as disputes from '../../models/disputes'

export function getAllDisputes() {
  return db('disputes').select()
}

export function getSingleDispute(id: number) {
  return db('disputes').select().where('id', id)
}

export function addDispute(dispute: disputes.New) {
  return db('disputes').insert(dispute)
}

export function delDispute(id: number) {
  return db('disputes').delete().where('id', id)
}
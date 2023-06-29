import request from 'superagent'
import * as DisputeModels from '../../models/disputes'

const disputesUrl = '/api/v1/disputes'

// fetch users by user id
export async function fetchDisputes(
  userId: number
): Promise<DisputeModels.DisputeObj[]> {
  const res = await request.get(`${disputesUrl}/${userId}`)
  const disputes = res.body
  return disputes
}

export async function postDispute(
  newDispute: DisputeModels.New
): Promise<DisputeModels.DisputeObj> {
  const res = await request.post(disputesUrl).send(newDispute)
  const newDisputeFromDb = res.body
  return newDisputeFromDb
}

export async function removeDispute(id: number) {
  await request.delete(`${disputesUrl}/${id}`)
}

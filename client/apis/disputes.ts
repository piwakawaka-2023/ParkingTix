import request from 'superagent'
import * as DisputeModels from '../../models/disputes'

const disputesUrl = '/api/v1/disputes'

// fetch disputes by user id
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

export async function updateDispute(
  id: number,
  newDispute: DisputeModels.Update
): Promise<DisputeModels.DisputeObj> {
  const res = await request.patch(`${disputesUrl}/${id}`).send(newDispute)
  const newDisputeFromDb = res.body
  return newDisputeFromDb
}

export async function deleteDispute(id: number) {
  await request.delete(`${disputesUrl}/${id}`)
}

// fetch dispute with user information
export async function fetchDisputeUserDetails(
  disputeId: number
): Promise<DisputeModels.DisputeUserDetails> {
  const res = await request.get(`${disputesUrl}/details/${disputeId}`)
  const dispute = res.body
  return dispute
}

// function logError(err: Error) {
//   if (err.message === 'Username Taken') {
//     throw new Error('Username already taken - please choose another')
//   } else if (err.message === 'Forbidden') {
//     throw new Error(
//       'Only the user who added the dispute may update and delete it'
//     )
//   } else {
//     console.error('Error consuming the API (in client/api.js):', err.message)
//     throw err
//   }
// }

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
  newDispute: DisputeModels.New, token:string //auth
): Promise<DisputeModels.DisputeObj> {
  const res = await request.post(disputesUrl)
  .set('Authorization', `Bearer${token}`) //auth
  .send(newDispute)
  const newDisputeFromDb = res.body
  return newDisputeFromDb
}

export async function updateDispute(id: number,
  newDispute: DisputeModels.Update, token:string //auth
): Promise<DisputeModels.DisputeObj> {
  const res = await request.patch(`${disputesUrl}/${id}`)
  .set('Authorization', `Bearer${token}`) //auth
  .send(newDispute)
  const newDisputeFromDb = res.body
  return newDisputeFromDb
}

export async function deleteDispute(id: number,
 ) {
  await request
  .delete(`${disputesUrl}/${id}`)
  // .set('Authorization', `Bearer${token}`)

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

import request from 'superagent'
import * as DisputeModels from '../../models/disputes'

const openaiUrl = '/api/v1/openai'

// fetch emails by user id
export async function fetchInitialEmail(
  dispute: DisputeModels.DisputeUserDetails
): Promise<string> {
  const res = await request.post(`${openaiUrl}/initiate`).send(dispute)
  const email = res.body
  return email
}

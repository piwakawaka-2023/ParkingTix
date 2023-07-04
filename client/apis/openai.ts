import request from 'superagent'
import * as DisputeModels from '../../models/disputes'
import * as EmailModels from '../../models/emails'

const openaiUrl = '/api/v1/openai'

// fetch a new initial email, returning text
export async function fetchInitialEmail(
  dispute: DisputeModels.DisputeUserDetails
): Promise<string> {
  const res = await request.post(`${openaiUrl}/initiate`).send(dispute)
  const email = res.body
  return email
}

// fetch a new response email, returning text
export async function fetchResponseEmail(
  emails: EmailModels.EmailObj[]
): Promise<string> {
  const res = await request.post(`${openaiUrl}/response`).send(emails)
  const email = res.body
  return email
}


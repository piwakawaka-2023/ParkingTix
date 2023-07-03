import request from 'superagent'
import * as EmailModels from '../../models/emails'

const emailsUrl = '/api/v1/emails'

// fetch emails by user id
export async function fetchEmailsByUserId(
  userId: number
): Promise<EmailModels.EmailObj[]> {
  const res = await request.get(`${emailsUrl}/${userId}`)
  const emails = res.body
  return emails
}

// fetch emails by dispute id
export async function fetchEmailsByDisputeId(
  disputeId: number
): Promise<EmailModels.EmailObj[]> {
  const res = await request.get(`${emailsUrl}/threads/${disputeId}`)
  const emails = res.body
  return emails
}

export async function postEmail(
  newEmail: EmailModels.New
): Promise<EmailModels.EmailObj> {
  const res = await request.post(emailsUrl).send(newEmail)
  const newEmailFromDb = res.body
  return newEmailFromDb
}

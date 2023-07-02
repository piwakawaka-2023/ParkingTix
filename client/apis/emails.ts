import request from 'superagent'
import * as EmailModels from '../../models/emails'

const emailsUrl = '/api/v1/emails'

// fetch disputes by dispute id
export async function fetchEmailsByUserId(
  userId: number, token:string //auth
): Promise<EmailModels.EmailObj[]> {
  const res = await request
  .get(`${emailsUrl}/${userId}`)
  .set('Authorization', `Bearer${token}`) //auth
  const emails = res.body
  return emails
}

export async function postEmail(
  newEmail: EmailModels.New, token:string //auth
): Promise<EmailModels.EmailObj> {
  const res = await request
  .post(emailsUrl).send(newEmail)
  .set('Authorization', `Bearer${token}`) //auth
  const newEmailFromDb = res.body
  return newEmailFromDb
}

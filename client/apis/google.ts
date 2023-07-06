import request from 'superagent'

export async function getGoogleCode() {
  const redirectURL = await request.get('/api/v1/gmail/code')
  window.location.replace(redirectURL.text)
}

export async function sendGoogleCode(code: string) {
  const res = await request.post('/api/v1/gmail/code').send({ code })
  const refToken = res.text
  console.log('api token', refToken)
  return refToken
}

export async function setGoogleAuth(token: string) {
  await request.post('/api/v1/gmail/token').send({ token })
}

export async function sendEmail(email) {
  const res = await request.post('/api/v1/gmail/send').send({ email })
  const threadId = res.text
  return threadId
}

export async function checkInbox(threadId: string) {
  const res = await request.post('/api/v1/gmail/thread').send({ threadId })
  const emails = res.body
  return emails
}

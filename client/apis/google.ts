import request from "superagent";

export async function getGoogleCode() {
  const redirectURL = await request.get('/api/v1/gmail/code')
  window.location.replace(redirectURL.text)
}

export async function sendGoogleCode(code: string) {
  const refToken = await request.post('api/v1/gmail/code').send({code})
  return refToken
}
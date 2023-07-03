import request from "superagent";

export async function getGoogleCode() {
  const redirectURL = await request.get('/api/v1/googleAuth')
  window.location.replace(redirectURL.text)
}

export async function sendGoogleCode(code: string) {
  await request.post('api/v1/googleAuth').send({code})
}
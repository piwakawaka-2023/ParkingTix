import { useEffect } from 'react'
import { sendGoogleCode } from '../apis/google'
import { setRefToken } from '../apis/users'
import { useAuth0 } from '@auth0/auth0-react'

export default function GmailAuthLanding() {
  const search = new URLSearchParams(window.location.search)
  const code = search.get('code')
  const { getAccessTokenSilently, user } = useAuth0()

  useEffect(() => {
    sendGoogleCode(code)
      .then((refToken) => {
        setRefToken(user?.sub, refToken)
      })
      .then(() => {
        window.location.replace('http://localhost:5173/')
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

  return (
    <>
      <p>Updating auth info...</p>
    </>
  )
}

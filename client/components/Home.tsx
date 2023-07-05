import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useAuth0 } from '@auth0/auth0-react'

import { getDisputes } from '../actions/disputes'
import { getEmails } from '../actions/emails'
import { getUser } from '../actions/users'

import Hero from './HomeComp/Hero'
import Features from './HomeComp/Features'
import StartToday from './HomeComp/StartToday'
import Reviews from './HomeComp/Reviews'
import FAQ from './HomeComp/FAQ'
import { getUserId, setRefToken } from '../apis/users'
import { UserObj } from '../../models/users'
import { setGoogleAuth } from '../apis/google'

function Home() {
  const dispatch = useAppDispatch()
  const { getAccessTokenSilently, user } = useAuth0()
  const dbUser = useAppSelector((state) => state.users) as UserObj

  useEffect(() => {
    if (user?.sub) {
      getUserId(user?.sub)
        .then((userId) => {
          dispatch(getUser(userId))
          dispatch(getDisputes(userId))
          dispatch(getEmails(userId))
        })
        .catch((e) => {
          console.error(e)
        })
    }
    if (dbUser.refresh_token) {
      setGoogleAuth(dbUser.refresh_token)
    }
  }, [dbUser])

  return (
    <>
      <Hero />
      <Features />
      <StartToday />
      <Reviews />
      <FAQ />
    </>
  )
}

export default Home

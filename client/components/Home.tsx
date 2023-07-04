import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { useAuth0 } from '@auth0/auth0-react'

import { getDisputes } from '../actions/disputes'
import { getEmails } from '../actions/emails'
import { getUser } from '../actions/users'

import Hero from './HomeComp/Hero'
import Features from './HomeComp/Features'
import StartToday from './HomeComp/StartToday'
import Reviews from './HomeComp/Reviews'
import FAQ from './HomeComp/FAQ'
import { getUserId } from '../apis/users'

function Home() {
  const dispatch = useAppDispatch()
  const { getAccessTokenSilently, user } = useAuth0()

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
  }, [])

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

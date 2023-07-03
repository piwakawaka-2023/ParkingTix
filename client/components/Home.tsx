import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'

import { getDisputes } from '../actions/disputes'
import { getEmails } from '../actions/emails'
import { getUser } from '../actions/users'

import { userId } from './App'
import Hero from './HomeComp/Hero'
import Features from './HomeComp/Features'
import StartToday from './HomeComp/StartToday'
import Reviews from './HomeComp/Reviews'
import FAQ from './HomeComp/FAQ'

function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser(userId))
    dispatch(getDisputes(userId))
    dispatch(getEmails(userId))
  })

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

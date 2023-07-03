import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'

import { getDisputes } from '../actions/disputes'
import { getEmails } from '../actions/emails'
import { getUser } from '../actions/users'

import { userId } from './App'
import Hero from './HomeComp/Hero'

function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser(userId))
    dispatch(getDisputes(userId))
    dispatch(getEmails(userId))
  })

  return <Hero />
}

export default Home

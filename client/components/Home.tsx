import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'

import { getDisputes } from '../actions/disputes'
import { getEmails } from '../actions/emails'
import { getUser } from '../actions/users'
import { userId } from './App'

function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser(userId))
    dispatch(getDisputes(userId))
    dispatch(getEmails(userId))
  })

  return <h1>Hello Im Homie the Home-Page </h1>
}

export default Home

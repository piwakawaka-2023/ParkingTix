// This is just a basic page to test processing gpt prompts.

import { ChangeEvent, useState, FormEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

import * as DisputeModels from '../../models/disputes'
import * as EmailModels from '../../models/emails'

import { addEmailThunk, getEmails } from '../actions/emails'
import Dispute from './Dispute'
import { getDisputes } from '../actions/disputes'
import { checkNewEmailForm } from '../client_utils/form-utils'
import { getUser } from '../actions/users'

const blankDispute = {
  id: 0,
  created_at: 0,
  user_id: 0,
  infringement: 0,
  registration: '',
  offence: '',
  date_issued: '',
  time_issued: '',
  location: '',
  amount: 0,
  status: '',
}

function EmailTest() {
  const dispatch = useAppDispatch()

  const disputesArr = useAppSelector(
    (state) => state.disputes
  ) as DisputeModels.DisputeObj[]

  const [replyData, setReplyData] = useState({
    dispute_id: 1,
    user_id: 1,
    from: '',
    content: '',
  })

  // const [currentDispute, setCurrentDispute] = useState({disputesArr[0]} as DisputeModels.DisputeObj)

  const currentDispute = disputesArr[0]

  // function getCurrentDispute(disputeId: number): DisputeModels.DisputeObj {
  //   const current = disputesArr.find((disp) => {
  //     return disp.id == disputeId
  //   })
  //   if (current === undefined) return blankDispute
  //   return current
  // }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target
    setReplyData({
      ...replyData,
      [name]: value,
    })
    // setCurrentDispute(getCurrentDispute(replyData.dispute_id))
    // console.log(replyData)
  }

  useEffect(() => {
    dispatch(getUser(replyData.user_id))
    dispatch(getDisputes(replyData.user_id))
    dispatch(getEmails(replyData.user_id))
    // setCurrentDispute(getCurrentDispute(replyData.dispute_id))
  }, [currentDispute])

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()

  //   if (checkNewEmailForm(replyData)) {
  //     dispatch(addEmailThunk(replyData))

  //   } else {
  //     alert('Please fill in all required fields')
  //   }

    dispatch(addEmailThunk(replyData))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">
          From (&apos;me&apos; or &apos;respondent&apos;):{' '}
        </label>
        <input type="text" name="from" onChange={handleChange} />
        <label htmlFor="content">Response Text: </label>
        <input type="text" name="content" onChange={handleChange} />
        <button>Submit</button>
      </form>

      <Dispute dispute={currentDispute} />
    </>
  )
}

export default EmailTest

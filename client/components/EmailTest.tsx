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
  const [emails, setEmails] = useState([] as EmailModels.EmailObj[])
  const dispatch = useAppDispatch()

  const disputesArr = useAppSelector(
    (state) => state.disputes
  ) as DisputeModels.DisputeObj[]

  const allEmails = useAppSelector(
    (state) => state.emails
  ) as EmailModels.EmailObj[]

  const [replyData, setReplyData] = useState({
    dispute_id: 1,
    user_id: 1,
    from: '',
    content: '',
  })

  const [currentDispute, setCurrentDispute] = useState({
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
  } as DisputeModels.DisputeObj)

  function getCurrentDispute(disputeId: number): DisputeModels.DisputeObj {
    const current = disputesArr.find((disp) => {
      return disp.id == disputeId
    })
    if (current === undefined) return blankDispute
    return current
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target
    setReplyData({
      ...replyData,
      [name]: value,
    })
    setCurrentDispute(getCurrentDispute(replyData.dispute_id))
    console.log(replyData)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()

    if (checkNewEmailForm(replyData)) {
      dispatch(addEmailThunk(replyData))
    } else {
      alert('Please fill in all required fields')
    }
  }

  const handleReply = () => {
    const emails = allEmails.filter((email) => {
      return email.dispute_id === currentDispute.id
    })
    console.log(emails)
    // grab all the emails from the relevant dispute/thread
    // call a 'generate reply' function using this messages array
    // get the gpt response and post it to the emails table with correct details
    // @ this point the gmail api will also trigger to send the email
  }

  useEffect(() => {
    dispatch(getUser(replyData.user_id))
    dispatch(getDisputes(replyData.user_id))
    dispatch(getEmails(replyData.user_id))
    setCurrentDispute(getCurrentDispute(replyData.dispute_id))
  }, [currentDispute])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_id" defaultValue="1">
          User id:{' '}
        </label>
        <input type="number" name="user_id" onChange={handleChange} />
        <label htmlFor="dispute_id">Dispute id: </label>
        <input
          type="number"
          name="dispute_id"
          defaultValue="1"
          onChange={handleChange}
        />
        <label htmlFor="from">
          From (&apos;me&apos; or &apos;respondent&apos;):{' '}
        </label>
        <input type="text" name="from" onChange={handleChange} />
        <label htmlFor="content">Response Text: </label>
        <input type="text" name="content" onChange={handleChange} />
        <button>Submit</button>
      </form>
      <button onClick={handleReply}>Reply</button>
      <Dispute dispute={currentDispute} />
    </>
  )
}

export default EmailTest

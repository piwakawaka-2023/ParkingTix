import { useEffect, useState } from 'react'
import * as DisputeModels from '../../models/disputes'
import { getEmails } from '../actions/emails'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import EmailsList from './EmailsList'

interface Props {
  dispute: DisputeModels.DisputeObj
}

function Dispute(props: Props) {
  const dispatch = useAppDispatch()
  const { dispute } = props
  const {
    id,
    date_issued,
    infringement,
    registration,
    time_issued,
    location,
    amount,
  } = dispute
  // const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    dispatch(getEmails(id))
  }, [])

  return (
    <>
      <div>
        <h3>{date_issued}</h3>
        <h3>Infringement Number:{infringement}</h3>
        <h3>Registration Number:{registration}</h3>
        <p>Time issued:{time_issued}</p>
        <p>Location:{location}</p>
        <p>Amount Due: ${amount}</p>
      </div>
      <EmailsList key={id} disputeId={id} />
    </>
  )
}

export default Dispute

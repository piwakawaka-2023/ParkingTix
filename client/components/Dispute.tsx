// import { useState } from 'react'
import * as DisputeModels from '../../models/disputes'
import * as action from '../actions/disputes'
import { useAppDispatch } from '../hooks/hooks'
import { ThunkAction } from '../store'
import EmailsList from './EmailsList'

interface Props {
  dispute: DisputeModels.DisputeObj
}

function Dispute(props: Props) {
  // const dispatch = useAppDispatch()
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

  const dispatch = useAppDispatch()

  const handleDelete = (id: number) => {
    dispatch(action.deleteDisputeThunk(id))
  }

  return (
    <>
      <div>
        <div className="dispute-card">
          <h3>{date_issued}</h3>
          <h3>Infringement Number:{infringement}</h3>
          <h3>Registration Number:{registration}</h3>
          <p>Time issued:{time_issued}</p>
          <p>Location:{location}</p>
          <p>Amount Due: ${amount}</p>
        </div>
        <EmailsList key={id} disputeId={id} />
      </div>
      {/* STYLING FOR DROP DOWN IS IN ./STYLES/INDEX.CSS */}
      <div className="dropdown">
        <button>Change Status</button>
        <div className="dropdown-options">
          <a href="#">Dispute Resolved</a>
          <a href="#">Appeal Failed</a>
          <button onClick={() => handleDelete(dispute.id)}>Delete</button>
        </div>
      </div>
      <button>Check Inbox</button>
      <button>Send Reply</button>
    </>
  )
}

export default Dispute
function dispatch(arg0: ThunkAction<void>) {
  throw new Error('Function not implemented.')
}

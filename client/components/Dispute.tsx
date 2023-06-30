import * as DisputeModels from '../../models/disputes'

interface Props {
  dispute: DisputeModels.DisputeObj
}

function Dispute(props: Props) {
  const { dispute } = props

  return (
    <>
      <div>
        <h3>{dispute.date_issued}</h3>
        <h3>Infringement Number:{dispute.infringement}</h3>
        <h3>Registration Number:{dispute.registration}</h3>
        <p>Time issued:{dispute.time_issued}</p>
        <p>Location:{dispute.location}</p>
        <p>Amount Due: ${dispute.amount}</p>
      </div>
    </>
  )
}

export default Dispute

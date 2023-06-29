import * as DisputeModels from '../../models/disputes'

interface Props {
  dispute: DisputeModels.DisputeObj
}

function Dispute(props: Props) {
  const { dispute } = props

  return (
    <>
      <div>
        <h1>{dispute.date_issued}</h1>
        <h2>Infringement Number:{dispute.infringement}</h2>
        <h2>Registration Number:{dispute.registration}</h2>
        <p>Time issued:{dispute.time_issued}</p>
        <p>Location:{dispute.location}</p>
        <p>Pay up B$:{dispute.amount}</p>
      </div>
    </>
  )
}

export default Dispute

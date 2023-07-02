import * as DisputeModels from '../../models/disputes'
import { useAppSelector } from '../hooks/hooks'
import Dispute from './Dispute'

function DisputesList() {
  const disputesArr = useAppSelector(
    (state) => state.disputes
  ) as DisputeModels.DisputeObj[]

  return (
    <>
      <div>
        {disputesArr.map((dispute) => (
          <Dispute key={dispute.id} dispute={dispute} />
        ))}
      </div>
    </>
  )
}

export default DisputesList

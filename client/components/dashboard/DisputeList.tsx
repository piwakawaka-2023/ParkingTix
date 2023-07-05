import Dispute from './Dispute'
import { useAppSelector } from '../../hooks/hooks'
import * as DisputeModels from '../../../models/disputes'

function DisputeList() {
  const disputesArr = useAppSelector(
    (state) => state.disputes
  ) as DisputeModels.DisputeObj[]

  const newestFirst = disputesArr.reverse()

  return (
    <>
      {newestFirst.map((dispute) => (
        <Dispute key={dispute.id} dispute={dispute} />
      ))}
    </>
  )
}

export default DisputeList

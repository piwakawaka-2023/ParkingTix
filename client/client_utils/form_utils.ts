import * as DisputeModels from '../../models/disputes'

export default function checkNewDisputeForm(input: DisputeModels.New) {
  // check all required fields are filled
  if (
    input.user_id && 
    input.infringement && 
    input.registration && 
    input.date_issued && 
    input.time_issued && 
    input.location && 
    input.amount && 
    input.status
  ) {
    return true
  } else {
    return false
  }
}
import * as DisputeModels from '../../models/disputes'
import * as UserModels from '../../models/users'

export function checkNewUserForm(input: UserModels.New) {
  // check all required fields are filled
  if (input.f_name && input.l_name && input.email) {
    return true
  } else {
    return false
  }
}

export function checkNewDisputeForm(input: DisputeModels.New) {
  // check all required fields are filled
  if (
    input.user_id &&
    input.infringement &&
    input.registration &&
    input.offence &&
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

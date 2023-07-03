import * as EmailModels from '../../models/emails'
import * as DisputeModels from '../../models/disputes'

export function createNewEmailFromText(dispute: DisputeModels.DisputeUserDetails, bodyText: string, fromUser: boolean): EmailModels.New {
  const { id, user_id } = dispute
  let from = ''
  fromUser === true ? from = 'me' : from = 'respondent'

  const email = {
    dispute_id: id,
    user_id: user_id,
    from: from,
    content: bodyText
  }
  // console.log(email)
  return email
}
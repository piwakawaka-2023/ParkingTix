import * as EmailModels from '../../models/emails'
import * as DisputeModels from '../../models/disputes'

export function generatePromptFromDispute(
  dispute: DisputeModels.DisputeUserDetails
) {
  const {
    infringement,
    // registration,
    date_issued,
    // time_issued,
    location,
    offence,
    amount,
    f_name,
    l_name,
  } = dispute

  const details = `
    Name: ${f_name} ${l_name},
    Ticket number: ${infringement},
    Location of alleged offence: ${location},
    Date issued: ${date_issued},
    Alleged offence: ${offence},
    Fine amount: $${amount},
  `

  return details
}

export function generateMessageThread(emails: EmailModels.EmailObj[]) {
  const thread = emails.map((email) => {
    email.content
  })
  return thread
}

import * as EmailModels from '../../models/emails'
import * as DisputeModels from '../../models/disputes'

export function generateTicketDetails(
  dispute: DisputeModels.DisputeUserDetails
) {
  const {
    infringement,
    registration,
    date_issued,
    time_issued,
    location,
    offence,
    amount,
    f_name,
    l_name,
  } = dispute

  const details = `
    Name: ${f_name} ${l_name},
    Ticket number: ${infringement},
    Licence plate: ${registration},
    Date the ticket was issued: ${date_issued},
    Time the ticket was issued (24hr time): ${time_issued},
    Location of alleged offence: ${location},
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

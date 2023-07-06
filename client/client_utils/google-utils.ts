import * as EmailModels from '../../models/emails'
import * as UserModels from '../../models/users'
import * as DisputeModels from '../../models/disputes'
import { useAppSelector } from '../hooks/hooks'

export function checkInboxUtility(
  disputeId: number,
  userEmails: EmailModels.EmailObj[],
  inboxArray: string[]
): boolean {
  // filter the emails to get just the ones from the current dispute
  const dbDisputeEmails = userEmails.filter((email) => {
    return email.dispute_id === disputeId
  })

  // if the length of the inbox array is greater than the array length of emails in the db...
  if (inboxArray.length > dbDisputeEmails.length) {
    return true
  } else {
    return false
  }
}

// just uses the last email in the array...
export function extractReplyEmailText(inbox: string, user: UserModels.UserObj) {
  const lastEmail = inbox[inbox.length - 1]

  const { email } = user

  // chop the string down to be only the section before the users email address appears!

  // index of where the user's email first appears, minus 44 spots, for the bits that come before it
  const wordIndex = lastEmail.indexOf(`<${email}>`) - 44

  if (wordIndex !== -1) {
    return lastEmail.substring(0, wordIndex)
  } else {
    // If the word is not found, return the entire input string
    return lastEmail
  }
}

export function getDisputeEmails(
  disputeId: number,
  userEmails: EmailModels.EmailObj[]) {
  return userEmails.filter((email) => {
    return email.dispute_id === disputeId
  })
}

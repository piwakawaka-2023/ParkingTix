import * as EmailModels from '../../models/emails'
import * as DisputeModels from '../../models/disputes'

interface GptMessage {
  role: string
  content: string
}

export function generatePromptFromDispute(
  dispute: DisputeModels.DisputeUserDetails
) {
  const {
    infringement,
    date_issued,
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

export function generateThreadFromEmails(emails: EmailModels.EmailObj[]) {
  const thread = [] as GptMessage[]
  emails.forEach((email) => {
    const { from, content } = email
    return thread.push({
      role: 'user',
      content: `from ${from}: ${content}`,
    })
  })
  return thread
}


export const initialEmailInstructions = "Write an email to the Wellington City Council (New Zealand) to appeal a parking ticket. The ticket details will be sent in my next message. Please explain that there are extraordinary circumstances that warrant, in due fairness, a waiver of the fee. Provide a plausible and defensible reason for this. Be imaginative, but within reality. Don't use serious emergency events as the reason. Do not claim to have attached any documents to the email, and do not make an offer to provide any documents to support the appeal. Keep the email brief (4 or fewer paragraphs). Write only the email body text (no subject line etc). Do not include any square brackets for information I don't provide you. Don't copy out all the ticket details."


export const responseEmailInstructions = "Below is a thread of emails between myself and the Wellington City Council, in which I have given fair reason to be let off a parking fine. Please write a brief, but firm response giving rebuttal to any concerns they have with my excuses, in order to get them to agree to let me off the fine. You may elaborate on the circumstances if it supports your argument, or give other reasons that the fine cannot be paid (personal circumstances, emotional damage brought on by the appeal process etc.). Be creative, but within reality. If, in the exchange, they have already agreed to let me off the fine, respond accordingly with a thankyou message. Generate only the email body text, with no square brackets to denote unknown information. Address the respondent by name where practical."
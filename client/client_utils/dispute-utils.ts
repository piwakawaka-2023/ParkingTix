import * as EmailModels from '../../models/emails'
import * as DisputeModels from '../../models/disputes'

interface Props {
  allEmails: EmailModels.EmailObj[]
  dispute: DisputeModels.DisputeObj
}

interface EmailText {
  from: string
  content: string
}

function getEmailText(props: Props): EmailText[] {
  const { dispute, allEmails } = props
  const { id } = dispute
  const result = [] as EmailText[]

  const emails = allEmails.filter((email) => {
    return email.dispute_id === id
  })

  emails.forEach((email) => {
    result.push({
      from: email.from,
      content: email.content,
    })
  })
  return result
}

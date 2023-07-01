import * as EmailModels from '../../models/emails'
import { useAppSelector } from '../hooks/hooks'
import Email from './Email'

interface Props {
  disputeId: number
}

function EmailsList(props: Props) {
  const { disputeId } = props

  const allEmails = useAppSelector(
    (state) => state.emails
  ) as EmailModels.EmailObj[]

  const emails = allEmails.filter((email) => {
    email.dispute_id === disputeId
  })

  return (
    <>
      <div>
        {emails.map((email) => (
          <>
            <h1>Should see individual emails here</h1>
            {/* <Email key={email.id} email={email} /> */}
          </>
        ))}
      </div>
    </>
  )
}

export default EmailsList

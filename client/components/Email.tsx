import * as EmailModels from '../../models/emails'

interface Props {
  email: EmailModels.EmailObj
}

function Email(props: Props) {
  const { email } = props
  const { content } = email

  return (
    <>
      <div>
        <p>Here&apos;s an email:</p>
        <p>{content}</p>
      </div>
    </>
  )
}

export default Email

import { Typography, Paper } from '@mui/material'
import * as EmailModels from '../../models/emails'

interface Props {
  email: EmailModels.EmailObj
}

function Email(props: Props) {
  const { email } = props
  const { content } = email

  // console.log(content)

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Typography
          variant="body2"
          sx={{ whiteSpace: 'pre-wrap' }}
        >{`${content}`}</Typography>
      </Paper>
    </>
  )
}

export default Email

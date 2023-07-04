import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// import { useState } from 'react'
import * as DisputeModels from '../../../models/disputes'
import EmailsList from '../EmailsList'
import { Divider } from '@mui/material'

interface Props {
  dispute: DisputeModels.DisputeObj
}

function Dispute(props: Props) {
  const { dispute } = props
  const {
    id,
    date_issued,
    infringement,
    registration,
    time_issued,
    location,
    amount,
    offence,
    status,
  } = dispute

  return (
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          #{infringement}, {date_issued}, {location} - {status}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1">Dispute Details</Typography>
        <Divider sx={{ mb: 1 }} />
        <Typography variant="body2">
          Car Registration: {registration}
        </Typography>
        <Typography variant="body2">Location: {location}</Typography>
        <Typography variant="body2">Offence: {offence}</Typography>
        <Typography variant="body2">Date Issued: {date_issued}</Typography>
        <Typography variant="body2">Time Issued: {time_issued}</Typography>
        <Typography variant="body2">
          Infringement Reference: #{infringement}
        </Typography>
        <Divider sx={{ mb: 1, mt: 1 }} />
        <Typography variant="body2">Price: ${amount}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default Dispute

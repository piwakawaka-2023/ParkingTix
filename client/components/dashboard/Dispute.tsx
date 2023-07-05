import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { useState, useRef } from 'react'
import * as DisputeModels from '../../../models/disputes'
import EmailsList from '../EmailsList'
import {
  Divider,
  Button,
  ButtonGroup,
  Grow,
  Paper,
  Popper,
  MenuList,
  MenuItem,
} from '@mui/material'
import { useAppDispatch } from '../../hooks/hooks'
import * as action from '../../actions/disputes'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ClickAwayListener from '@mui/material/ClickAwayListener'

interface Props {
  dispute: DisputeModels.DisputeObj
}

const options = ['Change Status', 'Mark Resolved', 'Appeal Failed']

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

  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleClick = () => {
    if (selectedIndex == 1) {
      handleResolved()
    } else if (selectedIndex == 2) {
      handleFailed()
    }
  }

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  const dispatch = useAppDispatch()

  const handleDelete = (id: number) => {
    dispatch(action.deleteDisputeThunk(id))
  }

  const handleResolved = () => {
    dispatch(action.updateDisputeThunk(id, { status: 'Resolved' }))
    window.location.reload()
  }

  const handleFailed = () => {
    dispatch(action.updateDisputeThunk(id, { status: 'Failed' }))
    window.location.reload()
  }

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
        <Divider sx={{ mb: 1, mt: 1 }} />
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
          sx={{ mb: 1 }}
        >
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
          <Popper
            sx={{
              zIndex: 1,
            }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu" autoFocusItem>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          disabled={index === 0}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Button onClick={() => handleDelete(id)}>Delete</Button>
        </ButtonGroup>
        <EmailsList key={id} disputeId={id} />
        <Divider sx={{ mb: 1, mt: 1 }} />
      </AccordionDetails>
    </Accordion>
  )
}

export default Dispute

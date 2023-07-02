import { Link } from 'react-router-dom'
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Menu,
} from '@mui/material'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'

function Nav() {
  const [auth, setAuth] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#063970' }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <ReceiptLongIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ParkingTix
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </Button>
          <Link
            to="/disputes"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button color="inherit">Disputes</Button>
          </Link>
          <Link
            to="/adddispute"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button color="inherit">Dispute your tix</Button>
          </Link>
          {!auth && (
            <Button variant="outlined" color="inherit">
              Login
            </Button>
          )}
        </Stack>
        {auth && (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Nav

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
  Avatar,
  Box,
  Divider,
} from '@mui/material'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import { MenuProps } from '@mui/material/Menu'
import { styled, alpha } from '@mui/material/styles'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))

function Nav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    logout()
  }

  const handleLogIn = () => {
    loginWithRedirect()
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#063970' }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <ReceiptLongIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Parking<span className="span-logo">Tix</span>
        </Typography>

        <Stack direction="row" spacing={2}>
          <IfNotAuthenticated>
            <Button variant="outlined" color="inherit" onClick={handleLogIn}>
              Login
            </Button>
          </IfNotAuthenticated>
        </Stack>
        <IfAuthenticated>
          <>
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
              to="/disputes/add"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button color="inherit">Dispute your tix</Button>
            </Link>
            {console.log(user)}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar src={user?.picture} />
            </IconButton>
            <StyledMenu
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
              <Box>
                <Typography variant="body1">{user?.name}</Typography>
                <Typography variant="subtitle1">{user?.email}</Typography>
              </Box>
              <Divider light />
              <MenuItem onClick={handleClose}>
                <PersonOutlineOutlinedIcon />
                Profile
              </MenuItem>
              <Divider light />
              <MenuItem onClick={handleClose}>
                <TuneOutlinedIcon />
                Settings
              </MenuItem>
              <Divider light />
              <MenuItem onClick={handleLogOut}>Sign Out</MenuItem>
            </StyledMenu>
          </>
        </IfAuthenticated>
      </Toolbar>
    </AppBar>
  )
}

export default Nav

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Menu,
  Avatar,
  MenuItem,
  ListSubheader,
  Badge,
} from '@mui/material'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import { PersonOutlineOutlined, TuneOutlined } from '@mui/icons-material'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import GavelIcon from '@mui/icons-material/Gavel'
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { useAppSelector } from '../hooks/hooks'

const DashboardLayout = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { user, logout } = useAuth0()
  const open = Boolean(anchorEl)
  const disputes = useAppSelector((state) => state.disputes)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    logout()
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 175,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 175 },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            component={Link}
            to="/"
          >
            <ReceiptLongIcon />
          </IconButton>
          <Typography variant="h6">
            Parking<span className="span-logo">Tix</span>
          </Typography>
        </Box>
        <List>
          <ListSubheader>Home</ListSubheader>
          <ListItem button component={Link} to="/dashboard">
            <DashboardIcon sx={{ mr: 1 }} />
            {/* <ListItemIcon></ListItemIcon> */}
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListSubheader>Disputes</ListSubheader>
          <ListItem button component={Link} to="/dashboard/disputes">
            <GavelIcon color="inherit" sx={{ mr: 1 }} />
            {/* <ListItemIcon></ListItemIcon> */}
            <ListItemText primary="Disputes" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/disputes/new">
            <ControlPointOutlinedIcon sx={{ mr: 1 }} />
            {/* <ListItemIcon></ListItemIcon> */}
            <ListItemText primary="New Dispute" />
          </ListItem>
          <ListSubheader>User</ListSubheader>
          <ListItem button component={Link} to="/dashboard/profile">
            <AccountCircleOutlinedIcon sx={{ mr: 1 }} />
            {/* <ListItemIcon></ListItemIcon> */}
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/profile/settings">
            <SettingsOutlinedIcon sx={{ mr: 1 }} />
            {/* <ListItemIcon></ListItemIcon> */}
            <ListItemText primary="User Settings" />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          backgroundColor: '#fafafb',
          minHeight: '100vh',
        }}
      >
        <Toolbar sx={{ backgroundColor: 'white', p: 0 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              sx={{
                height: 28,
                width: 28,
                borderRadius: 2,
                backgroundColor: 'rgb(245, 245, 245)',
                mr: 1,
              }}
            >
              <Badge
                badgeContent={disputes.length}
                component={Link}
                to="/dashboard/disputes"
                color="primary"
              >
                <NotificationsOutlinedIcon
                  sx={{ width: 22, height: 22, color: 'black' }}
                />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to="/dashboard/profile/settings"
              sx={{
                height: 28,
                width: 28,
                borderRadius: 2,
                backgroundColor: 'rgb(245, 245, 245)',
                mr: 0.5,
              }}
            >
              <SettingsOutlinedIcon sx={{ width: 22, height: 22 }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{ height: 28, borderRadius: 2 }}
            >
              <Avatar
                src={user?.picture}
                sx={{ width: 22, height: 22, mr: 0.5 }}
              />
              <Typography variant="body1">{user?.name}</Typography>
            </IconButton>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Box sx={{ textAlign: 'left', p: '5px' }}>
                <Typography variant="body1">{user?.name}</Typography>
                <Typography variant="subtitle1">{user?.email}</Typography>
              </Box>
              <Divider light sx={{ m: 'auto' }} />
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/dashboard/profile"
                disableRipple
              >
                <PersonOutlineOutlined />
                Profile
              </MenuItem>
              <Divider light sx={{ m: 'auto' }} />
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/dashboard/profile/settings"
                disableRipple
              >
                <TuneOutlined />
                Settings
              </MenuItem>
              <Divider light sx={{ m: 'auto' }} />
              <MenuItem
                sx={{ alignSelf: 'center' }}
                onClick={handleLogOut}
                disableRipple
              >
                Sign Out
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardLayout

import { Typography, Paper, Button, Box, Avatar, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { Height } from '@mui/icons-material'

function Profile() {
  const user = useAppSelector((state) => state.users)

  return (
    <>
      <Paper sx={{ mb: 2, height: '15vh' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
            backgroundImage:
              'url(https://cdn.wallpapersafari.com/45/32/8wkGop.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: 1,
          }}
        >
          <Typography variant="body1" sx={{ m: 'auto' }}>
            Edit your profile
          </Typography>
          <Button
            component={Link}
            to="/dashboard/profile/settings"
            variant="contained"
            sx={{ m: 'auto' }}
          >
            Edit
          </Button>
        </Box>
      </Paper>
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h4" component="div" sx={{ mb: 4 }}>
          My Profile
        </Typography>

        <Box sx={{ display: 'flex' }}>
          <Box sx={{ p: 2, ml: 'auto', width: '50%' }}>
            <Avatar
              src={user.profile_image}
              sx={{ ml: 'auto', mr: 'auto', width: 100, height: 100 }}
            />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mr: 2 }} />

          <Box sx={{ mr: 'auto', p: 2, width: '50%' }}>
            <Typography variant="body1">
              {user.f_name} {user.l_name}
            </Typography>
            <Typography variant="body2">{user.email}</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  )
}

export default Profile

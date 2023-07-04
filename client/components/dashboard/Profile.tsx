import { Typography, Paper, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Profile() {
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
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4" component="div" sx={{ mb: 4 }}>
          My Profile
        </Typography>
      </Paper>
    </>
  )
}

export default Profile

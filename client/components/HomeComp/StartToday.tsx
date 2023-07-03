// https://material-kit-pro-react.devias.io/assets/gradient-bg.svg

import { Button, Paper, Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { Link } from 'react-router-dom'

function Features() {
  const { loginWithRedirect } = useAuth0()

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <Paper
      sx={{
        backgroundImage:
          'url(https://material-kit-pro-react.devias.io/assets/gradient-bg.svg)',
        height: '40vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        backgroundColor: '#063970',
      }}
    >
      <Typography
        variant="h4"
        color="white"
        sx={{ ml: 'auto', mr: 'auto', mt: 'auto', color: '#ffcd05' }}
      >
        Start saving your money today!
      </Typography>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{ ml: 'auto', mr: 'auto' }}
      >
        use us and get your money back!
      </Typography>
      <IfNotAuthenticated>
        <Button
          onClick={handleSignIn}
          sx={{
            ml: 'auto',
            mr: 'auto',
            mb: 'auto',
            backgroundColor: '#ffcd05',
          }}
        >
          Start
        </Button>
      </IfNotAuthenticated>

      <IfAuthenticated>
        <Button
          sx={{
            ml: 'auto',
            mr: 'auto',
            mb: 'auto',
            backgroundColor: '#ffcd05',
          }}
        >
          <Link to="/disputes">Dashboard</Link>
        </Button>
      </IfAuthenticated>
    </Paper>
  )
}

export default Features

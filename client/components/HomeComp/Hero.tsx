import { Paper, Typography } from '@mui/material'

function Hero() {
  return (
    <Paper
      sx={{
        backgroundImage:
          'url(https://www.primeparking.co.nz/assets/Uploads/homepage-banner-cars.jpg)',
        height: '70vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h3"
        color="white"
        sx={{ ml: 'auto', mr: 'auto', mt: 'auto', color: '#ffcd05' }}
      >
        Never pay parking tickets again...
      </Typography>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{ ml: 'auto', mr: 'auto', mb: 'auto' }}
      >
        We are here to help!
      </Typography>
    </Paper>
  )
}

export default Hero

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
        Never pay a parking Tix again...
      </Typography>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{ ml: 'auto', mr: 'auto', mb: 'auto' }}
      >
        Need some help with that?
      </Typography>
    </Paper>
  )
}

export default Hero

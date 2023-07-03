import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { ReceiptLongOutlined } from '@mui/icons-material'
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'

function Features() {
  return (
    <Paper sx={{ p: 2 }}>
      <Box
        sx={{
          textAlign: 'center',
          alignContent: 'center',
          display: 'flex',
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <Stack>
          <Grid container spacing={1} sx={{ m: 'auto' }}>
            <Grid sx={{ width: '27vw' }} m={3}>
              <Card sx={{ height: '25vh', p: 1 }}>
                <CardMedia sx={{ textAlign: 'center', height: '30%' }}>
                  <ReceiptLongOutlined
                    sx={{ height: '100%', width: '100%', color: '#ffcd05' }}
                  />
                </CardMedia>
                <CardContent sx={{ textAlign: 'center', height: '60%' }}>
                  <Typography variant="body2">
                    Got a parking ticket? Well, its easily reversable! We do it
                    for you!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid sx={{ width: '27vw' }} m={3}>
              <Card sx={{ height: '25vh', p: 1 }}>
                <CardMedia sx={{ textAlign: 'center', height: '30%' }}>
                  <DvrOutlinedIcon
                    sx={{ height: '100%', width: '100%', color: '#ffcd05' }}
                  />
                </CardMedia>
                <CardContent sx={{ textAlign: 'center', height: '60%' }}>
                  <Typography variant="body2">
                    Dashboard, easily manage your parking tickets.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid sx={{ width: '27vw' }} m={3}>
              <Card sx={{ height: '25vh', p: 1 }}>
                <CardMedia sx={{ textAlign: 'center', height: '30%' }}>
                  <PaidOutlinedIcon
                    sx={{ height: '100%', width: '100%', color: '#ffcd05' }}
                  />
                </CardMedia>
                <CardContent sx={{ textAlign: 'center', height: '60%' }}>
                  <Typography variant="body2">
                    Free to use and you will never have to worry about loosing
                    money to parking in spots that belong to you.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Paper>
  )
}

export default Features

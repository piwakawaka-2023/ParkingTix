import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Paper } from '@mui/material'

export default function Footer() {
  return (
    <Paper sx={{ mt: 5 }}>
      <Box component="footer" sx={{ backgroundColor: '#063970' }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="#ffcd05" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="white">
                We are ParkingTix, best in the buisness of disputing parking
                Tickets
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="#ffcd05" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="white">
                123 ParkingTix Street, Wellington
              </Typography>
              <Typography variant="body2" color="white">
                Email: wellytix@tix.com
              </Typography>
              <Typography variant="body2" color="white">
                Phone: +64 231 2433
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="#ffcd05" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook sx={{ color: 'white' }} />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram sx={{ color: 'white' }} />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter sx={{ color: 'white' }} />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5} p={1}>
            <Typography variant="body2" color="white" align="center">
              {'Copyright © '}
              <Link color="inherit" href="http://localhost:5173">
                ParkingTix
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Paper>
  )
}

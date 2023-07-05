import { Typography, Box } from '@mui/material'

function NotFoundPage() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4">
        <span className="span-logo">404</span> Page Not{' '}
        <span className="span-logo">Found</span>
      </Typography>
      <Typography variant="body1">
        The page you are looking for does not exist.
      </Typography>

      <img
        src="https://media.tenor.com/0h0uWUsPrV4AAAAC/what-is-this-ticket.gif"
        alt="page not found"
      />
    </Box>
  )
}

export default NotFoundPage

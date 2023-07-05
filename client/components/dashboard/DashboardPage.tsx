import { Typography, Paper, Box } from '@mui/material'
import { useAppSelector } from '../../hooks/hooks'

function DashboardPage() {
  const user = useAppSelector((state) => state.users)
  const disputes = useAppSelector((state) => state.disputes)

  const resolvedCount = disputes.filter(
    (dispute) => dispute.status === 'Resolved'
  ).length
  const failedCount = disputes.filter(
    (dispute) => dispute.status === 'Failed'
  ).length

  let totalPrice = 0

  for (const item of disputes) {
    if (item.status === 'Resolved') {
      totalPrice += item.amount
    }
  }

  console.log(totalPrice)

  return (
    <>
      <Typography variant="h4" component="div" sx={{ ml: 3, mb: 4 }}>
        Parking Tix
      </Typography>
      <Typography variant="body1" sx={{ ml: 3, mb: 5 }}>
        Welcome to the dashboard {user.f_name}!
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Paper sx={{ width: '45%', m: 'auto', p: 2 }}>
          <Typography>Number of disputes: {disputes.length}</Typography>
        </Paper>

        <Paper sx={{ width: '45%', m: 'auto', p: 2 }}>
          <Typography>Disputes Resolved: {resolvedCount} </Typography>
        </Paper>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Paper sx={{ width: '45%', m: 'auto', p: 2 }}>
          <Typography>Disputes Failed: {failedCount}</Typography>
        </Paper>
        <Paper sx={{ width: '45%', m: 'auto', p: 2 }}>
          <Typography>Money Saved: ${totalPrice}</Typography>
        </Paper>
      </Box>
    </>
  )
}

export default DashboardPage

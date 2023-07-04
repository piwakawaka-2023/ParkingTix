import { Typography, Paper, Divider } from '@mui/material'

function Settings() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h4" component="div" sx={{ mb: 1 }}>
        Settings
      </Typography>
      <Divider />
    </Paper>
  )
}

export default Settings

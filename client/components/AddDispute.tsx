import { ChangeEvent, FormEvent, useState } from 'react'
import * as DisputeModels from '../../models/disputes'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as actions from '../actions/disputes'

import '../client_utils/form-utils'

import { checkNewDisputeForm } from '../client_utils/form-utils'
import { Link } from 'react-router-dom'
import { UserObj } from '../../models/users'
import { Input, Paper, Typography, InputLabel, Button } from '@mui/material'

function AddDisputes() {
  const user = useAppSelector((state) => state.users) as UserObj
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState({
    user_id: user?.id,
    status: 'New',
  } as DisputeModels.New)
  const [formVisible, setFormVisible] = useState(true)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    // check everything is there, if not send alert
    if (checkNewDisputeForm(formData)) {
      dispatch(actions.addDisputeThunk(formData, user.email))
      setFormVisible(false)
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <Paper sx={{ p: 2, alignContent: 'center', textAlign: 'center' }}>
      <Typography variant="h6">Create new Dispute</Typography>
      {formVisible && (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <InputLabel htmlFor="dateIssued">Date issued:</InputLabel>
            <Input
              sx={{ mb: 1 }}
              type="date"
              id="dateIssued"
              name="date_issued"
              onChange={handleChange}
            />
            <InputLabel htmlFor="timeIssued">Time issued:</InputLabel>
            <Input
              sx={{ mb: 1 }}
              type="time"
              id="timeIssued"
              name="time_issued"
              onChange={handleChange}
            />
            <InputLabel htmlFor="infringement">Infringement Number:</InputLabel>
            <Input
              sx={{ mb: 1 }}
              type="number"
              id="infringement"
              name="infringement"
              onChange={handleChange}
            />
            <InputLabel htmlFor="registration">License Plate:</InputLabel>
            <Input
              sx={{ mb: 1 }}
              type="text"
              id="registration"
              name="registration"
              onChange={handleChange}
            />
            <InputLabel htmlFor="location">Location:</InputLabel>
            <Input
              sx={{ mb: 1 }}
              type="text"
              id="location"
              name="location"
              onChange={handleChange}
            />
            <InputLabel htmlFor="offence">Alleged Offence: </InputLabel>
            <Input
              sx={{ mb: 1 }}
              type="text"
              id="offence"
              name="offence"
              onChange={handleChange}
            />
            <InputLabel htmlFor="amount">Amount Due: $</InputLabel>
            <Input
              sx={{ mb: 1 }}
              type="number"
              id="amount"
              name="amount"
              onChange={handleChange}
            />
            <br />
            <Button variant="contained" type="submit" value="Submit">
              Submit
            </Button>
          </form>
        </div>
      )}
      {!formVisible && (
        <div className="form-container">
          <h1>Dispute Submitted!</h1>
          <p>These bastards won&apos;t get away with this.</p>
          <Link to="/dashboard/disputes">
            <button>View my disputes</button>
          </Link>
        </div>
      )}
    </Paper>
  )
}

export default AddDisputes

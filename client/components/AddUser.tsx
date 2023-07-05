import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import * as UserModels from '../../models/users'
import { useAppDispatch } from '../hooks/hooks'
import * as actions from '../actions/users'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import '../client_utils/form-utils'
// Temp/hardcoded user id, will change when auth0 implemented
import { checkNewUserForm } from '../client_utils/form-utils'
import { Link } from 'react-router-dom'
import { fetchAllUsers } from '../apis/users'
import { getGoogleCode } from '../apis/google'
import {
  Paper,
  Typography,
  Box,
  Input,
  InputLabel,
  TextField,
  Button,
  Divider,
} from '@mui/material'

function AddUser() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { getAccessTokenSilently, user } = useAuth0() //auth
  // console.log('auth0 info:', user)
  const [formData, setFormData] = useState({} as UserModels.New)
  const [formVisible, setFormVisible] = useState(true)

  useEffect(() => {
    setFormData({
      ...formData,
      email: user?.email,
      profile_image: user?.picture,
      auth0_id: user?.sub,
    })
    async function getUsers() {
      const userArr = await fetchAllUsers()
      userArr.map((dbUser) => {
        if (user?.sub === dbUser.auth0_id) {
          return navigate('/')
        } /* this userId has to come from your db */
      })
    }
    getUsers()
    //the action/api call to check if user(auth0 login) exists in your db
  }, [])

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()
    // const token = await getAccessTokenSilently()
    // check everything is there, if not send alert
    if (checkNewUserForm(formData)) {
      dispatch(actions.addUserThunk(formData))
      setFormVisible(false)
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <Paper sx={{ textAlign: 'center', height: '100vh', p: 2 }}>
      <Box>
        <Typography variant="h4">
          Welcome to Parking<span className="span-logo">Tix</span>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          We just want a little more infromation from you.
        </Typography>
        {formVisible && (
          <Box className="form-container" sx={{ mb: 5 }}>
            <form className="form" onSubmit={handleSubmit}>
              <InputLabel htmlFor="f_name">First name:</InputLabel>
              <Input
                type="text"
                id="fName"
                name="f_name"
                onChange={handleChange}
              />
              <InputLabel htmlFor="l_name">Last name:</InputLabel>
              <TextField
                type="text"
                id="lName"
                name="l_name"
                onChange={handleChange}
                variant="standard"
              />
              <br />
              <Button sx={{ mb: 5 }} type="submit" value="Submit">
                Submit
              </Button>
            </form>
          </Box>
        )}
        {!formVisible && (
          <div className="form-container">
            <h1>Thank you for signing up!</h1>
            <button onClick={getGoogleCode}>Continue</button>
          </div>
        )}
      </Box>
    </Paper>
  )
}

export default AddUser

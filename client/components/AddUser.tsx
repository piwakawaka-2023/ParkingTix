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

function AddUser() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { getAccessTokenSilently, user } = useAuth0() //auth
  // console.log('auth0 info:', user)
  const [formData, setFormData] = useState({} as UserModels.New)
  const [formVisible, setFormVisible] = useState(true)

  /* --- AUTH STUFF NEEDED --- */
  // useEffect - will send a database call to look at your database "getAllUsers"
  // this will return an array of user objects
  // you can then check if the logged in user is in your db, probably using a find? - probably checking user.sub with the auth0_id in your db
  // you may need to add this column to your db
  // if that check return true - redirect to '/'
  // if false (not in your db) - stay on '/sign-up'

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
    <>
      {formVisible && (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="f_name">First name:</label>
            <input
              type="text"
              id="fName"
              name="f_name"
              onChange={handleChange}
            />
            <label htmlFor="l_name">Last name:</label>
            <input
              type="text"
              id="lName"
              name="l_name"
              onChange={handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
      {!formVisible && (
        <div className="form-container">
          <h1>Thank you for signing up!</h1>
            <button onClick={getGoogleCode}>Continue</button>
        </div>
      )}
    </>
  )
}

export default AddUser
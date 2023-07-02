import { ChangeEvent, FormEvent, useState } from 'react'
import * as UserModels from '../../models/users'
import { useAppDispatch } from '../hooks/hooks'
import * as actions from '../actions/users'

import '../client_utils/form-utils'

// Temp/hardcoded user id, will change when auth0 implemented
import { checkNewUserForm } from '../client_utils/form-utils'
import { Link } from 'react-router-dom'

function AddUser() {
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState({} as UserModels.New)
  const [formVisible, setFormVisible] = useState(true)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
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
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
            <label htmlFor="profile_image">Profile image URL:</label>
            <input
              type="text"
              id="profileImage"
              name="profile_image"
              onChange={handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
      {!formVisible && (
        <div className="form-container">
          <h1>Thank you for signing up!</h1>
          <Link to="/">
            <button>Continue</button>
          </Link>
        </div>
      )}
    </>
  )
}

export default AddUser

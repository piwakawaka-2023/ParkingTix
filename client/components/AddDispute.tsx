import { ChangeEvent, FormEvent, useState } from 'react'
import * as DisputeModels from '../../models/disputes'
import { useAppDispatch } from '../hooks/hooks'
import * as actions from '../actions/disputes'
import { useAuth0 } from '@auth0/auth0-react'

import '../client_utils/form-utils'

// Temp/hardcoded user id, will change when auth0 implemented
// import { userId } from './App'

import { checkNewDisputeForm } from '../client_utils/form-utils'
import { Link } from 'react-router-dom'
import { userId } from './App'

function AddDisputes() {
  const dispatch = useAppDispatch()
  const { getAccessTokenSilently } = useAuth0() //auth

  const [formData, setFormData] = useState({
    user_id: userId,
    status: 'New',
  } as DisputeModels.New)
  const [formVisible, setFormVisible] = useState(true)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()
    const token = await getAccessTokenSilently()
    // check everything is there, if not send alert
    if (checkNewDisputeForm(formData)) {
      dispatch(actions.addDisputeThunk(formData, token))
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
            <label htmlFor="dateIssued">Date issued:</label>
            <input
              type="date"
              id="dateIssued"
              name="date_issued"
              onChange={handleChange}
            />
            <label htmlFor="timeIssued">Time issued:</label>
            <input
              type="time"
              id="timeIssued"
              name="time_issued"
              onChange={handleChange}
            />
            <label htmlFor="infringement">Infringement Number:</label>
            <input
              type="number"
              id="infringement"
              name="infringement"
              onChange={handleChange}
            />
            <label htmlFor="registration">License Plate:</label>
            <input
              type="text"
              id="registration"
              name="registration"
              onChange={handleChange}
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              onChange={handleChange}
            />
            <label htmlFor="amount">Amount Due: $</label>
            <input
              type="number"
              id="amount"
              name="amount"
              onChange={handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
      {!formVisible && (
        <div className="form-container">
          <h1>Dispute Submitted!</h1>
          <p>These bastards won&apos;t get away with this.</p>
          <Link to="/disputes">
            <button>View my disputes</button>
          </Link>
        </div>
      )}
    </>
  )
}

export default AddDisputes

import { ChangeEvent, FormEvent, useState } from 'react'
import * as DisputeModels from '../../models/disputes'
import { useAppDispatch } from '../hooks/hooks'
import * as actions from '../actions/disputes'

function AddDisputes() {
  const [formData, setFormData] = useState({} as DisputeModels.New)

  const dispatch = useAppDispatch()

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(actions.addDisputeThunk(formData))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="dateIssued">Date issued:</label>
      <input
        type="text"
        id="DateIssued"
        name="DateIssued"
        onChange={handleChange}
      />
      <label htmlFor="infringement">Infringement Number:</label>
      <input
        type="number"
        id="infringement"
        name="infringement"
        onChange={handleChange}
      />
      <label htmlFor="registration">Registration Number:</label>
      <input
        type="text"
        id="registration"
        name="registration"
        onChange={handleChange}
      />
      <label htmlFor="timeIssued">Time issued:</label>
      <input
        type="text"
        id="timeIssued"
        name="timeIssued"
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
      <input type="number" id="amount" name="amount" onChange={handleChange} />
      newDispute
      <label htmlFor="payUp">This is how much I want to pay!</label>
      <input type="text" id="payUp" name="payUp" onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default AddDisputes

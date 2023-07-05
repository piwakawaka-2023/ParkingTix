import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import * as actions from '../actions/reviews'
import * as ReviewModels from '../../models/reviews'

export default function AddReviewsForm() {
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState({} as ReviewModels.ReviewObj)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()

    dispatch(actions.addReviewThunk(formData))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">:</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          onChange={handleChange}
        />

        <label htmlFor="review">:</label>
        <input type="text" id="review" name="review" onChange={handleChange} />

        <input type="submit" value="SUMBIT" />
      </form>
    </>
  )
}

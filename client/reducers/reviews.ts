import type * as ReviewModels from '../../models/reviews'
import {
  SET_REVIEW,
  ADD_REVIEW,
  DEL_REVIEW,
  UPD_REVIEW,
  ERROR,
  Action,
} from '../actions/reviews'

const initialState = [] as ReviewModels.ReviewObj[]

export default function reviewReducers(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_REVIEW:
      return payload

    // User id
    // compare that id to the state, and only keep the id's that don't match
    case DEL_REVIEW:
      return state.filter((review) => review.id !== payload)

    case ADD_REVIEW:
      return [payload, ...state]

    case UPD_REVIEW:
      return state.map((review) => {
        if (review.id === payload.id) {
          return { payload }
        }
        return review
      })

    case ERROR:
      return payload

    default:
      return state
  }
}

import type * as Models from '../../models/emails'
import { SET_EMAILS, ADD_EMAIL, ERROR, Action } from '../actions/emails'

const initialState = [] as Models.EmailObj[]

export default function userReducers(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_EMAILS:
      return payload

    case ADD_EMAIL:
      return [payload, ...state]

    case ERROR:
      return payload

    default:
      return state
  }
}

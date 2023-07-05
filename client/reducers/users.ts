import type * as Models from '../../models/users'
import {
  SET_USER,
  ADD_USER,
  DEL_USER,
  UPD_USER,
  ERROR,
  Action,
} from '../actions/users'

const initialState = [] as Models.UserObj[]

export default function userReducers(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_USER:
      return payload

    // User id
    // compare that id to the state, and only keep the id's that don't match
    case DEL_USER:
      return state.filter((user) => user.id !== payload)

    case ADD_USER:
      return [payload, ...state]

    case UPD_USER:
      return state.map((user) => {
        if (user.id === payload.id) {
          return { payload }
        }
        return user
      })

    case ERROR:
      return payload

    default:
      return state
  }
}

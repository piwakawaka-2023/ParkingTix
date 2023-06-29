//* ----------------------------- *//
//*
//*   Dispute Reducers
//*
//* ----------------------------- *//

//* ----------------------------- *//
//*   Imports
//* ----------------------------- *//
import type * as Models from '../../models/disputes'
import {
  ERROR,
  SET_DISPUTES,
  DEL_DISPUTES,
  ADD_DISPUTES,
} from '../actions/dispute'

//* ----------------------------- *//
//*   Variables
//* ----------------------------- *//
const initialState = [] as Models.DisputeObj[]
export type Action =
  | { type: typeof SET_DISPUTES; payload: Models.DisputeObj[] }
  | { type: typeof ADD_DISPUTES; payload: Models.New }
  | { type: typeof DEL_DISPUTES; payload: number }
  | { type: typeof ERROR; payload: string }

//* ----------------------------- *//
//*   Reducer Function
//* ----------------------------- *//
export default function disputeReducers(state =  id: number
  created_at: number
  user_id: number
  infringement: number
  registration: string
  date_issued: string
  time_issued: string
  location: string
  amount: number
  status: stringinitialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_DISPUTES:
      return payload

    case DEL_DISPUTES:
      return state.filter((dispute) => dispute.id !== payload)

    case ADD_DISPUTES:
      return [...state, payload]

    case ERROR:
      return payload

    default:
      return state
  }
}

//* ----------------------------- *//
//*
//*   Dispute Reducers
//*
//* ----------------------------- *//

//* ----------------------------- *//
//*   Imports
//* ----------------------------- *//
import type * as DisputeModels from '../../models/disputes'
import {
  ERROR,
  SET_DISPUTES,
  DEL_DISPUTE,
  ADD_DISPUTE,
  UPD_DISPUTE,
} from '../actions/disputes'

//* ----------------------------- *//
//*   Variables
//* ----------------------------- *//
const initialState = [] as DisputeModels.DisputeObj[]
export type Action =
  | { type: typeof SET_DISPUTES; payload: DisputeModels.DisputeObj[] }
  | { type: typeof ADD_DISPUTE; payload: DisputeModels.New }
  | { type: typeof DEL_DISPUTE; payload: number }
  | { type: typeof UPD_DISPUTE; payload: DisputeModels.DisputeObj }
  | { type: typeof ERROR; payload: string }

//* ----------------------------- *//
//*   Reducer Function
//* ----------------------------- *//
export default function disputeReducers(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_DISPUTES:
      return payload

    case DEL_DISPUTE:
      return state.filter((dispute) => dispute.id !== payload)

    case ADD_DISPUTE:
      return [...state, payload]

    case UPD_DISPUTE:
      return state.map((dispute) => {
        if (dispute.id === payload.id) {
          return { payload }
        }
        return dispute
      })

    case ERROR:
      return payload

    default:
      return state
  }
}

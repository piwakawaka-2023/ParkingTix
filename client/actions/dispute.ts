//* ----------------------------- *//
//*
//*   Dispute Actions
//*
//* ----------------------------- *//

//* ----------------------------- *//
//*   Imports
//* ----------------------------- *//
import type { ThunkAction } from '../store'
import * as Models from '../../models/disputes' // DisputeObj, New, Update
import { fetchDisputes, deleteDispute, postDispute } from '../apis/disputes'

//* ----------------------------- *//
//*   Variables
//* ----------------------------- *//
export const SET_DISPUTES = 'SET_DISPUTES'
export const ADD_DISPUTES = 'ADD_DISPUTES'
export const DEL_DISPUTES = 'DEL_DISPUTES'
export const ERROR = 'ERROR'

export type Action =
  | { type: typeof SET_DISPUTES; payload: Models.DisputeObj[] }
  | { type: typeof ADD_DISPUTES; payload: Models.New }
  | { type: typeof DEL_DISPUTES; payload: number }
  | { type: typeof ERROR; payload: string }

//* ----------------------------- *//
//*   Functions
//* ----------------------------- *//

//* Set Dispute Action
export function setDisputes(disputes: Models.DisputeObj[]): Action {
  return {
    type: SET_DISPUTES,
    payload: disputes,
  }
}

//* Delete Dispute Action
export function delDispute(id: number): Action {
  return {
    type: DEL_DISPUTES,
    payload: id,
  }
}

//* Add Dispute Action
export function addDispute(dispute: Models.New): Action {
  return {
    type: ADD_DISPUTES,
    payload: dispute,
  }
}

//* Error Action
export function error(message: string): Action {
  return {
    type: ERROR,
    payload: message,
  }
}

//* Get Dispute Thunk
export function getDisputes(): ThunkAction {
  return async (dispatch) => {
    try {
      const disputesArr = await fetchDisputes()
      dispatch(setDisputes(disputesArr))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

//* Delete Dispute Thunk
export function deleteDisputeThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await deleteDispute(id)
      dispatch(delDispute(id))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

//* Add Dispute Thunk
export function addDisputeThunk(dispute: Models.New): ThunkAction {
  return async (dispatch) => {
    try {
      const disputeData = await postDispute(dispute)
      dispatch(addDispute(disputeData))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

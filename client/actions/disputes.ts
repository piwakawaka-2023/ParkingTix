//* ----------------------------- *//
//*
//*   Dispute Actions
//*
//* ----------------------------- *//

//* ----------------------------- *//
//*   Imports
//* ----------------------------- *//
import type { ThunkAction } from '../store'
import * as DisputeModels from '../../models/disputes' // DisputeObj, New, Update
import * as api from '../apis/disputes'

import * as openaiActions from './openai'

//* ----------------------------- *//
//*   Variables
//* ----------------------------- *//
export const SET_DISPUTES = 'SET_DISPUTES'
export const ADD_DISPUTE = 'ADD_DISPUTE'
export const DEL_DISPUTE = 'DEL_DISPUTE'
export const UPD_DISPUTE = 'UPD_DISPUTE'
export const ERROR = 'ERROR'

export type Action =
  | { type: typeof SET_DISPUTES; payload: DisputeModels.DisputeObj[] }
  | { type: typeof ADD_DISPUTE; payload: DisputeModels.DisputeObj }
  | { type: typeof DEL_DISPUTE; payload: number }
  | { type: typeof UPD_DISPUTE; payload: DisputeModels.DisputeObj }
  | { type: typeof ERROR; payload: string }

//* ----------------------------- *//
//*   Functions
//* ----------------------------- *//

//* Set Dispute Action
export function setDisputes(disputes: DisputeModels.DisputeObj[]): Action {
  return {
    type: SET_DISPUTES,
    payload: disputes,
  }
}

//* Delete Dispute Action
export function delDispute(id: number): Action {
  return {
    type: DEL_DISPUTE,
    payload: id,
  }
}

//* Add Dispute Action
export function addDispute(dispute: DisputeModels.DisputeObj): Action {
  return {
    type: ADD_DISPUTE,
    payload: dispute,
  }
}

//* Update Dispute Action
export function updateDispute(dispute: DisputeModels.DisputeObj): Action {
  return {
    type: ADD_DISPUTE,
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

//--------------
// Thunkie Bois
//--------------

//* Get Disputes Thunk
export function getDisputes(userId: number): ThunkAction {
  return async (dispatch) => {
    try {
      const disputesArr = await api.fetchDisputes(userId)
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
      await api.deleteDispute(id)
      dispatch(delDispute(id))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}


//* Add Dispute Thunk (includes triggering openai to generate an appeal email)
export function addDisputeThunk(dispute: DisputeModels.New): ThunkAction {
  return async (dispatch) => {
    try {
      // post the new dispute to the db
      const disputeData = await api.postDispute(dispute)
      // add the new dispute (from db) to local store
      dispatch(addDispute(disputeData))

      // call the dispute function to return the users name
      const disputeUser = await api.fetchDisputeUserDetails(disputeData.id)
      // call the openai action to create an initial email
      dispatch(openaiActions.generateInitialEmail(disputeUser))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

//* Update Dispute Thunk
export function updateDisputeThunk(
  id: number,
  dispute: DisputeModels.Update
): ThunkAction {
  return async (dispatch) => {
    try {
      const disputeData = await api.updateDispute(id, dispute)
      dispatch(updateDispute(disputeData))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

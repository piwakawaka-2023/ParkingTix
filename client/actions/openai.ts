//* ----------------------------- *//
//*
//*   OpenAi Actions
//*
//* ----------------------------- *//

//* ----------------------------- *//
//*   Imports
//* ----------------------------- *//
import type { ThunkAction } from '../store'
import * as DisputeModels from '../../models/disputes' // DisputeObj, New, Update
import * as api from '../apis/openai'

import * as emailActions from './emails'
import { createNewEmailFromText } from '../client_utils/email-utils'

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

//* Generate intial email from a new dispute
export function generateInitialEmail(
  dispute: DisputeModels.DisputeUserDetails
): ThunkAction {
  return async (dispatch) => {
    try {
      // get the body text of the initial email
      const initialEmailText = await api.fetchInitialEmail(dispute)
      // call util function to create a new email object
      const email = createNewEmailFromText(dispute, initialEmailText, true)

      // send the initial email to the Gmail api here

      // call the add email thunk to post the new email to the db
      dispatch(emailActions.addEmailThunk(email))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

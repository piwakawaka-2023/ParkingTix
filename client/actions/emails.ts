import type { ThunkAction } from '../store'
import * as EmailModels from '../../models/emails'
import * as api from '../apis/users'

// * SIMPLE ACTIONS

export const SET_EMAILS = 'SET_EMAIL'
export const ADD_EMAIL = 'ADD_EMAIL'
export const ERROR = 'ERROR'

export type Action =
  | { type: typeof SET_EMAILS; payload: EmailModels.EmailObj }
  | { type: typeof ADD_EMAIL; payload: EmailModels.EmailObj }
  | { type: typeof ERROR; payload: string }

export function setEmail(email: EmailModels.EmailObj): Action {
  return {
    type: SET_EMAILS,
    payload: email,
  }
}

export function addEmail(email: EmailModels.EmailObj): Action {
  return {
    type: ADD_EMAIL,
    payload: email,
  }
}

export function error(message: string): Action {
  return {
    type: ERROR,
    payload: message,
  }
}

// * THUNKS

export function getEmail(emailId: number): ThunkAction {
  return async (dispatch) => {
    try {
      const email = await api.fetchEmailsByDisputeId(emailId)
      dispatch(setEmail(email))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

export function addEmailThunk(email: EmailModels.New): ThunkAction {
  return async (dispatch) => {
    try {
      const newEmail = await api.postEmail(email)
      dispatch(addEmail(newEmail))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

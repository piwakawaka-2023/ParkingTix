import type { ThunkAction } from '../store'
import * as EmailModels from '../../models/emails'
import * as api from '../apis/emails'
import { generateResponseEmail } from './openai'

// * SIMPLE ACTIONS

export const SET_EMAILS = 'SET_EMAILS'
export const ADD_EMAIL = 'ADD_EMAIL'
export const ERROR = 'ERROR'

export type Action =
  | { type: typeof SET_EMAILS; payload: EmailModels.EmailObj[] }
  | { type: typeof ADD_EMAIL; payload: EmailModels.EmailObj }
  | { type: typeof ERROR; payload: string }

export function setEmails(emails: EmailModels.EmailObj[]): Action {
  return {
    type: SET_EMAILS,
    payload: emails,
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

export function getEmails(userId: number): ThunkAction {
  return async (dispatch) => {
    try {
      const emails = await api.fetchEmailsByUserId(userId)
      dispatch(setEmails(emails))
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

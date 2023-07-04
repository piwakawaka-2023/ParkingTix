import type { ThunkAction } from '../store'
// import * as ReviewModels from '../../models/review'
// import * as api from '../apis/review'

// * SIMPLE ACTIONS

export const SET_REVIEW = 'SET_REVIEW'
export const ADD_REVIEW = 'ADD_REVIEW'
export const DEL_REVIEW = 'DEL_REVIEW'
export const UPD_REVIEW = 'UPD_REVIEW'
export const ERROR = 'ERROR'

export type Action =
  | { type: typeof SET_REVIEW; payload: ReviewModels.ReviewObj }
  | { type: typeof DEL_REVIEW; payload: number }
  | { type: typeof ADD_REVIEW; payload: ReviewModels.ReviewObj }
  | { type: typeof UPD_REVIEW; payload: ReviewModels.ReviewObj }
  | { type: typeof ERROR; payload: string }

export function setReview(review: ReviewModels.ReviewObj): Action {
  return {
    type: SET_REVIEW,
    payload: review,
  }
}

export function delReview(id: number): Action {
  return {
    type: DEL_REVIEW,
    payload: id,
  }
}

export function addReview(review: ReviewModels.ReviewObj): Action {
  return {
    type: ADD_REVIEW,
    payload: review,
  }
}

export function updateReview(review: ReviewModels.ReviewObj): Action {
  return {
    type: UPD_REVIEW,
    payload: review,
  }
}

export function error(message: string): Action {
  return {
    type: ERROR,
    payload: message,
  }
}

// * THUNKS

export function getReview(userId: number): ThunkAction {
  return async (dispatch) => {
    try {
      // call the api function, which will access our server and db
      // and will return the user that matches the given id
      const user = await api.fetchReview(userId)
      dispatch(setReview(user))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

export function deleteReviewThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.deleteReview(id) //go to api -> which heads to back end, updates db
      dispatch(delReview(id)) // dispatches the simple action -> reducer change state
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

export function addReviewThunk(review: ReviewModels.New): ThunkAction {
  return async (dispatch) => {
    try {
      const newReview = await api.postReview(review)
      dispatch(addReview(newReview))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

export function updateReviewThunk(
  id: number,
  review: ReviewModels.Update
): ThunkAction {
  return async (dispatch) => {
    try {
      const newReview = await api.patchReview(id, review)
      dispatch(updateReview(newReview))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}

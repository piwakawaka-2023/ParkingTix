import request from 'superagent'
import * as ReviewModels from '../../models/reviews'

const reviewsUrl = '/api/v1/reviews'

export async function fetchReviews(
  reviewId: number
): Promise<ReviewModels.ReviewObj[]> {
  const res = await request.get(`${reviewsUrl}/${reviewId}`)
  const reviews = res.body
  return reviews
}

export async function postReview(
  newReview: ReviewModels.New
): Promise<ReviewModels.ReviewObj> {
  const res = await request.post(reviewsUrl).send(newReview)
  const newReviewFromDb = res.body
  return newReviewFromDb
}

export async function updateReview(
  id: number,
  newReview: ReviewModels.Update
): Promise<ReviewModels.ReviewObj> {
  const res = await request.patch(`${reviewsUrl}/${id}`).send(newReview)
  const newReviewFromDb = res.body
  return newReviewFromDb
}

export async function deleteReview(id: number) {
  await request.delete(`${reviewsUrl}/${id}`)
}





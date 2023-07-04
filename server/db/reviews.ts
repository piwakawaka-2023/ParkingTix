import connection from './connection'
import * as ReviewModels from '../../models/reviews'

const db = connection

//GET
export function getAllReviews(): Promise<ReviewModels.ReviewObj[]> {
  return db('reviews').select('id', 'f_name as name', 'rating', 'review')
}

//POST
export function addReview(review: string): Promise<ReviewModels.New[]> {
  return db('reviews').insert(review).returning(['name', 'rating', 'review'])
}

// //UPDATE
export function updateReview(id: number, newReview: ReviewModels.Update) {
  const { f_name, rating, review } = newReview
  return db('reviews').update({ f_name, rating, review }).where({ id }).returning('*')
}

//DELETE
export function deleteReview(id: number): Promise<number> {
  return db('reviews').delete().where('id', id)
}

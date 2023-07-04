import connection from './connection'
import * as ReviewModel from '../../models/reviews'

const db = connection

//GET
export function getAllReviews(): Promise<ReviewModel[]> {
  return db('reviews').select('id', 'f_name as name', 'rating', 'reviews')
}

//POST
export function addReview(review: string): Promise<ReviewModel[]> {
  return db('reviews').insert(review).returning(['name', 'rating', 'review'])
}

// //UPDATE
export function updateReview(newReview: string, id: number) {
  return db('reviews').update({ rating: newReview }).where({ id: id })
}

//DELETE
export function deleteReview(id: number): Promise<number> {
  return db('reviews').delete().where('id', id)
}

import express from 'express'
import * as db from '../db/reviews'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const reviewsArr = await db.getAllReviews()
    res.json(reviewsArr)
  } catch (error) {
    console.error('Oh no, reviews route error', error)
    res.sendStatus(500)
  }
})
router.post('/', async (req, res) => {
  const review = req.body
  console.log('server route')
  const dbReview = {
    f_name: review.name,
    rating: review.rating,
    review: review.review,
  }
  try {
    const reviewFromDB = await db.addReview(dbReview)
    console.log(reviewFromDB)
    res.json(reviewFromDB[0])
  } catch (error) {
    ;('oh no post reviews route error')
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const newReview = req.body
  try {
    const reviewFromDb = await db.updateReview(id, newReview)
    res.json(reviewFromDb[0])
  } catch (err) {
    console.log('oh no update reviews route error', err)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteReview(id)
    res.sendStatus(200)
  } catch (error) {
    console.error('oh no delete reviews route error')
  }
})

export default router

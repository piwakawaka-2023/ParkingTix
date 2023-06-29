import express from 'express'
// import checkJwt, { JwtRequest } from '../auth0'
const router = express.Router()
import * as db from '../db/disputes'

router.get('/:userId', async (req, res) => {
  const user_id = +req.params.userId
  try {
    const disputes = await db.getDisputesByUserId(user_id)
    res.json(disputes)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    await db.delDispute(id)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  const dispute = req.body
  try {
    const newDispute = await db.addDispute(dispute)
    res.json(newDispute)
  } catch (err) {
    res.sendStatus(500)
  }
})

export default router

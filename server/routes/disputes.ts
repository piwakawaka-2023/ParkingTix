import express from 'express'
// import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()
import * as db from '../db/disputes'

router.post('/', async (req, res) => {
  const dispute = req.body
  console.log('postDispute server route', dispute)
  try {
    const newDispute = await db.addDispute(dispute)
    res.json(newDispute[0])
  } catch (err) {
    res.sendStatus(500)
  }
})

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

router.patch('/:id', async (req, res) => {
  const id = +req.params.id
  const dispute = req.body
  try {
    const newDispute = await db.updateDispute(id, dispute)
    res.json(newDispute[0])
  } catch (err) {
    res.sendStatus(500)
  }
})

// get dispute with user information
router.get('/details/:disputeId', async (req, res) => {
  const dispute_id = +req.params.disputeId
  try {
    const dispute = await db.getDisputeUserDetails(dispute_id)
    res.json(dispute[0])
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router

import express from 'express'
// import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()
import * as db from '../db/emails'

router.get('/:user_id', async (req, res) => {
  const id = +req.params.user_id
  try {
    const emails = await db.getEmailsByUserId(id)
    res.json(emails)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.get('/threads/:id', async (req, res) => {
  const id = +req.params.id
  try {
    const emails = await db.getEmailsByDisputeId(id)
    res.json(emails)
  } catch (error) {
    res.sendStatus(500)
  }
})


router.post('/', async (req, res) => {
  const email = req.body
  try {
    const newEmail = await db.addEmail(email)
    res.json(newEmail[0])
  } catch (err) {
    res.sendStatus(500)
  }
})

export default router

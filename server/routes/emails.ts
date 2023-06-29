import express from 'express'
// import checkJwt, { JwtRequest } from '../auth0'
const router = express.Router()
import * as db from '../db/db'

router.get('/:disputeId', async (req, res) => {
  const id = +req.params.disputeId
  try {
    const emails = await db.getEmails(id)
    res.json(emails)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  const email = req.body
  try {
    const newEmail = await db.addDispute(email)
    res.json(newEmail)
  } catch (err) {
    res.sendStatus(500)
  }
})
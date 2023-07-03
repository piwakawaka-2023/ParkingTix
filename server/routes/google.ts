import express, { Router } from 'express'
import request from 'superagent'
import {getAuthURL, getMessagesByThread, getToken, sendMail} from '../utils/google'

import path from 'path'
import dotenv from 'dotenv'
const envPath = path.join(__dirname, '../../.env')
dotenv.config({ path: envPath })

const router = express.Router()

router.get('/code', async (req, res, next) => {
  const redirect = await getAuthURL()
  res.send(redirect)
})

router.post('/code', async (req, res) => {
  const refToken = await getToken(req.body.code)
  res.send(refToken)
})

router.post('/thread', async (req, res) => {
  const threadId = req.body.threadId
  const emails = await getMessagesByThread(threadId)
  res.send(emails)
})

router.post('/send', async (req, res) => {
  const email = req.body.email
  const threadId = await sendMail(email)
})

export default router
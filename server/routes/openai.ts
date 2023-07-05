import express from 'express'
import request from 'superagent'
import {
  generatePromptFromDispute,
  generateThreadFromEmails,
  initialEmailInstructions,
  responseEmailInstructions,
} from '../utils/openai'

import path from 'path'
import dotenv from 'dotenv'
const envPath = path.join(__dirname, '../../.env')
dotenv.config({ path: envPath })

const router = express.Router()

// generate initial email
router.post('/initiate', (req, res) => {
  const dispute = req.body
  console.log(dispute)

  // take the full details and make a string to use as the prompt
  const prompt = generatePromptFromDispute(dispute)

  request
    .post('https://api.openai.com/v1/chat/completions')
    .set('Authorization', `Bearer ${process.env.OPEN_AI_KEY}`)
    .set('Content-Type', 'application/json')
    .send({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `${initialEmailInstructions}`,
        },
        {
          role: 'user',
          content: `${prompt}`,
        },
      ],
      temperature: 0.7,
    })
    .then((response) => {
      return res.json(response.body.choices[0].message.content)
    })
    .catch((err) => console.log('OPEN AI API ERR: ', err.message))
})

// generate reply email
router.post('/response', (req, res) => {
  const emails = req.body

  // take the array of emails and turn it into an array fitting the 'messages' format below
  const prompt = generateThreadFromEmails(emails)

  const messages = [
    {
      role: 'user',
      content: `${responseEmailInstructions}`,
    },
    ...prompt,
  ]

  request
    .post('https://api.openai.com/v1/chat/completions')
    .set('Authorization', `Bearer ${process.env.OPEN_AI_KEY}`)
    .set('Content-Type', 'application/json')
    .send({
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7,
    })
    .then((response) => {
      return res.json(response.body.choices[0].message.content)
    })
    .catch((err) => console.log('OPEN AI API ERR: ', err.message))
})

export default router

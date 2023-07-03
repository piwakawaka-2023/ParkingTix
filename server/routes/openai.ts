import express from 'express'
import request from 'superagent'
import { generatePromptFromDispute } from '../utils/openai'

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
          content: `Write an email to the Wellington City Council (New Zealand) to appeal a parking ticket. The ticket details will be sent in my next message. Please explain that there are extraordinary circumstances that warrant, in due fairness, a waiver of the fee. Provide a plausible and defensible reason for this. Be imaginative, but within reality. Don't use serious emergency events as the reason. Do not claim to have attached any documents to the email, and do not make an offer to provide any documents to support the appeal. Keep the email brief (4 or fewer paragraphs). Write only the email body text (no subject line etc). Do not include any square brackets for information I don't provide you. Don't copy out all the ticket details.`,
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

export default router

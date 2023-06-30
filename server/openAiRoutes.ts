import express from 'express'
import request from 'superagent'

import 'dotenv/config'

const router = express.Router()

router.post('/emailresponse', (req, res) => {
  // const prompt =  req.body

  request
    .post('https://api.openai.com/v1/chat/completions')
    .set('Authorization', `Bearer ${process.env.OPEN_AI_KEY}`)
    .set('Content-Type', 'application/json')
    .send({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Hi how are you`,
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

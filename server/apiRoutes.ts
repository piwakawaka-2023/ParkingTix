import express from 'express'
import request from 'superagent'

import 'dotenv/config'

const router = express.Router()


//line 12 to have the name of const
//line 11 name of route
router.post('/users', (req,res)=>{
  // const info =  req.body.param
  
  request
  .post('https://api.openai.com/v1/chat/completions')
  .set('Authorization',  `Bearer ${process.env.OPEN_AI_KEY}`)
  .set('Content-Type', 'application/json')
  // .message:[{

  // }]


})


export default router


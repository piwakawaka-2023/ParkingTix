import express from 'express'
import path from 'path'

import users from './routes/users'
import disputes from './routes/disputes'
import emails from './routes/emails'
import router from './routes/openAiRoutes'
import googleRoutes from './routes/google'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/users', users)
server.use('/api/v1/disputes', disputes)
server.use('/api/v1/emails', emails)
server.use('/api/v1/openAI', router)
server.use('api/v1/googleAuth', googleRoutes)

export default server

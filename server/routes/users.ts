import express from 'express'
// import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()
import * as db from '../db/users'

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers()
    res.json(users)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    const user = await db.getUserById(id)
    res.json(user[0])
  } catch (error) {
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    await db.delUser(id)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  const userData = req.body
  try {
    const newUser = await db.addUser(userData)
    res.json(newUser[0])
  } catch (err) {
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  const id = +req.params.id
  const userEdit = req.body
  try {
    const newUser = await db.updateUser(id, userEdit)
    res.json(newUser)
  } catch (err) {
    res.sendStatus(500)
  }
})

router.patch('/refToken', async (req, res) => {
  const authId = req.body.authId
  const refToken = req.body.refToken
  await db.setRefToken(authId, refToken)
})

router.post('/userId', async (req, res) => {
  const authId = req.body.authId
  console.log('db route', authId)
  const userId = await db.getUserId(authId)
  res.send(userId)
})

export default router
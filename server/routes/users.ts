import express from 'express'
// import checkJwt, { JwtRequest } from '../auth0'
const router = express.Router()
import * as db from '../db/db'

router.get('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    const user = await db.getUser(id)
    res.json(user)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    await db.deleteUser(id)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  const userData = req.body
  try {
    const newUser = await db.addUser(userData)
    res.json(newUser)
  } catch (err) {
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  const id = +req.params.id
  const userEdit = req.body
  try {
    await db.updateUser(id, userEdit)
    res.sendStatus(200)
  } catch (err) {
    res.sendStatus(500)
  }
})
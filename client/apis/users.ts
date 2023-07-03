import request from 'superagent'
import * as UserModels from '../../models/users'

const userUrl = '/api/v1/users'

export async function fetchAllUsers(): Promise<UserModels.UserObj[]> {
  const res = await request.get(userUrl)
  const users = res.body
  return users
}

export async function fetchUser(userId: number): Promise<UserModels.UserObj> {
  const res = await request.get(`${userUrl}/${userId}`)
  const user = res.body
  return user
}

export async function postUser(
  newUser: UserModels.New
): Promise<UserModels.UserObj> {
  const res = await request.post(userUrl).send(newUser)
  const newUserFromDb = res.body
  return newUserFromDb
}

export async function patchUser(
  id: number,
  newUser: UserModels.Update
): Promise<UserModels.UserObj> {
  const res = await request.patch(`${userUrl}/${id}`).send({ user: newUser })
  const newUserFromDb = res.body
  return newUserFromDb
}

export async function deleteUser(id: number) {
  await request.delete(`${userUrl}/${id}`)
}

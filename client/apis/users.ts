import request from 'superagent'
import * as UserModels from '../../models/users'

const userUrl = '/api/v1/users'

export async function fetchAllUsers(): Promise<UserModels.UserObj> {
  const res = await request.get(userUrl)
  const users = res.body
  return users
}

export async function fetchUser(
  userId: number,
  token: string //auth
): Promise<UserModels.UserObj> {
  const res = await request
    .get(`${userUrl}/${userId}`)
    .set('Authorization', `Bearer${token}`) //auth
  const user = res.body
  return user
}

export async function postUser(
  newUser: UserModels.New,
  token: string //auth
): Promise<UserModels.UserObj> {
  const res = await request
    .post(userUrl)
    .set('Authorization', `Bearer${token}`) //auth
    .send(newUser)
  const newUserFromDb = res.body
  return newUserFromDb
}

export async function patchUser(
  id: number,
  newUser: UserModels.Update,
  token: string //auth
): Promise<UserModels.UserObj> {
  const res = await request
    .patch(`${userUrl}/${id}`)
    .set('Authorization', `Bearer${token}`) //auth
    .send({ user: newUser })
  const newUserFromDb = res.body
  return newUserFromDb
}

export async function deleteUser(
  id: number,
  toke: string //auth
) {
  await request
    .delete(`${userUrl}/${id}`)
    .set('Authorization', `Bearer${token}`) //auth
}

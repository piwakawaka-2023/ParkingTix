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
<<<<<<< HEAD
=======

>>>>>>> 091e068d7dc274862fbf2af19848723c399f9e10
  const user = res.body
  return user
}

export async function postUser(
  newUser: UserModels.New
): Promise<UserModels.UserObj> {
<<<<<<< HEAD
  const res = await request.post(userUrl).send(newUser)
=======
  const res = await request
    .post(userUrl)

    .send(newUser)
>>>>>>> 091e068d7dc274862fbf2af19848723c399f9e10
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

<<<<<<< HEAD
export async function deleteUser(id: number) {
  await request.delete(`${userUrl}/${id}`)
=======
export async function deleteUser(
  id: number,
  token: string //auth
) {
  await request
    .delete(`${userUrl}/${id}`)
    .set('Authorization', `Bearer${token}`) //auth
>>>>>>> 091e068d7dc274862fbf2af19848723c399f9e10
}

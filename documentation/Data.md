### Data shapes / Interfaces

```js
UserData {
  id: number
  name: string
  created_at: number
  profile_image: string
  email: string
}
```

```js
disputes {
  id: integer
  created_at: timestamp
  user_id: integer
  infringement: number
  registration: string
  date_issued: date
  time_issued: string
  location: string
  amount: number
  status: string
}
```


```js
 emails {
  id: integer
  created_at: timestamp
  dispute_id: integer
  content: string
}
```
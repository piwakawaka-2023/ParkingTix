# Data shapes / Interfaces

## Models, naming conventions

Models will be imported using the following convention:

use namespace with 'Models' suffix
```js
import * as UserModels from '../models/users'
import * as DisputeModels from '../models/disputes'
```

Interfaces use 'Obj', 'New', 'Update':
```js
UserModels.UserObj
UserModels.New
UserModels.Update
```

## Basic Models for Internal api:

```js
UserData {
  id: number
  created_at: number
  f_name: string
  l_name: string
  profile_image: string
  email: string
}
```

```js
disputes {
  id: integer
  created_at: integer
  user_id: integer
  infringement: integer
  offence: string
  registration: string
  date_issued: string
  time_issued: string
  location: string
  amount: integer
  status: string
}
```

Valid statuses:
```js
['New', 'Pending Response', 'In Progress', 'Paused', 'In Progress (User Override)', 'Appeal Failed', 'Resolved']
```


```js
 emails {
  id: integer
  created_at: integer
  dispute_id: integer
  user_id: integer
  from: string
  content: string
}
```

## OpenAi api

Model of 'DisputeUserDetails'. This is used for generating an initial appeal email, and contains ticket details, plus the users' name. It is returned from the 'fetchDisputeUserDetails' api function in apis>disputes
```js
  infringement: number
  registration: string
  offence: string
  date_issued: string
  time_issued: string
  location: string
  amount: number
  f_name: string
  l_name: string

```
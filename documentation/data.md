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

## Objects

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

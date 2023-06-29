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
  created_at: number
  name: string
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
  content: string
}
```

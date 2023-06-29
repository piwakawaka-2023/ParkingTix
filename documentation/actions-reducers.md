### Simple Actions:

# Actions Disputes:
SET_DISPUTES
DEL_DISPUTE
ADD_DISPUTE

# Reducers Disputes:
disputesReducer()

# Actions Users:
SET_USERS
DEL_USER
ADD_USER
UPD_USER

# Reducers Users:
usersReducer()

# Actions Emails:
SET_EMAILS
ADD_EMAIL

# Reducers Emails:
emailsReducer()

### Thunk Actions:

## External apis:

# OpenAI api:
GENERATE_EMAIL
GENERATE_RESPONSE

# Gmail api:
GET_INBOX
SEND_EMAIL

## Internal api: (These will only get information relevant to the given user)

# Actions Users:
GET_USER
DEL_USER
ADD_USER
UPD_USER

# Actions Disputes:
GET_DISPUTES
DEL_DISPUTE
ADD_DISPUTE

# Actions Emails:
GET_EMAILS
ADD_EMAIL
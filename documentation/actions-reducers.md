# Simple Actions:

### Actions Disputes:
SET_DISPUTES
DEL_DISPUTE
ADD_DISPUTE
UPD_DISPUTE

### Reducers Disputes:
disputesReducers()

### Actions Users:
SET_USERS
DEL_USER
ADD_USER
UPD_USER

### Reducers Users:
usersReducers()

### Actions Emails:
SET_EMAILS
ADD_EMAIL

### Reducers Emails:
emailsReducers()

# Thunk Actions:

## External apis:

### OpenAI api:
GENERATE_EMAIL

### Gmail api:
GET_INBOX
SEND_EMAIL

## Internal api: (These will only get information relevant to the given user)

### Actions Users:
GET_USER
DEL_USER
ADD_USER
UPD_USER

### Actions Disputes:
GET_DISPUTES
DEL_DISPUTE
ADD_DISPUTE
UPD_DISPUTE

### Actions Emails:
GET_EMAILS
ADD_EMAIL
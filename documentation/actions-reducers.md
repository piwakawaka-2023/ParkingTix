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
Each of these actions will send different text prompts (and take different input) to the gpt api;
- 'Generate Email' is for the first email when a dispute is initiated
- 'Generate Response' is for replying to responses from the council
- 'Generate Resolution' is for sending a thankyou email if the fine is waived
- 'Generate Concession' is for sending an email to concede, and saying you'll pay the fine

GENERATE_EMAIL
GENERATE_RESPONSE
GENERATE_RESOLUTION
GENERATE_CONCESSION

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